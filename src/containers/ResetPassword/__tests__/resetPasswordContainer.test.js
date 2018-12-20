import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ResetPassword from '../index';
import store from '../../../store';

describe('Render Reset Password', () => {
    it('renders the reset password form', () => {
        let wrapper = mount(
            <Provider store={store}>
                <Router>
                    <ResetPassword />
                </Router>
            </Provider>
        );
        let emailInput = wrapper.find('#defaultForm-email');
        emailInput.value = 'test@mail.com';
        wrapper.find('#resetPasswordForm').simulate('submit');
        wrapper = shallow(
            <Provider store={store}>
                <Router>
                    <ResetPassword />
                </Router>
            </Provider>
        );
        expect(emailInput).toBeDefined();
    });
});
