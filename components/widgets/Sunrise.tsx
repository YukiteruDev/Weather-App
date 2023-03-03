import Image from "next/image";
import SunriseIcon from "public/icons/fill/sunrise.svg";
import SunsetIcon from "public/icons/fill/sunset.svg";
import styles from "styles/Widget.module.css";

type PropsType = {
  isRise: boolean;
};
export default function Sunrise({ isRise }: PropsType) {
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>{isRise ? "Sunrise" : "Sunset"}</h3>
      <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
        <Image
          className={styles.SunriseImage}
          src={isRise ? SunriseIcon : SunsetIcon}
          alt="sunrise"
        />
        <p className={styles.infoText}>{isRise ? "6:47 AM" : "6:35 PM"}</p>
      </div>
    </div>
  );
}
