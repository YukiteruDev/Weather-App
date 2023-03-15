import { MyContext } from "@/api/context";
import { ScaleType } from "@/types/temperature";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import styles from "styles/Scale.module.css";

export default function Scale() {
  const { scale, setScale } = useContext(MyContext);
  function handleClick(localScale: ScaleType) {
    setScale(localScale);
  }
  function isActive(localScale: ScaleType) {
    return scale === localScale;
  }
  return (
    <div className={styles.buttons}>
      <button
        className={`${styles.button} ${
          isActive("celsius") ? styles.active : ""
        }`}
        onClick={() => handleClick("celsius")}
      >
        <Icon icon="carbon:temperature-celsius" />
        <span>Celsius</span>
      </button>
      <button
        className={`${styles.button} ${
          isActive("fahrenheit") ? styles.active : ""
        }`}
        onClick={() => handleClick("fahrenheit")}
      >
        <Icon icon="carbon:temperature-fahrenheit" />
        <span>Fahrenheit</span>
      </button>
    </div>
  );
}
