export const defaultLocation: Location = {
  place_id: 298316729,
  lat: "35.6812665",
  lon: "139.757653",
  display_name: "Tokyo, Japan",
  icon: "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
};

export type Location = {
  place_id: number;
  lat: string;
  lon: string;
  display_name: string;
  icon?: string;
  address?: {
    city: string;
    district: string;
    state: string;
    country: string;
    country_code: string;
  };
};
