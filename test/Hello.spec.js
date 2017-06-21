import React from 'react'
import Hello from '../src/Hello'

it('should render a label', () => {
    const wrapper = mount(
      <Hello />
    );
    expect(wrapper).toMatchSnapshot();
});
