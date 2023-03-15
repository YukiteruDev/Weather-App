export type CityInfo = {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  country_code: string;
  elevation: number;
  country_id: number;
  feature_code: string;
  population: number;
  admin1: string;
};

export const defaultCity: CityInfo = {
  id: 1850147,
  name: "Tokyo",
  latitude: 35.6895,
  longitude: 139.69171,
  elevation: 44,
  feature_code: "PPLC",
  country_code: "JP",
  timezone: "Asia/Tokyo",
  population: 8336599,
  country_id: 1861060,
  country: "Japan",
  admin1: "Tokyo",
};

export type LocationType = {
  place_id: number;
  lat: string;
  lon: string;
  display_name: string;
  address: {
    city: string;
    district: string;
    state: string;
    country: string;
    country_code: string;
  };
};
