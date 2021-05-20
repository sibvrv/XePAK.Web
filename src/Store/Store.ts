import {applyMiddleware, createStore} from 'redux';
import rootReducers from './Reducers';
import {FetchMiddleware} from './Middleware/FetchMiddleware';
import {LoggerMiddleware} from './Middleware/LoggerMiddleware';

const getInitialState = () => {
  const element = document.querySelector('script[data-type=initial]');
  if (!element) return {};

  return JSON.parse(element.textContent || '') || {};
};

const store = createStore(rootReducers, getInitialState(), applyMiddleware(LoggerMiddleware, FetchMiddleware));

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

export default store;
