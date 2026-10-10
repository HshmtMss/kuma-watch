// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月9日 / mode: daily-report / 生成日: 2026-10-10
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-09-daily-report";
const TITLE = "2026年10月9日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月9日に国内で記録されたクマの出没・関連事案は計62件であった。兵庫県丹波市では県内初となる緊急銃猟が実施されて体重7キロの個体が殺処分されたほか、北海道中頓別町での捕獲や、宮城県・京都府などの都市近郊・文教施設周辺での目撃が相次いだ。本稿では収集されたデータに基づき全国の傾向を報告する。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-10",
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
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
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
      "title": "ツキノワグマに県内初の「緊急銃猟」 体重7キロ、殺処分 丹波（神戸新聞NEXT） - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE00aFdWaEU4UmNrNGV6SzJ2UkgtdnVCeGJKT0Z2cGtjaUkxQVhiNFBVUmhobDcxM2hZTktvUUhzWnhmT1hvcUhDTEdHWUlEd2stUFJzUFZQX0ZBQTR1ZnB0OGE4N3Bwcy1TQmZCM1pZc0NiZnBEd0l2MDI1aGZWRG8?oc=5"
    },
    {
      "title": "小学校近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ZRGxzMzRWMGd5QlI4TndycEdvazJLd1YybDk4dHVQSDFoeU14bWV4eC1iRFNxcm90OE15T2RmOWlta1BnbElxd2YzQ2U4OWc4MTVTdnF5UkpBSmZlTGxMVFgxN3VGQlZSN2NFalVCZ9IBdEFVX3lxTE50RTZDZjhiaGx5QmVZN1RYU0pSZ2x0c3oyTG42NlFjV1pxZUNWMFZpMFotcXpuMm50Smd0SjBnUWtqRU5ka2NiTVNXZmphQUxBbGtlbHVHVU9IZ05LWWJBQ1h5bHAtZjMzc19IWEoyb1piRFFX?oc=5"
    },
    {
      "title": "（埼玉）秩父市荒川上田野でクマ出没　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWVhRQko4SVZGSWRPeHk1NWZZOFU3RDg5X3NfelpxUlI2a1E3MzZYMjAxUnJoTFdkWEZyTU5YU0JpOEVZRzlRSGNnSk5NS1BlWldvTXFxcEZVcll4bjVHeWNKZ1pZX0xTUW02UjlzVllnazNTTWRjel9IZDlqVjFONW95akZqZGpUcTUxTDJNWDhsWFkxRUNGa0JYS1TSAaIBQVVfeXFMUFI3dDNPOXpJRVN3TUw4Qlk5MlVVRGNpSlVUbXhHQ1VTLTJoR21ZVXFSVW8tdTJWaUMzeklPTHZxWVZRSE9NT1JyajhuMXVIblZvVGNwQWg2TnFPLVRkZk95SEhTQjBadGxTamc2OUFDNFU3NklyM2toS2hmU0pCbFhsbGlTVFdrUk9JVmhqZDk2TFVJZTlvM0VvZ04yaXN5S1Z3?oc=5"
    },
    {
      "title": "小鹿野町両神小森でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRllqZjZ6em13MlZIVkIwa21sYXhlOFN3bFI1blJDWi1yV0JKMHA5Y01YUTl4b1FLRTRydUlQeFRCWlVkZjUta21sU2JwNWtHNS1HZTVLaWNlc0tLMktleVRrWWUzSTNlWnJrTmVHdUZxNENhcXRHR015N1dMLWVwM0hHT3VndlBwY2pKU1JkdDhmRnZBOWZQVk92Z3XSAaIBQVVfeXFMTFBIdWdUbld3WFU2dHM3eXlyd25pWllaOFVXOGxHS3pfSVhKRFp3ZDZudHFyYkctanI0Zm40RC14cXV0VXozZFk2MHhyWm96Q1ljaGs4WVJhMzlOOWMzVXdtc0g2UjlPNWp2QUo0T3ljaW4tLV90NFBUa0VJdWhDR0NHNEJrUXFmZEt1U1dLeU52cmxRMVdxbjk0Q0JLLXV6dTNn?oc=5"
    },
    {
      "title": "秩父市でクマ3頭出没",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5icG10aDdaV3h5ZThjbFR2NHB1aTNMNFptRHBpTFR3bGp6Z1JOSU5NM3d6cTcyWnU4VXFvWGtJU0NHU1NzTGI5RzNkQl9iamFUUWl5OTlsWVFWeVBLajl1SEZ6dGJpdzZlbUFrRUN3?oc=5"
    },
    {
      "title": "鹿沼市久野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNEk1amF3bUExbWM4Qk1iRFlpdTZBU2hhZGdERkxTX0YxcHFSbkpSTEF3YUY0Y05BejExa3NRb1FLaXo1MlNxR2kxNjBrRDQzUFVRQVlYYXZpaEZjdzYtM2M1WlluNjI2RTU1aVVqZDJXcmxwamoxc2xoZFVac0xLZmd2Z1dfcXVrcWNiWHRIR3R5MDNRSVI1ZjA1U0nSAaIBQVVfeXFMTkdvOVYtVEFQMTFxbjhPX09CRktBVFIydXNOZ0l3M21wQkJpdmlkVUFub09LS0RqUk10UVZmUmtWU1Y0aXBlU25wTkR2SmpnYXBwSmxfNXl5bVZwSS1ESENRTWVHQUJGWmNES0RKYVIybHQzRFRqZEp6SnJiTTB2bE9YTEZQZmFHeTNzdkliX2ZSZUhYMUVLaXhRQ2FESUtnWklR?oc=5"
    },
    {
      "title": "（北海道）天塩町下コクネップでクマ出没　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQWE5M0ZPVTRfVnJGZGxRN0lvNjlaS0pQcGpaNGY0bFRQSlUtR3Z4b011OGxHSmp5SlRFVGw5MV8xTjVWUDNjd25kdEctVXZzaTZqUk12NVhjOTdhbGV6YmdUTVZQdjd1azVHVFZTRkNrMmhQdEw1OGN5Z0s2NXZ0VGdFbG9WbHNoSVRTWG1WcEJEaGFoV3NubzZRV2PSAaIBQVVfeXFMT1B6ME5mTmMzWmM1U2M0bkxzYndpU1lLeUZWWV8yR3Q4eURvRzUxX0tOSko2eXBvTkFXbHkyS3ZuRklVd0RuN0NNZXR4Q1BhRzdTTHJoRFJ5aFFGeDAzem1hQVl1eHpYODMzUkw1WlhaUkJQZkdFX3lfdE9mLTNZaVhITWh3WThwbU1EVXo5czU2OERqcXVVQ3QyelFyN1FXeXd3?oc=5"
    },
    {
      "title": "（北海道）厚岸町サンヌシでクマ出没　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbVh6U0Q3a0tDR3J0cFFweHl1dTZpNlY5R3loZlZjLXBpY0xNQ1lLSk51OXVaQ1ZsV01FUDhwaFZaMVZWT0hPRGF6TktueGRvXzlrTjRlZTZ4RmJ2SmRuWUxoUFpwdm9helpWTS03QlprcS0yNDk4RV82UWNwUlRpbUxSVGFxOGlJU2JPUmZZUTBZNVJtUGJFTGc5NUjSAaIBQVVfeXFMTUZtOWM0ZkZTczQ0bWVZc1l5dEgydFZmRkY0WHFUSHUzYVpabWhuWnM0WkRHYVFKNnhkUkNpUXk4YVdzTlZOUXp6cGlqODJFWkg0N09HTXZrWDNQcmp2cUljT2Y2OTdMNkdCQ2t5TlFZOWI2eHg4clZRUkNjam83Qm1oTnRuM0lLZjhqZVgyVTI5N29DOGNoczg1ZUR1UjRoMnBB?oc=5"
    },
    {
      "title": "（北海道）喜茂別町栄でクマ出没　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeUFIQVBpSnJGN3BhNHM1bU1HZGRBSWxPb1g4SGp2aXBVSnl2WTFTTWtzZHlqNXVYMzJ3U3VDM3BMemFxME53Q0E0QVV6MUt1VjJUZll1bC1xNlhQRHk0ZjhJQmd1eEpnbm1iR0xYd2hOYjFhM2VabzZXSENZUExELTRhSWdhMUZ4TjczTG1tMk44eEFqczRHLTd6MmPSAaIBQVVfeXFMT3hqUGMyVXkzd3RxMEw4ZkE0N0djQlJiVWNkblFBaWl4eThBTTVvenpPeERTYmhMVzNOa2k4ZGlEd3l5dEwwTWhzSWFfVUJOY0NncDBQemhWVDlpSXhTa2laSXZjaXBhR2JDMW1QRlRrMW1lRmhZOWtWT25uUVlUVFN3ZFZXdHJuaEQwTzVnWDBDN09PSE51U0dIdEUwcDJsdExn?oc=5"
    },
    {
      "title": "沼田町北竜でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYkRWVjFPSDYwZm9FNHFyM3lhc09nc0NZQW4wb0tmS0thbFVydGJXWWNqZWZ0S3N2T0Q0SE9vd09aalZLYVQwN3V5eHlyaTQ4MlN2ME04cmxFalRleVRCbUZlZlRFNmVmRFdkQjBsaFByWWQzVTNZaDZSd1pVdW8wVVpobHB3MWdrS0swbUxtdVQ4cFJNWldXSDFvZHDSAaIBQVVfeXFMT0tkNWxGYnZDd2pSY2tGSGdiTERpT0hoWkN0OVBKNnFFYzR4bFBmQ3puSkxPMzd4RERxQWIzZ3k1LUJTOFB4WVU3SkE0SEg2anhXV2FwdFZtYWUzMjc2TjV0RWlCeVNqT0JLZ0p0YS1iN1dpRXpFQ2hiQ1Z4cWx5N055ejd5QkhTaXNZVDBkT1R0VHVtTlR4Q1YtM3BIbnBUQUV3?oc=5"
    },
    {
      "title": "（静岡）富士宮市外神でクマ出没　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZDhXSHR2SEV5dXFrejg2TnN0c2NSZ08xcE4xaWhBbnU4MGlVbzB0bTk3WUFucFFTWkt1V1JPZDNtb2psVDNFNXgzU2lyUmF1SFpUaHlXZFM4S2FOSzJocXpaTFltcGxyc29YaGRXcmNKeGwtSDR3S2k5ZVEwZk1JVl9qUmdKRzJONml6c3VXU3ZIMXk0ZHc3czhxdnDSAaIBQVVfeXFMTUQtR2sxVEZqN0duQ0NMV3phak5FX1pscUJXQ3pWemFUUm5ZRlJpTzU3ZUthdlNTMWJ2MkN0Rk5IdHJuOWRjUVp0OGZFbXN4UzJTM3JoZkRvVHF4ZnM5U19LcHJnbEFLTW1RYzVVR2VqOXFiZ1h2cU84ZGN1WDFuNWZVc3ZSaGh3WV80U3d4UndXVWhmVHNzaFVqU0tGa3ltRHp3?oc=5"
    },
    {
      "title": "（兵庫）宍粟市一宮町下野田でクマ出没　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaGhOc1NwTjlLRlBoNC1wbVVhWnNZR2VqUno5VlkxSGlvRml6akJJTUVORTh3NThhNDVUb0lDcDJuZVBlOXl1clpsQ2RkVWd5dTM3QkhGNEQ3OFhfZC1jaWNTU3RtZGI3SEU0TWd1ZWhfdDJYXzJJRmI1OFJ1Rmdra0dsMVVOV3hRa29CU2ZYOFN1SzAzd2xrR04tTXLSAaIBQVVfeXFMUHFFNFBKQ2ZtWWJJWnFxU1I0MU8yTXhEeEpjNllwWkFHaUVjSk1UX1ppZjItcGh3ZW5IWlRfZldUM1pveWxZczByRHVacU5JV3VJM0NQQmwtNTlfaDM0MHpyV2dvQjRfdUZncGl2Xzc0RWoxcEt5Vkc5bjd5enZ6bmVnOHBGR3hsNVlWaGtkTDJRY3U3LTJIZTBYTW1YanBFWWVn?oc=5"
    },
    {
      "title": "（群馬）安中市松井田町松井田でクマ出没の可能性　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdE5JMzZoUkpTX2hPaWxZVXJaR0tJbDVVUTNNeTFjLWZkM0RwTVZ5bGEwLUdmRUtncnBmaE9mWEZUOEJ6V2J3NHMxMm96bHdLbWZuZkFCRkFmS0hHSTYzZVRnZ1ZKX2pRSnYwcFRlakVFZlhBTGJkcWdfNm9ZLWxDdXJ2LXlsNndQemVheHh6N1JEc0dlZUw0T0I4OS3SAaIBQVVfeXFMT1RCYW92T3RVcDZfQ1NwY1JzRjlZeWZFblY3Y01yVHd5MGZWMHdpNkxKVlZUSi1INE5QTFRKdlBaRFZQNG1wbUQ1SXk3MVNqeUdhY0tHdnVEaFlYbW5pNV9WRmVNTDFaTFJEUlRINUY4YlZJS0RMN19raHJRaGV1bGVQYUVBWW5fa3NXM29FVGgzbXJ3aWdDS3QtbENvcFhOMERR?oc=5"
    },
    {
      "title": "（群馬）神流町魚尾でクマ出没　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNSzg3bFhlRi1aVGtYZVNGU21WVUNWa2VrblU0elB3VlVnNEE3cy05Skd0YmFWTmVBUTQtb21KcmhuUGtQeU9wNG1oc2hrM3B6dmdhbW83U3pzUVdhZFJUS3BEby1zRzRDeVRILUtvdG43azRKWU9TcWdMRFl0OWpGV1E5cTZ0c2tsb1dvUkdKLW5pWGYyNDJxQmJRdnUyMzhVUUdHVWNfdFJJaXIxX0hOOWV5aFpSWXQwR0tYdFRoSG5MY2JiS1RYVmZsMVRXaHByMmtlNzc2RVNZaXlCZnliYm5YSlhsOUN5dEdPTGJodnZGUdIBogFBVV95cUxPX25VRUZTYnMxdzAxSVlxZFZGcFA2YmkzWjBpb2tOXzJmbDBmc1lyRGdGLVNFbVZfY2tkZkRVRjRDNW14RHJUdnRWT3dzM1h4U1ZRRVJ2eHAtY2RobEtQdkU0UDM2X3pYRVNfUVZ2eWI5ekVES3I1OXFGV0Z4c0pzV1lPQlFkcm85X01tOWhoZ3BDY0l3YkxVeWNPWF9GczB5SXc?oc=5"
    },
    {
      "title": "（秋田）秋田市河辺大張野道ノ下でクマ出没　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMWdHYnNybll5aFhHS0w3OWpPVm9fRkVVRHNTcUQtTkZ6SzRyeXdNNERwXzVTOXY4dWU1QjJqVzR1MEdFcy0xaENHVVRCRkIyWU9JUlNZclpCLW5RR3lZYU14ZTNFSHJDUF9BR21jX241Y016ZF9EUTJJbWJWa2ZkQmdUOE1mbTR1M050em9XaFdaWkxuU24zeUhmR1_SAaIBQVVfeXFMTmpuTlFfYUpES2hiQXFMZzFVMzNRWS1MeTZOWDVxbmN3RnhmejdialA5S1p6S3l6SzFrT1VmNWxGWmoxcTJodWlhQV94TVF3R0o2SjVwUVdaTUZmMXNaR2g3VXlrN0s1N2JIMXJZbU9hcWpZeVBTQmhmcndCT1IxcDdObVNwZFB1Z2l4RkcxaEdwV2NNVlNsSE1vQ0lBSlpEaGtn?oc=5"
    },
    {
      "title": "仙北市田沢湖生保内堂ノ前でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWXNRQTJxX241RlFpd0wwUzJhSmN3MkNfTDBMSkdFeVhmOFRqODRLOXViYVVkRkc3WnZEdG1vbDJNUXQ5SGZQOHVocm5iVllpcElEV3lOY2pqWkY1ZlZoeVZEdEx1OG13REsyeEdRRXNvQVpTUUpTOTMwT3k1YjMzcU52b0g2a1EwVkctZ00yY2dnNWVhY0tTQjFuWmrSAaIBQVVfeXFMUFR4VnhJY1ZxOWIzZWZZaEQ0T0hmQlAzc21OQ3BvQWpoMVBfZmVWaFdIX1pGYkduVlRPSEpyM24xU0RHQmtXYlBNWGFERm9aSVVfdl9GUHlLWkJidXE2Ulp0TjAxQzB6U2RJNndRR0dqNGpuTUZNbk5COXgwbVBMOW9kUjE2cHh3RW1wYjZOb3RwbWEwaGp6UDdTcklKeThiREpR?oc=5"
    },
    {
      "title": "西京区でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQWxCRVBpamdKUzhHazNvZWI5VFBfWVF1S1pyX3c2VmV6LWVDSFc1XzYzVThQQl9rOVNlZ2ZrSHFxU2hxNVBDTU03ZGhSMW5wZ3NQTnhLNnFIcVVWeWRxUVJ0MzBCSkFCTVhyZjl4c1hCOEktTXY2TjBBS25CRDBvdjFoeThsZE5oNnRCQ29fRjl3a1NqRGdsajFzeXnSAaIBQVVfeXFMUHVxVDdnencwdnNFN0NPU2NNZndVdURKVU9IWVNCR1ZPUS1lT0N1ekFUcEVIWG1KWTVQZ0U4aXM2b2Z2X1IyN0w3VG84Ri1VYU5PdGtYUG9nVlRxdXJ1Z0I2M21RMUdwYnBuNTBoZWVGSzJIS1BLcnREdktaN0lWQkZfVG1uakFoUjJ2dHRLLXp3V1Vremd1VWd2Z21NdG9malFB?oc=5"
    },
    {
      "title": "（宮城）富谷市富谷日渡でクマ出没　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeHlUVGlpV2VYRFBvVXZia3dSLWQ2bHVmeEN1R01EYkFmdVpBdmhiOWdRSnZxR3A0Q2hCbGwzLXk1TlBLbVU2UFN6QzJDN1I1aVRBcEExSUhIb0hhbHRrYXB4dHYtZW5CNW1EaF9YeFJaVkhyaEZFUS01WWdVOWtlclRBM0IyRXR0VlVyOEtudWZwZGs0b18wMk42M3jSAaIBQVVfeXFMUEZpNVRMNTFkdjQwQURwa3c1ekQyQUhZSjdkeUlCRTNlR0NpbDVEN3VjT0l0MDFMSDFuazd0cWJTbzZCSlczTWtTelZTbGNKRmVwbUo4X3lqS2xPc0U3QzBWXzlwLU1lMkUybkdRbk9JZi1uang0Z182eVcyNXM3OEpFOWxZY3AyUy1KT3hZSGxfMTdFamY3TkJXeDNwNE9xQjhB?oc=5"
    },
    {
      "title": "気仙沼市赤岩でクマ目撃 9日午後3時過ぎ＜宮城＞（2026年10月9日掲載） - 日テレNEWS NNN",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5wR1BSeUNSZ1g5UVFjMGZUX1RFdm5WWjNJMlY2bDVPXzRtYVpieTFBQUVVMUE3ZjdMUmJQMUlNZ1g5Z29SSEJtZjJTVGxsaXQ3SWRLTExYZFpFQjNqNC01RnZRdnNkUkl1V1NCMnAxWFBjR01za29kYnBKWS1oWGc?oc=5"
    },
    {
      "title": "仙台市青葉区荒巻仁田谷地でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOS0xNWE1oQnFteDh0eS16YWFUbGxpMno4US1zeTlZOW84UDlWc1FsUkUtaTZ0QklCdURUVG5VTHdDYnM4VXhFVlVMYjRqb05NLVJycGxtVHZxQW8tUUpNdFhDN2pxUFNpYVFud1BrRlN3RC1qa3lMTW9ORFA3bHFSZW1lWG52eWo3aUdON0NlT2l1Mi01UkkyVkhVWWN5b2NWbWxwaVM4X1pLejB6V0Jxck9kYVBXSXFOUEs0ejFKamNIcGxGMjhEMmtDMlVycUpXOElhQU9DVFJ2eUtYMURYRlpfR3h6cVVweXpDazhCb0ZDQdIBogFBVV95cUxPTDJmaUdPT2xrc2xpT3UzZ0x4X2RsZkNjT2t4MVZvQVFYdnVMLUplUHVXVFRXbmZ3S2JqSkNIVDAzWGVsRHRXZVgzM203UklJSWR4d0EwYUtpdjJIZlU1T0taWHl3VVNUbnNSQXVuNmtXR1p0d0JjVkhQTGtYcTdoVU5zbXlveVJHT0dmZ1kxMDEweVAzYkgwZl9nU3ZUUkt4alE?oc=5"
    },
    {
      "title": "富谷市大清水1丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZFR6MjZpLUFVUkZmcTVUVEFTajluWWowNnFXU2tlN2hWTlB2QkZKZzJlcUVyX0Vud0E5OFlFX3ZKbWxtazZ4OVVHZE9Rbi1tb3FienQwWTFTVHBkVkhzMjl2aW41ZlJwWFRnM0hLdDVGc0tjUTFXdFBFRnZqeDdXMHVGQUxzWVJHWXdGZkgycTFlX3hqQWtCR3piMHPSAaIBQVVfeXFMTnFBZnp0UlV2RU1zejhGcUxMeGZTdmhUbGJrenBWSTJoVkJEakdqazdzR2xfcHBfcWJHLXVEdU8tN2NxWUpOWUttem5GY3lESHE2Vzg5TzdDVkFkZ0M1UjZZRjVBNEJ3c05aUklXanQtYWV1aDFqYkgyOWdwYlFwMWdaVFUwdEczWGhuRkdqM0QzOGR0VC1VQVlrbmgwdE5SQkZB?oc=5"
    },
    {
      "title": "（東京）青梅市根ケ布１丁目でクマ出没の可能性　１０月９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUElJUUFqR1ByRThLc080SWpZX2h2VEFKSTNjNlhYRU5GVTgwSV9tX3QtcE04eS16cHk2Z3hYSTlvWkJ5MGJGTkRlNWZLSENDODh0MDE3Y0w5R2JNOHhiNDhqd2gxaE5SaVMwMDNscmtRWm9mcjFjcW9Yc2RMU2ZORlFsNHNpUWtIbHprbUV2NzVZN2pPdXZXdUJLaUXSAaIBQVVfeXFMTmtZdUpHQVFzNkZiQzVXc09PTWpNVXVPNlZiZU1TMWhfLVY3SjBnaWJTREtfQm5aVGtxTTRFUWM5aWFPY2ViUkFSWWFfcG8yMjVKOVRpbk5pM0lGS0NwRy1qWTluQ19oenIwcjlxeVJpRTljVzNub3dkZzZPWXJoSjEtXzF5YTE4YVhzeENUOEplcHZnUEM3eWJ3LXBUMmFBMWV3?oc=5"
    },
    {
      "title": "【熊出没】10月9日（金）福島県のクマ目撃情報 会津若松市河東町 (福島テレビ) - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNUzMtOW9ObWlmRVhXU19JX2l6QUlNTktEUXNDMWRrdUtZVkJhZ1d4MDJvYVJJU1QtdXREZzZ0cXJ3Wk44TGNvUm44ZHNfMGdnX2phUHQxUUg5TWpCZjBHTGVCa1k1TFRKMU9xOXB5cXpBRS1ZclJGOHhHV2V5QkJRYVY0bDVLS29nMkY1MUlR?oc=5"
    },
    {
      "title": "塩尻市北小野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbTc1Yk14a2RqdkQyMVdsYlRjb2tJbWVIZmREQTZxVmw4OXBZMHRYOElLZVNkcU42YlNsX2t0dktGVnk4UlI5ZzVnNWU5NDJhUUNiUnJIOUtZUnVhRS1TdHlDNFBMZkNERk93M183alBGYWV4OGFFQjF2dHAzc25xWjJpVEJWaDJrRUlqd1htNG1XVE4zR08xWUplSUjSAaIBQVVfeXFMTmZRZXJXQ1BHY0tYWkNydFFFenU0YS1DWWJORmRMZXdnakpoZkc1bGdhYkF3YWVYSkZJUXVsRlItbHVpVXo4ZWlvMzNucGlGOUFpMVFQREQ5T0F3dlF2QWFSblpiakc0b0NGZDNRYWlOTEJ5VDlkaENQM1hKSkx5UlpiSDVfaENQajBmLVhwNmNwUXJ6ajk3NC1XQ0lGVDN5bGhB?oc=5"
    },
    {
      "title": "辰野町小野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOWFHOFNzcV9lQTZPUTR0LWx6RjJqb3dhN2VvbkNXSU15YVcxOHA5eXFlQUlIakhzTVptN2FmS2dYa1ZkdHZuWUFSRGR4ZU9yMDhXNkVrLWZhTDFtUDBySldEdHJwdThVUXRzajc2bWpBWExnNHdQb2hGZEFHU0VfNzJ4dDYtdVZ3VGFGX3ZnMGpHUWJjMU11bTRldVLSAaIBQVVfeXFMTW1JOHFNdWpGaVVVUGlqYWZDXzVmbi1HeE1yd1RTemZEVFFlOU9TVmhZVF9GSEw1b1NtQnZ6dDVWQUZyUnU5N195YUp2ZHpBZS1BRmFNLVRidkVTUUQxT2VYQTF0QzF6VmpwbHB4VFlmTVp0bXZ5aVFiYlhKVmo2b2pFUjZYM2hvaEplT3htYnJWU1ZUeC02cDA3UFNBY1l6RjJB?oc=5"
    },
    {
      "title": "山北町皆瀬川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWnRtdm5Wb2VGSzRWNmZGNlU1VXlEbktLR19LVWRoTXFEQmlTQ3RXbDE1WEI0b0UtajZ1NGg1VnlrX0QxUGlDWUxoVldOQ3RRYjZqZFJqb2l0bmprUXVuZi1nWXlXdGJWQURMa0JVVjlJVlhLbks0MjBnX2tSU2lVZHRxVTlrR29pcVp3Z2ZtWWRWNDUxZXZac2JKdkjSAaIBQVVfeXFMTzAyREZkYUN1VU84ZXItTHRUdk5PelFVRkRRZUEtWXFCeWpESXE3R1IwcUt4dlIxc2hzSkNTVy1sVWZ0RG1HZzJYUVFDY3FrQ2lmSXlaRUVMS1JTUGhMWEtqUlJ1VFQ1YS1sa3E3V1l1T29kRTEyalRVVjRSbnF3Tk1ycXV3WlRHb2VfTXJFYmxFakFKamFsWFY3RkNnRlRsMUR3?oc=5"
    },
    {
      "title": "クマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE81RVl5NTIxNmplbC0wdzdiaHV5eFJQT2VQWFBZRmtfQlFvc3VxQkFLT2FMRnBMWHVOZ21kTU5zSnFNN0VpRS0tYlYxQUVNRUI5XzBKME81MWhPUlV5UFVwSmFGakg5V0ZaM2JCMFAtNkxWTmMzVUt3Q2dJLVlGT2M?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":11},{"pref":"兵庫県","count":6},{"pref":"宮城県","count":6},{"pref":"埼玉県","count":5},{"pref":"栃木県","count":5},{"pref":"静岡県","count":5},{"pref":"京都府","count":5},{"pref":"山口県","count":3},{"pref":"福井県","count":3},{"pref":"群馬県","count":2},{"pref":"秋田県","count":2},{"pref":"和歌山県","count":2},{"pref":"長野県","count":2},{"pref":"新潟県","count":1},{"pref":"東京都","count":1},{"pref":"福島県","count":1},{"pref":"神奈川県","count":1},{"pref":"山梨県","count":1}];

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
        <span>対象期間: 2026年10月9日</span>
        <span>·</span>
        <span>公開: 2026-10-10</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={62}
        periodLabel={"2026年10月9日"}
      />

      <h2>1. 特異事案および人里・都市部接近の概要</h2>
      <p>本報告期間中、人身被害のキーワードに合致する事案は0件であったものの、捕獲・銃猟に関する事案が2件、都市部キーワードに合致する事案が1件記録された。特筆すべき事案として、兵庫県丹波市の住宅街においてツキノワグマに対する県内初の「緊急銃猟」が執行され、体重7キロの個体が殺処分された事例が挙げられる（※1）。市街地や住宅密集地における銃器使用を伴う対応は安全確保の観点から極めて慎重な判断が求められる局面であり、地域における対応体制の運用例として記録された。</p>
      <p>また、学校施設や住宅地近傍への接近事例も確認されている。宮城県気仙沼市では小学校付近でのクマ目撃が報告され（※2）、仙台市青葉区荒巻仁田谷地（※14）や富谷市大清水1丁目（※15）、富谷市富谷日渡（※13）など、仙台都市圏近郊の居住地区でも相次いで出没が確認された。京都府京都市西京区御陵大枝山町1丁目（※12）や東京都青梅市根ケ布1丁目（※16）など、大都市圏の住宅地に隣接する丘陵地帯でも出没情報が寄せられており、人間活動域と野生動物生息域の境界部における軋轢が顕在化している。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域・自治体</th>
              <th className="px-3 py-2">地点特性</th>
              <th className="px-3 py-2">事案概要</th>
              <th className="px-3 py-2">事案区分</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">兵庫県 丹波市</td><td className="px-3 py-2 text-xs">住宅街</td><td className="px-3 py-2 text-xs">体重7キロのツキノワグマを県内初の緊急銃猟により殺処分</td><td className="px-3 py-2 text-xs">緊急銃猟・殺処分</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道 中頓別町</td><td className="px-3 py-2 text-xs">森林・農地等</td><td className="px-3 py-2 text-xs">クマの捕獲を実施</td><td className="px-3 py-2 text-xs">捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県 気仙沼市</td><td className="px-3 py-2 text-xs">小学校周辺</td><td className="px-3 py-2 text-xs">登下校動線・生活圏近傍での目撃</td><td className="px-3 py-2 text-xs">文教施設周辺出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県 富谷市</td><td className="px-3 py-2 text-xs">大清水1丁目</td><td className="px-3 py-2 text-xs">新興住宅地近郊での目撃事案</td><td className="px-3 py-2 text-xs">都市近郊出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府 京都市</td><td className="px-3 py-2 text-xs">西京区御陵大枝山町1丁目</td><td className="px-3 py-2 text-xs">住宅街周辺での出没情報</td><td className="px-3 py-2 text-xs">居住区域出没</td></tr>
          </tbody>
        </table>
      </div>
      <h2>2. 地域別の出没状況と分析</h2>
      <h3>北海道</h3>
      <p>北海道では全国最多となる11件の事案が確認された。中頓別町において捕獲が1件記録されたほか、天塩町下コクネップ（※4）、厚岸町サンヌシ（※5）、喜茂別町栄（※6）、沼田町北竜（※7）など、道北・道東・道央・道南の各管内から広域に出没情報が報告されている。農地や山林境界部を中心とした出没が継続しており、広域で警戒体制が維持されている。</p>
      <h3>東北地方</h3>
      <p>東北地方では宮城県で6件、秋田県で2件、福島県で1件が記録された。宮城県では気仙沼市赤岩（※14）や小学校周辺（※2）のほか、仙台市青葉区（※14）や富谷市（※13、※15）など都市機能が集積する地域近郊での出没が目立つ。秋田県では秋田市河辺大張野道ノ下（※10）や仙北市田沢湖生保内堂ノ前（※11）で確認され、福島県では会津若松市河東町において目撃情報が報じられている（※17）。</p>
      <h3>関東地方</h3>
      <p>関東地方では埼玉県5件、栃木県5件、群馬県2件、東京都1件、神奈川県1件が記録された。埼玉県では秩父市荒川上田野（※3）や小鹿野町両神小森（※4）に加え、秩父市内で一度に3頭が出没した事例が報告されている（※5）。秩父市荒川上田野周辺では諸上橋付近や荒川総合運動公園付近での目撃が相次いで自治体情報として記録された。栃木県では鹿沼市久野（※4）や那須塩原市一区町、栃木市星野町などで確認されている。群馬県では安中市松井田町（※8）および神流町魚尾（※9）、東京都では青梅市根ケ布1丁目（※16）、神奈川県では足柄上郡山北町皆瀬川（※19）と、外縁山岳地帯から平野部への移行帯で広く報告された。</p>
      <h3>中部地方</h3>
      <p>中部地方では静岡県5件、福井県3件、長野県2件、新潟県1件、山梨県1件の事案が収集された。静岡県では富士宮市において外神（※8）、沼久保、青木平、羽鮒と市内複数地区から集中的に目撃が報告されている。福井県では小浜市谷田部で朝7時30分に成獣1頭、福井市水切町で夕方17時20分に成獣1頭、永平寺町栃原で18時30分に幼獣1頭が記録された。長野県では塩尻市北小野（※18）および辰野町小野（※19）と隣接する地域での出没がみられた。新潟県柏崎市大字西長鳥では山澗集落から山本集落へ抜ける柏崎小国線付近の山際にある栗の木周辺にてフン痕跡が確認され、山梨県笛吹市（※20）でも目撃が報じられている。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では兵庫県6件、京都府5件、和歌山県2件が確認された。兵庫県では前述の丹波市住宅街での緊急銃猟（※1）のほか、宍粟市一宮町下野田（※6）、小野市樫山町、香美町香住区畑、市川町美佐と内陸部から日本海側にかけて散発している。京都府では福知山市野花、南丹市美山町野添・宮脇、京丹波町下山に加え、京都市西京区御陵大枝山町1丁目（※12）と丹波高地から洛西にかけての地域で報告が集中した。和歌山県では北山村竹原および田辺市龍神村小家での出没または可能性が報告されている。</p>
      <h3>中国地方およびその他の地域</h3>
      <p>中国地方では山口県で3件が記録された。周南市鹿野中および岩国市叶木において出没痕跡が確認されたほか、山口市徳地柚木では道路上で座っているクマの直接目撃が自治体データに記録されている。なお、四国地方および九州地方においては本報告期間中の事案登録は確認されなかった。</p>
      <h2>3. リスク評価</h2>
      <p>2026年10月9日のデータ分析から得られたリスク要因は以下の3点に集約される。</p>
      <ul>
        <li>季節要因と行動活発化: 10月上旬という時期は冬眠前の採食活動が活発化する秋季過食期に位置しており、全国62件という高い出没水準に反映されている。</li>
        <li>堅果類・食物資源への依存: 新潟県柏崎市において栗の木周辺でフン痕跡が確認されたように、山際や集落境界に存在する果樹・堅果類が誘引源となっている実態が確認された。</li>
        <li>人口集中地区・生活圏への接近度: 兵庫県丹波市での住宅街出没に伴う緊急銃猟、宮城県気仙沼市での小学校周辺出没、仙台市・富谷市・京都市などの住宅地周辺での目撃など、人間活動圏と野生動物の行動圏が直接交錯する地点での事案が顕著である。</li>
      </ul>
      <p>住宅街での銃猟措置に至った事例や複数頭同時の出没事例（埼玉県秩父市など）が示唆するように、市街地縁辺部における遭遇リスクは継続して高水準にある。地域住民への迅速な周知と、集落周辺の誘引物管理の徹底が求められる。</p>

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
          <dd>2026年10月9日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-10</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-10</dd>
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
