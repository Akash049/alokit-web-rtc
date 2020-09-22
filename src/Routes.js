import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import history from "./history";
import Video from "./Video/Video";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Video" component={Video} />
        </Switch>
      </Router>
    );
  }
}
