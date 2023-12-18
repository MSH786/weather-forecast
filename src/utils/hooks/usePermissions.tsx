import {Alert, PermissionsAndroid, Platform} from "react-native";
import {AnyAction, Dispatch} from "redux";
import Geolocation from "react-native-geolocation-service";

import {weatherCreators} from "../../modules/screens/home/redux/home.action";
import {getWeatherForecastByCurrentPosition} from "../functions";

const useLocation = (dispatch: Dispatch<AnyAction>) => {
  const requestLocation = async () => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Access Required",
            message: "This App needs to Access your location",
            buttonPositive: "Allow Location",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getWeatherForecastByCurrentPosition(dispatch);
        } else {
          Alert.alert(
            "Permission Access denied. Please Make Sure GPS Permission is enabled and then exit app and run again"
          );
          dispatch(weatherCreators.fetchWeatherForecastFailure());
        }
      } else {
        Geolocation.getCurrentPosition(
          (position) => {},
          (error) => {},
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
        );
        dispatch(weatherCreators.fetchWeatherForecastFailure());
      }
    } catch (err) {
      //console.warn(err);
      dispatch(weatherCreators.fetchWeatherForecastFailure());
    }
  };

  return {
    requestLocation,
  };
};

export default useLocation;
