import {Image, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import RenderForecastItem from "../renderForeast";
import TypographyWithIcon from "../../../../../components/TypographyWithIcon";
import {weatherImages} from "../../../../../utils/constants";
import {styles} from "./weatherForecast.styles";

const WeatherForecast = ({
  weatherForcast,
}: {
  weatherForcast: IWeatherForecast;
}) => {
  const {current, location, forecast} = weatherForcast;

  const forecastDays = forecast?.forecastday;

  return (
    <>
      <Text style={styles.locationText}>
        {location?.name}, {location?.country}
      </Text>
      <Image
        style={styles.weatherIcon}
        source={
          weatherImages[current?.condition?.text || "other"] ?? {
            uri: "https:" + current?.condition?.icon,
          }
        }
      />
      <Text style={styles.temperatureText}>{current?.temp_c}&#176;</Text>
      <View style={styles.weatherConditionContainer}>
        <Text style={styles.conditionText} numberOfLines={1}>
          {current?.condition?.text}
        </Text>
      </View>

      <View style={styles.inRowWeatherDetails}>
        <TypographyWithIcon
          title={`${current?.wind_kph}km`}
          flex={"flex-start"}
          icon="wind"
        />
        <TypographyWithIcon
          title={`${current?.humidity}%`}
          flex={"center"}
          icon="drop"
        />
        <TypographyWithIcon
          title={weatherForcast?.forecast?.forecastday?.[0]?.astro?.sunrise}
          flex={"flex-end"}
          icon="sun"
        />
      </View>
      <View style={styles.dailyForeCastContainer}>
        <Icon name="calendar" size={20} color="#fff" />
        <Text style={styles.dailyForeCastTitle}>Daily Forecast</Text>
      </View>

      <View style={styles.dailyForecastRow}>
        {forecastDays?.length
          ? forecastDays?.slice(1, forecastDays?.length).map(RenderForecastItem)
          : null}
      </View>
    </>
  );
};

export default WeatherForecast;
