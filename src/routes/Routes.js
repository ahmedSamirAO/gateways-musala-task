import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { homeRoutes } from "./index";
import Default from "../layouts/default";

const Routes = () => (
  <Router>
    <Switch>
      {homeRoutes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact
          render={(props) => (
            <Default>
              <route.component {...props} />
            </Default>
          )}
        />
      ))}

      <Redirect exact to="/gateway" />
    </Switch>
  </Router>
);

export default Routes;
