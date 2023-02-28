import styles from "@/styles/Widget.module.css";
import Image from "next/image";
import Icon from "public/icons/fill/raindrops.svg";

export default function Precipitation() {
  return (
    <div className={styles.widget}>
      <h3>Precipitation</h3>
      <div className={styles.content}>
        <Image src={Icon} alt="icon" className={styles.icon} />
        <p>0.50mm</p>
      </div>
    </div>
  );
}
