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
//Cloudinary API details
export const CLOUDINARY_URL =
    'https://api.cloudinary.com/v1_1/botnetdobbs/image/upload';
export const CLOUDINARY_UPLOAD_PRESET = 'ind3ojf2';

//Article constants
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE_FAILURE = 'CREATE_ARTICLE_FAILURE';
