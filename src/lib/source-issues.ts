/**
 * 公開元データの不整合レコードと、その補正内容の台帳。
 *
 * 公開元(自治体等)のファイル自身の中で「市町村名」と「緯度経度」が別々の
 * 市町村を指しているレコードがある。どちらの欄が誤りかを国土地理院で
 * 1件ずつ確認し、`data/source-issues.json` に根拠つきで記録してある。
 *
 * 判定の考え方:
 *   - 座標の実際の大字が記録の地名と一致する
 *       → 座標は記録どおりの場所を指している = 市町村名の欄が誤り (relabel)
 *   - 記録の地名が「記載の市町村」に実在し、座標は別の大字を指す
 *       → 座標が誤り。実在地点の座標へ直す (move)
 *   - どちらとも確定できない → 表示しない (hide)
 *
 * このファイルは自治体へのデータ修正依頼にも使うため、原本の値
 * (originalValues) を必ず保持する。補正は当サイトの表示にのみ適用し、
 * 台帳側の原本の値は書き換えない。
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type SourceIssue = {
  recordId: string;
  sourceId: string;
  sightingDate: string;
  publisher: { name: string; dataset: string; url: string; format: string; caveat?: string };
  originalValues: {
    cityName: string;
    sectionName: string;
    lat: number;
    lon: number;
    comment?: string;
  };
  gsiLookup: { muniCode: string | null; oaza: string | null };
  verdict: string;
  evidence: string;
  appliedAction: "relabel" | "move" | "hide";
  correction: { muniCd?: string; lat?: number; lon?: number; title?: string } | null;
};

let cache: Map<string, SourceIssue> | null = null;

/** recordId → 不整合レコード。台帳が無ければ空。 */
export function loadSourceIssues(): Map<string, SourceIssue> {
  if (cache) return cache;
  cache = new Map();
  const file = join(process.cwd(), "data", "source-issues.json");
  if (!existsSync(file)) return cache;
  try {
    const doc = JSON.parse(readFileSync(file, "utf8")) as { issues?: SourceIssue[] };
    for (const i of doc.issues ?? []) cache.set(i.recordId, i);
  } catch {
    // 読めなければ補正なし (黙って壊れた補正を当てるより、素のデータを出す)
  }
  return cache;
}
