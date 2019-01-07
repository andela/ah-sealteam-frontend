import Notification from '../Notification';
import React from 'react';

describe('test should render component', () => {
    it('renders the <Notification /> component', () => {
        const wrapper = shallow(<Notification />);
        expect(wrapper.length).toEqual(1);
    });
});
