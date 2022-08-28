import styled from 'styled-components'
import { primary } from '../constants'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    column-gap: 50px;
  }
`
export const DesktopWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Details = styled.div``

export const Heading = styled.h1`
  width: 90%;
  margin: 15px auto;
  font-weight: 400;
  font-size: 36px;
`

export const Price = styled.div`
  width: 90%;
  margin: 10px auto;
`

export const Container = styled.div`
  width: 90%;
  margin: 10px auto;
`

export const Select = styled.select`
  background-color: ${primary};
  border-radius: 10%;
  margin: 15px 0;
  padding: 5px;
`

export const Description = styled.div`
  width: 90%;
  margin: 15px auto;
  font-family: var(--font-secondary);
  font-size: 15px;
  letter-spacing: 0.6px;
  line-height: 27px;
  color: rgba(61, 8, 27, 0.75);
  & > * {
    margin: 10px auto;
  }
`

export const Added = styled.div`
  width: 90%;
  margin: 15px auto;
`
