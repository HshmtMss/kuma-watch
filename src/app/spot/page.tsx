import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import {
  JAPAN_LANDMARKS,
  type JapanLandmark,
  type LandmarkCategory,
} from "@/data/japan-landmarks";

const SITE_URL = "https://kuma-watch.jp";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "観光地・登山口から探す｜KumaWatch クマ出没情報",
  description:
    "高尾山・富士山・上高地・知床など、全国の主要な登山口・観光地・国立公園のクマ出没情報を整理。登山・キャンプ・観光の前に、目的地周辺の警戒レベルを確認できます。",
  alternates: { canonical: `${SITE_URL}/spot` },
  openGraph: {
    title: "観光地・登山口から探す｜KumaWatch",
    description:
      "高尾山・富士山・上高地ほか全国の主要観光地・登山口周辺のクマ出没情報を一覧で。",
    url: `${SITE_URL}/spot`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const CATEGORY_LABEL: Record<LandmarkCategory, string> = {
  mountain: "山岳・登山口",
  national_park: "国立公園",
  resort: "観光・リゾート地",
  trailhead: "トレイル・登山口",
  lake: "湖・湖畔",
};

// カード上部に出すアイコン代わりの絵文字。
const CATEGORY_EMOJI: Record<LandmarkCategory, string> = {
  mountain: "⛰️",
  national_park: "🏞️",
  resort: "♨️",
  trailhead: "🥾",
  lake: "🪷",
};

// カード表示順 (主要観光地の動線から)。
const CATEGORY_ORDER: LandmarkCategory[] = [
  "mountain",
  "national_park",
  "resort",
  "lake",
  "trailhead",
];

export default function SpotIndexPage() {
  const byCategory = new Map<LandmarkCategory, JapanLandmark[]>();
  for (const l of JAPAN_LANDMARKS) {
    const arr = byCategory.get(l.category) ?? [];
    arr.push(l);
    byCategory.set(l.category, arr);
  }
  // 各カテゴリ内は都道府県順 (北→南)、同県内は名前順。
  const PREF_ORDER: Record<string, number> = {};
  // 都道府県の北→南並びは prefectures.ts の宣言順に沿わせる (簡易: 後で参照されない仮値)。
  // ここでは JAPAN_LANDMARKS の登場順をそのまま尊重するため、ソート不要。
  void PREF_ORDER;

  return (
    <PageShell
      title="観光地・登山口から探す"
      lead="高尾山・富士山・上高地・知床など、全国の主要な登山口・観光地・国立公園周辺のクマ出没情報を整理しています。登山・キャンプ・観光の前にご確認ください。"
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-xs text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">観光地から探す</span>
      </nav>

      <p className="text-sm text-stone-600">
        都道府県・市町村単位で探したい場合は{" "}
        <Link href="/place" className="text-blue-700 underline">
          都道府県から探す
        </Link>
        へ。地図 UI で確認したい場合は{" "}
        <Link href="/" className="text-blue-700 underline">
          トップの警戒レベルマップ
        </Link>
        をご利用ください。
      </p>

      {/* 俯瞰用: 全観光地を都道府県別にコンパクトに一覧。アンカーで該当カードに飛ぶ。 */}
      <details className="not-prose my-5 rounded-xl border border-stone-200 bg-stone-50 open:bg-white">
        <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-stone-800 marker:hidden [&::-webkit-details-marker]:hidden">
          <span>📋 全 {JAPAN_LANDMARKS.length} 件をまとめて見る (都道府県別)</span>
        </summary>
        <div className="border-t border-stone-200 px-4 py-3 text-sm">
          {(() => {
            const byPref = new Map<string, JapanLandmark[]>();
            for (const l of JAPAN_LANDMARKS) {
              const arr = byPref.get(l.prefName) ?? [];
              arr.push(l);
              byPref.set(l.prefName, arr);
            }
            return [...byPref.entries()].map(([pref, items]) => (
              <div key={pref} className="mb-2 last:mb-0">
                <span className="mr-2 inline-block text-xs font-semibold text-stone-500">
                  {pref}
                </span>
                {items.map((l, i) => (
                  <span key={l.slug}>
                    {i > 0 && <span className="text-stone-300">・</span>}
                    <Link
                      href={`/spot/${encodeURIComponent(l.slug)}`}
                      className="text-blue-700 hover:underline"
                    >
                      {l.name}
                    </Link>
                  </span>
                ))}
              </div>
            ));
          })()}
        </div>
      </details>

      {CATEGORY_ORDER.map((cat) => {
        const items = byCategory.get(cat) ?? [];
        if (items.length === 0) return null;
        return (
          <section key={cat} className="not-prose mt-8">
            <h2 className="mb-3 flex items-center gap-2 text-base font-bold text-stone-900 sm:text-lg">
              <span aria-hidden>{CATEGORY_EMOJI[cat]}</span>
              <span>{CATEGORY_LABEL[cat]}</span>
              <span className="text-xs font-normal text-stone-400">
                {items.length} 件
              </span>
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((l) => (
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
                        <div className="text-[11px] text-stone-500">
                          {l.prefName}
                          {l.muniName ? `・${l.muniName}` : ""}
                        </div>
                      </div>
                      <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-stone-600">
                        {l.blurb}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <h2>関連リンク</h2>
      <ul className="not-prose space-y-2 text-sm">
        <li>
          <Link href="/place" className="text-blue-700 underline">
            🗾 都道府県から探す
          </Link>
        </li>
        <li>
          <Link href="/articles" className="text-blue-700 underline">
            📰 クマ対策の解説記事一覧
          </Link>
        </li>
        <li>
          <Link href="/research" className="text-blue-700 underline">
            📚 研究・知見（日次・月次レポート）
          </Link>
        </li>
      </ul>
    </PageShell>
  );
}
