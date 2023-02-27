import Image from "next/image";
import styles from "@/styles/Widget.module.css";
import SunsetIcon from "public/icons/fill/sunset.svg";

export default function Sunset() {
  return (
    <div className={styles.widget}>
      <h3>Sunset</h3>
      <div className={styles.content}>
        <Image src={SunsetIcon} alt="sunrise" className={styles.icon} />
        <p>6:47 PM</p>
      </div>
    </div>
  );
}
