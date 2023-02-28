import Image from "next/image";
import styles from "@/styles/Widget.module.css";
import SunriseIcon from "public/icons/fill/sunrise.svg";

export default function Sunrise() {
  return (
    <div className={styles.widget}>
      <h3>Sunrise</h3>
      <div className={styles.sun}>
        <Image src={SunriseIcon} alt="sunrise" className={styles.icon} />
        <p>6:47 AM</p>
      </div>
    </div>
  );
}
