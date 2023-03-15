import { ScaleType } from "@/types/temperature";
import { CityInfo, defaultCity } from "./../types/location";
import { createContext } from "react";

interface MyContextType {
  location: CityInfo;
  setLocation: React.Dispatch<CityInfo>;
  scale: ScaleType;
  setScale: React.Dispatch<ScaleType>;
}
export const MyContext = createContext<MyContextType>({
  location: defaultCity,
  setLocation: () => {},
  scale: "celsius",
  setScale: () => {},
});
