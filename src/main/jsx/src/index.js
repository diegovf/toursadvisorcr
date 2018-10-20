import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css?v=1.2.0";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((route, key) => {
        return (
          <Route
            path={route.path}
            key={key}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);

// keep dyno up, ping itself every 25 min
const noop = () => {};
setInterval(() => {
  fetch("/")
    .then(noop)
    .catch(noop);
}, 25 * 60000);
