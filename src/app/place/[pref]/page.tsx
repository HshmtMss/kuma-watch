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
      lead={`${pref}内 全${totalMuni}市町村のクマ出没情報を整理。直近1年 ${total365d.toLocaleString()} 件 / 直近90日 ${total90d.toLocaleString()} 件 (最終更新 ${latestDate ?? "-"})。`}
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

      <h2>市町村別の出没情報</h2>
      <p className="text-sm text-stone-600">
        全{totalMuni}市町村を一覧表示しています（出没情報 0 件の市町村も含む）。件数の多い順に並んでいます。
      </p>
      <ul className="not-prose grid grid-cols-1 gap-2 sm:grid-cols-2">
        {sortedMunis.map((m) => {
          // 「直近の活動」基準で表示の濃淡を決める。lat/lon 再帰属の結果、
          // 累計は全市町村で > 0 になるが、1 年・90 日が両方 0 なら現状は静か。
          const isActive = m.count365d > 0 || m.count90d > 0;
          return (
          <li key={m.cityCode}>
            <Link
              href={`/place/${encodeURIComponent(pref)}/${encodeURIComponent(m.cityName)}`}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm hover:border-amber-400 hover:bg-amber-50 ${
                isActive
                  ? "border-gray-200 bg-white text-gray-800"
                  : "border-gray-100 bg-gray-50 text-gray-500"
              }`}
            >
              <span className={isActive ? "font-medium" : ""}>
                {m.cityName}
              </span>
              <span className="flex items-baseline gap-1.5 text-xs text-gray-500">
                {/* 直近1年 / 直近90日 の 2 段。累計は古いソースで歪むので外す。
                    値 0 でも淡色チップを残し、市町村間のスケール感を担保。 */}
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
            <ul className="not-prose my-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {prefLandmarks.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/spot/${encodeURIComponent(l.slug)}`}
                    className="block rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm hover:border-amber-400 hover:bg-amber-50"
                  >
                    <div className="font-medium text-stone-900">{l.name}</div>
                    {l.muniName && (
                      <div className="text-[11px] text-stone-500">
                        {l.muniName}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        );
      })()}

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
