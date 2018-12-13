import * as actions from '../../actions/articleActions';
import * as types from '../../constants';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions test', () => {
    it('Should create ac action to successfully create article', () => {
        const result = 'this is a mock result';
        const expectedAction = {
            type: types.CREATE_ARTICLE_SUCCESS,
            result
        };
        expect(actions.createArticleSuccess(result)).toEqual(expectedAction);
    });

    it('Should create an action to successfully fetch user info error', () => {
        const errors = 'this is a mock error';
        const expectedAction = {
            type: types.CREATE_ARTICLE_FAILURE,
            errors
        };
        expect(actions.createArticleFailure(errors)).toEqual(expectedAction);
    });
});

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates CREATE_ARTICLE when fetching todos has been done', () => {
        fetchMock.getOnce('/articles/create', {
            body: { data: ['do something'] },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [{ type: types.CREATE_ARTICLE }];
        const store = mockStore({ data: [] });

        store.dispatch(actions.saveArticle());
        expect(store.getActions()).toEqual(expectedActions);
    });
});
