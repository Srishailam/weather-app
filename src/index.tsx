import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import App from "./App";
import { GlobalStyles } from "./Styled/GlobalStyles";

import { theme } from './Styled/Theme'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
