import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Success = () => {
  const router = useRouter()
  const { session_id } = router.query

  const createOrder = async (session_id) => {
    const response = await axios.post('/api/create-order', {
      session_id,
    })
  }

  useEffect(() => {
    if(session_id){
    createOrder(session_id)
    }
  }, [session_id])
  return <div>Payment Successful</div>
}

export default Success
