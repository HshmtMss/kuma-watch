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

let cache: { records: KumaRecord[]; fetchedAt: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000;
const DEFAULT_LIMIT = 8000;
const MAX_LIMIT = 25000;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pref = searchParams.get("pref");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const limitParam = searchParams.get("limit");
  const limit = limitParam
    ? Math.min(MAX_LIMIT, Math.max(1, Number(limitParam) || DEFAULT_LIMIT))
    : DEFAULT_LIMIT;

  try {
    const now = Date.now();

    if (!cache || now - cache.fetchedAt > CACHE_TTL_MS) {
      const res = await fetch(NATIONAL_JSON_URL, {
        headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
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
    if (from) {
      records = records.filter((r) => r.date >= from);
    }
    if (to) {
      records = records.filter((r) => r.date <= to);
    }

    // 日付降順、最新から limit 件
    const sorted = [...records].sort((a, b) => (a.date > b.date ? -1 : 1));
    const limited = sorted.slice(0, limit);

    return NextResponse.json(
      {
        records: limited,
        total: cache.records.length,
        matched: records.length,
        shown: limited.length,
      },
      {
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
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
