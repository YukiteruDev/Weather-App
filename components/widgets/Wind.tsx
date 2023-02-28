import Image from "next/image";
import Icon from "public/icons/fill/wind-beaufort-5.svg";
import styles from "styles/widgets/Temperature.module.css";

export default function Wind() {
  return (
    <div className="widget">
      <h3>Wind Speed</h3>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image src={Icon} alt="icon" />
          <p>21km</p>
        </div>
        <p>Southwest, 260°</p>
      </div>
    </div>
  );
}
