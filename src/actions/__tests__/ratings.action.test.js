import * as actions from '../ratings.actions';
import * as types from '../../constants';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { METHODS } from 'http';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions to rate an article', () => {
    it('Should create an action to intiate rating of an article', () => {
        const expectedAction = {
            type: types.RATE_ARTICLE
        };
        expect(actions.rateArticle()).toEqual(expectedAction);
    });

    it('Should create an action to rate an article', async () => {
        const store = mockStore();
        expect(store.dispatch(actions.rateArticles())).toEqual(undefined);
    });

    it('Should create an action to fetch success response due to rating of an article', () => {
        const expectedAction = {
            type: types.RATE_ARTICLE_SUCCESS
        };
        expect(actions.rateArticleSuccess()).toEqual(expectedAction);
    });

    it('Should create an action to fetch error due to rating of an article', () => {
        const expectedAction = {
            type: types.RATE_ARTICLE_FAILURE
        };
        expect(actions.rateArticleFailure()).toEqual(expectedAction);
    });
});
