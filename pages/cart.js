import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../components/Button/styles'
import { removeFromCart } from '../store/actions/cart.actions'
import {
  Categories,
  Category,
  Container,
  Heading,
  Item,
  Price,
  Remove,
  UpdateQuantity,
} from '../styles/cart'
import trashcan from '../images/trash-can-light.svg'
import Image from 'next/image'

export const cart = ({ cart, removeFromCart }) => {
  return (
    // <div>
    //   {cart.length > 0 && cart.map((product,index) => {
    //     return<div key={index}>
    //       {product.name}
    //       <Button onClick={() => removeFromCart(product)}>Delete</Button>
    //     </div>
    //   })}
    // </div>
    <Container>
      <Heading>Your Cart</Heading>
      <Categories>
        <Category>Product</Category>
        <Category>Total</Category>
      </Categories>
      {cart.length > 0 &&
        cart.map((product, index) => {
          return (
            <Item key={index}>
              <img src={product.imageURL} alt=""></img>
              <div>{product.name} <br />${product.price}</div>
              <Price>${product.price * product.quantity}</Price>
              <UpdateQuantity>
                <span>+</span><span>{product.quantity}</span><span style={{position: 'relative', top:'-2px'}}>-</span>
              </UpdateQuantity>
              <Remove onClick={() => removeFromCart(product)}>
                <Image src={trashcan} height="25" width="25" alt=''></Image>
              </Remove>
            </Item>
          )
        })}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const actions = {
  removeFromCart,
}

export default connect(mapStateToProps, actions)(cart)
