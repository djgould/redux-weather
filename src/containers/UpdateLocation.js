import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as WeatherActions from '../actions/WeatherActions';
import UpdateLocation from '../components/UpdateLocation';

function mapStateToProps(state) {
  return {
    currentLocation: state.currentLocation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(WeatherActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateLocation);
