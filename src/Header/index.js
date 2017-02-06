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
    const usersRef = firebase.database().ref('users/' + uid);
    usersRef.on('value', function(snapshot) {
      self.setState({
        imgUrl: snapshot.val().photoUrl,
        name: snapshot.val().name
      })
    });
  }
  render() {
    return (
      <div className="header flex fixed flex-column flex-row-ns items-end items-center-ns justify-between w-100 h4 h3-l shadow-1 bg-purple">
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
