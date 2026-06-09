import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import MiniSightingsMap from "@/components/MiniSightingsMap";
import { PREF_CODE_TO_NAME } from "@/lib/prefectures";
import {
  getAllPlaceCells,
  getPlaceCell,
  getPlaceCellsByPref,
  getPrefSummary,
  getMonthlyCountsForPlaces,
  getRecentRecordsInPref,
  getRecordsForPlaces,
  getWardsCell,
  getStaticPlaceKeys,
  type PlaceCell,
  type PlaceRecord,
} from "@/lib/place-index";
import { buildMuniSeo } from "@/lib/place-seo";
import { getSeasonalAdvice, getBearRegion } from "@/lib/place-content";
import { jstToday, jstDaysAgo } from "@/lib/jst-date";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { getMuniOfficialLink } from "@/data/muni-official-links";
import LatestGovAnnouncements from "@/components/LatestGovAnnouncements";
import PushSubscribeButton from "@/components/PushSubscribeButton";
import { isPushReleased } from "@/lib/push-flag";

// 出没データに存在する市町村のみを許可 (getStaticPlaceKeys で count >= 3)。
// それ以外のパスは Next.js が即 404 を返す。
// dynamicParams=true だと、データに無い市町村で叩かれた際に SSR が走って
// 19MB の sightings.json を読み込もうとし、コールドスタート時に
// Hobby の 10s タイムアウトを超えて 5xx が返ることがあるため。
// (Search Console で札幌市・盛岡市等のサーバーエラーとして検出された)
export const dynamicParams = false;

const PREF_NAMES = new Set(Object.values(PREF_CODE_TO_NAME));
const SITE_URL = "https://kuma-watch.jp";

// 政令指定都市の親 (「○○市」) → 配下の区 cityName 一覧 + マスター区平均座標。
// マスターは政令市を「○○市△△区」で持つため、親単独ページが無く 404 になる。
// (例: /place/北海道/札幌市)。親ページを生成し、区を合算して表示するための索引。
// 「○○市△△区」形式 (政令市) のみ対象。東京特別区は「千代田区」等で市接頭辞が
// 無いため一致しない。
const SEIREI_PARENTS = new Map<
  string,
  { wards: string[]; lat: number; lon: number; n: number }
>();
for (const m of JAPAN_MUNICIPALITIES) {
  const mt = /^(.+市)(.+区)$/.exec(m.cityName);
  if (!mt) continue;
  const key = `${m.prefName}/${mt[1]}`;
  let e = SEIREI_PARENTS.get(key);
  if (!e) {
    e = { wards: [], lat: 0, lon: 0, n: 0 };
    SEIREI_PARENTS.set(key, e);
  }
  e.wards.push(m.cityName);
  e.lat += m.lat;
  e.lon += m.lon;
  e.n += 1;
}
function getSeireiParent(pref: string, muni: string) {
  return SEIREI_PARENTS.get(`${pref}/${muni}`) ?? null;
}

type Props = { params: Promise<{ pref: string; muni: string }> };

export async function generateStaticParams() {
  // 全 1,894 市区町村 (geolonia マスター) ＋ 出没データに含まれる市町村名
  // (cityName 表記が master と異なるエッジケースも拾えるように) を Union して
  // 重複排除。 0 件の市町村でも「該当なし」状態のページを生成し、検索流入の
  // 機会損失を解消する。
  const fromIndex = await getStaticPlaceKeys(1);
  const fromMaster = JAPAN_MUNICIPALITIES.map((m) => ({
    pref: m.prefName,
    city: m.cityName,
  }));
  // 政令市の親 (「○○市」)。マスターは区単位なので別途追加する。
  const fromSeirei = [...SEIREI_PARENTS.keys()].map((key) => {
    const i = key.indexOf("/");
    return { pref: key.slice(0, i), city: key.slice(i + 1) };
  });
  const seen = new Set<string>();
  const merged: { pref: string; city: string }[] = [];
  for (const k of [...fromMaster, ...fromIndex, ...fromSeirei]) {
    const key = `${k.pref}/${k.city}`;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(k);
  }
  return merged.map((k) => ({ pref: k.pref, muni: k.city }));
}

function decode(v: string): string {
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

// 現在の月から「あわせて読みたい」の季節枠記事を決める。SSG ビルド時に
// new Date() を読むため、再ビルドの度に季節が反映される。/articles/{spring,
// summer,autumn,winter} の 4 本に対応。
function getSeasonalArticle(): { href: string; title: string; sub: string } {
  const month = new Date().getMonth() + 1; // 1..12
  if (month >= 3 && month <= 5)
    return {
      href: "/articles/spring",
      title: "春のクマ対策",
      sub: "冬眠明けの母グマと子グマに注意",
    };
  if (month >= 6 && month <= 8)
    return {
      href: "/articles/summer",
      title: "夏のクマ対策",
      sub: "川遊び・キャンプ・避暑地のリスク",
    };
  if (month >= 9 && month <= 11)
    return {
      href: "/articles/autumn",
      title: "秋のクマ対策",
      sub: "なぜ秋が最も危険なのか",
    };
  return {
    href: "/articles/winter",
    title: "冬のクマ対策",
    sub: "穴持たず・冬山のリスク",
  };
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

// 「最新の出没」を相対表現で添える。1 か月以上前は null（鮮度の演出をしない）。
// "○○市 クマ"（何があった？）というニュース意図の検索に冒頭で応えるため。
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pref: rawPref, muni: rawMuni } = await params;
  const pref = decode(rawPref);
  const muni = decode(rawMuni);
  if (!PREF_NAMES.has(pref)) return { title: "ページが見つかりません" };

  const cellFromIndex = await getPlaceCell(pref, muni);
  // 政令市の親は区を合算したセルでタイトルの件数を正確にする。
  let seoCell = cellFromIndex;
  if (!cellFromIndex) {
    const seirei = getSeireiParent(pref, muni);
    if (seirei) {
      seoCell = await getWardsCell(
        pref,
        muni,
        seirei.wards,
        seirei.lat / seirei.n,
        seirei.lon / seirei.n,
      );
    }
  }
  // 出没データが無い市町村でも、buildMuniSeo の null パスでフォールバック
  // タイトル ("○○のクマ出没情報・警戒レベル｜獣医師監修") を返す。
  const { title, description } = buildMuniSeo(pref, muni, seoCell);
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

  const cellFromIndex = await getPlaceCell(pref, muni);
  // 出没データが無くてもマスターにあれば 0 件カードとして生成。
  const masterEntry = JAPAN_MUNICIPALITIES.find(
    (m) => m.prefName === pref && m.cityName === muni,
  );
  // 政令市の親 (「○○市」)。マスターには区しか無いので別索引で判定する。
  const seirei =
    !cellFromIndex && !masterEntry ? getSeireiParent(pref, muni) : null;
  if (!cellFromIndex && !masterEntry && !seirei) notFound();

  // データ取得対象の city 一覧。政令市の親は配下の区を合算する。
  const dataCities = seirei ? seirei.wards : [muni];

  let cell: PlaceCell;
  if (cellFromIndex) {
    cell = cellFromIndex;
  } else if (seirei) {
    cell = await getWardsCell(
      pref,
      muni,
      seirei.wards,
      seirei.lat / seirei.n,
      seirei.lon / seirei.n,
    );
  } else {
    cell = {
      prefectureName: pref,
      cityName: muni,
      count: 0,
      count90d: 0,
      count365d: 0,
      latestDate: null,
      latCentroid: masterEntry!.lat,
      lonCentroid: masterEntry!.lon,
    };
  }

  const [siblingsRaw, allCells, mapRecords, prefSummary, monthly, prefRecent] = await Promise.all([
    getPlaceCellsByPref(pref),
    getAllPlaceCells(),
    getRecordsForPlaces(pref, dataCities, 60),
    getPrefSummary(pref),
    // 月別チャートは getRecordsForPlaces の上限 (60) で古い月が落ちるので
    // 別関数で全件から月別バケット集計する。政令市の親は区を合算。
    getMonthlyCountsForPlaces(pref, dataCities),
    // データ薄い muni (recentIncidents が出ない) でも、県内の直近事案を
    // 補助コンテンツとして埋め込み、ページの SEO 上の希薄判定を回避する。
    getRecentRecordsInPref(pref, 8),
  ]);

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

  // 県境を跨いだ全国セルから距離を計算。半径サマリーと近隣カードに使う。
  // self は除外（pref+city の組で同一）。
  const cellsWithDistance = allCells
    .filter((c) => !(c.prefectureName === pref && c.cityName === muni))
    .map((c) => ({
      ...c,
      distanceKm: haversineKm(
        cell.latCentroid,
        cell.lonCentroid,
        c.latCentroid,
        c.lonCentroid,
      ),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm);

  // 旧「周辺の出没状況（半径サマリー）」セクションは UI 上削除済み。
  // 関連集計（within20km/50km, r20Count*, r50Count*, nearestHot）も
  // 利用箇所が消えたので除去。距離ベースの内部リンク（近隣カード・
  // 周辺ランドマーク）は別計算 (cellsWithDistance) を引き続き使う。

  // 県内コンテキスト用の集計は「県内での位置づけ」ブロック内で
  // prefSummary.count365d / count90d / cell.count365d / cell.count90d を
  // 直接使うので、ここで派生変数を計算する必要はない。
  // 「N 市町村で目撃あり」「県全体のシェア」表現は、累計表示を撤去した今は
  // 意味が薄いので併せて削除済み。

  // 周辺ランドマーク (山・国立公園・温泉地など) — /spot/[slug] への内部リンクを
  // 形成し、市町村ページ ↔ ランドマークページ間の双方向リンクを作る。
  // 検索クエリで「○○山 クマ」「○○温泉 クマ」が拾えるよう /spot を別系統で
  // 持っているため、距離が近い場合は誘導する。
  const NEARBY_LANDMARK_RADIUS_KM = 30;
  const nearbyLandmarks = JAPAN_LANDMARKS.map((l) => ({
    ...l,
    distanceKm: haversineKm(cell.latCentroid, cell.lonCentroid, l.lat, l.lon),
  }))
    .filter((l) => l.distanceKm <= NEARBY_LANDMARK_RADIUS_KM)
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, 6);

  // 近隣カード: 県跨ぎで距離順に 4 件。県境の市町村でも妥当な隣接を表示できる。
  const nearestNeighbors = cellsWithDistance.slice(0, 4);
  const nearestNeighborKeys = new Set(
    nearestNeighbors.map((n) => `${n.prefectureName}/${n.cityName}`),
  );
  const siblings = siblingsRaw
    .filter(
      (c) =>
        c.cityName !== muni &&
        !nearestNeighborKeys.has(`${pref}/${c.cityName}`),
    )
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

  // Place: ページの主題 (主体)。hasMap / containedInPlace / description を
  // 追加して Google にこのページの地理的文脈を強く伝える。@id で WebPage の
  // about との連結アンカーを作る。
  const canonicalPath = `/place/${encodeURIComponent(pref)}/${encodeURIComponent(muni)}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${canonicalUrl}#place`,
    name: `${pref}${muni}`,
    description:
      cell.count365d > 0
        ? `${pref}${muni}における熊（クマ）出没情報・警戒レベル予報。直近1年${cell.count365d.toLocaleString()}件の出没記録。`
        : `${pref}${muni}における熊（クマ）出没情報・警戒レベル予報。`,
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
    hasMap: canonicalUrl,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: pref,
    },
  };

  // WebPage: ページ自体。about で Place を参照し「このページは ${pref}${muni}
  // について書かれている」ことを明示する。SC データで「{市町村} 熊出没マップ」
  // が主要クエリなので、ページとトピックの結び付きを強める。
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl,
    url: canonicalUrl,
    name: `${muni}の熊出没情報マップ`,
    about: { "@id": `${canonicalUrl}#place` },
    isPartOf: {
      "@type": "WebSite",
      name: "KumaWatch",
      url: SITE_URL,
    },
    inLanguage: "ja",
  };

  // 最近の出没事案 — mapRecords は date desc 済み。
  // 過去 365 日 + sectionName あり、を優先して 15 件まで（より具体性のある情報量）。
  // window は JST カレンダー日付で判定 (UTC 解釈の境界 1 日ズレを回避)。
  const today = jstToday();
  const cutoff365 = jstDaysAgo(365);
  const within1Year = (r: PlaceRecord) =>
    Boolean(r.date) && r.date >= cutoff365 && r.date <= today;
  const recentIncidents = mapRecords.filter(within1Year).slice(0, 15);
  // 最新事案の相対日数 (冒頭ハイライト用)。
  const latestRel =
    recentIncidents.length > 0 ? daysAgoLabel(recentIncidents[0].date) : null;

  // 地図プロット用 — 表示対象は「過去 1 年以内のデータ」のみ。
  // そのうち MiniSightingsMap 側で直近 90 日を赤、それ以外（91 日〜1 年）を
  // グレーで描く。古すぎる点が混じると最新傾向の解釈を歪めるためここで絞る。
  const mapRecordsForYear = mapRecords.filter(within1Year);

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

  // 月別件数は getMonthlyCountsForPlaces で全件から集計済み。グラフ用の
  // 最大値だけここで計算する。
  const now = new Date();
  const monthlyMax = Math.max(1, ...monthly.map((b) => b.count));

  // 季節別アドバイス — 県（ヒグマ/ツキノワグマ/絶滅区分）と当月から、
  // 地域×季節のマトリクスで文章を切り替える (src/lib/place-content.ts)。
  // 全 1,894 ページで同一文だと Google から重複認定され「クロール済み・未登録」
  // が積み上がるため、ページ本文の差別化に直接効く。
  const month = now.getMonth() + 1; // 1-12
  const seasonalAdvice = getSeasonalAdvice(pref, month);

  // ダイナミック lead — 数値を必ず織り込み、SERP スニペットの具体性も上げる。
  // 「5km メッシュで確認できます」は本ページでは確認できない（全国マップ側の機能）
  // ためミスリーディングなので削除。
  const dynamicLead =
    cell.count90d > 0 && cell.latestDate
      ? `過去 90 日で ${cell.count90d} 件の出没（最新 ${formatDate(cell.latestDate)}）。${pref} ${muni} の熊（クマ）出没状況をまとめています。`
      : cell.count365d > 0 && cell.latestDate
        ? `過去 1 年で ${cell.count365d} 件の出没（最新 ${formatDate(cell.latestDate)}）。${pref} ${muni} の熊（クマ）出没状況をまとめています。`
        : `${pref} ${muni} の熊（クマ）出没情報をまとめています。`;

  // よくある質問 — データ駆動の Q&A。可視セクションと FAQPage 構造化データの
  // 両方に使う (Google は可視テキストと一致する FAQ を要求)。
  // 「○○市 クマ 出没する?」「○○市 クマ 最新」等の質問形クエリの受け皿になり、
  // クマ/熊/ツキノワグマ/ヒグマ/目撃/最新/リアルタイム の表記ゆれも自然に吸収する。
  const bearRegion = getBearRegion(pref);
  const speciesAnswer =
    bearRegion === "hokkaido"
      ? "北海道に生息するクマはヒグマです。本州のツキノワグマより大型で行動圏も広く、春の冬眠明けから秋にかけて広範囲で活動します。"
      : bearRegion === "shikoku"
        ? `${pref}を含む四国のツキノワグマは絶滅危惧 IA 類で、剣山系にごく少数が生息するのみとされています。出没はまれですが、目撃情報には注意してください。`
        : bearRegion === "kyushu-okinawa"
          ? `九州のツキノワグマは絶滅したとされ、沖縄にはクマは生息していません。${pref}での「クマ」情報は他の動物の誤認の可能性もあるため、自治体の発表をご確認ください。`
          : `${pref}に生息するクマは主にツキノワグマです。春の冬眠明けから秋の食い溜め期にかけて、山菜採り・登山道・里山周辺で目撃や出没が報告されます。`;
  const faqItems: { q: string; a: string }[] = [
    {
      q: `${muni}にクマ（熊）は出没しますか？`,
      a:
        cell.count365d > 0
          ? `はい。${pref}${muni}では直近 1 年でクマの出没・目撃情報が ${cell.count365d.toLocaleString()} 件記録されています${cell.latestDate ? `（最新は ${formatDate(cell.latestDate)}）` : ""}。登山・山菜採り・通勤通学などの前には最新情報を確認してください。`
          : `直近 1 年の出没記録はありませんが、${pref}内ではクマの出没が続いています。季節や年によって状況が変わるため、お出かけ前に最新情報をご確認ください。`,
    },
    {
      q: `${muni}の最新のクマ出没・目撃情報はどこで見られますか？`,
      a: `本ページ上部の「最新の出没」と地図で、${muni}周辺の最新のクマ出没・目撃情報をリアルタイムに近い形で確認できます。報道・自治体発表などをもとに随時更新しています。`,
    },
    {
      q: `${muni}でクマに遭遇したらどうすればいいですか？`,
      a: `落ち着いて距離を取り、背を向けて走らず、クマを見ながらゆっくり後退してください。子グマには絶対に近づかないこと。鈴やラジオで存在を知らせる予防も有効です。`,
    },
    {
      q: `${pref}にはどんな種類のクマがいますか？`,
      a: speciesAnswer,
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageShell
      title={`${muni}の熊出没情報マップ`}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
        {/* ヒーローカード内に旧「🗺️ 地図で詳細を見る」ボタンがあったが、
            概要セクション内の埋め込みマップ + Sticky CTA と動線が三重になり
            複雑だったので削除。マップへの動線は (1) 埋め込みマップ下のリンク
            と (2) Sticky CTA の 2 箇所に集約。 */}
      </div>

      {/* 最新の出没事案ハイライト — 「○○市 クマ」で来たニュース意図の検索に
          冒頭で即応する。最新事案の日付・地区・内容を 1 件だけ目立たせ、
          詳細リストへアンカーで誘導。古い事案 (1か月超) でも日付は出すが
          相対表現 (latestRel) は鮮度がある時だけ添える。 */}
      {recentIncidents.length > 0 && (
        <div className="not-prose mb-6 rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-amber-600 px-2 py-0.5 text-[11px] font-bold text-white">
              最新の出没
            </span>
            <span className="text-sm font-semibold text-stone-900">
              {formatDate(recentIncidents[0].date)}
            </span>
            {latestRel && (
              <span className="text-xs font-medium text-amber-700">
                {latestRel}
              </span>
            )}
            <span className="text-xs text-stone-500">
              {muni}
              {recentIncidents[0].sectionName
                ? `・${recentIncidents[0].sectionName}`
                : ""}
            </span>
          </div>
          {recentIncidents[0].comment && (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-700">
              {recentIncidents[0].comment}
            </p>
          )}
          {recentIncidents.length > 1 && (
            <a
              href="#recent-incidents"
              className="mt-2 inline-block text-xs font-medium text-amber-800 hover:underline"
            >
              直近の出没事案をすべて見る →
            </a>
          )}
        </div>
      )}

      {/* 通知購読 — 「今危険か」の答えを見たユーザに、継続フォローの選択肢を
          示す。Push 非対応・拒否時はコンポーネント側で何も描画しない。
          リリースフラグ (NEXT_PUBLIC_PUSH_ENABLED) が OFF の間は出さない。 */}
      {isPushReleased() && (
        <PushSubscribeButton target={{ kind: "muni", pref, city: muni }} />
      )}

      {/* 表示カード — 累計は古い source の影響で意味が薄いため省き、
          「過去1年 / 過去90日 / 最新目撃」 の 3 枚に集約。
          1 年・90 日が両方 0 ならヒーローカードの「直近の出没情報なし」
          で十分なので、カード列自体を非表示にする。 */}
      {(cell.count365d > 0 || cell.count90d > 0) && (
        <div className="not-prose mb-6 grid grid-cols-3 gap-3">
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
              {cell.latestDate ? formatDate(cell.latestDate) : "記録なし"}
            </div>
          </div>
        </div>
      )}

      {/* 周辺の目撃マップ — 旧位置（傾向セクションの下）から概要直下に昇格。
          ユーザーが「上部でサマリーとマップが見たい」という導線改善要望に対応。
          地図直下に「全国マップへ」リンクを設置し、埋め込み地図からも全国
          地図へ遷移できる構造にした。 */}
      <h2>周辺の目撃マップ</h2>
      <div className="not-prose mb-1.5">
        <MiniSightingsMap
          centerLat={cell.latCentroid}
          centerLon={cell.lonCentroid}
          records={mapRecordsForYear}
          zoom={11}
          boundaryUrl={
            masterEntry ? `/data/boundaries/${masterEntry.prefCode}.json` : undefined
          }
          boundaryCode={masterEntry?.cityCode}
        />
      </div>
      {/* 凡例 — プロット対象は「過去 1 年以内」のレコードのみ。
          そのうち直近 90 日を赤、それ以前 (91 日〜1 年) をグレーで表示。
          中央の黄色マーク（代表地点）はユーザーの関心と無関係なので凡例から除外。 */}
      <ul className="not-prose mb-2 flex flex-wrap list-none gap-x-4 gap-y-1 text-[11px] text-stone-600">
        <li className="flex items-center gap-1.5">
          <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
          直近 90 日
        </li>
        <li className="flex items-center gap-1.5">
          <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-stone-400" />
          1 年以内
        </li>
        <li className="flex items-center gap-1.5">
          <span
            aria-hidden
            className="inline-block h-2.5 w-3 rounded-sm border-2 border-blue-600 bg-blue-500/10"
          />
          {muni}の境界
        </li>
      </ul>
      <p className="not-prose mb-2 text-[10px] text-stone-400">
        行政界データ: 「国土数値情報（行政区域データ）」（国土交通省）を加工して作成
      </p>
      {/* デスクトップ専用の「マップを開く」CTA — モバイルでは下部の Sticky CTA
          が同じ役割を担うので hidden sm:inline-flex で重複排除。ラベルも
          Sticky CTA と統一し、「内容は同じなのに 2 つあって紛らわしい」という
          指摘に対応。 */}
      <p className="not-prose mb-6 hidden sm:block">
        <Link
          href={mapUrl}
          className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-amber-700"
        >
          🗺️ {muni} の警戒レベルマップを開く →
        </Link>
      </p>

      {/* 概要と詳細の境界。次セクション (h2) の上余白で十分なので区切り線は
          置かない。以前は <hr> を挟んでいたが「凡例の下に薄い線が残っていて
          見苦しい」との指摘で除去。 */}

      {/* 半径サマリー（半径20km/50km の集計と「最も近い直近の出没」）は、
          ユーザー指摘で「文章で数字が並んで重い」「重複情報感がある」と判断し
          全削除。同じ情報は「県内での位置づけ」と「近隣で出没している市町村」
          で十分に表現できている。 */}

      <h2>クマ出没の傾向</h2>
      {cell.count365d > 0 || cell.count90d > 0 ? (
        <p>
          {pref}{muni} では過去 1 年で <strong>{cell.count365d.toLocaleString()} 件</strong>、
          直近 90 日で <strong>{cell.count90d.toLocaleString()} 件</strong> の出没が記録されています。
          {cell.latestDate && <>最新の目撃は {formatDate(cell.latestDate)} です。</>}
          {" "}地域ごとの警戒レベルは、過去の出没履歴・季節・時間帯・気象条件を組み合わせて算出しています。詳細な警戒レベルマップは全国マップでご確認ください。
        </p>
      ) : (
        <p>
          {pref}{muni} には直近 1 年の公開された出没記録がありません。
          ただし周辺市町村の状況や、季節・年による変動でリスクは大きく変わるため、上記の半径サマリーと自治体公式情報も併せてご確認ください。
        </p>
      )}

      {/* 過去 12 ヶ月の月別件数バーチャート — 季節性を視覚的に把握。
          全月 0 件の地域は空チャートが意味のない情報になるので、
          代わりに 1 行の文言で「記録なし」を明示する。 */}
      <h3>過去 12 ヶ月の月別件数</h3>
      {monthly.every((b) => b.count === 0) ? (
        <div className="not-prose my-3 rounded-xl border border-stone-200 bg-white px-4 py-5 text-sm text-stone-600">
          過去 12 ヶ月の出没記録はありません。
          <span className="ml-1 text-xs text-stone-500">
            （目撃が無い期間でも、季節や天候で状況は変わります）
          </span>
        </div>
      ) : (
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
      )}

      {/* 季節別アドバイス — 県（ヒグマ/ツキノワグマ/絶滅区分）×当月で文章が切り替わる。
          全市町村で同じ文章になるのを避け、Google の重複コンテンツ判定を回避する。 */}
      <div className="not-prose my-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-emerald-900">
          <span aria-hidden>🩺</span>
          <span>
            {pref} の {seasonalAdvice.season} の注意点
          </span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800">
            {seasonalAdvice.speciesLabel}
          </span>
          <span className="text-[10px] font-normal text-emerald-700">
            獣医師監修
          </span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-emerald-900">
          {seasonalAdvice.point}
        </p>
      </div>

      {/* 県内コンテキスト — 順位ではなく「県全体に占めるシェア・所属」の事実を提示。
          人身被害を伴う領域での順位表現は不適切なため、所属と割合のみで示す。
          各ページで数値が異なるため、Google 視点でのコンテンツ差別化にも寄与。 */}
      {prefSummary && (
        <>
          <h2>県内での位置づけ</h2>
          {cell.count365d > 0 || cell.count90d > 0 ? (
            <p>
              直近 1 年で {pref} 全体に <strong>{prefSummary.count365d.toLocaleString()}</strong>{" "}
              件、直近 90 日で <strong>{prefSummary.count90d.toLocaleString()}</strong>{" "}
              件の出没が記録されています。
              うち {muni} は直近 1 年で <strong>{cell.count365d.toLocaleString()}</strong> 件、
              直近 90 日で <strong>{cell.count90d.toLocaleString()}</strong> 件です。
            </p>
          ) : (
            <p>
              直近 1 年で {pref} 全体に {prefSummary.count365d.toLocaleString()} 件、
              直近 90 日で {prefSummary.count90d.toLocaleString()} 件の出没が記録されていますが、
              {muni} には直近 1 年の記録がありません。ただし周辺市町村の状況や季節・年による変動があるため、
              安心の根拠とせず、上記の半径サマリーや自治体公式情報も併せてご確認ください。
            </p>
          )}
        </>
      )}

      {/* 最近の出没事案 — 具体的な日付・地区の文字列が長尾 SEO に効く。
          コメントが空なら sectionName を表示、それも無ければ省略。 */}
      {recentIncidents.length > 0 && (
        <>
          <h2 id="recent-incidents">最近の出没事案</h2>
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

      {/* {muni} 内に直近事案が無い場合の補助コンテンツ。県内最新事案を
          「市町村名 + 日付」付きで列挙することで、コンテンツ希薄判定を回避し
          かつユーザーには「この地域は静かでも県内全体ではこれだけ動いている」
          という文脈情報を提供できる。clickable リンクで内部リンクグラフも強化。 */}
      {recentIncidents.length === 0 && prefRecent.length > 0 && (
        <>
          <h2>{pref}内の直近のクマ出没事案</h2>
          <p className="text-sm">
            {muni} には直近 1 年の記録がありませんが、{pref}内では出没が続いています。
            周辺市町村の最新事案を直近 {prefRecent.length} 件表示します。
          </p>
          <ul className="not-prose space-y-2">
            {prefRecent.map((r, i) => (
              <li
                key={`pref-${r.date}-${i}`}
                className="rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-semibold text-stone-900">
                    {formatDate(r.date)}
                  </span>
                  {r.cityName && (
                    <Link
                      href={`/place/${encodeURIComponent(pref)}/${encodeURIComponent(r.cityName)}`}
                      className="text-xs font-semibold text-amber-700 hover:underline"
                    >
                      {r.cityName}
                    </Link>
                  )}
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
        </>
      )}

      {/* 地区別件数 — 「○○市 ○○町 クマ」のような長尾検索の受け皿。
          全件 0 件の地区は出さない。 */}
      {topSections.length > 0 && (
        <>
          <h2>地区別の出没件数</h2>
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

      {/* 自治体公式情報 — Claude エージェントが収集した自治体公式 HP /
          クマ情報ページへのリンク。 muni-official-links.ts に未収録の自治体は
          ブロック自体を非表示にする (false 表示より「項目自体なし」が誠実)。 */}
      {(() => {
        const off = getMuniOfficialLink(pref, muni);
        if (!off || (!off.homeUrl && !off.bearUrl)) return null;
        return (
          <>
            <h2>この自治体の公式情報</h2>
            <p>
              一次出典は必ず公式サイトでご確認ください。本ページの集計値・地図と
              異なる場合は公式情報を優先してください。
            </p>
            <ul className="not-prose my-3 list-none space-y-2 pl-0">
              {off.bearUrl && (
                <li>
                  <a
                    href={off.bearUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-base font-semibold text-amber-900 hover:bg-amber-100"
                  >
                    <span aria-hidden>🐻</span>
                    <span className="flex-1">{muni} のクマ・野生動物情報ページ</span>
                    <span aria-hidden className="text-xs text-amber-700">↗</span>
                  </a>
                </li>
              )}
              {off.homeUrl && (
                <li>
                  <a
                    href={off.homeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 text-base font-semibold text-stone-800 hover:border-amber-400 hover:bg-amber-50"
                  >
                    <span aria-hidden>🏛️</span>
                    <span className="flex-1">{muni} 公式サイト</span>
                    <span aria-hidden className="text-xs text-stone-500">↗</span>
                  </a>
                </li>
              )}
            </ul>
            {off.verifiedAt && (
              <p className="not-prose mb-4 text-xs text-stone-500">
                公式ページ最終確認: {off.verifiedAt}
              </p>
            )}
          </>
        );
      })()}

      <h2>登山・キャンプの注意点</h2>
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
      </ul>

      {/* 国の最新発表 — 市町村ページから政府方針への導線 (全市町村共通の国の動き) */}
      <LatestGovAnnouncements limit={2} />

      {/* よくある質問 — 質問形クエリの受け皿 + 表記ゆれ吸収。可視テキストは
          上で組んだ faqItems と完全一致させ、FAQPage 構造化データと整合させる。 */}
      <h2>{muni}のクマ出没に関するよくある質問</h2>
      <div className="not-prose space-y-2">
        {faqItems.map((f, i) => (
          <details
            key={i}
            className="rounded-lg border border-stone-200 bg-white px-4 py-3"
          >
            <summary className="cursor-pointer text-sm font-semibold text-stone-900">
              {f.q}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.a}</p>
          </details>
        ))}
      </div>

      <h2>あわせて読みたい</h2>
      {/* 4 枠のうち 1 枠は現在の季節に合わせて選定する。「春なのに秋の記事
          が出る」という指摘に対応。残り 3 枠は通年使える普遍的トピック
          (遭遇・スプレー・種別比較)。ビルド時に Date を読むため、ISR/SSG
          再生成のたびに季節が反映される。 */}
      <ul className="not-prose grid list-none grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
        {[
          { href: "/articles/encounter", title: "クマに遭遇したら", sub: "距離別の正しい対処" },
          getSeasonalArticle(),
          { href: "/articles/bear-spray", title: "クマよけスプレー", sub: "使い方と選び方" },
          { href: "/articles/species-difference", title: "ツキノワグマとヒグマ", sub: "行動・対処の違い" },
        ].map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="block rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 hover:border-amber-400 hover:bg-amber-50"
            >
              <span className="font-medium">{it.title}</span>
              <span className="ml-1 text-xs text-gray-500">{it.sub}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* 近隣 4 市町村の比較 — 距離ベースで近い順。県境を跨いで近い市町村も拾う
          (例: 富山県滑川市から見ると新潟県糸魚川市が県内の遠い市町村より近い)。
          登山・通勤など「複数地域を見て判断したい」ユーザーニーズに対応。 */}
      {nearestNeighbors.length > 0 && (
        <>
          <h2>近隣で出没している市町村</h2>
          <div className="not-prose my-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {nearestNeighbors.map((n) => {
              const isHot = n.count90d > 0;
              const isOtherPref = n.prefectureName !== pref;
              return (
                <Link
                  key={`${n.prefectureName}/${n.cityName}`}
                  href={`/place/${encodeURIComponent(n.prefectureName)}/${encodeURIComponent(n.cityName)}`}
                  className={`flex flex-col rounded-xl border p-3 transition ${
                    isHot
                      ? "border-amber-300 bg-amber-50 hover:border-amber-500"
                      : "border-stone-200 bg-white hover:border-stone-400"
                  }`}
                >
                  <div className="text-[10px] text-stone-500">
                    距離 {n.distanceKm.toFixed(1)} km
                    {isOtherPref && (
                      <span className="ml-1 text-stone-400">
                        / {n.prefectureName}
                      </span>
                    )}
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

      {/* 周辺ランドマーク — 山・国立公園・温泉地などの /spot/[slug] への内部リンク。
          市町村ページ ↔ ランドマークページ間の双方向リンクで、検索流入も
          「○○山 クマ」「○○温泉 クマ」のような名所ベースのクエリで拾える。
          距離は haversine の直線距離。 */}
      {nearbyLandmarks.length > 0 && (
        <>
          <h2>周辺の登山・観光スポット</h2>
          <p className="text-sm">
            {muni} から半径 {NEARBY_LANDMARK_RADIUS_KM} km 圏内にある主要なランドマークです。
            各スポットのページで、クマ出没情報を集約した周辺マップと警戒レベルをご確認いただけます。
          </p>
          {/* 周辺ランドマーク — list-none + pl-0 でマーカーと左余白を排除。
              カードは h2 オレンジ下線と同じ幅まで広げる。 */}
          <ul className="not-prose my-3 grid list-none grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
            {nearbyLandmarks.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/spot/${encodeURIComponent(l.slug)}`}
                  className="block rounded-lg border border-stone-200 bg-white px-4 py-3 hover:border-amber-400 hover:bg-amber-50"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-semibold text-stone-900">
                      {l.name}
                    </span>
                    <span className="shrink-0 text-[10px] text-stone-500">
                      {l.distanceKm.toFixed(1)} km
                    </span>
                  </div>
                  {l.prefName !== pref || l.muniName !== muni ? (
                    <div className="mt-0.5 text-[10px] text-stone-500">
                      {l.prefName}
                      {l.muniName ? ` ${l.muniName}` : ""}
                    </div>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {siblings.length > 0 && (
        <>
          <h2>{pref} の他の市町村</h2>
          {/* 他の市町村ナビ — list-none + pl-0 でマーカーと左余白を排除。
              カードは h2 オレンジ下線と同じ幅まで広げる。 */}
          <ul className="not-prose grid list-none grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
            {siblings.map((s) => (
              <li key={s.cityName}>
                <Link
                  href={`/place/${encodeURIComponent(pref)}/${encodeURIComponent(s.cityName)}`}
                  className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 hover:border-amber-400 hover:bg-amber-50"
                >
                  <span className="truncate font-medium">{s.cityName}</span>
                  <span className="shrink-0 tabular-nums text-xs text-gray-400">
                    {s.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* 戻り導線 — 市町村ページの末尾で「県のページに戻る」を必ず提供。
          パンくずより目立つピル状ボタンで一貫した「戻る」体験を担保。 */}
      <div className="not-prose mt-8">
        <Link
          href={`/place/${encodeURIComponent(pref)}`}
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 shadow-sm hover:border-amber-400 hover:bg-amber-50"
        >
          <span aria-hidden>←</span>
          {pref} のページに戻る
        </Link>
      </div>

      {/* sticky CTA がスクロール末尾で本文を覆わないようスペーサーを置く。
          ボタン本体 (約 56px) + safe-area + 余白の合計に合わせて h-28 に増量。
          以前の h-20 (80px) では iOS の home indicator 領域と被って本文や
          次セクションのカードに乗ってしまう問題があったため。 */}
      <div className="not-prose h-28 sm:hidden" aria-hidden />

      {/* モバイル限定の sticky CTA。スクロールしても常に「地図を開く」が
          指の届く位置に出る。bottom を env(safe-area-inset-bottom) + 1rem に
          することで iOS のホームインジケータ領域に重ならず、ボタンが欠けない。
          PC は上の inline ボタンを表示するのでここは sm:hidden に限定。 */}
      <Link
        href={mapUrl}
        style={{ bottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
        className="not-prose fixed inset-x-3 z-50 flex items-center justify-center gap-2 rounded-full bg-amber-600 py-3.5 text-base font-bold text-white shadow-2xl ring-1 ring-amber-700 hover:bg-amber-700 sm:hidden print:hidden"
      >
        🗺️ {muni} の警戒レベルマップを開く →
      </Link>
    </PageShell>
  );
}
