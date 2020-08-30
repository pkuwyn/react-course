import React from "react";
import CollectionItem from "./collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collecion-preview">
      <h1 className="collecion-preview__title">{title}</h1>

      <div className="collecion-preview__preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
