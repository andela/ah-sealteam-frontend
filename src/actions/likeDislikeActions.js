import {
    LIKEDISLIKE_SUCCESS,
    LIKEDISLIKE_FAIL,
    LIKEDISLIKE_BEGIN,
    BASE_URL
} from '../constants';
import { isAuthenticated } from '../services';
import Axios from 'axios';
const token = isAuthenticated();

export const API = `${BASE_URL}articles`;

export const likeDislikeBegin = () => ({
    type: LIKEDISLIKE_BEGIN
});

export const likeDislikeSuccess = payload => ({
    type: LIKEDISLIKE_SUCCESS,
    payload
});

export const likeDislikeFail = errors => ({
    type: LIKEDISLIKE_FAIL,
    errors
});

export const likeDislikeArticle = (slug, action) => dispatch => {
    dispatch(likeDislikeBegin());
    const headers = {
        Authorization: `Bearer ${token}`
    };

    // A backend error has forced me to do the following:
    const url = `${API}/${slug}/${action}${action === 'like' ? '/' : ''}`;

    return Axios.post(url, {}, { headers })
        .then(response => {
            dispatch(likeDislikeSuccess(response.data));
        })
        .catch(error => {
            console.log(error);
            dispatch(likeDislikeFail({ error }));
        });
};

export const likeDislikeActions = {
    likeDislikeArticle,
    likeDislikeBegin,
    likeDislikeFail,
    likeDislikeSuccess
};

export default likeDislikeActions;
