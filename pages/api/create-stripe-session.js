const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { item } = req.body;

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/stripe'
      : 'https://next-shop-lime.vercel.app/stripe';

  const transformedItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        images: [item.imageURL],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    description: item.description1,
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {
      images: item.imageURL,
    },
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;