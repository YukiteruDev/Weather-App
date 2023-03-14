import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Panel from "@/components/Panel";
import { getWeatherData } from "@/api/weather";
import { DailyData, HourlyData } from "@/types/temperature";
import { getCurrentDateTime } from "@/api/date";
import { useEffect, useRef, useState } from "react";
import { MyContext } from "@/api/context";
import { CityInfo, defaultCity } from "@/types/location";
import { parseCookies, setCookie } from "nookies";
import { NextPageContext } from "next";

interface HomeProps {
  initialData: {
    hourlyData: HourlyData;
    dailyData: DailyData;
  };
  initialLocation: CityInfo;
}
export default function Home({ initialData, initialLocation }: HomeProps) {
  const [location, setLocation] = useState(initialLocation);
  const [weatherData, setWeatherData] = useState(initialData);

  const currentData = getCurrentWeather(initialData.hourlyData);
  const [currentWeather, setCurrentWeather] = useState(currentData);

  const locationRef = useRef(location.id);
  useEffect(() => {
    const prevLocationId = locationRef.current;
    if (prevLocationId === location.id) return;

    const strLocation = JSON.stringify(location);
    setCookie(null, "location", strLocation);
    async function fetchData() {
      const fetchedData = await getWeatherData(location);
      const currentData = getCurrentWeather(fetchedData.hourlyData);
      setWeatherData(fetchedData);
      setCurrentWeather(currentData);
    }
    fetchData();

    locationRef.current = location.id;
  }, [location]);
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="A weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyContext.Provider value={{ location, setLocation }}>
        <div className={styles.main}>
          <Header currentWeather={currentWeather} />
          <Panel
            hourlyData={weatherData.hourlyData}
            dailyData={weatherData.dailyData}
          />
        </div>
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
  let initialLocation = defaultCity;
  const cookies = parseCookies(context);
  const storedLocation = cookies.location;
  if (storedLocation) initialLocation = JSON.parse(storedLocation);
  const initialData = await getWeatherData(initialLocation);
  return { props: { initialData, initialLocation } };
}
