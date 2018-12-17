import React from 'react';
import InputField from './index';

const PasswordField = props => {
  //Password's Input Field

  return (
    <InputField
      type="password"
      placeholder="Password"
      className="form-control control"
      name="password"
      onChange={props.change}
      value={props.passValue}
      error={props.passError === undefined ? '' : props.passError}
    />
  );
};

export default PasswordField;
