import {View, Text, Image} from "react-native";

import {weatherImages} from "../../utils/constants";
import {styles} from "./emptyForecastView.styles";

const EmptyForecastView = ({title, icon}: IView) => {
  return (
    <View style={styles.emptyViewContainer}>
      <Image
        style={styles.weatherIcon}
        source={weatherImages[icon || "other"]}
      />
      <Text style={styles.content}>
        {title ||
          "Oops! There is no any forecast related to your current location"}
      </Text>
    </View>
  );
};

export default EmptyForecastView;
