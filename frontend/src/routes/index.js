import React from "react";
import { Switch, withRouter } from "react-router-dom";

import Inicio from "../pages/dashboard";
import Cliente from "../pages/cliente";

import ConfigRoute from "./config";

const Routes = () => (
  <Switch>
    <ConfigRoute exact path="/" component={Inicio} />
    <ConfigRoute exact path="/clientes" component={Cliente} />
  </Switch>
);

export default withRouter(Routes);
