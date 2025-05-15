import React from 'react'
import { useState } from 'react'
import CountControl from './CountControl';
import Fruits from './Fruits';
const User = () => {
const [job, setJob] = useState("software Engineer")
const [count, setCount] = useState(5);
const plusFun =() =>{
  setCount((hamada)=> hamada + 1)
}
// hamada is prevCount
const changeJob = ()=>{
  setJob("lawyer")
}
  return (
    <>

    <h1>{job}</h1>
    <div style={{fontSize: "50px"}}>{count}</div>
    <button type="button" onClick={changeJob}>chang job</button>
<CountControl countHandler={plusFun} />    
    <hr />
    <Fruits />
    </>
  )
}

export default User

