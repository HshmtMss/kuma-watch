// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月15日〜2026年6月21日 / mode: weekly-report / 生成日: 2026-06-22
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-21-weekly-report";
const TITLE = "2026年6月15日〜2026年6月21日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年6月15日から6月21日までの期間において、全国で計1638件のクマ出没関連事案が記録された。東北や甲信越地方を中心に高い水準の出没が続いており、住宅敷地内や登山道、農林業現場での人身被害や緊急銃猟による駆除事案、市街地や教育施設周辺への進入が相次いで確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-22",
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
  datePublished: "2026-06-22",
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
      "title": "2026年6月16日 奈良県下北山村 住宅敷地内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1YMEgwZE1BY3l1ZkR2N05CNEk4YWNsbUxFTlI0ZEctQTlFODJnbGZETlBXX09uYXNxTGJHeHR0c2hiVXVIZ3ZEMmJkRUFRUXRsT1diVVBfdHpSb05aU2hPRVdFTWxyZUZUOE4wQUd4UHBqVkc2NDJZempmdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 奈良県下北山村 住宅の敷地内の出没情報",
      "url": "http://www3.nhk.or.jp/news/html/20260617/k10015152271000.html",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 奈良県下北山村 自宅敷地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1oWlpRVWpiZ1RsanZKMWxYX2dyV1hkQ2ttNlF0cUtROTZmOHJyVUl6NHFwYjZKVTM3RTBKRHNUYml5QjdJN2VCOFFzd0oxUDBmMGREalFGMTJBMl9fTGJMWXAtVU4xaVZOd005QkdHTFJHMjA5VnRPTHhUTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 奈良県下北山村 下北山村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBLOEpBck5tVmlCQUR1akd1TlVJeGs1VFJreTBKVlFfa2laeWlDdnQ0MkZ2bVBuQzhPY2xBRUlVYlUtZ1lMTmROX0tFTk51Z002QVNIa0RKY2NNbGJUOE0tRDI3UWlPcVpVSUVkOHhGR2p6WXc3WFRxTVdYNWFmblE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 奈良県下北山村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBLOEpBck5tVmlCQUR1akd1TlVJeGs1VFJreTBKVlFfa2laeWlDdnQ0MkZ2bVBuQzhPY2xBRUlVYlUtZ1lMTmROX0tFTk51Z002QVNIa0RKY2NNbGJUOE0tRDI3UWlPcVpVSUVkOHhGR2p6WXc3WFRxTVdYNWFmblE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 石川県小松市 山あいの地域の出没情報",
      "url": "http://www3.nhk.or.jp/news/html/20260617/k10015152251000.html",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 石川県小松市 小松市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9pdU11TXlROHpGc055QXVEQl93Zl9ibEhCSk1FeHhpZHN6b1FiN2lvcFFvY1ZmRVV0R1hiREFxY0hMS1FPVHR2bzRXVlBxXzNKdGJqRzJGZVc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 石川県小松市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9pdU11TXlROHpGc055QXVEQl93Zl9ibEhCSk1FeHhpZHN6b1FiN2lvcFFvY1ZmRVV0R1hiREFxY0hMS1FPVHR2bzRXVlBxXzNKdGJqRzJGZVc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 山形県鶴岡市 山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNSkU5N1NGbnVXZ05EWkhKNk1kUnNBU3YzUmM5ci04dE42ZHZsRmplYzRGd3dJb3NxQWpvOTlpVXJYdGJGMjNlM25DTmtGSUM0Wi11bDBTWXNEbFF1dGhxU0RvUG53RlVRVm1pTFd0eEV2TFlLX2xSb0EtVXZpZ1A1Y2ZKbEdvVlk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 山形県鶴岡市 山中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNSkU5N1NGbnVXZ05EWkhKNk1kUnNBU3YzUmM5ci04dE42ZHZsRmplYzRGd3dJb3NxQWpvOTlpVXJYdGJGMjNlM25DTmtGSUM0Wi11bDBTWXNEbFF1dGhxU0RvUG53RlVRVm1pTFd0eEV2TFlLX2xSb0EtVXZpZ1A1Y2ZKbEdvVlk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 島根県邑南町 造林地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5pMG9KTWpJUExfMUk1RGpXR00yRFN3MUpNbnNsVl9oMy1la0VqOHA5czlzTTdUZ0dkWlAzdEZNbGdRNlVZM0NaUXNNMG9JNkRQNzd3UEZqU3hIdUlqVUZTb21kWkUtYjg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 島根県邑南町 邑南町鱒渕の山中の出没情報",
      "url": ""
    },
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
      "title": "2026年6月17日 山形県南陽市 赤湯などの出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQdzhUTVUyM0RrWWZkc0xMSW54X0RyM1VSengxWVlYV25iMDlnUThtdEllZEVUWGlaemd3TFVjNC1td3JRNFB2cWFyWDYyVzBrX09SbGJHdXpXQWs4MjRCNWFDUzdoNVJpeFRPRGQwRGo2dlBhV2lKZl9qVF9qc2ZLWUY0alNGS0tsNVEyYjJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山形県南陽市 JR赤湯駅近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNN2FFdmVpNEh5Zi1oUFNRUzR6REphbkhPSXA5TnliTW5oTDhmMGtVc0FJandJRVlfdmZ1MEcxN09VWW5XejhqZV9JaGo3WktJakx1ZnNPcFlfZ29ULUhfZWZ3bksxTWhnVVlIUGM5bmdvaWxKYU1aNHkxSklELUZkQnoyWk12VTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山形県南陽市 JR赤湯駅付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNN2FFdmVpNEh5Zi1oUFNRUzR6REphbkhPSXA5TnliTW5oTDhmMGtVc0FJandJRVlfdmZ1MEcxN09VWW5XejhqZV9JaGo3WktJakx1ZnNPcFlfZ29ULUhfZWZ3bksxTWhnVVlIUGM5bmdvaWxKYU1aNHkxSklELUZkQnoyWk12VTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 富山県入善町 黒部川河口付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNMW4tR2tMVDN0SGdSZmI2RThFbDV0My1DcjQ0YlJRRGIyZUp2MjlyTFJRN0NHT09BTVRLNnRzZVVmVGU2N2FiOG1wZm14QTF0Y1RnRFIxOUY5UXMyd0FSdUhmcnlKVXpZTHNidW4tUXJhS0tFeWc1c3QwbjJHOTY3TnZCbXRJSm8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 富山県入善町 黒部川河口の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBNNm1MS2xtOW1jNGRHUW81Wjh2T1J4NjVRMkxobUU3VGZEX0FTS3N2b3lmU1REVjBleURvQS1IUVFiX3ZHNzJiRHFPODFaQTZZUmU4NW8tOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 富山県朝日町 海岸沿いの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE16UlFjZV8zYlZNQ3Uxc2R0bzhuSm9xR2xrY3lVaTJYZDBnRnFXX1o4aXZCeHJzVlgzeTF2TkNtYVNKZVBkZE9PQWh0Vkd4THBfS3pkQW9wbDFLYWhuVmdvWmJRTHRlbXZmeDBrY1BoTkl4T0pYanhiME1EWHk5Ymc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 富山県富山市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5kVTl1eU5IVmJONGVJczdaWElTRXlWN2UzX2JuTWU2cjFqRld1OFl5MDlTYjRkbV9TTnFrbFFnUktLejZURHQ0NEFzWmZBWEwyVTY4YnQ3djBwNFFZX21kUjRJWnAtVUVoS2J1SDY1Q3dQTWctWmtvRnlUdlJBa1k?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 長野県塩尻市 住宅近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBnbnpCbzRiTUZ3dHdNOFBOcWF0UngtTkk1NkFXMVpYbDcyWi1SMElRR2s5REF1TFdZQTM3Z0h1cWY4TUFlTi1FdURCWUYtTFVRc2Yxb1F4Sk05U0dZeHVfRFRMRGVlVGRPWFRCTnpzaDlQaWt4eWJSREQxU2Q4c1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 兵庫県多可町 山中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE40cWdJR05SZTB2SV85enlRX1lVeS1TRnBVZGZkWk9lS3FfOGJaUVRQSVhGWURmc3VBdHhoNGlPamppR3lBMkU3Z0Q2Vjg5UDhON2VGR29GQnExLVhOcmU2anFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 兵庫県多可町 八千代区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBGa0c2M0c5aHAwYlhZXzFqdGJNcW1WOEpnUWlRUUZtUGFvMmRNY09FbVNSVXlQQTMtU2RpTC1XVmswUF9acklXQVRpY3I4Yk5KaDYxYlAyMU4zVUZJeG1FZy1CanlDcjUzZGhITkJUZk1lU1NheER3dGp5bFhlbnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 兵庫県多可町 八千代区の山中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE1lREJocmNkWklna0JKRmlQeF92MGdUdmRCQUpGYV9XdWFybVg1RGRWMDRuWDAta21vNzdydDdleU5qM2JONHBraXlObUxuUGg3WWNEMVoxNHlRbUM1aXpJenZfTUdhd1VMOFdJcVZYTWltb1U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 滋賀県大津市 栗原の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月16日 青森県八戸市 白銀町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQQ05OR2hDWmttUzNPcHJKWFRPSklTeHc0OEY2bU9WM3ozYWtxUFZIRFFJV0pLbzB2MnQwRjZHOGp6NHFoU3FpSHVWUldYS3pKNXZMN3dvZmNETm9SdWJOUFFuR1RtRWVMV0JmSzFzUmRTX0ZWNTM0Y1ZyMjhQd05KUzhCaXI2RjQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 青森県八戸市 八戸市の学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5kYXdBUkhZclVyNUVvZDdRWjRwWXlNekh4d3pGUUpkdnhSekR5VURjRWtkR1g3UTVwbmxfcnhEcTlxSU1aZk1VbW9Ob2VqcDdPMk9xOHl5U0lBVVJOUGoyd2dBQ2VIRTE2aXlkZWEzTm5laURxLVYtOTB0THdmdUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 青森県八戸市 高校や小中学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE40eFlZM1JVVkwtYklNVi11NFR3OURTZ2Zucmh5TFZTYm51Z0s0X21yc0pTTGNHRVpQWnNHWk5RbklNNlp2TFhadWZrdFRIZmZJZl9mOE1ILTI?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 青森県八戸市 学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5kYXdBUkhZclVyNUVvZDdRWjRwWXlNekh4d3pGUUpkdnhSekR5VURjRWtkR1g3UTVwbmxfcnhEcTlxSU1aZk1VbW9Ob2VqcDdPMk9xOHl5U0lBVVJOUGoyd2dBQ2VIRTE2aXlkZWEzTm5laURxLVYtOTB0THdmdUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 宮城県仙台市 青葉区台原駅付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1kRmFoSWZwWG1reEIyb2V3SXR1b0VldUtxSzU0SDZyX3JpaXVtcVItQUR0d0I4SC02LTNQZ3hxdUVXNW0waDQwc0ZBV2VxLW9HUXg2ZW00WTlnMEdWTHB4Ul9zWFFoVmd5SmxwTGFPSXBFMkNQeDRVdWNWbjNPV1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 宮城県仙台市 台原森林公園付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPbGg0ajNrZ05HVUNmZEpZUENqeko3QmFZMG00Nmtfdm4tOHRUN0ZfeTdNTUJXd0VKeVhIZWdVcy1GYnFiSzl3WHhRMDNOdkp6V1BOU0Z6UUdtVE5hYnJmeS1BN1BhOHFmQ2U3Y1ZvdTJtYW9mblNVTUtGZXZXYjJsUjRfSG3SAYoBQVVfeXFMT2tjdEFWNXlrWG11V1pJRWZKQUl5VUJfS1RHd3V0WmdQbzFnM045c3RtV0lrQjloZEpKZ2xjZTlmNFA0WGEyWnM0Y01uWGZ3TndHRGVFcWhYbGZDeVljRTRjNkNja3lLYkJIaGQyREdCNHloc0xrWWVlUUZQRkVveE5nbEFUeG1pS1pn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 宮城県仙台市 八木山中学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5DRVhXdHk5aE9XczFvaUlhRzk2WUJ4QmtLdGVnby1iTDBoVUpHX242TjA4bXRacVU1OEpkNlN6a3NfR2VyRVpuU3NaZ2lDaGtXeHdWUW1PUXNxdXlMN1BSUA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 宮城県仙台市 五城中近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE04bnhfcFJoOFIyWUlxWXVlY3ZsaDllYkl6dndwWjhsYUU3RXpEMzF1RkREZU9OTmlyUXh1MDIyNE10VGo5X3BHYkNsUjlFQUtpR19wcUFLbG1yYlh5SHVJQVNtcVlsUkNlNkV0RmozRy1La1VJRzl3TGc0UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 宮城県仙台市 宮城野区七北田川沿の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5TZElvbUZHdzJkZnZJbjJMSXN6SFozSXBvVUwwbERCMk9uZnFOV2xIZ3YyaDNjblo1Yk9FOWJHeWF4eUcwOXZ4WFpwZ05HWXIxODB5Q0txV0RKWURCRVpnNjZjbFBJWjlMZ0lFeWJKSHdkV2s0UndDdmJiRFdJZ0U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 岩手県紫波町 平沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFA2dEhyOGlHbk5zaGdEeWRBcmxveVdHYWVPU2QyNk9NV09jUkRCcE14SkMzclBYdm9fSTFHdGNNUU9rNFlhdW4waWRNejRyZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 岩手県紫波町 紫波第一中学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxON0ZRRldCbzNrQV9jdTVSbEhTbXl4WTRJWjRzS21SVWN4YnJPSTY2dEhTU3ZYbFR0UDgybnYyVkxRV3dOX1l5bFpVdlI5ZXJGYU5KbVJPOEo4Q09kcHY4UmxJWTZnb0wyQW50eFNHYk8ydkVraTIzY19YOUZ6a2dpcVdPNkxqbkk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 岩手県盛岡市 厨川五丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月18日 京都府宮津市 府中駅西側の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9hMkl6bDNtaFZsc2Z6c01pdzkwVFg4YlYzMFF5N0ZrMFBseDdMcF9QQWdDYTlIMHdkMHR3elc2aU95UUc5dnpBdjZ5cnFlNVRYeGFRclZ3Zw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 京都府宮津市 天橋立府中駅西の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBhbUZiN1NERXU3eGdENkV4bndHTWxzSndTaHBGOFQ4bTcxbkQ4QVZwanZDVW5aUlhCOFNVaHl4dWprNEJfeF9YSU04QTBfZDJMeVdnWmdVZGdrbzVOcVpSWkdVQ1NJdUxqM3lrd0Vn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 京都府宮津市 天橋立府中駅西側の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNaGRkSG5JaE90SUYtak9uQnhJMWZ6a1J1bXd5ajhrcnFSeHFEbHA2dU5JaHJPdmlLMnJMdlA3dVhtMVBldUpaVmlzT2NXYnBFczdlRUo3RFZrV0M4dXBsWVd6cVphMzBYZHdOdWoxcER6OWI5VVpwaHpWTXFFWlp2WFFnR2czamI1M0N0c1RR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 京都府宮津市 府中駅の西側の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5aemhCdkdYczcxaXhsRGJ5MkN6a3FCZVk4TVdnVnBsZ2tVWi1XU0NKSVVfUjBNZWpHTzB4WU8wRWtFTHowV3Nmanp3TnpzQnBWTG1jbExmS3A5c0hjX0RScDRLZzBWa1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 京都府宮津市 天橋立リフト府中駅付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE81eldyR1RKdTNRREJzZ3QyWUxzV0lFc0E1S0dnVTNGbm5tZDlpSEo0YlcxVVhlRnJTbkwyQkxCeXNqa3NqdWpIMy13UlpGQVFtZm1JdDlIM1N0dmlWMFdpbU8zUzI?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 鳥取県鳥取市 鳥取砂丘近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5QTFBwTFVzWlVNNjhJeU5pOFhSSUZvMFpXQlE2REwxSWpKNlBRZnZkRWpySFdQWkdHZDQ0T3RjbGFNU3lKUDB2M29uTTB1a2pLLVB5S1g5REI2VkxKSExleXo3ZGdMekE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 鳥取県鳥取市 鳥取砂丘観光施設の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9Wb3o2YXVLZUdxWUwzRjFvdTlhRVNfRXM4aXpaLUZQQmctSmc1OV9nTnMtejA0ZDBQS3hoaE1TQ21vamRwbU9QSUlVNFp2RlIyQ1g0ckJaWEY?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 鳥取県鳥取市 鳥取砂丘付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9jX05lZkZLQk1wWGhCbkVLcVdSTUJURkFRN2stNkhubjE0dVZVZHVlTDRKbDlVOWQ0YVJKZXl3SmNNNFNkWkFkTTJreXhHMUZqLVo2ZjJod2todmF2aU8zYTBiV01HSFU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 鳥取県鳥取市 鳥取砂丘近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQM3BpTU1JaGZqUjZzR09wYURPU1NsTmhmcWR6bXNfekk3ZGQtRl80NWZNSWpJcktrS1FlYUQ0Mkc4QWZTektvTEFvOHc5NnNMWkpBdHNXbXA1ZjBPYUlnVG1uUXFTajgxd3ItZzItazByY3ViOG5XS25MdmNleGl4bU1jM3lVYzA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 群馬県桐生市 新宿一丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9heWp6a0hBRm9HcWR2SThCaE5GSllaZ2xBTFJFdlU1WFpqbW1MU1lJQS1JXzl0RTc3QzZOUlVoeVVFcUhlN055S1MwSldQeTloY0ZSZVpPdnlSYXVYc2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 栃木県那須塩原市 JR那須塩原駅近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5TM1ZRNWhKblNPMGpOWWxLdmw3SEhieFRQdzAtSTZvZ3NtTzBTWXBNUVVhcE1KTzYyWVA5QnV2aVVkeDZ4cHBiVUtUOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 福島県会津若松市 住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFBtQmRIT0tYc25hYk5FWUxvM1J6bzZWckJwQkJlT3ZUanBYb3J0Y3oxS1JHWTNrWTFKV0FPd3d0MHJuWEtrVWw1UVBIVzdfNl9EUElCaE5McDNobUNYd0gwX3J1OGNzOUt4?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 福島県猪苗代町 磐越道・磐越西線の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9iV2hWTENnVUJvV3Jib0FIeU5YMVl3NTM1bGJUamotMno2ZTNKNkpSa0NNa3R4TFhrcnpIZHhRWUdrbzZucUwxUmdZdGw0ZDlGeVVZVG0tOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月21日 福島県南会津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9iV2hWTENnVUJvV3Jib0FIeU5YMVl3NTM1bGJUamotMno2ZTNKNkpSa0NNa3R4TFhrcnpIZHhRWUdrbzZucUwxUmdZdGw0ZDlGeVVZVG0tOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月21日 福島県会津坂下町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9iV2hWTENnVUJvV3Jib0FIeU5YMVl3NTM1bGJUamotMno2ZTNKNkpSa0NNa3R4TFhrcnpIZHhRWUdrbzZucUwxUmdZdGw0ZDlGeVVZVG0tOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月21日 福島県天栄村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNbnhsSkdYa1RjV0FXU1FBMF9kaHpKMWxadEhIQjVrRkhuWDI0Tm5fOE53andzVF9KRVZIaEtzQjlHT2oxU2tHa0h4b2ZTdUpyQnpNcHlxOFl1Tk1RU2djZmdjSXVUYlZBNXBCeDhDaWVWTXJpMmN1NmdQV3dQck5qejl1TW9sYzg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 秋田県鹿角市 尾去沢字新堀の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5ZZUh4RTBTbzNLWDl4djRRWFc3dHVGMUxEdWMtTm5HMUh0ZzhjMFVETWZKTmNQWVVmb1B0WTNaazBsdHdCcWktcWE0THQ3UDRJNFpsamh1LUE3eW5JVTd3NVR2eFNPQlBGOXgtZGlGRDFFSjRuZlR6T0ZRSElBSG8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 秋田県鹿角市 十和田末広の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月16日 秋田県鹿角市 十和田大湯の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月16日 秋田県秋田市 添川字地ノ内の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月18日 秋田県三種町 鯉川の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月21日 北海道新ひだか町 住宅敷地内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9YOFZQSjlKZXpuS1lBNDNycGJMZGhJREs1YThSZmNQV2RtbGZtMWUxV1V1MWZsVG1YVWlSRmpZNGtYLXc5ejNCajhCQ1VUUVctWU1MZEJKdG4xVE5nTkZYX3I0M3EySVJaNVhDTUpuOGYxdUo4UTh0NkNWaw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月21日 北海道新ひだか町 住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE00bjJzd09QTUlhQkItdW5jMGZfNGtvaVJoNkJkbWZobXZfMFNzYmN4Rm42NjhuVUR0bDJJaU8xR2lhUmJpckFKUUo4UkpsQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 北海道江差町 田沢町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBLVnRVY0ppMEwzQzhEQ0I3cWQ1dUZpaEpOUDFPU0VWRktuUjJfbDl6N3dhQmJrX1E0bWdObXhqcVFOQnVBUnkzcWtxWQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 北海道下川町 桜ケ丘公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBzVFhMVFFQZVNqdlpRWGZqMmdraHQ3U1dobmN1U3ltSXMzOU9FNHAxZWY2d1hHbEVfQTBFZFIzb1hGNk9nVTduT1FkdWQxOUNuVkxYd2NGWFliQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 北海道苫小牧市の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 長野県松本市 城山公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9GY0VhRWVLMzVqZ0tRUVluTURJeEcxMmtzRTAyX05EU3lYLVVyTy1TN1JpdEVZTjZEY2k5a0lzUjRKTER2NHE1UjRGY1JjaWx1NUNyNloxZGxaYWhFMXdsUDZkS1l4WXBMMDRjdHZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 長野県大町市 あづみの公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9PVDRTY0xqcTBveEVORzQtblFCYm5EelBOZllvWS1sdk93UkNPS0JyQ1FNQm1Tc2RoYXZDNTlqbGJZZFB0Wi0wZzlEa0dpUzZuU2JCRlhVenlwSUN6VDNrVWhfOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 長野県大町市 アルプスあづみの公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9PVDRTY0xqcTBveEVORzQtblFCYm5EelBOZllvWS1sdk93UkNPS0JyQ1FNQm1Tc2RoYXZDNTlqbGJZZFB0Wi0wZzlEa0dpUzZuU2JCRlhVenlwSUN6VDNrVWhfOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 長野県大町市 国営アルプスあづみの公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFB3QWlHT0prTDNDRFlrVGJUeFlMOG0xSXF2YmtEeUZLdzB4Z0J3Nzd2djBhSjNGRGQ0cjZCd3pZY1dyMC0tcF9BVVEtVGFCZHY0clVpSzBfQ29TZmhEeGFvRHFSVHpmal95TFprdlBYYkM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 青森県平川市 新館墓地公園付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9hN3JpZUR6VXk5LUlvUFhvN2FGVGdXTHo4ajlCTlRaOU54UW53NUtzSkFsYklhbjA5NU1GaGdnUUkxWndUVzQyZ1dpMVNVd1U4MkRWTTVaeUZPdFF5dDVkd2hIaHQwdkNTSl9zWUVKWld2bHY4Z2dRMkI2UDBZYlU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 新潟県湯沢町 町道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5VeWlBYjdRRWJxN251WTh6UDhZNHVNV0JoX3dYdFNIRTRmR1M0VHlMUjlxZXN5WTRVNDJWb2NlT003dGNXM3R5WU41bFJLNVdjbGpaUmRpSGkwWGY1VkJGa3dQVDE5bm9tVFpCc0FfQUhjNktjSWhVV1Z3TGdYTnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 新潟県村上市 村上市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE96UncxVjViQlRFYUdCS3NXT19iQWVYWFFuZU9MbVNLaUxtOWhTX0ZRMVdWLWtfZnpLVVhUbjVHdFVLcF83MGc4Ul9sWld4Nzk3bGJ3eUpscWtnaS1hcmcyNXlNUVBVMUlCeC1nTXBQVGlDZ1FYSWF0TkVFZmxTRDA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 岩手県盛岡市 黒川16地割の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月19日 群馬県長野原町 長野原中学校付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月21日 群馬県安中市 松井田町五料の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdzZfblFCQk16eHN0eEhwdXFqeElaMG1rbkVKOGQwQmVHM1VfZjY4Z1RhYndGWHE4VTc0R0ZrMUd2RWxRZG5pVkVNWmg0V2ctRnU1S1NkeXlUQ3dhVXVqVmhURkQxVmlCRjFXakowMDBZMkdsVEpuLXlLRFJnWnJlYURlMzNfNzRDWWJQaUJmV2lZR3FjaVo1RjRBa1fSAaIBQVVfeXFMTW1nTzV4djhIMFB3dmkwdVN0SFd5Qklsb2FodDBtUU9YY1FFSGVoY256UEJ3bHdiLWdhcWxES0FtQmxxUkxfQkpZQlQzZmxyT3dnMFJ3SUpWWXBpNEtYbTl0OFhKc284c2pHSzdrR0ZmWGlFZ2NtWXNyNm51RHNWS05qUkRnb1U0YnpjaDJJS09VaHBnUGw2TW1CQm9vWHdwX3V3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月21日 群馬県中之条町 赤坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNUJwU2RQbGt5c1NDYmJrejdRT3U2Wm84RTQ1NUN5WXFIYzJiVzMzVXpJaHJiUGRpRG85b2pSbENDSEwyQkl4cXI5VmxMSlJ1TUplekJNVjBvMHBoSWdPS0lOTzJKelZfY2I3bk9JOVZMZnowRVVBTUtpQ1FudDBGY3pSbXRENGZJVzNCZXRQeE5hRlBXZDIwREt6N1nSAaIBQVVfeXFMTVRfb1FfWUFiSTlkQU15NnFoMEpoWWxFazRUOUd0Q01EcS1VRlRwcHRPV0V1Zm1DcF9FdWoxU0NLdFJwS1NaS3dQR0tVeFM0WEw3TlpvQ1RiMnpHREhLN3JIOGt6MnlsMzZiR1k4VWktZXl5STEzaWQ5R0pSaTdrWkdsZmJXZ3hac0hfTjZkd2ozTURKam4zRldVTUhOOU5kR3N3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 群馬県中之条町 四万の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOY0o3bVBuSmhEcFdQVENMR2hJRnlsMFZxd3p3SlBFNzQzSjVtUHBRSGVNc2JRZ3JLUXZISElLQlNCU3ZoQ19qNlBSTC1zbGVLc252OERJX1NkcERQSGxqOE5lRFlUdVB1NC05T0FWdEk2T3lHdk9wWFRRVjVpX1hzX080LUlUMWp5SWVUeHNreFExR2NfTW9iM19ZdEbSAaIBQVVfeXFMTXU5cmxKaGthX18yRFRlcUZOU09DdTVqU0FEcTl0TnJnZ1AxR09lS1hkaHE4UGRqMWw0b3ZadXpjcnNNOGNfYVdzRG04NWhRRlFTUTBjX01KVU9jYUQxMDVyZjhIZEc5ZnZPQmhNM0ZoTzFwQmRJbGE0cGExSDVBZ0s2YmNkQ3g4MXBsV1dwVTNlVGhzMU84aGkwbFlCeDliZUpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 埼玉県秩父市 大滝の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNT3RyQXZYa21MYkV3MkdnTnVGVVNfXzd0bzJBckN2eHJYVk1GbE9uUEI4ZVJDaXgzUVNXQ2VrTmtGM2prUjhCa2hxVExlYmZLa1hzQklDN2Qtb2lvTFZqNWJjQlRwajNNSllBSmxHN19WTjZ6a3B3NEJubmZQemppbUpubk9CTDhrMVU5eWxJeGZFcFZOc3AxbmxCaFjSAaIBQVVfeXFMTWJjMUNvUk43TVdoWnhXNGZNdzBLOWVTNXlkLU93ZEhuYnpNM1BBOEl5SE9aNDVXUExIazRSZnh5RWh3TlJ6dkxXQ3ZGRFRpUXJ2VFJGX1FyTTBxZWdkMV9pd3RrRU4xMjNydGFtUENMWU81RkwyR2J3YXJoOTE0STh0T3M4NGM1aEZZZzA5X3VCS1ZvRGVXMjBVVVduRkwycEhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 埼玉県秩父市 三峰の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUnVYVTJzaTJ2aFljS2xfV0VuRzkxXy1UdGcxTXFLT0VFQnBQVzdhRVA4bTgwNnJaelhNOFVZdkhMVmpjMWJPTTBNa3JQTGlwa1hlY3BXRTBzY1ViZkdDbHdwMkVYaENJQTVrdXhvMTc3Ym5yTzIxV3NRX2lQV0l1MV83M0lQSDg1SmNrekdVOXZtVTF6R1pLWHlfblHSAaIBQVVfeXFMT2FDZmJfajBoeFZ1RVc0UWRFQmNWNXZ4U0EtV0R3QUN1R0tNdTF3QVVqQ01YOHpRSW01T1F6ZkNHMWt6aTFIRExTZG5majgtdTJEZzZPa24yZG9Md0I5SENtMk5CVTVVTU9zdWJ2d3oyMnBBd0Q1NWNvenBfeGdTXzFEUVZENTRWWG42WVpiNGlYaFd2SU1CVE1nLS1SRG5ZVTFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 埼玉県秩父市 二瀬ダム近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE4wY3pNMElZa2ItQU1OWFdYa3QxOVkzRUlteVd1eVpjVnBvUkdsazB5M1Y4cFFucnJlRVVVUjVwM01sVklPcElyc0g3NlgxM0dTOEhndDdDMV8ybkR5bHdkcVBoejhMX2I1WVBMYjYyXzI4TUM4THRpT093eWZFMTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 埼玉県東秩父村 皆谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5ZaEljYnI5bmphQmRRUm1iS3F5enNYaHlSOG9GU3JkeWZ4Nldyd2JvV2kyWVlTdDdmU0tGYm1GY3MtQUtiTnA2ek5wQjZ3U3pFX1VDTzRQN192Mms2THhEOVJneExtWVdlMlQtRDZiT1g1U0JlS2kwdnZkdjlZd2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 埼玉県秩父市 日野鷺橋近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE45UDZuejMxVGxvb1k5VlYxaFllZFNMbkdBMFZBRENnRFRPa09SbUxVMG5mcUFZbEFaUEY3NWdVZ09MQjJTdzhwTjYxYkdMdG1sS2U1NF9raw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山梨県身延町 北川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPelhtRGZicTJoaHZ3U280Vm9CM2NWNWRXU3BqYno3WUthX3JMVU1LeVJ0cUVXZy1TWWRPSEc4RHp3cWUzdmVTa3B6TUlVaVhpYWpXUWczLWhlR3FhTk5EVi1ubmktZ1NvZzRCX2JpV0ZQUjNXVGNQdVNyNUpoUklYcDIyaWZGX2V4VnRwako5dnlzcTFjVUxHSXNuRDjSAaIBQVVfeXFMT1ZVUjE0eXV6eWxJT2tycTVKdjB5dTc0Wm4zeFFxaFk1NVRTT2sxazZwM0ZCUm5YellpRmJHbUVVaG56ODl6VXljbGx4M01OaEZzRExkU0tMamZXWERBT053MnNpc0NDZzBJS3pvdEw2b3hBamxBVnpFdXk5S2REWHZ2UU1rTU9IU3hQbU9GMmZlSkNkTVEyRTVFazFJS2FGOHhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 山梨県甲府市 古関町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5tdmRuSUZlZ25MV1pqc0o3elpSSnVSTTZEVGpPWEZjQXRLalVCSlJwRlVlZjgzWV9qNER5cmVvSFRKcWNJRzdDckNTUEkxVU8wai1mMDdnRDBzWldDMU9YcFEzMVh2dVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 山梨県都留市 大幡の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUU9uY2U2WFh3aTFoY0x2Z0t6clZNdS1xbzNxQUNyME1jREM0aHViajFpdmR2a29qSEFuck5mX0dNcnRmczRucS1hQnhNckhBUUJaaGVjSVFxRmdReWhiZEllWUdxRmdVWkNFTXBOM3hHek45eWRIRUI5Wm9rcDhHQWlIZzRxeW50WWVnU2FyRFBQVHcxdmN1ekpfOUzSAaIBQVVfeXFMTnM1WkF6VnVKSzdGY3RuXzNiT01nenk3UmNNSkN2dVBvbHBUWWp4cDlnT1dqVTRibDIzVVpHZ09pSEY5VkpSb084QlFyS2ttWUMyR2xCZko1eEJ4VkowS0c2NnU5WDBWRnlMcXRYZkxScm9wUmZuMTN3Zk15bm5DR0Z3R2NSWEw2Y0p2bnNDRlBTc29qenFuWGJmM19fUk8zZDdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 山梨県山中湖村 山中湖村内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE14NWQzNGlyTlJwQmVvdDdadS1IRHQ5NWs5VGlMM3dHQkVRb2ZoOXF5UnkzQnRmSWhqSHAtOXo4UU9CQ0duU0ZSZTF3SnV0VWp1QlltUmh3aWJ2OHZuTVZtQmJRZXA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 山梨県山中湖村 山中湖村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE14NWQzNGlyTlJwQmVvdDdadS1IRHQ5NWs5VGlMM3dHQkVRb2ZoOXF5UnkzQnRmSWhqSHAtOXo4UU9CQ0duU0ZSZTF3SnV0VWp1QlltUmh3aWJ2OHZuTVZtQmJRZXA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 東京都奥多摩町 川野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMnJuUUhUNDFOQndCWEZGUTMzVFdiZmxpT0NRVHhWZ1FsRlFqMmJlQkloRXhTeWJEWVViZUI1WkhZc25SZTJWTlpBdDNSbXE3bXB2dDBIeFhTdnVxRFEzdE5sb0R5TzU4X05FTzlGQjRJb3UxM1dmQVpHOTVMZTVNUUpjQVZjYzkySHhvUnNhWS16bHNkajhqcWZtS1fSAaIBQVVfeXFMTkFEX1pqbUw4bHlqWnNhX2c2UEwyaWVZTzZreHg3X2NLSTEzemZLSVFNOEhDNW5ZMFZrRzdRaE9qU1ZKWVZoYWFOZnJvVEJxSVNIWHQ0Wkw0N1NaRzgtMmNsWlVTdmR3MUVZeGo2RVdsV3g5Mk9sVnFpejI4akp6NTRETGE3bG5PamNQT2Rya0l2WWlIb0wwRHlvWE1KY3RCWmxB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 東京都青梅市 成木８丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVTZFdkQ1blJpdzFNWV8yTjVHR2F1Zlh2SDBmNHBjc05hUDlfSFZDSzB5dV9DZUZuVjRRSTY1cTdmRk1CSjJZdlZTZU81RnBpWkRUUTd1M1RBYzItU25CLURNTTcwWHRub2FWY1BHNXg3WklFeC1heG5PS2NsTnNtcU9GeGNDaTc3VlU0M1k2OWRhbEdBZC1iT1NLUzjSAaIBQVVfeXFMTW5XRHpMMGgwcFZyeUN6dGlLNENQLVg4bWlrNzNrSlhEWW1PNF9NREFjN210bzFGcHNmdlNzN0NUWTNOVGxMZm5tTm9xWnh4cnpuMmpIc2RPYlJ6U3p3RkRFNTlPMFRiN0VnRk1BOE1RT1ZaallkaWVwSTZaXy0xX1Z1YnZGV01rcUMtWi1GSkpXOE5kV3ZpazV5UnRUc2ZSQVdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 石川県能美市 辰口中央小学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBXR1c5RzRleFlpdHF6SHRzYTZkUllZU284RXg1dkk0TTZEUnhsejBPRmk2QjlUV05paFpyeUR3Ul94cGJlWnd5cGlIenVhX0FSQ244NWdaTHpVbnNrOGZvNEpSclVWWHU1TnNzVVN1TDEwcDNueXRiVjZHRQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 石川県能美市 上開発町の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月19日 福井県南越前町 今庄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5hTU9XUnMzWEprUi1iQzVvbUhTT09tNmZKZjNna1ROY2NHMEI5Y1Ftbi1Na3dvWFpqOW81MEJZUHU1TWc0b04ycnB2NA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 福井県南越前町 今庄の小学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE51b2d3R3NoNjZsQnRSTEI0cWZkMWUzY3RkRFUzSVVXTEpfbmh1cnZsa2xEbS02dVc3M2I3SFM1NmxtQTVmRXF4TG13eDMzVVZDeHhtVXY1SVhHblVMSDhxektIdlp1aXh2cUFCaDR4eTUtaExtTEd6TXlaQU5rYmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 福井県南越前町 今庄の小学校近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOOWViMDFabGR2cmxfVFV4UmdKY1FzNDhTS1hULWM5MFRZdWR0SmlGLUdVTVhaSEc5QTd6Y0dzSVFZUGM2OFVMdHZyQ19LS0dVcEJnbnhQR3FRZ0lzYlFrQkNqbF9aekxCVm10amFmQ256Z1RuSFBrcVBXVWhYWEdFVzJPOEhaSm8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月20日 福井県あわら市 高塚の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSzVzZEhKOE1pVFRhV0pSMTVMUGFNSGpNN29oaTdQOE15UUNYUHdVM1BsUXVlRWpqdlZCWjhteFVxbWx4ZE9lald2M2xzTE82QlhHRjY4N1pYaHloYmlMSjloSVp4TkJVRUxEZzFqLW4wSXB2dlRITmtfWS1rNDlXYkdWR0FGZGNYU1dkbGNaY09sdWEycmUyYktlbk3SAaIBQVVfeXFMTTdNd0dGYVNkV2o2bXNMbUMxMWpueFAwRFMxYkJ4OG55T1llQlNMa2duQWQ0X183NmRrSmR1MUU3d1lKbE43eVhPd0lMeDdKenRwb3lJSDNEeXROcXA5d3paaWxPUUZ4N08wTXNZbnN2SGNGRWdSNWZBOVBVYlZqb1NFdTZXVERSS0ZoTU5GVVhoM1c4YmJoaWJmOWphSVljUGhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 福井県あわら市 柿原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMFE5cHQ0MkptVC13d3dUdC1XYnRZZGRfTFpVQTZKYW05WndVcWtpMXlVZmFOaGZzWWIxcHp3ejNTZFR5VUZXQ3VicjNXRVo3bU40OXBZOEtwSWI4ZjVMVk5VcUYxU1o4RVFpcWgxU3VrR3k3OS1BSlI1TWlpLXA1di1lRnRNS2FsVmhvWi1jN1p2QVl4cUQ3UDlWRTfSAaIBQVVfeXFMTUtmeUIxd25wVkdSZEdybmhSdDJWWmFSdUFhQ2NPbFJndGhReTJxQTB0RFRObGc1TFZpQkYzbEZnQlVKdTROaHQtcXMzUU1KSGhIVjNkbjlESHdQeWJhT3lCUmpTVHFSZDJkMFg4Ynk1T3J6eldUZUtlazRrVUIzTTNWQ05oc3l6bkJHZTluMm5wZHBBc1VxRlBYMTZtcXN3UGJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 岐阜県白川村 御母衣の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 岐阜県高山市 高山市山田町の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月18日 岐阜県高山市 高山市岩井町の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月21日 岐阜県高山市 高山市朝日町西洞の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月21日 岐阜県高山市 丹生川町旗鉾の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZzR6LXNXV0kzcW1qNzk0ZS1IWkZobW5XcW1va2pKQzlGOURSOGh1QkU1d2htdWtsZXRnb09FbjY2WjkyRld6RGtJMlBGTFhtZmsydVFyT2dsUlM5WmVLd0hlbHo1bFJVR2VNVEE4VFI2dW1zV1dHM0EyakkxdUVERlExSXAxekd6em55NUhrNGlJb3FPNEZiOHBFaHXSAaIBQVVfeXFMUDFneHFoWU96czlkZFFDeXFXYzZfdnp6V1h0cUVDNDNNc3pLdDZfNktYcFZjVlZjR0NFRWNkeFJETG5QeEVIWUR3UF9Vd012ZzM4d2ZDbTBEQnBtQVlCV2lsSFVXdkFfZ19vNkhsbFZ3TVE5OUZBb0tQSGtnbTdvN3UwOXA2MWNXcHVickN4MDd6RGtjd2dBMUUtZEwzTVRmbHNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 静岡県富士宮市 上柚野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9LbE9GLTc1a1Y2Q0FBRFdwOE1SZ0JlS2xXelVjYm9fUi1mVGZYRjJscXkyZDY4RnVvSTE1bFRrYkRfcWdYZDRxMUExemJWVGhDSGY4VDgybDJJUkNzcVcwRjloTHl5Tnk1S3M3a21QLW9IUWVtOXNtVGVCdkNUZEk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 静岡県川根本町 犬間の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月18日 静岡県小山町 湯船の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月18日 静岡県小山町 湯船地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月18日 滋賀県米原市 住宅地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE12ZUdVckhWdDE0YXRZY3BQQ1pQR2ZXTG1DZUo5V19rMjVlOUVuN3R6UEJ2dElLSGh1MmNnczFKX0hkMkFxQ044VGRfeFBNMjM0QkFvMG9BRXZDVXNVUE5qR1FZUUNoaVJYZXA0VWZMdkNnc1dyd3BLTXUtYl9CWUU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 滋賀県高島市 マキノ町海津の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWHRodDcxWjhWZGQwTVJINWhJc3lfWWIwZVFCSVNva3lCSG9EdjZ4VjJSWjk1VVI5dDJRT21BaV9WUUwyN3dmc2NGRXlwWkR1dThSTnBqaWpVUEtLUkJqREl4RHBSYTJocTFsQl9JTzUzS3pISlR5WFh5X2xZajlkY3RjMnNLbTdEYWozbUNMbGZ5TG9aYld5WFNOZGrSAaIBQVVfeXFMUGhreGdEelUwU2lmWERtYnVKTkQ2dlZCazFsVS1uSDE0ME5uRlYyZzR1ZmlWa2Q0VFBGWHhZenJtRXJVdjQzSmhyamhyZ05hSWZDME5wNHhoVjdPaHlobEtHYVJaMDlEM2dIRVNUQzlNWXpUdHpLQXBqRk5jU25NeUVEcnV3bW9panQ1TV8tQjVWRTdIakp1ajBHc0R0NXlnaFJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 滋賀県米原市 米原市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1QaUpDRS1xcVJQWDc1ekU1TzY2eVhNQzRGQ0NXRmNqbWhJcE92R1cycXpoOE1FeHNhX2hhQ2FMQ1NjcGVrNXdWOUNrYjNhNHpwY192UFZrMFhneDBFYXFWLVR0cWVLbm8xeWJfMWl5ckRjNlREenY00gF8QVVfeXFMUGdBdWxkci1RSzNRQWdpTUw4MVloWkZiR1FzSFZOcDZvdUdqY0Q0dEhuMzk5anhTdGZOTFFuRDRDdkxjQ2ROelN4QlBLN2twam1GMEJXSjBURUpDR2NPQUlOanh2UXRKZ0N0b2x4bjBEbndQNEhIbDFGRy1BNA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 滋賀県大津市 真野佐川町の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 兵庫県宝塚市 公園付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE10OTd4OExaYzM0YmltU1JHRUhpNUFqX1ZPdUwtcFlCampfMUpBTDlDZWxwWndXelNFMUZOaWNwV1VqenJweXNzdjhlWUYxNkc2cVR1MWlWWXlLYy10S3BFR25aUkNGYlZsZHhFVGRFQkZ5eHM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 兵庫県宝塚市 住宅地近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1oU0xaMGZ0QjVtTHhURkZxcU5Fb0gzUmJaOFBseFdjNlUtZU1VZWlqcHNNV2pHQ2ZjTENEN3Z0Q3R0VXlYdnRnN3RzeUx6TTZtQ3A2RUVqQ055VHFxX3pnWUluellQenNsUHdlSEljaklZa0lmMTRRdlpOSQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 大阪府豊能町 豊能町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBFcU8xSDgyMHlDM1dWQnJrdXBPVzEtOUJsNGxjeUFhMjZVVHVOTDRCVU81TWhzaGlhcTVoaGo5bENzdnN5ak1KRnZ6UXp5WUx6dVRLRXFzcjVkb01MOUlnUUFMU3FTLUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 大阪府豊能町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBnMm8ySC1NeUNvUHVJRUFZQVR6RXhBRmx5SHFObG9fS3kzU2ZQN2VBRlBDb3pLcGdkaXRzZ3VUNDdhTDZrUjU0dllPeDRCc1F2Y05MOFppblFyajFrSTMwc25wYzV4cVN2Sk9ZMUdZN0xaUFh3dFQ4UjdEZng4bWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 大阪府豊能町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE4xSWctV2FGRGxoMkJQMU1DQk0xTTA3REZYc09UblFmTkxkRG8yLV9DdW5heW5ZT3NIc0l2NmdSM2dHOV9SNUJkYXJwZXoyblAtTm9nSU5sQzJ4REt1QldpVHI0bGJIZlFVdjln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 和歌山県高野町 西郷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQc1dnNHJHS0QwUzZpWlN1ZFNaMnctdS1LTEhTTHhUUUlvOUhpR0ZDRFdfZ3RWRmt3ZllGNTkwWTg5MGZ5VzkzeVlQV0o3RW40bUtvWTZCUmpRMW45b2htdnNucXd4T0lYbzhzZDNCdjZKLXRQUWlnazFqRHlUdVQyMFFPdk5hbXFXbDdaSXBmRlhOb1V5Vm0yc2FqQmhVcGJlV2fSAaIBQVVfeXFMUHNXZzRyR0tEMFM2aVpTdWRTWjJ3LXUtS0xIU0x4VFFJbzlIaUdGQ0RXX2d0VkZrd2ZZRjU5MFk4OTBmeVc5M3lZUFdKN0VuNG1Lb1k2QlJqUTFuOW9obXZzbnF3eE9JWG84c2QzQnY2Si10UFFpZ2sxakR5VHVUMjBRT3ZOYW1xV2w3WklwZkZYTm9VeVZtMnNhakJoVXBiZVdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 和歌山県海南市 下津町大窪の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOekM0RXl6NVhwT3N2TlhUYlJha1Q1NlZ3OVF4WGVxQjlzUGhVZHFnRWhDS1pINE45ZXY1VVhJdFFsTFcxUFN2NVlaRWpvNXpmcXpDMFVwMC1WV0ZKT0l1cEE0b2MyNl9RVDJqa3NCaGVnRVBONlg2TDllRzBDbDlyWF9DZnhKaFlTNzcyRkY0LW9GSjJwakVULUxjV1N5WU1EeUhlRFdVTEZWb0NYcG5Da3J0WUFIMHFzeEVsWUlscVlNM0ZuZldtYllYVEhHSGtyRU15TGVfekdJV3Rtd2toaWhNeU1LRlZrT1RnbE9VZ3hyQdIBogFBVV95cUxPend5aVY2QkgxUGVvM3IzbmFwbUFEOExkWmxPX3lROVdCcXVWSTB0NGV5Wkh6N3BUUTlzZ0dGT3A4TmhoS042R2dPRjZzZklLWmxBNExfellqUlNEalYzb1pSbk00TzBNLWJvbEQ0VGVOdEN6SDFkaEhPZU4zOWk3c2V6azlNdTJHeXVOSndpUGdjSVU5Nzc3aHZSM19YZ1BtcEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 和歌山県高野町 林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOU9ZVkNhLV9QNkJGS0MxbEk0eWFTbHIwbEUwT2lPb3NmRUpJWHhDZHJILURCenBqVlJLN0tLenFmWTFnVFZfcTdCYTNDRFRQczFPUUk1MnR4Z3AycW1EY2cxRWRyNXJhamVmbVF4c29NNldMdmlfNGZWZkhkWS1KNUxnd05DTHVMcC11RlR2b0lpRnljMDlQbzBPWHbSAaIBQVVfeXFMTjBMZmNVR2hXMjR0ZXN4LVZBdzROQUEzbHZ1NlgtMkk1VVpNMkktM0lvRmsyTE5iQ2tnY2pJUWJFbHN2RjhCM2xnRVVvXzloRTU2bzdiMmgtZ0FBazBBN1E3MG9FbGhROUt0U2d6Z0tqbDZjZlZybk04SWRlMHFFQTFoYW1JSzgwdk5wLVBRd0lGNTh3ZnUwWWlTaVJfLTJQY3Jn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月21日 和歌山県日高川町 初湯川の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月16日 三重県尾鷲市 尾鷲市三木里町（道路沿い）の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月16日 三重県尾鷲市 三木里の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月15日 三重県尾鷲市 桜茶屋奥の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月19日 鳥取県三朝町 大瀬の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMW96aEVvektQOEU2d0lLc0lxYXVneGNGWHVpWnAwd0tGYVpXTmhDRjVrb2I5TWVEc3JZVG9ldEJtTloySjk0djlMcnBsb05wQTBNWW1rbkVnaUhNY3lQZnpJeFlaZTMyelg1a0RJNWdjeHNEcW9sVElXaW41cW1fVnMtd29hT1RSRnVyLTdOcmp6UHpOTno3UERleWHSAaIBQVVfeXFMUEQ3eG1fQUVsQmNWeF9EYUFNVTlqX3M1eENuVnhtbzVFLTRXbzlQdDFlOXNwZFlkaXpxTExlWXRDeU1XRmxPaFFrOXNSNlhMU1JUblR2U2JRWDhvb1dndml0WHduQXdoU282TE9ZNHJudnFRRXYza0ZVR3J5Q2p6bzUyYkxHaGZ4QkhMeU40MGxyZUl6b2RXNjVTYVFmbTdBWUNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月21日 島根県益田市 中西中学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1KbExpeGI5dTVRM0tUb043OXFSbWJFRnhkZUFZRGFVNVlkNTQ2aGJ1dGU1bmhJT1Jaam1RcTBfM1JnYmFMUXZQT0tKbjRZNzV0OWVYcDVISjJBZms?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 島根県益田市 益田市久々茂町の市営田倉住宅付近の石見西部広域農道の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 島根県益田市 益田市匹見町道川の県道307号線、日の里住宅付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月21日 岡山県鏡野町 羽出の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSmQ1QTZWU3FBVnNkTTFhXzVCc1hmcHpENFRwa3B6ODJWbkJIVTdUZ3BfYmVBZHpVRWswOTVRZHJKQWNlYjZHN1hhM1FOVDVyYVNQc0FlVTBNc2ptZnRKSnI0d0V1NkxaOWdLTXFuYkxicUtVWnBaZk9sOFpxZ01kZ0Vpb1p5WllNVTZtY1NTSjFVQ1ltb3lzaFNrZETSAaIBQVVfeXFMTktyTXZmenRzLTVsWU1kblRYMGNmUUlXTDZzX2ZBQlUwa0ZITUlqWkx2UTZMNGxaSzlCN2NQbVZoRHoxSThmVHJvSnpYUGFWdm1ydDBBajlBMGdnUE1tc1NOUkcybUdjNGN4bWhQS1AwMXR6S2JTb1lrSVFxVGxlUjJyYlU5eTZPZHdORkY0UTFObEU3NGhnT2dUaHg1ZzJSU253?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 岡山県美作市 後山の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月19日 岡山県美作市 岩辺の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月20日 岡山県鏡野町 上齋原の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月15日 広島県広島市 安佐北区亀山南の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9jTURta3d0LUtiV0RocDd2OWhzdVR3RHFfLUJNaTBLbW42QkhhZ3VKSU4zWjZKNEdkV3lINEZERjlvdUZXRVNPclBPMGFCTDB0YlhhcDFCYjNhUzNfdFZCSE9xMWhaT3ZJWE82VnhkcHVhcm9VRFVrR21lSzFDWmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 広島県広島市 安佐北区小学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9VRTExdDZWemNRemNJbFh6clNpZGN5T3lXaFh4OUowcUhFUWtRN2ZxU0Ytb1FzVzBhaHpSZkRKR19YaE5pdjB1YUxCa29xMi1rYzNnYWNBUFFGUlJzOURCMFpvNGZqMW51em5sX28wT1hJaGZJUWJNVk5ka2lHUjg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月15日 広島県広島市 安佐北区の小学校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxOd0pIM0VaWnpIalpWN2J1UXJuWWw0SzRpMGRCNGd5Vy1WR0d6NHUyTFNQYTlnajV6cm5Wb0JISFBvTVViUVpDVVQxLUN4dHBYb2hpaXpQR253RFA0MGtGWVQzY1dPUmZnX2lGdnpQWXZKT3JRMmRNaXlscEUwMDRZZ1RHTVBWLUhmLW5vUU5zeXVOdGJ5djF4Y0xDRW9pcm5SUlVYZnRlTEZ1b0FzRUZwcEdJb09tbGRnNlJzSUNPR1NNMGRla1p0YTByRlBQS216Mk9iUDlmano0bnh1Qmx3MDd4Nlc5UzNISXh1cFg4V19mSEpLSGc?oc=5",
      "site": "報道"
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
      "title": "2026年6月21日 山口県柳井市 柳井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVzc4TUhtQVdRUnNhV25hRWpDbWxWVWh4blhYeFRNbzF6XzJpQzJmdG9LalVHbmF6UWo1dnU2Tk5yX0dGZEVfeWdvMXRWQVpjeEZDTU85bGwyQWRzSVVqWUhBaEFHNUlxSk5JNy1pNU5udUFBclluZFBuSlFYcElvQnJiNWo0YktobExTRVJJTEpWYnNYMUk3R2hmYW3SAaIBQVVfeXFMTmw3MXdKLW5HeE4wRHg0SzNKWTFYMjBvRThQc0laZTdiemxLVmJzUnBZVWpnMzQySVhtbjdGXzdrVHB1akZ3QXc1SVIyejFRN09ZOE9RTEJVTXhmRXlhZE9qc2R1d0JuTEFNc1JsUzRrblVTMnJpV21DM3UwQ3JBZW13R1ROLXdUbVlqOGdOd0RtVlg1ZW5TRG1lYV9qeGkyVlBB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月21日 山口県山口市 国道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1PNWxpbUZBM2w2S1BZV1JDVlhIVDJ1bmg2SWp3amZzOS10b0JPMU13T01nT0lqY05id21fSWdZR3VTNXZNSUt3cG1SS1p4UEhWS3AwbXo4MHJIZ0dGVTNGRkNJbUk0MDRObjgyc0d3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月19日 山口県下関市 駐在所から北東付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE84dG1CYzhuVnNvU092QVlRY0d2bTh4SXpNXzRMa0RpeXpoaW1sUXhQRHdOaXp3eDU0WThZNzhDdE02bV9nQXZUVzlZR3ROUEVYQ3RwRWdBTWNTZGZqZm5vaVZVUGlTVFhjZ0NiNk53?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月18日 山口県下関市 道路の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE01ek5vOUw3Um9hWGNnLV9tY3g1UFRiaXVmRmEtVURRR0dUZ0xXNXBaNWw3MWx4b0hMOTJZTm91a2hHOGM1QTJMUVN2eGdJMno0VGZUQmhiMFFZWnoxTE9PZm12eUVIeFpiUk5EUTBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山口県岩国市 美和町西畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVFhTejY2ZDRfY0VLcnBhUk1tXzFublZIZ2REQ2FmTUNlSENQMG93ZGxLb28zYTR1TUJNano0RC01X3JibHVoM0pzb0tGVVZxdlEwY3hSY3ZXZmZTYll2bHViQlYxTmJZdzEtY0U2TVR4VVIyVnFIUTlRQWNvMVBJQ0N1U1NxRmhEUTI2TXliMC1SQVp3ZjBqb0Z3djDSAaIBQVVfeXFMTWdST3JTaEc3MVlCWkJlLXFtaldCSGhEY1hjd1ZHN29YTjU0bks5YS1qTnhpbFNFeXA2cWlTZkwweEh4T1VrN29EWkl3TkFkWndfdE1aRm1SaWlpYnRUdVZNRVA0R29ERDNwQXMxVDctaHRTck1oenl5c0dIRWdBdE5uN2ZnQUQ1Ml95M2FjX3NvQWlSaDFGdEdsVlEyUDNoLXVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月16日 神奈川県伊勢原市 大山の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月16日 神奈川県山北町 皆瀬川の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"福島県","count":189},{"pref":"秋田県","count":168},{"pref":"北海道","count":130},{"pref":"長野県","count":126},{"pref":"山形県","count":105},{"pref":"宮城県","count":103},{"pref":"青森県","count":94},{"pref":"新潟県","count":83},{"pref":"岩手県","count":72},{"pref":"京都府","count":61},{"pref":"岐阜県","count":55},{"pref":"群馬県","count":51},{"pref":"兵庫県","count":50},{"pref":"富山県","count":49},{"pref":"島根県","count":48},{"pref":"石川県","count":41},{"pref":"山口県","count":33},{"pref":"山梨県","count":28},{"pref":"鳥取県","count":26},{"pref":"福井県","count":24},{"pref":"埼玉県","count":19},{"pref":"栃木県","count":19},{"pref":"奈良県","count":17},{"pref":"広島県","count":17},{"pref":"滋賀県","count":8},{"pref":"静岡県","count":4},{"pref":"岡山県","count":4},{"pref":"和歌山県","count":4},{"pref":"三重県","count":3},{"pref":"大阪府","count":3},{"pref":"神奈川県","count":2},{"pref":"東京都","count":2}];

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
        <span>対象期間: 2026年6月15日〜2026年6月21日</span>
        <span>·</span>
        <span>公開: 2026-06-22</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={1638}
        periodLabel={"2026年6月15日〜2026年6月21日"}
      />

      <h2>概要と全国集計</h2>
      <p>本対象期間（2026年6月15日〜6月21日）における出没関連事案の総件数は1638件であった。上位都道府県の件数は、福島県189件、秋田県168件、北海道130件、長野県126件、山形県105件、宮城県103件、青森県94件、新潟県83件、岩手県72件、京都府61件となっている。北日本から東日本の山間部および山麓部を抱える自治体で件数が突出しているほか、近畿や中国地方など西日本各地でも生活圏近接での出没が継続している。</p>
      <h2>主要トピック</h2>
      <h3>居住地および日常生活空間での人身被害</h3>
      <p>山林内にとどまらず、住居の敷地内において住民がクマと遭遇し負傷する事案が複数発生した。奈良県下北山村では、住宅敷地内で男性がクマに襲われ負傷する事案が記録された（※1）。同村では自宅敷地内で60代男性が襲われ負傷した事例や（※2）、自宅トイレを出た男性が襲われ負傷した事例（※3）、男性が怪我を負った事例（※4）、トイレ後に襲われ男性が負傷した事例（※5）が報告されている。また、石川県小松市では散歩中の80代男性がクマに襲われ負傷した事案（※6）や、クマに襲われ80代男性が重傷を負った事案（※7・8）が相次いで報告された。生活導線や住居の至近距離にクマが侵入し、直接的な危害に至る事例が顕著となっている。</p>
      <h3>山岳・農林業作業中の人身被害</h3>
      <p>山林内へ立ち入った際の人身遭遇事案も継続して発生している。山形県鶴岡市では山で男性がクマに襲われ負傷した事例（※9）、タケノコ採りの男性がクマに襲われた事例（※10）が記録された。島根県邑南町では造林地で作業中の男性が襲われた事例（※11）、2026年6月17日午後2時50分ごろに邑南町鱒渕の山中で林業作業中の男性がクマに襲われ救急搬送された事例（※12）が発生している。新潟県南魚沼市では登山中の50代男性が山の中でクマに襲われ負傷した事例（※13）、山中で男性が噛まれ怪我を負った事例（※14）のほか、南魚沼市と群馬県水上町の県境にある中ノ岳から丹後山への縦走路において50代男性が体長1ｍ程のクマに遭遇し負傷した事例（※15）が報告された。</p>
      <h3>市街地・駅周辺での緊急銃猟と捕獲対応</h3>
      <p>人身被害の恐れが高い地域や生活圏への出没に対して、緊急銃猟や捕獲が実施された。山形県南陽市では赤湯などで朝にクマの目撃が相次ぎ、1頭が緊急銃猟で駆除された（※16）。同市ではJR赤湯駅近くや付近でのクマ駆除も記録されている（※17・18）。富山県入善町では黒部川河口付近でクマの緊急銃猟が実施され（※19）、黒部川河口での駆除が記録された（※20）。富山県内ではこのほか、朝日町の海岸沿いで出没したクマが駆除された事例（※21）や、富山市で体長1mのクマが駆除された事例（※22）がある。また、長野県塩尻市では住宅近くで1頭が捕獲された（※23）。一方、錯誤捕獲への対応として、兵庫県多可町の山中および八千代区においてシカ・イノシシ用オリ等に錯誤捕獲された成獣のオスなどが山へ放たれた事案（※24・25・26）や、滋賀県大津市栗原での錯誤捕獲（※27）が記録されている。</p>
      <h3>学校周辺・都市インフラ近接エリアでの目撃相次ぐ</h3>
      <p>小中学校や駅、公園など多くの人が集まる場所での目撃情報が数多く寄せられた。青森県八戸市では白銀町の湊小学校北東での目撃（※28）を含め、高校や小中学校付近でクマの目撃が相次いだ（※29・30・31）。宮城県仙台市では青葉区台原駅近くの住宅（※32）、台原森林公園近くの住宅敷地（※33）、八木山中学校近く（※34）、五城中学校近く（※35）、宮城野区七北田川沿いの住宅地近く道路（※36）で目撃されている。岩手県紫波町では紫波第一中学校付近で中学生らによる目撃が確認され（※37・38）、盛岡市では幼稚園の敷地内で成獣1頭が目撃されたのち住宅地内を移動する事案（※39）が発生した。京都府宮津市では天橋立ケーブルカー府中駅やリフト駅の西側付近で目撃が集中した（※40・41・42・43・44）。鳥取県鳥取市では鳥取砂丘近くや観光施設周辺での目撃が相次ぎ（※45・46・47・48）、群馬県桐生市新宿一丁目の市街地（※49）、栃木県那須塩原市のJR那須塩原駅近く（※50）などでも出現が確認されている。</p>
      <h2>地域別動向</h2>
      <p>福島県（189件）では、会津若松市の住宅街での目撃（※51）、猪苗代町の磐越道・磐越西線付近での目撃（※52）のほか、南会津町（※53）、会津坂下町（※54）、天栄村（※55）など県内各地で目撃が報告されている。秋田県（168件）では、鹿角市尾去沢字新堀の小学校近くの土手で体長約1mのクマが目撃されたほか（※56）、十和田末広で体長1mのクマが畑を徘徊する事例（※57）、十和田大湯で体長1mのクマがごみ集積所付近を徘徊する事例（※58）、秋田市添川字地ノ内の道路上に成獣と見られる大きなクマが居座る事例（※59）、三種町鯉川で鯉川駅前を横切る事例（※60）など、居住環境での徘徊事例が目立つ。</p>
      <p>北海道（130件）では、新ひだか町の住宅敷地内および住宅街で小学生男児が体長1.2mのクマを目撃した事案（※61・62）、江差町田沢町の住宅街での目撃（※63）、下川町の桜ケ丘公園での目撃（※64）が記録された。また、苫小牧市の養豚場敷地内において従業員がシカの死骸を発見し、シカの状態からヒグマに襲われた可能性が高いとして監視カメラが設置される事案（※65）も生じている。長野県（126件）では、松本市の城山公園で成獣と見られるクマ1頭が目撃され（※66）、大町市のアルプスあづみの公園（国営アルプスあづみの公園、大町・松川地区）付近への出没に伴い休園措置が取られた（※67・68・69）。山形県（105件）は鶴岡市での人身被害（※9・10）や南陽市での緊急銃猟駆除（※16・17・18）が生じている。</p>
      <p>宮城県（103件）は仙台市青葉区や宮城野区など都市部近接の学校・公園周辺で目撃が多発した（※33・34・32・36・35）。青森県（94件）は八戸市の学校周辺（※29・28・30・31）や平川市新館墓地公園付近（※70）で目撃された。新潟県（83件）は南魚沼市での人身被害（※13・14・15）、湯沢町の住宅近く町道（※71）、村上市の住宅から約100mの場所（※72）での出没がある。岩手県（72件）は盛岡市黒川の住宅敷地付近の藪に成獣1頭がとどまる事案（※73）や厨川の幼稚園敷地内への進入（※39）、紫波町の中学校付近（※37・38）での確認が続いた。京都府（61件）は宮津市の天橋立ケーブルカー・リフト駅付近での目撃が集中している（※40・41・42・43・44）。</p>
      <p>そのほかの地域でも生活圏や観光地近傍への出没が見られる。群馬県では中之条町四万や赤坂、安中市松井田町五料、長野原町長野原中学校付近での出没が確認されている（※74・75・76・77）。埼玉県では秩父市大滝、三峰、二瀬ダム近く（幼獣）、日野鷺橋近くや東秩父村皆谷での出没（※78・79・80・81・82）、山梨県では身延町、甲府市古関町の畑（フン複数）、都留市、山中湖村での出没（※83・84・85・86・87）、東京都では奥多摩町川野や青梅市成木８丁目での出没（※88・89）がある。北陸・中部では石川県能美市辰口中央小学校付近（体長50cmほどの子グマなど）（※90・91）、福井県南越前町今庄の小学校付近（※92・93・94）やあわら市（※95・96）、岐阜県白川村や高山市の住宅地等（※97・98・99・100・101）、静岡県富士宮市（登校中児童による目撃）や小山町、川根本町（※102・103・104・105）で記録されている。近畿・中国地方でも滋賀県米原市や高島市、大津市（※106・107・108・109）、兵庫県宝塚市（※110・111）、大阪府豊能町（子グマ目撃やセンサーカメラ設置）（※112・113・114）、和歌山県高野町、海南市、日高川町（※115・116・117・118）、三重県尾鷲市（※119・120・121）、鳥取県三朝町（※122）、島根県益田市（中西中学校付近や住宅付近道路）（※123・124・125）、岡山県鏡野町や美作市（※126・127・128・129）、広島県広島市安佐北区亀山南の小中学校周辺等（※130・131・132・133・134）、山口県柳井市、山口市、下関市、岩国市（※135・136・137・138・139）、神奈川県伊勢原市大山や山北町皆瀬川（※140・141）など広域で痕跡・目撃が報告されている。</p>
      <h2>注目事案の時系列整理</h2>
      <p>期間中に発生した人身被害、緊急銃猟、捕獲、ならびに都市部や重要施設周辺への出没事案について、時系列で整理する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生日</th>
              <th className="px-3 py-2">都道府県・地点</th>
              <th className="px-3 py-2">事案区分</th>
              <th className="px-3 py-2">内容要約</th>
              <th className="px-3 py-2">記録ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-06-15</td><td className="px-3 py-2 text-xs">山形県鶴岡市</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">山中でのタケノコ採り作業中に男性がクマに襲われ負傷</td><td className="px-3 py-2 text-xs">（※9・10）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-15</td><td className="px-3 py-2 text-xs">富山県入善町</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">黒部川河口付近でクマの緊急銃猟を実施</td><td className="px-3 py-2 text-xs">（※19）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-15</td><td className="px-3 py-2 text-xs">兵庫県多可町</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">八千代区の山中で罠に錯誤捕獲された成獣オスを山へ放獣</td><td className="px-3 py-2 text-xs">（※24・25・26）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-15</td><td className="px-3 py-2 text-xs">群馬県桐生市</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">新宿一丁目の市街地においてクマを目撃</td><td className="px-3 py-2 text-xs">（※49）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-16</td><td className="px-3 py-2 text-xs">奈良県下北山村</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">住宅敷地内において男性がクマに襲われ負傷</td><td className="px-3 py-2 text-xs">（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-16</td><td className="px-3 py-2 text-xs">富山県入善町</td><td className="px-3 py-2 text-xs">駆除</td><td className="px-3 py-2 text-xs">黒部川河口においてクマを駆除</td><td className="px-3 py-2 text-xs">（※20）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-16</td><td className="px-3 py-2 text-xs">青森県八戸市</td><td className="px-3 py-2 text-xs">学校周辺出没</td><td className="px-3 py-2 text-xs">白銀町湊小学校北東など学校付近で目撃が相次ぐ</td><td className="px-3 py-2 text-xs">（※29・28・30・31）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-17</td><td className="px-3 py-2 text-xs">石川県小松市</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">散歩中の80代男性がクマに襲われ重傷を負う</td><td className="px-3 py-2 text-xs">（※6・7・8）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-17</td><td className="px-3 py-2 text-xs">奈良県下北山村</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">自宅トイレを出た60代男性が敷地内で襲われ負傷</td><td className="px-3 py-2 text-xs">（※2・3・4・5）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-17</td><td className="px-3 py-2 text-xs">島根県邑南町</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">鱒渕の山林造林地で作業中の男性が襲われ救急搬送</td><td className="px-3 py-2 text-xs">（※11・12）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-17</td><td className="px-3 py-2 text-xs">山形県南陽市</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">JR赤湯駅近くで目撃が相次ぎ1頭を緊急銃猟で駆除</td><td className="px-3 py-2 text-xs">（※16・17・18）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-17</td><td className="px-3 py-2 text-xs">長野県大町市</td><td className="px-3 py-2 text-xs">施設影響</td><td className="px-3 py-2 text-xs">アルプスあづみの公園付近に出没し休園措置を実施</td><td className="px-3 py-2 text-xs">（※67・68・69）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-18</td><td className="px-3 py-2 text-xs">京都府宮津市</td><td className="px-3 py-2 text-xs">観光地出没</td><td className="px-3 py-2 text-xs">天橋立ケーブルカー・リフト府中駅西側でクマを目撃</td><td className="px-3 py-2 text-xs">（※40・41・42・43）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-19</td><td className="px-3 py-2 text-xs">北海道苫小牧市</td><td className="px-3 py-2 text-xs">農業被害関連</td><td className="px-3 py-2 text-xs">養豚場敷地でヒグマに襲われた可能性の高いシカ死骸を発見</td><td className="px-3 py-2 text-xs">（※65）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-19</td><td className="px-3 py-2 text-xs">長野県塩尻市</td><td className="px-3 py-2 text-xs">捕獲</td><td className="px-3 py-2 text-xs">住宅近くにおいて1頭を捕獲</td><td className="px-3 py-2 text-xs">（※23）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-19</td><td className="px-3 py-2 text-xs">岩手県盛岡市</td><td className="px-3 py-2 text-xs">学校周辺出没</td><td className="px-3 py-2 text-xs">厨川五丁目の幼稚園敷地内で成獣1頭を目撃後住宅地へ移動</td><td className="px-3 py-2 text-xs">（※39）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-19</td><td className="px-3 py-2 text-xs">鳥取県鳥取市</td><td className="px-3 py-2 text-xs">観光地出没</td><td className="px-3 py-2 text-xs">鳥取砂丘近くや観光施設周辺の道路を横切るクマを目撃</td><td className="px-3 py-2 text-xs">（※46・47・48）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-20</td><td className="px-3 py-2 text-xs">新潟県南魚沼市</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">中ノ岳から丹後山への縦走路で50代登山男性が体長1mのクマに遭遇し噛まれ負傷</td><td className="px-3 py-2 text-xs">（※13・14・15）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-20</td><td className="px-3 py-2 text-xs">富山県朝日町</td><td className="px-3 py-2 text-xs">駆除</td><td className="px-3 py-2 text-xs">海岸沿いに出没したクマを駆除</td><td className="px-3 py-2 text-xs">（※21）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-20</td><td className="px-3 py-2 text-xs">富山県富山市</td><td className="px-3 py-2 text-xs">駆除</td><td className="px-3 py-2 text-xs">富山市内において体長1mのクマを駆除</td><td className="px-3 py-2 text-xs">（※22）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-21</td><td className="px-3 py-2 text-xs">北海道新ひだか町</td><td className="px-3 py-2 text-xs">生活圏出没</td><td className="px-3 py-2 text-xs">住宅街で小学生男児が体長1.2mのクマを目撃</td><td className="px-3 py-2 text-xs">（※61・62）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>今期は総件数1638件と高水準の出没動向が継続した。特筆すべきリスク要因として、住宅敷地内や散歩中といった無警戒状態における住民との至近距離遭遇による人身被害が複数県で確認された点が挙げられる。また、駅周辺や観光施設、教育施設への接近事案も継続しており、人身事故への発展リスクが極めて高い状況にある。JR駅至近や海岸線といった本来の生息域から離れた環境への侵入に対しては、緊急銃猟や迅速な駆除措置が講じられている。</p>
      <p>次週に向けた警戒ポイントとして以下の事項が重要となる。</p>
      <ul>
        <li>住宅周辺および敷地内への接近警戒: 奈良県下北山村や石川県小松市で生じたような住宅敷地内や散歩中の遭遇を防ぐため、早朝・夜間における住居周囲の確認、ごみ集積所の管理徹底、藪や潜伏場所の点検が必要である。</li>
        <li>通学路・教育施設周辺の監視強化: 八戸市、紫波町、盛岡市、能美市、南越前町、広島市など各地の学校・幼稚園周辺で成獣や子グマの出没が相次いでいるため、登下校時間帯の巡回と警戒連絡体制の維持が不可欠である。</li>
        <li>入山者および野外作業者の安全確保: 登山路や造林現場での負傷事案が確認されていることから、山林内での作業時や登山時における遭遇防止策の徹底が求められる。</li>
        <li>市街地・交通結節点での緊急即応態勢の維持: 赤湯駅周辺や黒部川河口付近のように市街地近接エリアでの出没に対し緊急銃猟が実施された事例を踏まえ、関係機関による迅速な意思決定と安全管理体制の継続が求められる。</li>
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
          <dd>2026年6月15日〜2026年6月21日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-22</dd>
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
