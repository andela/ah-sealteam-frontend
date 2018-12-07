import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserLogin from '../components/UserLogin';
import Home from '../containers/Home/';
import Profile from '../containers/Profile/';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={UserLogin} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default AppRoutes;
