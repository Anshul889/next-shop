import React from 'react'
import { connect } from 'react-redux'

export const cart = ({cart}) => {
  return (
    <div>{cart}</div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(cart)