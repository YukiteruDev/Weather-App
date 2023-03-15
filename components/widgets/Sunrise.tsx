import { getWeatherIcon } from "@/api/weatherCodes";
import Image from "next/image";
import styles from "styles/Widget.module.css";

type PropsType = { rise?: string; set?: string };
export default function Sunrise({ rise, set }: PropsType) {
  function getTime() {
    const time = rise || set || "";
    return time.slice(-5);
  }
  const icon = rise ? "sunrise" : "sunset";
  const weatherIcon = getWeatherIcon(icon);
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>{rise ? "Sunrise" : "Sunset"}</h3>
      <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
        <Image
          className={styles.SunriseImage}
          src={weatherIcon}
          alt="sunrise"
        />
        <p className={styles.infoText}>{getTime()}</p>
      </div>
    </div>
  );
}
