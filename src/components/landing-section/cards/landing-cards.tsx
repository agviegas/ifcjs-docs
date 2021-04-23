import "./landing-cards.css";
import speed from "../../../assets/iconmonstr-time-19.svg";
import multiplatform from "../../../assets/iconmonstr-smartphone-16.svg";
import plugandplay from "../../../assets/iconmonstr-product-3.svg";
import paperplane from "../../../assets/iconmonstr-paper-plane-2.svg";

const LandingCards = () => {
  return (
    <div>
      <div className="landing-cards">
        <div className="landing-card">
          <img className="landing-icon" alt="speed icon" src={speed}></img>
          <h2>Native speed</h2>
          <p>
            The IFC.js parsing engine is based on WebAssembly and C++, and is
            specifically designed to read data from large files as fast as a
            desktop application.
          </p>
        </div>
        <div className="landing-card">
          <img
            className="landing-icon"
            alt="multiplatform icon"
            src={multiplatform}
          ></img>
          <h2>Multiplatform</h2>
          <p>
            IFC.js is compatible with any platform: web application (frontend
            and backend), desktop applications (Windows, Mac and Linux) and
            mobile applications (Android and iOS).
          </p>
        </div>
        <div className="landing-card">
          <img
            className="landing-icon"
            alt="plugandplay icon"
            src={plugandplay}
          ></img>
          <h2>Plug and Play</h2>
          <p>
            With IFC.js it is possible to create open BIM applications in less
            than 100 lines of JavaScript, without needing to know how the
            internals of the IFC schema work. Focus your efforts on what brings
            value to your business.
          </p>
        </div>
        <div className="landing-card">
          <img
            className="landing-icon"
            alt="paperplane icon"
            src={paperplane}
          ></img>
          <h2>Lightweight</h2>
          <p>
            An open BIM application created with IFC.js can weigh less than 1
            MB. This library allows the creation of web and native applications
            with almost no impact on the final weight of the application.
          </p>
        </div>
      </div>
      <p className="license">Mozilla Public License 2.0 | Copyright © 2021</p>
    </div>
  );
};

export default LandingCards;
