import React from "react";
import { connect } from "react-redux";
import CartDropdown from "./cart-dropdown";
import { toggleCartHidden } from "../redux";

const CartIcon = ({ hidden, toggleCartHidden, cartItemsCount }) => {
  return (
    <div className={`cart-icon no-hover `} onClick={toggleCartHidden}>
      <svg className="cart-icon__svg">
        <use href="sprite.svg#icon-location-shopping"></use>
      </svg>
      <span className="cart-icon__count">{cartItemsCount}</span>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps called");
  return {
    hidden: state.cart.hidden,
    cartItemsCount: state.cart.cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
