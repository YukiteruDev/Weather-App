import Image from "next/image";
import Warmer from "public/icons/fill/thermometer-warmer.svg";
import Colder from "public/icons/fill/thermometer-colder.svg";
import styles from "styles/Widget.module.css";

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
            src={maxTemperature ? Warmer : Colder}
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
