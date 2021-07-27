const router = require('express').Router();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

router.post('/create-checkout-session', async (req, res) => {
    console.log("hi");
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: 'Donation',
            },
            unit_amount: req.query.amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://gad-liart.vercel.app/',
      cancel_url: 'https://gad-liart.vercel.app/',
    });
  
    res.json({ id: session.id });
  });

module.exports = {
  router: router,
  basePath: '/api'
};