import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../containers/SignUp';
import { Router } from 'react-router-dom';
import { history } from '../history';
import SignIn from '../containers/Signin';
import AllArticles from '../containers/AllArticle';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={AllArticles} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  );
};
export default AppRoutes;
