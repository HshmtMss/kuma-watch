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
  title: "観光地・登山口から探す｜獣医師監修クマ警戒マップ",
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
  gorge: "渓谷・川遊び",
  campground: "キャンプ場",
  trailhead: "トレイル",
  lake: "湖・湖畔",
};

const CATEGORY_EMOJI: Record<LandmarkCategory, string> = {
  mountain: "⛰️",
  national_park: "🏞️",
  resort: "♨️",
  gorge: "💦",
  campground: "🏕️",
  trailhead: "🥾",
  lake: "🪷",
};

const CATEGORY_ORDER: LandmarkCategory[] = [
  "mountain",
  "national_park",
  "resort",
  "gorge",
  "campground",
  "lake",
  "trailhead",
];

// 都道府県を地理順 (北→南 / JIS X 0401 コード順) で並べるための基準。
// データ配列の登場順だと「ランダム」に見えるため、一覧表示はこの順に揃える。
const PREF_ORDER: string[] = [
  "北海道",
  "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
  "岐阜県", "静岡県", "愛知県", "三重県",
  "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県",
  "沖縄県",
];
const prefRank = (pref: string): number => {
  const i = PREF_ORDER.indexOf(pref);
  return i === -1 ? PREF_ORDER.length : i;
};

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
    gorge: 0,
    campground: 0,
    trailhead: 0,
    lake: 0,
  };
  for (const l of JAPAN_LANDMARKS) countByCat[l.category]++;

  const visible =
    activeCat === "all"
      ? JAPAN_LANDMARKS
      : JAPAN_LANDMARKS.filter((l) => l.category === activeCat);

  // 都道府県別一覧: グルーピング → 地理順ソート → 高さがほぼ揃うよう
  // 3カラムへ順番に分配する。CSS multi-column は列の開始位置がずれて
  // 見栄えが悪いため、サーバー側で決め打ち分配して flex で並べる。
  type PrefBlock = [string, JapanLandmark[]];
  const byPref = new Map<string, JapanLandmark[]>();
  for (const l of JAPAN_LANDMARKS) {
    const arr = byPref.get(l.prefName) ?? [];
    arr.push(l);
    byPref.set(l.prefName, arr);
  }
  const prefBlocks: PrefBlock[] = [...byPref.entries()].sort(
    (a, b) => prefRank(a[0]) - prefRank(b[0]),
  );
  const PREF_COL_COUNT = 3;
  // 各ブロックの概算高さ (ヘッダー + ピル件数)
  const blockWeights = prefBlocks.map(([, items]) => items.length + 2);
  const prefColumns: PrefBlock[][] = Array.from(
    { length: PREF_COL_COUNT },
    () => [],
  );
  // 地理順のまま「その時点で最も低い列」へ順に積むマソンリー配置。
  // 先頭行が 北海道 ｜ 青森 ｜ 岩手 … と左→右に並び、列内も北→南を維持。
  const colHeights = new Array<number>(PREF_COL_COUNT).fill(0);
  prefBlocks.forEach((block, i) => {
    let min = 0;
    for (let c = 1; c < PREF_COL_COUNT; c++) {
      if (colHeights[c] < colHeights[min]) min = c;
    }
    prefColumns[min].push(block);
    colHeights[min] += blockWeights[i];
  });

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
          {/* サーバー側で3カラムに分配。各列の先頭が揃い、隙間も出ない。
              モバイル/タブレットでは縦積み (列1→列2→列3 で地理順を維持)。 */}
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
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((l) => (
                        <Link
                          key={l.slug}
                          href={`/spot/${encodeURIComponent(l.slug)}`}
                          className="inline-block rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-sm text-stone-700 transition-colors hover:border-stone-300 hover:bg-stone-100 hover:text-stone-900"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
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
