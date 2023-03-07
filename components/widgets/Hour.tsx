import Image from "next/image";
import styles from "@/styles/Hour.module.css";
import Icon from "@/public/icons/fill/rain.svg";

export default function Hour() {
  return (
    <div className={styles.container}>
      <p className={styles.time}>11 AM</p>
      <Image src={Icon} alt="icon" className={styles.icon} />
      <p className={styles.weather}>15°</p>
    </div>
  );
}
