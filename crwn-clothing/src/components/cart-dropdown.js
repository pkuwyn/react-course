import React from "react";

import CustomButton from "./custom-button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items"></div>
      <CustomButton className="cart-dropdown__button">CHECK OUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
