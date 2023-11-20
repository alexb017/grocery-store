import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51NoptQIF5Ewa0z1wSSDwIqxb7dmwfkzAhUE2k8COivKy0lGap2OJAacfnEOR1rBOg2TIctQ8cREnXj5LpKYLfEk800pURR0xyh'
);

const YOUR_DOMAIN = 'https://grocery-store-alexb017.vercel.app';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { lineItems } = req.body;

      if (!lineItems) {
        return res.status(400).json({ error: 'Invalid line items' });
      }

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success-order`,
        cancel_url: `${YOUR_DOMAIN}/cart`,
      });

      res.redirect(303, session.url);
    } catch (error) {
      res.status(500).json({ error: 'Error creating checkout session' });
    }
  } else {
    res.status(405).end('Method not allowed');
  }
}
