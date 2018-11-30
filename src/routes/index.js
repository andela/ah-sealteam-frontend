import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserLogin from '../components/UserLogin';
import Home from '../containers/Home/';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={UserLogin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRoutes;
