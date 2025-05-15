import React from 'react'

const CountControl = ({countHandler}) => {
  return (

<button type="button" onClick={countHandler}>from child Add</button>
)
}

export default CountControl