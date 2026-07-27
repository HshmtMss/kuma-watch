// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月19日〜2026年7月26日 / mode: weekly-report / 生成日: 2026-07-27
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-26-weekly-report";
const TITLE = "2026年7月19日〜2026年7月26日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年7月19日から26日の1週間で、国内のクマ出没報告は1028件に達した。秋田県、北海道、福島県が上位を占め、栃木県と岩手県では人身被害が発生。仙台市など都市部での出没や捕獲も相次ぎ、市民生活への影響が拡大している。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-27",
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
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
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
      "title": "栃木・佐野市の登山道で75歳男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBnNE5OM2hvYXZGWGFHcUpabmVLb2FNYWVwXzItS2htQ3d3MWFFbjIzUWx6bFR2RTEwcnZ3VlhHeWQxSGV2SE4zOXpOUlZTc2VnMmpPcUNxN0tXN3puNFRn?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県佐野市で70代男性がクマに襲われけが",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9GN3NrNG9Fc1ZMbFkwT1h6a2lCbkxwTDhSVmFyM29hM25fVVZWNXUyWFlOaHk5SDUzSy1ETWNuakliT191bmZ0SXpOYjQtci1IdEVfakFqanZ2Q2c?oc=5",
      "site": "news"
    },
    {
      "title": "岩手・八幡平市で畑作業中の男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE96cFFXb1ZEVXAydmFSUGZyU2tfRThhdzFZLWs3RFpDemh6eHJrMGd4dnhzUUZHTXE0SmJvV2xtdGg0aGo4R1pJeUV1bERycXdjc2oyQU1pTmIwcS1ybkkyUFZvd0dSNUlpTzJGenBqcVR4ejhpRVR2Sldn?oc=5",
      "site": "news"
    },
    {
      "title": "仙台市宮城野区の住宅地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBaQzVtOHZTOFJsZHVxTXdzRFJVM0ZLeHZDczJEamdSeHNfR3JRRUs3RVpLTHRVZ1pSdm5fX3JXa1I2d2c0VEthNVJVVUlwZw?oc=5",
      "site": "news"
    },
    {
      "title": "仙台市で緊急銃猟によりクマ1頭を駆除",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOa0pvTXluZlNUem9ZX202SFZUbFJUOUVKLXdFaU12akp3Y2ZydzAyZHk4NU5maVk2S3EyUVFFbi11ekZuYmljSEgyODNkMkpUZnRTSjJUSVNIZ0pYRE8wM3VzMDJlNHVUdUNCV0tHZkQ1Z0lSeHV6OU45VDZzT0ZRa1BRUTJNdVXSAYwBQVVfeXFMUHNEMjdfaU9LdG5FRmh1cnJRckhoaERWbzczd2RmNDZ5bC04MUdGY0FmVHRJVEZKTEJDYmlnME1JM0oybkNtRGpWRm1WMTZzZUxidWIycFdCeEE5TDc3bVR5ZkFLUzJodmE2UVdycU52dFk4SW91V1o0YnZYaFBFdXk4X1pSVHlYV1VpbEc?oc=5",
      "site": "news"
    },
    {
      "title": "秋田市・外旭川のスーパー駐車場にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE43bXhudm5aSFFVN2ZTRGhyYnZrRFBWXzU4UHFmbHgweDVkc1dBeTZoNVRPOEprQldjQlpBT1RyczRyUEdoQ1FSQzAwYW5FS3V1TnlobDNGM1QyX1VISmtpUkFjUG8weFIwSExwMXhyNjdUUmd0NVRUZjB3QdIBgAFBVV95cUxNMTlqUThzMm9nV3Jha2ZNakVxWXdIZjhnQ3BXMVBaRFB5R2xxWmhEX2Y1RW1xMXNjM01ZTWx4TWc0V3VmcEZLNzAyOV9zYWFJZGJQNTR1OHV5TU5kQ1ZTOXZPZGJlcGtjeS1jajNtSWMxVFI3b0pOR1NZZ3N3cHZSXw?oc=5",
      "site": "news"
    },
    {
      "title": "秋田・由利本荘市の本荘公園でクマ目撃、立ち入り制限",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5DajFKbGk2NEFPcGJwSHhwY1FQZWs4d2tRWlZNNXd4a3R4UGJFTF9DakFRSmZoRGljc3pkazJPTWpOVE1oQ1pJNlI2VHdFcFdkbFMwRWl5M3YwbDd3M2FKSXJn?oc=5",
      "site": "news"
    },
    {
      "title": "本荘公園で再びクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE44VzZJaDZOTWJWQnI1TzNPbTdXQnFBdmFMdFkwcWtEcV9NUThZVkNLSFVxbWFzU2M2YlhmdFFsOXpNOUpUVlM2UWhMb0tEZw?oc=5",
      "site": "news"
    },
    {
      "title": "新潟・妙高市の住宅密集地付近でクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE53QmJhSUxLZmRmd0VNNW5uaHlKN1ZPQklDajk0eWpHVTZNR0hONloxb0pnTzZUcnhlS3dwTEIzTEdfVnlR?oc=5",
      "site": "news"
    },
    {
      "title": "山形・酒田市の住宅地で早朝にクマ目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBFajdxZk8ySEdPbjh2QkdPUElHd095c2ZhR0I1R01HSlh6ckhramkwcEM1RWVjWlNUVi1XM09CVUZ1MUdSd1dEYklEbmE5SWVEdmZ1ZmpwcEVETWd3Wk53S2dlMTZYdFVqRXVidklVZ2xoRTRtWjYwYUlsaVFQYVk?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫・市川町の住宅分譲地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBYc3hIZXktMEJ4OEtTUDhNMTBvX1FoaWx6V1hmWHU2Wjg1M1NEakpGWFc5a3NHdXc0ZlFrbFcwamVVaTFlT1pVRU9JRnl1V1JYWmg3ZkhSZ24tUlBYUlFWVzhGQjhmaWJhM0ROZFFR?oc=5",
      "site": "news"
    },
    {
      "title": "盛岡市・黒石野中学校のプール付近でクマ目撃",
      "url": "iwate-morioka-mymap",
      "site": "iwate-morioka-mymap"
    },
    {
      "title": "青森・弘前市の相馬中学校近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1CTlNXMUp6ZU9OTFdNamsxLXladDdIN0dnTlBlcm9lWkhBLVRXbFlJaE1mZ19qUnNMazFVRmtNaHoyS2NzZXJxWkJYT2VrRjdsWXBJUHp1T0hMbEs1S2tTMV9UMVJzNm9oZlgzUGEyeXlwTFBOVmlQbWUxUE1JeW8?oc=5",
      "site": "news"
    },
    {
      "title": "三重・尾鷲市で緊急銃猟によりクマ1頭駆除",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBPTzVJVUZrSFZOZGk1UDE3cTVrYmR0WTJVSHBiY0xPNTdHQTVvV0lQOWNfYUlMdzduZUt4MmN6QTV4TVRPZnRlc09VVFVSQUktVnRiWmFR?oc=5",
      "site": "news"
    },
    {
      "title": "長野・飯田市の霊園周辺でメスの成獣1頭を駆除",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1GbWxWN0d2dEtVblpTODZMajdjcjNSTl8tbjV6cWd2bU1FUlBLMnBZNVJEXzFQcEFKeUFuS0ZKaTNDcUwtUUNzUURBWmV4WVFDVTN1TFJuS0ZDLUZ1a0t1ems1WGo3WDF2WXpDRDlzblh3ZXRlbmd6SUVnY29rblU?oc=5",
      "site": "news"
    },
    {
      "title": "奈良・下北山村の集落でクマ捕獲・殺処分",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBnb1VEOE9rTGl1cE5hNG1DX3Q1am43ZlFya1daZUhLZl9Bb1ZCN2FvX212LUFwR2d4M3lpdjExc0N2RkdrQTB4dGNUcXdFZ0xKYkpjdjVhSnI5TEliRjZz?oc=5",
      "site": "news"
    },
    {
      "title": "奈良県下北山村でクマ2頭を捕獲・殺処分",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9HNTJYRUpBbk0tUzZ4T0U4TnJIZmlBNHJXRk9DcUFRQmhZWlR0NjhROFdKcjJ6SnJTa0RtTDVJUm11d3RVVXJNWFB5c3ZmVDVjbTlVLTFMT25NeXFvRTZPczViYzlLd0JqVUxzdy1aNGF5cHQxaml2X1B2YllpRTA?oc=5",
      "site": "news"
    },
    {
      "title": "仙台市・梅田川周辺でクマ1頭捕獲",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBKSjZzM3dOSFpxNjdnejRIeVFhZEtqdnZSNzlrZXRSVHR6QXoyUDdDdXlkQ3BhQlVMNzlHZ2w3dF9rbVRsOVBlNjBOa1hnREVGQVV4c1VkX2ZENzlMMm5CSndKNjB0c0NGOFdsZm91SHQ5bmtab1E0ekt5d3lRaG8?oc=5",
      "site": "news"
    },
    {
      "title": "北海道白老町で住宅から5m先に親子クマ3頭",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBSVnhpcDJCa1VibFRENm1sQVlZWmRCVWV1Nk9yR3ZsMGJyWlBlQTFKUTJsdzZCd3B4dGVucUF2QlgwMzZWR19BS280anctUQ?oc=5",
      "site": "news"
    },
    {
      "title": "福島・喜多方市で鶏小屋が襲われる被害",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1RSnRLUl9KdlVFTVVKQmpnOW5teG5maFlLZ1QwcjF3VS0zU3Y4eGRnRkZQRU8wczhqSXJpWXB3WnplaWlITUtfeGczNUt6UQ?oc=5",
      "site": "news"
    },
    {
      "title": "福島・本宮市の住宅の庭先でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1YWlJ5ZjNmWnJzeGI0RXRVU1ZtanpiWG5OVkdHZ2l2WWp2M05YcnVxVHBDb0owMmN1c0hqY0NUNC1OaC1KcEtOb1V2NXhfX083SWVRZnp6ZHVqcXF4cnVPQUE2MlNLZklZM05WdHZkSEZSLVNQSW1NbV96YkdmNWc?oc=5",
      "site": "news"
    },
    {
      "title": "福島・猪苗代町の集合住宅でクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9PNGZRbldqZFpJMjNfV3Nzb1hIRmYtdHBkb3RGcDFUMEF0c21oUnVZcWpzUTEta1lSR2VwSjRYbnJHZE9USHhJQlo4SUNwSlo1Rjc0LVFCeUlRWjl6OFMzLXNENjY0amo2LWsySzQxeEZINGxveDRvWHFLWlZWYzQ?oc=5",
      "site": "news"
    },
    {
      "title": "岩手・北上市の小学校西で成獣1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNTDZSRC1kWjB3dW1iYkg1RWlIUVRuOVhrVEFNUVZaWjNEaUdyTnV3S0x0YjRSM1pCVm1taDR4NmtLbGRRWXFUR3NkaWN2NXhneTFkQUJMVkM4VUY5cVZYV2p2VTZaUFdBejJEMUh3WlRncHJvY1FtN1hrTXRXX1FockZWVEFfRU0?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県盛岡市の交通公園でクマ1頭目撃",
      "url": "iwate-morioka-mymap",
      "site": "iwate-morioka-mymap"
    },
    {
      "title": "宮城県富谷市の住宅敷地内をクマが横切る",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBtQmx0eEN3YktUMDVfNGVWQVlQRDVsWWZUeGwtTnRPWS1HMzVKNDR5bHlLMElKXy1hRnRrOVo0VG13Tm5HcU1mYTh5Nm5OVkVRd1dEU1NFdUEtTzJkUG9QRW9Gd3JJNWdDUDRqeURoXzFnTzU0MWdCclVfRTM4N0E?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"秋田県","count":201},{"pref":"北海道","count":144},{"pref":"福島県","count":99},{"pref":"岩手県","count":72},{"pref":"宮城県","count":69},{"pref":"新潟県","count":58},{"pref":"栃木県","count":48},{"pref":"青森県","count":44},{"pref":"長野県","count":35},{"pref":"富山県","count":31},{"pref":"群馬県","count":29},{"pref":"京都府","count":29},{"pref":"島根県","count":26},{"pref":"山形県","count":23},{"pref":"兵庫県","count":22},{"pref":"山口県","count":12},{"pref":"埼玉県","count":11},{"pref":"奈良県","count":10},{"pref":"石川県","count":9},{"pref":"福井県","count":9},{"pref":"山梨県","count":8},{"pref":"広島県","count":8},{"pref":"三重県","count":7},{"pref":"静岡県","count":6},{"pref":"岐阜県","count":4},{"pref":"東京都","count":3},{"pref":"鳥取県","count":3},{"pref":"和歌山県","count":3},{"pref":"神奈川県","count":2},{"pref":"愛知県","count":1},{"pref":"岡山県","count":1},{"pref":"滋賀県","count":1}];

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
        <span>対象期間: 2026年7月19日〜2026年7月26日</span>
        <span>·</span>
        <span>公開: 2026-07-27</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={1028}
        periodLabel={"2026年7月19日〜2026年7月26日"}
      />

      <p>本レポートは、2026年7月19日から7月26日までの1週間にKumaWatchが収集した国内のクマ出没事案を分析・総括するものである。この期間、全国で確認された出没総件数は1028件にのぼり、依然として高い水準で推移している。都道府県別では秋田県（201件）、北海道（144件）、福島県（99件）、岩手県（72件）、宮城県（69件）と、東北地方および北海道で出没が集中する傾向が続いている。収集した情報のうち、840件が報道機関に由来するもので、人身被害を示唆するキーワードを含む事案は8件、都市部での出没は37件、捕獲や銃猟に関連する事案は21件確認された。今週は特に栃木県と岩手県で人身被害が発生したほか、仙台市や秋田市などの都市中心部での出没が相次ぎ、住民生活に直接的な影響を及ぼす事態が深刻化している。</p>
      <h2>主要トピック</h2>
      <h3>栃木県と岩手県で人身被害が発生</h3>
      <p>期間中、少なくとも2件の人身被害が報告された。7月22日、栃木県佐野市の山林で、登山中の70代の男性がクマに襲われ負傷した（※1, ※2）。複数の報道がこの事案を伝えており、単独での登山中の遭遇であったとみられる。また、7月24日には岩手県八幡平市で、畑の近くで作業をしていた男性がクマに襲われ、怪我を負った（※3）。いずれの事案も、農作業やレジャーなど、人が山林に近い環境で活動する中で発生しており、クマの生息域と人間の活動域が重複するエリアでのリスクが改めて浮き彫りとなった。</p>
      <h3>市街地・住宅地への出没の常態化</h3>
      <p>都市部への出没が全国的に深刻化している。特に、宮城県仙台市では宮城野区の住宅地で目撃が相次ぎ（※4）、最終的に捕獲・駆除に至る事案に発展した（※5）。秋田県秋田市では、7月21日に外旭川地区のスーパーマーケット駐車場にクマが出没し（※6）、由利本荘市では中心市街地に位置する本荘公園での目撃が続いた（※7, ※8）。このほか、新潟県妙高市（※9）や山形県酒田市（※10）の住宅密集地、兵庫県市川町の住宅分譲地（※11）などでも出没が報告されており、これまで比較的安全と考えられていた場所でもクマとの遭遇リスクが常在化しつつある。学校付近での目撃も、岩手県盛岡市の黒石野中学校（※12）や青森県弘前市の相馬中学校（※13）など各地で報告され、教育現場にも緊張が走っている。</p>
      <h3>各地で相次ぐ捕獲・銃猟対応</h3>
      <p>市街地への出没増加に伴い、捕獲や銃猟による駆除対応も各地で実施された。7月20日、三重県尾鷲市では集落に出没したクマ1頭が緊急銃猟により駆除された（※14）。長野県飯田市でも7月23日、霊園周辺でメスの成獣1頭が駆除された（※15）。奈良県下北山村では、21日から24日にかけて集落で少なくとも2頭が捕獲され、殺処分されている（※16, ※17）。前述の仙台市の事案では、梅田川周辺で1頭が捕獲された（※18）。これらの対応は、住民の安全を確保するためのやむを得ない措置であるが、人とクマの共存のあり方について改めて問い直す機会ともなっている。</p>
      <h2>地域別動向</h2>
      <p>出没件数が特に多かった上位5県の動向は以下の通りである。</p>
      <ul>
        <li>秋田県（201件）: 県内全域で出没が報告され、全国最多となった。特に秋田市や由利本荘市など、人口の多い都市部での目撃が際立った。市街地の商業施設駐車場や公園など、市民の生活空間に深く侵入する事例は、都市型出没の典型例と言える。</li>
        <li>北海道（144件）: 広大な生息域を持つ北海道では、依然として多くの出没が確認されている。白老町では住宅からわずか5mの距離で親子グマが目撃されるなど（※19）、人家周辺での遭遇事案が散見された。</li>
        <li>福島県（99件）: 喜多方市で鶏小屋が襲われる食害が発生した（※20）ほか、本宮市や猪苗代町では住宅の庭先や集合住宅付近といった極めて身近な場所での目撃が報告された（※21, ※22）。農業被害と生活圏への侵入が複合的に発生している。</li>
        <li>岩手県（72件）: 八幡平市での人身被害に加え、盛岡市や北上市では公園や学校の近くでの目撃が報告された（※23, ※24）。県都である盛岡市中心部での出没は、住民に大きな不安を与えている。</li>
        <li>宮城県（69件）: 仙台市宮城野区という政令指定都市の市街地での連続出没と、それに伴う捕獲・駆除は今週を象徴する事案であった。富谷市の住宅敷地内での目撃もあり（※25）、都市圏全体で警戒レベルが上がっている。</li>
      </ul>
      <h2>注目事案の時系列</h2>
      <p>期間中に発生した人身被害、都市部出没、捕獲・銃猟などの主要な事案を時系列で整理する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">日付</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">場所・状況</th>
              <th className="px-3 py-2">概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-07-19</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">本宮市</td><td className="px-3 py-2 text-xs">住宅の庭先</td><td className="px-3 py-2 text-xs">住民が庭を歩くクマを目撃。</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-20</td><td className="px-3 py-2 text-xs">三重県</td><td className="px-3 py-2 text-xs">尾鷲市</td><td className="px-3 py-2 text-xs">集落内</td><td className="px-3 py-2 text-xs">緊急銃猟によりクマ1頭を駆除。</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-21</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">秋田市</td><td className="px-3 py-2 text-xs">店舗駐車場</td><td className="px-3 py-2 text-xs">スーパーマーケットの駐車場にクマが出没。</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-21</td><td className="px-3 py-2 text-xs">奈良県</td><td className="px-3 py-2 text-xs">下北山村</td><td className="px-3 py-2 text-xs">集落</td><td className="px-3 py-2 text-xs">集落内でクマを捕獲し、殺処分。</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-22</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">佐野市</td><td className="px-3 py-2 text-xs">登山道</td><td className="px-3 py-2 text-xs">登山中の75歳男性が襲われ負傷。</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-22</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">喜多方市</td><td className="px-3 py-2 text-xs">鶏小屋</td><td className="px-3 py-2 text-xs">鶏小屋が襲われ、ニワトリに被害が発生。</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-23</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">仙台市</td><td className="px-3 py-2 text-xs">宮城野区（住宅地）</td><td className="px-3 py-2 text-xs">市街地の住宅地でクマが目撃される。</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-24</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">八幡平市</td><td className="px-3 py-2 text-xs">畑近く</td><td className="px-3 py-2 text-xs">農作業中の男性がクマに襲われ負傷。</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-25</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">仙台市</td><td className="px-3 py-2 text-xs">梅田川周辺</td><td className="px-3 py-2 text-xs">市街地に出没した個体を捕獲後、駆除。</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-26</td><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">市川町</td><td className="px-3 py-2 text-xs">住宅分譲地</td><td className="px-3 py-2 text-xs">山林内の住宅分譲地でクマが目撃される。</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>総括すると、当期間におけるクマの出没リスクは全国的に極めて高いレベルで維持された。出没件数の高止まりに加え、活動域が市街地や住宅地へと拡大する傾向がより一層顕著になった。特に、東北地方における都市部への侵入頻度の高さは、人とクマの遭遇が偶発的なものではなく、日常的なリスクへと変化していることを示唆している。また、栃木県と岩手県で発生した人身被害は、山林や農地における対策の重要性を再認識させるものである。これらを踏まえ、総合的なリスクレベルは「警告（高い）」と評価する。</p>
      <p>次週に向けては、夏休みシーズン本格化に伴い、山間部や観光地でのレジャー活動が増加することから、不意の遭遇に対する一層の注意喚起が必要である。特に早朝や夕暮れ時はクマの活動が活発になるため、山林付近での行動は慎重さが求められる。都市部においても、ゴミの管理徹底や、藪の刈り払いなど、クマを誘引しない環境づくりが重要となる。出没が多発している秋田県、北海道、福島県をはじめとする東北各県では、住民への継続的な情報提供と警戒態勢の維持が不可欠である。</p>

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
          <dd>2026年7月19日〜2026年7月26日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-27</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-27</dd>
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
