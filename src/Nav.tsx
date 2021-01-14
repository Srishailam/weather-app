import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  min-height: 64px;
  font-size: 16px;
  font-family: Calibre, Arial, sans-serif;
  font-weight: 600;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  color: ${ (props) => props.theme.colors['color-vroom-black']};
  background-color: ${ (props) => props.theme.colors['color-vroom-white']};
  width: 100vw;
  text-align: center;
  border-bottom: 1px solid ${ (props) => props.theme.colors['color-vroom-black']};
  a {
    position: relative;
    top: 24px;
    margin: 0 40px;
    &:hover {
      border-bottom: 2px solid ${ (props) => props.theme.colors['color-vroom-red']};
    }
  }
`;
export default () => (
  <NavContainer>
    <NavLink activeClassName="active" to="/" exact>
      Home
    </NavLink>
    <NavLink activeClassName="active" to="/forecast">
      Forecast
    </NavLink>
  </NavContainer>
);
