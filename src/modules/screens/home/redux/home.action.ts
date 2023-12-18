import {createActions} from "reduxsauce";

const {Types, Creators} = createActions({
  fetchWeatherForecast: ["params"],
  fetchWeatherForecastSuccess: ["info"],
  fetchWeatherForecastFailure: ["error"],

  fetchLocations: ["params"],
  fetchLocationsSuccess: ["info"],
  fetchLocationsFailure: ["error"],

  resetSearchStates: null,
});

export const weatherTypes = Types;
export const weatherCreators = Creators;
