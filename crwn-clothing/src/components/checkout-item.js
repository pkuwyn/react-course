import React from "react";

const CheckOutItem = ({ item }) => {
  const { imageUrl, name, price, quantity, id } = item;
  return (
    <div className="checkout__item">
      <div className="checkout__item__img">
        <img src={imageUrl} alt="" />
      </div>

      <span className="checkout__item__text">{name}</span>
      <div className="checkout__item__text">
        <span>&#10094;</span>
        <span> {quantity} </span>
        <span>&#10095;</span>
      </div>
      <span className="checkout__item__text">{price}</span>
      <div className="checkout__item__button">
        <span>&#10006;</span>
      </div>
    </div>
  );
};

export default CheckOutItem;
