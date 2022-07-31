import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../components/Button/styles'
import { removeFromCart } from '../store/actions/cart.actions'

export const cart = ({cart, removeFromCart}) => {
  return (
    <div>
      {cart.length > 0 && cart.map((product,index) => {
        return<div key={index}>
          {product.name}
          <Button onClick={() => removeFromCart(product)}>Delete</Button>
        </div>
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const actions = {
  removeFromCart
}

export default connect(mapStateToProps, actions)(cart)