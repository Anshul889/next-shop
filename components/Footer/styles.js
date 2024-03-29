import styled from 'styled-components'
import { primary, secondary } from '../../constants'

export const Wrapper = styled.div`
  background-color: ${secondary};
  color: ${primary};
  font-family: var(--font-secondary);
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  margin: 0 auto;
  color: rgba(242, 239, 221, 0.65);
  letter-spacing: 0.6px;
  padding: 30px 0;
  h3, h4 {
    font-family: 'Mariposa', Helvetica, Sans-Serif;
    color: rgba(242, 239, 221, 1);
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    padding: 50px 0;
    row-gap: 25px;
    h3,
    h4 {
      font-size: 22px;
      margin-top: 0px;
    }
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const QuickLinks = styled.div`
& > div{
  margin-bottom: 10px;
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
    grid-column: 1 / span 1;
  }
`
