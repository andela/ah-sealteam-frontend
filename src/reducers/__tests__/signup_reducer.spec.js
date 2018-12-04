import SignUpReducer from '../SignUpReducer';
import {
  signupUser,
  signupUserFail,
  signUpAction
} from '../../actions/signup_action';

describe('SignUp reducer', () => {
  beforeEach(() => {
    jest.setTimeout(30000);
  });
  const initialState = { errors: [], loading: false };
  it('returns initial state', () => {
    expect(SignUpReducer({}, {})).toEqual({});
  });

  it('should store user for case USER_SIGNUP', () => {
    const payload = {};
    const action = signupUser(payload);
    const newState = SignUpReducer({}, action);
    expect(newState.loading).toEqual(true);
  });

  it('should store user for case USER_SIGNUP_ERROR', () => {
    const errors = [];
    const action = signupUserFail(errors);
    const newState = SignUpReducer({}, action);
    expect(newState).toEqual(initialState);
  });

  it('should return an empty set if no data is passed', () => {
    const data = {};
    const action = signUpAction(data);
    const newState = SignUpReducer({}, action);
    expect(newState).toEqual({});
  });
});
