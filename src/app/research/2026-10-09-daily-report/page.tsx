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
const TITLE = "2026年10月9日 クマ出没動向と対応状況の分析報告";
const DESCRIPTION = "2026年10月9日のクマ関連事案は全国で計89件が記録された。兵庫県丹波市ではツキノワグマに対する緊急銃猟と殺処分が実施されたほか、北海道や東北、関東、関西を中心に住宅地や道路、農地への接近事例が多数確認されている。";

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
      "title": "2026年10月9日 兵庫県丹波市 住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE00aFdWaEU4UmNrNGV6SzJ2UkgtdnVCeGJKT0Z2cGtjaUkxQVhiNFBVUmhobDcxM2hZTktvUUhzWnhmT1hvcUhDTEdHWUlEd2stUFJzUFZQX0ZBQTR1ZnB0OGE4N3Bwcy1TQmZCM1pZc0NiZnBEd0l2MDI1aGZWRG8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 宮城県気仙沼市 小学校周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ZRGxzMzRWMGd5QlI4TndycEdvazJLd1YybDk4dHVQSDFoeU14bWV4eC1iRFNxcm90OE15T2RmOWlta1BnbElxd2YzQ2U4OWc4MTVTdnF5UkpBSmZlTGxMVFgxN3VGQlZSN2NFalVCZ9IBdEFVX3lxTE50RTZDZjhiaGx5QmVZN1RYU0pSZ2x0c3oyTG42NlFjV1pxZUNWMFZpMFotcXpuMm50Smd0SjBnUWtqRU5ka2NiTVNXZmphQUxBbGtlbHVHVU9IZ05LWWJBQ1h5bHAtZjMzc19IWEoyb1piRFFX?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 宮城県気仙沼市 市街地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE0zdGRxQ1huQVdreV8xazBVa2IzTWdBUlBtYmdZbGZxNEpEOVA5ZkF4TVg4Wlc2Nzk1UkVEdUFMa3FYWGRFRjdmS2NkRml3NnctaVlPb3VMMlhxMlgtVG5HZzh4QXpxdjE4TmFTczBpN1lnN0U4M1RCX1lnLWRUUnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 埼玉県秩父市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5icG10aDdaV3h5ZThjbFR2NHB1aTNMNFptRHBpTFR3bGp6Z1JOSU5NM3d6cTcyWnU4VXFvWGtJU0NHU1NzTGI5RzNkQl9iamFUUWl5OTlsWVFWeVBLajl1SEZ6dGJpdzZlbUFrRUN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 北海道天塩町 下コクネップの出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQWE5M0ZPVTRfVnJGZGxRN0lvNjlaS0pQcGpaNGY0bFRQSlUtR3Z4b011OGxHSmp5SlRFVGw5MV8xTjVWUDNjd25kdEctVXZzaTZqUk12NVhjOTdhbGV6YmdUTVZQdjd1azVHVFZTRkNrMmhQdEw1OGN5Z0s2NXZ0VGdFbG9WbHNoSVRTWG1WcEJEaGFoV3NubzZRV2PSAaIBQVVfeXFMT1B6ME5mTmMzWmM1U2M0bkxzYndpU1lLeUZWWV8yR3Q4eURvRzUxX0tOSko2eXBvTkFXbHkyS3ZuRklVd0RuN0NNZXR4Q1BhRzdTTHJoRFJ5aFFGeDAzem1hQVl1eHpYODMzUkw1WlhaUkJQZkdFX3lfdE9mLTNZaVhITWh3WThwbU1EVXo5czU2OERqcXVVQ3QyelFyN1FXeXd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 北海道厚岸町 サンヌシの出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbVh6U0Q3a0tDR3J0cFFweHl1dTZpNlY5R3loZlZjLXBpY0xNQ1lLSk51OXVaQ1ZsV01FUDhwaFZaMVZWT0hPRGF6TktueGRvXzlrTjRlZTZ4RmJ2SmRuWUxoUFpwdm9helpWTS03QlprcS0yNDk4RV82UWNwUlRpbUxSVGFxOGlJU2JPUmZZUTBZNVJtUGJFTGc5NUjSAaIBQVVfeXFMTUZtOWM0ZkZTczQ0bWVZc1l5dEgydFZmRkY0WHFUSHUzYVpabWhuWnM0WkRHYVFKNnhkUkNpUXk4YVdzTlZOUXp6cGlqODJFWkg0N09HTXZrWDNQcmp2cUljT2Y2OTdMNkdCQ2t5TlFZOWI2eHg4clZRUkNjam83Qm1oTnRuM0lLZjhqZVgyVTI5N29DOGNoczg1ZUR1UjRoMnBB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 北海道喜茂別町 栄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeUFIQVBpSnJGN3BhNHM1bU1HZGRBSWxPb1g4SGp2aXBVSnl2WTFTTWtzZHlqNXVYMzJ3U3VDM3BMemFxME53Q0E0QVV6MUt1VjJUZll1bC1xNlhQRHk0ZjhJQmd1eEpnbm1iR0xYd2hOYjFhM2VabzZXSENZUExELTRhSWdhMUZ4TjczTG1tMk44eEFqczRHLTd6MmPSAaIBQVVfeXFMT3hqUGMyVXkzd3RxMEw4ZkE0N0djQlJiVWNkblFBaWl4eThBTTVvenpPeERTYmhMVzNOa2k4ZGlEd3l5dEwwTWhzSWFfVUJOY0NncDBQemhWVDlpSXhTa2laSXZjaXBhR2JDMW1QRlRrMW1lRmhZOWtWT25uUVlUVFN3ZFZXdHJuaEQwTzVnWDBDN09PSE51U0dIdEUwcDJsdExn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 北海道沼田町 北竜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYkRWVjFPSDYwZm9FNHFyM3lhc09nc0NZQW4wb0tmS0thbFVydGJXWWNqZWZ0S3N2T0Q0SE9vd09aalZLYVQwN3V5eHlyaTQ4MlN2ME04cmxFalRleVRCbUZlZlRFNmVmRFdkQjBsaFByWWQzVTNZaDZSd1pVdW8wVVpobHB3MWdrS0swbUxtdVQ4cFJNWldXSDFvZHDSAaIBQVVfeXFMT0tkNWxGYnZDd2pSY2tGSGdiTERpT0hoWkN0OVBKNnFFYzR4bFBmQ3puSkxPMzd4RERxQWIzZ3k1LUJTOFB4WVU3SkE0SEg2anhXV2FwdFZtYWUzMjc2TjV0RWlCeVNqT0JLZ0p0YS1iN1dpRXpFQ2hiQ1Z4cWx5N055ejd5QkhTaXNZVDBkT1R0VHVtTlR4Q1YtM3BIbnBUQUV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 北海道遠軽町 丸瀬布南丸の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVkFtQ2ZzR0FyVFJqYXY2UWNpR0JZTFZRaXBxUWVsZ09sVnNNa2hrT3NUZkZfU3c3aVNXaGVvZnBfZlVlUFlCOEhYajQ3Z2FWQ0NrUlZrWndPYUUwREI0MnRUN0JBdW9UZVoxWnNmSWxpYkRVQjdrMXJ3UUdCYVptYXNjOXRITWxoRUtzZ2FhRFp3WDZnY3NfU1UwdTnSAaIBQVVfeXFMTi0tbjBadnVGVE9LNV9nNXBPamtfdVRxaEQ0OU1PbHV2NUFUaHZuS2RkRUVfWXdPNU5VNms3LTcyVFJZRkpHaFpnV0pEeXpTNnctVGx5cWg5ZTk0aXh0MXZ1RjluUS1Jd2V4RlpOenNhdUY5MFRWWnJTSVkwbE1wRUViQTE3TzB6cnNFNV9qaVpPNGI5ZW1SRlFyS2hBSklraG5R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 宮城県気仙沼市 赤岩の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5wR1BSeUNSZ1g5UVFjMGZUX1RFdm5WWjNJMlY2bDVPXzRtYVpieTFBQUVVMUE3ZjdMUmJQMUlNZ1g5Z29SSEJtZjJTVGxsaXQ3SWRLTExYZFpFQjNqNC01RnZRdnNkUkl1V1NCMnAxWFBjR01za29kYnBKWS1oWGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 宮城県富谷市 富谷日渡の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeHlUVGlpV2VYRFBvVXZia3dSLWQ2bHVmeEN1R01EYkFmdVpBdmhiOWdRSnZxR3A0Q2hCbGwzLXk1TlBLbVU2UFN6QzJDN1I1aVRBcEExSUhIb0hhbHRrYXB4dHYtZW5CNW1EaF9YeFJaVkhyaEZFUS01WWdVOWtlclRBM0IyRXR0VlVyOEtudWZwZGs0b18wMk42M3jSAaIBQVVfeXFMUEZpNVRMNTFkdjQwQURwa3c1ekQyQUhZSjdkeUlCRTNlR0NpbDVEN3VjT0l0MDFMSDFuazd0cWJTbzZCSlczTWtTelZTbGNKRmVwbUo4X3lqS2xPc0U3QzBWXzlwLU1lMkUybkdRbk9JZi1uang0Z182eVcyNXM3OEpFOWxZY3AyUy1KT3hZSGxfMTdFamY3TkJXeDNwNE9xQjhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 宮城県仙台市 青葉区荒巻仁田谷地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOS0xNWE1oQnFteDh0eS16YWFUbGxpMno4US1zeTlZOW84UDlWc1FsUkUtaTZ0QklCdURUVG5VTHdDYnM4VXhFVlVMYjRqb05NLVJycGxtVHZxQW8tUUpNdFhDN2pxUFNpYVFud1BrRlN3RC1qa3lMTW9ORFA3bHFSZW1lWG52eWo3aUdON0NlT2l1Mi01UkkyVkhVWWN5b2NWbWxwaVM4X1pLejB6V0Jxck9kYVBXSXFOUEs0ejFKamNIcGxGMjhEMmtDMlVycUpXOElhQU9DVFJ2eUtYMURYRlpfR3h6cVVweXpDazhCb0ZDQdIBogFBVV95cUxPTDJmaUdPT2xrc2xpT3UzZ0x4X2RsZkNjT2t4MVZvQVFYdnVMLUplUHVXVFRXbmZ3S2JqSkNIVDAzWGVsRHRXZVgzM203UklJSWR4d0EwYUtpdjJIZlU1T0taWHl3VVNUbnNSQXVuNmtXR1p0d0JjVkhQTGtYcTdoVU5zbXlveVJHT0dmZ1kxMDEweVAzYkgwZl9nU3ZUUkt4alE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 福島県会津若松市 河東町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNUzMtOW9ObWlmRVhXU19JX2l6QUlNTktEUXNDMWRrdUtZVkJhZ1d4MDJvYVJJU1QtdXREZzZ0cXJ3Wk44TGNvUm44ZHNfMGdnX2phUHQxUUg5TWpCZjBHTGVCa1k1TFRKMU9xOXB5cXpBRS1ZclJGOHhHV2V5QkJRYVY0bDVLS29nMkY1MUlR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 福島県会津若松市 水田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1jQlUwemxHSkNmdGM0eFRwejdyb0JOTzhxbDl6Yk9iaFhUNmsxaG1EallhOTllR3prUlRBTFRFT3ctNmRDOWhUNkp0SUpsQmc2akJLNi16eVZDUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 福島県会津若松市 福島県会津若松市河東町広田横堀の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 福島県会津美里町 福島県大沼郡会津美里町福重岡字八重松前の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 秋田県秋田市 河辺大張野道ノ下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMWdHYnNybll5aFhHS0w3OWpPVm9fRkVVRHNTcUQtTkZ6SzRyeXdNNERwXzVTOXY4dWU1QjJqVzR1MEdFcy0xaENHVVRCRkIyWU9JUlNZclpCLW5RR3lZYU14ZTNFSHJDUF9BR21jX241Y016ZF9EUTJJbWJWa2ZkQmdUOE1mbTR1M050em9XaFdaWkxuU24zeUhmR1_SAaIBQVVfeXFMTmpuTlFfYUpES2hiQXFMZzFVMzNRWS1MeTZOWDVxbmN3RnhmejdialA5S1p6S3l6SzFrT1VmNWxGWmoxcTJodWlhQV94TVF3R0o2SjVwUVdaTUZmMXNaR2g3VXlrN0s1N2JIMXJZbU9hcWpZeVBTQmhmcndCT1IxcDdObVNwZFB1Z2l4RkcxaEdwV2NNVlNsSE1vQ0lBSlpEaGtn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 秋田県仙北市 田沢湖生保内堂ノ前の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWXNRQTJxX241RlFpd0wwUzJhSmN3MkNfTDBMSkdFeVhmOFRqODRLOXViYVVkRkc3WnZEdG1vbDJNUXQ5SGZQOHVocm5iVllpcElEV3lOY2pqWkY1ZlZoeVZEdEx1OG13REsyeEdRRXNvQVpTUUpTOTMwT3k1YjMzcU52b0g2a1EwVkctZ00yY2dnNWVhY0tTQjFuWmrSAaIBQVVfeXFMUFR4VnhJY1ZxOWIzZWZZaEQ0T0hmQlAzc21OQ3BvQWpoMVBfZmVWaFdIX1pGYkduVlRPSEpyM24xU0RHQmtXYlBNWGFERm9aSVVfdl9GUHlLWkJidXE2Ulp0TjAxQzB6U2RJNndRR0dqNGpuTUZNbk5COXgwbVBMOW9kUjE2cHh3RW1wYjZOb3RwbWEwaGp6UDdTcklKeThiREpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 秋田県大仙市 太田町斉内高田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVzgwZEY3ZzMyT1g3TG1TRmdTWmJiN09OS1FhbWlZWWdWWU5qaDdoVVBRT1o1VllNd09CdHdtV3pESl9ZTEhkeFlYTGN4aHhrUWRKcy1GMFRvbHdyQkZSYjFMYzB2NWJ4dWN6Ql9DX21xeDNJdzNCVEhLcl9BMlIyeGpIUy16N3l0dWg4dU5hMHN5QnhjNGNRa1ZTa2TSAaIBQVVfeXFMUGt3eS1UWUlXM0FfbHhuRTI0Q3NCZDBnM3pQMVpyZXo2QU03b2FMamRkMGRqTGtScXBiMTZ6ZnFjaEdPczZWV3BrZDU5LXNGTXZQN0ZuY3Y0MFloSzBadGROYjJMOTdCbmp5MEJVZWxkZDVhVEVabTRRSDZycVZXSlhLUFdERU1ZckR5R0hoVVdJQnRWejdNUTFJMFhleHBmQmJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 岩手県盛岡市 川又字道地の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 埼玉県秩父市 荒川上田野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWVhRQko4SVZGSWRPeHk1NWZZOFU3RDg5X3NfelpxUlI2a1E3MzZYMjAxUnJoTFdkWEZyTU5YU0JpOEVZRzlRSGNnSk5NS1BlWldvTXFxcEZVcll4bjVHeWNKZ1pZX0xTUW02UjlzVllnazNTTWRjel9IZDlqVjFONW95akZqZGpUcTUxTDJNWDhsWFkxRUNGa0JYS1TSAaIBQVVfeXFMUFI3dDNPOXpJRVN3TUw4Qlk5MlVVRGNpSlVUbXhHQ1VTLTJoR21ZVXFSVW8tdTJWaUMzeklPTHZxWVZRSE9NT1JyajhuMXVIblZvVGNwQWg2TnFPLVRkZk95SEhTQjBadGxTamc2OUFDNFU3NklyM2toS2hmU0pCbFhsbGlTVFdrUk9JVmhqZDk2TFVJZTlvM0VvZ04yaXN5S1Z3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 埼玉県秩父市 秩父市荒川上田野地区諸上橋付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 埼玉県秩父市 秩父市荒川上田野地内（荒川総合運動公園付近）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 埼玉県小鹿野町 両神小森の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRllqZjZ6em13MlZIVkIwa21sYXhlOFN3bFI1blJDWi1yV0JKMHA5Y01YUTl4b1FLRTRydUlQeFRCWlVkZjUta21sU2JwNWtHNS1HZTVLaWNlc0tLMktleVRrWWUzSTNlWnJrTmVHdUZxNENhcXRHR015N1dMLWVwM0hHT3VndlBwY2pKU1JkdDhmRnZBOWZQVk92Z3XSAaIBQVVfeXFMUFBIdWdUbld3WFU2dHM3eXlyd25pWllaOFVXOGxHS3pfSVhKRFp3ZDZudHFyYkctanI0Zm40RC14cXV0VXozZFk2MHhyWm96Q1ljaGs4WVJhMzlOOWMzVXdtc0g2UjlPNWp2QUo0T3ljaW4tLV90NFBUa0VJdWhDR0NHNEJrUXFmZEt1U1dLeU52cmxRMVdxbjk0Q0JLLXV6dTNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 栃木県那須塩原市 一区町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOT1NEalRybmhRMnI2QlNtZGd2Z0xOdHlKWGJPRUJxT2ZlSEhQWk1ucUhud1Z0bTJVblJ6bnc4Rjd5N3hMU3h5SDZFYlFSME9uN2NDcTVvSXFNRlZMV3hmZ3Y5VjdOYTQ3S1NjSHE4eFhHZTVzOWVkS1BSUGZuX1VOa0c0WHZiOW5FNmpSdkhKYzloeGlfOTBHVEh4eGnSAaIBQVVfeXFMUGluNVZOSFZjbkprZHI2VklOR2VtdjlCNXktLUJoWUFjTVZBUmtmX2ZDQ19Hcl80eTJQdHB1bTJ2UVN3Y2dldkdXTHpfdzhMMWxVQWFOSWlvZkhybWQ0d2tDbTdFVUhZUHFGTHE3czRvU2lrWXFQZWVWSVJ4U3lJd2JyeWNOSGJlOTZJVTJERC0xVnBoLVhTNUU3S0NTcGtNV0lB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 栃木県那須塩原市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 栃木県鹿沼市 久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNEk1amF3bUExbWM4Qk1iRFlpdTZBU2hhZGdERkxTX0YxcHFSbkpSTEF3YUY0Y05BejExa3NRb1FLaXo1MlNxR2kxNjBrRDQzUFVRQVlYYXZpaEZjdzYtM2M1WlluNjI2RTU1aVVqZDJXcmxwamoxc2xoZFVac0xLZmd2Z1dfcXVrcWNiWHRIR3R5MDNRSVI1ZjA1U0nSAaIBQVVfeXFMTkdvOVYtVEFQMTFxbjhPX09CRktBVFIydXNOZ0l3M21wQkJpdmlkVUFub09LS0RqUk10UVZmUmtWU1Y0aXBlU25wTkR2SmpnYXBwSmxfNXl5bVZwSS1ESENRTWVHQUJGWmNES0RKYVIybHQzRFRqZEp6SnJiTTB2bE9YTEZQZmFHeTNzdkliX2ZSZUhYMUVLaXhRQ2FESUtnWklR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 栃木県鹿沼市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 栃木県足利市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5taUxrczB1VWdnM3dSMmZfelBKNl9Ub2tWQkFCSkp2dTItYUllZi13TzhuTFg2YV9TUDJ1dkdNOWNLdHZqUWF1cl9UbDBscnAtNDJTQ3ppRnZ6MEU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 群馬県安中市 松井田町松井田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdE5JMzZoUkpTX2hPaWxZVXJaR0tJbDVVUTNNeTFjLWZkM0RwTVZ5bGEwLUdmRUtncnBmaE9mWEZUOEJ6V2J3NHMxMm96bHdLbWZuZkFCRkFmS0hHSTYzZVRnZ1ZKX2pRSnYwcFRlakVFZlhBTGJkcWdfNm9ZLWxDdXJ2LXlsNndQemVheHh6N1JEc0dlZUw0T0I4OS3SAaIBQVVfeXFMT1RCYW92T3RVcDZfQ1NwY1JzRjlZeWZFblY3Y01yVHd5MGZWMHdpNkxKVlZUSi1INE5QTFRKdlBaRFZQNG1wbUQ1SXk3MVNqeUdhY0tHdnVEaFlYbW5pNV9WRmVNTDFaTFJEUlRINUY4YlZJS0RMN19raHJRaGV1bGVQYUVBWW5fa3NXM29FVGgzbXJ3aWdDS3QtbENvcFhOMERR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 群馬県神流町 魚尾の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNSzg3bFhlRi1aVGtYZVNGU21WVUNWa2VrblU0elB3VlVnNEE3cy05Skd0YmFWTmVBUTQtb21KcmhuUGtQeU9wNG1oc2hrM3B6dmdhbW83U3pzUVdhZFJUS3BEby1zRzRDeVRILUtvdG43azRKWU9TcWdMRFl0OWpGV1E5cTZ0c2tsb1dvUkdKLW5pWGYyNDJxQmJRdnUyMzhVUUdHVWNfdFJJaXIxX0hOOWV5aFpSWXQwR0tYdFRoSG5MY2JiS1RYVmZsMVRXaHByMmtlNzc2RVNZaXlCZnliYm5YSlhsOUN5dEdPTGJodnZGUdIBogFBVV95cUxPX25VRUZTYnMxdzAxSVlxZFZGcFA2YmkzWjBpb2tOXzJmbDBmc1lyRGdGLVNFbVZfY2tkZkRVRjRDNW14RHJUdnRWT3dzM1h4U1ZRRVJ2eHAtY2RobEtQdkU0UDM2X3pYRVNfUVZ2eWI5ekVES3I1OXFGV0Z4c0pzV1lPQlFkcm85X01tOWhoZ3BDY0l3YkxVeWNPWF9GczB5SXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 群馬県高崎市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 群馬県嬬恋村 嬬恋村干俣　バラギ湖わきの出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 東京都青梅市 根ケ布1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUElJUUFqR1ByRThLc080SWpZX2h2VEFKSTNjNlhYRU5GVTgwSV9tX3QtcE04eS16cHk2Z3hYSTlvWkJ5MGJGTkRlNWZLSENDODh0MDE3Y0w5R2JNOHhiNDhqd2gxaE5SaVMwMDNscmtRWm9mcjFjcW9Yc2RMU2ZORlFsNHNpUWtIbHprbUV2NzVZN2pPdXZXdUJLaUXSAaIBQVVfeXFMTmtZdUpHQVFzNkZiQzVXc09PTWpNVXVPNlZiZU1TMWhfLVY3SjBnaWJTREtfQm5aVGtxTTRFUWM5aWFPY2ViUkFSWWFfcG8yMjVKOVRpbk5pM0lGS0NwRy1qWTluQ19oenIwcjlxeVJpRTljVzNub3dkZzZPWXJoSjEtXzF5YTE4YVhzeENUOEplcHZnUEM3eWJ3LXBUMmFBMWV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 神奈川県山北町 皆瀬川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWnRtdm5Wb2VGSzRWNmZGNlU1VXlEbktLR19LVWRoTXFEQmlTQ3RXbDE1WEI0b0UtajZ1NGg1VnlrX0QxUGlDWUxoVldOQ3RRYjZqZFJqb2l0bmprUXVuZi1nWXlXdGJWQURMa0JVVjlJVlhLbks0MjBnX2tSU2lVZHRxVTlrR29pcVp3Z2ZtWWRWNDUxZXZac2JKdkjSAaIBQVVfeXFMTzAyREZkYUN1VU84ZXItTHRUdk5PelFVRkRRZUEtWXFCeWpESXE3R1IwcUt4dlIxc2hzSkNTVy1sVWZ0RG1HZzJYUVFDY3FrQ2lmSXlaRUVMS1JTUGhMWEtqUlJ1VFQ1YS1sa3E3V1l1T29kRTEyalRVVjRSbnF3Tk1ycXV3WlRHb2VfTXJFYmxFakFKamFsWFY3RkNnRlRsMUR3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 静岡県富士宮市 外神の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZDhXSHR2SEV5dXFrejg2TnN0c2NSZ08xcE4xaWhBbnU4MGlVbzB0bTk3WUFucFFTWkt1V1JPZDNtb2psVDNFNXgzU2lyUmF1SFpUaHlXZFM4S2FOSzJocXpaTFltcGxyc29YaGRXcmNKeGwtSDR3S2k5ZVEwZk1JVl9qUmdKRzJONml6c3VXU3ZIMXk0ZHc3czhxdnDSAaIBQVVfeXFMTUQtR2sxVEZqN0duQ0NMV3phak5FX1pscUJXQ3pWemFUUm5ZRlJpTzU3ZUthdlNTMWJ2MkN0Rk5IdHJuOWRjUVp0OGZFbXN4UzJTM3JoZkRvVHF4ZnM5U19LcHJnbEFLTW1RYzVVR2VqOXFiZ1h2cU84ZGN1WDFuNWZVc3ZSaGh3WV80U3d4UndXVWhmVHNzaFVqU0tGa3ltRHp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 静岡県富士宮市 羽鮒の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 静岡県富士宮市 青木平の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 静岡県富士宮市 沼久保の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 静岡県静岡市葵区 渡の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 福井県小浜市 谷田部の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 福井県福井市 水切町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 福井県永平寺町 栃原の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 新潟県柏崎市 大字西長鳥の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 長野県塩尻市 北小野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPbTc1Yk14a2RqdkQyMVdsYlRjb2tJbWVIZmREQTZxVmw4OXBZMHRYOElLZVNkcU42YlNsX2t0dktGVnk4UlI5ZzVnNWU5NDJhUUNiUnJIOUtZUnVhRS1TdHlDNFBMZkNERk93M183alBGYWV4OGFFQjF2dHAzc25xWjJpVEJWaDJrRUlqd1htNG1XVE4zR08xWUplSUjSAaIBQVVfeXFMTmZRZXJXQ1BHY0tYWkNydFFFenU0YS1DWWJORmRMZXdnakpoZkc1bGdhYkF3YWVYSkZJUXVsRlItbHVpVXo4ZWlvMzNucGlGOUFpMVFQREQ5T0F3dlF2QWFSblpiakc0b0NGZDNRYWlOTEJ5VDlkaENQM1hKSkx5UlpiSDVfaENQajBmLVhwNmNwUXJ6ajk3NC1XQ0lGVDN5bGhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 長野県辰野町 小野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOWFHOFNzcV9lQTZPUTR0LWx6RjJqb3dhN2VvbkNXSU15YVcxOHA5eXFlQUlIakhzTVptN2FmS2dYa1ZkdHZuWUFSRGR4ZU9yMDhXNkVrLWZhTDFtUDBySldEdHJwdThVUXRzajc2bWpBWExnNHdQb2hGZEFHU0VfNzJ4dDYtdVZ3VGFGX3ZnMGpHUWJjMU11bTRldVLSAaIBQVVfeXFMTW1JOHFNdWpGaVVVUGlqYWZDXzVmbi1HeE1yd1RTemZEVFFlOU9TVmhZVF9GSEw1b1NtQnZ6dDVWQUZyUnU5N195YUp2ZHpBZS1BRmFNLVRidkVTUUQxT2VYQTF0QzF6VmpwbHB4VFlmTVp0bXZ5aVFiYlhKVmo2b2pFUjZYM2hvaEplT3htYnJWU1ZUeC02cDA3UFNBY1l6RjJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 山梨県笛吹市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE81RVl5NTIxNmplbC0wdzdiaHV5eFJQT2VQWFBZRmtfQlFvc3VxQkFLT2FMRnBMWHVOZ21kTU5zSnFNN0VpRS0tYlYxQUVNRUI5XzBKME81MWhPUlV5UFVwSmFGakg5V0ZaM2JCMFAtNkxWTmMzVUt3Q2dJLVlGT2M?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 岐阜県恵那市 三郷町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 兵庫県宍粟市 一宮町下野田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaGhOc1NwTjlLRlBoNC1wbVVhWnNZR2VqUno5VlkxSGlvRml6akJJTUVORTh3NThhNDVUb0lDcDJuZVBlOXl1clpsQ2RkVWd5dTM3QkhGNEQ3OFhfZC1jaWNTU3RtZGI3SEU0TWd1ZWhfdDJYXzJJRmI1OFJ1Rmdra0dsMVVOV3hRa29CU2ZYOFN1SzAzd2xrR04tTXLSAaIBQVVfeXFMUHFFNFBKQ2ZtWWJJWnFxU1I0MU8yTXhEeEpjNllwWkFHaUVjSk1UX1ppZjItcGh3ZW5IWlRfZldUM1pveWxZczByRHVacU5JV3VJM0NQQmwtNTlfaDM0MHpyV2dvQjRfdUZncGl2Xzc0RWoxcEt5Vkc5bjd5enZ6bmVnOHBGR3hsNVlWaGtkTDJRY3U3LTJIZTBYTW1YanBFWWVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 兵庫県市川町 美佐の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNWFhTcllKTnMtaGlnc085R3poZlZCSHNXdVhSTVpvalFJcU9RVjFMQXpmYkFfUjZJdmlvTnlGR0JFcjBCU3JqaFJXQVRuMkVRZ1JOUi1YQ0ZmSmxWajZ5ZjZHQkM2RUNiMFlWSlhjUVFXZ1V4Ql9Bd2tGS0NLb1FiMl9KdG1KOEZGVS1DSnNzMmduUk9MVG9TWmVDSVR2N3hEWFZVWjRiSHkyaFRuZ3hpWTVON1Y0d25NbTViTUJxNFh4cTY2WFZ4dURJQ1h5eU1YY0phN2FoNDUtSnJoRmloNVZXSVFPY0xWc3hlNTF6NFI2Z9IBogFBVV95cUxOYmJ3ME9HQUFob09lVE9BUlJ5VUtNalRSV2NvVU1WeEUyZnRJLXk1WFpndjMwR283UXFmNDlLSDJhc1JSemFfbW5YSEQtcmRzRU9sT2t2U3p2cmJnX21ITHAwWU5HZEhiSWtFZnl5bnNqSmJxTzZCeGc5bnVqVHM0X0tXREJUbzVRR1JvVGtyNE9Hb3phWGxsYl9PRVRRVnluM2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 兵庫県小野市 樫山町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQd2Y1T3Rtam9WeTA5b1p2dnZkV3k2Z0dSdElpNjU1SlNfV0ZkbnZtaklObDIzTXY0T2VjSEFRWUZjM0JfY0RIREpFbTlKemJGS3NnWWhGbDhCS2hJcEpsTE4ta1RTZDJrRGRPdndDVUZJUU5RX0FtdFYwQXRYbEM5Y2p2TGFZeGtZbWNOYmNGQ0g3ZTBLMjI4NTdVb2liMzZfLS1uQ2VvR1dGdVFGaUlhdUpJaHpacTR2NC1JaEpfRnZTamNLY2RTM0h3d29xVTJLVWgyUkNTazZoWGFJNFdQeGwycnVXRkZCSXRCWlRxYkJuQdIBogFBVV95cUxNSG1rVGVua1dMVlhsRExWeDU0d0RsVFVqMDVzMDVjVmp1aDU2UU1pV294OVVOQWhYcGl3ZUNsNHVRQkFydGNkYnNNN2RyOUVwN1h0REg2NTRNUVNfeEFwSEE2Z0duY29JeWlIWWM5RlkxV1FFaGVDUHl5blY3cmNQTnpMQnBnRXhDcktPMS1rMEVWUlJzbXppOVBXZXNNZzNsMmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 兵庫県香美町 香住区畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQMmVqRHFJWE5JdVZienJabGVYMWtaeTk5dG9iVXBGOEpoVTJpaERLY3phb0JlX3lzc3lzYjNzTW1yNlI0UEd3UjNvVXh0cWVCck1kQkRzTElXOVFkRkRlV3RfRWR3S2pjM2FkczdCbTA5eDFZWWYzNzZWck0zNXduTmI1Y1Q0OENsazZQUWVfN1dDUUJlRDdkY0NUM3lfRk5scFHSAaIBQVVfeXFMUDJlakRxSVhOSXVWYnpyWmxlWDFrWnk5OXRvYlVwRjhKaFUyaWhES2N6YW9CZV95c3N5c2Izc01tcjZSNFBHd1Izb1V4dHFlQnJNZEJEc0xJVzlRZEZEZVd0X0Vkd0tqYzNhZHM3Qm0wOXgxWVlmMzc2VnJNMzV3bk5iNWNUNDhDbGs2UFFlXzdXQ1FCZUQ3ZGNDVDN5X0ZObHBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 京都府福知山市 野花の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPNDhfaEZ0cFU2NVJoUHJydWMyV1hKbkNRbkVaR3lrZlhWNVpud2NDNnN3cGEycDBJSDJkYmdlbW1LaWhuQzk5MTBSb01FaWtISkF6S2R6amQ0eHRqYk4wT0dXRHlDb3JRWmpnWDljcy1VX2lFbFBiRkU1ODV0SE9UeGJIWUR1RUZXT3h4eURBRXZqc3VEUjFSanNOUHJuOHh2cFHSAaIBQVVfeXFMTzQ4X2hGdHBVNjVSaFBycnVjMldYSm5DUW5FWkd5a2ZYVjVabndjQzZzd3BhMnAwSUgyZGJnZW1tS2lobkM5OTEwUm9NRWlrSEpBektkempkNHh0amJOME9HV0R5Q29yUVpqZ1g5Y3MtVV9pRWxQYkZFNTg1dEhPVHhiSFlEdUVGV094eHlEQUV2anN1RFIxUmpzTlBybjh4dnBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 京都府南丹市 美山町野添の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZG81NDJPRlNET0FTaVBoTmxMdjhNRExiYmJEckNMbTNhdkJtSUdkZFl5b1hTN05ObnNOemRITWxqQnpRR0toVHVOaDFSU0VUUnlVdWtBN0tkY1AzYlRSQVN2bFBabzROZXBYRUxUbXdGdTI1VTRtQWx3NzNNVUs2M1RqNlVQVnl5Nl9yVUdULTJ4MlVKZU9iRXIwZDPSAaIBQVVfeXFMUGRRZ0lHelFCdFAwYWtNa3FlOHd1SVN2Q0RqeGxyejlKVVJXMGl6dzItT1l6ODhLTjVWeHgyU0cySEQ1OFBzTjBYcGRtSlg4a0VjY1VycjRENHNDVEh4ZmdveWMwOGdjNWV6YnR0MDhnVUdfaG1uaEZ5UnQxUWYtOEVSTWFuME8tVGVvTk9QYzdKc3d5ZUZCTGxQNVhHaXN4NXBn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 京都府南丹市 美山町宮脇の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNNzMyY2NyNHlDTXJRT3NTSER1eFdWb2FGTFV2c0dmY2FkRkJNcUJUQjV6eHFKZHZvb1pyeW9yMlNmMWlvQkhnalI4MU9ZVEVWTmU3bWp2WndueGsxWnp6aG5WTXVYdFFuN2Z6QjFJRWxiWEVYV3VJRUlnZ09kU0tMT1RfMVBXM1pWMXdhcTBQRTJHTnppVHZGM1piNDhBaFc1ZmfSAaIBQVVfeXFMTTczMmNjcjR5Q01yUU9zU0hEdXhXVm9hRkxVdnNHZmNhZEZCTXFCVEI1enhxSmR2b29acnlvcjJTZjFpb0JIZ2pSODFPWVRFVk5lN21qdlp3bnhrMVp6emhuVk11WHRRbjdmekIxSUVsYlhFWFd1SUVJZ2dPZFNLTE9UXzFQVzNaVjF3YXEwUEUyR056aVR2RjNaYjQ4QWhXNWZn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 京都府京丹波町 下山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQZWVXQTBWRC1zNHVjajliV3BOT2lLY0s5RGVYSVNqYVQzbjdoSGhkeHdlT3p1YjBqRGl6eFFObUtyVV9HbEZBSkhXX0FQR0piS3Y0dHdoaThuME4wVFc0T2FneWlNWjRYMHNCSzN6eHhBOUVDZWx2RWZjcXhuXzdmV0lMTkRnT2FqMDNmTVBzQ010ajEyQnNfTVAwSTJlM0FJeVHSAaIBQVVfeXFMUGVlV0EwVkQtczR1Y2o5YldwTk9pS2NLOURlWElTamFUM243aEhoZHh3ZU96dWIwakRpenhRTm1LclVfR2xGQUpIV19BUEdKYkt2NHR3aGk4bjBOMFRXNE9hZ3lpTVo0WDBzQkszenh4QTlFQ2VsdkVmY3F4bl83ZldJTE5EZ09hajAzZk1Qc0NNdGoxMkJzX01QMEkyZTNBSXlR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 京都府京都市 西京区御陵大枝山町1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQWxCRVBpamdKUzhHazNvZWI5VFBfWVF1S1pyX3c2VmV6LWVDSFc1XzYzVThQQl9rOVNlZ2ZrSHFxU2hxNVBDTU03ZGhSMW5wZ3NQTnhLNnFIcVVWeWRxUVJ0MzBCSkFCTVhyZjl4c1hCOEktTXY2TjBBS25CRDBvdjFoeThsZE5oNnRCQ29fRjl3a1NqRGdsajFzeXnSAaIBQVVfeXFMUHVxVDdnencwdnNFN0NPU2NNZndVdURKVU9IWVNCR1ZPUS1lT0N1ekFUcEVIWG1KWTVQZ0U4aXM2b2Z2X1IyN0w3VG84Ri1VYU5PdGtYUG9nVlRxdXJ1Z0I2M21RMUdwYnBuNTBoZWVGSzJIS1BLcnREdktaN0lWQkZfVG1uakFoUjJ2dHRLLXp3V1Vremd1VWd2Z21NdG9malFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 奈良県下市町 広橋の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 奈良県御杖村 桃俣の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 奈良県十津川村 西中の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 奈良県十津川村 永井の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 奈良県川上村 寺尾の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 和歌山県北山村 竹原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPREtyaEtPeTc4cVZ6dGlwRV9BR3gzV1hIUnlNMnVaZkNHOUYzdzAyMG1GSWx5NUtuSmFlVnZ6WDZaZVBHZ3ZzbHhvQm12M3pCSS1uN1MzUjlSdzBUUGljNnplWXllSkVzWjhrQTNSbkUzdGdiT0tCNFBGSkZCcEtHMVlyand3YzRJY09xalAtR0duVVMxZU5CWEFRZkvSAaIBQVVfeXFMTkJndFhSbnhFSG55R0R4dV9qeExZN3h0NERPRl85TTk3X0lsSlNKbHk2MFNwVWc3R29hOHdwbDd3bVROd0hpcVVxaVNtUHJlUldVd2FhN3cxTEUwamY4T09GekQ4MmEtX0otRzBoZXA1S0lVRUVTTVNqbjhsNDFvVWFZVWJVYW1UOVBtaVJEZHN4dmtjRzJtZjFsYVRxYmpiVnVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 和歌山県田辺市 龍神村小家の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORnpRbTZTTGlJSWxaNVhVUU5sTTdTY24tYnlIU3gwSFJxNlpiQTJ3Y3cxR2xTbjlmQkhYRUtvMEVMRm1UT05IX3Z6b28zcXc4c2hJTF9NVmROOV9qQWl2UDYxQzBRbG1KVU1GcU5uV29KblBGcVRYNTBrSWtiYjA0ZU5uVkIyVkpzcTE0OFZLaFVkYnkxdkJCR2J6M0rSAaIBQVVfeXFMUFkxeHlnT2xCS29iWGlmVk9LVWVYYnJPblhFX0tDR2t2a3J5NmJHdi01Rm9mNG42UVY2TDZrRzJVTVBFMnBnRjVvczBjaVBmTC1aLXQ1QlF0NFNtS1NGQjhuUm5tbUpsb2FNMHZwU3Q2VkFpM3pGNFZXbkJRVWZ6MjQxYm9LSWd3cjBNbXU1WlVZR0Q3WE9fUkN2QXUzYV8zTDNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 山口県岩国市 美和町北中山の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 山口県岩国市 叶木の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOamJIU0NkN0xMVHRlOW9ndFBvczdmU2stOUlhVHpnU3BteEthMXlNS3ZwSzdNVEpVNEhNWDhCWHlkTmJYSjhsSlVaWGlxT2hHaVhadW4yTU9pV3lGQjRJNHJDNnUyT2VYdmplMENjWDN1c2t0SWJHVl82Rjd5LXByUVdmNHJScjJXWnotZDVhZHBodk9Md1NFZnBLZzlrbVVuZFHSAaIBQVVfeXFMTmpiSFNDZDdMTFR0ZTlvZ3RQb3M3ZlNrLTlJYVR6Z1NwbXhLYTF5TUt2cEs3TVRKVTRITVg4Qlh5ZE5iWEo4bEpVWlhpcU9oR2lYWnVuMk1PaVd5RkI0STRyQzZ1Mk9lWHZqZTBDY1gzdXNrdEliR1ZfNkY3eS1wclFXZjRyUnIyV1p6LWQ1YWRwaHZPTHdTRWZwS2c5a21VbmRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 山口県周南市 鹿野中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPdG5fUXNHRkJDWEdzaFFlLXRzWHozdHVjUy1yLVozUEpLb3RTNGlIVF9EazdYTnBUNEJvTDVsN3Q4OVk2d19HY0xQNVZqQnVvbzVqLXQtQ2RLeHJ0aTlaVzhINk5xcE5fb2xVWlJNYXlhTlplLU9lZEZzbmdnT0NETjF6X29zQmU1cGV3eVAzREFfYWZKNXBablVpUi1pVUZGeHfSAaIBQVVfeXFMT3RuX1FzR0ZCQ1hHc2hRZS10c1h6M3R1Y1Mtci1aM1BKS290UzRpSFRfRGs3WE5wVDRCb0w1bDd0ODlZNndfR2NMUDVWakJ1b281ai10LUNkS3hydGk5Wlc4SDZOcXBOX29sVVpSTWF5YU5aZS1PZWRGc25nZ09DRE4xel9vc0JlNXBld3lQM0RBX2FmSjVwWm5VaVItaVVGRnh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月9日 山口県周南市 大字鹿野中の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月9日 山口県山口市 徳地柚木の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":14},{"pref":"宮城県","count":10},{"pref":"兵庫県","count":9},{"pref":"埼玉県","count":6},{"pref":"栃木県","count":6},{"pref":"静岡県","count":5},{"pref":"奈良県","count":5},{"pref":"山口県","count":5},{"pref":"京都府","count":5},{"pref":"福島県","count":4},{"pref":"群馬県","count":4},{"pref":"福井県","count":3},{"pref":"秋田県","count":3},{"pref":"和歌山県","count":2},{"pref":"長野県","count":2},{"pref":"新潟県","count":1},{"pref":"岩手県","count":1},{"pref":"岐阜県","count":1},{"pref":"神奈川県","count":1},{"pref":"東京都","count":1},{"pref":"山梨県","count":1}];

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
        total={89}
        periodLabel={"2026年10月9日"}
      />

      <h2>概要と主要事案</h2>
      <p>2026年10月9日に記録されたクマ関連事案の総数は89件であった。都道府県別の件数は北海道が14件で最も多く、次いで宮城県が10件、兵庫県が9件、埼玉県および栃木県が各6件、静岡県、奈良県、山口県、京都府が各5件、福島県が4件となっている。</p>
      <p>特筆すべき対応として、兵庫県丹波市の住宅街において体重7キロのツキノワグマに対する県内初の緊急銃猟が実施され、殺処分された事例が報告された（※1）。住宅地への出没に対して銃猟による即応的な措置が執られた重要事例である。また、宮城県気仙沼市では小学校周辺での目撃（※2）や市街地での相次ぐ目撃（※3）が確認されているほか、埼玉県秩父市では3頭のクマが同時に出没する事案（※4）も発生しており、居住圏や生活動線への接近が目立っている。</p>
      <h2>地域別の出没状況</h2>
      <h3>北海道</h3>
      <p>北海道では計14件が記録され、全国で最も事案が集中した。主な記録としては、天塩町下コクネップ（※5）、厚岸町サンヌシ（※6）、喜茂別町栄（※7）、沼田町北竜（※8）、遠軽町丸瀬布南丸（※9）での出没が挙げられる。道内の広範囲にわたる各自治体において出没が継続している。</p>
      <h3>東北地方</h3>
      <p>東北地方では宮城県（10件）と福島県（4件）を中心に記録された。宮城県では気仙沼市で小学校付近（※2）、赤岩（※10）、市街地（※3）と複数地点で目撃されたほか、富谷市富谷日渡（※11）、仙台市青葉区荒巻仁田谷地（※12）でも出没が報告されている。福島県では会津若松市河東町（※13）や水田（※14）、河東町広田横堀の田んぼにおける体長約1メートルのクマ1頭の目撃（※15）、会津美里町福重岡字八重松前の路上における体長約1メートルのクマ1頭の目撃（※16）が記録された。秋田県では秋田市河辺大張野道ノ下（※17）、仙北市田沢湖生保内堂ノ前（※18）、大仙市太田町斉内高田（※19）で出没が確認され、岩手県盛岡市川又字道地ではほ場にクマの足跡が確認されている（※20）。</p>
      <h3>関東地方</h3>
      <p>関東地方では埼玉県（6件）、栃木県（6件）、群馬県などで事案が確認された。埼玉県では秩父市荒川上田野（※21）、秩父市荒川上田野地区諸上橋付近（※22）、荒川総合運動公園付近（※23）で住民による目撃が相次ぎ、同市内で3頭の出没（※4）、小鹿野町両神小森（※24）でも出没があった。栃木県では那須塩原市一区町（※25）、同市内の他地点（※26）、鹿沼市久野（※27）、同市内の他地点（※28）で出没が記録されたほか、足利市でも目撃が報じられた（※29）。群馬県では安中市松井田町松井田で出没の可能性（※30）、神流町魚尾（※31）、高崎市（※32）、嬬恋村干俣バラギ湖わきで車内からクマの親子が目撃された事例（※33）がある。さらに東京都青梅市根ケ布1丁目で出没の可能性（※34）、神奈川県山北町皆瀬川（※35）でも出没が記録されている。</p>
      <h3>中部地方</h3>
      <p>中部地方では静岡県（5件）をはじめ各県で確認された。静岡県では富士宮市外神（※36）、羽鮒のバス停南西300メートル付近（※37）、青木平の水久保池東側500メートル付近（※38）、沼久保の水沼バス停東側150メートル付近（※39）、静岡市葵区渡（※40）で事案があった。福井県では小浜市谷田部で成獣1頭（7時30分）（※41）、福井市水切町で成獣1頭（17時20分）（※42）、永平寺町栃原で幼獣1頭（18時30分）（※43）の目撃が報告された。また、新潟県柏崎市大字西長鳥では栗の木付近でクマのフンが確認され（※44）、長野県塩尻市北小野（※45）、辰野町小野（※46）、山梨県笛吹市（※47）、岐阜県恵那市三郷町の道路（14時から15時）（※48）でも出没が記録されている。</p>
      <h3>近畿・中国地方</h3>
      <p>兵庫県（9件）、奈良県（5件）、京都府（5件）など近畿圏でも高水準の記録となった。兵庫県では丹波市住宅街での緊急銃猟と殺処分（※1）のほか、宍粟市一宮町下野田（※49）、市川町美佐（※50）、小野市樫山町での出没の可能性（※51）、香美町香住区畑での出没痕跡（※52）がある。京都府では福知山市野花（※53）、南丹市美山町野添（※54）、美山町宮脇（※55）、京丹波町下山（※56）で出没し、京都市西京区御陵大枝山町1丁目でも出没の可能性が報じられた（※57）。奈良県では下市町広橋（9時30分）（※58）、御杖村桃俣（15時00分）（※59）、十津川村西中（9時30分）（※60）、十津川村永井（17時15分）（※61）、川上村寺尾（17時30分）（※62）と山間部での出没が確認されている。和歌山県では北山村竹原で出没の可能性（※63）、田辺市龍神村小家（※64）で出没があった。</p>
      <p>中国地方では山口県で5件の事案が確認された。岩国市美和町北中山では栗の木に出没痕跡と糞が発見され（※65）、同市叶木でも痕跡が確認された（※66）。周南市鹿野中では出没痕跡（※67）や畑での足跡（※68）が確認され、山口市徳地柚木では道路で座っているクマが目撃されている（※69）。</p>
      <h2>主要な目撃・痕跡記録一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">地点環境・状況</th>
              <th className="px-3 py-2">記録概要</th>
              <th className="px-3 py-2">記録ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">丹波市</td><td className="px-3 py-2 text-xs">住宅街</td><td className="px-3 py-2 text-xs">体重7キロ、緊急銃猟により殺処分</td><td className="px-3 py-2 text-xs">（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">気仙沼市</td><td className="px-3 py-2 text-xs">小学校周辺</td><td className="px-3 py-2 text-xs">小学校近くでクマ目撃</td><td className="px-3 py-2 text-xs">（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">会津若松市</td><td className="px-3 py-2 text-xs">水田・河東町広田横堀</td><td className="px-3 py-2 text-xs">田んぼにいる体長約1メートルのクマ1頭を目撃</td><td className="px-3 py-2 text-xs">（※15）</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">嬬恋村</td><td className="px-3 py-2 text-xs">干俣 バラギ湖わき</td><td className="px-3 py-2 text-xs">車内から親子のクマを目撃</td><td className="px-3 py-2 text-xs">（※33）</td></tr>
            <tr><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">秩父市</td><td className="px-3 py-2 text-xs">地域一帯</td><td className="px-3 py-2 text-xs">クマ3頭の出没</td><td className="px-3 py-2 text-xs">（※4）</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">柏崎市</td><td className="px-3 py-2 text-xs">山際（柏崎小国線付近）</td><td className="px-3 py-2 text-xs">栗の木付近でクマのフンを確認</td><td className="px-3 py-2 text-xs">（※44）</td></tr>
            <tr><td className="px-3 py-2 text-xs">静岡県</td><td className="px-3 py-2 text-xs">富士宮市</td><td className="px-3 py-2 text-xs">沼久保</td><td className="px-3 py-2 text-xs">水沼バス停東側150メートル付近で目撃</td><td className="px-3 py-2 text-xs">（※39）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">山口市</td><td className="px-3 py-2 text-xs">徳地柚木</td><td className="px-3 py-2 text-xs">道路で座っているクマを目撃</td><td className="px-3 py-2 text-xs">（※69）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">岩国市</td><td className="px-3 py-2 text-xs">美和町北中山</td><td className="px-3 py-2 text-xs">栗の木に出没痕跡とフンを発見</td><td className="px-3 py-2 text-xs">（※65）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>本日のデータからは、以下の3点のリスク要因が認められる。</p>
      <ul>
        <li>人口圏接近度: 兵庫県丹波市の住宅街で緊急銃猟が行われた事例をはじめ、宮城県気仙沼市の小学校周辺や市街地、埼玉県秩父市の運動公園付近や橋付近、静岡県富士宮市のバス停周辺など、人間の日常生活空間への接近が複数地域で確認されている。</li>
        <li>餌資源の利用: 新潟県柏崎市や山口県岩国市において栗の木周辺での糞や痕跡が報告されており、結実した堅果類などの餌資源を目的とした行動が明確に観察される。</li>
        <li>出没の時間帯と頭数構成: 福井県や奈良県などの記録では朝方から夕刻にかけての目撃が多く、群馬県嬬恋村での親子連れや埼玉県秩父市での3頭の出没など、複数頭で行動する個体群への遭遇事例も発生している。</li>
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
          <dd>2026年10月9日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-10</dd>
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
