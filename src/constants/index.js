//Base URL
export const DOMAIN = process.env.REACT_APP_DOMAIN;
export const BASE_URL = `${DOMAIN}/api/`;
//Sign Up Constants
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';

//Sign Up Form
export const title = 'Create An Account';
export const account = 'Already have an account?';
export const login = 'Login Here';
export const confirmpassword = 'Passwords do not match';

export const SOCIALLOGIN_FULFILLED = 'SOCIALLOGIN_FULFILLED';
export const SOCIALLOGIN_REJECTED = 'SOCIALLOGIN_REJECTED';
export const SOCIALLOGIN_PENDING = 'SOCIALLOGIN_PENDING';
export const SOCIALLOGIN_FAILED = 'SOCIALLOGIN_FAILED';
export const SOCIALLOGIN_LOGOUT = 'SOCIALLOGIN_LOGOUT';

// Singin Constants
export const LOGOUT = 'LOGOUT';
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGGED_FAILED = 'LOGGED_FAILED';
export const LOGGED_SUCCESSFULLY = 'LOGGED_SUCCESSFULLY';
export const SUCCESS = 'ALERT_SUCCESS';
export const ERROR = 'ALERT_ERROR';
export const CLEAR = 'ALERT_CLEAR';

// reset password constants
export const RESET_PASSWORD_BEGIN = 'RESET_PASSWORD_BEGIN';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

// Articles constants
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAILURE = 'CREATE_ARTICLE_FAILURE';
export const GET_ARTICLE = 'GET_ARTICLE';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_FAILURE = 'GET_ARTICLE_FAILURE';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const EDIT_ARTICLE_SUCCESS = 'EDIT_ARTICLE_SUCCESS';
export const EDIT_ARTICLE_FAILURE = 'EDIT_ARTICLE_FAILURE';

/*
 * PROFILE CONTAINER CONSTANTS
 */

//Action types
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
export const USER_INFO_LOGOUT = 'USER_INFO_LOGOUT';

//Cloudinary API details
export const CLOUDINARY_URL =
    'https://api.cloudinary.com/v1_1/botnetdobbs/image/upload';
export const CLOUDINARY_UPLOAD_PRESET = 'ind3ojf2';

// Notifications Constants
export const MARK_AS_READ_BEGIN = 'MARK_AS_READ_BEGIN';
export const MARK_AS_READ_SUCCESS = 'MARK_AS_READ_SUCCESS';
// export const MARK_AS_READ_FAIL = 'MARK_AS_READ_FAIL';
export const MARK_ALL_AS_READ_BEGIN = 'MARK_ALL_AS_READ_BEGIN';
export const MARK_ALL_AS_READ_SUCCESS = 'MARK_ALL_AS_READ_SUCCESS';
export const GET_UNREAD_NOTIFICATIONS_SUCCESS =
    'GET_UNREAD_NOTIFICATIONS_SUCCESS';
export const GET_ALL_NOTIFICATIONS_SUCCESS = 'GET_ALL_NOTIFICATIONS_SUCCESS';
export const GET_ALL_NOTIFICATIONS_BEGIN = 'GET_ALL_NOTIFICATIONS_BEGIN';
export const NOTIFICATION_ERROR = 'NOTIFICATION_ERROR';

// Page count
export const PER_PAGE = 10;

//BOOKMARK
export const BOOMARK_FULFILLED = 'BOOMARK_FULFILLED';
export const BOOMARK_FAILED = 'BOOMARK_FAILED';
export const BOOKMARK_PENDING = 'BOOKMARK_PENDING';
export const BOOKMARK_LOGOUT = 'BOOKMARK_LOGOUT';
