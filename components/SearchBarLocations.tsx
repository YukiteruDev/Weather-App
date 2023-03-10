import { CityInfo } from "@/types/location";

type ParamsType = { locations: CityInfo[] };
export default function SearchBarLocations({ locations }: ParamsType) {
  if (!locations.length)
    return (
      <ul>
        <li>No location found</li>
      </ul>
    );
  else
    return (
      <ul>
        {locations.map(item => (
          <li key={item.id}>
            {item.name}, {item.country}
          </li>
        ))}
      </ul>
    );
}
