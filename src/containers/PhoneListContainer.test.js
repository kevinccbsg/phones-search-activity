import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import { PhoneListContainer } from './PhoneListContainer';

const props = {
  getPhones: () => 0,
};

describe('PhoneListContainer', () => {
  const wrapper = shallow(<PhoneListContainer {...props} />);
  it('Render the component', () => {
    expect(wrapper.find('div.phone-list-container').exists()).toBe(true);
  });
});