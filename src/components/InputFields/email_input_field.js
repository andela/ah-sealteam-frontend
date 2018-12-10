import React from 'react';
import '../SignupForm/index.scss';
import InputField from './index';

const EmailField = props => {
  //render Email Input Field
  return (
    <InputField
      type="text"
      placeholder="Email Address"
      className="form-control"
      name="email"
      error={props.emailError === undefined ? '' : props.emailError}
    />
  );
};

export default EmailField;
