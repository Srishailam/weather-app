import {createGlobalStyle} from 'styled-components';
import VroomSansFontFamily from '../fonts/VroomSans-ExtraBoldItalic.woff';
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: inherit;
    text-decoration: inherit;
    &:visited {
      color: inherit;
    }
  }
  @font-face {
    font-family: "VroomSans";
    src: url(${VroomSansFontFamily}) format("woff");
  }
`;