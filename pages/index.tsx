import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Panel from "@/components/Panel";
import { getDailyForecast, getHourlyForecast } from "@/api/weather";
import { CurrentWeather, DailyData, HourlyData } from "@/types/temperature";
import { getCurrentDateTime } from "@/api/date";

interface HomeProps {
  hourlyData: HourlyData;
  dailyData: DailyData;
  currentWeather: CurrentWeather;
}
export default function Home({
  hourlyData,
  dailyData,
  currentWeather,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="A weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Header currentWeather={currentWeather} />
        <Panel hourlyData={hourlyData} dailyData={dailyData} />
      </div>
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
  const hourlyData = await getHourlyForecast();
  const dailyData = await getDailyForecast();
  const currentWeather = getCurrentWeather(hourlyData.hourly);
  return {
    props: {
      hourlyData: hourlyData.hourly,
      dailyData: dailyData.daily,
      currentWeather,
    },
  };
}
