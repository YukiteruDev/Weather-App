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
import { useEffect, useRef, useState } from "react";
import { DailyData, HourlyData } from "@/types/temperature";
import { getCurrentDateTime } from "@/api/date";
import Scale from "./Scale";
import { Icon } from "@iconify/react";

interface PanelProps {
  hourlyData: HourlyData;
  dailyData: DailyData;
}
export default function Panel({ hourlyData, dailyData }: PanelProps) {
  type TabType = "hour" | "day";
  const [tab, setTab] = useState<TabType>("day");

  const [activeIndex, setActiveIndex] = useState(0);
  const [weekDay, setWeekDay] = useState("Today");
  function handleDayClick(index: number, weekDay: string) {
    setActiveIndex(index);
    setWeekDay(weekDay);
  }

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onScroll = (e: WheelEvent) => {
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onScroll);
      return () => el.removeEventListener("wheel", onScroll);
    }
  }, [tab]);
  return (
    <main className={styles.panel}>
      <div className={styles.top}>
        <SearchBar />
        <div className={styles.topRight}>
          <Scale />
          <a href="https://github.com/Yukiteno/Weather-App" target="_blank">
            <Icon icon="mdi:github" className={styles.github} />
          </a>
        </div>
      </div>
      <section className={styles.content}>
        <article className={styles.forecast}>
          <div className={styles.forecastButtons}>
            <button
              className={`${styles.textButton} ${
                tab === "day" ? styles.activeButton : ""
              }`}
              onClick={() => setTab("day")}
            >
              Weekly Forecast
            </button>
            <button
              className={`${styles.textButton} ${
                tab === "hour" ? styles.activeButton : ""
              }`}
              onClick={() => setTab("hour")}
            >
              Hourly Forecast
            </button>
          </div>
          {tab === "day" ? (
            <div className={styles.days}>
              {dailyData.time.map((time, index) => {
                return (
                  <Day
                    key={time}
                    data={dailyData}
                    index={index}
                    isActive={activeIndex === index}
                    callback={(idx, weekDay) => handleDayClick(idx, weekDay)}
                  />
                );
              })}
            </div>
          ) : (
            <div ref={scrollRef} className={styles.hours}>
              {hourlyData.time.map((time, index) => {
                const currentDateTime = getCurrentDateTime();
                if (time > currentDateTime) {
                  return <Hour data={hourlyData} index={index} key={time} />;
                }
              })}
            </div>
          )}
        </article>
        <article className={styles.detail}>
          <h2>Details for {weekDay}</h2>
          <div className={styles.widgets}>
            <Sunrise rise={dailyData.sunrise[activeIndex]} />
            <Sunrise set={dailyData.sunset[activeIndex]} />
            <Temperature
              maxTemperature={dailyData.temperature_2m_max[activeIndex]}
              maxApparent={dailyData.apparent_temperature_max[activeIndex]}
            />
            <Temperature
              minTemperature={dailyData.temperature_2m_min[activeIndex]}
              minApparent={dailyData.apparent_temperature_min[activeIndex]}
            />
            <Precipitation
              probability={dailyData.precipitation_probability_max[activeIndex]}
            />
            <PrecipitationSum sum={dailyData.precipitation_sum[activeIndex]} />
            <UVIndex level={dailyData.uv_index_max[activeIndex]} />
            <Wind
              speed={dailyData.windspeed_10m_max[activeIndex]}
              direction={dailyData.winddirection_10m_dominant[activeIndex]}
            />
          </div>
        </article>
      </section>
    </main>
  );
}
