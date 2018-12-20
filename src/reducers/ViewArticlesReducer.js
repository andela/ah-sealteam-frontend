import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS } from '../constants';

const initialState = {
    articles: [],
    isFetching: false
};

const allArticles = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                articles: action.articles
            };
        default:
            return state;
    }
};

export default allArticles;
