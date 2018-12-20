import * as reducer from '../notificationsReducer';
import {
    GET_ALL_NOTIFICATIONS_BEGIN,
    GET_ALL_NOTIFICATIONS_SUCCESS,
    MARK_ALL_AS_READ_BEGIN,
    MARK_ALL_AS_READ_SUCCESS,
    MARK_AS_READ_BEGIN,
    MARK_AS_READ_SUCCESS,
    NOTIFICATION_ERROR,
    GET_UNREAD_NOTIFICATIONS_SUCCESS
} from '../../constants';
import { initialState } from '../notificationsReducer';
describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer.notificationsReducer(undefined, {})).toEqual(
            initialState
        );
    });
    it('should handle reducer GET_ALL_NOTIFICATIONS_BEGIN', () => {
        expect(
            reducer.notificationsReducer([], {
                type: GET_ALL_NOTIFICATIONS_BEGIN
            })
        ).toEqual({ loading: true });
    });
    it('should handle reducer GET_ALL_NOTIFICATIONS_SUCCESS', () => {
        const data = {
            notifications: 'This is a notifications',
            count: 5
        };
        expect(
            reducer.notificationsReducer([], {
                type: GET_ALL_NOTIFICATIONS_SUCCESS,
                ...data
            })
        ).toEqual({
            count: 5,
            loading: false,
            notifications: 'This is a notifications'
        });
    });
    it('should handle reducer GET_UNREAD_NOTIFICATIONS_SUCCESS', () => {
        const data = {
            notifications: 'This is a notifications',
            count: 5
        };
        expect(
            reducer.notificationsReducer([], {
                type: GET_UNREAD_NOTIFICATIONS_SUCCESS,
                ...data
            }).loading
        ).toEqual(false);
    });
    it('should handle reducer MARK_ALL_AS_READ_BEGIN', () => {
        expect(
            reducer.notificationsReducer([], {
                type: MARK_ALL_AS_READ_BEGIN
            }).loading
        ).toEqual(true);
    });
    it('should handle reducer MARK_ALL_AS_READ_SUCCESS', () => {
        expect(
            reducer.notificationsReducer([], {
                type: MARK_ALL_AS_READ_SUCCESS
            })
        ).toEqual({ loading: false, showDropdown: false });
    });
    it('should handle reducer MARK_AS_READ_BEGIN', () => {
        expect(
            reducer.notificationsReducer([], {
                type: MARK_AS_READ_BEGIN
            })
        ).toEqual({ loading: true });
    });
    it('should handle reducer MARK_AS_READ_SUCCESS', () => {
        expect(
            reducer.notificationsReducer([], {
                type: MARK_AS_READ_SUCCESS
            })
        ).toEqual({ loading: false });
    });
    it('should handle reducer NOTIFICATION_ERROR', () => {
        const errors = {
            error: 'network error'
        };
        expect(
            reducer.notificationsReducer([], {
                type: NOTIFICATION_ERROR,
                errors
            })
        ).toEqual({ errors: { error: 'network error' }, failed: true });
    });
});
