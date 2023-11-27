import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

console.log('Stripe Key:', process.env.REACT_APP_STRIPE_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY!);

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  ); 
};

export default CheckoutPage;
