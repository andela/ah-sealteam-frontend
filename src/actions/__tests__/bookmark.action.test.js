import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { user } from '../../utils/mocks';

import {
    BOOKMARK_PENDING,
    BOOMARK_FAILED,
    BOOMARK_FULFILLED
} from '../../constants';

import {
    getBookMarkFail,
    startPending,
    getBookMarkSuccess,
    fetchBookMarks
} from '../boomark.actions';

import { FB_LOGIN_URL, USER_LOGTOKEN } from '../../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('It should test action BOOKMARK_PENDING', () => {
        const expectedAction = {
            type: BOOKMARK_PENDING
        };
        expect(startPending()).toEqual(expectedAction);
    });

    it('It should test action BOOMARK_FAILED', () => {
        const errors = {
            error: 'fake error'
        };
        const expectedAction = {
            type: BOOMARK_FAILED,
            errors
        };
        expect(getBookMarkFail(errors)).toEqual(expectedAction);
    });
    it('It should test action BOOMARK_FULFILLED', () => {
        const payload = {
            article: 'article example'
        };
        const expectedAction = {
            type: BOOMARK_FULFILLED,
            payload
        };
        expect(getBookMarkSuccess(payload)).toEqual(expectedAction);
    });
});

describe('Mocking async functions', () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it('Create fetch success', () => {
        fetchMock.getOnce('/profile', {
            body: { user: user },
            headers: { 'content-type': 'application/json' }
        });
        const expectedResult = [
            { type: 'BOOKMARK_PENDING' },
            { errors: '[Error: Network Error]', type: 'BOOMARK_FAILED' }
        ];
        const store = mockStore({ user: {} });
        return store
            .dispatch(fetchBookMarks(FB_LOGIN_URL, USER_LOGTOKEN))
            .then(() => {
                expect(store.getActions()[0]).toEqual(expectedResult[0]);
            });
    });
});
