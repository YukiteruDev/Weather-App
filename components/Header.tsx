import styles from "@/styles/Header.module.css";
import { Icon } from "@iconify/react";
import { lato } from "@/api/fonts";
import Image from "next/image";
import HeaderIcon from "@/public/icons/fill/rain.svg";

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
      <Image src={HeaderIcon} alt="header-icon" className={styles.icon} />
      <div className={styles.temperature}>
        <p className={lato.className}>
          12<i>°</i>
        </p>
        <p className={styles.status}>Rain and snow mixed</p>
        <div className={styles.bottom}>
          <div className={styles.bottomInfo}>
            <Icon icon="ph:t-shirt-bold" />
            <div>
              <span>Feel like</span>
              <p>10°</p>
            </div>
          </div>
          <div className={styles.bottomInfo}>
            <Icon icon="material-symbols:visibility-outline" />
            <div>
              <span>Wind Speed</span>
              <p>10km/h</p>
            </div>
          </div>
          <div className={styles.bottomInfo}>
            <Icon icon="material-symbols:visibility-outline" />
            <div>
              <span>Visibility</span>
              <p>22km</p>
            </div>
          </div>
          <div className={styles.bottomInfo}>
            <Icon icon="material-symbols:visibility-outline" />
            <div>
              <span>Pressure</span>
              <p>700hPa</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
