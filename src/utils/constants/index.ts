export const Config = {
  API_URL_BASE: "https://api.weatherapi.com/v1",
  API_KEY: "42747e6f881e47b3ab4151200231512",
};

export const weatherImages: Record<string, any> = {
  "Partly cloudy": require("../../assets/images/partlycloudy.png"),
  "Moderate rain": require("../../assets/images/moderaterain.png"),
  "Patchy rain possible": require("../../assets/images/moderaterain.png"),
  Sunny: require("../../assets/images/sun.png"),
  Clear: require("../../assets/images/sun.png"),
  Overcast: require("../../assets/images/cloud.png"),
  Cloudy: require("../../assets/images/cloud.png"),
  "Light rain": require("../../assets/images/moderaterain.png"),
  "Moderate rain at times": require("../../assets/images/moderaterain.png"),
  "Heavy rain": require("../../assets/images/heavyrain.png"),
  "Heavy rain at times": require("../../assets/images/heavyrain.png"),
  "Moderate or heavy freezing rain": require("../../assets/images/heavyrain.png"),
  "Moderate or heavy rain shower": require("../../assets/images/heavyrain.png"),
  "Moderate or heavy rain with thunder": require("../../assets/images/heavyrain.png"),
  Mist: require("../../assets/images/mist.png"),
  other: require("../../assets/images/moderaterain.png"),
  bg: require("../../assets/images/bg.png"),
};

export const icons: Record<string, any> = {
  wind: require("../../assets/icons/wind.png"),
  drop: require("../../assets/icons/drop.png"),
  sun: require("../../assets/icons/sun.png"),
};
