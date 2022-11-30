import { createStore, combineReducers } from 'redux';
import categories from './categories';
import products from './products';

const rootReducer = combineReducers({
  categories,
  products,
});

const store = createStore(rootReducer);

export default store;