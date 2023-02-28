import styles from "@/styles/Widget.module.css";
import Image from "next/image";

type PropsType = {
  level: number;
};
export default function UVIndex({ level }: PropsType) {
  const Icon = require(`public/icons/fill/uv-index-${level}.svg`);
  return (
    <div className={styles.widget}>
      <h3>Humidity</h3>
      <div className={styles.content}>
        <Image src={Icon} alt="icon" className={styles.icon} />
      </div>
    </div>
  );
}
