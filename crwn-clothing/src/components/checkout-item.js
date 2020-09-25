import React from "react";
import { connect } from "react-redux";
import { selectCartItems, addItem, removeItem } from "../redux";
import { createStructuredSelector } from "reselect";

const CheckOutItem = ({ item, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity, id } = item;
  return (
    <div className="checkout__item">
      <div className="checkout__item__img">
        <img src={imageUrl} alt="" />
      </div>

      <span className="checkout__item__text">{name}</span>

      <div className="checkout__item__text">
        <span
          className="checkout__item__action"
          onClick={() => {
            if (item.quantity > 1) {
              addItem({ ...item, quantity: -1 });
            } else {
              removeItem(item);
            }
          }}
        >
          &#10094;
        </span>
        <span className="checkout__item__quantity"> {quantity} </span>
        <span
          className="checkout__item__action"
          onClick={() => {
            addItem({ ...item, quantity: 1 });
          }}
        >
          &#10095;
        </span>
      </div>
      <span className="checkout__item__text">{price}</span>
      <div className="checkout__item__button">
        <span
          className="checkout__item__action"
          onClick={() => {
            removeItem(item);
          }}
        >
          &#10006;
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutItem);
