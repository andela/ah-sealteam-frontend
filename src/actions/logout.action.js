import { SOCIALLOGIN_LOGOUT, LOGOUT, USER_INFO_LOGOUT } from '../constants';

export const socialLogout = () => ({
    type: SOCIALLOGIN_LOGOUT
});

export const userInfoLogout = () => ({
    type: USER_INFO_LOGOUT
});

export const signinLogout = () => {
    return { type: LOGOUT };
};
