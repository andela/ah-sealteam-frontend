import {
    MARK_ALL_AS_READ_SUCCESS,
    MARK_AS_READ_SUCCESS,
    NOTIFICATION_ERROR,
    GET_ALL_NOTIFICATIONS_BEGIN,
    GET_ALL_NOTIFICATIONS_SUCCESS,
    BASE_URL,
    MARK_AS_READ_BEGIN,
    GET_UNREAD_NOTIFICATIONS_SUCCESS
} from '../constants';
import Axios from 'axios';

export const API = `${BASE_URL}notifications`;
export const notificationError = errors => ({
    type: NOTIFICATION_ERROR,
    errors
});

export const markAsReadBegin = () => ({
    type: MARK_AS_READ_BEGIN
});

export const markAsReadSuccess = response => ({
    type: MARK_AS_READ_SUCCESS,
    response
});

export const markAllAsReadSuccess = response => ({
    type: MARK_ALL_AS_READ_SUCCESS,
    unreadCount: 0,
    unreadNotifications: [],
    response
});

export const getAllNotificationsBegin = () => ({
    type: GET_ALL_NOTIFICATIONS_BEGIN
});

export const getAllNotificationsSuccess = ({ notifications, count }) => ({
    type: GET_ALL_NOTIFICATIONS_SUCCESS,
    notifications,
    count
});

export const getUnreadNotificationsSuccess = ({ notifications, count }) => ({
    type: GET_UNREAD_NOTIFICATIONS_SUCCESS,
    unreadNotifications: notifications,
    unreadCount: count
});

export const getAllNotifications = token => dispatch => {
    dispatch(getAllNotificationsBegin());
    const headers = {
        Authorization: `Bearer ${token}`
    };
    return Axios.get(`${API}/all`, { headers })
        .then(response => {
            dispatch(getAllNotificationsSuccess(response.data.data));
        })
        .catch(error => {
            dispatch(notificationError({ error }));
        });
};

export const getUnreadNotifications = token => dispatch => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    return Axios.get(`${API}/unread`, { headers })
        .then(response => {
            dispatch(getUnreadNotificationsSuccess(response.data.data));
        })
        .catch(error => {
            dispatch(notificationError({ error }));
        });
};

export const markAsRead = (token, target) => dispatch => {
    dispatch(markAsReadBegin());
    const headers = {
        Authorization: `Bearer ${token}`
    };
    return Axios.put(`${API}/read/${target}/`, { headers })
        .then(response => {
            dispatch(markAsReadSuccess(response.data.data));
        })
        .catch(error => {
            dispatch(notificationError({ error }));
        });
};

export const markAllAsRead = (token, notifications) => dispatch => {
    try {
        notifications.map(notification =>
            dispatch(markAsRead(token, notification.id))
        );
        dispatch(markAllAsReadSuccess({}));
    } catch {
        dispatch(notificationError({ error: 'mark all as read fail' }));
    }
};

export const notificationActions = {
    notificationError,
    getAllNotificationsBegin,
    markAllAsReadSuccess,
    getAllNotificationsSuccess,
    getAllNotifications,
    getUnreadNotificationsSuccess,
    getUnreadNotifications,
    markAllAsRead
};

export default notificationActions;
