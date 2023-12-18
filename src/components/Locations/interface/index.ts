interface ILocationProps {
  isFetchingLocations: boolean;
  locations: ILocation[];
  fetchWeatherForcastDetail: (cityName: string) => void;
  searchValue: string;
}
