/**
 * 英語ページで扱うスポットの一覧（/en と /en/spot が共有）。
 *
 * 手キュレーション（INBOUND_EN_SLUGS＝JAPAN_LANDMARKS 由来）と自動生成
 * （EN_GENERATED_SPOTS＝自己完結データ）の 2 系統を、表示・検索の両方で
 * 使える 1 つの形に揃える。slug 重複は curated を優先して 1 件に畳む。
 *
 * 出没 0 件のスポットも必ず含める。「出ていない」こと自体が来訪前に知りたい
 * 情報なので、件数を理由に一覧から落とさない（日本語 /spot と同じ方針）。
 */
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { INBOUND_EN_SLUGS } from "@/data/inbound-en-spots";
import { EN_GENERATED_SPOTS } from "@/data/inbound-en-generated";

export type EnSpotEntry = {
  slug: string;
  /** 英語表示名（curated は altNames のローマ字、生成分は enName） */
  enName: string;
  /** 都道府県（日本語名）。表示時に prefEn/prefRegion へ通す */
  prefName: string;
  /** 手キュレーションの有名スポットか（一覧で先に見せる） */
  curated: boolean;
};

function romaji(name: string, alt?: string[]): string {
  return alt?.find((a) => /^[A-Za-z]/.test(a)) ?? name;
}

function build(): EnSpotEntry[] {
  const bySlug = new Map<string, EnSpotEntry>();
  for (const slug of INBOUND_EN_SLUGS) {
    const l = JAPAN_LANDMARKS.find((x) => x.slug === slug);
    if (!l) continue;
    bySlug.set(slug, {
      slug,
      enName: romaji(l.name, l.altNames),
      prefName: l.prefName,
      curated: true,
    });
  }
  for (const s of EN_GENERATED_SPOTS) {
    if (bySlug.has(s.slug)) continue; // curated を優先
    bySlug.set(s.slug, {
      slug: s.slug,
      enName: s.enName,
      prefName: s.prefName,
      curated: false,
    });
  }
  return [...bySlug.values()];
}

export const EN_SPOTS: EnSpotEntry[] = build();
export const EN_CURATED_SPOTS: EnSpotEntry[] = EN_SPOTS.filter((s) => s.curated);
export const EN_OTHER_SPOTS: EnSpotEntry[] = EN_SPOTS.filter((s) => !s.curated);
