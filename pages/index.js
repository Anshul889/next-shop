import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../components/Button/styles'
import { addCart } from '../store/actions/cart.actions'

const index = ({ cart, addCart }) => {
  return (
    <div>
      <div>{cart}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})



export default connect(mapStateToProps)(index)
