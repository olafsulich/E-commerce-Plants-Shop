import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceStripe = price * 100;
  const key = 'pk_test_5R7ANtmXdmeaY7ahK6WWSEvr00lBQBoamY';
  const onToken = token => console.log(token);
  return (
    <StripeCheckout
      label="Pay now"
      aria-label="Pay now"
      name="Plants & Home"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/pdgBVLQ/plants-vector-free-icon-set-30.png"
      description={`Your total is  $${price}`}
      amount={priceStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={key}
    />
  );
};
StripeButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeButton;
