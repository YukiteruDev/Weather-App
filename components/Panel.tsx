import styles from "@/styles/Panel.module.css";
import SearchBar from "./SearchBar";
import Day from "./widgets/Day";
import Sunrise from "./widgets/Sunrise";
import Temperature from "./widgets/Temperature";
import Precipitation from "./widgets/Precipitation";
import PrecipitationSum from "./widgets/PrecipitationSum";
import UVIndex from "./widgets/UVIndex";
import Wind from "./widgets/Wind";

export default function Panel() {
  const range = [1, 2, 3, 4, 5, 6, 7];
  return (
    <main className={styles.panel}>
      <div className={styles.top}>
        <SearchBar isSettings={false} />
        <div className={styles.theme}>
          <button className={styles.textButton}>Light</button>
          <button className={styles.textButton}>Dark</button>
          <button className={styles.textButton}>System</button>
        </div>
      </div>
      <section className={styles.content}>
        <article className={styles.forecast}>
          <div className={styles.forecastButtons}>
            <button className={styles.textButton}>Hourly Forecast</button>
            <button className={styles.textButton}>Weekly Forecast</button>
          </div>
          <div className={styles.days}>
            {range.map(num => {
              return <Day key={num} />;
            })}
          </div>
        </article>
        <article className={styles.detail}>
          <h2>Weather Details</h2>
          <div className={styles.widgets}>
            <Sunrise isRise={true} />
            <Sunrise isRise={false} />
            <Temperature highOrLow="high" />
            <Temperature highOrLow="low" />
            <Precipitation />
            <PrecipitationSum />
            <UVIndex level={3} />
            <Wind />
          </div>
        </article>
      </section>
    </main>
  );
}
