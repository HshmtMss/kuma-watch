// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月12日 / mode: daily-report / 生成日: 2026-10-13
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-12-daily-report";
const TITLE = "2026年10月12日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月12日の国内におけるクマ関連事案は総件数78件が記録された。愛知県豊田市で重篤な人身被害が発生したほか、広島県および兵庫県において緊急銃猟が実施されるなど、人里や交通インフラへの接近に伴う重大事案が西日本から東日本・北海道にかけて広範囲に確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-13",
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
  datePublished: "2026-10-13",
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
      "title": "2026年10月12日 愛知県豊田市 住宅の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9tV2FjY195aU5RNGRMb2lNYWJPUElDdXNGX28tTW12UFVTNTdUQWtQMGhFZHJQb19PM0E4RVgxaVdPT3pqTkM3Sm1TMC1VTnIybTgxRU45U1dYVkg5RzI3RmVWVjE4eVZxWjFFMTFpc2VqOTBZczFyejdZenJzdzg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 愛知県豊田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFBwTERodmpleGs0bG5IOUllUjZiaWxzMVpUQ2hZRXA1ZjRrQjVaWVQ1QUNfMHB6Q3RTSE1RRENOdWZlek00NFZsMGNSNEg0VVBvdFlpc04yMzlDcGlhZ2pBdjRwQTY2RWFuaDJHeWFqZEdtMkpwUWFweGQ1Smo?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 広島県広島市 安佐北区可部の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOeF9LYlczQ0tzZGh1bWJjNnV5VmprenVMUjJKOV9RTnJKNzN5elZrdW9ib0Q5UFlLc0V5Y3ZUb2lLWEVoMjdSekJrQlgxR1JSd1Zaa014ZDNtMndKenBxZHFJc2swdzdJNmY3SkRnaFN5SFFZc3FkMWxobDBaVU9LeDUwUkdkNG5UeDc4WVRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 兵庫県丹波市 氷上町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFB2TFpLSXdZVXlSNDFkNmh1WjVxLS1FcG1RRTZEbGxtZG8xM01xVnRCLXM2ZUFVOHcxYS16TVNFVXJyN1Q4d05wcnljOVg4REprU3JTN2N4c2RyZE15c0UyVnVwOEpzeW16UlJpQUtR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 兵庫県豊岡市 但東町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFB2TFpLSXdZVXlSNDFkNmh1WjVxLS1FcG1RRTZEbGxtZG8xM01xVnRCLXM2ZUFVOHcxYS16TVNFVXJyN1Q4d05wcnljOVg4REprU3JTN2N4c2RyZE15c0UyVnVwOEpzeW16UlJpQUtR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 兵庫県宍粟市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBEbFFFeGg0SFFvVk5DR3ZIWGh3aUtDcVE3NjNRUEZGQmVfNk9Yay1RMU5Kcnd4N09SaUZBUUtaYURRREJEUWFVTml3eGl3dWdVSDJVN09LTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 北海道足寄町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 三重県紀北町 紀北町三浦（山林）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 静岡県小山町 柳島地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 山口県岩国市 美和町下畑の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 北海道留萌市 高規格道路の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE9lMDc0S1lndEhFdndvS2NqbzVyblljZm56SHk5dHVoQTFqNTE3UThKRnI2X1RxN3U1ZDBfc0RNWVdWUks2ZEdBbkhKQ21HMFhhQWlhM3h1dnVIczlmOTlsS0dKSkJRRnZ3ZWlyctIBckFVX3lxTE5xXzNXRGdXZk5UTjByWHVZQ2VGTjd0d2stWTFJMTB6dmZjcU1xUHJrZjhaYlluUmtfaXhwV1N2MHpjRHpHblV2VlEwNUo4alFiQkhCcndZN2RPLWJvWF9aSXNqQmRMaGJ0WnpubzUtNXBLZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 北海道深川市 自動車専用道路の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBVaVIzXzFwbHdvRFB2VTVxTzhvVzlfZmExNzZqSlJpUV9NM3prZlQzeTFqNjNhMlVMYVBua2ktZmpoelc4cnZUb2Y1VzlVREd3NHotV2NUZlhQeUd0MUtpZzVBcW9ZS0diV2xNTNIBckFVX3lxTE9kY0VoSmtoT3lJSDBkWHhyaGNPSkdGTzVCemxRYWRFM2IwRGtleWticnI2M05MYk40U3hFcS1oc3diSkx3MG9TdU9QN0lzR3Z2UW5yOF9GakdNNG1uT0pqUEx2WUtJOVdTcXNKX0MwV2drdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 京都府京都市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQZVNIQjdlYXhFSEViNUhQVTNHVGxmb0preVhKQlhzYkFWaE9yeEFvX2lnLV9ZWnY5aVFydzM3RG5NNFlNVW9Qd2Z0UzZYNDhKSFZ4NlJ5SXFnRVd6aE11MFRnckt0YnlCVmc4T1pPZFZPNE5KVGR2N1pfekdCbXFmVEJ2MnRNM2VmTWpxMmln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 奈良県明日香村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFB2TFpLSXdZVXlSNDFkNmh1WjVxLS1FcG1RRTZEbGxtZG8xM01xVnRCLXM2ZUFVOHcxYS16TVNFVXJyN1Q4d05wcnljOVg4REprU3JTN2N4c2RyZE15c0UyVnVwOEpzeW16UlJpQUtR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 北海道美深町 国道脇の牧草地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE4xUFI0NlFYdVdGd0N6SkpmVEZ6V3lqN19rQ3NQRlZhRWl4b0FaLWpjUHNaV29vMU5TSGNDWkNhU0I1VFBFMy1pWkRpRjZSZWtlaWl2RDFORTFKbkpuMms2ckFXX19jdEdOaDZDenh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 北海道新ひだか町 三石富澤の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQZ0NBRUJPRm0zUnpaenNOdTJJdngxdkNleHN0QVB6ay1YRGZoSU1WZWpXb295a3pfbnBnczNkVUt6cVZQbmNWU1YyczNENHFEcHF3RXNBQzlPTmF3Sy1jaG5yLWZ1dWUwZzB6RU0teEpmZHA3MHVNb25abjl5Q09xTmVPMmRrMTB1bUFackFoX2JySUJJVUhDNGRMdE12RlVacE93a3ZXcnc0bUV5ZWNZ0gGiAUFVX3lxTE5EQlJKUzRiT3JZRXVkVjJNel9Xd2tLY0ZsaVNvU0l6b2wtcGktRzdLVVdUVjVndDVvb3RWRVkzUVk2cjk3Zm5CdFZWRjB1VDJFWVB5TmYwaWdiRlY4QUpTN3hudjNWSFQwMlZZTnN4RUlvRXByZncyakc4ZFZPdzdnNVhWWUxZNGpnRUgtbEQ3clkxYXVUb2cwUTVIY21GaERMZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 宮城県大崎市 鹿島台大迫の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPREFydDlTcXkyNFJQSWtiaDBJVkJYSzVweVZyTkEyQmJTcjAzRXgtS3lBWEQwc1UtOUJFc0FBNmgtU1ZlenVBajJBRFlXaC1QYzBvRlZQdG1USExVQWpCbnJ5V0JVRzA4NVluNF9hZF9PTjhidE5wMnFfelNRNzVhQTdpZ0dhMHZ6VjFTc0NQc0s5NmNRdlN2eFZPRFDSAaIBQVVfeXFMTmk1Zi1KVlIxeEJDWWtDLS1hZkJfcVVFdjdaWVlTZnJ5dmVsVEJheVUzZnBwaFRtSGQ0Q1Y3SDhRVkl2dnRtd3NlRV9JdU41UjRuOTVJX1FjdnZhSHFYUmVyOG1YUmpWdDVrRVBiTlkxU0t6SEZrdkI0TVBpYTVMSzJVMGgxMW95dkdCbFJZZHJNaWRGME9WejMxcTluRTQzZ1FR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 宮城県登米市 登米町日根牛浦小路の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNT2Z2LXh2S2k0T0RYRmt5ekJ3VDJGSzBoalNBMUJxVVY2Tm93bXNxejJYUGpWYUhCUDBTWFZKa00yMExTRE81V2RORkVYeUlpamlKbUZwcmpyRFlvTHppUTZfTnl3MVdPTW90Z2lEZ1lNREd4c0s0Q3R5UlVwR2ZwWEt0cDlGejZLVVVsaTRkQ2JpTG9MT0JnekVSek7SAaIBQVVfeXFMTnd3b25yMWRGRlU3TnkzaXVDU0VGN3RuU3ZvYk90bC1Hck02VGRWNVRtcEk4V3AzMGNhN3pwTVYxWlJ6WU9VX2V1SFY0WVIwdjI0TGlEa1YzVjhLc0Z6bjd0d0tBSDdaZkdReTBwdkh5M2psWDhrRkx0dnJzdnJud2Z4ck5QTHM1eFNmN0h5UzVPbDVOR184akJITDNWZFQzWUt3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 宮城県登米市 登米大橋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFB5OENwaGFjWDRtZWRsa0xJUHVBbkdncEswdHRISnFvYmhRQXJmeDhLYXUzZ0pOcG9KeFZpS2lpN0R0UGhGa2xLUkJMcHpnUFBVTlk2dFJGYnc2dHZhQ19DOWZYUmdQNE85cmEya1Q4WV9pcVRuS2FIZVk5SVpSU2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 宮城県大衡村の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 宮城県大和町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 岩手県北上市 和賀町岩崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQUGNIRWI0TGVmSXJRS3k3dldEdDlzT3pzeTVWTzh6YVhQSUdHdldZTUxPcVJ6aE1fVUxZOG1sb2M3SHFDLTRlWV9sTE5YQmxITG9RN1c2a2I0c183c3Z4UTdkUnRQa0hxNi1wN1AxUWViMzBpbkRrUE5OaUJrVVpkcS13RDhQR3RvSkpLNENFV29Bdm52MXdiMlpiU2JKWllFRGlrR21PNUhiZ1dGcjJlRmRCYmEzaVVndEpqbWNUVGNvcjFlSFgtcm1BV0dnSzdTbEFsS3FxbjVVb0Qxd1lsa3BmM24wRmZlRTJSOE9oeGdnUdIBogFBVV95cUxQT0tCc1dOQjF3RS1Rb0xqMmlHbkxlbldrZlM4RkFCNnJIT3BCX3dTOGhUcWFSR1FSMU1ja24xRzBCQkhDUkFKTi1yZU1UMVQ3X2Yyak1pcUp2TTdHb2dVUVlLSUNuZTY0a2U0NUpMdThHTm9OUTJJOXlmc1Z3dDFDSVg1X003QkVmMnhHd2FvM3p0X1ZiREN4NWhhYXEtYngtSWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 秋田県鹿角市 花輪上ワ町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbXhvdXBKNGluU3E0RXV2OUhvTGZRbUdJdXA3ZUx1eUYxWVF4QlJlb1Z5N01DRFNSclZRcmhodG9oR1Voejd4Yzk1Z1gzRS05RlJ3Vms1ZldtR1pCdDBjWGxWR21UamJ4Nnl2blF1b2xhUnlUcXJ1SjZDLUlKSjc0NGZLWjNzOFV3YUpmbGlNMkkzMk9zVXhVa3R2cEzSAaIBQVVfeXFMT1BaUlZSU1M1anU3emVqd1JYSWRRd3VjSFBLNC12UHItYTBTMjJYYXRpM1JtNlFMRXFVX3pLWUR0MFk1ZE1TU2p0cXBtZVdja19SdDFjR2lrNC1DanJ2U0xMMmh5cmRwTDJzTEpVZDBrLURyTHoyUDVRek9NMmo5alB6VkVQWm9RV08waE41MkV1enYyWWlsSWJsN2ZpRXhNUVhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 埼玉県小鹿野町 両神薄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQWWtac3ExQlJkYVNTWmRqSTdtRy1OUFFWWkNhSXB1RUdRaE9oSHM5R2lRNmNFR2RwamRHR1hjNE40T0Y1U002NVNTUlJDSWRnc0lvX0lxWFVvRmQ0eDg3Q1ZScE9mN1ExV1Z2eFdvcmc0RzJsQ0p6aGI4ZUVkSjRXazFQbEtaNjZFTjlqQ3R2d3ktd3ktMi1KNXZoMlNaUEdub193NFYtSDJYd1RGZG1V0gGiAUFVX3lxTE02N29VX213SGtvQ0tpVVE2QlFxOEExSkFnVTY4ZzhILWh4WENGNTRfQkFQS3YyYzEtU2hHMWNjdV9QWG12SWlHYVVfdlg2UG15UWFnZzY1OGJIUG9sVTR2RW1hM1JjMjk3aXp4dm1SaW9JaEJsbXp2ODEyQV8zUmN1Z2xCNUNmUkVVOWdaZG5PVEhGTzZaS0tqcWJsQWJtczJtdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 埼玉県小鹿野町 小鹿野町両神薄串脇バス停北50ｍ付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 埼玉県秩父市 秩父市大滝地内（三十槌区三国建設資材置場付近）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 栃木県佐野市 船越町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcjJwbGpDSHNKaHJPLVAxUVdJT0FRYmthclhaNlV4R2hWd1pvQlNJNTJqVlh5YmM0Tkd3dFk3a28yYTBidjNTRlpiYk9rWDNqLTZ0eVNWaDZSX2tLT251bHNEeEVwakNTVDU1ckNnNFdnR0kyRWxtWDNobDhTMVNaZEt5SExFSVRZcGhUYlJEWjJkM0hCbXFEYXVQNFfSAaIBQVVfeXFMTUdpcmNBdkpGOTVNU0M5MFZVanlEeHYwc2ZFejZPYjVCUjc1dEVxQjFrVTZkOEJ3SEI3SWgzVm5DdFVvQm84RnJyUWVEOWFZWVpuWUxvc2R1eERkX2VSbTl3Rm1LU29xN1gzV3hZWnZJUFV5Y3FuMno4OUxjd1VFM3lTaGc1cS1jWXlUZ0Y5WUhmeFB6RG95LVAydk5EZXJEa053?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 栃木県佐野市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 栃木県鹿沼市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 群馬県前橋市 前橋市富士見町赤城山　赤城県道上　カーブ２４付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 東京都檜原村 数馬の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOLUE4ek9RRXQzX0lGN0N3SXJENFFodEsxRm1CT0ZSN2VZTDhOMThPV1VVY3BjVXNlUHJlTkpvb1pfQURDVkE0WkxnMVZLM3lWWVRBMTVLNVA1N1pDTWlrWV80QTg0bkVfUWY5ZTVVQWNkakU4X0ZjV2FSbFp5MTJjUzBpWV9fRTYySS1DcDBVUnFYNGtPSllEajlmTDTSAaIBQVVfeXFMTWJNSnNRQmF3SkdlVmxEU1NDOGNqcFBzR1oxRDdPX1A5bTN3blZhVmluWGgtcFRBamRxemVvSWxvY0FNUWFpcGxwM0FNNFRuc19oR0NoZ1NnMU9PQ2xfbWJsY29FWHMyN0RWNkpMVVY2VFI4cTFxRG5ZYkdIaDNCYUFkVDZXcEduV3prMktSRmJmZzZMNkRHalFCbV9KcjJEN2RR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 神奈川県相模原市 緑区牧野の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 愛知県豊田市 小原田代町伝具の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 福井県小浜市 奥田縄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQm1VNzNsNkVuV2JYZllrNnFFRS1qbFRWUDg0WGgxRmZSSER1dVpwdFVJWTVXVEdoMHRZWFZ2UDd2eVhfb0J2ZmJmY2ZNQjh1Q3JFcFBFSjkwa0w0eUlLWURVQVljMC1YVFVLTEtJdmROTG1nQjgyYXVOR2tuREI2d3ZCRnJKYWpXZy1PZFFfYW1HdGRDLUU5c1h5RTbSAaIBQVVfeXFMUC1IYjBkcng3WTZMV3p0RjNxbEdOVGNoeDBXTExIZmJCZmlwUHRySy00bEt5YzVQMnI0d1VBbFBSLWw1LUVOdHRfd052N1lUSEFtNzVBeUtLdGFFaTh5ZnVybU5pMlo2MENIb1VuRzQ3MHE0M2FfSmZwV1JON3ZsQ1FZYXVMSm9jRm5uRGVpUXNMaDBYX2l5UWFIV294RmpSM2J3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 福井県おおい町 川上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaGlQVjc0TmlLTTlFQzNIUTYtWEcyVGh6VUxJUGU3clo2c1h4SW5QNG1HejM0akpzNld3MnNoY2hfcGF3aDlkWDV4SzMwc0xfd0Q2T25xdHNHbnNuNktQcFlBYkpGU2xFaURnM005RU1ZZ1VQRWx0VU5CZXhxREdEb3YzWGkwYnpJOEhxaGttLUljZE02bkp1ZFVXannSAaIBQVVfeXFMTWZUQVoweF9vLUJfRWtFUmJ4Skx3bWNFUGhieVItZWVZSW5yODlNSjFNZ1Z5VmRNOW9vZ255YjRjRzNIbzdhb0RRY2xaYXVVaUdkNnAtcDUxMHpac1FtQjVINU83T0UxNWV0VUt6TnlPSmlZRFJ3YWVtZm54aURYNmRSdUJ3VE9ucDhfaGFvMXRjdXF3YnNBUXExN01VS2lCUFZn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 福井県小浜市 深谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 静岡県静岡市葵区 有東木の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 岐阜県中津川市 加子母　中切区の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 山梨県市川三郷町 黒沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPb05oY0U2d3FJOWFUM29DMnRXaUtLVTdKb1RuRUt1SEhSOWtERHgyX1lCQXFjWl9xVGtwdE1fZElBX1JDTS0ySE9NUjF3c2hUdC1wbVdxNi1DODNBTHR6STJQY1lYVzFlWDBmOGNvREEySWw4VzBGZ1NNMmNpc3R3bS1EQnlFQjRLOTVjYnEtQ1JqYWhwbm1VMkhqLWVQMWY0b3d4Y2dleHVYTVlDZlY0cm5vRGlZU0N1ckdQb2RKU0FUMlZYRzFZM1pFeGN2amdvby1nemdXazZoRHQxZlRRSXFXY0U1UVJyZ2cxX3VQSk9xd9IBogFBVV95cUxORm84ZWU1U1hxZmtWTUtoZjhKbW9mNkJ3NjdqVnpnTzZHLXBHMGdMM09wSlh2QncyZjhPVFZyNXpUaktMZ21zVDFRYkdBMV9GbDQ3MUJYUnRraVM1enFHVlMwdE9rNTFMMW1JbjVpaVRKTWpPdklGaVByRnc0eUpXYUNSblhmTGpvNW8tWkVnODF1SEh1T2NmYV9CZjMxeXZqLXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 長野県佐久市 甲の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOcXJzVHJhYUp2b0lueFkzSHNBQndaaGNJVVlFQkNxaEhxWm1JMGtCNmhVS05kMWw3MWJiazJnTFdLTWxQTzNaeTM3UVh1S3QyUGxQTzFJcnVLb2VxZ0kzV2JsVzRJZXV5RWVybmc3TWREdVM3enpsOGFOSDRfb0g1dmhwQ1lnQjl0Y0xDOVp1bVd2cmJsWGd2QmMxTk54RTNQMUVUZzBlbkl0UU95WF9XeU1ydktZMU1sQndvSndjdmlmeEdIblZhY1RGU2N3ZHBEa0RoYW4tVzBMWHVWMXdMUmgxaFFIMDNydWNzMVQtMUsxQdIBogFBVV95cUxOVVdoci1UbFZxUnBLOTVxd01WX3E0S09DMDh2My1Vdy1PX0x2LXJlTjR5QTBMUEYtQmNaMjZBclZuR1RjWkxLdUxicnZpellPeVhjZzhja2pISktUNWF1ZVR1akprQWRhNmJNUTVVTm81OGlFLTlZNHI5TEljLURtSGktSkV0TXNuYjJ6T21OZHFrRlFMQUh0dlR4Z1VKUm5UdWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 京都府京都市 北区鷹峯光悦町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNFZtS3ZCMkVuQnhMZE4yb2lUZDhSZ1hHMi1VandQaGY4Y1MyeEdRY3dLT012dy01bS01TTZzOVBtbmxUVkJBSWpfV1dEMGdIMHJDalZwV3pqYWg0RGlqSzdMQU5JQW9nWFZ4djNDR2RSOVVzZ2F1V1o5ZTd4WGlGb250N3Z0UTZUd21UX2NHSnRwR25NbDlEeGJRcV_SAaIBQVVfeXFMTlpMQmZCdGRsRVJnSUpuT1hPNVJILS1zUGVpZmhxRzk2Ykp0S3N5YjJsN2d2aWctUFYwbFM0MjV1RzFHTGxjTGFUZW9MY2FjeDR0NjhOdU5YRmpFemowSFJVZjdWcGxIdWNyUlpRMGtZSmRVRV9xbjJicFdWdmsxWndmQ0docWVtNi1vSjNONUpwdFoxNmRiTUJ4b3ZNTHIwS2NB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 京都府城陽市 富野吉ノ見の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPR21sZGtMQV9YMnE5akJTdjZDZU4wQ0Jqb0FDVW40ZlNWV25NdEMwUlBaa256MEwxY3RKNG93MzRDRjNWQlZVbEV5bUNhVDM5Z2RyU1ZXNFhvU3luYzVnNVZxRE9RMTNDdTczcGFiQUctSS1MVTlDR1ZxcmVBeWd2ZC1pekV6T3Zka3ViTzVuWFJBYjl4OC1CVkpuQnPSAaIBQVVfeXFMT2EwaU5OVGpFaWFZWl9vT3VVNmdZLTJBYy1SZUhHSWNQekRiYi02ajFfYzdXM0M3dk5KSmg5ckZxc1hPWlpETEdlZzZtWVdQMUdhbUNCZ0NmUm9HYUk3aGdtUjJpMU10MHJzVXNqQXhUMWo2TlJUZkFhUWhSaUZuOTdCYVo0WXBHOUlkSzhBWHRnd25kdjhvUjJpYlNCMDRtUGN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 京都府木津川市 鹿背山川向の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQRC1na002U2pSaWxyZXJENURsQnRIQ2cxc0dpSWFMdlo3alFkbmZIak15cWlhRXdRV3A3T29FdzVQbzMwUGxVUzRVY0dYQ1lINmRiSGVBcmo3SEhkc1dVc1RVV3ZQODM3SHRpSFo1OG1PSnpTNEFlTFVFblJ4UnpKOC1oUDBnVGRxTWdDWjJ0YWhiWWt5QUJZOVp6MXBMZTNWTUHSAaIBQVVfeXFMUEQtZ2tNNlNqUmlscmVyRDVEbEJ0SENnMXNHaUlhTHZaN2pRZG5mSGpNeXFpYUV3UVdwN09vRXc1UG8zMFBsVVM0VWNHWENZSDZkYkhlQXJqN0hIZHNXVXNUVVd2UDgzN0h0aUhaNThtT0p6UzRBZUxVRW5SeFJ6SjgtaFAwZ1RkcU1nQ1oydGFoYllreUFCWTlaejFwTGUzVk1B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 京都府南丹市 美山町又林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQcmhnOFUxODc5TEN5REFHU3lDRk8yYUZTSmx6emlabFZVODhpTndwN0hzV3FPQW9McVR2dHA4dnI3SlM2RFZoRDJUTHZtSGFNZlVZZzBVV3U4LTZNMTdyNjVOdkZfN29MUW90bXFqZW5MWWdzTUh4OU5nODAtbGUwMGF4Z1A5TVJGOGRvNURLUExGVGpPNl9FaXp5dGjSAaIBQVVfeXFMTjRJVmlfekludENKel9oS01fcHVoWWpHSlB5dDIwaTNqQlY1NnpWSnkzQzZfMmtDTzQ1QzZHYUZLZWx4c2IycW1hSlYtdDhtRThiSW51SDFFUFl4azlzcW9pcHZnUWZseGhEODE3N3FEX0oyeUdaNUo1MW9hUkpHX0JQQ3pOZGtGS2NyeFI1bFdhOHVYcnRiWmFySDlnZ0RVUWFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 兵庫県姫路市 夢前町山之内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOcU9DOW1WdUJRUjVoRVlZbDZVbF80RG5tcUctWWVrcXZ1NVNVRTFCQjhQTnNYdnlEeE1QUzBxbF9pSG43eC1wdEpnSXlnbl9TX2hxdXFENGtqa1ZEZXF6QzBybW1RalF6Y3dWTEl3VG52WDlDbGZpTDV2LVA3ekg2eVg1ZV9PVHF0aklPS2Y5bjF6YThIeGJ5QkNfUnhSTXJjemfSAaIBQVVfeXFMTnFPQzltVnVCUVI1aEVZWWw2VWxfNERubXFHLVlla3F2dTVTVUUxQkI4UE5zWHZ5RHhNUFMwcWxfaUhuN3gtcHRKZ0l5Z25fU19ocXVxRDRramtWRGVxekMwcm1tUWpRemN3VkxJd1Rudlg5Q2xmaUw1di1QN3pINnlYNWVfT1RxdGpJT0tmOW4xemE4SHhieUJDX1J4Uk1yY3pn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 兵庫県神河町 山田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQVTRVZ0VqdHVkTUNyellNdXg5bF9TY25WZzM2VHo1eFB2X1NEYVl2NHVOT2FlWFJkMnl1ZlE4clIwU1pZczdqbXJkcVBLVHZ1Mkk2SjF5R1FNd0VDYkZnQW1JbmRKWkVVakNPV2VQTVNDZzNwQ3JRNWZya3BvZExZMjM2YlRQODFqcUNNdnRJTkVITnN4R2JJanFmSE9IaVNOVnfSAaIBQVVfeXFMUFU0VWdFanR1ZE1DcnpZTXV4OWxfU2NuVmczNlR6NXhQdl9TRGFZdjR1Tk9hZVhSZDJ5dWZROHJSMFNaWXM3am1yZHFQS1R2dTJJNkoxeUdRTXdFQ2JGZ0FtSW5kSlpFVWpDT1dlUE1TQ2czcENyUTVmcmtwb2RMWTIzNmJUUDgxanFDTXZ0SU5FSE5zeEdiSWpxZkhPSGlTTlZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 和歌山県日高川町 中津川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNcUl5clNQYjdnNHUxUTMtTUNMbmk2aXFvbFZDSFV1V0pCTVV1R00yS2tMcmFlUThmSTBOajRHcXFTNDJ4MXJOWm9zRm9vc2xjWUIyMjlhT1dESXhOWUNHZFFnZkhMZ2RGVzhwNUZyLUtDaUlGUE1NOGhrbXRfQ3BhTlM2M0g2WG5TMjNlamYybjJ3X3I4SWRGSWtPZVp3QldDUUHSAaIBQVVfeXFMTXFJeXJTUGI3ZzR1MVEzLU1DTG5pNmlxb2xWQ0hVdVdKQk1VdUdNMktrTHJhZVE4ZkkwTmo0R3FxUzQyeDFyTlpvc0Zvb3NsY1lCMjI5YU9XREl4TllDR2RRZ2ZITGdkRlc4cDVGci1LQ2lJRlBNTThoa210X0NwYU5TNjNINlhuUzIzZWpmMm4yd19yOElkRklrT2Vad0JXQ1FB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 和歌山県九度山町 中古沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPQzFMOHctUmFIMTZYNWRKWTc0Vk5XTkFsQmg3OGRJLWxCWktqUGdIY3VIblZyXzJReURPTzRYMWFiUGdGVElKSlJQS3JTMmhLQzFINTE1YnVTR1dOdVpwOUd4UEFmbHh5cWtPQ1l3V29nWkJsU18xZ09tSThibDViUlpUUFNKQUItTG5WUkJocnRLaVpwV2dscjhBNE9tclZiR3pqWklUemx0QWo0YXFJ0gGiAUFVX3lxTE5CYU9XN0hNdFdhWHRnX0l6WHVMM3FIMllpamt5djBXSmVWRlJJNlVpUV9faUNpSFVXUXktWmJHckRXQklZTk1SRklWNEZhRWtCbXF4TWlrNkdCeXJIUGNOM2VlRVVybE9EOXN6bkxNNUhDcXR3YUx1M1VBRG9xMVdONjg5OXFxOE9mcWNqdUx6YjktNzVqSlhfbFotQmRncERSQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 和歌山県紀美野町 三尾川地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 奈良県下北山村 上池原の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 山口県岩国市 周東町祖生の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSXFBczVpcE9oMjR3TVpKclFFYUpPdm5QbkRpQUQtR1F0UWJpM2ktYzljVEFxVnZBMTlSV0MxT3RFWEhHMlhnTGFIRGl6YTVqXzE4ZDVVUVA0NFhCc0lpN2lMNG51Rm5VSm5hdm5KLUQ3cDBwS1dxcWpWN2JJNGRtRmRfa0lBSk51Ry1xOEtiZXFfeDBUd3RQOWV0dmvSAaIBQVVfeXFMUGxEWVFpR1QyampoYVZCR3FZSGhNdTJqMnFYREw2UXBPVUV2QXNIQ0JsaHVxekRQWVBSMFhLSk80bHVtZ2pMUDVIb1lfREZhTHVpaTFGVUlWR003c1hqREQ4MFJnWnRQcV9fUEF6T2syVTNpQzRjY2YzMTNVNHV0WGdKMmNuY296SUdPZU95dzVEeWVac3BBbV9DTW5DUlhsVmJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 山口県岩国市 伊房の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOWEFleWF0RUl4Y3oxZXZpS2RvWE9DcVVCSEwwWmxvOXdETURMQ1JTS2dLdHZuR0FlWmtuU2lvS2F3NDczcU5xY1MtRjYzbTEzeERseTFXS3N3VGE4N1gzc1JwTHVGazh6RUpDWnRwME40ZGdEc0hHdS1xRWFsejJ6eVgzQXFsTWNYNXRlV3J4Ynh4aXhUcGJVUDd0dE5rd3ZXM0HSAaIBQVVfeXFMTlhBZXlhdEVJeGN6MWV2aUtkb1hPQ3FVQkhMMFpsbzl3RE1ETENSU0tnS3R2bkdBZVprblNpb0thdzQ3M3FOcWNTLUY2M20xM3hEbHkxV0tzd1RhODdYM3NScEx1Rms4ekVKQ1p0cDBONGRnRHNIR3UtcUVhbHoyenlYM0FxbE1jWDV0ZVdyeGJ4eGl4VHBiVVA3dHROa3d2VzNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 山口県周南市 徳山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQllDSWZvNEh5cllkcEY5cEwtYl9JdGVBaXJIcWJQYko0UFBqTVVCakVOcTgyN1BiUnpua1YzbVFjVE5fU0JHeHBhSXVUSTVFYXh2amwwOWZ4WDZ1ODFRLWRQZXpGaFR2OFk3cGJneVhpb1hCQ2sta1F4c0pvRW10alFzNE03WEQyMkFtczRDaWFJUHZubkFpMGpEd0bSAaIBQVVfeXFMTXVDTDNuWjZTR1JZbUswaGEwaUJNcmQ0TXZlN2FTa3lVT3FoNzN5cGJOOG5XN1RVNzc1ejVNMkY0MjB1WWFTekl0aWYxRi1CYXVDQnpwV2oxY1dPUlhUSDNUdWZ6YXRERHZUUTJ1MzhQeUlWcTdiYUhZVVVIUEE3bk1sMnA3Yy1sUTZTUTdGcmpQZWFOdm9WZDloNWhlZDNRNkFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 山口県周南市 馬神の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeTQyLXFNdnNfM19Kcjl1TlQ3TDdQYnNXRnZpNUVvcVlDSkVaNnA5Z2g0YlRwTGZmdUhDcm0zdGlLQTRYYzNyTTlNc0EzTFZaa0NZN3ZDV1NEZW9wNnhDckYtc0ZxVjN1Q3ZuVVZsSUJJYjhwekRJMkV2bmQxd0lreDM4cDZrSUJPVU9wY0dOQXhOWHF1RWNYSGx0QkXSAaIBQVVfeXFMUHpTQWNMa2FHTTFpTlh0Y2lja2JtVkZXYUFkdklFRS1CQjNySkE1aXJHYUZvWXNJQTFUdkZITngxRFBWV2FYRWk2ZjhOLUc1anFFMFBvS2ZfU3NhU0RaOWd3ZjdGRGgtVDNqRFE0Rl9CSm1wS0ZjTndZd052azQ3emJ0by1LUFlWM3VLT0FIYjA0T1dZSTA1RjJjNmFxdnBELWpn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 島根県益田市 美都町丸茂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVlhqc3ZXd296TlVtdnBVbmpPZF9hNk9lRHh6eFdvTkFJYXFNbDRJYlNJd2lkR3VlY0thWC1hRzRsMXZtTUV3WDVDbm5EcEQtSzZubkhuel9nOUt2SXBRZENLendFdWRrbURCWDROUU5ReHI1MHFmbUp3bGZtVFVtS3AxdFZIMUNzY2h3dXMwdnJ1VDJ1M21iU0FYUjHSAaIBQVVfeXFMT0N1MDFXempleWdnOTBWeFg5cmViSjVydjdDajFmM1V4SGxZRFE5cGN4bFkyeVcyS1lGMUdBQi1jdlRoUEJRRHlfZFJYWWx1ai04R0FBekMtYTh0bzhiVTRUZlpwOGZfTnlQWFFYVVctSEF3OTBkV09uTmZpZGJaQUZpdUtILTdSOS1xbmpFTld6QzB1UXJDcXJDMlBld2U0eFZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 島根県益田市 美都町笹倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdmw0SjljU2xHbTgyN2JGOWNjRmFpTEpBeXFPWmlqb1BicjNGVXBlY25XVVlEb2tKRTZjWkhOSzNvSmpNWFNHbUQ3dXpPM3FrR2U4N3I3dVFMWWFRUDRSZzVuOFozX0xIU1I2bXl2dXVVNzVQemNGUFJESHNpdDlhaUZ0ekpRT01xMndWd3U2Y1A0ZWh1bko3S2JXcmTSAaIBQVVfeXFMTzVMdVlremd1a1E1VUNRNUo4cVlvYkpPV3paeFIycHo5R1JaMXo2NDBfNllIVWY4SlhqMkllSHJWQjNWeDFkSnlmeEVCTktFLVg4VzI2aHp1NTNYOTE4UmFFQnFMX2REbXZrTmN2R0dJcXdCc2hkNk80WWlkaE5iNU1LY0JDZDlkd193dnowVUhkQXBhTGdqOEotV1VRbEY0MGl3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 島根県益田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBpMG50cWMydjBmODRTX0FhRmw5aFF6T3NTb2RqSHQ3bmhwR2NKNlhZR1hMVEtwVkR6el90anRYTGlPMDFCZWhzZVZ1X3RkMnl2ZXNON3lFcTVINXM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 島根県益田市 益田市美都町、丸茂トンネル付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 広島県廿日市市 原宇治久保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQYXNFOWd6MzhQNmVPNUwtVWNGYzFJT2o2WWsydTNubjZNcXE4cGpuV0g0X0hUZzg0Nm9YR2pVVVJsWUk0U1R6RnNqTnlxd0ozOVhKZk9MRDJDaGtaMW9SSXozUFZmNHVrSVg0WHcwRi1QZm9JVUQ4eG45dkZRZ2dBSHBGbU1Sd0JyMTZOZ1hQcDJyMGhhYWxfOUJMdm1KZFBfT1I4dEhCaUlob3lSdHk0bzU2NmdJM0FsRVltZWpwNE1QeE85aXE3VTZWMWRtelpXeENJYm56WXBPVHlVejRVWVZYTzRBTDhHOFVhNGhJVHN4Z9IBogFBVV95cUxPMDJTamYzOGEtWElqWDk2LTNHWmVpdXViYTZvb1RGWlZlZEktcU5pVlNzbXhwVTd5OHRWLTVrd01fWGI5RkVGb0ZCVXg3RlVsYlY4SXBPaENXRWJiTl9hUUJxVnc0VWswVUpRUEJWX09GRUJSNjJEN3BqYXA3MzRrM1VqWkdHYTM2Ri1yNFktLXpObGFhNHZadUh6Vlp3U1d3WGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月12日 鳥取県鳥取市 佐治町加茂の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 鳥取県八頭郡八頭町 北山の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月12日 岡山県美作市 川上の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"山口県","count":12},{"pref":"京都府","count":9},{"pref":"北海道","count":8},{"pref":"宮城県","count":7},{"pref":"兵庫県","count":5},{"pref":"島根県","count":4},{"pref":"埼玉県","count":3},{"pref":"栃木県","count":3},{"pref":"和歌山県","count":3},{"pref":"愛知県","count":3},{"pref":"福井県","count":3},{"pref":"静岡県","count":2},{"pref":"鳥取県","count":2},{"pref":"奈良県","count":2},{"pref":"広島県","count":2},{"pref":"群馬県","count":1},{"pref":"三重県","count":1},{"pref":"岡山県","count":1},{"pref":"岐阜県","count":1},{"pref":"神奈川県","count":1},{"pref":"山梨県","count":1},{"pref":"東京都","count":1},{"pref":"岩手県","count":1},{"pref":"長野県","count":1},{"pref":"秋田県","count":1}];

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
        <span>対象期間: 2026年10月12日</span>
        <span>·</span>
        <span>公開: 2026-10-13</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={78}
        periodLabel={"2026年10月12日"}
      />

      <h2>主要事案の概況と対応</h2>
      <p>本集計期間におけるクマ関連事案の総件数は78件であり、都道府県別では山口県12件、京都府9件、北海道8件、宮城県7件、兵庫県5件、島根県4件、埼玉県3件、栃木県3件、和歌山県3件、愛知県3件などが上位を占めている。本日は人身被害の発生、自治体による緊急銃猟の実施、幹線交通網への侵入など、人的安全に直結する重要な事案が複数記録された。</p>
      <h3>人身被害事案および自治体による緊急銃猟</h3>
      <p>愛知県豊田市では、住宅で男性がクマに襲われ負傷したと報じられた（※1）。同市においては玄関先でクマに襲われ眼球破裂となる被害が報告されており、ツキノワグマの出没が相次いでいるとされる（※2）。</p>
      <p>個体駆除の面では、広島県広島市安佐北区可部において箱わなで捕獲されたクマに対し、広島県内では初となる緊急銃猟が実施され駆除された（※3）。また、兵庫県丹波市氷上町および豊岡市但東町においてクマの目撃が相次ぎ、緊急銃猟が実施されたと報じられている（※4・5）。兵庫県宍粟市、丹波市氷上町、豊岡市但東町にかけてクマの目撃が相次いだことを受け、兵庫県内では初となる緊急銃猟が実施された（※6）。</p>
      <h3>捕獲対応・インフラ接近および特異出没事案</h3>
      <p>北海道足寄町では被害発生と同時に1頭の捕獲が記録された（※7）。また他獣種用のわなに対する錯誤捕獲も複数地点で確認されており、三重県紀北町三浦の山林で錯誤捕獲が発生したほか（※8）、静岡県小山町柳島地区ではシカ罠への錯誤捕獲に伴い山中への放獣が実施された（※9）。山口県岩国市美和町下畑においてもイノシシ用箱わなへの錯誤捕獲が報告されている（※10）。</p>
      <p>交通インフラへの影響として、北海道留萌市の高規格道路および深川市の自動車専用道路において、車両とクマが衝突する事故がそれぞれ報じられた（※11・12）。さらに都市部や観光地近郊への接近事例として、京都府京都市においてホテルや有名寺院の近隣でクマ2頭の目撃情報が寄せられ京都府警による注意喚起が行われたほか（※13）、奈良県明日香村では目撃が相次ぎ初めてクマが確認されたと報じられている（※14）。</p>
      <h2>地域別の出没状況と分析</h2>
      <h3>北海道地域</h3>
      <p>北海道では計8件が記録された。足寄町における1頭の捕獲（※7）のほか、美深町の国道脇の牧草地におけるクマ2頭の目撃が報じられている（※15）。新ひだか町三石富澤での出没が確認されたほか（※16）、留萌市の高規格道路（※11）や深川市の自動車専用道路（※12）では自動車との衝突事故が発生したと報じられており、高速交通路への進入が目立っている。</p>
      <h3>東北地域</h3>
      <p>東北地方では宮城県を中心に記録が集中している。宮城県では計7件が記録されており、大崎市鹿島台大迫での出没（※17）、登米市登米町日根牛浦小路での出没（※18）、登米市の登米大橋東側での目撃が報じられたほか（※19）、大衡村（※20）や大和町（※21）でも事案が確認されている。岩手県北上市和賀町岩崎（※22）や秋田県鹿角市花輪上ワ町での出没痕跡（※23）など、北東北の各地域でも出没および痕跡の確認がなされている。</p>
      <h3>関東地域</h3>
      <p>関東地方では埼玉県と栃木県で各3件が記録された。埼玉県小鹿野町両神薄ではクマの出没や両神薄串脇バス停北50メートル付近での地元住民による目撃が記録され（※24・25）、秩父市大滝の三国建設資材置場付近でも住民による目撃があった（※26）。栃木県佐野市船越町（※27）や同市内の地点（※28）、鹿沼市（※29）で記録がなされた。群馬県前橋市富士見町赤城山の赤城県道上カーブ24付近では子熊2頭が目撃され（※30）、東京都西多摩郡檜原村数馬（※31）、神奈川県相模原市緑区牧野の人里（※32）においても出没や痕跡が記録されている。</p>
      <h3>中部地域</h3>
      <p>中部地方では愛知県で3件が記録され、豊田市小原田代町伝具での記録（※33）に加え、同市内の住宅地における人身被害事案が重なった（※1・2）。福井県では小浜市奥田縄（※34）、おおい町川上（※35）で出没があったほか、小浜市深谷において12時44分に成獣1頭および幼獣2頭が目撃された（※36）。静岡県では小山町柳島地区での錯誤捕獲・放獣（※9）のほか静岡市葵区有東木での記録がある（※37）。また岐阜県中津川市加子母中切区の農地において18時から19時にかけて記録され（※38）、山梨県市川三郷町黒沢（※39）、長野県佐久市甲（※40）、三重県紀北町三浦の山林での錯誤捕獲（※8）など、山間部から集落にかけて広く事案が分散している。</p>
      <h3>関西地域</h3>
      <p>関西地方では京都府（9件）、兵庫県（5件）、和歌山県（3件）、奈良県において多数の出没がみられた。京都府では京都市北区鷹峯光悦町（※41）やホテル・有名寺院近隣での2頭の目撃（※13）のほか、城陽市富野吉ノ見（※42）、木津川市鹿背山川向（※43）で出没の可能性が報じられ、南丹市美山町又林でも出没が確認された（※44）。兵庫県では宍粟市、丹波市氷上町、豊岡市但東町で緊急銃猟が実施されたほか（※4・5・6）、姫路市夢前町山之内での出没（※45）、神河町山田での出没痕跡（※46）が記録されている。和歌山県では日高川町中津川（※47）、九度山町中古沢（※48）での出没に加え、紀美野町三尾川地区の山中道路で糞が確認された（※49）。奈良県では明日香村で初めてクマが確認されたと報じられたほか（※14）、下北山村上池原において8時に記録された（※50）。</p>
      <h3>中国地域</h3>
      <p>中国地方では全国最多の12件を記録した山口県をはじめ、島根県（4件）、広島県、鳥取県、岡山県で事案が発生した。山口県では岩国市美和町下畑での錯誤捕獲（※10）、同市周東町祖生や伊房での出没痕跡（※51・52）、周南市徳山（※53）および馬神（※54）での出没が確認された。島根県益田市では美都町丸茂、美都町笹倉、丸茂トンネル付近など同市内で連続して出没が確認され、16時45分ごろに1頭が目撃された記録もある（※55・56・57・58）。広島県では広島市安佐北区可部での緊急銃猟駆除（※3）のほか廿日市市原宇治久保での出没（※59）、鳥取県では鳥取市佐治町加茂で子グマらしき動物3頭の目撃（※60）や八頭町北山での記録（※61）、岡山県美作市川上での記録（※62）がみられる。</p>
      <h2>上位都道府県の集計</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">順位</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な事案内容・特徴</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">12件</td><td className="px-3 py-2 text-xs">イノシシ用箱わな錯誤捕獲、市街地・集落での出没および痕跡確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">京都市内（寺院・ホテル近隣）での複数頭目撃、府南部を含む出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">足寄町での捕獲、留萌市・深川市における高規格道路等での車両衝突</td></tr>
            <tr><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">大崎市、登米市、大衡村、大和町等での目撃・出没事案</td></tr>
            <tr><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">宍粟市・丹波市・豊岡市での緊急銃猟実施、播磨地域での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">益田市美都町周辺での連続出没事案</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">秩父地域（小鹿野町・秩父市）における住民目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">佐野市、鹿沼市における出没事案</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">和歌山県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">日高川町、九度山町での出没、紀美野町での糞確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">愛知県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">豊田市住宅および玄関先での人身負傷事案の発生</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>本日の集計データにおいて特筆すべきリスク要因として、以下の3点が挙げられる。</p>
      <ul>
        <li>餌資源要因: 兵庫県において「ドングリ類が不作の見通しでツキノワグマ」の出没が相次いでいる旨が言及されており、山林内での自然堅果類の凶作・不作傾向が出没活発化の背景として顕在化している。</li>
        <li>人口圏および生活空間への極度な接近: 愛知県豊田市において住宅敷地内や玄関先で住人が襲撃され眼球破裂等の重傷を負う事案が発生しており、人里境界にとどまらず生活居住空間内部まで個体が侵入している。</li>
        <li>交通網および新規・都市隣接エリアへの出没: 高規格道路や自動車専用道路での衝突事案、京都市内のホテルや有名寺院周辺での2頭目撃、これまで確認のなかった奈良県明日香村での初確認など、従来出没が稀であった地域や高密度の交通・人的動線へクマが進入するリスクが高まっている。</li>
      </ul>
      <p>広島県や兵庫県で初となる緊急銃猟が相次いで適用されたことや、シカ・イノシシ用のわなへの錯誤捕獲の頻発は、野生個体の行動圏が人里側へ強く押し出されている状況を反映している。居住地近辺での夜間・早朝の警戒とともに、行政・警察による迅速な出没情報の周知と捕獲態勢の維持が求められる。</p>

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
          <dd>2026年10月12日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-13</dd>
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
