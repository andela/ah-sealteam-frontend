import { combineReducers } from 'redux';
import allErrors from './reducers/SignUpReducer';
import userAuth from './reducers/SigninReducer';
import allArticles from './reducers/ViewArticlesReducer';

export default combineReducers({
  userAuth,
  allErrors,
  allArticles
});
