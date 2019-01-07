import * as types from '../constants';

const initialState = {
    data: {},
    fetching: false,
    fetched: false,
    errors: null
};

function articleCRD(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_ARTICLE:
            return { ...state, fetching: true };
        case types.CREATE_ARTICLE_SUCCESS:
            return { ...state, fetched: true, data: action.result };
        case types.CREATE_ARTICLE_FAILURE:
            return { ...state, fetching: false, errors: action.errors };
        case types.GET_ARTICLE:
            return { ...state, fetching: true };
        case types.GET_ARTICLE_SUCCESS:
            return { ...state, fetched: true, data: action.result };
        case types.GET_ARTICLE_FAILURE:
            return { ...state, errors: action.errors };
        case types.EDIT_ARTICLE:
            return { ...state, fetching: true };
        case types.EDIT_ARTICLE_SUCCESS:
            return {
                ...state,
                fetched: true,
                updated: true,
                data: action.result
            };
        case types.EDIT_ARTICLE_FAILURE:
            return {
                ...state,
                fetching: false,
                updated: false,
                errors: action.errors
            };
        default:
            return state;
    }
}

export default articleCRD;
