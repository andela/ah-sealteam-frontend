import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import NotFound from '../index';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Not Found Component', () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(
                <Provider store={store}>
                    <NotFound />
                </Provider>
            ).exists('.container')
        ).toBe(false);
    });
});
