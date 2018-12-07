import {
  LOGIN_ATTEMPT,
  LOGOUT,
  LOGGED_FAILED,
  LOGGED_SUCCESSFULLY
} from '../constants';

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  errors: null,
  failed: false
};

export const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {
        ...state,
        isLoggingIn: true,
        noAttempt: false,
        isLoggedIn: false
      };
    case LOGGED_FAILED:
      return {
        ...state,
        failed: true,
        errors: action.errors,
        isLoggingIn: false
      };
    case LOGGED_SUCCESSFULLY:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userAuth;
