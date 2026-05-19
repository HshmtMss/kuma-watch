import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "nut-crop-map";
const TITLE =
  "ブナ・ナラ結実マップ 2025–2026 — 各都道府県の調査機関と凶作年の検証";
const DESCRIPTION =
  "ブナ・ミズナラ・コナラの結実状況はクマの秋の出没を強く左右する。各都道府県の林業研究機関による豊凶調査の公式ソースを集約し、過去の凶作年（2020・2023）と KumaWatch 出没件数の対応を検証。獣医工学ラボ運営。";

export const revalidate = 86400; // 1日

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

type PrefSource = {
  pref: string;
  agency: string;
  url?: string;
  freq: string;
  note?: string;
};

// ブナ・ナラの結実調査を行っている各都道府県の主要機関。
// 公式調査結果ページのトップ URL は変動するため、原則として機関トップへリンク。
// 利用者は機関サイト内で最新年度の調査結果 PDF を探す形になる。
const SOURCES: PrefSource[] = [
  {
    pref: "北海道",
    agency: "北海道立総合研究機構 林業試験場",
    url: "https://www.hro.or.jp/list/forest/research/fri/",
    freq: "毎年（道庁公表）",
    note: "ヒグマは堅果以外の食物（サケ等）依存も高く、ブナ凶作の影響は本州より限定的",
  },
  {
    pref: "青森県",
    agency: "青森県産業技術センター 林業研究所",
    url: "https://www.aomori-itc.or.jp/index.php?id=4046",
    freq: "毎年 8〜9 月",
    note: "白神山地のブナ結実調査が著名",
  },
  {
    pref: "岩手県",
    agency: "岩手県林業技術センター",
    url: "https://www2.pref.iwate.jp/~hp2032/",
    freq: "毎年",
  },
  {
    pref: "秋田県",
    agency: "秋田県林業研究研修センター",
    url: "https://www.pref.akita.lg.jp/pages/genre/4080",
    freq: "毎年 8〜9 月",
    note: "出没予報の根拠データとして毎年公表",
  },
  {
    pref: "山形県",
    agency: "山形県森林研究研修センター",
    url: "https://www.pref.yamagata.jp/050017/sangyo/norinsuisan/shinrin/index.html",
    freq: "毎年",
  },
  {
    pref: "宮城県",
    agency: "宮城県林業技術総合センター",
    url: "https://www.pref.miyagi.jp/site/rs/",
    freq: "毎年",
  },
  {
    pref: "福島県",
    agency: "福島県林業研究センター",
    url: "https://www.pref.fukushima.lg.jp/sec/36035c/",
    freq: "毎年",
  },
  {
    pref: "新潟県",
    agency: "新潟県森林研究所",
    url: "https://www.pref.niigata.lg.jp/sec/shinrinkenkyu/",
    freq: "毎年 9 月",
    note: "「ツキノワグマ出没予測」の基礎データ",
  },
  {
    pref: "富山県",
    agency: "富山県農林水産総合技術センター 森林研究所",
    url: "https://www.pref.toyama.jp/1611/sangyou/sangyoushinkou/norinsuisan/kenkyukikan/shinrin/",
    freq: "毎年",
  },
  {
    pref: "石川県",
    agency: "石川県林業試験場",
    url: "https://www.pref.ishikawa.lg.jp/ringyou/",
    freq: "毎年",
  },
  {
    pref: "福井県",
    agency: "福井県総合グリーンセンター",
    url: "https://www.pref.fukui.lg.jp/doc/green/index.html",
    freq: "毎年",
  },
  {
    pref: "長野県",
    agency: "長野県林業総合センター",
    url: "https://www.pref.nagano.lg.jp/ringyosogo/",
    freq: "毎年 7〜8 月",
    note: "「ツキノワグマ出没予察」を毎年公表",
  },
  {
    pref: "岐阜県",
    agency: "岐阜県森林研究所",
    url: "https://www.forest.rd.pref.gifu.lg.jp/",
    freq: "毎年",
  },
  {
    pref: "群馬県",
    agency: "群馬県林業試験場",
    url: "https://www.pref.gunma.jp/site/rinshi/",
    freq: "毎年",
  },
  {
    pref: "栃木県",
    agency: "栃木県林業センター",
    url: "https://www.pref.tochigi.lg.jp/g59/index.html",
    freq: "毎年",
  },
  {
    pref: "全国（参考）",
    agency: "森林総合研究所（FFPRI）",
    url: "https://www.ffpri.affrc.go.jp/",
    freq: "随時",
    note: "ブナ豊凶の広域変動・マスティング機構の基礎研究",
  },
];

// 過去の典型的凶作年と、その年のクマ出没件数の関係（環境省統計値）
type HistoricalRow = {
  year: number;
  status: string;
  events: string;
  note: string;
};

const HISTORICAL: HistoricalRow[] = [
  {
    year: 2020,
    status: "東北・北陸でブナ大凶作",
    events: "全国 21,857 件（環境省）",
    note: "前年比 +2.6 倍。秋田・新潟・長野で人身被害が急増",
  },
  {
    year: 2021,
    status: "前年凶作の反動で豊作傾向",
    events: "全国 13,670 件",
    note: "前年比 -37%。クマ出没も明確に減少",
  },
  {
    year: 2022,
    status: "並作〜やや凶作",
    events: "全国 17,989 件",
    note: "平年水準",
  },
  {
    year: 2023,
    status: "東北・北陸で記録的大凶作",
    events: "全国 24,194 件（過去最多級）",
    note: "前年比 +35%。人身被害 218 名・死亡 6 名（環境省・統計開始以来最悪）",
  },
  {
    year: 2024,
    status: "並作（凶作年の反動）",
    events: "全国 12,000 件台",
    note: "前年比 -50%。ブナの結実回復で出没大幅減",
  },
  {
    year: 2025,
    status: "東北で並凶作〜やや凶作（速報）",
    events: "KumaWatch 集計で 39,801 件（10 月時点）",
    note: "アーバンベア化と凶作の複合要因で再び急増",
  },
];

export default function NutCropMapPage() {
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
        <span className="font-semibold text-stone-700">ブナ・ナラ結実マップ</span>
      </nav>

      <p className="lead">
        <strong>要旨</strong>: ブナ・ミズナラ・コナラの結実状況は、その年の秋以降のクマ出没件数を強く左右します。
        本ページでは、各都道府県の林業研究機関が公表する豊凶調査の<strong>一次ソース</strong>を集約し、
        過去の凶作年と KumaWatch 出没件数の対応を検証します。
      </p>

      <h2 id="why">なぜブナ・ナラの結実が重要か</h2>
      <p>
        ツキノワグマは冬眠前（9〜11 月）に大量のカロリーを蓄える必要があります。
        この時期の主食が <strong>ブナ・ミズナラ・コナラ・クリ</strong> といった堅果類です。
        ブナは <strong>マスティング</strong>（複数年に一度の同調的大豊作）という特殊な結実周期を持ち、
        凶作年には広域でほぼ同時に実をつけません。
      </p>
      <p>
        凶作年のクマは山中で食物を得られず、人里に降りて<strong>柿・栗・畑作物・生ゴミ</strong>を求めます。
        これが秋の人身被害・農作物被害が一気に増える生物学的メカニズムです。
        詳しい解説は{" "}
        <Link href="/articles/beech-mast-bear">
          ブナの豊凶とクマの出没 — 隔年結実とマスティングの生物学
        </Link>
        を参照してください。
      </p>

      <h2 id="historical">過去の結実状況とクマ出没件数の対応</h2>
      <p>
        環境省の統計値・各機関の豊凶調査・KumaWatch の集計値を突き合わせると、
        凶作年と出没件数のピークがほぼ一致することが分かります。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">年</th>
              <th className="px-3 py-2 text-left">結実状況</th>
              <th className="px-3 py-2 text-left">クマ出没件数</th>
              <th className="px-3 py-2 text-left">備考</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {HISTORICAL.map((r) => (
              <tr
                key={r.year}
                className={
                  r.status.includes("凶作")
                    ? "bg-red-50/60"
                    : r.status.includes("豊作")
                      ? "bg-green-50/60"
                      : ""
                }
              >
                <td className="px-3 py-2 font-bold tabular-nums">{r.year}</td>
                <td className="px-3 py-2">{r.status}</td>
                <td className="px-3 py-2 tabular-nums">{r.events}</td>
                <td className="px-3 py-2 text-stone-600">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-stone-600">
        ※ 2020 年・2023 年の大凶作年に出没件数がピークを迎え、翌年（2021・2024）は豊作・並作で大幅減少。
        2025 年は東北での結実不良とアーバンベア化（恒常的な市街地依存）の複合で、
        豊凶のみでは説明できない<strong>構造変化</strong>が観察されています。
      </p>

      <h2 id="sources">各都道府県の調査機関一覧</h2>
      <p>
        最新の結実情報は、以下の各機関の公式ページ・年次調査結果 PDF をご確認ください。
        多くの機関は <strong>毎年 8〜9 月</strong>に当年の豊凶調査結果を公表します。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">都道府県</th>
              <th className="px-3 py-2 text-left">調査機関</th>
              <th className="px-3 py-2 text-left">公表頻度</th>
              <th className="px-3 py-2 text-left">備考</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {SOURCES.map((s) => (
              <tr key={s.pref}>
                <td className="px-3 py-2 font-semibold whitespace-nowrap">
                  {s.pref}
                </td>
                <td className="px-3 py-2">
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 underline hover:text-amber-900"
                    >
                      {s.agency}
                    </a>
                  ) : (
                    s.agency
                  )}
                </td>
                <td className="px-3 py-2 text-stone-600 whitespace-nowrap">
                  {s.freq}
                </td>
                <td className="px-3 py-2 text-stone-600">{s.note ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-stone-500">
        ※ リンクは各機関のトップページ等を案内しています。年次の豊凶調査結果は機関サイト内のお知らせ・刊行物ページから検索してください。リンク切れや追加要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先までお寄せください。
      </p>

      <h2 id="kumawatch-usage">KumaWatch のリスクスコアへの組み込み</h2>
      <p>
        KumaWatch では、各都道府県の最新の豊凶情報を{" "}
        <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">
          src/data/nut-crop.ts
        </code>
        に集約し、地域別リスクスコアの<strong>季節係数補正</strong>に組み込んでいます。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">結実レベル</th>
              <th className="px-3 py-2 text-left">スコア補正係数</th>
              <th className="px-3 py-2 text-left">想定される出没傾向</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr className="bg-red-50/60">
              <td className="px-3 py-2 font-semibold">大凶作〜並凶作</td>
              <td className="px-3 py-2 tabular-nums">×1.40</td>
              <td className="px-3 py-2 text-stone-600">人里への大量降下</td>
            </tr>
            <tr className="bg-orange-50/60">
              <td className="px-3 py-2 font-semibold">並凶作〜やや凶作</td>
              <td className="px-3 py-2 tabular-nums">×1.15</td>
              <td className="px-3 py-2 text-stone-600">通常より多い出没</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">平年並み</td>
              <td className="px-3 py-2 tabular-nums">×1.00</td>
              <td className="px-3 py-2 text-stone-600">基準値</td>
            </tr>
            <tr className="bg-green-50/60">
              <td className="px-3 py-2 font-semibold">並作〜やや豊作</td>
              <td className="px-3 py-2 tabular-nums">×0.95</td>
              <td className="px-3 py-2 text-stone-600">山中で完結しやすい</td>
            </tr>
            <tr className="bg-green-50/60">
              <td className="px-3 py-2 font-semibold">豊作</td>
              <td className="px-3 py-2 tabular-nums">×0.90</td>
              <td className="px-3 py-2 text-stone-600">出没はやや減少</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        係数は環境省・各機関の長期統計と KumaWatch の集計値の比から経験的に設定しています。
        実際のリスクは凶作度合いだけでなく、<strong>人口分布・誘引物・前年度の個体数</strong>などにも左右されるため、補正は目安としてご利用ください。
      </p>

      <h2 id="caveats">注意事項</h2>
      <ul>
        <li>
          ブナ・ミズナラ・コナラは<strong>結実周期が異なります</strong>。ブナは数年に 1 度の大豊作、ミズナラ・コナラはより安定して結実する傾向があります。3 種が同時凶作となる年が最も危険です。
        </li>
        <li>
          ヒグマ（北海道）は<strong>サケ・植生・人工餌</strong>など堅果以外の食物源が多く、ブナ凶作の影響はツキノワグマほど強くありません。
        </li>
        <li>
          結実調査は<strong>人手による定点観測</strong>が主であり、機関によって調査地点数・評価基準にばらつきがあります。隣接県でも結果が異なる場合があるため、複数機関の調査を併読することを推奨します。
        </li>
        <li>
          2025 年以降は<strong>「アーバンベア化」</strong>と呼ばれる構造変化が進行しており、豊凶のみでは説明できない出没増加が観察されています。詳細は{" "}
          <Link href="/articles/urban-bear">アーバン・ベア（都市型出没）</Link>
          を参照してください。
        </li>
      </ul>

      <h2 id="related">関連ページ</h2>
      <ul>
        <li>
          <Link href="/articles/beech-mast-bear">
            ブナの豊凶とクマの出没 — 隔年結実とマスティングの生物学
          </Link>
        </li>
        <li>
          <Link href="/articles/autumn-forecast-2026">
            2026 年 秋のクマ大量出没予報
          </Link>
        </li>
        <li>
          <Link href="/articles/bear-2025-retrospective">
            2025 年クマ大量出没を振り返る
          </Link>
        </li>
        <li>
          <Link href="/articles/urban-bear">
            アーバン・ベア（都市型出没）
          </Link>
        </li>
        <li>
          <Link href="/place/ranking">全国クマ出没ランキング 直近 90 日</Link>
        </li>
      </ul>
    </PageShell>
  );
}
