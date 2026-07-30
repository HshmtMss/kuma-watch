// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月29日 / mode: daily-report / 生成日: 2026-07-30
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-29-daily-report";
const TITLE = "2026年7月29日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月29日、国内で108件のクマ出没が報告された。富山県立山町では建物内に侵入したクマが緊急銃猟される事案が発生したほか、札幌市や秋田市などの都市部でも目撃が相次ぎ、人とクマの生活圏の重複が深刻化している状況が示された。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-30",
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
  datePublished: "2026-07-30",
  dateModified: "2026-07-30",
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
      "title": "建物内にクマが入り込み緊急銃猟",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNeXBlR0YxQUhnTzdGUU9PNGJsN1NXWVNiekVsRVFObmt3aTVnUk1RczRkcDdGZTFlNVFkYmVBSlR1bDdXY19mVV8xa1l3OS1FVkZLbTNSRHV5U0xjRlBEM3Zpc2g1STlNNVZxOHY5QTRnZE9uVnhqWUhMbDREY0tsdmxkUzZGMTA?oc=5"
    },
    {
      "title": "住宅街でクマ目撃、警察官も目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxONjhFZW12dE5hbnhHMXVaWWpYdmxfcngza0IySDktX2tZdFE1c2I1MlFSNERJT2J4bzdoS1c5a1RJb1pVV0J1NUk3aTd4Wnlhdm9KZ1pXMnZwU0pSUHpzX2hhbDQ0amM0MWpMdUdrN0ZrbUFTTVFMSEVnV1R4YTN0bkVyelNabUpmRy1aZjZR0gGAAUFVX3lxTFBLLUQteS15b3ExX0pkekN5eEowUHlNTEhTYzFBZ1A1QjBWQUlGYzFBQWlUWS1NeG45akYtVjhBUFpXNnNra05seElLc3F6QlBZbFBTdHg5UzRkakZnNks2UHN6TVAtVlJYTVdZVFdRYlB4amVvb0NrTjhtOTZBR2Ft?oc=2"
    },
    {
      "title": "県有地に体長1mのクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5yVlNxQTAweW9zMUtORzBCMC1reHlUcE1DaVBKVUdTb2ljU3VQT2REN2hSM0ZGV09CT192S0JNUjd4SHRZR3dYQnBKVUNET2hZNDN0OUVVWjVMRG05Y2Z1OHRpaTBpaE9Jb19hOHViaDdYbmw2Nk5MS1Zrd9IBgAFBVV95cUxPMXZqSjRITzB0N1hOTkhpSnQ4OGl6S056Q2FfVjl2aEk2a2wwcGExbUdoNVh4d2dyNkhfTDlMek5ha3BLLWY3Tmk3cFVQT1BsTzRJc0w3Q1lNMTNHTDBJNEkwVTdwRzNBSGlNZDR1emEwTnZlc3ZTMm1GRHA5bEFRYQ?oc=5"
    },
    {
      "title": "盛岡市浅岸3丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSXZoSzRWcnk4YzVFdnFIdTFFaXBnTTAtWXlseUlGelFPVjRrekJQVjdiOFlFZEM2NnpwbDNTX1MzcThXVTllbmVnd0ZtNHlLUkRqblFOc2JfcGtnZ1Roaml1OEFSLWpiTkhVYVB4dUljMXFWU3FNeklma0g4VlJsTWFSTXlmZXZrd3c5eVY4VkZMeU92dFY3anJEUWrSAaIBQVVfeXFMTVZzc05qMFM4Rzl2VHR3S3dWejVSSDd1QkdRQlNPWFF5eVozYnNfc3lsSnF0M19GbG9WQWFfS2l6NnRMMWRzTW9sUV9EYVhpeGxiQ0toMHhSZWhNdXVDLU82SkVnejkxblIwZ3Q2cDVpLXBNSVlhbndUNnI4TkhqSGxuM1VhbXozSkF6OV9FU3dZUWtTcDNKZUt5MHo3TGRBSDNB?oc=5"
    },
    {
      "title": "恩根地区、１頭捕獲",
      "url": "https://kuma-watch.com/daily-report-2026-07-29"
    },
    {
      "title": "ビート畑が食い荒らされる被害",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9JMkpZbW9IdVNlZ2JaLTBSSXNFdUIybFQybTdMaTVOdHM4T2VqNEhjVERTYVdwUFNUdTVPdnhRSENTTWVXTkVPY21GZW9kUlRFdXlVWTdlTHNUSzE1QlMzNXlNcG5sZVNVTEt1N0R3Y2JQeV9IYWhiTVhHUHN5ZTQ?oc=5"
    },
    {
      "title": "大仙市強首上野台でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOWENNZm5SWkxnS3EtaEF4cVNkWmxRaHVRaGt5MEluOTZwNUdRLUs0eDFEM19ydXBuYkQwbjNvNGxpR2NTdUtIWTM1NWtsZFMwMEdaN2EtX1BBUFN2SUluWEVpQ1ZjWE9PRk9GWDNQaENTOHhhblc2aVpnUlVQV2h2STJRMF8zYXUxWV9yc2wyRjQtenY1cVUybTRjUTJ3anlLTUE2NGdBVG5GNFpJR2U0QkMzUlU2aTh1WWgyaEFQMkd4bVJLYjhIaXNZeUdoeWZsTWFBUW1va3ZQS05UZHNjWVpzeXRPVU9aRUVyemItVGFrQdIBogFBVV95cUxPNWVtSTlkckVsOWEtWHBJaUYtNmVBSnB3Y0M5X3JBd1dGQjBWVmUzb0dxQ0xheGgzcXNmUFBPQTRTZ1pGWEllMnlza1RScDVzMkd3V24taS13OGdtWXViYy1VTS1vR1hZc2ZDQWxocEt1LWNEWllhU0hBVG1xOU80Y3pGRkF2bDhYV3dOdXVpTDd0TmkxbmxoeE5NLUJYUnlkclE?oc=5"
    },
    {
      "title": "下川原屋布でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVWlrRTJJVW1qR0p6c0R4OWxxR2JNaHRIeEtRZVlPZ2I2QVVKOTVBSnVqSWdXX1UyRDk1TUFub2RPSHNhUjNaV2JvRTBTc2RvUjgydGpnRlIzNGhSQVB5SW5qLUI5UDRsaENGU0wtN0hteWRfd3FpTlBfdlRxQnBmVFlENTQwNmVDLXdQRTlRZm1BMDR2MjNwLWdWUTHSAaIBQVVfeXFMTVAzMXNCYndSM2ZwSGdnNE5GZ1EwQmlaWlF2QWZFazF6My12ZmIwY3UtTjhnc3lndEVBbVNkcHBia2xvdDBXMXNFYUR4c1lrUmFoYkkyOFZnZndYUFBfWmlGbWFFYlVyOGlpZ2tsRURsemNKT0RMeE0xc2FONm81MG0tMXdrR1l6bEhaTFRPTkxidnVJNDZoSGdiSEwzNDNPZS1R?oc=5"
    },
    {
      "title": "民家まで10mの地点で目撃",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1Na1QzSGFJbmF0c0w2b1ctdEpBcXJzVVo3RHBvYWpqYXBjeU1TN29XYmlTZi1WMWNWRnMyV2ZIN2ZuRGlTbXJBQVZtUFJrQS1QNVRSVjVyTHpoOWo1MllwZ3hB?oc=5"
    },
    {
      "title": "長沼でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBMc0s5U3JuOHkzR0tPbHlPejQwRFd6eVEtdEV2bU5vVU5RU1pySFFxRGFZdWFwcGN4NGhpcDlCaUZWRWsxMTdTdVBqb2NKeE5tcVo1bG1hMFVjOEg5TVV1blRGRkNvaFpZeHN2My1yTVdabXUyZGR0ZENFQzJOWEU?oc=5"
    },
    {
      "title": "建物近くの草地を移動するクマを女性が目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1xVzdJOU85ajZUUFhIa2NPV0xoNDUyNHFfckZXMWYxNkNQU29aTkxycWkyZXNUaG5FSGRDZm1sNHdPRkFWSzFYaGFCcEZqS2diQTN6M09FRjZ1bnkzUzFBcXlIb1ptbXdGUTdJSE5hZmttOG13RHI3NjgzY9IBgAFBVV95cUxNdzZGaF81ckw4SE1QSVl3VVBmd1lFeFNWejZ3dHI5blRuWF83MzJ3V1BFeWlkLU5yRGxhRGpZZUhVcDQ5VTdnT0tvaGlvTUt3elRsRS14MFBycG01c1lWSnNDdXBBUTNRSVU1S3otZGFkeVJlYVFab0tPMjZUOE5BZQ?oc=5"
    },
    {
      "title": "妙高高原IC入口交差点付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNZHcxZ0ZocS03a0ZZUUwtWEktR2FhbkNKUXVvcFR3R1NKQ1BJTTRaT0RUajREd0JmZU9xX1pIbVl3ZFlLZ2lVdXJsUk9Cd1dmNkM5RGY4dkFueklfUXY2bFFrekhRY2hmRWlETGQxallDWEZRY2FzQTlJb0FyMThhVzlSc2RQSGxQb19rel9ORWFheTd5NVFXdGgxWl9aV0gtaFFTeDdhY1NKSWZkMm9CSlhNMkpzZVh4cWhXYkdaLVIwN0hwSEHSAXRBVV95cUxQSlpZZmZTUWVSSEJuc2dteE9FTGRsMmw2LVlZWnhzWUFrZ2R1dzBMWFVQVHRaeVZWTVMxT0M5NFJuZm5JSGJSMkFDZmRDNDZZZU1Lbm80VlZjU0lzby1HWGczbzMyT3p4TXBJOG5OVm5PMnRzRw?oc=5"
    },
    {
      "title": "クマが出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQMHotZGk2TXVNWUh5VEdJUGRWVV9KcDRLaW5oVVJqNWp3U19zMHV3VzJndmowMmJGLWlndDZSMXRjcHpTeENqSnhrdm9OZHpzLUthdVY3dUI3aGNUai05dEt5cGd3TFNTUGNlRFA3NE1waXVWMlZ2RjBFemRVbnZuR1RNMjhYanZnRWxraTZLTHVva0RIRTRfVnZNWXRXam54cHJ1eUQ1R2hXVmVKYlhIZ0xoT29NazNWUlY4LTk0RmkxM09hS3NoVkNNMU1mOGpLOGhMWWc1Y1FWdEVuUWdPbVJ1VHBOa3ktMWJtZkxoajRWQdIBogFBVV95cUxPWUMySWJ5aGlIQnFWNzdRZ01TQlFjSUpHYlFIWGVFQU5ZbjNXam5LajFubk5XMDhBTGlodkhVYjJJX1JwYjlHb1hXUkt5VmE1cFhPNzgtWVY5UlVsdXR6Szd2eHZKNmNkUnFzNW43RmY5UTdYMUtSaUFzcndTVU1kUlFfcEMyZFpsLTJkRWxQVFZPRXhMTnR1b2RZbFVZdE4xS0E?oc=5"
    },
    {
      "title": "鹿沼の住宅敷地内でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE53Sjc5STZKMkxUcnV0cjNGMmxoRWd6a1BPa3ctZ3g3eUlYa284a3lrSjdjU2xzR2V1b3pOd2NCUXQ3WUp6WjFBZXg4Qkt2aU51YWw3NXdzZjFfd0U?oc=5"
    },
    {
      "title": "クマが出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbGUyVVVscnhSNXl1dVZVMlRfWVAxLV9VNHRVLUNRLXF1NFNTVlBTMl9jN2Fmamt1ckI0Z0oxdDhrczYxamxvS21SYTlFYTdHMGhWN3ZlYlRWS3ByOXlXQlFrenBQWVBSSElZVU1NNUlVcXk3OVE0MzBwTEswVExoandKN3pzZDBtVERfVGNkbjBzTzN5V0NMZ1JfVHZhNWZ3UXlYZ1FoTXduWnlXWXZQa2QydTRGOExsblFiVGNMb3dLSFZpMjZ6SmZleGcwbXFoNkI0R21EZjFNOVJvbWVuN2VsamZTQUdMU3RETWIyeGo2QdIBogFBVV95cUxPZVVBc3RFQ2xINExNMHg5RHowcTVJa3QwTm4xLWxfQ2ZLMTBXZkJqbml1UDJwaVQydkZhVUx6RkZMVkxVT2hBd2ozcjlPT3huWTVkWElzSjg3cHdqTXdRbGJ4dXg5QWlPRmZYd1g0SElKM2gzV0JsSFpvVHBmejFPcTI1RG13a280UXB6VnVnMGNhanFUTVFKNTNOREptUnY3Qmc?oc=5"
    },
    {
      "title": "小矢部市後谷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSm9NNDl2anZiZWF3VHQ0N0NsbEhPRUNDbUY5ZVZ3ZDZaWERfM3Z2YlRpNHBOM0Q5MVY1cVZsU0hjejZ3VWVBbUpvODhCMEtXNnYzNVZzODhHQ2hFRC1lQUluSDhIbTlIVXRKdEg2VzlIVU9XMEtaNllxYUFJcHl4TXQzNFdoakEzc19sS1VwaVk3dVBCbERmZHQyTV9PU0F6VnIweExTYXdrUFd0dmFLS0lTTVhPTHBPblRramczRkJicXM1dGYtdzdLa1gyYmNUbVhkWS0wZ2tia1ZjTGJRLVhuTExEaXZjQjdENExfdGRCd9IBogFBVV95cUxPa3BpY3hIeXYtTFdiemRzZWkwVmwwTUZFZ2REMXJHQmZDTXBEYkRyVHo3LThXR29PanVRY0p0dThjczd6b2hmYUlsekhKUFo1QnItbnRQSU5ZQVZCdW5QMXY1Vy1xOW9VQWdVZTN0TXFGcU0yTmQ0Z2NpV3JKbDFBbGpEUDdjZDNyRGM3RzBPVmNtajZ6WGlHaFVwNUx1d19CQlE?oc=5"
    },
    {
      "title": "安曇野市穂高有明でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaGFOZndFLTlBWlVmMnZhTVMxMlNCSUhGXzkwQ2JpblhCYWlmd1Z0cXBnUDRuU0trYzM5LUxZdjhIUWZJaTNkVXN5MmwyajVuS1ZzdlVDZnM5NWxBcWxvSHRZekgxTDNiX1lXaVVkMVBjWjJ2LUNWSzB3ZUJGT3ozeEloQjFTMHRmbThYZzhWZDRmVng1NUVjNkJPdzPSAaIBQVVfeXFMUHVLSTdkejduZjZIRTdQRFVEc3FJLWxNUkJiSEc1R19nS2hqY25GNTBjV292dWUyVjZSMm9JN09YLVZvbDZMMVQ2QkNubVJZd0ZoX1hwYUUyWVZzZWdWRUp4dXotZWFhdUlvYWRpbUlzTUVoWmRIMkRQZzYyel8xWnJ5ODh6M2hxVTZTR1I2dUxUckJIaWI4NFhNMGVxWUxxVkdn?oc=5"
    },
    {
      "title": "クマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOREVMWG8tUUNMWjdUclJRckhNNUFsQ0t1cjBRTm5iYkZNbDJIMC1Td0NPV25oemJUaGlqV0R2NjFXUURmdGJXb244Wlc0b2JTU2I1cUZ6T3dmNUVsUjRCYU9hRnlZbVNwUVBKN0JFLUloLVpOamVzVmFNNzhoUHZHbHBpekgyWGQxMlBRWE1hREF5YkpRR21qY2dkQknSAaIBQVVfeXFMTWszd2RBakdmb0xoZ3c3UWUwdTk5RktkOGljWlIzcUkwbk5CX2JQUG43cHl4eEV6RFJ4ODNOSFNoczBjSTZSN1dYZ1BTaWpCMzF1S1pvSGt0WWdvaGY0RGQwUWlSblRQTXNkbE91aVIxM1czeWRWVTNSMUlldFAxLVl4Y0xoOExPcDl4WW5IVUc4M2VOX3lXaDJvR0xmbVMzWnJR?oc=5"
    },
    {
      "title": "クマが出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxORmg2V0REbzA3R0wxZUFXLUR3ZWRPZElhOEloUFNFRi1WdU5yMWxCdXRHT1U4bkxuQVJpc2FYTGdjTzVmcExZNFgzdk51ZHMyVkhSSVF6blh6M0M1eHc3NktleU91R1NlU1BoVllfRWk5cGh4Vm1CbTRKRjdMZjBIaVE5cEZNM0pSelYyRFUydTltbzFUbWhvMGNiTTNSQXNqV2Z2c1ppeXZqOF9NcHN30gGiAUFVX3lxTFBTQUJmY0lSV2dMRW8tMTFWMU1rcWRmdUhRcEw2eTAzZndlYWd0NEo4S2toeVRjazMzcmVIV1pGSEVxY3NVUmI4Vld4Z2REemRRdjJDSzFiU2VBUmx4Z2kxNUkxZzlQM1QwejMyd1M0eEFSOEZSWFV5NHZiQ29LR0k3X3dTUVczeEp4QWxPZ0twbDRBNkNocS1yUkx5UnB4Qk1qUQ?oc=5"
    },
    {
      "title": "雲南市大東町川井でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQUFlKQVVuY0UwZnhUU1pLZFFLendhckFlcVZ2cWdwbEZSTW5PMUdpZ2N1dEVkampMeGpXSVotS2hRU3JoTkZvaEtlOVNDQ0R6THR2cFJ6TzlmMDJoWWptbHdnRDR5VG8tQjJNU2FWYUczT1prdnE4dURFNWtiSGN0dkJaOERJSF85VktFcmFhZ2h6NUMyNTI3dE5iMDdWLWFsUzlYajJGT3lTQVRKVEVhYTBwckFSbngxV2g4bkltY2FUU2FuU0pMRTl5bnRkSHBFZHotOEN3OEJ5NUx0WDcyckY5dzBqVTNsNkM4aFNSUDRCd9IBogFBVV95cUxNa0UtalM2ajE4a0xUdjc0Umc1bTV4dmw3VV9sazRSMVZyTmNwMjJESURla3FBOWVDMWYtN3JuZGNkdjN2dFVzcEVpTE1yeVc0TFd4YWVCbEhpRkxkcGo1dF9jeUtYRDB0bmg5MzZlN0RyRzZhdlAxdXNNNTFGNUJfYldWS19oWW1YRWpvRDVTTEE2MnBibFNFY2tXaTVTdXp1X1E?oc=5"
    },
    {
      "title": "下郷町湯野上で子グマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBfQ2ZKdmhZdHI1b0NfQjYtM2RIZnVwWERaeWxWbVc2WmNRa1dwNzEwWFlldjF5WUpTa1NIa2h2d0dweWF6bGRnRGx5Q2Y5VWhSSEJ0dy1PVzlzT0xGYURQU2djNkZ6Rmk0WFQ5dnJnY2JjZzVoWDhxSjVmSdIBgAFBVV95cUxPZGEtWlRyRmRlaDBHdy11X2czRjU3OVFoWXRmZF9UR0hEaGVXSHVzZXRHLWxxTEUwU3lJVENHSGx3OS1abzZuMmo4WXJ5TzZCSDJCMDJvQUgxVDd5WXFZQWZ0Qi1fdUZnT0tudkotcE9iQ2ZZbko3bkVsZlBBNS1Pcg?oc=5"
    },
    {
      "title": "クマの出没痕跡が見つかる",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNczMxMGdXdHM1UXJPUjJCOHhSVVFBd3RhcFFRZjJxajZSS2FBV3pEM0N3T1BBa3dNNXpLbXliVVBCNi1SbGtiWTZ4ZzNwNjdnMTVTM08xaVVPaEtNSkNhSzdxbkROZHVVZlQ3bEd3SW9rcENJcFBiYXlBZ3NzY00yWjRxOXVnWllrNlVPd2UzVWppWTNyaUZNOHF4RkbSAaIBQVVfeXFMTVI2OW5JRUNKc1RGNU5WV09oaC1HTnZpSDRtREQ5bXRxQjVsRjgycWtlUDZlelNsd0dsYVBkSnhZU2I2VlZUYTd0Q1Q2Q1UyNjFGQ3JWVkpCTXRWcXJ1ZV9ma2xKcHdaWnp2SjA3ZG5va2VhbThNd0JRY2pvOGxUVERTMVdjd3p4WmFVdzBnazQydzJueWtlcDNURURkNVJEbUpB?oc=5"
    },
    {
      "title": "村田町足立渋口下でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNM3BIQk83Nk8yazB3b05PTG5QVGlWdVh1cDVyZ0d6TFZTVWFwaUpLcDhXSVRDZ0lnSTFvT3Y3MGJSVGhjVXFxZEhPelhpbVRCdmZFZWxLUnRGb1NLbnJyRDMwYy0xaU53YW0zVXNFVEVsZjFlb3V5MVJ6dzZDaVd3bEt5b3RLWlhqZnREbWgtYjhQbDBKNUFNd19QZnVoSzJOMGpQUjNnRlFmeEVyM1oxUFZPdnhLc3A5cUliY25XQkxZd0ppUHdGUGtVVFB5aDBEbUtXaXItM0RHNXJvV3RkTlRHVGlEVmdlOWR1ZC1IWWVDd9IBogFBVV95cUxNTnBKaDNJQjNjMXUtVHhsckZ2cmYyZm02LVdiOE15UkktUnJ3V19JOFdLUmdGd3k5cEM2akJYQlkyZkFRSjRKdEFvSUpSM2xJTmV2VkFiTFlPSHlKY1QwSHBYU2tGMURmUm92dUdTRjg1UHJtLUpEeUpDZnI2VEdnZkxxRzRHbE5BaVN0VzJya2FWaGZzS2M2dXJKb3VMeFVLUkE?oc=5"
    },
    {
      "title": "岩波でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE92SE9JZ1djR1Y1cDJ3bWNfeTdMTWxZODhlWkMzS3JNejBpdEpiZEJkYllZaVhqbjgydU93dnEtdEF2X0stTENuNDYzblJjdGVubU1iRlV2aEQyUzhBa3BDdXFNcWVJekZLbzduVTgzWdIBdEFVX3lxTFA1UnB3c1Ixekg5NHA1cUtpLXVIQXdLcWdUZ0Zha0JObWoxN0o0TjUzRmNpaWtmdjNwQTJhR3FId3lIeS0tQU1EWTBVN0ZIMVVJQ2wwMzNIQXR0Z2VmMVFodVpFYnpfX2stekpPZUxKWmY3MU9I?oc=5"
    },
    {
      "title": "白山市平加町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRjktNGdzM2F5c2dSRW1wOGdLc0sxSFpJc21icU1vTDg1RXZGWGJwUGZURE1QVG5ES01Ua0duM3ktNkVScmF1eDhqLW5tWE9hRUhmVnI0LTBfODZlcGF4cVZIcmdmci1kMUQteUJiaWVTejZIdFF6ZkR4azRGOWdHUzg1SXQ1UzBBbktwS0ZseERWVzhjSWxoUlE4embSAaIBQVVfeXFMTkR6VmRrN1JGQi1HNGhMTDYtNEZNMHJIbG1SU3NRN1FVb2xFSUx1NW11aDdCRWpfR2E5cUpYX29YNWQ2NE9iamttc0lJUnVPejFST2pUbC1nSkxodzdfVURaOHIzUUoxVTFUdW1qVVhjUnZObVFlMF9DVVV5bVNDR3BSdW5GSmxQVW5JcEVvNksxUGVtZWJJYkpsaXJILUhQTXN3?oc=5"
    },
    {
      "title": "おおい町名田庄納田終でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPRWxWUFdaMmw0RUpwQjZWSkNhYS1fZFQ0SWJ5TzRMbEhWUHhSX0xiMjVVRHl0TmJ1YTJVUzV4RDFIdGZoWklnUlJsVGpULUZxNWhlaTJNaDczUWh5THdkR2VGWEY4RFhOclZKT2ZaNXJucHFnTzRYVDFxdUhxLU1ESU91Vmw5azZyLVNlV3ZzVWtoekNCU2tySXFiQXJsdUJHbFgzM2NBdC11aGUzVUJHSTl1MEMyVVlVOEg0aVRsVGJXQVp0OEZaV2Y1N2xwV1kyNkd5VUF4ZER0YmVsamVkN0hyOGtvRFFvSzk0M20taDFKZ9IBogFBVV95cUxOYWtQTjdhVkM5S1Ruc3cxZWxSM3cyV1M1UDRpaHg0MXl0a1J2c2xsanp0TGtjUDlsak41bTJRXzQ5ZExFSGRyWWNwVTBMTmZYYzBZcEFreDY0Zm5td0xGU3l6TjZpTXdyMXJzVnJyZVZYN0VHaXpQUGE4dlFDN292RzBsOFAwVWtiSktmREpPRDBuSUZJNmR1YktsemRXLWhKRFE?oc=5"
    },
    {
      "title": "中之条町四万でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNcGl4OUNReXNrblNxUlY4QUE5UnRLZldxaURpSi1VVVBtWmJNT3hlWHI1WWdIb2R2V0xBbC1WMWVMTWFreE9PNzR6UTBvS0pTU0lrUTZRdlgyODZCOENYT2JJd0JnYWNXMHZqQWZTQU9RSXRlNGNiRWxTUHlTckFQOW1BaFpjZFRyT1p4UzhfTG10VTY0UmkwRU5qc3Q2UWVUYVZOcWw2dU1KMDR0MnVENHpxMzJMeGoxUnRsXzB1OXEwT2VRN2pEMjZWYjhuVWF0ZHV1TFNOaW1JOHFIVVY0S3pxZXRhTFRKMUlDZm9pY2JPZ9IBogFBVV95cUxOTnVtdGhKWU5xSmxGbEd6OGlyLWxHcFVqdzNTREZoSFpnVGZPdmV2a0VTbDB2cEQ2dlljUU5OSENud1U3NTloZVBTcHpCRW16M01MUG42OHg4VThNaHBKeXBLMlJNeGxLRXV0aVU3SDVsYjNFTGpWLWZ0emRSRzFyWU5FQnUxMFRUaHQxWmpUSnlaWWh2VW9kUExSbnlhbkQ3MUE?oc=5"
    },
    {
      "title": "京丹後市峰山町長岡でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMFVqSGY4UUp5S2Y5cVRkeVlYZ2J1aDF1YmZfTDFnTjhrdUZNMFd1TFJjNnZFNDZyTjNTT0w1cEdoNTVzXzc5ako1Z0Z1QUdtdWxmelNTb0pzZkJ5aGY2eHJ2Y1dFUlNoWkZfMDQtVHQtZmhkcUdQYzFNSnVzM3hEdzJWWENPUUlJVVBjRV9KZXA2ZXR3cDFjb05ielTSAaIBQVVfeXFMTVJSUDloUEUxRHNUOXNEbUlEZEZxRGtvZHRhcUJLSlhoVGVBYjlLckhFVS1pMTU0Wi1aNWZ0RVVfY3NLX1FDd1lIblEzeE9GV2VELXRMRXdUdE1BazJBMUxyUDc5WktHejFrRnV5Sk5kWnpGQ0lUVlZGLS1WTHJkWGVjWDU1cjI4Y0s0TUpkekFHdURmemFYS3pxUDFrOFdxLUF3?oc=5"
    },
    {
      "title": "温泉津町福光でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQQlVQTTJXcWo2T1ZNZzg5MkY1SFRPYkdfOWtuU1B3Q1JhVm50SnpjZ3pCcFRVQ3BlWVp4WG9fdWl6MktxOHpUeVlhLXdqa010ZTR4M2M4dnlqWEc1TjVzM3FFTWwxQTNYNHFxOERETi11YTBKMzZjd2dub051dGdManhmampCaTYxSURLZWk0ZXBId0ZJenhVWFdDRE9jTUt6elFpTlJYV0g0ZVhCZWlfVzFsMDlsSkFkQ2lQc215aUd4MDlLS1BMQjNXRVdpUUtpcExNSkpSUXFpM0tyOEhLYU9tMEZvS2lTWi1HbjN1YnlBQdIBogFBVV95cUxOc3A0ek04eTAwQm1PeW5EX0k5TzVHakp1aU5jQ0hWTHpUZWhoNGtEU0I3ZzRaN1BCT080UVBaaFh6WDJ4QkxVbDloOVVPUUlaeEx3N3FwbGt5dDNWLUZZNFVrNGZTRmFYenM3ZG5nOHJiRXpOZlpiWjJhUWpwSzBwM21ianJBX215ZUpLNE1iQUUyelpabWtaazd3LXZBZ0NvOFE?oc=5"
    },
    {
      "title": "留萌市大和田3丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPN0ZVNy10bkpZNUtaWnp0b2pyTl9nc0RyNjBvZVNGSHZkZ1RrTmd4azJuTFVLRnRsOEQzWmlTc3VKSUN5Uk5iaGR1eVA3d0l4bGoyT3k3Q2Vyemt5bWQwc1VXX3pkSHJjMzNzZ0lDQWlGdkNldVVNSzVPcnRRM1BmVFJVZDVGTmp6Rk1PRVllX3ZuMUJpNFlacGd0U1_SAaIBQVVfeXFMTnJiOHZOQzE2bE4yZlllOUFjLWZ3OHZxSl9JMWtlOFJoTndsQlh6TWw4QnI2RTF0Y3A0SGdSSEI5OVRFM1kwNGt2XzJLY3hQdnFwRnE5WlA1Ty1ZN2pja3dzZG1CQTFGVV9EOHd5ZnBGNXJ6SG9XVF9TUjFTU0RFNHVyNHI1UUMxangxWFFCbi1BZEg0eFQ5UDZnbEtPOUVLRjFn?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":18},{"pref":"秋田県","count":14},{"pref":"福島県","count":12},{"pref":"新潟県","count":12},{"pref":"富山県","count":9},{"pref":"青森県","count":7},{"pref":"岩手県","count":6},{"pref":"埼玉県","count":5},{"pref":"島根県","count":5},{"pref":"栃木県","count":4},{"pref":"山梨県","count":4},{"pref":"京都府","count":3},{"pref":"群馬県","count":2},{"pref":"長野県","count":2},{"pref":"福井県","count":1},{"pref":"山形県","count":1},{"pref":"岩和県","count":1},{"pref":"宮城県","count":1},{"pref":"石川県","count":1}];

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
        <span>対象期間: 2026年7月29日</span>
        <span>·</span>
        <span>公開: 2026-07-30</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={108}
        periodLabel={"2026年7月29日"}
      />

      <p>2026年7月29日、KumaWatchが収集したデータによると、日本全国で108件のクマ出没情報が報告された。このうち報道機関から得られた情報は81件に上る。当日は人身被害に関する報告はなかったものの、市街地の建物への侵入や都市部での目撃が複数確認され、人とクマの遭遇リスクが極めて高い状況にあることが明らかになった。</p>
      <h2>主要事案の概要</h2>
      <h3>富山県立山町における緊急銃猟</h3>
      <p>この日の最も深刻な事案は、富山県立山町の中心部で発生した。建物内にクマが侵入し、住民の安全を確保するため緊急銃猟が実施された（※1）。市街地の建造物への侵入は、人とクマの直接的な衝突に繋がりかねない極めて危険な状況であり、迅速な対応が求められた事例である。</p>
      <h3>都市部への出没</h3>
      <p>集計上、都市部と判断されるエリアでの出没も3件確認された。北海道札幌市西区では住宅街でクマが目撃され、その存在は警察官によっても確認されている（※2）。また、秋田県秋田市千秋北の丸の県有地で体長1mのクマが目撃されたほか（※3）、岩手県盛岡市浅岸の住宅近くでも子グマが目撃されており（※4）、都市部およびその周辺へのクマの侵入が常態化しつつある傾向が窺える。</p>
      <h2>地域別の出没傾向</h2>
      <p>当日の出没は全国的に広範囲で見られたが、特に北海道と東北地方、そして新潟県で報告が集中した。上位5県の出没件数は以下の通りである。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">出没件数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">18</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">14</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">12</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">12</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">9</td></tr>
          </tbody>
        </table>
      </div>
      <h3>北海道・東北地方</h3>
      <p>北海道では全国最多の18件が報告された。札幌市の住宅街での目撃（※2）に加え、津別町では1頭が捕獲され（※5）、森町ではビート畑が食い荒らされる農業被害も発生している（※6）。都市部から農業地帯まで、多様な環境で人とクマの軋轢が生じている。</p>
      <p>東北地方では、秋田県（14件）、福島県（12件）、青森県（7件）、岩手県（6件）、宮城県（1件）、山形県（1件）と、広域で出没が確認された。秋田県では由利本荘市、大仙市（※7）、大館市（※8）など県内各地で報告があり、鹿角市では民家からわずか10mの地点でも目撃されている（※9）。福島県では須賀川市や会津若松市の建物近くで複数の目撃情報が寄せられた（※10, ※11）。青森県青森市では出没の痕跡が見つかっている（※22）。</p>
      <h3>関東・中部地方</h3>
      <p>関東甲信越地方でも出没は活発であった。新潟県では妙高市のインターチェンジ付近で集中的に5件の目撃情報が報告されており（※12）、同一の個体が複数回目撃された可能性も考えられる。埼玉県では秩父市や寄居町（※13）、栃木県では鹿沼市の住宅敷地内（※14）や日光市（※15）で目撃された。</p>
      <p>中部地方では、富山県で立山町の緊急銃猟事案のほか、小矢部市で複数の目撃情報があった（※16）。長野県安曇野市（※17）、山梨県都留市（※18）、石川県白山市（※25）、福井県おおい町（※26）でも出没が報告されている。</p>
      <h3>近畿・中国地方</h3>
      <p>西日本では、京都府（3件）と島根県（5件）で出没が確認された。京都府では福知山市（※19）、京丹後市（※28）、与謝野町といった府北部での報告が中心であった。島根県では大田市（※29）、雲南市（※20）、奥出雲町と県東部から中部にかけての山間地域で目撃されている。</p>
      <h2>総括：リスク評価</h2>
      <p>総括として、当日の出没状況から以下の3つの観点でリスクを評価する。</p>
      <ul>
        <li>季節要因：7月下旬は春に生まれた子グマが成長し、母グマと共に行動範囲を広げる時期にあたる。実際に、福島県下郷町や群馬県中之条町では子グマの目撃情報があり（※21, ※27）、子を守るために母グマが攻撃的になる可能性も考慮する必要がある。</li>
        <li>餌資源：北海道森町での農作物被害が報告されており、自然界の餌資源が不足し、クマが代替食料を求めて人里へ接近している可能性を示唆している。こうした食料不足が、農地や市街地への出没を誘引する一因と考えられる。</li>
        <li>人口圏への接近度：最も懸念されるのは、人とクマの生活圏の重複である。札幌市や秋田市といった都市部、各地の住宅敷地内、さらには富山県立山町での建物内への侵入という深刻な事案が同日に発生したことは、活動域の境界が曖昧になっている現状を強く示している。偶発的な遭遇から重大な人身事故につながるリスクは依然として高く、特に市街地周辺における住民への注意喚起と対策が急務である。</li>
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
          <dd>2026年7月29日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-30</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-30</dd>
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
