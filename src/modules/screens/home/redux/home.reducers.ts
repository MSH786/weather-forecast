import {createReducer} from "reduxsauce";

import initialStates from "../../../../redux/store/initialStates";
import {weatherTypes} from "./home.action";

export const INITIAL_STATE = initialStates.weather;

const fetchWeatherForecastSuccess = (
  state: IWeatherStates,
  {info}: {info: IWeatherForecast}
) => {
  return {
    ...state,
    weatherForcast: info,
  };
};

const fetchLocationsSuccess = (state: IWeatherStates, {info}: {info: any}) => {
  return {
    ...state,
    locations: info,
  };
};

const resetSearchStates = (state: IWeatherStates) => ({
  ...state,
  locations: [],
});
export const HANDLERS = {
  [weatherTypes.FETCH_WEATHER_FORECAST_SUCCESS]: fetchWeatherForecastSuccess,
  [weatherTypes.FETCH_LOCATIONS_SUCCESS]: fetchLocationsSuccess,
  [weatherTypes.RESET_SEARCH_STATES]: resetSearchStates,
};

export default createReducer(INITIAL_STATE, HANDLERS);
