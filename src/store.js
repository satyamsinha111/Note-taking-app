import {createStore, applyMiddleware} from 'redux';
import RootReducer from './reducers';
import thunk from 'redux-thunk';
const middleware = [thunk];

import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
