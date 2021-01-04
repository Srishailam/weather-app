import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

export default () => (
  <main>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/forecast" component={Home} />
    </Switch>
  </main>
);
