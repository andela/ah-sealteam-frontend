import reducer from '../bookmark.reducer';
import {
    BOOKMARK_LOGOUT,
    BOOKMARK_PENDING,
    BOOMARK_FAILED,
    BOOMARK_FULFILLED
} from '../../constants';
import { user } from '../../utils/mocks';

const initialState = {
    pending: false,
    resolved: false,
    errors: null,
    articles: {}
};

describe('reducers', () => {
    it('it should test reducer initialState', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('it should test reducer BOOKMARK_PENDING', () => {
        expect(
            reducer(initialState, { type: BOOKMARK_PENDING }).pending
        ).toEqual(true);
    });
    it('it should test reducer BOOMARK_FAILED', () => {
        const errors = {
            error: 'Error example'
        };
        expect(
            reducer(initialState, { type: BOOMARK_FAILED, errors }).errors
        ).toEqual(errors);
    });
    it('it should test reducer BOOMARK_FULFILLED', () => {
        const payload = {
            data: 'articles'
        };
        expect(
            reducer(initialState, { type: BOOMARK_FULFILLED, payload })
        ).toEqual({
            articles: { data: 'articles' },
            errors: null,
            pending: false,
            resolved: true
        });
    });
    it('it should test reducer BOOKMARK_LOGOUT', () => {
        expect(reducer(initialState, { type: BOOKMARK_LOGOUT })).toEqual(
            initialState
        );
    });
});
