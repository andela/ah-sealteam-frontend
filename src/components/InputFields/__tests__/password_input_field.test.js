import PasswordField from '../password_input_field';
import React from 'react';

describe('test should render component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PasswordField />);
  });

  it('renders the <PasswordField /> component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
