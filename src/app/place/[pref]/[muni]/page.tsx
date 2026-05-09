import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import MiniSightingsMap from "@/components/MiniSightingsMap";
import { PREF_CODE_TO_NAME } from "@/lib/prefectures";
import {
  getPlaceCell,
  getPlaceCellsByPref,
  getRecordsForPlace,
  getStaticPlaceKeys,
} from "@/lib/place-index";
import { buildMuniSeo } from "@/lib/place-seo";

// 出没データに存在する市町村のみを許可 (getStaticPlaceKeys で count >= 3)。
// それ以外のパスは Next.js が即 404 を返す。
// dynamicParams=true だと、データに無い市町村で叩かれた際に SSR が走って
// 19MB の sightings.json を読み込もうとし、コールドスタート時に
// Hobby の 10s タイムアウトを超えて 5xx が返ることがあるため。
// (Search Console で札幌市・盛岡市等のサーバーエラーとして検出された)
export const dynamicParams = false;

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
  // SEO 強化: 件数 + 最新日 + 獣医師監修 + ブランド名で
  // 「具体性 × 鮮度 × 信頼性」を検索結果に表示する。
  const { title, description } = buildMuniSeo(pref, muni, cell);
  const path = `/place/${encodeURIComponent(pref)}/${encodeURIComponent(muni)}`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

  const [siblingsRaw, mapRecords] = await Promise.all([
    getPlaceCellsByPref(pref),
    getRecordsForPlace(pref, muni, 60),
  ]);
  const siblings = siblingsRaw.filter((c) => c.cityName !== muni).slice(0, 12);

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

  // 最近の出没事案 — mapRecords は date desc 済み。
  // 過去 365 日 + sectionName あり、を優先して 8 件まで。
  const today = Date.now();
  const recentIncidents = mapRecords
    .filter((r) => {
      const t = Date.parse(r.date);
      return Number.isFinite(t) && today - t <= 365 * 86_400_000;
    })
    .slice(0, 8);

  // 地区別件数 — sectionName で集約して件数の多い順に top 5。
  // 「○○市 ○○町 クマ」のような長尾検索の受け皿になる。
  const sectionCounts = new Map<string, number>();
  for (const r of mapRecords) {
    const s = (r.sectionName ?? "").trim();
    if (!s) continue;
    sectionCounts.set(s, (sectionCounts.get(s) ?? 0) + 1);
  }
  const topSections = [...sectionCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <PageShell
      title={`${muni} のクマ出没情報`}
      lead={`${pref} ${muni} のクマ出没情報・警戒レベルを確認できます。`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />

      {/* 視認できるパンくずリスト。SEO 上の breadcrumb は既に JSON-LD にあるが、
          ユーザーが「県トップへ戻る」「ホームへ戻る」を直感操作できるよう本文にも置く */}
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-xs text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <Link
          href={`/place/${encodeURIComponent(pref)}`}
          className="hover:text-stone-900"
        >
          {pref}
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">{muni}</span>
      </nav>

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

      <h2>{muni} 周辺の目撃マップ</h2>
      <div className="not-prose mb-3">
        <MiniSightingsMap
          centerLat={cell.latCentroid}
          centerLon={cell.lonCentroid}
          records={mapRecords}
          zoom={11}
        />
      </div>
      <p className="not-prose mb-6 text-xs text-gray-500">
        赤いピンが過去90日の目撃、灰色は過去1年以上前の記録です。中央の黄色いマークは {muni} の代表地点。
      </p>

      <p className="not-prose mb-6 flex flex-wrap gap-2">
        <Link
          href={mapUrl}
          className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
        >
          5kmメッシュの警戒レベルマップを開く →
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
        各メッシュ (5kmグリッド) ごとの警戒レベルは、過去の出没履歴・季節・時間帯・気象条件を組み合わせて算出されています。
      </p>

      {/* 最近の出没事案 — 具体的な日付・地区の文字列が長尾 SEO に効く。
          コメントが空なら sectionName を表示、それも無ければ省略。 */}
      {recentIncidents.length > 0 && (
        <>
          <h2>{muni} の最近の出没事案</h2>
          <ul className="not-prose space-y-2">
            {recentIncidents.map((r, i) => (
              <li
                key={`${r.date}-${i}`}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-semibold text-stone-900">
                    {formatDate(r.date)}
                  </span>
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
            ))}
          </ul>
          <p className="not-prose mt-2 text-xs text-stone-500">
            最新の事案は{" "}
            <Link href="/research" className="underline hover:text-stone-900">
              日次レポート
            </Link>
            でも詳細を解説しています。
          </p>
        </>
      )}

      {/* 地区別件数 — 「○○市 ○○町 クマ」のような長尾検索の受け皿。
          全件 0 件の地区は出さない。 */}
      {topSections.length > 0 && (
        <>
          <h2>{muni} の地区別 出没件数</h2>
          <p className="text-sm">
            出没件数の多い地区を上位から {topSections.length} 件表示しています。
            出発前にお住まい・目的地周辺の地区名と照らし合わせてください。
          </p>
          <div className="not-prose my-3 overflow-hidden rounded-xl border border-stone-200 bg-white">
            <ul className="divide-y divide-stone-200">
              {topSections.map(([section, n]) => (
                <li
                  key={section}
                  className="flex items-baseline justify-between gap-3 px-3 py-2.5 text-sm"
                >
                  <span className="text-stone-800">{section}</span>
                  <span className="shrink-0 tabular-nums text-stone-500">
                    {n} 件
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <h2>{muni} で登山・キャンプを予定している方へ</h2>
      <p>
        クマは早朝・夕方・夜間に活動が活発になりやすく、雨上がりや霧の日、
        山菜・果実・木の実が多い秋口は遭遇リスクが高まります。
        出発前に下記をご確認ください:
      </p>
      <ul>
        <li>
          クマ鈴・ホイッスルなど音の出るものを携帯する (
          <Link href="/articles/bear-bell">クマ鈴は本当に効果がある?</Link>)
        </li>
        <li>単独行動を避け、複数人で行動する</li>
        <li>食料・ゴミは密閉して携行・持ち帰る</li>
        <li>
          クマ撃退スプレーを携行し、使い方を確認しておく (
          <Link href="/articles/bear-spray">スプレーの選び方と使い方</Link>)
        </li>
        <li>
          遭遇したときの距離別の対処を覚える (
          <Link href="/articles/encounter">クマに遭遇したらどうする</Link>)
        </li>
        <li>近隣の自治体公式サイトで最新の出没情報を確認する</li>
      </ul>

      <h2>あわせて読みたい</h2>
      <ul className="not-prose grid grid-cols-1 gap-2 sm:grid-cols-2">
        <li>
          <Link
            href="/articles/encounter"
            className="block rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 hover:border-amber-400 hover:bg-amber-50"
          >
            <span className="font-medium">クマに遭遇したら</span>
            <span className="ml-1 text-gray-500">距離別の正しい対処</span>
          </Link>
        </li>
        <li>
          <Link
            href="/articles/autumn"
            className="block rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 hover:border-amber-400 hover:bg-amber-50"
          >
            <span className="font-medium">秋のクマ対策</span>
            <span className="ml-1 text-gray-500">なぜ秋が最も危険なのか</span>
          </Link>
        </li>
        <li>
          <Link
            href="/articles/bear-spray"
            className="block rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 hover:border-amber-400 hover:bg-amber-50"
          >
            <span className="font-medium">クマよけスプレー</span>
            <span className="ml-1 text-gray-500">使い方と選び方</span>
          </Link>
        </li>
        <li>
          <Link
            href="/articles/species-difference"
            className="block rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 hover:border-amber-400 hover:bg-amber-50"
          >
            <span className="font-medium">ツキノワグマとヒグマ</span>
            <span className="ml-1 text-gray-500">行動・対処の違い</span>
          </Link>
        </li>
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
        各レコードの出典は <Link href="/credits">出典・ライセンス</Link> で確認できます。
        記載内容はあくまで参考情報です。最新の出没状況は {pref}{muni} の公式発表もあわせてご確認ください。
      </p>
    </PageShell>
  );
}
