import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { connect } from 'react-redux'
import { clearCart } from '../store/actions/cart.actions'

const Success = ({clearCart}) => {
  const router = useRouter()
  const { session_id } = router.query

  const createOrder = async (session_id) => {
    console.log('session',session_id)
    const response = await axios.post('/api/create-order', {
      session_id,
    })
    console.log('response', response)
  }

  useEffect(() => {
    if(session_id){
    createOrder(session_id)
    clearCart()
    }
  }, [session_id])
  return <div style={{margin: "50px auto"}}>Payment Successful</div>
}

const actions = {
  clearCart
}

export default connect(null, actions)(Success)
