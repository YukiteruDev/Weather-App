import Image from "next/image";
import SunriseIcon from "public/icons/fill/sunrise.svg";
import SunsetIcon from "public/icons/fill/sunset.svg";
import styles from "styles/widgets/Sunrise.module.css";

type PropsType = {
  isRise: boolean;
};
export default function Sunrise({ isRise }: PropsType) {
  return (
    <div className="widget">
      <h3>{isRise ? "Sunrise" : "Sunset"}</h3>
      <div className={styles.content}>
        <Image src={isRise ? SunriseIcon : SunsetIcon} alt="sunrise" />
        <p>{isRise ? "6:47 AM" : "6:35 PM"}</p>
      </div>
    </div>
  );
}
