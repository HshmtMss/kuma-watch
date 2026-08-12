// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月11日 / mode: daily-report / 生成日: 2026-08-12
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-11-daily-report";
const TITLE = "2026年8月11日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月11日、国内で報告されたクマの出没事案は62件に達した。特に北海道、島根県、長野県で多発し、市街地付近での目撃や農作物への被害が各地で確認された。人とクマの生活圏の重複が深刻化しており、厳重な警戒が求められる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-12",
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
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
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
      "title": "北海道八雲町でペットのヤギが襲われる被害",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1xT3paOGxqTm5JcGRyTi0zcDRoVnFpek9mVFJOeGxfaGhmb2dFNHFWSG84andzWVNGM3lRWUtpMTdpN0VmeXJiWVVTRGpQQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "北海道北見市の市街地付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE9ITlVUZHFOWnlWc05LY2tkc0RhTDBKMXRBLU4xTVpaZDJLWUJDR0ticnEwNm93a3pPeGxzUmVrMEY0dU9QSXdfRTZfTXMwOVpqcV9wdnpET3RTYmlYV3ZON2trMm5namx3SjZCRElpRmNaTlRRUE9OaXVNN1TSAYIBQVVfeXFMUEoxaTB1ODR5N0hzeVVCTWJKOExTclhjS2hnS0NPR204aVltTHdHMGs4T0V4MnRZbnRBLS10MFdhWFZ3dXlKYU5Rbmw2MzdwenNqLXZPdEVzUE05bmRKQ1Z4eFBKclhoTE1VMkowWjJQY3NjNmFMV0JQQUFfejBFZS1xQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "群馬県中之条町上沢渡久森でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdGc2US1UeWI0eUMxNlN3dUJmNDQ4RU9sbnRYR0JReGNvNkJQTEE5YXRUMDg1Vy04b0VKaDBWODR3eDRIUXBkV3ZDQTJNeThCSGFERUNqT25CTmFMMEJhYnJuLVdSSWNZNF8yYWVpNmlqWnYwaklvRjFzZUt4ODJZdGlxUlJQdzltTUVTbUtTaFhjZWxPWW1zZnZaN0jSAaIBQVVfeXFMTl9vcDFJT0l1WDVYWm1QdE45cmgyckJPODRxWWo5Qk1FR1p2dnpRU1hWcmRhVUJSZjdvNU8xQWRSNm56ellwNzk3VDk5RDIzQ09xS0xWX2llckNSNV9VLWY2Qm1IdnVHcmVKNEdVbXZfQi1iOTRmVS1ZWjhPV3o1T2YzVENkMXhZdFFNNExVQkRnZWRnRjNwTEk1YTZObFVsS3Rn?oc=5",
      "site": "報道"
    },
    {
      "title": "富山県黒部市宇奈月町内山で痕跡発見",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPNWJWdV9wZGkxSG9qZUFlcFFEemhSVXZoUjdNYjM2MENXZ01PWVFHclFseEZhNzR3S0VPcjdUQTFLTGp5cHJyMkxYemVTRDFvaG9Rd2lQckhLQS11bFNxUmdTMGh3LXRCV0V5UTZEenBidmQyR0Mxb2Y0YlhSTHh0aVRCVlJ0QnY4T0t4VGVIQUE5ZC16ZTl5TkRDT28wbHJoZTgyRGI0cjkyR012ZXNsTVRkNVFzLURrOWhmbkNqQm91Wm5URVpyTWpPSzZ2SDVaS3R4X09IRzR2dmNsT0c5TFc5Zlkyc1dwNzdUMWxPUUM2Z9IBogFBVV95cUxQYnhQQng2SUpLaGNkSDI2NHdPSDJaRnpkemFUcHlsX3pNTXhfZEVubkphMjhMVUI0T1h2LXZjemNoSTg0Q0MtbjNCRTNyMGFZT0hmSzNtS0VGdTVQeG9QY3FjY3ZkRFBqRklEMzRCUkoyeU1SOXJ1WS1RQ1FRNjBoaUFiWmJwYlhmUWxpU0ZEVXpHUVp5S1RGa2ZVcllocGhKa3c?oc=5",
      "site": "報道"
    },
    {
      "title": "富山県黒部市宇奈月町下立で出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNZXZvUVBXUXZ2eHdOX3FyaENKM3l6SDNoc051RTdqclZCT3NnYlh6ZlBLYnlkeU5JZnZjY1dRNEcteTIyak9MRXBraTdQQ250MEw4TmFVYmhZMVliTHVxbVpNUDlvcG5XNDVvRHhmUUVwaFZMVW1lVGV3ZUNHZHNuOTRfQlJvRFZSN2tQLVFZdTRGTndvZ1Ezek1KQjljVmVQYS1fRUtsTGVsSlFLUnJqR3E4S2JvSGNBaDNvTy16N0IxRHZ1Tk5raFlxT042Q080RTlsM3NjajUzSy1vNkNxS1VDb19FZGdFTzE4RWJOR2NYZ9IBogFBVV95cUxQUzZhQVpVejBtREFreTdVd1FoSEJpVExQdDJyZVpMWlFyTTg5R1J3SU1Zbm9zYVZ0U3RPdnhlUHdPSHB4dWtOcHdodmJqWFB4TDA5Vlducng0MjRRc2ZXWUR6cDJzMjhkZzlpRzF5emJleC01RG8wZjRJVkdxeDdDbFdueGxFaWY1UFc1azhFeFRSdHZPVF9ZNUkxYlhsX2VlMkE?oc=5",
      "site": "報道"
    },
    {
      "title": "栃木県那須町高久乙でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeG4ydnVCVWRQak03aUtuY3JTYW1wNmtUdTdWRkxYc1psMWxoVzBNbElOTmVmMFpDOWxqR00tbWRKTTRkYmp1ZVZ3Z3VoaDl0U2ZWcy1VcWV4UTVkTlV6TjdZUDBPcmNnTVFReXlEUU9meG12dXExdHlibnVtUGRleVA5RkpLVlV5WVdoWHlRTTJIMkdxaVcxYnd2ZlnSAaIBQVVfeXFMT1VGV0NMaFU3dUZRb1huU3JTeUwzUWtrSy0xLXlNSFdwRThpOXIwdExTTGlmLWRKQnotSnNBNDB2U3pZZjVRY0dpcUVPNzRVZWo2VlFhOGt0czVjc1ViTDkzQ1JhSGstdFh4Njh3aDhNbzlfY3NPbkFKd2drWHpJbHE0ekVZZnBvc0FCZklSN1NSWXhPLXA2M1BLdlozajh5VmtB?oc=5",
      "site": "報道"
    },
    {
      "title": "栃木県鹿沼市口粟野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNV28yZTBPcXIzc2cyZEJYbGdZM0NkRHV2YlRIMS00TFJmU2dfQW9OQXVxRWN5OWkyelBwNmdUZzdiZHlhby1BRzlxYnFqeGtxdTgxOTNkR0k1d1BMSTVmMENyMWViY2FTc1FDc3V3bGpDdk1vRGFhaF9OZWxBa3JDYlpwXzhtX2JESTk5Z1hUY1k4RVpJS1NiVHVvTmHSAaIBQVVfeXFMTU1yUjdSUFJ4eXpLdVZjaDNvYTVmcGtDY3RraE9QTGlVVEV5eHBXblFqdUZsdVZEVWw2X0tld01MUHBlcXhYdldZb3N1b3RiV1c4Z3g3WHBwdDFVWFRaZjZJOXFGWnZBX2g3QVRvM21WeFZTY1FqN2x1YXdDencxUzJtRDNrWTlCNjdWQmFVN3FQQVVuWm5RNm1QNFdBcU55NElB?oc=5",
      "site": "報道"
    },
    {
      "title": "栃木県那須塩原市中塩原でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOY3l2US1iVzlGUGppYzVaVFN4aGtTTzhCYkYxZE9uRkdnZFpfTzRZZmJFTnpYYzRHNW9Mb2FVWUE2Wl9JUTNXVDh4UlNTMjBBYzk0TTlEQTEtSGJldzdMN25pWnhJQzZ1SFkwYjFxVlpEaWZmM2s1MzRxYzlEb0RlbHo5Zmp6cnQ1em1LV1VsdTlLS1c0LXR5YW41Z1A0QmlLSFBRZ25FY01veHA3cE44Z2dCWkFNaDlLRjE0VWt4bjVFVTIxTW01NGJwVmRXemRzN19xRl9Mb25qM25YdkdiU3NnZy0tdUdZTkVJcHVhSWFRQdIBogFBVV95cUxOUTU4aG9Ca0ZTNy00RDU4TlIwZm5qTG80OWdPSk0yaDVRSGpaWlhkNlB4eTlOVVpUU1dGWXUwNkFoZ0FPb0pINnhCaEFaa0JXemJwcld6Y1BqS3pxdHM3SXRrY2VHTkcwREd2dlcxQ1ZPYXVXRktfcU1ramxsRVVDZzNzekNZT1JNeWRyWTVGcFE0d2JxZ29CNE9iMWlIMl8wSWc?oc=5",
      "site": "報道"
    },
    {
      "title": "島根県浜田市三隅町河内でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQUxnaHZQSXBmclNIYllEUnhnUTFuM2wwM0R4RUtrWnBCaW82MnFWaEhMbnFRdnlwXzZTRi1JOUtWS1hxbE5iaEFOd2RINjhqV1hiTVJMMmw1N1BqYkF0SUt5eHpTT0J6VmJLSUV1aVpSTkFUVGIxY19rZ0hadTdIRURVOUtodVZIMUFQSXZKcGlmd090bFZJdXo5aVrSAaIBQVVfeXFMTV8xMktEOFZtN0N0NnBtQnRpYWtVTS1KNFhRZWtBelBOQllMMFZ0MEJqS2FIS0RQMDVnT01BTnNNTG8xOXhibEt5VHlkUUdwS2o3eVEwd05zX3hJOHMzSHJrWGJQck9ja19TM1VGSWUyT2pSVjhhYkFvcFAwQlFhbGdwT2ktX2l2SGFfZGV6bXc3QWFBMFVHLU5Bd1M4TVd4cU1B?oc=5",
      "site": "報道"
    },
    {
      "title": "島根県浜田市でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOSU90M2x5VVAtVzRMNDQyOVZ3clUxVkRUQXNkWTRJWVpmQVJGcDN5WFZJdUVIdHZVX0wzOEhTb2VnMVV0UnlXQWRlNXgwNVNQUVJnazU2dS1pZXRMZzlpVDVxTHZCaUM5T0tKQmpzRXJyRW9aZUNHajJpY1NOTmFpM3pkai1lMHFBWWpPdzEyaUdLZmVIRk1Ya2dBZ1ViLUJqRF9EUW93dTZYWDZnYy05cGlGaHltaEQ4MmdONXNMWU1FWEVNSGdEdDR2ajBRUG1GdXAtbVhfZS1EczV3WEHSAY4BQVVfeXFMUHd2UzAtcFVrR2lsUU9DNXlNZmJBRnpnRmx4VUU4aXFYYXpTTGpKSVFYcTkxVTBVTUQzbVZ3NGVRbFdzXzFwVDlGOEdZcnZsMWliR1d2b1pZVm0xU2dSVXNJaVZsUkhua1ZsZzhQV3pKUzA3Ul9iUEtBZ3YxUlptOGNxOVQyTWxmV1FqWUQtZw?oc=5",
      "site": "報道"
    },
    {
      "title": "島根県益田市でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOSU90M2x5VVAtVzRMNDQyOVZ3clUxVkRUQXNkWTRJWVpmQVJGcDN5WFZJdUVIdHZVX0wzOEhTb2VnMVV0UnlXQWRlNXgwNVNQUVJnazU2dS1pZXRMZzlpVDVxTHZCaUM5T0tKQmpzRXJyRW9aZUNHajJpY1NOTmFpM3pkai1lMHFBWWpPdzEyaUdLZmVIRk1Ya2dBZ1ViLUJqRF9EUW93dTZYWDZnYy05cGlGaHltaEQ4MmdONXNMWU1FWEVNSGdEdDR2ajBRUG1GdXAtbVhfZS1EczV3WEHSAY4BQVVfeXFMUHd2UzAtcFVrR2lsUU9DNXlNZmJBRnpnRmx4VUU4aXFYYXpTTGpKSVFYcTkxVTBVTUQzbVZ3NGVRbFdzXzFwVDlGOEdZcnZsMWliR1d2b1pZVm0xU2dSVXNJaVZsUkhua1ZsZzhQV3pKUzA3Ul9iUEtBZ3YxUlptOGNxOVQyTWxmV1FqWUQtZw?oc=5",
      "site": "報道"
    },
    {
      "title": "島根県益田市大谷町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOX3d0VVY2OHEyLV84TVJVMGtWa2JJMjZDVFctVURoUngxZE0xTmRVeXRHOVZFNXhoRFRCNkx0ZXlXRGJ3R3BzRmxrZk5BdFVoQjczWTV3WFNTNFdtZ0J2NzBrVEZxdWNWRWZyeVdKVjhyYnpydHEzQ2E1eDVMUWtsQ25GcmdoOUpkZzN1aFdiMjQwdXNjTW4yeDdvRjTSAaIBQVVfeXFMUG9FWEdMV1ZEbzlIWWVvU0xSQmRfRmRZcVotZEowZ1dSQjdNQVVGeEdGbWFsSmxlTU05MEszejJabWJDbjQyWGpGSlYwRUJTMTByNzFRZ3dCeVRYcUFuUTczUDZuNjNVUjFQV0NsVGZXRWFTcWlIRTlGUjktRHJRNTRsSFJWYVZ1ZEM5d2RvZGZYeFMxSFQ3MDFwaHl2UXdzX2Jn?oc=5",
      "site": "報道"
    },
    {
      "title": "島根県浜田市旭町丸原岩地谷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWjNrSmg0bE9mVG1Yb3JzRWh5aVBmMmtGbm1HX3dCM3pLaVVkdHAzRGtjUWR5dGVzWXVra1h3ZUVKMnZwcFFtZXZpMTFob0dLZjlsN25qckpCY3oyMlRMQmNUbDBrblBMVzFzZWlheDhIN3dDVnBoaDRMNXRaUDlST1JQOFFheWhvbHRIUy13R0NabHcxRm9jOUN2MXTSAaIBQVVfeXFMUE9zNnZ3Wmc1MGYzcHJyamRVekhtejBVUDlpYXFGZlBMYUYtNlBTT2puQ1RJS0Q1aGNwcGh0Nkd6RWVjVmhLa1lTOW0wTXJ3SXVVUnY0d2p4a1hqZHpVSkhxMzI2Tk90Q0t0VzN3eUR2dFRPZTgxMVU4X0J1MjFDNHJRT29UQV9tYVpDRVEtNTU3bm9EdHBacGVFbzBBSENwZEdR?oc=5",
      "site": "報道"
    },
    {
      "title": "北海道上川町東町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQWjJZSVZHWGVxUk9TWHU2WFNKbnVjeVNJN1YxaG1zS3dYWEZqU0VPbEJKak1WUkhTYjRKUVhVcUt0R0ZkWmVfdUxNQjRCVTFiNmVaeU5IZmkzWXZjcVlwYW1YUWJWN0FEc0RTemx3MGFYY0x5anlleDhodGhMczdMQjVESFFEcWNmNXhCZnI3azlxU0Rrcm9Qa01TYXpJWU0tTVlrdmtiTXMzdjdDQ2R1eHRWYkIxSEh2M0dmekdmczFjYWxwbHJHcFRuQ2VxYmJONUxtd093czBoUWg0Ym82YThyVVJmdEFjdF9FaUxWWG8zUdIBogFBVV95cUxOZWRSbUF3VkYtdmpJM0ZnQkw0dV9Rd05PdjFISF9Sa2JlWkJ2dWR0UlBYdUNqcXA5dXpSaXp2dTdqUkdaM25LOFZuRzJORUlYTEhkUnVlWjlzcFdiLXllT0doNVh2TTl4ZWF3Q1Btbk5QS2YwNDkyVDVDRy1fbW1iNHc4cTBsc2lMaUE2c3owNk5XdUprTi1yQm1UaWp3WTYtUEE?oc=5",
      "site": "報道"
    },
    {
      "title": "北海道浜頓別町北３条６丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQakdSOGZXR2RMakVZcFg5c1RZTUlCR3BxejdPTW5wYnNuQUVzOWF4S1JQanBlbFRVTjZ3Y1piQ1JienZHbTlXVnBwbDc1V1A5MWVpQlFMUl85MGRISlVEVnNGb2Q5WDVySm9sa1RYMEJoN2I5QklIODZaVWZHRVdPbG1GWHdnTExoM3ZvRGtxV0VTak5ha29HR1VmVXHSAaIBQVVfeXFMUHN2cjZhMGFCSW0tZ0NYSGVwSXozNkd6dHVmOEFoSm1lVll4Q0JncnJoRjJDUDdnM2lfN0VRZW5JcDYwNDNiNjJwWnhHMjVKejRGY0cyYkxQMkY2UTVMVmlSbnREZ0ZrbHZkRlpRdldWc1NLT2ROLVJfVUZUdGU3TFEwOTI1aE4tbGJUV0JPTDdZcS1aTHo3VS1BeEptb3A0TDN3?oc=5",
      "site": "報道"
    },
    {
      "title": "長野県辰野町小野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOTzN5a1kxNjVpaEtLNjZDUU95MlRUTVEzdFBsRVhzNzFpZnBlNGktZVJiTWhGQ3M3RGtJOFFndkUzWlEtRE1XbEhGQWhUT0lKRF9FRENoSjRIamc3U3B2c1RTcHVyQlpwTkZnQmNaOVNWOEFTeHItcVpWSmRWQXRXNkphT18tV05MTTdNb2QzZ0I3aU1iVVN5SmhQVDVkR2Z1d3RDVzRsTVBQNzJjQ0JvVkVrb3M4bWlVdnZtcDNndnNpbksxNW5JZXY0dmVmVlozc1ZvQ193WmNMckJpVnNncXRNU2Z2MEt3SlBLSFpmRFFwQdIBogFBVV95cUxOYVdnRFVKbGtUS0ZBREo1RTBHWTRlRHZVeTd6Um5nc0tyUk13OXEzMWR5V043dmJIb2hrU2VXd0M4M1hkUk14Sy1MMXNyakY3TmFvbEFhWnkyUUh4RDFoU3VZYWNfbnIwLXB4R1hzYWkxTVg1cjkwd1M5ay1aWUpqS25qdnhxWGdVUFBJUDZiektHeGxDYm9heTBzaGhOVk5aYkE?oc=5",
      "site": "報道"
    },
    {
      "title": "長野県軽井沢町長倉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQMlF4YWpCY0RYOTlIYUJsWU5QVHl2Q0p4a2RTd09ucFNwMDBQd2V4Zjl4MC1aOW1vcVF5NlJsdlZ2SUlUcHl1bmQwLW5nemVmUDRRUHF1VktldmZwTmtmUFZRblVhTnVpU013dzJheEZKaWpXWEY1WWIwTTF3TWgwNmtqQlg3dUQwY1dRNG5jUllrV3BLMV9OVmRwcTU2ZkdrdVV5TFJzZXFETWdsT2s2aEtPLWFMaHVhY21abVpmN091dnpUMjYxRE0xYzJSQTZWdFUxM01qSmJSV1M5TE5hS21SYm1QbXJmdWhVc0Z5Z1RzQdIBogFBVV95cUxNUWdZazNRc0x5aDlUS2czWlc4TTdySUl1eEh1VWxKVE5JQnZtbENBVTFPRFZrd0JKOERqQlFtUTBMdl85enFGZTFQaGZUXzV2dTQ1MjJZVGZtV2lJZ0JGQkRnUTB3cnkwaVV1eEhiakx2WGdkbmd1RnFtM0xvX2x1SWI4UU9MQVNLNmh2czROeUlRdHdjeEV1dWdWRjdOTEpDOUE?oc=5",
      "site": "報道"
    },
    {
      "title": "長野県大町市大町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOYUtwd0szeXJMTjRpMEV5SjhjOEFXdmExUmlfVE5jUUI0bjE2S0phTjZDc2VFNE9ESzNidFlWSjBSTFpZQkxTVzNlcndvQ3Z1dVJtNlpyZ2E2ZnBvSDJMaWoxNFBFNS1Md05tN29DanZnR1p6WUZ1Zm90emtiR2NrUkdodFF0c2hKc0JmVjBhRnllZV8xSUl2LTBvdGw0dVNyekM0UWI4QW9lV1M0UmlKWl9UMlhTRUJrX2FOVWJKbXo2RmxmZWk0TTNqekxaaXJOSHU2cFNnVzJBcmJrakRJRlgwZ2VneHN0d2JKQUpjNTg0UdIBogFBVV95cUxPcHl6VWdTVGRVbFMzMExySEM3S1RyY2ZUV3dDSFUtLThGSTRfbzdGSm5HQWY5ZHNWZ0V0aTZzV2ljM0JUQXBubVJERGlYUlF6VmRfaUVoOWQ5MXZEMFpPT3p2cHNjdlNMM0FfTnZUbUppV0VzMVZfbHpqanBCNG1UV3VuNGlseHFkZm5KTEhNbWZmZ3ZQMnJvMGpVNm10T0RiWVE?oc=5",
      "site": "報道"
    },
    {
      "title": "長野県中野市間山権現堂でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWmZPUzdVbDJOb1hEZ1kzSElfanRJcGpnRWwzWmFhNkxuTHlUWE9QNWpRVWdvZFluVWk4OXB2eFdjZVZSWlhPc29rRzV6X0RibG1ONjQwOWdpdmVtbWZQSmRDaUpoTy13clp4aUhjUHMtWHg2OERHVERaOFJEeXRWLVd6Qlc4cEVtN19QY2RULW9lR1JLQkZyaFNvZknSAaIBQVVfeXFMT1UyT24wb3Fva1psZ3owMWtZYWFzaERtU2VVUFYxXzVsdnBsVGNDS25iMDB6dFFsVjNMTzE0VExodXFYWktJOXlfMDZ4aEh4VDczNG0teVJjVGJ3Q3VUYkx0TVF2OUV3RnFnQTFpTVJXUHdDLTNRR2hhZ000VWhTVUpWaVFibm5ScjNPaHdKdGVNYnRqMVcyeDEyT1JEa2t6ZWZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "長野県中川村片桐でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOenR4bzcyQVVxdG5YS2dNRkY1UGxWTEwwMF9TTkZnNC10bVM3WUFhS1EtMkc0LU00N0Rib1o1cXhEVDNhbUl5eWdyNWoyR0k2M3RsalRyeWxneFN6YUJkU0s3dWdNTUNtckxhOTJkUW95U3lOMDdfUWNEdS1DV05ZQXlVOHp4OUU2LU9VcDdzVzA5UmdTLUVUMld6dEbSAaIBQVVfeXFMUG1jOEF2eXMtWmtVZmpGMXZxV1RfYURvNkttbjBTaHJvdVhsN0p0Vk9IbmtWX2c0ay1jZWtvYVRDWTdVN3Q0Y3ZPdG1la3ZzeERsWHdLQ1dDUURRNXJ3WHRHQnpPNmpnX0w5aEwxSU84VDlEai00X01yYUwzck5oUmQtd1lSQXk0cENHYUtfOHNockUwcHJsNEJHLWZidVRtekhR?oc=5",
      "site": "報道"
    },
    {
      "title": "京都府福知山市夜久野町平野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSkx6U1hObzJYaF9SaVJRVmoweFlJOFducW5mdGlrMFRyUnBhSmk2azEyUU9fR0tDUDB3TGxTWUJxRWkySG50enFNa3F1XzVTMHlvX3pBWTk3MnV1RFhZRjNJbHFKVW5NUnNMRTdXNDAxM2JpanExNjVVOXlSMlpfejRuYWZ4T3V4UEJkSUtabmpKcWNlMFc1Q0hqcWXSAaIBQVVfeXFMTWlyNXVRVm5IT0JQT2hoVmtueXB4S2lNRTdYYXdFVUNfU3I4Y2oybllUZVJNUjAzTy1oeFFEUmVVb3RjYkZTTThkU19od19KcTJOWnBOdHdudnd3cDBDdlF6dlpPbVFfRHlJQWMzaHdycUFzT2Q0dUFFN0I5SHhOdy1PR196VmE4XzREWTRCbHlVQTNFRU1USDk2X1JGUDI1MFN3?oc=5",
      "site": "報道"
    },
    {
      "title": "青森県弘前市坂元山元でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQblhhd21NRUdoTnY3NGVBSTRCQXRxdnA3b05oaHVxd3dfYV9Hc1FUSi1wWGt5SUZpd2s2YXVWV2p5RnhvaDhoNXZxdmVMX0VRdWVIeHZVaGFfaS1ndVhvTkVwbW5EVXVMNUJQeUIwRHFoRl9naXNFd0lpbDRfbVdPT0FBQUJZWnNDTW92YnJvMnp1Ump0MWctekdOUFXSAaIBQVVfeXFMTzdYT0M2VU13RlE0V1RLOWkyQkpZeklMb1k2d1ZxMnIzTXl6Q250dU16djJsQm9oMEZiNy1TR3RDTWNqYWEtV1FtUzNhVVVaeVlGS1FxSUNrYUZLSHNDeGpiNDAxaDA2NlVZWXpXb1czN0cxRmdOTmw1TDlXZktBQVJzTGZodzRqekdsdzVQSDV4WVpUd005elFGdHFfS2t2VWN3?oc=5",
      "site": "報道"
    },
    {
      "title": "青森県弘前市大沢下山ケ田でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOdHB2MjhZdW5wSkhtTS1Ndmczajh0Z0RyckpfbERpU0hmNmdnZHVRZkl3LVZoTmt5SHZSMVNkQ19jWGVZbHN6QnljRTgxNGhQZU5OWUM1ZVBQMkF1aGN5bXhTd0VlRGNzeS1tWlhObkxNX0FoYkp3SmRmUWhoS1U3SkljNkZWdUlTQmRhVENsbVpwbHB2NEdfcU11ckJITUQwQUpmMFFoNmFzR2Z1QUZEczFzZS1Sazd5V0drWk9QcU82dFZIcElXXzI2bl9SU050SnpKQmxkQ0lDaklCTV9MaFRtQXdqUWlsdGhfT2lvVnhJUdIBogFBVV95cUxQR1BKd0NNLV9oNENhRUhZSWFsWFBUMkdDeHppLWNyVGFPUGJrTGYyOHNNbU8xUnRPcnd0UHM5ekNRb1FBazlkQllmMHE3YnVleGdRLUtyNmZsVlU2aWRFeERSRjlQbXNINzlvZEpIYzN5VVA2UlNqQUttZURLZWtoalJIa3U0Y1NRYURPOUphSDE5WDgzQVFtaFJ3bWdYUEJhT3c?oc=5",
      "site": "報道"
    },
    {
      "title": "青森県弘前市でモモの食害約200個確認",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1hdGgwNGxQVVFWMWticVVrNWkwTWZzWFpoOEh6R2JvZUR3SnpzYUZ1UmlqaXZmQ1ZwOHZKbnZCWVlWY1Bhb1RKT3NaX0ROMWxsOS1hcURaMXY0UmVtTUpmT25IRHZLa3ZjUmNUZ3JGamxaSlg2MDN5cnpXY2gtM2M?oc=5",
      "site": "報道"
    },
    {
      "title": "青森県弘前市でモモの食害を確認",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQdVBwVFM2N20xUHIxUWZMRmJoMjlhQVVoZ3VHUnBOd1M2eERHb2ZtY2NDcVY2TlVtc3pURmo1ZENOcWI5WkdVQ1RKR3JRZWx3SzllUDBlTVJxWlFSLW9DY2lhSm1ZNVlTMk5uOE9QZUx0b3gwQVFkQThXQ3pjZU92NVdaOTVhOEU?oc=5",
      "site": "報道"
    },
    {
      "title": "青森県むつ市川内町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWWlKOF9mN3NLM3hrYlZJOFlxUWpQTElwTFZoLU1Kc0hQYmxPenlZSVZELW5ZeDNIelJZeWVUSUU3S0c5VW1NQU1JRUc1REJfYnM2NXNpeVZNZ3BzeUIzel90eU9qRkdnazJEU256c0dtRV9sMmFRRWtEb2ZQZlJaZXNiODFVU0tzX1ZXZ3lLX1ZHanZHYVVHUXJKeHDSAaIBQVVfeXFMUDJRQ3ZmeWN4XzR4dllycjhXVndJLXdqcHc1OG9JTnh4S3lqa2RRU1kybmhIOV96QzlJY01Ha3BnTDIyOWlLY25ZaHN5NVlNMVZDNlNGNTVVbk81bndQbm1ndEFEbUNPajl4NmlQNXZELWFGbzNYLXZVUXdPeENacUZwdVRmX2hBVEYzQVh5VjFIMks5akV0Q2x5ZjAyVHhKRjJn?oc=5",
      "site": "報道"
    },
    {
      "title": "山形県酒田市日の出町の国道７号でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9Gcm1CLURVQ3UxUjc1UGpkd3FTRHpSeVFRN3paTGJqcUdnclBFUTJHaUphR1h2a3JLektjZFBSdHBBZ2NNaXpsa0dkT2I5eW4zOWtDN2tzMFE2RVFvQm0zaWZtOGg4aGNnaTNRTW9Taw?oc=5",
      "site": "報道"
    },
    {
      "title": "岩手県花巻市栃内第１４地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbzczMXlmVExZb3dwRjJpaXVYUVh1al9pU3Buam5RTVhxZ1FqdXZ5emwyRmlfc3d3VkVicnFLUWZ6bXZxVUdtWU00YTJBbDVicEg1X3NYRWJQYXhtSUh4Nm1GZVVpVnlWWWZRZXVBOFBONGI1NzJTcktwdjFhbmVmZTVkZmdaaGV2Skg5Yk1fd1BJdUtibjVkaERXYk7SAaIBQVVfeXFMTjE3blY2T0xIeTFEOWRGT1V6bUNqNk5ERGpQOTBoV2tMckVoNzZwbEcwSFU5WUdjSmNwSi1wVjBsbjRwamp3Vm9mTkhDTHRJYmwyN1BMZXIycEowTm56bjRSejhyTG9oMlhyZ3FYMk5Fd2VtQjdRZkVKQzlRS3hMNW5wTjY3d2JqekIwTXRDN0NhdmZHRm5FUjE0NV93Mml6bGVB?oc=5",
      "site": "報道"
    },
    {
      "title": "岩手県北上市口内町松坂でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOXRTSElOZnlPQlkwNjlyUWZPTExiZEE0T240TE01Y01TUmVTc3A4cjF4bUEzVDB0VGNkRC1idG1qODAxeVplWFNJVm52eHExMHJ3cHVUVm1Sakl0a1pWdmNQX0RabkpzdG04VVcwT2VySEtlbjhBRXprNDVQWlBkN3RSWmYxdVZIX25Ed1JvaXJyOXlpZDZldHN6MkzSAaIBQVVfeXFMTmJkazR5NHRfLW1XMDF6V2F1VGU2U3N5cm1KaUk5MHl3N3lPdTZpQVhwQ01GU2VvSnhLRU9kSUxhcy1TU1FYQzJORFZBdHd5MHI4ZDVwZmx0UzZmRGJhZzBfWFRPREJqaWNHbnJ1aUs0eUpVVVNGZ25sc3BrbGloSE9vSHdoZkpXbWF2UWRNZWdnR0VacU16RGZidW5lQzBJUUpR?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":13},{"pref":"島根県","count":9},{"pref":"長野県","count":8},{"pref":"青森県","count":7},{"pref":"富山県","count":5},{"pref":"栃木県","count":5},{"pref":"群馬県","count":2},{"pref":"三重県","count":2},{"pref":"岩手県","count":2},{"pref":"秋田県","count":2},{"pref":"宮城県","count":2},{"pref":"京都府","count":1},{"pref":"山形県","count":1},{"pref":"岐阜県","count":1},{"pref":"福島県","count":1},{"pref":"山口県","count":1}];

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
        <span>対象期間: 2026年8月11日</span>
        <span>·</span>
        <span>公開: 2026-08-12</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={62}
        periodLabel={"2026年8月11日"}
      />

      <p>2026年8月11日、KumaWatchが収集したデータによると、日本全国で62件のクマ関連事案が報告された。都道府県別では北海道が13件と最も多く、次いで島根県が9件、長野県が8件、青森県が7件と続いている。これらの情報は45件が報道機関、その他は自治体等の公開情報に由来する。人身への直接的な被害報告は確認されなかったものの、家畜への被害や市街地への出没など、危険度の高い事案が複数発生しており、予断を許さない状況である。</p>
      <h2>主要事案の分析</h2>
      <h3>家畜被害と市街地への接近</h3>
      <p>当日は、人の生活圏に直接的な影響を及ぼす事案が複数確認された。北海道八雲町では、ペットのヤギがクマに襲われる被害が発生した（※1）。これは、クマが家畜を食料として認識し、人里に接近していることを示す危険な兆候である。また、「都市部キーワード」に合致する事案も3件報告された。北海道北見市では市街地付近で（※2）、同浜頓別町では「北３条６丁目」という市街地の中心部で出没が確認された（※17）。さらに山形県酒田市でも、市街地を走る国道7号線沿いで目撃されている（※28）。これらの事案は、クマが従来考えられていた生息域を越え、都市環境にまで活動範囲を広げている可能性を示唆している。</p>
      <h2>地域別の出没傾向</h2>
      <p>全国的に出没が報告されたが、特に北海道、東北、中国地方での活動が活発であった。以下に、主要な都道府県別の状況をまとめる。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地域・市町村</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">13</td><td className="px-3 py-2 text-xs">八雲町, 北見市, 芦別市, 浜頓別町</td><td className="px-3 py-2 text-xs">家畜被害、市街地付近での目撃が複数発生。</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">浜田市, 益田市</td><td className="px-3 py-2 text-xs">県西部で集中的に目撃情報が相次ぐ。</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">辰野町, 軽井沢町, 大町市, 中野市</td><td className="px-3 py-2 text-xs">観光地や住宅地に近いエリアでの出没が目立つ。</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">弘前市, むつ市</td><td className="px-3 py-2 text-xs">弘前市でモモ約200個の食害が確認される。</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">黒部市, 氷見市</td><td className="px-3 py-2 text-xs">黒部市宇奈月町で糞や痕跡の発見が相次ぐ。</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">那須町, 鹿沼市, 那須塩原市</td><td className="px-3 py-2 text-xs">県北部の山間部を中心に目撃情報が集中。</td></tr>
          </tbody>
        </table>
      </div>
      <h3>北海道・東北地方</h3>
      <p>北海道では最多の13件が報告された。前述の八雲町、北見市、浜頓別町のほか、芦別市の国道452号線沿いでの目撃（ソース: hokkaido）など、人々の移動ルート上での遭遇リスクも高まっている。東北地方では、青森県弘前市でモモの食害が約200個確認されるなど、農業被害が深刻化している（※25, ※26）。岩手県の花巻市と北上市（※29, ※30）、秋田県の由利本荘市と東成瀬村（※31, ※32）など、各県で広範囲にわたる出没が確認されており、地域全体での警戒が必要である。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では、栃木県と群馬県の山間部での出没が報告の中心である。栃木県では那須町、鹿沼市、那須塩原市で目撃されている（※8, ※9, ※10）。群馬県中之条町では幼獣の目撃情報もあり（ソース: gunma）、母熊が近くにいる可能性も懸念される。中部地方では、長野県で8件が報告された。特に軽井沢町や大町市など、観光や居住エリアに近い場所での出没は注意を要する（※18, ※19）。富山県では黒部市宇奈月町で糞や痕跡が複数発見されており（※3, ※6）、同地域にクマが定着、あるいは頻繁に往来していることを示している。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では京都府福知山市での出没（※22）、三重県尾鷲市と南伊勢町で映像や爪痕が確認された。中国地方では島根県で9件と、全国で2番目に多い出没が報告された。特に浜田市と益田市に情報が集中しており（※11, ※12, ※13, ※14）、地域的な活動の活発化がうかがえる。山口県萩市でも痕跡が報告されており（※37）、中国山地一帯でのクマの活動が継続していることが確認された。</p>
      <h2>リスク評価と今後の展望</h2>
      <p>8月11日の出没状況を分析すると、以下の3つの観点からリスクの高まりが指摘できる。</p>
      <ul>
        <li>季節要因: 8月中旬は、秋の大量採食期に向けてクマの行動が活発化し始める時期にあたる。特に、春に生まれた子グマを連れた母グマや、親離れした若い個体が食料を求めて行動範囲を広げるため、人里への出没が増加する傾向がある。</li>
        <li>餌資源への依存: 青森県でのモモの食害や北海道での家畜被害は、クマが自然界の食料だけでなく、農作物や家畜といった人里の餌資源に強く誘引されていることを示している。一度味を覚えた個体は繰り返し人里に現れるため、被害の拡大や常態化につながる危険性が高い。</li>
        <li>人口圏への接近度: 市街地や主要国道沿いでの目撃が全国で散見されることは、人とクマの物理的な距離が縮まっていることを意味する。これは、意図しない遭遇による人身事故のリスクを著しく高める要因となる。特に、早朝や夕暮れ時の活動は、人間の活動時間と重なるため最大限の注意が必要である。</li>
      </ul>
      <p>総括として、全国的にクマの出没が広域化、高頻度化しており、特に人の生活圏への接近が顕著になっている。今後、秋が深まるにつれてクマの食料探索行動はさらに活発化することが予測されるため、地域住民や自治体は、生ごみの管理徹底、藪の刈り払い、複数人での行動など、基本的な対策を再確認し、厳重な警戒を続ける必要がある。</p>

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
          <dd>2026年8月11日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-12</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-12</dd>
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
