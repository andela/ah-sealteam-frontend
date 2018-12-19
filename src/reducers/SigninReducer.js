import {
    LOGIN_ATTEMPT,
    LOGOUT,
    LOGGED_FAILED,
    LOGGED_SUCCESSFULLY
} from '../constants';

import { isAuthenticated } from '../services';
const token = isAuthenticated();
const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    errors: null,
    failed: false
};

const loginState = (token, initialState) => {
    if (token) {
        initialState.isLoggedIn = true;
        return initialState;
    } else {
        initialState.isLoggedIn = false;
        return initialState;
    }
};

export const userAuth = (
    state = { ...loginState(token, initialState) },
    action
) => {
    switch (action.type) {
        case LOGIN_ATTEMPT:
            return {
                ...state,
                isLoggingIn: true,
                noAttempt: false,
                errors: null,
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
                errors: null,
                isLoggedIn: true
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
};

export default userAuth;
