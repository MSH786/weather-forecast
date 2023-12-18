import {CallEffect, PutEffect} from "redux-saga/effects";
import {weatherCreators} from "./home.action";

export type FetchWeatherForecast =
  | CallEffect<void>
  | PutEffect<ReturnType<typeof weatherCreators.fetchWeatherForecastSuccess>>
  | CallEffect<void>
  | PutEffect<ReturnType<typeof weatherCreators.fetchWeatherForecastFailure>>;
