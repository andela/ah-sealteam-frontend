import React, { Component } from 'react';
import { connect } from 'react-redux';
import notificationsActions, {
    notificationError
} from '../../actions/notificationsActions';
import Notification from '../../components/Notification';
import './notifications.scss';
import 'font-awesome/css/font-awesome.min.css';
import { isAuthenticated } from '../../services';
import PopupModal from './Modal';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }
    componentDidMount = () => {
        if (isAuthenticated()) {
            this.props.dispatch(
                notificationsActions.getUnreadNotifications(isAuthenticated())
            );
            this.props.dispatch(
                notificationsActions.getAllNotifications(isAuthenticated())
            );
        } else {
            this.props.dispatch(
                notificationError({ error: 'Unauthenticated user' })
            );
        }
    };
    getDescription = notification => {
        switch (notification.verb) {
            case 'user_following':
                return 'Followed you';
            case 'article_created':
                return 'Posted a new Article';
            case 'comment_created':
                return 'Posted a comment';
            case 'article_rating':
                return 'Rated your article';
            default:
                return 'You have a new notification';
        }
    };
    markAllAsRead = notifications => {
        this.props.dispatch(
            notificationsActions.markAllAsRead(isAuthenticated(), notifications)
        );
        return;
    };
    getNotificationComponents = notifications =>
        notifications.map(notification => (
            <Notification
                key={notification.id}
                id={notification.id}
                description={this.getDescription(notification)}
                timestamp={notification.timestamp}
                actor={notification.actor.data}
                data={notification.data}
            />
        ));
    toggle = () => {
        this.setState({
            showModal: true
        });
    };
    render() {
        const { unreadCount, unreadNotifications, notifications } = this.props;
        return (
            <ul
                className="dropdown-menu notifications"
                aria-labelledby="dropdownMenuButton"
            >
                <li className="head text-light bg-dark">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-12">
                            <span>Notifications {unreadCount}</span>
                            <button
                                onClick={() =>
                                    this.markAllAsRead(unreadNotifications)
                                }
                                id="markAllAsRead"
                                className="btn btn-dark float-right"
                            >
                                Mark all as read
                            </button>
                        </div>
                    </div>
                </li>

                {this.getNotificationComponents(unreadNotifications)}

                <li className="footer bg-dark text-center">
                    <button
                        onClick={this.toggle}
                        id="viewAllBtn"
                        className="btn btn-light center"
                    >
                        View All
                    </button>
                </li>
                <PopupModal
                    showModal={this.state.showModal}
                    notifications={notifications}
                    getNotificationComponents={this.getNotificationComponents}
                />
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.notificationsReducer.errors,
    loading: state.notificationsReducer.loading,
    failed: state.notificationsReducer.failed,
    showDropdown: state.notificationsReducer.showDropdown,
    notifications: state.notificationsReducer.notifications,
    unreadNotifications: state.notificationsReducer.unreadNotifications,
    unreadCount: state.notificationsReducer.unreadCount
});

export default connect(mapStateToProps)(Notifications);
