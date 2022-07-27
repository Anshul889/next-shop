import styled from 'styled-components'
import { primary, secondary } from '../../constants'

export const Button = styled.button`
  border: 0;
  padding: 1rem 2.5rem;
  cursor: pointer;
  font: inherit;
  font-size: 1.5rem;
  text-decoration: none;
  background-color: ${secondary};
  color: ${primary};
  transition: box-shadow var(--duration-short) ease;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 40px;
  font-size: 15px;
`
