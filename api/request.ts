const baseUrl = "https://api.open-meteo.com/v1/forecast";
const [latitude, longitude] = ["35.65", "139.84"];

type QueryType = {
  latitude: string;
  longitude: string;
  start_date: string;
  end_date: string;
  hourly?: string;
};

function getQueryString(queryObject: QueryType) {
  const queryString = new URLSearchParams(queryObject).toString();
  return queryString.replace("%2C", ",");
}

async function getHourlyForecast() {
  const queryObject: QueryType = {
    latitude,
    longitude,
    hourly: "temperature_2m,weathercode",
    start_date: "2023-03-08",
    end_date: "2023-03-09",
  };
  const queryString = getQueryString(queryObject);
  const requestUrl = `${baseUrl}?${queryString}`;
  const res = await fetch(requestUrl, {
    method: "GET",
  });
  return res.json();
}

export { getHourlyForecast };
