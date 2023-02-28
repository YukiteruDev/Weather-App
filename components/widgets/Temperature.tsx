import Image from "next/image";
import styles from "@/styles/Widget.module.css";
import Warmer from "public/icons/fill/thermometer-warmer.svg";
import Colder from "public/icons/fill/thermometer-colder.svg";

export default function Temperature() {
  return (
    <div className={styles.widget}>
      <h3>Sunrise</h3>
      <div className={styles.content}>
        <Image src={Warmer} alt="warmer" className={styles.icon} />
        <p>6.1°</p>
      </div>
      <span>Feel like 4.6°</span>
    </div>
  );
}
