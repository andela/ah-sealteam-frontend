import * as types from '../constants';
import { auth } from '../utils/auth';
import axios from 'axios';

const token = auth();

export const createArticle = () => ({
    type: types.CREATE_ARTICLE
});

export const createArticleSuccess = result => ({
    type: types.CREATE_ARTICLE_SUCCESS,
    result
});

export const createArticleFailure = errors => ({
    type: types.CREATE_ARTICLE_FAILURE,
    errors
});

export const getArticle = () => ({
    type: types.GET_ARTICLE
});

export const getArticleSuccess = result => ({
    type: types.GET_ARTICLE_SUCCESS,
    result
});

export const getArticleFailure = errors => ({
    type: types.GET_ARTICLE_FAILURE,
    errors
});

export const saveArticle = data => dispatch => {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    dispatch(createArticle());
    axios
        .post(`${types.BASE_URL}articles/`, data, {
            headers
        })
        .then(response => dispatch(createArticleSuccess(response.data)))
        .catch(err => dispatch(createArticleFailure(err.response)));
};

export const fetchArticle = slug => dispatch => {
    dispatch(getArticle());
    axios
        .get(`${types.BASE_URL}articles/${slug}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => dispatch(getArticleSuccess(response.data)))
        .catch(err => {
            dispatch(getArticleFailure(err.response));
        });
};
