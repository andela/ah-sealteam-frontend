import React from 'react';
import Loader from '../Loader';

const SigninForm = props => {
  return (
    <React.Fragment>
      <div className="limiter">
        <div className="container-login">
          <div className="wrap-login">
            <div className="login-form-title">
              <span className="login-form-title-1">Sign In</span>
              {props.loader ? <Loader /> : ''}
              {props.errorMessage && (
                <p className="alert alert-danger">{props.errorMessage}</p>
              )}
            </div>

            <form className="login-form" onSubmit={props.submit}>
              <div className="wrap-input" data-validate="Email is required">
                <input
                  className="input"
                  type="email"
                  value={props.emailValue}
                  onChange={props.change}
                  name="email"
                  placeholder="Enter email"
                />
                <span className="focus-input" />
                {props.submitted && !props.emailValue && (
                  <div className="help-block">Email is required</div>
                )}
              </div>

              <div className="wrap-input" data-validate="Password is required">
                <input
                  className="input"
                  value={props.passValue}
                  onChange={props.change}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
                <span className="focus-input" />
                {props.submitted && !props.passValue && (
                  <div className="help-block">Password is required</div>
                )}
              </div>

              <div className="check">
                <div>
                  <input
                    className="input-checkbox"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>

                <div className="test">
                  <a href="#!" className="txt1">
                    Forgot Password?
                  </a>
                </div>
                <div className="test">
                  <small>
                    Don't have an account?{' '}
                    <a href="/signup" className="txt1">
                      Signup here
                    </a>
                  </small>
                </div>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn" onSubmit={props.submit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SigninForm;
