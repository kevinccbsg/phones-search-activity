import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPhones } from '../actions';
import PhoneDetailComponent from '../components/PhoneDetailComponent';
import Spinner from '../components/Spinner';


export class PhoneListContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getPhones();
  }

  render () {
    const { loading, phones } = this.props;
    return (
      <div className="phone-list-container">
        {loading && (
          <Spinner />
        )}
        {phones.map(obj => (
          <PhoneDetailComponent key={obj.id} {...obj} />
        ))}
      </div>
    );
  }
}

PhoneListContainer.defaultProps = {
  loading: true,
  error: false,
  phones: [],
};

PhoneListContainer.propTypes = {
  loading: PropTypes.bool,
  phones: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = (store) => ({
  phones: store.phones,
  loading: store.loading,
  error: store.error,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPhones,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);
