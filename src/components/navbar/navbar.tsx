import {NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import routes from "../../routes";
import "./navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
        <img className="navbar-logo" src={logo} alt="logo"></img>
        <NavLink className="align-left" to="/">IFC.js</NavLink>
        <NavLink activeClassName="active-link" to={routes.intro}>Intro</NavLink>
        <NavLink activeClassName="active-link" to={routes.guide}>Guide</NavLink>
        <a href={routes.community} rel="noreferrer" target="_blank">Community</a>
    </div>
  );
};

export default Navbar;
