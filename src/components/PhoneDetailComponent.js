import React, { Component } from 'react';

class PhoneDetailComponent extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div className="phone-item ui link cards">
        <div className="card">
          <div className="image">
            <img src="/images/avatar2/large/matthew.png" />
          </div>
          <div className="content">
            <div className="header">Phone title</div>
            <div className="meta">
              <a>Price $</a>
            </div>
            <div className="description">
              description
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              + Información
            </span>
            <span>
              <i className="circle icon"></i>
              <i className="circle icon"></i>
              <i className="circle icon"></i>
              <i className="circle icon"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneDetailComponent;
