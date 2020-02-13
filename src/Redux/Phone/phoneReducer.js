import types from '../types';

const initial = {
  items: [
    // { id: '7c8d55', name: 'wqewqe', number: '213' },
    // { id: '7c8d65', name: 'wqdewqe', number: '313' },
  ],
};

const phoneReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return {
        ...state,
        items: [payload.contact, ...state.items],
      };

    case types.DEL_CONTACT:
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== payload.id),
      };

    case types.GET_LOCAL_STORAGE:
      return {
        ...state,
        items: payload.value,
      };

    default:
      return state;
  }
};

export default phoneReducer;
