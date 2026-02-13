
import { TornadoData, Coordinates } from '../types';

// NOAA API Endpoint
const NOAA_ALERTS_API = 'https://api.weather.gov/alerts/active?event=Tornado%20Warning';

export const fetchActiveTornadoes = async (): Promise<TornadoData[]> => {
  try {
    const response = await fetch(NOAA_ALERTS_API);
    if (!response.ok) {
      console.warn('Weather API unavailable.');
      return []; 
    }

    const data = await response.json();
    const alerts = data.features || [];

    if (alerts.length === 0) {
      console.log('No active real-world tornadoes found.');
      return [];
    }

    // Transform NOAA polygon alerts into point-based tornado "centers"
    return alerts.map((alert: any) => {
      const geometry = alert.geometry;
      let lat = 0, lon = 0;

      // NOAA alerts are usually Polygons. We calculate the centroid.
      if (geometry && geometry.type === 'Polygon') {
        const coords = geometry.coordinates[0];
        let sumLat = 0, sumLon = 0;
        // The last point in a polygon is same as first, usually we can just average them all
        coords.forEach((c: number[]) => {
          sumLon += c[0];
          sumLat += c[1];
        });
        lat = sumLat / coords.length;
        lon = sumLon / coords.length;
      }

      return {
        id: alert.properties.id,
        lat,
        lon,
        severity: 'Warning',
        timestamp: new Date(alert.properties.sent).getTime(),
        heading: 0, 
        speed: 0,   
        radius: 200, 
        description: alert.properties.headline || 'Tornado Warning',
        isSimulated: false
      };
    });

  } catch (error) {
    console.error('Error fetching weather data:', error);
    return [];
  }
};

// --- Historical Data Simulation ---
// Since real-time access to historical shapefiles requires complex GIS backends,
// we generate realistic paths for demonstration or specific historic dates.

const generatePath = (startLat: number, startLon: number, lengthKm: number, heading: number): Coordinates[] => {
  const path: Coordinates[] = [];
  const steps = 20;
  const latStep = (Math.cos(heading * Math.PI / 180) * lengthKm) / 111 / steps;
  const lonStep = (Math.sin(heading * Math.PI / 180) * lengthKm) / (111 * Math.cos(startLat * Math.PI / 180)) / steps;

  for (let i = 0; i <= steps; i++) {
    // Add some Perlin-like noise to the path so it's not a straight line
    const noise = Math.sin(i * 0.5) * 0.005; 
    path.push({
      lat: startLat + (latStep * i) + noise,
      lon: startLon + (lonStep * i) + noise
    });
  }
  return path;
};

export const fetchHistoricalTornadoes = async (date: string): Promise<TornadoData[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const year = new Date(date).getFullYear();
  
  // Famous outbreaks to simulate if year matches
  if (year === 2013) {
    // Moore, OK simulation
    return [{
      id: 'hist-2013-moore',
      lat: 35.3468,
      lon: -97.5164, // End point approx
      severity: 'Historical',
      fujitaScale: 'EF5',
      timestamp: new Date('2013-05-20').getTime(),
      heading: 60,
      speed: 0,
      radius: 1000,
      description: '2013 Newcastle-Moore Tornado',
      path: generatePath(35.2900, -97.6500, 25, 65) // Approx track
    }];
  } 
  
  if (year === 2011) {
    // Joplin, MO
    return [{
      id: 'hist-2011-joplin',
      lat: 37.0842,
      lon: -94.5133,
      severity: 'Historical',
      fujitaScale: 'EF5',
      timestamp: new Date('2011-05-22').getTime(),
      heading: 90,
      speed: 0,
      radius: 1200,
      description: '2011 Joplin Tornado',
      path: generatePath(37.0600, -94.6500, 30, 85)
    }];
  }

  // Generic random historical data for other dates to populate the map
  const results: TornadoData[] = [];
  // Center roughly on tornado alley
  const baseLat = 35.0;
  const baseLon = -97.0;

  for (let i = 0; i < 5; i++) {
    const lat = baseLat + (Math.random() * 4 - 2);
    const lon = baseLon + (Math.random() * 4 - 2);
    const heading = 45 + Math.random() * 45; // Usually NE movement
    const length = 10 + Math.random() * 40; // 10-50km track

    results.push({
      id: `hist-gen-${i}`,
      lat: lat, 
      lon: lon,
      severity: 'Historical',
      fujitaScale: `EF${Math.floor(Math.random() * 4) + 1}`,
      timestamp: new Date(date).getTime(),
      heading: heading,
      speed: 0,
      radius: 400 + Math.random() * 400,
      description: `Historical Track Record #${i+1}`,
      path: generatePath(lat - 0.2, lon - 0.2, length, heading)
    });
  }

  return results;
};

export const searchLocation = async (query: string): Promise<any[]> => {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
    return await response.json();
  } catch (error) {
    console.error("Geocoding failed", error);
    return [];
  }
};
