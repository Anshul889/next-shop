import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 15px;
  padding-top: 10px;
  border-top: 0.1px solid #80808080;
  width: 90%;
  margin: 0 auto;
  font-family: 'Archivo', Helvetica, Sans-Serif;
  font-size: 15px;
  letter-spacing: 0.6px;
  line-height: 27px;
  color: rgba(61, 8, 27, 0.75);
`

export const Description = styled.div`
  grid-column: 1 / span 2;
`
