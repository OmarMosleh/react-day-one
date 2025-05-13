import React from "react";
import NavBar from "./components/NavBar";
import User from "./components/User";

function App() {

  return (
    <>
    <NavBar />
    <User userName={"omar"} age={30} job={"software Engineer"} />
    <User userName={"ahmed"} age={25} job={"lawyer"} />
    <User userName={"kareem"} age={100} job={"Doctor"} />
  
    <User />
    </>
  );
}

export default App;
