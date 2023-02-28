import styles from "@/styles/Widget.module.css";
import Image from "next/image";
import Icon from "public/icons/fill/wind-beaufort-5.svg";

export default function Wind() {
  return (
    <div className={styles.widget}>
      <h3>Wind Speed</h3>
      <div className={styles.content}>
        <Image src={Icon} alt="icon" className={styles.icon} />
      </div>
      <p>21km/h, Southwest</p>
    </div>
  );
}
