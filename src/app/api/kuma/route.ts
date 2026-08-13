import { NextResponse } from "next/server";
import {
  aggregateAllSightings,
  getCachedSightings,
} from "@/lib/sightings-cache";
import { getApprovedCitizenSightings } from "@/lib/submission-store";
import type {
  SightingSourceKind,
  UnifiedSighting,
} from "@/lib/sources/types";
import { jstToday } from "@/lib/jst-date";
import { isApproximateLocation } from "@/lib/location-precision";

export type KumaRecord = {
  id: number | string;
  lat: number;
  lon: number;
  date: string;
  // 出没の時刻 "HH:MM"。分かる場合のみ。Popup で日付に添えて表示。
  time?: string;
  prefectureName: string;
  cityName: string;
  sectionName: string;
  comment: string;
  headCount: number;
  source?: string;
  // 情報源の種別。"citizen" (市民投稿) などをバッジ表示で区別するため。
  sourceKind?: SightingSourceKind;
  // 公式情報源 (自治体・警察) なら true、ニュース報道など二次情報源は false。
  // 未指定 (旧スナップショット由来) は UI 側で「公式扱い」にフォールバック。
  isOfficial?: boolean;
  // ニュース取り込み等で元記事 URL を保持する。Popup の「詳細」リンク用。
  sourceUrl?: string;
  // 市民投稿の写真 URL。Popup に画像を表示する。
  photoUrl?: string;
  // 当社が初めて取り込んだ epoch ms。「新着 ○分前」表示用。
  ingestedAt?: number;
  // 同一地区の複数出没を最新1件に集約したときの束ねた件数 (2以上で表示)。
  mergedCount?: number;
};

const DEFAULT_LIMIT = 8000;
const MAX_LIMIT = 100000;

export function unifiedToKumaRecord(s: UnifiedSighting): KumaRecord {
  return {
    id: s.id,
    lat: s.lat,
    lon: s.lon,
    date: s.date,
    time: s.time,
    prefectureName: s.prefectureName,
    cityName: s.cityName,
    sectionName: s.sectionName,
    comment: s.comment,
    headCount: s.headCount,
    source: s.source,
    sourceKind: s.sourceKind,
    isOfficial: s.isOfficial,
    sourceUrl: s.sourceUrl,
    photoUrl: s.photoUrl,
    ingestedAt: s.ingestedAt,
    mergedCount: s.mergedCount,
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pref = searchParams.get("pref");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const source = searchParams.get("source");
  // lite=1: 地図の初期描画に必要な最小フィールドだけ返す (comment 等の長文を落として
  // 転送量を大幅削減)。ポップアップに必要な詳細は /api/kuma/[id] で都度取得する。
  const lite = searchParams.get("lite") === "1";
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
    // 承認済みの市民投稿を地図にマージ (Upstash 障害時も全体を倒さない)。
    // SUBMIT_ENABLED=1 のときだけ表示する。これにより、本番でフラグを
    // ONにするまで市民投稿は地図に出ない (公開タイミングを完全に制御)。
    const citizen =
      process.env.SUBMIT_ENABLED === "1"
        ? await getApprovedCitizenSightings().catch(
            () => [] as UnifiedSighting[],
          )
        : [];
    // 場所が市町村までしか分かっていない事案は地図に出さない。座標は地名から
    // 起こした推定でしかなく、ピンを打つと無関係な地点を「出没地点」として
    // 主張してしまう (location-precision.ts)。件数には残るので、地図に出ない
    // 分は place ページ側で明示する。
    const pinnable = [...unified, ...citizen].filter(
      (r) => !isApproximateLocation(r),
    );
    const all = pinnable.map(unifiedToKumaRecord);

    let records = all;
    if (pref) records = records.filter((r) => r.prefectureName === pref);
    if (from) records = records.filter((r) => r.date >= from);
    if (to) records = records.filter((r) => r.date <= to);
    if (source) records = records.filter((r) => r.source === source);
    // 未来日付の不正レコードを除外する。上流の自治体サイトでまれに
    // タイポ等で未来日付が入ることがあり、「最新」表示を狂わせるため、
    // API 側でクリップして UI に到達させない。
    const todayIso = jstToday();
    records = records.filter((r) => r.date <= todayIso);

    const sorted = [...records].sort((a, b) => (a.date > b.date ? -1 : 1));
    const limited = sorted.slice(0, limit);
    // lite は地図描画/採点に必要な最小フィールドのみ (id/lat/lon/date/ingestedAt/
    // prefectureName)。comment・cityName・sectionName 等は詳細取得に回す。
    const outRecords = lite
      ? limited.map((r) => ({
          id: r.id,
          lat: r.lat,
          lon: r.lon,
          date: r.date,
          ingestedAt: r.ingestedAt,
          prefectureName: r.prefectureName,
        }))
      : limited;

    const bySource: Record<string, number> = {};
    for (const r of all) {
      const key = r.source ?? "unknown";
      bySource[key] = (bySource[key] ?? 0) + 1;
    }

    // クライアントの軽量ポーリング (/api/kuma/latest) と突き合わせる署名。
    // フィルタ済み全件 (slice 前) を対象に最大 ingestedAt を取る。
    let latestIngestedAt = 0;
    for (const r of records) {
      if (typeof r.ingestedAt === "number" && r.ingestedAt > latestIngestedAt) {
        latestIngestedAt = r.ingestedAt;
      }
    }

    return NextResponse.json(
      {
        records: outRecords,
        total: all.length,
        matched: records.length,
        latestIngestedAt,
        shown: outRecords.length,
        sources: bySource,
      },
      {
        headers: {
          // 承認済み市民投稿や news 由来の新着を地図に早く反映させるため短めに。
          // stale-while-revalidate で体感速度を保ちつつ ~1 分で更新される。
          "Cache-Control":
            "public, max-age=60, s-maxage=60, stale-while-revalidate=600",
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
