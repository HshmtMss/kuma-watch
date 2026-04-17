export type MeshBounds = {
  south: number;
  north: number;
  west: number;
  east: number;
};

export type MeshCenter = {
  lat: number;
  lon: number;
};

const SECOND_LAT_STEP_MIN = 5;
const SECOND_LON_STEP_MIN = 7.5;
const THIRD_LAT_STEP_MIN = 2.5;
const THIRD_LON_STEP_MIN = 3.75;

export function meshCodeToCenter(meshCode: string): MeshCenter | null {
  if (meshCode.length < 8) return null;

  const latIndex = Number(meshCode.slice(0, 2));
  const lonIndex = Number(meshCode.slice(2, 4));
  const secondLat = Number(meshCode.slice(4, 5));
  const secondLon = Number(meshCode.slice(5, 6));
  const thirdCode = Number(meshCode.slice(6, 8));

  if (
    Number.isNaN(latIndex) ||
    Number.isNaN(lonIndex) ||
    Number.isNaN(secondLat) ||
    Number.isNaN(secondLon) ||
    Number.isNaN(thirdCode)
  ) {
    return null;
  }

  const thirdLat = Math.floor(thirdCode / 10);
  const thirdLon = thirdCode % 10;

  const southWestLat =
    (latIndex * 2) / 3 +
    (secondLat * SECOND_LAT_STEP_MIN) / 60 +
    (thirdLat * THIRD_LAT_STEP_MIN) / 60;
  const southWestLon =
    lonIndex +
    100 +
    (secondLon * SECOND_LON_STEP_MIN) / 60 +
    (thirdLon * THIRD_LON_STEP_MIN) / 60;

  return {
    lat: southWestLat + THIRD_LAT_STEP_MIN / 60 / 2,
    lon: southWestLon + THIRD_LON_STEP_MIN / 60 / 2,
  };
}

export function meshCodeToBounds(meshCode: string): MeshBounds | null {
  const center = meshCodeToCenter(meshCode);
  if (!center) return null;
  const halfLat = THIRD_LAT_STEP_MIN / 60 / 2;
  const halfLon = THIRD_LON_STEP_MIN / 60 / 2;
  return {
    south: center.lat - halfLat,
    north: center.lat + halfLat,
    west: center.lon - halfLon,
    east: center.lon + halfLon,
  };
}

export function latLonToMeshCode(lat: number, lon: number): string | null {
  if (lat < 0 || lat > 66 || lon < 100 || lon > 180) return null;

  const latIndex = Math.floor((lat * 3) / 2);
  const lonIndex = Math.floor(lon - 100);

  const latRemainderMin = (lat - (latIndex * 2) / 3) * 60;
  const lonRemainderMin = (lon - lonIndex - 100) * 60;

  const secondLat = Math.floor(latRemainderMin / SECOND_LAT_STEP_MIN);
  const secondLon = Math.floor(lonRemainderMin / SECOND_LON_STEP_MIN);

  const thirdLatRemainderMin =
    latRemainderMin - secondLat * SECOND_LAT_STEP_MIN;
  const thirdLonRemainderMin =
    lonRemainderMin - secondLon * SECOND_LON_STEP_MIN;

  const thirdLat = Math.floor(thirdLatRemainderMin / THIRD_LAT_STEP_MIN);
  const thirdLon = Math.floor(thirdLonRemainderMin / THIRD_LON_STEP_MIN);

  const thirdCode = thirdLat * 10 + thirdLon;

  return (
    `${latIndex.toString().padStart(2, "0")}` +
    `${lonIndex.toString().padStart(2, "0")}` +
    `${secondLat}${secondLon}` +
    `${thirdCode.toString().padStart(2, "0")}`
  );
}

export function haversineKm(
  aLat: number,
  aLon: number,
  bLat: number,
  bLon: number,
): number {
  const R = 6371;
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLon = toRad(bLon - aLon);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
