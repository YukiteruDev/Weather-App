import { useContext, useEffect, useState } from "react";
import styles from "@/styles/SearchBar.module.css";
import { Icon } from "@iconify/react";
import { getLocations, reverseGeocoding } from "@/api/geocoding";
import { CityInfo } from "@/types/location";
import SearchBarLocations from "./SearchBarLocations";
import useDebounce from "@/hooks/useDebounce";
import { MyContext } from "@/api/context";

export default function SearchBar() {
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

  type CoordsType = { latitude: number; longitude: number };
  async function handleLocate() {
    navigator.geolocation.getCurrentPosition(
      loc => getPosition(loc.coords),
      error => {
        console.error(error);
        alert(error.message);
      }
    );
  }
  async function getPosition(coords: CoordsType) {
    const position = await reverseGeocoding(coords.latitude, coords.longitude);
    console.log(position);
  }

  return (
    <div className={styles.container}>
      <Icon icon="simple-line-icons:magnifier" />
      <button className={styles.locate} onClick={() => handleLocate()}>
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
