import styles from "@/styles/Panel.module.css";
import HourlyChart from "./HourlyForecast";

export default function Panel() {
  return (
    <main className={styles.panel}>
      <HourlyChart />
    </main>
  );
}
