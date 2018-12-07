import { combineReducers } from 'redux';
import simpleReducer from './SimpleReducer';
import userInfo from './ProfileReducer';
import allErrors from './SignUpReducer';

export default combineReducers({
  simpleReducer,
  allErrors,
  userInfo
});
