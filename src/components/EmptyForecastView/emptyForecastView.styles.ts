import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  emptyViewContainer: {justifyContent: "center", alignItems: "center", flex: 1},

  weatherIcon: {
    width: 150,
    height: 150,
    overflow: "hidden",
    resizeMode: "cover",
    marginTop: 30,
  },

  content: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "400",
  },
});
