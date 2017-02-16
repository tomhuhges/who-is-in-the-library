import React from 'react'
import firebase from 'firebase'
import UserInfo from '../UserInfo'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: 'https://i1.wp.com/www.megantaylor.org/wp-content/uploads/github.png?resize=100%2C100',
      name: 'Github User'
    }
    if (props.auth) {
      this.getUserData(props.UID)
    }
  }
  getUserData(uid) {
    const self = this
    const usersRef = firebase.database().ref('users');
    usersRef.on('value', function(snapshot) {
      if (snapshot.hasChild(uid)){
        self.setState({
          imgUrl: snapshot.child(uid + '/photoUrl').val(),
          name: snapshot.child(uid + '/name').val()
        })
      }
    });
  }
  render() {
    return (
      <div className="header flex fixed flex-column flex-row-ns items-end items-center-ns justify-between w-100 shadow-1 bg-purple z-2">
        <h1 className="ph4 f3">Who Is In The Library?</h1>
        { this.props.auth ? (
          <div className="flex items-center ph4">
            <UserInfo {...this.state}/>
            <a href="#" className="link white" onClick={this.props.signOut}>Sign out</a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

export default Header
