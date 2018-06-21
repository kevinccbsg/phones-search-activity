import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import PhoneListContainer from './PhoneListContainer';

describe('PhoneListContainer', () => {
  const wrapper = shallow(<PhoneListContainer />);
  it('Render the component', () => {
    expect(wrapper.find('div.phone-list-container').exists()).toBe(true);
  });

  it('State initiates no phones ([])', () => {
    expect(wrapper.state().phones).toEqual([]);
  });
});