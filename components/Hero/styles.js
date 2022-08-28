import styled from 'styled-components'
import { primary, secondary } from '../../constants'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-columns: 1fr;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: calc(100vh - 56px);
  }
`

export const Background = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  z-index: -1;
  @media screen and (min-width: 768px) {
    height: calc(100vh - 56px);
  }
`

export const Content = styled.div`
  grid-row: 2 / span 1;
  z-index: 1000;
  background-color: ${primary};
  text-align: center;
  h2 {
    font-size: 36px;
    font-weight: 400;
    width: 70%;
    margin: 20px auto;
  }
  p {
    font-family: var(--font-archivo);
    letter-spacing: 0px;
    font-weight: 400;
    width: 80%;
    margin: 20px auto;
    font-size: 15px;
    line-height: 27px;
    color: rgba(61, 8, 27, 0.75);
  }

  button {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    width: 600px;
    align-self: center;
    text-align: start;
    border: 2px solid rgb(61, 8, 27);
    border-radius: 10px;
    margin-left: 10%;
    padding: 30px 0;
    h2{
      width: 80%;
      font-size: 48px;
    }
    button{
      margin-left: 10%;
    }
  }
`
