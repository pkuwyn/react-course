import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectShopCollection } from "../redux";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../components/collection-item";

function CollectionPage({
  match: {
    params: { category },
  },
}) {
  const { collection } = useSelector(
    createStructuredSelector({
      collection: selectShopCollection(category),
    })
  );

  return collection ? (
    <div className="collectionpage">
      <h1 className="collectionpage__title">{collection.title}</h1>

      <div className="collectionpage__items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <Redirect to="/shop"></Redirect>
  );
}

export default CollectionPage;
