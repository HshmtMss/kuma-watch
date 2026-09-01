// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月24日〜2026年8月31日 / mode: weekly-report / 生成日: 2026-09-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-31-weekly-report";
const TITLE = "2026年8月24日〜2026年8月31日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年8月最終週、国内のクマ出没は620件と高水準で推移した。北海道・東北地方で多発し、岩手や静岡では人身被害も発生。特に市街地や住宅地への出没が全国で40件確認され、住民の生活圏におけるリスクが深刻化している。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-01",
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
  datePublished: "2026-09-01",
  dateModified: "2026-09-01",
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
      "title": "岩手県 雫石町 / 河川敷で50代男性が襲われ指骨折",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFA5UjY5dm55VFZobU1XbFpqZjlxSk1NZWNnVHF0LU9WbEtPT3pkT3d2UGtIMVprSWpCd2xUTEQ5T0NFSmpZekpBU3ZKdlpJOHp0QU45YUdKeE82WWw0Xy1YTHB6bHk1RDRnM1ptNFBn?oc=5",
      "site": "news"
    },
    {
      "title": "静岡県 浜松市 / 山林でクマに襲われ男性軽傷",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1HazE4b2NNdVV2VnBvNDg4NHZvQm5Pelo1VWNybzVSbld1YTJKMk10SUJIZndTZjJRUW9VNUdfRnBZd29rUjBJSVJ2YkNzOTdOY2RZVmdsT2hndHl6QlItT3pQXzJzd2JDQ2NhMUNQYXMyeC1TNVpneWwtNVNKT1k?oc=5",
      "site": "news"
    },
    {
      "title": "静岡県 浜松市 / 春野町の森林で作業中に負傷",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFAyeTU0UnV4U2ZJTnRRTFk5QnB2ZEpReWZ6U3FvQ0I0RlgzLTBDRUJOb1BhX19rOURIbklrV3FRbFN4T0FYX3BCa01UVFgwWHhJMnNueUtyWDRPOUk3dkJYb2RjVm1lckxiemd6TVRHR3k3Z0JtaXBHVG93N0UwYnc?oc=5",
      "site": "news"
    },
    {
      "title": "北海道 根室市 / 乗用車がクマと接触か、衝突し横転し運転手死亡",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE91SGlYNzNZQU9oZF8yLTQzNEtmUUVMZEVQcE9rX3drTFNpV2U0aHgzUVRvRWFNeEMzV2hxWXRISGRBc1U1Wk94WVpHLXByWXJzTnBVcFRwUQ?oc=5",
      "site": "news"
    },
    {
      "title": "福島県 福島市 / 渡利、郷野目の住宅街でクマ目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE14eWljdEVUbjJpWkJvRUdyd3hROV9ORXhWR1hwLWRiZng2Q2lNWUJkdmZQcENkOC0yN3Q1SXR0RmlFYXRYYWs3dFFTQkFUbkJYYzhZWHhLeEk5MlNyUVYyRDhiaDNYMnNsZXoyTGhpYkFPdUhKX3BTOHQwb0xQalk?oc=5",
      "site": "news"
    },
    {
      "title": "福島県 福島市 / 渡利の住宅街で複数のクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5FNEF0ZjZVLWg0M1l5TFUtdnMzSlgwZ1YyN3Jhb29MTV9hTnhWeDcyd1NPUGpnMlBFRUpqbDVHVVZhMlZLRHVxdWNsMXgxd0JaLUVpU3dldkNIc1Rlak9naEFQVExnVG5Y?oc=5",
      "site": "news"
    },
    {
      "title": "三重県 尾鷲市 / 民家や小学校近くのわなでクマを捕獲・駆除",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBlNUJzdTI1UFBDYzJiUC05czh6dXVnbUhjTUl4NDB6RE1palJub0Y4czhoX01xci11SVNOMDRUV2ZHTFlnT3VuUUF0YldnSWd6djdIMC0zQVlLV09yNXpDdnFwUXdiejcyWEk1MTRn?oc=5",
      "site": "news"
    },
    {
      "title": "三重県 尾鷲市 / 民家や小学校近くでクマ2頭を2日連続で駆除",
      "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQSTFFY211UVMtRF9DMlp3Z3pIcDVDcVF0c253bXZZR2dhb044eDQxUWxuZG92V3FWWkJzTUZGVXdBcEFMUk5DTGcwYjVQTFIzVUc0c0ZjbHFrZHVqV3JLaFllbDVKbVNzQzRYZWVHUEl6WEszemJHc1M3SVV6TUNGNDFvOWFGLW9mcVlqTy0wYw?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県 南魚沼市 / スーパー・民家付近でクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1IS0VSY3RFZHRWcXR0R0hvZEZCUlFHcDRRY3F6WXpHc1VRdlpJOEVfZnNBQk4zX0thSjdmQ1dZMUhiaUVEbDlYS3o5WGh2dw?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県 仙台市 / 北山1丁目の住宅地で道路を横断",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQM3NVSm0tOGQxU24tUGRwTnFZc3AyeWlXaWtXT2ZyUnE0TzFnQ2ZFWEdxa2IwaS1BMEU1NGM1N0IwcklkV2RRTmVXMTgtckdLUlpvRHJKZlJ3Sl9XZ1dSbUFPU3htSlBmSU82OXB4LUNUZGVqUFBxc0RZWkkwVnd6bGhROVDSAYoBQVVfeXFMTlhpUlNadzQtWkNmd1FXQkxOZHVKOUFvNFRreWs0NlQzSV9PQm5UNElwenExWUtOYzNuZFFMZTZzX296QVNqaWxBdHhJcUYyWXY3VEdsaGh5VXVLN0s0dW9GODc4RkFickVIeDBrN1dtY2dseVhPdktjdmYycXFvWXlkSV9QLUVFaFpR?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県 桐生市 / 市街地でクマ1頭捕獲",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5rWHlxVnlqUGh1N3NwZWhub3hxSG9uUmcyOEFRaUQwZHFSb3JsMVdrdEltVElSWlhHcmpfZ3Q0NFFyQXo4WHNDb001SENrcVdLUlptNHBfTEJEM0ppQk5MVVhWUllNUVptelRVWFVOT05QR1U5dWRSSHZieElldjg?oc=5",
      "site": "news"
    },
    {
      "title": "北海道 岩見沢市 / 養鶏場でカモ23羽がクマに襲われる",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBtalhTX0d4bmdKam85d2E3ZXRiaGhSMmNsOEpZR2JqZnZoSWpZMV95dFBUck1nNmhUek92VWJqTDJ0RTcxNXczc2EzcVRpdWtvV2t6TXlOQVBVUW5kY3lNbWpzSDVzZmpBWW9XV1VVWVV4RWhKQXEwUjB3dS1SOUE?oc=5",
      "site": "news"
    },
    {
      "title": "北海道 別海町 / 牧草ロールに5つの爪痕、一般住宅から約200m",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE42RkFjZWtmUl9YQ2RVcC1ZQ19vQVVRbDlQOVJad0tON1dXdEhRWWJ1RzNhbnlTM1lPZlJ2NmEwMjc1cWNnajd3and5UnpkSk9IUnFMU0F4WQ?oc=5",
      "site": "news"
    },
    {
      "title": "北海道 松前町 / No13白神地区1頭捕獲",
      "url": "hokkaido",
      "site": "hokkaido"
    },
    {
      "title": "北海道 厚沢部町 / 捕獲",
      "url": "hokkaido",
      "site": "hokkaido"
    },
    {
      "title": "鳥取県 鳥取市 / 福部町の果樹園でクマが梨を食い荒らす",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE4yVjBqNWJPSlA5WjV6eFluYUZEa3pmZFF4QW5mMGJKTGxPLWx6VmpGU0NacW9aWmNvdnlBZEpjOGtUZDVWbVlvc01aU0JPeFFz?oc=5",
      "site": "news"
    },
    {
      "title": "鳥取県 鳥取市 / 福部の果樹園で梨３００個クマ食害",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFA1Nm14NTJscWs0QjE3TVRDX19vQUVCdUluLUNNbTNlTDhseHFvVVEwRklFeHlERnVsck95c1RDSVdIQ044dU9EM0d1bU1PTzFy?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":124},{"pref":"福島県","count":69},{"pref":"青森県","count":68},{"pref":"宮城県","count":44},{"pref":"島根県","count":43},{"pref":"群馬県","count":38},{"pref":"岩手県","count":34},{"pref":"秋田県","count":33},{"pref":"長野県","count":28},{"pref":"京都府","count":19},{"pref":"新潟県","count":17},{"pref":"栃木県","count":17},{"pref":"岐阜県","count":12},{"pref":"福井県","count":11},{"pref":"三重県","count":7},{"pref":"山梨県","count":7},{"pref":"富山県","count":6},{"pref":"和歌山県","count":6},{"pref":"静岡県","count":6},{"pref":"鳥取県","count":5},{"pref":"広島県","count":5},{"pref":"兵庫県","count":5},{"pref":"山形県","count":4},{"pref":"埼玉県","count":3},{"pref":"山口県","count":3},{"pref":"石川県","count":2},{"pref":"滋賀県","count":2},{"pref":"奈良県","count":1},{"pref":"愛知県","count":1}];

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
        <span>対象期間: 2026年8月24日〜2026年8月31日</span>
        <span>·</span>
        <span>公開: 2026-09-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={620}
        periodLabel={"2026年8月24日〜2026年8月31日"}
      />

      <h2>全体動向</h2>
      <p>2026年8月24日から31日の期間、KumaWatchが収集した国内のクマ出没関連情報は620件に達した。都道府県別では北海道が124件と最も多く、次いで福島県（69件）、青森県（68件）、宮城県（44件）、島根県（43件）と続いた。情報の内訳は報道由来のものが406件と大半を占め、市民やメディアの高い関心を反映している。</p>
      <p>出没は特定の地域に限定されず、全国的な広がりを見せている。上位の道県に加え、群馬県（38件）、岩手県（34件）、秋田県（33件）、長野県（28件）などでも出没が頻発した。これらのデータは、クマの生息域の拡大や、人間との生活圏の重複が全国的な課題であることを示している。</p>
      <h2>主要トピック</h2>
      <h3>人身被害の発生と重大事故</h3>
      <p>期間中、少なくとも3地域で人がクマに襲われる事案が発生し、「人身被害」キーワードに一致する情報が5件確認された。被害の形態は多様化しており、深刻な事態となっている。</p>
      <ul>
        <li>8月29日、岩手県雫石町の河川敷で50代の男性がクマに襲われ、指の骨を折る重傷を負った（※1）。</li>
        <li>静岡県浜松市では、8月30日と31日に山林で作業をしていた男性が相次いで襲われ、軽傷を負う事案が発生した（※2, ※3）。</li>
        <li>8月24日には北海道根室市で、乗用車がクマと接触したとみられる衝突・横転事故が発生し、運転していた男性が死亡した（※4）。これは直接の襲撃ではないものの、路上に出没したクマが交通死亡事故の一因となった可能性があり、被害の形態が多様化していることを示す事案である。</li>
      </ul>
      <p>これらの事案は、山林や河川敷といった従来からクマの生息域とされる場所に加え、道路上など、人間の活動エリアでの深刻な遭遇リスクを浮き彫りにしている。</p>
      <h3>市街地・住宅地への出没頻発と住民への影響</h3>
      <p>人の生活圏への接近は今週の最も顕著な傾向であり、「都市部」キーワードに一致する事案は全国で40件にのぼった。住民の生活空間が脅かされるケースが各地で報告されている。</p>
      <ul>
        <li>福島県福島市の渡利地区や郷野目地区では、住宅の敷地内を横切るクマが連日目撃され、地域住民に大きな不安を与えた（※5, ※6）。</li>
        <li>三重県尾鷲市では、民家や小学校に近接する場所に設置されたわなで、8月24日と25日の2日連続でクマが捕獲・駆除される事態となった（※7, ※8）。</li>
        <li>新潟県南魚沼市でもスーパーマーケットや民家のすぐ近くでクマ1頭が目撃された（※9）。</li>
        <li>このほか、宮城県仙台市青葉区の住宅地（※10）や群馬県桐生市の市街地（※11）など、各地の都市部で出没や捕獲が相次いだ。学校や商業施設の周辺への出没は、子どもを含む住民の安全を直接的に脅かすものであり、自治体はパトロールの強化や住民への緊急の注意喚起を余儀なくされている。</li>
      </ul>
      <h3>北海道における多数の出没と農業・畜産被害</h3>
      <p>出没件数が全国最多の北海道（124件）では、広範囲での目撃情報に加え、農業や畜産への被害も深刻である。</p>
      <ul>
        <li>8月24日、岩見沢市の養鶏場がクマに襲われ、飼育されていたカモ23羽が死ぬ被害が確認された（※12）。</li>
        <li>同日、別海町の牧場では、保管されていた牧草ロールに5本の爪痕が残されているのが見つかり、周辺にクマが接近していることが示唆された（※13）。</li>
      </ul>
      <p>これらの被害は、クマが本来の餌資源の不足から、人間の管理する農作物や家畜を新たな食料源として狙っている可能性を示している。被害防止のための電気柵設置などの対策が急がれる一方、松前町や厚沢部町では捕獲も実施されている（※14, ※15）。</p>
      <h2>地域別動向</h2>
      <h3>北海道 (124件)</h3>
      <p>道東の根室市や別海町から道央の岩見沢市、道南の松前町まで、道内全域で出没が確認された。特に農地や牧草地周辺での出没が目立ち、農業被害や車両との衝突リスクが高い状態が続いている。</p>
      <h3>東北地方 (福島69件, 青森68件, 宮城44件, 岩手34件, 秋田33件)</h3>
      <p>東北6県すべてで活発な出没が観測された。福島市、仙台市、青森市、秋田市といった県庁所在地やその周辺の住宅地での目撃が相次ぎ、都市型出没の傾向が強い。特に福島市渡利地区や仙台市青葉区北山のように、特定のエリアに繰り返し現れる個体がいる可能性も指摘される。</p>
      <h3>中国地方 (島根43件)</h3>
      <p>島根県では益田市、大田市、雲南市など中山間地域を中心に目撃情報が多発した。また、鳥取県の果樹園では、収穫前の梨がクマに食い荒らされる被害が複数報告されており（※16, ※17）、西日本においても農作物への警戒が必要となっている。</p>
      <h2>注目事案の時系列サマリー</h2>
      <p>期間中に発生した人身被害、都市部出没、捕獲・駆除の主な事案を時系列で整理する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">日付</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">事案概要</th>
              <th className="px-3 py-2">参照</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-08-24</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">根室市</td><td className="px-3 py-2 text-xs">乗用車がクマと接触したとみられる事故で運転手が死亡</td><td className="px-3 py-2 text-xs">※4</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-24</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">岩見沢市</td><td className="px-3 py-2 text-xs">養鶏場でカモ23羽がクマに襲われる農業被害</td><td className="px-3 py-2 text-xs">※12</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-24</td><td className="px-3 py-2 text-xs">三重県</td><td className="px-3 py-2 text-xs">尾鷲市</td><td className="px-3 py-2 text-xs">民家や小学校近くに設置されたわなでクマを捕獲・駆除</td><td className="px-3 py-2 text-xs">※7</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-25</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">福島市</td><td className="px-3 py-2 text-xs">渡利、郷野目の住宅街でクマの目撃情報が相次ぐ</td><td className="px-3 py-2 text-xs">※5</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-26</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">南魚沼市</td><td className="px-3 py-2 text-xs">スーパーや民家の近くでクマ1頭が目撃される</td><td className="px-3 py-2 text-xs">※9</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-27</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">桐生市</td><td className="px-3 py-2 text-xs">市街地でクマ1頭が捕獲される</td><td className="px-3 py-2 text-xs">※11</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-29</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">雫石町</td><td className="px-3 py-2 text-xs">河川敷で50代男性が襲われ指を骨折する人身被害</td><td className="px-3 py-2 text-xs">※1</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-30</td><td className="px-3 py-2 text-xs">静岡県</td><td className="px-3 py-2 text-xs">浜松市</td><td className="px-3 py-2 text-xs">山林で作業中の男性がクマに襲われ軽傷を負う</td><td className="px-3 py-2 text-xs">※2</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>リスク全体傾向として、8月最終週のクマ出没は、件数の高止まりに加え、被害の質的な深刻化が特徴である。人身被害が複数の地域で発生し、車両との衝突に起因する死亡事故も確認されたことは、クマとの遭遇が生命に直結するリスクであることを改めて示している。また、全国的に都市部や住宅地への出没が常態化しつつあり、住民の日常生活に潜む危険性が増大している。自治体による捕獲・駆除も23件確認されたが、根本的な解決には至っておらず、人とクマの共存に向けた新たな対策が求められる局面にある。</p>
      <p>次週の警戒ポイントとして、9月に入るとクマは冬眠に向けて採食活動を一層活発化させる。この時期は、人里の果樹（カキ、クリなど）や、収穫期を迎える農作物が強い誘引物となるため、果樹園や畑周辺では特に厳重な警戒が必要である。住宅地においても、生ゴミの管理、ペットフードの屋内保管、家庭菜園の果実の早期収穫などを徹底し、クマを寄せ付けない環境作りが極めて重要となる。活動が活発になる早朝や夕暮れ時の森林付近でのレジャーや農作業は、可能な限り避けるべきである。</p>

      {REFERENCES.length > 0 && (
        <>
          <h2>参考文献</h2>
          <ol className="text-sm">
            {REFERENCES.map((r, idx) => (
              <li key={idx}>
                <a href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.title}
                </a>
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
          <dd>2026年8月24日〜2026年8月31日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-01</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-01</dd>
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
