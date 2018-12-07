import {
    FETCH_USER_INFO,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAILURE,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
} from '../constants';

//Declare the initial state
const initialState = {
    data: {},
    fetching: false,
    errors: null,
    fetched: false
};

/* The {Reducer} function
 * Every action passes through the reducer
 * Handles the responses to the actions
 */
function userInfo(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_INFO:
            return { ...state, fetching: true };
        case FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.result
            };
        case FETCH_USER_INFO_FAILURE:
            return { ...state, fetching: false, errors: action.error };
        case UPDATE_PROFILE:
            return { ...state, fetching: true };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.result
            };
        case UPDATE_PROFILE_FAILURE:
            return { ...state, fetching: false, errors: action.error };
        default:
            return state;
    }
}

export default userInfo;
