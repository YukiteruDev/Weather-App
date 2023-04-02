import Image from "next/image";
import styles from "@/styles/Hour.module.css";
import { HourlyData } from "@/types/temperature";
import { getWeatherIcon, getWeatherInfo } from "@/api/weatherCodes";
import dayjs from "dayjs";

type HourProps = { data: HourlyData; index: number };
export default function Hour({ data, index }: HourProps) {
  const weatherInfo = getWeatherInfo(data.weathercode[index]);
  const weatherIcon = getWeatherIcon(weatherInfo.icon);
  function getHour(date: string) {
    return dayjs(date).format("HH:mm");
  }
  return (
    <div className={styles.container}>
      <p className={styles.time}>{getHour(data.time[index])}</p>
      <Image src={weatherIcon} alt="icon" className={styles.icon} />
      <p className={styles.weather}>{data.temperature_2m[index]}°</p>
    </div>
  );
}
