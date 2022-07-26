import React from 'react'
import { DContainer, Left, Logo, MContainer, Right } from './styles'
import search from '../../images/magnifying-glass-light.svg'
import cart from '../../images/cart-shopping-light.svg'
import logo from '../../images/CRAVE_95cb960d-0933-4ba8-b51a-3c4853b96029_70x.webp'
import Image from 'next/image'
import Burger from '../BurgerMenu/Burger'

const Header = () => {
  return (
    <>
      <DContainer>
        <Left>
          <Image src={logo} alt="" />
          <div>Shop</div>
          <div>Meet us</div>
          <div>Recipes</div>
          <div>Contact</div>
        </Left>
        <Right>
          <Image src={search} alt="" />
          <Image src={cart} alt="" />
        </Right>
      </DContainer>
      <MContainer>
        <Burger />
        <Logo>
          <Image src={logo} alt="" />
        </Logo>
        <Right>
          <Image src={search} alt="" />
          <Image src={cart} alt="" />
        </Right>
      </MContainer>
    </>
  )
}

export default Header
