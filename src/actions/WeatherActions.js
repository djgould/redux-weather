import {
  REQUEST_WEATHER,
  RECIEVE_WEATHER
} from '../constants/ActionTypes';

const API_KEY = '7c6694811e34a93db82f64b0b77a65bb'
const API_ROOT = 'http://api.openweathermap.org/data/2.5/forecast?q='


export function requestWeather() {
  return {
    type: REQUEST_WEATHER
  }
}

export function recieveWeather(location, weather) {
  return {
    type: RECIEVE_WEATHER,
    location,
    weather
  }
}

export function fetchWeather(location) {
  return dispatch => {
    dispatch(requestWeather())
    return fetch(API_ROOT+location+',us&units=imperial&APPID='+API_KEY)
            .then(response => response.json())
            .then(json => dispatch(recieveWeather(location, json.list)))
  }
}
