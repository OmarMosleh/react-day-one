import React from "react";
import NavBar from "./components/NavBar";
import User from "./components/User";

function App() {
  const setData = () =>{
    console.log("data")
  }
  
  return (
    <>

      <NavBar />
      <User userName={"omar"} age={30} job={"software Engineer"} handleParentFun={setData} />
      <User userName={"ahmed"} age={25} job={"lawyer"}>
        <NavBar />
      </User>

      <User userName={"kareem"} age={100} job={"Doctor"}>
        <h1 style={{ color: "red" }}>hello I am Your Child </h1>
      </User>
    </>
  );
}

export default App;
