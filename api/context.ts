import { CityInfo, defaultCity } from "./../types/location";
import { createContext } from "react";

interface MyContextType {
  location: CityInfo;
  setLocation: React.Dispatch<CityInfo>;
}
export const MyContext = createContext<MyContextType>({
  location: defaultCity,
  setLocation: () => {},
});
