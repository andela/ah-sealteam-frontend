import NavBar from '../Navbar';
import React from 'react';

describe('test should render component', () => {
    it('renders the <NavBar /> component', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.find('span').length).toEqual(1);
    });
});
