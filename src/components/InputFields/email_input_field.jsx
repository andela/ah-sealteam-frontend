import React from 'react';
import InputField from './index';

const EmailField = props => {
  //render Email Input Field
  return (
    <InputField
      type="text"
      placeholder="Email Address"
      className="form-control control"
      name="email"
      onChange={props.change}
      value={props.emailValue}
      error={props.emailError === undefined ? '' : props.emailError}
    />
  );
};

export default EmailField;
