import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../components/Button/styles'
import { addCart } from '../store/actions/cart.actions'

const index = ({ cart, addCart }) => {
  return (
    <div>
      <div>{cart}</div>
      <Button onClick={() => addCart()}>Add</Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const actions = {
  addCart,
}

export default connect(mapStateToProps, actions)(index)
