// This is your test secret API key.
const stripe = require('stripe')(
  'sk_test_51NoptQIF5Ewa0z1wSSDwIqxb7dmwfkzAhUE2k8COivKy0lGap2OJAacfnEOR1rBOg2TIctQ8cREnXj5LpKYLfEk800pURR0xyh'
);
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const { lineItems } = req.body;

  if (!lineItems) {
    return res.status(400).json({ error: 'Invalid line items' });
  }

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));