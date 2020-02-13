import types from '../types';

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACT:
      return payload.value;

    default:
      return state;
  }
};

export default filterReducer;
