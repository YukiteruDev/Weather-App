import Image from "next/image";
import styles from "@/styles/Day.module.css";
import { DailyData } from "@/types/temperature";
import { dateIsToday, getDayOfWeek } from "@/api/date";
import { getWeatherInfo } from "@/api/weatherCodes";

type DailyProps = {
  data: DailyData;
  index: number;
  isActive: boolean;
  callback: CallbackInterface;
};
interface CallbackInterface {
  (index: number, weekDay: string): void;
}
export default function Day({ data, index, isActive, callback }: DailyProps) {
  const weekDay = getDayOfWeek(data.time[index]);
  const dayName = dateIsToday(data.time[index]) ? "Today" : weekDay;
  const weatherInfo = getWeatherInfo(data.weathercode[index]);
  const weatherIcon = require(`public/icons/fill/${weatherInfo.icon}.svg`);
  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ""}`}
      onClick={() => callback(index, dayName)}
    >
      <div className={styles.date}>
        <p>{dayName}</p>
        <span>{data.time[index]}</span>
      </div>
      <Image src={weatherIcon} alt="icon" className={styles.icon} />
      <div className={styles.weather}>
        <span>{data.temperature_2m_max[index]}°</span>
        <span>{data.temperature_2m_min[index]}°</span>
      </div>
    </div>
  );
}
