import styles from "@/styles/Header.module.css";
import { lato } from "@/api/fonts";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <p className={lato.className}>Tokyo, Japan</p>
        <div className={styles.units}>
          <button>℃</button>
          <button>℉</button>
        </div>
      </div>
    </header>
  );
}
