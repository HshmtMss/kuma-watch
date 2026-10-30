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
const DESCRIPTION = "2026年9月13日に全国で集計されたクマの出没事案は計81件に上り、北海道の14件や青森県の12件をはじめとする北日本を中心に広範な出没が確認された。住宅地や主要道路、農協施設など人為的生活圏への近接事案が多数報告されており、地域ごとの空間的特徴を踏まえた警戒と対策が求められる。";

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
  dateModified: "2026-10-31",
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
      "title": "2026年9月13日 岩手県盛岡市 高松四丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 岩手県盛岡市 高校近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5nemVQcVFtVkpIcUNpUjRBVi1WRXdlSEs1ZFg4OUpCQmxoQnZoOWU3TlNPUnpZYzk1TWExR25xRVNnYXJHcG5IUm1Dd25MRGhMQjZLcEExUk5zZUt3Q3B6bA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 岩手県盛岡市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9mNjJlMWt3SGRLUEx0NVgzc3dlZnNvQkt3R2ppampsR1VIcXJ2emRzcjU5bl9yNl9kSF8tQjkyN0RFbnNzTEN6bmV0ZEdMVUdXcUxfdzVKVW1MZ1RBV1E5LQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 新潟県長岡市 吉水の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 新潟県長岡市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE1RdmFVRjFfd2hGOHhKTFdIZFo2bmp1SzF5c3ZHMXdzaWdFT1ZqS2xzMk13TFVIcWwwMmk3R1Z3cXEzcTFH?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 青森県深浦町 西津軽郡深浦町舮作字下清滝195-2の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 新潟県小千谷市 山谷PAの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5IV3h1cjQ5Q3c4aXpqTkFtSmRwZGJCSUtHaGdlMnZUV0JwLVhNc09xZkF1d0dmVExxVjJ4T29TRlNKLXNmR29SOVZCYw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 島根県益田市 益田市左ヶ山町、市道多田角井線の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 群馬県高崎市 高崎市倉渕町三ノ倉303はぐくみ農協入口の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 北海道弟子屈町 熊牛原野２３線西の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNNjFvOG5rTUdfYXJJTS1mdmFVa2l0c1RzVzRNN3k1NElBUnl4YnlNbXZmbkhENkpHNk43ckNWb3FJNDVhNHQteVotc0VraU9BWktNTXJleGNqUmYya0ZPUkRUY2dtOElldTR2cko2VmtyQW1qMjN6V241VGptS3pkUXIyOHBackFsZDRYaW50RXpJbTRCYmNjQmpBRkI5bzByTWZYSlVfZkdhb2JYNHF4Mm1QbjRGYjdmaEpVMHdZbXVaSmpDTEVland3ZnJURkxicEVsS3BWc3Y2R3VMN09qcXdrWVA3YTJ6VjdHNFhOcjcwd9IBogFBVV95cUxQWjcyS1pCYTY1WFhZUVlsTEtCQVhIMVJXcUJHcjRqZ2NiOGtoc1M2WjVOeGxLQzVXZUZxbGx1WnhUV1g0WWd2SFVsVzhUYVVwa0FJcFhHdGpxeVIxeHg2Sk1XNUFHUUVtcTJ2VTI3WHk0Wm9WOE9tT3VJZjI3Rk4yVWkwbmVCRDJ5VTQ2TFFLV2R4M2JNWWI5Vl9YRkZoU2ZOYkE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 北海道根室市 酪陽の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOTXF0VVlhclAyRzNQVmpFTjNZYWJ4clZseXNYTHRVaWxRdlRBRkJ6cGtGM3VhTWhRcmw1N0I5ZjdWVUU0eWdhME1XbzE1T3NwUWVtWmVxMC03bGpJX2R2eXRET1pabTdWc2M1ZXByRVlmVlJIM0pLdmsyZ1Yxa2Q2cjU5UjVXaE5sWVRaY2pUa3BTT1RVTnY0MVRwb2dwc0FVY05GYmhvUTJUM0hJNTBn0gGiAUFVX3lxTE9XVjlycDJOdnBoUFM0ZmhRdFRkelVyRk1hOXNVdURPaHhXQkRMTzZhaXVYVEtVdl9BWVRiWVZObTgzUW10azhxeUZ2THhfbXVsZWhHd0RTX3hEZ0t2NG9sRXM0dFdFY3NaZ0xnS3M3QUJoZ2RsRFE0djh6NlVYUk9xWVQ0YUx5STRST19WOEo1Vm5BeVV2WjNrYnJXOGdGNWN5UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 北海道新ひだか町 静内御園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNNWNuV0drNWJ1NklKb2IzVllFamdIQTVpMklMUWJSQTIzRjdQTWJ4SldzUkc2VmhfaXVWSmluMjE4YjBPUUJ1aXFMY2U4eEVnVFN0N2g2YjlHeVU1T3JZT2psYlpOVHl1eG5uZmVPZTljUFhBYVRxVXhSWjYweWFVYTVmYjBraG5YNjVUandFTVlRZ0F4WXd1c0kzbmwzWGo3eV9jeUxrbjltRzFFZXFmdWYyUzFxLTJJUTV4bVp4bF9kSVpJMjVsSWQ3VzNCSDhIeUdXTzBIcjVPZU9za3N1YkJFdHF3bjN3Y01CZjhQQXZEQdIBogFBVV95cUxQdzlQUmJrSXhiUW41dUdPUzkzZnF2a19fT3hjOGNSbFFDeE1sTWlHdWo1eDVLSVVZWURBeF9RN1FIbjBmWEI4MVVGU19CRk5rcEp5NXc5OHNWenpPMzdvVWtZUFFzSVNLZ3NmOGhCVUQwT1JaeVhwX01GTFJaQ1JLQUpSZ0lHeUpHSU90ekVPeGRSTzRQS28yRlY0QWc5TlVmSHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 北海道千歳市 支寒内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMzRLRjJ3V21FdGMzQmtwYUJVdk9iZ0JoT2kyRC1QNnFfQUhYR3EwVGxFYnZ3WGl0ODRxdGxvNzJFVXpidkJuTFMxcEJIMzlWZ1VuMGExYUFiVUQ4QnZsM3RvdjhhcUwzbFlfaGlMRXBBX05JZktuODNHVjVjaENYcUpfVlBFSGpCdnpXaTV2dElVRkgzM0d3VGlBanHSAaIBQVVfeXFMTnpvWXBpUzdvT2NoNWF3bHZJeUtwV01aRndtZEhWUGM0NldCWlpGV2JzdENVeVBSYmE2LVVtWndFSHdzai1WblYwemtKdFl4VnRQVFFJc1hSRUZDMUxjTmlwWkUyRnd3Z2FLcGNCTW5rZElQYTkzQktxSmxsTm83enVUMVBVWjFSRksyRkdDTlhRQUFobjBqaTFkbndpRXdwZGJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 北海道函館市 高岱町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbzFFWDRaRXhUMGkza3Z6ajRscnFXbjk5U1hHYkhrdnlzc2ZzbWs2NjVyZjRpUkxqVFdGeFZvZ2hlZjZVWmFRWDhGY3AyQTJNaWh4b2kteTYyaGNyV0tDRTN3dFdpUkw3MWJ4N21pSmVVcjJCXzU2V0RGOEtzQTd4TDMtUDB6SFB0U0xRNHlzbzZBbFFkNHpuSUV5Zm9TWTc5TnNGZGFfaGxOWGttWUxTUXdDcU1KLWV4bkcyaThxdklueFctTUZGR2YtaTZTV0RPbEJ3VFpRQ0Z5cFBUeXpod1JXcXpGWmlKaURKblhzX2poUdIBogFBVV95cUxONWFqOWJKamZvczcyVzEtRXZzdG5UZE56NGhMYjM1RllJbGxVY2hmVWtlZzFCcmtwMVpMMG91Z1llSzloLTMtb3YyQy1Ic1A1bUdzUXA3eDl1VkxyaktvUnhFc0Jnc2Q2Ym9Sa3BJVjdTX0tXMHI3NU5XUGxydmFZVklyQ1hVSUJwS00tYW1YYjc3NHo3Ry1GQTV6TllVTnlySEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 青森県青森市 荒川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNc28ydXVlRE1vX2QxNU9lRmIxN2NFNzdFWXJ1WmcwVUxsSHl3eGR5bHhROU9KQmZCVVFUMWRjYnhrZ3hZV1dnU1V4YmhrM0U3SlVvS2JQbGJJNjBRTTNJQzJxS3ZuUWh5ajRjbmZDUVczUHdteVI0TVVlV2RIbXp6dGVRVXc2T0Y4LXhVMXJXTFpCRVNpSUNxTjdKd1bSAaIBQVVfeXFMTnA3WEJDc0FHZV94QXNFOUVvQlJzWXEzV1pNcWhVMmhzVm1GbTQwcFhsQ204ck1UTFlyVlhCc0RjRkpFdFJ5SE1vZW9YbThRay1ZbTBLaXNJYkhPR3JwSVliN0oyT0ZVUlNjZmRfMGIwZ2lNMnhQdU1zeG0ydjd2ZHFaSVVOTHhuT01mQjJsRkpvSzdvbWltNGVLczhNRnd1MEF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 青森県十和田市 相坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRWM4U2F1czdRTG44eE5KZ294Q3o5anF5aUZlNDN5akRfUXJVZEIwMk5pQmhTOUNFSDZHY1dJclZ4eEpoeTRiRHgtNUJmT05ja0x2VnFUTGstem0xUENKYVd5OFJCTnRpd1NzWmptRXBIOF9lcXI2bDlpYWtQTFhUV3VwNGlTMWNJUnctNmZYN21JY2ZPWWRVMVNOWkPSAaIBQVVfeXFMUElNVXdXWkRhMGlFTUVDdnJOZ3E3NmpDQkY4N3NFcWpZWDhsTHBUbkd0dXJVZ296NDRwY0J2ZFpmaDFRc240UGJCUElWNXJHUFhIR3lTd2tUTGR3d3hiOGltaWNIaW1CcEk1aW1IZE9uQW9raFZ2MVltcEpFTlI2WG5CUmdwS2JRZ2VrYlVENWdlUXJWSUt3eGc2QktSanNVbkR3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 青森県十和田市 穂並町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWTRDQW9OUlFOREF6RlphUEk1QUptNjh4V2FaYVlwNTVVa3QyNFk1YURoVHN5T1o3ZFBudUtlVXZfcUVwX3ZJaDVzQ1lLeHhtTVQ0eE40SHZGN3d6dnNUV2ZfOTFrR2JJVnFNUkVuZWx3ZXlMYnNlTWEzRzVGQTMxd25GUnNUcVdJbVlSb1VpLUpSTkxDUDRkamFGZDPSAaIBQVVfeXFMTjRfdDRLemRNX2Zrc2lhZFFldVVKQW5XeU5aLTdFNUcxWGQzSTRyTnlCRkFyQkFoNjBZWElmMWg4bVNlQ1N1U3JCZHdJUkUyWFA0d1J4TFp4ZVhaQ1A1X2FuZVZmLTdBYmNyR0lIVUJ4OEVtT29IMVhEWkZkb1hiOFkxRTY5Yk9VdTVwakNHcG00NzRpeXltOTZ4Z3pLcEFpem53?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 青森県七戸町 白岩の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPWnEtd3BYYUcwVEJjSXZZcHJhX09yc0RETWxZUFVMU1ZUOHVNSjA0YjZoUk56c2UxNDJ1NEtnWGV0akdvRDI1bi1fSlNULV95TllScFJpaTM5TUswMkQ4b0FLYXFyRjZjMzFWMTJtQUFnaTdRcndVWEh1SGxCOFc3eW96QS1tRTZlalE2aFd6ZHphOGFLRmVKRnRfX1pzc0Fxazg0Y2ZXNWR0TVlJamkyOEFzTjFBMnhHNlZOT093WVFDdndvX0FEcjNDT2hCYTBPOUJ6bVJuZDBxVk1IOHJkYXVBb04wUUFxM2hlMHhPeTZ5UdIBogFBVV95cUxNVXRPcy1uX3VpQ290eFQ4VVpHM0lUNklXdmgwNEdKZWVfSENxbWhPZ3dsM0kwQXlKVVg3ak5ieEZvMFJjRWd0OTM5WS1nLUQwU2l4RkdEM2VxejlNaWRRRWQ4dEpZdmk2SGJBWGs1MnRKUWhBUWxxWDZZbEpLck1mS3JFbmZabm5qR0hkemhzYnlUMTFwZzJYdlRJY1ExQVpXRFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 岩手県北上市 和賀町横川目１３地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUGdfVVNwZnpqVHpNTnZhZnc2VEN6bTIxQ2tMcWRCS2tva1ZXYk1uY1puZHNJOVVCUllja3RTRktpdE55ZUdEUENWSEJVWTg4TlBuR3pPVTVfaGZ1b3RsZGphNkVRYVJ1c2g5RE5tUkJUOHpTcGgycTZYc2pZcnRtSGJFRGZRTjFLdURDdXBqS3d6N2JWWTVLUUszUU_SAaIBQVVfeXFMT2NJUUNBdmNZSVptWnVYbDJySHd0cUVweDRhbXhwQW1ONjh0NUlyNUlPU1d6a2lfTjM0bEZhNjdGV3BuLV9VQnZBaFRBOTdfeWpPTmIwaW55LUJYb3p6RGowMW1zcHJ5RlhnYTNxakNJSGJLbldLNnBZV1E4dnd4WWlGSzFBR0JERjJmcHZxR3JyQ3pJWloxaGtjWjZoNzdNb29R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 岩手県花巻市 田力第２地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOX2VGbERVMmNqZmJ2Z3RST0JvWlBXMGM5enhRZ3BGek5pLTU2NnlKblVySUdaX3lhX3JOSXYtOW1pYzJIZk9YQkNOZ0J0WEpJdF9MVWJVTnVDWjF0Yk9YYTZiUjJKckZBRkdtcE12SXZOSVdnY3REbmlYVGdyWjVSYkh5Z3MxUnluelJybENfR01FTlNUYlVSQnhiR2ZmbkswMVNKRmlLcDB2UFJQR3dWVEQ4V3pCQXRVbFlIZmcwbzlMeVcweVpTYzBIWFd6M0R4THFKNElEWUpIYjJXcDBiVHVNaVlfUnliR2t3UWFQR1lBQdIBogFBVV95cUxQUTA4allnNHl6dEhGUG13SmZNSHR1RnZYbF9KVThfUEZDXzBWTW1aQl9BTzBMLXdzRXlWRjVOQUhmbk5lLVY0b2w0OE90Tkp3Z2lqd1dWTmNGaVl6OHVGdjNMRTNhaDYtQlhidWJ2ZndfMUR0OW9WX1ZvNi1tVGpsbjNBR1IzTEcyd211OENMX2dkNWktMDBUVWdlaWtySGpCd3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 秋田県秋田市 雄和平尾鳥大巻の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbU5pZTk4aUFTRy1Cb2VXVnhaQldTb1BIQ1dkS0VTS2poTC1UU2hNWGFQUmY2b3NkQ1RnMUdqc2M3U1h1bUZpWGhsTnNCX29uVGY1TjV0b0FXVjdiWkNRUDhrUTJKT3VRT2J4T0RWdDdrclUwQnJqd0Y0LTRXOU5neXV3YjM1Q2pWTmVkcmlHMWxrclBXdUhBek5tWDdzTmtTTjljT1BoenRMV2NiZHhzM3Y3YVk5c1BVTWtNRE9pQlFKSWE4Z0FMdUVkS1dFQmR4SWdITTRZODFNTzBZdXo0NHpUeXljOFdYZjhQajBhdF93UdIBogFBVV95cUxOcmtBdmgxUWIwMXV2WkkzWjU4elRwYW95ZFJkLUdRSGxHM2p1UzRDWC11Tl90TnVfNWR2OHJlWjEyZHZhME8taFNwWDVRU0dKdXRKSDR3ckxBa0JCX001RlE3YmFkcTYzX3d2VVhGbzgya2JzUVVWTFZiNHVQYWJkdGhtZ0FwcGZ4RU01bHlFaUNhRU1jMzZWUm9zQ2FsTnRRX3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 秋田県秋田市 下北手宝川潤ケ崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeVBCUXlKQWc3QTJJbVY4WmZfWHB3c3FOODZTNHprTUNUdkt0Wk9panhRc2ZRZFdfV1RRTThLcXBxaWZjamtkOTBRdEktVU5aTlBXWTBaNE03LUhjSGpuMFg1VXhNZm95anpCOFA3MXRtcEZ3M2lNM3FOYTV5RTlxS2FQSkROWHNnMWdfNjluVk8zbEhzVGxjOEJNYTTSAaIBQVVfeXFMTllLUGpmZVJkUGw3Ny1QM2JWSEd2OXZtUFpnek1XVzVWREpnMTdxdnZrcG5aNGFWeTlkbE4yVWdUOWpNbkd4OHZMQ1dIOFZDRzBkeVdVRHAtVW5PQ3EzS3dtenE0bXBsclNGN3k3akxmb3Zvb1M2UDluU1Z4ZW5ac3pYZTN2ZGVmdE1yQ0RnVWFsSXBmV1IwWEVWMFNOS3lnOGd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 秋田県由利本荘市 岩城道川田中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUElLazMwZHNrQVRxUkt4SmdENUtXQ1MxUmhUck1CSmsweGE0d1BqTUFTdWhDdnJWeHRNWXlwT29YT3NYdGxaZF9ISmJHeGNDNnBhVW9xSS1EUU0yemlsNXBkN0NXMGVFbGlMdTFSZzlOeWlhWVZnTGl6R3lDVG5haUxXUDNGUHlGX3hDbkQxOFFieXpNb2pQcHAtZU3SAaIBQVVfeXFMTThRVWNEV0xpdVh2aE1fV3kzV1lyd2dkczRLUlhpU0dwaUNNTGJJaEFPQXdtVm9rVV9pMnNFNWxqOXRwWG0yNXpTd094b0l3VGFvRHpWSENncVUyUm1naERPOUNEY0NBbTc0LUJyUVlGNHZ1TVhrbkFaTEdvVVpDR3lDU3JqNHJDN2VCS3o5amVaV2xxSXNpdWVob2otMko3dGFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 秋田県由利本荘市 水林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbDlOaGpOeWp4bUlocWp6bWFQejV6Ykpab284emVYU1M5MjJkUV9iU0hTeGZCS2U0QXY0MWZvWml2aUVTSVNUemtwamVXc2pySU40djVCZk9KMVAyRzQtNDZidTVEWmdoc2M1cWc3RzVtbHl4MUJOOU1hRk5PXzVzcFlKbk15X0dLazdmT0ZqR3lBZ1U1bDhVdnh0TWLSAaIBQVVfeXFMTjJQLW5DRU1sY3NUNnRJc3N4cm5FU3R0R2JCTkxoeGpqOGpiWWprSWdLLXdPaWJ1RVRJSlFrZnI2X0tJRzNzbnl0bHNGRHJ2UjRQRUN4N2QtTFRfeF9OaVlTSkZ2V28zdFdNeG8tWWdVRjBidmlhTXBNQlVvRE13RHQxRDJoaVZmQS1aWmdMMWFJSFYwX3VWT3pRVjdQUlFDbndR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 秋田県横手市 十文字町佐賀会古川添の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPUkdFb2k3aVZvSEZFZG9EYmY2Q2NFZFM3M3c4U2lldERiNm43OEgyNjVFSnF1S2FCNF9jdVA3SG0tbjVXQkhvdlktTHAyVmo5dVNQTmUzSTlDa2lvUmd3bFcwZ3hGcGV4MlpLel92b24wNURGYzVYSFgxWjNwMVBPcV9xdTlhbnZsb3AwX2RsRURNSEZVYWI4aGZwX3dEZENwOTlPY0RNSDIyZGw4ME5yN2htZl8tVnRnZGtVbjdORlZrZ1ozVXpnSVhnSDNyV0FBeXNiUHFIU0k5d0w5SWs4cEtTOGM0QnNVSmpvUFE1WGg0UdIBogFBVV95cUxOcHZWNjJyUVRVN3VxaVppWmk1cG45TUQxbnlTckxUQXNTTmZRcXhmQVd1bVN4YmlsV1VNTms1VkMzSTZiUzcxR3h5X3dEbkhBWTBGRmg5eEZKTThTWHVCNzlHcWpOTXJpb0hsVFRoSHlGOU0zNjNFemc1UHdnLVUyd2NrOEdOTGR2bS10SjBUWVRydC11RE9HUWpKbk41dHpMOGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 福島県檜枝岐村 南会津郡檜枝岐村黒岩山の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 福島県檜枝岐村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9RWnAwdkltRktNVjZ4YkpILXBvWWZBaUdhMVVvYkVlb0xUY2RPWkVzSHpoQUFPTjY1eHFuaFpqb0swdHJvckpCS3VEV2NyZlE4M3A0d3ZJUTBpX296TndMQjloM0lUaWRQQVMwTzM3V01GbjBTcU1sRkVrZzNjcms?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 福島県矢祭町 東白川郡矢祭町大字小田川字春田の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 福島県矢祭町 矢祭町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5ucGtVR2MtTEFHOEstVmJRUVV2Y24xOU52TXhVeVVUTXlYM0VadlgwVEZSMDc0c1ByT3RZUjQ1TFA2bjMzbG5wTHpXcXFIdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 福島県矢祭町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5jSFJMLThpQTA0RmhMZXpXeXlydnNIQndDSm1CTmZ0blhIeGlSTjBaenE1alA2enJ6ZDBVd00zQ1pUOUxsd0hMUDgzaGx6alpIYnBrcE9VdUxhS3UwUjd4aU1oUDVIdnZMa0treTBGM1JnLUxYcGwyYkVrb05TTFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 宮城県大衡村の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 宮城県村田町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 山形県河北町 谷地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOYVhJZS1FV1h6eDhCUk1JNF9zb2hkdFZiTTFQaWFBbFZmN1JjaDFvazNrSUJsTlFkMTY4cXNwNGFyZDZyUE9UZFRJemRUMG5PcUhXbG40R1JSMEdnV2YzaUFkSVd4dnVCWWRUdlVaMms1RmZLYnBPXzFhMDc0blZORkNqR0RWRnpsbUt4Q281TVlZWTJjMi12dTUxV0fSAaIBQVVfeXFMTzBvS1lzNXVUX2h0MDJuZnZkVTZLT2dUS1BPV0FvNzZNOGlabUJxRVJSbHFtZDZGSlluaVBrcjAzWmFhM0xHdS11MWxiR050aWRfeFZ6ek4yTWNUcWNqWGRobWgxTmtOZ2dqYTJKMUVzeDJIUUEzeUdzdHFIVGtvZmRNc1Y1NldIQ2d5WHViSlhULWlPa0tRYXdVZmRZbVlzVTVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 埼玉県毛呂山町 阿諏訪・毛呂本郷の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 栃木県日光市 足尾町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQTXhNOFE3cFNOUVhFMVRjTGt2RG9RUXRoWXlQYXBhWGFtb1hkLXRTeG85M3ZMQXRwX1l2UER5MU5CeDlNVWZVWk5EOHNIbUhoRDAzdDZNek0wMjM4V2RYYnFoXzgzM292UklxNTdFNDNkSUVmR1NLNElHeFRRcV8xR1hWdU5DLXRvMzg2NGVMc3FPMmg1TjFpWnJDY2tnZlNxTFpxaklCMTl1ZjM1QmNJTFAwVkcycFMxRlVCeEJuUmphcjdFVnVuOE82QjZHSjg2NnJNR2oySy1nRC1LdHg2ZzVsR0twZjdIbVBCVDVwSEZiUdIBogFBVV95cUxQbXVEV0FUeU4xeVFVZ19FY2hqV0k4RGN6MEZJUXpZUmpWbkVVaS1PeWVBWkltQThGU0NfLVNJUTByUllST3BhOUJnZnZWNm9pYlZBRjVWTnZMU2FCTm5XNnprX1Rxek81OU4xUTMwSFh4YVFuSm5CdFMwcmt6THdVTXNXcm5OMFJtYjl4Vlh2bXdwUVhzcVpSZUJ1eEVTZk85Z3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 神奈川県伊勢原市 日向の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPYXBwak12S1A2ZnRkaGxKSXJkU1M2WkVqYTBMNDZLTE41UENUd0l3S1U5UTUzRjVadXlIRHg1eW9vVl9OWGhWaDRYd1k3Nzd4NFdrQnhVSk1QWm5uWXZsc1VydXZ4ZTgzR25iRGhDTGdJNHhyUFpyS1dIYTg4YzU5aUh5aXBJOHZLXzljRHlBWGJHYUZ0dHhFSUFmbGp4RGJOSWJaRzFkLVpqTzA2OFFlbGNHVlI3c2gwYlVwZHBOVllpRmk5UzJZTFZZOXpOaFJEcURUT0VJMDVJY2l4X19pN2tYdkt3ckdudnZrUEFIaFJDZ9IBogFBVV95cUxORTQxczI1TUc0dWlNSlc4ZXRsSFlEUzE1Z0JhYmtDNFNlNVVSaW5uWG1XZnFpaWxvNHVHQXl1OEgxQXp2SWt6S2ZfZmQ0eERiNEV5VmRqQUVaUW1JWTNqZ2hHUXBENnNiQU84RmlMWnZhcWJRTmc1RUdKQlprMTdnZjVPQTZSSTFFb2xwaVNXbnFjc3RpN2otNlhjaVJJSXRpOFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 新潟県小千谷市 山谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTkV4UndNXzd3MHVGUEY4M3VsYVdkbnc0cDRDWG80Rk9ZV01ZbzFHdXNOWGpBRTZhWlNXb084RHBWMVVFQnVHY01hQWpxSWVRZVBXbG1CYndjZ3FORkZ2Sm1WUTVSM1FwaWN2LVh2OTYyQTNReVZyZjBqWUNOTDgyZkIzU1M5WUVkU1BXX2JXWjBrb1l5UVFkbk95MHXSAaIBQVVfeXFMTktjSF9HOTBzdG5KcldTRFRqMUl3bmt0Y09hYWhSUXkzZkFQNEo4Qk42RDdmWmlEVTRkcm9DUEFDb2lPcFFRWE5uN2VNalpZYmQ4czdiSTNVMUN3MzdtNmxDWmlueVZpOVJYbE9TVkhrdjhLX3FNU1NhRXRyRmVENDAtVG1NekxGTmppeGhjdWFoeVNQZU5rWHUxQ01aYVVVa1hn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 新潟県小千谷市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5TMWpxWmNGMmgtSGpQMk9qX05Icnd4XzFWSUFTN3BITFBzcUQ0WkV1QzZsSHVrQ3h2Szk1TUg5NS1mcW1DVThHWGVma2lLNDkwc0E4c09hQy05aVpnZmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 富山県氷見市 余川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMzFCN09VOVF1WjlTY1dBRV9xQ1BRMlZlX1dXVFFhc2c5RjhteWF5YzE5QkVxOHZ5aXZLWi1wZnNFVzk3eEtqbGpBdUNNcDNqNENOQndNalVnVGk0QlE2X0E1TS16QmUzb05ZOGZfaHJOWUlDdFhYdmJIdmF0SmFaY0Q2MG1rZFF4ZWhGWmlZS3V1R2UtdEpUSHlMcTLSAaIBQVVfeXFMT1hPd0xmR1FkdVhncmhaZWJHczNaMW9XMllZb244R1FKUmYycXZJMG5uQnY5cmxZUVZNNHJJNnlKSF92UkUyMmM3U1R0QU0xM2NYcnVhb0xpWjNUc0pzM2hYT21sTDFzQ1hSYXpOSGZYYmlSVi1pUVA2TFhnbDRwRXNhTnI3T1RBbUs5Y0FQZ1RCUTk5b3BOeWpkdkh1QmVXUy13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 福井県おおい町 名田庄久坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbFgyQ3gxcVFvN2p0ZXFZMHlBSkxpOEtuRG9lYnlPN2NVSGp0djFvQ2JVNGVhdElvOHpBM2sxcHY2cUlEU29IWlBlTjZQM0tOblRsa3Q4YjA5SmlkM2pZSVhIeVFwSUMzU2JpbDZoZDNrTWlMZFF5cUpFZzFXRTY3LVJrdUdHT1owZEJjOFA0NDloaHNFd21BRnVuODFmR3pXNnJrYld5dVRFajN5aG1sZ2phM2NMWmlMM3QxbVhhTHlzZUY3bVdIdnhOYmlWX1JFcnJFVFAwRGo5MzhPU3FQWFYyNVdfUVZ2bUJiczhtbWdFZ9IBogFBVV95cUxOeTM0YVoxSGozcTRmUmlJUjVGN3R6clRCR3hETllCV293MzdqbDI2NWJ4dnZaVThocS1LQ2Y1aGtsc2NVem80eDliWEt1RFFBZlh3ckItYmc5TWJJRWMwWFRXbmlMeUpwbDQ1OVljb3hhYUd4SHZJSUU4bE1UTDZLbFgzcVZMOUZjdnJ0TmotRkFsLVVsYzV5Rng3YlRMRkt1aGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 長野県信濃町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1aTFlrajF3bzJfX0dQNkRoWGdRWmQwczkxWGszRG9faEJKSmVkMWp1aGVXV1U1aktRMURobVhzeDhfeWU4dUR0Z0dKNXQxdEF6cW1QZ2F5bmVNUzZYZTF2UlpVM1QtU1NXZ1d1QmZCeHg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 岐阜県郡上市 白鳥町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 岐阜県白川町 河岐の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 静岡県御殿場市 印野の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 静岡県御殿場市 演習場内畑岡付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 三重県大紀町 大紀町大内山（集落際）の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 兵庫県小野市 新部町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPQmpmc041Sm43d0dTRVExa0IxdzVZaWFyeWV0M2lSODhqTW15OGpvN3Y0MmxOZ3o2S2lRaERsNEJQdmE4OE9EOHZnS2JaT0NveTgtZE1TT3UyZVFhTmNtZjR4dnN1SU1SMkZlVWc2b3dUUlNEU2xRc1EydnhRMUdZQUhIendIY3FrQkhyVDJXUlA1ZklkZVIwVjRJZEVUc1NnRHfSAaIBQVVfeXFMT0JqZnNONUpuN3dHU0VRMWtCMXc1WWlhcnlldDNpUjg4ak1teThqbzd2NDJsTmd6NktpUWhEbDRCUHZhODhPRDh2Z0tiWk9Db3k4LWRNU091MmVRYU5jbWY0eHZzdUlNUjJGZVVnNm93VFJTRFNsUXNRMnZ4UTFHWUFISHp3SGNxa0JIclQyV1JQNWZJZGVSMFY0SWRFVHNTZ0R3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 兵庫県丹波市 青垣町小倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQQUF3RUdHb0R1WkExTjZZTTR4OVRMczZua0VTUVZ2TmdEb1FaSExMdGtuaFRIbTFsVG9jM2t4bU5XcWFEbGFDWHdsenhHV0lyc01wWmZ2ZGY4Z2dRYzNFTl9OUkFnWG1RSGhkbi1HN0NpTGlENVR2VU82MXQyc2xqYnFsa2k5Y3o3YWhzakxKRkFreVZ4SFZpa1dYTTA4WEo2VEHSAaIBQVVfeXFMUEFBd0VHR29EdVpBMU42WU00eDlUTHM2bmtFU1FWdk5nRG9RWkhMTHRrbmhUSG0xbFRvYzNreG1OV3FhRGxhQ1h3bHp4R1dJcnNNcFpmdmRmOGdnUWMzRU5fTlJBZ1htUUhoZG4tRzdDaUxpRDVUdlVPNjF0MnNsamJxbGtpOWN6N2Foc2pMSkZBa3lWeEhWaWtXWE0wOFhKNlRB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 兵庫県朝来市 和田山町寺谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQYjFVVWdPdUI1N0ljM3RIbkRVVGlQSEo4elZoU1ZQYWdoUDlCSlJpMGNpMzZpd2R4a29ZWnIyVng1N1ZaUmEwM2NmWWxYdksyRGo5a3FraVpkZVJzTVlUR2s5MWRhamlXUVdTb25oVGMwQ1cxZzRyU0JTX2tyUGoycl9jenIwM1NlcUYzbDJGak96OVJxUjRmUWZoVERtUU5lZFc4MzdLdGNCSlAyV251V1NSMXI3WkZfeTBPTVJNS3VfWGktalA3cWxFZU5GMDNnNFZ1S3BpXy1PRW5sREJ1YzZOZWNuTVdlSXp1Sm8yYlVad9IBogFBVV95cUxQaTdpZ21LTzdrUEhSLVdYbVdhcWNrMzRmVEZ1WGpkZjc0R3hkM2FVOVVnREZ5ekpFLWU0M3paSXhXdW9NN0pLVVRiTVdTU0FVeTRvUnFLT3U3RVFaQ0FFNjBtMXJSWkEzcXV1dTROU3JiZ3N5MGlRVjhzRzdOUTFlWWdsQ2JNTWpwWERWR3hJMzkzNjJmRTJqZFJjMmtfWk9ac3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 京都府京都市 左京区大原勝林院町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNZWU2bFpDanB5ci1KVlBhZ01TZ0V6MFJ1d1dqemZlMkxjckZaYmNnVjVBSWE4NkVjU0JmeW95YmF5aVVTZ3JzLXowQmdyeVZoSGtFSEJhYTNTal9yVm1SaXhJVkhPSDI2a043R21xUi1vUnBHWVJLaTQwWTY0NkYtbVJNVnVDaWs5ZEMyeVdQaGFpNThRZktCVUlZUDdSalpMSVHSAaIBQVVfeXFMTWVlNmxaQ2pweXItSlZQYWdNU2dFejBSdXdXanpmZTJMY3JGWmJjZ1Y1QUlhODZFY1NCZnlveWJheWlVU2dycy16MEJncnlWaEhrRUhCYWEzU2pfclZtUml4SVZIT0gyNmtON0dtcVItb1JwR1lSS2k0MFk2NDZGLW1STVZ1Q2lrOWRDMnlXUGhhaTU4UWZLQlVJWVA3UmpaTElR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 京都府京都市 大原勝林院町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdXZhOXlCRUlrVkwzMzZ0d1hGZ3pHaHhtT1RxbzU3QmVsVWhYVHFVdWpBcHZfX2YweFpDMml0bEpLeUItRk5lS2R5MlZDcVM2dU9ZSl92eW1zMDUyM09LQWpPQ3Y2bWdVbGNwcHQtZXVkYmszMXJPT1lHa2NUM3Vnemh1WjU0UHVvNV84V1MwdTdBOXFzbjRYck56TC3SAaIBQVVfeXFMTWVlNmxaQ2pweXItSlZQYWdNU2dFejBSdXdXanpmZTJMY3JGWmJjZ1Y1QUlhODZFY1NCZnlveWJheWlVU2dycy16MEJncnlWaEhrRUhCYWEzU2pfclZtUml4SVZIT0gyNmtON0dtcVItb1JwR1lSS2k0MFk2NDZGLW1STVZ1Q2lrOWRDMnlXUGhhaTU4UWZLQlVJWVA3UmpaTElR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 京都府福知山市 夜久野町畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUXlHWkNadDQydEZsUHRHVGFMNjNycW01bmRUWnlrVmtGY245QkJwcnFlZmNJZFBUaklpVEFnbktwYnprTXFaM04xTEpzM0kwQjZhNXVmeEV4MmJaUWdmcWVPQW5XNXotMEFqeU9tNjMtMTlpYXFWaVV3eVREcGh3YUxXdFZGQ0N6NWJXemg1aFVuZ0dYVDA2dl91NGjSAaIBQVVfeXFMUFk4ZXE0RXViV05ZZ1JOT1JlMDQybVpQbWp5RmVJUFBMRTJaSDFxRk5vYU9VTDdWNHVQU3JiNzZ6bGh5dDVJRmwyY3cwNjZ6dmdHZHpESTlxQU4wQ3JYS0VVRVBvS3ZfNUhUWlZhRjZhaXAxUjVuc25BcWJERm5VTmhxb04yUVc4TmVydmtpUjhXUHJ1blZ1T1dOby1RUG5MVHNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 和歌山県高野町 下筒香の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSUpCR2FJMEY1SkpyenhBYVF3bldZRkRBN3BwNms1MVBUZVlhQ2EybGZQNUZTcVRwT1IyYVBVc0ZsUmhOMjVOWHhpWkp2LVUxcGNEZ1BQbnI1bGdqU2VPRU1ZMmhLaXpiVHRoWlc1dTN3R2pJNzJrZEZqOGVSWXFWS1ZyZF9keHJVdFh3b1VSNEVQVGhBZFpIbWZvWE_SAaIBQVVfeXFMUENmTWk0ZWJKcWk0OWpTWXFkWmJNTklVNzF1dE5RNjRkNl9pU2hvLVNnTUNGenREelpLX0d3TF9SWjhtZ1c2NFZBckY1el9TX2lnakFWZ3M3Tktqd1dQRjFsbjFwMEZaM1RyWExqa0VBZk5MWlh0eUVmS0RKUkpoNWxvcW5jVWVaWWI4cGlQTVRYNkRXYVhTajJldXNXbGxjcTdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 山口県山口市 徳地柚木の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 山口県萩市 大字佐々並の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月13日 山口県萩市 佐々並の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOY2VUS3I3ei1RZDFQbXRrZk5oRlhsZ0JFV2hqM2pGOV9HUUNaTEJUMTljaTlKbnRaS0JENm1PSW1lNllWWEUtTmY1UHJ6ZHd6UEwwZUF5dHplRXZQUGdsV1h0SVRsakRzQ01FQzFwdE1FLWN0NW9ZeW1aMVZkTF9JaXQ5WlhpZkF5bjNjRUNJSUlNbXlXeDl5RVFSZUbSAaIBQVVfeXFMTm5IclVQb2FydlRGU05fZmt2Z0VyVWxDcHpRaGJ2V195dk12anQzdUxYX0RuYVh0WFlVNGxFUjhReXc5UVN4Q3Y0NVRFa2o3eXg3d0FpLXc1eXl3Z1lxZjMwYjRuYVZlelRhQ2wtQmZNSVdKZmJkVHV1emxJYlUwNmt0ZVJZRnpRSmVzbEF6VGRvVVVZMU5sSFhNUWxZUk5Zcnh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 島根県益田市 左ケ山町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVElUSmxrV3ljQnViVkJaYUpPWEFUME1pWXpUMTg3amI2azNOak5IZ29iN2NETTZXajJybmloaXEzZ29fb212OHdRQnlXVndZZWpJRVZXQ1RNUTVBS2ttbGFTNjJpZjJMci16VDVJUlZWZHZmTFNXcHc4Snd5QXhNdVdmd215djVTbzhhYWpmSlFJRVhRbmIzSmRBYW7SAaIBQVVfeXFMTzN2b0N3a1JNWmhkZko1WmFtWWxMMzU5X0lWajNlRzk5aUxqYTRUNkZYcldWV05jdmJObDBiczhpZzg5bHVkSHcxUm1sQzB1VHZtbkJJQmY5bkJndFkxSTRvamE2WUpZVEV2S3VMVEhWam1OT0ctY05JdnhERXZtVktudTdwaGk4QlhBNUo5Vnk4ZTZUaXMzbGhlMmVQTVFZMExR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月13日 鳥取県日野郡江府町 下蚊屋の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":14},{"pref":"青森県","count":12},{"pref":"岩手県","count":8},{"pref":"新潟県","count":7},{"pref":"秋田県","count":7},{"pref":"福島県","count":5},{"pref":"山口県","count":3},{"pref":"兵庫県","count":3},{"pref":"京都府","count":3},{"pref":"宮城県","count":2},{"pref":"静岡県","count":2},{"pref":"島根県","count":2},{"pref":"岐阜県","count":2},{"pref":"群馬県","count":1},{"pref":"三重県","count":1},{"pref":"鳥取県","count":1},{"pref":"埼玉県","count":1},{"pref":"神奈川県","count":1},{"pref":"福井県","count":1},{"pref":"富山県","count":1},{"pref":"長野県","count":1},{"pref":"山形県","count":1},{"pref":"栃木県","count":1},{"pref":"和歌山県","count":1}];

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
        total={81}
        periodLabel={"2026年9月13日"}
      />

      <h2>主要事案および生活圏への近接動向</h2>
      <p>2026年9月13日の集計において、人身被害に関する直接の記録は確認されていないものの、人間の居住圏や交通動線に極めて近接した出没が各地で相次いだ。岩手県盛岡市高松四丁目では、住宅地内においてクマ1頭が目撃され、北へ移動していく様子が確認された（※1）。また同市では、高校近くの住宅地でクマが目撃された事例（※2）や、同じく住宅地での目撃事例（※3）がそれぞれ報じられている。さらに新潟県長岡市吉水では住宅付近においてクマの糞の痕跡が発見されたほか（※4）、同市内において民家直近への出没も記録された（※5）。</p>
      <p>道路網や公共的施設への接近も顕著である。青森県深浦町舮作字下清滝では、舮作灯台付近を走行中の車両から、町道を横断する体長約1.5メートルのクマ1頭が目撃された（※6）。新潟県小千谷市では高速道路施設である山谷PA付近での目撃情報が報じられた（※7）。島根県益田市左ヶ山町では、市道多田角井線のバス停付近においてクマ1頭の出没が確認された（※8）。群馬県高崎市倉渕町三ノ倉では、農協入口付近で足跡が確認されている（※9）。これらの事例は、人間が日常的に利用する生活圏や交通インフラとクマの行動域が直接交差している実態を示している。</p>
      <h2>地域別の出没状況と空間分布</h2>
      <h3>北海道地方</h3>
      <p>北海道内では全国最多となる計14件の事案が集計された。弟子屈町熊牛原野23線西（※10）や根室市酪陽（※11）、新ひだか町静内御園（※12）、千歳市支寒内（※13）など道内各地で出没が記録された。また函館市高岱町ではクマの出没痕跡が確認されている（※14）。広域にわたる出没の広がりが見られ、原野から市街近郊に至る多様な環境で事案が発生している。</p>
      <h3>東北地方</h3>
      <p>東北地方では、青森県12件、岩手県8件、秋田県7件、福島県5件、宮城県2件が記録され、北海道に次ぐ高い頻度を示した。青森県では深浦町の町道横断事案（※6）に加え、青森市荒川（※15）、十和田市相坂（※16）、十和田市穂並町（※17）、七戸町白岩（※18）で出没が確認された。</p>
      <p>岩手県では盛岡市内の住宅地事案（※2・3・1）のほか、北上市和賀町横川目13地割（※19）や花巻市田力第2地割（※20）で出没が記録された。秋田県では秋田市雄和平尾鳥大巻（※21）、秋田市下北手宝川潤ケ崎（※22）、由利本荘市岩城道川田中（※23）、由利本荘市水林（※24）で出没があったほか、横手市十文字町佐賀会古川添では出没の可能性が報じられた（※25）。</p>
      <p>福島県では、檜枝岐村黒岩山の山林において車両運転中に体長約1メートルのクマ1頭が目撃され（※26）、檜枝岐村での目撃としても報じられた（※27）。また矢祭町大字小田川字春田の河川敷では散歩中に体長約0.5メートルの熊と思われる動物2頭が目撃され（※28）、矢祭町内における熊らしき動物2頭の目撃情報として複数報じられている（※29・30）。宮城県内では大衡村（※31）および村田町（※32）において出没が記録され、山形県河北町谷地では出没の可能性が報じられた（※33）。</p>
      <h3>関東地方</h3>
      <p>関東地方においては複数県で点在的な出没が確認された。群馬県高崎市倉渕町三ノ倉の農協入口付近における足跡の確認（※9）のほか、埼玉県毛呂山町阿諏訪および毛呂本郷では熊のような動物の糞が目撃された（※34）。また栃木県日光市足尾町で出没が報告され（※35）、神奈川県伊勢原市日向では出没の可能性が報じられた（※36）。山間部のみならず、農業施設や集落境界部での痕跡確認が特徴的である。</p>
      <h3>中部地方</h3>
      <p>中部地方では新潟県で7件が記録された。長岡市での住宅付近の糞痕跡（※4）や民家直近への出没（※5）、小千谷市での山谷PA付近の目撃（※7）、山谷での出没の可能性（※37）、小千谷市内での目撃情報（※38）が報告されている。富山県氷見市余川ではクマ出没の可能性が報じられた（※39）。福井県おおい町名田庄久坂でも出没が報じられている（※40）。長野県信濃町では熊の親子の目撃情報があったと報じられた（※41）。岐阜県では郡上市白鳥町の道路において朝方に目撃されたほか（※42）、白川町河岐の山林において昼過ぎに出没が確認された（※43）。静岡県御殿場市では印野（※44）や演習場内畑岡付近（※45）で目撃され、三重県大紀町大内山の集落際では映像等による記録がなされた（※46）。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では兵庫県と京都府で各3件が記録された。兵庫県では小野市新部町で出没の可能性が報じられたほか（※47）、丹波市青垣町小倉（※48）および朝来市和田山町寺谷（※49）で出没が確認された。京都府では京都市左京区大原勝林院町でクマの出没が複数記録されたほか（※50・51）、福知山市夜久野町畑でも出没が確認された（※52）。また和歌山県高野町下筒香においても出没が報告されている（※53）。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県で3件が記録された。山口市徳地柚木では未明にカメラにクマが映っているのが発見され（※54）、萩市大字佐々並では道路を横断するクマの目撃（※55）や萩市佐々並での出没（※56）が報告された。島根県益田市左ヶ山町では午前7時半ごろに市道多田角井線を進んだ付近で1頭が目撃されたほか（※8）、同町内での出没が報じられている（※57）。鳥取県では日野郡江府町下蚊屋において事案が記録された（※58）。なお四国地方および九州地方における事案の記録は本データ内には存在しない。</p>
      <h2>上位都道府県の集計</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">順位</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地域・事案特徴</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">14件</td><td className="px-3 py-2 text-xs">千歳市、弟子屈町、根室市、新ひだか町、函館市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">12件</td><td className="px-3 py-2 text-xs">深浦町の町道横断、青森市、十和田市、七戸町など</td></tr>
            <tr><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">盛岡市住宅地内、北上市、花巻市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">長岡市民家直近や糞痕跡、小千谷市山谷PA付近など</td></tr>
            <tr><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">秋田市、由利本荘市、横手市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">矢祭町河川敷の2頭、檜枝岐村山林の1頭など</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">山口市のカメラ記録、萩市の道路横断など</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">丹波市、朝来市、小野市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">京都市左京区大原勝林院町、福知山市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">10</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">大衡村、村田町</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>季節要因および行動特性の観点から見ると、9月中旬は秋期に向けた活動の活発化がうかがえる時期にあたる。本日の記録では、長野県信濃町において親子の目撃情報が報じられた事例（※41）や、福島県矢祭町において体長約0.5メートルの動物2頭が目撃された事例（※28）が存在し、複数頭での行動や幼獣を伴う移動が確認されている。さらに青森県深浦町では体長約1.5メートルの成獣とみられる個体（※6）、福島県檜枝岐村では体長約1メートルの個体（※26）が目撃されており、多様な個体群が活動している。</p>
      <p>人口圏への接近度については、盛岡市高松四丁目（※1）や新潟県長岡市（※5）のように住宅地内部や民家直近へ直接進入している事案が確認された。また新潟県長岡市吉水（※4）や埼玉県毛呂山町（※34）のように住宅付近や集落付近で糞が確認された事例、群馬県高崎市の農協施設入口での足跡確認（※9）、三重県大紀町の集落際での撮影（※46）など、目撃に至らずとも生活圏境界にクマが侵入している痕跡事案が複数存在する。さらに道路横断（※55・6）やPA近接（※7）、バス停周辺の市道（※8）など交通空間への進出も複数生じており、偶発的な遭遇事故への警戒が不可欠である。</p>

      <p className="text-sm text-stone-500">2026 年 10 月 31 日 改訂：同じ出没の重複を束ね、その後に集まった記録も含めて、本文を作り直しました。件数は公開時と異なることがあります。</p>

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
          <dd>2026年9月13日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-14</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-31</dd>
          <dt className="text-stone-500">データ範囲</dt>
          <dd>くまウォッチ sightings.json (内部集計データのみ)</dd>
        </dl>
        <p className="mt-3 text-xs text-stone-600">
          本記事は、くまウォッチが収集した出没データを LLM が分析・文章化した内容を、獣医工学ラボの獣医師が確認・編集の上で公開しています。事実関係に誤りを発見された場合は{" "}
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
