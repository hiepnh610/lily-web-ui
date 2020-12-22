import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middleware = (getDefaultMiddleware: any) => {
  return getDefaultMiddleware().concat(logger);
};

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    const newRootReducer = require('./reducers').default;
    store.replaceReducer(newRootReducer);
  })
}

export type AppDispatch = typeof store.dispatch;

export default store;
