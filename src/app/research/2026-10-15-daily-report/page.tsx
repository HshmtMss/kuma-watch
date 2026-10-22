// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月15日 / mode: daily-report / 生成日: 2026-10-16
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-15-daily-report";
const TITLE = "2026年10月15日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月15日における全国のクマ出没・痕跡確認事案は計113件が記録された。人身被害は報告されていないものの、京都府の市街地や教育施設周辺、宮城県の沿岸部漁港など生活環境内への進入が複数確認され、錯誤捕獲も2件発生している。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-16",
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
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
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
      "title": "市街地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5lenpjWDU3d0MzejNRM29WRVNtMUhVc19UZVZIQ0M0TnFPd1Nsc3JXc2lQVmp2RUtWUDBDWUlEbDIySlVrYjRKam14UmpkZw?oc=5"
    },
    {
      "title": "幼稚園付近でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOaGVmMHl6UjhhcU9HUFo3aFdOTXpPZDdVRFBlVFZTbFh6dnZUdFBZNWpQbzhSOUprN25ILU9Wenc2Q1FMQzNnc3EtX3FDWWNTMGk4MzhiLVAtb2VGWk80TEI1SXkwaWJCWUozVzBKN2RnUUN2a0hqa1ZGUEd4cGU4YWZla0RnWlNKQzRVYlNIbm9qQlBPVHNHcS1kWTV2ekRDQWdycGxpNkg0TDhJcGZ4cUZRNnJPem1KekpB0gGuAUFVX3lxTFBNTGcwQXBvRlM1cm5KSU55dVFrWkRVbFZLT3k4OFdFZVZNLTRxWXdxQlhzWkRMWEhTd3dOWVBnTWZXaUQtZW94MkViX3NDZHVXYmFkYVRnNGM1Ul9ucEpTY3NabDJ1ZlZ5a3RrRnAwVjRwb2RZQjk5Zi1seWxpeERqakJEdFBHZ3NiMHZvSk9MUHFGclkwUUk2Vk9mOUxVNWNRaEZRX1BzcExPclAxQQ?oc=5"
    },
    {
      "title": "高校近くでクマとみられる動物を目撃",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5IMDRKaDhRZ0Q0VUFLMTk1N0FUaVNqOVBobGdvcGJBYWdZMXRtOVpiQjNWaVpwTENwQ21TRWhiWUs2bmdHT3NFLVF0UkhCSnlsZng3YzBZTTk?oc=5"
    },
    {
      "title": "漁港でクマの目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5oZXpianRoUEdBb3lqcHJJSWxCdk9CaVN1V0FZeHpvZkw1Tkt4eXR6S3Y1ZUc3R1FPaGg3bXRMQm9VUUlSUmtnamVSamlsMmRXRkszRTdDdU1GVURzMG9GSTYtd05qNFAzUkN4b2ZBRV96LUFraVJWVC1tZDNqbFU?oc=5"
    },
    {
      "title": "畑でクマ2頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE82QjR0eGZRN3JfRWpPMUFGZm1WT0hzR1c3ck9UbTJfMEpTZG1ySV9DQm43MDF6OXcxa1JncFdzQUl2STU3ZzBxOGR2bG4zZFlZY05Zdlp3dDg5Vmc?oc=5"
    },
    {
      "title": "帰宅時に10メートル先でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBCUUlDSkEtWVRTMEhRblY1Y2hKZzJTQWJwRkhmVzRyaHplUDdDRWx5TFl0cFRhT3VpcEtvSVhrNWdaaldhY3pYS0tTLVBlNFZadWJfbE56V1JmT2tmMFU1SG5NZWpuMVdRLXRBbtIBckFVX3lxTFBTRm5FQXV0clJzTWtHMFJ4eFBqdDI4ZDhoMnhiNHJUTHBkanBhM0p3SmpmbkRsQ2RwczFuRkh4c2hXMUM2OEZ3NjdQMjQtT01LX1gxNWFWVGNpTllab3ZISXg3NTF4SGhDODBkcDVydEs5UQ?oc=5"
    },
    {
      "title": "豊田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOT2txRjYydlE3dnNEaWJPd0tDNHBtU1dSUGJ5WEx2bU14VUcxMENST2lMaVdCd0pGU01CMFJRUUpJUWM2TUhNc1puMUVMN3g5bUVhb2R2UHliMExfeFpZYTM2UkdQTHdaeWM0VWhDZnhLckRETFh6NVNGOGY0aWVGcHN4dVBwUlJ5YVRCQzZBVlNaaVRKZmdGSzZ0RFLSAaIBQVVfeXFMTWVsMmpQdENhZWFTRzFMbnJUY3BZaXZKY0JlNXFzQmpaemtzLXd6bmN0UlNXc0VFRHRTeDVCRGVDajhnUmhZaWNNZ01YcnROaDVucW00V1BsdkpFOVAxMXVJc0JscWNTcldpcmpUOVprUEgzNEFta3pnbWlsVVp5WHVVbGE5eGlfVVJjaHFteGUxRUc0MXhVQUgxNFlGcjlqOERn?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbW5MQlhveHdNa0RnMXU5UmRvUEZjZFgtUENxekVfTFJMRTZUbThJQm1mUk12WjV5bjBzTW5FOGZzUTlldnRvOTQ1OExValA2SXJjbmFCaUhuQ0JKTEFoUENhT1J4TXhHZldXN0dSeHU1dGJhemNyME1BOWZLOXBWdS01cTBFY1Nkck5waG13TF9fTFo1eVlBTnd1SUTSAaIBQVVfeXFMTXpUWTUxN0pxeXNmdlY3ZXFKalJ0U3FFR2VDSHlWYnI3aTB3YkFfU2JsTGpoRlVaMFdjVG5pYkV0SUhCTnQxVDlOSGQ4ZHl3b2RyLXQ0VF83Mnlrenp0OU9EZ29lSmF1dk9SWUZYaV92TkRsbUNZbk9HQXVfbUVIcUdjd2JwSVg5R1RZZzk4R21jZzh5STJDSVRFc3lMLUdYa3hB?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOT0JEeEQtdkx0djd6aC0yNnE0cURxUWgtWDVBeVl3MVhQUVVBWURQcFZleGR2U2dTdm52bk1sWUR3TXl2VklkUFJVZ2JfX1E2Vk5wdUJtYldEWm41MEw4dFF6N09xXzdGa2lRXzBRdEQ2OWNEZU11SGJSSlRmeWd3cHJ6MFpYYjE0TjVrTDJLZDBPN3hxMEJIRm1POVTSAaIBQVVfeXFMTV9SNWF5a3l2a1dTdVlialFhOVB3aGRpZ2ItSS1MYzZqaTg3ODlOd0FaQmhVR2ZzWTZPVjBBeW9lYjM2c0ZMUzlRTFM4eklET2xQUnRSU0d5bkc5c01HRFVHOUxzSm84MlQtdTV6ZGRoSnktamdvLWg4TU12eUticlZTUlpBdUJtRmhrYU01OWZnY0wxRGw3Q2tDT005TDI4ZGpB?oc=5"
    },
    {
      "title": "東野牧でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOb3hpUVZyckRZdDAtam01SHl1WHZOcmMzLTBLdXFUcFdUbWpIMjM4b0pqUndPR0piclhJejB0RlJ5T1RMWnR5Z2ctWDk2aE1fSzdsd202RjFZN0o5ZlUyRlc1S3VWekFEMUliZ1o4enZDS0hHekpMVnhQblpQV2Z0M2ZVM01aZXVocHhfWUlDaDFBeWtRajZHMVFkQVXSAaIBQVVfeXFMTFBfZjRmdDh0LWg5WFRzcWZKZW4ydnJsYUhyaVVyQUFub3d5ZmNsRWo1TzlaelZPMlRScEFSdzY3UTRrbnpka2pFTkQwekFNbkZiMTFXQ2phWUh1ZWExaDQ5c2hrU0E1cDNGOWkyczV4ZFE3c21jZ0NzaGdfYm5TbldkMXJzeEhGYS05bF81a0tfQVRueHBJYXl5ZENlcE01NldqZw?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaHU1dUVFRGxPR0d2aVF4ZnE4QlhxZnFEMlJpT1F2ODRCdHd4VEJMc1R6cm9JdzVjSVk3eTFVV2ZIbTVPRkw5amFJWWRCWENfT0p6Z1ZJUXpJZ1oyVEdnMHA5U3JWd09KWDdZODRrMzJEOUY5SmlZa29iRDZ0aGZqWTRSLVJ2NGVfbnZzdGNIUTFFYWxUNFdIaFJZb3fSAaIBQVVfeXFMUEtySGJOSjlHVXdtbGcyNGIxeXBwcV9wRl9LQmhXRmdVLW5mc01CVjdqdExEX2ZzRThvLXRBVDlTUDRnZV9nbTFzWFhLWmJhbFJVT1BJV0Y4WUl2UVhjaG9qT1A0R0NtVXhuekRWS3hWd1dmWHJ0MVBRX2hsRTA2LXRHakp2VnNNOXBqYmlJc0g0cWtWV0J5Z3A4REs0Nm1tdFBR?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOX3RYUnBOcGNjZVllM3BZRHcwTlliV1piSS1KZ2tBNng2VWw3dmpnMkxBSFRKSEcyaXhMQ3c0UTNTV3Nmdy1NSHFWdkpRNTN4SE5MaWh4c1NyRmRzRnMtMkEyLUNvSkRoMGhOdy1UN2ZOYm1Td1lrdm9KamZGMFhzbkpqZTZ0Ql90TmxsQkltMzg2R1JUb3NPYjEzSXdUdk5NV2FUVUZyMHc4MGZXUkpCU1JBZElGNVllUkhpaVN2SHlIeFdGeHlGSmVscldJRW82N2xEMDZBcHdFcjkwVVZyaUpnTEJ1THpxQzFwZ0l1d204QdIBogFBVV95cUxOcUJJSFZxcUE4TjlKQXNKSV9SNDVrYXZ2YW5BdG4yU2VqLUtGZFgzREx6WmFPbkwtd1EySkctWWwxZW5DUS13WEVDaEVxeTVaUGVyRUF5dEpzQVRjRUlCNElFRjFnMzZPR2NPQnhzOU96Rl9GZ1hjUUZQSzZiaWZzSXQzSDVySGlubXNDUzNwaXFhVGJJRXByV180YXhMZ3J3d1E?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQVWZsc2I5UkQ2NUpXekc2anZCM2I4d1lERHFiQkZCQjJ1ZElCeENaZFlOT0YycUtZTkZ6N0U2UEJCeERvcFhvc2xOQjI0bDAzbFRvQkgtWFVpdnBoLVdPV2hhejJ0N2JOMmxYRTdmdXFsamhGX3E0Y0dfX2MtMmt6MTN5YjdpSmNJYmV3WGNJZlcwODhoMHhEcC1mMm5kYk9KMk1PT2lEa0tpVjllNGtwbVNBZWNxQXhDVWNfTW1fcVVxX1ZnMC1scWdOcU9xczczVVJPVThfMU4tdFNtcGQxWU1KcUFjR21OYTRhWUdLMVZiQdIBogFBVV95cUxPRGVqSVlEQkhJdUtVLXNLYkZVMkQ3cldXRTNTejZWQWNEN3FLVTFEeWlOR2xUY1dlZHd0RXFTWFJMdTlWOXFsako2WjJQVUJTZnFWN25YaXRDclpocTVzNHIxQTlOWmlRSm5OelFUZGk1N1dzdlZhSS1PaU84N25pU2c1dmwwSFA0cEdtMFJfeTAyakpiYVZPZXRlNXBWcWk3TUE?oc=5"
    },
    {
      "title": "人気ハイキングスポットにクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPNVFKT1NaYUdWdmxHUnhsVFo2MENuWFNDT2pKME1nazRHaVRNNXhmX2NNZ0lYYjd3V05vbDVnUFdHMm1DbkZnYkZmZHczU0F5Njl1R2ZiQ1hNTjhzNEkzTnhBU0wwUHM2ZzVKSzVFRFB5SFVDcWhlQXhFMkVXUzM4U0ZuTW5nOG1YYVdvTWVfM21LbGZvUWNhMjE0QW5iWHBxQnYwU1Y2R0tsVC1YeXl2S1JlbTFneGwzSWk0NGJHWW54anFZV2w0UE0yTnQxOUs0dlJWSXVidnd4M2s5akJaZVJHZV9aUQ?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbG1xX1piYjhyZzhHZmJIdGdsR1pEaThJaGtxa0xUTUtabEFnMlVzVFFfOEhIU3JPU3pkZXFveWpic2FlNXF0TzJqazBwTFBFZS1NMXBHZnc1UEE2QUZMeEtQd3BGeERlcFhBdGl2SklzSDJCZloxZWxqZkdzMXI3amtidV9uTlVzblpNMFpHRXBhQ2lzdDZwdVkwY2TSAaIBQVVfeXFMTVE4UjRCYkdZdWxzZFlMNnVhcDF3ajdwbWdjdE83di1aeS1IMzdDOUJ0RWxtSTE1Q2hDT0U5VjJ2N1BEaXJLRGJ2VHhzam1CQ0RFRXRmQ2ZldDdXaHBHVG1McXUtbEpnNXZmeUIta1drYXprYmhiMTBmMFNEb0RRcndXd2YwTjdFX2w4TUxDTFdnS2FfZ1pEcXZRcXA0NHEzcUxB?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZ0RsdlNmZ1hqa05JWFhYM2V0bTZZM013MTlVZ20tV0RFSHVvMTFLQ0VKaDIxVFRxOGY0bTVWbjdWVnBlZVotaFIzeERPSkRsUzlQZUdhM1VZMkpzSE1iYS1KNkNwYmZLdXFCbzhmM09FT2NLNlV5RzMxWkhJUkdDZXZCRjRHdjZGUDRzZXYtYkhuT2pUamUxOXlYdk7SAaIBQVVfeXFMTXdCakJZd2JpbjNVbnB0RGRIcFhFQjNjM1loa0RnZXdNdUs2VlRuV2tPTlRrSl82SWhMOElFUHpsaVgyUy1mc2FYWEV6S25Vdi1IdkxHVWEzN09WbTJRNFh5NVRWRkdXMkNLRU9BZDNYZF8zTERSeXFhZ3p6ek45UWt2Wk8ydkZWOVh6OGVVYnZqdmNKX0RpWXpfTTFuaVRnQ2xB?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNFFMc3dBOUJLR3RZQzNkclhTTlFURWdpbHVhM3B4T2NURGRXNGE4MWl4NTdsN3BnYUhWT3VSRDhGTHhXQTllTEJ0RHo3eXNIa0RZeXJqZFlmLU1wdGhWaDRIWDZzWUc1bFNNczROYnBGNmZkUWlURFNvaGkySUszRmllcmMyLThLTEE2U3VSRmFhU3Utd19KLVN1dXDSAaIBQVVfeXFMT1I4M3Q1WkVXaE12bVQ1Xzh3YUw2SlE0SXdTd3ZBX1k0aFU5dFdXdmZKMTZ6TU5oU0RjNTFlQURpR1doSWdHOGljaWx1UGw3d1RkUGpSZW9BYmpoT1BIS2VtTGtYS181b040TWxPaDdhQlZCVEc3MWZNcGpuVmN3cWNBbWw0OGh1ZzZzT2hESUFadU1qN3M2cm5HdUExWkNEZUpn?oc=5"
    },
    {
      "title": "夢前・安富エリアでクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE12Y3hSNkw4OTVBcFMwTlNOdDR5XzVYUnZUOVE2LUxUdllIblY1WXcxVHRBRW5IaS1QMGhFaXV2U0ZpekhQYTFZTGJZX1ZMdmV6TUNSWlJ1SjJCdlpFbkpn?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQN2F3VW5QYU5nZ3hzbHhzenlLY0pBX3N4NTFsRHpxMXAtVkZTTFEzU2xBMFZuS2xKTWUwS1lCa0NuaUQ5ZmJrQzVUdWptQ2s2SFp0MHBrcnBvU3RPREpYZUxwQ1NJNUZCSXprMXZaT09GeDVsVTB5RExxVk4wU0t3Y2d0MjJLWlFWTjh2a0lSZHRndWJtNmQ4M0lLOGLSAaIBQVVfeXFMUDhFN2dyRTFiOHphUlFhMUdaWUJKNkpreHJrNmtOQ3V6YXNzOXFiTWlpVUF0bktYSlBzaWx0d01jVlFaekFCV2RhUnEyOGY1X3hUb2l2WEFLTVJMMm4zOUpsem5meUNqdEl2T0x4cWVEcTh1b1BEd0hCWEdwMms3NzNwMUxVUmVWYlQ4OWRMY0ZwMnpUM2Y1Tzlxcm5uYjJCWF9n?oc=5"
    },
    {
      "title": "市内でクマ出没、畑に足跡",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTFA0SkJ4dC1yVnU1TFlFQ2VDTEYtaUhBTTNBZmN0QUdlMkVuX3lBNXhvaUxycjN6SWhKMmV0VkFRa0pjR3hNS3pnbFBNUkJaLTdodldqR2szRkREQVMwVW1MSjdDc0l2Zy12TWFrUUIxdVFIY1o3?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"京都府","count":19},{"pref":"北海道","count":11},{"pref":"青森県","count":8},{"pref":"宮城県","count":7},{"pref":"群馬県","count":6},{"pref":"栃木県","count":6},{"pref":"山口県","count":6},{"pref":"山梨県","count":6},{"pref":"兵庫県","count":6},{"pref":"埼玉県","count":5},{"pref":"広島県","count":5},{"pref":"奈良県","count":4},{"pref":"福島県","count":3},{"pref":"三重県","count":3},{"pref":"静岡県","count":3},{"pref":"福井県","count":3},{"pref":"岐阜県","count":3},{"pref":"愛知県","count":2},{"pref":"神奈川県","count":2},{"pref":"長野県","count":2},{"pref":"富山県","count":1},{"pref":"東京都","count":1},{"pref":"和歌山県","count":1}];

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
        <span>対象期間: 2026年10月15日</span>
        <span>·</span>
        <span>公開: 2026-10-16</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={113}
        periodLabel={"2026年10月15日"}
      />

      <h2>1. 全体動向と生活環境圏における注目事案</h2>
      <p>2026年10月15日に記録されたクマ関連事案は全国で計113件に達した。情報源の内訳としては報道由来が74件を占め、地方自治体や警察等の公表・独自集計情報が各地域から報告されている。当日中の人身被害報告は0件であったが、都市部キーワードに該当する事案が2件、捕獲・銃猟に関連する事案が2件記録された。</p>
      <p>特に警戒を要する事案として、人間活動圏や集落中枢部への接近が顕著にみられた。京都府舞鶴市では市街地での目撃（※1）に加え、幼稚園付近での目撃情報（※2）が寄せられた。また、京都市では高校付近においてクマとみられる動物が目視されている（※3）。さらに宮城県気仙沼市では漁港敷地内での目撃（※4）が相次ぎ、栃木県佐野市では一般住宅敷地内や畑での2頭同時の目撃（※5）が確認されている。</p>
      <p>捕獲関連では、三重県大台町栗谷の山林において錯誤捕獲が記録されたほか、山口県周南市大字大向字地吉においてイノシシ用箱わなにクマが錯誤捕獲された事案が報告された。生活圏と隣接する山林や農地周辺において、他獣種捕獲用罠への誘引および遭遇リスクが高まっている状況が示唆される。</p>
      <h2>2. 地域別出没状況と分析</h2>
      <h3>北海道</h3>
      <p>北海道内では計11件の事案が確認された。夕張市では帰宅途中の住民が前方約10メートルの至近距離でクマを目撃する事案（※6）や、南部住の江町での出没が報告された。その他、北見市豊田（※7）、中札内村南札内、愛別町北町など、道東から道央、道北にかけて広域で農地や集落周辺への出没が記録されている。</p>
      <h3>東北地方</h3>
      <p>東北地方では青森県8件、宮城県7件、福島県1件（自治体ソース含む）などが報告された。青森県では階上町赤保内大渡において19時15分頃に大型鳥獣が国道を横断する様子が確認されたほか、三沢市、むつ市関根北関根、青森市西田沢沖津で痕跡や出没が報告されている。宮城県では仙台市内の青葉区郷六葛岡、太白区秋保町長袋、泉区大沢3丁目（※8）と複数区で確認されたほか、気仙沼市の漁港における出没が記録された。福島県福島市松川町浅川脇ノ久保では体長約0.5メートルの個体が目撃されている（※9）。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県（6件）、栃木県（6件）、埼玉県（5件）を中心に、東京都や神奈川県でも事案がみられた。群馬県安中市松井田町では柿の木が食害を受け、枝折れや爪痕が確認されたほか、下仁田町大字東野牧では国道を横断して河川方向へ移動する個体が確認された（※10）。みどり市東町（※11）や片品村須賀川でも出没が報告されている。栃木県では佐野市作原町や御神楽町の住宅敷地内、鹿沼市で確認された。埼玉県では秩父市大滝のトンネル工事現場付近（※12）、秩父市荒川贄川、小鹿野町両神小森の琴平神社付近で住民による目撃や痕跡確認が報告された。東京都西多摩郡日の出町大久野（※13）、神奈川県秦野市の権現山ハイキングスポット（※14）および清川村宮ヶ瀬小中沢駐車場でも出没・痕跡が記録された。</p>
      <h3>中部地方</h3>
      <p>中部地方では山梨県（6件）のほか、長野県、岐阜県、静岡県、愛知県、富山県、福井県、三重県から報告された。山梨県では大月市（大月町花咲（※15）、七保町葛野、大月3丁目）および都留市（下谷1丁目（※16）、大野）で集落や市街地周辺への出没が集中した。長野県では山ノ内町夜間瀬（※17）や池田町中鵜、岐阜県では土岐市鶴里町、山県市長滝、下呂市東上田で目撃された。静岡県富士宮市下柚野では集会所近隣での目撃があり、愛知県豊田市日面町では樹木に登る個体が目視された。福井県では小浜市飯盛（成獣1頭）や高浜町鎌倉、富山県富山市八尾町では糞状の痕跡が確認された。三重県では大台町および紀北町十須の集落際での目視や錯誤捕獲が記録されている。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では京都府が19件と全国最多を記録した。舞鶴市（市街地、幼稚園付近）や京都市の文教エリア周辺に加え、京丹後市久美浜町、綾部市睦寄町での出没・痕跡が相次いだ。兵庫県（6件）では姫路市夢前・安富エリア（※18）、香美町（香住区藤、村岡区味取）、豊岡市出石町宮内（※19）、朝来市和田山町竹田で報告された。奈良県では十津川村（内原、西中）および上北山村西原で夜間を含む目撃が4件記録され、和歌山県日高郡印南町田ノ垣内でも出没があった。中国地方では山口県（6件）において周南市（鹿野の畑に足跡（※20）、大向での錯誤捕獲等）や岩国市（近延、周東町祖生下南）で確認された。広島県では大竹市栗谷町大栗林、広島市安芸区矢野南、三次市三良坂町、三原市大和町大草で出没や痕跡が報告されている。</p>
      <h2>3. 主な出没・確認事案の属性整理</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市区町村</th>
              <th className="px-3 py-2">場所・環境区分</th>
              <th className="px-3 py-2">状況区分</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">舞鶴市</td><td className="px-3 py-2 text-xs">市街地 / 幼稚園付近</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">都市部・文教施設至近での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">京都市</td><td className="px-3 py-2 text-xs">高校周辺</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">教育施設近隣での目撃情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">気仙沼市</td><td className="px-3 py-2 text-xs">漁港敷地内</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">沿岸港湾部への進入事案</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">佐野市</td><td className="px-3 py-2 text-xs">住宅敷地内 / 畑</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">一般住宅敷地内への進入、畑で2頭確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">安中市</td><td className="px-3 py-2 text-xs">松井田町松井田</td><td className="px-3 py-2 text-xs">痕跡・食害</td><td className="px-3 py-2 text-xs">柿の木への食害、枝折れ・爪痕の確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">下仁田町</td><td className="px-3 py-2 text-xs">大字東野牧</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">国道を横断し河川方向へ移動</td></tr>
            <tr><td className="px-3 py-2 text-xs">三重県</td><td className="px-3 py-2 text-xs">大台町</td><td className="px-3 py-2 text-xs">栗谷（山林）</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">捕獲事案（山林内）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">周南市</td><td className="px-3 py-2 text-xs">大字大向字地吉</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">イノシシ用箱わなへの迷入</td></tr>
            <tr><td className="px-3 py-2 text-xs">愛知県</td><td className="px-3 py-2 text-xs">豊田市</td><td className="px-3 py-2 text-xs">日面町</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">立木への登高行動が目視される</td></tr>
          </tbody>
        </table>
      </div>
      <h2>4. リスク評価と考察</h2>
      <p>本日の集計データから得られる動向について、季節要因、餌資源、人間活動圏への接近度の観点から以下の通り評価する。</p>
      <ul>
        <li>季節要因と行動特性: 10月中旬という時季は、冬眠を控えたクマ類の採食行動が活発化する時期にあたる。夕張市での夜間帰宅時の至近距離遭遇や、奈良県十津川村での夜間目撃、早朝・薄暮時間帯の行動が目立っており、日照時間の短縮に伴う行動時間帯の生活時間帯との重複が顕著である。</li>
        <li>餌資源の利用と誘引要因: 群馬県安中市で記録された柿の木への食害、枝折れ、爪痕の事例が示すように、集落内や耕作放棄地に残存する果樹等の結実資源が強力な誘引物となっている。これらへの執着が市街地境界部への滞在を長期化させる要因となる。</li>
        <li>人間活動圏・インフラへの接近度: 京都府舞鶴市や京都市における学校・幼稚園周辺、宮城県気仙沼市の漁港、栃木県佐野市の住宅敷地内など、従来的な山林隣接域を超えて生活空間内部への侵入が複数記録されている。さらに群馬県下仁田町や青森県階上町のように国道を横断する事案もみられ、ロードキルや車両との衝突リスクも内在している。</li>
        <li>錯誤捕獲の発生と罠管理: 三重県および山口県においてイノシシ用箱わな等への錯誤捕獲が確認された。農地・里山周辺における他獣種捕獲罠の稼働増加に伴い、誘引されたクマが捕獲される事例が継続しており、見回り時の安全確保および放獣・対処体制の維持が不可欠である。</li>
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
          <dd>2026年10月15日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-16</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-16</dd>
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
