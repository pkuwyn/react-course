import React from "react";

import { useSelector } from "react-redux";
import { selectShopCollections } from "../redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "./collection-preview";

function CollectionsOverview(props) {
  const { collections } = useSelector(
    createStructuredSelector({
      collections: selectShopCollections,
    })
  );

  return (
    <>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </>
  );
}
export default CollectionsOverview;
