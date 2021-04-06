import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import routes from "../../../routes";
import "./landing-cover.css";

const LandingCover = () => {
  return (
    <div className="landing-cover">
      <img className="landing-logo" src={logo} alt="asdf"></img>
      <h1 className="centered">IFC.js</h1>
      <h2 className="centered">IFC toolkit for JavaScript</h2>
      <Link className="landing-button" to={routes.intro}>Get started</Link>
    </div>
  );
};

export default LandingCover;
