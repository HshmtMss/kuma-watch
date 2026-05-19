import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { getAllPlaceCells, type PlaceCell } from "@/lib/place-index";

const SITE_URL = "https://kuma-watch.jp";

// ISR: 30 分。/place/[pref]/[muni] の再生成と歩調を合わせる。
export const revalidate = 1800;

export const metadata: Metadata = {
  // layout.tsx の template が末尾に「｜KumaWatch」を自動付与するので、
  // ここでは KumaWatch を外しておく。
  title:
    "全国クマ警戒マップ 直近90日｜獣医師監修",
  description:
    "全国 1,800 以上の市町村のうち、直近 90 日でクマ出没が多い警戒エリア 50 件を一覧表示。獣医師監修・獣医工学ラボ運営。北海道のヒグマ域・東北のツキノワグマ域を含む全国を横断して警戒度を確認できます。",
  alternates: { canonical: `${SITE_URL}/place/ranking` },
  openGraph: {
    title: "全国クマ警戒マップ 直近90日｜KumaWatch",
    description:
      "全国の市町村別クマ出没件数を直近 90 日で警戒度の高い順に一覧表示。獣医師監修・KumaWatch。",
    url: `${SITE_URL}/place/ranking`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const TOP_N = 50;

type Row = PlaceCell & { rank: number };

export default async function RankingPage() {
  const all = await getAllPlaceCells();
  // 直近90日 desc → 直近1年 desc → 総件数 desc の優先順
  const sorted = [...all].sort((a, b) => {
    if (b.count90d !== a.count90d) return b.count90d - a.count90d;
    if (b.count365d !== a.count365d) return b.count365d - a.count365d;
    return b.count - a.count;
  });
  const top: Row[] = sorted.slice(0, TOP_N).map((c, i) => ({ ...c, rank: i + 1 }));

  const grandTotal90 = all.reduce((s, c) => s + c.count90d, 0);
  const grandTotal365 = all.reduce((s, c) => s + c.count365d, 0);
  const topShare90 = grandTotal90 > 0
    ? (top.reduce((s, r) => s + r.count90d, 0) / grandTotal90) * 100
    : 0;

  return (
    <PageShell
      title="全国クマ警戒マップ（直近90日）"
      lead={`KumaWatch が集計した全国 ${all.length.toLocaleString()} 市町村のうち、直近 90 日で出没件数が多い警戒エリア ${TOP_N} 市町村を一覧表示。獣医工学ラボ運営、毎日自動更新。`}
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <Link href="/place" className="hover:text-stone-900">
          都道府県別
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">警戒マップ</span>
      </nav>

      {/* サマリーカード */}
      <div className="not-prose mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">全国 直近90日</div>
          <div className="mt-1 text-xl font-bold text-stone-900">
            {grandTotal90.toLocaleString()}
          </div>
          <div className="text-[11px] text-stone-400">件</div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">全国 直近1年</div>
          <div className="mt-1 text-xl font-bold text-stone-900">
            {grandTotal365.toLocaleString()}
          </div>
          <div className="text-[11px] text-stone-400">件</div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">集計市町村</div>
          <div className="mt-1 text-xl font-bold text-stone-900">
            {all.length.toLocaleString()}
          </div>
          <div className="text-[11px] text-stone-400">件</div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center">
          <div className="text-xs text-stone-500">Top {TOP_N} の占有率</div>
          <div className="mt-1 text-xl font-bold text-amber-700">
            {topShare90.toFixed(1)}%
          </div>
          <div className="text-[11px] text-stone-400">直近90日</div>
        </div>
      </div>

      <p className="text-sm text-stone-600">
        この {TOP_N} 市町村だけで全国の直近 90 日件数の{" "}
        <strong>{topShare90.toFixed(1)}%</strong> を占めています。
        クマ出没は一部地域に強く集中する傾向があり、これらのエリアは特に警戒が必要です。
      </p>

      <h2>警戒エリア一覧（直近90日 件数の多い順）</h2>
      <p className="text-sm text-stone-600">
        市町村名をタップすると、地区別の出没傾向・最近の事案・周辺マップなど詳細を確認できます。
      </p>

      <ul className="not-prose grid list-none grid-cols-1 gap-2 pl-0 sm:grid-cols-2">
        {top.map((r) => {
          const isHot = r.count90d >= 50;
          return (
            <li key={`${r.prefectureName}/${r.cityName}`}>
              <Link
                href={`/place/${encodeURIComponent(r.prefectureName)}/${encodeURIComponent(r.cityName)}`}
                className={`flex items-center gap-3 rounded-lg border px-3 py-3 hover:border-amber-400 hover:bg-amber-50 ${
                  isHot
                    ? "border-red-200 bg-red-50/30"
                    : "border-gray-200 bg-white"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums ${
                    r.rank <= 3
                      ? "bg-amber-500 text-white"
                      : r.rank <= 10
                        ? "bg-amber-100 text-amber-900"
                        : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {r.rank}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-stone-900">
                    {r.cityName}
                  </span>
                  <span className="block text-[11px] text-stone-500">
                    {r.prefectureName}
                  </span>
                </span>
                <span className="flex shrink-0 items-baseline gap-1">
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums ${
                      r.count365d > 0
                        ? "bg-amber-100 text-amber-900"
                        : "bg-stone-100 text-stone-400"
                    }`}
                  >
                    1年 {r.count365d.toLocaleString()}
                  </span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums ${
                      r.count90d > 0
                        ? "bg-red-100 text-red-700"
                        : "bg-stone-100 text-stone-400"
                    }`}
                  >
                    90日 {r.count90d.toLocaleString()}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <h2>使い方</h2>
      <ul>
        <li>
          この警戒マップは KumaWatch が集計する公開情報を基に、{" "}
          <strong>直近 90 日の出没件数が多い順</strong>
          に警戒エリアを並べています。同件数の場合は直近 1 年、それでも同じなら累計の多い順です。
        </li>
        <li>
          赤い背景の市町村は直近 90 日で 50 件以上の出没があった「特に警戒度が高い」エリアです。
        </li>
        <li>
          各市町村名をタップすると、地区別の出没傾向・月別件数・周辺市町村との比較などを確認できます。
        </li>
        <li>
          地域別に絞り込みたい場合は{" "}
          <Link href="/place">都道府県別ページ</Link>
          、観光地・登山口を中心に見たい場合は{" "}
          <Link href="/spot">観光地ページ</Link>
          をご利用ください。
        </li>
      </ul>

      <h2>注意事項</h2>
      <p>
        本警戒マップは住民・観光客の安全確認を目的とし、KumaWatch が集計した公開情報（環境省・自治体公式オープンデータ）に基づきます。
        自治体の情報公開体制・更新頻度には差があり、件数の多寡が必ずしも実際の出没の多さを完全に反映するわけではない点にご留意ください。
        例えば、公開ページの更新が遅い自治体は実際よりも少なめに見える可能性があります。
        最新かつ正確な情報は各自治体の公式発表をご確認ください。
      </p>
      <p>
        2025 年の年間動向は{" "}
        <Link href="/articles/bear-2025-retrospective">
          2025年クマ大量出没を振り返る
        </Link>
        、2026 年秋の見通しは{" "}
        <Link href="/articles/autumn-forecast-2026">
          2026年 秋のクマ大量出没予報
        </Link>
        をご覧ください。
      </p>
    </PageShell>
  );
}
