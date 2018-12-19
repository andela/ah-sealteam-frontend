import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Create from '../index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        saveArticle: jest.fn(),
        article: {
            title: '',
            description: '',
            tags: [],
            body: ''
        },
        updateArticle: {
            title: 'samople',
            description: 'sample',
            tags: ['tag1'],
            body: 'vis atque dignitas'
        },
        validation: {},
        errors: {
            title: [''],
            description: [''],
            tags: [''],
            body: ['']
        },
        success: null,
        file: null
    };

    const enzymeWrapper = shallow(<Create {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('CreateArticles', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(
                enzymeWrapper
                    .find('button')
                    .hasClass('btn btn-primary btn-block')
            ).toBe(true);
        });
    });
});
