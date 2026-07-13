/**
 * 市町村レベルの座標整合チェック（報道 news 由来ピンの誤配置検知）。
 *
 * 都道府県 BBox チェック (prefecture-bbox) は「県跨ぎ」の誤りしか捕捉できず、
 * 北海道のような広い県では「県内での誤配置」(例: 新冠町のニュースが網走に、
 * 恵庭市が稚内に、津山市が岡山市に飛ぶ) をすり抜けてしまう。
 *
 * ここでは市町村マスター(japan-municipalities: 重心座標)を参照し、報道ピンの
 * 実座標が「主張する市町村の重心から遠く、かつ別の市町村のほうが遥かに近い」
 * ものを誤配置と判定する。
 *
 * 判定ルール(実データで検証):
 *   - 実座標〜主張市町村重心 が MIN_KM(25km) 超  かつ
 *   - 実座標〜最寄り市町村重心 の RATIO(5倍) を主張距離が超える
 *   → 誤配置。
 * 大市町村の広い実在地区(宮古市区界48km/松本市奈川/高山市荘川/十日町市 等)は
 * 「最寄りが隣接市で比率が小さい」ため誤検知されない。県境の飛び地(山口市阿東
 * 地福・由利本荘市南部 等)も温存される。
 *
 * 市町村名がマスターと照合できない場合は判定不能として false(=残す)。
 * 誤検知で実在の出没を消さないことを優先する。
 */
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";

const MIN_KM = 25;
const RATIO = 5;

type Pt = { lat: number; lon: number };

// "県名|市町村名" → 重心。政令市(区)は市単位に集約、郡付き町村は郡なし別名も張る。
const claimIndex = new Map<string, Pt>();
// 最寄り市町村探索用の全重心。
const allCentroids: Pt[] = [];

(function build() {
  const wardAgg = new Map<string, { la: number; lo: number; n: number }>();
  for (const mu of JAPAN_MUNICIPALITIES) {
    const pt: Pt = { lat: mu.lat, lon: mu.lon };
    claimIndex.set(`${mu.prefName}|${mu.cityName}`, pt);
    allCentroids.push(pt);
    // 郡なし別名: "石狩郡当別町" → "当別町"
    const stripped = mu.cityName.replace(/^[^\s]+?郡/, "");
    if (stripped !== mu.cityName) {
      const sk = `${mu.prefName}|${stripped}`;
      if (!claimIndex.has(sk)) claimIndex.set(sk, pt);
    }
    // 政令市の区を市単位へ集約: "仙台市青葉区" → "仙台市"
    const wm = mu.cityName.match(/^(.+市)(.+区)$/);
    if (wm) {
      const bk = `${mu.prefName}|${wm[1]}`;
      const a = wardAgg.get(bk) ?? { la: 0, lo: 0, n: 0 };
      a.la += mu.lat;
      a.lo += mu.lon;
      a.n += 1;
      wardAgg.set(bk, a);
    }
  }
  for (const [bk, a] of wardAgg) {
    if (!claimIndex.has(bk))
      claimIndex.set(bk, { lat: a.la / a.n, lon: a.lo / a.n });
  }
})();

function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371;
  const t = (x: number) => (x * Math.PI) / 180;
  const dLat = t(lat2 - lat1);
  const dLon = t(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(t(lat1)) * Math.cos(t(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/**
 * 報道ピンが市町村レベルで誤配置しているか。
 * 照合不能・整合(近い)なら false。
 */
export function isNewsMisplaced(
  prefName: string | undefined,
  cityName: string | undefined,
  lat: number,
  lon: number,
): boolean {
  if (!prefName || !cityName) return false;
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return false;
  const claimed = claimIndex.get(`${prefName}|${cityName}`);
  if (!claimed) return false; // 照合不能はドロップしない
  const dClaimed = haversineKm(lat, lon, claimed.lat, claimed.lon);
  if (dClaimed <= MIN_KM) return false;
  let dNearest = Infinity;
  for (const c of allCentroids) {
    const d = haversineKm(lat, lon, c.lat, c.lon);
    if (d < dNearest) dNearest = d;
    if (dNearest < 0.5) break; // 十分近い市町村があれば打ち切り
  }
  return dClaimed > RATIO * dNearest;
}
