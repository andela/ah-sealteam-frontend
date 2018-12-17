import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as resetPasswordActions from '../resetPasswordActions';
import * as actions from '../../constants';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import mockAxios from 'axios';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test action creators', () => {
  it('Should dispatch RESET_PASSWORD_BEGIN type', () => {
    expect(resetPasswordActions.resetPasswordBegin({}).type).toEqual(
      actions.RESET_PASSWORD_BEGIN
    );
  });
  it('Should dispatch RESET_PASSWORD_SUCCESS type', () => {
    expect(resetPasswordActions.resetPasswordSuccess({}).type).toEqual(
      actions.RESET_PASSWORD_SUCCESS
    );
  });
  it('Should dispatch RESET_PASSWORD_FAILURE type', () => {
    expect(resetPasswordActions.resetPasswordFailure({}).type).toEqual(
      actions.RESET_PASSWORD_FAILURE
    );
  });
});

describe('test password request', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('creates RESET_PASSWORD_SUCCESS when fetching todos has been done', () => {
    mockAxios.post = jest.fn(() =>
      Promise.resolve({
        data: {
          user: {
            message: 'Details have been sent to your email'
          }
        }
      })
    );
    const successAction = {
      type: actions.RESET_PASSWORD_SUCCESS,
      payload: {
        user: {
          message: 'Details have been sent to your email'
        }
      }
    };
    const failAction = {
      type: actions.RESET_PASSWORD_FAILURE,
      payload: {
        data: {
          error: 'An error has occured'
        }
      }
    };
    const store = mockStore({ error: null, loading: false });
    const data = {
      email: 'testemail@mail.com'
    };

    store.dispatch(resetPasswordActions.resetPassword(data)).then(() => {
      expect(store.getActions()[2]).toEqual(successAction);
    });
    mockAxios.post = jest.fn(() =>
      Promise.reject({
        data: {
          error: 'An error has occured'
        }
      })
    );
    store.dispatch(resetPasswordActions.resetPassword({})).catch(() => {
      expect(store.getActions()[1]).toEqual(failAction);
    });
  });
});
