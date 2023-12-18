import axios from "axios";

import {forecastEndpoint, locationsEndpoint} from "../utils/functions";

const apiCall = async (endpoint: string) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return {};
  }
};

export const fetchWeatherForecast = (params: IForcastParams) => {
  let forecastUrl = forecastEndpoint(params);
  return apiCall(forecastUrl);
};

export const fetchLocations = (params: any) => {
  let locationsUrl = locationsEndpoint(params);
  return apiCall(locationsUrl);
};
