import React from 'react'

const UserImg = (props) => {
  return (
    <div>
      <img
        src={props.imgUrl}
        alt={props.name}
        className="w2 br2"
      />
    </div>
  )

}

export default UserImg
