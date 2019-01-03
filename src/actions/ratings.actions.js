import {
    RATINGS_LORDING,
    RATINGS_FETCH_SUCCESS,
    RATINGS_FETCH_FAILED,
    GET_AVERAGE_RATINGS
} from '../constants';
import axiosFetch from 'axios';
import { IsAuthenticated } from '../services';

const token = IsAuthenticated();

export const startLoading = () => ({
    type: RATINGS_LORDING
});

export const ratingsSuccess = payload => ({
    type: RATINGS_FETCH_SUCCESS,
    payload: {
        review: payload.rate,
        ratings: payload.comment,
        id: payload.id
    }
});

export const ratingsFailed = errors => ({
    type: RATINGS_FETCH_FAILED,
    errors
});

export const getAverageRatings = average => ({
    type: GET_AVERAGE_RATINGS,
    average
});

let headers = {
    Authorization: `Bearer ${token}`
};
export const postRatings = (url, payload) => dispatch => {
    dispatch(startLoading());
    return axiosFetch
        .post(url, payload, { headers: headers })
        .then(response => dispatch(ratingsSuccess(response.data)))
        .catch(errors => {
            if (errors.response === undefined) {
                dispatch(
                    ratingsFailed({ error: 'Unstable internet connection' })
                );
            } else if (errors.response.status === 404) {
                dispatch(ratingsFailed({ error: 'Article was not found' }));
            } else if (errors.response.status === 401) {
                dispatch(ratingsFailed({ error: 'You are not authorised' }));
            } else if (errors.response.status === 400) {
                dispatch(
                    ratingsFailed({ error: errors.response.data.errors[0] })
                );
            } else if (errors.response.status === 403) {
                dispatch(ratingsFailed({ error: errors.response.data.detail }));
            }
        });
};
export const getRatings = url => dispatch => {
    dispatch(startLoading());
    return axiosFetch.get(url, { headers: headers }).then(response => {
        let average = response.data.average ? response.data.average : 0;
        dispatch(getAverageRatings(average));
    });
};
