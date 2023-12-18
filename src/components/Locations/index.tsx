import React, {FC} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {styles} from "./locations.styles";

const Locations: FC<ILocationProps> = ({
  isFetchingLocations,
  locations,
  fetchWeatherForcastDetail,
  searchValue,
}) => {
  return (
    <View style={styles.mainResultContainer}>
      {searchValue && searchValue?.length <= 2 && !locations?.length ? (
        <View style={styles.locationContainer}>
          <Text style={styles.loadingText}>
            Please search with atleast 3 alphabets
          </Text>
        </View>
      ) : isFetchingLocations ? (
        <View style={styles.locationContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : locations?.length > 0 ? (
        locations.map((item: ILocation, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              fetchWeatherForcastDetail(`${item?.name} ${item?.country}`)
            }
            style={styles.locationContainer}
          >
            <Icon name="location" size={20} color={"gray"} />
            <Text
              style={styles.locationTitle}
            >{`${item?.name} ${item?.country}`}</Text>
          </TouchableOpacity>
        ))
      ) : null}
    </View>
  );
};

export default Locations;
