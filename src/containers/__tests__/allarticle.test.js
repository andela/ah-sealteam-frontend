import ViewArticles from '../Articles/ViewArticles';
import React from 'react';
import configureStore from '../../store';

describe('test should render component', () => {
    it('renders the <ViewArticles /> component', () => {
        const wrapper = shallow(<ViewArticles store={configureStore} />);
        expect(wrapper.length).toEqual(1);
    });
});
