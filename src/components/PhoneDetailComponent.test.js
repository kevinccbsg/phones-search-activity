import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import PhoneDetailComponent from './PhoneDetailComponent';
import mockData from '../../mockData';

const phone = mockData[1];

const props = {
  ...phone,
};

describe('PhoneDetailComponent', () => {
  const wrapper = shallow(<PhoneDetailComponent {...props} />);
  it('Render the component', () => {
    expect(wrapper.find('div.phone-item.close').exists()).toBe(true);
  });

  it('Open state value initiates false', () => {
    expect(wrapper.state().open).toEqual(false);
  });

  it('image state value initiates phone[\'default:image\']', () => {
    expect(wrapper.state().image).toEqual(phone['default:image']);
  });

  it('After click more info open state value is true', () => {
    wrapper.find('#moreInfo').simulate('click');
    expect(wrapper.find('div.phone-item.open').exists()).toBe(true);
    expect(wrapper.state().open).toEqual(true);
  });

  it('After click one color icon the image changed', () => {
    const position = 1;
    wrapper.find('i.cursor-icon').at(position).simulate('click');
    const colorName = phone.colors[position];
    expect(wrapper.state().image).toEqual(phone[`${colorName}:image`]);
  });
});