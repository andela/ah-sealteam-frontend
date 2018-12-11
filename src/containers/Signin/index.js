import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/index.scss';
import image from '../../assets/images/write3.jpg';
import loginActions from '../../actions/signin.actions';
import SigninForm from '../../components/SigninForm';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    if (this.state.password && this.state.email) {
      const { dispatch, history } = this.props;
      dispatch(loginActions.login(this.state, history));
    }
  };

  render() {
    const { isLoggingIn, errors } = this.props.userAuth;
    const { history } = this.props;
    if (errors && errors.server) {
      history.push('/server-error');
    }
    const { email, password } = this.state;
    return (
      <div className="wrapper wrapper-image">
        <div className="inner shadow-lg p-3 bg-white rounded">
          <div className="image-holder">
            <img src={image} alt="" />
          </div>
          <SigninForm
            change={this.handleInputValueChange}
            submit={this.handleSubmit}
            emailValue={email}
            passValue={password}
            errorMessage={
              errors && errors.error === undefined
                ? ''
                : !errors
                ? ''
                : errors.error[0]
            }
            loader={isLoggingIn}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ userAuth: state.userAuth });
export default connect(mapStateToProps)(SignIn);
