import styles from "@/styles/Panel.module.css";
import SearchBar from "./SearchBar";
import Day from "./widgets/Day";

export default function Panel() {
  const range = [1, 2, 3, 4, 5, 6, 7];
  return (
    <main className={styles.panel}>
      <div className={styles.top}>
        <SearchBar />
        <div className={styles.theme}>
          <button className={styles.textButton}>Light</button>
          <button className={styles.textButton}>Dark</button>
          <button className={styles.textButton}>System</button>
        </div>
      </div>
      <section className={styles.forecast}>
        <div className={styles.forecastButtons}>
          <button className={styles.textButton}>Hourly Forecast</button>
          <button className={styles.textButton}>Weekly Forecast</button>
        </div>
        <div className={styles.days}>
          {range.map(num => {
            return <Day key={num} />;
          })}
        </div>
      </section>
    </main>
  );
}
