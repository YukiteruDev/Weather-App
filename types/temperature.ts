type HourlyData = {
  time: string[];
  temperature_2m: number[];
  weathercode: number[];
  apparent_temperature: number[];
  visibility: number[];
  windspeed_10m: number[];
  relativehumidity_2m: number[];
};
type DailyData = {
  time: string[];
  weathercode: number[];
};
type CurrentWeather = {
  weatherCode: number;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
};

export type { HourlyData, DailyData, CurrentWeather };
