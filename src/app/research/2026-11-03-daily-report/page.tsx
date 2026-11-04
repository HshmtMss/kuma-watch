// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年11月3日 / mode: daily-report / 生成日: 2026-11-04
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-11-03-daily-report";
const TITLE = "2026年11月3日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年11月3日における全国のクマ出没総件数は31件であり、京都府の5件をはじめ東京都で4件、群馬県、神奈川県、青森県で各3件などが記録された。緊急銃猟や捕獲個体の殺処分のほか、登山者の救助事案や駅付近、団地周辺などの生活圏への接近が確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-11-04",
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
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
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
      "title": "2026年11月3日 京都府福知山市 福知山市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQSDlrOEVrbEZHeWRXd2RrWkdUazZTX29TS01tUVJicERuZTJuQmRaQ3lMazVIXzVobUdqTk9vWHZCZUtQZ2ZsNVlpVTdPMkZsT3lzUkF3ZTVYZGNXQUtLcTlOcHBpdUJ0SUo2NFVTaFZtYmhFTXA2NU84dTRWaWRkcWFoMmFnSzlVbC02Q1F3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 京都府福知山市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5OVFdicXJscUl5Mno0TzJWd0FIeGg2blZUM2kzY2l5WmVxa3Btd0w0akhNR09zOXJWUmhnMVpKTUpleHo4QUhZSHBGUkNqazg5YmFTSkN1bS15cks2VnRVd2xsaWhWNm91R3AxbGswd1NaVC11ZFBmUjhHWW1PZ3M?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 北海道名寄市 九度山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE10dDEzVUMya2lQQjZCVWVkRVg1V0g0Zl80NzVVM1M1WWRhbWVCQTJxQ2FvbXpHX3kzQXY0NHNFcGNMT3BFRFJtVDNhOVRiOHBwV0xIa0p6ZGdydw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 青森県八戸市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE41NGpIa0ZSWXZoRVNILXlYUTFYTl94TlZSLVJka2ZULUFJMDZ6cEJVeEFWZVVKMkk2RUxSYUdFVHlxV0I5VVRnRWJ1QUU4VWpEbGlwSFo5OXAzekdDTmo2eDZPMGRNX1kxYzlYRTFPYVRwdzhyNEdyakE4dXdBZDQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 神奈川県松田町 田代団地の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月3日 北海道厚岸町 尾幌の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMzI1eVVjZ0JNMnV2Yk1WSW1UWVVQM1NJNUNCbjgwcUZwMDMtNzRWMHBEZmYzN1lRN3BYR3RqVkpJX2dacTNSQTlYNnh4LUhiMW93Q1puVi1RRmNXU2hPQTJieVB5TzYtNmZsVHFiS1F5YVlNUFhfNTVOV09DRGpfRnRmZFNKcEZQeFI5TDVTRXYwcDRRS1NlYUt2UTTSAaIBQVVfeXFMTy1QeU5NREYzdU1OdlZfTzFxbjd1MWRqQkhfNl9RQ01CdWg4ckdQREN1ei1JMjdNNDBzSk8wVldsNExRRUZOOW5mSUZmUUtfeEZpUGVuU3RSMmFiMWdreDA2ekZBVVN1OWpQUC12NjdzeDRyU0pOQThaTEg4RGxILUZFdWgwUlYzdy1NTENtUS1OUjhmeHFKVGR5Um1IZFpRUlBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 青森県八戸市 金浜一ノ久保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOMXpJcDNtWTd4eEFRYV91el91LV9zMEJNRXk0NXRhVmxCSVlzdXk5TTJkMFZ1WkpjOTd6bTZvbi1QQjQzNThINnY2ZnQzZ2l5T1FKenZyZ2JqNmpvNEEydHIyM2lkSFpvVFBGMEg1clBDWnllM0txWUFFcEZ0Y19MY2R4TG52cVJrbnhRVkJoRXJHTEFwdmUwalNqcTjSAaIBQVVfeXFMTUZ6TTJzcnpXRGtrX2RmX294alJpTzVnSEZwb2h2aW45NVluTGJTcmdBNHd4R1FSZDhwY1JHanlkQjl6NlJDWXMtM2hxdlNuemJXckNrSkhNUDN1TXdjakNHa3RWanBsRDdzdmh3WC14WnUtWnJ1Wk5ISGVkNmdBT2VsXzBIMExpVnBIZ1Z2czdjb3hrbXpwM2lQZWZXRHktWkhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 青森県おいらせ町 黒坂谷地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTzZ5Zy10RUttQzgzNmEtTDczT2Y0YVZtOHhDemVWMVQwMWF6eEhmNnF2LXlLQnBJaDFOTkVPQkZ3VjNCVklwdmVmMUJxSllVZ01laEVzLXlDbzJOT1FiSEVEU294NmlMNE13ejNEVmpnODhEcHBfekhidnRlTDVHb2N1bnF0NDhiWGJVWTdBbERGSlE4S2ptbng3SDTSAaIBQVVfeXFMUElaWHJ3RkdMenBlazBIRWFvX2h6S3M0clRuN2dZM3EtTEs2U3daVTdRN3JITDJNZlZ4SFpYQUc3cTNTdEI3T1VaMmZpMG5KeDBZbFFTejh1UlhybTRSTjctbUdyVnkyU0poTXEtWEltSzctQkVoMG00aUVSdXh6RzhjLTE0c2VoTHZOQ2dodmg5eF95OG4wa2NZdi1tamU4YWNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 宮城県富谷市 大清水1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVlMyTEt4bUFRcTlPMEdaRmd2cXRvei1IUTFYLWpIcm9QNDE0Y2tiWDhYUS05OERFUFFWMHB2V0FTb0g5SGlKaWZvc3dDdFNMX1BNZzd0Q1ZpdXRGT3pZQktnWmVzRDRwNmNqR2tzeUJtVlNHa0podDNCUDZOWHozeS1jdDdhLVZWakN5ZFZFTUFMeFJFc0VVdlgyczXSAaIBQVVfeXFMTlR4eFdNQUY0bVIwMlNOVGxJeE4zVndxMVE4blN5MC1yQThIVmVhWkF0b3hXemp0NURLWWZ0OWIxSi1MdnlGSUQxcEItVVRiR25mOTdnOHFhc3F6aXlkdTBuMkFhS0U3SnRiWjJrYlZQaVlqTVh6a2lEajZvWmsxVWhUNDI5ZFczcDk1eThHSlhVcjZKUDFQdi1QaUpKNEk5M1Jn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 宮城県川崎町 支倉山口の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMmNvWXRNUTJhdUVxX2o5WGNucnVySlRNYTFJbVBkZkZWX0pXZ1RuQ0RyN25CdjlYTGptYlNsc3FydFJXbTFBTHZLekIyMGg5MTZTVUlxcDhfTFFxUUNUWGdVaGZnLVp3OG9qbk9zZ0FTZlVoZmxXbVFDeC1reGIwQmVlbDA0T0tmNWVHSTQwYnVYcFRyT1Y5RENrR3nSAaIBQVVfeXFMTkdiNU1iYWllc2cwdUppWUtGM000MHFNTV9ZbTRySlI5OHlFS0NsMU5jVlVTM2FsckpScjNoQ29LWEIxSDFQNFp5S3JiYTFSd1pwcVZVcE1YaVZ1Y2VobjhuWlVhU2wzTzA1dk13OUUwdG12bV8tVFRMYzg1MmFWRXZtSVBkcXZoRURleVBsX2I1WjRZN29RTmNMN09JX2stZ013?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 秋田県羽後町 田代七曲山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPaXdjUFJDNVdsbksxX3VjWG5BQnpZcWxKUnZCSVVmMTBNMEF2U19SUWMzdjlINFZybzkwV2xoamZNUXQ4RVBxeUxWaVpsVW1DZWx4QkgwNGtwQW1USkhlblk1YzZsYzExaDhpbDdrSkFHUVhGX3h5T3BVb05RbzVESzFQOTFmMkxUTFF6YzFYeDlFYU5WQ3NtTW82YkJONENvQ0VCUjlnLUdKamF0M2xla1dIa1RxanNiNm0xVHVfckphUGFhNXdnNXo2cC00Q2JWVE5MNmVfY3JsTDBvQU1FZjdlVHo5cUFia01JX082bl84d9IBogFBVV95cUxNeTZnUFFzVHRkTzdmTnZYeGg2ZUpzSzFqU3RjM3FqOU1ZbW9GclhiX1A1aWl5aVJVd25OYjZ2cFZQZ2h3VWdEZF91NnlhRTdQaGRCS2tOZWhCOHJxY3hQajBjbnpUU2hCaHVsNTN4aUZtZ3VoaFEzemMwNFphdFhMRVdRR2NKYkcyN01lUExFYVZ0djRqYy1iTVFkNThHYTNCbFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 秋田県秋田市 飯島古道下川端の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQbF9SdVp2OUhxUFJKeV83eVhsZ0VNUXJGY0tqNm5ZZ2Z4dXpIc3RuckhJOWxnbl9iblAyUC05NjlqQ1MyWXRzTlluM3h5SFVPMXJ0cnBUWkdRS21zb28wNXpGb0wzRUZSc1RyX2Z3cTE3S2RpallUX0RaMnEyeHo0OUV2Um9OcWljc0VoYnQ4SmVtSWtzZDFqVGx1TnNnNjNpdUZrMmFXaEVBbjhQWHVuOXdqSDByWXZ2dUFMUS03MFg3RnVyMTd6YjFacTktVVdGakJQVmtNeHRia3lnM1NqQWdfNW5fRGYwVlFrZkdPbTVuZ9IBogFBVV95cUxPVHlOM0xsV0doaE50aVlEWndjbUgyUW1zb2s1ZTVLOE8yTlMtWndfdlRjUjZwamNGVXFQUXpaSUV0VzRxdlRrdzJwUEp6RUM3SUlZOVM1YUlaSnItNHNfaEwxdlhVbmdSOVFmUHotU0ZxNjZnM3lobDF5TXNSRm0xb2xaZVlzSFNBczBCMXNMUDFpLXVUMktwUTFnWUlpMTF5Z2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 岩手県盛岡市 長橋町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE42SzJJREQyazBEeWNXTktqYmlrb2dBVG51a19obWRxNm9yd1Y4ckF4WUVoVm9wZUc1M3ZZV2w2ajFwOHFJZXFCRnFLQUd1cEtHWUhEV2RYbjVWQkZvd29Hbg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 岩手県盛岡市 東黒石野3丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBHTXZfdGs0ajJheGpzYTRUMUpjTW10X3JScEhZbGlabERxV1JfbjhyLVA4ejdFYmktUDcxNEMzS2JGS2RXeXNNY0xzNmNIQ29BQ0t5T3FtaG5TSDhwR19Va0d2b25ueTU1eW5qelNrVlZ5RnhmSDVYQk8yS0EwNm8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 東京都あきる野市 入野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOU2ZDYlJRZFBwVGp5bERHNGhHVWtrNmluajBqdWJIUERkWHd0RXFQNGVfOUJrek55UXVvZlBIOUxhZHpNLWE2SXNYd0hlTmJ2RXo2dURQTmNkNVQzcnZuMzRHRG9zMjJnWTVaLWRBN1hjSDQ2dnFSTkFfTGVFVzJVRGl0dFJtRUZrQktXVlozXzR4Ym80RUVMbDFOQ2fSAaIBQVVfeXFMUHB3d3UtYWxLZW1IRzFoeWdvR08yXzUzd05tTHhGYnJneWdIUnRBMU1mbk4wVFhyWDZOUmNyaWEtZGFtRzg2U0wzSXB0YmNwTER4WDRTWVBZOUd0VkFWV29VSllSTGR0amxvUTRoOEtvQUFKbVJSYlB4RktDTFp3alhmb2tUazFQZUhyaXNxNGxtN2E3Tng1M1JMUlJlT2kxdWRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 東京都あきる野市 小峰台の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPYnMtSGR2NWR3eUVvVXE5R0NyS0dONDJqa3BBLXVBdERrTjRJUlRVbTRxYldBR2I3UmEyeFhYZ0RaaFBtVlNpNkVkSFFCTklwdkkzLXIycVk5UENUdEdIX2RhUkkxX3FNOHkxeEhmbUZLQTBhSTdKZzNQNFFlaGhLYmluNXpIM3dCeTI0SzRTMWNyRk9KY0ZRSjhIYTRsbU9adEMzMGRvbXBRY0dYVVh6Y1p6UUZvSFdoU0RMajdWYUdCNUlIYlBreWRuV2wyM1lWaTdDRmJhb3hvSGRra2YxVUZMdjNEYURFRENqeXh0SnlNQdIBogFBVV95cUxNZ2JwbkVLVVE2Vjh2NTRscVF2cnNtaTdWVnJqWkhJRzBmcjdRQ0FaM1BkRTkyaldHUjdiQjV4ZEladzlQMDdkOTd4N0dLb1BONlJHVC1WX2ZOU0U4dHAyeG44ZThTanZPRmh4Z012dV81alFRX3dMM3BLZFRuQ0I5aFpqZkRISDBfZ2JOZll4QkFTV2FJNmRlZGFTck9MM2lsRGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 東京都檜原村 神戸の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTVVNNGdJdFZuNnkxcXhjeEdqZTFiR1hFUi1mZ0Y5V3hhTkluWFVIUlRIbmo5NjJpXzZaWW9VcUEyaG8wNUp2OVFBUGxHNko0TlVSR19iaFJKUjViVFUtSkRNVml4UXE2YjVoRklwUkx5dXlBa3hETUJlX1BjZC01UHlsVHROaDZYTEZTUWlpYnp0Y0I0UUhUUHJCeFrSAaIBQVVfeXFMTWRXSHdYV3pScEVudF9vNFp5TkpfQVJTV19aZktxSHE1Y19LWjBsRUJXRkJpQjg0U3RjdzRJY21UdV9xeldRMU5VNG9lRFJZZzZlcDVFRE9oUUVFUFp6VUJuQXloUmIwa0lsVEQ5eGc0aE5IZF9OVFJVam5ZdTdyYkVoVm16LTlhOUxuS21JVUlGZG11ZWdFZXRmS013bTc4Zkl3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 東京都青梅市 日向和田1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNnI5UVZFX2ExVUJhT0NUYUpQdXFNdGZBWnpoLTRNRTB2QjBwZUZHTWh0NnR2VUtRNFY0d2hxak16ZklGdlhrLWZ0eEh5Rm80eG1UZnAxancweTVTSHY1eHNYM0VoYXY1bkg4SWtkcWdRVERBakVBaktOVlNEZkVod1JXcm53NTFnUlNONjhFQzcwZmhKYjd2WUpoMlHSAaIBQVVfeXFMUHpVS3ZySDlha3FNZkkwRmhwX2o3ZW1vM3RaSnhORGY2dDdzbVgzSGN5TlptREdMb0x4MGsyenVTb2cwMFNQUmRpaDBGaDFoRWdmZnJuT1VPMVRjZ1N1eC1BOGg2S1lfc3hZRDZTd3ZJQW9oWmtXMHdnX0V2cHVSX3MtdTFtMXFsaGd6Rld4Y2JsVEFKNnUzTnRITzZfZlhqNUhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 群馬県みなかみ町 小日向の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNHFkdDZkWmo5UGxYVTB3X0NHTTA5WEpGLWs5aHg1Y2VPN2VwdHhMSTdYa0xRakg1dHg0Wk9oa3VveWdhMjFlYzMzZUI1aGdySFRjNHZvdFRvandHUk5LYnNadm1OM2Fsczd5LVVUSFgxQ0xZYWhDQUZyQV9aeTBNdl9hSkNtWXhjMFRNb3lnOVRhcS1HTERadkVoQlDSAaIBQVVfeXFMT2NNMFYwMVYzSzdYdmFNalFDSm1kRkFXdHl5cjhfanlGRmNqVi1xR0NMeUFuTlN0clZLc3lucncwb3MyTzNaOWRsRENJa2NiRGVYVVhUYm1wWTRacW9XbURJS1cxQUhjeU5XN0tIbkg0MUFCdFBCUWdKMjFLVTF6WC02SHYtT2cxSjJnZUpGUDBUVUU3Zk5TUmloZTJiZE1wZl9R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 群馬県高崎市 中室田町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQN2VhUnIwWFprTlViakpVMWF5bk1NU095NUxYYWRFa2c5WFZyZl8tR3czNTNIV2JKRldRUlc3Q3dvNzkzNkFUVHl2VEJSeGtSeTdZQjEzbUxQN2stZUl6QkpvZ2YxeUdsdnI1M2RTZWlHOTl4MGsyc0lBX2lCbnBreEFDWFJ4aVh6cE91Ujd1d245R3d1WW9QZHBHSFHSAaIBQVVfeXFMTW9MeFV5RWdRVUVhWU9HUjZTV1ZKTlE3em9mZDdrS3l4UDBvZGZNbVRNSHlTSWxhakw5ZXFSVlgtaTA2TkZTVWh6NUhZeU5xSHVqMVVJbGV2TmVlemJnWndheVlOWFRXbnJPRUpRYi16RmozWVJHeDkyV0V0OW9HWXBkMmNBNkFWRXFVVm5mSjM0T3ZJcVk4T0tOeFZyZGJocEV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 群馬県上野村の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月3日 神奈川県松田町 寄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOGQtSUEtQ1M2ZGtmcTQwYUFrLTlWRmllbEtjbE9ZTUVoVzRmQXF3ZmprWF8xMVczeHpDSU9PYUI3dVJmY2Y0NHZMZU9yb1FuNjJQWTVPTHFTLWJLcmoxS0hCVVF2NWRmZVRqMEYyMFAxa2lwVzY1bTFzdV9jVXhSVTJPbUpmSmxxTHlLWTlsZ2lsTEtXMG81ZDZMM2nSAaIBQVVfeXFMTnpqeklxbU1FVHNibTY3azBXWnFyWkNVRVBFeHlTZWZhVW9aaXduRi12Z2F2MVZuU3FnVjhhdnIwVzlqT3ZkcURWanAzLTRYQWxOYTFjcm93UzhGcHJLZE9DWm9yRkdMeV8yYjRxZ3Z2OG5xNXRuTjVMRmpHOTVVM0txNE9Cemd5SThGeTl6ZklBSmhHNFR0VEg2VVdDWDZ0dlJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 神奈川県厚木市 上荻野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMFRJcEdVRGlPaW1McWx5UUgyNUd3c29FZFRhd0pxT2JzZlZjOG04d2RmSVRCSHh3Y19aNktnTlBnM2hJQVc4SHFRb0pUNHA5V3JETWdwVXdFbWpyb0pJWUZ4YmpWSlItclRfRkxoc1h3WTMzVms4emlhV3Y3VUxvMjVZRjkxeEswSVcxY2ZSQjBOX0RYRUpOMDhWd0LSAaIBQVVfeXFMTndLWjkzck1SZEZRMVk2QjhuUFVZQ2VRQXBha2ozMXRMNVRWUkc2WkxLRkYyUFBLLTlqbG1GWk1UR2lTcXJwS1FmWDllVDBUR283M09qdU5FZ0ZZWER6am5tdXlDNkU1Rzd1UzdmWGg2SHo5NWxjcTRVS0ZtaFdKU0xKcUNyOUhlUXBJbVdpWEVhbFJRUVNwQkhQb1VXcGVIenN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 福井県小浜市 尾崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNdDJDWEdpUDNZdFRYSkxZTzFHOE1wcGUtUUNNSHYtaDNFVV9xSlhxYzNjWlVqTmF0czdfdTVSY3FVaFhuVndCVXl4bHBYWkpqTXYxMjhjd1ZWbEsxN1JhbjZVWHMtc3hfUjduQ2puTjVlWmVFMk9sUnVIenlJamRyOUU5clJFRHhUU3JseUtmOE1XVzJQcGtJV0NDWmJ6ajhsRy1PQlJvU1ZONENZV05GS0s5dHh0RXJMWjg2b3BjWG1XTDk2RXpaZktoWTlIMm1rY2FwZEIwR1dlZlJXUklmM01heXNnZmNremJpS21XS0t3UdIBogFBVV95cUxOY0tKWjFNRFRaNG83V1RhWk5ySHFIOExpNS1HUDJVU1h6bFpKR082eXRrZHdBRHdrTy1yZk5reHJiVHRZaG1FeXh5NlhRR3lneURibmFObmFBcEhCQ09mZXk2ZEpuY0sxa2tEZm5nQ0RPOHE4TWVvaXRRbFNxMjZocVRKdk9WV1VxczJmS2tNRnBXcVJtdWo0UmdWRVdLV2Q3bXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 福井県小浜市 飯盛の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdEIxd0VVdlZoNkdNa3RuZGZWYndBOWNyTFRQOTFKXzVYZTZuS0M2MUlHUHhQcDFDWnFFV0l2dVVVQkd3VEowOWI1RjZHdnFYVlplWS1rLXptLVNxbFZGNTZ0RTFubDhpa2tCajVjWS1vTU05blp3cG5lU205WnpUSHRFdnNBN1ZGZzB1b2twWFVCWDVxei1TOWdqVWfSAaIBQVVfeXFMTjBnd0ZfYXZxMkRlRjd2Qzd4SUFKWFNRcEFrSjNCc1J2aE9SOHpZT29kVHc1R0FMd2p5LUFqN2JWVkYya1V6WExwbG01RENnQ2czMnJnWDNpdG42OUh5OXpWOUdRNHNrNFNMWWRBY0ViTk5BS21uWnpjZ2dJZF9wNXFkc0pnVXBralRRWWROcnZ4czBTdXhpMjczbUhVOWdMY3Z3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 京都府京丹後市 大宮町延利の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOVJ6YjdkX2h2LVl4T01fU1JoLUlQYWdmTVUzUnN0eG9acE4yZVRzVWlHX0hwcjh2LVVBaXJCNzFDV2tUMnlxSWhaQl9SNDZ3NUhaNEg3d1RPdWVwczBGMjh3NlRCZGlHUHBWdnlCTzlBdEE1dUdIckMtMENBWTNfSHRTeW56MDJKdmhVVFJ1eUJnQU44M05iTktmU3jSAaIBQVVfeXFMT0lzWjNLUjJDb25EaWVtU0x3X045QmFNYkFBZ0lXY2ZHc3dBUnpVXy0waHhQM3Z6WTdVN1h2bkpjWUVqSDEyWGxiOV9IS1JqSlBsSDl1Uy1EbC1MUjhKeWw1RnoyMzRiR3RZb3JmRkxrYnYyOUppS3E0ZUUzZVBtY3JCMXh5WF9IRHpLQ05uemNSOVdpNGRUTG11eUJXeVpHY2F3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 京都府城陽市の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月3日 京都府木津川市 梅谷宮ノ谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月3日 兵庫県香美町 香住区安木の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNazZjNUZ5MUQ2MFpONnBnTU1qUE1rY19ZVXJWcXFGSExfaW15Z05ZXzZndmpxS0g2eV9INTVQTWJHM0dTS21rLVZjV2d2dTZFcHhtRVlQTGlhb3EzOHJrTU51MlhrQ3ZEazZrSE5lT0RITXF4U0d1RU5KbWEzaXdyOERGT2luR1NEaEVmMm9admluTHhoYUt3bkRjdnXSAaIBQVVfeXFMTmtPTk1aWDVXUkhOaHVfSC1pb3k2bExscjBBRkRKemxMb0VjVUdKb3hveGc2YkMycm5ZSFZ0c1ltVFJMOUNuVDZUTzh5RkFTMWgyN2dyaDQ5dndsRUp4Q19HRk9BZWNlTnBuZTdsakt2M2xfU1BHMnBOcWY1YnhpQmJzb0RFUW9ISmZ4Vm4yRFNfZmFmVFBtYmk5WHZLMzBiUi1n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 兵庫県豊岡市 日高町太田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMlJ0NHM3azFTN1J1RVVKa3NlR1RqNTdUQWxBaFlYbGdhN2RuUUdRSTN4LXcxT1hzSkhGR1B1RFBkbWJNa1BXc2pKOFpZVGRLcXNIZEdDU3FoU29WdTdSSGdTdHRDdTE3SUVrNWE3akxKSExBeGNiSTZVNHdnRDVtWUZlbUM5WnZtSXVsYjFzZW1QbjU3cGZMb1VhVE_SAaIBQVVfeXFMTnVVSml2ZHUxbHg4Z1ZrdHlaNXdVT2tLQ0RoLU1ZemZBUDluaVJGbEdYWW9ra280OVhwYjBPc0h1LUtKdzVGVndsUEFsdFM5cGpWb3ZmRkVQRmg3V0RGRkt3MEMzTFBkcUJweUdzSDl4dW5sdUFSOUYxbmFBbURKVFkyYVVtWTgwNGl5bDFMQlhKZnFOQU5pYVM1dGlVOXZTLUhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月3日 山口県萩市 弥富上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQWEtueVBqNWxyV094VWJHVnAwckxFZGo2YzFkNDU0LXdaQ1g0RE1BSGYzT0JMN295U0FnOXI1MFRLb0U4LUNjbEpVNnBiRXhEckxsdmNYVE03RVJ3SHlGOFNYT3dhem5UZmFWUGQxeXFoSnZhZnVObmpFd3JQbUR2VVhEaUVuejBVdHB6dEFTamhHQ1ZJQlZOSlJnX3VNckVXVnU2cUc1di1RbXNYbFE00gGiAUFVX3lxTE40YVdWN2dZNzZfSzJuTzB5Q3RzaFVyVGJXVHlvenpIVVRibU8tTGgwbDdscGFOZW15bExadVMzaDF2RnZ5d1Z3YkN0NlZ6VzNhTGRUNDl1aFhHZ3M5c2VkbWwtMHNVbjhQd2Y4d3pmM0JPNEJpN1R2ejZEWVlaQUdCZkZEOHJpU0NWTnJTT2FOX0R3R1luQjZaODBfbzlNS0NPQQ?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"京都府","count":5},{"pref":"東京都","count":4},{"pref":"群馬県","count":3},{"pref":"神奈川県","count":3},{"pref":"青森県","count":3},{"pref":"福井県","count":2},{"pref":"北海道","count":2},{"pref":"宮城県","count":2},{"pref":"兵庫県","count":2},{"pref":"秋田県","count":2},{"pref":"岩手県","count":2},{"pref":"山口県","count":1}];

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
        <span>対象期間: 2026年11月3日</span>
        <span>·</span>
        <span>公開: 2026-11-04</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={31}
        periodLabel={"2026年11月3日"}
      />

      <h2>主要事案の分析</h2>
      <p>当日記録された事案のうち、特に対応の強度が高いものとして捕獲および銃猟の事例が挙げられる。京都府福知山市においてクマ2頭の緊急銃猟が実施されたと報じられたほか（※1）、同市では罠にかかったクマ2頭が殺処分されたことも報じられている（※2）。これらの事案は地域において個体への直接的な介入が行われた事例である。</p>
      <p>また、山岳環境および生活環境での重大な事案も記録されている。北海道名寄市の九度山ではヒグマが目撃され、登山を行っていた男性が救助されたと報じられた（※3）。人身被害そのものの記載はないものの、登山活動中にクマと遭遇し救助に至る状況が発生している。</p>
      <p>一方、住民の生活圏や交通インフラへの近接事例も確認された。青森県八戸市では駅付近において子グマ1頭が目撃された（※4）。また神奈川県松田町では田代団地付近においてクマが目撃されている（※5）。これらの事例は、人間活動が活発な施設や居住区域のすぐ近傍まで個体が到達している実態を示している。</p>
      <h2>全国出没状況の概要</h2>
      <p>2026年11月3日に集計された総件数は31件である。上位都道府県の内訳は、京都府が5件、東京都が4件、群馬県が3件、神奈川県が3件、青森県が3件、福井県が2件、北海道が2件、宮城県が2件、兵庫県が2件、秋田県が2件となっている。記録された主な事案を以下の表に示す。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">該当件数</th>
              <th className="px-3 py-2">主な出没地点</th>
              <th className="px-3 py-2">対応および事案概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">福知山市、京丹後市、城陽市、木津川市</td><td className="px-3 py-2 text-xs">緊急銃猟2頭、罠捕獲による殺処分2頭、目撃情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">あきる野市、檜原村、青梅市</td><td className="px-3 py-2 text-xs">山間部および居住地域近傍での出没・出没の可能性</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">みなかみ町、高崎市、上野村</td><td className="px-3 py-2 text-xs">集落地先での出没、山から河川斜面への移動</td></tr>
            <tr><td className="px-3 py-2 text-xs">神奈川県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">松田町、厚木市</td><td className="px-3 py-2 text-xs">団地付近での目撃、寄での出没痕跡、出没の可能性</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">八戸市、おいらせ町</td><td className="px-3 py-2 text-xs">駅付近での子グマ目撃、集落周辺での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">厚岸町、名寄市</td><td className="px-3 py-2 text-xs">尾幌での出没、登山男性の救助</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">小浜市</td><td className="px-3 py-2 text-xs">尾崎、飯盛での出没確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">富谷市、川崎町</td><td className="px-3 py-2 text-xs">大清水1丁目、支倉山口での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">羽後町、秋田市</td><td className="px-3 py-2 text-xs">田代七曲山、飯島古道下川端での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">香美町、豊岡市</td><td className="px-3 py-2 text-xs">香住区安木、日高町太田での出没</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別出没傾向</h2>
      <h3>北海道地域</h3>
      <p>北海道では2件の事案が確認されている。厚岸町尾幌においてクマの出没が記録された（※6）。また名寄市の九度山ではヒグマの目撃に伴い登山男性が救助される事案が発生したと報じられている（※3）。山岳域における人間活動と大型野生動物の行動圏が直接交錯した事例である。</p>
      <h3>東北地域</h3>
      <p>東北地域では青森県で3件、宮城県で2件、秋田県で2件が計上されたほか、岩手県でも目撃が報じられている。</p>
      <p>青森県では八戸市の駅付近で子グマ1頭が目撃された事案に加え（※4）、同市金浜一ノ久保でもクマが出没している（※7）。さらにおいらせ町黒坂谷地でもクマの出没が記録された（※8）。駅周辺のような都市基盤への侵入と郊外集落周辺への出没が併発している。</p>
      <p>宮城県では富谷市大清水1丁目においてクマの出没が記録されたほか（※9）、川崎町支倉山口でも出没が確認されている（※10）。都市近郊の町丁名単位の区域と山間集落地帯の双方案件が見られる。</p>
      <p>秋田県においては、羽後町田代七曲山での出没（※11）、ならびに秋田市飯島古道下川端での出没が記録されている（※12）。また岩手県盛岡市では、長橋町でクマが目撃されたと報じられ（※13）、東黒石野3丁目においても成獣のクマ1頭が目撃されたと報じられた（※14）。市街化が進んだ町名区域での成獣目撃が目立つ。</p>
      <h3>関東地域</h3>
      <p>関東地域では東京都で4件、群馬県で3件、神奈川県で3件の計10件が記録されており、過密な人間活動圏への近接が顕著である。</p>
      <p>東京都では、あきる野市入野（※15）および小峰台（※16）にてクマの出没が確認された。檜原村神戸でも出没が記録され（※17）、青梅市日向和田1丁目ではクマ出没の可能性が報告されている（※18）。多摩西部の山間部から丘陵地、住宅地近接エリアにかけて広範な確認が続いている。</p>
      <p>群馬県では、みなかみ町小日向でクマが出没し（※19）、高崎市中室田町ではクマ出没の可能性が記録された（※20）。上野村では山から河川に向かい斜面を下るクマの具体的な移動行動が記録されている（※21）。斜面から水辺への移動など、地理的形状に沿った動線が観察されている。</p>
      <p>神奈川県では、松田町寄でクマ出没の痕跡が確認されたほか（※22）、同町田代団地付近でクマが目撃されている（※5）。また厚木市上荻野でもクマ出没の可能性が記録されており（※23）、団地や集落などの居住エリア近傍における警戒が求められる状況である。</p>
      <h3>中部地域</h3>
      <p>中部地域では福井県において2件が記録された。小浜市尾崎（※24）および小浜市飯盛（※25）においてそれぞれクマの出没が確認されている。同市内の異なる複数地点で同日に事案が確認された形である。</p>
      <h3>関西地域</h3>
      <p>関西地域では京都府で5件、兵庫県で2件が記録されている。</p>
      <p>京都府では福知山市においてクマ2頭の緊急銃猟が報じられ（※1）、さらに罠にかかったクマ2頭が殺処分されたと報じられた（※2）。北部では京丹後市大宮町延利でクマの出没が記録されている（※26）。一方、南部地域においても城陽市でクマらしき動物の目撃情報が記録され（※27）、木津川市梅谷宮ノ谷でもクマらしき動物が目撃されている（※28）。府内全域にわたる広がりが示されている。</p>
      <p>兵庫県では香美町香住区安木（※29）および豊岡市日高町太田（※30）でクマの出没が記録された。いずれも日本海側に近い北部地域での確認となっている。</p>
      <h3>中国地域</h3>
      <p>中国地域では山口県において1件が記録されている。萩市弥富上においてクマの出没が確認された（※31）。四国地域および九州地域における記録は本日のデータには含まれていない。</p>
      <h2>リスク評価</h2>
      <p>当日の出没状況を総括すると、以下の三つの側面からリスクが観察される。</p>
      <ul>
        <li>季節要因と活動性: 11月初旬という時期において、成獣および子グマを含む複数の個体が山間部から人里周辺まで活発に行動している様子が記録されている。上野村で見られた斜面を下降して河川へ向かうような活発な移動行動も確認されている。</li>
        <li>餌資源と行動圏: 山間部の自然環境にとどまらず、罠への誘引や農地・集落地先への接近が各地で生じている。福知山市における罠による捕獲および殺処分の記録は、誘引物や農業環境周辺に個体が継続的に引き寄せられている実態を反映している。</li>
        <li>人口圏接近度と安全管理: 八戸市での駅付近での目撃、松田町での団地付近での目撃、富谷市大清水や盛岡市東黒石野などの丁目単位の住宅地における出没・目撃が多発している。登山道での遭遇による救助事例も含め、人間活動の領域と動物の移動経路の重複度合いが高まっており、生活空間における遭遇リスクへの警戒が必要である。</li>
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
          <dd>2026年11月3日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-11-04</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-11-04</dd>
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
