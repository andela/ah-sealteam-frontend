import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});