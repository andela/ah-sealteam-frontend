import React from 'react';
import '../SignupForm/index.scss';
import InputField from './index';

const ConfirmPasswordField = props => {
  //renders the input field for confirm password
  return (
    <InputField
      type="password"
      placeholder="Confirm Password"
      className="form-control"
      name="confirm-password"
      error={
        props.confirmpasswordError === '' ? '' : props.confirmpasswordError
      }
    />
  );
};

export default ConfirmPasswordField;
