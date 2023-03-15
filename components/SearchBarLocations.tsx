import { Location } from "@/types/location";
import styles from "styles/SearchBarLocations.module.css";

type ParamsType = { locations: Location[]; changeLocation: Function };
export default function SearchBarLocations({
  locations,
  changeLocation,
}: ParamsType) {
  if (!locations.length)
    return (
      <ul className={styles.list}>
        <li className={styles.listItem}>No location found</li>
      </ul>
    );
  else
    return (
      <ul className={styles.list}>
        {locations.map(item => (
          <li key={item.place_id} className={styles.listItem}>
            <a href="javascript:void(0)" onClick={() => changeLocation(item)}>
              {item.display_name}
            </a>
          </li>
        ))}
      </ul>
    );
}
