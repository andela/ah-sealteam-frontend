import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileUpdate from '../index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        updateUser: jest.fn(),
        profile: {
            data: {
                firstname: '',
                lastname: '',
                bio: '',
                image: ''
            }
        },
        validation: {},
        success: ''
    };

    const enzymeWrapper = shallow(<ProfileUpdate {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('ProfileUpdate', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();

            expect(
                enzymeWrapper.find('textarea').hasClass('form-control')
            ).toBe(true);
            expect(
                enzymeWrapper
                    .find('button')
                    .hasClass('btn btn-md btn-success btn-block')
            ).toBe(true);
        });
    });
});
