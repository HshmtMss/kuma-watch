import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import {
  RESEARCH_CATEGORY_LABEL,
  researchEntriesByRegion,
  researchRegionsWithCount,
  type ResearchEntry,
} from "@/lib/research-entries";

const SITE_URL = "https://kuma-watch.jp";

// ISR: 5 分ごとに再生成。新規記事の地域タグ反映を CDN エッジに短い遅延で反映。
export const revalidate = 300;

type Params = { pref: string };

export async function generateStaticParams(): Promise<Params[]> {
  return researchRegionsWithCount().map((r) => ({ pref: r.pref }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { pref } = await params;
  const decoded = decodeURIComponent(pref);
  const entries = researchEntriesByRegion(decoded);
  if (entries.length === 0) {
    return { title: `${decoded} の研究レポート | KumaWatch`, robots: { index: false } };
  }
  const title = `${decoded} のクマ出没分析レポート（${entries.length}件）｜獣医工学ラボ`;
  const description = `${decoded} のクマ出没事案を分析した日次・月次レポートを${entries.length}件公開中。獣医工学ラボがAI集約 + 獣医師監修で${decoded}の出没動向・人身被害・行政対応を網羅。`;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/research/region/${encodeURIComponent(decoded)}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/research/region/${encodeURIComponent(decoded)}`,
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export default async function ResearchRegionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { pref } = await params;
  const decoded = decodeURIComponent(pref);
  const entries = researchEntriesByRegion(decoded);
  if (entries.length === 0) notFound();

  const monthly = entries.filter((e) => e.category === "monthly-report");
  const daily = entries.filter((e) => e.category === "daily-report");
  const other = entries.filter(
    (e) => e.category !== "monthly-report" && e.category !== "daily-report",
  );

  const otherRegions = researchRegionsWithCount().filter(
    (r) => r.pref !== decoded,
  );

  return (
    <PageShell
      title={`${decoded} のクマ出没分析レポート`}
      lead={`獣医工学ラボが公開している、${decoded} に関連するクマ出没事案の分析レポート一覧です。日次・月次の動向、人身被害、行政対応を網羅しています。`}
    >
      {/* 件数サマリ + サイト本体への送客導線 */}
      <div className="not-prose mb-8 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700">
          <div className="text-xs text-stone-500">
            {decoded} に関連する研究レポート
          </div>
          <div className="mt-1 text-lg font-bold text-stone-900">
            {entries.length} 件公開中
          </div>
          <div className="mt-1 text-xs text-stone-600">
            月次 {monthly.length} 件 / 日次 {daily.length} 件
            {other.length > 0 ? ` / その他 ${other.length} 件` : ""}
          </div>
        </div>
        <Link
          href={`/place/${encodeURIComponent(decoded)}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          🗺️ {decoded} の最新出没マップを見る →
        </Link>
      </div>

      {monthly.length > 0 && (
        <>
          <h2>月次レポート</h2>
          <ul className="not-prose space-y-3">
            {monthly.map((e) => (
              <RegionEntryCard key={e.slug} entry={e} pref={decoded} />
            ))}
          </ul>
        </>
      )}

      {other.length > 0 && (
        <>
          <h2>テーマ解説・政策提言</h2>
          <ul className="not-prose space-y-3">
            {other.map((e) => (
              <RegionEntryCard key={e.slug} entry={e} pref={decoded} />
            ))}
          </ul>
        </>
      )}

      {daily.length > 0 && (
        <>
          <h2>日次レポート</h2>
          <ul className="not-prose space-y-3">
            {daily.map((e) => (
              <RegionEntryCard key={e.slug} entry={e} pref={decoded} />
            ))}
          </ul>
        </>
      )}

      <h2>関連リンク</h2>
      <ul className="not-prose space-y-2 text-sm">
        <li>
          <Link
            href={`/place/${encodeURIComponent(decoded)}`}
            className="text-blue-700 underline"
          >
            🗺️ {decoded} のクマ出没マップ・市町村一覧
          </Link>
        </li>
        <li>
          <Link href="/research" className="text-blue-700 underline">
            📚 全ての研究レポート一覧へ
          </Link>
        </li>
        <li>
          <Link href="/articles" className="text-blue-700 underline">
            📰 クマ対策の解説記事一覧
          </Link>
        </li>
      </ul>

      {otherRegions.length > 0 && (
        <>
          <h2>他の地域から探す</h2>
          <div className="not-prose flex flex-wrap gap-2">
            {otherRegions.map((r) => (
              <Link
                key={r.pref}
                href={`/research/region/${encodeURIComponent(r.pref)}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 hover:border-emerald-400 hover:bg-emerald-50/50 hover:text-emerald-900"
              >
                <span>{r.pref}</span>
                <span className="text-[10px] tabular-nums text-stone-400">
                  {r.count}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </PageShell>
  );
}

function RegionEntryCard({
  entry,
  pref,
}: {
  entry: ResearchEntry;
  pref: string;
}) {
  return (
    <li className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:border-emerald-500 hover:bg-emerald-50/40">
      <Link href={`/research/${entry.slug}`} className="block p-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
            {RESEARCH_CATEGORY_LABEL[entry.category]}
          </span>
          <span>{entry.publishedAt}</span>
        </div>
        <div className="mt-2 text-sm font-semibold text-gray-900">
          {entry.title}
        </div>
        <div className="mt-1 text-xs text-gray-600">{entry.lead}</div>
        <div className="mt-2 flex flex-wrap gap-1">
          {entry.regions.slice(0, 5).map((r) => (
            <span
              key={r}
              className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                r === pref
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-stone-100 text-stone-700"
              }`}
            >
              {r}
            </span>
          ))}
        </div>
      </Link>
    </li>
  );
}
