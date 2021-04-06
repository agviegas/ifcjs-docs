import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import routes from "../../routes";
import "./navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
        <img className="navbar-logo" src={logo} alt="logo"></img>
        <Link className="align-left" to="/">IFC.js</Link>
        <Link to={routes.intro}>Intro</Link>
        <Link to={routes.guide}>Guide</Link>
        <a href={routes.community} rel="noreferrer" target="_blank">Community</a>
    </div>
  );
};

export default Navbar;
