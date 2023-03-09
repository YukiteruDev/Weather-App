import Image from "next/image";
import SunriseIcon from "public/icons/fill/sunrise.svg";
import SunsetIcon from "public/icons/fill/sunset.svg";
import styles from "styles/Widget.module.css";

type PropsType = { rise?: string; set?: string };
export default function Sunrise({ rise, set }: PropsType) {
  function getTime() {
    const time = rise || set || "";
    return time.slice(-5);
  }
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>{rise ? "Sunrise" : "Sunset"}</h3>
      <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
        <Image
          className={styles.SunriseImage}
          src={rise ? SunriseIcon : SunsetIcon}
          alt="sunrise"
        />
        <p className={styles.infoText}>{getTime()}</p>
      </div>
    </div>
  );
}
