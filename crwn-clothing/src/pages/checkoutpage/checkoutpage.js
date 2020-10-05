import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux";
import CheckOutItem from "../../components/checkout-item";
import StripeCheckoutButton from "../../components/stripe-checkout-button";

const HEADER_KEY = ["Product", "Description", "Quantity", "Price", "Remove"];

const CheckOutPage = ({ cartItems, cartTotal }) => {
  console.log(cartTotal);
  return (
    <div className="checkout">
      <div className="checkout__header">
        {HEADER_KEY.map((text, index) => (
          <span className="checkout__header__text" key={index}>
            {text}
          </span>
        ))}
      </div>

      {cartItems.map((item) => (
        <CheckOutItem item={item} key={item.id}></CheckOutItem>
      ))}

      <div className="checkout__footer">
        <span className="checkout__total">TOTAL: ${cartTotal}</span>
      </div>

      <StripeCheckoutButton price={cartTotal}></StripeCheckoutButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
