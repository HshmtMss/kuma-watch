/**
 * インバウンド英語スポット（自動生成分）。手キュレーション105件（INBOUND_EN_SLUGS）に
 * 加え、OSM生成スポットのうちクマ関連の自然/登山系を知名度順に選び、Gemini で英語名＋
 * 英語紹介文を付与したもの。scripts/gen-en-spots.mjs が生成。
 *
 * 重要: このデータは自己完結（lat/lon/enName/enBlurb を内包）で、日本語側の
 * NEXT_PUBLIC_SPOT_COVERAGE フラグに依存せず英語ページを描画できる。
 */
import DATA from "./inbound-en-generated.json";

export type EnGeneratedSpot = {
  slug: string;
  name: string; // 日本語名
  enName: string; // 英語表示名（ローマ字）
  enBlurb: string; // 英語紹介文
  prefName: string;
  category: string;
  lat: number;
  lon: number;
  imageUrl?: string;
  imageCredit?: string;
};

export const EN_GENERATED_SPOTS = DATA as EnGeneratedSpot[];
export const EN_GENERATED_SLUGS: string[] = EN_GENERATED_SPOTS.map((s) => s.slug);

const BY_SLUG = new Map(EN_GENERATED_SPOTS.map((s) => [s.slug, s]));
export function getEnGeneratedSpot(slug: string): EnGeneratedSpot | undefined {
  return BY_SLUG.get(slug);
}
