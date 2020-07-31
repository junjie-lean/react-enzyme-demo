import React from "react";
import {
  HashRouter as Router,
  Route,
  // Switch,
} from "react-router-dom";

import { AnimatedSwitch as Switch } from "react-router-transition";
import LayoutIndex from "./../page/layout-index";

export default function RouterRelation() {
  // console.log("router");
  return (
    <Router basename="/">
      <Switch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={LayoutIndex} />
      </Switch>
    </Router>
  );
}
