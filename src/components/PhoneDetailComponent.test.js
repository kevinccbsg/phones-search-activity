import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import PhoneDetailComponent from './PhoneDetailComponent';

describe('PhoneDetailComponent', () => {
  const wrapper = shallow(<PhoneDetailComponent />);
  it('Render the component', () => {
    expect(wrapper.find('div.phone-item').exists()).toBe(true);
  });

  it('State initiates open false', () => {
    expect(wrapper.state().open).toEqual(false);
  });
});