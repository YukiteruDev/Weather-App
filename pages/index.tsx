import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Panel from "@/components/Panel";
import { getWeatherData } from "@/api/weather";
import { CurrentWeather, DailyData, HourlyData } from "@/types/temperature";
import { getCurrentDateTime } from "@/api/date";
import { useEffect, useState } from "react";
import { MyContext } from "@/api/context";
import { defaultCity } from "@/types/location";

interface HomeProps {
  initialData: {
    hourlyData: HourlyData;
    dailyData: DailyData;
  };
}
export default function Home({ initialData }: HomeProps) {
  const [location, setLocation] = useState(defaultCity);
  const [weatherData, setWeatherData] = useState(initialData);

  const currentData = getCurrentWeather(initialData.hourlyData);
  const [currentWeather, setCurrentWeather] = useState(currentData);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getWeatherData(location);
      const currentData = getCurrentWeather(fetchedData.hourlyData);
      setWeatherData(fetchedData);
      setCurrentWeather(currentData);
    }

    fetchData();
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

export async function getServerSideProps() {
  const initialData = await getWeatherData(defaultCity);
  return { props: { initialData } };
}
