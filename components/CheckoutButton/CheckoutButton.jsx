import React from 'react'
import { connect } from 'react-redux'
import createCheckOutSession from '../../lib/checkout-session'
import { Button } from '../Button/styles'

const CheckoutButton = ({cart}) => {
  return (
    <Button full onClick={() => createCheckOutSession(cart)}>
      Checkout
    </Button>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(CheckoutButton)
