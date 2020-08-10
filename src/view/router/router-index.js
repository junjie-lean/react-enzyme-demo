/*
 * @Author: junjie.lean
 * @Date: 2020-08-10 10:26:41
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-08-10 10:27:25
 */

import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// import { AnimatedSwitch as Switch } from "react-router-transition";
import LayoutIndex from "./../page/layout-index";
import LayoutMock from "./../page/layout-mock";


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
        <Route exact path="/mock" component={LayoutMock} />
      </Switch>
    </Router>
  );
}
