import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CategoryFilter, {
  type CategoryFilterItem,
} from "@/components/CategoryFilter";
import PageShell from "@/components/PageShell";
import {
  JAPAN_LANDMARKS,
  type JapanLandmark,
  type LandmarkCategory,
} from "@/data/japan-landmarks";

const SITE_URL = "https://kuma-watch.jp";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "観光地・登山口から探す｜獣医師監修クマ警戒マップ｜KumaWatch",
  description:
    "獣医師監修・獣医工学ラボ運営。高尾山・富士山・上高地・知床など、全国の主要な登山口・観光地・国立公園のクマ出没情報を整理。登山・キャンプ・観光の前に、目的地周辺の警戒レベルを確認できます。",
  alternates: { canonical: `${SITE_URL}/spot` },
  openGraph: {
    title: "観光地・登山口から探す｜獣医師監修クマ警戒マップ｜KumaWatch",
    description:
      "獣医師監修・獣医工学ラボ運営。高尾山・富士山・上高地ほか全国の主要観光地・登山口周辺のクマ出没情報を一覧で。",
    url: `${SITE_URL}/spot`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const CATEGORY_LABEL: Record<LandmarkCategory, string> = {
  mountain: "山岳・登山口",
  national_park: "国立公園",
  resort: "観光・リゾート",
  trailhead: "トレイル",
  lake: "湖・湖畔",
};

const CATEGORY_EMOJI: Record<LandmarkCategory, string> = {
  mountain: "⛰️",
  national_park: "🏞️",
  resort: "♨️",
  trailhead: "🥾",
  lake: "🪷",
};

const CATEGORY_ORDER: LandmarkCategory[] = [
  "mountain",
  "national_park",
  "resort",
  "lake",
  "trailhead",
];

type SearchParams = Promise<{ cat?: string }>;

export default async function SpotIndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const validCats = new Set<string>(CATEGORY_ORDER);
  const activeCat: string = sp.cat && validCats.has(sp.cat) ? sp.cat : "all";

  // カテゴリ毎の件数 (フィルタバー用)
  const countByCat: Record<LandmarkCategory, number> = {
    mountain: 0,
    national_park: 0,
    resort: 0,
    trailhead: 0,
    lake: 0,
  };
  for (const l of JAPAN_LANDMARKS) countByCat[l.category]++;

  const visible =
    activeCat === "all"
      ? JAPAN_LANDMARKS
      : JAPAN_LANDMARKS.filter((l) => l.category === activeCat);

  return (
    <PageShell
      title="観光地・登山口から探す"
      lead="高尾山・富士山・上高地・知床など、全国の主要な登山口・観光地・国立公園周辺のクマ出没情報を整理しています。登山・キャンプ・観光の前にご確認ください。"
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <Link href="/measures" className="hover:text-stone-900">
          対策
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">観光地から探す</span>
      </nav>

      <CategoryFilter
        title="カテゴリで絞り込み"
        accent="amber"
        activeKey={activeCat}
        items={[
          {
            key: "all",
            href: "/spot",
            label: "すべて",
            count: JAPAN_LANDMARKS.length,
          },
          ...CATEGORY_ORDER.map<CategoryFilterItem>((cat) => ({
            key: cat,
            href: `/spot?cat=${cat}`,
            label: CATEGORY_LABEL[cat],
            emoji: CATEGORY_EMOJI[cat],
            count: countByCat[cat],
          })),
        ]}
      />

      {/* 都道府県別一覧 — 全件表示中のみ俯瞰として表示 (フィルタ中は邪魔なので隠す) */}
      {activeCat === "all" && (
        <section className="not-prose my-6 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-base font-bold text-stone-900 sm:text-lg">
              都道府県別一覧
            </h2>
            <span className="text-sm text-stone-500">
              全 {JAPAN_LANDMARKS.length} 件
            </span>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {(() => {
              const byPref = new Map<string, JapanLandmark[]>();
              for (const l of JAPAN_LANDMARKS) {
                const arr = byPref.get(l.prefName) ?? [];
                arr.push(l);
                byPref.set(l.prefName, arr);
              }
              return [...byPref.entries()].map(([pref, items]) => (
                <div key={pref}>
                  <div className="mb-1.5 border-b border-stone-100 pb-1 text-sm font-semibold tracking-wide text-stone-700">
                    {pref}
                    <span className="ml-1.5 text-xs font-normal text-stone-400">
                      {items.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((l) => (
                      <Link
                        key={l.slug}
                        href={`/spot/${encodeURIComponent(l.slug)}`}
                        className="inline-block rounded-full bg-stone-100 px-2.5 py-1 text-sm text-stone-700 hover:bg-amber-100 hover:text-amber-900"
                      >
                        {l.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ));
            })()}
          </div>
        </section>
      )}

      {/* カード一覧 — フィルタ選択中はそのカテゴリのみ */}
      <section className="not-prose mt-6">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/spot/${encodeURIComponent(l.slug)}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm hover:border-amber-400 hover:shadow"
              >
                {l.imageUrl ? (
                  <div className="relative aspect-[16/10] w-full bg-stone-100">
                    <Image
                      src={l.imageUrl}
                      alt={`${l.name}の写真`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 text-3xl text-stone-300">
                    {CATEGORY_EMOJI[l.category]}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-baseline gap-2">
                    <div className="text-base font-semibold text-stone-900">
                      {l.name}
                    </div>
                    <div className="text-xs text-stone-500">
                      {l.prefName}
                      {l.muniName ? `・${l.muniName}` : ""}
                    </div>
                  </div>
                  <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-stone-600">
                    {l.blurb}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* /spot はヘッダーナビから直接来られる top-level なので「クマ対策トップに
          戻る」ボタンは画面遷移上のミスマッチ。ヘッダーナビ + パンくず + 各観光地
          内の戻り導線で十分なため、ここでは戻りリンクを置かない。 */}
    </PageShell>
  );
}
