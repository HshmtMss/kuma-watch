/**
 * データ自身から学習する地名辞書。
 *
 * 公式データの「市町村名」と「緯度経度」が食い違うとき、観察場所の地名を
 * 第三の証拠に使いたい。ところが観察場所に出てくるのは
 *   - 旧市町村名 (八尾町 → 現・富山市、荘川町 → 現・高山市)
 *   - 大字・地区名 (驫木地区、奥戸地区)
 * が多く、現在の市町村マスターには載っていないため照合できない。
 *
 * 外部の地名辞書を持ち込む代わりに、同じデータセットの中で
 * 「市町村名と緯度経度が整合しているレコード」を教師にして
 * 地名 → 市町村コード を学習する。八尾町を含むレコードが 235 件あり
 * その全部が富山市内に落ちているなら、八尾町は富山市とみなせる。
 *
 * 出典が同じデータなので、外部辞書より表記の癖に強い。
 */

export type GazetteerHit = {
  code: string;
  token: string;
  /** その地名が最多市町村に落ちた件数 */
  n: number;
  /** その地名の総出現件数 */
  total: number;
};

export type Gazetteer = {
  lookup: (texts: (string | undefined)[], banned?: Set<string>) => GazetteerHit | null;
  size: number;
};

/** 一致率がこれ未満なら地名が複数市町村にまたがるとみなし採用しない */
const MIN_AGREEMENT = 0.8;

/** 「○○地区」「○○町」等の地名らしい語を切り出す */
export function placeTokens(text: string | undefined): string[] {
  const s = (text ?? "")
    .normalize("NFKC")
    .replace(/[（(].*?[)）]/g, "")
    .trim();
  if (!s) return [];
  const out = new Set<string>();
  for (const m of s.matchAll(
    /([一-龥ぁ-んァ-ヶヵー]{2,8}?)(地区|町|村|地内|集落)/g,
  ))
    out.add(m[1] + m[2]);
  const head = s.split(/[\s　,、]/)[0];
  if (head && head.length >= 2 && head.length <= 10) out.add(head);
  return [...out];
}

type Rec = {
  lat: number;
  lon: number;
  prefectureName?: string;
  cityName?: string;
  sectionName?: string;
};

/**
 * 整合しているレコードだけを教師に辞書を作る。
 * resolve/inside の判定は呼び出し側から渡す (muni-boundary への依存を切るため)。
 */
export function buildGazetteer(
  records: Rec[],
  isConsistent: (r: Rec) => boolean,
  codeAt: (lat: number, lon: number) => string | null,
): Gazetteer {
  const g = new Map<string, Map<string, number>>();
  for (const r of records) {
    if (!Number.isFinite(r.lat) || !Number.isFinite(r.lon)) continue;
    if (!isConsistent(r)) continue;
    const code = codeAt(r.lat, r.lon);
    if (!code) continue;
    for (const tk of placeTokens(r.sectionName)) {
      const m = g.get(tk) ?? new Map<string, number>();
      m.set(code, (m.get(code) ?? 0) + 1);
      g.set(tk, m);
    }
  }
  return {
    size: g.size,
    lookup(texts, banned) {
      for (const t of texts) {
        for (const tk of placeTokens(t)) {
          // 主張市町村名そのものを根拠にすると循環するので除外する
          if (banned?.has(tk)) continue;
          const m = g.get(tk);
          if (!m) continue;
          let code = "";
          let n = 0;
          let total = 0;
          for (const [c, v] of m) {
            total += v;
            if (v > n) {
              n = v;
              code = c;
            }
          }
          if (total > 0 && n / total >= MIN_AGREEMENT)
            return { code, token: tk, n, total };
        }
      }
      return null;
    },
  };
}
