// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月17日 / mode: daily-report / 生成日: 2026-06-18
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-17-daily-report";
const TITLE = "2026年6月17日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月17日は全国で計286件のクマ関連事案が確認された。石川県、島根県、奈良県で人身被害が発生したほか、山形県南陽市や京都府宮津市で駆除が実施された。東北・中部を中心に市街地や公共施設への接近が目立ち、全国的に活動の活発化が記録されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-18",
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
  datePublished: "2026-06-18",
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
      "title": "2026年6月17日 石川県小松市 岩渕町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFAyN3plaGNYRGtORHI5UUVKMm1JOVZrcW1pYlhVV3FRWHJtWndlcTUxQ0d5N3pOZXhBRVNqeUh5VnQ0Nm8td0hsaHpGcS00T1dhR1pxV3FzVWN5ci1JSk9vTnBrZHVtbmoxVVNpN2lYamNjYXhKQ0ZiSjRqQQ?oc=5",
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
      "title": "2026年6月17日 奈良県下北山村 自宅の敷地内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9kWkxQajZYMWhrcFdFdC1rdGRJY2hESXlBZ3BmTmhyR2tjWEtBMnEwWGxfdjZZeDEtakVhNWhSb25aOGlYRVJMRFRrSWRrVmJqc1ZqVjJpZnNPWmlrX3ZMXzhteTFBcHRvaTdCUGJRdVdNOWpweFhXcFdBVThDSmM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山形県南陽市 赤湯などの出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQdzhUTVUyM0RrWWZkc0xMSW54X0RyM1VSengxWVlYV25iMDlnUThtdEllZEVUWGlaemd3TFVjNC1td3JRNFB2cWFyWDYyVzBrX09SbGJHdXpXQWs4MjRCNWFDUzdoNVJpeFRPRGQwRGo2dlBhV2lKZl9qVF9qc2ZLWUY0alNGS0tsNVEyYjJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山形県南陽市 南陽市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPaFFGTlk3SHZZaWx5bmI0V1kzYnlVM3JTT19qaE80R2p3Nmo4Z1JaTXFsQVR1eE9OOElWRlprQlhXMGl2QTlkbEFkemdKQktLYTU2LXRDTmJTMTA2ZHlNeXJGMEdwLTNsdFNhUm4td0M2UUdDRXhURUtqdTB0NHRyWWZHSTc1ZHc?oc=5",
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
      "title": "2026年6月17日 山形県南陽市 烏帽子山公園周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE54eVBNZjBzNy12NU8yZUV0WXpiTmVVaFZEcTJIVzFXWTRDcnNUN0JveXAtLVhWeU5Pa2tBeHlWRVZLM25RbHREZS1uTHF2MmpQbG9hVGg5VlhneEs3Q3E2SHplaThrb09yWklBQWhKbjBfU3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 京都府宮津市 天橋立の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1OMWZLYTJKMkJ5bE12ZlV5dFVxVFZfMXQ1RmU4VENoaFFncVA2UmFweXp3dTBoY0xVRnZ6MFo4aWcwMjByb2hlaHk3bw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 兵庫県多可町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9sc2xXWktsYXk3Q0tEbno5TjB3TDNVd3pTWHNxZlZsLXh1MVdSZWoyb3VUV2l6U3lPOXRuQWwyTDVmWW1GRko4YmxjQ0pUODhFdkRvYjQxemFuRXVtazhZ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 滋賀県大津市 栗原の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 宮城県仙台市 宮城野区七北田川沿の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5TZElvbUZHdzJkZnZJbjJMSXN6SFozSXBvVUwwbERCMk9uZnFOV2xIZ3YyaDNjblo1Yk9FOWJHeWF4eUcwOXZ4WFpwZ05HWXIxODB5Q0txV0RKWURCRVpnNjZjbFBJWjlMZ0lFeWJKSHdkV2s0UndDdmJiRFdJZ0U?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 宮城県仙台市 五城中近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE04bnhfcFJoOFIyWUlxWXVlY3ZsaDllYkl6dndwWjhsYUU3RXpEMzF1RkREZU9OTmlyUXh1MDIyNE10VGo5X3BHYkNsUjlFQUtpR19wcUFLbG1yYlh5SHVJQVNtcVlsUkNlNkV0RmozRy1La1VJRzl3TGc0UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 宮城県仙台市宮城野区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1zb0dFUXZpVlpOSWt4RG5DWUhBWG5vN185SDBfMVhzWlY2eW5OX1hwWWdxNXk2YllDTm1RSVBJM2dXMWFmTmE0NTFfbnJMZ2w3T3NISjVocG10aHhzRlN4TnY4bFpBVmVzb1FWSU01cXc5cGpjU0xncC1XRjJweWs?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 宮城県仙台市 宮城野区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1zb0dFUXZpVlpOSWt4RG5DWUhBWG5vN185SDBfMVhzWlY2eW5OX1hwWWdxNXk2YllDTm1RSVBJM2dXMWFmTmE0NTFfbnJMZ2w3T3NISjVocG10aHhzRlN4TnY4bFpBVmVzb1FWSU01cXc5cGpjU0xncC1XRjJweWs?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 宮城県仙台市宮城野区 宮城野区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1zb0dFUXZpVlpOSWt4RG5DWUhBWG5vN185SDBfMVhzWlY2eW5OX1hwWWdxNXk2YllDTm1RSVBJM2dXMWFmTmE0NTFfbnJMZ2w3T3NISjVocG10aHhzRlN4TnY4bFpBVmVzb1FWSU01cXc5cGpjU0xncC1XRjJweWs?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 岩手県盛岡市 住宅裏の空き地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFA2cks2bGV4M1lNS1hJd0ZCdXJsYm5pbEU2eTFnNk4xOVNKWFc4eEcybk0ydXlMc01FMW05Z2s1NGlhS3NVaF9WV3NHalpFSHh5bnBaQkNHVDRVa2RfSVZ4NGc3TUVSUUZ6RGRYOWtka0pudUt6ajlzUGFtcU3SAYIBQVVfeXFMUEJQZmprMkdTa3VSU3k0bFRPVnEtYzh5akpCSU5rdkI3cVFVeE4wakpoS3JkQWZJN0QzQnBDTm9WekU5UUt6bFdLVmx1dS16TFBTWnJWcHVlbGMtbV9GaTZYMUdvNmFVSWstck9qb3JXV2swd09JSGpNVUNpTUxhWmhkZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 岩手県盛岡市 乙部４地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVXpkSmNwaWUtaXBkRUNjUVJ2V1B3S1NFRHBNenA3QVRtcVpWOGlTc0U2dVdiWXpKZXduejYwVndvTmhwWWNGQnRKaEV3NGpDVTdpOGJ6LVVVb1ZhaUJXa1BFTEpJbElyUTVWek5hdTZCOXQxQ0x4UVdJNE91ekxldUpXa21vLUJBQmxwWGREM2ttbmF3dnJaMkVKRzjSAaIBQVVfeXFMTXlDSWI3OS1QSHFkXzdBek4zZjV4X1diWnBicDhOczZVMHpGM3pycUZVdmhkMWw5YV95WU9XWS1kYlRpb05McDZITTVQcjNuQmpaOUtfRmNud2RPcU1VeGpiTWpXNXFnVjZmdE9PVXlyNVUtSVh2NFRuSF9oOFFBWWUxN19TVllEenBaWXJWXzVBZk91WWFuRmxNaGZJNjdPc213?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 岩手県花巻市 高木第２０地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMlEtUjRFamsxdDZTRnJtcDlONFl1SjFDZ2RmWmhkX2MwWUZlaTlxZEoyUnhGUzkyRXpESXV6UjJfaTJwUFUyX0NsclRJUnZOWWZvVDIxLUlGaWxEaVNBOGxheXJobUg2TXUwWXRScHZvU3AxQlJaODQ4NXpDY0ZIdXpzV1R5ZXpaRXdEeWpEVVJjdFRkZlYxaG5hVzTSAaIBQVVfeXFMUF9ZVjJDSWRjUFJGb1FUQ2xYbVk4VGpoWUU0Yzcyc1dheXB1UEc0T1ppN2J6NmxIQWQzQmRrQWZadzgtWWRsQk1mZGV6Y29GUi1GNUdsMEJ0amRPVDF6dmVJbElzX0g3SGMzdHhQcklXSW1TUEQtVkZjTHdyVkxuYW1IdUE2MlFaVlFJWFpMaHo1Y3pWMjI4aFJJeTVCbGM0OTJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 岩手県奥州市 胆沢若柳谷子沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVUVlVm9oRTZpd2pEWGx5c0xPUmxKVHpqMmU1SUhGOFFEdU1lYURDaUVPRE5sYU1OWVN2a0NEeF83XzZIaFR0YndvT0o5bFVFQkdveHFBVHlxbjNpRlFyenhuX29KaWVTVS1JeEFWQkZQVnM0a3dVSTZWT0lBOFRvTzdGYkpBcHZxV3MyclVyeHBmT0RwcDFCNkdzOHLSAaIBQVVfeXFMTzFQY2pCYm1hbmxPQ0hjS0Q4WUZMWl94aWdIZTlMNktIS1pDVzVtYXk5MHVfWml2R3FLOGZjeHAxaUZwM0VlX3o4b2ZtdlB3dWtDN25ubDJVUHFqSnhyUWR6V3U4a2pGYV9iQkdsSG44MTNBMjBiRXNCaGF6MFJvangwakt0SmNTMHpjSnUxWnotWWMxN1Yta1ljZjBvaGZiWFFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 岩手県九戸村 高校グラウンドの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9wdEpJTEVPNmh6OW9mTXdhMkxURjNHSEw4d3RreWRna0N4b0U2TFdqSWd3SmFMZTNla2FyUFliejBxbW40U1cyZXRudWwwUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 秋田県大仙市 協和境岩坂下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRC14ZEZaSi0xMjFMam9EXzNST0RYWlFSZmZGQk1fWnRtMFUtUG1xSExUdHFwZ2FPb1VkaDZJRVdKVzBxYmVtT0xKSko4MElaWktvdVBJS0Y3cWxfWE5oTU1pakxfUFl3eEJYS0g0RXo4OURGdnR4cXhmbm9aZHltQUh0N2VVVFVwRnFBX0FEb3BUSDNGeS0yVkRIRC3SAaIBQVVfeXFMTWxDWFNwT1FfZ0xjcV9jVGlVMGx4UHlQTUF5YW13T1gtVDhlbUIzQ0V0ZGZYUlQ0TjJKREQ3RXhYMlVrZ1B4NXZxZkxNSGxiOThGZFUwYS1VVWtrNnJsbjUyQ0RqejZrYk1VaXZoN1hOa1dEREpvUHRITVFWa3ZtOXl5SVhKTjM1elZnWWc0cWhsUjZLOUVYM1lUaTA1SVJFazBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 秋田県小坂町 小坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPOWZXeEVCbzlRQnFreE1YUFFNbVRYS1JKemdQSEVsRFUzMWpMekxlX01DZGdrczRHR19kc0l1MnVBMjRMb09ocUdmbm5yVE5MYmh1Rm1iYkk4bjZwSWtrU3F2WlV3QnI1TXRmZko3cjktWUVWZ2FwVnJ5OUlmYWR2aTIxeHJwRU9rX1lXSEVXRDUtOWFSb1Nyc2pYaHbSAaIBQVVfeXFMUEJjLWpremhvMkplTl9OdzZvdmlMNWRxZ2JqcGZQUW5iT0xMNlBleWxjRlZBVVFoWGsyRXFMY1RkdHRFaFp3aTI4dlYxeFltT01iX01HOTJjMkI3YXBUb0dqYnZVUkRZMUVRdU9PQ2xVYXlyRmxKWV9mNVplQmN4Yk95Q3JOWFpsNzBUajlFdlEtY3I5OFotcFZ5SzlVTGt0WWJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 秋田県羽後町 西馬音内五把出山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcnZBSHdpNElHUG5MNXF6Wm51NmtCTXpZWEt3bVRZVGVhV2h5aUd6bGZJS01QSEJObXUzMkMwb2lPUC1SenBiYlByNjVlMG9PMWt6c0s1dEhNRS1uVEJfV25TT1c1S1Y0RGlYUzJMSl83cGxlTDFBVnBZajdOdWFwcFFjSVk1aUM1UlhoQmd6SHlKdlZnZDR4ZHNUZ2LSAaIBQVVfeXFMTk8xc2s3dWRLck14RjNyMFNtVTBSdVRONzA1dHp1Q0k4aENzcVRobkJENV9SM2k3X1JfaHVCaS1fdTFrVmJqRDFlYklVU1ZESm1meDB5bWQ0Rmg5TXVOdUthUkREOWdBc1VsVy04Qm9kVjVpOFJYWHVDclJJZHpBcTVsUWhtVDdNdEtUUEFiTllRRjk2ak02WmVYdFc4QUk2dVhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 秋田県能代市 字悪戸の市道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9KelhENDQ5MkdtZjZKeWFBazRjYl8zc05zRFB3QU53bHZDSnNmY2NLRmo0NWJCa0VraGEzVTVuTTZ0ekt2N3RpT0pJZE9fT29zLWJqcmwtT2RtenotQndSc29vZ1ZjX1JfNXpSVjdabVQwVU5VSEo5cXN5SC1RVkU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 秋田県能代市 風の松原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiR0FVX3lxTFByUW0ydmZVR0pfTXpGV05WOHBxZ1BRQlNGRDI4ajAtNW01VDlfUFJIQU5fLWUyMUZnVW96N3RvWEZSMWdvQUNv?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 福島県福島市 土湯温泉町横道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOalR0MEZuTXVSaklORWV2UThqd0MtMzZqWS01WGcwN3lvWGs5cGlwOHA3SzFhVTJGV21JNWNyR204TEZ0elpsYThpTFkzdHd1MWN5U29idUFZdi03RGlKbk80WjB3VGMtTGI1OFdrd0dqY01nc3hiclJFR1U5bkpiVk9adzlFSHNTRkc5UFZYN0thUEJOMXpmN3FtSGvSAaIBQVVfeXFMTWhvZzM2V3M0VkY3dVNZdXpBRUpsMEZhRi1vS2ZZYThvV2x1eFZkTExpemZjejM5V2tqWEtpZUZvLVhuRHE0bkNmR2wybmtKMURJQjBSMDdLZmNfemk0N3Fhc0ZscFlDNHVDNjBXaElwMlpFTGdWN2FOMm5oVDdkV1B6MGd4dkZZeDlBN1pkcXp2XzF4dDJ0a2FkVmJfNms0emlB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 福島県福島市 国道115号の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBEMVF3TzVqeXUzcTk1ZGlmUExSVTdjYXl1amluR2l4ZFVfMW54c2ZrUHQ4UG5FaE9NQk16eWdYNmV1TWEzdTk5RlQ0Yzd6dUxMM3RYSXhXMXlwSTZLZ2FHd2xWWWVaSnk4WS1oOGV2LXJpdTJUNDVZeFhObU1vUzQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 福島県只見町 大倉礼堂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQm9RUWthSnhSblNycnpPa2lWUnBLU2FRcjhkLUJqQlhlbVZPZ3RtVWFuNGlBVHk4Tk90WVFNVExoUjR0OFdEcURWN0ZSeHpvcXFWOEdpdURmQm9VSVRDM0JJbnkzbVNMcnVXLXczLTF0cHpmNk9EWFIxSDZ2NDBCQks4bUEtQ0lObUVNTHRNM0phYnE4cXJ6RVEwNXrSAaIBQVVfeXFMTUk3US1WQzF2bkpfZHo1cVhUVmd6d2t6UjB3V2MwVEZqT0RQR292XzFtdURrS3RpTUNnLWdYZXNNUVZRdFVrUWNnSE5uT1YyZERBN0NfOU1HeEQ1dnZ5dkd6YkFOVlRhVU1RbzhuMzFHNnNYRlByVXJDaGVYdm1oT0IxNzRReW1jdjJhV2s4YkFnRVNuXzZXb2tfMVhlNV9nZDd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 福島県只見町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE9qWFQ5bUFJVTZrTkRKMUVvRWpxQTA3OWU0LXRXUENxLUl5VnBrZHhKakx4WlM2eGJYenNyUk5LY0ViQmg1R2VJQ2ZkOUtra2JnQjZwV2hjN2Y2NFBVdlZhd2lwSHpVeHhmMjNBU1oybmh0YTZWUTgxTGJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 福島県西会津町 国道49号の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBEMVF3TzVqeXUzcTk1ZGlmUExSVTdjYXl1amluR2l4ZFVfMW54c2ZrUHQ4UG5FaE9NQk16eWdYNmV1TWEzdTk5RlQ0Yzd6dUxMM3RYSXhXMXlwSTZLZ2FHd2xWWWVaSnk4WS1oOGV2LXJpdTJUNDVZeFhObU1vUzQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 青森県西目屋村 中津軽郡西目屋村田代字山科の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 青森県西目屋村 山手の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNYVB1UXcwY2JOTzl2T3RVY1BrdXlmc2VlYm1waDNLOGRmcEF2NndUTWUzYzRzMEN5b3EtN3dmZXVzOHlQalNNRnZzLUV3Uzl2SVd2aF9ydlJKTWpnQl9WM0NtRFMzdGtXdU13b0VjNjMtTmlMby1Ua1N2d2xwOEtjbXhJWjE3d0k?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 青森県階上町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBLcTh2OC1TX0p0REJIUEljcW0xTFg1Q0o5SWNObGV3LU9BVFY5WFVKYkhJUjRSc2xOV1VrOTJHbzdyaEc4ald0SDNzWnRCV2RtRW95MDhsbXpBc1ZYQUJHaE4weTNDNGtUQlVxeFVFZ01rTk5UMHlGXzlzTdIBgAFBVV95cUxPM0JYakVKYjlUTktLakdUYU9RT2ltU1hIR2o4VjQ3bHlhdkFhQ3RUcHRiSER4NUV3TENJV2NtVEdjOFJkbHlyV3ZyUTRaVnBLWEoxNGVhOXRrQWtVREZNdk9EemcyRHZiODhIMnZpV2NlckpwWEhKMzJZdGpfVldacQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 青森県五戸町 国道4号の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPMmRCWGdpcEFNdVM1cWhCT1J6d2JVNngyem11RXZkbkJaSUxVOWc0M1V6UTE3aWRSMDJsSk04cm00WE9GWVVlNGZMWG4wV0YwZG92M2YzdndPTkZYWVY1RGFuekRjRlhkMjA2YlhVOWFVV19JVUpvVU9CZDg3MkdVWmc5dUhoNE0?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 青森県鶴田町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFA0aTZhYXc5RmNhUkxGZW96QjVnODR4MW9CVEdNdC15RTBmTXk1R3JoUEdwQmdfSFUwRHhuSXZfT2ZEWWxZMFlpWGxGX1dGanpNcklPVjJ6VXY?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 石川県白山市 旧役場付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9SaUd5ejV2QVZMMXNubmZ5Nl9oTXFLTTVndkZualgyOS1wcW5UV0hVTHVPbjA3LTVDaEdZQlBPWjc5dEc1dEtYQVVGY1BmN0VaUWR4NG1VblR2a2JtN1FLRlNmWHM5YVlUMkhSdjhKYWhtSWpoVlRXMnVabzJENms?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 長野県松本市 城山公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9GY0VhRWVLMzVqZ0tRUVluTURJeEcxMmtzRTAyX05EU3lYLVVyTy1TN1JpdEVZTjZEY2k5a0lzUjRKTER2NHE1UjRGY1JjaWx1NUNyNloxZGxaYWhFMXdsUDZkS1l4WXBMMDRjdHZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 長野県松本市の出没情報",
      "url": ""
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
      "title": "2026年6月17日 新潟県十日町市 川西地域鶴吉地内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFBJdXRZbEx0N1VseVJMQWRhNXlKdDlMRHd4SVprZUFwSUd2TDFtWFhSU3lkWlFJZTVFalBFQ3MzQ0NlakFZZWMyMDB5QVZFb1psRzVOMUdQU3h3Ny1VYXRV?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 新潟県十日町市 鶴吉の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 新潟県三条市 大谷地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMVFncmx6UnFrOTZZaEhCVVVxZ1Z4aFJKYVpyYnhzQWgxa0RpYzNhLWJ1QXplNVhBclVnTjNncjU0S2lhek45RmhvQngwOVE4S0h2cVdjNkh2US0yWGlwYnJySkVjWU5ORUNQd3dDZEtmT1ZTZE9EYXp1Umc1ZGZvOVJGUWhVMlNFaGlidjFDR3ItVjJNOVZlT2Zhcl_SAaIBQVVfeXFMTVBIMkx6RUExd0ctUWY5am1wSDVJcEltUWFkX0JISUZ0TEJkT0NNOF9OR1pDRy1IVGhaYkQzc0tyVURvVGJqazQxZXNSSV8zZlVLX3FxNkR2SF8wY1k2SXZEUzZ1ZDY2NndKSVFqNTVTcHA0UTNIUjVDLUtYckk1TVNCaHhqal84Sk9fLU8tWEg4QUlVNXF2aW14YXFGWDZxVXJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 新潟県三条市 下田地域大谷地地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 新潟県妙高市 上堀之内の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 富山県小矢部市 浅地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQVZLVWxKY2E1OEpIUnJua2FKRE9VVDdJNmFFcnZKVVJVQ2lsaXBWcE8yTTRlS2Z1WkFMcXBXWENZSktQVm5iVjJ3dVdndkRhYlFVSlJtLU14di0zUVo5Sk1xWm0xWW5ELTA0RjRjdnVaLUx6NnN5UDY1SHdvQXZEM1JTTEtubDVGbk5fUmZoWUxHc2kySVZPR1daM1XSAaIBQVVfeXFMTVc1NlVlOUhhdUxUY3cwa2E3azc5c3lzWXNWbGRTTnlPREF4RGNYdlZmZkJrOFBWbEtHQzNaUGpZZ0VwYWtyN0tJekNwZEZDbDhFT2N6R3laNXNOdUM2cGRub0NWOVhjd1hRcUVtMWlkdjRiSm04aU9aOVYybW1zR3k0dzgyQzFEQnd0LW1XZDI3ZzdaRGlQMmRpZTF6Mko4WURR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 富山県氷見市 稲積の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSXR1OFI0WTdIdXJJcWRZTHc2X0NUcEd1bENlSDR1ZVBjbnhJYWI3VVlkbmxUeHAxcUdpVmhvLXRxMzlReVdreDZpMTQtbk5mQnA3YkR6Q29KRFpqdUhzYldFenh1NUlvRC1GVzhyYTRORldTUVNtdGxnem1hOUczSU9RSXdMYzV1Q0JkVGstS01PMnhkaHQycnlVWmXSAaIBQVVfeXFMTUpjRTlrbGl5d094aF9fM0Q1SUZ0Q09FTWZtVXpFTUhVUmx2MXVEaVN3NzNCaUFONHJwT1Rvb2xjd3l2YzV6dkZKRUZ2TUV2MlVjOGtNTVdTbTU3X0UxRVZWT2JEWnJVMHExRnBwWFNEYkRYUklfQ1NOSXZHeU1mWklEaldZbDlQbWdqMzJCSGhRNFhpWS11MW1xTTJ6UXYxdjVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 富山県氷見市 国道160号沿いの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1TYm1yZTdVZGY2UGtvZF9iV05NMTZKNXhjNG0wMmhscjBublRsejgzSkVfVXBfREE2ZVVrc0JEeVJsSXlORHktb0ZNVkU1dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 富山県南砺市 利賀村北豆谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 富山県南砺市 見座の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 山梨県身延町 北川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPelhtRGZicTJoaHZ3U280Vm9CM2NWNWRXU3BqYno3WUthX3JMVU1LeVJ0cUVXZy1TWWRPSEc4RHp3cWUzdmVTa3B6TUlVaVhpYWpXUWczLWhlR3FhTk5EVi1ubmktZ1NvZzRCX2JpV0ZQUjNXVGNQdVNyNUpoUklYcDIyaWZGX2V4VnRwako5dnlzcTFjVUxHSXNuRDjSAaIBQVVfeXFMT1ZVUjE0eXV6eWxJT2tycTVKdjB5dTc0Wm4zeFFxaFk1NVRTT2sxazZwM0ZCUm5YellpRmJHbUVVaG56ODl6VXljbGx4M01OaEZzRExkU0tMamZXWERBT053MnNpc0NDZzBJS3pvdEw2b3hBamxBVnpFdXk5S2REWHZ2UU1rTU9IU3hQbU9GMmZlSkNkTVEyRTVFazFJS2FGOHhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山梨県身延町 国道付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5nLUJXUmlRX1QzYVVNNDFuaW45bURRX05SLWU2Zm4xVzNOc1loS3pEdEdYdlBiQWpSV2dFVUFweVMyZTk4UWtRRW1qa2lmLS1XVENFR0VPU1FsSXJhdFhGdnpRaVh0QjBMUF9pbVBwZ1hMT3hYWldlcl81VQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山梨県丹波山村 丹波山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9mZW9wdFEtR3JYQXpab1BmNkVDSDhHbHRlcTdjMFVVRWtoSzRyaUE5akgwX3Z2ZGI2endQTnVpckNjZTllMnlvZlpyek5aYkNFbUNUd2hXQ3pQbVE4VWdsVGVrMEo?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山梨県丹波山村 御祭付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 山梨県小菅村 鶴峠付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 静岡県富士宮市 上柚野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9LbE9GLTc1a1Y2Q0FBRFdwOE1SZ0JlS2xXelVjYm9fUi1mVGZYRjJscXkyZDY4RnVvSTE1bFRrYkRfcWdYZDRxMUExemJWVGhDSGY4VDgybDJJUkNzcVcwRjloTHl5Tnk1S3M3a21QLW9IUWVtOXNtVGVCdkNUZEk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 福井県あわら市 高塚の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 福井県池田町 東角間の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 岐阜県高山市 高山市山田町の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 岐阜県揖斐川町 春日大字川合笹又の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 岐阜県揖斐川町 北方の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 岐阜県白川村 牧の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 岐阜県白川村 平瀬の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 群馬県高崎市 倉渕町川浦の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeVNLSzEzLWwwZ3RnYXIwUkoycGUwTXF6MzcyWGhTMEtpNE5iWWRuNWtlbXE4VWtnQWtIZFN1WjcxUDRiaXF3VkFCbU02dU8yNW5WbllMTFluNHlVc2UxMjhjMzl2RU5ocTYyQ2NxTHhkU2prMi1xTE5jejhXU05TVkFCU3RjUVV1OVFhSVcwRW5uY2U1SFRELVZaZ2nSAaIBQVVfeXFMTU1BSkxTcEdvbkJiN3ItRHVyMVd0dDNaUzJmOVcxZGdqU04ybTdNVElaTTNWME01TnMzeGZaS3A5X3FHWDMtZDJZVFpZSkRMUE5TSXdUUzJmZDlXZW1WTGZnZzdyNklxU09xTHlVcjRSbHNQd2xEU1dJZ2dHWHQzNU43RTdwTXA3c1JKQmlzb3lOYVRPWlZvX0FIMEo2VXRGNUZn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 群馬県桐生市 境野町3丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1jbTNEWGtWUzZ6VDYzeWlHT0VRdDMxak5QcjJSOE5MbURvSnlIS3l6RGU0aExYTmV0U1JqZU9oWWxVclZNcGFfUldPYXd3M09fNDlDenlWTmx2THBzSVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 群馬県桐生市 桐生市菱町1丁目地内　KRゴルフセンターから宿の島橋までの間の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 群馬県嬬恋村 国道144号鳥居峠から田代方向に1km先　道路を横切る子グマを目撃の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 群馬県東吾妻町 東吾妻町大字大柏木　林道道泉谷戸線の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 埼玉県秩父市 日野鷺橋近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE45UDZuejMxVGxvb1k5VlYxaFllZFNMbkdBMFZBRENnRFRPa09SbUxVMG5mcUFZbEFaUEY3NWdVZ09MQjJTdzhwTjYxYkdMdG1sS2U1NF9raw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 埼玉県秩父市 秩父市荒川小野原地内（日野鷺橋より西に約450ｍ付近）の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 京都府南丹市 園部町佐切坊ケ谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNWI1aG5mTkNkM29PUTZ1Q0FMSkdNNHd5MzRMNmN2NHd5QmZDU2VJc0gybHFGTTlRQW9SWU96MlJoS25Sak9KRHNBLThfeWk4MjAxYXFqRGEwbEJjZXNYTVRkNXpmbFY0SFhXd2h2Vzc3ZTRLM1Q4Y2pRek81Qmx2c3ZNZlpvMHlrZGh2VGpnVnJneUZ4QXNna2lBX0rSAaIBQVVfeXFMTWI0S2s5dHZ6ME9nc3Vyd0Q4YTFIVi1oNDNrRmxvV20tNEVybXl6cnNVV0NCRGlWMGRzUnk0Q1NtRVBwMlVzTXFqbTllNDRNczBLaUdNZjhKU3hpU25OWkdwaGV4TlRyMUFiMkhKZ3owNlFkcHgzWS00U1A3QWlVNFg2THM2SnZxRVc2S1RTdDFkRE42NDV2eGdydlp1YTlvNzFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 京都府南丹市 美山町高野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZ3BOSUhfVlpuWWNCRDBDeFZpRTMyUG1rZ0pTT1lYTUFTWVJwaUFnVnFzZkozQ0hZLWI1Sk5VM1dsRVZFMTNFUmoxbVJ4SFdFcWxqQm81c2hBZm5JMnRLTkZEaFppTUlwdzBiNHlNWEh4Skt5Q1NpVlJOSkg0ODNxUklSd004bUZHLTRVNVJnYkNlc2h0OFFuLXpTWXLSAaIBQVVfeXFMT2x4THJueGZGQ2tZazEyeXBEOWV3cUZLeHNoeDVhS3plSnpLWDZkLXZpZDFzYTZ2elZFcHh6c1NFM2RlQ3pKUUdzUXpoUnE2cnZQdlhLblNaVHNXRHREZ1dNSUdYeWNveXhWZnA1UmJNMzlXZUhmWEdXYzFfVjh2X2pzdExHX0l6cGpnaVdLTWVHdGhRcUZfV25HWDJtSF9md1Zn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 京都府綾部市 篠田町堂ノ前の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPQ2M5SkpBR1VjQjVJR3NoR3QyRDhtMkJlVlFZR3IzVUtqQ18yaFZUX3dpcFV6TFY5VXNaZmk1cVIxcEJFLXdjZEs0TUtDRmhsN0lrZXNKTUVueUV4MmU3cmI0amItM0IzVFpzZHRWSHFubXN0bWQzQnRuRE1GM3R5dzluWTc3RXBWUjI3X2RvT2UtWWJHRS16YkJRNDJxWG1ZZjZTSVJCVmlrTnZEdkhqSTV3cVhVTGxRMWc3c0djbm1NSi1Md016eFdkQ0d3blJfbmZ3QWFJY0d1cHFwTmhUMV9GdlJ2X1hIWHdEMGNHZG54UdIBogFBVV95cUxNWDdiUVkzOHJtaDJLWGhZeDJtYVBYWjZHNDZXcVZTWHZMTFFnZk5SdXpxT2pzb0pWeXlKTEFxYXFSd2tCeXd3d25YVDdlb2FJYmpTVWhNVnJLVnB0aF90MjI0bU1Ubko4bHByb0kybG1IR3dfQzJRcGV5OHB1V2RhQ3lfdHM5akVtVFlaZHZZalVBc0Z5S1liZThIaFJjbFMyMUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 京都府舞鶴市 多祢寺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPLXlsUTdJd0cyZS1jcnFfWnpTR2t2QkJlb3pnLTRpdDlUOUZNc01sckZCc0FacmxyQnN6YXZ2eWRrdmJVRnAyeTBJb0RWckY5bVRfeEc2RzgyUUZoUGM2b29selJDQUJjRTltbldCUGtpOTB0c084WFhRUkh2eVFBanI5ZjFHVkJWcndFeWxDWnhYLUNZQ0pNUkwyUHHSAaIBQVVfeXFMTzZSY01mMjFTN0pCZkRxWkpJWFB3UHU3VHRaaEhMWHBBUm9wNlBZZ1ZwbEFjRFlwUnliOUhTQ1hKei03dlBzeGNUalI3aGtKTDJLQUxIM0pyWDR1Z0puWDVSMFkzTlMwMnVxZDNkSXNFU19PeTQ0QkJLYUN5QTRaUWowS1MxSUhIQUYyTkl4ejRsUDlYYldFNjUwdVFydmdkMHZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 兵庫県加東市 路上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE10OTd4OExaYzM0YmltU1JHRUhpNUFqX1ZPdUwtcFlCampfMUpBTDlDZWxwWndXelNFMUZOaWNwV1VqenJweXNzdjhlWUYxNkc2cVR1MWlWWXlLYy10S3BFR25aUkNGYlZsZHhFVGRFQkZ5eHM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 兵庫県宝塚市 公園付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE10OTd4OExaYzM0YmltU1JHRUhpNUFqX1ZPdUwtcFlCampfMUpBTDlDZWxwWndXelNFMUZOaWNwV1VqenJweXNzdjhlWUYxNkc2cVR1MWlWWXlLYy10S3BFR25aUkNGYlZsZHhFVGRFQkZ5eHM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 兵庫県宝塚市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE14QmVqUFpRal9vRkNIUFNvb0xteVF6VHFyaWhLNkQ3SUNubGFnZzMwd25iSDRsWmdpZGwzOTh6bkdUQkFWWUlhUGkwUUNfN1ZTS0w0U3ZmSWlzdTBHQ1RVMF9CTnZ4UlNxMlRVQTE1WUltSjE1WnNocjl4QQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 兵庫県神戸市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE1xcHJxM0ZDZkFHa0IyLW1qT2dQYV9Ga01YT01GY1FZX1JUdWs0aVZNU205eGh1VEU4X3JlZ3I4ZzNIN09wYTN1OHlKSUdCcmZrc3dOTDdLX1RyYWtGTWkzb0x0X09MZ182SXk0OGVVUmhOQnpGek9V?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 滋賀県大津市 大谷町の出没情報",
      "url": ""
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
      "title": "2026年6月17日 島根県益田市 益田市匹見町道川の県道307号線、日の里住宅付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 島根県浜田市 旭町丸原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSmEydy1TM29IUWg4X05Dd0h6WmJwU3I5Nm52SDFVMmFqM0swTkJCeUEwbjVIMGtMNzRrNDRxYTZlRlYxcUZTb1NBdldyajJlZU0zVFM2dGo1SkpzMmlnVmpITzBDSzE0eFdTaEEzNHpieWd5eGZETHViLVN2ZnFSZWNZaUNBTHNGZURsSS1HUVBkUno2NVFmeVBub3PSAaIBQVVfeXFMTVZkeHFsblpQTDltZEhGdFpJdmZuZVpiMVpFMGgxSVF6WmlfRXkxTUYxZ2RIWGNWYnBsQ2xUVEtscFV5REI5VHJGcjJWclhFZGxaSEszMmFzaVdMX25iandNSndRRWlrUkk0NWZLQVBJazMwenpfNWwwRnR5R1BxSjNLQkxBS0ZTeVlvVkhheFdEX1BpdHVBeVNmaXUwM1F2Tlh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 島根県浜田市 三隅町古市場上古市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQNlhpQXVGVUc0S1JPTTdVdUlreXdXdWI4dmxzTFExLWJFUmpjNnlPTDh2dmNLaFNNSDJZMEZON2VVamVwdjg5d081QThmOC01ZHdSbkJxUFh6TUZxRDh6dHJYUDdoV2RuSkJTbWcxeTQwSEZHcTI4cTNMQTJOX3ZyeXoyOVRVS2tUdmV1cHhnQTRTdTFWSWNhZU9GMDlITllaWFVuWGdWTmYzSkJOX2tUV2VXRlJYcnNobXFnYnVabmY2UkdrS2ZQT3M0aFV5WVc0OFRnTWE5TEhKcHQwU1lraC1fQ2RJUUlfalU1eWlCNFJaQdIBogFBVV95cUxNdnNrTWtfTkVYQnBtd19MZGtuRFJhQnpMdHBtSWx3X3diQ2R3RjFYV1pJU1VYN0VSZFFWSTk2LTk0enl0RXRsT2ZoSzEtRW1SQkNIallLWHh2ZmNOUGZkN25nZEd2WVlTYzlJUE9qUTFoR09ueHJZV2JRNzNRVjNpM0tVNUJhSEVqYnVkdWJ0TkhONWxaZzNZaEtUYU9xSzIzQWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 広島県広島市安佐南区 県道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE43My1EZ2R4Z3duNkVmbFA0TFAxaEkzOFBpdWhtcmtTRVJ0VEFIZWVPMjU5MTctSGV2TDRwRVlJT1lLcFRJREM4U1BIUTRYQXlsR2pleEVjMU9pRFJxXzRkbjB3Zm5wVG1jVGRZby1WQ2xmSWhYU2FLZHJwS19uUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 広島県広島市 安佐南区の県道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9MeW5IMXBmdjdwR1lxVlBycUhNZHBYbmdIZnU3X29KeXdtb1drQU9mWUVkb0pFQy1saHM0bU5YVFdqU3JiVmJpekN6czN3WEJiV3V5ZENxRTRjTC0zS25iOGlMZXY4LUNXVWJDUU9LSQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 広島県北広島町 団地付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1GNXRKTV93TnZhby1DRF83aWZ2eFFjVXNTTEx5UzFjcGcwZ01ub0RTakR1bjh2STAzejNjYmJLQXdNMDRMR1RJdWRkOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 広島県呉市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5zYzJsWDFFTEtJMU1QUm51aGg1a0YxTHFBRjZvcENGRFB1QWdQY3NWTVRma3hkazZYb3dSd09tTzBPQzNpeVBQZmRrR1licktyeHZIY3pOYlBGdkt6UW14NEkyRXFnMnVaS0ptQnVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 広島県呉市 呉市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQVUJQT1E5cXVSenFfczlaWXdwalBic1YzQVZKVHJOdzl6bFJwdnJpYTNiX3RfU00wOXljRlNmMWVLZkZNOEpwLU5HOTRUd1JtclhWd0JLNDJFVEY0UmR2Z1FCMmNBblNDM3FmWHMwU0pfVTNWcVJWSUtxa1A5QUxrZUxYWVFzR1hHUXRYclR3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山口県岩国市 美和町西畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVFhTejY2ZDRfY0VLcnBhUk1tXzFublZIZ2REQ2FmTUNlSENQMG93ZGxLb28zYTR1TUJNano0RC01X3JibHVoM0pzb0tGVVZxdlEwY3hSY3ZXZmZTYll2bHViQlYxTmJZdzEtY0U2TVR4VVIyVnFIUTlRQWNvMVBJQ0N1U1NxRmhEUTI2TXliMC1SQVp3ZjBqb0Z3djDSAaIBQVVfeXFMTWdST3JTaEc3MVlCWkJlLXFtaldCSGhEY1hjd1ZHN29YTjU0bks5YS1qTnhpbFNFeXA2cWlTZkwweEh4T1VrN29EWkl3TkFkWndfdE1aRm1SaWlpYnRUdVZNRVA0R29ERDNwQXMxVDctaHRTck1oenl5c0dIRWdBdE5uN2ZnQUQ1Ml95M2FjX3NvQWlSaDFGdEdsVlEyUDNoLXVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 山口県周南市 大字八代の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 山口県山陽小野田市 大字福田の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 山口県山口市 徳地三谷奥谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 山口県山口市 徳地野谷下野谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 鳥取県三朝町 福本の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 鳥取県鳥取市 福部町湯山山湯山の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 鳥取県倉吉市 関金町大鳥居の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 鳥取県琴浦町 宮場の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 鳥取県湯梨浜町 東郷池の出没情報",
      "url": ""
    },
    {
      "title": "2026年6月17日 北海道福島町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBPcVNCb0tNeElEUUZ1emI1N2tUUXhrVEFUUjRwQ0VBMUdVaGkwa0dRUzZjakd1bDJHeklwWWI5Ti1hOTMxbXpCcWViczRBRGpqam84N0JEbWhueTc4V1R4am9TQTJlXzhnVElaaVRCVjFOUWJlM1UtR1ZaNlZCaDg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 北海道旭川市 東旭川町米原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxObk9xc3FHOGxLUnFYX3B5SENGOEE5VGNub09sRUNWSTRqMVFyQURhRURUU21lWDYyZTQ4MTFhcGFwZGc2a19idDhFdnV6NXhFS3QxcXlxOFpPeExLM0RaVWJMbHRxaGVLUzVRYmNQUjZFSjB5T0IwT1VQUm96Z3JDV0IyWjNZNlVIeFhza3E2UEpyZF91V2FBTzJNX0fSAaIBQVVfeXFMT0dXR0t5NjFHWm1OdjBZbFZBYmZwUWUyRTllbUFQcXF2VTNkZV9FQnZHQ09oR0R1Z1lKYTJQcDFLMmZKcHNya3BnakFyRFlvcnpCUWZVaHNjdEZvVmYwVW4zUFFpTklwaWhVbk01eFZXQ3VvWm1WVWlJbUU1RzdlSDBEcVFHV1J0OWxyZktKbWhlMmdDOG5qVkkyWlJRU1dXTFFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 北海道愛別町 愛別の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUk9oMDRhcm1JbEl2N21kWWJLMzBhOUJEYkprSkgyaUtQN2NtdGVEM085TmRVMnFyM2c0a1JPN0lkbEU3Q1FReXVLLU0tWHZreEZjelg3OE9ENnRiZG4wMG5mU1ozYjN1bmViSDNjck16VFVrRC1JY0pONV9RX1RkY05qZ2JCVEg5cFNtMWFyY2d1azBJUUdkSVlqZXbSAaIBQVVfeXFMTlNabFA5Q3FjVzZPOHdoV2RLemhBb09UZFQ1RkRqUTR5R0t0cUNLblhhaXJrS0djbTlCZnJSQXgwWnIwSVROeFptNVFDMUlGeHp3SC1lYmtrQXJHeE9WQjFwZ2llNFI4eUhhb0dhUmpqdDZ4eDJIMGlPaGxEZXdNMEg5bXZPSll5QkY2RDU4MHVieGlZNWd1X0Zqd3dIcXdnN1d3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 北海道鹿部町 宮浜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZ1dWNmJHQlRrQjA5NmZVdHZHVlI4bW53ZHNnMUZJaUZnRF9tOENzcGpMeC1Yc2lRME12azloczg4NkFsZGtucF8zelZfVHMxZHJlNVpkNzBEYVN5cHRqZlhjNU9pM3lyVk1jeXFfSmZHNU1kc25kMF9pbHNyNW41eExnc2VoSnVFaUM5ckhLNFZMNU9mMUhFRXVtVznSAaIBQVVfeXFMTmdBV2czNXc0Z3AwUHNXY3VoU255LTRSUmtmSHZpdTRFRzJpQUlMOHRYZDRDQzZMbEI0SE8yOGpyclpCQS1yeWpzUkFXdEdERTRnOW80XzJWQmlDZkpYbFZhVXVtOXVldFRjSE8xVlE4d0hnckM4SFh4YW5RaDJVQjlQWTQ4bUlCakhaeTRsVHpPck81ZjBVckhFRW00NDh3bHdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年6月17日 北海道西興部村 六興の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVVpsb1pPUDF4VnVCYTRramdmOXRiQ0FqZWtlSTNEVTRRQTJ0VWFKN1dsa052SlRuR1ptYUx3eXFDa19uQ0NKaDBiejNWbWVVVl8yUWJYZHdIYUFvNGcyNGZKaW10WlVkaWg2REhNYnNnSGpPeHdTbXEyY0ZUai1GMzEyU3p6OHcwRHJLblhENFZZYzdiNEtzdDdQVEjSAaIBQVVfeXFMT1UyQkZRNU9wNlNXWFBkSUdjTHlFMEZvTnkzcTBIekttdGpzdEV1ZUl5MTRQblFXQzJjQm9iandPV1lGWmktdXBZMFdBaTg1WGpadU9UQ3kwNS1uQktiQTdkd29Bek5OQVFLcHRuX3RSTXB6dHY2QUlKUEZwWmU3VUJmOWFWYUhtQ0N2TUpTVG54OEhjM2d1ZHpHQXJrVUJCQmZB?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"秋田県","count":34},{"pref":"長野県","count":25},{"pref":"山形県","count":24},{"pref":"宮城県","count":23},{"pref":"北海道","count":22},{"pref":"福島県","count":20},{"pref":"島根県","count":15},{"pref":"青森県","count":14},{"pref":"岐阜県","count":10},{"pref":"京都府","count":10},{"pref":"山口県","count":9},{"pref":"鳥取県","count":9},{"pref":"岩手県","count":8},{"pref":"奈良県","count":8},{"pref":"石川県","count":7},{"pref":"群馬県","count":7},{"pref":"新潟県","count":7},{"pref":"兵庫県","count":7},{"pref":"広島県","count":7},{"pref":"富山県","count":6},{"pref":"山梨県","count":5},{"pref":"埼玉県","count":2},{"pref":"滋賀県","count":2},{"pref":"福井県","count":2},{"pref":"大阪府","count":2},{"pref":"静岡県","count":1}];

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
        <span>対象期間: 2026年6月17日</span>
        <span>·</span>
        <span>公開: 2026-06-18</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={286}
        periodLabel={"2026年6月17日"}
      />

      <h2>概況および主要事案の分析</h2>
      <p>2026年6月17日の集計において、重複を束ねた後の総事案数は286件に達した。都道府県別の上位件数では秋田県が34件と最も多く、長野県25件、山形県24件、宮城県23件、北海道22件、福島県20件、島根県15件、青森県14件、岐阜県10件、京都府10件と続いている。特に当日は人身被害事案が3地域で相次ぎ、緊急銃猟や錯誤捕獲、生活圏への近接など、人為活動圏との深刻な接触事例が多数確認された。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">順位</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">1位</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">34件</td></tr>
            <tr><td className="px-3 py-2 text-xs">2位</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">25件</td></tr>
            <tr><td className="px-3 py-2 text-xs">3位</td><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">24件</td></tr>
            <tr><td className="px-3 py-2 text-xs">4位</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">23件</td></tr>
            <tr><td className="px-3 py-2 text-xs">5位</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">22件</td></tr>
            <tr><td className="px-3 py-2 text-xs">6位</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">20件</td></tr>
            <tr><td className="px-3 py-2 text-xs">7位</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">15件</td></tr>
            <tr><td className="px-3 py-2 text-xs">8位</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">14件</td></tr>
            <tr><td className="px-3 py-2 text-xs">9位</td><td className="px-3 py-2 text-xs">岐阜県</td><td className="px-3 py-2 text-xs">10件</td></tr>
            <tr><td className="px-3 py-2 text-xs">9位</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">10件</td></tr>
          </tbody>
        </table>
      </div>
      <h3>人身被害事案の発生状況</h3>
      <p>当日は石川県小松市、島根県邑南町、奈良県下北山村において直接的な人身被害が記録された。石川県小松市の山あいの地域では、散歩中だった80代男性がクマに襲われ負傷する事案が発生した（※1）。小松市ではこのほかにもクマに襲われ80代男性が重傷を負った事案や（※2・3）、岩渕町でクマの侵入による人身被害が報告されている（※4）。また島根県邑南町の造林地では、作業中の男性が襲われる事案が発生した（※5）。邑南町鱒渕の山中では、午後2時50分ごろに林業作業中の男性がクマに襲撃されて救急搬送された事案が記録されている（※6）。奈良県下北山村では住宅敷地内において60代男性がクマに襲われ負傷した（※7）。この事案に関連して、自宅敷地でトイレを出た男性が襲われ負傷した事案（※8）、クマに襲われ男性がケガをした事案（※9）、トイレ後に襲われ男性が負傷した事案（※10）、早朝にトイレから出た男性がクマに襲撃されて負傷した事案がそれぞれ記録されている（※11）。</p>
      <h3>緊急銃猟・駆除および錯誤捕獲事案</h3>
      <p>市街地や交通結節点、観光地への侵入に伴う駆除事案も発生した。山形県南陽市では朝にクマの目撃が相次ぎ、1頭が緊急銃猟により駆除された（※12・13）。南陽市ではJR赤湯駅近くでのクマ駆除や（※14）、赤湯駅付近で1頭が駆除された事案が確認された一方（※15）、烏帽子山公園周辺でもクマが目撃されたものの行方不明となった事案が報告されている（※16）。また京都府宮津市では、天橋立に出没して海を泳いでいたクマが駆除された（※17）。錯誤捕獲に関しては、兵庫県多可町においてシカ用檻にクマが錯誤捕獲されたほか（※18）、滋賀県大津市栗原でも錯誤捕獲が確認された（※19）。</p>
      <h2>地域別の出没状況と分析</h2>
      <h3>東北地方</h3>
      <p>東北地方では秋田県34件、山形県24件、宮城県23件、福島県20件、青森県14件と広範な地域で多数の出没が記録された。宮城県仙台市宮城野区では、七北田川沿いの住宅地近くの道路での目撃（※20）、五城中学校近くでの1頭の目撃（※21）、住宅地方向へ立ち去るクマの目撃が相次いだ（※22・23・24）。岩手県盛岡市では住宅裏の空き地での1頭の目撃（※25）や乙部4地割での出没（※26）があり、花巻市高木第20地割（※27）、奥州市胆沢若柳谷子沢（※28）、九戸村では高校グラウンドでの目撃が記録された（※29）。秋田県では大仙市協和境岩坂下（※30）、小坂町小坂（※31）、羽後町西馬音内五把出山（※32）、能代市字悪戸の市道での体長約1mの個体目撃（※33）、風の松原での相次ぐ目撃が報告された（※34）。福島県では土湯温泉町横道（※35）や国道115号付近（※36）、只見町大倉礼堂（※37）、只見町内（※38）、西会津町の国道49号付近での目撃が確認された（※39）。青森県では西目屋村田代字山科で平田建設の住宅側から山手へ逃走する10時30分の目撃（※40）や山手への逃走（※41）、階上町での木の上にいた1頭の目撃（※42）、五戸町の国道4号横断（※43）、鶴田町での相次ぐ目撃に伴う警察の注意呼びかけが記録された（※44）。</p>
      <h3>中部地方</h3>
      <p>中部地方では長野県25件、岐阜県10件をはじめ、各県で活発な動向が示された。石川県では白山市の旧役場付近から畑へ移動する子グマ2頭が目撃された（※45）。長野県松本市の城山公園では成獣と見られる1頭が目撃され（※46）、展望台の上から目の下の展望台下にいたクマを目撃し山中へ逃走した状況が報告されている（※47）。大町市のあづみの公園大町・松川地区では出没により休園措置が取られ、国営アルプスあづみの公園での目撃が記録された（※48・49・50）。新潟県では十日町市川西地域鶴吉地内での目撃（※51）、十日町市鶴吉の県道山中上野線で横断する子グマ1頭の目撃（※52）、三条市大谷地の農道から山へ立ち去る目撃（※53・54）、妙高市上堀之内の国道292号を東から西へ横断する体長約1mの1頭が目撃された（※55）。富山県では小矢部市浅地での痕跡発見（※56）、氷見市稲積や国道160号沿いでの体長1mのクマ目撃と痕跡確認（※57・58）、南砺市利賀村北豆谷の利賀ダム工事用道路付近での目撃（※59）、南砺市見座の国道156号線付近での成獣1頭の西方向への移動が確認された（※60）。山梨県では身延町北川や国道付近での体長1mほどの出没（※61・62）、丹波山村御祭付近の国道411号を山側から川側へ横断する事案（※63・64）、小菅村鶴峠付近で車走行中に目撃され奈良倉山方面へ逃走した事案が報告された（※65）。静岡県富士宮市上柚野では登校中の児童による目撃が発生した（※66）。福井県ではあわら市高塚での目撃（※67）、池田町東角間の集落内目撃が記録された（※68）。岐阜県では高山市山田町の住宅地で3時から4時に目撃されたほか（※69）、揖斐川町春日大字川合笹又の農地で4時から5時（※70）、同町北方山林で11時から12時（※71）、白川村牧で13時から14時（※72）、白川村平瀬の国・県・市道で17時から18時の出没が記録された（※73）。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県および埼玉県で出没が確認された。群馬県高崎市倉渕町川浦でクマが出没したほか（※74）、桐生市境野町3丁目の渡良瀬川付近で目撃され（※75）、同市菱町1丁目地内のゴルフセンターから宿の島橋間では車内から右から左の河川側へ逃げる1頭が目撃された（※76）。嬬恋村では国道144号鳥居峠から田代方向に1km先の地点で道路を横切る子グマが目撃され（※77）、東吾妻町大字大柏木の林道道泉谷戸線でも記録された（※78）。埼玉県秩父市では県道の日野鷺橋近くで目撃され（※79）、荒川小野原地内の日野鷺橋より西約450m付近で消防職員により目撃された（※80）。</p>
      <h3>関西地方</h3>
      <p>関西地方では京都府が10件を記録したほか、兵庫県、滋賀県、大阪府、奈良県で事案が発生した。京都府内では南丹市園部町佐切坊ケ谷（※81）、南丹市美山町高野（※82）、綾部市篠田町堂ノ前（※83）、舞鶴市多祢寺で出没が報告された（※84）。兵庫県では加東市の路上での目撃（※85）、宝塚市の公園付近における大型野生動物のふん発見（※86）、宝塚市での鍋を叩いての警戒対応（※87）、神戸市でのクマ目撃情報に伴うハイキングイベントの中止が記録された（※88）。滋賀県では大津市大谷町での出没が確認された（※89）。大阪府豊能町ではクマ目撃が報告され、これに伴いセンサーカメラが設置された（※90・91）。</p>
      <h3>中国地方</h3>
      <p>中国地方では島根県15件のほか、広島県、山口県、鳥取県で確認された。島根県内では益田市匹見町道川の県道307号線日の里住宅付近で午後3時ごろに1頭が目撃されたほか（※92）、浜田市旭町丸原（※93）、同市三隅町古市場上古市で出没した（※94）。広島県では広島市安佐南区の県道において体長1mのクマが出没し（※95・96）、北広島町の団地付近で道路を横切る個体が目撃された（※97）。また呉市では小学生によるクマらしき動物の目撃が報告された（※98・99）。山口県では岩国市美和町西畑で出没の可能性が報じられ（※100）、周南市大字八代では午前に田を横断して山へ移動するクマが目撃された（※101）。山陽小野田市大字福田の県道上では足跡が発見され（※102）、山口市徳地三谷奥谷の山中でクマ様の動物（※103）、徳地野谷下野谷の国道上で走行中の車内からクマが目撃された（※104）。鳥取県では三朝町福本（※105）、鳥取市福部町湯山山湯山（※106）、倉吉市関金町大鳥居で目撃があり（※107）、琴浦町宮場では子グマらしき動物（※108）、湯梨浜町東郷池ではクマらしき動物が確認された（※109）。</p>
      <h3>北海道地方およびその他地域</h3>
      <p>北海道では計22件が記録された。福島町では車の前を横切る体長2メートルのクマが目撃された（※110）。また旭川市東旭川町米原で出没痕跡が確認されたほか（※111）、愛別町愛別（※112）、鹿部町宮浜（※113）、西興部村六興で出没が報告されている（※114）。なお、四国地方および九州地方に関する出没事案の記録は本データ内には存在しない。</p>
      <h2>リスク評価</h2>
      <p>本日のデータ分析から、人為活動圏への接近度が極めて高まっている状況が読み取れる。石川県小松市の散歩中や島根県邑南町の林業現場、奈良県下北山村の自宅敷地内など、日常的な生活行動や作業の場で突発的な襲撃が発生している（※1・5・7）。さらに山形県南陽市の赤湯駅至近（※14）や京都府宮津市の天橋立（※17）、長野県大町市のあづみの公園（※48）、宮城県仙台市の五城中学校至近（※21）、静岡県富士宮市での児童登校時（※66）など、都市的インフラ、観光施設、教育施設への浸入が顕著である。</p>
      <p>また、国道や県道などの主要幹線道路を横断する事例が新潟県、富山県、山梨県、群馬県、広島県、山口県などで多発しており（※95・104・77・55・64）、車両との遭遇リスクが高い。早朝から夕方にかけて住宅地や農地、河川敷周辺での目撃が相次いでおり（※20・69・75・70・73）、人里周辺における監視体制の維持、センサーカメラ等の機材活用（※91）、施設利用やイベントの中止を含めた柔軟な安全確保措置（※48・88）が求められる。</p>

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
          <dd>2026年6月17日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-18</dd>
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
