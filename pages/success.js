import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Success = () => {
  const router = useRouter()
  const { session_id } = router.query

  const createOrder = async (session_id) => {
    console.log('session', session_id);
    const response = await axios.post('/api/retrieve-stripe-session', {
      session_id,
    })
  }

  useEffect(() => {
    createOrder(session_id)
  }, [session_id])
  return <div>Payment Successful {session_id}</div>
}

export default Success
