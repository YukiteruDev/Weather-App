import { Icon } from "@iconify/react";
import styles from "styles/Scale.module.css";

export default function Scale() {
  return (
    <div className={styles.buttons}>
      <button className={`${styles.button} ${styles.activeButton}`}>
        <Icon icon="carbon:temperature-celsius" />
        <span>Celsius</span>
      </button>
      <button className={styles.button}>
        <Icon icon="carbon:temperature-fahrenheit" />
        <span>Fahrenheit</span>
      </button>
    </div>
  );
}
