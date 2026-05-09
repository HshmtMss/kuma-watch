import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { PREF_CODE_TO_NAME } from "@/lib/prefectures";
import {
  getPlaceCellsByPref,
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

  const summary = await getPrefSummary(pref);
  // SEO 強化: /place/[pref]/[muni] と同じテンプレで件数 + 最新日 + 獣医師監修。
  const { title, description } = buildPrefSeo(
    pref,
    summary
      ? {
          count: summary.totalCount,
          count90d: summary.count90d,
          latestDate: summary.latestDate,
          muniCount: summary.cityCount,
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

  const [cells, summary] = await Promise.all([
    getPlaceCellsByPref(pref),
    getPrefSummary(pref),
  ]);

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

  return (
    <PageShell
      title={`${pref}のクマ出没予報`}
      lead={
        summary
          ? `${pref}内 ${summary.cityCount} 市町村のクマ出没情報を集約。総目撃 ${summary.totalCount} 件 (過去90日 ${summary.count90d} 件 / 最終更新 ${summary.latestDate ?? "-"})。`
          : `${pref}のクマ出没情報を市町村別に確認できます。`
      }
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
      {cells.length === 0 ? (
        <p>
          現時点で {pref} のクマ出没情報は登録されていません。地図で周辺地域を含めて確認するには
          <Link href="/" className="text-amber-700 underline">
            トップの警戒レベルマップ
          </Link>
          をご利用ください。
        </p>
      ) : (
        <ul className="not-prose grid grid-cols-1 gap-2 sm:grid-cols-2">
          {cells.map((c) => (
            <li key={c.cityName}>
              <Link
                href={`/place/${encodeURIComponent(pref)}/${encodeURIComponent(c.cityName)}`}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:border-amber-400 hover:bg-amber-50"
              >
                <span className="font-medium">{c.cityName}</span>
                <span className="text-xs text-gray-500">
                  {c.count} 件
                  {c.count90d > 0 && (
                    <span className="ml-1 text-red-600">({c.count90d} / 90日)</span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <h2>使い方</h2>
      <p>
        各市町村のリンクから、過去の目撃件数・最新の目撃日・5kmメッシュ単位の警戒レベル・
        最近の出没履歴を確認できます。登山・キャンプ・山菜採りなど {pref} 内でアウトドア活動を
        予定している場合は、出発前の参考にご活用ください。
      </p>
      <h2>注意事項</h2>
      <p>
        KumaWatch のデータは Sharp9110 提供のオープンデータ (CC BY 4.0)、
        環境省の生息域推定、各自治体のオープンデータを統合したものです。あくまで参考情報であり、
        最新かつ正確な情報は各自治体の公式発表をご確認ください。
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
