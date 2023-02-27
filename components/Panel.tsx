import styles from "@/styles/Panel.module.css";
import SearchBar from "./SearchBar";

export default function Panel() {
  return (
    <main className={styles.panel}>
      <div className={styles.top}>
        <SearchBar />
        <div className={styles.theme}>
          <button>Light</button>
          <button>Dark</button>
          <button>System</button>
        </div>
      </div>
    </main>
  );
}
