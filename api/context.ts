import { createContext } from "react";

interface MyContextType {
  location: object;
  setLocation: React.Dispatch<object>;
}
export const MyContext = createContext<MyContextType>({
  location: {},
  setLocation: () => {},
});
