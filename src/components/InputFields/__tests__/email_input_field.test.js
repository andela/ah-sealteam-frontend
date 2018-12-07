import EmailField from '../email_input_field';
import React from 'react';

describe('test should render component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EmailField />);
  });

  it('renders the <EmailField /> component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
