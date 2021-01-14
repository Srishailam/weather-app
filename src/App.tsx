import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import styled from "styled-components";

const AppContainer = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: Calibre, Arial, sans-serif;
    color: ${ (props) => props.theme.colors['color-vroom-white']};
    background-color:${ (props) => props.theme.colors['color-vroom-red']};
`;
export default () => {
  return (
    <AppContainer>
      <Nav />
      <Main />
    </AppContainer>
  );
};