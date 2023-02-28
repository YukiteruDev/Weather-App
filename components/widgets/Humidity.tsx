import styles from "@/styles/Widget.module.css";
import Image from "next/image";
import Icon from "public/icons/fill/humidity.svg";

export default function Humidity() {
  return (
    <div className={styles.widget}>
      <h3>Humidity</h3>
      <div className={styles.flex}>
        <Image src={Icon} alt="icon" className={styles.icon} />
        <p>40</p>
      </div>
    </div>
  );
}
