import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../containers/SignUp';
import { Router } from 'react-router-dom';
import { history } from '../history';
import SignIn from '../containers/Signin';
import AllArticles from '../containers/AllArticle';
import ErrorHandler from '../components/ErrorHandler';
import LogoutView from '../containers/Logout';
import ResetPassword from '../containers/ResetPassword';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={AllArticles} />
                        <Route
                            exact
                            path="/server-error"
                            component={ErrorHandler}
                        />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/logout" component={LogoutView} />
                        <Route exact path="/resetpassword" component={ResetPassword} />
                    </Switch>
                </div>
            </Router>
        </BrowserRouter>
    );
}

export default AppRoutes;
