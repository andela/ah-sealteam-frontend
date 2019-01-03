import React from 'react';
import { connect } from 'react-redux';
import userService from '../../services/login.service';
import { socialLogout, signinLogout } from '../../actions/logout.action';
import { bookmarkLogout } from '../../actions/boomark.actions';
import { history } from '../../history';

class LogoutView extends React.Component {
    componentWillMount() {
        this.props.dispatch(socialLogout());
        this.props.dispatch(signinLogout());
        this.props.dispatch(bookmarkLogout());
        userService.logout();
        history.push('/');
    }

    render() {
        return null;
    }
}

export default connect()(LogoutView);
