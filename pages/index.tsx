import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Panel from "@/components/Panel";
import { getHourlyForecast } from "@/api/request";

export default function Home({ hourlyData }: any) {
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
        <Panel hourlyData={hourlyData.hourly} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const hourlyData = await getHourlyForecast();
  return { props: { hourlyData } };
}
