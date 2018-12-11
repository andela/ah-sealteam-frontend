import signinReducer from '../SigninReducer';
import loginActions from '../../actions/signin.actions';

describe('signin reducers', () => {
  it('test should set isLoggingIn to true when LOGIN_ATTEMPT', () => {
    const initialState = {
      isLoggedIn: false,
      isLoggingIn: false,
      errors: null,
      failed: false
    };

    const action = loginActions.loginRequest();

    const newState = signinReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(5);
    expect(newState.isLoggingIn).toBe(true);
  });

  it('test should set failure true when LOGGED_FAILED', () => {
    const initialState = {
      isLoggedIn: false,
      isLoggingIn: false,
      errors: null,
      failed: false
    };

    const errors = {
      errors: {
        error: ['A user with this email and password was not found.']
      }
    };
    const action = loginActions.loginError(errors);

    const newState = signinReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.failed).toBe(true);
  });

  it('test should set success to true when LOGGED_SUCCESSFULLY', () => {
    const initialState = {
      isLoggedIn: false,
      isLoggingIn: false,
      errors: null,
      failed: false
    };

    const response = {
      user: {
        email: 'asheuh@gmail.com',
        password: 'password'
      },
      access_token: 'jakjddoqwurh!@#$%&^%$bjhsdgfgjfs'
    };
    const action = loginActions.loginSuccess(response);

    const newState = signinReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.isLoggedIn).toBe(true);
  });
});
