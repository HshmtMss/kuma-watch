/**
 * 「同じ出没事案」を判定するための正規化キー。
 *
 * 1件の出没を複数社が報じると記事ごとに別レコードになる。実測では news
 * 7,509件のうち 4,690件が重複で、直近90日の表示件数が約1.66倍に膨らんでいた
 * (例: 2026-07-04 岩手県釜石市の1頭が18レコード)。
 *
 * 重複判定が効かない主因は sectionName の表記ゆれ。Gemini の抽出は
 *   大只越町1丁目 / 大只越町１丁目        (全角・半角)
 *   港町・只越 / 港町から只越 / 港町から只越地内
 * のように揺れるため、生文字列の一致では束ねられない。ここで NFKC 正規化と
 * 記号・接尾辞の除去を掛けてから比較する。
 *
 * 逆に「路上」「国道」のような一般語は場所を特定しないので、地区名なしと
 * 同じ扱いにする。これらで束ねると別事案まで潰れるため、地区情報が無い
 * ものとして扱い、市町村単位の判断に委ねる。
 */

/** 地区名として場所を特定しない記述語 */
export const GENERIC_SECTION =
  /^(不明|詳細不明|場所不明|市内|町内|村内|区内|管内|付近|周辺|国道|県道|市道|町道|村道|農道|林道|道路|道路上|道路脇|路上|民家|住宅街|住宅地|市街地|商店街|山中|山林|林内|里地|畑|田|水田|河川敷|川沿い|海岸沿い|山沿い|その他)$/;

/**
 * 地区名を比較可能な形へ正規化する。
 * 一般語・空文字は "" (= 地区情報なし) を返す。
 */
export function normalizeSection(section: string | undefined): string {
  let t = (section ?? "").normalize("NFKC").trim();
  // 区切り記号と空白は表記ゆれの温床なので落とす
  t = t.replace(/[・、,，.。　\s]/g, "");
  // 「〜付近」「〜地内」等の曖昧な接尾辞は同一地点を指すので落とす
  t = t.replace(/(付近|周辺|地内|沿い)$/, "");
  if (!t) return "";
  if (GENERIC_SECTION.test(t)) return "";
  return t;
}

/**
 * 同一事案とみなす単位のキー: 日付 | 都道府県 | 市区町村 | 正規化地区名。
 *
 * 地区名が違えば別事案として残す。同一市町村・同日でも 長走 / 花岡町 /
 * 比内町 のように実際に別地点で複数頭が出ることがあり、市町村単位で束ねると
 * 実在の出没を消してしまうため。
 */
export function incidentKey(
  date: string | undefined,
  prefName: string | undefined,
  cityName: string | undefined,
  sectionName: string | undefined,
): string {
  return [
    (date ?? "").trim(),
    (prefName ?? "").trim(),
    (cityName ?? "").trim(),
    normalizeSection(sectionName),
  ].join("|");
}
