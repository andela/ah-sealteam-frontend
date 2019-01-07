import LandingPage from '../LandingPage';
import Header from '../LandingPage/header';
import LatestArticles from '../LandingPage/latestarticles';
import MainArticles from '../LandingPage/mainarticles';
import SideBar from '../LandingPage/sidebar';
import React from 'react';

describe('test should render component', () => {
    it('renders the <LandingPage /> component', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.length).toEqual(1);
    });

    it('renders the <Header /> component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.length).toEqual(1);
    });

    it('renders the <LatestArticles /> component', () => {
        const wrapper = shallow(<LatestArticles />);
        expect(wrapper.length).toEqual(1);
    });

    it('renders the <MainArticles /> component', () => {
        const wrapper = shallow(<MainArticles />);
        expect(wrapper.length).toEqual(1);
    });

    it('renders the <SideBar /> component', () => {
        const wrapper = shallow(<SideBar />);
        expect(wrapper.length).toEqual(1);
    });
});
