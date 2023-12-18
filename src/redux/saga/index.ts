import {all} from "redux-saga/effects";

import {watchWeatherForecast} from "../../modules/screens/home/redux/home.saga";

export function* rootSaga() {
  yield all([watchWeatherForecast()]);
}
