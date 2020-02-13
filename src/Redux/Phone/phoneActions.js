import { createAction } from '@reduxjs/toolkit';
import types from '../types';

export const addContact = createAction(types.ADD_CONTACT);
export const deleteContact = createAction(types.DEL_CONTACT);
export const filterContact = createAction(types.FILTER_CONTACT);
export const getLocalStorage = createAction(types.GET_LOCAL_STORAGE);
