export type HourlyData = {
  time: string[];
  temperature_2m: number[];
  weathercode: number[];
  apparent_temperature: number[];
  visibility: number[];
  windspeed_10m: number[];
  relativehumidity_2m: number[];
};

export type DailyData = {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
  windspeed_10m_max: number[];
  winddirection_10m_dominant: number[];
  precipitation_sum: number[];
  precipitation_probability_max: number[];
};

export type CurrentWeather = {
  weatherCode: number;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
};

export type ScaleType = "celsius" | "fahrenheit";
