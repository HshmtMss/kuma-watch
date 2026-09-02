#!/usr/bin/env tsx
/**
 * 67 自治体ソースを実集約し public/data/sightings.json を更新する。
 *
 * 実行: `npm run build:sightings`  (tsx 経由 / 約 3 分)
 *
 * GitHub Actions の日次クーロン (.github/workflows/refresh-sightings.yml)
 * からも同じスクリプトが走り、差分があれば自動コミット・push する。
 *
 * 必要環境変数:
 *   GEMINI_API_KEY        — llm-html / llm-pdf 抽出に必須 (無くても skip して継続)
 *   KEMONOTE_USERNAME/PWD — kemonote API (デフォルトあり)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { aggregateAllSightings } from "../src/lib/sightings-cache";
import { isPrefLevelCity } from "../src/lib/muni-geo-check";
import { jstToday } from "../src/lib/jst-date";
import { reconcileOfficialRecord } from "../src/lib/muni-reconcile";
import { loadSourceIssues } from "../src/lib/source-issues";
import { buildGazetteer } from "../src/lib/place-gazetteer";
import {
  containingCode,
  hasBoundaryData,
  isInsideMuni,
  pointInsideMuni,
  resolveMuni,
} from "../src/lib/muni-boundary";
import { JAPAN_MUNICIPALITIES } from "../src/data/japan-municipalities";
import { DATA_SOURCES } from "../src/data/data-sources";
import type { UnifiedSighting } from "../src/lib/sources/types";

function isIsoDate(d: string | undefined): d is string {
  return typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d);
}

/** from → to の日数。どちらも YYYY-MM-DD 前提。 */
function daysBetweenIso(from: string, to: string): number {
  const a = Date.parse(`${from}T00:00:00Z`);
  const b = Date.parse(`${to}T00:00:00Z`);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return 0;
  return Math.round((b - a) / 86_400_000);
}

const MUNI_BY_CODE = new Map(JAPAN_MUNICIPALITIES.map((m) => [m.cityCode, m]));

// 全体再集約 (aggregateAllSightings) が生成する公式ソースの種別。これらは
// 毎回 fresh で置き換える。これ以外 (news 等) は news-flash が別途 append する
// ため、再集約では作られない → 前回スナップショットから引き継ぐ必要がある。
const REBUILT_KINDS = new Set(["csv", "sharp9110", "arcgis", "llm-html"]);

async function main(): Promise<void> {
  const start = Date.now();
  console.log("[build-sightings] aggregating from official + sharp9110 sources...");
  if (!process.env.GEMINI_API_KEY) {
    console.warn(
      "[build-sightings] GEMINI_API_KEY is not set — llm-html / llm-pdf sources will be skipped",
    );
  }

  // aggregateAllSightings は news も含めて返すが、news は news-flash が append し
  // 前回スナップショットから carried で引き継ぐ運用。ここで fresh 側にも news を
  // 混ぜると、refresh 毎に (fresh の news) + (carried の news) で二重化し、
  // 同一事案の重複ピンが際限なく増える。fresh からは news を除外する。
  const fresh = (await aggregateAllSightings()).filter(
    (r) => r.sourceKind !== "news",
  );
  const elapsedSec = ((Date.now() - start) / 1000).toFixed(1);

  if (fresh.length === 0) {
    console.error("[build-sightings] no records aggregated — refusing to overwrite snapshot");
    process.exit(1);
  }

  const outFile = join(process.cwd(), "public", "data", "sightings.json");
  if (!existsSync(dirname(outFile))) mkdirSync(dirname(outFile), { recursive: true });

  // 前回スナップショットを読む。全件置換ではなくマージする:
  //   - news 等 (再集約が作らない種別) は前回分を引き継ぐ → 4h毎の全消しを防ぐ
  //   - ingestedAt は id で引き継ぎ、初出の id だけ now でスタンプ
  //     → 公式ソースの新規出没も「直近24h / 新着」に乗り、再集約で消えない
  const now = Date.now();
  let prevRecords: UnifiedSighting[] = [];
  try {
    const prev = JSON.parse(readFileSync(outFile, "utf8")) as {
      records?: UnifiedSighting[];
    };
    prevRecords = Array.isArray(prev.records) ? prev.records : [];
  } catch {
    // 初回 / 読めない場合は引き継ぎなし
  }
  const prevById = new Map(prevRecords.map((r) => [r.id, r]));

  // ソース単位の激減チェック。
  //
  // 集約は「取れたものだけで全件を作り直す」設計なので、ネットワークが不調な
  // 回に走ると、取れなかったソースが丸ごと消えたスナップショットで上書きされる。
  // 2026-08-27 に CI 側で 24 件の Connect Timeout が出た回がまさにそれで、
  // 青森 5,095 件・福井 202 件・愛知 35 件が 0 件になったまま「成功」した。
  // 総件数は 99,369 件あり、全体を見ても異常に見えない。
  //
  // 前回 50 件以上あったソースが今回 0 件なら、取得側の障害とみなして中止する。
  // (県が公開をやめた場合も 0 件になるが、その場合は健全性チェックが翌日に
  //  検出するので、まず「壊れたデータで上書きしない」方を優先する。)
  //
  // ただし data-sources.ts から定義ごと消えた ID は対象外にする。守りたいのは
  // 「ネットワーク不調で取れなかった」ケースであって、定義の削除・改名は人が
  // 意図してやったことだから。長野の月別 PDF のように、県がファイル名を差し替え
  // ると ID (nagano-pdf-<ファイル名>) ごと変わるため、これを見ないと改名のたびに
  // ここで永久に止まる (2026-08-28〜30 に実際に発生)。
  const MIN_TO_GUARD = 50;
  const definedSourceIds = new Set(DATA_SOURCES.map((s) => s.id));
  // 市町村のお知らせページ (llm-html) はこの守りの対象外にする。
  //
  // これらは数件しか載らないうえ、季節が変われば掲載ごと消えるのが普通。
  // 兵庫では調査時点で 26 ページ中 11 ページが 0 件だった。1 つの町のページが
  // 空になっただけで全国の取り込みが止まるのは釣り合わない。守りたいのは
  // 「県の一括データが取れなかった」ケースであって、町のお知らせの入れ替わり
  // ではない。壊れていないかは scripts/survey-muni-bear-pages.ts で見直す。
  const muniPageIds = new Set(
    DATA_SOURCES.filter((s) => s.kind === "municipal" && s.extractor === "llm-html").map(
      (s) => s.id,
    ),
  );
  const prevBySource = new Map<string, number>();
  const prevLatest = new Map<string, string>();
  for (const r of prevRecords) {
    if (r.sourceKind === "news") continue; // news は carried 側なので対象外
    const k = r.source ?? "";
    if (!k) continue;
    prevBySource.set(k, (prevBySource.get(k) ?? 0) + 1);
    if (isIsoDate(r.date) && r.date > (prevLatest.get(k) ?? "")) prevLatest.set(k, r.date);
  }
  const freshBySource = new Map<string, number>();
  const freshLatest = new Map<string, string>();
  for (const r of fresh) {
    const k = r.source ?? "";
    if (!k) continue;
    freshBySource.set(k, (freshBySource.get(k) ?? 0) + 1);
    if (isIsoDate(r.date) && r.date > (freshLatest.get(k) ?? "")) freshLatest.set(k, r.date);
  }
  const vanished: string[] = [];
  const retired: string[] = [];
  for (const [src, n] of prevBySource) {
    if (n < MIN_TO_GUARD) continue;
    if (muniPageIds.has(src)) continue;
    if ((freshBySource.get(src) ?? 0) !== 0) continue;
    if (!definedSourceIds.has(src)) {
      retired.push(`${src}(前回${n}件)`);
      continue;
    }
    vanished.push(`${src}(前回${n}件)`);
  }
  if (retired.length > 0) {
    console.log(
      `[build-sightings] 定義が消えたソースを引退扱いにしました: ${retired.join(", ")}`,
    );
  }
  if (vanished.length > 0) {
    console.error(
      `[build-sightings] ソースが丸ごと消えています: ${vanished.join(", ")}\n` +
        `  取得側の障害の可能性が高いのでスナップショットを上書きしません。\n` +
        `  公開先が本当に無くなったのなら data-sources.ts / source-gaps.ts を更新してください。`,
    );
    process.exit(1);
  }

  // 最新の出没日が後退していないか。
  //
  // 上の 0 件チェックは「ソースが丸ごと消えた」しか拾えない。複数の PDF を
  // 束ねるソースは、今年度分の 1 本だけが 404 になっても過去年度分は取れるので
  // 素通りしてしまう。2026-09-01 に神奈川 (373→342 件) と奈良 (209→147 件) が
  // これで最新日ごと 5 ヶ月前へ巻き戻り、直近の出没が地図から消えた。
  // 件数の目減りは神奈川で 8% しかなく、割合で見張っても拾えない。
  // 一方「最新の出没日が月単位で戻る」のは取得漏れ以外にまず起きないので、
  // そこを見る。
  const MAX_DATE_REGRESSION_DAYS = 30;
  const regressed: string[] = [];
  for (const [src, n] of prevBySource) {
    if (n < MIN_TO_GUARD) continue;
    if (!definedSourceIds.has(src)) continue; // 定義ごと消えた ID は引退扱い
    const before = prevLatest.get(src);
    const after = freshLatest.get(src);
    if (!before || !after) continue;
    const back = daysBetweenIso(after, before);
    if (back > MAX_DATE_REGRESSION_DAYS) {
      regressed.push(`${src}(最新 ${before} → ${after} / ${back} 日後退)`);
    }
  }
  if (regressed.length > 0) {
    console.error(
      `[build-sightings] 最新の出没日が後退しています: ${regressed.join(", ")}\n` +
        `  一部の PDF/ページだけ取れなかった可能性が高いのでスナップショットを上書きしません。\n` +
        `  公開先のファイル名が変わっていないか data-sources.ts を確認してください。`,
    );
    process.exit(1);
  }

  // 再集約に含まれない種別 (news など) を前回から引き継ぐ。
  // news は無制限肥大を防ぐため直近 NEWS_RETENTION_DAYS 日分のみ引き継ぐ。
  const NEWS_RETENTION_DAYS = 180;
  const newsCutoff = new Date(now - NEWS_RETENTION_DAYS * 86_400_000)
    .toISOString()
    .slice(0, 10);
  const carried = prevRecords.filter(
    (r) =>
      !REBUILT_KINDS.has(r.sourceKind) &&
      (r.sourceKind !== "news" || (r.date ?? "") >= newsCutoff) &&
      // 市区町村が特定できていない news は、旧ジオコーダが県代表点
      // (例: 埼玉県→坂戸市付近) に積み上げた誤ピン。繰り越さず自然に浄化する。
      // (新規取り込みは news.ts / geocode.ts 側で既に弾いている)
      (r.sourceKind !== "news" || (r.cityName ?? "").trim() !== "") &&
      // cityName に市区町村でなく都道府県名 (例 "埼玉県") が入った news も
      // 同じ県代表点リーク。読み取り段では既に隠しているが、スナップショット
      // 本体・件数からも恒久除去するため繰り越さない (自然浄化)。
      (r.sourceKind !== "news" || !isPrefLevelCity(r.prefectureName, r.cityName)),
  );

  const rawMerged = [...fresh, ...carried];

  // 日付として成立しないレコードはスナップショットに残さない。
  // 読み取り段 (sightings-cache) でも弾いているが、本体・件数・生ファイル
  // 参照からも消しておかないと、除去しても次の取り込みで戻ってくる。
  const todayIso = jstToday();
  const records = rawMerged.filter((r) => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec((r.date ?? "").trim());
    if (!m) return true;
    const y = Number(m[1]), mo = Number(m[2]), da = Number(m[3]);
    const d = new Date(Date.UTC(y, mo - 1, da));
    if (d.getUTCFullYear() !== y || d.getUTCMonth() !== mo - 1 || d.getUTCDate() !== da)
      return false;
    return r.date <= todayIso;
  });
  const droppedBadDate = rawMerged.length - records.length;

  // 市町村ポリゴンによる最終補正。
  // news / llm-html (pdf-llm 含む) は市区町村名が本文で裏取りされている一方、
  // 座標は LLM 出力か Nominatim の当て推量で作った派生値。市域外へ落ちた
  // ものは市町村内へ寄せる。重心距離ベースの muni-geo-check では隣接市への
  // 数 km のズレ (毛呂山町の報道が坂戸市街に立つ等) を捕まえられない。
  // 公式座標系 (csv / arcgis / sharp9110) は座標が一次情報なので触らない。
  const GEOCODED_KINDS = new Set(["news", "llm-html"]);
  let snapped = 0;
  if (hasBoundaryData()) {
    for (const r of records) {
      if (!GEOCODED_KINDS.has(r.sourceKind)) continue;
      if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
      const muni = resolveMuni(r.prefectureName, r.cityName);
      if (!muni) continue;
      if (isInsideMuni(r.lat, r.lon, muni) !== false) continue;
      const p = pointInsideMuni(muni, r.id);
      r.lat = p.lat;
      r.lon = p.lon;
      snapped++;
    }
  }

  // 調査済みの不整合レコードに、台帳(data/source-issues.json)の補正を当てる。
  // 国土地理院で1件ずつ確認した結果なので、下の自動突き合わせより優先する。
  const ledger = loadSourceIssues();
  let ledgerRelabel = 0;
  let ledgerMove = 0;
  let ledgerHide = 0;
  for (const r of records) {
    const issue = ledger.get(r.id);
    if (!issue) continue;
    if (issue.appliedAction === "relabel" && issue.correction?.muniCd) {
      const mu = MUNI_BY_CODE.get(issue.correction.muniCd);
      if (mu) {
        r.cityName = mu.cityName.replace(/^[^\s]+?郡/, "");
        delete r.geoInconsistent;
        ledgerRelabel++;
      }
    } else if (
      issue.appliedAction === "move" &&
      Number.isFinite(issue.correction?.lat) &&
      Number.isFinite(issue.correction?.lon)
    ) {
      r.lat = issue.correction!.lat!;
      r.lon = issue.correction!.lon!;
      delete r.geoInconsistent;
      ledgerMove++;
    } else if (issue.appliedAction === "hide") {
      r.geoInconsistent = true;
      ledgerHide++;
    }
  }

  // 公式ソース (座標が上流由来) の市町村名と座標の食い違いを突き合わせる。
  // 観察場所の自由記述を第三の証拠にして、座標と名前のどちらが誤りかを
  // 行ごとに判定する。根拠不足なら触らない。詳細は muni-reconcile 参照。
  let officialMoved = 0;
  let officialRelabeled = 0;
  let officialUnresolved = 0;
  const gaz = buildGazetteer(
    records,
    (r) => {
      const mu = resolveMuni(r.prefectureName, r.cityName);
      return mu ? isInsideMuni(r.lat, r.lon, mu) === true : false;
    },
    (lat, lon) => containingCode(lat, lon),
  );
  for (const r of records) {
    if (GEOCODED_KINDS.has(r.sourceKind)) continue;
    if (ledger.has(r.id)) continue; // 台帳の判断を上書きしない
    const rec = reconcileOfficialRecord(r, gaz);
    if (rec.action === "move") {
      r.lat = rec.lat;
      r.lon = rec.lon;
      officialMoved++;
      delete r.geoInconsistent;
    } else if (rec.action === "relabel") {
      r.cityName = rec.cityName;
      officialRelabeled++;
      delete r.geoInconsistent;
    } else if (rec.action === "unknown") {
      // 正誤を確定できない矛盾レコード。原本を確認するまで表示しない。
      r.geoInconsistent = true;
      officialUnresolved++;
    }
  }

  // 市町村欄が空のレコードに、座標から市町村名を補う。
  // 群馬・福島のように上流に市町村の列が無い(あるいはコード値で解読できない)
  // ソースがある。空のままだと place-index が「最寄り重心」で解決するが、
  // これは実測で16.5%が実際の所属と食い違う。ポリゴン包含のほうが正確。
  let cityFilled = 0;
  if (hasBoundaryData()) {
    for (const r of records) {
      if ((r.cityName ?? "").trim()) continue;
      if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
      const code = containingCode(r.lat, r.lon);
      const mu = code ? MUNI_BY_CODE.get(code) : undefined;
      if (!mu) continue;
      if (mu.prefName !== r.prefectureName) continue; // 県が食い違うものは触らない
      r.cityName = mu.cityName.replace(/^[^\s]+?郡/, "");
      cityFilled++;
    }
  }

  let stamped = 0;
  for (const r of records) {
    const prior = prevById.get(r.id);
    if (prior && typeof prior.ingestedAt === "number") {
      r.ingestedAt = prior.ingestedAt; // 既知: 初出時刻を保持
    } else if (!prior && typeof r.ingestedAt !== "number") {
      r.ingestedAt = now; // 新規 id: 初出としてスタンプ
      stamped++;
    }
    // prevSeen にあるが ingestedAt 無し (旧公式レコード) は触らない = 新着扱いしない
  }

  const blob = { generatedAt: Date.now(), records };
  writeFileSync(outFile, JSON.stringify(blob));

  const carriedNews = carried.filter((r) => r.sourceKind === "news").length;
  console.log(
    `[build-sightings] wrote ${records.length} records ` +
      `(fresh ${fresh.length} + carried ${carried.length}, news ${carriedNews}) ` +
      `newly stamped ${stamped}, snapped ${snapped}, badDate ${droppedBadDate}, ` +
      `officialMoved ${officialMoved}, officialRelabeled ${officialRelabeled}, ` +
      `officialHidden ${officialUnresolved}, cityFilled ${cityFilled}, ` +
      `ledger(relabel ${ledgerRelabel}/move ${ledgerMove}/hide ${ledgerHide}) in ${elapsedSec}s`,
  );
}

main().catch((err) => {
  console.error("[build-sightings] failed:", err);
  process.exit(1);
});
