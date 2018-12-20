import axiosFetch from 'axios';
import {
    SOCIALLOGIN_FULFILLED,
    SOCIALLOGIN_REJECTED,
    SOCIALLOGIN_PENDING,
    SOCIALLOGIN_FAILED
} from '../constants';

export const socialSuccess = userData => ({
    type: SOCIALLOGIN_FULFILLED,
    payload: userData
});

export const startPending = () => ({
    type: SOCIALLOGIN_PENDING
});

export const socialFailed = () => ({
    type: SOCIALLOGIN_FAILED
});

export const rejectedSocial = error => dispatch => {
    dispatch({
        type: SOCIALLOGIN_REJECTED
    });
};

export const socialLogin = (url, socialtoken) => dispatch => {
    dispatch(startPending());
    return axiosFetch
        .post(url, {
            access_token: socialtoken
        })
        .then(response => dispatch(socialSuccess(response.data)))
        .catch(() => dispatch(socialFailed()));
};
