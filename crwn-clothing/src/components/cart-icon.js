import React from "react";
import CartDropdown from "./cart-dropdown";

const CartIcon = ({ itemNum, styleClassName }) => {
  return (
    <div className={`cart-icon ${styleClassName}`}>
      <svg className="cart-icon__svg">
        <use href="sprite.svg#icon-location-shopping"></use>
      </svg>
      <span className="cart-icon__count">{itemNum}</span>
      <CartDropdown />
    </div>
  );
};

export default CartIcon;
