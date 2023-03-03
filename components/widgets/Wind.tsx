import Image from "next/image";
import Icon from "public/icons/fill/wind-beaufort-5.svg";
import styles from "styles/Widget.module.css";

export default function Wind() {
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Wind Speed</h3>
      <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
        <div className={styles.flexCenter}>
          <Image src={Icon} alt="icon" className={styles.temperatureImage} />
          <p className={styles.infoText}>21km/h</p>
        </div>
        <p className={`${styles.bottomText} ${styles.windDirection}`}>
          Southwest, 260°
        </p>
      </div>
    </div>
  );
}
