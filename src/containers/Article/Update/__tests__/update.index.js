import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import Create from '../index';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe(' Create components', () => {
    describe('Create Article', () => {
        it('should render create article without throwing an error', () => {
            expect(
                shallow(
                    <Provider store={store}>
                        <Create />
                    </Provider>
                ).exists('.container')
            ).toBe(false);
        });
    });
});
