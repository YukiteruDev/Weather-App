import { Icon } from "@iconify/react";
import styles from "styles/Settings.module.css";

export default function Appearance() {
  return (
    <>
      <h2 className={styles.title}>Appearance</h2>
      <div className={styles.items}>
        <button className={styles.item}>
          <Icon icon="material-symbols:light-mode-outline" />
          <span>Light</span>
        </button>
        <button className={styles.item}>
          <Icon icon="material-symbols:dark-mode-outline-rounded" />
          <span>Dark</span>
        </button>
        <button className={`${styles.item} ${styles.activeItem}`}>
          <Icon icon="material-symbols:phone-android-outline" />
          <span>Device</span>
        </button>
      </div>
    </>
  );
}
