import { getWeatherIcon } from "@/api/weatherCodes";
import Image from "next/image";
import styles from "styles/Widget.module.css";

type PrecipitationProps = { probability: number };
export default function Precipitation({ probability }: PrecipitationProps) {
  const weatherIcon = getWeatherIcon("raindrop");
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Precipitation Probability</h3>
      <div className={styles.flexCenter}>
        <Image className={styles.uvImage} src={weatherIcon} alt="icon" />
        <p className={styles.infoText}>{probability}%</p>
      </div>
    </div>
  );
}
