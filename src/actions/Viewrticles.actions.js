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
  dispatch(fetchArticles());
  articlesService
    .getArticles()
    .then(res => res.json())
    .then(data => dispatch(fetchArticlesSuccess(data)))
    .catch(e => console.log(e));
};

export default getAllArticles;
