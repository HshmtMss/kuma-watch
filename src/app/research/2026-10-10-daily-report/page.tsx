// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月10日 / mode: daily-report / 生成日: 2026-10-11
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-10-daily-report";
const TITLE = "2026年10月10日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月10日、全国で計53件のクマ出没・痕跡情報が記録された。人的被害や市街地等での捕獲・銃猟キーワード一致事例は報告されていないものの、北海道や栃木県、兵庫県、宮城県等を中心に広範囲で目撃が相次ぎ、自治体による警戒が進められている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-11",
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
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
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
      "title": "奈良県明日香村でツキノワグマが初めて出没　県が殺処分　人的被害なしも注意呼びかけ",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE92cHVhaG1PT3BUMzJhVHhRbjcxemE5NU5ObWxCRWR0b3NkbVkxMm5tSmI4S25IREE1a3N6YzgydFNrTm0yU0Q2QThSYkxnNV9BaTk0VzhqU20tcUpZMEd3ekFVUmvSAWRBVV95cUxPdnB1YWhtT09wVDMyYVR4UW43MXphOTVOTm1sQkVkdG9zZG1ZMTJubUpiOEtuSERBNWtzemM4MnRTa05tMlNENkE4UmJMZzVfQWk5NFc4alNtLXFKWTBHd3pBVVJr?oc=5",
      "site": "Infoseek"
    },
    {
      "title": "気仙沼市役所の県道でクマ目撃　8日からクマの目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9fMTZrRzBxZEx1NzEzWGoyUXdvUHNOWlAtZlJaVGo2VlZkeFFhMWdRRGFVTDkwbjFDektXb0hQWDFiNDRod1hKX1c3dUx2NDhWUjRseDRoLVlBUi1xU3c0Vkk3d2cxS3RkdnFiVUxMN0ZJMVRaMGlUbEhwem4wQzjSAYQBQVVfeXFMUHZJYmpKMktvakU5WjJMY1otdk5PVlo1ZHdNOGp2Y1RvbE1DbWlKZ0ltOVloWF83emRmMHBLZlNUa1F6WnN6Mm5LZmVKNWlEVDVDOWF0Rm1vUlFITVRCNDg2dzdMV2lfYnNwOTh4RVJNaFRCamxUOGJDcnZBdTNqY2I2RWtz?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "【ヒグマ速報】喜茂別町のゴルフ場コース内に体長約1.5メートルのクマ2頭出没＿従業員が大声を出すと山林に立ち去る＿8月以降”同一個体”の出没相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBQMHhpbFlMeHdLMkRXTm80NThUb0pmaFhwY2hISkpJNjQ4b05CY2UxUzE2VWZZcEExM1J6T1pKUDA4Y29jc3AtcG9iRTFZTGNrV2NMZTBvcFpXRHg2bmloaEhCN2tHMUw2ZUlRdDRhSnFYajZZdmxIZ0dNV3JUVG8?oc=5",
      "site": "Yahoo"
    },
    {
      "title": "クマ出没（喜茂別町栄）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUjl3UWxvYVlXdXNpUmtscWQ5ejFidHlNZ21faG9sYmppZU1acU1GanZzQWpJcEMwYzJqZzJabXNVVHplUFh4em95Z2JTQ3BWTG8yRlVOY0VJWTJQS2RkU25LU3NiVHczUERIRVhrRVVFVjRVR0NQYy1icXhyYjdMVHdZeXFaZEd3RHc1LUNCVjhra3JMRklTbkpqek3SAaIBQVVfeXFMT1B2YVZNZFV5bTZLZWN6M2lPV3NsWkRKWHhvb3ExempJa1VfTUo4M1VPbWdmTE82MzdYc3RXN2tYN1p6ZXA2N1FMY3FoSkpXc0N5RXBoRTRJUEZ0Z3NZNk1mMWd3TmpHZTZUTWt1TVpKTXc3enFaTldyZl9Tc3dTdU81OGZ6U05KYUw5V2taR19uZ2thYjJrc281c043MVZxRkln?oc=5",
      "site": "news"
    },
    {
      "title": "ヒグマ出没情報 夕張市、沼田町",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1kaUFiemhmTTJsNFFlcUgyYkFsTU5FX21aUmRlNFZpTmJJY2pYaFdrMWR4X1ZOV25TenNZc3lMRkEyQUtQSGI1WHBaN0cweEE4cXlGNklfSlBUQQ?oc=5",
      "site": "北海道新聞デジタル"
    },
    {
      "title": "（北海道）根室市西和田でクマ出没　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPclhCUDFDb1ZJQXJXRzF4S1lhUDB1aUFUVVNFOURuNlVHamdaa044OG9vRHZIbURWRUJHVlVnNy1qRS1WaUtpQlZrMVdYY3pmOFFYMGc3UGE2UEJ0UkstLUNFVXQ3aGFpUmpIeHF6Y1lCSU5LYTJmaDJpVXVVbjRaMm5HN3pOTzdiUm5HOGN4dnR2U3dGXzhONElBRk_SAaIBQVVfeXFMTVEzWF9Gb1hyMzZvcDhXMEFmTVlqVUlHWmFiUkd3RmhWcFVmY2VrTUdVVl9TbWk0SVlvYmRTRnVsWGdRUWRPVklZQWRHMmhXcmZGeE5jTWdqSS1CaVBUcTZPcXNxdzBiTG5VcE9NYmJSWDBZQUVVbXlMTElyTnpUZnNMdlVSVTItaGMyVDhyOTlDNHhfZ1hIS3BXSHJzTFRiTlFn?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "クマ出没（気仙沼市本郷）",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOZjFzTXVNRjNEVG5JLWQ0VHVEbVNST0FlaGhkdm1DN2pKQVN6a1BJdW9GMHpEam9mazlmZlRWbHgtNkw1aXdJdGJldVliTnFIOVg0eXB1RXJqcUFtQXJIaDlWNFY2cjJBbVRZWEdzaDl0T2RTNzR1R2phNXNld003Wl9lRG95c01GY2h3UGM4WXYzdFQ2eXBsNmFRRGlJcm5JQXN4ZWs3YUxaY0nSAaIBQVVfeXFMTkpNOGRRYjEteE5SaHBBUmN2aHFqWEFTM1JPZ3RVMFBVRHlKRU96Ti1QNnlqdjRTMG1UUGRPcFp2MkI2SGdSeWlfNklfVGdoOEY0c0RfVEJjVTYzdEtyWEViZnFhR0w0NmpxNmdzVGhCTmt1WFdKQk5TV0lkbFFIWXVyUVJXWmVTcTUybzNxWklXaUtQQ2F5cUM3aHhVb2RsS3BB?oc=5",
      "site": "news"
    },
    {
      "title": "（宮城）富谷市一ノ関臑合山でクマ出没　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUzBPNld2N29IOFVkaVEzNHZJTXhKY0VVbXgwOFp3Mmo0MEJvZzhoMnlzMkVpUHRJMG5aNWd6TXRMcFNFSXVnSTJhQU9HOHRFdVFIT1pfdXloUmdEMkllS2xTeWQtWVpERHJCamFRcFFzdTJ5dXlZZWM2a210WWhkYzZMWnVySlh0WDJUQUw3NGFkcVhfQlpOenUzcnjSAaIBQVVfeXFMTVVlU2YxTURvV3NOYVkxMjJWdnFjOHRQUDdOVWRRUERVNGNjLWYwSmFON0FwUm9taTQ2OGZNWkFZVjZzN2F0SXhfTjhIRzF0a01na1BycV9zVzZNOGNQX0NfWkpON3BoRXNCdUZsMkEtUlZEc2FkaXJvRnNuakVzTWhqRTFFejFtYlZ3X19nUW45d3M4VnBhU1ItUVUtZkZ3ZXpn?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（宮城）富谷市上桜木２丁目でクマ出没　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOREpGR1VfLXRCX1k2d3hZUzRRb0VLVkFFOGhBQnlmRzYwZTRGeTJoLWZQam9nZElEZG1FOE5mWmlTWDFIbGZvRjFWUmpRXzRYVFoyLUo3Z0R3Q1FmaTRtTEhma2ZBcVFtUlh1S0hzUTdaMm9yeDZLSVB0d0JqVU1GaXFsb2k0SFVacGhOUTNBLXBzc2dXdE80RzAyRFDSAaIBQVVfeXFMTmljTHRGeURvX1hCenItWFZjc09vQ2I4NVAwZ0hjWGVTYnNOaHN0N29SYk11TWJJb3JVc1FTRVFoU2dxN0F6SjVxWnBtTGR4TWw5OVA3ZFlGR2NtSjdZN01UQ0YxVFFQZ3Z5NWFpVGRUNVp1UnhxazFMano3TWVSM19HcUMtV0ZVZlRBSVhQNFVobVNuX0NRMlAzVWh2bFdiaTJ3?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "クマ出没（色麻町四竃大原）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeHFSZ1FqRmItNS1aMk1Hdng5Z0JvNXR0UU9oZnJnWnpyS216d2NYWDU3VkRJcjgtSlNUSDJSR19EWFFWTGhHWVpsa2JiTGhOdC1OTUZETFN5OVU4YUdGalFBVDBFeVBqQWxuZlFaZzIzWERYampFdGdweklEek1vUi1EZUwwMnBQbDRnQnUydVNKLU9FSDdIb1JYeHnSAaIBQVVfeXFMTU5jX3NLYy1ETDFTcDBmVjQwUmdTUnNTNGVqZ0E0NFUzd2pkdzVMcU1qN1d0M3FnZFNvaVZ4bG11MmdMdDA2RUtoa1lKWnhOU2JDbUY2djZnV3VJYkhpY0I4U3Ezc1JCcklrY0JkeUhsc25JWTEtMkltTmVfdExEdmdPUC0ySlB3TS0wZ1F5cnBlYWc3ZFk0Wk9VazZrNU9FR0dR?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（会津若松市一箕町金堀石山）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdENjVVlZUmpxdlZES2ljSFVWa1pIWUg4UU1QUTlCSThiNkYyOWE4VzlWbVY5VGdwOE15UVZVRmxxWGV0M3FUQjl4cDBMeFhxT3dJMXg0YkYtbVBMVkxBVjRZajlJNVlUcDI4VDFEdzNMMUlJcEVCR2duU2taVkNSRFBlbm51empfYUZpUlVCeUtrU0NKbTRjTlA4VlfSAaIBQVVfeXFMTjlIR1J6Vmw3WWFrUmwwRjBUbjk4bHdHTHFWQUNkM2Z4U1BUb19kMXZmLXVvQlVzXzhQVUlldk92N0p2VmlMMjBITEJWeHVMWXpJX21RMnIweFk3bXVRV2xZUFZJZGtnSTlmUGFqQ1RwMFhtQ2ppMDdxWXFHNVljV1ZLQUNRS2x3TUFpSWxrY3NQMDVOR1BKM3ZHX3dBMG1BZmlR?oc=5",
      "site": "news"
    },
    {
      "title": "クマ1頭目撃（会津若松市）",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE00ZVU0SlBHM1kyYmk3YXp2Zy1jckwxWUxsM1FSdUZFR1FvV1V4X2JaOG4wMDVfNTdJamtESlZEc21JOFFIU3BUbjFxbUVObnZzczhBSUJLWEpVYVdmd2pBVWI2RkZIRnBDalhNYXg0UWRLbVlUQ1pkZm9haDY1OVk?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（宮古市田老）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOS040ZkJVSVBLcnFqeVI1eloxZFVEcUZIWVNoVVNMOG1tNkNPdnhYTlNmXzRYVjhzOEVkaE5OMHZmWGZ1X3NaWkpqSU9SUEo2ZzlNbEF4Y2YyZlQ2VG0wdFd3VllyaWhIRXNTcmhkX1poOUZ6eV9NbW9JUFVYeTBuWlV5SkdENXk0RUJSbjU1SmJxeVlzRE5SOUo2aFrSAaIBQVVfeXFMUGdOOWFtbnBLQlYtRTJmRXZZWmZNZHFqX1Fua3hyNHBWV1FNWEROV2hZMndnWndMX0FESlA2S1EyX0FZeTJ3Ni10RzE0NHVWcWVHNzVvY3NXcTV2Rk1ZbWJJeTFqTjU3ODdMZ3JIM0pfenRSYnp4VFR0UWk3clhWYWxaZndBdmVrQW96TzJ2N2pUYVVya0QtMWlJSlg5SklsMTZn?oc=5",
      "site": "news"
    },
    {
      "title": "佐野の水田でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBsSGU5ZzA1dlk4WGI2ampsNjN3cUtmY2pDakhaOUxXUks5YjFTZUxEdXBONkZSdkVTcGRmMHhwMEtKS0M5cTIwemZrMmVzN1k0TUV5UmZnelY3eEk?oc=5",
      "site": "下野新聞社"
    },
    {
      "title": "（栃木）佐野市寺久保町でクマ出没　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPczRibm1JTjg0VVFwTU1VamU5dlBkdHhjb2Z3X2drd2dpRU9KcVMwRG5HSnhBNWs3QW5OdlBVUVYweGJzYzVfY2YxaHEtN3pjeXVrdFQxME1uUHZ3Q0EzZGRnZTB4YUFFOEhiR2ZYYm12WnZLTEx3RlZpVmlYNHU4X0NjbXFya1lGOWdCZndSRlBMR0dzcnZaa3ZKamLSAaIBQVVfeXFMTzlybHFjRTdwZFB6NTNYSmlXV2YtVjlTVG5NVWZHSFFHcWpSam1oZ08tSEpuWktGeHZJYlJncGlqMFN1REJ6UnJ4TnF2UHJJNFBhWXBOYWVFVmRuUHc4ekZST2UzcGVFd2hOSUJydjB5TS1pV2xrSGl6MWtOTHJHdDFkUkJyaDFRLTg3VnA3SEJmMHV5RFpTa2R0VWx2Mjh3eFZB?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "クマ出没（足利市大岩町）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQczVOQWtwSUpSNVJYWVQzQnFPRXBRWEp0dzROeFhmdVY1ZjNhVWlwOEY1SzY1NmZWR3lzY2pRc0NUcVIyYjFfZS1TWHQ1MzJhZHhPOEFnaXIzV1pQTGpJRUVRZm0weVhVazIzcHdDaWFQVUlXeWVfY2NSQUd0cVJnVksxWlhBUzNFeGIxMVRNZi1iYXNvd0pOamNDemhkVWIyM2VhZFlSYVRMZk1Ca0hWamYwRjBpNWI1STZMSm1ZQkswWUQ5ZUx2cG5oLUdxWTVOYU9Ub1BrZHhfRGROM0taRnlFWnNPUG9KZWtBSVMzQlR2UdIBogFBVV95cUxNRU14ZFF2LWtUNUxuSXhVV05DeEpaMVdxd2hvUjBCOWFZcHZob2s0c1YzejBqNmp6bUxMMllJakc1aUtaQjFYa3FVS1g5VGNiR0xXRzVrRy13OXh5UTgycDdBazJwOExBMlg0VUpXRDVNRE13ZEhELWxsdC1ZQ192YTkzM1FfUXJIalJ0dlByQlQ1ZVltZm9IcndiS1RZaHdyYXc?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（鹿沼市下永野）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQLTY0STZ3ZUhpRE1uOXdBSjFTSTM4T0hDZVFwemtQS1p3UEYxT1l6clk1WDdoRXByd1Ixei1MQmc1VEtxTzRyTVpjUEhsQldjNFVHQlhHajRXcWd3SHlHdFdlZk1zX242TFFCSFRyVzJMS3phcERiSzRiWEFzelBsc2J5S0p2bTllTmR0aDZSdU9TYmZVeW05UjJiWnZLcnJVYWFOSVlINjNudmpVazRTaUdOQTR4cnlTM0laQzA2eGxNOFk1RzBTM0tQVU5RNm84WndfaE1LVG50M2Q2dXVoTWtYTnQzeWxiOFcyZ011OVozZ9IBogFBVV95cUxQNlZwUVdZd1VRdWkzMWlxcU04a21QQVdDSTBPanlLRVp1R3A5RThSSDBwQmRrc28yQy1haURreVBLeThIRmhCbmp1VjhVZGhFbnFvbEstMzNCaDBiQWgtWFAwOElmUk9oTC10UF9uM3RucHlpVkhTY3hMMnJqQXhYOWpOVHhIUFRlZmViV09FbjBCUHVRZEFHcXRidXM1WWx6X1E?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（みどり市東町小夜戸）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdHhTd21EVE9vM1NKMElEUmZ2aWFGSlhYSjh5djBqb3JUZ19oQkdNVm5KRnJnX1E5ZW9XWFNUUndoVEFTcVNNYVVHX0V3ZXRMeTQ0RzBLNVdWaHc0dXVmLTNkaGttY1Q0NlF5VkU4cDYtZzdMR2ZaTkRFcmRCY2NQakY0X1NuQ1lGbm1iLTVlNkVZYkthUnhfdEYwY0_SAaIBQVVfeXFMT0lwdUxuZFMtY2drNTVPaHJ0dFlvVzgyWFdGUU5VczJycFdwTEgxQ1dKaDdPc3E1enZVd1QzZEZVakIxWDVGSDN6eFdJNHo5Snh6cktiZkplZnkyRlNJOXg3bFJqV0tOVThmQ2Vaa25Vd3I2T0x5Qmk1QmNzejB3c3lHNTd4M0ZxZHIzV0gyNTh6TnJ0X2dZZW9ET1EtNmdQUWV3?oc=5",
      "site": "news"
    },
    {
      "title": "（東京）日の出町大久野でクマ出没　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOczJ4YUMtYWFhaUpIX0ZzY0E0eUVBZ3hXb1kwa2w1TFI3TmM3cTlVcGNEMkQtOVRxcXJkR1FaT09oMlMyTnRwVktaOF95dWlFNExPZ2dfWHFxWlpMbHRYdHRhX2VtUzY5RHdDeVcxdjBvd2FVcXJMZHdCeEZPZlBzVUN2MHlISVdnR01jR1VZQVBqVzJmOEtQRXgyQ3HSAaIBQVVfeXFMT3V3SFhMNmlFOWVSVW9QMng4OWg3aEc5dkVVN3U4dmx4VVQzRjVNVGkwd3N4ek1KRXFIeHRIZEdoOXAtejFDYmw1czJZVFhMY0x2ZndzT1BTaHZXeHRPcFZ2d1BjTUgyOWNKM0NsNTYwSF9RWmNDRzdNMGZhRjhXRzNvMENtem5ROHZjeGpBTFZYMDNDMERqOHRoZXAwU3JXcUVB?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（神奈川）相模原市緑区佐野川でクマ出没痕跡　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMjBYamhXSzJwc3l3bW9NXzN0UUE0TWNfR25EbDZRRl9sYncwMlJvbjJBcVpTZEtONWpjd3AtbmdCdC1RZVJIUDc1Tl9UWkk5OEsyaTdnSG9VSDcyLXFFMnR3YVlqLUJPT2VyN2tCbG9jNEFHdmN0UHR6UE9YbTZLRC1ZTTItbjVJMzVDZTJmNnlfWUtCZHc5OVFCUVbSAaIBQVVfeXFMUE9wYmsxNkdSV2ZNRHdtcHBfbThDaGJ0Zmd5MzJudG1NRkxuNjRlWkZJYzlMMmxKUGVFMkR2Yzd5bGltUlFVZnN2TzMwTWtFS0lCZnN1WnVlRnJmSkJHaWVPczZQaGU4YjZnZ3hDV2FRNllQT2tZWTV5VzA2WWVqRjlpa1lxUmM1U0VfMXZRVWhnRGlBaU1YUjhXQkNnNVdsdERn?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "クマ出没（小浜市鯉川）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOYXduaE5YOWhrcnNsM2ZTSEFMc3hwTDFMZjgyaVU4bExHWE53dHY2a28yY2FpNnkzeFVpUWlVaFRDYkNFSGUyNm5rbl95WDMwTG4xWHpiQ2kzLUROOExkNGVPT1oxend5WVRtcWVUMmhoN0lVZGQ2emtfT1JjUDlEZ21ISXFzNm4tV3RtYjJpU0dwamRTdGpfbURpZHXSAaIBQVVfeXFMT19GbjZwRlVmaTRCUHR3TkFpcVh5SFRHVW5FXzVfWGd4amZwYWkybDRlUkN5dV92U3BjQW44T0VNRU93XzFqRlNoQ1N5RnY5Vjg3R1pjd25MdGpsOUJYa183ME9YVHY3VUdNbUh0OXpHSWVIalpGOGFqSmlLa2czTE5sUFpJZXhKems4eDhBNTNqdVRDM214SnpNeHBpR3JCOGJ3?oc=5",
      "site": "news"
    },
    {
      "title": "（福井）おおい町鹿野でクマ出没　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOUlBxTWJmSUc1VlZWV3VnLTJtNzdCR1dZY1J6SVNURVkteDlJSnZpMHk5WkQyZXkyVkR5T3JhblN6eTZySzlXYUR5UjNIcG1KZ1hGVVdkbDR4bU9nbEJYUTdWUjFfT3VkTDZHNGhvdjZ6RkVMSFdmQ3R2UWgwU0V4enZWaFJnX1h3ZnNZcXpfR0t5eXRUVmEwTk1LLVZyVU12Sm5DbVhpd280NWhyNlpFMUhlb29HbHVqLVFmUXU1Tkg1eE5mVVFlMlVHSENMUDlBeUtWRlhlU0ZzZHFTSGZEYjNnRUtGVk9Xd0taRFJBbEdHQdIBogFBVV95cUxPWnMtQ2NiVFd3czVXMGtPeDdlSTVDbnJDZFBjSmd0cUFGX1VuT0l0OU85WWhxWjBIcmNnUnB2VGViUmtuWGJzLWxPQUQ3Q2hYQ3pJOThjOVJWeGtxOTh1LTZWclRzdHZwaVg5azZ1ckE1S2U0WHY1Y0VLRWJMQmN6ZERnWG5MQmdJdENXcklHSnVOV24yVHIxLU5zOW5VcVVIV1E?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "山ノ内町の路上で子熊1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBHTnVTVVU3YVl6T1IzbXBjRE9yV1RuSm5jTVlhWXM0bzZJY1FnSGNzTm1MZUNNQzFIeE5TdG90NTVidWZ0bnNpOUFIdzVuaFVzWld0QXlzcUtkanE1N3BweUUyOUZrVzVSeHZOWjBlelU?oc=5",
      "site": "信濃毎日新聞デジタル"
    },
    {
      "title": "（長野）辰野町小野でクマ出没　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQU1B6MWN2RXhIVjNJUnhCbjYzcGdibXhOUUtzUmFhVUhZZ0stTTZSbVdiNnBGQmU5QXFOM2Z4d1JFN1IxU1RyVldVR3dRRkVPbC1YYkxKT19zcFhpSTJqd2Q3R0RHb0hDVk8wMzl4eU9jNm51eEs5dkdmQ2c5MTQ2Q3ptbmVfYWdjTWRkVlRhQkRPS1hrZF8zdzVTV0vSAaIBQVVfeXFMTnpDVVQwQUh2THIxRHozQ3JSVVhQajRmTktDODRwUVpNT2hISjZVeDgyWUk3T2lfOW1TYmNaVkZ2eHBkcXVtQWJmVTB3QVFDSnc0SC1hUGIzeTY4eXJxMjFPYWR3OU1OTEJaekRuRFp0WmZKaHQ0V0VSeWs5WXlSZi1FdXRJUDhaa1oyTXRNcUx1SEZMOFdXUUVsVW5JMjhMVHJR?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "クマ出没（多可町加美区奥荒田）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSzFWb1A1Q0p6YnZLTXJMd2piRWxhNzRNazR2eU10N0pxQzFFSFFYTVRkMV9SRnBhbXFLa2dPY1dpNUpfOFNScUJTTmVJYmdFdmJaUHJkblY0LW9xeHJtcFFCVDNWYnAzdWZGSjhZNHI4V0tCX21wSnZ1ZkxxRFZyZzlTbGxHcnlOcEsyQW02M3M0ZjVYZDNscnk1YnLSAaIBQVVfeXFMUHRTaWE4SXozTm1zakFUMi16UllZRnRfWTVSOG9GQkdxRERHS0dyTTRfWGIwd2NhTWR2X3AxWURNWl9DbklYZXBUUUtYTVlCd0VBSkN2aTY3UHdRWTdiRGZzclRnVFRhc2x2WGc2d3ZnVHBwck9Xa3VGckNTVWtKRWo2MFZNMW1UeXVWT2dMNXRtXzJsNWhQNUhYa3Q3QjJ2RXlB?oc=5",
      "site": "news"
    },
    {
      "title": "（兵庫）多可町中区牧野でクマ出没　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQNFV3ZG5TU093QXJkLVYzZUU3MTFWZVJ3MUpydUJzQWc3OFVCalI2al9rNmI0d3JFLUZZZFc5TWpxdENWSk9HY2RvT0ZCeVpBcnNFZVhRd1g1TkYzdjI0dWVmLW5NRHhSN2l4bm1EaTVORXZncVRBcngyZ3RURDU1b3UtNVljUTRNMEhLM2RaaW1pOXlfQnJoQ3pvTTREYUxUa1HSAaIBQVVfeXFMUDRVd2RuU1NPd0FyZC1WM2VFNzExVmVSdzFKcnVCc0FnNzhVQmpSNmpfazZiNHdyRS1GWWRXOU1qcXRDVkpPR2Nkb09GQnlaQXJzRWVYUXdYNU5GM3YyNHVlZi1uTUR4UjdpeG5tRGk1TkV2Z3FUQXJ4Mmd0VEQ1NW91LTVZY1E0TTBISzNkWmltaTl5X0JyaEN6b000RGFMVGtR?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（兵庫）豊岡市但東町奥矢根でクマ出没　１０月１０日",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNcW5KZ1RIX2RpWWVDODdNVXpwQmppdnRTNnFtd0lRTjRDaVlyR3FsTE9oam5PU0hCS19JT1I3SC16OVI1cHVkX2VDdl9rRnJCQW1YTXkwcWJVSkp6bV9DTHc3cmtZaFFzbWlKQWNUWEtBdHN6MTB1LWNtOU95SDh1alEyOWZjY3BmQXM2WER5d2RQSzdsTGVJcElwYjNTNXozRkHSAaIBQVVfeXFMTXFuSmdUSF9kaVllQzg3TVV6cEJqaXZ0UzZxbXdJUU40Q2lZckdxbExPaGpuT1NIQktfSU9SN0gtejlSNXB1ZF9lQ3Zfa0ZyQkFtWE15MHFiVUpKem1fQ0x3N3JrWWhRc21pSkFjVFhLQXRzejEwdS1jbTlPeUg4dWpRMjlmY2NwZkFzNlhEeXdkUEs3bExlSXBJcGIzUzV6M0ZB?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "クマ出没痕跡（豊岡市九日市下町）",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOYy13OC1nRlJNeWVOTFluSlZWOWNLRjdpVkx5TWRyTmdlSDk1OTUzVlBsTlFTX1ctbEV6S3Qta21DWndkQ20zaXBudkVGTzUxZElKQUNaZUVkU3BRQllvT1FxWGp4djFfTmFOVVYxY3ZmbUhvZEVXVnlNMEt6MDZBaWlYWXNnaG8xQmpUenlJMkc1ZjZXVXByc2FPbGYzb18temfSAaIBQVVfeXFMTmMtdzgtZ0ZSTXllTkxZbkpWVjljS0Y3aVZMeU1kck5nZUg5NTk1M1ZQbE5RU19XLWxFekt0LWttQ1p3ZENtM2lwbnZFRk81MWRJSkFDWmVFZFNwUUJZb09RcVhqeHYxX05hTlVWMWN2Zm1Ib2RFV1Z5TTBLejA2QWlpWFlzZ2hvMUJqVHp5STJHNWY2V1VwcnNhT2xmM29fLXpn?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没（宍粟市一宮町安積）",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPR1R5WFUtYkFiUFBLWjJUVHZud01tRkEycUloLWw3VmVlZ2hCUzYzd0czT040bGtMOXpUWkIyTjhGdVdodzhjdVBPaVVpaUVaYVcxQW15Q1k2VmM0U1NCZXRvbTVldk5iUnNTeXdvVHZkUmcyVEUxYnRRNUtEczZmYVFhTUxWT0ZuMzlyOGk1RnJTUmVmU25IUDI4NlUyRUV2VjRyRTlWZlM5T3RrMUtidUwzTUVBZ195WC1rZTJQaWRVRDlXLTltV0ZZMUktVlhYTVhtZThjYmszU18xMGFFbDBxTUgzVWg0M2lCSnZ3TmVuZ9IBogFBVV95cUxOQkdJdFppc19SVTEwRUZwdkVvRVZQck5HelI0LW9NZHU2T285dGxXUG5tLXV2aWFJbzRvNVdscUZxbWptWFNNd0lLTHZFVWNSUnFFZGJOcTRNZUx2Vk1Rejc5N2x5OC10eGNoV1p6UHc0cWNUY1NRbWQzUVp5R3U2aTVUS2s3SnIzbVBOSEhXYWtUSENPYUNPWnhwZW16TndTRnc?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没痕跡（京丹後市峰山町久次）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcGNLRVNwYlV3bUR6amNjcnNvQnhfQVF6ZjdiWTVBRmZGS0xjbFYyTmt5TWhLTEZXeUtDRkNWTk4wLUc0bmh1UTlTbTcwNE9UbllwazYxSEFsTWxURW9ENlF1cU9NSnBWV2R0Qm5fdzY5UkM1RmtHUVdzTkdraVdLYnN5ZHpTWG5HWWhkZnVuU0toNGs1blNoUWk5bXfSAaIBQVVfeXFMTVByQmlPZmlQbHpGc3JzbUhWQXJuMEZvRDVPM1oxMms5OGZwUlpmdFJjS1pseDl2c2w5ZUdkN09MV0ZyYkNSRmxPbWs0NWVMZGctSjUtZWRfanE1YS0yOEVQS0dvSTF6TDQzNll5cDFFdFFQZWlDWWs3VlhXdkhZUThaNzI1YndjcVhsVUdvLXdGWXdCU2ZreTVuY2dwNGxxaEdn?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":12},{"pref":"栃木県","count":9},{"pref":"兵庫県","count":6},{"pref":"宮城県","count":5},{"pref":"福井県","count":4},{"pref":"山口県","count":4},{"pref":"京都府","count":2},{"pref":"福島県","count":2},{"pref":"長野県","count":2},{"pref":"静岡県","count":1},{"pref":"群馬県","count":1},{"pref":"岩手県","count":1},{"pref":"和歌山県","count":1},{"pref":"東京都","count":1},{"pref":"神奈川県","count":1},{"pref":"奈良県","count":1}];

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
        <span>対象期間: 2026年10月10日</span>
        <span>·</span>
        <span>公開: 2026-10-11</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={53}
        periodLabel={"2026年10月10日"}
      />

      <h2>概要および主要事案の概況</h2>
      <p>2026年10月10日における全国のクマ出没・痕跡確認件数は計53件であった。抽出されたデータにおいて人身被害キーワードおよび都市部キーワードに該当する案件は0件であり、人的直接被害の発生は確認されていない。ただし、奈良県明日香村では同村において初とされるツキノワグマの出没が確認され、人的被害はなかったものの県による殺処分対応が執られた旨が報じられている（※1）。</p>
      <p>また、宮城県気仙沼市では市役所前の県道においてクマが目撃されるなど、公共施設や主要道路周辺への接近事例が報告されている（※2）。全53件のソース内訳は報道由来（news）が41件、北海道公式データが4件、栃木県マイマップ（tochigi-2026-mymap）が3件、栃木県佐野市データが2件、福井県データが2件、静岡県富士宮市データが1件となっている。</p>
      <h2>都道府県別出没状況の集計</h2>
      <p>当日に記録された出没件数の都道府県別分布は下表の通りである。北海道が12件と最も多く、次いで栃木県（9件）、兵庫県（6件）、宮城県（5件）と続いている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な確認市町村</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">12件</td><td className="px-3 py-2 text-xs">喜茂別町、夕張市、沼田町、根室市 など</td><td className="px-3 py-2 text-xs">ゴルフ場内での複数頭目撃等</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">足利市、鹿沼市、佐野市 など</td><td className="px-3 py-2 text-xs">水田・平地近接部での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">多可町、豊岡市、宍粟市 など</td><td className="px-3 py-2 text-xs">山間部集落および痕跡確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">気仙沼市、富谷市、色麻町 など</td><td className="px-3 py-2 text-xs">市役所前県道での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">小浜市、おおい町 など</td><td className="px-3 py-2 text-xs">幼獣目撃事例の報告</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">岩国市、周南市、山口市 など</td><td className="px-3 py-2 text-xs">3頭同時目撃、痕跡確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">京丹後市、南丹市</td><td className="px-3 py-2 text-xs">出没および痕跡確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">会津若松市</td><td className="px-3 py-2 text-xs">目撃事案</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">辰野町、山ノ内町</td><td className="px-3 py-2 text-xs">路上での子熊目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">静岡県</td><td className="px-3 py-2 text-xs">1件</td><td className="px-3 py-2 text-xs">富士宮市</td><td className="px-3 py-2 text-xs">橋付近での目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別出没動向の詳細分析</h2>
      <h3>北海道</h3>
      <p>北海道内では計12件のヒグマ出没が確認された。喜茂別町ではゴルフ場のコース内において体長約1.5メートルのクマ2頭が出没し、従業員による威嚇（大声）の後に山林へ立ち去った事例が報告されている（※3）。同町では8月以降に同一とみられる個体の出没が相次いでいるほか、栄地区でも目撃情報がある（※4）。このほか夕張市や沼田町（※5）、根室市西和田（※6）など、道内各地で広範に出没が記録されている。</p>
      <h3>東北地方</h3>
      <p>東北地方では宮城県（5件）、福島県（2件）、岩手県（1件）の出没が確認された。宮城県気仙沼市では市役所前の県道で目撃された事案（※2）に加え、同市本郷でも出没が確認されている（※7）。富谷市では一ノ関臑合山（※8）および上桜木2丁目（※9）、色麻町四竃大原（※10）でも目撃された。福島県では会津若松市一箕町金堀石山（※11）および市内各所で個体目撃が記録された（※12）。岩手県宮古市田老でも出没が報告されている（※13）。</p>
      <h3>関東地方</h3>
      <p>関東地方では栃木県で9件、群馬県、東京都、神奈川県で各1件が記録された。栃木県佐野市では水田での目撃（※14）や寺久保町での出没（※15）が報告され、足利市大岩町（※16）や鹿沼市下永野（※17）でも目撃が続いている。群馬県みどり市東町小夜戸（※18）、東京都日の出町大久野（※19）、神奈川県相模原市緑区佐野川（痕跡）（※20）など、山間地から丘陵地にかけての地域で出没・痕跡が確認された。</p>
      <h3>中部地方</h3>
      <p>中部地方では福井県で4件、長野県で2件、静岡県で1件が記録された。福井県では小浜市鯉川（※21）およびおおい町鹿野（※22）において、自治体データから午前から昼過ぎにかけて幼獣の目撃が確認されている。長野県山ノ内町では路上において子熊1頭が目撃され（※23）、辰野町小野でも出没が報告された（※24）。静岡県富士宮市では内房の大沢橋付近で目撃されている。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では兵庫県が6件、京都府が2件、奈良県、和歌山県が各1件となった。兵庫県多可町加美区奥荒田（※25）および中区牧野（※26）、豊岡市但東町奥矢根（※27）や九日市下町（痕跡）（※28）、宍粟市一宮町安積（※29）で出没が記録された。京都府では京丹後市峰山町久次で痕跡（※30）、南丹市美山町樫原で出没を確認（※31）。和歌山県田辺市龍神村小家でも出没があった（※32）。奈良県明日香村では初となるツキノワグマ出没に対し県による殺処分が実施された（※1）。</p>
      <p>中国地方では山口県で4件が記録された。山口市仁保上郷ではクマ3頭の目撃が報告されたほか（※33）、岩国市美和町北中山大垰（※34）および周南市下上（※35）で痕跡が確認されている。四国地方および九州地方での出没報告は0件であった。</p>
      <h2>リスク評価</h2>
      <p>10月10日時点のデータから導かれる野生動物管理上のリスク評価は以下の通りである。</p>
      <ul>
        <li>季節要因と行動圏拡大: 10月中旬を迎え、秋季の活動期に伴い広域での出没が継続している。ゴルフ場（北海道喜茂別町）や水田（栃木県佐野市）など、山林に隣接する開放地や農地への進入が散見される。</li>
        <li>幼獣および複数頭利用: 北海道喜茂別町（2頭）、山口県山口市（3頭）といった複数頭での行動や、福井県（小浜市・おおい町）や長野県山ノ内町における幼獣・子熊の単独目撃が記録されており、母子グマや分散個体の動向に留意を要する。</li>
        <li>人口圏・生活道路への接近度: 宮城県気仙沼市において市役所前県道での目撃が報じられているほか、住宅・集落に近い里地里山エリアでの目撃・痕跡確認が継続しており、日常的な通行路や生活圏における突発的な遭遇リスクが残存している。</li>
        <li>自治体・地域管理上の対応: 奈良県明日香村のように過去に確認例がない地域での出没および殺処分対応が生じていることから、既知の生息域境界周辺においてもモニタリング体制の継続が重要である。</li>
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
          <dd>2026年10月10日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-11</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-11</dd>
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
