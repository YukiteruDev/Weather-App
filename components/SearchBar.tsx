import { useState } from "react";
import styles from "@/styles/SearchBar.module.css";
import { Icon } from "@iconify/react";
import { getLocations } from "@/api/geocoding";
import { CityInfo } from "@/types/location";
import SearchBarLocations from "./SearchBarLocations";

type SearchBarType = {
  isSettings: boolean;
};
export default function SearchBar({ isSettings }: SearchBarType) {
  const [value, setValue] = useState("");
  const [locations, setLocations] = useState<CityInfo[]>([]);
  async function handleInput(value: string) {
    setValue(value);
    if (!value) return;
    const locations = await getLocations(value);
    setLocations(locations || []);
  }
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
        onChange={e => handleInput(e.target.value)}
        placeholder="Search City..."
        className={styles.input}
      />
      <SearchBarLocations locations={locations} />
    </div>
  );
}
