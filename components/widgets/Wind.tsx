import { getDirection, kmToBeaufort, kmToWindForce } from "@/api/wind";
import Image from "next/image";
import styles from "styles/Widget.module.css";

type WindProps = {
  speed: number;
  direction: number;
};
export default function Wind({ speed, direction }: WindProps) {
  const windForce = kmToWindForce(speed);
  const beaufort = kmToBeaufort(speed);
  const Icon = require(`public/icons/fill/wind-beaufort-${beaufort}.svg`);
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Wind Speed</h3>
      <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
        <div className={styles.flexCenter}>
          <Image src={Icon} alt="icon" className={styles.temperatureImage} />
          <p className={styles.infoText}>{speed}km/h</p>
        </div>
        <p className={`${styles.bottomText} ${styles.windDirection}`}>
          {getDirection(direction)}, {windForce}
        </p>
      </div>
    </div>
  );
}
