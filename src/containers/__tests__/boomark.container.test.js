import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import { BookMark } from '../BookMark';
import { bookmarks } from '../../utils/mocks';
Enzyme.configure({ adaptor: new Adaptor() });

function setup() {
    const props = {
        articles: { articles: bookmarks },
        dispatch: jest.fn()
    };
    const enzymeWrapper = shallow(<BookMark {...props} />);
    return {
        props,
        enzymeWrapper
    };
}

describe('Will test the Bookmark Container', () => {
    it('Test will test that it is rendered', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper).toBeDefined();
        // const ss_btn_props = enzymeWrapper.find('#google-id');
        // expect(ss_btn_props).toBeDefined();
    });
    it('Test facebook div', () => {
        const { enzymeWrapper } = setup();
        const ss_btn_props = enzymeWrapper.find('#facebook-id');
        expect(ss_btn_props).toBeDefined();
    });
});
