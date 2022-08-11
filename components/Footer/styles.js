import styled from 'styled-components'
import { primary, secondary } from '../../constants'

export const Wrapper = styled.div`
  background-color: ${secondary};
  color: ${primary};
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Social = styled.div`
  width: 20%;
  height: 18px;
  margin: 25px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 15px;
  grid-row: 2 / span 1;
  grid-column: 1 / span 3;
  @media screen and (max-width: 768px) {
    width: 80%;
    grid-row: 4 / span 1;
    grid-column : 1/ span 1
  }
`
