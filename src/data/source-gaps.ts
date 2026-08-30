/**
 * 「取れないと分かっている」取り込みソースの台帳。
 *
 * scripts/check-source-health.ts は 0 件・長期停止のソースを検出して警告するが、
 * 復旧不能なもの (県が個別記録を公開していない等) が混ざると毎回同じ警告が出て、
 * やがて誰も読まなくなる。それでは計器を置いた意味が無い —— 実際、健全性の
 * 仕組みは前からあったのに岐阜県の 306 日停止に気づけなかった。
 *
 * ここに理由付きで登録したものは警告から除外する。裏を返せば、ここに無い
 * ソースが落ちたら「新しく壊れた」ということで、そのときだけ通知が飛ぶ。
 *
 * 復旧できたらこの一覧から消すこと。
 */
export type SourceGap = {
  id: string;
  /** なぜ取れないのか。「調べたが無理だった」の記録。 */
  reason: string;
  /** 確認した日 (YYYY-MM-DD)。古くなったら再確認の目安にする。 */
  checkedAt: string;
};

export const KNOWN_SOURCE_GAPS: SourceGap[] = [
  // --- 県が個別の目撃記録を公開していない (集計のみ) ---
  {
    id: "hiroshima",
    reason:
      "県は市町別・月別の集計 PDF しか公開しておらず、1 件ずつの記録が存在しない。取り込める形が無い",
    checkedAt: "2026-08-23",
  },
  {
    id: "tottori",
    reason: "県ページは月別集計の推移 PDF のみ。個別記録は公開していない",
    checkedAt: "2026-08-23",
  },
  {
    id: "tottori-pdf-r7",
    reason:
      "R7 の目撃・痕跡一覧 (76件) は公開終了。PDF の URL は HTML を返すようになった",
    checkedAt: "2026-08-23",
  },
  {
    id: "tokushima",
    reason:
      "県ページは 404。四国のツキノワグマは剣山系に数十頭で、林野庁四国森林管理局に 11 件あるのみ・9 ヶ月更新なし。取り込む価値が薄い",
    checkedAt: "2026-08-23",
  },

  {
    id: "wakayama",
    reason:
      "県が公開しているのは目撃マップ (画像 PDF) と市町村別の年次集計のみで、1 件ずつの記録が無い。紀伊半島中部個体群は奈良県 (nara-pdf) と共通なので、県境付近はそちらで一部carriedされる",
    checkedAt: "2026-08-28",
  },

  // --- 自治体側の更新が止まっているだけで、当方の取り込みは正常 ---
  {
    id: "tokyo",
    reason:
      "自動検出は正常に動いており、都が公開している最新版が 20260610 (2026-06-08 まで)。都の更新自体が止まっている。新しい版が出れば自動で拾う",
    checkedAt: "2026-08-27",
  },

  // --- 県の一括公開に置き換わり、市町村個別ページが不要になったもの ---
  // 長野県は県が月別 PDF (nagano-pdf-*) で全市町村を出すため、市町村ページを
  // 個別に取り込む必要が無くなった。ページ自体は生きているが 0 件で問題ない。
  ...[
    "nagano-karuizawa",
    "nagano-matsumoto",
    "nagano-fujimi",
    "nagano-ogawa",
    "nagano-nagano",
    "nagano-ueda",
    "nagano-omachi",
    "nagano-ina",
    "nagano-komagane",
    "nagano-iiyama",
    "nagano-iida",
    "nagano-suzaka",
    "nagano-nakano",
    "nagano-yamanouchi",
    "nagano-sakaki",
  ].map(
    (id): SourceGap => ({
      id,
      reason:
        "県の月別 PDF (nagano-pdf-*) が全市町村を網羅するため個別取り込みは不要",
      checkedAt: "2026-08-23",
    }),
  ),

  // --- 別ソースが同じ県をカバーしているので実害が無いもの ---
  //
  // 登録そのものは残す (公開先を追う手がかりになる) が、警告からは外す。
  // 「その県のデータが無い」わけではないことを確認済み。
  {
    id: "akita",
    reason:
      "秋田県のデータは sharp9110 経由で 21,035 件・最新も当日分まで入っている。この登録は ArcGIS Hub の文書用エントリで、0 件でも県のカバレッジに影響しない",
    checkedAt: "2026-08-30",
  },
  {
    id: "kyoto",
    reason:
      "BODIK の公開が 2018-12 で停止 (過去データとして 10,225 件保持)。現行分は news 経由で直近1年 490 件あり、県のカバレッジは維持されている",
    checkedAt: "2026-08-30",
  },
  {
    id: "iwate",
    reason:
      "この登録 (県 Google マイマップ) は 2025-10 で停止。岩手県は iwate-morioka-mymap と news で直近1年 1,694 件あり、カバレッジは維持されている",
    checkedAt: "2026-08-30",
  },
  {
    id: "gifu",
    reason:
      "CKAN が「クママップ（過去）」になり 2025-10 で停止。現行分は gifu-gis (県域統合型GIS) から 2,319 件取得しているので実害なし",
    checkedAt: "2026-08-30",
  },
  {
    id: "tochigi",
    reason:
      "この登録 (2025年度マイマップ) は年度で完結。栃木県は tochigi-2026-mymap と news で直近1年 664 件あり、カバレッジは維持されている",
    checkedAt: "2026-08-30",
  },
  {
    id: "nara",
    reason:
      "この登録 (Google マイマップ) は奈良市・木津川市・山添村の3市村限定で 2026-03 で停止。県全域は nara-pdf から 209 件取得しているので実害なし",
    checkedAt: "2026-08-30",
  },
  {
    id: "yamagata-kemonote",
    reason:
      "けものノート API は認証が必要で資格情報を持っていない。山形県は yamagata-gmap-r7 と news で直近1年 2,434 件あり、カバレッジは維持されている",
    checkedAt: "2026-08-30",
  },
  {
    id: "yamagata",
    reason:
      "この登録 (CSV) は取得できていないが、yamagata-gmap-r7 が同じ県をカバーしている (上記と同じ理由)",
    checkedAt: "2026-08-30",
  },
  {
    id: "shizuoka",
    reason:
      "この登録 (トップページ) からは個別記録が取れない。静岡県は shizuoka-gmap / shizuoka-r7-gmap / shizuoka-pdf-* で直近1年 529 件あり、カバレッジは維持されている",
    checkedAt: "2026-08-30",
  },
  {
    id: "aichi",
    reason:
      "県サイトが Imperva の WAF で保護されており、GitHub Actions (Azure) の IP からは JavaScript 実行を要求する中間ページ (<TITLE>Loading</TITLE>) が返って PDF に到達できない。手元の回線からは同じリクエストで 200 が返るので IP による判定。UA・Cookie 引き継ぎ・リトライを入れても越えられなかった (CI 上で実測)。パーサ自体は正しく、手元では 35 件取得できる。愛知のツキノワグマは絶滅危惧IA類で年 35 件程度と小さく、回避策 (国内プロキシ等) を用意してまで取る規模ではないと判断",
    checkedAt: "2026-08-31",
  },
];
