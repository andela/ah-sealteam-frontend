import {
    PUBLISHED_LOGOUT,
    PUBLISHED_PENDING,
    PUBLISHED_FAILED,
    PUBLISHED_FULFILLED
} from '../constants';

const initialState = {
    pending: false,
    resolved: false,
    errors: null,
    articles: {}
};

const fulfilledState = (state, action) => ({
    ...state,
    resolved: true,
    pending: false,
    articles: action.payload
});
const PublishedArticleReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case PUBLISHED_FULFILLED:
            return fulfilledState(state, action);
        case PUBLISHED_FAILED:
            return {
                ...state,
                errors: action.errors,
                pending: false
            };
        case PUBLISHED_PENDING:
            return {
                ...state,
                pending: true
            };
        case PUBLISHED_LOGOUT:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
export default PublishedArticleReducer;
