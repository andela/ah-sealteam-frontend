import { combineReducers } from 'redux';
import SocialAuthReducer from './socialauth.reducer';
import allErrors from './SignUpReducer';
import userAuth from './SigninReducer';
import resetPasswordReducer from './resetPasswordReducer';
import BookMarkArticleReducer from './bookmark.reducer';
import allArticles from './ViewArticlesReducer';
import userInfo from './ProfileReducer';

import notificationsReducer from './notificationsReducer';
import ratingsReducer from './ratings.reducer';

export default combineReducers({
    social: SocialAuthReducer,
    allErrors,
    allArticles,
    userAuth,
    resetPasswordReducer,
    notificationsReducer,
    userInfo,
    bookmarks: BookMarkArticleReducer,
    ratingsReducer
});
