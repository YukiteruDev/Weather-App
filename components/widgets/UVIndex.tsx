import Image from "next/image";
import styles from "styles/widgets/UVIndex.module.css";

type PropsType = {
  level: number;
};
export default function UVIndex({ level }: PropsType) {
  const Icon = require(`public/icons/fill/uv-index-${level}.svg`);
  return (
    <div className="widget">
      <h3>UV Index</h3>
      <div className={styles.container}>
        <Image src={Icon} alt="icon" className={styles.icon} />
        <p>No protection needed.</p>
      </div>
    </div>
  );
}
