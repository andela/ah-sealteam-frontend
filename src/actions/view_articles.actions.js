import { FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES } from '../constants';
import { articlesService } from '../services';

export const fetchArticles = () => ({
    type: FETCH_ARTICLES
});

export const fetchArticlesSuccess = articles => ({
    type: FETCH_ARTICLES_SUCCESS,
    articles
});

const getAllArticles = () => dispatch => {
    articlesService
        .getArticles()
        .then(res => dispatch(fetchArticlesSuccess(res.data)))
        .catch(e => console.log(e));
};

export default getAllArticles;
