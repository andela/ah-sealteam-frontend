import React from 'react';
import { connect } from 'react-redux';
import ResetPassword from '../../components/ResetPassword';
import { resetPassword } from '../../actions/resetPasswordActions';

class ResetPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: ''
    };
  }
  handleSubmit = event => {
    if (!event.target.checkValidity()) {
      return;
    }
    event.preventDefault();
    const form = event.target;
    const data = {
      email: form.elements['email'].value
    };
    this.props.dispatch(resetPassword(data));
  };

  render() {
    return (
      <ResetPassword
        handleSubmit={this.handleSubmit}
        error={this.state.emailError}
        loading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = state => ({
  error: state.resetPasswordReducer.error,
  loading: state.resetPasswordReducer.loading
});

export default connect(mapStateToProps)(ResetPasswordContainer);
