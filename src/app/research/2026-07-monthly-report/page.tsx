// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月 / mode: monthly-report / 生成日: 2026-08-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-monthly-report";
const TITLE = "2026年7月 国内クマ出没事案の月次総括レポート";
const DESCRIPTION = "2026年7月の国内クマ出没総件数は5514件に達した。秋田県、北海道、岩手県など東北・北海道地方で出没が集中し、人身被害が疑われる事案も37件確認された。本レポートでは、地域別の動向と主要なトピックを分析する。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-01",
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
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
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
      "title": "秋田県由利本荘市で山菜採り中の男性が襲われ負傷",
      "url": "http://www3.nhk.or.jp/news/html/20260705/k10015169281000.html"
    },
    {
      "title": "岩手県八幡平市で畑作業中の男性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE96cFFXb1ZEVXAydmFSUGZyU2tfRThhdzFZLWs3RFpDemh6eHJrMGd4dnhzUUZHTXE0SmJvV2xtdGg0aGo4R1pJeUV1bERycXdjc2oyQU1pTmIwcS1ybkkyUFZvd0dSNUlpTzJGenBqcVR4ejhpRVR2Sldn?oc=5"
    },
    {
      "title": "福島県北塩原村の遊歩道で散策中の女性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9vUndxbEZzNnB4MHhwQnVFV1BNUWJLX09SR29RVVZicmpPaWxUd3lHb3B6Y2hZU2NCeUhRYk4yVXp0bmFfbXZkekt3Z3J3Zw?oc=5"
    },
    {
      "title": "栃木県佐野市の登山道で70代男性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9GN3NrNG9Fc1ZMbFkwT1h6a2lCbkxwTDhSVmFyM29hM25fVVZWNXUyWFlOaHk5SDUzSy1ETWNuakliT191bmZ0SXpOYjQtci1IdEVfakFqanZ2Q2c?oc=5"
    },
    {
      "title": "長野県飯山市の河川敷で住民3人が襲われる被害",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9GUVZLQnVPaWNvNG03bHFGMHVnWDZhN2p2TkhWNnFQNlZnZnlzOGlkSmN6MmtRSzU0RjhjS2JqRnBObHRZaWtnMW5SdTRDWEFqVFQ2MzlnUVNqNTdBTFVqb28zX1lsR2c0WERxU9IBckFVX3lxTE82VnZMZ2ZCTHRrZWdYOHNXTk9CRW11bVlIdTc3QndLXzRjeGhuVlZjQnk4MkFiV3p3dEN6MmVIN3NPV3dDaVRVVkI4UDZ0V0t1SlRWYzQxUi1LZ2pmS3B3RGI4bTN3Tm5ZS2NzREg0dmxiUQ?oc=5"
    },
    {
      "title": "宮城県仙台市、JR苦竹駅近くの河川敷にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOaTU4VUgwVVJNNUh3Mkl3WVZhWEFNMENqdWNJcVQxODJMdDFzN0NIM3lJbEdQVEMwQjN4Z0xHUnUtbklBeWdIZmIza1MteXRNaFRQZjd5c0xzVUJpYW9mdGJQWnBVMkt6YkxYUS1rV0tEVkNXQWY1dWpTQnlIYk9mOExXYkNHTFVoeHBrYjZ3?oc=5"
    },
    {
      "title": "富山県富山市の住宅街にクマが出没",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE5wb1d1YXZSblh4US15a2pWcm1IbGJ6SWhwM0RTdGlEZjdaaTJvM2ZPV240SlhQT19NbEtVX3VaWXE3dWZvQmVjVURkOFlLVDBfMS1RZHEwOTk0QlRUcXR2OEV0WEJKcTU0bm1VTEVuNGxrZ2VnT0ZPcG930gF_QVVfeXFMTlh2S1RZM09vSkRfYV81YWQwdEhJLTliMnBUMnVCYi1CRmZtQkZTclZxZXBxVlI0d1F2akNkNTZhbkJOWE5qRHQyUlBYV05xc2NMYlNqOTNqTnBvUEVabHAzdXlRYzZicUxEMkVxcjNvaldXZmp1TGVUdWlkdFpyNA?oc=5"
    },
    {
      "title": "新潟県妙高市の住宅密集地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBtSGV3Q0JLdFFhc2ZNUUQ5dFVreWJ5N0FDN1pIYlBwenpRX2FhNjczMXlDTzNGRlppNkp6enFWWWhFZUxy?oc=5"
    },
    {
      "title": "鳥取県鳥取市の小学校近くで子グマ目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPVGMzTGNHVVVMazZDTjJpbzJQXzUxMC1UZnFlS3NZdkY2eXhfVjF6Y3hXeWtKZzhBX3dwZTNBbWVVbVdWeGVXc2x4QWw4WFpWdEZqWHd1X2hEMFpyYTJ6RGk0VmFCdXBlTGR4LWJfcS04ankyTDZGRWhUc2FtX1hlTmtYMFg1ZS1jQklfRzZB?oc=5"
    },
    {
      "title": "奈良県東吉野村の住宅倉庫でクマを緊急銃猟",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1zc0JQSkJkcHZ1YkF5a252NUdMbHZQUUQ4RDZhSG5mN2NORFVWc0RZbC01N21LREVBZWNxMVFVVVc4MzlIc2VPUEhqZk1IUE9WazFEcDM4bV9sUXR5Y0QzRzU0Z1g?oc=5"
    },
    {
      "title": "富山県立山町の中心部近くでクマを緊急銃猟",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNZ0dWbzFiWjMwQXJjbmRvSWdkemprLTFNMXliMmlZSWhocjNvUnRXYnhIY2hIV1N4LVctM2dNOUNodlpSRi1KRjZreThnVkhwX0RzRDlLa2ZGcGtpS1V0amFQSkgtX3V3Qk93dDJaMmgtWnloZE9OcFZjbjhLTGozd25HUUg1NzQ?oc=5"
    },
    {
      "title": "三重県尾鷲市の集落内でクマ1頭を緊急銃猟",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBPTzVJVUZrSFZOZGk1UDE3cTVrYmR0WTJVSHBiY0xPNTdHQTVvV0lQOWNfYUlMdzduZUt4MmN6QTV4TVRPZnRlc09VVFVSQUktVnRiWmFR?oc=5"
    },
    {
      "title": "北海道更別村でハンターがクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFA1ZTFQT1k4YlRYejZlT2RIdThLY2F6WUJFSmJ4eENBWXdLVFZMcFV4RS1udWRDbzFHVkN1Q1JRSE9mazhXOXdaSjVFRUNXUVZtLUdldG1PTEJlVWFjRTUwMUdMZFdudEc2TDNqQzlGdF9rczNUUDBTbXRWVQ?oc=5"
    },
    {
      "title": "京都府京都市の山中で猟友会男性がクマに噛まれ負傷",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE5PYWUtTXNRdWtJLVZnTzZvQ25HdkdFRTFuS1k4ckw1WjBYVnBHaVotalYtSDVnWC16OFB2R1FuZTNrRGZFcG1sVENiYnhTUUFsOFA3dTZZYXRYekNjdjZYczRFcFpQWDlmYzRtc3BRYlp5Zw?oc=5"
    },
    {
      "title": "石川県津幡町の森林公園駐車場に親子グマが出没",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9DUDg4RlBOLVc2ejk5T0k0THlBRlZjT3ktTElxSzh2Nzd6WFdwYUFnLUtuTldkWmRsNWJKLXNBSllWTFVDVXJQeWtORGlwRFFNWHJSMklYN3lZM21PbkhUQzR3c0RaVlk?oc=5"
    },
    {
      "title": "山梨県富士吉田市の公園脇の林に親子とみられるクマ2頭",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNYkpUVHd4RnNXdldwRDQzN2VsRnpjNHVZbHhjRmJXRGZvUldMYlBaU0NFa2I4b1l0VXlJVUtoakhtN1lkSlFGN0JlYXMtM0lQYVZxWHNhZjBjakhpNkFKRExfSU1RVzk3OHBKTnRNb0hxemhEOWktT3ZreGNVUjVYekExSDdGVFhCeHNUZnln?oc=5"
    },
    {
      "title": "東京都檜原村の登山道で男性がクマに遭遇し滑落負傷",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBtZHY3SHZna2pXQlNNb2ozUlpxUWVFXzg1X3AxMnRicW5MeEs0cXdKdGxLUk4tWTBxYUdydENFeEMzaTJmTFZtaTlfME0tOGlqVXZ6MTRFQ0diNVVzWWIyTkhLeVhUMVVPR3RmSjAyOHZvZGV1V2xXRmhNaDVYbFE?oc=5"
    },
    {
      "title": "新潟県南魚沼市で住宅や学校付近でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE1WbjdYNC1sU1V5VVZRQVJVVG5CVDlmc2xzZmtMU1M2OFRLOWZOWi1YZV9UWGhlNk8ta1NicFdZYmdEc1RP?oc=5"
    },
    {
      "title": "奈良県下北山村で6月に男性を襲った可能性のあるクマを捕獲",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE16UjYyaU93WlFCQXNzN19lWEFDS3NJUHBacVBDR29JdG1ySUI0djNYRThuc1NkSFRhLWRxS1k2QmVyNWgtNGpfdDdGcmlPZkdFdXpObGxSTGE?oc=5"
    },
    {
      "title": "島根県益田市の山中で男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPQW1GejVLdkktczFreVRzeDRLTE9keXgtVjVyRzdFUmNCd1VSN3RFQ0pDLWl0enBHNWNGTnlkakpkdkdvajhzY1M3Nm9TYmxEYXpiYkI5YnhtNUU5ODRsemd5bzd5SE1ycHdwOXBhOVhockNtZkV3TGhoQ3NiLXRuM1cweXBnYU9D0gGIAUFVX3lxTE9BbUZ6NUt2SS1zMWt5VHN4NEtMT2R5eC1WNXJHN0VSY0J3VVI3dEVDSkMtaXR6cEc1Y0ZOeWRqSmR2R29qOHNjUzc2b1NibERhemJiQjlieG01RTk4NGx6Z3lvN3lITXJwd3A5cGE5WGhyQ21mRXdMaGhDc2ItdG4zVzB5cGdhT0M?oc=5"
    },
    {
      "title": "鳥取県智頭町の商店街でクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOa1ZfQlJLOHNzdndmOG1YSjlDRk9NaEVQNTBkOEZETE5iQkV1RmJWTXgzTzZXMDZBVFhUMWtWTV9HQ094WFh1QVJwUDgzSVNBcU54djhJa2tVV1hPdTEyekFBSTA2bXY1X09QMFloMFZlZEUwRllDSkd5bkFCSEhlakMzNDNERDlV0gGIAUFVX3lxTE5rVl9CUks4c3N2d2Y4bVhKOUNGT01oRVA1MGQ4RkRMTmJCRXVGYlZNeDNPNlcwNkFUWFQxa1ZNX0dDT3hYWHVBUnBQODNJU0FxTnh2OElra1VXWE91MTJ6QUFJMDZtdjVfT1AwWWgwVmVkRTBGWUNKR3luQUJISGVqQzM0M0REOVU?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"秋田県","count":818},{"pref":"北海道","count":809},{"pref":"岩手県","count":530},{"pref":"福島県","count":447},{"pref":"新潟県","count":387},{"pref":"宮城県","count":296},{"pref":"青森県","count":259},{"pref":"群馬県","count":237},{"pref":"長野県","count":207},{"pref":"栃木県","count":198},{"pref":"富山県","count":165},{"pref":"島根県","count":161},{"pref":"京都府","count":156},{"pref":"山形県","count":122},{"pref":"兵庫県","count":103},{"pref":"山口県","count":93},{"pref":"石川県","count":79},{"pref":"埼玉県","count":68},{"pref":"岐阜県","count":51},{"pref":"福井県","count":45},{"pref":"鳥取県","count":38},{"pref":"山梨県","count":36},{"pref":"滋賀県","count":32},{"pref":"静岡県","count":30},{"pref":"奈良県","count":28},{"pref":"和歌山県","count":27},{"pref":"岡山県","count":25},{"pref":"広島県","count":22},{"pref":"三重県","count":17},{"pref":"東京都","count":14},{"pref":"神奈川県","count":10},{"pref":"愛知県","count":3},{"pref":"岩和県","count":1}];

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          月次レポート
        </span>
        <span>対象期間: 2026年7月</span>
        <span>·</span>
        <span>公開: 2026-08-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={5514}
        periodLabel={"2026年7月"}
      />

      <h2>月次サマリー</h2>
      <p>2026年7月における国内のクマ出没情報の総件数は5514件であった。情報の内訳は、報道由来が4443件、自治体等の情報源が1071件であり、KumaWatchが分類する公式発表は0件であった。人身被害に関連するキーワードを含む情報は37件、都市部での出没キーワードを含む情報が242件、捕獲や銃猟に関連するキーワードを含む情報が78件確認された。</p>
      <h3>出没件数上位都道府県</h3>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">順位</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">818</td></tr>
            <tr><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">809</td></tr>
            <tr><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">530</td></tr>
            <tr><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">447</td></tr>
            <tr><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">387</td></tr>
            <tr><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">296</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">259</td></tr>
            <tr><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">237</td></tr>
            <tr><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">207</td></tr>
            <tr><td className="px-3 py-2 text-xs">10</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">198</td></tr>
          </tbody>
        </table>
      </div>
      <h2>2026年7月の主要トピック</h2>
      <h3>1. 全国各地で人身被害が多発</h3>
      <p>7月は全国的に人的被害が多発した月であった。特に山菜採りや農作業、登山といった山林内やその周辺での活動中に襲われるケースが目立つ。秋田県由利本荘市では山菜採り中の男性が（※1）、岩手県八幡平市では畑作業中の男性が被害に遭った（※2）。また、福島県北塩原村の五色沼探勝路（※3）や栃木県佐野市の登山道（※4）など、観光客や登山者が利用する場所での被害も発生しており、レジャー活動における警戒の必要性が示された。長野県飯山市では河川敷で住民3人が襲われる被害も報告されている（※5）。</p>
      <h3>2. 都市部・住宅地への出没と住民生活への影響</h3>
      <p>クマの活動域が市街地や住宅地にまで拡大している傾向が顕著である。宮城県仙台市では、JR苦竹駅近くの河川敷で目撃された（※6）。富山県富山市では住宅街にクマが出没し（※7）、新潟県妙高市でも住宅密集地での目撃情報が寄せられた（※8）。鳥取県鳥取市では小学校付近で子グマが目撃されるなど（※9）、住民の生活圏とクマの生息域が近接している状況がうかがえる。これらの事案は、住民に不安を与えると同時に、ゴミの管理や誘引物の除去といった地域社会全体での対策の重要性を浮き彫りにしている。</p>
      <h3>3. 市街地での捕獲・緊急銃猟の実施</h3>
      <p>都市部への出没増加に伴い、人の安全を確保するための緊急的な対応も各地で実施された。奈良県東吉野村では住宅の倉庫に侵入したクマが銃猟により駆除された（※10）。富山県立山町では町の中心部近くに出没した個体が（※11）、三重県尾鷲市でも集落内に現れた個体が同様に駆除されている（※12）。これらの措置は、人身への危害が切迫していると判断された場合に行われる最終手段であり、人とクマの共存の難しさを示す事例である。</p>
      <h3>4. ハンターや猟友会員が襲われる事案</h3>
      <p>クマの対応にあたる専門家であるハンターや猟友会員が襲われる事案も発生した。北海道更別村ではハンターが（※13）、京都府京都市の山中では猟友会の男性がクマに襲われ負傷した（※14）。これらの事例は、専門家であってもクマとの遭遇は極めて危険であることを示しており、対応時の安全管理の徹底が求められる。</p>
      <h3>5. 親子グマの目撃情報の多発</h3>
      <p>石川県津幡町の森林公園（※15）や山梨県富士吉田市の公園脇（※16）など、親子とみられるクマの目撃情報が複数報告された。子グマを連れた母グマは特に警戒心が強く、人を威嚇・攻撃する可能性が高いとされる。子グマの目撃は、近くに母グマがいる可能性を示唆するため、目撃した場合は決して近づかず、速やかにその場を離れる必要がある。</p>
      <h2>地域別動向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道（809件）と東北6県（秋田818件、岩手530件、福島447件、宮城296件、青森259件、山形はデータ上位10県外）は、依然として国内で最も出没件数が多い地域である。特に秋田県は全国最多の件数を記録した。東北地方では、山林での活動中の人身被害が秋田、岩手、福島で相次いだ。宮城県仙台市の市街地への出没（※6）は、都市部における深刻な問題を提起している。北海道では、更別村でハンターが襲われる被害が発生した（※13）。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県（237件）、栃木県（198件）で出没が多かった。栃木県佐野市では登山中の男性が負傷する人身被害が発生した（※4）。東京都檜原村では、登山者がクマに遭遇した際に滑落して負傷する事故が起きている（※17）。首都圏においても、山間部ではクマとの遭遇リスクが常に存在することを示している。</p>
      <h3>中部地方</h3>
      <p>新潟県（387件）、長野県（207件）を中心に多くの情報が寄せられた。新潟県では南魚沼市や湯沢町などで住宅付近での目撃が相次いだ（※18）。長野県飯山市では3人が襲われる重大な人身被害が発生した（※5）。富山県では、富山市や立山町の市街地に出没し、緊急銃猟に至るケースも報告された（※7、※11）。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では、奈良県、京都府、三重県などで特徴的な事案が報告された。奈良県下北山村では、6月に男性を襲ったとみられる個体が捕獲・処分された（※19）。京都府京都市では猟友会員が襲われる被害があった（※14）。三重県尾鷲市では集落内に出没した個体が駆除されるなど（※12）、人里近くでの深刻な事案が目立った。</p>
      <h3>中国地方</h3>
      <p>島根県益田市では山中で男性が襲われ負傷する人身被害が報告された（※20）。鳥取県智頭町では商店街にクマが出没し、一時店舗内に入るなど、市街地での大胆な行動が確認された（※21）。</p>
      <h2>月次評価と展望</h2>
      <p>2026年7月は、全国的に出没件数が高水準で推移し、特に東北地方と北海道に集中する傾向が続いた。夏期は、春に生まれた子グマが成長し行動範囲を広げる時期であり、母グマと共に人里近くに現れるケースや、経験の浅い若い個体が餌を求めて市街地に迷い込むケースが増加する可能性がある。</p>
      <p>7月に人身被害が多発したことは、夏山のレジャーシーズンと農作業の時期が重なり、人とクマの活動域が交錯する機会が増えたことが一因と考えられる。また、報道由来の情報が大部分を占める現状から、実際の目撃件数はさらに多い可能性も示唆される。データ累計から見ると、都市部や住宅地への出没は一時的な現象ではなく、恒常的な課題となりつつある。今後、秋に向けてクマが冬眠に備えて食料を活発に求める時期に入るため、出没件数はさらに増加する可能性がある。自治体や関係機関による継続的な情報発信と、住民一人ひとりの予防策の徹底が引き続き重要である。</p>

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
          <dd>2026年7月</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-01</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-01</dd>
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
