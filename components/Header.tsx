import styles from "@/styles/Header.module.css";
import { Icon } from "@iconify/react";
import { lato } from "@/api/fonts";
import Image from "next/image";
import { CurrentWeather } from "@/types/temperature";
import { getWeatherIcon, getWeatherInfo } from "@/api/weatherCodes";
import { useContext } from "react";
import { MyContext } from "@/api/context";

type HeaderProps = { currentWeather: CurrentWeather };
export default function Header({ currentWeather }: HeaderProps) {
  const code = currentWeather.weatherCode;
  const weatherInfo = getWeatherInfo(code);
  const weatherIcon = getWeatherIcon(weatherInfo.icon);

  const { location } = useContext(MyContext);
  return (
    <header className={styles.header}>
      <p className={`${lato.className} ${styles.location}`}>
        {location.display_name}
      </p>
      <Image src={weatherIcon} alt="header-icon" className={styles.icon} />
      <div className={styles.weather}>
        <p className={`${lato.className} ${styles.temperature}`}>
          {currentWeather.temperature}
          <i>°</i>
        </p>
        <p className={styles.status}>{weatherInfo.description}</p>
        <div className={styles.bottom}>
          <div className={styles.bottomInfo}>
            <Icon icon="ph:t-shirt-bold" />
            <div>
              <span>Feels like</span>
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
    </header>
  );
}
