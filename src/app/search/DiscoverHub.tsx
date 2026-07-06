import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  PawPrint,
  BookOpen,
  Mountain,
  ChartColumn,
  Compass,
  Map,
  MapPin,
  TrendingUp,
  ShieldCheck,
  Landmark,
  Send,
  type LucideIcon,
} from "lucide-react";
import { getCachedSightings } from "@/lib/sightings-cache";
import { ARTICLES } from "@/lib/articles-meta";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import {
  RESEARCH_CATEGORY_LABEL,
  sortedResearchEntries,
} from "@/lib/research-entries";
import { placeHrefForSighting } from "@/lib/muni-name";
import LatestGovAnnouncements from "@/components/LatestGovAnnouncements";

/**
 * /search の空クエリ時に表示する「見つける（Discover）」ハブ。
 *
 * 地図 (トップ) を主役のツールとして残しつつ、埋もれがちな各コンテンツ
 * (最新出没・国の発表・対策記事・観光地・研究) への入口をここに集約し、
 * サイト全体を見渡せる玄関にする。server component でデータを読み、検索 UI
 * (client) に prop として渡して空クエリ時のみ描画する (SEO・速度両立)。
 *
 * 最新出没のリンク先は都道府県ページ (/place/[pref])。市町村ページは
 * 出没数の少ない muni を静的生成しない (dynamicParams=false) ため、確実に
 * 存在する県ページへ送って 404 を避ける。
 */

function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${m[1]}年${Number(m[2])}月${Number(m[3])}日`;
}

function SectionHead({
  title,
  href,
  more,
  Icon,
}: {
  title: string;
  href?: string;
  more?: string;
  Icon?: LucideIcon;
}) {
  return (
    <div className="mb-3 flex items-baseline justify-between gap-3">
      <h2 className="flex items-center gap-2 text-base font-bold text-stone-900 sm:text-lg">
        {Icon && (
          <Icon
            size={19}
            strokeWidth={1.8}
            className="shrink-0 text-amber-600"
            aria-hidden
          />
        )}
        {title}
      </h2>
      {href && more && (
        <Link
          href={href}
          className="shrink-0 text-sm font-semibold text-amber-700 hover:underline"
        >
          {more}
        </Link>
      )}
    </div>
  );
}

const QUICK_LINKS: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "出没マップ", href: "/", Icon: Map },
  { label: "都道府県一覧", href: "/place", Icon: MapPin },
  { label: "警戒エリア Top", href: "/place/ranking", Icon: TrendingUp },
  { label: "クマ対策トップ", href: "/measures", Icon: ShieldCheck },
  { label: "政府発表", href: "/policy", Icon: Landmark },
  { label: "自治体の方へ", href: "/for-gov", Icon: Send },
];

export default async function DiscoverHub(): Promise<ReactNode> {
  const all = await getCachedSightings();
  const latest = [...all]
    .sort(
      (a, b) =>
        b.date.localeCompare(a.date) ||
        (b.ingestedAt ?? 0) - (a.ingestedAt ?? 0),
    )
    .slice(0, 6);

  const recentArticles = [...ARTICLES]
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, 4);

  const spots = JAPAN_LANDMARKS.filter((l) => l.imageUrl).slice(0, 4);
  const research = sortedResearchEntries().slice(0, 3);

  return (
    <div className="not-prose mt-2">
      {/* 1. 最新の出没情報 */}
      <section>
        <SectionHead
          title="最新の出没情報"
          Icon={PawPrint}
          href="/"
          more="地図で見る →"
        />
        <ul className="flex flex-col gap-2">
          {latest.map((r) => {
            const isNews = r.sourceKind === "news";
            return (
              <li key={r.id}>
                <Link
                  href={placeHrefForSighting(r.prefectureName, r.cityName)}
                  className="block rounded-xl border border-stone-200 bg-white px-4 py-3 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  <div className="flex flex-wrap items-baseline gap-2 text-xs">
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        isNews
                          ? "bg-sky-100 text-sky-900"
                          : "bg-emerald-100 text-emerald-900"
                      }`}
                    >
                      {isNews ? "ニュース" : "公式情報"}
                    </span>
                    <span className="tabular-nums text-stone-500">
                      {formatDate(r.date)}
                    </span>
                    <span className="font-semibold text-stone-700">
                      {r.prefectureName}
                      {r.cityName}
                      {r.sectionName ? ` ${r.sectionName}` : ""}
                    </span>
                  </div>
                  {r.comment && (
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-stone-600">
                      {r.comment}
                    </p>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 2. 国の最新発表 (既存コンポーネントを再利用) */}
      <LatestGovAnnouncements limit={4} />

      {/* 3. 対策・知見の記事 */}
      <section className="mt-8">
        <SectionHead
          title="対策・知見の記事"
          Icon={BookOpen}
          href="/articles"
          more="記事一覧 →"
        />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {recentArticles.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/articles/${a.slug}`}
                className="group flex h-full overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:border-amber-400 hover:bg-amber-50"
              >
                {a.heroImage && (
                  <div className="relative aspect-square w-24 shrink-0 bg-stone-100 sm:w-28">
                    <Image
                      src={a.heroImage}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1 p-3">
                  <div className="line-clamp-2 text-sm font-bold leading-snug text-stone-900 group-hover:text-amber-800">
                    {a.title}
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-600">
                    {a.lead}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. 観光地のクマ情報 */}
      <section className="mt-8">
        <SectionHead
          title="観光地のクマ情報"
          Icon={Mountain}
          href="/spot"
          more="観光地一覧 →"
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {spots.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/spot/${encodeURIComponent(l.slug)}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:border-amber-400 hover:shadow"
              >
                <div className="relative aspect-[16/10] w-full bg-stone-100">
                  <Image
                    src={l.imageUrl as string}
                    alt={`${l.name}の写真`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-2">
                  <div className="truncate text-xs font-semibold text-stone-900">
                    {l.name}
                  </div>
                  <div className="truncate text-[11px] text-stone-500">
                    {l.prefName}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. 研究レポート */}
      <section className="mt-8">
        <SectionHead
          title="研究レポート"
          Icon={ChartColumn}
          href="/research"
          more="レポート一覧 →"
        />
        <ul className="flex flex-col gap-2">
          {research.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/research/${r.slug}`}
                className="block rounded-xl border border-stone-200 bg-white px-4 py-3 transition hover:border-emerald-400 hover:bg-emerald-50/40"
              >
                <div className="flex flex-wrap items-baseline gap-2 text-xs">
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-900">
                    {RESEARCH_CATEGORY_LABEL[r.category]}
                  </span>
                  <span className="tabular-nums text-stone-500">
                    {r.publishedAt}
                  </span>
                </div>
                <div className="mt-1 text-sm font-semibold leading-snug text-stone-900">
                  {r.title}
                </div>
                {r.lead && (
                  <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-stone-600">
                    {r.lead}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. 主要ページ */}
      <section className="mt-8">
        <SectionHead title="主要ページ" Icon={Compass} />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {QUICK_LINKS.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:border-amber-400 hover:bg-amber-50"
            >
              <q.Icon size={15} className="shrink-0 text-stone-500" aria-hidden />
              {q.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
