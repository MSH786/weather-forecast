import {View, Text, Image} from "react-native";
import moment from "moment";

import {weatherImages} from "../../../../../utils/constants";
import {styles} from "./renderForeast.styles";

const RenderForecastItem = (item: IForecastday, index: number) => {
  const formattedDate = item?.date ? moment(item.date).format("dddd") : "";
  const conditionText = item?.day?.condition?.text || "other";

  return (
    <View style={styles.forecastContainer} key={index}>
      <Image
        style={styles.forecastIcon}
        source={
          weatherImages[conditionText] ?? {
            uri: "https:" + item?.day?.condition?.icon,
          }
        }
      />
      <Text style={[styles.forecastText, {marginTop: 8}]}>{formattedDate}</Text>
      <Text style={styles.forecastText}>{item?.day?.avgtemp_c}&#176;</Text>
    </View>
  );
};

export default RenderForecastItem;
