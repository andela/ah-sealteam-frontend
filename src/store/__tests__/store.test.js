import fetchMock from 'fetch-mock';
import store from '..';

describe('store', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should create a store', () => {
        const initialState = {};
        expect(store);
    });
});
