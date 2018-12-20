import {
    BOOKMARK_LOGOUT,
    BOOKMARK_PENDING,
    BOOMARK_FAILED,
    BOOMARK_FULFILLED
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
const BookMarkArticleReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case BOOMARK_FULFILLED:
            return fulfilledState(state, action);
        case BOOMARK_FAILED:
            return {
                ...state,
                errors: action.errors
            };
        case BOOKMARK_PENDING:
            return {
                ...state,
                pending: true
            };
        case BOOKMARK_LOGOUT:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
export default BookMarkArticleReducer;
