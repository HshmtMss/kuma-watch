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
  ].map((id) => ({
    id,
    reason:
      "県の月別 PDF (nagano-pdf-*) が全市町村を網羅するため個別取り込みは不要",
    checkedAt: "2026-08-23",
  })),
];
