import React from 'react'
import { Cart, CartBubble, DContainer, Left, Logo, MContainer, Right, Search } from './styles'
import search from '../../images/magnifying-glass-light.svg'
import cart from '../../images/cart-shopping-light.svg'
import logo from '../../images/Crave.webp'
import Image from 'next/image'
import Burger from '../BurgerMenu/Burger'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { connect } from 'react-redux'

const Header = ({cartstate}) => {
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
          <Cart><Link href={'/cart'}><a><Image src={cart} alt="" /></a></Link></Cart>
          {cartstate.length > 0 && <CartBubble>{cartstate.length}</CartBubble>}
          {session ? <Link href="/profile"><img src={session.user.image} /></Link> : <div><Link href="/auth/signin">Login</Link></div>}
        </Right>
      </DContainer>
      <MContainer>
        <Burger />
        <Logo>
          <Image src={logo} alt="" />
        </Logo>
        <Right>
          <Search><Image src={search} alt="" /></Search>
          <Cart><Link href={'/cart'}><a><Image src={cart} alt="" /></a></Link></Cart>
          {cartstate.length > 0 && <CartBubble>{cartstate.length}</CartBubble>}
        </Right>
      </MContainer>
    </>
  )
}

const mapStateToProps = (state) => ({
  cartstate: state.cart
})

export default connect(mapStateToProps)(Header)
