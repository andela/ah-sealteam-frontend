import userInfo from '../ProfileReducer';
import * as types from '../../constants';

describe('todos reducer', () => {
    const initialState = {
        data: {},
        fetching: false,
        errors: null,
        fetched: false
    };
    it('should return the initial state', () => {
        expect(userInfo(initialState, {})).toEqual(initialState);
    });

    it('should handle FETCH_USER_INFO', () => {
        expect(
            userInfo(initialState, {
                type: types.FETCH_USER_INFO
            })
        ).toEqual({
            ...initialState,
            fetching: true
        });

        expect(
            userInfo(initialState, {
                type: types.FETCH_USER_INFO_SUCCESS,
                result: { name: 'Lazo' }
            })
        ).toEqual({
            ...initialState,
            fetched: true,
            data: { name: 'Lazo' }
        });

        expect(
            userInfo(initialState, {
                type: types.FETCH_USER_INFO_FAILURE,
                error: 'This is a mock error'
            })
        ).toEqual({
            ...initialState,
            errors: 'This is a mock error'
        });
    });

    it('should update user info', () => {
        expect(
            userInfo(initialState, {
                type: types.UPDATE_PROFILE
            })
        ).toEqual({
            ...initialState,
            fetching: true
        });

        expect(
            userInfo(initialState, {
                type: types.UPDATE_PROFILE_SUCCESS,
                result: 'Lazarus'
            })
        ).toEqual({
            ...initialState,
            data: 'Lazarus',
            fetched: true
        });

        expect(
            userInfo(initialState, {
                type: types.UPDATE_PROFILE_FAILURE,
                error: 'This is a mock error'
            })
        ).toEqual({
            ...initialState,
            errors: 'This is a mock error'
        });
    });
});
