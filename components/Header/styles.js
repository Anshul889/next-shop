import styled from 'styled-components'

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
  grid-template-columns: 30px 30px;
  align-items: center;
  column-gap: 20px;
  justify-content: end;
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