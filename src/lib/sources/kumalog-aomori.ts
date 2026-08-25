import type { DataSourceEntry } from "@/data/data-sources";
import { containingCode, resolveMuni } from "@/lib/muni-boundary";
import { inJapanBounds } from "./types";
import type { UnifiedSighting } from "./types";

/**
 * 青森県「くまログあおもり」からの取り込み。
 *
 * 経緯: 県の Google マイマップは 2026-03-22 (令和7年度末) で更新が止まり、
 * 7,465 件を持っていたため件数の多さに埋もれて 157 日気づけなかった。
 * 県は住民投稿型の専用システム「くまログあおもり」へ移行していた。
 *
 * データの質は高い。緯度経度が直接入っており (ジオコーディング不要)、
 * 住所・日時 (時刻まで)・頭数・親子連れの別・状況の説明文が揃う。
 *
 * 注意:
 *  - クマ以外 (イノシシ・ニホンジカ) も同じ API に載る。animal_species_masters の
 *    名前で絞ること。ここを忘れるとイノシシの目撃がクマとして地図に出る。
 *  - 期間を指定しないと直近 2 週間ほどしか返らない。filter[startdate]/[enddate]
 *    を明示する。
 */

const PREF = "青森県";
const API = "https://kumalog-aomori.info/api/ver1/sightings/post_list_external";

/** 取り込む動物種。クマ以外を混ぜない。 */
const BEAR_NAMES = new Set(["ツキノワグマ", "ヒグマ", "クマ"]);

type ApiRecord = {
  id: number;
  address?: string;
  sighting_datetime?: string;
  headcount?: number;
  alone_or_with_young?: number;
  sighting_condition?: string;
  latitude?: number;
  longitude?: number;
  municipality_name?: string;
  animal_species_masters?: { animal_species_name?: string };
  info_type_masters?: { info_type_name?: string };
};

/** 「〒031-0833 青森県八戸市大久保１０」→ 「大久保１０」。字が分かるなら拾う。 */
export function sectionFromAddress(
  address: string | undefined,
  cityName: string,
): string {
  if (!address) return "";
  let a = address.replace(/〒\d{3}-?\d{4}\s*/, "").trim();
  a = a.replace(/^青森県\s*/, "");
  if (cityName && a.startsWith(cityName)) a = a.slice(cityName.length);
  return a.trim().slice(0, 40);
}

export async function fetchKumalogAomoriSightings(
  source: DataSourceEntry,
): Promise<UnifiedSighting[]> {
  // 年度をまたいで拾う。過去分は他ソースと事案キーで重複排除されるので厚めに取る。
  const to = new Date(Date.now() + 9 * 3600_000).toISOString().slice(0, 10);
  const from = `${Number(to.slice(0, 4)) - 2}-04-01`;
  const url = `${API}?filter%5Bstartdate%5D=${from}&filter%5Benddate%5D=${to}`;

  let recs: ApiRecord[] = [];
  try {
    const res = await fetch(url, {
      // ISR ページの描画中にも呼ばれうるので no-store は使わない。
      next: { revalidate: 300 },
      headers: { "User-Agent": "KumaWatch/1.0 (+https://kuma-watch.jp)" },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) {
      console.log(`[kumalog-aomori] 取得失敗 status=${res.status}`);
      return [];
    }
    const j = (await res.json()) as { result?: ApiRecord[] };
    recs = j.result ?? [];
  } catch (e) {
    const err = e as Error & { cause?: Error };
    console.log(
      `[kumalog-aomori] 取得失敗: ${(err.cause?.message ?? err.message).slice(0, 120)}`,
    );
    return [];
  }

  const out: UnifiedSighting[] = [];
  let notBear = 0;
  let dropped = 0;
  let pinned = 0;
  for (const r of recs) {
    const species = r.animal_species_masters?.animal_species_name ?? "";
    if (!BEAR_NAMES.has(species)) {
      notBear++;
      continue;
    }
    const date = (r.sighting_datetime ?? "").slice(0, 10);
    const cityName = (r.municipality_name ?? "").trim();
    const lat = Number(r.latitude);
    const lon = Number(r.longitude);
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
    // 1 件ずつ人が見て気づけない。確証が取れたものだけ地図に出し、外れたものは
    // 捨てずに市町村どまりへ落とす。
    const code = containingCode(lat, lon);
    const verified = Boolean(code && muni.cityCodes.includes(code));
    if (verified) pinned++;

    const section = sectionFromAddress(r.address, cityName);
    const kind = r.info_type_masters?.info_type_name ?? "";
    const withYoung = r.alone_or_with_young === 2 ? "親子連れ" : "";
    const time = (r.sighting_datetime ?? "").slice(11, 16);
    const head = Number(r.headcount);
    out.push({
      id: `${source.id}-${r.id}`,
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
      comment: [section, kind, withYoung, time, r.sighting_condition]
        .filter(Boolean)
        .join(" ")
        .slice(0, 80),
      headCount: Number.isInteger(head) && head > 0 ? head : 1,
    });
  }
  console.log(
    `[kumalog-aomori] ${recs.length} 件 → クマ ${out.length} (ピン ${pinned} / 市町村どまり ${out.length - pinned}) ` +
      `クマ以外 ${notBear} / 除外 ${dropped}`,
  );
  return out;
}
