import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducer';

let middleware = applyMiddleware(promise(), logger);

if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(promise());
}

const store = createStore(reducer, middleware);

export default store;
