import NotFound from '../NotFound';
import React from 'react';

describe('test should render component', () => {
    it('renders the <NotFound /> component', () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper.length).toEqual(1);
    });
});
