import {
  signupUser,
  signupUserFail,
  signupUserSuccess,
  signUpAction
} from '../signup_action';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('signup actions', () => {
  beforeEach(() => {
    jest.setTimeout(5000);
    moxios.install();
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
    moxios.uninstall();
  });

  it('should create an action to dispatch sign up and set loading to true.', () => {
    const expectedAction = {
      type: 'USER_SIGNUP'
    };
    expect(signupUser()).toEqual(expectedAction);
  });

  it('it should create an action to set loading to false after successful signup.', () => {
    let success;
    const expectedAction = {
      type: 'USER_SIGNUP_SUCCESS',
      success
    };
    expect(signupUserSuccess()).toEqual(expectedAction);
  });

  it('should create an action that returns errors after errors are returned.', () => {
    let errors;
    const expected = {
      type: 'USER_SIGNUP_ERROR',
      errors
    };
    expect(signupUserFail()).toEqual(expected);
  });

  it('should mock thunk action', () => {
    const expectedAction = {
      type: 'USER_SIGNUP'
    };
    const store = mockStore();
    const data = {};
    store.dispatch(signUpAction(data));
    expect(signupUser().type).toEqual(expectedAction.type);
  });

  it('should create an action that fails if arguments are not passed', () => {
    const store = mockStore();
    expect(store.dispatch(signUpAction())).toEqual(undefined);
  });
});
