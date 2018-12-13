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
