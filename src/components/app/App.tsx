import "./App.css";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from "react-router";
import routes from "../../routes";
import Navbar from "../navbar/navbar";
import LandingSection from "../landing-section/landing-section";
import IntroSection from "../intro-section/intro-section";
import GuideSection from "../guide-section/guide-section";
import Sidebar from "../sidebar/sidebar";
import React, { useEffect } from "react";

const App : React.FC<RouteComponentProps> = ({ history }) => {

  useEffect(() => { 
    resetScrollPositionUp(history);
  });

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path={routes.intro} component={IntroSection} />
        <Route path={routes.guide} component={GuideSection} />
        <Route path={routes.home} exact component={LandingSection} />
        <Redirect to={routes.home} />
      </Switch>
    </div>
  );
}

function resetScrollPositionUp(history : any){
  const unlisten = history.listen(() => {
    window.scrollTo(0, 0);
  });
  return () => {
    unlisten();
  }
}

export default withRouter(App);
