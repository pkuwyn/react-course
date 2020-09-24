import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux";

import CustomButton from "./custom-button";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <CustomButton
          className="collection-item__button inverted-button"
          onClick={() => addItem(item)}
        >
          Add to Cart
        </CustomButton>
      </div>

      <div className="collection-item__footer">
        <span className="collection-item__name">{name}</span>
        <span className="collection-item__price">${price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(CollectionItem);
