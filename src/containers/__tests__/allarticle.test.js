import ViewArticles from '../Articles/ViewArticles';
import { mount } from 'enzyme';
import React from 'react';
import configureStore from '../../store';
import Pagination from 'react-js-pagination';
import { MemoryRouter } from 'react-router-dom';

describe('test should render component', () => {
    it('renders the <ViewArticles /> component', () => {
        const wrapper = shallow(<ViewArticles store={configureStore} />);
        expect(wrapper.length).toEqual(1);
    });

    it('tests render <Pagination/>', () => {
        const wrapper = mount(
            <MemoryRouter>
                <ViewArticles
                    isFetching={false}
                    paginator={<Pagination />}
                    store={configureStore}
                />
            </MemoryRouter>
        );
        expect(wrapper.find(Pagination).length).toBe(1);
    });
});
