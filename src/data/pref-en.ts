/** 都道府県（日本語名）→ 英語名・地方区分。英語ページのグルーピング/表示に使う。 */
export const PREF_EN: Record<string, { en: string; region: string }> = {
  北海道: { en: "Hokkaido", region: "Hokkaido" },
  青森県: { en: "Aomori", region: "Tohoku" },
  岩手県: { en: "Iwate", region: "Tohoku" },
  宮城県: { en: "Miyagi", region: "Tohoku" },
  秋田県: { en: "Akita", region: "Tohoku" },
  山形県: { en: "Yamagata", region: "Tohoku" },
  福島県: { en: "Fukushima", region: "Tohoku" },
  茨城県: { en: "Ibaraki", region: "Kanto" },
  栃木県: { en: "Tochigi", region: "Kanto" },
  群馬県: { en: "Gunma", region: "Kanto" },
  埼玉県: { en: "Saitama", region: "Kanto" },
  千葉県: { en: "Chiba", region: "Kanto" },
  東京都: { en: "Tokyo", region: "Kanto" },
  神奈川県: { en: "Kanagawa", region: "Kanto" },
  新潟県: { en: "Niigata", region: "Chubu" },
  富山県: { en: "Toyama", region: "Chubu" },
  石川県: { en: "Ishikawa", region: "Chubu" },
  福井県: { en: "Fukui", region: "Chubu" },
  山梨県: { en: "Yamanashi", region: "Chubu" },
  長野県: { en: "Nagano", region: "Chubu" },
  岐阜県: { en: "Gifu", region: "Chubu" },
  静岡県: { en: "Shizuoka", region: "Chubu" },
  愛知県: { en: "Aichi", region: "Chubu" },
  三重県: { en: "Mie", region: "Kansai" },
  滋賀県: { en: "Shiga", region: "Kansai" },
  京都府: { en: "Kyoto", region: "Kansai" },
  大阪府: { en: "Osaka", region: "Kansai" },
  兵庫県: { en: "Hyogo", region: "Kansai" },
  奈良県: { en: "Nara", region: "Kansai" },
  和歌山県: { en: "Wakayama", region: "Kansai" },
  鳥取県: { en: "Tottori", region: "Chugoku" },
  島根県: { en: "Shimane", region: "Chugoku" },
  岡山県: { en: "Okayama", region: "Chugoku" },
  広島県: { en: "Hiroshima", region: "Chugoku" },
  山口県: { en: "Yamaguchi", region: "Chugoku" },
  徳島県: { en: "Tokushima", region: "Shikoku" },
  香川県: { en: "Kagawa", region: "Shikoku" },
  愛媛県: { en: "Ehime", region: "Shikoku" },
  高知県: { en: "Kochi", region: "Shikoku" },
  福岡県: { en: "Fukuoka", region: "Kyushu" },
  佐賀県: { en: "Saga", region: "Kyushu" },
  長崎県: { en: "Nagasaki", region: "Kyushu" },
  熊本県: { en: "Kumamoto", region: "Kyushu" },
  大分県: { en: "Oita", region: "Kyushu" },
  宮崎県: { en: "Miyazaki", region: "Kyushu" },
  鹿児島県: { en: "Kagoshima", region: "Kyushu" },
  沖縄県: { en: "Okinawa", region: "Kyushu" },
};

/** 地方の表示順（北から南）。 */
export const REGION_ORDER = [
  "Hokkaido",
  "Tohoku",
  "Kanto",
  "Chubu",
  "Kansai",
  "Chugoku",
  "Shikoku",
  "Kyushu",
];

export function prefEn(prefName: string): string {
  return PREF_EN[prefName]?.en ?? prefName;
}
export function prefRegion(prefName: string): string {
  return PREF_EN[prefName]?.region ?? "Other";
}
