import Image from "next/image";
import styles from "@/styles/Hour.module.css";
import Icon from "@/public/icons/fill/rain.svg";

type HourData = {
  time: string;
  temperature: number;
  weatherCode: number;
};
type HourProps = { data: HourData };
export default function Hour({ data }: HourProps) {
  return (
    <div className={styles.container}>
      <p className={styles.time}>{data.time.slice(-5)}</p>
      <Image src={Icon} alt="icon" className={styles.icon} />
      <p className={styles.weather}>{data.temperature}°</p>
    </div>
  );
}
