import React from 'react';
import InputField from './index';

const UsernameField = props => {
  //render the input field for Username

  return (
    <InputField
      type="text"
      placeholder="Username"
      className="form-control control"
      name="username"
      error={props.usernameError === undefined ? '' : props.usernameError}
    />
  );
};

export default UsernameField;
