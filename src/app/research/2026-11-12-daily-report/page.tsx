// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年11月12日 / mode: daily-report / 生成日: 2026-11-13
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-11-12-daily-report";
const TITLE = "2026年11月12日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年11月12日における国内のクマ関連事案は総件数35件が記録された。東京都で6件、福井県および京都府で各4件、群馬県で3件など本州各地で報告が相次いだほか、住宅街や団地、学校周辺など人生活圏への近接事例が確認されており、厳重な監視と警戒が必要である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-11-13",
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
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
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
      "title": "2026年11月12日 北海道名寄市 市街地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5mUkVDRDBpdExBMEZseUtuWnBYbUVOSWlhaFlqZ21wODRCalloMVFXYklHVDBpUlBUUXpQUXFDcFZaV3VpUzU2TDdrUGcwYU0tckM1UWlMcUhGMHUyMlMzUVVaeUQ1X3dBQk1aaGlQRE15ajNzLTJWb0ZxVVVRLXM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 広島県広島市 安佐北区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9TejdzNldIWE1ydjd4X2RucnhZaTd3cGxDTjJsRk5fQXRDaGE4UmVuYklKNW9DTGxhWHFOeVNqRTkzb1pRcTV5SjNqU1ZlbENuYVNLTEo3bkVMZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 山口県下松市 下松高校付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTFAweHoyM1h3Y0dabFhnLVVwUjVVNnF2aE5CZEJUSkdnTDU0TG12bktIYUw2RTVURlBlZUNITEIyako3OWQtRlhrVkN0WE5yVHpvM191dHlZQUdlcmw2RDdwQnV4d2lYN251azh2a0xNOXZ3cE5HLTZzaA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 山形県米沢市 杉の目町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBPMm9BZjVxcDVFelZzV2JfLWtpTjJsdDAxYVpvTXpILUFJU3p6YkRnQkgxVnZNdGF2T0Q3bllqMGl5M2FKMTBiaVJLbmtwQWtJS25tOEp4bEJ6S2FfSXMxVVJQdWpjYnJnVFFOQzFfUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 東京都あきる野市 小中野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOWnl6WGRrRmZ4ZUNYS0xGdU5seUx0S1FwZGZIbEkwbFdWanFkZ3NKaFZqVTBXdlJ1cHZYNk05ZXNkZ0p6X0hRZTdCNlJjaEVYWERTTFBrSzFpcFhkeWZVUU1ZSkItbUtxRldWUTVIZkVlY3FhdEt5LVdZMFBXcWFNd1ZHLXdKTF81SmcwcXpfX1doS3hYVVN4Tk85SzVsNjBBdnpoQWhCckcyOVZtSXhlQ0wzQTgySGtxdmtGMGxFeFg4cW9VRHdCVVJqSnMtQzRhdTVITUgwd2ZsLVpXcFNOSWxSRjdqTWlUTkNiOXVFTTBRd9IBogFBVV95cUxOSVd6UGdJUGRQdWg5bGdQTFM4QWhndUxMdTF4dFNHZnQycVd0V0pwX0hWLTNMcUNfNzZQSUk5TERvMGxPV3RsSXBTdktsS0V5VUpSd2ZuUldKYnpHNTlZcWotdTBrQWdGUFRTWUlheFBkMzlvNDd1M2hrN3JwcjFadkdza2VjMlh3VGtkUGYzaUE1REJZaExwQXJsNXlOa2l6ZlE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 東京都あきる野市 戸倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSmF6NFl5X3J1NUo0UHY5WkdYOGZpSnpWUnE2M1pKZ0ZKYlgwc2U3MkFYQnZwVkhVZnFmenNQaWJ1SUV6UndxbEdvWHl3QV8xZlFleUFkc3J4aWNPVnVxam0tbk00WUNhcnYyeXpKbHhzZjd4WU1tNEFJdTh6UnNRcnMtU04yZWNwYnhUTlI5blJyNGtaY0J0UXFUbFPSAaIBQVVfeXFMT0VGSHNmdHU0Q1FoQzIxZDJSbVVqR0dQcEt5TGZwYnByWnY5T2NNdU1EZWNNQzVodWllLVRFYWttXzM3eWtDMHBfa0ZwbGlXUUx5eXhOZjgxaWliOEl3M1VUVndyWHpEYloyRnFBVXhpMmRyYXBHZHJsWTZPTzNTQ1Y1Q3c3WFVMYlRFcG9fclhFRndDeXpDQjZEMVE3UFV2a053?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 東京都あきる野市 戸倉地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 東京都八王子市 小津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWjhBaDFsNm1JNDVCaWxPRVNRUGFVQ3J4WllFem1YWXVTNmtfeUU4enFvZmJHcjNXaUVVMmJSbE5od3FBSlczeDNmdElxeXRRcFpoSXVha1A5bGVJUVRmYjhsMm1tdk44UlZpM0lOUVNVX2lEZVhpaWVMZzFMZDMtTF9vXzJOamZLUGZISEQ1MmcyWlpQZ3dyN0s1dTDSAaIBQVVfeXFMTmZzYWg3b1VHWm5Rd0M0aXBBZENFNWZIR05wVWxEUzNLOGVMLVZCWUJGX1JVTHBtV3EyOF83WXlUSm1wTXNCcE9CYnI0ZDJqSFFMZVdCYlctb2hOWFdxb0p2ZkY5aHFYY09tX1ZOenhkZVNkTXpnWEZvb3QzZFRWVmxuOW42eEtfQ05VbjA3V2hpd3c5bHF5MDJsdU1OQ29zU0lR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 東京都八王子市 上恩方町の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 群馬県中之条町 折田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZlhUZ1A3RmVfbWpZQTBNOWZiQ2dsOWZIcjdiQVhVTjlUTWhndzlMVU1hcWJSSEdVVnNuNG9NcV9YUWFiZ1g2U1hIai1ncDZKTWpzMXdSYnA5M3k2THNIWFM5UmRJZFE4UEtUMVE4dVVDVU5Qbms2VW9QQ0dzUVpXVHpJZWdnU2FpTlVuaVljRTJNcnhBQjNqbkVyUkfSAaIBQVVfeXFMTVNkTXk5cThMMDNLUzQwSG44S3U0TWdwMU1mTkRzTUhBX1hWc0xLLXBVUXlfQ0J0TExTOFJoXzFtY20ya1VqcEZFWHRWQXEyRG84UFRFa2MybVU5eWtBdkE4VFh2dnVlZ2FadDBKdmp4WGhPaWNUVFpSWXZaMWxYOXVJSDBTUm4wNlRUbTJjTFlQTTJtVF9sY0J5T0ZVNkZhWGlB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 群馬県中之条町 中之条町大字折田　ガーデンズ入口信号から成田へ登る町道の途中の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 群馬県前橋市 鼻毛石町と河原浜町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE42dFJBVDZ1Z3lTZ1JwTlh5LUxNLUxmNlM1eUFkZ3ZNa2tyQklrUThuSTlFSk82VE5JYVFqeXZGX2NndW1Pa2RZVEFMdXo5LS04WjJkT2VGRFhPdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 埼玉県秩父市 田村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNS2pYLW95aVZFNEJQN0NIOHd4d0x6SUVXcWgtUkxRWmNOcFZBektPSXlFaTRuQzZybWRJSXFLekhrRzNneU14UElkemVGZ0pCZ1lBd1lTanl3dlVmQzBRekVnVEphSDJUWEQtR0lhNHo1WEN6NGlOZ19wWS1PRXBDTHBQMElDWmxpTjZVajhQeVFFMXM3c2tRd21vTXDSAaIBQVVfeXFMT0o0TGJ0eGVYdmRmYnRTSzhMQ3JfU2szOTNKOU45ZnJWY1RuaFh0UEE2bGNPbTFQMHhOY25SNWlOaWVtdkFfZzZzbTV0U2RZLVB4dkxNd0pJNmdEWjBxSzMtb0dzREZXWmZwMnh0NUM2SUFDVWdmQTlXbXEzYTJyNWFVMWUtZXFfMzdIRV9yYTZiTHFyOEdNRkpKSDNMdjY0UlZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 埼玉県秩父市 田村地内秩父太平洋セメント音楽堂北西150ｍ付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 神奈川県厚木市 飯山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVmdvSE42b0JVLVNseG1VeHFqRXQ0Tjd5czlvOW1mS1VZWjJ4WnJVZkFETkpRWWM5Snl4WEdjcldOd3NjSFdVOENvNHVwVU9XU2gxWGs0aHBreUkzXzE5UWtjZnhoR0NjZGZQUjhzQUI4Wmg5TEFLbnlocmNneDh5bW0xaXowemJwMWJGeWdfVGVGaV9sWDI1R3QxTG3SAaIBQVVfeXFMTVVNZG5mOHdZVnFwNE8zZDNfZnV5Ml9vQjlrMGFueVVJZnk3THlqNUplVkdRakd1SzlXRnZMTEVlQ3NVSWdTdXFvVzMwR2s3QmZ0RjJhdEM4VHZRTnZKdHJ0aUxSMnNtd25PNGpXNEF3bEVPTnpOWUhUdjBVZENJSlU0V2x3bHVEUC1mTkVVWWxobDFVSXJ5QVdYdWU1dHdIY0RR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 神奈川県松田町 萱沼地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 栃木県日光市の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 福井県越前市 岡本町の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 福井県小浜市 三分一の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 福井県小浜市 中井上中井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxORnJYRlJGVTNjUDRVYWtjcEozejU4ZTEybmlmbmdsX2hKd2pWREcxQXFlZHMtNENubEVycUhjc1BRX1ZnV1E0WThTN0trVkJ0dWdQTmhUMDhMS2VnLTRMTmxMUmFXOFhTTF9CVlNzZy1PdC00bllMZjdpRjgzYzZCRkZRUDN3bmFPY0lwX25TcXVTVU5xalNjMnVJeVTSAaIBQVVfeXFMT1p4My16NDJKY2RKVTBydi1IZkt1RWE5TzhzUU9zYThfODNLMkh4TkViZjJUcGZHcHhKUmtNZXp3X1pKak9sanhpb0ZSR0FJaHBqU2p3Vks1ZVJnQVUxdXQ3TUlEQjlIQXRERWZHZGNnS01qTUZuWXdjZ2xoV1VjWmFScl9lamVaWnU0M2NKMC15UzFEeFdrT0xGOHl2N1BIVVhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 福井県小浜市 上中井の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 新潟県南魚沼市 大沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 京都府京丹後市 弥栄町黒部の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOY0pjOU4xUWV4TGUzYlhfQWRnNk52Q2QtSDRjQk5UNFphV2VWLTVGMmJRWEk0cXVTczREZlVQR3hDaXhSUU9qT2RZcUVLQ2NnUDVIZXRiaDhUM2dmMUVDSjFuU2hJcTdVSE9ZMUkwUnJ5Um9Fa3NrUUFXVWNXUkVQZGk2NzZheWxNWEVLcnpzTm82YVZIRy1xYmIxUU3SAaIBQVVfeXFMT004VHNVa0paVzVUR295ekpFd01IY2U5dmtvZ2pfQUt6cHg5Y054dW5QX1puSWJVQWZIakNlOS1tcnZSM2k3UlNGRUpwNW0xY3paREhZVzJVY056LVViZXBoMTJFYUlrZHdKODhZcS1UaTk3VGVENVNlZmlxQVlTRjV1bFFJa3M4OVZvQ0FLbmljRzVPdFAwM0xIYnNuSjdTNEhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 京都府京丹後市 大宮町三坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPY2w1TXdGOHM0R0VOaWo1UWFLc0VCLW1ZbElxWk1hcU8wTktHVXVzSG1uTFpiTkcyMV9SYUcwWHdPZ3hVc2FVcmxtNTBJaV9rXzFHY2FseEI0cUtqN1hDRDZEOGRldVVEMzZsVF9mSWZGaVZTUzU3ME9haHMwX3VrTWNubE9tbHUyRUdZQWRtYVdsYWduNkxjay0xdjjSAaIBQVVfeXFMTXlfdnBDWDR6Mkd0Y3JzeDlpT2ZLWGZnNl9xaGtIMURPTTRsRno3S1VRSTBSWWVVN0RLSlFRV2dxOWNKTkU2R09yWDMydnRkd0gxbFEwZ0duWFlQRUlmMTczVkJtakdMLTdnX0xXZjIzSWIwbzFpMERUeGpOUHJOdl9EUmFMXzhSQzBYMFY0Qzc3dy1ybHkzZlo4MC1QOWtXeDV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 京都府南丹市 日吉町佐々江の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOd19UV0hZcHAyX1NYcHpYWXpLWnk3anAxTnVLU1Y2eHVEOHNEY0J4MkVkWWF5SU1SUmFHQzd4ajA1SjAtdmo5dEUyWjNRZHd3S2FYWHozWEJWMnJ2SGdtVGJ0X2pMUEgtRjE3VGc0UkdRcmNUb0w2SFRtemV4QjQwQU95SVlMNFhmcGxZdXhEQ1B6RXlSOFZscWFDMXfSAaIBQVVfeXFMT1F2X0d2b2lkU3RrdEQ3RFo1b2RZczRyMmNrLU5aSlVoa284blBIWVBIT0tsUHhYU2tfOGpBVTViMjF3Rm42RktCRnFlNHRIRlFtODc0djNzaDJhNnZIN0dyMnlHck05eGt4eUhmeElzR0RGTnNZanhYYmdZTldZelMwSkN4TUJ6SFVBSFctMmZ2UG90QURzc2p2eUxjRmFoMkRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 京都府舞鶴市 大波下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVTgzeGZIUzk5RWF0cThGS1VWNDZiUE5IMl83RXZLY3VXbG5hTU9PVnpZUGF2dE1HOW83WEVsMTlvM3NKaXQ5b1N5dnBCRlVmTUZsVTVmQW1fVGgxUXdCQ0psc1ZWazhnNFdYeTlxMHNxR0w1YkMwRFJUX1RPZ1dGTUJNV3kta0pFSFplUHJJT3ptSEpzYW53S20xSEjSAaIBQVVfeXFMUFJqVUdJRWFiUWVnS0M1S2RNc1FMajIta2VBWngzRlpaclcycWpmc3VtV1ROREU1N0NmVlA4TGdFOFhBbHhUMlBCdHNoX25WWWg5WVB4MEhfeE5iWVNtc0psbTR6WXZhUVF1WnhQcUh5VTZySmNyQXhPTUxkdGd0SzBCX2VwM1FEbndlWnhVd0xrZGRjanI5UktFeXE4SWpSVTN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 兵庫県朝来市 山東町粟鹿の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOVS10akwxdVhpQUdXOFJVeVh0QVRheHVGMmdmMENEVHhtQ3kxeE42d0xGTVRMQjJMNFRVbFhiYVhoX0F5RnZMY3pndmJyNWc4UGp5SjE0eE1weVdGMTVRNXl2cHQxMUw2YVVJSXdJV3hNUkVpMmhsUmxyX19aNzd4YUc2a2hJcGE3ME4yYWN0LUt5RnVKRFpoVGRJQVpJUzBjblRRS3ByNENwUldtaGs3TXVfTTNGTkswckRxWlQ1UmJLSXVzLUx0X3BiV2J1X2ZBMFo0RFAyNkJxQ0N6NjAwSkFwOTNka2lKWWduS2RSMHFZd9IBogFBVV95cUxNN3N4Wm8zbU1KWDNBV1BybDBzMDBNaXNTNlp6VnoxXzB6UDdrd3VZNlhaTV9hRGp2QnQ1NUxqMGRoUzlhazVVVV9idWFVNDU0MzJXY285X1Z3M2Y0VUxFVzJkZ3gtZWVWYXlnaFBZTDh0R1h2elVyMmF3MnFBZXRSOGg2Vkg3MkFqUVE1Q2M1NjQ0cGc4eVRERUQtbld5ZHBRQ0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 兵庫県新温泉町 辺地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMmM3Mmp1Z21BMy1JbzBtbi1uaGFBbkdpclpRbkp4bDR5N3RCNEpFM1g5RDl1cGtubEp4ZExhNGpEcXVlb1JZM1VKZDROQ0dRY0s3OGxZRlFocFJkMy00bkh4X3RtNGc4X3J1cElWQ2o5ekxuVDNmOU5LeXQ4ZzYza2hiRkVVWWFTbld4TDF2czhoSmM5NEpHcERwdE_SAaIBQVVfeXFMTkpGdndUbXp1TUVyR2h1UVlrMFRrOGg0UXRJMlRYMlZYdXhCenhERmNRVnVWekNYcWwycGRsOXRJbXVQOXB0T01ZWlN6ZVhlelhfeFJTSF9ZRWxfMWdDblVUZ1ExSFNDQ1hQSm1zdTlfUmNxeFg2aV9saVVpWHIxLXdGOVM5d2dZU1ZiZmt1WlZoVUlZaHE2bkhsN0hyZkk2MDRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 滋賀県高島市 マキノ町牧野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOdHAwM1p5Y241aUIwLUhnYk9ndmMxZG1pSG5JSWthRENRX1lYc0E4ckswUVBUOHk2RzdoMENtbDJ2b0s4UWNxRUV5NXpzRUUxT01pZUlhSUlzbjJBX1l4LWpSc3RIcTZ4YnlMQklaZEVxaXlsbmRrYXNjdGZXd1MwR1ZOZXhjRThkSTFVRUxHVFNVYkFXR0FDWTZzS19TZ1dhUGU0WGsyMmNrRTcwTGpzNUNNQkFlQ21FbW9kOGgyWDhZa01qbHZaNnFTOG92NVNLRWFVR3YzcUFvSDlCUkNEbFhaZHI5NFQ4V1ZYeVV4RG9JUdIBogFBVV95cUxPNTdjRl9ONkxzb2xoSjB4cVVfLVNESmVkU1J2Mld3NGxxbFM2R0duZm1vX3JHR3B6UGk4VVVZQk5GcTIzYVZWaDdVT0ZtLWJsWjRROHcxVEJYVGswWjd2NmxHaGhuSkc3bS1XTm9FcHdCdXhpckFLWHU5Qm16czFibEhiVHMzUXdZbC16dUdzYm9UVEN2YkttLWxzSEdwYktwYlE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 島根県益田市 匹見町道川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdHM4X1A3RV8zTHJDSnc0cTlTS1hNcDBCX1BVeVl2eGVzSTFmZGsxTUp4eERyblpvdFZmaEE5OGR1M2YtVWJYMEtpZ0J1dzlHMUt2NVQ3cEN4UzB0UHJBV09jbzZOaWNvc29lVXQ2NUM4ZGdFZ1VCYzR4M01QM3pLRHJReGt1RldQT2dFMVVtbGNCLUtndEpUVkNRelPSAaIBQVVfeXFMUGU2ajRhSnFSdTVENjdFNF9LUlNHektQRVZWTC1pZ0FtLUJsQi0zaERGM0RwNkE5dmNWSXBnN0JrSFQ0c3EwSjhhLTd6aE9DUm40NERZOU9YbmFIR21FRjNVWDYwREdmYmZfcFRxQ3VWSXBGMmdqV0NDeHRSaXlmME93cEZvemxFY3kwS0V0OUpZNlJLLWh6Ymc1Vy1xak15RG1R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 島根県益田市 益田市匹見町道川の道川八幡宮から県道波佐匹見線を南に500メートル付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月12日 山口県岩国市 周東町祖生小祖生畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQb3l1czd3SW93R3Itd2VRS1dtWjZLWW5aM2VwNm1STHBYTzlWaGZvSTRiUFZ1b2wyWThocGdfRFFNM2R2eWM3X2pjanhTSjlQSldPNVoxdVlRdmgwNlZPRTdQejRqNmswOWN2N2I4SzktTDByT21yWlVhSW5HeFVhdEJxY2k0SWFVYzNndW44RFN5TnlRTmpwSTZmbmLSAaIBQVVfeXFMTnBCVGNOWGJURmdtU1I4Q1JWNlEzZlRlZ09fOEM2d2U1blN1eDdYWjJUM1dPLXd3LWlxOVhlOHNHa0VNcTY3WUkyejVkUVhLU0gwakdJTTRoZ3Z6YXh2c25XX1NIOGZkZzljeW42Y21XYUtNMHN6cC1GVWpEMC0zZFdqM2F1SWVrdS12NnBGUzNiSUoyNDI3akQ0dnZPNGJ3X1dR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 広島県安芸太田町 加計の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOLTJIMXZEUUJKUGF0VG1GTk1GSmFpRkI3aUZXZzZIT2ExeHIycloxQ0ZTdmkwc3diUWhkY3VmMVk4NDM1U05TakVtOTZMeVpNOC1YcXRUemxZSUtmcDFaNUpoajl6WEVjQkNPWjB6N2hYNGlaZi1JcDZuZkk4ZUk5cHIwNlBXVktzWUZYT1U1b0ZCRzlkZTVIYXUxQXjSAaIBQVVfeXFMTmVUa0I2YlJBaWdSSGhoME1oXzRuS1RsNk1SUURPLUExbngydEFQUUNCNWR4TU5SOHgyZzJzRko2amIyU1NSX2s5QmhxZEJsYmhieVpPY2ZlTUJNeDl2cGdseXpOMG5DYVBJeXg2RXZjWHltWk9Ic3RuRjJ6bmxtSHJ4YnlFWlc1R1NKYktMUmh0YTMzZjhQWTlmbUNJRHE5ZHdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月12日 岡山県新見市 足立の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQR2hfbDZldnBYbWJBQVQzM1lSNERjM1B4aXI0YjF2UFF2cm1yVTJkNlJOR01RVzRUTjl3U0V0YXYyS1UtTzZGQWdHSm9oSk40b2FRaVJ2Qzd3SFNuQWVzUjItcnRZQ25KbEVDQlhHMUhqdGFlYjlYY0s0WEFUakEzdHNCYUxhdWlPMjBISk1nM0thUVY4NW92emo5ejfSAaIBQVVfeXFMT2ZaQmhvRk1aOUtvZDhsSmxVcjJPQWpPb19ndFRBTDJrNmNmWUdrVElXMnJpNmtobGdzM3p5SzAxSVBVc0FqdXpsY04wazlMR1FCNXFkZ1ZYTk94anFyeDFEM0RINVJkWEJLaDB5am5faHp1NXRzanpGTHE2S1ViRm41R1dfdDY1MTdXSDR1SDl2Zko4Wmt6SUstRjJoTkJkN0xn?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"東京都","count":6},{"pref":"福井県","count":4},{"pref":"京都府","count":4},{"pref":"群馬県","count":3},{"pref":"埼玉県","count":2},{"pref":"島根県","count":2},{"pref":"神奈川県","count":2},{"pref":"山口県","count":2},{"pref":"兵庫県","count":2},{"pref":"広島県","count":2},{"pref":"新潟県","count":1},{"pref":"栃木県","count":1},{"pref":"北海道","count":1},{"pref":"滋賀県","count":1},{"pref":"岡山県","count":1},{"pref":"山形県","count":1}];

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
        <span>対象期間: 2026年11月12日</span>
        <span>·</span>
        <span>公開: 2026-11-13</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={35}
        periodLabel={"2026年11月12日"}
      />

      <h2>生活圏近接および主要な出没事案の分析</h2>
      <p>2026年11月12日に確認された記録では、市街地や住宅団地、教育施設付近といった人生活空間への近接が複数地点で確認された。北海道名寄市の市街地では、住宅街においてクマの足跡が発見されたと報じられた（※1）。また、広島県広島市安佐北区では団地においてクマ2頭が目撃される事案が発生している（※2）。複数頭がまとまって住宅地至近に侵入している状況は、人との偶発的接触リスクを大幅に高める要因となる。</p>
      <p>さらに山口県下松市では、下松高校付近および駐輪場近くにおいてクマが出没した可能性がある事案が報告された（※3）。学校施設や通学路周辺への接近は住民生活および学生の移動における安全確保上の懸念材料であり、現地における速やかな情報伝達が求められる状況である。</p>
      <h2>地域別の出没状況と傾向</h2>
      <h3>北海道および東北地方</h3>
      <p>北海道では名寄市市街地の住宅街においてクマの足跡が確認されたと報じられている（※1）。東北地方においては、山形県米沢市杉の目町でクマの目撃が1件記録された（※4）。</p>
      <h3>関東地方</h3>
      <p>関東地方では東京都を中心に広範囲で出没や痕跡の確認が相次いだ。東京都では計6件が計上されており、あきる野市小中野での出没の可能性（※5）、戸倉地区での成獣等の目撃（※6・7）、八王子市小津町での出没（※8）、上恩方町でのクマの痕跡確認（※9）などが記録されている。</p>
      <p>群馬県では計3件が記録され、中之条町大字折田のガーデンズ入口信号から成田へ登る町道の途中などで成獣の出没が確認されたほか（※10・11）、前橋市鼻毛石町および河原浜町においてクマが目撃されたと報じられた（※12）。埼玉県では計2件であり、秩父市田村の秩父太平洋セメント音楽堂北西150メートル付近などで地元住民による目撃があった（※13・14）。神奈川県では計2件となり、厚木市飯山での出没（※15）および松田町萱沼地区付近での目撃（※16）が報告された。栃木県においても日光市で事案が記録されている（※17）。</p>
      <h3>中部地方</h3>
      <p>中部地方では福井県で4件の出没が記録された。越前市岡本町では午前6時00分ごろに成獣1頭が目撃された（※18）。小浜市では三分一にて午後4時20分ごろに成獣1頭が目撃され（※19）、中井上中井（上中井）においても午後5時30分ごろに成獣1頭の出没および目撃が報告されている（※20・21）。新潟県では南魚沼市大沢において体長不明のクマの糞が確認された（※22）。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では京都府で4件、兵庫県で2件の事案が集計されている。京都府では京丹後市弥栄町黒部（※23）および大宮町三坂（※24）、南丹市日吉町佐々江（※25）、舞鶴市大波下（※26）でそれぞれクマが出没した。兵庫県では朝来市山東町粟鹿で出没痕跡が確認されたほか（※27）、新温泉町辺地でクマの出没があった（※28）。滋賀県でも高島市マキノ町牧野で出没が確認されている（※29）。</p>
      <h3>中国地方</h3>
      <p>中国地方では島根県、山口県、広島県で各2件が記録されている。島根県益田市匹見町道川では、道川八幡宮から県道波佐匹見線を南に500メートル付近において午後4時40分ごろに1頭が出没した（※30・31）。山口県では岩国市周東町祖生小祖生畑で出没痕跡が確認され（※32）、下松市の下松高校付近で出没の可能性が報告された（※3）。広島県では安芸太田町加計での出没の可能性（※33）に加え、前述の広島市安佐北区の団地におけるクマ2頭の目撃が記録された（※2）。岡山県でも新見市足立（足田）で出没の可能性が記録されている（※34）。</p>
      <h3>四国および九州地方</h3>
      <p>四国地方および九州地方における当日の出没記録は存在しない。</p>
      <h2>主要な出没および痕跡確認記録の一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市区町村 / 地点</th>
              <th className="px-3 py-2">事案内容</th>
              <th className="px-3 py-2">記録ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">名寄市 市街地</td><td className="px-3 py-2 text-xs">住宅街でクマの足跡が確認されたと報道</td><td className="px-3 py-2 text-xs">（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">中之条町 折田</td><td className="px-3 py-2 text-xs">町道途中などで成獣の出没を確認</td><td className="px-3 py-2 text-xs">（※10・11）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">前橋市 鼻毛石町・河原浜町</td><td className="px-3 py-2 text-xs">クマの目撃が報じられる</td><td className="px-3 py-2 text-xs">（※12）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">秩父市 田村</td><td className="px-3 py-2 text-xs">セメント音楽堂北西付近で住民による目撃</td><td className="px-3 py-2 text-xs">（※13・14）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">あきる野市 戸倉地区</td><td className="px-3 py-2 text-xs">クマの目撃</td><td className="px-3 py-2 text-xs">（※6・7）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">越前市 岡本町</td><td className="px-3 py-2 text-xs">午前6時に成獣1頭を目撃</td><td className="px-3 py-2 text-xs">（※18）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">小浜市 上中井</td><td className="px-3 py-2 text-xs">午後5時30分に成獣1頭を目撃</td><td className="px-3 py-2 text-xs">（※20・21）</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">京丹後市 弥栄町・大宮町</td><td className="px-3 py-2 text-xs">各地区で出没</td><td className="px-3 py-2 text-xs">（※23・24）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市 匹見町道川</td><td className="px-3 py-2 text-xs">午後4時40分に県道付近で1頭目撃</td><td className="px-3 py-2 text-xs">（※30・31）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">広島県</td><td className="px-3 py-2 text-xs">広島市 安佐北区</td><td className="px-3 py-2 text-xs">団地においてクマ2頭を目撃</td><td className="px-3 py-2 text-xs">（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">下松市 下松高校付近</td><td className="px-3 py-2 text-xs">駐輪場近くでクマ出没の可能性</td><td className="px-3 py-2 text-xs">（※3）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>2026年11月12日に得られたデータに基づき、以下の観点からリスク状況を整理する。</p>
      <ul>
        <li>人口圏・生活空間への接近度: 北海道名寄市の住宅街における足跡、広島市安佐北区の団地における2頭の目撃、山口県下松市の下松高校駐輪場付近での出没の可能性など、日常生活圏および都市的環境への侵入が確認されている。通勤・通学時間帯や住民の活動域における鉢合わせリスクが顕著である。</li>
        <li>時間帯および個体特性: 福井県越前市での早朝（午前6時00分）や小浜市での夕刻（午後4時20分、午後5時30分）、島根県益田市での夕刻（午後4時40分）など、薄明・薄暮時間帯を中心とした成獣の行動が記録されている。視界が低下する時間帯での警戒体制が必要である。</li>
        <li>出没の広域性と空間的偏在: 総件数35件のうち東京都が6件、福井県および京都府が各4件、群馬県が3件と、関東や中部、近畿を中心に高密度な報告が寄せられている。山沿いのみならず里山周辺の町道や集落内でも目撃・痕跡確認が継続している。</li>
        <li>痕跡による潜在的生息の確認: 新潟県南魚沼市における糞の発見や、東京都八王子市、兵庫県朝来市、山口県岩国市における出没痕跡の確認など、直接目撃に至らないものの生息・通過を示す兆候が複数地域で捉えられている。</li>
      </ul>
      <p>以上の状況から、11月中旬の当期においては、住宅地や教育施設、幹線道路周辺を含む人活動域への接近事案が断続的に発生している。地域住民による目撃情報の迅速な集約と共有、生活圏周辺における痕跡調査の継続が重要である。</p>

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
          <dd>2026年11月12日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-11-13</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-11-13</dd>
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
