import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { homeRoutes } from "./index";

const Routes = () => (
  <Router>
    <Switch>
      {homeRoutes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);

export default Routes;
