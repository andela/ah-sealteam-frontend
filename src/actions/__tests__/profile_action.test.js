import * as actions from '../../actions/profileActions';
import * as types from '../../constants';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions test', () => {
    it('Should create an action to initiate fetching of user info', () => {
        const expectedAction = {
            type: types.FETCH_USER_INFO
        };
        expect(actions.fetchUserInfo()).toEqual(expectedAction);
    });

    it('Should create ac action to successfully fetch user info', () => {
        const result = 'this is a mock result';
        const expectedAction = {
            type: types.FETCH_USER_INFO_SUCCESS,
            result
        };
        expect(actions.fetchUserInfoSuccess(result)).toEqual(expectedAction);
    });

    it('Should create an action to successfully fetch user info error', () => {
        const error = 'this is a mock error';
        const expectedAction = {
            type: types.FETCH_USER_INFO_FAILURE,
            error
        };
        expect(actions.fetchUserInfoFailure(error)).toEqual(expectedAction);
    });

    it('Should create an action to initiate updating of user info', () => {
        const expectedAction = {
            type: types.UPDATE_PROFILE
        };
        expect(actions.updateProfile()).toEqual(expectedAction);
    });

    it('Should create an action to successfully update user info', () => {
        const result = 'Successfull update done';
        const expectedAction = {
            type: types.UPDATE_PROFILE_SUCCESS,
            result
        };
        expect(actions.updateProfileSuccess(result)).toEqual(expectedAction);
    });

    it('Should create an action to successfully fetch error on failed update', () => {
        const error = 'Failed update done';
        const expectedAction = {
            type: types.UPDATE_PROFILE_FAILURE,
            error
        };
        expect(actions.updateProfileFailure(error)).toEqual(expectedAction);
    });
});

describe('FETCH_USER_INFO action test', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates FETCH_USER_INFO when fetching todos has been done', () => {
        fetchMock.getOnce('/profile/me', {
            body: { userInfo: ['do something'] },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [{ type: types.FETCH_USER_INFO }];
        const store = mockStore({ userInfo: [] });

        store.dispatch(actions.fetchUserInfo());
        expect(store.getActions()).toEqual(expectedActions);
    });
});
