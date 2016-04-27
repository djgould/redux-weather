import React, { Component, PropTypes } from 'react';

let Weather = ({weather, actions}) => {
  return (
    <div className="counter-container">
      <div className="counter-num-label">{
        weather.forecasts.length > 0 ? "Weather in " + weather.location : ""
      }</div>
      <div className="counter-num-label">{
        weather.forecasts.length > 0 ? weather.forecasts[0].main.temp + " degrees": 'Enter Location'
      }</div>
      <div className="counter-num-label">{
        weather.forecasts.length > 0 ? weather.forecasts[0].weather[0].description : ''
      }</div>
    </div>
  );
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Weather
