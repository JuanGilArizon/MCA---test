export const types = {
  SET_CART_NUMBER_OF_ITEMS: 'SET_CART_NUMBER_OF_ITEMS',
};

export const actions = {
  setCartNumberOfItems: (number) => ({
    type: types.SET_CART_NUMBER_OF_ITEMS,
    number,
  }),
};
