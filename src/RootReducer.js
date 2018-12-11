import { combineReducers } from 'redux';
import allErrors from './reducers/SignUpReducer';
import userAuth from './reducers/SigninReducer';

export default combineReducers({
  userAuth,
  allErrors
});
