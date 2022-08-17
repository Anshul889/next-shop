const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import db from '../../lib/firebase-admin'

async function RetrieveStripeSession(req, res) {
  const {session_id} = req.body
  console.log('sessionid', req.body)
 const session = await stripe.checkout.sessions.retrieve(session_id);
 console.log('session',session)
  if(session.payment_status === 'paid'){
    const response = await db.collection('orders').add({
      session_id
    })
  }
  res.status(200)
}

export default RetrieveStripeSession