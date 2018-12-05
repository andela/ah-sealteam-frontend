import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import SocialLoginComponent from '../social.component';

Enzyme.configure({ adaptor: new Adaptor() });

function setup() {
    const props = {
        handleLogin: jest.fn(),
        hanldeFailure: jest.fn()
    };
    const enzymeWrapper = shallow(<SocialLoginComponent {...props} />);
    return {
        props,
        enzymeWrapper
    };
}

describe('Will test the component', () => {
    it('Test the main div', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('div').hasClass('d-flex')).toBe(true);
        const ss_btn_props = enzymeWrapper.find('#google-id');
        expect(ss_btn_props).toBeDefined();
    });
    it('Test facebook div', () => {
        const { enzymeWrapper } = setup();
        const ss_btn_props = enzymeWrapper.find('#facebook-id');
        expect(ss_btn_props).toBeDefined();
    });
});
