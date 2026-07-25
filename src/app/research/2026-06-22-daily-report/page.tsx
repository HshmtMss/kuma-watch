// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月22日 / mode: daily-report / 生成日: 2026-06-23
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-22-daily-report";
const TITLE = "2026年6月22日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月22日、国内で報告されたクマの出没は207件に達した。新潟県では登山者が襲われる人身被害が発生し、富山県では海岸に出没した個体が銃猟された。全国的に学校や住宅地など人口圏への接近が多発し、住民への一層の警戒が求められる状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-23",
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
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
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
      "title": "新潟県南魚沼市における登山中の人身被害に関する報道 (1)",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1RNXc5Mlc3Smh2RjZET1NfUDVycWIwblUzSXpZNWFBUVcyb2QySldfaWtGWTJlNUV0U1BYYk1HcmprYjBOMmtxVWM0RVZnXy1kdUR6VlVLejJJV1pZOWpKN3k4aFRiLWM?oc=5"
    },
    {
      "title": "新潟県南魚沼市における登山中の人身被害に関する報道 (2)",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA1eXNQaXhHdjYzb1UwZ3NiLXZzb1kxeHJuZThrSzh1UWY1WXB0Nk1RQ3VRT21Mb2NPbmF1SUdFSWN1TlZ0c3YwTl9VYVJBVksxbFd2b2NtQi02UjlMZXJEdzBkRV9NanpKYWttLUY4a29vcDFENzVSa0o5bUtiVjQ?oc=5"
    },
    {
      "title": "新潟県南魚沼市における登山中の人身被害に関する報道 (3)",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBqd2c4OWZXbW1vc09JOUV0NkItZHQtb29nSnljdkVRWVJNRENLRWJ2MGFOZEwza3NHTElYMlc1NWp0aWU1aGVFbzBycmdpTzRKbEN6OWlYdXFFZw?oc=5"
    },
    {
      "title": "新潟県南魚沼市における登山中の人身被害に関する報道 (4)",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE10YU4ydmVxZUI0SGNDUkFGczBzR3JjRk9IN052RVloZHNsTGJNRmxETkxXX1o1MWx6dEgxRmotMGdzZEFtX1cxWENGY0piYjlEZTh3ZzRCSXcwSk5QanRXT01kcw?oc=5"
    },
    {
      "title": "富山県朝日町の海岸沿いにおける緊急銃猟に関する報道 (1)",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQRk80Q09NTVBNYVdFNlJMc2EzcDFNazBMR0FMR0szNTZkTW82a2U5VEswZHhCWDJLZ01uVk9CN29yM2tGcTJoQnMzdzVzM001VVQxS3ZuMWtlcHR1Zy1jMGhjYUxGRjcwS0xaMXhPWnkwX2tPTGVaMVpxNlNDRTNINElWdVpiQVE?oc=5"
    },
    {
      "title": "富山県朝日町の海岸沿いにおける緊急銃猟に関する報道 (2)",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQRk80Q09NTVBNYVdFNlJMc2EzcDFNazBMR0FMR0szNTZkTW82a2U5VEswZHhCWDJLZ01uVk9CN29yM2tGcTJoQnMzdzVzM001VVQxS3ZuMWtlcHR1Zy1jMGhjYUxGRjcwS0xaMXhPWnkwX2tPTGVaMVpxNlNDRTNINElWdVpiQVE?oc=5"
    },
    {
      "title": "島根県益田市の中学校付近における出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1KbExpeGI5dTVRM0tUb043OXFSbWJFRnhkZUFZRGFVNVlkNTQ2aGJ1dGU1bmhJT1Jaam1RcTBfM1JnYmFMUXZQT0tKbjRZNzV0OWVYcDVISjJBZms?oc=5"
    },
    {
      "title": "青森県中泊町の学校近くにおける親子グマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPOG1kSW5obG9VNFVsSVNva2ZYNmJydkduempqTElHclhyd1JvSHIweUg5VnBiYlRPd1gzbU9weEhJdTZteVhldGd2QURzYXJJQjdBZnlmSlU5U1VBSExvaHJScGNSMVRkaFFrbDJRVkNfNkFielZKSXMwd0F1V2JfVFg1T3JZbmM?oc=5"
    },
    {
      "title": "長野県松本市の小学校近く住宅地における出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPZ0dFZTVIb0x1VW5BcXFMaGdUVmozdXpWZzNMMk5hMFppSHVpTUpMY01ieDF6NWZuaWhhSGUwbkg0ODFDYkdBN25UT0Ywc3dVTThhMERoOHpZSG53WnJEQ05uQklQYnhxZzNYLWFRcjlxUl80a0JBY2RXdWpmUjgxQUhBQlFkZTYxME4xV3hn?oc=5"
    },
    {
      "title": "北海道上士幌町ぬかびら源泉郷における出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPREZnZFdJbFJDVGpyRVRtWFIwcGlzb3Y2S0UwRElPWGZuY2lISTN0VWh1ekEwMWVob3hFcVJiVEdfV05uTjYxSFJHRDlUVXg1Sk4tb1IyNDdjMkktYzNoTjBoV2d0VGJyWFFpb0F3bzVmb2M0OFBLVHBvaUlTVVRPZG5rZFVFTVVzdTNHV3VUc2k3VlhxZFprM3JBdGvSAaIBQVVfeXFMUEFuMUxnYTJmM1MydG1tSmVqaVBwajcyTTBUSmZMNVlTVUZvVFQ2d1lMSHhqc3VjdHJBandkQXYzZDdzNlMwOVJxRHRVbFRTXzNRU2MyZkhjNDZ2cG90WG96eTZmNlhibXpBUWVHMWtlSno4U3J5cGtuMG9ZVmswMzc0azhwaElRTG03MUxBYkpoMzMzWVNfTHZsVVV2N1pRWVB3?oc=5"
    },
    {
      "title": "宮城県仙台市青葉区の住宅地における出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeTFfRTBEYWVuU01iY3pXY0laeTBWTUVXb3BTTGQ2UG9XYTh1RkVZc3hkelVsRjhKdG82SXczRE5ZWmVmcEpEVmhCUkoteEg3a1RqRzZaNXhSSkJkVFNGRHczQ1lQT0JweXBudUI5WElhanFLVm5MSncxemhOZ3duYnc2QUM5bFc5N1pKeDZlQU5JUmpCQ1UyNWhkbTXSAaIBQVVfeXFMT0tGRk9lbVR5c0oteGg3dHV6S3hjbjhZX2VhQzJQNXpXQzRZakthOGFYbHhzLWpiWkdyQXc0dTNWaXFJSzQ5R21OM0NwTi1kbXJnSTl3aHA1TEJ1bnRUdmpld1k3RE1rYlpTb05Td3YzSDg1ZlhLRjdYSzdwT2VuSk5vR3JOYi1IZjlHVGU4TVY0Y2hkVkpva1JYeXFHYmtKOGNn?oc=5"
    },
    {
      "title": "山形県山形市の小学校通学路そばにおける出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE92SFlaVTVFVnpySGFwR1lmN0paS0ZxaF9PcjZCaHg3UDZ2X2tEU3ZsNngzNmc1Rkx2V3pKXzlDQ0hzMjNuR0xsXzN4ZjRBSnFnT3hpelRhVkVSeGRSVUl3amJSSXczY2RCSzNhLUZrYWZmUDg?oc=5"
    },
    {
      "title": "群馬県長野原町北軽井沢における出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNYjh3MXhDZmlWdk1wbHNsM0dFZGtRaHlmc3F1dEd0TGZ4WmZPbG9LajJvNGYxTXdDV2ZmZTd3bjVTQ0Y4Nl9NTC1LU1dMZ3NTSk5HUFo5TTI2ME9Ba3JCamZ0YjZKaWlVbV9WdmpNczVveGlzdzk2NDR1dnpYZW42bElEWlVkZkRnMGsxci1EUWxlUExhRUp5djRRcTDSAaIBQVVfeXFMTXVhTEZvR3I5MkJ5QnRyMmxZMlRXU2dpQ0VUUFVnOEhkQkNkdUxReTA0enRuZlhETk9uemYzR3cxd01IZ3p0R3RKc3lQRk1RNEVoX052aEVCUk11aVZPdzg4aVVsMUdLTHdWZ0daZU9yN0tJYUVnNDdBemJBcHFRSTlvN21IZUNkZGQxRXdVeUJhRDZaNU1VYjd5MUhXaFRsdjl3?oc=5"
    },
    {
      "title": "埼玉県秩父市三峰周辺における3頭の出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5kd3lPM0p0bVpPNHdpaldDc0QzWkpsSmRpeGFQT1gwSDR3VXpnSC1tYnVPb01qQUxwZU9rMHVFSzFiM1VZYmRfaGFnX0tiNHJtYXVhMDlIZDNramYxQ1cxelphWFZZUDVTTWVSSlFkczVHS1c3VDQxVzRibFNjZHM?oc=5"
    },
    {
      "title": "和歌山県広川町における子グマ3頭の目撃に関する報道",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBnbUI3eWNweE10a3EwZnVTdFJwYnNLZjQ4bVVUR1dRQkZyeXhhYjhvWnBjazNMT3FqbVRRbU1YQkxTX3lWNmZKRWhlWW5rZW1JWDdmVGtUaGNreFJjVjc2QmtkV1JQbFpxZ29wUjJMWnhvNm1NR2NKbkdCMGNLcWM?oc=5"
    },
    {
      "title": "岩手県盛岡市下米内での出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNcDl4TVlGT0pSWjVpYldyYU1zdXBwNnVtbzBLcEFPV0VJQ3hocDBfUm5YNWJLZWFpc1FlbUYyT0RMYUdnLXlQMFhLWFFFQUpWazFLVWFWVS1CRUpzZG9KcW04YkxjZVJYYkVkeUhlUTlpV1lkRmxFdGpDQXF2MjNvcGhPRXFrWGs?oc=5"
    },
    {
      "title": "福島県猪苗代町の磐越西線における列車衝突に関する報道",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1qVlpja1hRM3RXS0RfOXlNak1UVkNwOWk2M1Zhc29ram5CNmpFdTNHcUQ4TC0teThoa2x4Q2ljWDFkS0VMNWxobmRjVXRadS10bmt0LXoyUVpZa1Z4VnFDWGVPeXZxeWRLUkNLT0RSb1FaTGJ5eTU2QjBXLXdBQkU?oc=5"
    },
    {
      "title": "栃木県那須塩原市の運動公園における3頭の出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5wamhRRVJPaHRjWTlCRjlEd2gwMjhFZ2pWZGdMQllTS2lSV2lOZzJtWmttRFg3bk0zZnR4b2NwYm5YRXBQX01yUmo2ZTlVd0pNYUQtRkVlc1c1dWs?oc=5"
    },
    {
      "title": "山口県岩国市の小学校北西における出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5mbWJGVHo2Yk96aXU5UTRoQWZiVzhvVzFoSXVWT2hkeVJ0bnRtT0JvSEU1Q3VlcVdwVklPM0stWi00TFR1QktNUDUtNkxMRlY0eEtCaTdQak03enZnQ24wc2xKOWRLZlpRdDRmXzJiUdIBdEFVX3lxTE81cWVUdmZaSXJrZkh2b200S1NBam8ta1BlRGtTU1NBb3lwZUxDdGc1anNRbkp6RE1aUlQ3X2ltaFJTTTVwYk1BdkxIc29WZ3dRamJfMFJuWTJGaEh2ZTJpVm9sTDEyV05QYWdDWk85Ym9tQmhJ?oc=5"
    },
    {
      "title": "京都府福知山市における出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNb1BaMk5UYWtvMmlwTGJvQjVHTjVjYWpBdExyYk04V2pSNGlBd0lfbm1URzBIT1hueUhScThkNzJwWmtXRV9oWm9lVUpxN1lQZVpoQkhyQnYyelVrOG5IZmFLUGRRUlRjd2ZLc1BXT1hldzdydFF4WWJ1UWJtRHlUYnZMcThYbnQwcXFZLUpzUXoySklfZE5pbV9pOFRmUVFBaGfSAaIBQVVfeXFMTW9QWjJOVGFrbzJpcExib0I1R041Y2FqQXRMcmJNOFdqUjRpQXdJX25tVEcwSE9YbnlIUnE4ZDcycFprV0VfaFpvZVVKcTdZUGVaaEJIckJ2MnpVazhuSGZhS1BkUVJUY3dmS3NQV09YZXc3cnRReFlidVFibUR5VGJ2THE4WG50MHFxWS1Kc1F6MkpJX2ROaW1faThUZlFRQWhn?oc=5"
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
        <span>対象期間: 2026年6月22日</span>
        <span>·</span>
        <span>公開: 2026-06-23</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"長野県","count":29},{"pref":"秋田県","count":24},{"pref":"北海道","count":22},{"pref":"福島県","count":19},{"pref":"群馬県","count":18},{"pref":"青森県","count":18},{"pref":"新潟県","count":15},{"pref":"島根県","count":15},{"pref":"京都府","count":12},{"pref":"岩手県","count":11},{"pref":"山口県","count":10},{"pref":"富山県","count":8},{"pref":"宮城県","count":6},{"pref":"山形県","count":6},{"pref":"山梨県","count":5},{"pref":"栃木県","count":5},{"pref":"和歌山県","count":5},{"pref":"埼玉県","count":3},{"pref":"岐阜県","count":3},{"pref":"石川県","count":2},{"pref":"静岡県","count":1},{"pref":"岡山県","count":1},{"pref":"兵庫県","count":1},{"pref":"滋賀県","count":1}]}
        total={240}
        periodLabel={"2026年6月22日"}
      />

      <h2>概況</h2>
      <p>2026年6月22日、KumaWatchが収集した国内のクマ出没関連情報は総計207件であった。情報の内訳は報道由来が186件と大半を占め、自治体等の公式情報は0件であった。人身被害を示唆するキーワードを含む事案が4件、都市部での出没が16件、捕獲または銃猟に関する事案が4件確認されている。都道府県別では長野県が31件と最も多く、次いで青森県（18件）、群馬県（17件）、福島県（17件）と続いている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">31件</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">18件</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">17件</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">17件</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">13件</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">13件</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">12件</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">11件</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">11件</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">10件</td></tr>
          </tbody>
        </table>
      </div>
      <h2>主要事案の分析</h2>
      <h3>新潟県南魚沼市における人身被害</h3>
      <p>新潟県南魚沼市の山中および登山道において、登山中の50代男性がクマに襲われる人身被害が発生した。この事案は複数のメディアによって報じられており（※1, ※2, ※3, ※4）、当日の「人身被害キーワード一致」4件はこの一件に関連するものと分析される。登山や山菜採りなど、山林に入る際の危険性が改めて示された。</p>
      <h3>富山県朝日町における緊急銃猟</h3>
      <p>富山県朝日町の海岸沿いにおいて、出没したクマ1頭が緊急銃猟によって駆除された（※5, ※6）。通常、クマの生息域から離れた海岸部での出没および銃猟は特異な事例であり、個体の行動範囲の拡大や何らかの要因による異常行動の可能性が考えられる。また、群馬県中之条町でも成獣1頭が捕獲されるなど、人的対応を要する事案が発生している。</p>
      <h3>人口密集地への接近事例</h3>
      <p>「都市部キーワード一致」に該当する16件の事案が示すように、全国各地で人間の生活圏へのクマの接近が確認された。特に、島根県益田市では中学校から約100メートルの路上で（※7）、青森県中泊町では「こどまり学園」の近くで親子のクマが（※8）、長野県松本市では小学校近くの住宅地で（※9）、岩手県盛岡市では住宅地内で成獣が目撃されるなど、通学路を含む子どもの生活圏への出没が相次いでいる。これらの事例は、偶発的な遭遇による重大な事故につながる潜在的リスクをはらんでおり、最大限の警戒が必要である。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道では、観光地である上士幌町のぬかびら源泉郷などで出没が報告された（※10）。東北地方は、青森県（18件）、福島県（17件）、岩手県（11件）、秋田県（10件）など、全域で活発な活動が見られる。特に、宮城県仙台市青葉区国見の住宅地（※11）や山形県山形市の小学校通学路そばの河川敷（※12）など、都市部やその周辺への出没が散見され、住民生活への影響が懸念される。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では群馬県（17件）の報告が突出しており、長野原町北軽井沢のような別荘地での目撃情報も含まれている（※13）。埼玉県秩父市の三峰周辺では3頭のクマが目撃されるなど（※14）、観光地においても注意が必要である。中部地方は、全国最多の長野県（31件）を筆頭に、新潟県での人身被害、富山県での銃猟と、深刻度の高い事案が集中した。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では京都府（11件）での目撃が目立った。和歌山県広川町では子グマ3頭の目撃情報があり（※15）、母グマが近くに潜んでいる可能性を考慮する必要がある。中国地方では島根県（13件）での出没が多く、前述の益田市の中学校付近の事例は、地域社会に大きな影響を与えたと考えられる。なお、四国、九州地方からの報告はなかった。</p>
      <h2>リスク評価と考察</h2>
      <p>6月22日の出没状況を分析すると、以下の3つの観点からリスク評価が可能である。第一に「季節要因」として、6月はクマの繁殖期にあたり、雄の行動圏が拡大する。また、春に生まれた子グマを連れた母グマが活発に活動する時期でもあり、子を守るために攻撃的になりやすい。青森県や和歌山県での親子グマの目撃は、この季節的特徴を裏付けている。第二に「餌資源」の問題である。本データからは直接的な因果関係は断定できないが、山林内の餌不足が人里への出没を誘発している可能性は常に考慮すべき重要な背景要因である。第三に「人口圏への接近度」の高さである。学校、住宅地、公園、観光地といった人間の生活・活動エリアへの出没が全国で多発している。これは、クマの生息域と人間の生活圏の境界が曖昧になり、遭遇リスクが極めて高まっていることを示唆している。特に、岩手県盛岡市や宮城県仙台市といった都市部での目撃は、この問題を象徴している。総括すると、当日のデータは全国レベルでクマの活動が活発化し、人身被害や人口密集地への接近という形でリスクが顕在化していることを明確に示している。自治体による迅速な注意喚起と、住民一人ひとりの適切な警戒行動の徹底が急務である。</p>

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
          <dd>2026年6月22日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-23</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-23</dd>
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
