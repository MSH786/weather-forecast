import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  locationText: {
    fontFamily: "Poppins-Medium",
    color: "#fff",
    marginTop: 30,
    fontSize: 16,
  },

  weatherIcon: {
    width: 150,
    height: 150,
    overflow: "hidden",
    resizeMode: "cover",
    marginTop: 30,
  },

  temperatureText: {
    fontFamily: "Poppins-Bold",
    color: "#fff",
    fontSize: 50,
    marginTop: 20,
  },

  weatherConditionContainer: {width: "95%", alignItems: "center"},

  conditionText: {
    fontFamily: "Poppins-Regular",
    color: "#fff",
    fontSize: 27,
  },

  inRowWeatherDetails: {
    flexDirection: "row",
    width: "92%",
    marginTop: 40,
  },

  dailyForeCastContainer: {
    width: "92%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  dailyForeCastTitle: {
    fontFamily: "Poppins-Regular",
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },

  dailyForecastRow: {
    width: "92%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerContainer: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    bottom: 0,
    position: "absolute",
  },
});
