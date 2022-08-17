const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import db from '../../lib/firebase-admin'

async function CreateOrder(req, res) {
  const { session_id } = req.body
  const session = await stripe.checkout.sessions.retrieve(session_id)
  const items = await stripe.checkout.sessions.listLineItems(session_id)
  console.log('items:', items)
  if (session.payment_status === 'paid') {
    const doc = await db
      .collection('orders')
      .where('session_id', '==', session_id)
      .get()
    if (doc.empty) {
      const response = await db.collection('orders').add({
        session_id,
        items: items.data
      })
    }
  }
  res.status(200).json({ id: session_id }) //fix
}

export default CreateOrder
