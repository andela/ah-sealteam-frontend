import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import signUpAction from '../../actions/signup_action';
import { connect } from 'react-redux';
import image from '../../assets/images/write3.jpg';
import { confirmpassword } from '../../constants';
import SignUpForm from '../../components/SignupForm';
import Social from '../Signin/sociallogin';
import '../../assets/styles/index.scss';

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
        const { from } = this.props.location.state || {
            from: { pathname: '/' }
        };
        const { errors, loading } = this.props.errors;
        return (
            <div className="wrapper wrapper-image div-wrapper">
                <div className="inner shadow-lg p-3 bg-white rounded">
                    <div className="image-holder">
                        <img src={image} className="form-image" alt="" />
                    </div>
                    <div className="social-form">
                        <SignUpForm
                            submit={this.handleSubmit}
                            usernameError={errors ? errors['username'] : ''}
                            emailError={errors ? errors['email'] : ''}
                            passError={errors ? errors['password'] : ''}
                            confirmpasswordError={this.state.passwordError}
                            loading={loading}
                        />
                        <hr className="style-four" />
                        <Social from={from} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.allErrors
});

export default connect(mapStateToProps)(SignUp);
