import Image from "next/image";
import Warmer from "public/icons/fill/thermometer-warmer.svg";
import Colder from "public/icons/fill/thermometer-colder.svg";
import styles from "styles/widgets/Temperature.module.css";

type PropsType = {
  highOrLow: "high" | "low";
};
export default function Temperature({ highOrLow }: PropsType) {
  const isHigh = highOrLow === "high";
  return (
    <div className="widget">
      <h3>{isHigh ? "Highest" : "Lowest"} Temperature</h3>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image src={isHigh ? Warmer : Colder} alt="warmer" />
          <p>{isHigh ? "15.1°" : "6.7°"}</p>
        </div>
        <p>Feels like {isHigh ? "12.6°" : "4.6°"}</p>
      </div>
    </div>
  );
}
