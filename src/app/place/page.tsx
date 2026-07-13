import type { Metadata } from "next";
import Link from "next/link";
import { Mountain } from "lucide-react";
import PageShell from "@/components/PageShell";
import DirectorySearch, {
  type DirectoryItem,
} from "@/components/DirectorySearch";
import { isDirectorySearchReleased } from "@/lib/directory-search-flag";
import { JAPAN_MUNICIPALITIES } from "@/data/japan-municipalities";
import PlaceDirectory, { type RegionData } from "./PlaceDirectory";
import { getAllPrefSummaries } from "@/lib/place-index";

const SITE_URL = "https://kuma-watch.jp";

// ISR: 30 分ごとに再生成。出没データの取り込み (1 日 1 回) を遅延少なく反映。
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "市町村で探す｜獣医師監修クマ出没マップ",
  description:
    "獣医師監修・獣医工学ラボ運営。全国 47 都道府県のクマ出没情報を地域別に整理。北海道・東北・関東・中部・近畿・中国・四国・九州の各都道府県ページから、最新の出没件数・市町村別の警戒レベルを確認できます。",
  alternates: { canonical: `${SITE_URL}/place` },
  openGraph: {
    title: "市町村で探す｜獣医師監修クマ出没マップ｜KumaWatch",
    description: "獣医師監修・獣医工学ラボ運営。47 都道府県のクマ出没情報を地域別に整理。",
    url: `${SITE_URL}/place`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

type Region = { label: string; prefs: string[] };

// 北海道・東北 / 関東 / 中部 / 近畿 / 中国 / 四国 / 九州・沖縄。
const REGIONS: Region[] = [
  { label: "北海道・東北", prefs: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"] },
  { label: "関東", prefs: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"] },
  { label: "中部", prefs: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"] },
  { label: "近畿", prefs: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"] },
  { label: "中国", prefs: ["鳥取県", "島根県", "岡山県", "広島県", "山口県"] },
  { label: "四国", prefs: ["徳島県", "香川県", "愛媛県", "高知県"] },
  { label: "九州・沖縄", prefs: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"] },
];

export default async function PlacePage() {
  // ディレクトリ: 47 都道府県を地域ブロック単位で並べる。集計 (getAllPrefSummaries)
  // は ISR 再生成時に 1 度だけ走り静的 HTML に焼き込まれる (リクエスト毎に 27MB を
  // 読み直さない)。地域絞り込み・地点モード (?lat) はクライアント (PlaceDirectory)
  // に持たせ、このページ自体は searchParams を読まず静的 (ISR) に保つ。
  const summaries = await getAllPrefSummaries();
  const byPref = new Map(summaries.map((s) => [s.prefectureName, s]));

  // 出没件数 (90日) でホットスポットを判別。上位 5 県だけ赤バッジで強調する。
  const topCount90Set = new Set(
    [...summaries]
      .sort((a, b) => b.count90d - a.count90d)
      .slice(0, 5)
      .map((s) => s.prefectureName),
  );

  const regions: RegionData[] = REGIONS.map((r) => ({
    label: r.label,
    cells: r.prefs.map((pref) => {
      const s = byPref.get(pref);
      const count90 = s?.count90d ?? 0;
      return {
        pref,
        count365: s?.count365d ?? 0,
        count90,
        isHot: topCount90Set.has(pref) && count90 > 0,
      };
    }),
  }));

  return (
    <PageShell
      title="市町村で探す"
      lead="全国の市町村のクマ出没情報を整理しています。まず都道府県を選ぶと、市町村別の警戒度マップに進めます。"
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">市町村で探す</span>
      </nav>

      {/* ページ内の絞り込み検索（フラグ裏）。都道府県／市町村名で該当ページへ直行。
          府県をまたいで市町村名から一発で飛べるのがこの窓の主目的。 */}
      {isDirectorySearchReleased() && (
        <DirectorySearch
          placeholder="都道府県・市町村名で探す（例: 京都市）"
          items={[
            ...REGIONS.flatMap((r) => r.prefs).map<DirectoryItem>((pref) => ({
              label: pref,
              sub: "都道府県",
              href: `/place/${encodeURIComponent(pref)}`,
            })),
            ...JAPAN_MUNICIPALITIES.map<DirectoryItem>((m) => ({
              label: m.cityName,
              sub: m.prefName,
              href: `/place/${encodeURIComponent(m.prefName)}/${encodeURIComponent(m.cityName)}`,
            })),
          ]}
        />
      )}

      {/* 全国警戒マップへの誘導カード — 県別から横断的にどの市町村で
          一番出ているかを見たいユーザーをここで拾う。 */}
      <Link
        href="/place/ranking"
        className="not-prose mb-6 flex items-center justify-between gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-stone-900 hover:bg-amber-100"
      >
        <span className="flex items-center gap-3">
          <Mountain size={26} strokeWidth={1.7} className="text-amber-600" aria-hidden />
          <span>
            <span className="block text-sm font-bold">
              全国クマ警戒マップ（直近90日）
            </span>
            <span className="block text-xs text-stone-600">
              全国の市町村を横断して、警戒度の高いエリア 50 市町村を一覧
            </span>
          </span>
        </span>
        <span aria-hidden className="shrink-0 text-sm font-bold text-amber-700">→</span>
      </Link>

      <PlaceDirectory regions={regions} />

      {/* /place はヘッダーナビから直接来られる top-level なので「クマ対策トップに
          戻る」ボタンは画面遷移上のミスマッチ。ヘッダーナビ + パンくず + 各市町村
          内の戻り導線で十分なため、ここでは戻りリンクを置かない。 */}
    </PageShell>
  );
}
