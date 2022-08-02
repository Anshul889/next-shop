import { createGlobalStyle } from 'styled-components'
import { primary, border } from './constants'

const GlobalStyle = createGlobalStyle`
   @font-face {
  font-family: 'Archivo';
  src: url(/fonts/achivo.ttf) format('truetype');
  font-weight: 400;
  font-style: normal;
  }
   @font-face {
  font-family: 'Mariposa';
  src: url(/fonts/Mariposa.otf);
  font-weight: 400;
  font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${primary};
    font-family: 'Mariposa', Helvetica, Sans-Serif;
    color: ${border}
  }
`

export default GlobalStyle
