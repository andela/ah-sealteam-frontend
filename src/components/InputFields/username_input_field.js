import React from 'react';
import '../SignupForm/index.scss';
import InputField from './index';

const UsernameField = props => {
  //render the input field for Username

  return (
    <InputField
      type="text"
      placeholder="Username"
      className="form-control"
      name="username"
      error={props.usernameError === undefined ? '' : props.usernameError}
    />
  );
};

export default UsernameField;
