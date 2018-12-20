import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
//import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from '../index';
import store from '../../../store';

describe('Render Notifications', () => {
    it('renders the notifications i', () => {
        let wrapper = mount(
            <Provider store={store}>
                <Notifications />
            </Provider>
        );
        wrapper.find('#markAllAsRead').click;
        wrapper = shallow(<Notifications store={store} />);
        expect(wrapper.find('#closeModalBtn')).toBeDefined();
        expect(wrapper.find('#myModal')).toBeDefined();
    });
});
