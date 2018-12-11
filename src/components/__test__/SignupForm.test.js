import SignupForm from '../SignupForm';
import React from 'react';

describe('test should render component', () => {
  it('renders the <SignupForm /> component', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
