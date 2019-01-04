import axiosFetch from 'axios';
import {
    PUBLISHED_LOGOUT,
    PUBLISHED_PENDING,
    PUBLISHED_FAILED,
    PUBLISHED_FULFILLED
} from '../constants';
import { PUBLISHED_FETCH_URL } from '../config';
import { IsAuthenticated } from '../services';

const token = IsAuthenticated();

export const getPublishedSuccess = articles => ({
    type: PUBLISHED_FULFILLED,
    payload: articles
});

export const PublishedLogout = () => ({
    type: PUBLISHED_LOGOUT
});
export const startPending = () => ({
    type: PUBLISHED_PENDING
});

export const getPublishedFail = errors => ({
    type: PUBLISHED_FAILED,
    errors
});

export const fetchPublisheds = (page = null) => dispatch => {
    dispatch(startPending());
    let url = PUBLISHED_FETCH_URL;
    let headers = {
        Authorization: `Bearer ${token}`
    };
    if (page) {
        url = PUBLISHED_FETCH_URL + `?page=${page}`;
    }
    return axiosFetch
        .get(url, { headers: headers })
        .then(response => {
            dispatch(getPublishedSuccess(response.data));
            console.log(response.status);
        })
        .catch(errors => {
            if (errors.response === undefined) {
                dispatch(
                    getPublishedFail({
                        error: 'Make sure you have a working internet'
                    })
                );
            } else if (errors.response.status === 403) {
                dispatch(
                    getPublishedFail({
                        error: 'You not authenticated. Kindly login'
                    })
                );
            } else {
                dispatch(getPublishedFail({ error: 'Unknown error' }));
            }
        });
};
