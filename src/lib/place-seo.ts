// /place/[pref] と /place/[pref]/[muni] の SEO タイトル・ディスクリプション生成。
//
// 設計方針:
// - 数値・最新日付・獣医師監修を必ず織り込み、検索結果で「具体性 × 鮮度 × 信頼性」
//   の 3 シグナルを強調する。
// - タイトルは 60 文字以内、ディスクリプションは 150-160 文字を狙う。
// - count90d > 0 かつ最新日付が 30 日以内のときだけ「最新 M月D日」を付ける
//   (ゼロ件・古い日付でも文章が破綻しないようフォールバックを用意)。

import { jstDaysAgo } from "@/lib/jst-date";
// - 「くまウォッチ」(ひらがな) を末尾の brand cue として固定。

// BRAND ("くまウォッチ") は layout.tsx の metadata.title.template が
// 自動で末尾「｜KumaWatch」を付与するため、本ファイル内では title から外して
// セグメント数を減らしている。
const SUPERVISION = "獣医師監修";

// 「最新 M月D日」を出す上限日数。
//
// 最新日付は鮮度シグナルとして効くが、古い日付は逆にサイトを「更新が止まって
// いる」と見せてしまう。実例: 宇都宮市は直近 90 日 17 件だが最新が 6/12 で、
// 8 月の検索者には 2 か月前のデータと分かる。「宇都宮 熊出没 マップ」は表示
// 20,797 に対し CTR 1.7% (掲載順位 10.0) と、上位クエリの中で最低だった。
// 30 日を超えたら日付を落とし、件数だけで具体性を出す。
const FRESH_DAYS = 30;

function formatMonthDay(iso: string | null): string | null {
  if (!iso) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return null;
  return `${Number(m[2])}月${Number(m[3])}日`;
}

/** 最新日付が FRESH_DAYS 以内か。JST カレンダー日同士の文字列比較で判定する。 */
function isFresh(iso: string | null): boolean {
  return iso != null && iso.slice(0, 10) >= jstDaysAgo(FRESH_DAYS);
}

/**
 * 「宇都宮市」→「宇都宮」のような通称。
 *
 * Search Console の上位クエリは「宇都宮 熊出没 マップ」のように市を落とした
 * 形が多く、これらは掲載順位 9〜10 位に沈んでいる。一方「西宮市 熊 出没 マップ」
 * (市あり) は 2.5 位。description に 1 度だけ自然に含めて通称クエリを拾う。
 *
 * 郡付き (石狩郡当別町 → 「石狩郡当別」) や政令市の区 (札幌市豊平区 → 豊平か
 * 札幌か曖昧) は通称が成立しないため対象外にし、末尾が「市」の市のみを扱う。
 */
function shortName(muni: string): string | null {
  if (!/^[^郡]+市$/.test(muni)) return null;
  const s = muni.slice(0, -1);
  return s.length >= 2 ? s : null;
}

export type PlaceCellLike = {
  count: number;
  count90d: number;
  count365d: number;
  latestDate: string | null;
};

/** /place/[pref]/[muni] 用のタイトル・ディスクリプション。 */
export function buildMuniSeo(
  pref: string,
  muni: string,
  cell: PlaceCellLike | null,
): { title: string; description: string } {
  const place = `${pref}${muni}`;

  if (!cell) {
    return {
      title: `${muni}の熊出没情報マップ・警戒レベル｜${pref}・${SUPERVISION}`,
      description: `${place}の熊（クマ）出没情報を 5km メッシュ単位で予報。${SUPERVISION}・無料・登録不要。登山・キャンプ・通勤前の 30 秒チェックに。隣接市町村の出没履歴・目撃マップも併せて確認できます。`,
    };
  }

  const md = formatMonthDay(cell.latestDate);
  // タイトル: 直近1年の件数 + 最新日 + 獣医師監修 + ブランド。
  // 旧実装は累計 (cell.count) を表示していたが、累計には京都府 (2010-2018 で
  // 凍結) や秋田県 (2025 年急増) のような時代差が混入して
  // 「タイトル: 81件」→「本文: 直近1年14件 / 直近90日1件」と齟齬が出る。
  // クリック後の期待外れで離脱率が上がり Google からの評価も下がるため、
  // タイトルも本文と同じ「直近1年」の数値で揃える。
  const fresh = isFresh(cell.latestDate);
  const fragments: string[] = [];
  if (cell.count365d > 0) fragments.push(`直近1年${cell.count365d.toLocaleString()}件`);
  if (md && fresh && cell.count90d > 0) fragments.push(`最新${md}`);
  const stat = fragments.length > 0 ? `【${fragments.join("・")}】` : "";

  // タイトル先頭は {muni} で始める。Search Console 上位クエリの圧倒的多数が
  // 「{市町村名} 熊」「{市町村名} 熊 マップ」「{市町村名} 熊 出没マップ」の形なので、
  // 市町村名を一文字目に置き、続けて「熊出没情報マップ」を並べる。
  // 「熊」(漢字) は SC 検索クエリで「クマ」(カナ) より圧倒的多数。
  // 「マップ」キーワードも検索クエリで多用されるため title に含める。
  // {pref} は文脈として `{stat}` の後ろに移動。layout.tsx 側で末尾に
  // 「｜KumaWatch」が template 付与されるので、ここでは 「くまウォッチ」 を
  // 省きセグメント数を 4 → 3 に削って ｜ で区切られる項目を減らす。
  const title = stat
    ? `${muni}の熊出没情報マップ${stat}｜${pref}・${SUPERVISION}`
    : `${muni}の熊出没情報マップ｜${pref}・${SUPERVISION}`;

  // ディスクリプション: 数値の文脈 + 用途 + 隣接動線。
  // recencyClause も「累計」ではなく直近1年の件数を主にする。
  // 「熊（クマ）」併記で「クマ」カナ表記の検索クエリも吸収する。
  const recencyClause =
    cell.count90d > 0
      ? md && fresh
        ? `直近 90 日で ${cell.count90d.toLocaleString()} 件、最新の目撃は ${md}`
        : `直近 90 日で ${cell.count90d.toLocaleString()} 件`
      : cell.count365d > 0
        ? `直近 1 年で ${cell.count365d.toLocaleString()} 件`
        : `直近 1 年の出没記録なし`;
  // 末尾の動線案内に通称 (「宇都宮市」→「宇都宮エリア」) を 1 度だけ載せ、
  // 市を落とした検索クエリの受け皿にする。羅列は避け文章として自然に保つ。
  const alias = shortName(muni);
  const closing = alias
    ? `${alias}エリアの隣接市町村・最新事案・目撃マップも併せて確認できます。`
    : `隣接市町村・最新事案・目撃マップも併せて確認できます。`;
  const description = `${place}の熊（クマ）出没情報を 5km メッシュで予報。${recencyClause}。${SUPERVISION}・無料・登録不要。登山・キャンプ・通勤前の安全確認に。${closing}`;

  return { title, description };
}

/** /place/[pref] 用のタイトル・ディスクリプション。 */
export function buildPrefSeo(
  pref: string,
  summary?: { count: number; count365d: number; count90d: number; latestDate: string | null; muniCount: number },
): { title: string; description: string } {
  if (!summary) {
    return {
      title: `${pref}の熊出没情報マップ・市町村別予報｜${SUPERVISION}`,
      description: `${pref}の熊（クマ）出没情報を市町村別マップで確認。5km メッシュ警戒レベル予報。${SUPERVISION}・無料・登録不要。登山・キャンプ・通勤前の安全確認に。`,
    };
  }
  const md = formatMonthDay(summary.latestDate);
  // muni 同様、累計ではなく直近1年の件数をタイトル指標に。
  // 累計には古い source の歪み (例: 京都府は 2018 年で凍結) があるため。
  // BRAND は layout.tsx の template で末尾「｜KumaWatch」が自動付与される
  // ので、ここでは省きセグメント重複を避ける。
  // 「熊出没情報マップ」表記は SC 上位クエリ「{県名} 熊 出没マップ」を狙う。
  const fresh = isFresh(summary.latestDate);
  const fragments: string[] = [];
  if (summary.count365d > 0)
    fragments.push(`直近1年${summary.count365d.toLocaleString()}件`);
  if (md && fresh && summary.count90d > 0) fragments.push(`最新${md}`);
  const stat = fragments.length > 0 ? `【${fragments.join("・")}】` : "";

  const title = stat
    ? `${pref}の熊出没情報マップ${stat}｜${SUPERVISION}`
    : `${pref}の熊出没情報マップ｜${SUPERVISION}`;
  const recencyClause =
    summary.count90d > 0
      ? md && fresh
        ? `直近 90 日で ${summary.count90d.toLocaleString()} 件、最新は ${md}`
        : `直近 90 日で ${summary.count90d.toLocaleString()} 件`
      : summary.count365d > 0
        ? `直近 1 年で ${summary.count365d.toLocaleString()} 件`
        : `直近 1 年の出没記録なし`;
  const description = `${pref}の熊（クマ）出没情報を市町村別マップで予報。${summary.muniCount} 市町村のデータを 5km メッシュで集約、${recencyClause}。${SUPERVISION}・無料・登録不要。`;
  return { title, description };
}
