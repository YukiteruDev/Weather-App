import Image from "next/image";
import styles from "@/styles/Widget.module.css";
import SunriseIcon from "public/icons/fill/sunrise.svg";
import SunsetIcon from "public/icons/fill/sunset.svg";

type PropsType = {
  isRise: boolean;
};
export default function Sunrise({ isRise }: PropsType) {
  return (
    <div className={styles.widget}>
      <h3>{isRise ? "Sunrise" : "Sunset"}</h3>
      <div className={styles.content}>
        <Image
          src={isRise ? SunriseIcon : SunsetIcon}
          alt="sunrise"
          className={styles.icon}
        />
        <p>6:47 AM</p>
      </div>
    </div>
  );
}
