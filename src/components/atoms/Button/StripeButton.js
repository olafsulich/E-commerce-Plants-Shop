import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';
const StripeButton = ({ price }) => {
  const priceStripe = price * 100;
  const key = 'pk_test_5R7ANtmXdmeaY7ahK6WWSEvr00lBQBoamY';
  // const onToken = token => {
  //   axios({
  //     url: 'payment',
  //     method: 'post',
  //     data: {
  //       amount: priceStripe,
  //       token: token,
  //     },
  //   })
  //     .then(response => {
  //       alert('succesful payment');
  //     })
  //     .catch(error => {
  //       console.log('Payment Error: ', error);
  //       alert(
  //         'There was an issue with your payment! Please make sure you use the provided credit card.',
  //       );
  //     });
  // };
  return (
    <StripeCheckout
      label="Pay now"
      name="Plants & Home"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/pdgBVLQ/plants-vector-free-icon-set-30.png"
      description={`Your total is ${price}`}
      amount={priceStripe}
      panelLabel="Pay now"
      stripeKey={key}
    />
  );
};
StripeButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeButton;
