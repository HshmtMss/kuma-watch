import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PlacePointClient from "./PlacePointClient";
import { getAllPrefSummaries } from "@/lib/place-index";

const SITE_URL = "https://kuma-watch.jp";

// ISR: 30 分ごとに再生成。出没データの取り込み (1 日 1 回) を遅延少なく反映。
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "都道府県から探す｜KumaWatch 全国クマ出没マップ",
  description:
    "47 都道府県のクマ出没情報を地域別に整理。北海道・東北・関東・中部・近畿・中国・四国・九州の各都道府県ページから、最新の出没件数・市町村別の警戒レベルを確認できます。",
  alternates: { canonical: `${SITE_URL}/place` },
  openGraph: {
    title: "都道府県から探す｜KumaWatch",
    description: "47 都道府県のクマ出没情報を地域別に整理。",
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
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-xs text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">都道府県から探す</span>
      </nav>

      {REGIONS.map((region) => (
        <section key={region.label} className="not-prose mt-6">
          <h2 className="mb-2 text-base font-bold text-stone-900 sm:text-lg">
            {region.label}
          </h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {region.prefs.map((pref) => {
              const s = byPref.get(pref);
              const count = s?.totalCount ?? 0;
              const count90 = s?.count90d ?? 0;
              const isHot = topCount90Set.has(pref) && count90 > 0;
              return (
                <li key={pref}>
                  <Link
                    href={`/place/${encodeURIComponent(pref)}`}
                    className={`flex items-baseline justify-between rounded-xl border bg-white px-4 py-3 hover:border-amber-400 hover:bg-amber-50/40 ${
                      isHot ? "border-red-200" : "border-stone-200"
                    }`}
                  >
                    <span className="text-sm font-semibold text-stone-900">
                      {pref}
                    </span>
                    <span className="flex items-baseline gap-1.5">
                      {isHot && (
                        <span className="rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-700">
                          90日 {count90}
                        </span>
                      )}
                      <span className="text-[11px] tabular-nums text-stone-500">
                        {count.toLocaleString()}件
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </PageShell>
  );
}
