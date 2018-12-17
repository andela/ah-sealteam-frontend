import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { user } from '../../utils/mocks';

import {
    SOCIALLOGIN_FULFILLED,
    SOCIALLOGIN_REJECTED,
    SOCIALLOGIN_PENDING,
    SOCIALLOGIN_FAILED
} from '../../constants';

import {
    socialLogin,
    rejectedSocial,
    startPending,
    socialSuccess,
    socialFailed
} from '../socialauth.action';

import { FB_LOGIN_URL, USER_LOGTOKEN } from '../../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('it should create social login action', () => {
        const payload = {};
        const expectedAction = {
            type: SOCIALLOGIN_FULFILLED,
            payload
        };
        expect(socialSuccess(payload)).toEqual(expectedAction);
    });

    it('It should test social login pending', () => {
        const expectedAction = {
            type: SOCIALLOGIN_PENDING
        };
        expect(startPending()).toEqual(expectedAction);
    });
    it('It will test SOCIALLOGIN_PENDING', () => {
        const expectedAction = {
            type: SOCIALLOGIN_FAILED
        };
        expect(socialFailed()).toEqual(expectedAction);
    });
});

describe('Mocking async functions', () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it('Create fetch success', () => {
        fetchMock.getOnce('/login', {
            body: { user: user },
            headers: { 'content-type': 'application/json' }
        });
        const expectedResult = [
            { type: SOCIALLOGIN_PENDING },
            {
                type: SOCIALLOGIN_FAILED
            }
        ];
        const store = mockStore({ user: {} });
        return store
            .dispatch(socialLogin(FB_LOGIN_URL, USER_LOGTOKEN))
            .then(() => {
                expect(store.getActions()).toEqual(expectedResult);
            });
    });
    // it("should return failure", () => {
    //     const error = "There is an error";
    //     const expectedAction = {
    //         type: SOCIALLOGIN_REJECTED,
    //         error
    //     };
    //     expect(rejectedSocial(error)).toEqual(expectedAction);
    // });
    // it("it should create rejected social login", () => {
    //
    //     const expectedAction = {
    //         type: SOCIALLOGIN_REJECTED
    //     };
    //     // expect(rejectedSocial()).toEqual(expectedAction);
    //     const store = mockStore();
    //     return store.dispatch(rejectedSocial("eror")).then(() => {
    //         expect(store.getActions()).toEqual(expectedAction);
    //     });
    // });
});
// });
