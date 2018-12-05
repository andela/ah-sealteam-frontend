import * as actionTypes from '../constants';

export const initialState = {
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET_PASSWORD_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case actionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false
            };

        case actionTypes.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
};
