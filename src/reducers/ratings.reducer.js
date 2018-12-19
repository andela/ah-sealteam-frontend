import {
    RATINGS_LORDING,
    RATINGS_FETCH_SUCCESS,
    RATINGS_FETCH_FAILED,
    RATINGS_FETCHR_LOGOUT,
    GET_AVERAGE_RATINGS
} from '../constants';

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
        case RATINGS_FETCH_SUCCESS:
            return {
                loading: false,
                review: action.payload.review,
                ratings: action.payload.ratings,
                rating_id: action.payload.id
            };
        case GET_AVERAGE_RATINGS:
            return {
                ...state,
                average_ratings: action.average,
                loading: false
            };
        case RATINGS_FETCH_FAILED:
            return {
                ...state,
                loading: false,
                errors: action.errors
            };
        case RATINGS_LORDING:
            return {
                ...state,
                loading: true
            };
        case RATINGS_FETCHR_LOGOUT:
            return {
                ...initialState
            };
        default:
            return state;
    }
};
export default ratingsReducer;
