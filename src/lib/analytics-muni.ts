/**
 * 分析で使う市町村名の正規化。
 *
 * === なぜ必要か ===
 * 出没レコードの cityName はソースごとに粒度も表記もばらばらで、そのまま
 * 集計すると同じ自治体が複数行に割れる。実測 (98,397件):
 *
 *   青森県  1,040種   むつ市 / むつ市大畑町地区 / むつ市城ケ沢地区 / …
 *                     → 断片の「むつ市大畑町地区」が県内1位、むつ市本体は8位
 *   北海道    142種   最多が「南区」(= 札幌市南区)。市町村マスターに無い表記
 *   秋田県     27種   「五城目町」と「南秋田郡五城目町」が別行
 *
 * この状態の県内シェア・順位・県平均比は自治体に出せない。
 * 全国では 1,847種 → 852種 に収束する。
 *
 * === 二段構え ===
 * 1. resolveCanonicalMuniName で市町村マスターの正式表記へ寄せる
 *    (「むつ市大畑町地区」→「むつ市」、「浅川町」→「石川郡浅川町」)
 * 2. 政令指定都市の区は親市へ畳む
 *    札幌市南区(1,116件) と 札幌市(65件) が別行だと、区と市町村を同じ表で
 *    比べることになる。対策の実施主体は市なので市に揃える。
 *    区の粒度は地点別の台帳 (site-hotspots) が受け持つ。
 *    東京23区は「市+区」の形ではないので畳まれない (独立した自治体)。
 *
 * 3. 名前で解決できなかったものだけ、座標が含まれる市町村で確定する
 *    (「ポイント」「むつ運動公園」のような地名でない値が実測22件ある。
 *     全件に多角形判定を掛けるのは重いが、残りかすだけなら安い)
 *
 * それでも決まらないもの (海上・座標なし) は元の文字列のまま残す。
 * 根拠なく別の自治体に寄せるより、正体不明のまま置くほうが安全。
 */

import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";
import { resolveCanonicalMuniName } from "@/lib/muni-name";
import { containingCode } from "@/lib/muni-boundary";

/** 政令指定都市の親市 ("県名|市名")。区名を畳む先の判定に使う */
const SEIREI_PARENTS = new Set<string>();
for (const m of JAPAN_MUNICIPALITIES) {
  const mm = /^(.+?市).+区$/.exec(m.cityName);
  if (mm) SEIREI_PARENTS.add(`${m.prefName}|${mm[1]}`);
}

/** 総務省コード → 市町村名 (座標から確定した市町村を名前に戻す) */
const BY_CODE = new Map<string, { pref: string; city: string }>();
for (const m of JAPAN_MUNICIPALITIES)
  BY_CODE.set(m.cityCode, { pref: m.prefName, city: m.cityName });

/** 正規化結果のメモ (県名|生の市町村名 → 正規化後)。表記の組は 2,000 未満 */
const memo = new Map<string, string>();

/**
 * 集計に使う市町村名を返す。解決できないときは受け取った文字列をそのまま返す
 * (空文字も空文字のまま。呼び出し側の「市町村不明」の扱いを変えないため)。
 */
export function analyticsMuniName(
  pref: string,
  city: string,
  /** 名前で解決できなかったときだけ使う。座標が含まれる市町村で確定する */
  coord?: { lat?: number; lon?: number },
): string {
  const raw = (city ?? "").trim();
  if (!raw) return "";
  const key = `${pref}|${raw}`;
  const hit = memo.get(key);
  if (hit !== undefined) return hit;

  const canonical = resolveCanonicalMuniName(pref, raw);
  let out = canonical ?? raw;
  let fromCoord = false;
  if (!canonical && coord && Number.isFinite(coord.lat) && Number.isFinite(coord.lon)) {
    const code = containingCode(coord.lat as number, coord.lon as number);
    const m = code ? BY_CODE.get(code) : null;
    // 県をまたぐ確定は採らない (県名側が誤っている可能性があり、ここでは判断できない)
    if (m && m.pref === pref) {
      out = m.city;
      fromCoord = true;
    }
  }
  // 政令市の区 → 親市
  const ward = /^(.+?市).+区$/.exec(out);
  if (ward && SEIREI_PARENTS.has(`${pref}|${ward[1]}`)) out = ward[1];

  // 名前から決まった分だけメモする。座標で決めた分は同じ表記でもレコードごとに
  // 答えが違いうる (「ポイント」のような地名でない値が別の市町村に現れる)。
  // 該当は実測22件なので、毎回多角形判定をしても安い。
  if (!fromCoord) memo.set(key, out);
  return out;
}

type HasMuni = {
  prefectureName?: string;
  cityName?: string;
  lat?: number;
  lon?: number;
};

/**
 * レコード配列の cityName を正規化した配列を返す。
 *
 * 元の配列 (sightings-cache の memCache) は取り込み更新まで同じ参照なので、
 * WeakMap で結果を持ち回してリクエストごとの再計算を避ける。
 * 元のレコードは書き換えない (地図など他の経路は生の表記を使うため)。
 */
const cache = new WeakMap<object, unknown>();

export function withNormalizedMuni<T extends HasMuni>(records: T[]): T[] {
  const hit = cache.get(records);
  if (hit) return hit as T[];
  const out = records.map((r) => {
    const city = analyticsMuniName(r.prefectureName ?? "", r.cityName ?? "", r);
    return city === r.cityName ? r : { ...r, cityName: city };
  });
  cache.set(records, out);
  return out;
}
