const baseUrl = "https://nominatim.openstreetmap.org";
import { Location } from "@/types/location";

export async function getLocations(query: string) {
  const qs = `format=json&accept-language=en-US&q=${query}`;
  const url = `${baseUrl}/search?${qs}`;
  const res: Location[] = await (await fetch(url)).json();
  return res;
}

export async function reverseGeocoding(lat: number, lon: number) {
  const qs = `format=json&accept-language=en-US&lat=${lat}&lon=${lon}`;
  const url = `${baseUrl}/reverse?${qs}`;
  const location: Location = await (await fetch(url)).json();
  return location;
}

export function getUserTimezone() {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return userTimezone;
}
