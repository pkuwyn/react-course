import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

//transform object to array of collections
export const selectShopCollections = createSelector([selectShop], (shop) =>
  Object.values(shop.collections)
);

export const selectShopCollectionsAsObject = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollection = (collectionName) =>
  createSelector(
    [selectShopCollectionsAsObject],
    (collections) => collections[collectionName]
  );
