interface IForcastParams {
  cityName: string;
  days?: number;
}

interface ISagaParams {
  type: string;
  params: IForcastParams;
}

interface IHomeProps {
  handleTextDebounce: (value: string) => void;
  locations: ILocation[];
  fetchWeatherForcastDetail: (cityName: string) => void;
  weatherForcast: IWeatherForecast | null;
  searchValue: string;
  onResetSearch: () => void;
}

interface IWeatherStates {
  weatherForcast: IWeatherForecast | null;
  locations: ILocation[];
}

interface ILocation extends IExtendedLocation {
  id: number;
}

interface IWeatherForecast {
  current: Current;
  forecast: Forecast;
  location: Location;
}

interface Current {
  cloud: number;
  condition: Condition;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}

interface Condition {
  code: number;
  icon: string;
  text: string;
}

interface Forecast {
  forecastday: IForecastday[];
}

interface Location extends IExtendedLocation {
  localtime: string;
  localtime_epoch: number;
  tz_id: string;
}

interface IForecastday {
  date: Date;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}

interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

enum WindDir {
  Ese = "ESE",
  Nw = "NW",
  S = "S",
  SE = "SE",
  SSE = "SSE",
  Ssw = "SSW",
  Wnw = "WNW",
  Wsw = "WSW",
}

interface IExtendedLocation {
  country: string;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}
