import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../containers/SignUp';
import Profile from '../containers/Profile/';
import { Router } from 'react-router-dom';
import { history } from '../history';
import SignIn from '../containers/Signin';
import ViewArticles from '../containers/Articles/ViewArticles';
import ErrorHandler from '../components/ErrorHandler';
import LogoutView from '../containers/Logout';
import ResetPassword from '../containers/ResetPassword';
import NavBar from '../containers/NavBar';
import PrivateRoute from './protectedRoutes';
import ArticleRatings from '../containers/Ratings';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Router history={history}>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={ViewArticles} />
                        <Route
                            exact
                            path="/server-error"
                            component={ErrorHandler}
                        />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/logout" component={LogoutView} />
                        <Route
                            exact
                            path="/resetpassword"
                            component={ResetPassword}
                        />
                        <PrivateRoute
                            exact
                            path="/profile"
                            component={Profile}
                        />
                        <Route
                            exact
                            path="/article/"
                            component={ArticleRatings}
                        />
                    </Switch>
                </div>
            </Router>
        </BrowserRouter>
    );
};

export default AppRoutes;
