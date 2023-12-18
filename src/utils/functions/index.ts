import {Alert} from "react-native";
import {AnyAction, Dispatch} from "redux";
import Geolocation from "react-native-geolocation-service";
//@ts-ignore
import Geocoder from "react-native-geocoder";

import {weatherCreators} from "../../modules/screens/home/redux/home.action";
import {Config} from "../constants";

const forecastEndpoint = (params: IForcastParams) =>
  `${Config.API_URL_BASE}/forecast.json?key=${Config.API_KEY}&q=${params.cityName}&days=${params.days}`;

const locationsEndpoint = (params: any) =>
  `${Config.API_URL_BASE}/search.json?key=${Config.API_KEY}&q=${params.cityName}`;

const getWeatherForecastByCurrentPosition = (dispatch: Dispatch<AnyAction>) => {
  Geolocation.getCurrentPosition(
    (position) => {
      var pos = {
        lat: position?.coords?.latitude,
        lng: position?.coords?.longitude,
      };
      Geocoder.geocodePosition(pos)
        .then((res: any) => {
          const cityName = res?.[0]?.locality + " " + res?.[0]?.country;

          dispatch(
            weatherCreators.fetchWeatherForecast({
              cityName,
              days: 4,
            })
          );
        })
        .catch((error: any) => Alert.alert(error));
    },
    (error) => {
      // See error code charts below.
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
  );
};
export {
  forecastEndpoint,
  locationsEndpoint,
  getWeatherForecastByCurrentPosition,
};
