import React from 'react';
import './index.scss';
import { title, account, login } from '../../constants';
import Loader from '../Loader';
import UsernameField from '../InputFields/username_input_field';
import EmailField from '../InputFields/email_input_field';
import PasswordField from '../InputFields/password_input_field';
import ConfirmPasswordField from '../InputFields/confirm_password_input_field';

const SignupForm = props => {
  return (
    <form className="myForm" data-toggle="validator" onSubmit={props.submit}>
      {props.loading === true ? <Loader /> : ''}
      <h3>{title}</h3>
      <UsernameField usernameError={props.usernameError} />
      <EmailField emailError={props.emailError} />
      <PasswordField passError={props.passError} />
      <ConfirmPasswordField confirmpasswordError={props.confirmpasswordError} />
      <button>Register</button>
      <br />
      <br />
      <p className="text-center">
        {account}
        <a href="./signup"> {login}</a>
      </p>
    </form>
  );
};

export default SignupForm;
