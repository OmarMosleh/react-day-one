import React, { Children } from "react";
import styles from "./User.module.css";
const User = ({ age, job, userName, handleParentFun , children}) => {

const sayHi = (name)=>{
  console.log(`Hiii ${name}`)
}

  return (
    <>
      <div className={styles.myContainer}>
        <h1 id={"ahmed"}>{userName || "unknown"}</h1>
        {children}
        <h3>{`${age || 20} years Old`}</h3>
        <p>{`he is a ${job || "major"} `}</p>
      <button type="button" onClick={handleParentFun} >click me</button>
      </div>
    </>
  );
};

export default User;
