import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import CollectionItem from "./collection-item";

const CollectionPreview = ({ title, items, routeName }) => {
  const { url } = useRouteMatch();
  return (
    <div className="collecion-preview">
      <h1 className="collecion-preview__title">
        <Link to={`${url}/${routeName}`}>{title}</Link>
      </h1>

      <div className="collecion-preview__preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
