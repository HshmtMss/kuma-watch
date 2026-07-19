/**
 * /data ページが表示する集計値を計算する。
 *
 * sightings.json (~19MB) を 1 度だけパースして source/pref/date 単位の
 * カウントを返す。ISR (revalidate=3600) で 1 時間ごとに再計算されるので、
 * 再ビルドなしで最新の数字に追従する。
 *
 * place-index.ts と二重で sightings.json を読むことになるが、それぞれ
 * モジュール内でメモ化されており、Next.js のサーバプロセス寿命の中で
 * 1 度だけパースされる前提。
 */
import { readFile } from "node:fs/promises";
import { jstToday, jstDaysAgo } from "@/lib/jst-date";
import { join } from "node:path";

export type SourceKind =
  | "sharp9110"
  | "news"
  | "arcgis"
  | "csv"
  | "llm-html"
  | "citizen";

export const SOURCE_KIND_LABEL: Record<SourceKind, string> = {
  sharp9110: "公衆衛生通報 (Sharp9110 / 環境省)",
  news: "ニュース報道",
  arcgis: "自治体 ArcGIS / Google マイマップ",
  csv: "自治体 CSV / KML / JSON 公開",
  "llm-html": "自治体 Web ページ (AI 抽出)",
  citizen: "市民投稿",
};

export const SOURCE_KIND_NOTE: Record<SourceKind, string> = {
  sharp9110:
    "登山者・通行人からの目撃通報を環境省が集約する公式システム。1 分間隔で同期。",
  news:
    "Google News RSS から取得した報道。AI で「クマ関連かつ具体的な出没事象か」を判定し、住所・日付を抽出。5 分間隔で同期。",
  arcgis:
    "自治体公式の ArcGIS Online 公開フィードと Google マイマップ KML。1 日 2 回同期。",
  csv:
    "自治体公式の CSV / KML / JSON 公開データ。1 日 2 回同期。",
  "llm-html":
    "自治体公式 Web ページ・PDF を AI でスクレイピング。年度跨ぎや住所表記ゆれを正規化。1 日 2 回同期。",
  citizen:
    "サイト利用者からの投稿。獣医工学ラボの管理者が内容を確認・承認したもののみ掲載。承認後すぐに反映。",
};

export type DataStats = {
  totalRecords: number;
  generatedAt: number;
  oldestDate: string;
  newestDate: string;
  bySourceKind: { kind: SourceKind; count: number }[];
  uniqueSources: number;
  uniquePrefectures: number;
  byPrefecture: { prefName: string; count: number; count90d: number }[];
  prefsWithZeroRecent: string[];
  recordsInLast30Days: number;
  recordsInLast90Days: number;
};

let cached: DataStats | null = null;
let cachedAtMs = 0;
const CACHE_MS = 5 * 60 * 1000; // 5 分

type RawRecord = {
  source?: string;
  sourceKind?: SourceKind;
  prefectureName?: string;
  date?: string;
};

type RawSnapshot = {
  generatedAt: number;
  records: RawRecord[];
};

export async function loadDataStats(): Promise<DataStats> {
  if (cached && Date.now() - cachedAtMs < CACHE_MS) return cached;

  const path = join(process.cwd(), "public", "data", "sightings.json");
  const raw = await readFile(path, "utf8");
  const snap = JSON.parse(raw) as RawSnapshot;
  const records = snap.records ?? [];

  // 件数ウィンドウは JST カレンダー日付で判定 (UTC 解釈の境界ズレを回避)。
  const today = jstToday();
  const cutoff30 = jstDaysAgo(30);
  const cutoff90 = jstDaysAgo(90);

  const sourceKindCounts = new Map<SourceKind, number>();
  const sourceSet = new Set<string>();
  const prefCounts = new Map<string, { total: number; r90: number }>();
  let oldest = "9999-12-31";
  let newest = "0000-01-01";
  let recent30 = 0;
  let recent90 = 0;

  for (const r of records) {
    const kind = (r.sourceKind ?? "llm-html") as SourceKind;
    sourceKindCounts.set(kind, (sourceKindCounts.get(kind) ?? 0) + 1);
    if (r.source) sourceSet.add(r.source);
    if (r.prefectureName) {
      const e = prefCounts.get(r.prefectureName) ?? { total: 0, r90: 0 };
      e.total++;
      prefCounts.set(r.prefectureName, e);
    }
    if (r.date && /^\d{4}-\d{2}-\d{2}$/.test(r.date)) {
      if (r.date < oldest) oldest = r.date;
      if (r.date <= today) {
        // newest は必ず未来日ガードの内側で更新する。外に置くと上流の
        // タイポ (2027-07-18 等) がそのまま「収録期間の終わり」として
        // /data ページに表示され、データの信頼性表示が壊れる。
        if (r.date > newest) newest = r.date;
        if (r.date >= cutoff30) recent30++;
        if (r.date >= cutoff90) {
          recent90++;
          if (r.prefectureName) {
            const e = prefCounts.get(r.prefectureName);
            if (e) e.r90++;
          }
        }
      }
    }
  }

  const bySourceKind = Array.from(sourceKindCounts.entries())
    .map(([kind, count]) => ({ kind, count }))
    .sort((a, b) => b.count - a.count);

  const byPrefecture = Array.from(prefCounts.entries())
    .map(([prefName, e]) => ({
      prefName,
      count: e.total,
      count90d: e.r90,
    }))
    .sort((a, b) => b.count - a.count);

  // 過去 90 日に出没ゼロの県 (= データのカバレッジが弱い or 本当に出没が無い県)
  const prefsWithZeroRecent = byPrefecture
    .filter((p) => p.count90d === 0)
    .map((p) => p.prefName);

  cached = {
    totalRecords: records.length,
    generatedAt: snap.generatedAt,
    oldestDate: oldest === "9999-12-31" ? "" : oldest,
    newestDate: newest === "0000-01-01" ? "" : newest,
    bySourceKind,
    uniqueSources: sourceSet.size,
    uniquePrefectures: prefCounts.size,
    byPrefecture,
    prefsWithZeroRecent,
    recordsInLast30Days: recent30,
    recordsInLast90Days: recent90,
  };
  cachedAtMs = Date.now();
  return cached;
}
