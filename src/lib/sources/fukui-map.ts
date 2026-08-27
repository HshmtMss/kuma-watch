import type { DataSourceEntry } from "@/data/data-sources";
import { containingCode, resolveMuni } from "@/lib/muni-boundary";
import { inJapanBounds } from "./types";
import type { UnifiedSighting } from "./types";

/**
 * 福井県「福井クマ情報」からの取り込み。
 *
 * 経緯: 登録では「独自 OpenLayers GIS で API 未公開・PDF は集計のみ」として
 * 諦められており、福井県は news 由来 117 件しか無かった。実際にはトップページの
 * 隠しフィールド (hdnKumaData) に地図描画用の JSON がそのまま埋まっている。
 * 追加のリクエストも認証も要らない。
 *
 * データの質は高い。緯度経度・字レベルの場所・時刻・種別 (目撃/痕跡/人身被害)・
 * 頭数が揃う。白山・奥越の登山地を含むので /spot の価値も高い。
 *
 * 制約: 埋め込まれるのは直近 3 か月ほど。期間指定は ASP.NET のフォーム
 * (__VIEWSTATE) 経由で、毎回 POST が要るうえ壊れやすい。取り込みは 4 時間ごと
 * なので直近分が取れれば漏れは出ない。
 */

const PREF = "福井県";
const PAGE = "https://tsukinowaguma.pref.fukui.lg.jp/";

type KumaRow = {
  Num?: string;
  SHUBETU?: string;
  SICHO?: string;
  BASHO?: string;
  HIDUKE?: string;
  JIKAN?: string;
  LON?: string;
  LAT?: string;
  TOSU?: string;
};

/** ページの隠しフィールドから JSON を取り出す。 */
export function extractKumaData(html: string): KumaRow[] {
  const m =
    /id="HeaderPlace_hdnKumaData"[^>]*value="([^"]*)"/.exec(html) ??
    /name="ctl00\$HeaderPlace\$hdnKumaData"[^>]*value="([^"]*)"/.exec(html);
  if (!m) return [];
  const raw = m[1]
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
  try {
    const j = JSON.parse(raw) as KumaRow[];
    return Array.isArray(j) ? j : [];
  } catch {
    return [];
  }
}

/** 「敦賀市沓見」から市名を落として字だけにする。 */
function sectionOf(basho: string, city: string): string {
  const b = (basho ?? "").trim();
  if (city && b.startsWith(city)) return b.slice(city.length).trim().slice(0, 40);
  return b.slice(0, 40);
}

export async function fetchFukuiMapSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  let html: string;
  try {
    const res = await fetch(PAGE, {
      // ISR ページの描画中にも呼ばれうるので no-store は使わない。
      next: { revalidate: 300 },
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) {
      console.log(`[fukui-map] 取得失敗 status=${res.status}`);
      return [];
    }
    html = await res.text();
  } catch (e) {
    const err = e as Error & { cause?: Error };
    console.log(
      `[fukui-map] 取得失敗: ${(err.cause?.message ?? err.message).slice(0, 120)}`,
    );
    return [];
  }

  const rows = extractKumaData(html);
  if (rows.length === 0) {
    // ページ構造が変わったときに静かに 0 件にならないよう残す。
    console.log("[fukui-map] hdnKumaData を取り出せませんでした");
    return [];
  }

  const out: UnifiedSighting[] = [];
  let pinned = 0;
  let dropped = 0;
  for (const r of rows) {
    const date = (r.HIDUKE ?? "").replace(/\//g, "-");
    const cityName = (r.SICHO ?? "").trim();
    const lat = Number(r.LAT);
    const lon = Number(r.LON);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !cityName) {
      dropped++;
      continue;
    }
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || !inJapanBounds(lat, lon)) {
      dropped++;
      continue;
    }
    const muni = resolveMuni(PREF, cityName);
    if (!muni) {
      dropped++;
      continue;
    }
    // 出典の座標が出典自身の言う市町村の中にあるかを確かめる。一括投入なので
    // 1 件ずつ人が見て気づけない。確証が取れたものだけ地図に出す。
    const code = containingCode(lat, lon);
    const verified = Boolean(code && muni.cityCodes.includes(code));
    if (verified) pinned++;
    const section = sectionOf(r.BASHO ?? "", cityName);
    const tosu = (r.TOSU ?? "").trim();
    const head = Number(tosu);
    out.push({
      id: `${source.id}-${r.Num ?? `${date}-${out.length}`}`,
      source: source.id,
      // location-precision の GEOCODED_KINDS に入る種別。sectionName が空なら
      // 「市町村までしか分からない事案」として扱われる。
      sourceKind: "llm-html",
      lat,
      lon,
      date,
      prefectureName: PREF,
      cityName: cityName.slice(0, 40),
      sectionName: verified ? section : "",
      // TOSU は「1」のことも「成獣1頭」のこともある。既に「頭」を含むなら
      // そのまま使う (付け足すと「成獣1頭頭」になる)。
      comment: [
        section,
        r.SHUBETU,
        r.JIKAN,
        tosu && tosu !== "不明" ? (tosu.includes("頭") ? tosu : `${tosu}頭`) : "",
      ]
        .filter(Boolean)
        .join(" ")
        .slice(0, 80),
      headCount: Number.isInteger(head) && head > 0 ? head : 1,
    });
  }
  console.log(
    `[fukui-map] ${rows.length} 件 → ${out.length} (ピン ${pinned} / 市町村どまり ${out.length - pinned} / 除外 ${dropped})`,
  );
  return out;
}
