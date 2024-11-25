import React from 'react'

const SampleFunction = (props) => {
    const {handleClick} = props
  return (
    <div>
      <p>This is a functional component</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default SampleFunction
