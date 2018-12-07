import ConfirmPasswordField from '../confirm_password_input_field';
import React from 'react';

describe('test should render component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConfirmPasswordField />);
  });

  it('renders the <ConfirmPasswordField /> component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
