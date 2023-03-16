import { getWeatherIcon } from "@/api/weatherCodes";
import { getDirection, getWindInfo } from "@/api/wind";
import Image from "next/image";
import styles from "styles/Widget.module.css";

type WindProps = {
  speed: number;
  direction: number;
};
export default function Wind({ speed, direction }: WindProps) {
  const [beaufort, description] = getWindInfo(speed);
  const icon = `wind-beaufort-${beaufort}`;
  const weatherIcon = getWeatherIcon(icon);
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Wind Speed</h3>
      <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
        <div className={styles.flexCenter}>
          <Image
            src={weatherIcon}
            alt="icon"
            className={styles.temperatureImage}
          />
          <p className={styles.infoText}>{speed}km/h</p>
        </div>
        <p className={`${styles.bottomText} ${styles.windDirection}`}>
          {getDirection(direction)}, {description}
        </p>
      </div>
    </div>
  );
}
