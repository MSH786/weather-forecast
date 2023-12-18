import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    height: 55,
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
  },

  searchWrapper: {
    width: "95%",
    height: "100%",
    flexDirection: "row",
    borderRadius: 40,
  },

  inputWrapper: {
    width: "85%",
  },

  iconWrapper: {
    width: "15%",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  searchButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 200 / 2,
    width: 45,
    height: 45,
    margin: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
