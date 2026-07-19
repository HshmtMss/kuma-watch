import { NextResponse } from "next/server";
import { getCachedSightings } from "@/lib/sightings-cache";
import { haversineKm } from "@/lib/nearby-sightings";
import { jstDaysAgo, jstToday } from "@/lib/jst-date";

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
  // JST カレンダー日で切る (UTC 基準だと早朝に境界が 1 日ずれる)
  const iso365 = jstDaysAgo(365);
  const iso90 = jstDaysAgo(90);
  // 昨年・今年の月別比較用。昨年1月1日まで遡って集計する。
  const thisYear = now.getFullYear();
  const lastYear = thisYear - 1;
  const startISO = `${lastYear}-01-01`;

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
  // 昨年・今年の月別実測件数 (0=1月 .. 11=12月)。カードの月別出没チャート(昨年 vs 今年)用。
  const monthlyThisYear = new Array<number>(12).fill(0);
  const monthlyLastYear = new Array<number>(12).fill(0);
  // 未来日は上流のタイポ。「直近90日」に混ざると、実在しない出没が
  // 1年先まで件数と「最新の目撃日」に居座る (実測: 2027-07-18 の栃木レコード)。
  const todayIso = jstToday();
  for (const s of sightings) {
    if (!s.date || s.date < startISO || s.date > todayIso) continue;
    if (s.lat < latMin || s.lat > latMax) continue;
    if (s.lon < lonMin || s.lon > lonMax) continue;
    const d = haversineKm(lat, lon, s.lat, s.lon);
    if (d > radiusKm) continue;
    const yr = Number(s.date.slice(0, 4));
    const mo = Number(s.date.slice(5, 7)) - 1;
    if (mo >= 0 && mo < 12) {
      if (yr === thisYear) monthlyThisYear[mo] += 1;
      else if (yr === lastYear) monthlyLastYear[mo] += 1;
    }
    if (s.date >= iso365) count365 += 1;
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
      monthlyThisYear,
      monthlyLastYear,
      thisYear,
      lastYear,
      records,
    },
    { headers: { "Cache-Control": "no-cache" } },
  );
}
