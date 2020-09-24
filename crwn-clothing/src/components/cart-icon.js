import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartDropdown from "./cart-dropdown";
import {
  toggleCartHidden,
  selectCartItemsCount,
  selectCartHidden,
} from "../redux";
const CartIcon = ({ hidden, toggleCartHidden, cartItemsCount }) => {
  return (
    <div className={`cart-icon no-hover `}>
      <svg className="cart-icon__svg">
        <use href="sprite.svg#icon-location-shopping"></use>
      </svg>
      <span className="cart-icon__count" onClick={toggleCartHidden}>
        {cartItemsCount}
      </span>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
