import { ScaleType } from "@/types/temperature";
import { Location, defaultLocation } from "./../types/location";
import { createContext } from "react";

interface MyContextType {
  location: Location;
  setLocation: React.Dispatch<Location>;
  scale: ScaleType;
  setScale: React.Dispatch<ScaleType>;
  locate: Function;
}
export const MyContext = createContext<MyContextType>({
  location: defaultLocation,
  setLocation: () => {},
  scale: "celsius",
  setScale: () => {},
  locate: () => {},
});
