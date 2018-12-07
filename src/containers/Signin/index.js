import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/index.scss';
import loginActions from '../../actions/signin.actions';
import SigninForm from '../../components/SigninForm';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    };
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setInputValue = (inputName, inputValue) => {
    this.setState({
      [inputName]: inputValue
    });
  };

  handleInputValueChange = event => {
    const { name, value } = event.target;
    this.setInputValue(name, value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { dispatch, history } = this.props;
    dispatch(loginActions.login(this.state, history));
  };
  render() {
    const { isLoggingIn, failed, noAttempt } = this.props.userAuth;
    const { errors } =
      !failed && !noAttempt
        ? ''
        : this.props.userAuth.errors.response.response.data;
    const { email, password, submitted } = this.state;
    return (
      <SigninForm
        change={this.handleInputValueChange}
        submit={this.handleSubmit}
        emailValue={email}
        submitted={submitted}
        userEmail={email}
        errorMessage={
          errors && errors.error === undefined
            ? ''
            : !errors
            ? ''
            : errors.error[0]
        }
        userPassword={password}
        passValue={password}
        loader={isLoggingIn}
      />
    );
  }
}

const mapStateToProps = state => ({ userAuth: state.userAuth });
export default connect(mapStateToProps)(SignIn);
