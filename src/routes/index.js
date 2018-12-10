import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserLogin from '../components/UserLogin';
import Home from '../containers/Home/';
import SignUp from '../containers/SignUp';
import { Router } from 'react-router-dom';
import { history } from '../history';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={UserLogin} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  );
};
export default AppRoutes;
