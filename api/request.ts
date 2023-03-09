const baseUrl = "https://api.open-meteo.com/v1/forecast";

type QueryType = {
  latitude: string;
  longitude: string;
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
  const queryObject: QueryType = { latitude, longitude };
  if (hourly) {
    queryObject.hourly = hourly;
    [queryObject.start_date, queryObject.end_date] = getDateRange();
  } else {
    queryObject.daily = daily;
  }
  const params = new URLSearchParams(queryObject);
  const queryString = params.toString().replace("%2C", ",");
  return queryString;
}

async function getHourlyForecast() {
  const queryString = getQueryString("temperature_2m,weathercode");
  console.log(queryString);
  const data = await sendRequest(queryString);
  return data;
}

async function getDailyForecast() {
  const queryString = getQueryString("", "temperature_2m,weathercode");
  const data = await sendRequest(queryString);
  return data;
}

async function sendRequest(queryString: string) {
  const requestUrl = `${baseUrl}?${queryString}`;
  const res = await fetch(requestUrl);
  return res.json();
}

export { getHourlyForecast, getDailyForecast };
