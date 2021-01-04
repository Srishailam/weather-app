import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <nav>
    <NavLink activeClassName="active" to="/" exact>
      Home
    </NavLink>
    <NavLink activeClassName="active" to="/forecast">
      Forecast
    </NavLink>
  </nav>
);
