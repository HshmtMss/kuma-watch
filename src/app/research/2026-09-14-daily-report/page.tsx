// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月14日 / mode: daily-report / 生成日: 2026-09-15
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-14-daily-report";
const TITLE = "2026年9月14日 クマ出没・遭遇事案の日次分析レポート";
const DESCRIPTION = "2026年9月14日に全国で報告されたクマ関連情報は計71件に上った。人身被害は確認されていないものの、長野県松本市での車両衝突事案や広島県三次市における大規模な果樹農業被害、都市部・集落周辺への接近事案が記録されており、多角的な警戒が求められる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-15",
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
  datePublished: "2026-09-15",
  dateModified: "2026-09-15",
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
      "title": "「クマが乗用車に体当たり…」体長約1.5メートルのクマがボンネットに覆いかぶさるように…長野・松本市の県道「車にクマが向かってきた」30代男性が通報、車の一部壊",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1QRWU1VVFEeWdtZkdPcWFtd1lrZ3ZLYWp3Y3Rxd1RTQ1FPYWFEMUx0d3hCRUUxNy13V2xqUHNYczZYckN4Ym5GZ0pDYkZJM2F2WjlMX2RSeHJiaXgyM2ZmeGxHWFQ2bmxzeE9qUWJpck9ZNV9r0gF6QVVfeXFMTWNDT0Nwc1Y5bGpMVFdRTF9fUFJMS2l3QVlxOG44UXZLdTB5MkRpQTd2WHpGc2JnbkgzZ29vNnBUZE9fTTZOa1B6NWZPcWFndTN0UHg5bUFzNXE0NEFHTHBPYWhhVHdpbG9ZdlVaWFpCaEZNUERBRUktTHc?oc=5"
    },
    {
      "title": "深刻 クマ連日出没 １軒の農園だけでナシ５０００個以上被害か…対策強化求め緊急決議 広島・三次市議会",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE8xaDBtcUwwTEVLVW8yTnJKUEIzZFRnSmJkc1RaNlluWm95d2N5UlpFdkVpZ1NpeFBpX0N0ajRFbEIyazd4dXZwblE5a2FVRmFJRFBzYUlXU1BuR1owdHN6OHlUY3F6b0lqSG1KZU10alR6UU5XSmFkUw?oc=5"
    },
    {
      "title": "弟子屈原野32線東でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNdG9qc1lNakFlUHZ5TjlHbzRvQTlHRzN5cUhHWnZ1cXNXbE9JUE9YVmx0aUs4bnZNUmNHazd3NmtVRHZ6ZkdTczF1YnF6MlFJbGdHd1FJbDA1UDJmVm0zRmVzcG9Pa3FZMVZ6ZXYwM2dhOWw2VVZzdHAwWkdraGVTR3o0a25EaHlvdV9HRkIxc1hEcG1GejRRajVEbFZwRjczWlhrZ090WGlDSkI4cVFn0gGiAUFVX3lxTE9HRlM4MWwwLWd2V2gtbUNpU3A2ZzRyMzA4UDlCanZLZ2ZFZDVpUV91Um1Jb0d6bzFWSUhlcGhWQ25KVFRNclRzMUdXSFlWV091akhJdU9hVVYydEJCV1l2QlNrb1J5dF94eVJVdFRpWWdPTFk2V2Qwa1UxRWNONVFpcTA4d3BDN3ZRUF9COWd1RVZhWGFfZVozUG8zRFlUSDE5dw?oc=5"
    },
    {
      "title": "屈斜路でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQQUdOdVItQVJDbHAtUGE5cDlzcFZuSWU3V3NxWmluOU9KUkZ0NHdYbGhOS0oxYmdfSlRDZVVITHZ4OENnX29ueVJ1SEF2V0FvUkRkT1FqcTRzeE9oLWo4ajhkOU5QbWJpR1I0SDJWWGxrbWtNUjNBSmtrTk5HNEZJZWNsSHBoVFVadjJHeVVwUl9pUUN2TTRVZkUtMWVVTVBpNnpyX2M5V25yZWRaeDg2SG1qSlAyYWJNdkRpaHV6WUxOcEVWZF8xZEREWkloYTRuSld2cVFFM3c4NEk4bndsdHJqRTBRUkMweEQ0X2ZmSHRfQdIBogFBVV95cUxNbVR2U21McGtMdzdDNHIyZll2QXZlcGdGTk16SC1sVUk0djdTZ1QyRUU4WmZ0T2FkNnlobzdpUjBrZlJHRGtWVTFrcTM1VllYTFd5ZTF4VWt6N2VXbk1hUk4yTFJGZWJSTnZVSXhxblpKeThrSkU3eThqZ3AxQnlGaFhlM1FQQllhblRwYnhKRVk3ejhueWlYbVQ1NzFWaUFoQ2c?oc=5"
    },
    {
      "title": "（北海道）幕別町忠類公親でクマ出没 ９月１４日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNVjg2Q1FzcWlaN0FLME1QbVpvclVlSXFSTTBRTXR4R3JOWWVUOVVLV1FscGFfdFo5cWt1YXpoM3ZiYUtrNDQ3YTNKV1ZZQzFDakV0VW9PckE1ME1PeE9HenlVVW5ScmEwUEx5eHNEZnFWSXlhbHFPbFVfNzlhZzdISFM2azJkM04zVFpHZTJkNWpCYkZ5cUlyckh5SVpTa2RqQ3lnZ1RqY0NXQTRYZ2Fhc29KT0pYNnVyczZxMXY2RzJfUklWc0I5Um9haS1KeTJGM1BWMmtYZ3djNDIzUGxXcUlFR1JtdjRGc2d2TzFaNDVrZ9IBogFBVV95cUxNUkUwUnRjLThfRHRBQmRhSmhsRk1DNlRsSHhySWxoeEFpc2ZVN1BNLXFCWVRHMXJFVjhwZ1Y0cExsa2xZbzl2NllxNVhnb2xMZXgwVDh3OFVTeC04WnhkNnRRc0ZUaTVEU3pZek9NaXA1bnJoWW1IRHNBYXNRdVBJR1AxMzN5c1VEeU11SHRfWG1mYkxXX1RtNVg3TnBVMklrRXc?oc=5"
    },
    {
      "title": "川口でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPMUY3bVN2a011NTVaTTYyUDV1MnFGNjBsQzBsa2pEeWZfTDdXUDJWZnhwSTl6UEwybHNQQ21WZkszVllOUTFXOUNUM2hNeW1RNEVDemFRek92Y0FaYXZzbkEtR2EyUkZoY3I0ZDA1ejFkRy1YX2ZxNEhIYU56U0RxUDYyOUhHcDlWajlwMXlpNVo4TjhfcWF6REgwVjY2bkJNazh0N2ZKanVrYWN2ZS1qaHBJMDBRUzFYSDZqa29GZ21NeXplQjZ5emFPV3RINXhzdkZtRHBIdUdZV3dIenl6b2hUUUhnbXd0YThZejhtQk1Dd9IBogFBVV95cUxNNWJ4c2x4eWliVmpuWGY1SEluWXltNWdoYlNkdFVMM1NxZzFTV0RuN2xzU3c3SnpBNVR1R0FCU2ZVMXloTE5rc01EOEVlMnJ1RGZiYUFsWEZ1ZmY3N2Z4M29SM0N6bmVYaWVUb3VQTHVDMFpuLVpuYld3V1dnTnhtNWFQN0Fqb09uaVJhbFdkR3V0QlFGa2FObmtvdjZQNVVyNGc?oc=5"
    },
    {
      "title": "新道でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQWm15QjVoeXkwUVpNSGhVeEcxVjYyR0tpRHVKQ0pkbXczN2pCb3VkanAyMXI5Mk1rRmM0UE92WHVHZVBEa0lOTTlnMHZkV0lyWmlhNnoxaEtsbXd0YTR3VlI2cmRldHlVeVo2SFgtNVRiUEV2VjFzQ3ZkWkd2cHhwaXRKQlRrbWRmbmU0RHNJMWZobWFMbXlKQ3k1RlJqYl9GdmZVT3hDMnFYOEhxVGdGTTV5N2pVdm9zVDlJQ2xqY1pSMlV1ZG44RnQxcTBqc3YtemFXM2lxNjRIcjRJbXl6YThJVVJ3LXc5TGFUdGNkd2dNZ9IBogFBVV95cUxQXzFVZzNzRXFodC1ZY1RjcHFIc2E4OUxRQkRQeGwtVUtLSVQ4dG9PUVUtLXVkaktFUVVwWEJjQnBnWm1mcnVwWGJvNi1LZVVsX1dubFJGcEhwTmdzSWlzdFp0SzlVOEQ1a2Z4UkZ3MkdFVUVuZU5YWmJrOG5vdTRaVWdhbkhuWWJaNzRwWDZzZUZMQkppb1ZGUXFLWHRBZWtRanc?oc=5"
    },
    {
      "title": "折茂でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeWtWUXk2NXV0VGdGYjAtOU1JdkRlemt5WXRjUS1EUm9tM3hLbzFfcEU0S3l2SnNlM3dfWHdkVkc0a0ZoZTljMmlwTDQwN0c4bmlCX0JJZnpGb3VXZHVJZ3ZyS3o2OVFuZGFLeXBJOWxHQk9WU3plQTZJbVNrcU9rR3U1N0tIY3Q5OXM5WFVXX3I0bmdHMFVadVNVdmvSAaIBQVVfeXFMTkw0cDcyWUhfUk5XOXdxT0lUR3FzQnE5TS1iVFpMU3dIY0hwTlI1T3RkS1B2ejg1YmFzaWx2R0EyS3FYei1uQzBFN2YyeFY1Yl9OZmRWQzRVbkFTNlhHMDhmUWFxTWJ2NVBCVk8xdW1FZGp1NVlncjg2dlU2bG8tT0pVaUU4U0FxY08tbkFNM2V4UEtEa0t5UkhCUzdkMS1yRDZ3?oc=5"
    },
    {
      "title": "今泉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdV9LRTh6VGVnRHh5cnJWS19iSjJIcTFncjRFTVZhSklSR212M3owbjRCeDE5a1VGeElnd2RWTHk0TTNQeHBlRXhNMkppeDhraTc1YWVGWG1lMURIRTk1WWZOYW1Qd0F0Sk5ubDhNLTItWE5RTkhraVhKOW5oM0FlSkpMWWxrbkoyUnBBVmZQVmJfcnpHWjlBY1JmUWbSAaIBQVVfeXFMUHZMMG04b0VyVWU4UGE3b1RkekdYWVlEdnVFRzBCOHMyY3MyRXktR2RQazZIZDZtNkIxdmhnOHk0S09FbWpsZmt5SEdpZUlHRkdHSFI4RFl1ajBMMVZYeXRhQ2F4VWNBa01Ra0xJamt3aTh5SXMxbXJHbnlHek84dUoyN1RCbDIzdVB6NDJxUG1zSkZ5Rl9sbWFLaGtpelpGM3d3?oc=5"
    },
    {
      "title": "小田野沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOZGdTWGpzSkF1RjdKc0ZIbWVVeHNuUDNtaUtxTnJOcXBuUzlxUUhGcW1weWNzVmtDX2hEcnpNOGFXVGotVTVrVjBmajBndGtRbDgxdW5aWlVHOElHN2xnaURjMGZ1dVZNSWxFYWNmdlFPbjJDTHJBalQ3WFA0LTRLbDB0SWFDa1lGT2NrRmhOVHVCWDhmTm9nSjNKYlZfUzJWY3pXVG5jQlhfRmlVeDFZUUZUanJwaGNXWTI0aWhnNE9jWUR0Q2RzODRtTVVDWV9zd1hzUUE0aUNHNE9ZMUx1c0hQaHI0d0c5b2FZLTluYXRaQdIBogFBVV95cUxPbWNmRF85NE9zZ2pacVhJdjFrMEMzc25hT2p5NHlITW90amh0ME9PcnVfa2RFNXRZUXpqTVAwU0xwNWY3bUhjUHN4NV9fT2xJbjlvUEJJUi16anR5SjhWYVI4SjI5YmUta19RNmRvbDdzTmJPaGxqdTBvT0NmTDZVMy1qX1V3WDdNNW83UzZ4eEljbm92T1N3aWYxUFJqaGdtaGc?oc=5"
    },
    {
      "title": "（青森）むつ市田名部下平でクマ出没 ９月１４日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRUxCd3pmUkJ4YkhSUjZpWU1iOVEwZmx6d3ZuZXpRbFlXdHdRWkdBNzQ3WV9RQ19jWnBNZm4tek5Md3BwWnZOMmNld2FTcGdsLXlHS0RIX0ptbW95LUtrX3BocHE4SzRGYXJIampmczk4bjgwN2tJcWhOSGxHbEpSYUROU3pyeU96Y1dlNGNEOXIwNFJzaGJxRTBpSjPSAaIBQVVfeXFMTWFUOVhsbklTM0RqclNvdHktUFRma1BnWVpyVFlLcUNjMFdEbEZvNFNKV2pKWFlhaGlxeVJGZ1U0aDhfc0dKdDdVWkFQSm5XMVE1ZGhxdXlMdmJuWFR6RUVIMm1FZEN4TVV0eE5kWWFOZmNOVXpTdlppQVh3c1FYYzAwYWVHVDFBUkZJenNFYi1ma2hqWkpQVS1OSWdwc0pxejZn?oc=5"
    },
    {
      "title": "一箕町松長下長原でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMHM3V2JGT09Va01jUWp6NGp5SUcwSXVXR1VieGI2QS1lYXFWWFFhelp0a2ZDS0twQ1QxWThiNG4tb2paY0Q1UFBBS09IZzAxSVhpT19fQ01BdnVpX0FlOU9TYUJmMmk5a0VPMjA5MlFiTVBRekJPLWdoMWQtcUpEZTlzNVh1MGctRHA5d1RkQWtCM2F1TnQ2NFlhQmvSAaIBQVVfeXFMTUMxYXhKSS16SXJzMXFuMXpHZGZsM0ZaSXV2a3dSX2NrOEVRY1FkLWVXUUZpeERBeHROb0MtQUdoVm1nV0I4T3FIWXhkQ0pQWUxYbVNYME5CekdWZWdqejl6Ui1WVW9YaDF5UC04RXlaTHV0R0hhNERiWnZVQ1dIQVpkQWwzV3VKMGRwSGJPYnY3d0JtNGV2MGYwTTEyTENNdElB?oc=5"
    },
    {
      "title": "クマ2頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1RSDJJd2xobXhfS1l6OTUwN0FWdjhadTlmVU1MQllXOGVxZWNGZWhWMDR1RHM2VUc1dldsZ1V2NFdNb2xFUDlhc25CYTlpWThTRTY5dUhtdzhGMzAxOXRGZ2lweUVaMmRlZHZ2ampTS1VtTUF0Rl9sU0djUHZZQ1E?oc=5"
    },
    {
      "title": "いわき市植田町で熊と思われる動物目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE82OG9IOGNmVS1nQTVheUpFQVBMSnV0dHMwVVNoQUxmc2FPWmktYkFTWmtXZEhxM2JpblpFNEZCX2pZdjVZZkhTWFFMUzJabVZWS1plaXBEcEZtR2xIYlZYQjVzTWpqM09Da19KcG12OTV3b3I3Y3lpVV92X0ViWnM?oc=5"
    },
    {
      "title": "植田町本町三丁目でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA5WFJKREhaNDVPclE4SEQybnB5bDhUWGRKVjgwNnd4WFprdXA4RG92VDRRZlRLbDRkMDkyZnVLMkFKR28waXRCQXNKeGNzWG02NHNfdWRySWZNdw?oc=5"
    },
    {
      "title": "石越町東郷加慶でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQYkVocTNRT2NmTWVvRFBZSlN1QUpJekFlRWRnUTNKSEJsWFN2QVhfb1BhRUFTZkJVMXdrN3JBMHBOZ2d4Y1AyelNyM182ZUZzUXJURzRGOTkyOHFRQUktRlFwaHZGMjB6QWRJc1dWRkM0a2lwbTVfMjNOMzBBbm5FdVFKVUJoczMxTmFHRjlWQ295bEtoc1BRbXFwWWg5MUtIVHFJaWg4dGJOdE9uZEJzRUNJTWltNWVjS0phdUkyQWo5dXQ4azd4bnZaVnpBXzU1ckRmSjJLRkp1V3lWd1hzVmR1SUpNdHBqQVZPNGxLWnlqd9IBogFBVV95cUxNMEcxX0IxLVFybDc0eGNnRlBGclZnQW1jbFRqaEZIZy1UMUx0dFpZuN3dOMklXNTRWQ2xFaUt0dGdMZHluSWY2U0FzTGlDV2dQX2VWZXA2aTZwNWlZWjZIUF82QlFKUkpHcnZ0dDJ2cEdSMm9oTGxHNHdsbWxaeXl0emVyeGJ2XzhfdzRMUjhDTl9YTFZFS003N21UOWpEZXNVNkE?oc=5"
    },
    {
      "title": "（宮城）登米市迫町新田新穴山でクマ出没 ９月１４日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcEdIMzJCaml3cEhHZlJET2sxZTlpemtxZmxLXzRvY0lVTlUzMUtiNzhLbllTUHFuU0ZWRFFyeUVrRFJabjFybWZPbkdoN0hvUnhQaXVJSG5yUlZKekNRcVFzWlV4VEpVRlYwNmdqRWc2UTJZWXREYUdrTnlueER5cFpidHVqaEY0cjdvNHJtV0hIVVlBWlgtR0h2QjnSAaIBQVVfeXFMUHUwOTNHaHczaUJoSWRGVUdQc040YkpOdGlMcDRGWWtHTEdKS2tKU0lIcnFoQmpNeTk4OUdUVU1aRTJHRkZFanpXVFZBR2RhZ2M0SWk5ckQ3YU91aUZfa0Z6Q2d1TlJwNENZcHV0UUNQQ0tjeFV0a2dOT2NvazliUVR2clNhSkplLXdfSTQ2dTNKUjJIUmxsRmdrcHQ2cjE4RzJB?oc=5"
    },
    {
      "title": "泉区福岡東泉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbloxN2FlOUstWk5JQldsaHF1M1BTRWtKWE02SGliS3pDamlkazQ0S2pKcGhpQnhTUjQyWGhjZzB0WFNzYW1XSUt3anNOVm5QNUFRZnFuVGhXU19ESlhnNnZWcHcxNk1PWndXVFVWcEVRSHh5bjZvdGVlR2k0ZzYyOENKN1hjZmNORnJaU09kUXlDS2lXVElIZ0I4UGnSAaIBQVVfeXFMT3drMUZCd1RNVUJZTlMxZnk1LU1oNzNqSF9zcXBfVTVWRGQ4T2czQ042a1Ztazc4d0EzRENBOGZJc2hsbTRQUXV6a1UtRndTQ0k4YTBrMlZBWW94WU96R2QwTEZ0Z1R2ZWI1MDBzVkVXTTNHV3NVLTBXbXFJRDVEejBWNGVpRHl0aGoySVBiZlNuZDVGNWVFTnpRX2JSYk5LWDZB?oc=5"
    },
    {
      "title": "宮床松倉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTFZLc09sLUVxTnVXcmRxWVNoN3VIN0JRWTZlcHExU0RfUmVJb2R0OXZUcTZYWXpWQTcyMGdFa2gzdkVXLUNKYkRrUXVqU3d1NkY4N25UU2RJVHFCeUV5R3BVUEJ0VXB3LTFLTFVyOGV2ZWQ3Tk9peTVOMldJbjRJeTVtRzlmaV9DWlpQV2xBTFVldElIZzlIVjhGYnnSAaIBQVVfeXFMTWRzSHhabm5nemd0cVlKbTJCdDlYMXcwNXVCblc3eHd1ZEhJVWc5OTQ1MWZXaWJjWHRwUXp3OWltX0pWYTBjcXFGUVF2bkFjOFVrSHBXWTVfVWdLS1dUd3Q3QmhIbzdYTGpfbnFoeDEzeXNXeGU1THdrVUhwUVNBSUNQaDFlYy1NeHFhcjVLelpqWmVwUVAwWnBlbWJueVdWZzRR?oc=5"
    },
    {
      "title": "花巻市石鳥谷町黒沼第４地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOR01jVV9qejVDckNnd2FXZDhWbDNsdHNyODhMTUxaNWFfakprcWZQc0JCXzhnRHdHMzF4aE81VXQ3OGlKWjZ6RHpyU2Izd0ZTdlJpRm5PaV95U09sd2FSNFdnNTNZd2E1Ujh0SFozdjBvU0RxWXJRa1FtTXByN1JWQ3ZpemZaY3JRdlZrMjNQMGI4OWdJeVJ6bVQ4cXbSAaIBQVVfeXFMT0ZxUnVEajBhb05iVlpsanNHbWFtTnFheDNwNndSdWFHeHpmWk4tLTNhMFZDSEhFcXFIMzZlM0gyMHhvRnZvaDRBMWxNT0ItaGlmVFVuZkY0ZlpvM0x2d3R6Q0pkcnBxODZvMnQ2ZV9pM0psbEd2VTY0OEI0ekt5OGpDanVyektMVXdNanVFUjNNejZWVDFZUnVTUkI3MG1uLXNn?oc=5"
    },
    {
      "title": "石鳥谷町小森林でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQeUlaYkhkckg1eTAzM0FZVlAzXzVkdExOMjlXOHh0RUdlTmpLMXNRa21NMGo0bjNJNXJuVWNjMDRCNnJXS3puMVNpRnlXem5rUkt6NWRxZjRTUEx3RGFONklReGtPZk1KcmxKUnRCTzBtcm5XVDV3Y0NSZmwyanFpUldxTElydEtWbGFnVWc3aFVtckQ2QlBTT3BxbGtEUDZ2SENVYS00QWpHemJwbnNz0gGiAUFVX3lxTE5ISC1ianZkVDBVR2ZXcDVTVWlCMlVGdXVfRDVDYi1IdmhpNVNuZHhOWDFxeFhScFdhVlBudzNhSW52b1N1NjFlNXdaQVIzSlZsd2hmYnpSUTZRQURCTXJFMEx5SW5ZZDdiSExHaGI4VG1ESVB1akJ4Yk1kZmFlaUVQT3NHU1Zqck1DNUp1WW5idUV2dTRIZzZSZ3hweVlUYjJnUQ?oc=5"
    },
    {
      "title": "石鳥谷町南寺林でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVExqb2NWRDZmSUFjRlgtQXEya2pVRVpMLXFXdzQtWVAwVVhaUlQ2ellQQWlDSWtOZ3p1N3JhMkJ2TjlzYllXYmlpUTdFcGVnN04tb0Rta29qRnB2aEY5WjhrTmxyNzN5NE1oejJhSUVQSnVjcDI0c0lqa0JCTEE0bmRHQURaNVlRenhtRmMtVDhSRWFJanRvSW5ITDTSAaIBQVVfeXFMUHB1VzY2Nkh5ZG1FQTgxb00xM09McmF3RkZFQ0sxWVI3cE9pUno0OGNQQ3dpSTJxM3I5ekpNTTJORFVrQ05mWHJXVkJSTzBtUG5maWsyakpyM0kwQV9jbUR3cUpfanN6NWE5Wlk3cTFoemlwRDFXOEIxNUtYWElUNkI0dEFVaUZzOFlLQnBKZXdoZzVqcWtLck96OTV6a25wV193?oc=5"
    },
    {
      "title": "湯野浜の住宅敷地内でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNMU1TUDVCcHJLeS1jdWJ5eTk2aVFsYW9nb1dUN1VPYUNxYjZ6YU9NOUJ3S0tSUFMxLVlqdlNkMWg3dmxIZmR5cHlCNjBXVzZibHZ0aWlqdEFEVDlyZzVTcHN4MEhsd0puUlpyMmRSTnZpeDVUNXctV2I2YlIwXzBYNFI2MmhiUk0?oc=5"
    },
    {
      "title": "住宅近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNMU1TUDVCcHJLeS1jdWJ5eTk2aVFsYW9nb1dUN1VPYUNxYjZ6YU9NOUJ3S0tSUFMxLVlqdlNkMWg3dmxIZmR5cHlCNjBXVzZibHZ0aWlqdEFEVDlyZzVTcHN4MEhsd0puUlpyMmRSTnZpeDVUNXctV2I2YlIwXzBYNFI2MmhiUk0?oc=5"
    },
    {
      "title": "足尾町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOSVkzUHYxNndma1BKMEhuVFlqWnpKLTBnOGtMTXA1OFlxbmxRRV9yNVJoUE9PcHpYN01ibllCQUlFbmg2UzNpZnVSVmdmM1NIeTN3aXV5eWlZdWp2SmtCTTdqMjI2U21tZ3ZraGEtQjhqVHhMZklXTHBRdVpIU1MxX2J1S3o5ZjZQS0VjR2E1SWxTRlNIVGN0OWZkU184RFNwcTRoTE1wa3NiemZaeFZOVE4yTXF3TGctR01LeF9JTzhjTnpVWjc2ODAwU0RsR2JmblR1Wl9UTENMQzl6d0FyVXJSWUdoMnJHSnFmc3BORTBwQdIBogFBVV95cUxNSHlRY1RDY2F6Tm1nN21Oa0ZWUS0tenBKTWFSSEhXMXVSOEhvcndTWWtMaGs1T01qNmI4dUJzeHBJdHdZNFpnQW9uSGd0SjBTQ3pKdFZFeG1YX3hYWVQ1cGRMbXVpaF9RbDNBSFcteWhBX2NXWmpta3NBQ3VGTWx2cU5ZZ3l3R3hmVXdtMTlzSHlhcEJJU3UxLVBmckwtby1yVkE?oc=5"
    },
    {
      "title": "木和田島でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbmF6SzV5YzNRLW5tZW1UaVE3b0k1Uktyc2hvYWd4SXV0NlFTSGxsaUJkVVRUcDRBem1UUFJKV0RqN3lEZG1UZFUwWnBMX09obG9Sc2dFRU9yZ3RWcUx3TmNxNWxwOWV5ZEhlc3J1MmFoZmtJNzBGaW1hUDhEWHBRXzhtQnZ4TWMyTW5WT0RONnBZRndPQm9NSFV0cXDSAaIBQVVfeXFMTXVQVzVndlhDVXRpbW1sMHpfeHkzUy1tU0poVkVOQmRKVzE3WHRnVDlKeHVsdlNrZnJQbllPRjhYZ2NrQllVR1ZteEt3bHF6Umk4dUNuTXpJUnFjeGhsYmpKa2hoOURmcWpCeWpXazAwUW5FQ0l6TlUxSFVlU3R1QUZGV3Zva3IwX1RnS3l4bUE4SHN5OXk0bTZkS2l3ck1vZzNB?oc=5"
    },
    {
      "title": "久野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNLXpVX3dFLTZIcGFILXdsczVnRnRRNXAyd1FGNzVuM0ZOWkxyRXZXN0g4LWYzVU9TT3g0OGJPOTZLeXQ0ZjF2azdFaHRQQWJ3VEFpX1lkdXJrLUhyUUlzMW5MaW5RSS1iM1pnXy1WUHRmQ2J6NlIxWkJvdmhsUXBmZnJPYXZEdzlra3JvdFVhdnZhR0hKSktDZENfZHfSAaIBQVVfeXFMTkRfTmxIeC1wcWIyT0VhNS1JZGlvd2czSldUTXBLMXB2R05xZHg1TGNzTXQzS2hOT3h0TE1TREpWNjRfOWhsVkpTbm9xUUo5eTBIWkNXaWZxczloRTV1ekJyNVJuOGdBcW5ZbXEzb2laRS1wSWozdXVycGtNYTh3WVAtdGlzOTNNbWR5dG5wRjdyYTRVSnBuc3NBV1dKNDVabEtn?oc=5"
    },
    {
      "title": "（群馬）安中市松井田町松井田でクマ出没 ９月１４日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOYzdobnNtUU9BTFFvOGxDYnJldGZyMW9CTl9SRmlqRzhnbWRsSjhva2pCelZIQjhSOFdmMlNrbFVqLXBIM0t6d1lfYTFEelZfenFkN3FuZVp3U0trQkgtTXhqMUNtaU1HY3dMMjk3My1pRHRCc3NsSnV2SW9sTF9vRU9VYmZTUF9kNEE3STNJaW5CNFVLLVBUY0tmQUjSAaIBQVVfeXFMTzRZNDBFd2xITUtFcGVzWW5WUFhpSzBjeUJkQjYwUkthY0pmVHdkYXZ1a2FnVGs1UmhwQVlSSFhtMHI2Rk5TcHV3ZF8wNU5yY21FQTVRV0xHQ2E3UUNyTjVYUjdHUHBUTmZld1drTy1pWjlEZWd0d0J2bGlMbC1Cc2ZJczk5cWhGdGRVb0JUVFRHc1VCc0xFaVo0QktOZ3hYSzNR?oc=5"
    },
    {
      "title": "「クマ2頭を見た」信濃町IC付近で住民が目撃 親子か 発見に至らず 警察が注意呼びかけ 長野・信濃町",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5OczFaTmZiVF94M3dweXo0UThrVzFlOExTbGQzX3N5ejRVUW9YN2w5QnBKdG9GXzR4RjlUcU9LeThCa01ldE5vU2JYNVRlaDJXYnRqLUR4Nk5RTjloV3lqVTgzWGlRY1l2cUJreTZzX3kwdVBISWJDRHVVX0FXWEE?oc=5"
    },
    {
      "title": "片桐でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQLWxmcFFiN01hbndZcjN0QlU5VXk2VXpMM216VjV0dnJ0QnZURDRZaDk4LUk1Umc5aXRsOVViMXlDUlVwRTd0YkYycmt4M1pEcWpPcmczOVJkNWt4TzRqSFNubDg1ZUV4Y2hQQWd5UkVKNmF4ZTlUY1UxdERHQVZ6czhuaXlzR0dVUXZQaW1HazhTTEcxUWR4SWNWekXSAaIBQVVfeXFMTXNRT0t0NnRhRFhfdUhwSm95VnFhWmx3QzNucTRFUzNSXzhONWpRUmxrSHpLV2RvNTBXdl9tV1k4M0hsdlo1ek13OHhjRnNGNTJpSkdLbEgzcWh5NmU2c3lQZUREdGpJN1JHYTFHQTlKRUhyTmUyeHBJTThSUG9ubm5ZOER2TzJiU2JIVEYwSHQ4MklJSkJoY2NZTHdDaTNQX2x3?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"青森県","count":12},{"pref":"福島県","count":8},{"pref":"長野県","count":8},{"pref":"北海道","count":7},{"pref":"新潟県","count":4},{"pref":"栃木県","count":4},{"pref":"島根県","count":4},{"pref":"宮城県","count":4},{"pref":"京都府","count":4},{"pref":"岩手県","count":3},{"pref":"山口県","count":2},{"pref":"兵庫県","count":2},{"pref":"山形県","count":2},{"pref":"三重県","count":1},{"pref":"鳥取県","count":1},{"pref":"神奈川県","count":1},{"pref":"和歌山県","count":1},{"pref":"岐阜県","count":1},{"pref":"群馬県","count":1},{"pref":"広島県","count":1}];

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
        <span>対象期間: 2026年9月14日</span>
        <span>·</span>
        <span>公開: 2026-09-15</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={71}
        periodLabel={"2026年9月14日"}
      />

      <p>2026年9月14日の集計によると、全国で確認されたクマ関連事案は計71件であった。人身被害キーワードに合致する事案や緊急銃猟・捕獲の報告は0件であったが、都市部キーワード一致が5件確認されている。また、走行中の乗用車に対する衝突事案や、果樹園における深刻な食害被害など、住民生活および産業活動に直接的な影響を及ぼす事例が散見された。</p>
      <h2>当日の主要インシデント分析</h2>
      <p>当日特筆すべき事案として、長野県松本市における車両への衝突事故が挙げられる。松本市の県道において、体長約1.5メートルのクマが走行中の乗用車のボンネットに覆いかぶさるように体当たりし、車両の一部が損壊した（※1）。人身被害には至らなかったものの、道路交通上の重大な脅威が顕在化した事例である。</p>
      <p>また、広島県三次市では、クマの連日出没によって1軒の果樹農園だけでナシ5,000個以上が食害に遭うという深刻な農業被害が報告された。これを受けて市議会が対策強化を求める緊急決議を行うなど、地域社会および経済活動に対する強い負荷が確認されている（※2）。</p>
      <h2>地域別出没動向</h2>
      <h3>北海道</h3>
      <p>北海道内では計7件の出没情報が記録された。弟子屈町弟子屈原野32線東（※3）や屈斜路（※4）、幕別町忠類公親（※5）、根室市川口（※6）での目撃のほか、木古内町新道では足跡などの出没痕跡が確認されている（※7）。道東から道南にかけて広範囲で生息域周辺および農地近傍での行動が確認された。</p>
      <h3>東北地方</h3>
      <p>東北地方は当日の総件数において最大の集中を見せており、青森県（12件）、福島県（8件）、宮城県（4件）、岩手県（3件）、山形県などで多数の事案が計上された。</p>
      <ul>
        <li>青森県: 六戸町折茂（※8）、中泊町今泉（※9）、東通村小田野沢（※10）、むつ市田名部下平（※11）など下北・津軽地方の平地および沿岸部周辺で出没が多発した。</li>
        <li>福島県: 会津若松市一箕町松長下長原（※12）での出没や複数頭目撃（※13）、いわき市植田町（※14）・植田町本町三丁目（※15）といった市街化区域近傍での目撃が相次いだ。</li>
        <li>宮城県: 登米市石越町東郷加慶（※16）および迫町新田新穴山（※17）、仙台市泉区福岡東泉（※18）、大和町宮床松倉（※19）で出没が報告された。</li>
        <li>岩手県: 花巻市石鳥谷町の黒沼第４地割（※20）、小森林（※21）、南寺林（※22）において集中的に出没が確認された。</li>
        <li>山形県: 鶴岡市湯野浜の住宅敷地内（※23）や庄内町（※24）で住宅至近距離での目撃が報告された。</li>
      </ul>
      <h3>関東地方</h3>
      <p>関東地方では栃木県で4件、群馬県や神奈川県でも報告があった。栃木県内では日光市足尾町（※25）や木和田島（※26）、鹿沼市久野（※27）での目撃があったほか、群馬県安中市松井田町松井田（※28）、神奈川県清川村宮ヶ瀬霊園における足跡確認事案などが記録されている。</p>
      <h3>中部地方</h3>
      <p>中部地方では長野県（8件）、新潟県（4件）、岐阜県（1件）、三重県（1件）が記録された。</p>
      <ul>
        <li>長野県: 松本市での車両衝突事故（※1）に加え、信濃町IC付近での親子連れとみられる2頭の目撃（※29）、中川村片桐（※30）や小学校近傍における親子グマ目撃（※31）が確認された。</li>
        <li>新潟県: 長岡市松尾地内の民家近く（※32）、小千谷市（※33）、糸魚川市柵口の県道（※34）などで出没が確認された。</li>
        <li>岐阜県・三重県: 岐阜県東白川村越原大明神（※35）、三重県大紀町大内山の集落際で情報が収集された。</li>
      </ul>
      <h3>近畿地方</h3>
      <p>京都府で4件、兵庫県で2件、和歌山県で1件が報告された。京都府では南丹市美山町北（※36）、綾部市下原町大平（※37）、亀岡市篠町王子田ノ尻（※38）、京丹後市久美浜町谷（※39）で確認された。兵庫県では上郡町梨ケ原に加え、神戸市西区伊川谷町前開という市街化が進んだエリアでの出没可能性が報じられた。和歌山県すさみ町和深川でも道路横断が目撃されている。</p>
      <h3>中国地方</h3>
      <p>中国地方では島根県（4件）、山口県、広島県、鳥取県で情報が寄せられた。島根県浜田市では市道安城杵束線を横断する体長約1メートルの個体（※40）や弥栄町稲代（※41）、益田市左ケ山町（※42）で記録された。山口県周南市大字長穂（※43）や鳥取県智頭町大内での目撃のほか、前述の広島県三次市におけるナシ食害（※2）が特筆される。</p>
      <h2>主要な出没および被害事例一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市区町村</th>
              <th className="px-3 py-2">場所・環境</th>
              <th className="px-3 py-2">事案内容・特徴</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">松本市</td><td className="px-3 py-2 text-xs">県道</td><td className="px-3 py-2 text-xs">体長約1.5mのクマが走行中乗用車のボンネットに体当たりし車両損壊（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">広島県</td><td className="px-3 py-2 text-xs">三次市</td><td className="px-3 py-2 text-xs">果樹農園</td><td className="px-3 py-2 text-xs">連日出没によりナシ5,000個以上の深刻な食害被害、市議会が緊急決議（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">いわき市</td><td className="px-3 py-2 text-xs">植田町本町三丁目</td><td className="px-3 py-2 text-xs">市街地近傍における個体目撃（※15）</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">中川村</td><td className="px-3 py-2 text-xs">小学校近傍</td><td className="px-3 py-2 text-xs">親子とみられるクマの目撃情報（※31）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">鶴岡市</td><td className="px-3 py-2 text-xs">湯野浜（住宅敷地）</td><td className="px-3 py-2 text-xs">民家敷地内への直接的侵入事案（※23）</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">浜田市</td><td className="px-3 py-2 text-xs">弥栄町（市道）</td><td className="px-3 py-2 text-xs">体長1mの個体が道路を横断（※40）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>9月中旬という季節要因を考慮すると、初秋期に入り冬眠に向けた採食圧が高まり始める時期にあたる。三次市で確認された大量の果樹食害は、結実期を迎えた農作物が強い誘因物として機能している典型例といえる。また、鶴岡市湯野浜の民家敷地内、長岡市松尾地内の民家至近、いわき市植田町や中川村の小学校周辺など、人間活動圏および生活インフラへの接近傾向が顕著である。</p>
      <p>さらに、松本市での車両衝突事故や各地の幹線道路横断目撃が示すように、交通網と動物の移動経路の交差リスクが高まっている。人身被害こそ発生していないものの、住宅地・通学路周辺および道路通行時の不意の遭遇事故に対する警戒体制を継続する必要がある。</p>

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
          <dd>2026年9月14日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-15</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-15</dd>
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
