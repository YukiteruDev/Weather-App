import { getWeatherIcon } from "@/api/weatherCodes";
import Image from "next/image";
import styles from "styles/Widget.module.css";

type PropsType = { level: number };
export default function UVIndex({ level }: PropsType) {
  const levelStr = level || "1"; // dealing api error
  const levelInt = parseInt(levelStr.toString());
  function protectionInfo() {
    if (levelInt > 6) return "Extra protection required.";
    else if (levelInt > 2) return "Protection required.";
    return "No Protection required.";
  }
  const icon = levelInt ? `uv-index-${levelInt}` : "cloudy";
  const UVIcon = getWeatherIcon(icon);
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>UV Index</h3>
      <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
        <Image src={UVIcon} alt="icon" className={styles.uvImage} />
        <p className={styles.bottomText}>{protectionInfo()}</p>
      </div>
    </div>
  );
}
