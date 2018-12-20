import {
  LOGIN_ATTEMPT,
  LOGGED_FAILED,
  LOGGED_SUCCESSFULLY
} from '../../constants';
import loginActions from '../signin.actions';

describe('test signin actions', () => {
  describe('request', () => {
    it('should create an action ', () => {
      const expectedAction = {
        type: LOGIN_ATTEMPT
      };
      expect(loginActions.loginRequest()).toEqual(expectedAction);
    });
  });
  describe('test signin failure actions', () => {
    it('should create an action', () => {
      const errors = {
        errors: {
          error: ['A user with this email and password was not found.']
        }
      };
      const expectedAction = {
        type: LOGGED_FAILED,
        errors
      };
      expect(loginActions.loginError(errors)).toEqual(expectedAction);
    });
  });
  describe('test signin success action', () => {
    it('should create an action.', () => {
      const response = {
        user: {
          email: 'asheuh@gmail.com',
          password: 'password'
        },
        access_token: 'jakjddoqwurh!@#$%&^%$bjhsdgfgjfs'
      };
      const expectedAction = {
        type: LOGGED_SUCCESSFULLY,
        response
      };
      expect(loginActions.loginSuccess(response)).toEqual(expectedAction);
    });
  });
});
