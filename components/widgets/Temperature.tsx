import Image from "next/image";
import styles from "styles/Widget.module.css";
import { getWeatherIcon } from "@/api/weatherCodes";

type PropsType = {
  maxTemperature?: number;
  minTemperature?: number;
  maxApparent?: number;
  minApparent?: number;
};
export default function Temperature({
  maxTemperature,
  minTemperature,
  maxApparent,
  minApparent,
}: PropsType) {
  const type = maxTemperature ? "warmer" : "colder";
  const weatherIcon = getWeatherIcon(`thermometer-${type}`);
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>
        {maxTemperature ? "Highest" : "Lowest"} Temperature
      </h3>
      <div
        className={`${styles.flexCenter} ${styles.flexBetween} ${styles.flexColumn} ${styles.noWrap}`}
      >
        <div className={`${styles.flexCenter} ${styles.noWrap}`}>
          <Image
            className={styles.temperatureImage}
            src={weatherIcon}
            alt="warmer"
          />
          <p className={styles.infoText}>{maxTemperature || minTemperature}°</p>
        </div>
        <p className={styles.bottomText}>
          Feels like {maxApparent || minApparent}°
        </p>
      </div>
    </div>
  );
}
