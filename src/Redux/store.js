import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from './Middleware/logger';
import throttle from './Middleware/throttle';
import stateValidator from './Middleware/state-validation';

const middleware = [logger, throttle, stateValidator];

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

export default store;
