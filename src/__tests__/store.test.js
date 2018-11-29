import fetchMock from 'fetch-mock';
import configureStore from '../store';

describe('store', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create a store', () => {
    const initialState = {};
    expect(configureStore(initialState));
  });
});