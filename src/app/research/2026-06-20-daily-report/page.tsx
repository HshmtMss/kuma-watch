// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月20日 / mode: daily-report / 生成日: 2026-06-21
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-20-daily-report";
const TITLE = "2026年6月20日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月20日、国内で200件のクマ出没が報告され、福島県で最多の36件を記録した。新潟県では登山中の男性が襲われる人身被害が発生したほか、富山県では駆除事案、宮城県仙台市など複数の都市部で目撃が相次ぎ、人とクマの生活圏の接近が顕著となっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-21",
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
  datePublished: "2026-06-21",
  dateModified: "2026-06-21",
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
      "title": "登山中の男性が襲われ負傷",
      "url": "http://www3.nhk.or.jp/news/html/20260620/k10015155481000.html",
      "site": "NHK"
    },
    {
      "title": "富山市で体長1mのクマを駆除",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5kVTl1eU5IVmJONGVJczdaWElTRXlWN2UzX2JuTWU2cjFqRld1OFl5MDlTYjRkbV9TTnFrbFFnUktLejZURHQ0NEFzWmZBWEwyVTY4YnQ3djBwNFFZX21kUjRJWnAtVUVoS2J1SDY1Q3dQTWctWmtvRnlUdlJBa1k?oc=5"
    },
    {
      "title": "海岸沿いで1頭駆除される",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBYaERsbDhMNFBxellyTFBTWml3eFBOYUJtU2RlLUFNaEk2LXpxdzRlTDhEMDB4RGNIN1d2VFoxX05GUUdEQ2lCZU1xRFBFdw?oc=5"
    },
    {
      "title": "台原森林公園でクマの出没が続く",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE03aTk3X2lTVXpVaTVxOHpfOTVpNC1CT2wyQXRveTgwaHhxVFhMdVQtQVhUQlJQLV91d002TFV6OVd1UDBpM3VSU0V0X1pHclVFRFBwWVo5OUJnT0NSdFFXUw?oc=5"
    },
    {
      "title": "市営住宅付近でクマの目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8tVUFpVG1PeXhWc3N3NzAwalJMTXNQVU8zUFc0WERMUFVSWWExVXFJR1JxSzZBaEIzR2ZzaV95UVowN2pTSzlKRGJ5WHhKSEV0TlROMGN1a0dlQ2JUQWVsUGg4Z0FfbGRsTnJpTS13OThqQjkyZkNoWDEtRl93elE?oc=5"
    },
    {
      "title": "自宅のガラス越しにクマと遭遇",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1scEl2M0ZtWFJmNEpURjIzbnIyNEJYMDVZQVY0QzEwaHNPYy03dUxyU25TNGNiOXpId3g5akdiWjVSY1c2Um5BaDNUOHRwQmdBVjJNNjJIbmlvMWliRkNXdWFDYmh3ejFYd1E5ZGUwakxxUHZpZUZDOEVIMA?oc=5"
    },
    {
      "title": "こども園付近で目撃情報相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9MV29ZcEw3OFMwVFNFMjUtblFEbWdGb0NOZVQwdHNOZEp2Wi0zWHJGZHgxWlFvaTNNNGdqVWg2bjJtZlR5ekFqbFc5Zzh4dVJJdUtDbS1NZW4?oc=5"
    },
    {
      "title": "鳥取砂丘近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5QTFBwTFVzWlVNNjhJeU5pOFhSSUZvMFpXQlE2REwxSWpKNlBRZnZkRWpySFdQWkdHZDQ0T3RjbGFNU3lKUDB2M29uTTB1a2pLLVB5S1g5REI2VkxKSExleXo3ZGdMekE?oc=5"
    },
    {
      "title": "中之条町四万でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOY0o3bVBuSmhEcFdQVENMR2hJRnlsMFZxd3p3SlBFNzQzSjVtUHBRSGVNc2JRZ3JLUXZISElLQlNCU3ZoQ19qNlBSTC1zbGVLc252OERJX1NkcERQSGxqOE5lRFlUdVB1NC05T0FWdEk2T3lHdk9wWFRRVjVpX1hzX080LUlUMWp5SWVUeHNreFExR2NfTW9iM19ZdEbSAaIBQVVfeXFMTXU5cmxKaGthX18yRFRlcUZOU09DdTVqU0FEcTl0TnJnZ1AxR09lS1hkaHE4UGRqMWw0b3ZadXpjcnNNOGNfYVdzRG04NWhRRlFTUTBjX01KVU9jYUQxMDVyZjhIZEc5ZnZPQmhNM0ZoTzFwQmRJbGE0cGExSDVBZ0s2YmNkQ3g4MXBsV1dwVTNlVGhzMU84aGkwbFlCeDliZUpB?oc=5"
    },
    {
      "title": "軽井沢町長倉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdEdFbldlN3prZFpnUzlBR0RMdGJ3Z29kZUZ4V2tPSExvTFExcGFheS1qZGR5NnYxRVcwZHRMM3FldUxMS0Y1M2ttS2gxYXM2dlBmaUE0cmw4SldJTGduVjlGSjNjZXVrRGFiaGZYYk4zb0ZrRlRWRFc5ZUVFS2lSWXdHRzhsQm5nTUJwdDRNZFdEeFJQZmdPVUdlVlLSAaIBQVVfeXFMTm1aamVnVGY4MGR5TmYtVHdJNFowWDJHY3lkS2VrZEtBTFhOTUNxMERWNkEzQktSWk80ZndfRjZJVk1YSGZLRXc0U3ppa3lGSkhUai1qRUEyVHJKR0FJWFZQbWUtUkRyMk9oUTJuU0puWjEwUE01UVVkOGJDalJCNmU0Vnd6LUNUcG9IUlFMUFRDTktGM0thbWEtTTQ4dTctck9n?oc=5"
    },
    {
      "title": "南魚沼市の山中で男性が噛まれ怪我",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1iamhZRGJTV25ydGRtdzVsSzBGTkx2X3dudUc0UTNEeUpYb3hQaGVzLXl5Z19OMlQ1R29RU1BnaDVUd2lkMEVlNUw3SnhybmtDMkprNlpDUEI4Vl9VZVE?oc=5"
    },
    {
      "title": "海岸沿いにクマ出没し、駆除される",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE16UlFjZV8zYlZNQ3Uxc2R0bzhuSm9xR2xrY3lVaTJYZDBnRnFXX1o4aXZCeHJzVlgzeTF2TkNtYVNKZVBkZE9PQWh0Vkd4THBfS3pkQW9wbDFLYWhuVmdvWmJRTHRlbXZmeDBrY1BoTkl4T0pYanhiME1EWHk5Ymc?oc=5"
    },
    {
      "title": "水上町白坏でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPM3FqWUFHcU9NbWExcXExaktZamxQUDk3dGtsblR1czlabERiYm9hT19EdFdSMnZHbHNQZ2ZkOExCSG9ZVHROVG5uR1FuWnFmRkR5X2dwaTBPdmhJbUNNRkZudC1idllzSjZ5Y1RtUEFBYnFnbEI4ZXZZOWxMazd5d1ZGc0dqNFFCX0hzcFdqclZyNkRTUzNPc2NlUi3SAaIBQVVfeXFMT0xxRDViXzlYYUdzQWhoOGptVkhWQ2lFTlVNanNscGRMUHZuVVFsdmR0aTZjeUt6emtYVC1VcFNBWmhraWhCRFRzXzdLMlV6UXBRTUtuVms2U3lrb0p1dm1RNkR3TjhMZWIwanNUcFNzTXFZT2tuODhMR3NmNFhnTXA0N0ZvbWxPeTEzWFlVTngtLUFkekNzTTBDSXNjRGhDZnJR?oc=5"
    },
    {
      "title": "衣川外の沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQU2tfYzRreldjSWdLLUFwc2hhRDhKelliVUpHR3hOYnF4TXE5cTZLN1hfem9uN20zOV91bDJYallBdGNWNDhJRUJoN3NkZXZBcWQ3cE9SZUtoUnZMeHNRQ2RRQWtJODJHbWp1amxGTThieW01WXVkMmF6SjZDLUVsdE5pZkRLOVkwTHo3SllFcHlUYlJkdnYtTDFUbjnSAaIBQVVfeXFMUFZROXdCUXhHaUt6MFh6TUhkMzFNLWRLeWVtZm01LVBNdzdKcW1MLVN1RWJkOGdsNXN3X0V5bm1CdldOa040Uno5ZkZMa0xDRjdZNVZYQlNJMmp3eEpqZ3pLSGNmT2lhRDE5dmhaRGtpMHZXbW1FX01MTzF5YmNPc3RHSlZmSzNQeXZKUWNFQkROYVpQTGlMUVdqVldVa1NCS1p3?oc=5"
    },
    {
      "title": "安曇野市穂高有明でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPb2tCS0ZPeHBOQkZ1SzgwaHB0dVNMQjFYcDE1Wng4ZU9sc3FiamFLaV8zV1dIY195RkpoQ3BCVTB0ZWxtNnkzcV94Y2pfQUljVzhMVEhaeWRFbWYxV1dqZDhyS1FQazNKbHE5Nm5UeG9VRFZQVk9jTThncnRFaXNkTlp1Nng4T1piamxMUXhlNXdrUV9WXzdNbG1NMjkyR3h1cDNVZVh2TTZPOEg0T0dwUEVhV0p6dzhSSjRWZlNmemJLY3FNSFA2ZHJTNU0xNVY4Tm9JNm9nZ29DR0hXSTBqVHlqOVBhQXY5aE0tTC04N01Yd9IBogFBVV95cUxQdllHQk9mM1JuMG5nVHU5d1J6ZTJrb25NYVR4WVo0UlJMVVp0RWZxSXFzbGNiWk5YR1lyMDZRTndlMWVFMmdoeFhiVWVwVml0TnB2MmxobVU4QUVhUmtFOElXd0ZmaVctOVBtYW5Wb0tKanFfU0JnT2JpUXRqcFhKb3FYRGNYdkhncmNORHdGay05SFVQUkd1eUM5NWxQVmxaMFE?oc=5"
    },
    {
      "title": "町道を横切るクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNaUpZZTNndGs3XzVPMEF6OUJFcWFzQmhJYkJhUlpIYkQtQTBiZmR6eHZTQWxvX3Yydl9oMm1HZnBValQxLWJsRTlBNzlEMjNVRGIzUXY2OTVYZXFqRUhUcW5oendVSUNEdkwxS0pGSEZ3aWUtLW51VUdpbmFnUVRTRllfRWVORm8?oc=5"
    },
    {
      "title": "香美町香住区香住でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOTjUyb1MyY3Q2Tk0teDlSWnNZb3hSb1Q1ZEp0V0JBeGp5NjJDYXJ5a1lFdDNQeDhnMkExNmdKQzNFUXptREd3bUJQZ044c055cDhCT0hQWEdPZUxzcmtzdEVadXdkSVF1RnBDdm5zRGF4c1RMTDV5WUVDYkk4TTJUTDd5Qnk3ZlYzS3Y2VGg5S3JRM1BrRVh0THhXTVNXTkxRbHfSAaIBQVVfeXFMTk41Mm9TMmN0Nk5NLXg5UlpzWW94Um9UNWRKdFdCQXhqeTYyQ2FyeWtZRXQzUHg4ZzJBMTZnSkMzRVF6bURHd21CUGdOOHNOeXA4Qk9IUFhHT2VMc3Jrc3RFWnV3ZElRdUZwQ3Zuc0RheHNUTEw1eVlFQ2JJOE0yVEw3eUJ5N2ZWM0t2NlRoOUtyUTNQa0VYdEx4V01TV05MUWx3?oc=5"
    },
    {
      "title": "弟子屈町屈斜路でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTFBEOVZjRU1QZVhZNFBkZmh5bjlzeG1odnFwdzZha2xHYWlPUUhLVkZURG95YTloeFJRTU9US21QV1k5R2dTSklxRS1wNWhOTkVCaWpRYmlDV1RnWDJrUC01RHhjS19Wd3RwMGdjRHZoenVpVUdubEY5WFBFdDJaMXNHZEhmcG9pNEc4VGJ2b1l4UUF4aGdIRkIyTU_SAaIBQVVfeXFMUC1hLUhsN21FekZ6a0NVRGxISHRncjlLc0tvanFJTkxRWWhKNDZGTDRzRERNSlphOWE0R21tSjZwd3hnR1NjVF9wTFN1QXlpOXFuSWt0SmJ3d3hpWVdhVHNNQUdiUHFXTVEtOVpuWFVTaWRJR0pldEozTUtoN19KWlJoejlOUVdBWnRnbkpqa3NOY1o1OUpjSHVKV1lBeHRNejR3?oc=5"
    },
    {
      "title": "秋田市河辺神内でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNLUZyR3BDSlZoYXZUejN1bFh1TkZONWZ6OVprU0ZpRm8tSzdlSjZCQjVNUFNnbzBvR1oyRmZIUi1uUEFBRDRabEMyV3JQeWFVRC01WWJ0VS12ZEJOV2t4VDAyMGZheXZkTDVHeW5Sdm9jUGtENlRtYTBFY0VBMXFCTVl5dzZUNExhX280MnFDLWltR3pRTUxwU21fRGXSAaIBQVVfeXFMT01Ka1dqR3JGVmI3cGI5Ul9lUEFoVzFKd1B3Y0VXU19CQl9VYWUxTzItWUV4NElpc2ZDYnl4WmhZdHFxRVNwVElqbzJoMlY1QXIwZ3ZyLVhGZktCZjVjVlZrQUJvUjM4X1VCRjh2LVIxVTFGUXBLLWc1WGNrd3lGTVV3TTlBUkpnVTFjRnRXT0d0REc0b25Ta08takJWODhqTUp3?oc=5"
    },
    {
      "title": "散歩中の男性が路上でクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1JeDFCZXFJM2NFTms4U0tyU2xfd2hkbFp6RWZOaktsbzcwR0UyVTNGRjhOWkdmd19UckVhUndrVmdpbWwxOFpYbXlPem5NUTBzRTVScGxWLTR5Tmx6ZFpEQmJ3?oc=5"
    },
    {
      "title": "久美浜町湊宮でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOSjBuQnlFSzEzaWNWdDZtSkdTTXJjTUN2YUZaa2Q2ZUF1LXdULWQwZTV2c2RXcDZBNDd1dW1wUFRHVDZ2UTBnRmpXWGR2SmY1ZS1EVTV6aHBjbXpQYlIzMW90UzhSaFB6NXhvSjhibnJlWU5DN2REVlE3dFViQ3JpSVhFMHcwSWJiQWgxNU9odVJiRndSWFdSWk9sc1ZOZUxJbkHSAaIBQVVfeXFMTkowbkJ5RUsxM2ljVnQ2bUpHU01yY01DdmFGWmtkNmVBdS13VC1kMGU1dnNkV3A2QTQ3dXVtcFBUR1Q2dlEwZ0ZqV1hkdkpmNWUtRFU1emhwY216UGJSMzFvdFM4UmhQejV4b0o4Ym5yZVlOQzdkRFZRN3RVYkNyaUlYRTB3MEliYkFoMTVPaHVSYkZ3UlhXUlpPbHNWTmVMSW5B?oc=5"
    },
    {
      "title": "高畠町上平柳でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBtOVg0SnBwQzlISkZaLVFLOHpBWVotNEtNazNtanlPaFlGMG9uQkhjYmFXRk1iYy0yeW5jdVRTNk9ZbjlHdEs4clhweXczSmxGeDloMFZNNElkSi1SX0t5TVVtbGxuS21PQ0hIbUVMNA?oc=5"
    },
    {
      "title": "ツーリング中の男性が目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1wM2swTTJqSHNCRFNvTHZfN3d1bFRUY1JQcVZXaDctVHNvY0VaenlmUy0wbjQ3ZFVRaU9Gb204MWx4dTVTa2N5QnU0cFUtUW5FSTJuc1pBVVJoTGdjblBlMG4tUXFsT0VrVVJzVEFQT2tQd0RjcXpaR3Z2aw?oc=5"
    },
    {
      "title": "生徒がクマの後ろ姿を目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5NbndOQUlUX0hVbHh2ZGwxNXprQ3QxRm5BUnhJRTlyZk1oTVpqZU1MSEtsTWxRTDJ5VlZEYU00dmZhd3A1bzhhTngwVGNVekxyYkFyVG9SdEJqZ2F2ZmJtc1ltU081dk1ESDRwTVBDOUxqX0dmZGpDQl9EOA?oc=5"
    },
    {
      "title": "大田市水上町白坏の県道で体長1.2メートルの1頭を横断",
      "url": "shimane"
    }
  ];

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
        <span>対象期間: 2026年6月20日</span>
        <span>·</span>
        <span>公開: 2026-06-21</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"福島県","count":47},{"pref":"秋田県","count":34},{"pref":"新潟県","count":33},{"pref":"岩手県","count":27},{"pref":"富山県","count":22},{"pref":"北海道","count":21},{"pref":"長野県","count":13},{"pref":"兵庫県","count":9},{"pref":"山形県","count":9},{"pref":"群馬県","count":7},{"pref":"島根県","count":6},{"pref":"宮城県","count":5},{"pref":"福井県","count":5},{"pref":"青森県","count":4},{"pref":"広島県","count":4},{"pref":"鳥取県","count":3},{"pref":"京都府","count":2},{"pref":"山口県","count":1},{"pref":"岡山県","count":1}]}
        total={253}
        periodLabel={"2026年6月20日"}
      />

      <p>2026年6月20日の国内におけるクマ出没報告は総計200件に達した。都道府県別では福島県が36件と最も多く、次いで新潟県が25件、岩手県が24件、北海道が22件、富山県が19件と、東日本から北日本にかけて出没が集中する傾向が見られた。情報源の内訳は、報道由来の情報が196件と全体の98%を占め、自治体などからの公式情報は0件であった。人身被害に関連するキーワードを含む報告は5件、都市部での出没は3件、捕獲や銃猟に関連するものは7件確認された。</p>
      <h2>主要事案の概観</h2>
      <h3>人身被害：新潟県での登山者襲撃事案</h3>
      <p>当日は、人身被害を伴う深刻な事案が1件発生した。新潟県南魚沼市の山中において、登山中の男性がクマに襲われ負傷した（※1）。この事案は複数のメディアで報じられており、人身被害キーワードに一致する5件の報告は、すべてこの一件に関連する情報であった。山林でのレクリエーション活動中に発生した典型的な遭遇事例であり、クマの活動が活発化する時期における入山のリスクを改めて示している。</p>
      <h3>捕獲・銃猟：富山県での対応</h3>
      <p>富山県内では、捕獲・駆除に関する事案が複数報告された。富山市では体長1メートルのクマが緊急銃猟により駆除された（※2）。また、同県朝日町の海岸沿いという、クマの生息域としては特異な場所でも出没があり、1頭が駆除されている（※3）。これらの事例は、人身被害を未然に防ぐための行政対応が行われていることを示している。</p>
      <h3>都市部・生活圏での出没</h3>
      <p>都市部や人間の生活圏内での出没も各地で相次いだ。特に宮城県仙台市では、台原森林公園や青葉山公園といった市民の憩いの場での出没が続いているほか（※4）、市営住宅付近でも目撃されている（※5）。また、秋田県秋田市では、自宅のガラス越しにクマと遭遇するという事案も発生した（※6）。福井県南越前町ではこども園付近で目撃が相次ぎ（※7）、鳥取県鳥取市では観光地である鳥取砂丘の近くで市職員が道路を横切るクマを目撃するなど（※8）、人口密集地や観光地への接近が顕著となっている。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道・東北地方</h3>
      <p>福島県の36件を筆頭に、岩手県（24件）、北海道（22件）、山形県（9件）、秋田県（7件）など、この地域での出没が全国の半数以上を占めた。仙台市のような都市部での連続出没から、岩手県奥州市や秋田県秋田市郊外、北海道弟子屈町など、広範なエリアで目撃情報が寄せられており、地域全体で警戒が必要な状況である。</p>
      <h3>関東地方</h3>
      <p>上位都道府県リストには含まれていないが、代表サンプルには群馬県中之条町やみどり市での出没情報が含まれている（※9）。山間部を中心にクマの生息が確認されており、注意が必要である。</p>
      <h3>中部地方</h3>
      <p>新潟県（25件）、富山県（19件）、長野県（12件）が上位に入り、活発な出没が確認された。前述の新潟県での人身被害や富山県での駆除事案に加え、長野県では安曇野市や軽井沢町といった観光地周辺での出没が報告されている（※10）。福井県でもあわら市やこども園付近など、生活圏に近い場所での目撃があった。</p>
      <h3>近畿・中国地方</h3>
      <p>広島県（9件）、兵庫県（8件）をはじめ、中国山地周辺での出没が目立つ。広島市安佐北区の住宅地や、鳥取市の観光地周辺での目撃は、都市部への接近を示す事例である。島根県大田市や兵庫県香美町、豊岡市などでも出没が報告されている。</p>
      <h3>四国・九州地方</h3>
      <p>当日のデータにおいて、四国地方および九州地方からの出没報告は確認されなかった。</p>
      <h2>リスク評価</h2>
      <h3>季節的要因</h3>
      <p>6月はクマの繁殖期にあたり、特に雄グマの行動圏が拡大する時期である。また、前年に生まれた若い個体が親離れして自立（分散）を始める時期でもあり、経験の浅さから人里近くに迷い込む可能性が高まる。これらの季節的要因が、全国的な出没件数の増加と人との遭遇リスクの上昇に寄与していると考えられる。</p>
      <h3>餌資源との関連</h3>
      <p>本データのみでは山中の餌資源（ブナ科堅果類など）の状況を判断できないが、人里への出没が多発している背景には、誘引物の存在が考えられる。農作物や家庭菜園、収穫されずに放置された果樹、屋外に置かれた生ゴミなどがクマを引き寄せ、人里への定着を促す一因となり得る。</p>
      <h3>人口圏への接近と今後の展望</h3>
      <p>仙台市、秋田市、広島市といった都市の公園や住宅地、さらにはこども園や観光地付近での出没は、もはや「山奥の動物」という従来のクマのイメージが通用しないことを示している。人とクマの生活圏の重複・緩衝帯の消失が深刻化しており、偶発的な遭遇から人身被害に至るリスクは極めて高い状態にあると評価される。住民への注意喚起の徹底、誘引物管理の徹底、および出没が常態化した地域における個体群管理のあり方を早急に検討する必要がある。</p>

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
          <dd>2026年6月20日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-21</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-21</dd>
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
