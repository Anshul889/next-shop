import React from 'react'
import { DContainer, Left, Logo, MContainer, Right } from './styles'
import search from '../../images/magnifying-glass-light.svg'
import cart from '../../images/cart-shopping-light.svg'
import logo from '../../images/CRAVE_95cb960d-0933-4ba8-b51a-3c4853b96029_70x.webp'
import Image from 'next/image'
import Burger from '../BurgerMenu/Burger'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Header = () => {
  const {data: session} = useSession()
  return (
    <>
      <DContainer>
        <Left>
          <Link href={'/'}><a><Image src={logo} alt="" /></a></Link>
          <Link href={'/meal-starters'}><a><div>Shop</div></a></Link>
          <div>Meet us</div>
          <div>Recipes</div>
          <div>Contact</div>
        </Left>
        <Right>
          <Image src={search} alt="" />
          <Link href={'/cart'}><a><Image src={cart} alt="" /></a></Link>
          {session ? <Link href="/profile"><img src={session.user.image} /></Link> : <div><Link href="/auth/signin">Login</Link></div>}
        </Right>
      </DContainer>
      <MContainer>
        <Burger />
        <Logo>
          <Image src={logo} alt="" />
        </Logo>
        <Right>
          <Image src={search} alt="" />
          <Link href={'/cart'}><a><Image src={cart} alt="" /></a></Link>
        </Right>
      </MContainer>
    </>
  )
}

export default Header
