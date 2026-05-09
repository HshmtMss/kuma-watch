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

  // 距離ベースで近い 4 市町村を「近隣比較」用に抽出。
  // 残りは下部の「県内の他の市町村」リストに従来通り表示する。
  const haversineKm = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    const R = 6371;
    const toRad = (d: number) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
  };
  const nearestNeighbors = siblingsRaw
    .filter((c) => c.cityName !== muni)
    .map((c) => ({
      ...c,
      distanceKm: haversineKm(
        cell.latCentroid,
        cell.lonCentroid,
        c.latCentroid,
        c.lonCentroid,
      ),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, 4);
  const nearestNeighborSet = new Set(nearestNeighbors.map((n) => n.cityName));
  const siblings = siblingsRaw
    .filter((c) => c.cityName !== muni && !nearestNeighborSet.has(c.cityName))
    .slice(0, 12);

  // 危険度バッジ — count90d を主軸に 4 段階で評価。
  const risk =
    cell.count90d >= 6
      ? {
          level: "high",
          label: "警戒",
          tone: "red",
          headline: `直近 90 日で ${cell.count90d} 件の出没`,
          note: "頻繁に出没しています。出発前に必ず周辺の最新情報を確認してください。",
        }
      : cell.count90d >= 1
        ? {
            level: "med",
            label: "注意",
            tone: "amber",
            headline: `直近 90 日に ${cell.count90d} 件の出没`,
            note: "直近で出没事案があります。早朝・夕方の単独行動は避けてください。",
          }
        : cell.count365d >= 1
          ? {
              level: "low",
              label: "観察",
              tone: "yellow",
              headline: `直近 1 年で ${cell.count365d} 件の出没履歴`,
              note: "90 日以内の事案はありませんが、生息域なので油断せずご準備を。",
            }
          : {
              level: "calm",
              label: "静穏",
              tone: "emerald",
              headline: "直近の出没情報なし",
              note: "目撃情報がない期間ですが、季節や天候で状況は変わります。",
            };
  const riskBg: Record<string, string> = {
    red: "border-red-300 bg-red-50",
    amber: "border-amber-300 bg-amber-50",
    yellow: "border-yellow-300 bg-yellow-50",
    emerald: "border-emerald-300 bg-emerald-50",
  };
  const riskText: Record<string, string> = {
    red: "text-red-900",
    amber: "text-amber-900",
    yellow: "text-yellow-900",
    emerald: "text-emerald-900",
  };
  const riskBadge: Record<string, string> = {
    red: "bg-red-600 text-white",
    amber: "bg-amber-500 text-white",
    yellow: "bg-yellow-500 text-yellow-950",
    emerald: "bg-emerald-600 text-white",
  };

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
  // 過去 365 日 + sectionName あり、を優先して 15 件まで（より具体性のある情報量）。
  const today = Date.now();
  const recentIncidents = mapRecords
    .filter((r) => {
      const t = Date.parse(r.date);
      return Number.isFinite(t) && today - t <= 365 * 86_400_000;
    })
    .slice(0, 15);

  // 地区別件数 — sectionName で集約して件数の多い順に top 10。
  const sectionCounts = new Map<string, number>();
  for (const r of mapRecords) {
    const s = (r.sectionName ?? "").trim();
    if (!s) continue;
    sectionCounts.set(s, (sectionCounts.get(s) ?? 0) + 1);
  }
  const topSections = [...sectionCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // 過去 12 ヶ月の月別件数 — 当月から 11 ヶ月前まで時系列で並べ、グラフ化。
  // 季節性 (秋の急増・冬の減少) を直感的に把握できるようにする。
  const monthly: { label: string; key: string; count: number }[] = [];
  const now = new Date();
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    monthly.push({
      label: `${m}月`,
      key: `${y}-${String(m).padStart(2, "0")}`,
      count: 0,
    });
  }
  for (const r of mapRecords) {
    const k = r.date?.slice(0, 7); // YYYY-MM
    if (!k) continue;
    const bucket = monthly.find((b) => b.key === k);
    if (bucket) bucket.count += 1;
  }
  const monthlyMax = Math.max(1, ...monthly.map((b) => b.count));

  // 季節別アドバイス — 当月が属する季節に応じて、このページで強調する注意点を切替。
  const month = now.getMonth() + 1; // 1-12
  const seasonalAdvice =
    month >= 9 && month <= 11
      ? {
          season: "秋（9〜11月）",
          point:
            "秋はドングリ・果実を求めて活動範囲が広がり、人里まで降りてくる事例が急増します。早朝・夕方の単独行動を避け、複数人で音を出しながら行動してください。",
        }
      : month >= 6 && month <= 8
        ? {
            season: "夏（6〜8月）",
            point:
              "夏は子グマが独立する時期で、若い個体が単独で行動圏を広げ、思わぬ場所で遭遇するリスクがあります。沢沿い・林縁部・果樹園周辺は要警戒。",
          }
        : month >= 3 && month <= 5
          ? {
              season: "春（3〜5月）",
              point:
                "冬眠明けで採食を求めて活動が活発になります。山菜採り・タケノコ採りの時期は人とクマの行動圏が重なるため、入山前に必ず周辺の出没履歴を確認してください。",
            }
          : {
              season: "冬（12〜2月）",
              point:
                "冬期は通常クマは冬眠していますが、暖冬や食料不足の年は冬眠せず徘徊する個体（穴持たず）が報告されます。雪上の足跡・痕跡には注意。",
            };

  // ダイナミック lead — 数値を必ず織り込み、SERP スニペットの具体性も上げる。
  const dynamicLead =
    cell.count90d > 0 && cell.latestDate
      ? `過去 90 日で ${cell.count90d} 件の出没（最新 ${formatDate(cell.latestDate)}）。${pref} ${muni} の警戒レベルを 5km メッシュで確認できます。`
      : cell.count365d > 0 && cell.latestDate
        ? `過去 1 年で ${cell.count365d} 件の出没（最新 ${formatDate(cell.latestDate)}）。${pref} ${muni} の警戒レベルを 5km メッシュで確認できます。`
        : `${pref} ${muni} のクマ出没情報・警戒レベルを 5km メッシュで確認できます。`;

  return (
    <PageShell
      title={`${muni} のクマ出没情報`}
      lead={dynamicLead}
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

      {/* 危険度ヒーローカード — 検索流入したユーザーに「今、危険か？」を 1 秒で答える。
          count90d を主軸に 4 段階で色分けし、最新事案日と一言コメントを併記。 */}
      <div
        className={`not-prose mb-6 rounded-2xl border-2 p-5 ${riskBg[risk.tone]}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${riskBadge[risk.tone]}`}
              >
                {risk.label}
              </span>
              <span className={`text-xs font-medium ${riskText[risk.tone]}`}>
                {muni} 直近の状況
              </span>
            </div>
            <div className={`mt-2 text-lg font-bold ${riskText[risk.tone]}`}>
              {risk.headline}
            </div>
            {cell.latestDate && (
              <div className={`mt-0.5 text-xs ${riskText[risk.tone]}/80`}>
                最新の目撃: {formatDate(cell.latestDate)}
              </div>
            )}
            <p className={`mt-2 text-xs leading-relaxed ${riskText[risk.tone]}`}>
              {risk.note}
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href={mapUrl}
            className="inline-flex items-center gap-1 rounded-full bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800"
          >
            🗺️ 地図で詳細を見る →
          </Link>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(`${pref} ${muni} クマ 出没 site:lg.jp`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
          >
            {muni} 公式情報を検索 ↗
          </a>
        </div>
      </div>

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

      {/* 過去 12 ヶ月の月別件数バーチャート — 季節性を視覚的に把握。
          バー行 + ラベル行 を別 flex にし、each バーに直接 height を当てる。 */}
      <h3>過去 12 ヶ月の月別件数</h3>
      <div className="not-prose my-3 rounded-xl border border-stone-200 bg-white p-4">
        <div className="flex h-32 items-end gap-1.5">
          {monthly.map((b) => {
            const h = monthlyMax > 0 ? (b.count / monthlyMax) * 100 : 0;
            // 0 件は薄い灰色で 4% 高、件あれば最低 8% 確保して視認できるように。
            const heightPct = b.count > 0 ? Math.max(h, 8) : 4;
            return (
              <div
                key={b.key}
                title={`${b.key}: ${b.count}件`}
                className={`flex-1 rounded-t-sm ${
                  b.count > 0 ? "bg-amber-500" : "bg-stone-100"
                }`}
                style={{ height: `${heightPct}%` }}
              />
            );
          })}
        </div>
        <div className="mt-1 flex gap-1.5 text-[10px] text-stone-500">
          {monthly.map((b) => (
            <div key={b.key} className="flex-1 text-center">
              {b.label}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-baseline justify-between border-t border-stone-100 pt-2 text-[11px] text-stone-500">
          <span>過去 12 ヶ月</span>
          <span>
            合計{" "}
            <span className="font-semibold text-stone-800">
              {monthly.reduce((a, b) => a + b.count, 0)}
            </span>{" "}
            件
          </span>
        </div>
      </div>

      {/* 季節別アドバイス — 月によって表示内容を切り替えて鮮度感を出す。 */}
      <div className="not-prose my-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
          <span aria-hidden>🩺</span>
          <span>{seasonalAdvice.season} の注意点（獣医師監修）</span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-emerald-900">
          {seasonalAdvice.point}
        </p>
      </div>

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

      {/* 近隣 4 市町村の比較 — 距離ベースで近い順。登山・通勤など
          「複数地域を見て判断したい」ユーザーニーズに対応。 */}
      {nearestNeighbors.length > 0 && (
        <>
          <h2>{muni} の近隣で出没している市町村</h2>
          <div className="not-prose my-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {nearestNeighbors.map((n) => {
              const isHot = n.count90d > 0;
              return (
                <Link
                  key={n.cityName}
                  href={`/place/${encodeURIComponent(pref)}/${encodeURIComponent(n.cityName)}`}
                  className={`flex flex-col rounded-xl border p-3 transition ${
                    isHot
                      ? "border-amber-300 bg-amber-50 hover:border-amber-500"
                      : "border-stone-200 bg-white hover:border-stone-400"
                  }`}
                >
                  <div className="text-[10px] text-stone-500">
                    距離 {n.distanceKm.toFixed(1)} km
                  </div>
                  <div className="mt-0.5 truncate text-sm font-semibold text-stone-900">
                    {n.cityName}
                  </div>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span
                      className={`text-base font-bold ${
                        isHot ? "text-amber-700" : "text-stone-700"
                      }`}
                    >
                      {n.count90d}
                    </span>
                    <span className="text-[10px] text-stone-500">
                      件 / 過去90日
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}

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

      {/* モバイル限定の sticky CTA。スクロールしても常に「地図を開く」が
          指の届く位置に出る。md 以上ではヒーローカード内のボタンで十分。 */}
      <Link
        href={mapUrl}
        className="not-prose fixed inset-x-3 bottom-3 z-50 flex items-center justify-center gap-2 rounded-full bg-amber-600 py-3.5 text-sm font-bold text-white shadow-2xl ring-1 ring-amber-700 hover:bg-amber-700 sm:hidden print:hidden"
      >
        🗺️ {muni} の警戒レベルマップを開く →
      </Link>
    </PageShell>
  );
}
