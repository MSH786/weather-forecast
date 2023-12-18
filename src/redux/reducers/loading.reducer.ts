import {createReducer} from "reduxsauce";
import {weatherTypes} from "../../modules/screens/home/redux/home.action";
import initialStates from "../store/initialStates";
import {loadingTypes} from "../actions/loading.action";

export const INITIAL_STATE = initialStates.loading;

const fetchingLocationsStart = (state: ILoadingStates) => ({
  ...state,
  isFetchingLocations: true,
});

const fetchingLocationsEnd = (state: ILoadingStates) => ({
  ...state,
  isFetchingLocations: false,
});

const fetchingWeatherForecastStart = (state: ILoadingStates) => ({
  ...state,
  isFetchingWeatherForecast: true,
});

const fetchingWeatherForecastEnd = (state: ILoadingStates) => ({
  ...state,
  isFetchingWeatherForecast: false,
});

export const HANDLERS = {
  [weatherTypes.FETCH_LOCATIONS]: fetchingLocationsStart,
  [weatherTypes.FETCH_LOCATIONS_SUCCESS]: fetchingLocationsEnd,
  [weatherTypes.FETCH_LOCATIONS_FAILURE]: fetchingLocationsEnd,

  [weatherTypes.FETCH_WEATHER_FORECAST_SUCCESS]: fetchingWeatherForecastEnd,
  [weatherTypes.FETCH_WEATHER_FORECAST_FAILURE]: fetchingWeatherForecastEnd,
  [loadingTypes.SET_IS_FETCHING_FORECAST_TO_TRUE]: fetchingWeatherForecastStart,
};

export default createReducer(INITIAL_STATE, HANDLERS);
