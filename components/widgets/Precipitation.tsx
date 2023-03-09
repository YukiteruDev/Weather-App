import Image from "next/image";
import Icon from "public/icons/fill/raindrop.svg";
import styles from "styles/Widget.module.css";

type PrecipitationProps = { probability: number };
export default function Precipitation({ probability }: PrecipitationProps) {
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Precipitation Probability</h3>
      <div className={styles.flexCenter}>
        <Image className={styles.uvImage} src={Icon} alt="icon" />
        <p className={styles.infoText}>23%</p>
      </div>
    </div>
  );
}
