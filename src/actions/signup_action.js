import axios from 'axios';
import {
    BASE_URL,
    USER_SIGNUP,
    USER_SIGNUP_ERROR,
    USER_SIGNUP_SUCCESS
} from '../constants';
import swal from 'sweetalert';
import { history } from '../history';

const API = BASE_URL + 'users/';

export const signupUser = () => ({
  type: USER_SIGNUP
});

export const signupUserFail = errors => ({
  type: USER_SIGNUP_ERROR,
  errors
});

export const signupUserSuccess = () => ({
  type: USER_SIGNUP_SUCCESS
});

export const signUpAction = data => dispatch => {
  dispatch(signupUser());
  if (navigator.onLine) {
    axios({
      method: 'post',
      url: API,
      data: data
    })
      .then(response => {
        dispatch(signupUserSuccess());
        swal({
          title: 'Welcome!',
          text:
            'Your registration is successful!!! Check your Email \n' +
            'To Activate Your Account.',
          icon: 'success'
        }).then(() => {
          history.push('./');
        });
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 500) {
            history.push('./server-error');
          }
          dispatch(signupUserFail(error.response.data.errors));
        }
      });
  } else {
    history.push('./server-error');
  }
};

export default signUpAction;
