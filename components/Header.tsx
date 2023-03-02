import styles from "@/styles/Header.module.css";
import { Icon } from "@iconify/react";
import { lato } from "@/api/fonts";
import Image from "next/image";
import HeaderIcon from "@/public/icons/fill/rain.svg";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Appearance from "./settings/Appearance";
import Scale from "./settings/Scale";

type SettingsProps = {
  hideSettings: Function;
};
function Settings({ hideSettings }: SettingsProps) {
  return (
    <>
      <div className={styles.top}>
        <h1 className={lato.className}>Settings</h1>
        <button onClick={() => hideSettings()}>
          <Icon
            icon="material-symbols:arrow-back-ios-new-rounded"
            className={styles.topIcon}
          />
        </button>
      </div>
      <SearchBar />
      <Appearance />
      <Scale />
    </>
  );
}

export default function Header() {
  const [isSetting, setIsSetting] = useState(false);
  return (
    <header className={styles.header}>
      {!isSetting ? (
        <>
          <div className={styles.top}>
            <p className={lato.className}>Tokyo, Japan</p>
            <button
              className={styles.settingsButton}
              onClick={() => setIsSetting(true)}
            >
              <Icon
                icon="ant-design:setting-outlined"
                className={styles.topIcon}
              />
            </button>
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
                <Icon icon="ph:wind" />
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
                <Icon icon="material-symbols:humidity-percentage-outline" />
                <div>
                  <span>Humidity</span>
                  <p>43%</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Settings hideSettings={() => setIsSetting(false)} />
      )}
    </header>
  );
}
