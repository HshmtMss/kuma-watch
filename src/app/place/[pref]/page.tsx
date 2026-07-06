import type { Metadata } from "next";
import Link from "next/link";
import { Map } from "lucide-react";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import LatestGovAnnouncements from "@/components/LatestGovAnnouncements";
import { PREF_CODE_TO_NAME } from "@/lib/prefectures";
import {
  getMuniAggregatesByPref,
  getPrefSummary,
} from "@/lib/place-index";
import { buildPrefSeo } from "@/lib/place-seo";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";

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
          count365d: summary.count365d,
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
  const total365d = sortedMunis.reduce((s, m) => s + m.count365d, 0);
  const total90d = sortedMunis.reduce((s, m) => s + m.count90d, 0);

  // 都道府県の代表座標 — 全市町村の重心の平均。
  // 「地図で〇〇を確認する」リンクで全国マップを当該県の位置に開く。
  const prefCenter = sortedMunis.length
    ? {
        lat: sortedMunis.reduce((s, m) => s + m.lat, 0) / sortedMunis.length,
        lon: sortedMunis.reduce((s, m) => s + m.lon, 0) / sortedMunis.length,
      }
    : null;
  const prefMapUrl = prefCenter
    ? `/?lat=${prefCenter.lat.toFixed(4)}&lon=${prefCenter.lon.toFixed(4)}&z=8&label=${encodeURIComponent(pref)}`
    : "/";
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

  // 都道府県を AdministrativeArea として明示。WebPage の about で連結し
  // Google にトピック (都道府県という行政区画) を伝える。
  const canonicalPrefUrl = `${SITE_URL}/place/${encodeURIComponent(pref)}`;
  const prefAreaSchema = {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    "@id": `${canonicalPrefUrl}#area`,
    name: pref,
    address: {
      "@type": "PostalAddress",
      addressRegion: pref,
      addressCountry: "JP",
    },
    ...(prefCenter
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: Number(prefCenter.lat.toFixed(4)),
            longitude: Number(prefCenter.lon.toFixed(4)),
          },
        }
      : {}),
    hasMap: canonicalPrefUrl,
    containedInPlace: {
      "@type": "Country",
      name: "日本",
    },
  };

  const prefWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalPrefUrl,
    url: canonicalPrefUrl,
    name: `${pref}の熊出没情報マップ`,
    about: { "@id": `${canonicalPrefUrl}#area` },
    isPartOf: { "@type": "WebSite", name: "KumaWatch", url: SITE_URL },
    inLanguage: "ja",
  };

  // summary は字レベル集計を元にした値なのでヘッダーには使わず、
  // muni 正規化後の値 (totalMuni / totalCount / latestDate) を採用する。
  void summary;

  return (
    <PageShell
      title={`${pref}の熊出没情報マップ`}
      lead={`${pref}内 全${totalMuni}市町村の熊（クマ）出没情報を整理。直近1年 ${total365d.toLocaleString()} 件 / 直近90日 ${total90d.toLocaleString()} 件 (最終更新 ${latestDate ?? "-"})。`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prefAreaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prefWebPageSchema) }}
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

      <h2>市町村別の出没情報</h2>
      <p className="text-sm text-stone-600">
        全{totalMuni}市町村を一覧表示しています（出没情報 0 件の市町村も含む）。件数の多い順に並んでいます。
      </p>
      {/* 市町村カード — list-none + pl-0 で prose のオレンジマーカーと
          左余白を排除し、カードを h2 のオレンジ下線と同じ横幅まで広げる。
          モバイルは 1 列フル幅、PC（sm+）は 2 列。 */}
      <ul className="not-prose grid list-none grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
        {sortedMunis.map((m) => {
          const isActive = m.count365d > 0 || m.count90d > 0;
          return (
            <li key={m.cityCode}>
              <Link
                href={`/place/${encodeURIComponent(pref)}/${encodeURIComponent(m.cityName)}`}
                className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3 hover:border-amber-400 hover:bg-amber-50 ${
                  isActive
                    ? "border-gray-200 bg-white text-gray-800"
                    : "border-gray-100 bg-gray-50 text-gray-500"
                }`}
              >
                <span
                  className={`text-sm ${isActive ? "font-semibold" : ""}`}
                >
                  {m.cityName}
                </span>
                <span className="flex shrink-0 items-baseline gap-1">
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums ${
                      m.count365d > 0
                        ? "bg-amber-100 text-amber-900"
                        : "bg-stone-100 text-stone-400"
                    }`}
                  >
                    1年 {m.count365d.toLocaleString()}
                  </span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums ${
                      m.count90d > 0
                        ? "bg-red-100 text-red-700"
                        : "bg-stone-100 text-stone-400"
                    }`}
                  >
                    90日 {m.count90d.toLocaleString()}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* 当該県にある観光地・登山口へのクロスリンク。SEO 観点で内部リンク強化と
          ユーザー観点で「次に見たい情報」を提供する 2 役。 */}
      {(() => {
        const prefLandmarks = JAPAN_LANDMARKS.filter((l) => l.prefName === pref);
        if (prefLandmarks.length === 0) return null;
        return (
          <>
            <h2>主要な観光地・登山口</h2>
            <p className="text-sm text-stone-600">
              {pref} 内でクマ出没情報が公開されている主要な登山口・観光地。各ページで周辺 10km の出没傾向と季節別の注意点を確認できます。
            </p>
            {/* 観光地・登山口カード — list-none + pl-0 でマーカーと左余白を排除。
                カードは h2 オレンジ下線と同じ幅まで広げる。 */}
            <ul className="not-prose my-3 grid list-none grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
              {prefLandmarks.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/spot/${encodeURIComponent(l.slug)}`}
                    className="flex items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm hover:border-amber-400 hover:bg-amber-50"
                  >
                    <span className="font-semibold text-stone-900">
                      {l.name}
                    </span>
                    {l.muniName && (
                      <span className="shrink-0 text-[11px] text-stone-500">
                        {l.muniName}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        );
      })()}

      {/* 国の最新発表 — 都道府県ページから政府方針への導線 */}
      <LatestGovAnnouncements limit={3} />

      {/* 使い方・注意事項は読まれにくいので折り畳みに */}
      <details className="not-prose group my-6 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-stone-50 px-5 py-3 text-base font-semibold text-stone-800 marker:hidden [&::-webkit-details-marker]:hidden">
          <span>使い方・注意事項</span>
          <span className="text-stone-400 transition group-open:rotate-180">▼</span>
        </summary>
        <div className="space-y-3 px-5 py-4 text-sm leading-relaxed text-stone-700">
          <p>
            各市町村のリンクから、過去の目撃件数・最新の目撃日・5kmメッシュ単位の警戒レベル・
            最近の出没履歴を確認できます。登山・キャンプ・山菜採りなど {pref} 内でアウトドア活動を
            予定している場合は、出発前の参考にご活用ください。
          </p>
          <p>
            KumaWatch のデータは、環境省の公開情報および各自治体の公式オープンデータを統合したものです。
            あくまで参考情報であり、最新かつ正確な情報は各自治体の公式発表をご確認ください。
          </p>
        </div>
      </details>
      {/* 全国マップを当該県の位置で開く。muni ページの sticky CTA と
          同じトーン（amber-600 fill + 大きめ）に揃え、サイト全体の
          「地図を開く系」ボタンとして整合性を保つ。 */}
      <p className="not-prose mt-6">
        <Link
          href={prefMapUrl}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-sm font-bold text-white shadow-sm ring-1 ring-amber-700 hover:bg-amber-700"
        >
          <Map size={16} aria-hidden />
          {pref} の警戒レベルマップを開く →
        </Link>
      </p>
    </PageShell>
  );
}
