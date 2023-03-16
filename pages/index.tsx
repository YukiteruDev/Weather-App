import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Panel from "@/components/Panel";
import { getWeatherData } from "@/api/weather";
import { DailyData, HourlyData, ScaleType } from "@/types/temperature";
import { getCurrentDateTime } from "@/api/date";
import { useEffect, useRef, useState } from "react";
import { MyContext } from "@/api/context";
import { Location, defaultLocation } from "@/types/location";
import { parseCookies, setCookie } from "nookies";
import { NextPageContext } from "next";
import { reverseGeocoding } from "@/api/geocoding";
import Loading from "@/components/Loading";

interface HomeProps {
  initialData: {
    hourlyData: HourlyData;
    dailyData: DailyData;
  };
  initialLocation: Location;
  initialScale: ScaleType;
}
export default function Home({
  initialData,
  initialLocation,
  initialScale,
}: HomeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(initialLocation);
  const [weatherData, setWeatherData] = useState(initialData);

  const currentData = getCurrentWeather(initialData.hourlyData);
  const [currentWeather, setCurrentWeather] = useState(currentData);

  const locationRef = useRef(location.place_id);
  useEffect(() => {
    const prevLocationId = locationRef.current;
    if (prevLocationId === location.place_id) return;

    const strLocation = JSON.stringify(location);
    setCookie(null, "location", strLocation);
    fetchData();
    locationRef.current = location.place_id;
  }, [location]);

  const [scale, setScale] = useState<ScaleType>(initialScale);
  const scaleRef = useRef(scale);
  useEffect(() => {
    const prevScale = scaleRef.current;
    if (prevScale === scale) return;

    setCookie(null, "scale", scale);
    fetchData();
    scaleRef.current = scale;
  }, [scale]);

  async function fetchData() {
    setIsLoading(true);
    try {
      const fetchedData = await getWeatherData(location, scale);
      const currentData = getCurrentWeather(fetchedData.hourlyData);
      setWeatherData(fetchedData);
      setCurrentWeather(currentData);
    } finally {
      setIsLoading(false);
    }
  }

  async function locate() {
    navigator.geolocation.getCurrentPosition(
      loc => getPosition(loc.coords),
      error => {
        console.error(error);
        alert(error.message);
      }
    );
  }
  type CoordsType = { latitude: number; longitude: number };
  async function getPosition(coords: CoordsType) {
    const location = await reverseGeocoding(coords.latitude, coords.longitude);
    setLocation(location);
  }

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="A weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyContext.Provider
        value={{ location, setLocation, scale, setScale, locate }}
      >
        <div className={styles.main}>
          <Header currentWeather={currentWeather} />
          <Panel
            hourlyData={weatherData.hourlyData}
            dailyData={weatherData.dailyData}
          />
        </div>
        {isLoading && <Loading />}
      </MyContext.Provider>
    </>
  );
}

function getCurrentWeather(data: HourlyData) {
  const currentDateTime = getCurrentDateTime();
  const currentIndex = data.time.findIndex(time => time === currentDateTime);
  const currentWeather = {
    weatherCode: data.weathercode[currentIndex],
    temperature: data.temperature_2m[currentIndex],
    apparentTemperature: data.apparent_temperature[currentIndex],
    humidity: data.relativehumidity_2m[currentIndex],
    visibility: data.visibility[currentIndex],
    windSpeed: data.windspeed_10m[currentIndex],
  };
  return currentWeather;
}

export async function getServerSideProps(
  context: Pick<NextPageContext, "req">
) {
  const cookies = parseCookies(context);

  let initialLocation = defaultLocation;
  const storedLocation = cookies.location;
  if (storedLocation) initialLocation = JSON.parse(storedLocation);

  let initialScale: ScaleType = "celsius";
  const storedScale = cookies.scale as ScaleType;
  if (storedScale) initialScale = storedScale;

  const initialData = await getWeatherData(initialLocation, initialScale);
  return { props: { initialData, initialLocation, initialScale } };
}
