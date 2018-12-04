import {
  USER_SIGNUP,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_SUCCESS
} from '../constants';

const initialState = {
  errors: [],
  loading: false
};

const allErrors = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return { ...state, loading: true };
    case USER_SIGNUP_ERROR:
      return { ...state, loading: false, errors: action.errors };
    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, response: action.success };
    default:
      return state;
  }
};

export default allErrors;
