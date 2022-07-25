import styled from 'styled-components'

export const Container = styled.div`
  height: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Left = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  & > * {
    padding-left: 20px;
  }
`
