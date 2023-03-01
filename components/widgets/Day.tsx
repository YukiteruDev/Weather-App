import Image from "next/image";
import styles from "@/styles/Day.module.css";
import Icon from "@/public/icons/fill/rain.svg";

export default function Day() {
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <p>Today</p>
        <span>Feb 22</span>
      </div>
      <Image src={Icon} alt="icon" className={styles.icon} />
      <div className={styles.weather}>
        <span>15°</span>
        <span>7°</span>
      </div>
    </div>
  );
}
