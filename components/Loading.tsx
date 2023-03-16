import styles from "styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingMask}>
      <div className={styles.spinner}></div>
    </div>
  );
}
