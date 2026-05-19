import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "wildlife-plans";
const TITLE =
  "都道府県別 クマ第二種特定鳥獣管理計画 — 公式リンクと数値目標の一覧";
const DESCRIPTION =
  "ツキノワグマ・ヒグマを「第二種特定鳥獣」として管理する各都道府県の公式管理計画を集約。計画期間・個体数推定・捕獲目標・改訂時期を一覧化し、原典の公式 PDF へリンク。獣医工学ラボ運営。";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-05-19",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  author: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp/labs/vet/",
  },
  publisher: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp/labs/vet/",
  },
  mainEntityOfPage: `${SITE_URL}/research/${SLUG}`,
};

type PlanEntry = {
  pref: string;
  species: "ヒグマ" | "ツキノワグマ" | "ヒグマ・ツキノワグマ";
  planName: string;
  url?: string;
  period?: string;
  estimate?: string;
  target?: string;
  note?: string;
};

// 第二種特定鳥獣管理計画は、鳥獣保護管理法に基づき各都道府県が策定する。
// クマを対象とするのは北海道（ヒグマ）と本州各県（ツキノワグマ）。
// URL は計画 PDF のリポジトリトップを示し、改訂で URL が変わっても辿れるようにする。
const PLANS: PlanEntry[] = [
  {
    pref: "北海道",
    species: "ヒグマ",
    planName: "北海道ヒグマ管理計画（第2期）",
    url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma_plan.html",
    period: "2022〜2026 年度",
    estimate: "11,700 頭（中央値）/ 6,600〜19,300 頭（90%CI）",
    target: "個体群を健全に維持しつつ、人身被害ゼロを目指す",
    note: "5 つの地域個体群に分けて管理。生息環境保全と人材育成を重視",
  },
  {
    pref: "青森県",
    species: "ツキノワグマ",
    planName: "青森県ツキノワグマ管理計画",
    url: "https://www.pref.aomori.lg.jp/nature/protection/kuma_plan.html",
    period: "2022〜2026 年度",
    estimate: "約 1,700 頭",
    target: "白神・八甲田・下北地域の個体群維持",
  },
  {
    pref: "岩手県",
    species: "ツキノワグマ",
    planName: "第 5 期岩手県ツキノワグマ管理計画",
    url: "https://www.pref.iwate.jp/kurashikankyou/shizen/yaseichoju/index.html",
    period: "2022〜2026 年度",
    estimate: "3,400 頭程度",
    target: "個体数を 2,000〜4,000 頭の範囲で維持",
  },
  {
    pref: "秋田県",
    species: "ツキノワグマ",
    planName: "第 5 期秋田県ツキノワグマ管理計画",
    url: "https://www.pref.akita.lg.jp/pages/archive/49625",
    period: "2022〜2026 年度",
    estimate: "約 4,400 頭（県内最多級）",
    target: "捕獲上限率 12%/年",
    note: "2023 年の大量出没を受け、捕獲上限の見直しを検討中",
  },
  {
    pref: "山形県",
    species: "ツキノワグマ",
    planName: "第 5 次山形県ツキノワグマ管理計画",
    url: "https://www.pref.yamagata.jp/060054/kurashi/sizen/yaseichoju/tukinowaguma.html",
    period: "2022〜2026 年度",
    estimate: "約 3,000 頭",
    target: "個体数 2,400〜3,600 頭での維持",
  },
  {
    pref: "宮城県",
    species: "ツキノワグマ",
    planName: "第 4 期宮城県ツキノワグマ管理計画",
    url: "https://www.pref.miyagi.jp/soshiki/sizenhogo/tukinowaguma.html",
    period: "2022〜2026 年度",
    estimate: "約 1,700 頭",
  },
  {
    pref: "福島県",
    species: "ツキノワグマ",
    planName: "福島県ツキノワグマ管理計画",
    url: "https://www.pref.fukushima.lg.jp/sec/16035d/wildlife-tsukinowaguma.html",
    period: "2022〜2026 年度",
    estimate: "約 2,000 頭",
  },
  {
    pref: "新潟県",
    species: "ツキノワグマ",
    planName: "第 5 期新潟県ツキノワグマ管理計画",
    url: "https://www.pref.niigata.lg.jp/sec/shizenkankyo/1356896834301.html",
    period: "2022〜2026 年度",
    estimate: "約 1,500 頭",
  },
  {
    pref: "富山県",
    species: "ツキノワグマ",
    planName: "第 5 期富山県ツキノワグマ管理計画",
    url: "https://www.pref.toyama.jp/1709/kurashi/kankyoushizen/shizen/yaseidoubutu/kj00021727.html",
    period: "2022〜2026 年度",
    estimate: "約 900 頭",
    note: "2026 年 4 月の人身被害多発を受け、緊急対応を強化中",
  },
  {
    pref: "石川県",
    species: "ツキノワグマ",
    planName: "石川県ツキノワグマ管理計画",
    url: "https://www.pref.ishikawa.lg.jp/sizen/wildlife/tsukinowaguma.html",
    period: "2022〜2026 年度",
    estimate: "約 600 頭",
  },
  {
    pref: "福井県",
    species: "ツキノワグマ",
    planName: "福井県ツキノワグマ管理計画",
    url: "https://www.pref.fukui.lg.jp/doc/sizen/yaseidoubutsu/index.html",
    period: "2022〜2026 年度",
    estimate: "約 500 頭",
  },
  {
    pref: "長野県",
    species: "ツキノワグマ",
    planName: "第 5 期長野県ツキノワグマ管理計画",
    url: "https://www.pref.nagano.lg.jp/yasei/kurashi/shizen/hogo/yacho/index.html",
    period: "2022〜2026 年度",
    estimate: "約 4,000 頭（県内最多級）",
    target: "個体数 3,000〜5,000 頭の維持",
  },
  {
    pref: "岐阜県",
    species: "ツキノワグマ",
    planName: "岐阜県ツキノワグマ管理計画",
    url: "https://www.pref.gifu.lg.jp/page/4729.html",
    period: "2022〜2026 年度",
    estimate: "約 1,500 頭",
  },
  {
    pref: "群馬県",
    species: "ツキノワグマ",
    planName: "群馬県ツキノワグマ管理計画",
    url: "https://www.pref.gunma.jp/page/4842.html",
    period: "2022〜2026 年度",
    estimate: "約 1,000 頭",
  },
  {
    pref: "栃木県",
    species: "ツキノワグマ",
    planName: "栃木県ツキノワグマ管理計画",
    url: "https://www.pref.tochigi.lg.jp/d04/eco/shizenkankyou/shizen/yaseidoubutu.html",
    period: "2022〜2026 年度",
    estimate: "約 1,000 頭",
  },
  {
    pref: "山梨県",
    species: "ツキノワグマ",
    planName: "山梨県ツキノワグマ管理計画",
    url: "https://www.pref.yamanashi.jp/midori/57229019891.html",
    period: "2022〜2026 年度",
    estimate: "約 600 頭",
  },
  {
    pref: "静岡県",
    species: "ツキノワグマ",
    planName: "静岡県ツキノワグマ管理計画",
    url: "https://www.pref.shizuoka.jp/kurashikankyo/shizen/index.html",
    period: "2022〜2026 年度",
  },
  {
    pref: "京都府",
    species: "ツキノワグマ",
    planName: "京都府ツキノワグマ管理計画",
    url: "https://www.pref.kyoto.jp/yaseichoju/index.html",
    period: "2022〜2026 年度",
    estimate: "約 800 頭",
  },
  {
    pref: "兵庫県",
    species: "ツキノワグマ",
    planName: "第 4 期兵庫県ツキノワグマ管理計画",
    url: "https://www.pref.hyogo.lg.jp/ks25/kuma-keikaku.html",
    period: "2022〜2026 年度",
    estimate: "約 940 頭",
    note: "1996 年に絶滅危惧地域個体群指定 → 2016 年解除。回復事例として注目",
  },
  {
    pref: "鳥取県",
    species: "ツキノワグマ",
    planName: "鳥取県ツキノワグマ管理計画",
    url: "https://www.pref.tottori.lg.jp/kankyo/",
    period: "2022〜2026 年度",
    estimate: "約 250 頭",
    note: "東中国地域個体群（鳥取・島根・岡山・広島・兵庫）として共同管理",
  },
  {
    pref: "島根県",
    species: "ツキノワグマ",
    planName: "島根県ツキノワグマ管理計画",
    url: "https://www.pref.shimane.lg.jp/life/nature/kankyo/yaseichoju/",
    period: "2022〜2026 年度",
  },
  {
    pref: "岡山県",
    species: "ツキノワグマ",
    planName: "岡山県ツキノワグマ管理計画",
    url: "https://www.pref.okayama.jp/site/zerocarbon-okayama/",
    period: "2022〜2026 年度",
  },
  {
    pref: "広島県",
    species: "ツキノワグマ",
    planName: "広島県ツキノワグマ管理計画",
    url: "https://www.pref.hiroshima.lg.jp/site/eco/",
    period: "2022〜2026 年度",
  },
  {
    pref: "全国（参考）",
    species: "ヒグマ・ツキノワグマ",
    planName: "クマ類保護及び管理に関する基本指針（環境省）",
    url: "https://www.env.go.jp/nature/choju/plan/plan3-2c.html",
    period: "随時改訂",
    note: "2026 年 4 月、クマが新たに「指定管理鳥獣」に追加",
  },
];

// 種別グルーピング順
function speciesOrder(s: PlanEntry["species"]): number {
  if (s === "ヒグマ") return 0;
  if (s === "ツキノワグマ") return 1;
  return 2;
}

export default function WildlifePlansPage() {
  const sortedPlans = [...PLANS].sort((a, b) => {
    const so = speciesOrder(a.species) - speciesOrder(b.species);
    if (so !== 0) return so;
    return a.pref.localeCompare(b.pref, "ja");
  });

  return (
    <PageShell title={TITLE} lead={DESCRIPTION}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <Link href="/research" className="hover:text-stone-900">
          研究・知見
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">管理計画一覧</span>
      </nav>

      <p className="lead">
        <strong>要旨</strong>: 鳥獣保護管理法に基づき、各都道府県は
        <strong>第二種特定鳥獣管理計画</strong>でクマを科学的に管理しています。
        個体数推定・捕獲上限・生息域別の対応方針を 5 年単位で策定し、毎年モニタリング結果を公表。
        本ページは各都道府県の現行計画を一覧化し、原典 PDF へのリンクを集約します。
      </p>

      <h2 id="background">なぜ「第二種特定鳥獣管理計画」が必要か</h2>
      <p>
        日本のクマ管理は <strong>科学的・順応的管理（Adaptive Management）</strong>を理念としています。
        個体数を多すぎず少なすぎず維持し、人身被害と農林業被害を最小化しながら、地域固有の個体群を絶滅させない。
        この目標を実現するために、各都道府県は以下のサイクルで計画を運用します。
      </p>
      <ol>
        <li>個体数推定（カメラトラップ・ヘアトラップ・捕獲数解析）</li>
        <li>5 年計画策定（捕獲上限率・地域区分・モニタリング指標）</li>
        <li>毎年の捕獲実績・出没件数・人身被害のモニタリング</li>
        <li>翌年度の捕獲上限の調整</li>
        <li>5 年後の計画見直し</li>
      </ol>
      <p>
        2026 年 4 月、環境省はクマを <strong>「指定管理鳥獣」</strong>に追加しました。
        これによりイノシシ・ニホンジカと同様に、国の交付金で集中的に管理事業を実施できる体制となりました。
        詳細は{" "}
        <Link href="/articles/bear-laws">クマと関わる法律</Link>
        を参照してください。
      </p>

      <h2 id="plans">都道府県別 管理計画一覧</h2>
      <p>
        各計画の正式名称・期間・個体数推定・公式リンクを掲載。最新の改訂版・モニタリング結果は各リンク先でご確認ください。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">都道府県</th>
              <th className="px-3 py-2 text-left">対象種</th>
              <th className="px-3 py-2 text-left">計画名</th>
              <th className="px-3 py-2 text-left">期間</th>
              <th className="px-3 py-2 text-left">個体数推定</th>
              <th className="px-3 py-2 text-left">備考</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {sortedPlans.map((p) => (
              <tr key={`${p.pref}-${p.species}`}>
                <td className="px-3 py-2 font-semibold whitespace-nowrap">
                  {p.pref}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      p.species === "ヒグマ"
                        ? "bg-stone-800 text-white"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {p.species}
                  </span>
                </td>
                <td className="px-3 py-2">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 underline hover:text-amber-900"
                    >
                      {p.planName}
                    </a>
                  ) : (
                    p.planName
                  )}
                </td>
                <td className="px-3 py-2 text-stone-600 whitespace-nowrap">
                  {p.period ?? "—"}
                </td>
                <td className="px-3 py-2 text-stone-600">
                  {p.estimate ?? "—"}
                </td>
                <td className="px-3 py-2 text-stone-600">{p.note ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="caveats">本ページの注意事項</h2>
      <ul>
        <li>
          掲載情報は <strong>2026 年 5 月時点</strong>に各都道府県公式サイトを参照した内容です。最新の改訂・モニタリング結果は各リンク先公式ページでご確認ください。
        </li>
        <li>
          個体数推定値は<strong>幅のある中央値</strong>であり、調査年度・調査手法によって変動します。「○○頭」という数字は政策議論の出発点に過ぎず、現場での出没予測には用いないでください。
        </li>
        <li>
          リンクは各機関のトップ・関連ページを案内しています。年度別計画 PDF は各機関サイト内の検索でお探しください。
        </li>
        <li>
          兵庫県以西の個体群（東中国・西中国地域）は<strong>絶滅危惧地域個体群</strong>に指定されてきた経緯があり、捕獲よりも保護を重視する運用が続けられています。
        </li>
      </ul>

      <h2 id="related">関連ページ</h2>
      <ul>
        <li>
          <Link href="/articles/bear-laws">
            クマと関わる法律 — 鳥獣保護管理法・指定管理鳥獣・狩猟法
          </Link>
        </li>
        <li>
          <Link href="/articles/culling-debate">
            駆除をめぐる議論 — 保護派・捕獲派・現場の声
          </Link>
        </li>
        <li>
          <Link href="/articles/why-increasing">
            クマ出没が増えている理由 — 構造的要因の解説
          </Link>
        </li>
        <li>
          <Link href="/research/nut-crop-map">
            ブナ・ナラ結実マップ 2025–2026
          </Link>
        </li>
        <li>
          <Link href="/place/ranking">全国クマ警戒マップ 直近 90 日</Link>
        </li>
      </ul>

      <p className="text-sm text-stone-500">
        リンク切れ・情報更新のご指摘は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先までお寄せください。
      </p>
    </PageShell>
  );
}
