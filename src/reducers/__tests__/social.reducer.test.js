import reducer from '../socialauth.reducer';
import {
    SOCIALLOGIN_FULFILLED,
    SOCIALLOGIN_PENDING,
    SOCIALLOGIN_REJECTED,
    SOCIALLOGIN_LOGOUT
} from '../../constants';
import { user } from '../../utils/mocks';

const initialState = {
    failed: false,
    resolved: false,
    rejected: false,
    pending: false,
    userdata: {}
};

describe('reducers', () => {
    it('it should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('it should return new state on dispatching SOCIAL_LOGIN action', () => {
        expect(
            reducer(initialState, { type: SOCIALLOGIN_PENDING }).pending
        ).toEqual(true);
    });
    it('It should test rejected social response', () => {
        expect(
            reducer(initialState, { type: SOCIALLOGIN_REJECTED }).rejected
        ).toEqual(true);
    });
    it('It should test SOCIALLOGIN_FULFILLED', () => {
        const successAction = {
            type: SOCIALLOGIN_FULFILLED,
            payload: user
        };
        expect(reducer(initialState, successAction)).toEqual({
            failed: false,
            pending: false,
            rejected: false,
            resolved: true,
            userdata: user
        });
    });
    it('It should test SOCIALLOGIN_LOGOUT', () => {
        expect(reducer(initialState, { type: SOCIALLOGIN_LOGOUT })).toEqual(
            initialState
        );
    });
});
