// Domain envars
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

// Page count
export const PER_PAGE = 10;
