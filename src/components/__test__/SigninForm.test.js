import SigninForm from '../SigninForm';
import React from 'react';

describe('test should render component', () => {
  it('renders the <SigninForm /> component', () => {
    const wrapper = shallow(<SigninForm />);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
