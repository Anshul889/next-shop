import React from 'react'
import { connect } from 'react-redux'

const index = ({cart}) => {
  return (
    <div>{cart}</div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})


export default connect(mapStateToProps, null)(index)