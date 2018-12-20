import React from 'react';
import configureStore from 'redux-mock-store';
import ConnectedSignin from '../index';

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
        wrapper = shallow(
            <ConnectedSignin store={store} history={{ push: () => '' }} />
        );
    });

    it('should render successfully', () => {
        expect(wrapper.length).toEqual(1);
    });
});
