import React, {FC} from "react";
import {SafeAreaView, ImageBackground} from "react-native";
import {useSelector} from "react-redux";

import {styles} from "./home.styles";
import EmptyForecastView from "../../../components/EmptyForecastView";
import Header from "../../../components/Header";
import Locations from "../../../components/Locations";
import WeatherForecast from "./components/weatherForecast";
import {weatherImages} from "../../../utils/constants";

const Home: FC<IHomeProps> = ({
  handleTextDebounce,
  locations,
  fetchWeatherForcastDetail,
  weatherForcast,
  searchValue,
  onResetSearch,
}) => {
  const {isFetchingLocations, isFetchingWeatherForecast} = useSelector(
    (state: IInitialStates) => state.loading
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={weatherImages["bg"]}
        blurRadius={80}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {/*Search Section*/}
        <Header
          onChangeText={handleTextDebounce}
          value={searchValue}
          onResetSearch={onResetSearch}
        />

        <Locations
          isFetchingLocations={isFetchingLocations}
          locations={locations}
          fetchWeatherForcastDetail={fetchWeatherForcastDetail}
          searchValue={searchValue}
        />
        {isFetchingWeatherForecast ? (
          <EmptyForecastView icon={"Overcast"} title="loading..." />
        ) : weatherForcast ? (
          <WeatherForecast weatherForcast={weatherForcast} />
        ) : (
          <EmptyForecastView />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
