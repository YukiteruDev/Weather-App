import Image from "next/image";
import Icon from "public/icons/fill/raindrops.svg";
import styles from "styles/Widget.module.css";

export default function PrecipitationSum() {
  return (
    <div className={styles.widget}>
      <h3 className={styles.title}>Total Precipitation</h3>
      <div className={styles.flexCenter}>
        <Image src={Icon} alt="icon" className={styles.uvImage} />
        <p className={styles.infoText}>10.5mm</p>
      </div>
    </div>
  );
}
