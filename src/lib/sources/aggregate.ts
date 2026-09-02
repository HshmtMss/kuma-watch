import { DATA_SOURCES } from "@/data/data-sources";
import { fetchArcGisSightings } from "./arcgis";
import { fetchCsvSightings } from "./csv";
import { fetchGifuSightings } from "./gifu";
import { fetchHigumapSightings } from "./higumap";
import { fetchKemonoteSightings } from "./kemonote";
import { fetchKmlSightings } from "./kml";
import { fetchLlmHtmlSightings } from "./llm-html";
import { fetchNaganoPdfSightings } from "./nagano-pdf";
import { fetchGifuGisSightings } from "./gifu-gis";
import { fetchAichiPdfSightings } from "./aichi-pdf";
import { fetchFukuiMapSightings } from "./fukui-map";
import { fetchKanagawaPdfSightings } from "./kanagawa-pdf";
import { fetchKumalogAomoriSightings } from "./kumalog-aomori";
import { fetchNaraPdfSightings } from "./nara-pdf";
import { fetchYamaguchiPdfSightings } from "./yamaguchi-pdf";
import { fetchPdfLlmSightings } from "./pdf-llm";
import type { UnifiedSighting } from "./types";


/**
 * 同時に走らせる取得の数。
 *
 * 以前は Promise.all で全ソースを一度に叩いていた。2026-09-02 に市町村ページを
 * 48 本足してソースが 115 → 163 本になったところ、GitHub Actions の runner から
 * 出る接続が捌けなくなり、自治体サイトだけでなく Gemini・NHK・Yahoo・Google News
 * への接続まで軒並み 10 秒 (undici の既定の connect timeout) で落ちるように
 * なった。「ソースが丸ごと消えています」で取り込みが丸一日止まった。
 *
 * ソースを足すたびに同じことが起きるので、本数ではなく同時接続数で頭を抑える。
 * 律速は元々ジオコード (1 req/sec の直列) なので、ここを絞っても全体は遅くならない。
 */
const FETCH_CONCURRENCY = 8;

/** items を最大 limit 本の並列で処理し、入力順に結果を返す。 */
async function mapWithLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const out = new Array<R>(items.length);
  let next = 0;
  const worker = async (): Promise<void> => {
    for (;;) {
      const i = next++;
      if (i >= items.length) return;
      out[i] = await fn(items[i]);
    }
  };
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => worker()),
  );
  return out;
}

export async function fetchAllOfficialSightings(): Promise<UnifiedSighting[]> {
  const arcgis = DATA_SOURCES.filter((s) => s.arcgis);
  const csv = DATA_SOURCES.filter((s) => s.csv);
  const kml = DATA_SOURCES.filter((s) => s.kml);
  const higumap = DATA_SOURCES.filter((s) => s.extractor === "higumap-api");
  const gifu = DATA_SOURCES.filter((s) => s.extractor === "direct-shapefile-zip");
  const kemonote = DATA_SOURCES.filter((s) => s.extractor === "kemonote-api");
  const llmHtml = DATA_SOURCES.filter((s) => s.extractor === "llm-html");
  const llmPdf = DATA_SOURCES.filter((s) => s.extractor === "llm-pdf");
  const naganoPdf = DATA_SOURCES.filter(
    (s) => s.extractor === "nagano-pdf-table",
  );
  const yamaguchiPdf = DATA_SOURCES.filter(
    (s) => s.extractor === "yamaguchi-pdf-table",
  );
  const naraPdf = DATA_SOURCES.filter((s) => s.extractor === "nara-pdf-table");
  const gifuGis = DATA_SOURCES.filter((s) => s.extractor === "gifu-gis");
  const kumalog = DATA_SOURCES.filter((s) => s.extractor === "kumalog-aomori");
  const aichiPdf = DATA_SOURCES.filter((s) => s.extractor === "aichi-pdf-table");
  const kanagawaPdf = DATA_SOURCES.filter((s) => s.extractor === "kanagawa-pdf-table");
  const fukuiMap = DATA_SOURCES.filter((s) => s.extractor === "fukui-map");

  const jobs: (() => Promise<UnifiedSighting[]>)[] = [
    ...arcgis.map((s) => () => fetchArcGisSightings(s).catch(() => [] as UnifiedSighting[])),
    ...csv.map((s) => () => fetchCsvSightings(s).catch(() => [] as UnifiedSighting[])),
    ...kml.map((s) => () => fetchKmlSightings(s).catch(() => [] as UnifiedSighting[])),
    ...higumap.map((s) => () => fetchHigumapSightings(s).catch(() => [] as UnifiedSighting[])),
    ...gifu.map((s) => () => fetchGifuSightings(s).catch(() => [] as UnifiedSighting[])),
    ...kemonote.map((s) => () => fetchKemonoteSightings(s).catch(() => [] as UnifiedSighting[])),
    ...llmHtml.map((s) => () => fetchLlmHtmlSightings(s).catch(() => [] as UnifiedSighting[])),
    ...llmPdf.map((s) => () => fetchPdfLlmSightings(s).catch(() => [] as UnifiedSighting[])),
    ...naganoPdf.map((s) => () => fetchNaganoPdfSightings(s).catch(() => [] as UnifiedSighting[])),
    ...yamaguchiPdf.map((s) => () => fetchYamaguchiPdfSightings(s).catch(() => [] as UnifiedSighting[])),
    ...naraPdf.map((s) => () => fetchNaraPdfSightings(s).catch(() => [] as UnifiedSighting[])),
    ...gifuGis.map((s) => () => fetchGifuGisSightings(s).catch(() => [] as UnifiedSighting[])),
    ...kumalog.map((s) => () => fetchKumalogAomoriSightings(s).catch(() => [] as UnifiedSighting[])),
    ...aichiPdf.map((s) => () => fetchAichiPdfSightings(s).catch(() => [] as UnifiedSighting[])),
    ...kanagawaPdf.map((s) => () => fetchKanagawaPdfSightings(s).catch(() => [] as UnifiedSighting[])),
    ...fukuiMap.map((s) => () => fetchFukuiMapSightings(s).catch(() => [] as UnifiedSighting[])),
  ];

  const results = await mapWithLimit(jobs, FETCH_CONCURRENCY, (job) => job());

  const merged: UnifiedSighting[] = [];
  for (const arr of results) merged.push(...arr);
  return merged;
}
