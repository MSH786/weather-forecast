import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  mainResultContainer: {
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "lightgrey",
    position: "absolute",
    zIndex: 1000,
    top: 70,
    elevation: 2,
  },

  loadingText: {
    fontFamily: "Poppins-Regular",
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },

  locationContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderBlockColor: "grey",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
  },

  locationTitle: {
    fontFamily: "Poppins-Regular",
    color: "#000",
    opacity: 0.8,
    left: 5,
  },
});
