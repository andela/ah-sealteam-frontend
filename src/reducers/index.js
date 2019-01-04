import { combineReducers } from 'redux';
import SocialAuthReducer from './socialauth.reducer';
import allErrors from './SignUpReducer';
import userAuth from './SigninReducer';
import articleCRD from './articleReducer';
import resetPasswordReducer from './resetPasswordReducer';
import BookMarkArticleReducer from './bookmark.reducer';
import allArticles from './ViewArticlesReducer';
import userInfo from './ProfileReducer';
import PublishedArticleReducer from './Published.reducer';
import notificationsReducer from './notificationsReducer';
export default combineReducers({
    social: SocialAuthReducer,
    allErrors,
    allArticles,
    userAuth,
    resetPasswordReducer,
    notificationsReducer,
    userInfo,
    bookmarks: BookMarkArticleReducer,
    articleCRD,
    published: PublishedArticleReducer
});
