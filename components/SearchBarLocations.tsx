import { CityInfo } from "@/types/location";
import styles from "styles/SearchBarLocations.module.css";

type ParamsType = { locations: CityInfo[] };
export default function SearchBarLocations({ locations }: ParamsType) {
  if (!locations.length)
    return (
      <ul className={`${styles.list} ${styles.isEmpty}`}>
        <li className={styles.listItem}>No location found</li>
      </ul>
    );
  else
    return (
      <ul className={styles.list}>
        {locations.map(item => (
          <li key={item.id} className={styles.listItem}>
            {item.name}, {item.country}
          </li>
        ))}
      </ul>
    );
}
