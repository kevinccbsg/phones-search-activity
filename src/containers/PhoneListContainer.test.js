import React from 'react';
import { mount } from 'enzyme';
import '../setupTests';
import { PhoneListContainer } from './PhoneListContainer';
import { getPhones } from '../actions';
import mockData from '../../mockData';

const initProps = {
  getPhones: () => 0,
  loading: true,
  phones: [],
};

const secondProps = {
  getPhones: () => 0,
  loading: false,
  phones: mockData,
};

describe('PhoneListContainer', () => {
  let wrapper = mount(<PhoneListContainer {...initProps} />);
  it('Render the component', () => {
    expect(wrapper.find('div.phone-list-container').exists()).toBe(true);
  });

  it('should exist a spinner', () => {
    expect(wrapper.find('Spinner').exists()).toBe(true);
  });

  it('should not exists PhoneDetailComponent', () => {
    expect(wrapper.find('PhoneDetailComponent').exists()).toBe(false);
  });
  let secondWrapper = mount(<PhoneListContainer {...secondProps} />);
  it('Render the component', () => {
    expect(secondWrapper.find('div.phone-list-container').exists()).toBe(true);
  });

  it('should not exist a spinner', () => {
    expect(secondWrapper.find('Spinner').exists()).toBe(false);
  });

  it('should exists PhoneDetailComponent', () => {
    expect(secondWrapper.find('PhoneDetailComponent').exists()).toBe(true);
  });
});