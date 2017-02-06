import React from 'react'
import List from './List'
import Signup from '../Signup'

const Main = (props) => {
  return props.auth ? (
    <div>
      <List currentUser={props.UID}/>
    </div>
  ) : (
    <Signup signIn={props.signIn} />
  )
}

export default Main
