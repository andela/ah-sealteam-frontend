import {
    SOCIALLOGIN_FULFILLED,
    SOCIALLOGIN_REJECTED,
    SOCIALLOGIN_PENDING,
    SOCIALLOGIN_FAILED,
    SOCIALLOGIN_LOGOUT
} from '../constants';

const initialState = {
    resolved: false,
    rejected: false,
    pending: false,
    userdata: {},
    failed: false
};

const fulfilledState = (state, action) => ({
    ...state,
    resolved: true,
    pending: false,
    userdata: action.payload
});
const SocialAuthReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case SOCIALLOGIN_FULFILLED:
            return fulfilledState(state, action);
        case SOCIALLOGIN_REJECTED:
            return {
                ...state,
                rejected: true
            };
        case SOCIALLOGIN_PENDING:
            return {
                ...state,
                pending: true
            };
        case SOCIALLOGIN_FAILED:
            return {
                ...state,
                pending: false,
                failed: true
            };
        case SOCIALLOGIN_LOGOUT:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
export default SocialAuthReducer;
