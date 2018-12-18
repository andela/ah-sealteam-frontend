import React from 'react';
import getAllArticles from '../view_articles.actions';
import configureStore from '../../store';

describe('<getAllArticles />', () => {
  it('renders  <getAllArticles /> components', () => {
    const snap = shallow(<getAllArticles store={configureStore()} slug="" />);
    expect(snap).toMatchSnapshot();
  });
});
