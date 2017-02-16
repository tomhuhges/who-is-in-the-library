import React from 'react'

const Display = (props) =>
  <div className="flex items-center justify-center w-100 w-70-l pv6 mt4 ph6-ns tc">
    <h1 className="f2 f-subheadline-l lh-headline">
      {props.message}
    </h1>
  </div>

export default Display
