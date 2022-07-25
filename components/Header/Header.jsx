import React from 'react'
import { DContainer, Left, Right } from './styles'
import search from '../../images/magnifying-glass-light.svg'
import cart from '../../images/cart-shopping-light.svg'
import logo from '../../images/CRAVE_95cb960d-0933-4ba8-b51a-3c4853b96029_70x.webp'
import Image from 'next/image'

const Header = () => {
  return (
    <DContainer>
      <Left>
        <Image src={logo} alt=''/>
        <div>Shop</div>
        <div>Meet us</div>
        <div>Recipes</div>
        <div>Contact</div>
      </Left>
      <Right>
        <Image src={search} alt=''/>
        <Image src={cart} alt=''/>
      </Right>
    </DContainer>
  )
}

export default Header
