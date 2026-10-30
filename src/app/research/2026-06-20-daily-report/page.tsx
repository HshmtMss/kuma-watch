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
const DESCRIPTION = "2026年6月20日における全国のクマ出没は計177件が確認された。新潟県南魚沼市において登山者への人身被害が確認されたほか、富山県内では海岸沿い等で駆除が複数実施され、東北地方を中心に住宅地や教育施設周辺への出没が記録された。";

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
      "title": "2026年6月20日 新潟県南魚沼市 山の中の出没情報",
      "url": "http://www3.nhk.or.jp/news/html/20260620/k10015155481000.html",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 新潟県南魚沼市 山中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1iamhZRGJTV25ydGRtdzVsSzBGTkx2X3dudUc0UTNEeUpYb3hQaGVzLXl5Z19OMlQ1R29RU1BnaDVUd2lkMEVlNUw3SnhybmtDMkprNlpDUEI4Vl9VZVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 新潟県南魚沼市 中ノ岳から丹後山への縦走路の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 富山県朝日町 海岸沿いの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE16UlFjZV8zYlZNQ3Uxc2R0bzhuSm9xR2xrY3lVaTJYZDBnRnFXX1o4aXZCeHJzVlgzeTF2TkNtYVNKZVBkZE9PQWh0Vkd4THBfS3pkQW9wbDFLYWhuVmdvWmJRTHRlbXZmeDBrY1BoTkl4T0pYanhiME1EWHk5Ymc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 富山県朝日町 海岸線の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5hNjU3d2RXTGxUV1BlalNUNUYzNDFVcUtVbTN2ZGo3YjRLMV9XampsZVJvT05BUTBFenNQYkl3YjdyV3FCXzR2aUFDWERtZTg5YXVTZEhPOU5OU2dzLU9Tek1Ia0pRSVF1SzFOYkJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 富山県朝日町 木流川河口付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPN0VsMmxueTc4a0c1WGJRek53dXJvbDM1ems2cDVFQ3R4Y2ZOam54cVgzSGFwbEJVa1ByQ012OGhEcXlRc2JUQ0w4czAyeUY5djNFRUhfdl9tNnlCWmJxTndKYXBtVnlaRUJGLVRZemtxbkFESjhQYlZtOFREVHZwRHFESGwwZUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 富山県富山市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5kVTl1eU5IVmJONGVJczdaWElTRXlWN2UzX2JuTWU2cjFqRld1OFl5MDlTYjRkbV9TTnFrbFFnUktLejZURHQ0NEFzWmZBWEwyVTY4YnQ3djBwNFFZX21kUjRJWnAtVUVoS2J1SDY1Q3dQTWctWmtvRnlUdlJBa1k?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 秋田県秋田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1scEl2M0ZtWFJmNEpURjIzbnIyNEJYMDVZQVY0QzEwaHNPYy03dUxyU25TNGNiOXpId3g5akdiWjVSY1c2Um5BaDNUOHRwQmdBVjJNNjJIbmlvMWliRkNXdWFDYmh3ejFYd1E5ZGUwakxxUHZpZUZDOEVIMA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 秋田県秋田市 自宅の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1scEl2M0ZtWFJmNEpURjIzbnIyNEJYMDVZQVY0QzEwaHNPYy03dUxyU25TNGNiOXpId3g5akdiWjVSY1c2Um5BaDNUOHRwQmdBVjJNNjJIbmlvMWliRkNXdWFDYmh3ejFYd1E5ZGUwakxxUHZpZUZDOEVIMA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 岩手県盛岡市 厨川五丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 福井県南越前町 こども園付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9MV29ZcEw3OFMwVFNFMjUtblFEbWdGb0NOZVQwdHNOZEp2Wi0zWHJGZHgxWlFvaTNNNGdqVWg2bjJtZlR5ekFqbFc5Zzh4dVJJdUtDbS1NZW4?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 福島県猪苗代町 磐越道・磐越西線の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9iV2hWTENnVUJvV3Jib0FIeU5YMVl3NTM1bGJUamotMno2ZTNKNkpSa0NNa3R4TFhrcnpIZHhRWUdrbzZucUwxUmdZdGw0ZDlGeVVZVG0tOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 福島県猪苗代町 若宮原弓岩の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcUhvLU5MN0pFSkVBN1Z5aWplanhqdGVKNUpjQ3JlTlJvakRta01WUHVjRGR4Qk1PUk1pMThDQkRZSkxSNERKTnZhNlItaUpPeGFiVGs4SFFWempTdDB1OXN6dWs1bFNtek9JOVFGcDUwa2poZmxrWlY5UF9NTW1Yay0tNWk5N19ReXMyNUlOWXdhMEtYU0Z0anViUmvSAaIBQVVfeXFMTzJxOGpDNXBqdExHZGgxQ1A1UTRJSHRCVTlJMmFtVzVCc21hS2ROUGtvcC1zUTR2UHNNMUxYSV9JZTBYdVVlLTJ0VHl3c3VsVnJhNEI5QzBZbXFLR2t6NXhHeWNBMFoxTHJraVI4VXZRZ01vWlM4R2c4a3VTVjJ4cWNPa2ZZM2RwbUVXODJNaC03Mlg5QUFEUUN2NF8wMEVvbEFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 福島県南会津町 南会津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNaUpZZTNndGs3XzVPMEF6OUJFcWFzQmhJYkJhUlpIYkQtQTBiZmR6eHZTQWxvX3Yydl9oMm1HZnBValQxLWJsRTlBNzlEMjNVRGIzUXY2OTVYZXFqRUhUcW5oendVSUNEdkwxS0pGSEZ3aWUtLW51VUdpbmFnUVRTRllfRWVORm8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 福島県南会津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNaUpZZTNndGs3XzVPMEF6OUJFcWFzQmhJYkJhUlpIYkQtQTBiZmR6eHZTQWxvX3Yydl9oMm1HZnBValQxLWJsRTlBNzlEMjNVRGIzUXY2OTVYZXFqRUhUcW5oendVSUNEdkwxS0pGSEZ3aWUtLW51VUdpbmFnUVRTRllfRWVORm8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 福島県いわき市 好間工業団地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSFBXSnhyNE9HQjZ2bEs0NUdjdUtJbXVUSUp1Skp1bE5YaXU5SHl1czV6RmFzUWNEeTBJcnN3cUFIV2VJR0NEcW5yNG9HQmJRX1JmcTZ4dEhjMkdDQ1hyNVNQSlRsaDlQUmpXdmZGZkFzUzJBQXFYMkJzbkZuX3N5VjRxdlJETHYzZzhQeHBWbGpZdGVMOTdMd21OWFnSAaIBQVVfeXFMTWVLeFowUE9oQ1NLTFJBY2hZWl9YNnBKdV9kcm5HYjNsMWp3Ny1OQTc5V0Z3RWlINjVheTZBQ0U0aEpzUVZOY2ZrR0RfaENkbi1tT3ZpSzhXMVBfMnVSLVF4bHhFang5cE1YWEZyaGQ3WE04cVNoLXBPNXJLYi1Jb1FSVFRKZ1Q1M05QVy1Sb04zSnFxc1F1dF9nYktUaHJGcUZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 秋田県秋田市 寺内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQRG10QVRNc253UnBrOVNidW1fM1NiXzV0MXpPOFgxWTJqWkJHXzdjSlEyamhkeURRWWxMbm1aUGxTOGRfTEw4MGJoMlJjd0NGaU9fNFp1MHNPcUxlalE5ZFV0VDNsYmlVc0ozTnlGOW51QjNUQTNoOXBzVmhTRlRGQ2xmSjZ6a2M?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 秋田県秋田市 寺内高野の路上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1JeDFCZXFJM2NFTms4U0tyU2xfd2hkbFp6RWZOaktsbzcwR0UyVTNGRjhOWkdmd19UckVhUndrVmdpbWwxOFpYbXlPem5NUTBzRTVScGxWLTR5Tmx6ZFpEQmJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 秋田県秋田市 河辺神内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNLUZyR3BDSlZoYXZUejN1bFh1TkZONWZ6OVprU0ZpRm8tSzdlSjZCQjVNUFNnbzBvR1oyRmZIUi1uUEFBRDRabEMyV3JQeWFVRC01WWJ0VS12ZEJOV2t4VDAyMGZheXZkTDVHeW5Sdm9jUGtENlRtYTBFY0VBMXFCTVl5dzZUNExhX280MnFDLWltR3pRTUxwU21fRGXSAaIBQVVfeXFMT01Ka1dqR3JGVmI3cGI5Ul9lUEFoVzFKd1B3Y0VXU19CQl9VYWUxTzItWUV4NElpc2ZDYnl4WmhZdHFxRVNwVElqbzJoMlY1QXIwZ3ZyLVhGZktCZjVjVlZrQUJvUjM4X1VCRjh2LVIxVTFGUXBLLWc1WGNrd3lGTVV3TTlBUkpnVTFjRnRXT0d0REc0b25Ta08takJWODhqTUp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 宮城県仙台市 台原森林公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE03aTk3X2lTVXpVaTVxOHpfOTVpNC1CT2wyQXRveTgwaHhxVFhMdVQtQVhUQlJQLV91d002TFV6OVd1UDBpM3VSU0V0X1pHclVFRFBwWVo5OUJnT0NSdFFXUw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 宮城県仙台市 青葉山公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE03aTk3X2lTVXpVaTVxOHpfOTVpNC1CT2wyQXRveTgwaHhxVFhMdVQtQVhUQlJQLV91d002TFV6OVd1UDBpM3VSU0V0X1pHclVFRFBwWVo5OUJnT0NSdFFXUw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 宮城県仙台市 市営住宅付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8tVUFpVG1PeXhWc3N3NzAwalJMTXNQVU8zUFc0WERMUFVSWWExVXFJR1JxSzZBaEIzR2ZzaV95UVowN2pTSzlKRGJ5WHhKSEV0TlROMGN1a0dlQ2JUQWVsUGg4Z0FfbGRsTnJpTS13OThqQjkyZkNoWDEtRl93elE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 宮城県登米市 迫町新田狼ノ欠の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPV21OdGVERXFaUTh3cjNuZTRkMGpQZlh5THNhTTVFNHR1Q3lOYnpWTnJNQ1BtM19MWXgydnZjejJRUWYyYXFnWmdSQnNsQ3B6N1JpdDRyQ0JDc3lISnJ4RnhUOUlZWVF0aERoeENrbGhfY0lmaXZWa09YUjNDajY4WGtfbEJwaGJkN0xicHl2bmNCMzhTcXBzTXRWUWd4LVlwUVp5ZWZBQXY0TE9zejI2SzE2a0FuNi1vVWI0NDN4TUhjUWIyZm9PR05oQ3ZuUUxIMjFaQkRBRlBNdTdmdmFqMWVSSkRUMVd6ZGNSMjBtcU5Pd9IBogFBVV95cUxQTW5BN3J5Z2xIc2xjaWZoSnVtQ0g3bmVMZmJXZ0ZibmIzSmpBZFdSWDNNczl3RlhJRUI5RWdSejBsYUlBNjZ6aVdDSU1JR0g3dFdnRjlMZmpwV0dKOFFueDFWM2dPbTN5VlRJc0JNODgyZkwxV0xaT1R2YTlORTI0c2d3d3Q2OXd2STRPdW0zV0JfUU9sV3pFM181aVJ0T3hlc3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 宮城県村田町の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 岩手県宮古市 江繋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQTRqNmpxWERlZ1NTTTBzcjlQYlFWY3BEY2twdV95TXlXZzMwYkx4UEF1VTBqem0wZlJVUWdCUDlDVVdvSHUxeHl1cHZHM2RUaVV3SWlmeXZ4LU1nWDJ5bEpwTFpxWWR1WjA5M0JlX2k3R3RQRGFnZ1U1M29acDRrbk1qUjFLXzY1WlZqenVsMjIxMjlxTUJRSDc0aFrSAaIBQVVfeXFMTjRFOWFmYnRrQUlwNFRzM1hWdTJSRi14MVh3Sk5LblZ3ZU9ITi1sTGRVVGpTM1p3Rm40TmhGTG1lVktPYXZuc3pXYjJlblRqbGJONkVrLThBcnoxWHB4WUJJN2VGNjlwTS1lSVN2dDd4bFRJQmd0M0pxaUJ2OUJhWUNCQng3QU9EbWNVX2tocDNoNTdJRkQtZ3lGMURVNVA0ak53?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 岩手県宮古市 蟇目第１２地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcnJ1TjItZnFQcDNmMGNjUVlraEQ5T1p5cUpDekV4eFNMSzBMNWdrN2Ezb0UxYXRtQXFDWG5vVHdlQ2lodnJuTE5jQ1FDR21FcDQydE1UUjRuQkdvTWhGRklZQ2tDM3lkakVwVmdKQzg1SDh4anR6cWVJcE1kbDNfa3VGQzNTZWY3TlJuYnNvMkZEVlhqaFl6b0tTcDTSAaIBQVVfeXFMTy1hdVZuRTl5ZklUWVdIZW9KZ05tWkNmbFBfeXNBX0RnaDNWZkJTeVRoUGpKY0ZLSTNUbUF2bl9YQ09KUUlaekNRMUliNEZnbjZ2X3dMZklqUmhheDJNbW5EVTJXeHFPcy1IakREU2JyVDdKNXJUcVhyYTR4YmYyTVAxcEM0QXI4ZjVDTWJudkJJQnFiYnNHaHIzRjFVVXNrR0RB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 岩手県宮古市 近内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSGNVUGpGb0lwcjlRNks2b2prVENZc0hldlNzeUF4cklBTGZKZmViVzFRRVZJLU01LXVTOWJSWDhQQ2FIM0NNUmJqbkZYcmJETWRKUG44NmhtMk9zZEZtQmNjaEE0aEl1TW9ROVVTSDViZDR6YW9aZ3pnNEYyQ0VGOEUtZl9tenJqWXpoakllaDBmRWFFdlpjWHN5aWzSAaIBQVVfeXFMT29GSEhzZXlyQXZjelVkWWsycm90ZXg5cmkxdVQ2NWE0eEcyUUJacWI5ZmR6S05jcWUxTkZDZXpuWHl0cWVwbENoOUU2dEVlVWNxNHV1ZlVIbXRwV3B6bFg4YTdMNWprUlpGcEhLMVBNTDBkamtKZ2luUnZOWXZ4eV83NjBnYW5NTHBTZklsQnlWRDlwNUdXWF9vcDhkMm5pcEdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 岩手県奥州市 衣川外の沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQU2tfYzRreldjSWdLLUFwc2hhRDhKelliVUpHR3hOYnF4TXE5cTZLN1hfem9uN20zOV91bDJYallBdGNWNDhJRUJoN3NkZXZBcWQ3cE9SZUtoUnZMeHNRQ2RRQWtJODJHbWp1amxGTThieW01WXVkMmF6SjZDLUVsdE5pZkRLOVkwTHo3SllFcHlUYlJkdnYtTDFUbjnSAaIBQVVfeXFMUFZROXdCUXhHaUt6MFh6TUhkMzFNLWRLeWVtZm01LVBNdzdKcW1MLVN1RWJkOGdsNXN3X0V5bm1CdldOa040Uno5ZkZMa0xDRjdZNVZYQlNJMmp3eEpqZ3pLSGNmT2lhRDE5dmhaRGtpMHZXbW1FX01MTzF5YmNPc3RHSlZmSzNQeXZKUWNFQkROYVpQTGlMUVdqVldVa1NCS1p3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 山形県上山市 狸森山元体育館の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxObHNCTTloM3N3VFU3LVdrNnBJaHE2MVVCa2FOeXpUeVdmOGxYVXJ5NXhGbURoQmMzZkZDWDFhajQ0MlJlME9PWGdYTXRpdF9odnEzOGtnOEE1VGFoSkpfa0k5cmhUYXBNT3loSkU0V1V4TFFGU0dpWGN1WS1EbUhqYllyWjVZVENTb2RiaFFFSm9GN3l3ZVcyUEdubWHSAaIBQVVfeXFMTzhMSlBzNTNNQTAwa2RNejJ5LThILXNjYVNzbXRLTXl0bEUtRkNFN19TNldiLXlGNE5Gd01LVkJDNTVKZENScXc1cks2SmZzQjRqZ1EtUUhxMzBtelhlSVRpUUdaekdfM0JJZFdSTFBWUi1lNkR1WTE3b0NjUE9rWlRjNXJKLUNaV1VsS2FzZVVnM2w2VjVTUWY2RHRyWU0wQzNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 山形県上山市 狸森の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBYb05JSnk1c2xYaW5fUmtvUi01RnhZakdJMVRFSEJXeFBuVVZobUd3Sy1RdXVKLWkxaE5vVWx1cUVWbWNJZlFvazA3TVhxWTNhTFlyNmZWOUZvOHVKVmQtUk1JQktPYUJITlpuSElIUdIBdEFVX3lxTFBaTVpHTnpoMHV2VE5zUERwc0k4dkVUS0xfVkZNeldibGtIc2twZE9NVk1lQ0MwenAxcnZJS0E3bnZ6ZGVvSVZ3TlIybVZsM0FldWZ4ZFRkWXo5dkxObXhmeUtEQng2dzJSOHpoWGJ5b3Vsa2Rm?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 山形県高畠町 上平柳の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBtOVg0SnBwQzlISkZaLVFLOHpBWVotNEtNazNtanlPaFlGMG9uQkhjYmFXRk1iYy0yeW5jdVRTNk9ZbjlHdEs4clhweXczSmxGeDloMFZNNElkSi1SX0t5TVVtbGxuS21PQ0hIbUVMNA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 山形県高畠町 糠野目の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 山形県寒河江市 中心部の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE04cDhhOGR1NGpjSTVLR0ltQ0hvVl9ZQmpLdWJ4ekxhenVHamxGUzlUdUhNWmJXeFotQVpVbXU4RExBMjR3NmZtRGJickh3dWJ3UTdwN05aYnR2V1dFNHJLUEZzVk5seVc3eVA4RTFfT21Hc01XNTRYU0xLVzNxVVk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 青森県十和田市 法量の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQkRkRm1JcnQyOTVfbDAyVUJsT3Itd3VkMkQzdEtnMnNLbjFMYjBOWVBuUktBaThtQXVleVBmWHo4aWdxYjlUMWlOdGV4WERUREdnb0xfQW5pZk95QmQtWFJ0LVh5RVFJbXFvRlpkaHdtOEI5T244blJQbHBwOVlKTVJ3eE8xWTBSV3dGVDdnbVdUVjJVYUVXSmNNTEvSAaIBQVVfeXFMTXlHNk80UWhBb0NMRTZlNTV4WHZacUx3VjZoWmZVOFBoeG80SzdPNEM1SjZvMXRicVUyS1pBU0JIWXQ3Mkx3T0RtdHZXdHhaWm83MHgwb3RGS3hzaTlsQXNsTElsbkRWcGpKQVcyUl9vdDRwcFc4QTVLODRpZEtpMndMQy15RFlHT1JERnU3MlpvSWZoZWF5bXJCYUNGWjB3Q3Bn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 青森県十和田市 法量１６の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 青森県八戸市 鮫町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcE8zS1NqNzlVcW5iMjhvdVl1d2pQOXpCRnZrZW56ZmYyVW5mWEh1bHJleTNLeU1OMG14WDFzN3Fkb0VxejhnY2hKTk9HeW5BREZtb1RqMGZjQjhpOHlKNW5veVJfWTJHV296QW1HUUx4UlZYU196OXRSaWZqYTRKU3ozcWJwYlVkT293NEJ6bEdjVnJES0FSTzNwMGnSAaIBQVVfeXFMT0dtcHg4VTZkN2lRMGQwYy1NUTlaYnZLTDhuLXpGWHhTOTR6cnR3ODY2MHVKazIzX0QwdHhBMEtHYl9kRTY5cVFKUTFpRlFuMWtPR3NlZ1hNbUMwNEVyZFY2MWhNdllmdGtJbDI2R19JR1hKalpFQTRlU3dodW1VdVdPVTB1Z3A0VUprWHV6S3BVY25xZkJ5NmdGOGk3V3RIRU9R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 青森県八戸市 鮫町１７−４５の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 青森県青森市 野沢６３−１の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 群馬県中之条町 四万の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOY0o3bVBuSmhEcFdQVENMR2hJRnlsMFZxd3p3SlBFNzQzSjVtUHBRSGVNc2JRZ3JLUXZISElLQlNCU3ZoQ19qNlBSTC1zbGVLc252OERJX1NkcERQSGxqOE5lRFlUdVB1NC05T0FWdEk2T3lHdk9wWFRRVjVpX1hzX080LUlUMWp5SWVUeHNreFExR2NfTW9iM19ZdEbSAaIBQVVfeXFMTXU5cmxKaGthX18yRFRlcUZOU09DdTVqU0FEcTl0TnJnZ1AxR09lS1hkaHE4UGRqMWw0b3ZadXpjcnNNOGNfYVdzRG04NWhRRlFTUTBjX01KVU9jYUQxMDVyZjhIZEc5ZnZPQmhNM0ZoTzFwQmRJbGE0cGExSDVBZ0s2YmNkQ3g4MXBsV1dwVTNlVGhzMU84aGkwbFlCeDliZUpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 群馬県みどり市 大間々町小平の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUlJsYTJvNjlheHB0U2J0dGpQVy1YUGlXQlhZUVNtbDktMFA2U1FrZzF0RzBqUVRtOEg0N0RzNmVPUVNhcHdjOFJYcG5iWVlfOFRHY0ZkX3o0R19ZYmc4MHBaLUZ3QmFta3hXYUFUal9uOFo0R1Y1QlA2T0Vkek4temtmNmFadUNxX1BGZWpWb0F4X2NuU0Z5RzI5UmLSAaIBQVVfeXFMTTBURDZPZlFGMWh5ZzVRZjdoM2pySzZkWFE5NkFqR3dULVdXNkRjNWhwREFNVkdDOTJMYXh0YlZ6LW80MFdOR1ZlOGlfcloxS01GelVPeTN3cFNqTS1Qc250MEJKb3ZIVjZkOFJsc1Y4ZnlZaGxMVHpzWjFTdWNOQ3lZZjlqQXpuekxMNjBGLVpEcHVhTFo5VlpJS0ZkS1lmMVZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 群馬県みどり市 林道小平座間線起点付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 群馬県桐生市 桐生市菱町1丁目小沼橋付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 新潟県妙高市 大貝の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZjlkSHo5aVRxV2FhTFdJR3ZDbWluUEZJR0dJb2tGRmJfNEs5UTFrNkdRNy1fSjVHd2dkRXdkRUN6Nm9EelpEX1FaUHlMaGYyQS1Id2kzcnhhWUdVbmYyS2diTTd5RzBFZzVvMzd1QmxJM0h2UGxJMXVSTlkzUkI3emRvTnoyUUdVRkkxVk9HcmtRRWZzM0JQLTF0YlDSAaIBQVVfeXFMTk03TWMtaEVZVkt6eUJSZV9sbnhXaWh4bEl4MmNINzk4RndsMW1hbXNvTXcxSFBRNnVlQWZHNnluR21IS3JmQnN2NF9FRzc5MjlOVU4zRkRidVhTTWo0VkYwLV80M1dBV2F0NWZ5cWN2VUkxSWM0bzRPNUZKb3lzN2RvbHgweEVLWno4eU9hekxuMnNLUnhlRkZGM1VGY1VCbFZn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 新潟県村上市 坂町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeUllWm5kWGpQM3pLdV8yMG95S0lFbUNtOVNpLWhhOTRFOVdsVUJfZVBSYk1zVklKV1NGMjNZcXl4NUp4M1pkNno5RGNObGhobzB0eUtVaEswZlB5bzlIcllZaUZUM2dEQmV0RzVIemlYMVg0Vkx5VlRTeXpPV2dmVkJMUGVuMTd2TDNUTXRNTFRENmRGZFJ4NnVLLVnSAaIBQVVfeXFMTW45ZDVyUkZFNFU4RnBxV3R1bUFoYXpqTzZ3QmVmZUM5Y1NlUVpkaVI2Y1pPRGZvMFNOcVVCTnFMUDM0ODVDOWZIOWRWU0NRT19Ed3FMRXJkWVBwSDYzQTdIclF1cExxSFJsOHNmc1ZkTEVlOVNYZnZzQUpTdkRxX0wwQ1N5Z0xHY1FYYjdqdG56WTBpYmFQUEFFaFg2M2c4Yld3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 富山県射水市 加茂中部の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRmJxcE5LX2thY2hWOXdENDhfd19xTVVMZGIxUllFR05OeWxhUXJPa1ZFVUo0TjFZS04zYk1kWUk4ZVQ3SnFjR2dmYk1SLU9xcFpGQkRzUF8xLWRDWFhfM2dreWhPaDIySGdUUEwwMEN4dHh1UUZ6aHJqd1BESjdJUU5GdkNIeWRWY0ZWOFBhMjUyQm9KV0hpUlVmUXTSAaIBQVVfeXFMT3V2SjNCbm9YVlNSaGtwRDhlcDA2dHE5NXE2OHRCb0NfMzU0UnYwT0dJbjVxZk9pOVhXblFMaENJXzJCZ2FMbUlDU0FWZWVyYTVuLW83cjFod1FneGpMY05GOHJOX2dsYUwtNU1iOGZYT2huQ1FuOVgxbTBYb1libm1sYU05Wml5YkdJRkhhTHc4WHRkZTlmUUpUYlhkaThZSjZn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 長野県軽井沢町 長倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdEdFbldlN3prZFpnUzlBR0RMdGJ3Z29kZUZ4V2tPSExvTFExcGFheS1qZGR5NnYxRVcwZHRMM3FldUxMS0Y1M2ttS2gxYXM2dlBmaUE0cmw4SldJTGduVjlGSjNjZXVrRGFiaGZYYk4zb0ZrRlRWRFc5ZUVFS2lSWXdHRzhsQm5nTUJwdDRNZFdEeFJQZmdPVUdlVlLSAaIBQVVfeXFMTm1aamVnVGY4MGR5TmYtVHdJNFowWDJHY3lkS2VrZEtBTFhOTUNxMERWNkEzQktSWk80ZndfRjZJVk1YSGZLRXc0U3ppa3lGSkhUai1qRUEyVHJKR0FJWFZQbWUtUkRyMk9oUTJuU0puWjEwUE01UVVkOGJDalJCNmU0Vnd6LUNUcG9IUlFMUFRDTktGM0thbWEtTTQ4dTctck9n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 長野県安曇野市 穂高有明の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPb2tCS0ZPeHBOQkZ1SzgwaHB0dVNMQjFYcDE1Wng4ZU9sc3FiamFLaV8zV1dIY195RkpoQ3BCVTB0ZWxtNnkzcV94Y2pfQUljVzhMVEhaeWRFbWYxV1dqZDhyS1FQazNKbHE5Nm5UeG9VRFZQVk9jTThncnRFaXNkTlp1Nng4T1piamxMUXhlNXdrUV9WXzdNbG1NMjkyR3h1cDNVZVh2TTZPOEg0T0dwUEVhV0p6dzhSSjRWZlNmemJLY3FNSFA2ZHJTNU0xNVY4Tm9JNm9nZ29DR0hXSTBqVHlqOVBhQXY5aE0tTC04N01Yd9IBogFBVV95cUxQdllHQk9mM1JuMG5nVHU5d1J6ZTJrb25NYVR4WVo0UlJMVVp0RWZxSXFzbGNiWk5YR1lyMDZRTndlMWVFMmdoeFhiVWVwVml0TnB2MmxobVU4QUVhUmtFOElXd0ZmaVctOVBtYW5Wb0tKanFfU0JnT2JpUXRqcFhKb3FYRGNYdkhncmNORHdGay05SFVQUkd1eUM5NWxQVmxaMFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 長野県大町市 平の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbk13Q2ZndmhDOExPNHNQdF9NLThHSjZjQ0JyWTdiZ1NfblRVbldWTDNKcjh2Rld6VkxZRkRpQ0pIak1ycU1kU2NkbklJQ1MxSEh4NHFnZHBfMGlGWGpoQzMyTnJpWWdndElFTTlvY2RoVEhaSnVFNl9LYnpsU2VXWWhYdXl1dFJFZjFZS1ZVTlJDWWxRcU1YbnBIV2PSAaIBQVVfeXFMTl9PSUxPdWJFUlpyaVF5ODYyMjBsaTh1eU9sTjI1b3FSY0JHMTJvUE9lZlkwNlNDYk1FQ1M5MDd6UlRvOFdiOGRSTjdGUnBoMFMtalQ3b09sTDVQb2pBSFVpWk9tWkkwMDBrVzl6azBHaDk1OHpOMnBrSmVscnBvd1hZMnRZdUREMUp0MGZtSDgxZHhGYW9QUDhodHBIYWhaV2dB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 長野県松本市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE0xcmNvOVF4WUNDdEhzM28yMGdBcjlIazJKUl95X1JNNHNLRWRCMmJYd0NhaWVUamNDcW9BOUpEVnlZZ24yVmR6UG13Z3p3RnFaaWVjLWlvbVJQUHFvTElZcXYtdUp6eVNyS290Y213?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 長野県松本市 松本市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9mQUd0N2FHazBRTHg3U1p2NUVpejY4akNpZi1NcG9OdXUzSHBUenFUd283bUtLZUxxS1pTekpkc1VwODJYYVp5YUF1UERSbHE5VmdBLVg4RGFyaks2V25XdFQ0d1I0ZXpoSGhRRk5IMlhUdXgyVjVhOVZlT1VjR1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 福井県あわら市 高塚の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSzVzZEhKOE1pVFRhV0pSMTVMUGFNSGpNN29oaTdQOE15UUNYUHdVM1BsUXVlRWpqdlZCWjhteFVxbWx4ZE9lald2M2xzTE82QlhHRjY4N1pYaHloYmlMSjloSVp4TkJVRUxEZzFqLW4wSXB2dlRITmtfWS1rNDlXYkdWR0FGZGNYU1dkbGNaY09sdWEycmUyYktlbk3SAaIBQVVfeXFMTTdNd0dGYVNkV2o2bXNMbUMxMWpueFAwRFMxYkJ4OG55T1llQlNMa2duQWQ0X183NmRrSmR1MUU3d1lKbE43eVhPd0lMeDdKenRwb3lJSDNEeXROcXA5d3paaWxPUUZ4N08wTXNZbnN2SGNGRWdSNWZBOVBVYlZqb1NFdTZXVERSS0ZoTU5GVVhoM1c4YmJoaWJmOWphSVljUGhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 福井県あわら市 新みどりの出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 山梨県道志村 室久保地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 岐阜県中津川市の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 岐阜県飛騨市 神岡町の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 岐阜県郡上市 大和町栗巣の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 兵庫県香美町 香住区香住の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOTjUyb1MyY3Q2Tk0teDlSWnNZb3hSb1Q1ZEp0V0JBeGp5NjJDYXJ5a1lFdDNQeDhnMkExNmdKQzNFUXptREd3bUJQZ044c055cDhCT0hQWEdPZUxzcmtzdEVadXdkSVF1RnBDdm5zRGF4c1RMTDV5WUVDYkk4TTJUTDd5Qnk3ZlYzS3Y2VGg5S3JRM1BrRVh0THhXTVNXTkxRbHfSAaIBQVVfeXFMTk41Mm9TMmN0Nk5NLXg5UlpzWW94Um9UNWRKdFdCQXhqeTYyQ2FyeWtZRXQzUHg4ZzJBMTZnSkMzRVF6bURHd21CUGdOOHNOeXA4Qk9IUFhHT2VMc3Jrc3RFWnV3ZElRdUZwQ3Zuc0RheHNUTEw1eVlFQ2JJOE0yVEw3eUJ5N2ZWM0t2NlRoOUtyUTNQa0VYdEx4V01TV05MUWx3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 兵庫県豊岡市 但東町畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVkxPZEJHaVZlZEJzQm41UUpDcENWdTBvMkFwLWFRRm50aV9NTHJoUlVUQUM5elRqV2JsOUUtbHk5RDdpSHRaNXhwN3NqS3ZTeGFZYzAwTHZtekhDeVVCRklrOGlhMHpjS1JSdXYtbXI2dEh5eWVJM2dnVkVYaEpmNGNwdVRIRWxQU1JkODhtVm1ubFU2TVBoa0ptNDjSAaIBQVVfeXFMTUJnVWhqRGJxVWdmQW9OLWpHNDVnc1UtVGNKLTFTQy1ReFNmWjVoTlo1azlyU1lvN3oyZmRoX1d2TmV6dVNMN0lJcHdDbXZlV2Rld3FLMEFXYW5OdGhGQzNiZkVTMDc5b2tQUmlnNng5X3EySUQ3UHdQUDdtMzB3TkVUXzRCdEpPYndzQUVIRWdaM0E5empCckZGWUhCa05hVnBn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 兵庫県宍粟市 一宮町黒原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQmdDWWJ4YWlWdVpWWWxUdlc3SFpIMFFKOElYaHcxRFkwVFZMcDlJdTRSWVpNRWpZMzdCbkFsb214cUthQlNmaU1YZ05NRXlyelJWY19HcGZHMURGR01zMloxcVZxdEFmMnU0UnhTUGhDbkdhSXFrWGRxYVNkUXhVd2x3SUdFQmlvRVJiMGxhYnNHbzIxeExMNFRsUHXSAaIBQVVfeXFMT0dOdXBFWWNjWk83MlZ1NF80UGZxM0pRSXlMTUE5TUFuWXlHaU5WLTZCY1pOM0lvVE5lMi1SZ0g4cUtZVUs3Ny13RUNRN2gwM1JMZjhJR1ZLNXR4ZExxV2RDbXMxN1BQUm0xbzZnam5jSE8tTE9EaFY3WTZ4YUVYZDNPU1pCbndVZWxWQ0h6dl9VenBtQkFLVk5XZmVSLVpJalN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 京都府京丹後市 久美浜町湊宮の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOSjBuQnlFSzEzaWNWdDZtSkdTTXJjTUN2YUZaa2Q2ZUF1LXdULWQwZTV2c2RXcDZBNDd1dW1wUFRHVDZ2UTBnRmpXWGR2SmY1ZS1EVTV6aHBjbXpQYlIzMW90UzhSaFB6NXhvSjhibnJlWU5DN2REVlE3dFViQ3JpSVhFMHcwSWJiQWgxNU9odVJiRndSWFdSWk9sc1ZOZUxJbkHSAaIBQVVfeXFMTkowbkJ5RUsxM2ljVnQ2bUpHU01yY01DdmFGWmtkNmVBdS13VC1kMGU1dnNkV3A2QTQ3dXVtcFBUR1Q2dlEwZ0ZqV1hkdkpmNWUtRFU1emhwY216UGJSMzFvdFM4UmhQejV4b0o4Ym5yZVlOQzdkRFZRN3RVYkNyaUlYRTB3MEliYkFoMTVPaHVSYkZ3UlhXUlpPbHNWTmVMSW5B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 奈良県宇陀市 室生田口元上田口の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 奈良県宇陀市 弁財天の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 奈良県下北山村 寺垣内の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 奈良県野迫川村 北股の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 島根県大田市 水上町白坏の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPM3FqWUFHcU9NbWExcXExaktZamxQUDk3dGtsblR1czlabERiYm9hT19EdFdSMnZHbHNQZ2ZkOExCSG9ZVHROVG5uR1FuWnFmRkR5X2dwaTBPdmhJbUNNRkZudC1idllzSjZ5Y1RtUEFBYnFnbEI4ZXZZOWxMazd5d1ZGc0dqNFFCX0hzcFdqclZyNkRTUzNPc2NlUi3SAaIBQVVfeXFMT0xxRDViXzlYYUdzQWhoOGptVkhWQ2lFTlVNanNscGRMUHZuVVFsdmR0aTZjeUt6emtYVC1VcFNBWmhraWhCRFRzXzdLMlV6UXBRTUtuVms2U3lrb0p1dm1RNkR3TjhMZWIwanNUcFNzTXFZT2tuODhMR3NmNFhnTXA0N0ZvbWxPeTEzWFlVTngtLUFkekNzTTBDSXNjRGhDZnJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 島根県大田市 大田市水上町白坏の県道の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 広島県広島市 安佐北区亀山南の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5NbndOQUlUX0hVbHh2ZGwxNXprQ3QxRm5BUnhJRTlyZk1oTVpqZU1MSEtsTWxRTDJ5VlZEYU00dmZhd3A1bzhhTngwVGNVekxyYkFyVG9SdEJqZ2F2ZmJtc1ltU081dk1ESDRwTVBDOUxqX0dmZGpDQl9EOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 広島県広島市安佐北区 亀山南の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5NbndOQUlUX0hVbHh2ZGwxNXprQ3QxRm5BUnhJRTlyZk1oTVpqZU1MSEtsTWxRTDJ5VlZEYU00dmZhd3A1bzhhTngwVGNVekxyYkFyVG9SdEJqZ2F2ZmJtc1ltU081dk1ESDRwTVBDOUxqX0dmZGpDQl9EOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 山口県山陽小野田市 大字山野井の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 山口県山陽小野田市の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 鳥取県鳥取市 鳥取砂丘近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5QTFBwTFVzWlVNNjhJeU5pOFhSSUZvMFpXQlE2REwxSWpKNlBRZnZkRWpySFdQWkdHZDQ0T3RjbGFNU3lKUDB2M29uTTB1a2pLLVB5S1g5REI2VkxKSExleXo3ZGdMekE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 岡山県鏡野町 上齋原の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 北海道弟子屈町 屈斜路の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTFBEOVZjRU1QZVhZNFBkZmh5bjlzeG1odnFwdzZha2xHYWlPUUhLVkZURG95YTloeFJRTU9US21QV1k5R2dTSklxRS1wNWhOTkVCaWpRYmlDV1RnWDJrUC01RHhjS19Wd3RwMGdjRHZoenVpVUdubEY5WFBFdDJaMXNHZEhmcG9pNEc4VGJ2b1l4UUF4aGdIRkIyTU_SAaIBQVVfeXFMUC1hLUhsN21FekZ6a0NVRGxISHRncjlLc0tvanFJTkxRWWhKNDZGTDRzRERNSlphOWE0R21tSjZwd3hnR1NjVF9wTFN1QXlpOXFuSWt0SmJ3d3hpWVdhVHNNQUdiUHFXTVEtOVpuWFVTaWRJR0pldEozTUtoN19KWlJoejlOUVdBWnRnbkpqa3NOY1o1OUpjSHVKV1lBeHRNejR3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 北海道下川町 班渓の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNSi1uOVppSDNKOHZyeDY0XzhzeFpqMFFsSjJteGtyamxVSnVoWDdVNkt2Qnlnenc0OHpMVVJ1YTdTNjRMUUlPQi1PdEFOV25hTjdHOVVQaDAxZFlsUnliVVRmbVFkNk1SWHMzNEpEOEhTUTJWSmlnNWVacEJpQU5yWmxmRjd6Z1Z4NFNUd29Ga0VmaDBPMTl2R3VyNHhtVjhTUXfSAaIBQVVfeXFMTUotbjlaaUgzSjh2cng2NF84c3haajBRbEoybXhrcmpsVUp1aFg3VTZLdkJ5Z3p3NDh6TFVSdWE3UzY0TFFJT0ItT3RBTlduYU43RzlVUGgwMWRZbFJ5YlVUZm1RZDZNUlhzMzRKRDhIU1EyVkppZzVlWnBCaUFOclpsZkY3emdWeDRTVHdvRmtFZmgwTzE5dkd1cjR4bVY4U1F3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 北海道積丹町 美国町大沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQX2VEeDV5TEpJWVpEcTRFd2t2ZWFnb1RrVFd5Qy11QlM0azBVWXlldVZaa045QXZLa1FHcHVBaXYwc3pLT0g3NGdiUzJzZ1RSSDVwRVZuT2lzakFBNXBUZEM5S1ljcVBEUUxleGkyM3VwSFpnSGNyVF85ajYyOU5Nek5CajBDVmRzRzAwWFJWdnpQZXpzUzg5bmFzaG5OeWVWa01NYm1NYVNhdFEwaThscmlxcVdZR0YxTVBObU12NGJEb1BWSTUwbC1vSV8yU0NISWxFMjE2TU9YQnNFY3FaUmFCRUlZV3VNVzFacHZJVHpwQdIBogFBVV95cUxNbEl4dTFnS1RUODJzdExQX1NpeVp6X25WMkdKWUluTHdZU29FVFNHdEVLVlB4aXdodlBLSklQWDFod2NkcmM4b09KWTk0Yl9KRWgyYy02ZGREX3ZoTG02SmN2czAwNWZMaFF2X2tRWDNOX2w4R0g0NTlpa05zcVlOWFQ2NW5vbVpYbEQyNTVOV3hqY2Rvc3hGZE4wZEN6bTRhWFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 北海道豊富町 稚咲内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVjV2MHVLS0tRTW0zY29oYy03SDNnYVNaSW90NUJEZWRGUjBfUHlRR0h5RVNPRl81bFR3aUJhZkQ5STdTUzcxQlJlQTI1UzJ5UzdvS0lBa1pscDZlOFJyOFM4Z2xybTVET2hqeThBbllNSWNUWmJUWjQtaUl3bFZTZ2lRUFBiVXVsVWxVOTR6NWcxT2xvc0pvMVlsY1TSAaIBQVVfeXFMTy1rVU9YdElrSHBJVHM0TFVGbWJoS0VzT0dLUl93cDNlbUQwOEUtY0x3ODZGUzVaR0lNZG5WTDZ4emdoZVVTdUswLVVOYktNc2lWRXlQWWZxYW5uaHFOVERCLWRqbXBBYXM4ZVIzWFVEdFgxQ0h0QWJ5MVhscUc2V2tZOFVtR3drYmdyRDloMmZLQVhIWkhmamJYQTZuM0E1ZEFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 北海道恵庭市 恵庭の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBlZDVIWU9sM3QxM1JjZEY0T0NsaEFYODhzNmhUb1YzQUhOSXYtdWhPN2NuZDd2VzBiUHVURHVpcFJhNm9YampQUEk4NA?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"福島県","count":32},{"pref":"秋田県","count":29},{"pref":"新潟県","count":21},{"pref":"岩手県","count":13},{"pref":"北海道","count":12},{"pref":"長野県","count":12},{"pref":"宮城県","count":9},{"pref":"青森県","count":9},{"pref":"富山県","count":8},{"pref":"山形県","count":5},{"pref":"群馬県","count":4},{"pref":"奈良県","count":4},{"pref":"福井県","count":3},{"pref":"岐阜県","count":3},{"pref":"兵庫県","count":3},{"pref":"山口県","count":2},{"pref":"島根県","count":2},{"pref":"広島県","count":2},{"pref":"山梨県","count":1},{"pref":"岡山県","count":1},{"pref":"京都府","count":1},{"pref":"鳥取県","count":1}];

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
        data={CHART_DATA}
        total={177}
        periodLabel={"2026年6月20日"}
      />

      <h2>主要事案の分析（人身被害・駆除対応・生活圏接近事案）</h2>
      <p>本報告期間中、新潟県南魚沼市においてクマによる人身被害が報告された。南魚沼市の山中において、登山中の50代男性がクマに襲われて負傷する事案が発生した（※1）。同市内では男性が噛まれて怪我を負った事案（※2）のほか、群馬県水上町との県境に位置する中ノ岳から丹後山への縦走路において50代男性が体長1メートルほどのクマに遭遇して負傷した事案も記録されている（※3）。山岳地帯における登山ルート上での遭遇と被害が顕著である。</p>
      <p>また、個体の捕殺・駆除対応に関しては富山県内で集中して記録された。朝日町の海岸沿いでクマが出没し駆除が行われた事案（※4）、海岸線付近で1頭が駆除された事案（※5）、木流川河口付近で体長1メートルの雄のクマが駆除された事案（※6）が確認された。富山市内においても体長1メートルのクマが駆除されている（※7）。沿岸部や河口部を含む地域への出没に対し、迅速な駆除措置が講じられている。</p>
      <p>生活圏への接近事案としては、秋田県秋田市において自宅のガラス越しにクマと遭遇した事案（※8）や自宅でツキノワグマと遭遇した事案（※9）が記録された。岩手県盛岡市厨川五丁目では高等学校付近で幼獣1頭が目撃された後、北側のドラッグストア付近で個体が目撃されている（※10）。福井県南越前町でもこども園付近で目撃が相次ぐなど（※11）、生活インフラや学校等の近傍での出没が確認されている。</p>
      <h2>全国出没傾向と都道府県別件数</h2>
      <p>当日の総件数は177件に達した。福島県が32件と最多であり、次いで秋田県が29件、新潟県が21件と上位を占めた。東北地方および中部地方の日本海側を中心に広範囲で活動が活発化している。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な出没地域・特徴</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">32件</td><td className="px-3 py-2 text-xs">猪苗代町、南会津町、いわき市好間工業団地など</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">29件</td><td className="px-3 py-2 text-xs">秋田市寺内、河辺神内、住宅地敷地内など</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">21件</td><td className="px-3 py-2 text-xs">南魚沼市（人身被害）、妙高市、村上市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">13件</td><td className="px-3 py-2 text-xs">盛岡市高校・店舗周辺、宮古市、奥州市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">12件</td><td className="px-3 py-2 text-xs">弟子屈町、下川町、積丹町、豊富町、恵庭市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">12件</td><td className="px-3 py-2 text-xs">軽井沢町、安曇野市、大町市、松本市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">仙台市青葉山公園・台原森林公園、登米市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">十和田市、八戸市、青森市など</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">朝日町海岸沿い（駆除）、富山市（駆除）など</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">上山市、高畠町、寒河江市中心部など</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別出没状況の分析</h2>
      <h3>東北地方</h3>
      <p>福島県では猪苗代町の磐越道・磐越西線付近（※12）や若宮原弓岩（※13）、南会津町で町道を横切る個体の目撃（※14・15）、いわき市好間工業団地での出没（※16）など、交通網沿いや工業地域を含む多様な環境で確認された。秋田県では秋田市寺内で体長約1メートルのクマ（※17）や散歩中の男性による目撃（※18）、河辺神内での出没（※19）に加え、居住空間への近接がみられた（※8・9）。</p>
      <p>宮城県では仙台市の台原森林公園（※20）、青葉山公園（※21）、市営住宅付近（※22）と都市公園や集合住宅近辺での連続的な出没が確認され、登米市迫町新田狼ノ欠（※23）や村田町（※24）でも記録された。岩手県では盛岡市の学校および商業施設付近（※10）のほか、宮古市江繋（※25）、蟇目第12地割（※26）、近内（※27）、奥州市衣川外の沢（※28）で出没した。山形県では上山市狸森山元体育館（※29）、上山市狸森での3頭目撃（※30）、高畠町上平柳（※31）、高畠町糠野目（※32）、寒河江市中心部での出没（※33）が記録された。青森県では十和田市法量（※34）、十和田市法量16において車へ向かって走ってきた事案（※35）、八戸市鮫町（※36・37）、青森市野沢で草むらに逃走した事案（※38）が報告されている。</p>
      <h3>関東地方</h3>
      <p>群馬県内では、中之条町四万（※39）、みどり市大間々町小平（※40）、みどり市林道小平座間線起点付近（※41）での出没が確認された。桐生市菱町1丁目小沼橋付近においては、クマのような野生動物2頭の目撃が記録されている（※42）。</p>
      <h3>中部地方</h3>
      <p>新潟県では南魚沼市での人身被害（※1・2・3）のほか、妙高市大貝（※43）、村上市坂町（※44）で出没が確認された。富山県では朝日町の沿岸部および富山市内で計4件の駆除事案（※4・7・5・6）が発生したほか、射水市加茂中部で出没の可能性が報告された（※45）。長野県では軽井沢町長倉（※46）、安曇野市穂高有明（※47）、大町市平（※48）、松本市で警察のパトロールを伴う目撃（※49・50）が記録された。福井県ではあわら市高塚（※51）、あわら市新みどり（※52）、南越前町こども園付近（※11）で目撃された。山梨県道志村室久保地区では山へ逃走した個体の記録があり（※53）、岐阜県では中津川市山口の道路上（※54）、飛騨市神岡町（※55）、郡上市大和町栗巣の山林（※56）で目撃が確認されている。</p>
      <h3>関西地方</h3>
      <p>兵庫県では香美町香住区香住（※57）、豊岡市但東町畑（※58）、宍粟市一宮町黒原（※59）で出没した。京都府では京丹後市久美浜町湊宮（※60）で記録された。奈良県では宇陀市室生田口元上田口（※61）、宇陀市弁財天（※62）、下北山村寺垣内（※63）、野迫川村北股（※64）と山間部集落での目撃が相次いだ。</p>
      <h3>中国地方</h3>
      <p>島根県大田市水上町白坏では県道46号（仁摩邑南線）を横断する体長1.2メートルの個体が目撃された事案を含む出没が記録された（※65・66）。広島県広島市安佐北区亀山南では生徒による目撃やクマらしき動物の目撃が報告されている（※67・68）。山口県山陽小野田市大字山野井では市道上を横断する個体等の目撃が複数報告された（※69・70）。鳥取県鳥取市では鳥取砂丘近くで市職員による道路横断個体の目撃があり（※71）、岡山県鏡野町上齋原でも出没が確認されている（※72）。</p>
      <h3>北海道地方</h3>
      <p>北海道内ではヒグマの目撃が確認されており、弟子屈町屈斜路（※73）、下川町班渓（※74）、積丹町美国町大沢（※75）、豊富町稚咲内（※76）、恵庭市恵庭（※77）でそれぞれ出没が記録された。</p>
      <h2>リスク評価</h2>
      <p>本報告期間の出没状況から、以下の3点におけるリスク要因が認められる。</p>
      <ul>
        <li>季節要因と行動圏拡大: 6月下旬の活動期にあたり、山岳稜線部から平野部、海岸線に至るまで広範囲での移動が確認されている。中ノ岳・丹後山縦走路における登山者襲撃（※1・3）に見られるように、登山ルート上での近接遭遇リスクが極めて高い状態にある。</li>
        <li>餌資源探索と非典型的環境への進出: 富山県朝日町における海岸沿いや河口付近での出没・駆除事案（※4・5・6）や鳥取市鳥取砂丘近傍での道路横断（※71）など、典型的な山林環境を離れた沿岸域や開けた地形への進出が複数観測されている。</li>
        <li>人口圏接近度と生活空間での遭遇危険: 秋田市での自宅遭遇（※8・9）、盛岡市での学校・商業店舗付近での徘徊（※10）、仙台市の都市公園・市営住宅周辺（※20・21・22）、南越前町のこども園付近（※11）など、人間活動が密集する区域への侵入が恒常化している。道路横断中の目撃も多数報告されており、日常生活圏における突発的遭遇への警戒体制維持が必要である。</li>
      </ul>

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
          <dd>2026年6月20日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-21</dd>
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
