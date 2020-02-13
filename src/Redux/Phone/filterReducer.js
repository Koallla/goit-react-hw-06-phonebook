import { createReducer } from '@reduxjs/toolkit';
import types from '../types';

const initial = '';

const filterReducer = createReducer(initial, {
  [types.FILTER_CONTACT]: (state, action) => action.payload,
});

export default filterReducer;
