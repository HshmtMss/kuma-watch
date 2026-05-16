import type { Metadata } from "next";
import Link from "next/link";
import CategoryFilter, {
  type CategoryFilterItem,
} from "@/components/CategoryFilter";
import PageShell from "@/components/PageShell";
import PlacePointClient from "./PlacePointClient";
import { getAllPrefSummaries } from "@/lib/place-index";

const SITE_URL = "https://kuma-watch.jp";

// ISR: 30 分ごとに再生成。出没データの取り込み (1 日 1 回) を遅延少なく反映。
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "都道府県から探す｜獣医師監修クマ出没マップ｜KumaWatch",
  description:
    "獣医師監修・獣医工学ラボ運営。全国 47 都道府県のクマ出没情報を地域別に整理。北海道・東北・関東・中部・近畿・中国・四国・九州の各都道府県ページから、最新の出没件数・市町村別の警戒レベルを確認できます。",
  alternates: { canonical: `${SITE_URL}/place` },
  openGraph: {
    title: "都道府県から探す｜獣医師監修クマ出没マップ｜KumaWatch",
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

type SearchParams = Promise<{
  lat?: string;
  lon?: string;
  name?: string;
  src?: string;
  region?: string;
}>;

function isValidLat(n: number) {
  return Number.isFinite(n) && n >= 20 && n <= 50;
}
function isValidLon(n: number) {
  return Number.isFinite(n) && n >= 120 && n <= 150;
}

export default async function PlacePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const lat = Number(sp.lat);
  const lon = Number(sp.lon);

  // 地点指定モード: 既存のシェアリンク等 (?lat=&lon=) を維持する。
  if (sp.lat != null && sp.lon != null && isValidLat(lat) && isValidLon(lon)) {
    return (
      <main className="min-h-[100dvh] bg-gray-50">
        <PlacePointClient lat={lat} lon={lon} name={sp.name} src={sp.src} />
      </main>
    );
  }

  // ディレクトリモード: 47 都道府県を地域ブロック単位で並べる。
  const summaries = await getAllPrefSummaries();
  const byPref = new Map(summaries.map((s) => [s.prefectureName, s]));

  // 地域フィルタ。URL ?region=北海道・東北 のような形で受け取る。
  const validRegionLabels = new Set(REGIONS.map((r) => r.label));
  const activeRegion: string =
    sp.region && validRegionLabels.has(sp.region) ? sp.region : "all";

  // 出没件数 (90日) でホットスポットを判別。上位 5 県だけ赤バッジで強調し、
  // 残りは均一なカードでクリーンに見せる。多すぎる色は逆に視認性を下げるため。
  const topCount90Set = new Set(
    [...summaries]
      .sort((a, b) => b.count90d - a.count90d)
      .slice(0, 5)
      .map((s) => s.prefectureName),
  );

  return (
    <PageShell
      title="都道府県から探す"
      lead="47 都道府県のクマ出没情報を地域別に整理。気になる都道府県を選ぶと市町村別の詳細ページに進めます。"
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">都道府県から探す</span>
      </nav>

      <CategoryFilter
        title="地域で絞り込み"
        accent="amber"
        activeKey={activeRegion}
        items={[
          {
            key: "all",
            href: "/place",
            label: "すべて",
            count: 47,
          },
          ...REGIONS.map<CategoryFilterItem>((r) => ({
            key: r.label,
            href: `/place?region=${encodeURIComponent(r.label)}`,
            label: r.label,
            count: r.prefs.length,
          })),
        ]}
      />

      {/* フィルタ選択時は該当地域のみ、全件時は全 7 ブロック並べる */}
      {(activeRegion === "all"
        ? REGIONS
        : REGIONS.filter((r) => r.label === activeRegion)
      ).map((region) => (
        <section key={region.label} className="not-prose mt-6">
          <h2 className="mb-3 text-lg font-bold text-stone-900 sm:text-xl">
            {region.label}
          </h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {region.prefs.map((pref) => {
              const s = byPref.get(pref);
              const count365 = s?.count365d ?? 0;
              const count90 = s?.count90d ?? 0;
              const isHot = topCount90Set.has(pref) && count90 > 0;
              return (
                <li key={pref}>
                  <Link
                    href={`/place/${encodeURIComponent(pref)}`}
                    className={`flex flex-col gap-1.5 rounded-xl border bg-white px-3 py-2.5 hover:border-amber-400 hover:bg-amber-50/40 ${
                      isHot ? "border-red-200" : "border-stone-200"
                    }`}
                  >
                    {/* 県名を 1 行で確実に収めるため縦スタックにする。
                        横並びだと右側のチップに押されて「北海\n道」のように
                        2 行折返しが起きていた。 */}
                    <span className="whitespace-nowrap text-base font-semibold text-stone-900">
                      {pref}
                    </span>
                    {/* 直近1年 / 直近90日 の 2 段。値 0 でも淡色で残しスケール比較可能に。 */}
                    <span className="flex flex-wrap items-baseline gap-1 text-[11px]">
                      <span
                        className={`rounded-full px-1.5 py-0.5 font-semibold tabular-nums ${
                          count365 > 0
                            ? "bg-amber-100 text-amber-900"
                            : "bg-stone-100 text-stone-400"
                        }`}
                      >
                        1年 {count365.toLocaleString()}
                      </span>
                      <span
                        className={`rounded-full px-1.5 py-0.5 font-semibold tabular-nums ${
                          count90 > 0
                            ? "bg-red-100 text-red-700"
                            : "bg-stone-100 text-stone-400"
                        }`}
                      >
                        90日 {count90.toLocaleString()}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <div className="not-prose mt-10">
        <Link
          href="/measures"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-base font-semibold text-stone-800 shadow-sm hover:border-amber-400 hover:bg-amber-50"
        >
          <span aria-hidden>←</span>
          クマ対策トップに戻る
        </Link>
      </div>
    </PageShell>
  );
}
