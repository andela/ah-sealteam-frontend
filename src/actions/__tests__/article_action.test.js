import * as actions from '../../actions/articleActions';
import * as types from '../../constants';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions test', () => {
    it('Should create ac action to initiate create article', () => {
        const expectedAction = {
            type: types.CREATE_ARTICLE
        };
        expect(actions.createArticle()).toEqual(expectedAction);
    });

    it('Should create ac action to successfully create article', () => {
        const result = 'this is a mock result';
        const expectedAction = {
            type: types.CREATE_ARTICLE_SUCCESS,
            result
        };
        expect(actions.createArticleSuccess(result)).toEqual(expectedAction);
    });

    it('Should create an action to successfully fetch an article error', () => {
        const errors = 'this is a mock error';
        const expectedAction = {
            type: types.CREATE_ARTICLE_FAILURE,
            errors
        };
        expect(actions.createArticleFailure(errors)).toEqual(expectedAction);
    });

    it('Should create ac action to initiate get an article', () => {
        const expectedAction = {
            type: types.GET_ARTICLE
        };
        expect(actions.getArticle()).toEqual(expectedAction);
    });

    it('Should create ac action to successfully get an article', () => {
        const result = 'this is a mock result';
        const expectedAction = {
            type: types.GET_ARTICLE_SUCCESS,
            result
        };
        expect(actions.getArticleSuccess(result)).toEqual(expectedAction);
    });

    it('Should create an action to successfully fetch an article error', () => {
        const errors = 'this is a mock error';
        const expectedAction = {
            type: types.GET_ARTICLE_FAILURE,
            errors
        };
        expect(actions.getArticleFailure(errors)).toEqual(expectedAction);
    });

    it('Should create ac action to initiate edit an article', () => {
        const expectedAction = {
            type: types.EDIT_ARTICLE
        };
        expect(actions.editArticle()).toEqual(expectedAction);
    });

    it('Should create ac action to successfully edit an article', () => {
        const result = 'this is a mock result';
        const expectedAction = {
            type: types.EDIT_ARTICLE_SUCCESS,
            result
        };
        expect(actions.editArticleSuccess(result)).toEqual(expectedAction);
    });

    it('Should create an action to successfully fetch an article error', () => {
        const errors = 'this is a mock error';
        const expectedAction = {
            type: types.EDIT_ARTICLE_FAILURE,
            errors
        };
        expect(actions.editArticleFailure(errors)).toEqual(expectedAction);
    });
});

describe('Create Article action test', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates CREATE_ARTICLE when fetching has been done', () => {
        fetchMock.getOnce('/articles/create', {
            body: { data: ['do something'] },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [{ type: types.CREATE_ARTICLE }];
        const store = mockStore({ data: [] });

        store.dispatch(actions.saveArticle());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates GET_ARTICLE when fetching has been done', () => {
        fetchMock.getOnce('/articles/article-one', {
            body: { data: ['do something'] },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [{ type: types.GET_ARTICLE }];
        const store = mockStore({ data: [] });

        store.dispatch(actions.fetchArticle());
        expect(store.getActions()).toEqual(expectedActions);
    });
});
