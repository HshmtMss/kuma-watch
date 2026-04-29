import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { PREF_CODE_TO_NAME } from "@/lib/prefectures";
import {
  getPlaceCell,
  getPlaceCellsByPref,
  getStaticPlaceKeys,
} from "@/lib/place-index";

export const dynamicParams = true;

const PREF_NAMES = new Set(Object.values(PREF_CODE_TO_NAME));
const SITE_URL = "https://kuma-watch.jp";

type Props = { params: Promise<{ pref: string; muni: string }> };

export async function generateStaticParams() {
  const keys = await getStaticPlaceKeys(3);
  return keys.map((k) => ({ pref: k.pref, muni: k.city }));
}

function decode(v: string): string {
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

function formatDate(d: string | null): string {
  if (!d) return "-";
  const t = Date.parse(d);
  if (!Number.isFinite(t)) return d;
  return new Date(t).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pref: rawPref, muni: rawMuni } = await params;
  const pref = decode(rawPref);
  const muni = decode(rawMuni);
  if (!PREF_NAMES.has(pref)) return { title: "ページが見つかりません" };

  const cell = await getPlaceCell(pref, muni);
  const titleBase = `${pref}${muni}のクマ出没情報・危険度マップ`;
  const desc = cell
    ? `${pref}${muni}のクマ出没情報。過去の目撃 ${cell.count} 件 (過去90日 ${cell.count90d} 件)、最新目撃: ${formatDate(cell.latestDate)}。5kmメッシュ単位の危険度・近隣の出没履歴を確認できます。登山・キャンプ前の安全確認に。`
    : `${pref}${muni}のクマ出没情報・危険度を確認。5kmメッシュ単位の予報で登山・キャンプ前の安全確認に。`;
  const path = `/place/${encodeURIComponent(pref)}/${encodeURIComponent(muni)}`;

  return {
    title: titleBase,
    description: desc,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title: `${titleBase}｜KumaWatch`,
      description: desc,
      url: `${SITE_URL}${path}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titleBase,
      description: desc,
    },
  };
}

export default async function MuniPage({ params }: Props) {
  const { pref: rawPref, muni: rawMuni } = await params;
  const pref = decode(rawPref);
  const muni = decode(rawMuni);
  if (!PREF_NAMES.has(pref)) notFound();

  const cell = await getPlaceCell(pref, muni);
  if (!cell) notFound();

  const siblings = (await getPlaceCellsByPref(pref))
    .filter((c) => c.cityName !== muni)
    .slice(0, 12);

  const mapUrl = `/?lat=${cell.latCentroid.toFixed(5)}&lon=${cell.lonCentroid.toFixed(5)}&z=12`;
  const placeUrl = `/place?lat=${cell.latCentroid.toFixed(5)}&lon=${cell.lonCentroid.toFixed(5)}&name=${encodeURIComponent(pref + muni)}`;

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
      {
        "@type": "ListItem",
        position: 3,
        name: muni,
        item: `${SITE_URL}/place/${encodeURIComponent(pref)}/${encodeURIComponent(muni)}`,
      },
    ],
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${pref}${muni}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: pref,
      addressLocality: muni,
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: cell.latCentroid,
      longitude: cell.lonCentroid,
    },
  };

  return (
    <PageShell
      title={`${muni} のクマ出没情報`}
      lead={`${pref} ${muni} のクマ出没情報・危険度を確認できます。`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />

      <div className="not-prose mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-gray-500">総目撃数</div>
          <div className="mt-1 text-xl font-bold text-gray-900">{cell.count}</div>
          <div className="text-[11px] text-gray-400">件</div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-gray-500">過去1年</div>
          <div className="mt-1 text-xl font-bold text-gray-900">{cell.count365d}</div>
          <div className="text-[11px] text-gray-400">件</div>
        </div>
        <div
          className={`rounded-xl border px-3 py-3 text-center ${
            cell.count90d > 0 ? "border-red-200 bg-red-50" : "border-gray-200 bg-white"
          }`}
        >
          <div
            className={`text-xs ${cell.count90d > 0 ? "text-red-700" : "text-gray-500"}`}
          >
            過去90日
          </div>
          <div
            className={`mt-1 text-xl font-bold ${
              cell.count90d > 0 ? "text-red-900" : "text-gray-900"
            }`}
          >
            {cell.count90d}
          </div>
          <div
            className={`text-[11px] ${
              cell.count90d > 0 ? "text-red-500" : "text-gray-400"
            }`}
          >
            件
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-gray-500">最新目撃</div>
          <div className="mt-1 text-sm font-semibold text-gray-900">
            {formatDate(cell.latestDate)}
          </div>
        </div>
      </div>

      <p className="not-prose mb-6 flex flex-wrap gap-2">
        <Link
          href={mapUrl}
          className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
        >
          地図で {muni} の危険度を見る →
        </Link>
        <Link
          href={placeUrl}
          className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
        >
          詳細カードを開く
        </Link>
      </p>

      <h2>{muni} のクマ出没傾向</h2>
      <p>
        {pref}{muni} ではこれまでに <strong>{cell.count} 件</strong> のクマ目撃情報が記録されており、
        うち過去1年は {cell.count365d} 件、過去90日は {cell.count90d} 件です。
        最新の目撃は {formatDate(cell.latestDate)} です。
        各メッシュ (5kmグリッド) ごとの危険度は、過去の出没履歴・季節・時間帯・気象条件を組み合わせて算出されています。
      </p>

      <h2>{muni} で登山・キャンプを予定している方へ</h2>
      <p>
        クマは早朝・夕方・夜間に活動が活発になりやすく、雨上がりや霧の日、
        山菜・果実・木の実が多い秋口は遭遇リスクが高まります。
        出発前に下記をご確認ください:
      </p>
      <ul>
        <li>クマ鈴・ホイッスルなど音の出るものを携帯する</li>
        <li>単独行動を避け、複数人で行動する</li>
        <li>食料・ゴミは密閉して携行・持ち帰る</li>
        <li>クマ撃退スプレーを携行し、使い方を確認しておく</li>
        <li>近隣の自治体公式サイトで最新の出没情報を確認する</li>
      </ul>

      {siblings.length > 0 && (
        <>
          <h2>{pref} 内の他の市町村</h2>
          <ul className="not-prose grid grid-cols-2 gap-2 sm:grid-cols-3">
            {siblings.map((s) => (
              <li key={s.cityName}>
                <Link
                  href={`/place/${encodeURIComponent(pref)}/${encodeURIComponent(s.cityName)}`}
                  className="block rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 hover:border-amber-400 hover:bg-amber-50"
                >
                  <span className="font-medium">{s.cityName}</span>
                  <span className="ml-1 text-gray-400">({s.count})</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="not-prose mt-3 text-xs text-gray-500">
            <Link
              href={`/place/${encodeURIComponent(pref)}`}
              className="underline hover:text-gray-900"
            >
              {pref} の市町村一覧をすべて見る →
            </Link>
          </p>
        </>
      )}

      <h2>データ出典</h2>
      <p>
        KumaWatch は Sharp9110 提供のオープンデータ (CC BY 4.0)、環境省の生息域推定データ、
        各自治体の公開データを統合しています。
        各レコードの出典は <Link href="/sources">出典ページ</Link> で確認できます。
        記載内容はあくまで参考情報です。最新の出没状況は {pref}{muni} の公式発表もあわせてご確認ください。
      </p>
    </PageShell>
  );
}
