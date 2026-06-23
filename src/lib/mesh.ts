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

/**
 * メッシュ次数。3=3次(約1km・標準) / 4=1/2分割(約500m) / 5=1/4分割(約250m)。
 * 無料は 3、有料(契約地域)は 4〜5 を使い分けてヒートマップの解像度を上げる。
 */
export type MeshLevel = 3 | 4 | 5;

// 1/2 分割は 3 次セルを緯度経度それぞれ半分にし、SW=1/SE=2/NW=3/NE=4 で採番。
// 1/4 分割はさらにその半分。JIS X 0410 の分割地域メッシュに準拠。
function stepForLength(len: number): { lat: number; lon: number } {
  if (len >= 10) return { lat: THIRD_LAT_STEP_MIN / 4, lon: THIRD_LON_STEP_MIN / 4 };
  if (len >= 9) return { lat: THIRD_LAT_STEP_MIN / 2, lon: THIRD_LON_STEP_MIN / 2 };
  return { lat: THIRD_LAT_STEP_MIN, lon: THIRD_LON_STEP_MIN };
}

/** 分割コード (1..4) を緯度側 (0/1) と経度側 (0/1) に分解。 */
function splitQuadrant(q: number): { lat: number; lon: number } {
  return { lat: Math.floor((q - 1) / 2), lon: (q - 1) % 2 };
}

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

  let southWestLat =
    (latIndex * 2) / 3 +
    (secondLat * SECOND_LAT_STEP_MIN) / 60 +
    (thirdLat * THIRD_LAT_STEP_MIN) / 60;
  let southWestLon =
    lonIndex +
    100 +
    (secondLon * SECOND_LON_STEP_MIN) / 60 +
    (thirdLon * THIRD_LON_STEP_MIN) / 60;

  // 1/2 分割 (9 桁目)
  if (meshCode.length >= 9) {
    const q = Number(meshCode.slice(8, 9));
    if (Number.isNaN(q)) return null;
    const { lat, lon } = splitQuadrant(q);
    southWestLat += (lat * (THIRD_LAT_STEP_MIN / 2)) / 60;
    southWestLon += (lon * (THIRD_LON_STEP_MIN / 2)) / 60;
  }
  // 1/4 分割 (10 桁目)
  if (meshCode.length >= 10) {
    const q = Number(meshCode.slice(9, 10));
    if (Number.isNaN(q)) return null;
    const { lat, lon } = splitQuadrant(q);
    southWestLat += (lat * (THIRD_LAT_STEP_MIN / 4)) / 60;
    southWestLon += (lon * (THIRD_LON_STEP_MIN / 4)) / 60;
  }

  const step = stepForLength(meshCode.length);
  return {
    lat: southWestLat + step.lat / 60 / 2,
    lon: southWestLon + step.lon / 60 / 2,
  };
}

export function meshCodeToBounds(meshCode: string): MeshBounds | null {
  const center = meshCodeToCenter(meshCode);
  if (!center) return null;
  const step = stepForLength(meshCode.length);
  const halfLat = step.lat / 60 / 2;
  const halfLon = step.lon / 60 / 2;
  return {
    south: center.lat - halfLat,
    north: center.lat + halfLat,
    west: center.lon - halfLon,
    east: center.lon + halfLon,
  };
}

export function latLonToMeshCode(
  lat: number,
  lon: number,
  level: MeshLevel = 3,
): string | null {
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

  let code =
    `${latIndex.toString().padStart(2, "0")}` +
    `${lonIndex.toString().padStart(2, "0")}` +
    `${secondLat}${secondLon}` +
    `${thirdCode.toString().padStart(2, "0")}`;

  if (level >= 4) {
    const fourthLatRem = thirdLatRemainderMin - thirdLat * THIRD_LAT_STEP_MIN;
    const fourthLonRem = thirdLonRemainderMin - thirdLon * THIRD_LON_STEP_MIN;
    const halfLat = Math.floor(fourthLatRem / (THIRD_LAT_STEP_MIN / 2)); // 0/1
    const halfLon = Math.floor(fourthLonRem / (THIRD_LON_STEP_MIN / 2));
    code += String(halfLat * 2 + halfLon + 1);

    if (level >= 5) {
      const fifthLatRem = fourthLatRem - halfLat * (THIRD_LAT_STEP_MIN / 2);
      const fifthLonRem = fourthLonRem - halfLon * (THIRD_LON_STEP_MIN / 2);
      const qLat = Math.floor(fifthLatRem / (THIRD_LAT_STEP_MIN / 4));
      const qLon = Math.floor(fifthLonRem / (THIRD_LON_STEP_MIN / 4));
      code += String(qLat * 2 + qLon + 1);
    }
  }

  return code;
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
