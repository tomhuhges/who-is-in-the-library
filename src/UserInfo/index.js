import React from 'react'
import UserImg from './UserImg'
import UserName from './UserName'

const UserInfo = (props) => (
  <div className="flex items-center">
    <UserImg {...props}/>
    <UserName name={props.name} />
  </div>
)

export default UserInfo
