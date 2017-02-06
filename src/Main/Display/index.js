import React from 'react'

const Display = (props) =>
  <div className="flex items-center justify-center w-100 w-70-l pv7 ph6-ns tc">
    <h1 className="f-2 f-subheadline-l lh-headline">
      {props.message}
    </h1>
  </div>

export default Display
