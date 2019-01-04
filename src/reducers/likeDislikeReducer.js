import {
    LIKEDISLIKE_SUCCESS,
    LIKEDISLIKE_FAIL,
    LIKEDISLIKE_BEGIN
} from '../constants';

export const initialState = {
    likeCount: null,
    dislikeCount: null,
    loading: false,
    errors: null
};

const likeDislike = (state = initialState, action) => {
    switch (action.type) {
        case LIKEDISLIKE_BEGIN:
            return {
                ...state,
                loading: true
            };

        case LIKEDISLIKE_SUCCESS:
            return {
                ...state,
                likeCount: action.payload.like_count,
                dislikeCount: action.payload.dislike_count,
                loading: false,
                errors: null
            };
        case LIKEDISLIKE_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.errors
            };
        default:
            return state;
    }
};

export default likeDislike;
