import React, { Component } from 'react';
import PhoneDetailComponent from '../components/PhoneDetailComponent';

class PhoneListContainer extends Component {
  constructor() {
    super();
    this.state = {
      phones: [],
    };
  }

  render () {
    return (
      <div className="phone-list-container">
        <PhoneDetailComponent />
        <PhoneDetailComponent />
      </div>
    );
  }
}

export default PhoneListContainer;
