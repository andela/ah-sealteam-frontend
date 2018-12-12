import AllArticle from '../AllArticle';
import React from 'react';

describe('test should render component', () => {
  it('renders the <AllArticle /> component', () => {
    const wrapper = shallow(<AllArticle />);
    expect(wrapper.length).toEqual(1);
  });
});
