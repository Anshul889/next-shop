import { useRouter } from 'next/router'
import React from 'react'

const Stripe = () => {
  const router = useRouter()
  const { status } = router.query
  return (
    <div>
      {status && status === 'success' && <div>Payment Successful</div>}
      {status && status === 'cancel' && <div>Payment Unsuccessful</div>}
    </div>
  )
}

export default Stripe
