import { combineReducers } from 'redux';
import SocialAuthReducer from './socialauth.reducer';
import allErrors from './SignUpReducer';
import userAuth from './SigninReducer';
import articleCRD from './articleReducer';
import resetPasswordReducer from './resetPasswordReducer';

export default combineReducers({
    social: SocialAuthReducer,
    allErrors,
    userAuth,
    resetPasswordReducer,
    articleCRD
});
