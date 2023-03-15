import { getWeatherIcon } from "@/api/weatherCodes";
import Image from "next/image";
import styles from "styles/Widget.module.css";

type PrecipitationSumProps = { sum: number };
export default function PrecipitationSum({ sum }: PrecipitationSumProps) {
  const weatherIcon = getWeatherIcon("raindrops");
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Total Precipitation</h3>
      <div className={styles.flexCenter}>
        <Image src={weatherIcon} alt="icon" className={styles.uvImage} />
        <p className={styles.infoText}>{sum}mm</p>
      </div>
    </div>
  );
}
