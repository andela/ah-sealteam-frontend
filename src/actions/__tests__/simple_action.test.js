import { simpleAction } from '../simple_action';
import fetchMock from 'fetch-mock';
describe('simple actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create an action to dispatch success response.', () => {
    const payload = 'result_of_simple_action';
    const expectedAction = {
      type: 'SIMPLE_ACTION',
      payload
    };
    expect(simpleAction(payload)).toEqual(expectedAction);
  });
});
