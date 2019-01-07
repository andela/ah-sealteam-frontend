import * as types from '../constants';

const initialState = {
    loading: false,
    ratings: 0,
    rating_id: null,
    average_ratings: 0,
    review: '',
    errors: null
};

const ratingsReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case types.RATE_ARTICLE:
            return { ...state, rating: true };
        case types.RATE_ARTICLE_SUCCESS:
            return { ...state, rated: true, rate_data: action.result };
        case types.RATE_ARTICLE_FAILURE:
            return { ...state, rated: false, rate_errors: action.errors };
        default:
            return state;
    }
};
export default ratingsReducer;
