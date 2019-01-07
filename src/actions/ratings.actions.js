import { IsAuthenticated } from '../services';
import { toast } from 'react-toastify';
import * as types from '../constants';
import axios from 'axios';

const token = IsAuthenticated();

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

export const rateArticles = (slug, data) => dispatch => {
    axios
        .post(`${types.BASE_URL}articles/${slug}/rate`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            dispatch(rateArticleSuccess(response.data));
            if (response.status === 201) {
                toast.success('You successfuly rated this article', {
                    position: toast.POSITION.BOTTOM_LEFT,
                    pauseOnHover: true
                });
            }
        })
        .catch(err => {
            if (err.response.status === 400) {
                toast.error('You already rated this article', {
                    position: toast.POSITION.BOTTOM_LEFT,
                    pauseOnHover: true
                });
            }
        });
};
