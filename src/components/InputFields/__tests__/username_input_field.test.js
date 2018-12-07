import UsernameField from '../username_input_field';
import React from 'react';

describe('test should render component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UsernameField />);
  });

  it('renders the <UsernameField /> component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
