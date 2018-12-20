import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './socialLogin.css';
import 'font-awesome/scss/font-awesome.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import {
    socialLogin,
    rejectedSocial,
    startPending
} from '../../actions/socialauth.action';
import { GG_LOGIN_URL, FB_LOGIN_URL } from '../../config';
import SocialLoginComponent from '../../components/UserLogin/social.component';

export class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
    }
    handleSocialLogin = user => {
        if (user._provider === 'facebook') {
            this.props.socialLogin(FB_LOGIN_URL, user._token.accessToken);
        } else if (user._provider === 'google') {
            this.props.socialLogin(GG_LOGIN_URL, user._token.accessToken);
        }
    };

    handleSocialLoginFailure = err => {
        swal('Error!', 'Something happened! Try reloading the page', 'error');
    };

    login = user => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user.user.token));
            localStorage.setItem('userData', JSON.stringify(user));
            swal('Succefull!', 'You have been logged in!', 'success');
            this.setState({
                redirectToReferrer: true
            });
        }
    };

    render() {
        const { social } = this.props;
        if (social.resolved) {
            this.login(social.userdata);
        }
        const { redirectToReferrer } = this.state;
        const { from } = this.props || { from: { pathname: '/' } };
        if (redirectToReferrer === true) {
            return <Redirect to={from} />;
        }
        if (social.failed) {
            swal(
                'Waring',
                'Social login failed. Make sure you have working internet',
                'warning'
            );
        }
        return (
            <SocialLoginComponent
                handleLogin={this.handleSocialLogin}
                hanldeFailure={this.handleSocialLoginFailure}
            />
        );
    }
}

Social.propTypes = {
    socialLogin: PropTypes.func.isRequired,
    social: PropTypes.shape({
        pending: PropTypes.bool,
        rejected: PropTypes.bool,
        resolved: PropTypes.bool,
        userdata: PropTypes.shape({
            email: PropTypes.string,
            token: PropTypes.string,
            username: PropTypes.string
        })
    }).isRequired
};

const mapStateToProps = state => ({
    social: state.social
});
export default connect(
    mapStateToProps,
    { socialLogin, rejectedSocial, startPending }
)(Social);
