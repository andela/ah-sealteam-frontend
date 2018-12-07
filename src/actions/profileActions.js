import axios from 'axios';
import { user, token } from './testdata';

// Import the constants which describe the intent of the actions
import {
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO,
    FETCH_USER_INFO_FAILURE,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE
} from '../constants';

/* Action Creators 1
 * Dealing with Fetching user profile information
 */
export const fetchUserInfo = () => ({
    type: FETCH_USER_INFO
});

export const fetchUserInfoSuccess = result => ({
    type: FETCH_USER_INFO_SUCCESS,
    result
});

export const fetchUserInfoFailure = error => ({
    type: FETCH_USER_INFO_FAILURE,
    error
});

/* Action Creators 2
 * Dealing with Updating user profile information
 */
export const updateProfile = () => ({
    type: UPDATE_PROFILE
});

export const updateProfileSuccess = result => ({
    type: UPDATE_PROFILE_SUCCESS,
    result
});

export const updateProfileFailure = error => ({
    type: UPDATE_PROFILE_FAILURE,
    error
});

/*
 * Dispatching the above actions so the reducer knows our intent
 */
export const getUserInfo = () => dispatch => {
    dispatch(fetchUserInfo());
    axios
        .get('http://127.0.0.1:8000/api/profiles/me', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => dispatch(fetchUserInfoSuccess(response.data)))
        .catch(err => {
            dispatch(fetchUserInfoFailure(err.response));
        });
};

export const updateUser = userData => dispatch => {
    const data = userData;
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    dispatch(updateProfile());
    axios
        .put(`http://127.0.0.1:8000/api/profiles/${user.username}`, data, {
            headers
        })
        .then(response => dispatch(updateProfileSuccess(response.data)))
        .catch(err => dispatch(updateProfileFailure(err.response)));
};
