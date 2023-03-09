import styles from "@/styles/Header.module.css";
import { Icon } from "@iconify/react";
import { lato } from "@/api/fonts";
import Image from "next/image";
import Link from "next/link";
import { CurrentWeather } from "@/types/temperature";
import { getWeatherInfo } from "@/api/weatherCodes";
import { useEffect } from "react";

type HeaderProps = {
  currentWeather: CurrentWeather;
};
export default function Header({ currentWeather }: HeaderProps) {
  console.log("rendering header");
  const code = currentWeather.weatherCode;
  const weatherInfo = getWeatherInfo(code);
  const weatherIcon = require(`public/icons/fill/${weatherInfo.icon}.svg`);
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
        <Image src={weatherIcon} alt="header-icon" className={styles.icon} />
        <div className={styles.temperature}>
          <p className={lato.className}>
            {currentWeather.temperature}
            <i>°</i>
          </p>
          <p className={styles.status}>{weatherInfo.description}</p>
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
