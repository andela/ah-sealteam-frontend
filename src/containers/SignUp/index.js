import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import 'jquery';
import signUpAction from '../../actions/signup_action';
import { connect } from 'react-redux';
import image from '../../assets/images/write3.jpg';
import { confirmpassword } from '../../constants';
import SignUpForm from '../../components/SignupForm';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      passwordError: ' '
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (!event.target.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const values = [];
    for (let name of data.keys()) {
      const input = form.elements[name];
      values.push(input.value);
    }
    if (values[2] !== values[3]) {
      this.setState({
        passwordError: confirmpassword
      });
    } else {
      this.setState({
        passwordError: ' '
      });
      this.props.dispatch(signUpAction(data));
    }
  }

  render() {
    const { errors, loading } = this.props.errors;
    return (
      <div className="wrapper wrapper-image">
        <div className="inner shadow-lg p-3 bg-white rounded">
          <div className="image-holder">
            <img src={image} alt="" />
          </div>
          <SignUpForm
            submit={this.handleSubmit}
            usernameError={errors['username']}
            emailError={errors['email']}
            passError={errors['password']}
            confirmpasswordError={this.state.passwordError}
            loading={loading}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.allErrors
});

export default connect(mapStateToProps)(SignUp);
