import { useContext, useEffect, useState } from "react";
import styles from "@/styles/SearchBar.module.css";
import { Icon } from "@iconify/react";
import { getLocations, reverseGeocoding } from "@/api/geocoding";
import { Location } from "@/types/location";
import SearchBarLocations from "./SearchBarLocations";
import useDebounce from "@/hooks/useDebounce";
import { MyContext } from "@/api/context";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [locations, setLocations] = useState<Location[]>([]);
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

  const { setLocation, locate } = useContext(MyContext);
  function changeLocation(location: Location) {
    setValue("");
    setLocation(location);
  }

  return (
    <div className={styles.container}>
      <Icon icon="simple-line-icons:magnifier" />
      <button className={styles.locate} onClick={() => locate()}>
        <Icon icon="lucide:locate-fixed" />
      </button>
      <input
        value={value}
        onChange={e => handleInput(e.target.value)}
        placeholder="Search for location..."
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
