import { NextResponse } from "next/server";

const NATIONAL_JSON_URL =
  "https://public.sharp9110.com/view/opendatajson/bear";

export type KumaRecord = {
  id: number;
  lat: number;
  lon: number;
  date: string;
  prefectureName: string;
  cityName: string;
  sectionName: string;
  comment: string;
  headCount: number;
};

type Sharp9110Record = {
  PostId: number;
  IssueDate?: string;
  Latitude?: number;
  Longitude?: number;
  PrefectureName?: string;
  CityName?: string;
  SectionNameText?: string;
  IssueComment?: string;
  HeadCount?: number;
};

// プロセスメモリにキャッシュ（再起動するまで有効）
let cache: { records: KumaRecord[]; fetchedAt: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1時間

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pref = searchParams.get("pref");

  try {
    const now = Date.now();

    if (!cache || now - cache.fetchedAt > CACHE_TTL_MS) {
      const res = await fetch(NATIONAL_JSON_URL, {
        headers: { "User-Agent": "kuma-map-prototype/1.0" },
        cache: "no-store",
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: "データの取得に失敗しました" },
          { status: 502 },
        );
      }

      const raw = (await res.json()) as Sharp9110Record[];

      const records: KumaRecord[] = raw
        .filter(
          (r) =>
            typeof r.Latitude === "number" &&
            typeof r.Longitude === "number" &&
            !isNaN(r.Latitude) &&
            !isNaN(r.Longitude),
        )
        .map((r) => ({
          id: r.PostId,
          lat: r.Latitude!,
          lon: r.Longitude!,
          date: r.IssueDate ? r.IssueDate.split("T")[0] : "",
          prefectureName: r.PrefectureName ?? "",
          cityName: r.CityName ?? "",
          sectionName: r.SectionNameText ?? "",
          comment: (r.IssueComment ?? "").split("#")[0].trim(),
          headCount: r.HeadCount ?? 1,
        }));

      cache = { records, fetchedAt: now };
    }

    let records = cache.records;
    if (pref) {
      records = records.filter((r) => r.prefectureName === pref);
    }

    // 件数が多すぎるとブラウザが重くなるため、新しい順に最大2000件に制限
    const limited = records.slice(-2000).reverse();

    return NextResponse.json(
      { records: limited, total: cache.records.length, shown: limited.length },
      {
        headers: {
          "Cache-Control": "public, max-age=3600",
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
