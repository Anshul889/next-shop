import styled from 'styled-components'

export const Wrapper = styled.div``

export const Heading = styled.div`
width: 60%;
margin: 15px 0 15px 5%;
@media screen and (min-width: 768px) {
  h1{
    font-size: 48px;
  }
  p{
    font-size: 28.8px;
    font-weight: 400;
  }
}
`

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 25px;
  }
`
