import Loader from '../Loader';
import React from 'react';

describe('test should render component', () => {
  it('renders the <Loader /> component', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('span').length).toEqual(4);
  });
});
