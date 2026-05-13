import { NextResponse } from "next/server";
import { prefCodeFromMuniCd, prefNameFromMuniCd } from "@/lib/prefectures";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";

const UPSTREAM = "https://nominatim.openstreetmap.org/search";
const REVERSE = "https://nominatim.openstreetmap.org/reverse";
const GSI_REVERSE = "https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
const CACHE_SECONDS = 86400;

type NominatimSearchResult = {
  place_id: number;
  lat: string;
  lon: string;
  display_name: string;
  type?: string;
  class?: string;
  importance?: number;
  address?: {
    city?: string;
    town?: string;
    village?: string;
    county?: string;
    state?: string;
    region?: string;
    country_code?: string;
  };
};

type GsiReverseResult = {
  results?: { muniCd?: string; lv01Nm?: string } | null;
};

export type GeocodeHit = {
  id: number;
  lat: number;
  lon: number;
  displayName: string;
  prefecture?: string;
  prefCode?: string;
  city?: string;
  district?: string;
  kind?: string;
};

function toHit(r: NominatimSearchResult): GeocodeHit {
  const addr = r.address ?? {};
  return {
    id: r.place_id,
    lat: Number(r.lat),
    lon: Number(r.lon),
    displayName: r.display_name,
    prefecture: addr.state ?? addr.region,
    city: addr.city ?? addr.town ?? addr.village ?? addr.county,
    kind: r.type ?? r.class,
  };
}

// 5 桁の総務省コード → 市町村名 (JAPAN_MUNICIPALITIES マスター)
function cityNameFromMuniCd(muniCd: string | undefined): string | undefined {
  if (!muniCd) return undefined;
  // GSI は 5 桁、JAPAN_MUNICIPALITIES.cityCode も 5 桁
  const match = JAPAN_MUNICIPALITIES.find((m) => m.cityCode === muniCd);
  return match?.cityName;
}

function distanceKm(la1: number, lo1: number, la2: number, lo2: number): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(la2 - la1);
  const dLon = toRad(lo2 - lo1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(la1)) * Math.cos(toRad(la2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

// JAPAN_MUNICIPALITIES の重心から lat/lon に最も近い市町村を返す。
// Nominatim と GSI の両方が落ちた時の最終 fallback。50km 以内に何も無ければ undefined。
function findNearestMuni(
  lat: number,
  lon: number,
): { prefName: string; cityName: string; prefCode: string } | undefined {
  let best: { d: number; m: (typeof JAPAN_MUNICIPALITIES)[number] } | null = null;
  for (const m of JAPAN_MUNICIPALITIES) {
    const d = distanceKm(lat, lon, m.lat, m.lon);
    if (!best || d < best.d) best = { d, m };
  }
  if (!best || best.d > 50) return undefined;
  return {
    prefName: best.m.prefName,
    cityName: best.m.cityName,
    prefCode: best.m.prefCode,
  };
}

async function fetchGsiReverse(
  lat: number,
  lon: number,
): Promise<{
  prefCode?: string;
  prefecture?: string;
  city?: string;
  district?: string;
}> {
  try {
    const url = new URL(GSI_REVERSE);
    url.searchParams.set("lat", lat.toFixed(5));
    url.searchParams.set("lon", lon.toFixed(5));
    const res = await fetch(url.toString(), {
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      next: { revalidate: CACHE_SECONDS },
    });
    if (!res.ok) return {};
    const data = (await res.json()) as GsiReverseResult;
    const muniCd = data.results?.muniCd;
    return {
      prefCode: prefCodeFromMuniCd(muniCd),
      prefecture: prefNameFromMuniCd(muniCd),
      city: cityNameFromMuniCd(muniCd),
      district: data.results?.lv01Nm,
    };
  } catch {
    return {};
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") ?? "").trim();
  const reverseLat = searchParams.get("lat");
  const reverseLon = searchParams.get("lon");

  if (!q && !(reverseLat && reverseLon)) {
    return NextResponse.json(
      { error: "q もしくは lat/lon のいずれかを指定してください" },
      { status: 400 },
    );
  }

  try {
    if (reverseLat && reverseLon) {
      const lat = Number(reverseLat);
      const lon = Number(reverseLon);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
        return NextResponse.json({ error: "lat/lon が不正です" }, { status: 400 });
      }
      const url = new URL(REVERSE);
      url.searchParams.set("format", "jsonv2");
      url.searchParams.set("lat", lat.toFixed(5));
      url.searchParams.set("lon", lon.toFixed(5));
      url.searchParams.set("accept-language", "ja");
      url.searchParams.set("addressdetails", "1");
      url.searchParams.set("zoom", "14");

      // Nominatim と GSI を並列で叩く。
      // Nominatim はレート制限・障害で遅くなることがあるので 3 秒で abort。
      // GSI と最寄り市町村検索でカバーする。
      const upstreamPromise = (async () => {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 3000);
        try {
          return await fetch(url.toString(), {
            headers: {
              "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)",
              "Accept-Language": "ja",
            },
            signal: ctrl.signal,
            next: { revalidate: CACHE_SECONDS },
          });
        } catch {
          return null;
        } finally {
          clearTimeout(timer);
        }
      })();
      const [upstream, gsi] = await Promise.all([
        upstreamPromise,
        fetchGsiReverse(lat, lon),
      ]);
      let hit: GeocodeHit;
      if (upstream && upstream.ok) {
        const data = (await upstream.json()) as NominatimSearchResult;
        hit = toHit(data);
      } else {
        // Nominatim が落ちていても GSI 由来で最低限の hit を組み立てる。
        hit = {
          id: 0,
          lat,
          lon,
          displayName: [gsi.prefecture, gsi.city, gsi.district]
            .filter(Boolean)
            .join(" "),
        };
      }
      if (gsi.prefecture) hit.prefecture = gsi.prefecture;
      if (gsi.prefCode) hit.prefCode = gsi.prefCode;
      if (gsi.district) hit.district = gsi.district;
      // Nominatim が city を取れなかった (海岸線・国境近く・rate limit 等) 場合は GSI で補完
      if (!hit.city && gsi.city) hit.city = gsi.city;

      // 最終 fallback: 上記いずれも prefName/cityName を埋められなかった時、
      // JAPAN_MUNICIPALITIES マスターの重心から最寄り市町村を検索する。
      // 海岸線・湖上などで Nominatim と GSI が両方失敗するケースを救う。
      if (!hit.city || !hit.prefecture) {
        const nearest = findNearestMuni(lat, lon);
        if (nearest) {
          if (!hit.city) hit.city = nearest.cityName;
          if (!hit.prefecture) hit.prefecture = nearest.prefName;
          if (!hit.prefCode) hit.prefCode = nearest.prefCode;
        }
      }

      // それでも何も埋まらないなら 502 (日本域外の点など)
      if (!hit.prefecture && !hit.city) {
        return NextResponse.json(
          { error: "逆ジオコーディングに失敗しました" },
          { status: 502 },
        );
      }

      return NextResponse.json(
        { result: hit },
        {
          headers: {
            "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
          },
        },
      );
    }

    const url = new URL(UPSTREAM);
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("q", q);
    url.searchParams.set("accept-language", "ja");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("countrycodes", "jp");
    url.searchParams.set("limit", "7");

    const upstream = await fetch(url.toString(), {
      headers: {
        "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)",
        "Accept-Language": "ja",
      },
      next: { revalidate: CACHE_SECONDS },
    });
    if (!upstream.ok) {
      return NextResponse.json(
        { error: "検索に失敗しました", upstreamStatus: upstream.status },
        { status: 502 },
      );
    }
    const raw = (await upstream.json()) as NominatimSearchResult[];
    const hits = raw.map(toHit);
    return NextResponse.json(
      { query: q, count: hits.length, hits },
      {
        headers: {
          "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
        },
      },
    );
  } catch {
    return NextResponse.json(
      { error: "予期しないエラーが発生しました" },
      { status: 500 },
    );
  }
}
