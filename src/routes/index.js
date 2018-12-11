import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../containers/SignUp';
import { Router } from 'react-router-dom';
import { history } from '../history';
import SignIn from '../containers/Signin';
import ViewArticles from '../containers/Articles/ViewArticles';
import ErrorHandler from '../components/ErrorHandler';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={ViewArticles} />
            <Route exact path="/server-error" component={ErrorHandler} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  );
};
export default AppRoutes;
