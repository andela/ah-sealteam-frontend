import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = props => {
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
                    {props.user ? (
                        <ul className="navbar-nav ml-auto topnav navUl">
                            <li className="nav-item">
                                <NavLink
                                    onClick={() => props.logout()}
                                    className="nav-link"
                                    to="/"
                                >
                                    Logout
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <i className="fas fa-user" />
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ml-auto topnav navUl">
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
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
