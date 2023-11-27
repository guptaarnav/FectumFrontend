import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

console.log('Stripe Key:', process.env.REACT_APP_STRIPE_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY!);

const options = {
  clientSecret: "pi_3OGwalIYHiRjj23I1oFnJ3np_secret_ZS2jI1dJdFUH1E62lJZxk0adC"
};

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  ); 
};

export default CheckoutPage;
