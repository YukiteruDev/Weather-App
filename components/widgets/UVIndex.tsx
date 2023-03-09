import Image from "next/image";
import styles from "styles/Widget.module.css";

type PropsType = { level: number };
export default function UVIndex({ level }: PropsType) {
  function protectionInfo() {
    if (level > 6) return "Extra protection required.";
    else if (level > 2) return "Protection required.";
    return "No Protection required.";
  }
  const levelInt = parseInt(level.toString());
  const Icon = require(`public/icons/fill/uv-index-${levelInt}.svg`);
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>UV Index</h3>
      <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
        <Image src={Icon} alt="icon" className={styles.uvImage} />
        <p className={styles.bottomText}>{protectionInfo()}</p>
      </div>
    </div>
  );
}
