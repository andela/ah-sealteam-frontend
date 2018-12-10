import { combineReducers } from 'redux';
import simpleReducer from './SimpleReducer';
import allErrors from './SignUpReducer';

export default combineReducers({
  simpleReducer,
  allErrors
});
