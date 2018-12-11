import InputField from '../index';
import React from 'react';

describe('test should render component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <InputField
        type="email"
        placeholder="Enter Email"
        name="email"
        className="form-group"
      />
    );
  });

  it('renders the <InputField /> component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
