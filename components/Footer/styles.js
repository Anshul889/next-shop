import styled from 'styled-components'
import { primary, secondary } from '../../constants'

export const Wrapper = styled.div`
  background-color: ${secondary};
  color: ${primary};
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
`

export const Social = styled.div`
  width: 20%;
  height: 18px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 15px;
  grid-row: 2 / span;
  grid-column: 1 / span 3;
`
