import styled from 'styled-components'
import { border, primary } from '../../constants'

export const Form = styled.form`
width: 90%;
margin: 15px auto;
`

export const TextArea = styled.textarea`
  border-color: ${border};
  min-height: 100px;
  width: 90%;
  margin: 10px 0;
  background-color: ${primary};
  border-radius: 12px 12px 0 12px;
  padding: 1rem;
  border-width: 3px;
`

export const Login = styled.div`
text-decoration: underline;
cursor: pointer;
`