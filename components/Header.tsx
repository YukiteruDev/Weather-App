import styles from "@/styles/Header.module.css";
import { Icon } from "@iconify/react";
import { lato } from "@/api/fonts";
import Image from "next/image";
import HeaderIcon from "@/public/icons/fill/rain.svg";
import Link from "next/link";
import { CurrentWeather } from "@/types/temperature";
import weatherCode from "@/api/weatherCode.json";

// function getWeatherInfo(code: any) {
//   const description = weatherCode[code].description;
//   return { description };
// }

type HeaderProps = {
  currentWeather: CurrentWeather;
};
export default function Header({ currentWeather }: HeaderProps) {
  const code = currentWeather.weatherCode;
  console.log({ code });
  let obj = {
    "0": {
      description: "Clear Sky",
      icon: "clear",
    },
  };
  // const weatherInfo = obj[code];
  return (
    <header className={styles.header}>
      <>
        <div className={styles.top}>
          <p className={lato.className}>Tokyo, Japan</p>
          <Link href="/settings">
            <button className={styles.settingsButton}>
              <Icon
                icon="ant-design:setting-outlined"
                className={styles.topIcon}
              />
            </button>
          </Link>
        </div>
        <Image src={HeaderIcon} alt="header-icon" className={styles.icon} />
        <div className={styles.temperature}>
          <p className={lato.className}>
            {currentWeather.temperature}
            <i>°</i>
          </p>
          <p className={styles.status}>{""}</p>
          <div className={styles.bottom}>
            <div className={styles.bottomInfo}>
              <Icon icon="ph:t-shirt-bold" />
              <div>
                <span>Feel like</span>
                <p>{currentWeather.apparentTemperature}°</p>
              </div>
            </div>
            <div className={styles.bottomInfo}>
              <Icon icon="ph:wind" />
              <div>
                <span>Wind Speed</span>
                <p>{currentWeather.windSpeed}km/h</p>
              </div>
            </div>
            <div className={styles.bottomInfo}>
              <Icon icon="material-symbols:visibility-outline" />
              <div>
                <span>Visibility</span>
                <p>{currentWeather.visibility / 1000}km</p>
              </div>
            </div>
            <div className={styles.bottomInfo}>
              <Icon icon="material-symbols:humidity-percentage-outline" />
              <div>
                <span>Humidity</span>
                <p>{currentWeather.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </header>
  );
}
