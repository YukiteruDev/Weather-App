const baseUrl = "https://api.open-meteo.com/v1/forecast";

type QueryType = {
  latitude: string;
  longitude: string;
  timezone: string;
  hourly?: string;
  daily?: string;
  start_date?: string;
  end_date?: string;
};

function getDateRange() {
  const date = new Date();
  const startDate = date.toISOString().slice(0, 10);
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const endDate = tomorrow.toISOString().slice(0, 10);
  return [startDate, endDate];
}

function getQueryString(hourly = "", daily = "") {
  const [latitude, longitude] = ["35.65", "139.84"];
  const timezone = "Asia/Tokyo";
  const queryObject: QueryType = { latitude, longitude, timezone };
  if (hourly) {
    queryObject.hourly = hourly;
    [queryObject.start_date, queryObject.end_date] = getDateRange();
  } else {
    queryObject.daily = daily;
  }
  const params = new URLSearchParams(queryObject);
  const queryString = params.toString().replaceAll("%2C", ",");
  return queryString;
}

export async function getHourlyForecast() {
  const variables = [
    "temperature_2m",
    "relativehumidity_2m",
    "apparent_temperature",
    "weathercode",
    "visibility",
    "windspeed_10m",
  ];
  const queryString = getQueryString(variables.join());
  const data = await sendRequest(queryString);
  return data;
}

export async function getDailyForecast() {
  const variables = [
    "weathercode",
    "temperature_2m_max",
    "temperature_2m_min",
    "apparent_temperature_max",
    "apparent_temperature_min",
    "sunrise",
    "sunset",
    "uv_index_max",
    "precipitation_sum",
    "precipitation_probability_max",
    "windspeed_10m_max",
    "winddirection_10m_dominant",
  ];
  const queryString = getQueryString("", variables.join());
  const data = await sendRequest(queryString);
  return data;
}

async function sendRequest(queryString: string) {
  const requestUrl = `${baseUrl}?${queryString}`;
  const res = await fetch(requestUrl);
  return res.json();
}
