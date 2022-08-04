import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 90%);
  overflow-x: scroll;
  padding: 0 5%;
  column-gap: 15px;
  ::-webkit-scrollbar {
    display: none;
  }
  & > * {
    width: 90%;
    background-color: aqua;
  }
`