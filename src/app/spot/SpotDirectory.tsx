"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Trees,
  Hotel,
  Waves,
  Tent,
  Camera,
  ThermometerSun,
  Droplets,
  Footprints,
  Sailboat,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import CategoryTiles, {
  type CategoryTileItem,
} from "@/components/CategoryTiles";
import type { LandmarkCategory } from "@/data/japan-landmarks";

/**
 * /spot のカテゴリ絞り込み + カードのページ送り + 都道府県別一覧を、クライアント
 * 側で担うコンポーネント。ページを静的 (ISR) に保つため、サーバーは searchParams を
 * 読まず、全観光地の軽量投影 (spots) を 1 度だけ渡す。client component も SSR される
 * ので、初期状態 (すべて・1ページ目) の都道府県別一覧 (全リンク) とカードは静的
 * HTML に含まれる (SEO・網羅リンクは維持)。
 *
 * - カテゴリタブ: クリックで即フィルタ (ページ遷移なし)。
 * - ページ送り: クライアント側でスライス (前へ/次へ)。
 * - ?cat= / ?page= のディープリンクはマウント時に window.location から復元。
 */

export type SpotLite = {
  slug: string;
  name: string;
  prefName: string;
  muniName?: string;
  category: LandmarkCategory;
  imageUrl?: string;
  blurb: string;
};

const CATEGORY_LABEL: Record<LandmarkCategory, string> = {
  mountain: "山岳・登山口",
  national_park: "国立公園",
  resort: "観光・リゾート",
  gorge: "渓谷・川遊び",
  campground: "キャンプ場",
  sightseeing: "観光名所",
  onsen: "温泉地",
  waterfall: "滝・自然",
  trailhead: "トレイル",
  lake: "湖・湖畔",
};

const CATEGORY_ICON: Record<LandmarkCategory, LucideIcon> = {
  mountain: Mountain,
  national_park: Trees,
  resort: Hotel,
  gorge: Waves,
  campground: Tent,
  sightseeing: Camera,
  onsen: ThermometerSun,
  waterfall: Droplets,
  trailhead: Footprints,
  lake: Sailboat,
};

const CATEGORY_ORDER: LandmarkCategory[] = [
  "mountain",
  "national_park",
  "resort",
  "sightseeing",
  "onsen",
  "gorge",
  "waterfall",
  "campground",
  "lake",
  "trailhead",
];

// 都道府県を地理順 (北→南 / JIS X 0401 コード順) で並べる基準。
const PREF_ORDER: string[] = [
  "北海道",
  "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県",
  "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県",
  "沖縄県",
];
const prefRank = (pref: string): number => {
  const i = PREF_ORDER.indexOf(pref);
  return i === -1 ? PREF_ORDER.length : i;
};

const CARD_PAGE_SIZE = 60;
const PREF_COL_COUNT = 3;
// 都道府県別一覧で 1 県あたりに出すピル(リンク)の上限。全国網羅で 1 県数百件に
// なると DOM とHTML が肥大するため、俯瞰として上位のみ表示し残数はカードのページ送り
// と sitemap 側でカバーする。curated 分(数件/県)ではこの上限に達しないので無影響。
const PREF_PILL_CAP = 16;

export default function SpotDirectory({ spots }: { spots: SpotLite[] }) {
  const [activeCat, setActiveCat] = useState<string>("all");
  const [page, setPage] = useState(1);

  // マウント時に URL (?cat / ?page) から状態を復元。
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const cat = p.get("cat");
    if (cat && (CATEGORY_ORDER as string[]).includes(cat)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveCat(cat);
    }
    const pg = Number.parseInt(p.get("page") ?? "1", 10);
    if (Number.isFinite(pg) && pg > 1) setPage(pg);
  }, []);

  const countByCat = useMemo(() => {
    const c = Object.fromEntries(
      CATEGORY_ORDER.map((k) => [k, 0]),
    ) as Record<LandmarkCategory, number>;
    for (const s of spots) c[s.category]++;
    return c;
  }, [spots]);

  const visible = useMemo(
    () =>
      activeCat === "all"
        ? spots
        : spots.filter((s) => s.category === activeCat),
    [spots, activeCat],
  );

  const totalPages = Math.max(1, Math.ceil(visible.length / CARD_PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const pageCards = visible.slice(
    (currentPage - 1) * CARD_PAGE_SIZE,
    currentPage * CARD_PAGE_SIZE,
  );
  const cardRangeStart = (currentPage - 1) * CARD_PAGE_SIZE + 1;
  const cardRangeEnd = Math.min(currentPage * CARD_PAGE_SIZE, visible.length);

  // 都道府県別一覧 (全件表示中のみ): 地理順に3カラムへマソンリー分配。
  const prefColumns = useMemo(() => {
    const byPref = new Map<string, SpotLite[]>();
    for (const s of spots) {
      const arr = byPref.get(s.prefName) ?? [];
      arr.push(s);
      byPref.set(s.prefName, arr);
    }
    const blocks: [string, SpotLite[]][] = [...byPref.entries()].sort(
      (a, b) => prefRank(a[0]) - prefRank(b[0]),
    );
    const columns: [string, SpotLite[]][][] = Array.from(
      { length: PREF_COL_COUNT },
      () => [],
    );
    const colHeights = new Array<number>(PREF_COL_COUNT).fill(0);
    blocks.forEach(([pref, items]) => {
      let min = 0;
      for (let c = 1; c < PREF_COL_COUNT; c++) {
        if (colHeights[c] < colHeights[min]) min = c;
      }
      columns[min].push([pref, items]);
      colHeights[min] += items.length + 2;
    });
    return columns;
  }, [spots]);

  const selectCat = (key: string) => {
    setActiveCat(key);
    setPage(1);
    const url = key === "all" ? "/spot" : `/spot?cat=${key}`;
    window.history.replaceState(null, "", url);
  };

  const goPage = (p: number) => {
    setPage(p);
    const params = new URLSearchParams();
    if (activeCat !== "all") params.set("cat", activeCat);
    if (p > 1) params.set("page", String(p));
    const q = params.toString();
    window.history.replaceState(null, "", q ? `/spot?${q}` : "/spot");
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };

  return (
    <>
      <CategoryTiles
        title="カテゴリで絞り込み"
        activeKey={activeCat}
        onSelect={selectCat}
        items={[
          {
            key: "all",
            href: "/spot",
            label: "すべて",
            icon: LayoutGrid,
            count: spots.length,
          },
          ...CATEGORY_ORDER.map<CategoryTileItem>((cat) => ({
            key: cat,
            href: `/spot?cat=${cat}`,
            label: CATEGORY_LABEL[cat],
            icon: CATEGORY_ICON[cat],
            count: countByCat[cat],
          })),
        ]}
      />

      {/* 都道府県別一覧 — 全件表示中のみ俯瞰として表示 (フィルタ中は隠す) */}
      {activeCat === "all" && (
        <section className="not-prose my-6 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-base font-bold text-stone-900 sm:text-lg">
              都道府県別一覧
            </h2>
            <span className="text-sm text-stone-500">全 {spots.length} 件</span>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:gap-x-8 md:gap-y-0">
            {prefColumns.map((column, ci) => (
              <div key={ci} className="flex flex-1 flex-col gap-5">
                {column.map(([pref, items]) => (
                  <div key={pref}>
                    <div className="mb-2 flex items-center gap-2 border-b border-stone-200 pb-1.5">
                      <span className="text-sm font-bold text-stone-800">
                        {pref}
                      </span>
                      <span className="rounded-full bg-stone-100 px-1.5 py-0.5 text-xs font-medium tabular-nums text-stone-500">
                        {items.length}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {items.slice(0, PREF_PILL_CAP).map((l) => (
                        <Link
                          key={l.slug}
                          href={`/spot/${encodeURIComponent(l.slug)}`}
                          className="spot-pill"
                        >
                          {l.name}
                        </Link>
                      ))}
                      {items.length > PREF_PILL_CAP && (
                        <span className="text-xs font-medium text-stone-400">
                          ほか {items.length - PREF_PILL_CAP} 件
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* カード一覧 — フィルタ選択中はそのカテゴリのみ。全件は重いのでページ送り。 */}
      <section className="not-prose mt-6">
        <div className="mb-2 flex items-baseline justify-between text-sm text-stone-500">
          <span>
            {activeCat === "all"
              ? "すべての観光地"
              : CATEGORY_LABEL[activeCat as LandmarkCategory]}
          </span>
          <span className="tabular-nums">
            {visible.length.toLocaleString()} 件中{" "}
            {cardRangeStart.toLocaleString()}–{cardRangeEnd.toLocaleString()} 件
          </span>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pageCards.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/spot/${encodeURIComponent(l.slug)}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm hover:border-stone-300 hover:shadow"
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
                  <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 text-stone-300">
                    {(() => {
                      const Ico = CATEGORY_ICON[l.category];
                      return <Ico size={40} strokeWidth={1.4} aria-hidden />;
                    })()}
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

        {totalPages > 1 && (
          <nav
            className="mt-6 flex items-center justify-center gap-4 text-sm font-medium"
            aria-label="観光地一覧のページ送り"
          >
            {currentPage > 1 ? (
              <button
                type="button"
                onClick={() => goPage(currentPage - 1)}
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-stone-700 hover:bg-stone-50"
              >
                ← 前へ
              </button>
            ) : (
              <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-stone-300">
                ← 前へ
              </span>
            )}
            <span className="tabular-nums text-stone-500">
              {currentPage} / {totalPages}
            </span>
            {currentPage < totalPages ? (
              <button
                type="button"
                onClick={() => goPage(currentPage + 1)}
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-stone-700 hover:bg-stone-50"
              >
                次へ →
              </button>
            ) : (
              <span className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-stone-300">
                次へ →
              </span>
            )}
          </nav>
        )}
      </section>
    </>
  );
}
