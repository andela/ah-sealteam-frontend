import {
    MARK_ALL_AS_READ_SUCCESS,
    MARK_AS_READ_SUCCESS,
    NOTIFICATION_ERROR,
    MARK_ALL_AS_READ_BEGIN,
    MARK_AS_READ_BEGIN,
    GET_ALL_NOTIFICATIONS_BEGIN,
    GET_ALL_NOTIFICATIONS_SUCCESS,
    GET_UNREAD_NOTIFICATIONS_SUCCESS
} from '../constants';

export const initialState = {
    notifications: [],
    unreadNotifications: [],
    count: 0,
    unreadCount: 0,
    errors: null,
    failed: false,
    showDropdown: true,
    loading: false
};

export const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_NOTIFICATIONS_BEGIN:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                notifications: action.notifications,
                count: action.count
            };
        case GET_UNREAD_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                unreadNotifications: action.unreadNotifications,
                unreadCount: action.unreadCount
            };
        case MARK_ALL_AS_READ_BEGIN:
            return {
                ...state,
                loading: true,
                showDropdown: false
            };
        case MARK_ALL_AS_READ_SUCCESS:
            return {
                ...state,
                loading: false,
                showDropdown: false,
                unreadNotifications: action.unreadNotifications,
                unreadCount: action.unreadCount
            };
        case MARK_AS_READ_BEGIN:
            return {
                ...state,
                loading: true
            };
        case MARK_AS_READ_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case NOTIFICATION_ERROR:
            return {
                ...state,
                failed: true,
                errors: action.errors
            };
        default:
            return state;
    }
};

export default notificationsReducer;
