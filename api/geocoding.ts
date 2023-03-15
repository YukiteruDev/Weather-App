const baseUrl = "https://geocoding-api.open-meteo.com/v1/search";
import { CityInfo, LocationType } from "@/types/location";

type ResponseType = { results?: CityInfo[] };
export async function getLocations(name: string) {
  const url = `${baseUrl}?name=${name}`;
  const res: ResponseType = await (await fetch(url)).json();
  return res.results;
}

export async function reverseGeocoding(lat: number, lon: number) {
  const qs = `format=json&accept-language=en-US&lat=${lat}&lon=${lon}`;
  const url = `https://nominatim.openstreetmap.org/reverse?${qs}`;
  const location: LocationType = await (await fetch(url)).json();
  return location;
}
