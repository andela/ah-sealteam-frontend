import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppRoutes from './routes';

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
