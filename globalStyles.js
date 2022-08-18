import { createGlobalStyle } from 'styled-components'
import { primary, border, secondary } from './constants'

const GlobalStyle = createGlobalStyle`
   @font-face {
  font-family: 'Archivo';
  src: url(/fonts/archivo.ttf) format('truetype');
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
  a{
    text-decoration: none;
    color: rgb(61, 8, 27);
  }
  .carousel__dot {
    background-color: lightgray;
    border-radius: 50%;
    height: 6px;
    width: 6px;
    border: none;
    padding: 0px;
}

.carousel__dot--selected{
  background-color: ${secondary};
}

.carousel__dot-group{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 10%;
  margin: 0 auto;
  height: 12px;
  justify-items: center;
}
`

export default GlobalStyle
