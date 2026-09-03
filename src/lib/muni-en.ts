import MUNI_EN from "@/data/muni-en.json";
import { prefEn } from "@/data/pref-en";

/**
 * 出没した場所の英語表記。英語ページと英語プッシュ通知で「どの町の話か」を出す。
 *
 * 英語側は長らく日付と距離しか出せていなかった (市区町村の英語表記が無かったため)。
 * 訪日の読み手には "in your area" では判断できないので、市区町村まで出す。
 *
 * 市区町村の英語表記は scripts/gen-muni-en.ts が生成した対応表から引く。
 * 未収録なら県名だけに落とす (日本語の市区町村名は英語ページに出さない)。
 */
const TABLE = MUNI_EN as Record<string, string>;

export function enMuniName(cityName?: string): string | null {
  if (!cityName) return null;
  return TABLE[cityName] ?? null;
}

/** 「Matsumoto, Nagano」。市区町村が引けなければ「Nagano」。どちらも無ければ null。 */
export function enPlaceLabel(
  prefName?: string,
  cityName?: string,
): string | null {
  const pref = prefName ? prefEn(prefName) : null;
  const city = enMuniName(cityName);
  if (city && pref && city !== pref) return `${city}, ${pref}`;
  return city ?? pref ?? null;
}
