import { NextResponse } from "next/server";
import {
  aggregateAllSightings,
  getCachedSightings,
} from "@/lib/sightings-cache";
import type { UnifiedSighting } from "@/lib/sources/types";

export type KumaRecord = {
  id: number | string;
  lat: number;
  lon: number;
  date: string;
  prefectureName: string;
  cityName: string;
  sectionName: string;
  comment: string;
  headCount: number;
  source?: string;
  // 公式情報源 (自治体・警察) なら true、ニュース報道など二次情報源は false。
  // 未指定 (旧スナップショット由来) は UI 側で「公式扱い」にフォールバック。
  isOfficial?: boolean;
  // ニュース取り込み等で元記事 URL を保持する。Popup の「詳細」リンク用。
  sourceUrl?: string;
  // 当社が初めて取り込んだ epoch ms。「新着 ○分前」表示用。
  ingestedAt?: number;
};

const DEFAULT_LIMIT = 8000;
const MAX_LIMIT = 100000;

function unifiedToKumaRecord(s: UnifiedSighting): KumaRecord {
  return {
    id: s.id,
    lat: s.lat,
    lon: s.lon,
    date: s.date,
    prefectureName: s.prefectureName,
    cityName: s.cityName,
    sectionName: s.sectionName,
    comment: s.comment,
    headCount: s.headCount,
    source: s.source,
    isOfficial: s.isOfficial,
    sourceUrl: s.sourceUrl,
    ingestedAt: s.ingestedAt,
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pref = searchParams.get("pref");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const source = searchParams.get("source");
  // limit パース: "abc" や "0" や "-5" のような不正値は DEFAULT_LIMIT に倒す。
  // 旧コード `Number(v) || DEFAULT_LIMIT` だと "0" のときに 0 ではなく DEFAULT を
  // 返したいのに、後段の Math.max(1, ...) で 1 になってしまう不整合があった。
  const limitParam = searchParams.get("limit");
  const limitNum = limitParam !== null ? Number(limitParam) : NaN;
  const limit =
    Number.isFinite(limitNum) && limitNum >= 1
      ? Math.min(MAX_LIMIT, Math.floor(limitNum))
      : DEFAULT_LIMIT;
  const force = searchParams.get("refresh") === "1";

  try {
    const unified = force
      ? await aggregateAllSightings()
      : await getCachedSightings();
    const all = unified.map(unifiedToKumaRecord);

    let records = all;
    if (pref) records = records.filter((r) => r.prefectureName === pref);
    if (from) records = records.filter((r) => r.date >= from);
    if (to) records = records.filter((r) => r.date <= to);
    if (source) records = records.filter((r) => r.source === source);
    // 未来日付の不正レコードを除外する。上流の自治体サイトでまれに
    // タイポ等で未来日付が入ることがあり、「最新」表示を狂わせるため、
    // API 側でクリップして UI に到達させない。
    const todayIso = new Date().toISOString().slice(0, 10);
    records = records.filter((r) => r.date <= todayIso);

    const sorted = [...records].sort((a, b) => (a.date > b.date ? -1 : 1));
    const limited = sorted.slice(0, limit);

    const bySource: Record<string, number> = {};
    for (const r of all) {
      const key = r.source ?? "unknown";
      bySource[key] = (bySource[key] ?? 0) + 1;
    }

    return NextResponse.json(
      {
        records: limited,
        total: all.length,
        matched: records.length,
        shown: limited.length,
        sources: bySource,
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
