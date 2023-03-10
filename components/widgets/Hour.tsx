import Image from "next/image";
import styles from "@/styles/Hour.module.css";
import { HourlyData } from "@/types/temperature";
import { getWeatherIcon, getWeatherInfo } from "@/api/weatherCodes";

type HourProps = { data: HourlyData; index: number };
export default function Hour({ data, index }: HourProps) {
  const weatherInfo = getWeatherInfo(data.weathercode[index]);
  const weatherIcon = getWeatherIcon(weatherInfo.icon);
  return (
    <div className={styles.container}>
      <p className={styles.time}>{data.time[index].slice(-5)}</p>
      <Image src={weatherIcon} alt="icon" className={styles.icon} />
      <p className={styles.weather}>{data.temperature_2m[index]}°</p>
    </div>
  );
}
