import React, { Fragment } from "react";
import "../styles/home.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="nav-bar navbar-dark bg-dark">
        <a type="button" className="btn btn-outline-light btn-sm" href="/home">
          {" "}
          HOME
        </a>
        <a type="button" className="btn btn-outline-light btn-sm">
          {" "}
          FAVORITES
        </a>
        <a href="/" type="button" className="btn btn-outline-light btn-sm">
          Sign Out
        </a>
      </nav>
    </Fragment>
  );
};
export default NavBar;
