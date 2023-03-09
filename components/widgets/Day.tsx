import Image from "next/image";
import styles from "@/styles/Day.module.css";
import Icon from "@/public/icons/fill/rain.svg";
import { DailyData } from "@/types/temperature";
import { dateIsToday, getDayOfWeek } from "@/api/date";

type DailyProps = { data: DailyData; index: number };
export default function Day({ data, index }: DailyProps) {
  const weekDay = getDayOfWeek(data.time[index]);
  const isToday = dateIsToday(data.time[index]);
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <p>{isToday ? "Today" : weekDay}</p>
        <span>{data.time[index]}</span>
      </div>
      <Image src={Icon} alt="icon" className={styles.icon} />
      <div className={styles.weather}>
        <span>{data.temperature_2m_max[index]}°</span>
        <span>{data.temperature_2m_min[index]}°</span>
      </div>
    </div>
  );
}
