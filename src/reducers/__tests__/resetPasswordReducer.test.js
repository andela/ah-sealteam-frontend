import resetPassword from '../resetPasswordReducer';
import {
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_BEGIN
} from '../../constants';

const initialState = {
    loading: false,
    error: null
};

describe('ResetPassword reducers', () => {
    it('should provide the initial state', () => {
        expect(resetPassword(undefined, {})).toEqual(initialState);
    });

    it('should add data to the state', () => {
        expect(
            resetPassword(initialState, {
                type: RESET_PASSWORD_SUCCESS,
                payload: ''
            }).loading
        ).toEqual(false);
        expect(
            resetPassword(initialState, {
                type: RESET_PASSWORD_FAILURE,
                payload: ''
            }).loading
        ).toEqual(false);
        expect(
            resetPassword(initialState, {
                type: RESET_PASSWORD_BEGIN,
                payload: ''
            }).loading
        ).toEqual(true);
    });
});
