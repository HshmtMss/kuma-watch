// /place/[pref] と /place/[pref]/[muni] の SEO タイトル・ディスクリプション生成。
//
// 設計方針:
// - 数値・最新日付・獣医師監修を必ず織り込み、検索結果で「具体性 × 鮮度 × 信頼性」
//   の 3 シグナルを強調する。
// - タイトルは 60 文字以内、ディスクリプションは 150-160 文字を狙う。
// - count90d > 0 のときだけ「最新 M月D日」を付ける (ゼロ件状態でも文章が破綻しないよう
//   フォールバックを用意)。
// - 「くまウォッチ」(ひらがな) を末尾の brand cue として固定。

const BRAND = "くまウォッチ";
const SUPERVISION = "獣医師監修";

function formatMonthDay(iso: string | null): string | null {
  if (!iso) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return null;
  return `${Number(m[2])}月${Number(m[3])}日`;
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
      title: `${place}のクマ出没情報・警戒レベル｜${SUPERVISION} ${BRAND}`,
      description: `${place}のクマ出没情報を 5km メッシュ単位で予報。${SUPERVISION}・無料・登録不要。登山・キャンプ・通勤前の 30 秒チェックに。隣接市町村の出没履歴も併せて確認できます。`,
    };
  }

  const md = formatMonthDay(cell.latestDate);
  // タイトル: 件数 + 最新日（あれば）+ 獣医師監修 + ブランド。
  // count90d=0 でも全件 count を出す。
  const fragments: string[] = [];
  if (cell.count > 0) fragments.push(`${cell.count.toLocaleString()}件`);
  if (md && cell.count90d > 0) fragments.push(`最新${md}`);
  const stat = fragments.length > 0 ? `【${fragments.join("・")}】` : "";

  const title = `${place}のクマ出没情報${stat}${SUPERVISION}｜${BRAND}`;

  // ディスクリプション: 数値の文脈 + 用途 + 隣接動線。
  const recencyClause =
    cell.count90d > 0 && md
      ? `過去 90 日で ${cell.count90d.toLocaleString()} 件、最新の目撃は ${md}`
      : `過去 1 年の累計 ${cell.count365d.toLocaleString()} 件`;
  const description = `${place}のクマ出没情報を 5km メッシュで予報。${recencyClause}。${SUPERVISION}・無料・登録不要。登山・キャンプ・通勤前の安全確認に。隣接市町村・最新事案も併せて確認できます。`;

  return { title, description };
}

/** /place/[pref] 用のタイトル・ディスクリプション。 */
export function buildPrefSeo(
  pref: string,
  summary?: { count: number; count90d: number; latestDate: string | null; muniCount: number },
): { title: string; description: string } {
  if (!summary) {
    return {
      title: `${pref}のクマ出没情報・市町村別マップ｜${SUPERVISION} ${BRAND}`,
      description: `${pref}のクマ出没情報を市町村別マップで確認。5km メッシュ警戒レベル予報。${SUPERVISION}・無料・登録不要。登山・キャンプ・通勤前の安全確認に。`,
    };
  }
  const md = formatMonthDay(summary.latestDate);
  const fragments: string[] = [];
  if (summary.count > 0) fragments.push(`累計${summary.count.toLocaleString()}件`);
  if (md && summary.count90d > 0) fragments.push(`最新${md}`);
  const stat = fragments.length > 0 ? `【${fragments.join("・")}】` : "";

  const title = `${pref}のクマ出没情報${stat}${SUPERVISION}｜${BRAND}`;
  const recencyClause =
    summary.count90d > 0 && md
      ? `過去 90 日で ${summary.count90d.toLocaleString()} 件、最新は ${md}`
      : `過去 1 年で ${summary.count.toLocaleString()} 件`;
  const description = `${pref}のクマ出没情報を市町村別マップで予報。${summary.muniCount} 市町村のデータを 5km メッシュで集約、${recencyClause}。${SUPERVISION}・無料・登録不要。`;
  return { title, description };
}
