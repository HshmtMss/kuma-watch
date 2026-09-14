// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月13日 / mode: daily-report / 生成日: 2026-09-14
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-13-daily-report";
const TITLE = "2026年9月13日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月13日における国内のクマ目撃・出没事案は計69件に達し、北海道および北東北、北陸地方を中心に高水準な活動が確認された。人的被害は記録されなかったものの、盛岡市や長岡市などにおいて住宅地や教育施設周辺への侵入事例が相次ぎ、人生活圏との接触リスクの高さが示されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-14",
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
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
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
      "title": "住宅地でクマ目撃情報（岩手県盛岡市 高校近く）",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5nemVQcVFtVkpIcUNpUjRBVi1WRXdlSEs1ZFg4OUpCQmxoQnZoOWU3TlNPUnpZYzk1TWExR25xRVNnYXJHcG5IUm1Dd25MRGhMQjZLcEExUk5zZUt3Q3B6bA?oc=5",
      "site": "news"
    },
    {
      "title": "住宅地でクマ目撃情報（岩手県盛岡市）",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9mNjJlMWt3SGRLUEx0NVgzc3dlZnNvQkt3R2ppampsR1VIcXJ2emRzcjU5bl9yNl9kSF8tQjkyN0RFbnNzTEN6bmV0ZEdMVUdXcUxfdzVKVW1MZ1RBV1E5LQ?oc=5",
      "site": "news"
    },
    {
      "title": "住宅地内でクマ１頭を目撃（岩手県盛岡市高松四丁目）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOX2VGbERVMmNqZmJ2Z3RST0JvWlBXMGM5enhRZ3BGek5pLTU2NnlKblVySUdaX3lhX3JOSXYtOW1pYzJIZk9YQkNOZ0J0WEpJdF9MVWJVTnVDWjF0Yk9YYTZiUjJKckZBRkdtcE12SXZOSVdnY3REbmlYVGdyWjVSYkh5Z3MxUnluelJybENfR01FTlNUYlVSQnhiR2ZmbkswMVNKRmlLcDB2UFJQR3dWVEQ4V3pCQXRVbFlIZmcwbzlMeVcweVpTYzBIWFd6M0R4THFKNElEWUpIYjJXcDBiVHVNaVlfUnliR2t3UWFQR1lBQdIBogFBVV95cUxQUTA4allnNHl6dEhGUG13SmZNSHR1RnZYbF9KVThfUEZDXzBWTW1aQl9BTzBMLXdzRXlWRjVOQUhmbk5lLVY0b2w0OE90Tkp3Z2lqd1dWTmNGaVl6OHVGdjNMRTNhaDYtQlhidWJ2ZndfMUR0OW9WX1ZvNi1tVGpsbjNBR1IzTEcyd211OENMX2dkNWktMDBUVWdlaWtySGpCd3c?oc=5",
      "site": "iwate-morioka-mymap"
    },
    {
      "title": "民家直近に出没（新潟県長岡市）",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE1RdmFVRjFfd2hGOHhKTFdIZFo2bmp1SzF5c3ZHMXdzaWdFT1ZqS2xzMk13TFVIcWwwMmk3R1Z3cXEzcTFH?oc=5",
      "site": "news"
    },
    {
      "title": "千歳市支寒内でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMzRLRjJ3V21FdGMzQmtwYUJVdk9iZ0JoT2kyRC1QNnFfQUhYR3EwVGxFYnZ3WGl0ODRxdGxvNzJFVXpidkJuTFMxcEJIMzlWZ1VuMGExYUFiVUQ4QnZsM3RvdjhhcUwzbFlfaGlMRXBBX05JZktuODNHVjVjaENYcUpfVlBFSGpCdnpXaTV2dElVRkgzM0d3VGlBanHSAaIBQVVfeXFMTnpvWXBpUzdvT2NoNWF3bHZJeUtwV01aRndtZEhWUGM0NldCWlpGV2JzdENVeVBSYmE2LVVtWndFSHdzai1WblYwemtKdFl4VnRQVFFJc1hSRUZDMUxjTmlwWkUyRnd3Z2FLcGNCTW5rZElQYTkzQktxSmxsTm83enVUMVBVWjFSRksyRkdDTlhRQUFobjBqaTFkbndpRXdwZGJR?oc=5",
      "site": "news"
    },
    {
      "title": "弟子屈町熊牛原野２３線西でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNNjFvOG5rTUdfYXJJTS1mdmFVa2l0c1RzVzRNN3k1NElBUnl4YnlNbXZmbkhENkpHNk43ckNWb3FJNDVhNHQteVotc0VraU9BWktNTXJleGNqUmYya0ZPUkRUY2dtOElldTR2cko2VmtyQW1qMjN6V241VGptS3pkUXIyOHBackFsZDRYaW50RXpJbTRCYmNjQmpBRkI5bzByTWZYSlVfZkdhb2JYNHF4Mm1QbjRGYjdmaEpVMHdZbXVaSmpDTEVland3ZnJURkxicEVsS3BWc3Y2R3VMN09qcXdrWVA3YTJ6VjdHNFhOcjcwd9IBogFBVV95cUxQWjcyS1pCYTY1WFhZUVlsTEtCQVhIMVJXcUJHcjRqZ2NiOGtoc1M2WjVOeGxLQzVXZUZxbGx1WnhUV1g0WWd2SFVsVzhUYVVwa0FJcFhHdGpxeVIxeHg2Sk1XNUFHUUVtcTJ2VTI3WHk0Wm9WOE9tT3VJZjI3Rk4yVWkwbmVCRDJ5VTQ2TFFLV2R4M2JNWWI5Vl9YRkZoU2ZOYkE?oc=5",
      "site": "news"
    },
    {
      "title": "新ひだか町静内御園でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNNWNuV0drNWJ1NklKb2IzVllFamdIQTVpMklMUWJSQTIzRjdQTWJ4SldzUkc2VmhfaXVWSmluMjE4YjBPUUJ1aXFMY2U4eEVnVFN0N2g2YjlHeVU1T3JZT2psYlpOVHl1eG5uZmVPZTljUFhBYVRxVXhSWjYweWFVYTVmYjBraG5YNjVUandFTVlRZ0F4WXd1c0kzbmwzWGo3eV9jeUxrbjltRzFFZXFmdWYyUzFxLTJJUTV4bVp4bF9kSVpJMjVsSWQ3VzNCSDhIeUdXTzBIcjVPZU9za3N1YkJFdHF3bjN3Y01CZjhQQXZEQdIBogFBVV95cUxQdzlQUmJrSXhiUW41dUdPUzkzZnF2a19fT3hjOGNSbFFDeE1sTWlHdWo1eDVLSVVZWURBeF9RN1FIbjBmWEI4MVVGU19CRk5rcEp5NXc5OHNWenpPMzdvVWtZUFFzSVNLZ3NmOGhCVUQwT1JaeVhwX01GTFJaQ1JLQUpSZ0lHeUpHSU90ekVPeGRSTzRQS28yRlY0QWc5TlVmSHc?oc=5",
      "site": "news"
    },
    {
      "title": "根室市酪陽でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOTXF0VVlhclAyRzNQVmpFTjNZYWJ4clZseXNYTHRVaWxRdlRBRkJ6cGtGM3VhTWhRcmw1N0I5ZjdWVUU0eWdhME1XbzE1T3NwUWVtWmVxMC03bGpJX2R2eXRET1pabTdWc2M1ZXByRVlmVlJIM0pLdmsyZ1Yxa2Q2cjU5UjVXaE5sWVRaY2pUa3BTT1RVTnY0MVRwb2dwc0FVY05GYmhvUTJUM0hJNTBn0gGiAUFVX3lxTE9XVjlycDJOdnBoUFM0ZmhRdFRkelVyRk1hOXNVdURPaHhXQkRMTzZhaXVYVEtVdl9BWVRiWVZObTgzUW10azhxeUZ2THhfbXVsZWhHd0RTX3hEZ0t2NG9sRXM0dFdFY3NaZ0xnS3M3QUJoZ2RsRFE0djh6NlVYUk9xWVQ0YUx5STRST19WOEo1Vm5BeVV2WjNrYnJXOGdGNWN5UQ?oc=5",
      "site": "news"
    },
    {
      "title": "（北海道）函館市高岱町でクマ出没痕跡 ９月１３日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbzFFWDRaRXhUMGkza3Z6ajRscnFXbjk5U1hHYkhrdnlzc2ZzbWs2NjVyZjRpUkxqVFdGeFZvZ2hlZjZVWmFRWDhGY3AyQTJNaWh4b2kteTYyaGNyV0tDRTN3dFdpUkw3MWJ4N21pSmVVcjJCXzU2V0RGOEtzQTd4TDMtUDB6SFB0U0xRNHlzbzZBbFFkNHpuSUV5Zm9TWTc5TnNGZGFfaGxOWGttWUxTUXdDcU1KLWV4bkcyaThxdklueFctTUZGR2YtaTZTV0RPbEJ3VFpRQ0Z5cFBUeXpod1JXcXpGWmlKaURKblhzX2poUdIBogFBVV95cUxONWFqOWJKamZvczcyVzEtRXZzdG5UZE56NGhMYjM1RllJbGxVY2hmVWtlZzFCcmtwMVpMMG91Z1llSzloLTMtb3YyQy1Ic1A1bUdzUXA3eDl1VkxyaktvUnhFc0Jnc2Q2Ym9Sa3BJVjdTX0tXMHI3NU5XUGxydmFZVklyQ1hVSUJwS00tYW1YYjc3NHo3Ry1GQTV6TllVTnlySEE?oc=5",
      "site": "news"
    },
    {
      "title": "十和田市相坂でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRWM4U2F1czdRTG44eE5KZ294Q3o5anF5aUZlNDN5akRfUXJVZEIwMk5pQmhTOUNFSDZHY1dJclZ4eEpoeTRiRHgtNUJmT05ja0x2VnFUTGstem0xUENKYVd5OFJCTnRpd1NzWmptRXBIOF9lcXI2bDlpYWtQTFhUV3VwNGlTMWNJUnctNmZYN21JY2ZPWWRVMVNOWkPSAaIBQVVfeXFMUElNVXdXWkRhMGlFTUVDdnJOZ3E3NmpDQkY4N3NFcWpZWDhsTHBUbkd0dXJVZ296NDRwY0J2ZFpmaDFRc240UGJCUElWNXJHUFhIR3lTd2tUTGR3d3hiOGltaWNIaW1CcEk1aW1IZE9uQW9raFZ2MVltcEpFTlI2WG5CUmdwS2JRZ2VrYlVENWdlUXJWSUt3eGc2QktSanNVbkR3?oc=5",
      "site": "news"
    },
    {
      "title": "十和田市穂並町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWTRDQW9OUlFOREF6RlphUEk1QUptNjh4V2FaYVlwNTVVa3QyNFk1YURoVHN5T1o3ZFBudUtlVXZfcUVwX3ZJaDVzQ1lLeHhtTVQ0eE40SHZGN3d6dnNUV2ZfOTFrR2JJVnFNUkVuZWx3ZXlMYnNlTWEzRzVGQTMxd25GUnNUcVdJbVlSb1VpLUpSTkxDUDRkamFGZDPSAaIBQVVfeXFMTjRfdDRLemRNX2Zrc2lhZFFldVVKQW5XeU5aLTdFNUcxWGQzSTRyTnlCRkFyQkFoNjBZWElmMWg4bVNlQ1N1U3JCZHdJUkUyWFA0d1J4TFp4ZVhaQ1A1X2FuZVZmLTdBYmNyR0lIVUJ4OEVtT29IMVhEWkZkb1hiOFkxRTY5Yk9VdTVwakNHcG00NzRpeXltOTZ4Z3pLcEFpem53?oc=5",
      "site": "news"
    },
    {
      "title": "（青森）青森市荒川でクマ出没 ９月１３日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNc28ydXVlRE1vX2QxNU9lRmIxN2NFNzdFWXJ1WmcwVUxsSHl3eGR5bHhROU9KQmZCVVFUMWRjYnhrZ3hZV1dnU1V4YmhrM0U3SlVvS2JQbGJJNjBRTTNJQzJxS3ZuUWh5ajRjbmZDUVczUHdteVI0TVVlV2RIbXp6dGVRVXc2T0Y4LXhVMXJXTFpCRVNpSUNxTjdKd1bSAaIBQVVfeXFMTnA3WEJDc0FHZV94QXNFOUVvQlJzWXEzV1pNcWhVMmhzVm1GbTQwcFhsQ204ck1UTFlyVlhCc0RjRkpFdFJ5SE1vZW9YbThRay1ZbTBLaXNJYkhPR3JwSVliN0oyT0ZVUlNjZmRfMGIwZ2lNMnhQdU1zeG0ydjd2ZHFaSVVOTHhuT01mQjJsRkpvSzdvbWltNGVLczhNRnd1MEF3?oc=5",
      "site": "news"
    },
    {
      "title": "（青森）七戸町白岩でクマ出没 ９月１３日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPWnEtd3BYYUcwVEJjSXZZcHJhX09yc0RETWxZUFVMU1ZUOHVNSjA0YjZoUk56c2UxNDJ1NEtnWGV0akdvRDI1bi1fSlNULV95TllScFJpaTM5TUswMkQ4b0FLYXFyRjZjMzFWMTJtQUFnaTdRcndVWEh1SGxCOFc3eW96QS1tRTZlalE2aFd6ZHphOGFLRmVKRnRfX1pzc0Fxazg0Y2ZXNWR0TVlJamkyOEFzTjFBMnhHNlZOT093WVFDdndvX0FEcjNDT2hCYTBPOUJ6bVJuZDBxVk1IOHJkYXVBb04wUUFxM2hlMHhPeTZ5UdIBogFBVV95cUxNVXRPcy1uX3VpQ290eFQ4VVpHM0lUNklXdmgwNEdKZWVfSENxbWhPZ3dsM0kwQXlKVVg3ak5ieEZvMFJjRWd0OTM5WS1nLUQwU2l4RkdEM2VxejlNaWRRRWQ4dEpZdmk2SGJBWGs1MnRKUWhBUWxxWDZZbEpLck1mS3JFbmZabm5qR0hkemhzYnlUMTFwZzJYdlRJY1ExQVpXRFE?oc=5",
      "site": "news"
    },
    {
      "title": "北上市和賀町横川目１３地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUGdfVVNwZnpqVHpNTnZhZnc2VEN6bTIxQ2tMcWRCS2tva1ZXYk1uY1puZHNJOVVCUllja3RTRktpdE55ZUdEUENWSEJVWTg4TlBuR3pPVTVfaGZ1b3RsZGphNkVRYVJ1c2g5RE5tUkJUOHpTcGgycTZYc2pZcnRtSGJFRGZRTjFLdURDdXBqS3d6N2JWWTVLUUszUU_SAaIBQVVfeXFMT2NJUUNBdmNZSVptWnVYbDJySHd0cUVweDRhbXhwQW1ONjh0NUlyNUlPU1d6a2lfTjM0bEZhNjdGV3BuLV9VQnZBaFRBOTdfeWpPTmIwaW55LUJYb3p6RGowMW1zcHJ5RlhnYTNxakNJSGJLbldLNnBZV1E4dnd4WWlGSzFBR0JERjJmcHZxR3JyQ3pJWloxaGtjWjZoNzdNb29R?oc=5",
      "site": "news"
    },
    {
      "title": "（岩手）花巻市田力第２地割でクマ出没 ９月１３日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOX2VGbERVMmNqZmJ2Z3RST0JvWlBXMGM5enhRZ3BGek5pLTU2NnlKblVySUdaX3lhX3JOSXYtOW1pYzJIZk9YQkNOZ0J0WEpJdF9MVWJVTnVDWjF0Yk9YYTZiUjJKckZBRkdtcE12SXZOSVdnY3REbmlYVGdyWjVSYkh5Z3MxUnluelJybENfR01FTlNUYlVSQnhiR2ZmbkswMVNKRmlLcDB2UFJQR3dWVEQ4V3pCQXRVbFlIZmcwbzlMeVcweVpTYzBIWFd6M0R4THFKNElEWUpIYjJXcDBiVHVNaVlfUnliR2t3UWFQR1lBQdIBogFBVV95cUxQUTA4allnNHl6dEhGUG13SmZNSHR1RnZYbF9KVThfUEZDXzBWTW1aQl9BTzBMLXdzRXlWRjVOQUhmbk5lLVY0b2w0OE90Tkp3Z2lqd1dWTmNGaVl6OHVGdjNMRTNhaDYtQlhidWJ2ZndfMUR0OW9WX1ZvNi1tVGpsbjNBR1IzTEcyd211OENMX2dkNWktMDBUVWdlaWtySGpCd3c?oc=5",
      "site": "news"
    },
    {
      "title": "雄和平尾鳥大巻でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbU5pZTk4aUFTRy1Cb2VXVnhaQldTb1BIQ1dkS0VTS2poTC1UU2hNWGFQUmY2b3NkQ1RnMUdqc2M3U1h1bUZpWGhsTnNCX29uVGY1TjV0b0FXVjdiWkNRUDhrUTJKT3VRT2J4T0RWdDdrclUwQnJqd0Y0LTRXOU5neXV3YjM1Q2pWTmVkcmlHMWxrclBXdUhBek5tWDdzTmtTTjljT1BoenRMV2NiZHhzM3Y3YVk5c1BVTWtNRE9pQlFKSWE4Z0FMdUVkS1dFQmR4SWdITTRZODFNTzBZdXo0NHpUeXljOFdYZjhQajBhdF93UdIBogFBVV95cUxOcmtBdmgxUWIwMXV2WkkzWjU4elRwYW95ZFJkLUdRSGxHM2p1UzRDWC11Tl90TnVfNWR2OHJlWjEyZHZhME8taFNwWDVRU0dKdXRKSDR3ckxBa0JCX001RlE3YmFkcTYzX3d2VVhGbzgya2JzUVVWTFZiNHVQYWJkdGhtZ0FwcGZ4RU01bHlFaUNhRU1jMzZWUm9zQ2FsTnRRX3c?oc=5",
      "site": "news"
    },
    {
      "title": "秋田市下北手宝川潤ケ崎でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeVBCUXlKQWc3QTJJbVY4WmZfWHB3c3FOODZTNHprTUNUdkt0Wk9panhRc2ZRZFdfV1RRTThLcXBxaWZjamtkOTBRdEktVU5aTlBXWTBaNE03LUhjSGpuMFg1VXhNZm95anpCOFA3MXRtcEZ3M2lNM3FOYTV5RTlxS2FQSkROWHNnMWdfNjluVk8zbEhzVGxjOEJNYTTSAaIBQVVfeXFMTllLUGpmZVJkUGw3Ny1QM2JWSEd2OXZtUFpnek1XVzVWREpnMTdxdnZrcG5aNGFWeTlkbE4yVWdUOWpNbkd4OHZMQ1dIOFZDRzBkeVdVRHAtVW5PQ3EzS3dtenE0bXBsclNGN3k3akxmb3Zvb1M2UDluU1Z4ZW5ac3pYZTN2ZGVmdE1yQ0RnVWFsSXBmV1IwWEVWMFNOS3lnOGd3?oc=5",
      "site": "news"
    },
    {
      "title": "由利本荘市岩城道川田中でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUElLazMwZHNrQVRxUkt4SmdENUtXQ1MxUmhUck1CSmsweGE0d1BqTUFTdWhDdnJWeHRNWXlwT29YT3NYdGxaZF9ISmJHeGNDNnBhVW9xSS1EUU0yemlsNXBkN0NXMGVFbGlMdTFSZzlOeWlhWVZnTGl6R3lDVG5haUxXUDNGUHlGX3hDbkQxOFFieXpNb2pQcHAtZU3SAaIBQVVfeXFMTThRVWNEV0xpdVh2aE1fV3kzV1lyd2dkczRLUlhpU0dwaUNNTGJJaEFPQXdtVm9rVV9pMnNFNWxqOXRwWG0yNXpTd094b0l3VGFvRHpWSENncVUyUm1naERPOUNEY0NBbTc0LUJyUVlGNHZ1TVhrbkFaTEdvVVpDR3lDU3JqNHJDN2VCS3o5amVaV2xxSXNpdWVob2otMko3dGFR?oc=5",
      "site": "news"
    },
    {
      "title": "（秋田）由利本荘市水林でクマ出没 ９月１３日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbDlOaGpOeWp4bUlocWp6bWFQejV6Ykpab284emVYU1M5MjJkUV9iU0hTeGZCS2U0QXY0MWZvWml2aUVTSVNUemtwamVXc2pySU40djVCZk9KMVAyRzQtNDZidTVEWmdoc2M1cWc3RzVtbHl4MUJOOU1hRk5PXzVzcFlKbk15X0dLazdmT0ZqR3lBZ1U1bDhVdnh0TWLSAaIBQVVfeXFMTjJQLW5DRU1sY3NUNnRJc3N4cm5FU3R0R2JCTkxoeGpqOGpiWWprSWdLLXdPaWJ1RVRJSlFrZnI2X0tJRzNzbnl0bHNGRHJ2UjRQRUN4N2QtTFRfeF9OaVlTSkZ2V28zdFdNeG8tWWdVRjBidmlhTXBNQlVvRE13RHQxRDJoaVZmQS1aWmdMMWFJSFYwX3VWT3pRVjdQUlFDbndR?oc=5",
      "site": "news"
    },
    {
      "title": "（秋田）横手市十文字町佐賀会古川添でクマ出没の可能性 ９月１３日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPUkdFb2k3aVZvSEZFZG9EYmY2Q2NFZFM3M3c4U2lldERiNm43OEgyNjVFSnF1S2FCNF9jdVA3SG0tbjVXQkhvdlktTHAyVmo5dVNQTmUzSTlDa2lvUmd3bFcwZ3hGcGV4MlpLel92b24wNURGYzVYSFgxWjNwMVBPcV9xdTlhbnZsb3AwX2RsRURNSEZVYWI4aGZwX3dEZENwOTlPY0RNSDIyZGw4ME5yN2htZl8tVnRnZGtVbjdORlZrZ1ozVXpnSVhnSDNyV0FBeXNiUHFIU0k5d0w5SWs4cEtTOGM0QnNVSmpvUFE1WGg0UdIBogFBVV95cUxOcHZWNjJyUVRVN3VxaVppWmk1cG45TUQxbnlTckxUQXNTTmZRcXhmQVd1bVN4YmlsV1VNTms1VkMzSTZiUzcxR3h5X3dEbkhBWTBGRmg5eEZKTThTWHVCNzlHcWpOTXJpb0hsVFRoSHlGOU0zNjNFemc1UHdnLVUyd2NrOEdOTGR2bS10SjBUWVRydC11RE9HUWpKbk41dHpMOGc?oc=5",
      "site": "news"
    },
    {
      "title": "矢祭町で熊らしき動物2頭",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ucGtVR2MtTEFHOEstVmJRUVV2Y24xOU52TXhVeVVUTXlYM0VadlgwVEZSMDc0c1ByT3RZUjQ1TFA2bjMzbG5wTHpXcXFIdw?oc=5",
      "site": "news"
    },
    {
      "title": "【熊出没】9月13日（日）福島県のクマ目撃情報 矢祭町で熊らしき動物2頭",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5jSFJMLThpQTA0RmhMZXpXeXlydnNIQndDSm1CTmZ0blhIeGlSTjBaenE1alA2enJ6ZDBVd00zQ1pUOUxsd0hMUDgzaGx6alpIYnBrcE9VdUxhS3UwUjd4aU1oUDVIdnZMa0treTBGM1JnLUxYcGwyYkVrb05TTFE?oc=5",
      "site": "news"
    },
    {
      "title": "【クマ出没情報】檜枝岐村、矢祭町で目撃 13日 福島",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9RWnAwdkltRktNVjZ4YkpILXBvWWZBaUdhMVVvYkVlb0xUY2RPWkVzSHpoQUFPTjY1eHFuaFpqb0swdHJvckpCS3VEV2NyZlE4M3A0d3ZJUTBpX296TndMQjloM0lUaWRQQVMwTzM3V01GbjBTcU1sRkVrZzNjcms?oc=5",
      "site": "news"
    },
    {
      "title": "河北町谷地でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOYVhJZS1FV1h6eDhCUk1JNF9zb2hkdFZiTTFQaWFBbFZmN1JjaDFvazNrSUJsTlFkMTY4cXNwNGFyZDZyUE9UZFRJemRUMG5PcUhXbG40R1JSMEdnV2YzaUFkSVd4dnVCWWRUdlVaMms1RmZLYnBPXzFhMDc0blZORkNqR0RWRnpsbUt4Q281TVlZWTJjMi12dTUxV0fSAaIBQVVfeXFMTzBvS1lzNXVUX2h0MDJuZnZkVTZLT2dUS1BPV0FvNzZNOGlabUJxRVJSbHFtZDZGSlluaVBrcjAzWmFhM0xHdS11MWxiR050aWRfeFZ6ek4yTWNUcWNqWGRobWgxTmtOZ2dqYTJKMUVzeDJIUUEzeUdzdHFIVGtvZmRNc1Y1NldIQ2d5WHViSlhULWlPa0tRYXdVZmRZbVlzVTVn?oc=5",
      "site": "news"
    },
    {
      "title": "［熊目撃情報］小千谷市の山谷ＰＡ近く（9月13日）",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5IV3h1cjQ5Q3c4aXpqTkFtSmRwZGJCSUtHaGdlMnZUV0JwLVhNc09xZkF1d0dmVExxVjJ4T29TRlNKLXNmR29SOVZCYw?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没の可能性（新潟県小千谷市山谷）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTkV4UndNXzd3MHVGUEY4M3VsYVdkbnc0cDRDWG80Rk9ZV01ZbzFHdXNOWGpBRTZhWlNXb084RHBWMVVFQnVHY01hQWpxSWVRZVBXbG1CYndjZ3FORkZ2Sm1WUTVSM1FwaWN2LVh2OTYyQTNReVZyZjBqWUNOTDgyZkIzU1M5WUVkU1BXX2JXWjBrb1l5UVFkbk95MHXSAaIBQVVfeXFMTktjSF9HOTBzdG5KcldTRFRqMUl3bmt0Y09hYWhSUXkzZkFQNEo4Qk42RDdmWmlEVTRkcm9DUEFDb2lPcFFRWE5uN2VNalpZYmQ4czdiSTNVMUN3MzdtNmxDWmlueVZpOVJYbE9TVkhrdjhLX3FNU1NhRXRyRmVENDAtVG1NekxGTmppeGhjdWFoeVNQZU5rWHUxQ01aYVVVa1hn?oc=5",
      "site": "news"
    },
    {
      "title": "（福井）おおい町名田庄久坂でクマ出没 ９月１３日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbFgyQ3gxcVFvN2p0ZXFZMHlBSkxpOEtuRG9lYnlPN2NVSGp0djFvQ2JVNGVhdElvOHpBM2sxcHY2cUlEU29IWlBlTjZQM0tOblRsa3Q4YjA5SmlkM2pZSVhIeVFwSUMzU2JpbDZoZDNrTWlMZFF5cUpFZzFXRTY3LVJrdUdHT1owZEJjOFA0NDloaHNFd21BRnVuODFmR3pXNnJrYld5dVRFajN5aG1sZ2phM2NMWmlMM3QxbVhhTHlzZUY3bVdIdnhOYmlWX1JFcnJFVFAwRGo5MzhPU3FQWFYyNVdfUVZ2bUJiczhtbWdFZ9IBogFBVV95cUxOeTM0YVoxSGozcTRmUmlJUjVGN3R6clRCR3hETllCV293MzdqbDI2NWJ4dnZaVThocS1LQ2Y1aGtsc2NVem80eDliWEt1RFFBZlh3ckItYmc5TWJJRWMwWFRXbmlMeUpwbDQ1OVljb3hhYUd4SHZJSUU4bE1UTDZLbFgzcVZMOUZjdnJ0TmotRkFsLVVsYzV5Rng3YlRMRkt1aGc?oc=5",
      "site": "news"
    },
    {
      "title": "信濃町で熊の親子の目撃情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1aTFlrajF3bzJfX0dQNkRoWGdRWmQwczkxWGszRG9faEJKSmVkMWp1aGVXV1U1aktRMURobVhzeDhfeWU4dUR0Z0dKNXQxdEF6cW1QZ2F5bmVNUzZYZTF2UlpVM1QtU1NXZ1d1QmZCeHg?oc=5",
      "site": "news"
    },
    {
      "title": "氷見市余川でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMzFCN09VOVF1WjlTY1dBRV9xQ1BRMlZlX1dXVFFhc2c5RjhteWF5YzE5QkVxOHZ5aXZLWi1wZnNFVzk3eEtqbGpBdUNNcDNqNENOQndNalVnVGk0QlE2X0E1TS16QmUzb05ZOGZfaHJOWUlDdFhYdmJIdmF0SmFaY0Q2MG1rZFF4ZWhGWmlZS3V1R2UtdEpUSHlMcTLSAaIBQVVfeXFMT1hPd0xmR1FkdVhncmhaZWJHczNaMW9XMllZb244R1FKUmYycXZJMG5uQnY5cmxZUVZNNHJJNnlKSF92UkUyMmM3U1R0QU0xM2NYcnVhb0xpWjNUc0pzM2hYT21sTDFzQ1hSYXpOSGZYYmlSVi1pUVA2TFhnbDRwRXNhTnI3T1RBbUs5Y0FQZ1RCUTk5b3BOeWpkdkh1QmVXUy13?oc=5",
      "site": "news"
    },
    {
      "title": "足尾町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQTXhNOFE3cFNOUVhFMVRjTGt2RG9RUXRoWXlQYXBhWGFtb1hkLXRTeG85M3ZMQXRwX1l2UER5MU5CeDlNVWZVWk5EOHNIbUhoRDAzdDZNek0wMjM4V2RYYnFoXzgzM292UklxNTdFNDNkSUVmR1NLNElHeFRRcV8xR1hWdU5DLXRvMzg2NGVMc3FPMmg1TjFpWnJDY2tnZlNxTFpxaklCMTl1ZjM1QmNJTFAwVkcycFMxRlVCeEJuUmphcjdFVnVuOE82QjZHSjg2NnJNR2oySy1nRC1LdHg2ZzVsR0twZjdIbVBCVDVwSEZiUdIBogFBVV95cUxQbXVEV0FUeU4xeVFVZ19FY2hqV0k4RGN6MEZJUXpZUmpWbkVVaS1PeWVBWkltQThGU0NfLVNJUTByUllST3BhOUJnZnZWNm9pYlZBRjVWTnZMU2FCTm5XNnprX1Rxek81OU4xUTMwSFh4YVFuSm5CdFMwcmt6THdVTXNXcm5OMFJtYjl4Vlh2bXdwUVhzcVpSZUJ1eEVTZk85Z3c?oc=5",
      "site": "news"
    },
    {
      "title": "（神奈川）伊勢原市日向でクマ出没の可能性 ９月１３日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPYXBwak12S1A2ZnRkaGxKSXJkU1M2WkVqYTBMNDZLTE41UENUd0l3S1U5UTUzRjVadXlIRHg1eW9vVl9OWGhWaDRYd1k3Nzd4NFdrQnhVSk1QWm5uWXZsc1VydXZ4ZTgzR25iRGhDTGdJNHhyUFpyS1dIYTg4YzU5aUh5aXBJOHZLXzljRHlBWGJHYUZ0dHhFSUFmbGp4RGJOSWJaRzFkLVpqTzA2OFFlbGNHVlI3c2gwYlVwZHBOVllpRmk5UzJZTFZZOXpOaFJEcURUT0VJMDVJY2l4X19pN2tYdkt3ckdudnZrUEFIaFJDZ9IBogFBVV95cUxORTQxczI1TUc0dWlNSlc4ZXRsSFlEUzE1Z0JhYmtDNFNlNVVSaW5uWG1XZnFpaWxvNHVHQXl1OEgxQXp2SWt6S2ZfZmQ0eERiNEV5VmRqQUVaUW1JWTNqZ2hHUXBENnNiQU84RmlMWnZhcWJRTmc1RUdKQlprMTdnZjVPQTZSSTFFb2xwaVNXbnFjc3RpN2otNlhjaVJJSXRpOFE?oc=5",
      "site": "news"
    },
    {
      "title": "（兵庫）小野市新部町でクマ出没の可能性 ９月１３日",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPQmpmc041Sm43d0dTRVExa0IxdzVZaWFyeWV0M2lSODhqTW15OGpvN3Y0MmxOZ3o2S2lRaERsNEJQdmE4OE9EOHZnS2JaT0NveTgtZE1TT3UyZVFhTmNtZjR4dnN1SU1SMkZlVWc2b3dUUlNEU2xRc1EydnhRMUdZQUhIendIY3FrQkhyVDJXUlA1ZklkZVIwVjRJZEVUc1NnRHfSAaIBQVVfeXFMT0JqZnNONUpuN3dHU0VRMWtCMXc1WWlhcnlldDNpUjg4ak1teThqbzd2NDJsTmd6NktpUWhEbDRCUHZhODhPRDh2Z0tiWk9Db3k4LWRNU091MmVRYU5jbWY0eHZzdUlNUjJGZVVnNm93VFJTRFNsUXNRMnZ4UTFHWUFISHp3SGNxa0JIclQyV1JQNWZJZGVSMFY0SWRFVHNTZ0R3?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（兵庫県丹波市青垣町小倉）",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQQUF3RUdHb0R1WkExTjZZTTR4OVRMczZua0VTUVZ2TmdEb1FaSExMdGtuaFRIbTFsVG9jM2t4bU5XcWFEbGFDWHdsenhHV0lyc01wWmZ2ZGY4Z2dRYzNFTl9OUkFnWG1RSGhkbi1HN0NpTGlENVR2VU82MXQyc2xqYnFsa2k5Y3o3YWhzakxKRkFreVZ4SFZpa1dYTTA4WEo2VEHSAaIBQVVfeXFMUEFBd0VHR29EdVpBMU42WU00eDlUTHM2bmtFU1FWdk5nRG9RWkhMTHRrbmhUSG0xbFRvYzNreG1OV3FhRGxhQ1h3bHp4R1dJcnNNcFpmdmRmOGdnUWMzRU5fTlJBZ1htUUhoZG4tRzdDaUxpRDVUdlVPNjF0MnNsamJxbGtpOWN6N2Foc2pMSkZBa3lWeEhWaWtXWE0wOFhKNlRB?oc=5",
      "site": "news"
    },
    {
      "title": "朝来市和田山町寺谷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQYjFVVWdPdUI1N0ljM3RIbkRVVGlQSEo4elZoU1ZQYWdoUDlCSlJpMGNpMzZpd2R4a29ZWnIyVng1N1ZaUmEwM2NmWWxYdksyRGo5a3FraVpkZVJzTVlUR2s5MWRhamlXUVdTb25oVGMwQ1cxZzRyU0JTX2tyUGoycl9jenIwM1NlcUYzbDJGak96OVJxUjRmUWZoVERtUU5lZFc4MzdLdGNCSlAyV251V1NSMXI3WkZfeTBPTVJNS3VfWGktalA3cWxFZU5GMDNnNFZ1S3BpXy1PRW5sREJ1YzZOZWNuTVdlSXp1Sm8yYlVad9IBogFBVV95cUxQaTdpZ21LTzdrUEhSLVdYbVdhcWNrMzRmVEZ1WGpkZjc0R3hkM2FVOVVnREZ5ekpFLWU0M3paSXhXdW9NN0pLVVRiTVdTU0FVeTRvUnFLT3U3RVFaQ0FFNjBtMXJSWkEzcXV1dTROU3JiZ3N5MGlRVjhzRzdOUTFlWWdsQ2JNTWpwWERWR3hJMzkzNjJmRTJqZFJjMmtfWk9ac3c?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（京都府京都市左京区大原勝林院町）",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNZWU2bFpDanB5ci1KVlBhZ01TZ0V6MFJ1d1dqemZlMkxjckZaYmNnVjVBSWE4NkVjU0JmeW95YmF5aVVTZ3JzLXowQmdyeVZoSGtFSEJhYTNTal9yVm1SaXhJVkhPSDI2a043R21xUi1vUnBHWVJLaTQwWTY0NkYtbVJNVnVDaWs5ZEMyeVdQaGFpNThRZktCVUlZUDdSalpMSVHSAaIBQVVfeXFMTWVlNmxaQ2pweXItSlZQYWdNU2dFejBSdXdXanpmZTJMY3JGWmJjZ1Y1QUlhODZFY1NCZnlveWJheWlVU2dycy16MEJncnlWaEhrRUhCYWEzU2pfclZtUml4SVZIT0gyNmtON0dtcVItb1JwR1lSS2k0MFk2NDZGLW1STVZ1Q2lrOWRDMnlXUGhhaTU4UWZLQlVJWVA3UmpaTElR?oc=5",
      "site": "news"
    },
    {
      "title": "夜久野町畑でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUXlHWkNadDQydEZsUHRHVGFMNjNycW01bmRUWnlrVmtGY245QkJwcnFlZmNJZFBUaklpVEFnbktwYnprTXFaM04xTEpzM0kwQjZhNXVmeEV4MmJaUWdmcWVPQW5XNXotMEFqeU9tNjMtMTlpYXFWaVV3eVREcGh3YUxXdFZGQ0N6NWJXemg1aFVuZ0dYVDA2dl91NGjSAaIBQVVfeXFMUFk4ZXE0RXViV05ZZ1JOT1JlMDQybVpQbWp5RmVJUFBMRTJaSDFxRk5vYU9VTDdWNHVQU3JiNzZ6bGh5dDVJRmwyY3cwNjZ6dmdHZHpESTlxQU4wQ3JYS0VVRVBvS3ZfNUhUWlZhRjZhaXAxUjVuc25BcWJERm5VTmhxb04yUVc4TmVydmtpUjhXUHJ1blZ1T1dOby1RUG5MVHNn?oc=5",
      "site": "news"
    },
    {
      "title": "下筒香でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSUpCR2FJMEY1SkpyenhBYVF3bldZRkRBN3BwNms1MVBUZVlhQ2EybGZQNUZTcVRwT1IyYVBVc0ZsUmhOMjVOWHhpWkp2LVUxcGNEZ1BQbnI1bGdqU2VPRU1ZMmhLaXpiVHRoWlc1dTN3R2pJNzJrZEZqOGVSWXFWS1ZyZF9keHJVdFh3b1VSNEVQVGhBZFpIbWZvWE_SAaIBQVVfeXFMUENmTWk0ZWJKcWk0OWpTWXFkWmJNTklVNzF1dE5RNjRkNl9pU2hvLVNnTUNGenREelpLX0d3TF9SWjhtZ1c2NFZBckY1el9TX2lnakFWZ3M3Tktqd1dQRjFsbjFwMEZaM1RyWExqa0VBZk5MWlh0eUVmS0RKUkpoNWxvcW5jVWVaWWI4cGlQTVRYNkRXYVhTajJldXNXbGxjcTdB?oc=5",
      "site": "news"
    },
    {
      "title": "益田市左ケ山町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVElUSmxrV3ljQnViVkJaYUpPWEFUME1pWXpUMTg3amI2azNOak5IZ29iN2NETTZXajJybmloaXEzZ29fb212OHdRQnlXVndZZWpJRVZXQ1RNUTVBS2ttbGFTNjJpZjJMci16VDVJUlZWZHZmTFNXcHc4Snd5QXhNdVdmd215djVTbzhhYWpmSlFJRVhRbmIzSmRBYW7SAaIBQVVfeXFMTzN2b0N3a1JNWmhkZko1WmFtWWxMMzU5X0lWajNlRzk5aUxqYTRUNkZYcldWV05jdmJObDBiczhpZzg5bHVkSHcxUm1sQzB1VHZtbkJJQmY5bkJndFkxSTRvamE2WUpZVEV2S3VMVEhWam1OT0ctY05JdnhERXZtVktudTdwaGk4QlhBNUo5Vnk4ZTZUaXMzbGhlMmVQTVFZMExR?oc=5",
      "site": "news"
    },
    {
      "title": "萩市佐々並でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOY2VUS3I3ei1RZDFQbXRrZk5oRlhsZ0JFV2hqM2pGOV9HUUNaTEJUMTljaTlKbnRaS0JENm1PSW1lNllWWEUtTmY1UHJ6ZHd6UEwwZUF5dHplRXZQUGdsV1h0SVRsakRzQ01FQzFwdE1FLWN0NW9ZeW1aMVZkTF9JaXQ5WlhpZkF5bjNjRUNJSUlNbXlXeDl5RVFSZUbSAaIBQVVfeXFMTm5IclVQb2FydlRGU05fZmt2Z0VyVWxDcHpRaGJ2V195dk12anQzdUxYX0RuYVh0WFlVNGxFUjhReXc5UVN4Q3Y0NVRFa2o3eXg3d0FpLXc1eXl3Z1lxZjMwYjRuYVZlelRhQ2wtQmZNSVdKZmJkVHV1emxJYlUwNmt0ZVJZRnpRSmVzbEF6VGRvVVVZMU5sSFhNUWxZUk5Zcnh3?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":14},{"pref":"青森県","count":10},{"pref":"岩手県","count":8},{"pref":"新潟県","count":7},{"pref":"秋田県","count":7},{"pref":"福島県","count":3},{"pref":"兵庫県","count":3},{"pref":"京都府","count":3},{"pref":"島根県","count":2},{"pref":"福井県","count":2},{"pref":"群馬県","count":1},{"pref":"三重県","count":1},{"pref":"宮城県","count":1},{"pref":"山口県","count":1},{"pref":"富山県","count":1},{"pref":"神奈川県","count":1},{"pref":"長野県","count":1},{"pref":"山形県","count":1},{"pref":"栃木県","count":1},{"pref":"和歌山県","count":1}];

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
        <span>対象期間: 2026年9月13日</span>
        <span>·</span>
        <span>公開: 2026-09-14</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={69}
        periodLabel={"2026年9月13日"}
      />

      <h2>全国出没概況および主要事案の分析</h2>
      <p>2026年9月13日に確認されたクマ関連事案は全国で69件に上った。人的被害および捕獲・銃猟に関する記録は0件であったが、市街地・住宅街への接近を示す都市部キーワード一致事案が4件確認されている。情報ソースの内訳としては、報道由来（URLあり）が52件、自治体・公的ログ（青森県、北海道、新潟県、群馬県、三重県、盛岡市、宮城県、島根県、福井県）由来が計17件となっている。</p>
      <p>本日の特筆すべき事案として、岩手県盛岡市および新潟県長岡市における人生活圏への極度の接近が挙げられる。盛岡市では高校周辺の住宅地においてクマの目撃が相次ぎ（※1、※2）、同市高松四丁目でも住宅地内を徘徊し北へ移動するクマ1頭が目撃された（※3）。また、新潟県長岡市吉水では住宅付近で糞の痕跡が確認されたほか、同市内において民家直近への出没も報告されている（※4）。住民や通学者の動線と野生動物の活動域が交錯しており、偶発的遭遇の危険性が高い状況である。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地域・状況</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">14件</td><td className="px-3 py-2 text-xs">千歳市、弟子屈町、新ひだか町、根室市、函館市</td><td className="px-3 py-2 text-xs">痕跡確認含む、原野・山林縁辺部中心</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">10件</td><td className="px-3 py-2 text-xs">十和田市、七戸町、青森市</td><td className="px-3 py-2 text-xs">道路横断目撃、市街・林縁境界</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">盛岡市、北上市、花巻市</td><td className="px-3 py-2 text-xs">高校近く・住宅地での目撃事案あり</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">長岡市、小千谷市</td><td className="px-3 py-2 text-xs">住宅付近の糞痕跡、PA周辺、民家直近</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">秋田市、由利本荘市、横手市</td><td className="px-3 py-2 text-xs">農地・集落周辺での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">矢祭町、檜枝岐村</td><td className="px-3 py-2 text-xs">矢祭町で熊らしき動物2頭の目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">小野市、丹波市、朝来市</td><td className="px-3 py-2 text-xs">集落・山間地近傍での出没の可能性</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">京都市左京区、福知山市</td><td className="px-3 py-2 text-xs">大原勝林院町、夜久野町畑での目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別詳細動態</h2>
      <h3>北海道</h3>
      <p>北海道内では全国最多となる14件が計上された。千歳市支寒内（※5）、弟子屈町熊牛原野２３線西（※6）、新ひだか町静内御園（※7）、根室市酪陽（※8）など道内各地で出没が確認された。また函館市高岱町ではクマの出没痕跡が報告されており（※9）、広域にわたって個体の活発な移動および痕跡残置が観察されている。</p>
      <h3>東北地方</h3>
      <p>東北地方では青森県10件、岩手県8件、秋田県7件、福島県3件、宮城県1件、山形県1件と広範な地域で多数の出没がみられた。青森県では十和田市相坂（※10）および穂並町（※11）、青森市荒川（※12）で目撃されたほか、七戸町白岩では走行中の車両から道路と林を行き来する個体が目撃されている（※13）。岩手県では盛岡市の住宅地事案に加え、北上市和賀町横川目１３地割（※14）や花巻市田力第２地割（※15）での出没が報告された。秋田県では秋田市雄和平尾鳥大巻（※16）や下北手宝川潤ケ崎（※17）、由利本荘市岩城道川田中（※18）および水林（※19）、横手市十文字町佐賀会古川添（※20）で確認された。福島県では矢祭町で熊らしき動物2頭の目撃（※21、※22）や檜枝岐村での情報（※23）、山形県河北町谷地（※24）、宮城県大衡村でも事案が記録されている。</p>
      <h3>中部地方</h3>
      <p>中部地方では新潟県が7件と突出している。長岡市での住宅直近事案や糞痕跡のほか、小千谷市山谷PA付近（※25）や山谷地区（※26）で高速道路施設近傍での目撃・可能性情報が相次いだ。福井県では2件が計上され、おおい町名田庄久坂において幼獣1頭が目撃された（※27）。また長野県信濃町では親子のクマの目撃情報が寄せられ（※28）、富山県氷見市余川（※29）でも出没の可能性が報じられている。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県、神奈川県、栃木県で各1件が確認された。群馬県高崎市倉渕町三ノ倉では「はぐくみ農協入口」にて足跡の痕跡が発見された。栃木県日光市足尾町（※30）および神奈川県伊勢原市日向（※31）においても出没事案が記録されており、山間部から集落境界にかけての移動が示唆される。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では兵庫県で小野市新部町（※32）、丹波市青垣町小倉（※33）、朝来市和田山町寺谷（※34）の計3件、京都府で京都市左京区大原勝林院町（※35）および福知山市夜久野町畑（※36）の計3件が記録された。三重県大紀町大内山では集落際での映像記録が確認され、和歌山県高野町下筒香（※37）でも出没があった。中国地方では島根県益田市左ケ山町の市道多田角井線付近にて1頭が目撃されたほか（※38）、山口県萩市佐々並（※39）でも出没が確認されている。</p>
      <h2>リスク評価</h2>
      <p>本日の集計データから導かれる野生動物管理上のリスク要因は以下の通りである。</p>
      <ul>
        <li>人口圏・生活インフラへの接近：盛岡市や長岡市における住宅街・学校周辺への侵入、小千谷市山谷PA近傍での目撃など、人間活動が活発なインフラ周辺に個体が接近しており、見通しの悪い路地や早朝・薄暮時における鉢合わせリスクが高い。</li>
        <li>移動性および痕跡事案の多発：七戸町での道路横断、高崎市での農協入口の足跡、函館市での出没痕跡など、直接目撃に至らない潜在的な通過事案も顕在化している。</li>
        <li>複数頭・幼獣の出現：矢祭町での2頭目撃や長野県信濃町での親子グマ、福井県おおい町での幼獣目撃など、繁殖群や母子個体群の活動が散見され、母グマによる防衛行動に伴う突発的攻撃リスクに留意が必要である。</li>
      </ul>

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
          <dd>2026年9月13日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-14</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-14</dd>
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
