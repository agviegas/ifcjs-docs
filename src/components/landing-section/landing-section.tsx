import LandingCards from "./cards/landing-cards";
import LandingCover from "./cover/landing-cover";
import "./landing-section.css";

const LandingSection = () => {
  return (
    <div className="landing-page">
      <LandingCover/>
      <LandingCards/>
    </div>
  );
};

export default LandingSection;
