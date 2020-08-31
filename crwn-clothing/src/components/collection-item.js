import React from "react";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className="collection-item__footer">
        <span className="collection-item__name">{name}</span>
        <span className="collection-item__price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
