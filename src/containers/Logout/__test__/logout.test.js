import React from 'react';
import configureStore from 'redux-mock-store';
import LogoutView from '../index';

describe('<SignIn />', () => {
    const initialState = {
        isLoggedIn: false,
        isLoggingIn: false,
        errors: null,
        failed: false
    };

    const mockStore = configureStore();
    let wrapper;
    let store;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<LogoutView store={store} />);
    });

    it('should render successfully', () => {
        expect(wrapper.length).toEqual(1);
    });
});
