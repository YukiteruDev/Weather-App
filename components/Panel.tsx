import styles from "@/styles/Panel.module.css";
import SearchBar from "./SearchBar";
import Day from "./widgets/Day";
import Hour from "./widgets/Hour";
import Sunrise from "./widgets/Sunrise";
import Temperature from "./widgets/Temperature";
import Precipitation from "./widgets/Precipitation";
import PrecipitationSum from "./widgets/PrecipitationSum";
import UVIndex from "./widgets/UVIndex";
import Wind from "./widgets/Wind";
import { useState } from "react";
import { useHorizontalScroll } from "@/api/scroll";
import { DailyData, HourlyData } from "@/types/temperature";

interface PanelProps {
  hourlyData: HourlyData;
  dailyData: DailyData;
}
export default function Panel({ hourlyData, dailyData }: PanelProps) {
  type TabType = "hour" | "day";
  const [tab, setTab] = useState<TabType>("hour");
  const scrollRef = useHorizontalScroll();
  function getHourlyData(index: number) {
    return {
      time: hourlyData.time[index],
      temperature: hourlyData.temperature_2m[index],
      weatherCode: hourlyData.weathercode[index],
    };
  }
  function getDailyData(index: number) {
    return {
      time: dailyData.time[index],
      weatherCode: dailyData.weathercode[index],
    };
  }
  return (
    <main className={styles.panel}>
      <div className={styles.top}>
        <SearchBar isSettings={false} />
        <div className={styles.scale}>
          <button className={styles.textButton}>Celsius</button>
          <button className={styles.textButton}>Fahrenheit</button>
        </div>
      </div>
      <section className={styles.content}>
        <article className={styles.forecast}>
          <div className={styles.forecastButtons}>
            <button
              className={`${styles.textButton} ${
                tab === "hour" ? styles.activeButton : ""
              }`}
              onClick={() => setTab("hour")}
            >
              Hourly Forecast
            </button>
            <button
              className={`${styles.textButton} ${
                tab === "day" ? styles.activeButton : ""
              }`}
              onClick={() => setTab("day")}
            >
              Weekly Forecast
            </button>
          </div>
          {tab === "day" ? (
            <div className={styles.days}>
              {dailyData.time.map((time, index) => {
                return <Day data={getDailyData(index)} key={time} />;
              })}
            </div>
          ) : (
            <div ref={scrollRef} className={styles.hours}>
              {hourlyData.time.map((time, index) => {
                return <Hour data={getHourlyData(index)} key={time} />;
              })}
            </div>
          )}
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
