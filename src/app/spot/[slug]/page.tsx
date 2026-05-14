import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import MiniSightingsMap from "@/components/MiniSightingsMap";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { getCachedSightings } from "@/lib/sightings-cache";

// dynamicParams=false: 登録済みランドマークのみ。それ以外は 404。
// /spot/[slug] は「高尾山 くま」型の検索受け皿で、対象は手動キュレーション。
export const dynamicParams = false;

const SITE_URL = "https://kuma-watch.jp";
const NEAR_RADIUS_KM = 10;
const RECENT_DAYS = 365;
const SUPERVISION = "獣医師監修";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return JAPAN_LANDMARKS.map((l) => ({ slug: l.slug }));
}

function decode(v: string): string {
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function formatDate(iso: string | null): string {
  if (!iso) return "-";
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return iso;
  return new Date(t).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatMonthDay(iso: string | null): string | null {
  if (!iso) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return null;
  return `${Number(m[2])}月${Number(m[3])}日`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decode(rawSlug);
  const landmark = JAPAN_LANDMARKS.find((l) => l.slug === slug);
  if (!landmark) return { title: "ページが見つかりません" };

  // 周辺出没件数を概算
  const sightings = await getCachedSightings();
  const cutoff90 = Date.now() - 90 * 86_400_000;
  let count90 = 0;
  let count365 = 0;
  let latestDate: string | null = null;
  for (const s of sightings) {
    if (!s.date) continue;
    const d = haversineKm(landmark.lat, landmark.lon, s.lat, s.lon);
    if (d > NEAR_RADIUS_KM) continue;
    const t = Date.parse(s.date);
    if (!Number.isFinite(t)) continue;
    if (Date.now() - t > RECENT_DAYS * 86_400_000) continue;
    count365++;
    if (t >= cutoff90) count90++;
    if (!latestDate || s.date > latestDate) latestDate = s.date;
  }

  const md = formatMonthDay(latestDate);
  const fragments: string[] = [];
  if (count365 > 0) fragments.push(`周辺${count365}件`);
  if (md && count90 > 0) fragments.push(`最新${md}`);
  const stat = fragments.length > 0 ? `【${fragments.join("・")}】` : "";

  const title = `${landmark.name}周辺のクマ出没情報${stat}${SUPERVISION}`;
  const recencyClause =
    count90 > 0 && md
      ? `過去 90 日で ${count90} 件、最新は ${md}`
      : count365 > 0
        ? `過去 1 年で ${count365} 件`
        : "周辺 10 km の出没情報なし";
  const description = `${landmark.name}（${landmark.prefName}${landmark.muniName ?? ""}）周辺 10 km のクマ出没情報を集約。${recencyClause}。${SUPERVISION}・無料・登録不要。登山・キャンプ・観光前の安全確認に。`;
  const path = `/spot/${encodeURIComponent(slug)}`;

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

const CATEGORY_LABEL: Record<string, string> = {
  mountain: "山",
  national_park: "国立公園・自然保護地",
  resort: "観光・温泉地",
  trailhead: "登山口・自然散策地",
  lake: "湖",
};

export default async function SpotPage({ params }: Props) {
  const { slug: rawSlug } = await params;
  const slug = decode(rawSlug);
  const landmark = JAPAN_LANDMARKS.find((l) => l.slug === slug);
  if (!landmark) notFound();

  const sightings = await getCachedSightings();
  const today = Date.now();
  const cutoff90 = today - 90 * 86_400_000;
  const cutoff365 = today - 365 * 86_400_000;

  // 周辺 10km の事案を抽出 + ソート (距離・日付)
  type NearSight = {
    id: string | number;
    date: string;
    cityName: string;
    sectionName: string;
    comment: string;
    lat: number;
    lon: number;
    distanceKm: number;
    isOfficial?: boolean;
    sourceUrl?: string;
  };
  const nearby: NearSight[] = [];
  let count90 = 0;
  let count365 = 0;
  let latestDate: string | null = null;
  for (const s of sightings) {
    if (!s.date) continue;
    const d = haversineKm(landmark.lat, landmark.lon, s.lat, s.lon);
    if (d > NEAR_RADIUS_KM) continue;
    const t = Date.parse(s.date);
    if (!Number.isFinite(t)) continue;
    if (t < cutoff365) continue;
    nearby.push({
      id: s.id,
      date: s.date,
      cityName: s.cityName ?? "",
      sectionName: s.sectionName ?? "",
      comment: s.comment ?? "",
      lat: s.lat,
      lon: s.lon,
      distanceKm: d,
      isOfficial: s.isOfficial,
      sourceUrl: s.sourceUrl,
    });
    count365++;
    if (t >= cutoff90) count90++;
    if (!latestDate || s.date > latestDate) latestDate = s.date;
  }
  nearby.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.distanceKm - b.distanceKm));

  // 含まれる市町村を抽出 (近隣 10km 内に出没のある市町村)
  const involvedMunis = new Map<string, number>();
  for (const n of nearby) {
    if (!n.cityName) continue;
    involvedMunis.set(n.cityName, (involvedMunis.get(n.cityName) ?? 0) + 1);
  }
  const topMunis = [...involvedMunis.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  // 危険度評価 (周辺 10km の count90 ベース)
  const risk =
    count90 >= 10
      ? { tone: "red", label: "警戒", headline: `周辺 10 km で過去 90 日に ${count90} 件の出没` }
      : count90 >= 1
        ? { tone: "amber", label: "注意", headline: `周辺 10 km で過去 90 日に ${count90} 件の出没` }
        : count365 >= 1
          ? { tone: "yellow", label: "観察", headline: `周辺 10 km で過去 1 年に ${count365} 件の出没履歴` }
          : { tone: "emerald", label: "静穏", headline: "周辺 10 km で出没情報なし" };
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

  // 季節別アドバイス
  const month = new Date().getMonth() + 1;
  const seasonalAdvice =
    month >= 9 && month <= 11
      ? { season: "秋（9〜11月）", point: "秋はドングリ・果実を求めて活動範囲が広がります。早朝・夕方の単独行動を避け、複数人で音を出しながら行動してください。" }
      : month >= 6 && month <= 8
        ? { season: "夏（6〜8月）", point: "夏は子グマが独立する時期で、若い個体が単独で行動圏を広げます。沢沿い・林縁部・果樹園周辺は要警戒。" }
        : month >= 3 && month <= 5
          ? { season: "春（3〜5月）", point: "冬眠明けで採食を求めて活動が活発化。山菜採り・タケノコ採りの時期は要注意。入山前に必ず周辺の出没履歴を確認してください。" }
          : { season: "冬（12〜2月）", point: "冬期は通常クマは冬眠していますが、暖冬の年は冬眠せず徘徊する個体（穴持たず）が報告されます。雪上の足跡・痕跡には注意。" };

  // 地図に飛ぶときに地点名も渡す。トップの選択カードに「富士山」など名前が出るので、
  // どこから来たかが視覚的に保たれ「連続性」が出る。
  const mapUrl = `/?lat=${landmark.lat.toFixed(5)}&lon=${landmark.lon.toFixed(5)}&label=${encodeURIComponent(landmark.name)}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: landmark.prefName, item: `${SITE_URL}/place/${encodeURIComponent(landmark.prefName)}` },
      { "@type": "ListItem", position: 3, name: landmark.name, item: `${SITE_URL}/spot/${encodeURIComponent(slug)}` },
    ],
  };

  // 観光地・登山口の構造化データ。schema.org TouristAttraction は Google が
  // 地名 + 「クマ 出没」系クエリに対するナレッジパネル候補として読みやすい。
  // mountain カテゴリは Mountain type にすると Google でハイク系として優遇される傾向。
  const placeType =
    landmark.category === "mountain"
      ? "Mountain"
      : landmark.category === "lake"
        ? "BodyOfWater"
        : "TouristAttraction";
  const placeSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": placeType,
    name: landmark.name,
    alternateName: landmark.altNames ?? [],
    description: landmark.blurb,
    url: `${SITE_URL}/spot/${encodeURIComponent(slug)}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: landmark.lat,
      longitude: landmark.lon,
      addressCountry: "JP",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      addressRegion: landmark.prefName,
      addressLocality: landmark.muniName,
    },
    isAccessibleForFree: true,
    publicAccess: true,
  };
  if (landmark.imageUrl) placeSchema.image = landmark.imageUrl;

  const dynamicLead =
    count90 > 0 && latestDate
      ? `${landmark.name}周辺 10 km で過去 90 日に ${count90} 件の出没（最新 ${formatDate(latestDate)}）。${SUPERVISION}・無料で警戒レベルを確認できます。`
      : count365 > 0 && latestDate
        ? `${landmark.name}周辺 10 km で過去 1 年に ${count365} 件の出没（最新 ${formatDate(latestDate)}）。${SUPERVISION}・無料で警戒レベルを確認できます。`
        : `${landmark.name}（${landmark.prefName}）周辺のクマ出没情報。${SUPERVISION}・無料で確認できます。`;

  return (
    <PageShell title={`${landmark.name}周辺のクマ出没情報`} lead={dynamicLead}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />

      {/* パンくず */}
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-xs text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">ホーム</Link>
        <span>›</span>
        <Link href="/spot" className="hover:text-stone-900">観光地</Link>
        <span>›</span>
        <Link href={`/place/${encodeURIComponent(landmark.prefName)}`} className="hover:text-stone-900">{landmark.prefName}</Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">{landmark.name}</span>
      </nav>

      {/* ヒーロー画像 (Wikipedia REST 由来 / CC BY-SA 4.0 等) */}
      {landmark.imageUrl && (
        <figure className="not-prose mb-5 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={landmark.imageUrl}
              alt={`${landmark.name}の写真`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          <figcaption className="border-t border-stone-200 bg-white px-3 py-2 text-[11px] text-stone-500">
            出典: Wikipedia「
            <a
              href={`https://ja.wikipedia.org/wiki/${encodeURIComponent(landmark.imageCredit ?? landmark.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              {landmark.imageCredit ?? landmark.name}
            </a>
            」(CC BY-SA / public domain)
          </figcaption>
        </figure>
      )}

      {/* 危険度ヒーローカード */}
      <div className={`not-prose mb-6 rounded-2xl border-2 p-5 ${riskBg[risk.tone]}`}>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${riskBadge[risk.tone]}`}>
            {risk.label}
          </span>
          <span className={`text-xs font-medium ${riskText[risk.tone]}`}>
            {landmark.name} 周辺 10 km の状況
          </span>
        </div>
        <div className={`mt-2 text-lg font-bold ${riskText[risk.tone]}`}>
          {risk.headline}
        </div>
        {latestDate && (
          <div className={`mt-0.5 text-xs ${riskText[risk.tone]}/80`}>
            最新の目撃: {formatDate(latestDate)}
          </div>
        )}
        <div className="mt-3">
          <Link
            href={mapUrl}
            className="inline-flex items-center gap-1 rounded-full bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800"
          >
            🗺️ 地図で {landmark.name} を見る →
          </Link>
        </div>
      </div>

      {/* ランドマーク紹介 — 分類・緯度経度は一般ユーザに不要なため省略。所在のみ表示。 */}
      <h2>{landmark.name}について</h2>
      <p>{landmark.blurb}</p>
      <p className="not-prose my-3 text-sm text-stone-600">
        <span className="text-stone-500">所在: </span>
        <span className="font-semibold text-stone-900">
          {landmark.prefName}
          {landmark.muniName ? ` ${landmark.muniName}` : ""}
        </span>
      </p>

      {/* 周辺マップ */}
      <h2>{landmark.name} 周辺の目撃マップ</h2>
      <p className="text-xs text-stone-500">
        赤いピンが過去 90 日以内、グレーが 1 年以内の目撃。ピンをタップすると日付や場所が表示されます。
      </p>
      <div className="not-prose mb-3">
        <MiniSightingsMap
          centerLat={landmark.lat}
          centerLon={landmark.lon}
          records={nearby.slice(0, 60).map((n) => ({
            lat: n.lat,
            lon: n.lon,
            date: n.date,
            sectionName: n.sectionName,
          }))}
          zoom={11}
        />
      </div>
      <p className="not-prose mb-6 text-xs text-stone-500">
        中央の黄色マークが {landmark.name} の代表地点。半径 10 km 以内の出没のみ表示。
      </p>

      {/* 統計 */}
      <h2>{landmark.name} 周辺の出没統計</h2>
      <div className="not-prose my-3 grid grid-cols-3 gap-2 sm:grid-cols-3">
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">過去90日</div>
          <div className={`mt-1 text-xl font-bold ${count90 > 0 ? "text-amber-700" : "text-stone-700"}`}>{count90}</div>
          <div className="text-[10px] text-stone-400">件</div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">過去1年</div>
          <div className="mt-1 text-xl font-bold text-stone-900">{count365}</div>
          <div className="text-[10px] text-stone-400">件</div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">最新目撃</div>
          <div className="mt-1 text-sm font-semibold text-stone-900">{latestDate ? formatDate(latestDate) : "-"}</div>
        </div>
      </div>

      {/* 季節別アドバイス */}
      <div className="not-prose my-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
          <span aria-hidden>🩺</span>
          <span>{seasonalAdvice.season} の注意点（獣医師監修）</span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-emerald-900">{seasonalAdvice.point}</p>
      </div>

      {/* 最近の出没事案 */}
      {nearby.length > 0 && (
        <>
          <h2>{landmark.name} 周辺の最近の出没事案</h2>
          <ul className="not-prose space-y-2">
            {nearby.slice(0, 12).map((r, i) => (
              <li
                key={`${r.date}-${i}`}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-semibold text-stone-900">{formatDate(r.date)}</span>
                  <span className="text-xs text-stone-500">
                    {r.distanceKm.toFixed(1)} km / {r.cityName || "—"}
                    {r.sectionName ? ` ${r.sectionName}` : ""}
                  </span>
                </div>
                {r.comment && (
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-600">{r.comment}</p>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* 含まれる市町村 */}
      {topMunis.length > 0 && (
        <>
          <h2>{landmark.name} 周辺で出没のあった市町村</h2>
          <div className="not-prose my-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {topMunis.map(([city, n]) => (
              <Link
                key={city}
                href={`/place/${encodeURIComponent(landmark.prefName)}/${encodeURIComponent(city)}`}
                className="block rounded-lg border border-stone-200 bg-white p-3 hover:border-amber-400 hover:bg-amber-50/40"
              >
                <div className="text-sm font-semibold text-stone-900">{city}</div>
                <div className="text-[11px] text-stone-500">{n} 件</div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* 戻り導線 — ユーザーが「観光地一覧に戻る」を見失わないよう、
          目立つピル状リンクで本文末尾に明示。 */}
      <div className="not-prose mt-8">
        <Link
          href="/spot"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 shadow-sm hover:border-amber-400 hover:bg-amber-50"
        >
          <span aria-hidden>←</span>
          観光地一覧に戻る
        </Link>
      </div>

      {/* スティッキー CTA — フッターと被らないように本文末尾にスペーサーを置く。 */}
      <div className="not-prose h-20 sm:hidden" aria-hidden />
      <Link
        href={mapUrl}
        className="not-prose fixed inset-x-3 bottom-3 z-50 flex items-center justify-center gap-2 rounded-full bg-amber-600 py-3.5 text-sm font-bold text-white shadow-2xl ring-1 ring-amber-700 hover:bg-amber-700 sm:hidden print:hidden"
      >
        🗺️ {landmark.name} の警戒レベルマップを開く →
      </Link>
    </PageShell>
  );
}
