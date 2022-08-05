import Image from 'next/image'
import React, { useState } from 'react'
import { Container, Description } from './style'
import down from '../../images/angle-down-light.svg'
import up from '../../images/angle-up-light.svg'

const Dropdown = ({ name, description, contains, servings, servingsSize }) => {
  const [isOpen, setDropdown] = useState(false)

  const handleClick = () => {
    setDropdown(!isOpen)
  }
  return (
    <Container>
      <h3>{name}</h3>
      {isOpen ? (
        <Image src={up} width={10} height={10} alt="" onClick={handleClick} />
      ) : (
        <Image src={down} width={10} height={10} alt="" onClick={handleClick} />
      )}
      {isOpen && (
        <div>
          {description && <Description>{description}</Description>}
          {contains && <div>Contains: {contains}</div>}
          {servings && <div>Servings: {servings}</div>}
          {servingsSize && <div>ServingSize: {servingsSize}</div>}
        </div>
      )}
    </Container>
  )
}

export default Dropdown
