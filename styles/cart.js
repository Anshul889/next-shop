import styled from 'styled-components'
import { border, primary } from '../constants'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
`

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 400;
`

export const Categories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 15px;
  border-bottom: 0.1px solid #80808080;
  padding-bottom: 15px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.6fr 0.2fr 0.2fr;
  }
`

export const Category = styled.div`
  font-family: 'Archivo', Helvetica, Sans-Serif;
  font-size: 10px;
  opacity: 0.85;
  letter-spacing: 0.13rem;
  &:nth-child(3) {
    justify-self: end;
  }
  @media screen and (min-width: 768px) {
  }
`

export const Quantity = styled(Category)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr 0.3fr;
  gap: 10px;
  padding: 25px 0;
  border-bottom: 0.1px solid #80808080;
  & > img {
    width: 100%;
    grid-row: 1 / span 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.5fr 1.9fr 0.6fr 0.5fr 0.5fr;
    & > img {
      grid-row: 1 / span 1;
    }
  }
`

export const Name = styled.div`
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding-left: 10px;
  }
`

export const UpdateQuantity = styled.div`
  font-size: 20px;
  justify-self: center;
  & > span {
    padding-left: 14px;
  }
  @media screen and (min-width: 768px) {
    justify-self: start;
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }
`

export const Remove = styled.div`
  grid-column: 3;
  grid-row: 2;
  justify-self: end;
  @media screen and (min-width: 768px) {
    justify-self: start;
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
  }
`

export const Price = styled.div`
  justify-self: end;
  @media screen and (min-width: 768px) {
    grid-column: 5 / span 1;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
  }
`

export const Instructions = styled.div`
  margin: 20px 0;
  & > textarea {
    border-color: ${border};
    min-height: 100px;
    width: 80%;
    margin: 10px 0;
    background-color: ${primary};
    border-radius: 12px 12px 0 12px;
    padding: 1rem 2rem;
    border-width: 3px;
  }
`

export const Subtotal = styled.div`
  text-align: center;
  padding-bottom: 40px;
  & > div {
    margin-bottom: 20px;
    font-size: 13px;
    color: rgba(61, 8, 27, 0.75);
    opacity: 0.85;
  }
`
