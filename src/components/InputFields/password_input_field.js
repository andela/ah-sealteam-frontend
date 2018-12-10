import React from 'react';
import '../SignupForm/index.scss';
import InputField from './index';

const PasswordField = props => {
  //Password's Input Field

  return (
    <InputField
      type="password"
      placeholder="Password"
      className="form-control"
      name="password"
      error={props.passError === undefined ? '' : props.passError}
    />
  );
};

export default PasswordField;
