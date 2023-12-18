import {call, put, takeEvery} from "redux-saga/effects";

import {weatherCreators, weatherTypes} from "./home.action";
import {fetchLocations, fetchWeatherForecast} from "../../../../api";
import {FetchWeatherForecast} from "./types";

export function* watchWeatherForecast() {
  yield takeEvery(
    weatherTypes.FETCH_WEATHER_FORECAST,
    fetchWeatherForecastDetails
  );
  yield takeEvery(weatherTypes.FETCH_LOCATIONS, fetchLocationsDetails);
}

function* fetchWeatherForecastDetails({
  params,
}: ISagaParams): IterableIterator<FetchWeatherForecast> {
  try {
    const response: IWeatherForecast | undefined = yield call(
      fetchWeatherForecast,
      params
    );

    yield put(weatherCreators.fetchWeatherForecastSuccess(response));
  } catch (error) {
    yield put(weatherCreators.fetchWeatherForecastFailure(error));
  }
}

function* fetchLocationsDetails({
  params,
}: ISagaParams): IterableIterator<FetchWeatherForecast> {
  try {
    const response: IWeatherForecast | undefined = yield call(
      fetchLocations,
      params
    );

    yield put(weatherCreators.fetchLocationsSuccess(response));
  } catch (error) {
    yield put(weatherCreators.fetchLocationsFailure(error));
  }
}
