import { getCachedSightings } from "@/lib/sightings-cache";
import type { UnifiedSighting } from "@/lib/sources/types";

export type NearbyOptions = {
  radiusKm?: number;
  withinDays?: number;
  limit?: number;
};

export type NearbySighting = UnifiedSighting & { distanceKm: number };

export function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export async function findNearbySightings(
  lat: number,
  lon: number,
  opts: NearbyOptions = {},
): Promise<NearbySighting[]> {
  const radiusKm = opts.radiusKm ?? 5;
  const withinDays = opts.withinDays ?? 365;
  const limit = opts.limit ?? 15;

  const all = await getCachedSightings();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - withinDays);
  const cutoffIso = cutoff.toISOString().split("T")[0];

  const latDelta = radiusKm / 111;
  const lonDelta = radiusKm / (111 * Math.cos((lat * Math.PI) / 180));
  const latMin = lat - latDelta;
  const latMax = lat + latDelta;
  const lonMin = lon - lonDelta;
  const lonMax = lon + lonDelta;

  const near: NearbySighting[] = [];
  for (const s of all) {
    if (s.lat < latMin || s.lat > latMax || s.lon < lonMin || s.lon > lonMax) continue;
    if (s.date && s.date < cutoffIso) continue;
    const distanceKm = haversineKm(lat, lon, s.lat, s.lon);
    if (distanceKm > radiusKm) continue;
    near.push({ ...s, distanceKm });
  }

  near.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : a.distanceKm - b.distanceKm));
  return near.slice(0, limit);
}
