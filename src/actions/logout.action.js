import { SOCIALLOGIN_LOGOUT, LOGOUT } from '../constants';

export const socialLogout = () => ({
    type: SOCIALLOGIN_LOGOUT
});

export const signinLogout = () => {
    return { type: LOGOUT };
};
