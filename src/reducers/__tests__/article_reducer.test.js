import articleCRD from '../articleReducer';
import * as types from '../../constants';

describe('Article reducer', () => {
    const initialState = {
        data: {},
        fetching: false,
        fetched: false,
        errors: null
    };
    it('should return the initial state', () => {
        expect(articleCRD(initialState, {})).toEqual(initialState);
    });

    it('should handle CREATE_ARTICLE', () => {
        expect(
            articleCRD(initialState, {
                type: types.CREATE_ARTICLE
            })
        ).toEqual({
            ...initialState,
            fetching: true
        });

        expect(
            articleCRD(initialState, {
                type: types.CREATE_ARTICLE_SUCCESS,
                result: { success: true }
            })
        ).toEqual({
            ...initialState,
            fetched: true,
            data: { success: true }
        });

        expect(
            articleCRD(initialState, {
                type: types.CREATE_ARTICLE_FAILURE,
                errors: 'This is a mock error'
            })
        ).toEqual({
            ...initialState,
            errors: 'This is a mock error'
        });
    });
});
