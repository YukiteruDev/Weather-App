import Image from "next/image";
import styles from "@/styles/Widget.module.css";
import Warmer from "public/icons/fill/thermometer-warmer.svg";
import Colder from "public/icons/fill/thermometer-colder.svg";

type PropsType = {
  highOrLow: "high" | "low";
};
export default function Temperature({ highOrLow }: PropsType) {
  const isHigh = highOrLow === "high";
  return (
    <div className={styles.widget}>
      <h3>{isHigh ? "Highest" : "Lowest"} Temperature</h3>
      <div className={styles.temperature}>
        <Image
          src={isHigh ? Warmer : Colder}
          alt="warmer"
          className={styles.icon}
        />
        <p>{isHigh ? "15.1°" : "6.7°"}</p>
      </div>
      <p className={styles.info}>Feels like {isHigh ? "12.6" : "4.6"}</p>
    </div>
  );
}
