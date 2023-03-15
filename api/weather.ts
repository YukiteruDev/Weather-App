import { DailyData, ScaleType } from "@/types/temperature";
import { HourlyData } from "@/types/temperature";
import { CityInfo } from "@/types/location";
import { daily, hourly } from "./variables";

const baseUrl = "https://api.open-meteo.com/v1/forecast";

type QueryType = {
  latitude: string;
  longitude: string;
  timezone: string;
  hourly?: string;
  daily?: string;
  start_date?: string;
  end_date?: string;
  temperature_unit: string;
};

function getDateRange() {
  const date = new Date();
  const startDate = date.toISOString().slice(0, 10);
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const endDate = tomorrow.toISOString().slice(0, 10);
  return [startDate, endDate];
}

function getQueryString(
  city: CityInfo,
  scale: ScaleType,
  type: "hour" | "day"
) {
  const [latitude, longitude] = [
    city.latitude.toString(),
    city.longitude.toString(),
  ];
  const timezone = city.timezone;
  const queryObject: QueryType = {
    latitude,
    longitude,
    timezone,
    temperature_unit: scale,
  };

  if (type === "hour") {
    queryObject.hourly = hourly;
    [queryObject.start_date, queryObject.end_date] = getDateRange();
  }
  queryObject.daily = daily;

  const params = new URLSearchParams(queryObject);
  const queryString = params.toString().replaceAll("%2C", ",");
  return queryString;
}

export async function getWeatherData(city: CityInfo, scale: ScaleType) {
  const hourlyQs = getQueryString(city, scale, "hour");
  const dailyQs = getQueryString(city, scale, "day");
  const [hourlyJson, dailyJson] = await Promise.all([
    sendRequest(hourlyQs),
    sendRequest(dailyQs),
  ]);
  const hourlyData: HourlyData = hourlyJson.hourly;
  const dailyData: DailyData = dailyJson.daily;
  return { hourlyData, dailyData };
}

async function sendRequest(queryString: string) {
  const requestUrl = `${baseUrl}?${queryString}`;
  const res = await fetch(requestUrl);
  return res.json();
}
