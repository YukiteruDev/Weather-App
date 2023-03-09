import Image from "next/image";
import styles from "@/styles/Day.module.css";
import Icon from "@/public/icons/fill/rain.svg";

type DailyData = {
  time: string;
  weatherCode: number;
};
type DailyProps = { data: DailyData };
export default function Day({ data }: DailyProps) {
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <p>Today</p>
        <span>{data.time}</span>
      </div>
      <Image src={Icon} alt="icon" className={styles.icon} />
      <div className={styles.weather}>
        <span>15°</span>
        <span>7°</span>
      </div>
    </div>
  );
}
