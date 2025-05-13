import React from "react";
import styles from "./User.module.css";
const User = (props) => {
  return (
    <>
      <div className={styles.myContainer}>
        <h1 id={"ahmed"}>{props.userName || "unknown"}</h1>
        <h3>{`${props.age || 20} years Old`}</h3>
        <p>{`he is a ${props.job || "major"} `}</p>
      </div>
    </>
  );
};

export default User;
