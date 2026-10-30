import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "wildlife-plans";
const TITLE =
  "都道府県別 クマ第二種特定鳥獣管理計画 — 公式リンクと推定生息数の一覧";
const DESCRIPTION =
  "ツキノワグマ・ヒグマを「第二種特定鳥獣」として管理する各都道府県の公式管理計画を集約。計画期間と、計画に書かれた推定生息数を一覧化し、各都道府県の公式ページへリンク。獣医工学ラボ運営。";

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
  dateModified: "2026-10-31",
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
  note?: string;
};

// 第二種特定鳥獣管理計画は、鳥獣保護管理法に基づき各都道府県が策定する。
// クマを対象とするのは北海道（ヒグマ）と本州各府県（ツキノワグマ）。
// URL は各都道府県の計画掲載ページ（PDF の置き場）を示し、改訂で PDF の URL が変わっても辿れるようにする。
// 期間・推定生息数・備考は、すべて計画本文（または同じページの公式資料）に書かれた値だけを載せる。
// 確認できなかった項目は undefined のままにし、表では「—」と表示する。
// 2026-10-31 に全行を公式資料と照合して作り直した。
const PLANS: PlanEntry[] = [
  {
    pref: "北海道",
    species: "ヒグマ",
    planName: "北海道ヒグマ管理計画（第 2 期）",
    url: "https://www.pref.hokkaido.lg.jp/ks/skn/higuma/higuma.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "12,200 頭（2022 年・中央値、90% 信用区間 6,300〜21,300 頭）",
    note: "2024 年 12 月に一部改定。地域個体群ごとに管理し、捕獲目標は毎年の個体数推定をもとに見直す",
  },
  {
    pref: "青森県",
    species: "ツキノワグマ",
    planName: "青森県第二種特定鳥獣管理計画（第 1 次ツキノワグマ）",
    url: "https://www.pref.aomori.lg.jp/soshiki/kankyo/shizen/kakushuchoujuukeikaku.html",
    period: "2025 年 11 月〜2032 年 3 月",
    estimate: "1,614 頭（2024 年度調査、95% 信頼区間 940〜2,924 頭）",
    note: "2025 年 11 月に初めて策定",
  },
  {
    pref: "岩手県",
    species: "ツキノワグマ",
    planName: "第 5 次ツキノワグマ管理計画",
    url: "https://www.pref.iwate.jp/kurashikankyou/shizen/yasei/hogo/1053229.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "約 3,700 頭（2020 年度末）",
    note: "2024 年 10 月に一部改定。北上山地・北奥羽の 2 つの地域個体群に分けて管理",
  },
  {
    pref: "秋田県",
    species: "ツキノワグマ",
    planName: "秋田県第二種特定鳥獣管理計画（第 6 次ツキノワグマ）",
    url: "https://www.pref.akita.lg.jp/pages/archive/64249",
    period: "2025 年 4 月〜2030 年 3 月",
    estimate: "約 2,900 頭（2024 年度当初、シミュレーションによる推定）",
    note: "2020 年 4 月時点の推定は 2,800〜6,000 頭（中間値 4,400 頭）。手法が異なるため単純比較はできないと計画に明記。目標個体数が決まるまでは 2,900 頭程度の維持を目安とする",
  },
  {
    pref: "山形県",
    species: "ツキノワグマ",
    planName: "第 4 期山形県ツキノワグマ管理計画",
    url: "https://www.pref.yamagata.jp/050011/kurashi/shizen/seibutsu/choujuuhogo/kumahogokanri.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "約 2,300 頭（2021 年 4 月時点）",
    note: "計画期末（2026 年度末）に概ね 2,000 頭とすることを目標に捕獲水準を設定",
  },
  {
    pref: "宮城県",
    species: "ツキノワグマ",
    planName: "第四期宮城県ツキノワグマ管理計画",
    url: "https://www.pref.miyagi.jp/soshiki/sizenhogo/tukinowaguma-kanrikeikaku.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "3,147 頭（2020 年度調査、95% 信頼区間 1,618〜6,327 頭）",
    note: "2025 年 9 月に一部改正",
  },
  {
    pref: "福島県",
    species: "ツキノワグマ",
    planName: "福島県ツキノワグマ管理計画（第 4 期）",
    url: "https://www.pref.fukushima.lg.jp/sec/16035b/yaseityouyuuhogokannrijigyoukeikaku-fukushima.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "約 4,425〜7,116 頭（2020 年度、平均値 5,576 頭）",
    note: "計画では、全県の推定生息数は「あくまで参考値」としている",
  },
  {
    pref: "新潟県",
    species: "ツキノワグマ",
    planName: "第三期新潟県ツキノワグマ管理計画",
    url: "https://www.pref.niigata.lg.jp/sec/kankyotaisaku/1319666440488.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "1,118 頭（2023 年 12 月末時点・中央値、95% 信頼区間 369〜3,669 頭）",
    note: "2024 年 10 月に一部変更",
  },
  {
    pref: "富山県",
    species: "ツキノワグマ",
    planName: "富山県ツキノワグマ管理計画（第 4 期、一部変更）",
    url: "https://www.pref.toyama.jp/1709/kurashi/kankyoushizen/shizen/kanrikeikaku/kj00017572.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "約 1,460 頭（2018 年度末）",
    note: "2024 年 9 月・2026 年 9 月に一部変更。年間捕獲上限は推定個体数の 12% にあたる 175 頭",
  },
  {
    pref: "石川県",
    species: "ツキノワグマ",
    planName: "第 3 期石川県ツキノワグマ管理計画",
    url: "https://www.pref.ishikawa.lg.jp/sizen/hogokanri/hogokanri.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "1,201 頭（2020 年・中央値、90% 信頼区間 440〜3,643 頭）",
  },
  {
    pref: "福井県",
    species: "ツキノワグマ",
    planName: "福井県第二種特定鳥獣管理計画（ツキノワグマ）",
    url: "https://www.pref.fukui.lg.jp/doc/shizen/tsukinowaguma/bear_plan2025.html",
    period: "2025 年 4 月〜2027 年 3 月",
    estimate:
      "嶺北 904 頭（95% 信用区間 755〜1,136 頭）・嶺南 313 頭（同 271〜360 頭）（2024 年度・中央値）",
    note: "それまでの第一種特定鳥獣保護計画（保護の計画）を廃止し、管理の計画に切り替えた",
  },
  {
    pref: "長野県",
    species: "ツキノワグマ",
    planName: "第二種特定鳥獣管理計画（第 5 期ツキノワグマ保護管理）",
    url: "https://www.pref.nagano.lg.jp/yasei/dai5ki-tsukinowaguma.html",
    period: "2022 年 5 月〜2027 年 3 月",
    estimate: "7,270 頭（2020 年度・中央値、推定幅 3,831〜10,128 頭）",
    note: "保護管理ユニットごとに年間の捕獲上限数を設定",
  },
  {
    pref: "岐阜県",
    species: "ツキノワグマ",
    planName: "第二種特定鳥獣管理計画（ツキノワグマ）第 3 期",
    url: "https://www.pref.gifu.lg.jp/page/4783.html",
    period: "2024 年 4 月〜2029 年 3 月",
    estimate: "北アルプス 2,445 頭・白山・奥美濃 1,263 頭（2022 年度・中央値）",
    note: "総捕獲数の上限は推定生息数の 10%",
  },
  {
    pref: "群馬県",
    species: "ツキノワグマ",
    planName: "群馬県ツキノワグマ適正管理計画（第三期）",
    url: "https://www.pref.gunma.jp/page/7035.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "2,022 頭（2020 年度・中央値。越後三国 1,512 頭・関東山地 510 頭）",
    note: "2025 年 3 月に一部改定",
  },
  {
    pref: "栃木県",
    species: "ツキノワグマ",
    planName: "栃木県ツキノワグマ管理計画（五期計画）",
    url: "https://www.pref.tochigi.lg.jp/d04/eco/shizenkankyou/shizen/kumahogokannri3.html",
    period: "2025 年 4 月〜2030 年 3 月",
    estimate: "961 頭（2024 年度・中央値、625〜1,330 頭）",
    note: "捕獲上限数は中央値の 15% にあたる 145 頭",
  },
  {
    pref: "山梨県",
    species: "ツキノワグマ",
    planName: "第 1 期山梨県第二種特定鳥獣（ツキノワグマ）管理計画",
    url: "https://www.pref.yamanashi.jp/shizen/11689186440.html",
    period: "2026 年 4 月〜2027 年 3 月",
    estimate: "1,038 頭（2025 年度調査・中央値、95% 信用区間 512〜2,033 頭）",
    note: "2026 年 3 月に初めて策定（それまでは「ツキノワグマ保護管理指針」）",
  },
  {
    pref: "静岡県",
    species: "ツキノワグマ",
    planName: "静岡県第二種特定鳥獣管理計画（ツキノワグマ）（案）",
    url: "https://www.pref.shizuoka.jp/kensei/gyoseikaikaku/johokokai/1002310/1067293/1067296/1085476.html",
    period: "2027 年 4 月〜2032 年 3 月（案）",
    estimate: "543 頭（2024 年調査・県全域の中央値、推計値 386〜738 頭）※計画案の値",
    note: "まだ策定前。2026 年 9〜10 月に計画案への意見募集を実施",
  },
  {
    pref: "京都府",
    species: "ツキノワグマ",
    planName: "第二種特定鳥獣管理計画 －ツキノワグマ－",
    url: "https://www.pref.kyoto.jp/choujyu/tokuteichoujyu-hogokanri.html",
    period: "2021 年 11 月〜2027 年 3 月",
    estimate:
      "丹後個体群 約 320〜415 頭（2025 年度末）・丹波個体群 約 595 頭（2024 年度末）※令和 8 年度事業実施計画",
    note: "第一種特定鳥獣保護計画（保護の計画）から切り替えた。計画策定時（2020 年度）の推定は丹後 約 990 頭・丹波 約 650 頭",
  },
  {
    pref: "兵庫県",
    species: "ツキノワグマ",
    planName: "第 2 期ツキノワグマ管理計画",
    url: "https://web.pref.hyogo.lg.jp/nk27/12jityojyuhogokanrikeikaku.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate:
      "東中国地域個体群 808 頭・近畿北部地域個体群西側 814 頭（2022 年当初の見込み・中央値）",
    note: "1996 年度から狩猟を禁止。2016 年度に制限付きで再開したが、推定生息数が 800 頭を下回ったため 2020 年度から再び禁止",
  },
  {
    pref: "鳥取県",
    species: "ツキノワグマ",
    planName: "鳥取県第二種特定鳥獣（ツキノワグマ）管理計画",
    url: "https://www.pref.tottori.lg.jp/282577.htm",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "県内 364 頭（中央値、95% 信用区間 227〜581 頭）",
    note: "東中国地域個体群（2020 年・中央値 844 頭）を京都府・兵庫県・岡山県と広域で管理",
  },
  {
    pref: "島根県",
    species: "ツキノワグマ",
    planName: "第二種特定鳥獣（ツキノワグマ）管理計画",
    url: "https://www.pref.shimane.lg.jp/industry/norin/choujyu_taisaku/chojuhogo.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "西中国地域個体群 767〜1,946 頭（2020 年 9 月末・中央値 1,307 頭）",
    note: "広島県・山口県と合同で西中国地域個体群を管理",
  },
  {
    pref: "岡山県",
    species: "ツキノワグマ",
    planName: "第 6 期 第二種特定鳥獣（ツキノワグマ）管理計画",
    url: "https://www.pref.okayama.jp/page/492442.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "東中国地域個体群 844 頭（2020 年・中央値、95% 信用区間 651〜1,093 頭）",
  },
  {
    pref: "広島県",
    species: "ツキノワグマ",
    planName: "第二種特定鳥獣（ツキノワグマ）管理計画",
    url: "https://www.pref.hiroshima.lg.jp/site/wildlife-management/wm-plan01-13jigyokeikaku.html",
    period: "2022 年 4 月〜2027 年 3 月",
    estimate: "西中国地域個体群 767〜1,946 頭（2020 年 9 月末・中央値 1,307 頭）",
    note: "島根県・山口県と合同で西中国地域個体群を管理",
  },
  {
    pref: "全国（参考）",
    species: "ヒグマ・ツキノワグマ",
    planName: "特定鳥獣保護・管理計画作成のためのガイドライン（クマ編）令和 8 年度版（環境省）",
    url: "https://www.env.go.jp/nature/choju/plan/plan3-2c/index.html",
    period: "2026 年 4 月 改定",
    note: "都道府県が計画を作るときの国の手引き。「維持・増加」を基本とした考え方から、「維持・減少」を含む管理へ方針を見直した",
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
        計画には個体数の推定、捕獲の上限や目安、地域ごとの対応方針などが定められています。
        計画期間は 5 年前後が多いものの、上位計画との兼ね合いで 1〜2 年の府県もあります。
        本ページは各都道府県の現行計画を一覧化し、公式の掲載ページへのリンクを集約します。
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
        <li>計画期間の終わりに計画を見直す</li>
      </ol>
      <p>
        2024 年 4 月、環境省はクマ（四国の個体群を除く）を <strong>「指定管理鳥獣」</strong>に追加しました。
        これによりイノシシ・ニホンジカと同様に、都道府県が国の交付金を使って「指定管理鳥獣捕獲等事業」を実施できるようになりました。
        詳細は{" "}
        <Link href="/articles/bear-laws">クマと関わる法律</Link>
        を参照してください。
      </p>

      <h2 id="plans">都道府県別 管理計画一覧</h2>
      <p>
        各計画の正式名称・期間・推定生息数・公式リンクを掲載。数値はそれぞれの計画（または同じページの公式資料）に書かれた時点のもので、調査年は府県ごとに異なります。最新の改訂版・モニタリング結果は各リンク先でご確認ください。
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
          掲載情報は <strong>2026 年 10 月 31 日時点</strong>に各都道府県公式サイトの計画本文と照らし合わせた内容です。数値は各計画の時点のものなので、必ず原典もあわせてご確認ください。
        </li>
        <li>
          推定生息数は<strong>幅のある推定値</strong>であり、調査年度・調査手法によって大きく変わります（手法が変わると前回の値と比べられない、と計画に明記している県もあります）。都道府県どうしの数字も単純には比べられません。現場での出没予測には用いないでください。
        </li>
        <li>
          リンクは各都道府県の計画掲載ページを案内しています。計画本文の PDF はリンク先から開けます。
        </li>
        <li>
          多くの計画が 2027 年 3 月に期間満了を迎えます。環境省は 2026 年 4 月にクマの計画づくりのガイドラインを改定しており、今後、各府県で計画の改定が予定されています。
        </li>
        <li>
          兵庫県・鳥取県・岡山県などの東中国地域個体群や、島根県・広島県・山口県の西中国地域個体群は、かつて生息数が少なく<strong>絶滅が心配された</strong>経緯があります。現在は回復して管理計画に移っていますが、推定生息数に応じて狩猟を禁止するなど、慎重な運用が続いています。
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
        2026 年 10 月 31 日 改訂：各都道府県の公式サイトと照らし合わせ、リンク切れと数値の誤りを全面的に直しました。数値は各計画に書かれた時点のものです。最新の情報は原典でご確認ください。
      </p>

      <p className="text-sm text-stone-500">
        リンク切れ・情報更新のご指摘は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先までお寄せください。
      </p>
    </PageShell>
  );
}
