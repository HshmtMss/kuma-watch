// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月12日〜2026年10月19日 / mode: weekly-report / 生成日: 2026-10-20
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-19-weekly-report";
const TITLE = "2026年10月12日〜2026年10月19日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年10月12日から19日までの1週間に全国で782件のクマ出没情報が確認された。愛知県、福島県、奈良県、秋田県、埼玉県で人身被害が連続発生したほか、兵庫県および広島県では緊急銃猟が実施され、市街地や交通インフラへの侵入も各地で多発するなど、厳重な警戒が求められる状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-20",
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
  datePublished: "2026-10-20",
  dateModified: "2026-10-20",
  author: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "獣医工学ラボ",
    url: "https://www.research-coordinate.co.jp",
  },
  mainEntityOfPage: `${SITE_URL}/research/${SLUG}`,
};

const REFERENCES: { title: string; url: string; site?: string }[] = [
    {
      "title": "玄関先でクマに襲われ眼球破裂 ツキノワグマの出没相次ぐ 愛知・豊田市（2026年10月12日掲載） - 日テレNEWS NNN",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBwTERodmpleGs0bG5IOUllUjZiaWxzMVpUQ2hZRXA1ZjRrQjVaWVQ1QUNfMHB6Q3RTSE1RRENOdWZlek00NFZsMGNSNEg0VVBvdFlpc04yMzlDcGlhZ2pBdjRwQTY2RWFuaDJHeWFqZEdtMkpwUWFweGQ1Smo?oc=5",
      "site": "日テレNEWS NNN"
    },
    {
      "title": "【熊出没】檜枝岐村で70代男性が襲われケガ 10月16日（金）福島県のクマ目撃情報 - Excite エキサイト",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE56TDZaMWxMOFBzY1ZxT2ozaWhsZHhFOElzZ1FldEstV04wZk4wYnFNaXNlR2dNZ1JOMDlVT3hEeG5mdkN0d05TYkNYQzQtcHpHWmJFY2kyV0tDQnFGdUhvN2ktZGl3Um5XOFlxTlhYR1YzVXpxOXNNVTBn?oc=5",
      "site": "Excite エキサイト"
    },
    {
      "title": "クマ出没、男性が遭遇し負傷",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNeTQ2MEZ6NVZYQmROLVZGQlRMbTVoUWQ3QkxUSmk2TDVTYnZidGIwdjgxRmhNLWFZQm9KZnNmOS0yQkdFTkNQYVVqZnprNEdKVlVUdFpqYU10MmFxNlBoNmhNYmVvellxYk43OVcxZ2RBUlgtaW0xT2tUd29TYTctd1I1ZFAyTm5pbmd3bFpR?oc=5",
      "site": "news"
    },
    {
      "title": "クマに襲われ60代男性けが 命に別状なし 奈良 下北山村 - NHKニュース",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBjY012R1YzUVZzYXplYjlKeHpOUWdfNV80M0RYQ0dYcnJQLWw5OTR2LXVEQVlpS042elBWT2ZNT0ZVYXdXZmdCV3d1a2hFWXFEQ0NTWmZMZjhFRWZ3UDRv?oc=5",
      "site": "NHKニュース"
    },
    {
      "title": "雄物川近くの畑にクマ3頭出没 作業中の80代男性が襲われけが 秋田・大仙市 - FNNプライムオンライン",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBKandxWVVScl9zTGh6RWx6bmNNUW5PM1lDU2pJNTNLRXdDaXdHUnVrendyLTJMZXJlWGw4SXlHMFNvbWkxVmVUcHg0THlOUQ?oc=5",
      "site": "FNNプライムオンライン"
    },
    {
      "title": "広島県で初の緊急銃猟、熊を駆除 広島市安佐北区可部町 体長1・1メートル - 中国新聞デジタル",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBpMjJxSHRYbXNzSlJPOXpLNEtmMDhiVFVRRzZlRnNISkFJVTlKX2lCNktPRG40ZUEwcmQxcUZnbVpScVdueFI2SmJkSkhKY2dqMjI0d1EwTjB2QQ?oc=5",
      "site": "中国新聞デジタル"
    },
    {
      "title": "クマの目撃相次ぐ 兵庫県で県内初「緊急銃猟」実施 丹波市氷上町・宍粟市・豊岡市但東町に出没 奈良・明日香村でも… 兵庫県「ドングリ類が不作の見通しでツキノワグマ",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBEbFFFeGg0SFFvVk5DR3ZIWGh3aUtDcVE3NjNRUEZGQmVfNk9Yay1RMU5Kcnd4N09SaUZBUUtaYURRREJEUWFVTml3eGl3dWdVSDJVN09LTQ?oc=5",
      "site": "news"
    },
    {
      "title": "【ヒグマ速報】住宅街でクマが徘徊する姿が防犯カメラに―小学校周辺でも“幅約15センチ”の足跡くっきり＿市民は 「ただ怖いです…怖いだけです」〈警察が注意呼びかけ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1nYzB5VFNXWVZuY2hIc3kwVGxub3JnZkQ5OHU2TXZvSHZSR3NfUk94S3VIVTFkX2pUdmlNc3loZ2haRHZuY0ZBSlZhdDdzeHdlS0szRDBBa0RZYy1iWTRsSTAzTFBuaTNyOE1vTUxGV0psSm8yZHhUZk4tNW1BcUk?oc=5",
      "site": "news"
    },
    {
      "title": "クマのような動物２頭目撃 車道を横断し公園へ立ち去る 札幌市南区の豊平川付近…市が注意呼びかける - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9xOFBzYmx0WFlJck00eWIwam1mOHFWVUFmbXZheldRNlpJVjdidTlRVmVQS1laazVCdmI0ZkszLXlxd3VmWXh2YzNHQ2tTWHNUUktBUlo1T242czRWSWk5aklycDJFT3NlYnFkRmUwbG1qcFh1SklsZlAwZWxSU1U?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "小学校付近でクマ１頭目撃 きのうは親子グマが出没 別個体か 連日の出没であす猟友会が確認へ 豊浦町 - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9za1RQVl9rUnBFUlJfNFJnM2ZULXZYS3YtajZiODFFekVmLWVES0x2Nm05SlJHeDA1UTNoU3pubUpWUmc1SlhqVVZ0WGhTd0M5TDlhVXdxNFN1N2Z6a3QyYm5HdUVLdFk0VDhDc01nbF9WWWVRSGJkM1FlQjYyb2M?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "京都市、叡山電鉄の線路上でクマの目撃情報 近くに駅やホテル、京都府警が注意喚起 - 京都新聞デジタル",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBjdERKQ0szNUtHblZqZW9Md2ptOEdtMzhIZXc5dDUtM0w2VGxfS01QLW5kMW5nOXc2aUg2bHFGbEN1QXFCVV95MDl4VGJXb0s4bEJhemMyWHQ?oc=5",
      "site": "京都新聞デジタル"
    },
    {
      "title": "【独自】京都・舞鶴市の市街地に「クマ」 道路を走って渡る様子とらえた映像を入手 周囲には幼稚園や小学校も 屋内退避や集団下校など対応も 近畿でクマの目撃情報相次",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9mRWJWYUlZRFNmRGh3Tlk3cDNpcTFJWVRhdTNSVGN2MmQ3eThXQVVGOXZkZ0xiaUNVdFNiYllNbDU5R0MwTU9vN3NrQmJfTTFvNWxXR2lqUQ?oc=5",
      "site": "news"
    },
    {
      "title": "京都市内の「小学校」近くで熊らしき動物２頭の目撃情報 - 京都新聞デジタル",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE8tdFhTX2FpWDEyWFJocnlLMHhkem9NQ09HMkZCYl9uWnh1bE9kZlp2OTVQZHgzRVJlOFVHNk9kQXQwT3ZsclRrSkpiYVY1NWVmT0t1V2MyRkI?oc=5",
      "site": "京都新聞デジタル"
    },
    {
      "title": "「初めての経験で怖かった」 クマ親子か 住宅街で3頭目撃 木の上でカキの実を食べる姿 山梨・大月市 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBVZGZfX2dSNXN6STA0dlVHeDVlRkI2OVBIYlRrYjZnR0RrVVJWN1pEOHVXTDE1dWFuN3UtbTktX1k5bzFJZ3h2S2V2ckgzQW5RYmt1Y2VpTVVXQzZYeU9scnZ6SWpkbjQtQXl5SGhKQ1k2QllvZ2NEN2tBMNIBgAFBVV95cUxOdXpCTDVjRTFIdDVJNnBWSjYzOUR0RGxEdDRObWlqMjRJRjJLdDRtbTNQcUhocUhiWkhONnloVVFQRmk4SDF0WEIxVTNyNVBZeWNjR1U0YTRQLXRaNWxacVZ0NlB3bldBczI3ZlRfQ3M0Mk92cmZibFRRekZiQ0Vpaw?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "弘法山公園付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE93Y1kxVEl1Um45M25DYmFnZGNXY1BKZVFqYnc4aGNFWEZxUFhEWXk2Tkd2U0k2UXVzTVBFeHhwMVctTkU2ek1lT0pRd3ctRXZwX3JHT2Qtb2I4aU56eDVneVlSakt1ZzRU?oc=5",
      "site": "news"
    },
    {
      "title": "サンダーバードとクマが接触 湖西線の北小松―近江高島間で - 中日新聞Web",
      "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5nN2lwNDJuOEQxaVhpLVlfS1FyZHpHWXBzNmc1a1ZKQzh1b3VSblVRSjZZZm05MmNIRk11MkZhck1QSkU0VlB0blVvUEVlYUhpVGcweA?oc=5",
      "site": "中日新聞Web"
    },
    {
      "title": "滋賀県高島市の小学校前でクマ目撃 体長約1メートル、学校の奥の山へ戻ったか - 中日新聞Web",
      "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5zTTJnNjhZZWJVSmc4RGN0UXU3blNjdnhCVlNIWk1Eek9WTHV2LWJiY0hRUl84amlrWmdhdlVqWUZCajYtV2JiNzZkdG9rbW5VNElIQg?oc=5",
      "site": "中日新聞Web"
    },
    {
      "title": "「1mくらいのクマが歩いている」広島市でクマとみられる動物の目撃「クマの可能性高い」区役所が注意喚起 安佐南区・伴東 - TBS NEWS DIG",
      "url": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxQX24zNlYydTdTdlp0cWdETXkzR204bTNfZnF0bjhwaVpZUjRUZnJ0S3U1MklhSENkR1c2UnBmM0FNNXQxdDM2SXlybWFXcVprWFpxbXRWZGxZUnZxTXgyWnliNzdZc1RZR2Q4dUpkbXo5dDkyZE1fYWlsa2I4S0xDVnlGVkluZWxBUllRc1YwcTlOekE2WWVNV2F4V0hVZ2FSZnhQcF9CRk8zT2xWODJFMWNOMW81cTNNQURWemJvdnpfaHA2TUFzalVpdVlteU9IaE9KX3JhTHRNRTE2cWdiMXpHVWRIZmloWm52NXMzbVFwNl9Sbmc?oc=5",
      "site": "TBS NEWS DIG"
    },
    {
      "title": "【熊出没】10月14日（水）福島県のクマ目撃情報 郡山市田村町のゴミステーション付近で - FNNプライムオンライン",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE51LXNPSVBuUFNHMVVKZ1dWQXJYMExjT3FJVmdmMnZOQnA0a0R6RVdZZktJc1djX2tzWjdva2R3dHhIc2dwRmhsb2pGRjhHUQ?oc=5",
      "site": "FNNプライムオンライン"
    },
    {
      "title": "神奈川・秦野市でツキノワグマの糞確認 市が注意呼びかけ（ABEMA TIMES） - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE54RXdvZTlVdkIwcGNvVDE1ZGVLNm80NVdBakpNWnVQSVNmbXFPdndIUkRpQV9TSlRBd2N3QUljTnlVS0ZyOGwzTXZKRV83a3pzc255MmFNb0FDWWlSdmRZbXNST2JVUVZTNkRGU0NzQV9YdVgwYTV6UHlIWmlVMEk?oc=5",
      "site": "Yahoo!ニュース"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":120},{"pref":"京都府","count":88},{"pref":"山口県","count":53},{"pref":"埼玉県","count":50},{"pref":"栃木県","count":45},{"pref":"宮城県","count":40},{"pref":"福井県","count":37},{"pref":"兵庫県","count":32},{"pref":"神奈川県","count":26},{"pref":"愛知県","count":24},{"pref":"青森県","count":24},{"pref":"奈良県","count":21},{"pref":"秋田県","count":21},{"pref":"福島県","count":20},{"pref":"広島県","count":18},{"pref":"山梨県","count":16},{"pref":"群馬県","count":15},{"pref":"和歌山県","count":15},{"pref":"東京都","count":15},{"pref":"岐阜県","count":15},{"pref":"長野県","count":15},{"pref":"島根県","count":13},{"pref":"富山県","count":11},{"pref":"三重県","count":9},{"pref":"新潟県","count":8},{"pref":"岩手県","count":8},{"pref":"静岡県","count":8},{"pref":"鳥取県","count":8},{"pref":"滋賀県","count":6},{"pref":"石川県","count":1}];

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          週次レポート
        </span>
        <span>対象期間: 2026年10月12日〜2026年10月19日</span>
        <span>·</span>
        <span>公開: 2026-10-20</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={782}
        periodLabel={"2026年10月12日〜2026年10月19日"}
      />

      <h2>1. 概況と主要トピック</h2>
      <p>本対象期間（2026年10月12日〜10月19日）におけるクマ関連事案の総件数は782件に達した。データ内訳では報道由来が480件、自治体・公的機関等の公開データ由来が302件であり、人身被害キーワード該当が12件、都市部キーワード該当が31件、捕獲・銃猟キーワード該当が15件記録された。秋季の活動期において、山林部のみならず居住地域や農地、交通路への移動が顕著となっており、特筆すべき動向として以下の4点が挙げられる。</p>
      <ul>
        <li>住宅地敷地内および農地・作業現場における重大人身傷害事故の多発（愛知、福島、奈良、秋田、埼玉）</li>
        <li>人命防護を目的とした自治体による「緊急銃猟」の相次ぐ初運用（兵庫県内複数市町、広島県広島市）</li>
        <li>鉄道線路、幹線道路、学校・公園周辺など生活都市インフラへの侵入と交通障害の発生（京都、滋賀、北海道等）</li>
        <li>シカ・イノシシ捕獲用罠への錯誤捕獲の継続的発生（山口、三重、静岡等）</li>
      </ul>
      <p>特に人身被害においては、住宅の玄関先での遭遇（愛知県豊田市）や、農作業中の複数頭による襲撃（秋田県大仙市）、くくり罠見回り時の遭遇（福島県檜枝岐村）など、突発的な近距離遭遇による重傷例が複数発生した。また、兵庫県の報道においては堅果類（ドングリ類）の不作見通しが言及されており、餌資源を求めた広域徘徊が市街地接近や錯誤捕獲の増加につながっている実態が示唆される。</p>
      <h2>2. 地域別動向と出没ホットスポット</h2>
      <p>期間中の都道府県別出没件数では、北海道が120件で最多となり、次いで京都府（88件）、山口県（53件）、埼玉県（50件）、栃木県（45件）が上位を占めた。東日本から西日本まで広範囲で出没が集中している。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な出没地域・都市</th>
              <th className="px-3 py-2">主要な事案傾向</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">120件</td><td className="px-3 py-2 text-xs">士別市、札幌市南区、豊浦町</td><td className="px-3 py-2 text-xs">住宅街徘徊、小学校付近出没、河川沿い移動</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">88件</td><td className="px-3 py-2 text-xs">京都市、舞鶴市、与謝野町</td><td className="px-3 py-2 text-xs">電鉄線路上出没、市街地道路横断、集団下校措置</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">53件</td><td className="px-3 py-2 text-xs">岩国市、周南市</td><td className="px-3 py-2 text-xs">イノシシ用箱わなへの錯誤捕獲、痕跡確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">50件</td><td className="px-3 py-2 text-xs">秩父市、小鹿野町</td><td className="px-3 py-2 text-xs">消防署近くでの人身被害、生活圏出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">45件</td><td className="px-3 py-2 text-xs">佐野市、足利市、那須塩原市</td><td className="px-3 py-2 text-xs">農村公園・住宅敷地目撃、市街隣接部出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">40件</td><td className="px-3 py-2 text-xs">登米市、大崎市、仙台市青葉区</td><td className="px-3 py-2 text-xs">橋梁付近、住宅街、温泉町での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">37件</td><td className="px-3 py-2 text-xs">おおい町、小浜市</td><td className="px-3 py-2 text-xs">集落周辺出没、山間地道路横断</td></tr>
            <tr><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">32件</td><td className="px-3 py-2 text-xs">丹波市、宍粟市、豊岡市、姫路市</td><td className="px-3 py-2 text-xs">県内初となる緊急銃猟の実施、目撃相次ぐ</td></tr>
            <tr><td className="px-3 py-2 text-xs">神奈川県</td><td className="px-3 py-2 text-xs">26件</td><td className="px-3 py-2 text-xs">秦野市、相模原市緑区</td><td className="px-3 py-2 text-xs">公園付近目撃、市街近郊での糞・痕跡確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">愛知県</td><td className="px-3 py-2 text-xs">24件</td><td className="px-3 py-2 text-xs">豊田市、新城市</td><td className="px-3 py-2 text-xs">住宅玄関先での人身重傷被害、山林際目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h3>北海道・東北エリア</h3>
      <p>北海道では士別市の住宅街で防犯カメラに徘徊する姿が捉えられ、小学校周辺で幅約15cmの足跡が確認された（※8）。札幌市南区では豊平川付近の車道を横断して公園へ立ち去る事案（※9）や、豊浦町で小学校付近での親子グマ等の連日出没（※10）が相次ぎ、児童の通学路安全確保が急務となった。東北地方では、秋田県大仙市において雄物川近くの畑で3頭のクマに作業中の高齢男性が襲われる重大事故が発生した（※5）。また岩手県盛岡市では児童公園付近での目撃、福島県郡山市ではゴミステーション付近での目撃（※19）が報告されている。</p>
      <h3>関東・中部エリア</h3>
      <p>埼玉県秩父市では市街地や消防署近傍を含む複数地点で男性が襲われ負傷する事案が発生した（※3）。栃木県佐野市では農村公園や駐在所付近の住宅敷地での目撃が連続した。愛知県豊田市では住宅の玄関先で男性が顔面を襲われ眼球破裂の重傷を負う事案が発生し、周辺地域での目撃も相次いだ（※1）。山梨県大月市では住宅街のカキの木に登って実を採食する親子3頭が確認され（※14）、神奈川県秦野市でも弘法山公園付近での目撃（※15）や糞の確認（※20）が行われるなど、都市近郊緑地での出没が際立っている。</p>
      <h3>近畿・中国エリア</h3>
      <p>京都府では京都市の叡山電鉄線路上での目撃（※11）や小学校近くでの目撃（※13）、舞鶴市での市街地道路横断に伴う小中学校の屋内退避・集団下校対応（※12）など、都市機能への影響が顕著であった。滋賀県高島市ではJR湖西線で特急サンダーバードとクマが接触する事故が発生し（※16）、小学校前での出没も確認された（※17）。兵庫県では丹波市、豊岡市、宍粟市で県内初となる緊急銃猟が実施された（※7）。広島県広島市安佐北区可部町でも箱わな捕獲個体に対し県内初となる緊急銃猟による駆除が行われた（※6）。山口県ではイノシシ用箱わなへの錯誤捕獲が岩国市や周南市で連続した。</p>
      <h2>3. 注目事案の時系列整理</h2>
      <p>期間内に発生した人身被害、緊急銃猟、インフラ障害等の重要事案を時系列に整理する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生日</th>
              <th className="px-3 py-2">発生場所</th>
              <th className="px-3 py-2">事案区分</th>
              <th className="px-3 py-2">概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">10月12日</td><td className="px-3 py-2 text-xs">愛知県豊田市</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">住宅玄関先で男性が襲われ眼球破裂の重傷（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月12日</td><td className="px-3 py-2 text-xs">兵庫県丹波市・豊岡市・宍粟市</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">出没多発に伴い県内初の緊急銃猟を実施（※7）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月12日</td><td className="px-3 py-2 text-xs">広島県広島市安佐北区</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">箱わな捕獲個体に対し県内初の緊急銃猟駆除（※6）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月13日</td><td className="px-3 py-2 text-xs">北海道士別市</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">住宅街徘徊が防犯カメラに記録、小学校周辺に足跡（※8）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月13日</td><td className="px-3 py-2 text-xs">京都府京都市</td><td className="px-3 py-2 text-xs">インフラ影響</td><td className="px-3 py-2 text-xs">叡山電鉄の線路上で目撃、駅・ホテル至近（※11）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月15日</td><td className="px-3 py-2 text-xs">京都府舞鶴市</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">市街地道路を横断、小中学校で集団下校措置（※12）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月16日</td><td className="px-3 py-2 text-xs">福島県檜枝岐村</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">罠確認中の男性が体長約1.5mのクマに襲われ負傷（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月16日</td><td className="px-3 py-2 text-xs">滋賀県高島市</td><td className="px-3 py-2 text-xs">インフラ影響</td><td className="px-3 py-2 text-xs">JR湖西線で特急サンダーバードとクマが接触（※16）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月16日</td><td className="px-3 py-2 text-xs">北海道札幌市南区</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">豊平川付近で車道を横断し公園へ侵入（※9）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月16日</td><td className="px-3 py-2 text-xs">山梨県大月市</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">住宅街の木でカキの実を食べる親子3頭を目撃（※14）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月17日</td><td className="px-3 py-2 text-xs">秋田県大仙市</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">畑に3頭出没、作業中の高齢男性が襲われ負傷（※5）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月17日</td><td className="px-3 py-2 text-xs">奈良県下北山村</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">山林作業中の60代男性が襲われ負傷（※4）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月18日</td><td className="px-3 py-2 text-xs">埼玉県秩父市</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">消防署近く等で男性がクマに遭遇し襲われ負傷（※3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">10月18日</td><td className="px-3 py-2 text-xs">滋賀県高島市</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">体長約1mのクマが小学校前で目撃される（※17）</td></tr>
          </tbody>
        </table>
      </div>
      <h3>人身被害事案の分析</h3>
      <p>確認された人身事故は、山林内作業時（奈良県下北山村）のみならず、日常生活圏の境界や敷地内（愛知県豊田市、埼玉県秩父市）、農地（秋田県大仙市）、狩猟罠の点検現場（福島県檜枝岐村）と多様な場面で発生している。特に愛知県の事例では住宅の至近距離での遭遇が深刻な受傷をもたらしており、早朝や夕方・夜間における建物周辺の安全確認が重要視される。秋田県の事例では3頭の群れ（母子グマとみられる構成等）による出没であり、複数頭による不測の接触事故に対する注意が求められる。</p>
      <h3>緊急銃猟運用の進展</h3>
      <p>今期は兵庫県（丹波市、豊岡市、宍粟市）および広島県（広島市安佐北区）において、自治体として初となる緊急銃猟が相次いで適用された。市街地近接部や箱わな周辺において、地域住民への直接的危険を排除するための迅速な判断が下された。鳥獣保護管理法に基づく安全確保と警察・猟友会との連携運用が現場レベルで本格化していることを示している。</p>
      <h2>4. 週次評価</h2>
      <h3>当週のリスク全体傾向</h3>
      <p>総件数782件という極めて高い水準、ならびに広範囲での人身被害と緊急銃猟の実施は、全国的な活動活発化を強く裏付けている。山間部における自然採食資源の不足等を背景に、クマが河川沿いや緑地帯を経由して市街地深部、農地、鉄道・道路等の交通網へ進出する傾向が顕著である。カキなどの果樹類への執着も見られ、誘引物の存在が出没の長期化・定着化を招いている。</p>
      <h3>次週に向けた警戒ポイント</h3>
      <ul>
        <li>住宅地・学校周辺における通学路の警戒強化: 北海道、京都府、滋賀県等で見られた学校近傍での出没を踏まえ、登下校時間帯の見守りと集団下校等の安全対策の徹底。</li>
        <li>住居・農地周囲の誘引物管理の徹底: 山梨県大月市で確認された未収穫果樹（カキ等）の速やかな収穫・伐採、および福島県郡山市の事例にあるゴミステーションの適切な管理。</li>
        <li>農作業および屋外作業時の警戒態勢: 秋田県や奈良県の人身事故に鑑み、見通しの悪い農地や林縁部での作業時におけるラジオ・鈴等の携行および周囲の早期確認。</li>
        <li>罠設置者による錯誤捕獲への備え: 各地でイノシシ・シカ用罠への錯誤捕獲が多発しており、見回り時の接近手順の厳守と安全確保措置の再確認。</li>
      </ul>

      {REFERENCES.length > 0 && (
        <>
          <h2>参考文献</h2>
          <ol className="text-sm">
            {REFERENCES.map((r, idx) => (
              <li key={idx}>
                {r.url.startsWith("http") ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    {r.title}
                  </a>
                ) : (
                  // 取り込み元 ID (例: iwate-morioka-mymap) は URL ではないのでリンクにしない
                  // (相対リンク /research/<id> になり 404 を生むため)。
                  r.title
                )}
                {r.site && <span className="text-stone-500"> — {r.site}</span>}
              </li>
            ))}
          </ol>
        </>
      )}

      <ResearchPlaceLinks slug={SLUG} />

      <hr className="my-10 border-stone-200" />

      <div className="not-prose rounded-2xl border border-stone-200 bg-stone-50 p-5 text-sm leading-relaxed text-stone-700">
        <div className="mb-2 font-semibold text-stone-900">監修・編集</div>
        <dl className="grid grid-cols-[6rem_1fr] gap-y-1 text-xs sm:text-sm">
          <dt className="text-stone-500">執筆</dt>
          <dd>AI（大規模言語モデル）による情報集約</dd>
          <dt className="text-stone-500">監修</dt>
          <dd>獣医工学ラボ（リサーチコーディネート株式会社）</dd>
          <dt className="text-stone-500">対象期間</dt>
          <dd>2026年10月12日〜2026年10月19日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-20</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-20</dd>
          <dt className="text-stone-500">データ範囲</dt>
          <dd>KumaWatch sightings.json (内部集計データのみ)</dd>
        </dl>
        <p className="mt-3 text-xs text-stone-600">
          本記事は、KumaWatch が収集した出没データを LLM が分析・文章化した内容を、獣医工学ラボの獣医師が確認・編集の上で公開しています。事実関係に誤りを発見された場合は{" "}
          <a
            href="mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20研究記事の訂正"
            className="text-blue-700 underline"
          >
            contact@research-coordinate.co.jp
          </a>
          {" "}までご連絡ください。
        </p>
      </div>
    </PageShell>
  );
}
