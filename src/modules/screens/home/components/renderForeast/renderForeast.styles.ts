import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  forecastContainer: {
    width: "31.5%",
    alignItems: "center",
    paddingVertical: 6,
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 10,
  },

  forecastIcon: {
    width: 50,
    height: 50,
    overflow: "hidden",
    resizeMode: "contain",
  },

  forecastText: {
    fontFamily: "Poppins-Medium",
    color: "#fff",
    fontSize: 16,
  },
});
