import Image from "next/image";
import styles from "styles/Widget.module.css";

type PropsType = {
  level: number;
};
export default function UVIndex({ level }: PropsType) {
  const Icon = require(`public/icons/fill/uv-index-${level}.svg`);
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>UV Index</h3>
      <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
        <Image src={Icon} alt="icon" className={styles.uvImage} />
        <p className={styles.bottomText}>No protection needed.</p>
      </div>
    </div>
  );
}
