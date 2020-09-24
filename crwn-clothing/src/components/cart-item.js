import React from "react";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" className="cart-item__img" />
      <div className="cart-item__detail">
        <span className="cart-item__detail__name">{name}</span>
        <span className="cart-item__detail__price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
