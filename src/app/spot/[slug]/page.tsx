import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  BellRing,
  PawPrint,
  Landmark,
  Users,
  Map as MapIcon,
  ChartColumn,
} from "lucide-react";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import SightingsMapBlock from "@/components/SightingsMapBlock";
import SeasonalAdvice from "@/components/SeasonalAdvice";
import { getHabitatNote } from "@/lib/place-content";
import RiskBanner from "@/components/RiskBanner";
import type { RiskTone } from "@/lib/risk";
import NotifyBlock from "@/components/NotifyBlock";
import BearGearAffiliate from "@/components/BearGearAffiliate";
import OenCard from "@/components/OenCard";
import SpotSeasonGuide from "@/components/SpotSeasonGuide";
import { buildSpotSeasonGuide } from "@/lib/spot-season";
import { isSpotPushReleased } from "@/lib/push-flag";
import { JAPAN_LANDMARKS, PREBUILD_SPOT_SLUGS } from "@/data/japan-landmarks";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";
import { getCachedSightings } from "@/lib/sightings-cache";
import { getMuniOfficialLink } from "@/data/muni-official-links";
import { getMuniMessage, type MuniMessage } from "@/data/muni-messages";
import { placeHrefForSighting } from "@/lib/muni-name";
import { jstToday, jstDaysAgo } from "@/lib/jst-date";
import { buildSeasonalModel, forecastArea, BAND_LABEL } from "@/lib/forecast";

// dynamicParams=true: 事前生成は手キュレーション分(日本語スラッグ・下記 generateStaticParams)
// のみ。OSM 自動収集の生成スポットは **ローマ字(ASCII)スラッグ** にしてあり(assemble で変換)、
// オンデマンド ISR で描画する。
//
// 背景: 日本語スラッグをオンデマンド生成すると Vercel の ISR レスポンスの `x-next-cache-tags`
// ヘッダにデコード済み日本語が入り Node が「Invalid character」で例外 → 500 になる
// (2026-07-19 発覚)。以前はこれを避けるため全件を事前生成していたが、スポットが1万件超で
// ビルドがリソース上限に達し失敗するようになった(2026-07-21)。そこで生成スポットの
// スラッグをローマ字化=ASCII にして本バグ自体を回避し、オンデマンド ISR に戻すことで
// (a)件数上限を撤廃 (b)ビルドを件数非依存で高速化 の両方を得る。日本語スラッグを持つのは
// 事前生成される手キュレーション分だけなのでオンデマンド経路に日本語は乗らない。
// 旧日本語スラッグ→新ローマ字スラッグは proxy.ts が spot-slug-redirects.json で 308 転送。
export const dynamicParams = true;

// ISR 再検証間隔(秒)。周辺出没件数は 1 日 2 回更新のため 6 時間で十分。
// リテラルでないと静的解析されない(21600 = 6h)。
export const revalidate = 21600;

const SITE_URL = "https://kuma-watch.jp";
const NEAR_RADIUS_KM = 10;
const RECENT_DAYS = 365;
const SUPERVISION = "獣医師監修";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  // 事前生成するのは手キュレーション分(日本語スラッグ)のみ。これらは元々 SSG で 200 の
  // 実績があり、かつオンデマンド経路に日本語スラッグを乗せないための隔離でもある。
  // 生成スポット(ローマ字スラッグ)は dynamicParams=true でオンデマンド ISR。
  return PREBUILD_SPOT_SLUGS.map((slug) => ({ slug }));
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
  const today = jstToday();
  const cutoff90 = jstDaysAgo(90);
  const cutoff365 = jstDaysAgo(RECENT_DAYS);
  let count90 = 0;
  let count365 = 0;
  let latestDate: string | null = null;
  for (const s of sightings) {
    if (!s.date || s.date > today) continue;
    const d = haversineKm(landmark.lat, landmark.lon, s.lat, s.lon);
    if (d > NEAR_RADIUS_KM) continue;
    if (s.date < cutoff365) continue;
    count365++;
    if (s.date >= cutoff90) count90++;
    if (!latestDate || s.date > latestDate) latestDate = s.date;
  }

  const md = formatMonthDay(latestDate);
  const fragments: string[] = [];
  if (count365 > 0) fragments.push(`周辺${count365}件`);
  if (md && count90 > 0) fragments.push(`最新${md}`);
  const stat = fragments.length > 0 ? `【${fragments.join("・")}】` : "";

  // SC 上位クエリ「○○ 熊 出没マップ」を意識して「熊出没情報マップ」表記に統一。
  // 旧実装はセパレータ無しで「クマ出没情報獣医師監修」と続いていたバグも合わせて修正。
  const title = `${landmark.name}周辺の熊出没情報マップ${stat}｜${SUPERVISION}`;
  const recencyClause =
    count90 > 0 && md
      ? `過去 90 日で ${count90} 件、最新は ${md}`
      : count365 > 0
        ? `過去 1 年で ${count365} 件`
        : "周辺 10 km の出没情報なし";
  // description は「熊（クマ）」併記でカナ表記のクエリも吸収する。
  const description = `${landmark.name}（${landmark.prefName}${landmark.muniName ?? ""}）周辺 10 km の熊（クマ）出没情報を集約。${recencyClause}。${SUPERVISION}・無料・登録不要。登山・キャンプ・観光前の安全確認に。`;
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

export default async function SpotPage({ params }: Props) {
  const { slug: rawSlug } = await params;
  const slug = decode(rawSlug);
  const landmark = JAPAN_LANDMARKS.find((l) => l.slug === slug);
  if (!landmark) notFound();

  const sightings = await getCachedSightings();
  const today = jstToday();
  const cutoff90 = jstDaysAgo(90);
  const cutoff365 = jstDaysAgo(365);

  // 周辺 10km の事案を抽出 + ソート (距離・日付)
  type NearSight = {
    id: string | number;
    date: string;
    prefName: string;
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
  // 予測用: 全国の全期間日付（季節シェイプ用）と、当該 10km 圏の全期間日付。
  const allDates: string[] = [];
  const areaDatesAll: string[] = [];
  let count90 = 0;
  let count365 = 0;
  let latestDate: string | null = null;
  for (const s of sightings) {
    if (!s.date || s.date > today) continue;
    allDates.push(s.date);
    const d = haversineKm(landmark.lat, landmark.lon, s.lat, s.lon);
    if (d > NEAR_RADIUS_KM) continue;
    areaDatesAll.push(s.date);
    if (s.date < cutoff365) continue;
    nearby.push({
      id: s.id,
      date: s.date,
      // 事案の実 prefName を使う。landmark.prefName 固定だと県境10km圏の
      // 他県事案（例: 山中湖(山梨)周辺の御殿場市(静岡)）が誤った県URLになる。
      prefName: s.prefectureName || landmark.prefName,
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
    if (s.date >= cutoff90) count90++;
    if (!latestDate || s.date > latestDate) latestDate = s.date;
  }
  nearby.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.distanceKm - b.distanceKm));

  // 含まれる市町村を抽出 (近隣 10km 内に出没のある市町村)。
  // 県境を跨ぐ 10km 圏では他県の市町村も入るため、pref+city の組で束ねて
  // 各事案の実 prefName を保持する（リンク先の県違いを防ぐ）。
  const involvedMunis = new Map<
    string,
    { prefName: string; cityName: string; count: number }
  >();
  for (const n of nearby) {
    if (!n.cityName) continue;
    const key = `${n.prefName} ${n.cityName}`;
    const cur = involvedMunis.get(key);
    if (cur) cur.count++;
    else involvedMunis.set(key, { prefName: n.prefName, cityName: n.cityName, count: 1 });
  }
  const topMunis = [...involvedMunis.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  // コース・エリア別の集計。周辺 10km の各出没を最寄りの登録エリアに割り当て、
  // 「どのコースで出ているか」までの解像度を出す (B2B デモ: 観光地の安全ハブ)。
  const areaStats = (landmark.areas ?? []).map((a) => ({
    name: a.name,
    note: a.note,
    lat: a.lat,
    lon: a.lon,
    c90: 0,
    c365: 0,
  }));
  if (areaStats.length > 0) {
    for (const n of nearby) {
      let best = 0;
      let bestD = Infinity;
      for (let i = 0; i < areaStats.length; i++) {
        const d = haversineKm(areaStats[i].lat, areaStats[i].lon, n.lat, n.lon);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      }
      areaStats[best].c365++;
      if (n.date >= cutoff90) areaStats[best].c90++;
    }
  }
  const areaRows = [...areaStats].sort((a, b) => b.c365 - a.c365);

  // 市町村クマ情報の一次出典 (キュレーション済み・検証済み URL)。
  const officialLink = landmark.muniName
    ? getMuniOfficialLink(landmark.prefName, landmark.muniName)
    : null;

  // 公式情報ハブ (B2B): 周辺 18km の「公式クマ情報を持つ自治体」を距離順に集約。
  // 府県をまたいで束ねるのが価値（高尾山なら神奈川/東京/山梨の 3 府県）。officialHub のみ。
  type HubMuni = { pref: string; city: string; dist: number; bearUrl?: string; homeUrl?: string };
  const hubMunis: HubMuni[] = [];
  if (landmark.officialHub) {
    const seen = new Set<string>();
    const cand = JAPAN_MUNICIPALITIES.map((m) => ({
      m,
      dist: haversineKm(landmark.lat, landmark.lon, m.lat, m.lon),
    }))
      .filter((x) => x.dist <= 18)
      .sort((a, b) => a.dist - b.dist);
    for (const { m, dist } of cand) {
      const key = `${m.prefName}/${m.cityName}`;
      if (seen.has(key)) continue;
      const link = getMuniOfficialLink(m.prefName, m.cityName);
      if (!link?.bearUrl && !link?.homeUrl) continue;
      seen.add(key);
      hubMunis.push({
        pref: m.prefName,
        city: m.cityName,
        dist,
        bearUrl: link.bearUrl,
        homeUrl: link.homeUrl,
      });
      if (hubMunis.length >= 8) break;
    }
  }
  const hubPrefs = [...new Set(hubMunis.map((m) => m.pref))];
  // 自治体からのお知らせ（本文）。ハブ内自治体のうちメッセージ登録があるものを表示。
  const hubMessages: { city: string; msg: MuniMessage }[] = landmark.officialHub
    ? hubMunis
        .map((m) => ({ city: m.city, msg: getMuniMessage(m.pref, m.city) }))
        .filter((x): x is { city: string; msg: MuniMessage } => x.msg !== null)
    : [];
  // 「届ける仕組み」プレビュー用の代表メッセージ（その地点の所属自治体を優先、無ければハブ先頭）。
  const primaryMessage: MuniMessage | null = landmark.officialHub
    ? (landmark.muniName
        ? getMuniMessage(landmark.prefName, landmark.muniName)
        : null) ?? hubMessages[0]?.msg ?? null
    : null;
  const showHub =
    landmark.officialHub === true &&
    (hubMunis.length > 0 ||
      hubMessages.length > 0 ||
      (landmark.officialLinks?.length ?? 0) > 0);

  // 今後 4 週間の出没見通し（統計予測）。全国の季節シェイプ × 当該 10km 圏の直近実測。
  const seasonalModel = buildSeasonalModel(allDates);
  const forecast = forecastArea(areaDatesAll, seasonalModel, today);
  const fcBand: Record<string, { box: string; text: string; dot: string; fill: string }> = {
    low: { box: "border-emerald-200 bg-emerald-50", text: "text-emerald-900", dot: "bg-emerald-500", fill: "#10b981" },
    normal: { box: "border-stone-200 bg-stone-50", text: "text-stone-800", dot: "bg-stone-400", fill: "#78716c" },
    elevated: { box: "border-amber-200 bg-amber-50", text: "text-amber-900", dot: "bg-amber-500", fill: "#f59e0b" },
    high: { box: "border-orange-300 bg-orange-50", text: "text-orange-900", dot: "bg-orange-500", fill: "#f97316" },
  };

  // 予測カードの図（月別件数バー＋「今後」見通しバー）用の直近12ヶ月シリーズ。
  const fcMonths: { label: string; count: number }[] = [];
  {
    const m = new Map<string, number>();
    for (const d of areaDatesAll) {
      const k = d.slice(0, 7);
      m.set(k, (m.get(k) ?? 0) + 1);
    }
    const base = new Date(`${today}T00:00:00Z`);
    for (let i = 11; i >= 0; i--) {
      const dt = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth() - i, 1));
      const ym = `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, "0")}`;
      fcMonths.push({ label: `${dt.getUTCMonth() + 1}`, count: m.get(ym) ?? 0 });
    }
  }
  // 「今後4週間」の見通し棒は月換算した期待値。実データ棒と区別して提示する。
  const fcForecastBar = forecast ? Math.round(forecast.expectedCount * (30 / 28)) : 0;
  const fcMax = Math.max(1, ...fcMonths.map((x) => x.count), fcForecastBar);
  const fcPhaseArrow =
    forecast?.phase === "rising" ? "↑" : forecast?.phase === "falling" ? "↓" : "→";

  // 危険度評価 (周辺 10km の count90 ベース)。色トークンは @/lib/risk、
  // カードのマークアップは /place/[pref]/[muni] と共通の RiskBanner に集約。
  // note の一言は muni ページと文言を揃え、両ページの体験を統一する。
  const risk =
    count90 >= 10
      ? {
          tone: "red",
          label: "警戒",
          headline: `周辺 10 km で過去 90 日に ${count90} 件の出没`,
          note: "頻繁に出没しています。出発前に必ず周辺の最新情報を確認してください。",
        }
      : count90 >= 1
        ? {
            tone: "amber",
            label: "注意",
            headline: `周辺 10 km で過去 90 日に ${count90} 件の出没`,
            note: "直近で出没事案があります。早朝・夕方の単独行動は避けてください。",
          }
        : count365 >= 1
          ? {
              tone: "yellow",
              label: "観察",
              headline: `周辺 10 km で過去 1 年に ${count365} 件の出没履歴`,
              note: "90 日以内の事案はありませんが、生息域なので油断せずご準備を。",
            }
          : {
              tone: "emerald",
              label: "静穏",
              headline: "周辺 10 km で出没情報なし",
              note: "目撃情報がない期間ですが、季節や天候で状況は変わります。",
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

  // 出没 0 件スポットの「安全確認」ブロック用に、県のクマ生息状況を一文で。
  // 市町村ページと共通の getHabitatNote（県ごとに文面が変わり thin/duplicate 回避）。
  const habitatNote = getHabitatNote(landmark.prefName);

  // 地図に飛ぶときに地点名も渡す。トップの選択カードに「富士山」など名前が出るので、
  // どこから来たかが視覚的に保たれ「連続性」が出る。
  const mapUrl = `/?lat=${landmark.lat.toFixed(5)}&lon=${landmark.lon.toFixed(5)}&label=${encodeURIComponent(landmark.name)}&from=${encodeURIComponent(`/spot/${landmark.slug}`)}`;

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
      ? `${landmark.name}周辺 10 km で過去 90 日に ${count90} 件の出没（最新 ${formatDate(latestDate)}）。登山・観光前の警戒レベル確認に。`
      : count365 > 0 && latestDate
        ? `${landmark.name}周辺 10 km で過去 1 年に ${count365} 件の出没（最新 ${formatDate(latestDate)}）。登山・観光前の警戒レベル確認に。`
        : `${landmark.name}（${landmark.prefName}）周辺のクマ出没情報。登山・観光前の警戒レベル確認に。`;

  // 四季の楽しみ方ガイド（フラグON＋手キュレーション観光地）。表示時は既存の
  // ヒーロー画像 figure を隠し、ガイドの季節ギャラリーを唯一の写真ゾーンにする。
  const showSeasonGuide =
    process.env.NEXT_PUBLIC_SPOT_SEASON_GUIDE === "true" &&
    PREBUILD_SPOT_SLUGS.includes(landmark.slug);

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

      {/* ヒーロー画像 (Wikipedia REST 由来 / CC BY-SA 4.0 等)。
          四季ガイド表示時は季節ギャラリーが写真の役割を担うので出さない。 */}
      {!showSeasonGuide && landmark.imageUrl && (
        <figure className="not-prose mb-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
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
          <figcaption className="border-t border-stone-200 bg-white px-3 py-2 text-xs text-stone-500">
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

      {/* 四季の楽しみ方ガイド。観光(魅せる)を主役にページ先頭へ。安全ステータス
          (リスクバナー)はこの下に静かに置く。 */}
      {showSeasonGuide && (
        <SpotSeasonGuide data={buildSpotSeasonGuide(landmark, areaDatesAll)} />
      )}

      {/* 危険度ヒーローバナー — /place/[pref]/[muni] と共通の RiskBanner。
          マップへの導線は (1)「周辺の目撃マップ」直下のデスクトップ CTA と
          (2) モバイルの Sticky CTA に集約済みなので、ヒーロー内ボタンは持たない
          （ボタンが 3 箇所あると同じ URL なのに違う案内に見える、という muni
          ページと同様の指摘に対応）。 */}
      <RiskBanner
        tone={risk.tone as RiskTone}
        label={risk.label}
        headline={risk.headline}
        contextLabel={`${landmark.name} 周辺 10 km の状況`}
        latestDateText={latestDate ? formatDate(latestDate) : null}
        note={risk.note}
      />

      {/* 今後4週間の出没見通し（統計予測）— B2B 差別化の中核。
          現在の状況カードの直下に「先読み」を置き、いま→今後の流れを示す。
          断定でなくバンド + 例年比で提示し、根拠を全部開示する。 */}
      {landmark.officialHub && forecast && (
        <div className={`not-prose mb-6 rounded-xl border p-5 ${fcBand[forecast.band].box}`}>
          <div className="flex items-center gap-2">
            <TrendingUp size={15} aria-hidden />
            <span className={`text-xs font-medium ${fcBand[forecast.band].text}/80`}>
              今後4週間の出没見通し（統計予測・{SUPERVISION}）
            </span>
          </div>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className={`text-3xl font-extrabold ${fcBand[forecast.band].text}`}>
              {fcPhaseArrow} {BAND_LABEL[forecast.band]}
            </span>
            {forecast.vsTypicalPct !== null && (
              <span className={`text-base font-bold ${fcBand[forecast.band].text}/90`}>
                例年同期比 {forecast.vsTypicalPct >= 0 ? "+" : ""}
                {forecast.vsTypicalPct}%
              </span>
            )}
            {forecast.confidence === "low" && (
              <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-stone-500">
                参考値（データ少）
              </span>
            )}
          </div>

          {/* ゲージ（低め←→高めの針）は撤去。バンド verdict（例:「やや高め +30%」）と
              下の対比スタットが既に「程度」を示しており、針は同じ情報の重複表現で
              カードの要素過多の一因だった。季節性は下の月別グラフが担う。 */}

          {/* 対比スタット: 「今」と「例年」の差を大きく見せる（インパクトの核）。 */}
          <div className="mt-3 flex items-stretch gap-2">
            <div className="flex-1 rounded-xl border border-stone-200 bg-white/70 px-3 py-2 text-center">
              <div className="text-xs text-stone-500">直近90日（実測）</div>
              <div className="text-2xl font-bold text-stone-900">
                {forecast.recent90}
                <span className="text-xs font-normal text-stone-400"> 件</span>
              </div>
            </div>
            <div className="flex items-center text-xs font-bold text-stone-400">vs</div>
            <div className="flex-1 rounded-xl border border-stone-200 bg-white/70 px-3 py-2 text-center">
              <div className="text-xs text-stone-500">例年の同期（平均）</div>
              <div className="text-2xl font-bold text-stone-700">
                {forecast.typical90 >= 1 ? forecast.typical90.toFixed(0) : "—"}
                <span className="text-xs font-normal text-stone-400"> 件</span>
              </div>
            </div>
          </div>

          {/* 補助: 月別の季節パターン（小さめ）。グレー=実測, バンド色=今後の見通し。 */}
          <svg
            viewBox="0 0 286 60"
            className="mt-3 w-full"
            role="img"
            aria-label={`直近12ヶ月の月別出没件数と今後4週間の見通し（${BAND_LABEL[forecast.band]}）`}
          >
            {fcMonths.map((mm, i) => {
              const h = Math.max(mm.count > 0 ? 2 : 1, (mm.count / fcMax) * 38);
              const x = i * 22 + (22 - 13) / 2;
              return (
                <g key={i}>
                  <rect x={x} y={44 - h} width={13} height={h} rx={2} fill="#d6d3d1" />
                  {i % 3 === 0 && (
                    <text x={x + 6.5} y={56} textAnchor="middle" fontSize={8} fill="#a8a29e">
                      {mm.label}月
                    </text>
                  )}
                </g>
              );
            })}
            <rect
              x={12 * 22 + (22 - 13) / 2}
              y={44 - Math.max(2, (fcForecastBar / fcMax) * 38)}
              width={13}
              height={Math.max(2, (fcForecastBar / fcMax) * 38)}
              rx={2}
              fill={fcBand[forecast.band].fill}
              opacity={0.9}
            />
            <text
              x={12 * 22 + 6.5 + (22 - 13) / 2}
              y={56}
              textAnchor="middle"
              fontSize={8}
              fontWeight="bold"
              fill={fcBand[forecast.band].fill}
            >
              今後
            </text>
          </svg>

          <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
            直近12ヶ月の月別件数と過去3年の季節パターンから算出した統計的見通し（確定的な予測ではありません）。
          </p>
        </div>
      )}

      {/* 通知で受け取る (来訪者向け) — 予測 × 自治体メッセージを 1 通知に集約して見せ、
          そのまま購読できる。officialHub のみ(予測＋自治体メッセージが揃うため)。
          ※公開ページなので事業者向けの営業要素はここに置かず、末尾 CTA に集約する。 */}
      {landmark.officialHub && forecast && (
        <section className="not-prose mb-6 rounded-xl border border-stone-200 bg-white p-5">
          <div className="flex items-center gap-2">
            <BellRing size={15} aria-hidden />
            <h2 className="m-0 text-base font-bold text-stone-900">
              最新の見通しと自治体の注意喚起を「通知」で受け取る
            </h2>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-stone-600">
            {landmark.name}周辺の出没予測と、自治体からの注意喚起を 1 つにまとめてお届けします。（{SUPERVISION}）
          </p>

          {/* 通知プレビュー（スマホ通知風） */}
          <div className="mx-auto mt-3 max-w-md rounded-xl border border-stone-300 bg-white p-3 shadow-md">
            <div className="flex items-start gap-2">
              <PawPrint size={20} aria-hidden />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="truncate text-xs font-bold text-stone-900">
                    KumaWatch｜{landmark.name}周辺
                  </span>
                  <span className="shrink-0 text-xs text-stone-400">今</span>
                </div>
                <p className="mt-0.5 text-xs font-semibold text-stone-800">
                  今後4週間の見通し：{fcPhaseArrow} {BAND_LABEL[forecast.band]}
                  {forecast.vsTypicalPct !== null &&
                    `（例年比 ${forecast.vsTypicalPct >= 0 ? "+" : ""}${forecast.vsTypicalPct}%）`}
                </p>
                {primaryMessage && (
                  <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-stone-600">
                    {landmark.muniName}より：{primaryMessage.message}
                  </p>
                )}
                <p className="mt-1 text-xs text-stone-400">タップで地図・最近の事案・対策へ</p>
              </div>
            </div>
          </div>

          {/* 通知を受け取る（購読）。来訪者がそのまま登録できる。
              セクションに見出しがあるので購読ボタン側の見出しは隠す（二重表示回避）。 */}
          <NotifyBlock
            target={{ kind: "spot", slug: landmark.slug, name: landmark.name }}
            surface="spot_visitor"
            pushReleased={isSpotPushReleased()}
            hideHeading
            wrapperClassName="mt-3"
          />
        </section>
      )}

      {/* 公式情報ハブ (B2B デモの核) — 周辺自治体の公式クマ情報を府県横断で束ねて
          ページ上部に大きく表示。基本スポット (officialHub なし) には出ないので
          「基本版 vs 自治体情報ハブ」がパッと見で分かる。 */}
      {showHub && (
        <section className="not-prose mb-6 rounded-xl border border-stone-200 bg-white p-5">
          <div className="flex flex-wrap items-center gap-2">
            <Landmark size={15} aria-hidden />
            <h2 className="m-0 text-base font-bold text-stone-900">
              周辺自治体の公式クマ情報ハブ
            </h2>
            {hubMunis.length > 0 && (
              <span className="rounded-full bg-stone-800 px-2.5 py-0.5 text-xs font-bold text-white">
                {hubPrefs.length}府県 {hubMunis.length}自治体を集約
              </span>
            )}
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
            {landmark.name}周辺の自治体・公的機関のクマ出没情報を、府県をまたいで一次出典ごと束ねています。各リンクは公式ページに直接アクセスできます。
          </p>
          {/* 自治体からのお知らせ（本文）— リンクだけでなく伝えたい内容を表示。 */}
          {hubMessages.length > 0 && (
            <div className="mt-3 space-y-2">
              {hubMessages.map(({ city, msg }) => (
                <div
                  key={city}
                  className="rounded-lg border-l-4 border-stone-300 bg-white px-3 py-2.5 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded bg-stone-800 px-1.5 py-0.5 text-xs font-bold text-white">
                      {city}からのお知らせ
                    </span>
                    <span className="text-xs text-stone-400">
                      更新: {formatDate(msg.updatedAt)}
                    </span>
                    {msg.targetArea && (
                      <span className="text-xs text-stone-500">対象: {msg.targetArea}</span>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-700">{msg.message}</p>
                  <a
                    href={msg.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs font-medium text-stone-500"
                  >
                    出典: {city}公式 →
                  </a>
                </div>
              ))}
            </div>
          )}
          {hubMunis.length > 0 && (
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {hubMunis.map((m) => (
                <a
                  key={`${m.pref}/${m.city}`}
                  href={m.bearUrl || m.homeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2 hover:border-stone-300 hover:bg-stone-50"
                >
                  <span className="min-w-0">
                    <span className="text-xs text-stone-400">{m.pref}</span>
                    <span className="ml-1 text-sm font-semibold text-stone-900">{m.city}</span>
                    <span className="ml-1 text-xs text-stone-400">{m.dist.toFixed(0)}km</span>
                  </span>
                  <span className="ml-2 shrink-0 text-xs font-medium text-stone-500">
                    {m.bearUrl ? "クマ情報 →" : "公式 →"}
                  </span>
                </a>
              ))}
            </div>
          )}
          {(landmark.officialLinks?.length ?? 0) > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {landmark.officialLinks!.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-medium text-stone-700 hover:border-stone-300"
                >
<Landmark size={14} className="mr-1 inline-block align-text-bottom" aria-hidden />{l.label}
                </a>
              ))}
            </div>
          )}
          <p className="mt-2 text-xs leading-relaxed text-stone-500">
            出典: 各自治体・公的機関の公式ページ（一次情報）。本サイトの出没データは毎日自動更新（{SUPERVISION}）。
          </p>
        </section>
      )}

      {/* ランドマーク紹介 — 分類・緯度経度は一般ユーザに不要なため省略。所在のみ表示。 */}
      <h2>このスポットについて</h2>
      <p>{landmark.blurb}</p>
      {landmark.scaleNote && (
        <p className="not-prose my-2 inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
          <Users size={15} aria-hidden />
          {landmark.scaleNote}
        </p>
      )}
      <p className="not-prose my-3 text-sm text-stone-600">
        <span className="text-stone-500">所在: </span>
        <span className="font-semibold text-stone-900">
          {landmark.prefName}
          {landmark.muniName ? ` ${landmark.muniName}` : ""}
        </span>
      </p>

      {/* 周辺の目撃マップ — /place/[pref]/[muni] と共通の SightingsMapBlock。
          観光地は代表地点マーク＋半径10km 円を表示（境界は無し）。 */}
      <SightingsMapBlock
        centerLat={landmark.lat}
        centerLon={landmark.lon}
        records={nearby.slice(0, 60).map((n) => ({
          lat: n.lat,
          lon: n.lon,
          date: n.date,
          sectionName: n.sectionName,
        }))}
        showCenterMarker
        radiusKm={NEAR_RADIUS_KM}
        mapUrl={mapUrl}
        ctaLabel={`${landmark.name} の警戒レベルマップを開く →`}
      />

      {/* 最近の出没事案 — 「最近何があったか」は来訪目的の核なので折りたたまず表示。
          出没が無いスポットは、代わりに「安全確認」ブロックを出して thin content を回避。 */}
      {nearby.length > 0 ? (
        <>
          <h2>最近の出没事案</h2>
          <ul className="not-prose space-y-2">
            {nearby.slice(0, 12).map((r, i) => {
              const href = r.cityName
                ? placeHrefForSighting(landmark.prefName, r.cityName)
                : null;
              const body = (
                <>
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
                </>
              );
              return (
                <li key={`${r.date}-${i}`}>
                  {href ? (
                    <Link
                      href={href}
                      className="block rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm transition hover:border-stone-300 hover:bg-stone-50"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        /* 出没 0 件スポットの「安全確認」ブロック。「◯◯ クマ 大丈夫?」という
           安全確認意図に本文で明確に応え、県のクマ生息状況を添えて thin content を回避。
           calm トーン（emerald・危険/警戒の語を使わない）を維持し、市町村ページの
           0 件ブロックと文体を揃える。 */
        <div className="not-prose my-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
          <h2 className="text-base font-bold text-emerald-900">
            {landmark.name}周辺のクマ出没状況（安全確認）
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-700">
            {landmark.name}の周辺 10 km では、報道・自治体発表などをもとにした直近 1 年の
            クマ（熊）の出没・目撃情報の報告は
            <strong className="font-bold">ありません</strong>。{habitatNote}
          </p>
          <p className="mt-2 text-xs text-stone-500">
            新たな出没・目撃が報告され次第、本ページと地図に反映します。登山・
            山菜採り・お出かけ前の確認にご活用ください。
          </p>
        </div>
      )}

      {/* 季節別アドバイス。四季ガイドを上部に出す場合は重複するのでここは出さない。
          ガイド非表示（通常の観光地/フラグOFF）のときだけ従来の SeasonalAdvice を表示。 */}
      {!showSeasonGuide && (
        <SeasonalAdvice
          season={seasonalAdvice.season}
          point={seasonalAdvice.point}
        />
      )}

      {/* クマ対策グッズ（Amazon 検索リンク・アフィリエイト、フラグ裏）。対策の補助 */}
      <BearGearAffiliate className="mt-4" scene="trail" />

      {/* この地域を応援（その市町村のふるさと納税へ送客、フラグ裏）。地域支援の導線 */}
      <OenCard
        pref={landmark.prefName}
        city={landmark.muniName ?? undefined}
        className="mt-4"
      />

      {/* 詳しく見る — 二次情報はアコーディオンに畳み、情報過多を解消（IA 再設計）。
          一目で要る「今の状況・予測・自治体情報・地図・季節の注意」を上に残し、深掘りは折りたたむ。 */}
      <details className="group mt-2 mb-6 rounded-xl border border-stone-200 open:pb-1">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-stone-800 hover:bg-stone-50">
          <span className="flex items-center gap-1.5"><ChartColumn size={15} aria-hidden />詳しく見る（統計・コース別・周辺市町村）</span>
          <span aria-hidden className="text-stone-400 transition group-open:rotate-180">▾</span>
        </summary>
        <div className="px-4 pb-2 [&>h2:first-of-type]:mt-2">

      {/* 統計 */}
      <h2>出没統計</h2>
      <div className="not-prose my-3 grid grid-cols-3 gap-2 sm:grid-cols-3">
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">過去90日</div>
          <div className={`mt-1 text-xl font-bold ${count90 > 0 ? "text-amber-700" : "text-stone-700"}`}>{count90}</div>
          <div className="text-xs text-stone-400">件</div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">過去1年</div>
          <div className="mt-1 text-xl font-bold text-stone-900">{count365}</div>
          <div className="text-xs text-stone-400">件</div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">最新目撃</div>
          <div className="mt-1 text-sm font-semibold text-stone-900">{latestDate ? formatDate(latestDate) : "-"}</div>
        </div>
      </div>

      {/* コース・エリア別 — 「どのコースで出ているか」の解像度。areas 設定があるスポットのみ。 */}
      {areaRows.length > 0 && (
        <>
          <h2>コース・エリア別の出没（直近1年）</h2>
          <p className="not-prose mb-2 text-xs leading-relaxed text-stone-500">
            周辺 10 km の出没を最寄りのコース・エリアに割り当てた目安です。ルート選びの参考に。
          </p>
          <div className="not-prose my-3 overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full text-sm">
              <thead className="bg-stone-50 text-xs text-stone-500">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">コース・エリア</th>
                  <th className="px-3 py-2 text-right font-medium">直近90日</th>
                  <th className="px-3 py-2 text-right font-medium">直近1年</th>
                </tr>
              </thead>
              <tbody>
                {areaRows.map((a) => (
                  <tr key={a.name} className="border-t border-stone-100">
                    <td className="px-3 py-2">
                      <span className="font-medium text-stone-900">{a.name}</span>
                      {a.note && (
                        <span className="ml-1 block text-xs text-stone-400 sm:ml-1 sm:inline">
                          {a.note}
                        </span>
                      )}
                    </td>
                    <td
                      className={`px-3 py-2 text-right tabular-nums ${a.c90 > 0 ? "font-semibold text-amber-700" : "text-stone-400"}`}
                    >
                      {a.c90}
                    </td>
                    <td className="px-3 py-2 text-right tabular-nums text-stone-700">
                      {a.c365}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* 季節別アドバイスは折りたたみの外（下記の常時表示ブロック）へ移設した。 */}

      {/* 含まれる市町村 */}
      {topMunis.length > 0 && (
        <>
          <h2>周辺で出没のあった市町村</h2>
          <div className="not-prose my-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {topMunis.map((m) => (
              <Link
                key={`${m.prefName} ${m.cityName}`}
                // 生地点名は placeHrefForSighting で正規化（正式市町村名 or 県ページ）。
                // 実 prefName を使うので県境跨ぎでも正しい県URLになる。
                href={placeHrefForSighting(m.prefName, m.cityName)}
                className="block rounded-lg border border-stone-200 bg-white p-3 hover:border-stone-300 hover:bg-stone-50"
              >
                <div className="text-sm font-semibold text-stone-900">{m.cityName}</div>
                <div className="text-xs text-stone-500">{m.count} 件</div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* 公式情報・アクセス — 一次出典への導線 (「速く正確に」) と来訪導線。
          official 情報 or access のどちらかがあるスポットでのみ表示。 */}
      {((!showHub &&
        (officialLink?.bearUrl ||
          officialLink?.homeUrl ||
          (landmark.officialLinks?.length ?? 0) > 0)) ||
        (landmark.access?.length ?? 0) > 0) && (
        <>
          <h2>公式情報・アクセス</h2>
          {/* 公式リンクは showHub 時は上部ハブに集約済みなので、ここでは出さない（重複回避）。 */}
          {!showHub &&
            (officialLink?.bearUrl ||
              officialLink?.homeUrl ||
              (landmark.officialLinks?.length ?? 0) > 0) && (
            <div className="not-prose my-3 flex flex-wrap gap-2">
              {officialLink?.bearUrl && (
                <a
                  href={officialLink.bearUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-800 hover:border-stone-300 hover:bg-stone-50"
                >
                  <Landmark size={15} aria-hidden />
                  {landmark.muniName} クマ出没情報（公式）
                </a>
              )}
              {landmark.officialLinks?.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-800 hover:border-stone-300 hover:bg-stone-50"
                >
                  <Landmark size={15} aria-hidden />
                  {l.label}
                </a>
              ))}
            </div>
          )}
          {(landmark.access?.length ?? 0) > 0 && (
            <ul className="not-prose my-3 space-y-1.5 text-sm text-stone-700">
              {landmark.access!.map((a) => (
                <li key={a.label} className="flex flex-wrap gap-x-2">
                  <span className="font-semibold text-stone-900">{a.label}:</span>
                  <span>
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline"
                      >
                        {a.detail}
                      </a>
                    ) : (
                      a.detail
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
        </div>
      </details>

      {/* 通知購読 — フッター。高尾山(デモ)は上部「通知で受け取る」に置くため二重を避ける。 */}
      {!landmark.officialHub && (
        <NotifyBlock
          target={{ kind: "spot", slug: landmark.slug, name: landmark.name }}
          surface="spot_footer"
          pushReleased={isSpotPushReleased()}
        />
      )}

      {/* 戻り導線 — ユーザーが「観光地一覧に戻る」を見失わないよう、
          目立つピル状リンクで本文末尾に明示。 */}
      <div className="not-prose mt-8">
        <Link
          href="/spot"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 shadow-sm hover:border-stone-300 hover:bg-stone-50"
        >
          <span aria-hidden>←</span>
          観光地一覧に戻る
        </Link>
      </div>

      {/* スティッキー CTA — ボタン本体 (約 56px) + safe-area + 余白の合計に合わせて
          h-28 のスペーサー。bottom は env(safe-area-inset-bottom) + 1rem で
          iOS のホームインジケータ領域に重ならず欠けない。muni と同仕様。 */}
      <div className="not-prose h-28 sm:hidden" aria-hidden />
      <Link
        href={mapUrl}
        style={{ bottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
        className="map-cta-sticky not-prose fixed inset-x-3 z-50 flex items-center justify-center gap-2 rounded-full bg-amber-600 py-3.5 text-base font-bold text-white shadow-2xl ring-1 ring-amber-700 hover:bg-amber-700 sm:hidden print:hidden"
      >
        <MapIcon size={16} aria-hidden />
        {landmark.name} の警戒レベルマップを開く →
      </Link>
    </PageShell>
  );
}
