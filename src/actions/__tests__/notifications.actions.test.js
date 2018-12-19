import * as actions from '../notificationsActions';
import {
    GET_ALL_NOTIFICATIONS_BEGIN,
    GET_ALL_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ_SUCCESS,
    NOTIFICATION_ERROR,
    MARK_ALL_AS_READ_SUCCESS
} from '../../constants';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
// import {API} from "../notificationsActions";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Notifications actions', () => {
    it('Testing actions NOTIFICATION_ERROR', () => {
        const errors = {
            network: 'Network error'
        };
        const expectedAction = {
            type: NOTIFICATION_ERROR,
            errors
        };
        expect(actions.notificationError(errors)).toEqual(expectedAction);
    });
    it('Testing actions MARK_AS_READ_SUCCESS', () => {
        const response = {
            status: 403
        };
        const expectedAction = {
            type: MARK_AS_READ_SUCCESS,
            response
        };
        expect(actions.markAsReadSuccess(response)).toEqual(expectedAction);
    });
    it('Testing actions MARK_ALL_AS_READ_SUCCESS', () => {
        const response = {
            status: 403
        };
        const expectedAction = {
            type: MARK_ALL_AS_READ_SUCCESS,
            unreadCount: 0,
            unreadNotifications: [],
            response
        };
        expect(actions.markAllAsReadSuccess(response)).toEqual(expectedAction);
    });
    it('Testing actions GET_ALL_NOTIFICATIONS_BEGIN', () => {
        const expectedAction = {
            type: GET_ALL_NOTIFICATIONS_BEGIN
        };
        expect(actions.getAllNotificationsBegin()).toEqual(expectedAction);
    });
    it('Testing actions GET_ALL_NOTIFICATIONS_SUCCESS', () => {
        const data = {
            notifications: 'Network error',
            count: 7
        };
        const expectedAction = {
            type: GET_ALL_NOTIFICATIONS_SUCCESS,
            ...data
        };
        expect(actions.getAllNotificationsSuccess(data)).toEqual(
            expectedAction
        );
    });
});
describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates GET_UNREAD_NOTIFICATIONS_SUCESS when fetching has been done', () => {
        fetchMock.getOnce(`${actions.API}/unread`, {
            body: { data },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: NOTIFICATION_ERROR, errors: { error: 'Bad request' } }
        ];
        const store = mockStore({ data: '' });

        return store
            .dispatch(actions.getUnreadNotifications('token'))
            .then(() => {
                // return of async actions
                expect(store.getActions()[0].type).toEqual(
                    expectedActions[0].type
                );
            });
    });
    it('creates MARK_ALL_AS_READ_SUCCCESS when fetching has been done', () => {
        fetchMock.getOnce(`${actions.API}/all`, {
            body: { data },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [{ type: MARK_ALL_AS_READ_SUCCESS }];
        const store = mockStore({ data: '' });

        store.dispatch(actions.markAllAsRead('token', data.notifications));
        // return of async actions
        expect(store.getActions()[4].type).toEqual(expectedActions[0].type);
    });
});

const data = {
    count: 4,
    notifications: [
        {
            id: 6,
            actor: {
                type: 'user',
                data: 'rickynyairo'
            },
            verb: 'comment_created',
            target: {
                type: 'article',
                data: 'sixth'
            },
            level: 'info',
            unread: true,
            timestamp: '2018-12-18T17:45:32.079342Z',
            description:
                'rickynyairo posted a comment to sixth on 18-December-2018 17:45',
            emailed: true,
            data: {
                resource_url: 'http://localhost:8000'
            }
        },
        {
            id: 5,
            actor: {
                type: 'user',
                data: 'rickynyairo'
            },
            verb: 'user_following',
            target: {
                type: 'article',
                data: 'sixth'
            },
            level: 'info',
            unread: true,
            timestamp: '2018-12-18T17:45:25.118577Z',
            description:
                'rickynyairo posted a comment to sixth on 18-December-2018 17:45',
            emailed: true,
            data: {
                resource_url: 'http://localhost:8000'
            }
        },
        {
            id: 4,
            actor: {
                type: 'user',
                data: 'rickynyairo'
            },
            verb: 'article_created',
            target: {
                type: 'article',
                data: 'sixth'
            },
            level: 'info',
            unread: true,
            timestamp: '2018-12-18T17:45:21.317305Z',
            description:
                'rickynyairo posted a comment to sixth on 18-December-2018 17:45',
            emailed: true,
            data: {
                resource_url: 'http://localhost:8000'
            }
        },
        {
            id: 2,
            actor: {
                type: 'user',
                data: 'rickynyairo'
            },
            verb: 'article_rating',
            target: {
                type: 'user',
                data: 'rickyombati'
            },
            level: 'info',
            unread: true,
            timestamp: '2018-12-18T17:44:26.352157Z',
            description: 'rickynyairo followed you on 18-December-2018 17:44',
            emailed: true,
            data: {
                resource_url: 'http://localhost:8000/api/profiles/rickynyairo'
            }
        }
    ]
};
