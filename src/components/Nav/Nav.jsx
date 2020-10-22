import React from "react";
import styles from "./Nav.css";
import { study } from "../../images";

function Nav() {
  return (
    <div className="section-navbar col-12">
      <div className="logo">
        <img src={study} alt="study smart" />
      </div>
      <div className="nav-links">
        <a className="active" href="/home">
          Home
        </a>
        <a href="/collection">Collection</a>
        <a href="/pricing">Pricing</a>
        <a href="/sign-in">Sign-in</a>
      </div>
    </div>
  );
}

export default Nav;
