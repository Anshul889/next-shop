const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(req, res) {
  const { items } = req.body

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/payment'
      : 'https://next-shop-lime.vercel.app/stripe'

  // const transformedItem = {
  //   price_data: {
  //     currency: 'usd',
  //     product_data: {
  //       images: [item.imageURL],
  //       name: item.name,
  //     },
  //     unit_amount: item.price * 100,
  //   },
  //   description: item.description1,
  //   quantity: item.quantity,
  // };

   console.log('logged items', items)
  let transformedItems = []

  for (let i = 0; i < items.length; i++) {
    transformedItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          images: [items[i].imageURL],
          name: items[i].name,
        },
        unit_amount: items[i].price * 100
      },
      description: items[i].description1,
      quantity: items[i].quantity
    })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformedItems,
    mode: 'payment',
    success_url: redirectURL + '/success',
    cancel_url: redirectURL + '/failed',
    metadata: {
      images: items[0].imageURL,
    },
  })

  res.json({ id: session.id })
}

export default CreateStripeSession
