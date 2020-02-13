import { combineReducers } from 'redux';
import phoneReducer from './Phone/phoneReducer';
import filterReducer from './Phone/filterReducer';

const rootReducer = combineReducers({
  contacts: phoneReducer,
  filter: filterReducer,
});

export default rootReducer;
