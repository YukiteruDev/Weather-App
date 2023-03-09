import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Panel from "@/components/Panel";
import { getDailyForecast, getHourlyForecast } from "@/api/request";

interface HomeProps {
  hourlyData: {
    hourly: {
      time: string[];
      temperature_2m: number[];
      weathercode: number[];
    };
  };
  dailyData: {
    daily: {
      time: string[];
      weathercode: number[];
    };
  };
}
export default function Home({ hourlyData, dailyData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="A weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Header />
        <Panel hourlyData={hourlyData.hourly} dailyData={dailyData.daily} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const hourlyData = await getHourlyForecast();
  const dailyData = await getDailyForecast();
  return { props: { hourlyData, dailyData } };
}
