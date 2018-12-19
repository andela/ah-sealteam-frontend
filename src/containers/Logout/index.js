import React from 'react';
import { connect } from 'react-redux';
import userService from '../../services/login.service';
import { bookmarkLogout } from '../../actions/boomark.actions';
import {
    socialLogout,
    signinLogout,
    userInfoLogout
} from '../../actions/logout.action';
import { history } from '../../history';

class LogoutView extends React.Component {
    componentWillMount() {
        this.props.dispatch(socialLogout());
        this.props.dispatch(signinLogout());
        this.props.dispatch(bookmarkLogout());
        this.props.dispatch(userInfoLogout());
        userService.logout();
        history.push('/');
    }

    render() {
        return null;
    }
}

export default connect()(LogoutView);
