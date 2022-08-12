import styled from 'styled-components'
import { primary } from '../../constants'

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
  @media screen and (min-width: 768px) {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    height: 250px;
    width: 50%;
    place-self: center;
  }
`
