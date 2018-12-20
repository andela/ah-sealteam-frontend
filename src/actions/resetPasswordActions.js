import * as actionTypes from '../constants';
import axios from 'axios';
import swal from 'sweetalert';
import { DOMAIN } from '../constants';
const API = `${DOMAIN}/api/users/forgotpassword/`;

export const resetPasswordBegin = () => ({
    type: actionTypes.RESET_PASSWORD_BEGIN
});

export const resetPasswordSuccess = data => ({
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    payload: data
});

export const resetPasswordFailure = error => ({
    type: actionTypes.RESET_PASSWORD_FAILURE,
    payload: error
});

export const resetPassword = data => {
    return dispatch => {
        const request = axios.post(API, data);
        dispatch(resetPasswordBegin());
        return request
            .then(response => {
                swal({
                    title: 'Reset Password',
                    text: response.data.user.message,
                    icon: 'success',
                    button: true
                });
                dispatch(resetPasswordSuccess(response.data));
            })
            .catch(error => {
                dispatch(resetPasswordFailure(error));
            });
    };
};
