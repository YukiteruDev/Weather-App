import { useState } from "react";
import styles from "@/styles/SearchBar.module.css";
import { Icon } from "@iconify/react";

export default function SearchBar() {
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <Icon icon="simple-line-icons:magnifier" />
      <button>
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
