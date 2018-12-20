import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Notifications from '../Notifications';
import Navbar from '../../components/Navbar';

class NavBar extends Component {
    render() {
        const { isLoggedIn, unreadCount } = this.props;
        return (
            <Fragment>
                <Navbar
                    isLoggedIn={isLoggedIn}
                    unreadCount={unreadCount}
                    Notifications={Notifications} // the notifications component is passed as a prop to the navbar
                />
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.userAuth.isLoggedIn,
    unreadCount: state.notificationsReducer.unreadCount
});

export default connect(mapStateToProps)(NavBar);
