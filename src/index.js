import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import './assets/styles/paginator.scss';
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faBell } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo, faBell);
ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
