// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月20日 / mode: daily-report / 生成日: 2026-07-21
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-20-daily-report";
const TITLE = "2026年7月20日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月20日、国内のクマ出没は134件確認された。人身被害の報告はなかったものの、三重県尾鷲市では緊急銃猟が実施された。出没は東北地方や北海道に集中したが、全国的に住宅地やマンション付近での目撃が散見され、市民生活への影響が懸念される。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-21",
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
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
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
      "title": "三重県 尾鷲市 / 緊急銃猟によりクマ1頭駆除",
      "url": "https://news.google.com/rss/articles/CBMiVkFVX3lxTFBPTzVJVUZrSFZOZGk1UDE3cTVrYmR0WTJVSHBiY0xPNTdHQTVvV0lQOWNfYUlMdzduZUt4MmN6QTV4TVRPZnRlc09VVFVSQUktVnRiWmFR?oc=5",
      "site": "news"
    },
    {
      "title": "三重県 尾鷲市 / クマ1頭を緊急銃猟により駆除",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5RU0xzeVE5N3pLMVhBeERwUWcteC1BMWY0bjB2SHlqMjVERFNGU1laQTN2ZjgwZDMycmJQV0IxR3cwZ3JnNi1UUEZZS2V6RjZQcnZnLVU3US1NeWt0WTNFQ2ZRa3hTVHJyLVM5VHFHRkFlcUxwTURYT2VTSUF0aDA?oc=5",
      "site": "news"
    },
    {
      "title": "福島県 本宮市 / 住宅の庭先を歩くクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9hOWVDc0R3UlpuZnRhZHRhUk52Zko4bmZfZ0JENU5aTlp6UUZkQW5zUFl2OTdhT2tmRUdEdU82N2x6SW52aGFxTmFYcHl6dGpsN2E2aHYtZVNtVlFiZWdSamVJaHp1d1pJWW9JcVcxQXZQUVVtQjZfYUdtONIBgAFBVV95cUxPMnl3akowZDQ4a1g4S3lVWV8tWTVWZE5nckpGRFlsd0VUcDFwQ29CcnYzc0M0djA3NVdadUFKSWUtcnh1ekdWUUhZM21waDlabFNubnZBU0x3UXVsRk9XYmxzRDRTZkFLYkFDVHo4VTJ0aDFWbVhSRVFaMC1XMWJZWQ?oc=5",
      "site": "news"
    },
    {
      "title": "北海道 白老町 / 住宅から5m先に親子クマ3頭",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBSVnhpcDJCa1VibFRENm1sQVlZWmRCVWV1Nk9yR3ZsMGJyWlBlQTFKUTJsdzZCd3B4dGVucUF2QlgwMzZWR19BS280anctUQ?oc=5",
      "site": "news"
    },
    {
      "title": "山形県 米沢市 / JR峠駅付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE96XzVaeUwzMEhobU1SdVpndXB3WlhsYlpOU0FvRkdGTzhNQnI4RWEyY1hYbFZRbnBlemxmdTB1WHRoM2dNLVJKS1hCMXNobVAxWjJDM2xPSGJ4MkxXalZaSGFwUWd0OW5qX0hINnZLRQ?oc=5",
      "site": "news"
    },
    {
      "title": "三重県 尾鷲市 / 三重・尾鷲で1頭駆除",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1ETzF6MVFkb0xSVlVNamFvQXlYR2g0QUJjeWI2R3gybWg2bGhxOTBxUHdiRzNiVzNJaFhsQkJiRk1kRTdiM3RiRjlIS2pXT050OU5JcVp4bElHRmJ3cURFamdZSmI4ZS0xem0ycjQ3a1c1NlRoY3ZZSExB?oc=5",
      "site": "news"
    },
    {
      "title": "福島県 金山町 / 小栗山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOek52bHFqZVlIUF83OWZQQlZ0MlB2bjBCM1VleXRDOE01RzZWUDFvSEVaRENzWjNDbktncUc1YWtvRVVhMFRMS1IxVWJPZnRtY3hPVlFmQUtUdmpxajhadjlhRWRaSk9TQWtzNk5nbmIwcWJOejdRYWFMMjgtQjQ5UmRhcm9MWUI2Y0RkU09tMEJCT1RjNjB1b2pkZk_SAaIBQVVfeXFMTzl2NFhncDVYVkhTOHRzSHp1Z0hXX19qSE1XZ09CLTc1c0xpSjhwRUJod19lU3JJbUJGbXRGaDNKdWZXcUJoZjVHbGtXRVB4UHZzUVlGak5NM1Z3amt5ZmlPeXRhUzN3Ujl1MGJxS2NVTVlXWjlPM1NnbUZKRjg1cFVsVWpTOEgxTzRzTVNlam5hTTZ4QmtvOHpYMW40UTRZaDJn?oc=5",
      "site": "news"
    },
    {
      "title": "福島県 猪苗代町 / 農道上でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE10RUpyTWZPTFdNa1ZzR24tZ09CVFNSampFazUydXRmVmZNTklVTFlQdXJSRkV4WnVyMUg5b3R0ZjVyVjRCME5OTVNaN0NLeEFSdjNocUk1bWJ1c3Y2SUczR0pfajgzU3NyTXhScFgzTmFubVM4YlJjTE5kY9IBgAFBVV95cUxQXzlHVXVpeXZsbHQ5U0N3Ty0zYWdxeHFDeFY3R291MXI1VHNYdmhoOUFGcFRHWFJOWDBBVmhCQndrbHZ0dlNPZlYzRnZSSFhMdjBSVjB4VFdMM1VIVnhONXJDSmJwVE5mZzBWSTQyQnJvMDFGVzZqUldvNUFuTC1sUg?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県 中之条町 / 入山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNY2QxWFY0RDdiRkVmX0RwbE1yTDZJVkctdm50OWV3clhMdVpYMEcxazE2dW91dVRMT18zVVo5b2ZsZGM1aVBHTEtUeWw4d25iR1ZmRHd6dU1NZU03Rl9IaWVLakZCLUJ0SWtxcEJkMllDZXF4UDliYlVjWDNBNWdMQTN0N3RCVTZUTjJ6a0FPa3BGRGZwWVh0NXRzZjVWX2RuNTdUS29KdXlrajZMMWtvRThOc3VOT09iWjJ6R2g5SFZXVnp1REszRWZIUmJENzFTS0J2aWFfUWx0RGZZZWpTY1NaUlRxUWxud0EtY3VELWZJd9IBogFBVV95cUxQdURWN2c4cDdTcWxEdjRfaGtjVUNVdkZKVDhYRklrOWRWN2V0NEZ3RllRLUlzZWtnZkFxb2tzRmJTMFJiSmVNM0F2V0p2cnVwN2xlajY4NjR6QjREZE5TY3FhbjBpRWU3NW9mYU96bTB0OFpPVEhFaTVoamlHamFtdlRkdGx0MVZveFRnNERQVGFYVGlFa3hvZE1NRVgyaFVrMFE?oc=5",
      "site": "news"
    },
    {
      "title": "埼玉県 秩父市 / 三峰で登山客がクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5nOWtoS1doVUVIT1k3WUxnYlJuLXNHT2oyRHhPV21XUFlyb0pXdFRVTUlHandLVk11c0VrNldKb3RmTEhFUjBWVHlONTY3c3RIX1E2OWVnYnRIWmhHSjJsaDNWa0dqQ0pMUHNJVC1tM0pDYkhqa0k0dk9WZFliazQ?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県 湯沢町 / マンション付近でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE1WX2IxcEVDZ00xdklOSm5aOFJ6WkFEMnpFN0hXZXRxTnVvOEpiSW1Halg1bDh4MGFrRFFGUVdoc2p1NXds?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県 上越市 / 上越市虫生岩戸でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZUtwV2g3cUtSaXItbkxCYTRkWkZIVl9jbU02djd1anl5U1Jlb3ZPTWtLLVVucTdfTWo0bnRUNUNERFBvaF9wQjdNZUpCeEF6eXJWRFMxQzA3WEJfOFUwZlFmOTRUT1BjWWd1NTRCWi1odkVhVU1OZU91Mkl6bFBraFBhc0p5UFk4S3M3dUVqRHdXMW42VUoxdGl1NEvSAaIBQVVfeXFMTTg5U1dndDRKV2NnYjdiLTdvT2RMeGNrQ0YwOC0xMmpfM0VsVlNzcVN1bXJ6THFVeHlNeTN0dmdTbHFoNlBqOXFmR1lwQnc1bHFhQ3RxMGZVZkRrdzVYZWR3a3NPM2xCYlZfODVjcXQ2bjMyNk85dTA4VmxSa2dseDNJbnQ4NncxaWdDWGM3TTNwczJRQldYbHlKTGxBNHJkOXJR?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県 佐野市 / 佐野市戸奈良町・旗川でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE5tdzl4VkpMdURjUEJfMTVGc1MzVUhObVhpdG11ME03Y196cUxDMG80cnhwQmNFMHA2dU1NUUdkcUxDWmVYaE5lR1JXaXh1YkRrTEpzWGFrODFWbGRE?oc=5",
      "site": "news"
    },
    {
      "title": "島根県 江津市 / 波子町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZUJmbnlRdVFLNmNDa3pvVjd4YlBJOS1XVG9OUGF2WUpmY05pcFlBTDJHMTgtZVhwNjhKSFVOaTA5WVBYbUJZS0JsY0RpOVllUWF2TUFhOTNkLVA3UkVfZkFaYUJsTllZZnpneE1OZEZ2ejVKWkhUeXNHVER0V3NqQlExenE1QnFuVUVkckNMUV8tS19rY0d6YXlHNl_SAaIBQVVfeXFMUHFtNGRoaGVnNDZXTW5aTzlhR2tDaWM2Si00S2cyTkJFczJ0ODlaY3hxczVzcU51enhQbkxGRFlCQXBYdzBydnRSWFZvMUJXX0VpV2JjTlN1dWdPNWRMRFNkcm1rTXlkY2FXcUpjT3ZMUXZQWl9fc3FVcm5CUzVadFcya2lkdV85LWN0NzVscjkxT0FFb3RPTjdSczB4eG16OFZB?oc=5",
      "site": "news"
    },
    {
      "title": "北海道 北見市 / 若松でクマの出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQZnNNLTFBbTRyOHJwcnJhOTZxd3ZMdkgxWVdJdjMyOUJVNjhoc3V5RE5famMyY3BrMmR1TENpanNBNWdjVU10ZHBzRllERGJieXJOUU5hNkx0TEt2N2lFcGhRSHVPM1BkLWpraVljczFtNURlVXo1TmVpaGZjNGFzUVVEMklobXZOM1VGOG5PcTA5cjhFd21aQm8xQUtLbHRUOTFaaGZZWkFmUWN4cWd1c2xPMG1XZE9jbWQ5UGVKaHVzN3R1TzhHRmJNVTFTb0JwdWdWb3VhRzdRT3MzcnZ5WG5uLTlMTk1FWXVqVGNJZnNsQdIBogFBVV95cUxPTWNLWXpMTTFId2JtaS0yYXlKU3pZV2RRNlFNN3ZfY0lyeUI0anJDeU16emt5aldKYW1vc0F4Mk42a2x3dzk2bjl3dTNFWk5LZjEzY1FtdjEtTGt0TTNqVXhrdGdlN3JaVWFyQnZOajF2Vm5MZHlSXzN5b3R0Tk9ZSmw0WGQxVlN5MkRfd3lDcWw5X05YT2JwM19HVkppUklyY3c?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 にかほ市 / 田んぼや民家敷地で目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBuWlprLUk0SklOZ2cwUlBjT0lTWnlFWVNreE4ycHU1dkdsemZHa1hrbjJ0UV9Wc1hmZDNnZFJPVExPZ0dDTzhxOHhKVGxUNVA2clJtcFJKVDFXRVNNa3ctNmZ3?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県 秋田市 / 民家の石畳階段にクマが出没",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBfVmZVVnN6SlVpYnBfWWdNekFjQk52Z3M5ZGxlek1NM1BNbFVnd1o1enNpN3pOeUhyLTJjYnU5ZTVrdUg3SXhsZGhoeTJLbU9vWFJIQXBfazBINmRHRXNzeDR3?oc=5",
      "site": "news"
    },
    {
      "title": "京都府 京都市 / 大文字山の登山道でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE9jV2dOZURWZnFTSUpNbXBvMUU0TGFPVFM2N0dua0JLZ2dWbThnXzVsSTM3RmhWeVBvSkkzUmZ2SE1nejc2bFRwQWZFbw?oc=5",
      "site": "news"
    },
    {
      "title": "京都府 京都市 / 大文字山の登山道で目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9IZzhITFFXanM5T2w5OVFudGFCYkdPNmlmbWhjenBLRW5zYVVSLUY1LVR1UnJvN2tkQU1pOEl6RXBLUjlMajRYRFNjRXgzZXQyN2lUN1U5Q2FHMDVzcmNDWGxqUDhiajc2MGhvWmJNMkhXMlhPUzBIZWZnSVA0RVk?oc=5",
      "site": "news"
    },
    {
      "title": "青森県 むつ市 / 大湊バイパス近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPdXRLamRlMmJKQkM4ZTJXeUZSRDFzbTMyeEVvS1cyS2VJRk9vanJvc2Y1aUJNQ241cHFJZXVOWWE0MFRIRnVzNUVDUVVncG41MTVranc3bXhzQjA5WUNSVlhxSUVSempnZnhoaC1YOVBIcUc3YzBHdEtxa2ZLbFcwQzdTX002TzA?oc=5",
      "site": "news"
    },
    {
      "title": "長野県 飯田市 / 民家の近くのやぶの中にクマ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE0wcFV5MnY0SXJsLVZMcXI1MGdJYzNEMmFxdFFpY0d3OEZJLU9iVzlEd0FldWQxTWNwVFMzVHpuY0RJR0lHT1phZnkzYXc2WXBjS2JLWVhkMklPcDlFSEdGQVhKMGV4MnIwVjRheTZWTlBxb09vaFVDUkgyX0s2WTg?oc=5",
      "site": "news"
    },
    {
      "title": "長野県 飯田市 / 子グマがいたと通報",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE1Dek9EQnJ1c1ZwNWh1bUUyMl9XX2QtNkpMYmJ6amE2LXB2LWJFbk1UV2ZYWnM3V2xuVHR4c3dnaFBDQU5vTkJWYWFQcFN3QzdRdWRyM2RiWHRMT1M0cHc?oc=5",
      "site": "news"
    },
    {
      "title": "神奈川県 伊勢原市 / 大山でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOc1BCajIzRUdMc19oTVFxWTlGZ3FBVjNIYy1VQ3hPZDRRbzN3aDdjX1NIbnZ3Zk9PUkczVjM4SVFfcjhLSUVrOG5YYlZKeTRFN1NhRGpLLWJaUk0zNVhSeXMwV2RZRGlMSVlmbEgtQ3UzUTlmX3BMclBlWTJoZDBocTdHRmw5RXRNN3ZMTmxEMklSVFBJbFR3ZVlXQ27SAaIBQVVfeXFMTmtJQS1qNGFyRzM1VlVnVzFEQmd3SG9BT0JITUthYmNvTndsZkZuck4xMzZySEJsbVJQYXlZamIybk42am9YbWkxY0t4OGdSUGRYNlpvLVFJTGxfMkRIUUJOV3VZQkp0eFRaMUVEVUgzNGxQRXFLQlhyalVkb2ZZX3pGQmdHQW9SQlRNUUJsM19kelpxdzZ1STdhdWQxalB3eTJB?oc=5",
      "site": "news"
    },
    {
      "title": "和歌山県 高野町 / 高野山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWi1VVERfNFhQY1Y4Z25BZXNQLS1ZTlQ4TWY2VWQweFcxQlBXMktwUkxJSkVWcWliZHZKYmpNWDFiVVJyOVVEY3RvWmVVckp4RlptZnlxRFpyYkR3a25tN2k4aHBfak0xMWlabGlBOW81M0llVW5mSmZCZFRmek83YTZ6Wm9wXzM2ZzZfNjBEckVlT2t6ZGhnYWFLek7SAaIBQVVfeXFMT2FHTkN0NFhsemZaNXF1NHA5Z3VrbF9SRnJDZHB5VnN1bkNfTVA5M1BVaDdWNEpVNkotYWVCY19HcDV2Q2duZDZmUmJJUDJONTFTNGpPRG5xanpIMkR6Q0lHN3A1eF9LdVE1ZFlFVkgtd1d4VlVZUkFLQjluQml0dGMyQ2c5NDdKdHFWVk1yTFdJWG9MY1dINkpBV2dHaVdwRWNn?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県 仙台市 / 青葉区芋沢赤坂でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVG54aGFiVGJva0szN25DNGgyUGpaLWtXUFBWQTVyLVhfRWVyZmo3cDhMSDFNOC16SUgxLUNqbExXZ2szMDZzZHdBVDhMYTF0NnNnZWlTeGFnRjlJckxzT2FjWjJNWFZBMkRmTTM1d1I5bGNLZzdJeVZOZ0JDWFJGZUpKQ2FVcm5xNVVkRk5hVklfanpvRE1WNldOa0TSAaIBQVVfeXFMUHZ4dUpSUFVtb0JLenpKS2NCSjJGR1U4MllST1JOdVQyeV9taGpZRVZLVW1XWHQwZDBfRWsxRThTY183Y2ozR2dMWFc0bm5oQmp3VFRnOGoxNWZxbTltanhFUnZNaTM2N3I5VWpjR0FndDNFemRLWXpHWVctaVhGRG9RaDJ6ZmhyMXlVV2Nod1NoYjJVNklPcVhUQTFXejlnc3Fn?oc=5",
      "site": "news"
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
        <span>対象期間: 2026年7月20日</span>
        <span>·</span>
        <span>公開: 2026-07-21</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <p>2026年7月20日、KumaWatchが収集した国内のクマ関連事案は総計134件に上った。都道府県別では福島県が26件と最も多く、次いで秋田県が22件、北海道が19件と、特定の地域への集中が見られる。情報源の内訳は報道由来のものが110件と大半を占め、自治体等からの公式情報は限定的であった。当日は人身被害に関するキーワードを含む報告は確認されなかったが、銃猟や捕獲に関連する事案が5件、都市部での出没が4件報告されており、予断を許さない状況が続いている。</p>
      <h2>主要事案の概要</h2>
      <h3>三重県尾鷲市における緊急銃猟</h3>
      <p>本日報告された中で最も深刻度の高い事案は、三重県尾鷲市で発生した。同市内ではクマ1頭が緊急銃猟により駆除されたとの報道が複数確認された（※1, 2, 6）。さらに、同市内では錯誤捕獲の事例も報告されており（サンプル[7]）、この地域におけるクマの出没頻度と人との遭遇リスクの高さが示唆される。駆除に至った経緯の詳細は不明だが、地域住民の安全確保を目的とした緊急措置であったと考えられる。</p>
      <h3>人口密集地域への接近事案</h3>
      <p>人身被害はなかったものの、クマが人間の生活圏奥深くまで侵入した事例が全国で複数確認された。これらの事案は、クマと人間の生活空間の境界が曖昧になっている現状を浮き彫りにしている。</p>
      <ul>
        <li>北海道白老町では、住宅からわずか5mの距離に親子とみられるクマ3頭が出現した（※4）。親子グマは通常、警戒心が強いとされるが、これほど近距離での目撃は異例であり、地域住民に大きな不安を与えた。</li>
        <li>福島県本宮市では、住宅の庭先や敷地内でクマが目撃された（※3, サンプル[5]）。家屋に近接した場所での出没は、偶発的な遭遇による事故のリスクを著しく高める。</li>
        <li>新潟県湯沢町では、リゾートマンション付近で目撃情報が寄せられた（※11）。観光地や別荘地においても、対策の必要性が示されている。</li>
        <li>秋田県秋田市では、民家の石畳の階段にクマが出没した（※17）。市街地に近いエリアでの出現は、クマの都市環境への順応の可能性も考えられ、今後の動向を注視する必要がある。</li>
      </ul>
      <h2>地域別の出没傾向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道では19件の出没が確認された。前述の白老町の親子グマ事案に加え、今金町での捕獲事案（サンプル[8]）、北見市での出没痕跡（※15）など、道内広域で多様な形態の事案が報告された。東北地方は、福島県（26件）、秋田県（22件）、岩手県（9件）、青森県（9件）を中心に、全国で最も出没が集中した地域となった。特に福島県や秋田県では、人里近くでの目撃が多数を占めており、農作業や日常生活における警戒が不可欠な状況である。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県（5件）、栃木県（5件）、埼玉県（1件）、神奈川県（1件）で出没が報告された。多くは山間部での目撃であり、群馬県中之条町（※9）や栃木県佐野市（※13）などで複数の情報が寄せられた。埼玉県秩父市の三峰（※10）や神奈川県伊勢原市の大山（※23）など、登山客や観光客が多い地域での目撃も確認されており、レジャー活動における遭遇リスクへの注意喚起が必要である。</p>
      <h3>中部地方</h3>
      <p>中部地方では、新潟県（9件）と長野県（5件）で出没が目立った。新潟県では阿賀町や湯沢町で複数の目撃情報があり、特に湯沢町のマンション付近での事案は特筆される（※11）。長野県では飯田市の民家近くのやぶで子グマを含む目撃が相次いでおり（※21, 22）、個体が地域に滞在している可能性が考えられる。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では、京都府（6件）、三重県（5件）、和歌山県（1件）で報告があった。京都市の観光名所である大文字山の登山道では、複数の目撃情報が寄せられ、立ち入りへの注意が促されている（※18, 19）。三重県では尾鷲市の銃猟事案が中心となった。和歌山県では高野山での出没が報告された（※24）。中国地方では、島根県江津市の山林で1頭が目撃されている（※14）。</p>
      <h2>リスク評価</h2>
      <p>2026年7月20日の出没状況を分析すると、以下のリスク要因が指摘できる。第一に季節要因である。7月下旬は、春に生まれた子グマが成長し、親子での行動範囲が広がる時期にあたる。また、繁殖期を終えた雄グマが採食に専念し始める時期でもあり、活動が活発化する。北海道白老町の親子グマや富山県南砺市の子グマの目撃（サンプル[65]）は、この時期の生態的特徴を反映している可能性がある。</p>
      <p>第二に、餌資源との関連である。本データのみで山林の餌資源状況を断定することはできないが、全国的に人里への出没が頻発している背景には、山林内の食料不足が一因として考えられる。農作物や廃棄物といった人里由来の餌資源に誘引された個体が、人間の生活圏に接近・定着するリスクが高まっている。秋の堅果類が実る前のこの時期は、クマにとって食料が不安定になりがちであり、人里への依存度が高まる傾向にある。</p>
      <p>第三に、人口圏への接近レベルの深刻化である。当日のデータでは、住宅地、マンション、民家の庭先といった、従来クマの生息域とは考えられていなかった場所への侵入が多数報告された。これは、人間とクマの物理的な距離が縮まっているだけでなく、一部の個体が人間や人工的な環境に対する警戒心を低下させている可能性を示唆する。人身被害がゼロであったことは幸いだが、これは偶然の結果に過ぎない可能性もある。現状は、いつ重大な事故が発生してもおかしくない、極めて高い潜在的リスクを内包している状態と評価できる。</p>

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
          <dd>2026年7月20日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-21</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-21</dd>
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
