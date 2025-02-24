/*!

=========================================================
* Material Kit PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import { GoogleAnalyticsProvider } from "./components/Contexts/GoogleAnalyticsContext";

var hist = createBrowserHistory();

ReactDOM.render(
  <GoogleAnalyticsProvider>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={EcommercePage} />
      </Switch>
    </Router>
  </GoogleAnalyticsProvider>,
  document.getElementById("root")
);
