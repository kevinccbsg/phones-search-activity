import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);
  it('Render the app title', () => {
    expect(app.find('h2').text()).toEqual('Phone searcher');
  });

  it('Render PhoneListContainer', () => {
    expect(app.find('PhoneListContainer').exists()).toEqual(true);
  });
});