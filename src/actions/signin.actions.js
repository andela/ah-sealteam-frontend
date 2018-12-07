import {
  LOGIN_ATTEMPT,
  LOGOUT,
  LOGGED_FAILED,
  LOGGED_SUCCESSFULLY
} from '../constants';
import { userService } from '../services';
import jwtDecode from 'jwt-decode';

export const loginError = errors => ({
  type: LOGGED_FAILED,
  errors
});

export const loginSuccess = response => ({
  type: LOGGED_SUCCESSFULLY,
  response
});

export const loginRequest = () => ({
  type: LOGIN_ATTEMPT
});

export const login = (data, history) => dispatch => {
  dispatch(loginRequest());
  userService
    .login(data)
    .then(response => {
      if (response.user) {
        const { token } = response.user;
        const user = jwtDecode(token);
        localStorage.setItem('user', token);
        dispatch(loginSuccess(user));
        history.push('/');
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        dispatch(loginError(error));
      }
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};

export const logout = () => {
  userService.logout();
  return { type: LOGOUT };
};

export const loginActions = {
  login,
  loginError,
  loginRequest,
  loginSuccess,
  logout
};

export default loginActions;
