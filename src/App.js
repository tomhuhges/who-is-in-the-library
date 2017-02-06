import React, { Component } from 'react';
import * as firebase from 'firebase'
import './App.css';
import Loading from './Loading'
import Header from './Header'
import Main from './Main'

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      UID: null,
      loading: true
    }
    this.signOut = this.signOut.bind(this)
    firebase.auth().getRedirectResult().then(function(result) {
      const user = result.user
      if (user) {
        const db = firebase.database()
        db.ref('users/' + user.uid).once('value').then(function(snapshot){
          if (!snapshot.val().name) {
            db.child(user.uid).set({
              name: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
              attendance: 0
            })
          }
        })
      }
    })
  }
  componentDidMount() {
    const self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        user = firebase.auth().currentUser;
        if (user != null) {
          self.setState({
            auth: true,
            UID: user.uid,
            loading: false
          })
        }
      } else {
        self.setState({
          loading: false
        })
      }
    })
  }
  signIn() {
    const provider = new firebase.auth.GithubAuthProvider();
    // provider.addScope('read:org');
    firebase.auth().signInWithRedirect(provider);
  }
  signOut(e) {
    e.preventDefault()
    const self = this
    firebase.auth().signOut().then(function() {
      self.setState({
        auth: false,
        UID: null,
        loading: false
      })
    }, function(err) {
      console.log(err)
    });
  }
  render() {
    return (
      <div className="App code flex justify-center bg-purple white">
        <div className="w-100">
          {this.state.loading ? (
            <Loading />
          ) : (
            <div>
              <Header {...this.state} signIn={this.signIn} signOut={this.signOut} />
              <Main {...this.state} signIn={this.signIn} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
