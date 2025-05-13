import React from "react";
import myKalb from "../assets/kalb.jpg";

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={myKalb} alt="Bootstrap" width="30" height="24" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
