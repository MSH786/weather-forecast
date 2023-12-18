import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
//@ts-ignore
import {debounce} from "lodash";

import Home from "./home";
import usePermissions from "../../../utils/hooks/usePermissions";
import {weatherCreators} from "./redux/home.action";
import {loadingCreators} from "../../../redux/actions/loading.action";

let search: string = "";
const HomeMain = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const {requestLocation} = usePermissions(dispatch);

  const {weatherForcast, locations} = useSelector(
    (state: IInitialStates) => state.weather
  );

  search = searchValue;
  useEffect(() => {
    requestLocation();
    setInterval(() => {
      if (!search) {
        requestLocation();
      }
    }, 5000);
  }, []);

  //fetch weather forecast detail wuth cityName
  const fetchWeatherForcastDetail = async (cityName: string) => {
    dispatch(
      weatherCreators.fetchWeatherForecast({cityName: cityName, days: 4})
    );
  };

  //fetch all locations
  const fetchLocations = async (cityName: string) => {
    dispatch(weatherCreators.fetchLocations({cityName: cityName}));
  };

  const handleSearch = (value: string) => {
    if (value) {
      if (value?.length > 2) {
        fetchLocations(value);
      }
    } else {
      dispatch(loadingCreators.setIsFetchingForecastToTrue());
      requestLocation();
      dispatch(weatherCreators.resetSearchStates());
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const onSearch = (value: string) => {
    setSearchValue(value);
    handleTextDebounce(value);
  };

  const onFetchWeatherDeatils = (cityName: string) => {
    setSearchValue(cityName);
    fetchWeatherForcastDetail(cityName);
    dispatch(weatherCreators.resetSearchStates());
  };

  const onResetSearch = () => {
    dispatch(loadingCreators.setIsFetchingForecastToTrue());
    dispatch(weatherCreators.resetSearchStates());
    setSearchValue("");
  };
  return (
    <Home
      handleTextDebounce={onSearch}
      locations={locations}
      fetchWeatherForcastDetail={onFetchWeatherDeatils}
      weatherForcast={weatherForcast}
      searchValue={searchValue}
      onResetSearch={onResetSearch}
    />
  );
};

export default HomeMain;
