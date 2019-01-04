import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../containers/SignUp';
import Profile from '../containers/Profile/';
import { Router } from 'react-router-dom';
import { history } from '../history';
import SignIn from '../containers/Signin';
import ViewArticles from '../containers/Articles/ViewArticles';
import Create from '../containers/Article/Create';
import Read from '../containers/Article/Read';
import ErrorHandler from '../components/ErrorHandler';
import LogoutView from '../containers/Logout';
import ResetPassword from '../containers/ResetPassword';
import NavBar from '../containers/NavBar';
import PrivateRoute from './protectedRoutes';
import Update from '../containers/Article/Update';
import NotFound from '../components/NotFound';

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
                            path="/articles/create"
                            component={Create}
                        />
                        <Route exact path="/articles/:slug" component={Read} />
                        <PrivateRoute
                            exact
                            path="/profile"
                            component={Profile}
                        />
                        <PrivateRoute
                            exact
                            path="/articles/:slug/update"
                            component={Update}
                        />
                        <Route exact path="/not_found" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </BrowserRouter>
    );
};

export default AppRoutes;
