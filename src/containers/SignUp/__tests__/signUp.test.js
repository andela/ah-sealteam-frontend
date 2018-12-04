import React from 'react';
import ReactDOM from 'react-dom';
import Signup from '../index';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

describe('<Signup />', () => {
  const mockStore = configureStore();
  let wrapper;
  let store;
  const initialState = {};

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Signup store={store} errors={{}} loading={false} />);
  });

  it('should render component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
