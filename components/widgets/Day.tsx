import Image from "next/image";
import styles from "@/styles/Day.module.css";
import Icon from "@/public/icons/fill/rain.svg";
import { DailyData } from "@/types/temperature";
import { dateIsToday, getDayOfWeek } from "@/api/date";

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
  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ""}`}
      onClick={() => callback(index, dayName)}
    >
      <div className={styles.date}>
        <p>{dayName}</p>
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
