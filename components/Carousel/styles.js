import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 90%);
  overflow-x: scroll;
  padding-left: 5%;
  ::-webkit-scrollbar {
    display: none;
  }
  & > * {
    width: 90%;
    background-color: aqua;
  }
`
