import { createGlobalStyle } from 'styled-components';
import { primary } from './constants';
 
const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    background: ${primary};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;