import { createReducer } from '@reduxjs/toolkit';
import types from '../types';

const initial = {
  items: [
    // { id: 'fa0207', name: 'Ola', number: '132' }
  ],
};

const phoneReducer = createReducer(initial, {
  [types.ADD_CONTACT]: (state, action) => ({
    ...state,
    items: [action.payload, ...state.items],
  }),
  [types.DEL_CONTACT]: (state, action) => ({
    ...state,
    items: state.items.filter(contact => contact.id !== action.payload),
  }),
  [types.GET_LOCAL_STORAGE]: (state, action) => ({
    ...state,
    items: action.payload,
  }),
});

export default phoneReducer;
