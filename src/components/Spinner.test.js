import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import Spinner from './Spinner';

describe('Spinner', () => {
  const wrapper = shallow(<Spinner />);
  it('Render the Spinner', () => {
    expect(wrapper.find('div.loader').exists()).toBe(true);
  });
});