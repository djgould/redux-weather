import {
  UPDATE_LOCATION,
  REQUEST_WEATHER,
  RECIEVE_WEATHER
} from '../constants/ActionTypes';

export default function weather(state = {
  isFetching: false,
  location: '',
  forecasts: []
}, action) {
  switch (action.type) {
  case REQUEST_WEATHER:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECIEVE_WEATHER:
    return Object.assign({}, state, {
      location: action.location,
      forecasts: action.weather
    });
  default:
    return state;
  }
}
