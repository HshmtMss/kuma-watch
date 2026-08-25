// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月24日 / mode: daily-report / 生成日: 2026-08-25
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-24-daily-report";
const TITLE = "2026年8月24日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月24日、国内で93件のクマ出没が報告された。北海道根室市ではクマとの衝突の可能性が指摘される交通死亡事故が発生した。また、宮城県仙台市や群馬県桐生市など都市部での目撃も相次ぎ、全国的に警戒が必要な状況が続いている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-25",
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
  datePublished: "2026-08-25",
  dateModified: "2026-08-25",
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
      "title": "乗用車がクマと接触か、衝突し横転し運転手死亡 北海道 根室市",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE91SGlYNzNZQU9oZF8yLTQzNEtmUUVMZEVQcE9rX3drTFNpV2U0aHgzUVRvRWFNeEMzV2hxWXRISGRBc1U1Wk94WVpHLXByWXJzTnBVcFRwUQ?oc=5",
      "site": "news"
    },
    {
      "title": "民家や小学校近くのわなでクマを捕獲・駆除 三重県 尾鷲市",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBlNUJzdTI1UFBDYzJiUC05czh6dXVnbUhjTUl4NDB6RE1palJub0Y4czhoX01xci11SVNOMDRUV2ZHTFlnT3VuUUF0YldnSWd6djdIMC0zQVlLV09yNXpDdnFwUXdiejcyWEk1MTRn?oc=5",
      "site": "news"
    },
    {
      "title": "小学校付近でクマ目撃 岩手県 大船渡市",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1naVpoTS02TVhvbkxpSkNpcE5tOFZSSG9YaXI5Y2ZVU3dnMGF3WHRsVG5jdm1LbEdONGZrTS1KV3hYZzBVc3p5ckpxRlhmRFBUeFdyTmwyRWhJMzJpb3Nndw?oc=5",
      "site": "news"
    },
    {
      "title": "日頃市小学校北東で成獣1頭を目撃 岩手県 大船渡市",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOTkd6WEhQbVZRdFhodms0cTlYQmZ5MGp0OTRBTFpTZEJLTDF1OTQ3aHpTS2pwWTNuLWM3b0NfRGhSUTdXWjhHNVByQUNhOHA1SHJBRlh3YlFpeVRWRGV3em1mRFVuNFAtRVBOTlZXbElBdkotakw0M21tbnFJUXA1c3BQWjgyb0U?oc=5",
      "site": "news"
    },
    {
      "title": "北山1丁目の住宅地でクマが道路を横断 宮城県 仙台市",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE4tdldPNlRxdERVZzFJSjRHN1dVMmFVMUxWM0JGMjNQSjhGd1BZN1lMTEVoYXJMbzVad0pOMzgyMGlHNjZKcDRmYXdFbGR0VWV5YW1qazBWMGZ4OTJ5dWo4cTRycXhoOVZJeUNaOWstRXBVLXhkV2I4Y0dKbEJ6SFk?oc=5",
      "site": "news"
    },
    {
      "title": "住宅地でクマ目撃、道路を横切った 宮城県 仙台市青葉区 北山1丁目",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBBX1FZM01iUG02QjBhWElkdzlXbnMxM2k4NHNSQWpvdnFWZXJ3NDRGWHlxUXFPdFgxRk50OUNPVnl4VlhZRDZDSjJqd2ZCalBodXAxcm9MU29KUy00YUExVFZYLW8wWnVQWGhBcTlhd3JhWU9wcUxwRUJPbWZWR0nSAYQBQVVfeXFMTm95NENHWURTWGJlMlVCSXNzN1Bub1JtaXVfTVNWNGVNeFlkbl9vU0tMMXJaN1V5WmEtaE9PT1hsWWhmQnlfekMzMFFtS0hhaDNEUURuLWJMUjZMQVBDbDNrOHJHTUlId2lBcWVWbWNDcTg1cEN1dVRTVmVua0lCVmFqaENG?oc=5",
      "site": "news"
    },
    {
      "title": "桐生市相生町でクマが出没 群馬県 桐生市",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNU3BGa2FKSF9jTm94RDc0S0F1UjJMTldzS0NfUVZqWFQxRENLMVgyenhrOXNKSVFYcUlkWS15VjFQZUtyQUN1YlE4QnptVHVuNjZLNzNVOHYwZ1h2MDdhUkhzQ3pIak5RcVgwdUlzNE1VejYySVNVMUVQaGhGZDZkWEVkc19wNWlyLTY0QklBU0NtSHl1bzkyQ293eUXSAaIBQVVfeXFMT3pXaWJDVml2N2dUZFFrM0J1R2VfRFNrRVN4ekR5MnIwQXdjcmRXU1RQWkczQnRqRUd5TkV1Z2RmWnBXX1I5WGtEaTZyY2hrRjdBUDhDZWVWSzdjaG1wajBTU3poUmRITHRWZms4R3JCWVpZUjJpSEkwb0g0aVp2YUZMWGM5ZGZYMm5NaFl5TDhsY01QS29LaklXNkRmbnZZeFhn?oc=5",
      "site": "news"
    },
    {
      "title": "相生町二丁目でクマ目撃、今月5度目 群馬県 桐生市",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1PNVlCR040ZVg2anpyc2hucV9jOWxEZkFmSGRfaTRLWHF1WEltWEYwc2g2Znh1dzVmeDN6VjVoeEI1bm4ya040TmVrUXdJbnlad2IxY0VxUHgzUE43UFE?oc=5",
      "site": "news"
    },
    {
      "title": "養鶏場でカモ23羽がクマに襲われる 北海道 岩見沢市",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBtalhTX0d4bmdKam85d2E3ZXRiaGhSMmNsOEpZR2JqZnZoSWpZMV95dFBUck1nNmhUek92VWJqTDJ0RTcxNXczc2EzcVRpdWtvV2t6TXlOQVBVUW5kY3lNbWpzSDVzZmpBWW9XV1VVWVV4RWhKQXEwUjB3dS1SOUE?oc=5",
      "site": "news"
    },
    {
      "title": "牧草ロールに5つの爪痕、一般住宅から約200m 北海道 別海町",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE42RkFjZWtmUl9YQ2RVcC1ZQ19vQVVRbDlQOVJad0tON1dXdEhRWWJ1RzNhbnlTM1lPZlJ2NmEwMjc1cWNnajd3and5UnpkSk9IUnFMU0F4WQ?oc=5",
      "site": "news"
    },
    {
      "title": "日光市中宮祠でクマ出没 栃木県 日光市",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQb1VhQld3bGxQUzM2bjFqN2NFLXFxWWZnb19STW16LTVwMjNfMlVsWXNjbzBIaHVFTGtnYTF6cW5OT1diNjZYN2RNOWVBWS1XVFJKdnctc0tPLXFZenFpdnJCN2NqQTZpSHFlREhfOHBMZ2FTX2sxWjFycXExdGJUNGFRbUh4U0lIZE5ZbXQ2czVtQjBmcnZuWTVjU0rSAaIBQVVfeXFMTTVuY3ljVS1PcXJIN2JCSkJGVjFrckpWUXNBLXBPZXFWOXI0dWgzMUJBQjktREtNNkYxSy1EanlVSmt0Sm9qRnhhUTNhaEttRDl1VXFYM2lUYTFXSk1odk5qN2VGWWRhSTUyMEtWNWJSUGU0RjRaT1lVOUZ6V3hPTUJ5NzNBZWp6eG10aUEzWnFTRWFFakJGTVlhbUUzV0hxanRn?oc=5",
      "site": "news"
    },
    {
      "title": "富士町・唐沢山でクマ3頭を目撃 栃木県 佐野市",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE83eXVWZ2luOTVVUnJ6TmFvdEtfZDRPT0I1dzBBcHlrdDBCN2Fod3dVTHctRjZiMXJfRF9peUxjOUlSVFZVSnV1TDhiMjhNa044NWVGQ3FFZXB1Z0xQ?oc=5",
      "site": "news"
    },
    {
      "title": "新屋でクマ出没 富山県 南砺市",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOUWJhVnF0RjRoV0xUdHdOb2ZQSkVjcXhnbUk2d0RLOW1hQUhCYklEMTNKUlEwTGtDSUw1NUJHSVhqZnJ6ZUlPMEFzZDdWZTNPYXlPNG5Lb29NRURDU21hRElkcTU2VG80dW9QRGpqS3BTZ3NyWXBnbWFZZjJNblBCQ1NQZDVnNXVnM3Y1S0FZZE56UlR1U1RYbDV1aXltOWwySWV0V2c1M1l3enRWa0Z6M2NYYmJWakpTZHRuQkNjb0VOb3BqRDNTRTRhVS1vbFE3ZDJZcWNhYU02WVlTc2FBRzdMVlJ0VzUta2xzbC1BVzgzQdIBogFBVV95cUxNTEd5VkhjR2plTVZsbWltTGhBMmQzV1ZsbU9OYl9SN1Mydy1CcF9lemxWRnNzQUg1LVE5VGZ3aVVsbDFpeWd6UGk3cFBUSnJEeXpHR2dKOE15RlhqalJuOUNHZDJvSzlHcWF2c3BzTXA5cmwyOVpnd3J3Y0NmUzhHcS1CUFlXa19ZeExIN3h2MkxtMnBQajIwZV9kcXBOX1lpMnc?oc=5",
      "site": "news"
    },
    {
      "title": "波田町でクマ出没 島根県 益田市",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQcXRGQ3U3bTJWZlBhUTNSa1M2LUJsZU1BNU5XV1ByYm5kZXBtSko5MTFZT2FKb25kcUVrYXhnNnNZSzFZaTB0WDV0YTFEY0J6MzdXeDM5Y1RGTVVIQ19RSUxON3NuZ0JlNHMwbHdIdnFwQUE0d1pGd1llRFNJSk5kMkJEOWM4NEplU2laOW9zeEJQSjhfQzlNWFo4YW1ZLTNWWWhWdTc4NFU5TEN2eFlMYUpkR0Jqd3d2cnFuc1hDRnRhdmZub1d2dVM0TDJUZDlKbUdaT016NDVQcFBGeG9VVzZ4dUhUZDlQNkRJRVg1bUdlZ9IBogFBVV95cUxPNWx0alJzYVdjZTFDWnBlOTNpdWRXWjExYmZDNFc0em15VWdPTFNDSV80X2hDTkhwcHpVR0R1ZDNLNS13NGs5ZmNFNzM4TFAyN3BSdkR3QkhpdUR0ZlNCdzhjYk9XYnExY21BeTN1TFYtcC05OHBGMFYzVlNIM094Y3NJR2hCM2VhNkZOcjdiRDc5d05TZE5iS3dFal9KbndMZkE?oc=5",
      "site": "news"
    },
    {
      "title": "大田市水上町福原でクマ出没 島根県 大田市",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZ0NWaHJGSXJHRUJhMTJNVzFLNkREX0toSzJILUJOQkd0ZHNPT3dwb1BUUUhCYXcwd1N2QUd3LVJlekJ3eG96X3dWOXZ6NlMtY0lrR1ZlM2ZybXJxTkZfQWZFZkZ3S2JmWHhuUG05bFZMNk1pLVVodVN1akNlZW94LTBvZUU5cHhUUWZjZnRJTlc4VUFpYkU1ZW9HaW3SAaIBQVVfeXFMTWJBN2ZIMXRxbkNLVG1SNzBvM0hkWHV4dXVjQXQ1UktaUkxPQS1MS1d3c0FYLTN0WTRsRFRBMjl2aE1wcEhRNjFxaWFVWTl5UG9BX2NYemYyN0VteUpySENYTFdXbGpoZWsxdnR1SjlaYURhY1JrNHlPbXNVYzNzTHJsWENneC02UnFOeVh1cmR3NzBaN0hVNlQzNmZRX0VPaTV3?oc=5",
      "site": "news"
    },
    {
      "title": "福部町の果樹園でクマが梨を食い荒らす 鳥取県 鳥取市",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE4yVjBqNWJPSlA5WjV6eFluYUZEa3pmZFF4QW5mMGJKTGxPLWx6VmpGU0NacW9aWmNvdnlBZEpjOGtUZDVWbVlvc01aU0JPeFFz?oc=5",
      "site": "news"
    },
    {
      "title": "福部の果樹園で梨３００個クマ食害 鳥取県 鳥取市",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFA1Nm14NTJscWs0QjE3TVRDX19vQUVCdUluLUNNbTNlTDhseHFvVVEwRklFeHlERnVsck95c1RDSVdIQ044dU9EM0d1bU1PTzFy?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":24},{"pref":"島根県","count":8},{"pref":"青森県","count":8},{"pref":"福島県","count":7},{"pref":"群馬県","count":7},{"pref":"栃木県","count":6},{"pref":"岩手県","count":5},{"pref":"宮城県","count":5},{"pref":"秋田県","count":4},{"pref":"新潟県","count":3},{"pref":"京都府","count":3},{"pref":"埼玉県","count":2},{"pref":"富山県","count":2},{"pref":"三重県","count":2},{"pref":"鳥取県","count":2},{"pref":"長野県","count":2},{"pref":"岐阜県","count":1},{"pref":"和歌山県","count":1},{"pref":"兵庫県","count":1}];

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          日次レポート
        </span>
        <span>対象期間: 2026年8月24日</span>
        <span>·</span>
        <span>公開: 2026-08-25</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={93}
        periodLabel={"2026年8月24日"}
      />

      <h2>総括と主要事案</h2>
      <p>2026年8月24日、KumaWatchが収集したデータによると、国内におけるクマの出没関連事案は計93件に上った。都道府県別では北海道が24件と突出し、次いで島根県と青森県が各8件、福島県と群馬県が各7件と続いた。報告の多くは報道機関を情報源としており（70件）、深刻な事案が社会的な注目を集めている状況がうかがえる。</p>
      <p>この日、最も深刻な事案として北海道根室市で発生した交通死亡事故が挙げられる。乗用車が横転し運転手が死亡した事故現場の状況から、クマとの衝突が原因である可能性が報じられている（※1）。これは、クマの出没が直接的な襲撃だけでなく、交通事故という形で人命に関わる重大なリスクとなりうることを示す事例である。</p>
      <p>捕獲・駆除に関連する事案も4件確認された。三重県尾鷲市では、民家や小学校に近い場所に設置されたわなでクマが捕獲・駆除された（※2）。また、北海道の松前町と安平町でもそれぞれ捕獲が報告されており、地域住民の安全確保を目的とした行政による対応が実施されている。一方で、三重県尾鷲市では錯誤捕獲の事例も報告されており、対策の難しさも浮き彫りとなっている。</p>
      <p>都市部への出没も7件報告されており、特に人口密集地での目撃は市民生活への脅威となっている。宮城県仙台市青葉区北山1丁目の住宅地では、道路を横断するクマの目撃が複数報告された（※5, ※6）。また、群馬県桐生市相生町でも、同月内で5度目となる目撃情報があり（※7, ※8）、クマが特定の市街地を繰り返し行動圏に含めている可能性が示唆される。これらの事例は、クマと人間の生活圏が極めて近接している実態を強く示している。</p>
      <h2>地域別動向</h2>
      <h3>北海道</h3>
      <p>全93件中24件が集中し、最も出没が活発な地域である。前述の根室市での交通死亡事故に加え、岩見沢市の養鶏場ではカモ23羽がクマに襲われる農業被害が発生（※9）。別海町の牧場では、住宅から約200mの距離にある牧草ロールに爪痕が発見されるなど（※10）、産業への影響も深刻化している。松前町や安平町では捕獲事案も報告されており、被害の発生と対策が並行して進んでいる状況である。</p>
      <h3>東北地方</h3>
      <p>青森県（8件）、福島県（7件）、岩手県（5件）、宮城県（5件）、秋田県（4件）と、地方全体で広範囲かつ多数の出没が確認された。宮城県仙台市の住宅地での連続目撃は、都市部におけるリスクを象徴する事案である（※5, ※6）。岩手県大船渡市では、日頃市小学校付近で成獣が目撃されており（※3, ※4）、児童の安全確保が急務となっている。秋田県秋田市や福島県伊達市など、各県の都市部やその周辺でも目撃が相次いでおり、地域住民の警戒が続いている。</p>
      <h3>関東地方</h3>
      <p>群馬県（7件）、栃木県（6件）、埼玉県（1件）で出没が報告された。群馬県桐生市の市街地での複数回の目撃（※7, ※8）は特筆すべき事案である。栃木県では日光市の中宮祠や佐野市の唐沢山などで目撃情報が寄せられた（※11, ※12）。埼玉県では秩父市の山間部で観光客による目撃情報があり、観光シーズンにおけるレジャー客への注意喚起も必要となっている。</p>
      <h3>中部地方</h3>
      <p>新潟県（3件）、三重県（2件）、富山県（2件）、長野県（2件）、岐阜県（1件）と、広域で散発的に報告された。三重県尾鷲市では、民家や小学校近くでの捕獲・駆除が実施された（※2）。富山県南砺市の庄川河川敷では子熊2頭が目撃されており（※13）、母熊が近くにいる可能性も考慮する必要がある。新潟県長岡市の県道沿いや、長野県、岐阜県の山間部でも目撃されている。</p>
      <h3>近畿・中国地方</h3>
      <p>島根県で8件と目撃が多発している点が特徴的である。益田市、大田市、雲南市など県内広域で出没が確認された（※14, ※15）。鳥取県鳥取市福部町では、果樹園で梨約300個がクマによって食い荒らされる被害が報告されており（※16, ※17）、農業への直接的な経済被害が発生している。近畿地方では京都府（3件）、和歌山県（1件）、兵庫県（1件）で山間部を中心に目撃情報が寄せられた。</p>
      <h2>リスク評価</h2>
      <p>8月下旬は、クマが冬眠に向けて栄養を蓄えるため採食活動を活発化させ始める時期にあたる。この「秋季大採食期」の初期段階として、行動圏を拡大させる傾向が見られる。本年の山の実りに関するデータは限定的だが、鳥取県での梨の食害（※16, ※17）や北海道での養鶏場被害（※9）は、クマが人里の農作物や家畜を高カロリーな餌資源として学習し、執着している可能性を示唆している。こうした餌への依存は、人とクマの遭遇機会を増加させる主要な要因となる。</p>
      <p>人口圏への接近度は極めて高いレベルにある。仙台市や桐生市といった都市部の住宅地での出没や、全国各地の小学校付近での目撃は、クマの生息域と人間の生活空間が深く重複していることを示している。特に北海道根室市で発生した交通死亡事故（※1）は、市街地から離れた道路上であっても、クマとの遭遇が人命を脅かす最悪の結果につながりうることを証明した。これから秋が深まるにつれてクマの活動はさらに活発化することが予測されるため、都市部、農地、山間部の道路など、あらゆる場所で最大限の警戒と対策が求められる。</p>

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
          <dd>2026年8月24日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-25</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-25</dd>
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
