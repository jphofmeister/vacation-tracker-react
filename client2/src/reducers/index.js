import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import dayReducer from './dayReducer';

export default combineReducers({
  errors: errorReducer,
  day: dayReducer
});