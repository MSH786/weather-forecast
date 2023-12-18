interface ILoadingStates {
  isFetchingLocations: boolean;
  isFetchingWeatherForecast: boolean;
}

interface IInitialStates {
  weather: IWeatherStates;
  loading: ILoadingStates;
}
