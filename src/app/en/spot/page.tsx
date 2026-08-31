import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import DirectorySearch, {
  type DirectoryItem,
} from "@/components/DirectorySearch";
import { EN_SPOTS, EN_CURATED_SPOTS, EN_OTHER_SPOTS } from "@/data/en-spot-list";
import { EN_TRAILS } from "@/data/en-trails";
import { REGION_ORDER, prefRegion, prefEn } from "@/data/pref-en";
import { isEnSpotIndexReleased } from "@/lib/en-spot-index-flag";

/**
 * 英語スポットの一覧＋文字検索（/en/spot）。
 *
 * これまで英語側は個別ページ /en/spot/[slug] しか無く、一覧は /en トップが
 * 1,500 件のリンク帳を丸ごと抱えていた。Google から個別ページに着地した人が
 * 「次の行き先」を名前で引く手段が無かったので、受け皿をここに作る。
 *
 * 出没 0 件のスポットも必ず載せる。「出ていない」ことが分かるのが来訪前には
 * 重要な情報で、件数の多い順に間引くと安全確認の用途が壊れる（日本語 /spot と
 * 同じ方針）。
 *
 * 公開は NEXT_PUBLIC_EN_ENABLED ＋ NEXT_PUBLIC_EN_SPOT_INDEX の二段。
 */
const SITE = "https://kuma-watch.jp";
const EN_ENABLED = process.env.NEXT_PUBLIC_EN_ENABLED === "true";
const TOTAL = EN_SPOTS.length;
/** 見出し・本文に出す件数は英語表記の桁区切りで（1524 ではなく 1,524）。 */
const TOTAL_LABEL = TOTAL.toLocaleString("en-US");

export const revalidate = 21600;

export const metadata: Metadata = {
  title: `Bear sightings by destination — ${TOTAL_LABEL} spots in Japan | KumaWatch`,
  description: `Search ${TOTAL_LABEL} mountains, trails and destinations across Japan and see recent bear sightings near each one before you go. Spots with no recent sightings are listed too.`,
  alternates: {
    canonical: `${SITE}/en/spot`,
    languages: { en: `${SITE}/en/spot`, ja: `${SITE}/spot` },
  },
  openGraph: {
    title: `Bear sightings by destination — ${TOTAL_LABEL} spots in Japan`,
    url: `${SITE}/en/spot`,
    type: "website",
  },
};

/** 検索対象。スポット（/en/spot/[slug]）＋トレイル（/en/trail/[slug]）。 */
function searchItems(): DirectoryItem[] {
  const spots: DirectoryItem[] = EN_SPOTS.map((s) => ({
    label: s.enName,
    sub: prefEn(s.prefName),
    href: `/en/spot/${s.slug}`,
  }));
  const trails: DirectoryItem[] = EN_TRAILS.map((t) => ({
    label: t.name,
    sub: t.region,
    href: `/en/trail/${t.slug}`,
  }));
  return [...trails, ...spots];
}

export default function EnglishSpotIndex() {
  if (!EN_ENABLED || !isEnSpotIndexReleased()) notFound();

  // 地方 → 県 でグループ化（生成分。curated は上の Popular で先に見せる）
  const byRegion = new Map<string, typeof EN_OTHER_SPOTS>();
  for (const s of EN_OTHER_SPOTS) {
    const rg = prefRegion(s.prefName);
    const arr = byRegion.get(rg) ?? [];
    arr.push(s);
    byRegion.set(rg, arr);
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <p className="text-xs font-bold tracking-wider text-amber-700">
        WHERE ARE YOU GOING?
      </p>
      <h1 className="mt-1 text-2xl font-black leading-tight text-stone-900 sm:text-3xl">
        Bear sightings by destination
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
        Type the name of a mountain, trail, park or hot spring and see whether
        bears have been reported near it recently. {TOTAL_LABEL} spots across
        Japan,
        from official reports and news.
      </p>
      <p className="mt-2 text-[13.5px] leading-relaxed text-stone-500">
        Spots with no recent sightings are listed too — “no bears reported here”
        is exactly what you want to know before you go.
      </p>

      <div className="mt-5">
        <DirectorySearch
          en
          items={searchItems()}
          placeholder="Search a mountain, trail or destination"
        />
      </div>

      <h2 className="mt-2 text-lg font-bold text-stone-900">Popular spots</h2>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {EN_CURATED_SPOTS.map((s) => (
          <Link
            key={s.slug}
            href={`/en/spot/${s.slug}`}
            className="rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-amber-300 hover:bg-amber-50"
          >
            {s.enName}
          </Link>
        ))}
      </div>

      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Multi-day trails
      </h2>
      <p className="mt-1 text-[13.5px] leading-relaxed text-stone-600">
        Walking a famous route? Check sightings along the whole trail, section
        by section.
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {EN_TRAILS.map((t) => (
          <Link
            key={t.slug}
            href={`/en/trail/${t.slug}`}
            className="rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-[13px] font-medium text-stone-700 transition hover:border-amber-300 hover:bg-amber-50"
          >
            {t.name}
          </Link>
        ))}
      </div>

      <h2 className="mt-8 text-lg font-bold text-stone-900">
        All spots by region
      </h2>
      <div className="mt-3 space-y-6">
        {REGION_ORDER.filter((r) => byRegion.has(r)).map((region) => {
          const byPref = new Map<string, typeof EN_OTHER_SPOTS>();
          for (const s of byRegion.get(region)!) {
            const p = prefEn(s.prefName);
            const arr = byPref.get(p) ?? [];
            arr.push(s);
            byPref.set(p, arr);
          }
          const prefs = [...byPref.keys()].sort();
          return (
            <div key={region}>
              <p className="text-[13px] font-bold text-stone-700">{region}</p>
              <div className="mt-1.5 space-y-2.5">
                {prefs.map((pref) => (
                  <div key={pref}>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                      {pref}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {byPref
                        .get(pref)!
                        .slice()
                        .sort((a, b) => a.enName.localeCompare(b.enName))
                        .map((s) => (
                          <Link
                            key={s.slug}
                            href={`/en/spot/${s.slug}`}
                            className="rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-[13px] font-medium text-stone-700 transition hover:border-amber-300 hover:bg-amber-50"
                          >
                            {s.enName}
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-xs text-stone-500">
        <Link href="/en" className="underline hover:text-stone-700">
          ← Bear safety guide
        </Link>
      </p>
    </main>
  );
}
