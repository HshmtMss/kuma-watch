import { NextResponse } from "next/server";
import { getCachedSightings } from "@/lib/sightings-cache";
import { haversineKm } from "@/lib/nearby-sightings";

export const runtime = "nodejs";

const TOP_RECORDS = 10;

/**
 * 指定地点の周辺で「過去1年 (格上げ判定用)」と「過去3ヶ月 (カード表示用)」の
 * 目撃件数を返す。直近の目撃レコード一覧 (3ヶ月分) も含める。
 * UI フィルタには依存しないので、危険度判定は客観値となる。
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get("lat"));
  const lon = Number(searchParams.get("lon"));
  const radiusKm = Number(searchParams.get("radiusKm") ?? 10);
  if (
    !Number.isFinite(lat) ||
    !Number.isFinite(lon) ||
    !Number.isFinite(radiusKm)
  ) {
    return NextResponse.json({ error: "invalid params" }, { status: 400 });
  }

  const sightings = await getCachedSightings();
  const now = new Date();
  const cutoff365 = new Date(now);
  cutoff365.setDate(cutoff365.getDate() - 365);
  const cutoff90 = new Date(now);
  cutoff90.setDate(cutoff90.getDate() - 90);
  const iso365 = cutoff365.toISOString().slice(0, 10);
  const iso90 = cutoff90.toISOString().slice(0, 10);

  const latDelta = radiusKm / 111;
  const lonDelta = radiusKm / (111 * Math.cos((lat * Math.PI) / 180));
  const latMin = lat - latDelta;
  const latMax = lat + latDelta;
  const lonMin = lon - lonDelta;
  const lonMax = lon + lonDelta;

  type NearRecord = {
    id: string | number;
    date: string;
    cityName: string;
    sectionName: string;
    comment: string;
    headCount: number;
    distanceKm: number;
    isOfficial?: boolean;
    sourceUrl?: string;
  };

  let count365 = 0;
  let count90 = 0;
  let latest: string | null = null;
  const recent90: NearRecord[] = [];
  for (const s of sightings) {
    if (!s.date || s.date < iso365) continue;
    if (s.lat < latMin || s.lat > latMax) continue;
    if (s.lon < lonMin || s.lon > lonMax) continue;
    const d = haversineKm(lat, lon, s.lat, s.lon);
    if (d > radiusKm) continue;
    count365 += 1;
    if (!latest || s.date > latest) latest = s.date;
    if (s.date >= iso90) {
      count90 += 1;
      recent90.push({
        id: s.id,
        date: s.date,
        cityName: s.cityName ?? "",
        sectionName: s.sectionName ?? "",
        comment: s.comment ?? "",
        headCount: s.headCount ?? 1,
        distanceKm: d,
        isOfficial: s.isOfficial,
        sourceUrl: s.sourceUrl,
      });
    }
  }
  recent90.sort((a, b) =>
    a.date < b.date
      ? 1
      : a.date > b.date
        ? -1
        : a.distanceKm - b.distanceKm,
  );
  const records = recent90.slice(0, TOP_RECORDS);

  return NextResponse.json(
    {
      count365d: count365,
      count90d: count90,
      latestDate: latest,
      radiusKm,
      records,
    },
    { headers: { "Cache-Control": "no-cache" } },
  );
}
