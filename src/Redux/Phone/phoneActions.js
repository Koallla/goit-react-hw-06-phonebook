import types from '../types';

export const addContact = data => ({
  type: types.ADD_CONTACT,
  payload: {
    contact: data,
  },
});

export const deleteContact = id => ({
  type: types.DEL_CONTACT,
  payload: {
    id,
  },
});

export const filterContact = text => ({
  type: types.FILTER_CONTACT,
  payload: {
    value: text,
  },
});

export const getLocalStorage = contacts => ({
  type: types.GET_LOCAL_STORAGE,
  payload: {
    value: contacts,
  },
});
