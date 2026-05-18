// /place/[pref] と /place/[pref]/[muni] の SEO タイトル・ディスクリプション生成。
//
// 設計方針:
// - 数値・最新日付・獣医師監修を必ず織り込み、検索結果で「具体性 × 鮮度 × 信頼性」
//   の 3 シグナルを強調する。
// - タイトルは 60 文字以内、ディスクリプションは 150-160 文字を狙う。
// - count90d > 0 のときだけ「最新 M月D日」を付ける (ゼロ件状態でも文章が破綻しないよう
//   フォールバックを用意)。
// - 「くまウォッチ」(ひらがな) を末尾の brand cue として固定。

// BRAND ("くまウォッチ") は layout.tsx の metadata.title.template が
// 自動で末尾「｜KumaWatch」を付与するため、本ファイル内では title から外して
// セグメント数を減らしている。
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
      title: `${muni}のクマ出没情報・警戒レベル｜${pref}・${SUPERVISION}`,
      description: `${place}のクマ出没情報を 5km メッシュ単位で予報。${SUPERVISION}・無料・登録不要。登山・キャンプ・通勤前の 30 秒チェックに。隣接市町村の出没履歴も併せて確認できます。`,
    };
  }

  const md = formatMonthDay(cell.latestDate);
  // タイトル: 直近1年の件数 + 最新日 + 獣医師監修 + ブランド。
  // 旧実装は累計 (cell.count) を表示していたが、累計には京都府 (2010-2018 で
  // 凍結) や秋田県 (2025 年急増) のような時代差が混入して
  // 「タイトル: 81件」→「本文: 直近1年14件 / 直近90日1件」と齟齬が出る。
  // クリック後の期待外れで離脱率が上がり Google からの評価も下がるため、
  // タイトルも本文と同じ「直近1年」の数値で揃える。
  const fragments: string[] = [];
  if (cell.count365d > 0) fragments.push(`直近1年${cell.count365d.toLocaleString()}件`);
  if (md && cell.count90d > 0) fragments.push(`最新${md}`);
  const stat = fragments.length > 0 ? `【${fragments.join("・")}】` : "";

  // タイトル先頭は {muni} で始める。Search Console 上位クエリの圧倒的多数が
  // 「{市町村名} 熊」「{市町村名} 熊 マップ」の形なので、市町村名を一文字目に
  // 置くと検索結果での太字化・視認性が上がり CTR が改善する。
  // {pref} は文脈として `{stat}` の後ろに移動。layout.tsx 側で末尾に
  // 「｜KumaWatch」が template 付与されるので、ここでは 「くまウォッチ」 を
  // 省きセグメント数を 4 → 3 に削って ｜ で区切られる項目を減らす。
  const title = stat
    ? `${muni}のクマ出没情報${stat}｜${pref}・${SUPERVISION}`
    : `${muni}のクマ出没情報｜${pref}・${SUPERVISION}`;

  // ディスクリプション: 数値の文脈 + 用途 + 隣接動線。
  // recencyClause も「累計」ではなく直近1年の件数を主にする。
  const recencyClause =
    cell.count90d > 0 && md
      ? `直近 90 日で ${cell.count90d.toLocaleString()} 件、最新の目撃は ${md}`
      : cell.count365d > 0
        ? `直近 1 年で ${cell.count365d.toLocaleString()} 件`
        : `直近 1 年の出没記録なし`;
  const description = `${place}のクマ出没情報を 5km メッシュで予報。${recencyClause}。${SUPERVISION}・無料・登録不要。登山・キャンプ・通勤前の安全確認に。隣接市町村・最新事案も併せて確認できます。`;

  return { title, description };
}

/** /place/[pref] 用のタイトル・ディスクリプション。 */
export function buildPrefSeo(
  pref: string,
  summary?: { count: number; count365d: number; count90d: number; latestDate: string | null; muniCount: number },
): { title: string; description: string } {
  if (!summary) {
    return {
      title: `${pref}のクマ出没情報・市町村別マップ｜${SUPERVISION}`,
      description: `${pref}のクマ出没情報を市町村別マップで確認。5km メッシュ警戒レベル予報。${SUPERVISION}・無料・登録不要。登山・キャンプ・通勤前の安全確認に。`,
    };
  }
  const md = formatMonthDay(summary.latestDate);
  // muni 同様、累計ではなく直近1年の件数をタイトル指標に。
  // 累計には古い source の歪み (例: 京都府は 2018 年で凍結) があるため。
  // BRAND は layout.tsx の template で末尾「｜KumaWatch」が自動付与される
  // ので、ここでは省きセグメント重複を避ける。
  const fragments: string[] = [];
  if (summary.count365d > 0)
    fragments.push(`直近1年${summary.count365d.toLocaleString()}件`);
  if (md && summary.count90d > 0) fragments.push(`最新${md}`);
  const stat = fragments.length > 0 ? `【${fragments.join("・")}】` : "";

  const title = stat
    ? `${pref}のクマ出没情報${stat}｜${SUPERVISION}`
    : `${pref}のクマ出没情報｜${SUPERVISION}`;
  const recencyClause =
    summary.count90d > 0 && md
      ? `直近 90 日で ${summary.count90d.toLocaleString()} 件、最新は ${md}`
      : summary.count365d > 0
        ? `直近 1 年で ${summary.count365d.toLocaleString()} 件`
        : `直近 1 年の出没記録なし`;
  const description = `${pref}のクマ出没情報を市町村別マップで予報。${summary.muniCount} 市町村のデータを 5km メッシュで集約、${recencyClause}。${SUPERVISION}・無料・登録不要。`;
  return { title, description };
}
