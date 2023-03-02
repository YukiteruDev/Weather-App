import { Icon } from "@iconify/react";
import styles from "styles/Settings.module.css";

export default function Scale() {
  return (
    <>
      <h2 className={styles.title}>Scale</h2>
      <div className={styles.items}>
        <button className={styles.item}>
          <Icon icon="carbon:temperature-celsius" />
          <span>Celsius</span>
        </button>
        <button className={`${styles.item} ${styles.activeItem}`}>
          <Icon icon="carbon:temperature-fahrenheit" />
          <span>Fahrenheit</span>
        </button>
      </div>
    </>
  );
}
