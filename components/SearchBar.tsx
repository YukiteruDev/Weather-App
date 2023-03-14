import { useContext, useEffect, useState } from "react";
import styles from "@/styles/SearchBar.module.css";
import { Icon } from "@iconify/react";
import { getLocations } from "@/api/geocoding";
import { CityInfo } from "@/types/location";
import SearchBarLocations from "./SearchBarLocations";
import useDebounce from "@/hooks/useDebounce";
import { MyContext } from "@/api/context";

type SearchBarType = {
  isSettings: boolean;
};
export default function SearchBar({ isSettings }: SearchBarType) {
  const [value, setValue] = useState("");
  const [locations, setLocations] = useState<CityInfo[]>([]);
  function handleInput(value: string) {
    setValue(value);
    if (!value) return;
  }

  const debounced = useDebounce(value);
  async function fetchLocations() {
    const locationList = await getLocations(value);
    setLocations(locationList || []);
  }
  useEffect(() => {
    fetchLocations();
  }, [debounced]);

  const { setLocation } = useContext(MyContext);
  function changeLocation(city: CityInfo) {
    setValue("");
    setLocation(city);
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
      {value && (
        <SearchBarLocations
          locations={locations}
          changeLocation={changeLocation}
        />
      )}
    </div>
  );
}
