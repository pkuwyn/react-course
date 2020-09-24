import React from "react";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { selectCartItems, toggleCartHidden } from "../redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "./custom-button";
import CartItem from "./cart-item";

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  let history = useHistory();
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items">
        {cartItems.length === 0 ? (
          <span className="cart-dropdown__empty">Your cart is empty</span>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <CustomButton
        className="cart-dropdown__button"
        onClick={() => {
          history.push("./checkout");
          toggleCartHidden();
        }}
      >
        CHECK OUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
