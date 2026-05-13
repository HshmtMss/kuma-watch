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

  return (
    <PageShell
      title="都道府県から探す"
      lead="47 都道府県のクマ出没情報を地域別に整理しています。お住まいの地域・目的地の警戒レベルを直接確認できます。"
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

      <p className="text-sm text-stone-600">
        地図 UI で位置を確認したい場合は{" "}
        <Link href="/" className="text-blue-700 underline">
          トップの警戒レベルマップ
        </Link>{" "}
        をご利用ください。観光地・登山口から探す場合は{" "}
        <Link href="/spot" className="text-blue-700 underline">
          観光地から探す
        </Link>
        へ。
      </p>

      {/* 件数に応じたアクセントカラー。視覚的に「どこが多いか」を一覧で把握できるようにする。
          90日件数ベース (近時の活動量) で 4 段階に分ける。 */}
      {(() => {
        const allCount90 = REGIONS.flatMap((r) =>
          r.prefs.map((p) => byPref.get(p)?.count90d ?? 0),
        ).filter((n) => n > 0);
        const sorted = [...allCount90].sort((a, b) => b - a);
        const high = sorted[Math.floor(sorted.length * 0.1)] ?? 9999;
        const mid = sorted[Math.floor(sorted.length * 0.3)] ?? 9999;
        const low = sorted[Math.floor(sorted.length * 0.6)] ?? 9999;
        const tone = (n: number) => {
          if (n === 0) return { bg: "bg-stone-50", border: "border-stone-200", text: "text-stone-500", num: "text-stone-400" };
          if (n >= high) return { bg: "bg-red-50", border: "border-red-200", text: "text-red-900", num: "text-red-700" };
          if (n >= mid) return { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", num: "text-amber-700" };
          if (n >= low) return { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-900", num: "text-yellow-700" };
          return { bg: "bg-white", border: "border-stone-200", text: "text-stone-900", num: "text-stone-500" };
        };
        return REGIONS.map((region) => (
          <section key={region.label} className="not-prose mt-6">
            <h2 className="mb-2 text-base font-bold text-stone-900 sm:text-lg">
              {region.label}
            </h2>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {region.prefs.map((pref) => {
                const s = byPref.get(pref);
                const count = s?.totalCount ?? 0;
                const count90 = s?.count90d ?? 0;
                const latest = s?.latestDate;
                const t = tone(count90);
                return (
                  <li key={pref}>
                    <Link
                      href={`/place/${encodeURIComponent(pref)}`}
                      className={`block rounded-xl border ${t.border} ${t.bg} px-4 py-3 hover:brightness-95`}
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <div className={`text-sm font-semibold ${t.text}`}>
                          {pref}
                        </div>
                        {count90 > 0 && (
                          <div className={`text-[10px] font-bold tabular-nums ${t.num}`}>
                            90日 {count90}
                          </div>
                        )}
                      </div>
                      <div className="mt-0.5 flex items-baseline gap-2 text-[11px] text-stone-500">
                        <span className="tabular-nums">
                          {count.toLocaleString()} 件
                        </span>
                        {latest && (
                          <span className="text-stone-400">最新 {latest}</span>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ));
      })()}

      <h2>関連リンク</h2>
      <ul className="not-prose space-y-2 text-sm">
        <li>
          <Link href="/spot" className="text-blue-700 underline">
            🏔️ 観光地・登山口から探す（高尾山・富士山ほか）
          </Link>
        </li>
        <li>
          <Link href="/research" className="text-blue-700 underline">
            📚 研究・知見（日次・月次レポート）
          </Link>
        </li>
        <li>
          <Link href="/articles" className="text-blue-700 underline">
            📰 クマ対策の解説記事一覧
          </Link>
        </li>
      </ul>
    </PageShell>
  );
}
