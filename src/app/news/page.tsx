import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import LatestGovAnnouncements from "@/components/LatestGovAnnouncements";
import { getRecentRecordsNationwide } from "@/lib/place-index";
import { RESEARCH_ENTRIES } from "@/lib/research-entries";
import { jstToday } from "@/lib/jst-date";

const SITE_URL = "https://kuma-watch.jp";

// 出没データは日次取り込みで更新されるため、こまめに再生成する。
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "全国クマ出没 最新情報・速報｜熊の目撃・出没ニュース",
  description:
    "全国のクマ（熊）出没・目撃情報を新着順に速報。報道・自治体発表をもとに随時更新。最新のクマ出没ニュースとリアルタイムに近い警戒情報、日次分析レポート・国の発表もまとめて確認できます。獣医師監修・無料。",
  alternates: { canonical: `${SITE_URL}/news` },
  openGraph: {
    title: "全国クマ出没 最新情報・速報｜KumaWatch",
    description:
      "全国のクマ（熊）出没・目撃情報を新着順に速報。報道・自治体発表をもとに随時更新。",
    url: `${SITE_URL}/news`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "全国クマ出没 最新情報・速報",
    description: "全国のクマ（熊）出没・目撃情報を新着順に速報。",
  },
  robots: { index: true, follow: true },
};

function formatDate(d: string): string {
  const t = Date.parse(d);
  if (!Number.isFinite(t)) return d;
  return new Date(t).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function daysAgoLabel(dateStr: string): string | null {
  const t = Date.parse(dateStr);
  if (!Number.isFinite(t)) return null;
  const today = Date.parse(jstToday());
  const diff = Math.round((today - t) / 86_400_000);
  if (diff <= 0) return "今日";
  if (diff === 1) return "昨日";
  if (diff < 7) return `${diff}日前`;
  if (diff < 31) return `${Math.floor(diff / 7)}週間前`;
  return null;
}

export default async function NewsPage() {
  const recent = await getRecentRecordsNationwide(50);
  const latestReport = RESEARCH_ENTRIES[0];
  const latestWeekly = RESEARCH_ENTRIES.find((e) => e.slug.includes("weekly"));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "クマ出没 最新情報・速報",
        item: `${SITE_URL}/news`,
      },
    ],
  };

  return (
    <PageShell
      title="全国クマ出没 最新情報・速報"
      lead="全国のクマ（熊）出没・目撃情報を新着順にまとめています。報道・自治体発表をもとに随時更新。地域別の詳細は各市町村ページ、全国の警戒レベルは地図でご確認ください。"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-xs text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">最新情報・速報</span>
      </nav>

      <h2>新着のクマ出没・目撃情報</h2>
      {recent.length > 0 ? (
        <ul className="not-prose space-y-2">
          {recent.map((r, i) => {
            const rel = daysAgoLabel(r.date);
            return (
              <li
                key={`${r.prefName}-${r.cityName}-${r.date}-${i}`}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-semibold text-stone-900">
                    {formatDate(r.date)}
                  </span>
                  {rel && (
                    <span className="text-xs font-medium text-amber-700">
                      {rel}
                    </span>
                  )}
                  <Link
                    href={`/place/${encodeURIComponent(r.prefName)}/${encodeURIComponent(r.cityName)}`}
                    className="text-xs font-semibold text-amber-700 hover:underline"
                  >
                    {r.prefName}
                    {r.cityName}
                  </Link>
                  {r.sectionName && (
                    <span className="text-xs text-stone-500">
                      {r.sectionName}
                    </span>
                  )}
                </div>
                {r.comment && (
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-600">
                    {r.comment}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-sm">現在表示できる最新の出没情報がありません。</p>
      )}

      <p className="not-prose mt-3 text-xs text-stone-500">
        地域を指定して見る場合は{" "}
        <Link href="/place" className="underline hover:text-stone-900">
          都道府県別の一覧
        </Link>
        、全国の警戒レベルは{" "}
        <Link href="/" className="underline hover:text-stone-900">
          クマ出没マップ
        </Link>{" "}
        からご確認ください。
      </p>

      <h2>最新の分析レポート</h2>
      <ul className="not-prose space-y-2">
        {latestReport && (
          <li>
            <Link
              href={`/research/${latestReport.slug}`}
              className="text-sm font-medium text-amber-800 hover:underline"
            >
              {latestReport.title}
            </Link>
          </li>
        )}
        {latestWeekly && (
          <li>
            <Link
              href={`/research/${latestWeekly.slug}`}
              className="text-sm font-medium text-amber-800 hover:underline"
            >
              {latestWeekly.title}
            </Link>
          </li>
        )}
        <li>
          <Link
            href="/research"
            className="text-sm text-stone-600 hover:underline"
          >
            日次・週次・月次レポート一覧 →
          </Link>
        </li>
      </ul>

      {/* 国の最新発表 — コンポーネントが自前の見出しを描画する */}
      <LatestGovAnnouncements limit={3} />
    </PageShell>
  );
}
