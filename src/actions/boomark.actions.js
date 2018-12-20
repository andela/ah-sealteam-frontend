import axiosFetch from 'axios';
import {
    BOOKMARK_PENDING,
    BOOMARK_FAILED,
    BOOMARK_FULFILLED
} from '../constants';
import { BOOKMARK_FETCH_URL } from '../config';
import { IsAuthenticated } from '../services';

const token = IsAuthenticated();

export const getBookMarkSuccess = articles => ({
    type: BOOMARK_FULFILLED,
    payload: articles
});

export const startPending = () => ({
    type: BOOKMARK_PENDING
});

export const getBookMarkFail = errors => ({
    type: BOOMARK_FAILED,
    errors
});

export const fetchBookMarks = (page = null) => dispatch => {
    dispatch(startPending());
    let url = BOOKMARK_FETCH_URL;
    let headers = {
        Authorization: `Bearer ${token}`
    };
    if (page) {
        url = BOOKMARK_FETCH_URL + `?page=${page}`;
    }
    return axiosFetch
        .get(url, { headers: headers })
        .then(response => {
            dispatch(getBookMarkSuccess(response.data));
            console.log(response.status);
        })
        .catch(errors => {
            if (errors.response === undefined) {
                dispatch(
                    getBookMarkFail({
                        error: 'Make sure you have a working internet'
                    })
                );
            } else if (errors.response.status === 403) {
                dispatch(
                    getBookMarkFail({
                        error: 'You not authenticated. Kindly login'
                    })
                );
            } else {
                dispatch(getBookMarkFail({ error: 'Unknown error' }));
            }
        });
};
