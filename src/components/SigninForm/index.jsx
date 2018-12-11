import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import EmailField from '../InputFields/email_input_field';
import PasswordField from '../InputFields/password_input_field';

const SigninForm = props => {
  return (
    <form className="myForm" data-toggle="validator" onSubmit={props.submit}>
      {props.loader ? <Loader /> : ''}
      {props.errorMessage && (
        <p className="alert alert-danger">{props.errorMessage}</p>
      )}

      <h3>Sign In</h3>
      <EmailField emailValue={props.emailValue} change={props.change} />
      <PasswordField passValue={props.passValue} change={props.change} />
      <button onSubmit={props.submit}>Login</button>
      <br />
      <p>
        <Link to="/resetpassword" className="txt1">
          Forgot Password?
        </Link>
      </p>
      <div className="test">
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="txt1">
            Signup here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SigninForm;
