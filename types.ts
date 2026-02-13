
export interface Coordinates {
  lat: number;
  lon: number;
}

export interface TornadoData {
  id: string;
  lat: number;
  lon: number;
  severity: 'Warning' | 'Watch' | 'Historical';
  timestamp: number;
  heading: number; // 0-360
  speed: number; // km/h
  radius: number; // meters
  description: string;
  isSimulated?: boolean;
  // New field for historical tracks
  path?: Coordinates[]; 
  fujitaScale?: string; // e.g., EF3, EF5
}

export interface MapConfig {
  centerLat: number;
  centerLon: number;
  zoom: number;
  radius: number; // search/render radius in km
}

export interface SearchResult {
  display_name: string;
  lat: string;
  lon: string;
}
