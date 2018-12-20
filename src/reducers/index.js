import { combineReducers } from 'redux';
import SocialAuthReducer from './socialauth.reducer';
import allErrors from './SignUpReducer';
import userAuth from './SigninReducer';
import resetPasswordReducer from './resetPasswordReducer';
import allArticles from './ViewArticlesReducer';

export default combineReducers({
    social: SocialAuthReducer,
    allErrors,
    allArticles,
    userAuth,
    resetPasswordReducer
});
