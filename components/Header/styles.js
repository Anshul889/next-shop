import styled from 'styled-components'
import { secondary } from '../../constants'

export const DContainer = styled.div`
  height: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Left = styled.div`
  display: grid;
  grid-template-columns: 70px repeat(4, max-content);
  align-items: center;
  & > * {
    padding-left: 20px;
  }
`

export const Right = styled.div`
  display: grid;
  grid-template-columns: 30px 30px 40px;
  align-items: center;
  column-gap: 20px;
  justify-content: end;
  & > * {
    text-decoration: none;
  }

  & > img {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    align-self: center;
    grid-template-columns: 25px 25px;
    padding-right: 15px;
  }

`

export const MContainer = styled.div`
  display: grid;
  height: 56px;
  grid-template-columns: 1fr 70px 1fr;
  align-items: start;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Logo = styled.div`
align-self: center;
`

export const Search = styled.div`
grid-row: 1 / span 1;
grid-column: 1/ span 1;
`

export const Cart = styled.div`
grid-row: 1 / span 1;
grid-column: 2/ span 1;
`

export const CartBubble = styled.div`
grid-row: 1 / span 1;
grid-column: 2/ span 1;
align-self: start;
justify-self: end;
font-size: 9px;
color: white;
background-color: ${secondary};
width: 12px;
height: 12px;
text-align: center;
border-radius: 50%;
z-index: 1000;
@media screen and (min-width: 768px) {
  position: relative;
  font-size: 12px;
  height: 16px;
  width: 16px;
  margin-top: 5px;
  left: 3px;
}
`
