import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };
  console.log(price);
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HYpobEJNvaLNIMTQfr8uelZcdaoSoHSBcNTzUhugT12aZJ78jNzzv9xXreZnqDKZ7DyZ2U6p1DOfSl1je0SioQT00IJnEeku7";
  return (
    <StripeCheckout
      token={onToken}
      label="Pay now"
      name="CRWN clothing Ltd." // the pop-in header title
      shippingAddress
      billingAddress={false}
      description={`Total Payment is ${price}`} // the pop-in header subtitle
      amount={priceForStripe}
      bitcoin
      alipay
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
