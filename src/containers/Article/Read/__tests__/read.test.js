import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Read from '../index';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Read Component', () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Read />
                </Provider>
            ).exists('.container')
        ).toBe(false);
    });
});
