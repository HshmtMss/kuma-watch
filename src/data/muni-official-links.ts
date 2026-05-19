// 全国市町村の公式 HP リンク。muni ページ (/place/[pref]/[muni]) で
// 「この自治体の公式情報」セクションに表示する。
//
// データソース: Claude エージェントによる WebSearch + WebFetch verify
// (CC0 相当、ただし掲載は各自治体公式サイトへのリンクなので著作権上の問題なし)
//
// 構造:
// - prefName / cityName は src/data/japan-municipalities.ts と一致させる
// - homeUrl: 自治体公式サイト root (見つからない場合は省略 = まだ未収録)
// - bearUrl: クマ・野生動物関連の情報ページ (存在する場合のみ)
// - verifiedAt: bearUrl を WebFetch 検証した日付 (ISO yyyy-mm-dd)
// - notes: 補足 (例: 「南西諸島・クマ生息域外」)

export type MuniOfficialLink = {
  prefName: string;
  cityName: string;
  homeUrl?: string;
  bearUrl?: string;
  verifiedAt?: string;
  notes?: string;
};

export const MUNI_OFFICIAL_LINKS: MuniOfficialLink[] = [
  // 富山県 (15 件) — 2026-05-19 エージェント収集
  { prefName: "富山県", cityName: "富山市", homeUrl: "https://www.city.toyama.lg.jp/", bearUrl: "https://www.city.toyama.lg.jp/business/nourin/1010630/1010631/index.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "高岡市", homeUrl: "https://www.city.takaoka.toyama.jp/", bearUrl: "https://www.city.takaoka.toyama.jp/soshiki/nogyosuisanka/3/5/1_1/2625.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "魚津市", homeUrl: "https://www.city.uozu.toyama.jp/", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "氷見市", homeUrl: "https://www.city.himi.toyama.jp/", bearUrl: "https://www.city.himi.toyama.jp/gyosei/soshiki/norinchikusan/1/6036.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "滑川市", homeUrl: "https://www.city.namerikawa.toyama.jp/", bearUrl: "https://www.city.namerikawa.toyama.jp/soshiki/15/9224.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "黒部市", homeUrl: "https://www.city.kurobe.toyama.jp/", bearUrl: "https://www.city.kurobe.toyama.jp/category/menu.aspx?ctgcd=189", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "砺波市", homeUrl: "https://www.city.tonami.lg.jp/", bearUrl: "https://www.city.tonami.lg.jp/info/70681p/", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "小矢部市", homeUrl: "https://www.city.oyabe.toyama.jp/", bearUrl: "https://www.city.oyabe.toyama.jp/sangyobusiness/1002761/1002763.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "南砺市", homeUrl: "https://www.city.nanto.toyama.jp/", bearUrl: "https://www.city.nanto.toyama.jp/soshiki/shinrin_nochiseibi/1/1/5259.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "射水市", homeUrl: "https://www.city.imizu.toyama.jp/", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "中新川郡舟橋村", homeUrl: "https://www.vill.funahashi.toyama.jp/", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "中新川郡上市町", homeUrl: "https://www.town.kamiichi.toyama.jp/", bearUrl: "https://www.town.kamiichi.toyama.jp/page/16107.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "中新川郡立山町", homeUrl: "https://www.town.tateyama.toyama.jp/", bearUrl: "https://www.town.tateyama.toyama.jp/emergency/index.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "下新川郡入善町", homeUrl: "https://www.town.nyuzen.toyama.jp/", bearUrl: "https://www.town.nyuzen.toyama.jp/gyosei/soshiki/ganbaru/1/1/5479.html", verifiedAt: "2026-05-19" },
  { prefName: "富山県", cityName: "下新川郡朝日町", homeUrl: "https://www.town.asahi.toyama.jp/", verifiedAt: "2026-05-19" },
];

// 高速ルックアップ用 index。`${pref}/${city}` をキーに 1 件返す。
const INDEX = new Map<string, MuniOfficialLink>();
for (const e of MUNI_OFFICIAL_LINKS) {
  INDEX.set(`${e.prefName}/${e.cityName}`, e);
}

export function getMuniOfficialLink(
  prefName: string,
  cityName: string,
): MuniOfficialLink | null {
  return INDEX.get(`${prefName}/${cityName}`) ?? null;
}
