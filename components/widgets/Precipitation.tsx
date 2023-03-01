import Image from "next/image";
import Icon from "public/icons/fill/raindrops.svg";
import styles from "styles/widgets/Precipitation.module.css";

export default function Precipitation() {
  return (
    <div className="widget">
      <h3>Precipitation Probability</h3>
      <div className={styles.container}>
        <Image src={Icon} alt="icon" className={styles.icon} />
        <p>23%</p>
      </div>
    </div>
  );
}
