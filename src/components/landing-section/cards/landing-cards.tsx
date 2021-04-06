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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            illo, voluptatem quos sint, corporis consequatur, ipsum nihil iure
            ut minus{" "}
          </p>
        </div>
        <div className="landing-card">
        <img className="landing-icon" alt="multiplatform icon" src={multiplatform}></img>
          <h2>Multiplatform</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            illo, voluptatem quos sint, corporis consequatur, ipsum nihil iure
            ut minus{" "}
          </p>
        </div>
        <div className="landing-card">
        <img className="landing-icon" alt="plugandplay icon" src={plugandplay}></img>
          <h2>Plug and Play</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            illo, voluptatem quos sint, corporis consequatur, ipsum nihil iure
            ut minus{" "}
          </p>
        </div>
        <div className="landing-card">
        <img className="landing-icon" alt="paperplane icon" src={paperplane}></img>
          <h2>Lightweight</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            illo, voluptatem quos sint, corporis consequatur, ipsum nihil iure
            ut minus{" "}
          </p>
        </div>
      </div>
      <p className="license">Mozilla Public License 2.0 | Copyright © 2021</p>
    </div>
  );
};

export default LandingCards;
