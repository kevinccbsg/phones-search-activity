import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getImage = (color, object) => object[`${color}:image`];

class PhoneDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      image: getImage('default', props),
    };
    this.handleColor = this.handleColor.bind(this);
    this.handleInfo = this.handleInfo.bind(this);
  }

  handleInfo() {
    this.setState({ open: !this.state.open });
  }

  handleColor(color) {
    this.setState({
      image: getImage('default', this.props),
    });
  }

  render() {
    const { image, open } = this.state;
    const {
      title,
      description,
      colors,
      price,
    } = this.props;
    const stateClassName = (open) ? 'open' : 'close';
    return (
      <div className={`phone-item ui link cards ${stateClassName}`}>
        <div className="card">
          <div className="image">
            <img src={image} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta">
              <a>{price}</a>
            </div>
            <div className="description">
              {description}
            </div>
          </div>
          <div className="extra content">
            <span onClick={this.handleInfo} className="right floated">
              + Información
            </span>
            <span>
              {colors.map(obj => (
                <i
                  onClick={() => this.handleColor(obj)}
                  key={obj}
                  className={`circle icon ${obj}`}
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

PhoneDetailComponent.defaultProps = {
  title: 'Phone',
  description: 'Lorem ipsum dolor sit amet',
  colors: ['silver', 'black'],
  price: '1000$',
};

PhoneDetailComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  colors: PropTypes.array,
  price: PropTypes.string,
};

export default PhoneDetailComponent;
