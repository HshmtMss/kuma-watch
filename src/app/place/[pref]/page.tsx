import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { PREF_CODE_TO_NAME } from "@/lib/prefectures";
import {
  getMuniAggregatesByPref,
  getPrefSummary,
} from "@/lib/place-index";
import { buildPrefSeo } from "@/lib/place-seo";

// 47 都道府県のみを許可。それ以外のパスは Next.js が即 404 を返す。
// dynamicParams=true だと、未対応の文字列で叩かれた際に SSR が走って
// 19MB の sightings.json を読み込もうとし、コールドスタート時に
// Hobby の 10s タイムアウトを超えて 5xx が返ることがあるため。
export const dynamicParams = false;

const PREF_NAMES = new Set(Object.values(PREF_CODE_TO_NAME));
const SITE_URL = "https://kuma-watch.jp";

type Props = { params: Promise<{ pref: string }> };

export async function generateStaticParams() {
  return Object.values(PREF_CODE_TO_NAME).map((p) => ({ pref: p }));
}

function decode(v: string): string {
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pref: rawPref } = await params;
  const pref = decode(rawPref);
  if (!PREF_NAMES.has(pref)) return { title: "ページが見つかりません" };

  const [summary, munis] = await Promise.all([
    getPrefSummary(pref),
    getMuniAggregatesByPref(pref),
  ]);
  // SEO 強化: /place/[pref]/[muni] と同じテンプレで件数 + 最新日 + 獣医師監修。
  // muniCount はマスターベースの実市町村数を使う (summary.cityCount は字レベル集計の数)。
  const { title, description } = buildPrefSeo(
    pref,
    summary
      ? {
          count: summary.totalCount,
          count90d: summary.count90d,
          latestDate: summary.latestDate,
          muniCount: munis.length,
        }
      : undefined,
  );

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/place/${encodeURIComponent(pref)}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/place/${encodeURIComponent(pref)}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PrefPage({ params }: Props) {
  const { pref: rawPref } = await params;
  const pref = decode(rawPref);
  if (!PREF_NAMES.has(pref)) notFound();

  const [munis, summary] = await Promise.all([
    getMuniAggregatesByPref(pref),
    getPrefSummary(pref),
  ]);
  // 件数の多い順 → 同件数は名前順 (ja)。0 件市町村は最後にまとめる。
  const sortedMunis = [...munis].sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.cityName.localeCompare(b.cityName, "ja");
  });
  const totalMuni = sortedMunis.length;
  const muniWithSightings = sortedMunis.filter((m) => m.count > 0).length;
  const totalCount = sortedMunis.reduce((s, m) => s + m.count, 0);
  const total90d = sortedMunis.reduce((s, m) => s + m.count90d, 0);
  const latestDate = sortedMunis.reduce<string | null>(
    (best, m) => (m.latestDate && (!best || m.latestDate > best) ? m.latestDate : best),
    null,
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: pref,
        item: `${SITE_URL}/place/${encodeURIComponent(pref)}`,
      },
    ],
  };

  // summary は字レベル集計を元にした値なのでヘッダーには使わず、
  // muni 正規化後の値 (totalMuni / totalCount / latestDate) を採用する。
  void summary;

  return (
    <PageShell
      title={`${pref}のクマ出没予報`}
      lead={`${pref}内 全${totalMuni}市町村のクマ出没情報を整理。総目撃 ${totalCount.toLocaleString()} 件 / 過去90日 ${total90d.toLocaleString()} 件 / うち${muniWithSightings}市町村で目撃あり (最終更新 ${latestDate ?? "-"})。`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 視認できるパンくずリスト。SEO 上の breadcrumb は JSON-LD にあるが、
          ユーザーが「ホームへ戻る」を直感操作できるよう本文にも置く */}
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-xs text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <Link href="/place" className="hover:text-stone-900">
          都道府県別
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">{pref}</span>
      </nav>

      <h2>{pref}内の市町村別 出没情報</h2>
      <p className="text-sm text-stone-600">
        全{totalMuni}市町村を一覧表示しています（出没情報 0 件の市町村も含む）。件数の多い順に並んでいます。
      </p>
      <ul className="not-prose grid grid-cols-1 gap-2 sm:grid-cols-2">
        {sortedMunis.map((m) => (
          <li key={m.cityCode}>
            <Link
              href={`/place/${encodeURIComponent(pref)}/${encodeURIComponent(m.cityName)}`}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm hover:border-amber-400 hover:bg-amber-50 ${
                m.count > 0
                  ? "border-gray-200 bg-white text-gray-800"
                  : "border-gray-100 bg-gray-50 text-gray-500"
              }`}
            >
              <span className={m.count > 0 ? "font-medium" : ""}>
                {m.cityName}
              </span>
              <span className="text-xs text-gray-500">
                {m.count === 0 ? (
                  <span className="text-gray-400">0 件</span>
                ) : (
                  <>
                    {m.count.toLocaleString()} 件
                    {m.count90d > 0 && (
                      <span className="ml-1 text-red-600">
                        ({m.count90d} / 90日)
                      </span>
                    )}
                  </>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <h2>使い方</h2>
      <p>
        各市町村のリンクから、過去の目撃件数・最新の目撃日・5kmメッシュ単位の警戒レベル・
        最近の出没履歴を確認できます。登山・キャンプ・山菜採りなど {pref} 内でアウトドア活動を
        予定している場合は、出発前の参考にご活用ください。
      </p>
      <h2>注意事項</h2>
      <p>
        KumaWatch のデータは、環境省の公開情報および各自治体の公式オープンデータを統合したものです。
        あくまで参考情報であり、最新かつ正確な情報は各自治体の公式発表をご確認ください。
      </p>
      <p className="not-prose mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
        >
          地図で {pref} を確認する →
        </Link>
      </p>
    </PageShell>
  );
}
