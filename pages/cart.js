import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../components/Button/styles'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../store/actions/cart.actions'
import {
  Categories,
  Category,
  Container,
  Heading,
  Instructions,
  Item,
  Name,
  Price,
  Quantity,
  Remove,
  Subtotal,
  UpdateQuantity,
  Wrapper,
} from '../styles/cart'
import trashcan from '../images/trash-can-light.svg'
import Image from 'next/image'
import createCheckOutSession from '../lib/checkout-session'

export const cart = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  console.log('cart', cart)
  return (
    <Container>
      <Heading>Your Cart</Heading>
      <Categories>
        <Category>Product</Category>
        <Quantity>Quantity</Quantity>
        <Category>Total</Category>
      </Categories>
      {cart.length > 0 &&
        cart.map((product, index) => {
          return (
            <Item key={index}>
              <img src={product.imageURL} alt=""></img>
              <Name>
                {product.name} <br />${product.price}
              </Name>
              <Price>${product.price * product.quantity}</Price>
              <UpdateQuantity>
                <span onClick={() => increaseQuantity(product)}>+</span>
                <span>{product.quantity}</span>
                <span
                  onClick={() => decreaseQuantity(product)}
                  style={{ position: 'relative', top: '-2px' }}
                >
                  -
                </span>
              </UpdateQuantity>
              <Remove onClick={() => removeFromCart(product)}>
                <Image src={trashcan} height="25" width="25" alt=""></Image>
              </Remove>
            </Item>
          )
        })}
        <Wrapper>
        <Instructions>
          <div>Order special instructions</div>
          <textarea></textarea>
        </Instructions>
        <Subtotal>
            <h3>Subtotal  ${cart.reduce((a, b) => a + b.total,0,)}</h3>
            <div>Taxes and shipping calculated at checkout</div>
            <Button full onClick={() => createCheckOutSession(cart)}>Checkout</Button>
        </Subtotal>
        </Wrapper>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const actions = {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}

export default connect(mapStateToProps, actions)(cart)
