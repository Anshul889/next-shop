import styled from 'styled-components'

export const DContainer = styled.div`
  height: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: 0 auto;
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
`
