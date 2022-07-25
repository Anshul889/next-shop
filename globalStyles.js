import { createGlobalStyle } from 'styled-components';
import { primaryBackground } from './constants';
 
const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    background: ${primaryBackground};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;