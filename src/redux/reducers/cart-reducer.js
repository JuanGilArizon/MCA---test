import { types } from '../actions/cart-actions';

const initialState = {
  numberOfItems: 0,
};

export default function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_CART_NUMBER_OF_ITEMS:
      return {
        ...state,
        numberOfItems: action.number,
      };
    default:
      return state;
  }
}
