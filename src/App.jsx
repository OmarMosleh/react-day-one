import React, { useState } from "react";
import NavBar from "./components/NavBar";
import User from "./components/User";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSecondes] =useState(0)
  const [userName, setUserName] =useState("omar")
  useEffect(() => {
    console.log("hello from effect");
  },[]);



  useEffect(()=>{
    const interval =setInterval(()=>{
        setSecondes((prevSeconds)=> prevSeconds + 1)
    },1000)

    return () => clearInterval(interval); // to stop the interval when the component unmount
  },[])
  // without [] ==> with each rerender --not recommended
  // with [] ==> with first rerender Only --ex. get allusers
  // with [dependency] ==> whenever this dependency change 


  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>{userName}</h1>
      <button onClick={increaseCount}>increase count</button>
      <h1>Hello effect</h1>
      <h1>{count}</h1>
      <h1>Seconds : {seconds}</h1>
    </>
  );
}

export default App;
