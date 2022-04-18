export interface WeatherData {
  coord: WeatherCoord;
  weather: Weather[];
  base: string;
  main: WeatherMain;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: WeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface HourlyWeather {
  cod: string;
  message: number;
  cnt: number;
  list: HourlyWeatherItem[];
  city: City;
}

export interface WeatherCoord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Clouds {
  all: number;
}

export interface WeatherSys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface HourlyWeatherItem {
  dt: number;
  main: WeatherMain;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: WeatherSys;
  dt_txt: string;
}

export interface WeatherCoord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: WeatherCoord;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}
