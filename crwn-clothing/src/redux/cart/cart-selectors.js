import { createSelector } from "reselect";

// const selectCart = (state) => state.cart;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartHidden = (state) => state.cart.hidden;

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
