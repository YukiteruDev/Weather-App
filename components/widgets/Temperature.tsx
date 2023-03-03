import Image from "next/image";
import Warmer from "public/icons/fill/thermometer-warmer.svg";
import Colder from "public/icons/fill/thermometer-colder.svg";
import styles from "styles/Widget.module.css";

type PropsType = {
  highOrLow: "high" | "low";
};
export default function Temperature({ highOrLow }: PropsType) {
  const isHigh = highOrLow === "high";
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>
        {isHigh ? "Highest" : "Lowest"} Temperature
      </h3>
      <div
        className={`${styles.flexCenter} ${styles.flexBetween} ${styles.flexColumn} ${styles.noWrap}`}
      >
        <div className={`${styles.flexCenter} ${styles.noWrap}`}>
          <Image
            className={styles.temperatureImage}
            src={isHigh ? Warmer : Colder}
            alt="warmer"
          />
          <p className={styles.infoText}>{isHigh ? "15.1°" : "6.7°"}</p>
        </div>
        <p className={styles.bottomText}>
          Feels like {isHigh ? "12.6°" : "4.6°"}
        </p>
      </div>
    </div>
  );
}
