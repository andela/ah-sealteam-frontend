import Loader from '../Loader';
import GeneralLoader from '../Loader/generalLoader';
import React from 'react';

describe('test should render component', () => {
    it('renders the <GeneralLoader /> component', () => {
        const wrapper = shallow(<GeneralLoader />);
        expect(wrapper.length).toEqual(1);
    });

    it('renders the <Loader /> component', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.find('span').length).toEqual(4);
    });
});
