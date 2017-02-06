import React from 'react'
import EditableStatus from './EditableStatus'

const SubList = (props) => {
  const color = props.status === "Going" ? "green"
  : props.status === "Maybe Going" ? "yellow"
  : "red"
  const border = props.status === "Going" ? "washed-green"
  : props.status === "Maybe Going" ? "washed-yellow"
  : "washed-red"
  return (
    <div className="flex w-100 items-start">
      <ul className="list ma0 pa0 w-100">
        {props.attendees.map(attendee=>(
          <li
            key={attendee.name}
            className={"flex items-center justify-between bg-white dark-gray ph4 pv2 tc bb bw3 b--" + border}>
            <div className="flex items-center">
              <img className="h2 w2 br2" src={attendee.photoUrl} alt={attendee.name} />
              <p className="ph2">{ attendee.name === props.currentUser ? 'You' : attendee.name}</p>
            </div>
            {attendee.name === props.currentUser ? (
              <EditableStatus uid={props.uid} status={props.status} color={color}/>
            ) : (
              <p className={color + " b ph2 "}>{props.status}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )

}

export default SubList
