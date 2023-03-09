import Image from "next/image";
import styles from "@/styles/Hour.module.css";
import Icon from "@/public/icons/fill/rain.svg";
import { HourlyData } from "@/types/temperature";

type HourProps = { data: HourlyData; index: number };
export default function Hour({ data, index }: HourProps) {
  return (
    <div className={styles.container}>
      <p className={styles.time}>{data.time[index].slice(-5)}</p>
      <Image src={Icon} alt="icon" className={styles.icon} />
      <p className={styles.weather}>{data.temperature_2m[index]}°</p>
    </div>
  );
}
