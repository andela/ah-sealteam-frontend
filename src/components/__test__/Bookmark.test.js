import Bookmark from '../BookMarkComponent';
import BookMarkTabs from '../BookMarkComponent/tabs';
import React from 'react';

describe('test should render component', () => {
    it('renders the <Bookmark /> component', () => {
        const wrapper = shallow(<Bookmark article="an article" />);
        expect(wrapper.length).toEqual(1);
    });

    it('renders the tabs component', () => {
        const wrapper = shallow(<BookMarkTabs />);
        expect(wrapper.length).toEqual(1);
    });
});
