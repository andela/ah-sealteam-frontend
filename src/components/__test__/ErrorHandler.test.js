import ErrorHandler from '../ErrorHandler';
import React from 'react';

describe('test should render component', () => {
  it('renders the <ErrorHandler /> component', () => {
    const wrapper = shallow(<ErrorHandler />);
    expect(wrapper.find('span').length).toEqual(1);
  });
});
