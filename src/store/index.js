import { createStore, combineReducers } from 'redux';
import categories from './categories';
import products from './products';
import cart from './cart';

const rootReducer = combineReducers({
  categories,
  products,
  cart,
});

const store = createStore(rootReducer);

export default store;