import { useState } from "react";
import styles from "@/styles/SearchBar.module.css";
import { Icon } from "@iconify/react";

type SearchBarType = {
  isSettings: boolean;
};
export default function SearchBar({ isSettings }: SearchBarType) {
  const [value, setValue] = useState("");
  return (
    <div
      className={`${styles.container} ${
        isSettings ? styles.settingsSearch : ""
      }`}
    >
      <Icon icon="simple-line-icons:magnifier" />
      <button className={styles.locate}>
        <Icon icon="lucide:locate-fixed" />
      </button>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search City..."
        className={styles.input}
      />
    </div>
  );
}
