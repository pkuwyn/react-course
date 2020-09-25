import CartItem from "../../components/cart-item";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  return existingCartItem
    ? cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + (cartItemToAdd.quantity || 1),
            }
          : cartItem
      )
    : [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  cartItems.filter((item) => item.id !== cartItemToRemove.id);
