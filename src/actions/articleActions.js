import * as types from '../constants';
import { auth } from '../utils/auth';
import axios from 'axios';

const token = auth();

//Create Article
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

//Rate Article
export const rateArticle = () => ({
    type: types.RATE_ARTICLE
});

export const rateArticleSuccess = result => ({
    type: types.RATE_ARTICLE_SUCCESS,
    result
});

export const rateArticleFailure = errors => ({
    type: types.RATE_ARTICLE_FAILURE,
    errors
});

//Get Article
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

//Edit Article
export const editArticle = () => ({
    type: types.EDIT_ARTICLE
});

export const editArticleSuccess = result => ({
    type: types.EDIT_ARTICLE_SUCCESS,
    result
});

export const editArticleFailure = errors => ({
    type: types.EDIT_ARTICLE_FAILURE,
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
        .get(
            `${types.BASE_URL}articles/${slug}`,
            token
                ? {
                      headers: { Authorization: `Bearer ${token}` }
                  }
                : null
        )
        .then(response => dispatch(getArticleSuccess(response.data)))
        .catch(err => {
            dispatch(getArticleFailure(err.response));
        });
};

export const updateArticle = (slug, data) => dispatch => {
    dispatch(editArticle());
    axios
        .put(`${types.BASE_URL}articles/${slug}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => dispatch(editArticleSuccess(response.data)))
        .catch(err => dispatch(editArticleFailure(err.response)));
};

export const removeArticle = slug => {
    axios
        .delete(`${types.BASE_URL}articles/${slug}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.data)
        .catch(err => err.response);
};

export const rateArticles = (slug, data) => dispatch => {
    axios
        .post(`${types.BASE_URL}articles/${slug}/rate`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => dispatch(rateArticleSuccess(response.data)))
        .catch(err => dispatch(rateArticleFailure(err.response)));
};
