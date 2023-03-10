const baseUrl = "https://geocoding-api.open-meteo.com/v1/search";
import { CityInfo } from "@/types/location";

type ResponseType = { results?: CityInfo[] };
export async function getLocations(name: string) {
  const url = `${baseUrl}?name=${name}`;
  const res: ResponseType = await (await fetch(url)).json();
  return res.results;
}
