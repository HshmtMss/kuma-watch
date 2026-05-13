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

      // Nominatim と GSI を並列で叩く。Nominatim 失敗時は GSI ベースで返す。
      const upstreamPromise = fetch(url.toString(), {
        headers: {
          "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)",
          "Accept-Language": "ja",
        },
        next: { revalidate: CACHE_SECONDS },
      }).catch(() => null);
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

      // 両方とも失敗して住所が全く取れない場合だけ 502 を返す
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
