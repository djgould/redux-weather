import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Weather from '../containers/Weather';
import UpdateLocation from '../containers/UpdateLocation';

let App = () => {
  return (
    <div className="main-app-container">
      <div className="main-app-nav">Simple Redux Boilerplate</div>
      {/* notice that we then pass those unpacked props into the Counter component */}
      <UpdateLocation />
      <Weather />
    </div>
  );
}

export default connect()(App);
