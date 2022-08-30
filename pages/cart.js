import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { Button } from '../components/Button/styles'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
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
import dynamic from 'next/dynamic'

const CheckoutButton = dynamic(
  () => import('../components/CheckoutButton/CheckoutButton'),
  {
    suspense: true,
  }
)

export const cart = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
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
          <h3>Subtotal ${cart.reduce((a, b) => a + b.total, 0)}</h3>
          <div>Use Test Card 4242 4242 4242 4242 for succesful payment</div>
          <Suspense fallback={`Loading...`}>
            <CheckoutButton />
          </Suspense>
        </Subtotal>
      </Wrapper>
      <Button onClick={() => clearCart()}>Clear</Button>
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
  clearCart,
}

export default connect(mapStateToProps, actions)(cart)
