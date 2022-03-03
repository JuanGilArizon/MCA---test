import { combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cart-reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});
const initialState = {};
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
export default store;
