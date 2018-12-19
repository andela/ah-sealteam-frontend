import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap';
import './navbar.scss';

const Navbar = props => {
    const { Notifications, isLoggedIn } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    AUTHOR'S HAVEN
                </Link>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                    />
                    <div className="search" />
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <div className="search-div">
                        <input type="text" placeholder="Search..." />
                        <div className="search" />
                    </div>
                    <ul className="navbar-nav ml-auto topnav top-nav">
                        {isLoggedIn ? (
                            <Fragment>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        className="nav-link"
                                        id="dropdownMenuButton"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        to="#"
                                    >
                                        <FontAwesomeIcon
                                            icon="bell"
                                            className="icon-bell"
                                        />
                                        <span className="button__badge">
                                            {props.unreadCount}
                                        </span>
                                    </NavLink>
                                    <Notifications />
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link "
                                        to="/article/create"
                                    >
                                        NEW STORY
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/profile">
                                        PROFILE
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/logout">
                                        LOGOUT
                                    </NavLink>
                                </li>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signup">
                                        Signup
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Login
                                    </NavLink>
                                </li>
                            </Fragment>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
