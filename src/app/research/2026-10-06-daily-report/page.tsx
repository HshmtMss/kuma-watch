// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月6日 / mode: daily-report / 生成日: 2026-10-07
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-06-daily-report";
const TITLE = "2026年10月6日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月6日の国内におけるクマ関連事案は総件数83件に達した。和歌山県での緊急銃猟の実施や奈良県における学校の臨時休校など生活圏への強い影響が確認されたほか、山口県や北海道、東北地方を中心に全国規模で出没や農作物等の被害が記録されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-07",
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
  datePublished: "2026-10-07",
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
      "title": "2026年10月6日 和歌山県古座川町 不明の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5ibExldUY1eEdFbFZOclVDaVJYQTVYZGFOOUkxcVFJS3FoeHhjZkVRQkEzY2ZSaXlVZ2Q4azVtS0FnWGkzTFlOVlZnUTA5aUNCeEpqVElhcnJYd3pYLU5jRTlvb0hHLTgyN0dDR1VSQ1dwSEZ6U1VZRDczUG9HM3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 奈良県曽爾村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNMFh3WTFWcEFoNUxsMHE3VjJocThFZDNWZjJFSzdXMldlZkZtTU8tNlJJVDNhNjJxS21MUmJGNmhINEdSb2RkdzY1V3BHaWo3SVNJd1VzVy1GMmFjOHZHVDl2em1mcnhsVmdFTmpPck9ZSHJlaFFhYVFCZDhxanQ3ZEhQN0hBU2tSNDlGd2R3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 秋田県由利本荘市 岩城内道川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQT2FEMjlXdHBzUlFZTzlRVl9WcUVxTjRPZkdpWkNFclpkZzAzM1YtanZQMXFUX0FnalpRaW9xbUlXVzlfMUdoZHQ5S1BTZzV2ZFFMN0x2UXplUk5McFlSeUhlVW1OYTBsYWRrcUFUNVA2OHREdDQ5YkZqYW9iQ3ZHLWVnVlNVUFVfMFZsNlBqbXdweHhzcHg4SExLMHpMRy1PYlhWNFJDbTdWT29FdXlMN1NkbW03a284MXJlUnhKVG5JODhZZEF3c3UtUGkwZEVV0gGAAUFVX3lxTE82NllBQUpGX3NjWmdqMDN2OHB4LWIyWWlvQWtGUWI5UlpqRXQ5WWhrOUNWVENMeW1xQnA1NG9qUjFBd2lLeFBzZ3FON3NEOG5oVnFmUTNXcnY4VHhqamJ5MjFmLWdtWllTbUFWUlV4cjVuX05oakY2TUs2YlNOdGY2?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 秋田県秋田市 千秋公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPb0loZDdidDdCdzJ1Y2JBOWk2aG83VHlEaF92UmdQSkFCUDBacE5udGhnUklQbXp6U3ZlNWo5WDNVZzRXNDc4dDQyTEJiR3VPRXBFRlJuRGZjUjhiMlVUVk1zb0Y3QXQzWkw5bktDYTlpeEpnM0xRZ0hUTC1OR2JEVzFlY2I3SG9zTjlRemdQRmp6bUEtcmJBYmxLZm3SAaIBQVVfeXFMT1h2U1RZUzNINml2ZGRiWlpZcm5SVU1KYXpzYk51cFJTYW0tRDNIWHgzTG5ONVQ0UnBFajZ2allPYU1WWTV6MTZhMnhKRXBzR0VOYmtoSGthMDRUaFYxODZfd0tlTTVYSFB1Y3NSYUc2WEU4VEg0VlBrOEJ0d3ZjQ3hXWDduR3hKcVMtMVRxYXZIRnpNdnNhZXhFUzNxaTZLb3Vn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 秋田県秋田市 千秋矢留町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNRUdtSHFVSldWZ1U4T051dXpyelpSem90V3hoSHpoME1xTlN5MjFDUVBaLXdYalBqZnhtV0U2VnNYa2VPZDcybmV5RV9UNXJNSUVrWG1rX0R4ZHpreW10bWJOTjRfaGdSR2t0RnJyd2dWTXpFSFkyZ1Z5ZE5yTGRvUE9MSlhqQWtVa0lTdDFXLTUtSEU5Nm5PZGxDYm1fUkEwU0pxeUJvWUF2MV9aNTV4NWx1b2JyYU44RG9keVpOWUJybndtMlJpTVVWOTY1S1lFdlg5WkFSN2VSZm9FdlhOUmdWdTZUQnZZa2NxMk0xNjFFUdIBogFBVV95cUxPVVF4cUVLeXRNZHNsNWRQa25RdkYtSE5RbzltQmQ2Z3BrNUFrQ3l1Yk00MGhjTkRUcGNCTkdSMFplemgwUnV5bHctQlpYeWlua3J4WUE2dzF6QUlEeFo5VDRSeWhJNThibU84MWVZNVptejZnSWlyNmpRY0ZGUGw4djhzako1Zm0xR29hdS1UazBqak1yZTkxeWNhT2Zqa2dTNHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 岩手県盛岡市 県立博物館駐車場の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE0xRU1jc2IwbkNtLUE5SmFfWUs4aU8wYWU0alFNdjhzMHgybXF3VFhPb2pYSTBtd2NzTG1NRmRsdjRLSkMwUmFQZXFkUWRmd2R4NHNyN0ZwTzU1Ql94RUFhYk9BR0VWQjV0aW4yakFWdU5EZmhaRlpERWxzUWJZYzQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 岩手県盛岡市 上田松屋敷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOOVZZSUltSjFKcG1EWWFCTXNmV3Vsbnh6d3llMGQ4VWl6OEtqczQyWlpqcFhLUno3QzBoQ2VYdFJadXBXSktyTHdEZ085LThrVWdxYjcwZG54UkRoMF9QZ3hoRTg1azVpRGZjSGNxT2ZxbUlaUk5ZeVJ2R0R6UWwwU3UxS09ZenFWU1pPUmNWZ20yem01Tk9tWUQ4X2RYdllZZVpXdklGM2wwV1h6SXZR0gGiAUFVX3lxTFBZX0lFaW82YXBCeElSeXE2NWtYMWRBMkFERWc3eDVhekJCSzRBSDJ2OEcwQVVvaVNJUV85Qk9fQkEza0JxREhtNkk0czdfWWpLQUY5Zkh2aHl6UWFvdS13SXN6TVBfdnhCMzFRSDNWQURLMFlGZWt3dzJLMXJKNEJibGhWUXZObmxsZW1rZS1sd1kwdzQxV3pvQmZYcldHbG5Mdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 岩手県盛岡市 高松の神社付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQT0lNQ0FDdzFxbldmY3FjQmczNzhJU0lxdjlLZUdLdnhOckdfeXN6Q0UxQ1FxSE9oQjZpeUQ1dmlwTkdYM0tSaVJjcnBhTlRlbm1BZHdGNHd3S2gwUFB3NE9hWkpSMm9JN0hfRmxFQS1oc2pxY1NpNkVGRHZSaVlQRkNQRWY0Vmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 群馬県藤岡市 藤岡市坂原北久地域の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 山口県周南市 莇地の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 山口県周南市 大字莇地の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 北海道函館市 釜谷町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQjU2WUsxdTNzdHJFT2l2WEFCQWZLR3M4QTFQTC05T0RvamREblkzcFF0WnppaF84dDdXTUZlNlhmeVNEMXI0S2g4cFZFVkoxbkZkTDNMNjhmTGpEbEg2N2xvNnV0NXp3Mkg1VDVLTnJzRUxZTW1TVmdIV2M3TW5GZjFkdUh1SW1wUmVvamptTVJ2MEhCdHc2U0ctY0_SAaIBQVVfeXFMTWtQTkRHSGpPd0steFNZQkh6d0xBRS1uZDZSLW96UTFyNlpibTBtX2k1MkNxcVNWMjhkWkRORGtsbnpBODBTYkdnTDRlTlRMV2xfbWNzNHhHQU1YNzJQaEhaU1Nfc1M0YksydVhCQnp1VEM0WWk4R2tjeGxBM1MyMkVfZlM5dl9HNWVscEl0T0JWSlZRMXR2R19oNERzQjJ1THhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 北海道新得町 栄町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdkZKb3JQNWlrTHBKVFNvS2NValdnRXMzTl9PTnpGOTNuRnZGVGhmNnVzdFIteTB1SXJkY1RFOHFUQTN5R1FER1A4YmpocEhCeTBoSkhEMjdIZDZZWVNBaFhGRGY4akF4bVVqTF93LWRlVlRnZjkwOE1HWlp6QkR6SVBTZVZRSDRrRmJyN3VlNlNwRjBWRXRrMlYxaHDSAaIBQVVfeXFMTVhDN2JTU08wVkc4dU9JbVZ5QXdIX3hkc05GMGNyY3FoVnp5M0NLQWhMUFFiN0FzbFBuamFHNHdzZXRhWXNaNmd6NEdQaGdNNElVVXgzdXFfbEFpN0YxUUtZcjRoMmE3cmJaeHg4Y05HRjZXMVZuQ2l3Nzd3T0lVMGptcDUwbGhBQ0dtRF9jQ0dHUlhDeXpqZ0ZVYXhGN3FsdE1R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 北海道遠軽町 瀬戸瀬東町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTEZRYTNhVHNXQnlybFNEZzJacG9LSkpJRmNFRmdnZWZKUDl6NkNRMlZCR3kxYm52enRCVHVGUzJpT0U5ZmxNXzB0M0I0VFVSRkJQQk1iNnpYRnBZMkttUGF1UUhHTVpJTjlyY1hKVlVIX3M3VFlfVHoxTjZKZDdleFRPQXI5ejhhdmZodWJCZ1lTZV9HRlNKV2NGeV_SAaIBQVVfeXFMTXdiSzFDSC1Mb3BTVTRqS1o2T0RBbXdNTWsyN3dPVVJIMUZPMUVjeEJmZkZSUHA0WkhtcW9URmhSbE0wUFlCb1VkeW1jX185Q0I5ZDREVWQ1T1Q4WjU3bkhkS2R6VHc3SFRVQzR0SUdiN2hreE5BcVlnUHdKb2xUdmZ0bC1yQjJGRnRiZDNXb05wZEZadnV5ZW5TbndDUThBWG5B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 北海道仁木町 大江1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVlFKZUFRZ3BwY0xKdUZWc2ZTdmJfVjVMalpHMFcwczhxSlFTNzFZWjNDMU50NHplNzVEUl83OV9uVkdsempPa05ZVmdDbjZKbHh4M0s5cm1Xc1BQRlhTOFc4Z0FubGxBUHdzRVVvT3ozd3JWbjVJNDRfOTM5bFh1d005T01FTnZTaXhqeHFnZmg5MmhxRy1RaWZfSTXSAaIBQVVfeXFMTW95bEVTVUdWUkZxYV9Wb01QeWZrVFBHXzhXT3pWRGtoMnBIMGVDU3JveWJZWVVWS3NBV0lVOTJka2gyaWdtdWRnU05DZ2NXeUN6OElZTmplMzA0T1VjNlB3UkU3TTFwekxqTy03WGlPdGk3S1JpYURSYUtlVXppYi1yWW9DNGE3VTNZVm8xMFJ3c2REdFJsdWVyZmNpVm9YeWNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 北海道黒松内町 黒松内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPdnNyLWdjbkI2RTFuaXRoM2JsVGtjdENWY2oyc19UbzM0eXl4YnhDcm02WGg1Q2VoRlA1MkNBQWhBS0cxbEJnS2N4aEgzYXdkeVRtdHo3SVRQSEdfX2lKdVZjdzNvdjNDblYxYWo3SjFlSi1pbVBza2R1d1pqRV9QeW80SVE0NEwtVjg2QllTVm5oeXpkemQxb05pNFZDb0VHZC1BTTc4aG5mYWxnSlB0VUx3ZXEwWGFkUXBZUXFlRHM3MzFlWVVkV00tak9hZmcwZG1vdlo0bU1IVDNDa3o4TVROZnM1cTZQaTNJR0g4SGVtQdIBogFBVV95cUxObUlCajdXdjN0VzVzcF8xWVhubnBORE1RQnc0clhqNEJibHZNM1h3eWVlQVFpYTZVTDN6SGhMbGxwREhtUlp5YVVXMldQSlZRRGk0MklqaVl1WUFEVWFQQTJjeFF4aE16MDR6OE1pS2JjRTVLQjNkaG1RdUhNeDRlMU1hOXZzOGlINEo4Z1pUUkRSa3BOOU9iWTZTM2M3d2tBdHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 青森県十和田市 米田字長台の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 岩手県奥州市 前沢新城の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTjBTT2tWZ1Z4M1Q0RkJTYXJXWUcxeHViRkJxOFZsdEJHdml0VUlQejFNUEtoRnJxZ0RSWkpvN3diQldNOEpsZ0Z5YW1lZjBSVlZ6aEwwYXBrTlJjZ0RvbHJlYVNDSUxQbEx5VXB2ZXpuODU2Z05xU1FRVXZ0NE8weTBieS1jdUVJNXR2VjBqOXI5alZSbmZRV1FpaUvSAaIBQVVfeXFMTjAyclV4SzVqYmFsUmhJcU1ic3pFWWVRNXZ3ekNQWXU4dVRsSXhNOXgzdEhJVlFZaEtVX0ZQQm1qdUd3UlVQMTJJeWo5S2FaTkFRelhnU1hoLVhSWnV1Mk9wNnQzN2U3SkI3cEd2S200YkFXZkYzRC0yZ0NGWENjclFlRWhqYmM4dS1fZ1N1UVJEN1QtWVplOFZYNVB0SkxLRENR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 宮城県富谷市 日吉台1丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRkRJZlZ4SzhtWE5oMDVibkJuZUdNNG5sNkg0TGt2ckI2M3R5MnhiYVJhQVFQeGdkamZCZElyenNNNmtpSWJJNnRReU9MZmJxaWdmZVBVQmMtLVRUb21LR000dEdtWnAtRDJkVllzTHBxaVBvZDVUeFZTdnBLel8yUGE1S25BcGxYNkJwNHR0aXlNOWJyV1ZEa0tSQnbSAaIBQVVfeXFMTWxMcXlJYjI3dzNTbkgxQ1YwQ0RvZElDTE5xUGt0YlNZaFRiRzBLeDZ2OUhybFRFS1liM3QxMUZFTG4zM2FiUmJuNEZ4X2RXMUU0aTlnVnI0bnlqRTRQeWtoM3JpYWxMYkxsSXNUektmcEJtRU5Qc2ltY1BUdkhxdHZEVkx2WXNJb1AxR2MxTHctOExvb1BkelFrS0JRUHRFUkxB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 宮城県富谷市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 宮城県気仙沼市 赤岩石兜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYzI1TVJYRUVBcEI3YmVFbDVyUGVpQ2F1Vll4RFRIZ0NpUndxaUtLY1o5XzhEOE1HTWJGNVhURkpIaEtIa3VlRmI3NkprbkhYMkVHVXluSVdXTFhwaFIxczV5eC1zUnBySEFBNHFBS3RyaHhXNXQ1VVNaUC1pQ3ZXOHlBaUdZMTk0bGNuTE5CUlc5ck5sVXJRcUY3UHHSAaIBQVVfeXFMTVJpWkdhN0VpcFUyZmVjRTZuLWY3M2lzRmVwY3F3R0dreWJ4TFUwUUF5RC1KT0w3N2lOS2w3TGk1YlVkVWhhNWJJU2gtMzVCbHFQS3BVcnNLQ04wcy1hVnowVXVaWVdQSTBHZzhhNjYwcWgwWnJvSXp0TUxtazhWRnVLZWJNSXRWM0JZekxKMTlYTF9mdUN1Y3FRWkN1MzNJUlJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 宮城県気仙沼市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 宮城県大衡村の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 秋田県由利本荘市 岩城内道川八幡前の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVDRhYXN6Q3RyTTRRQnZKZDFRUkZpejBqUHpjQWVhSmpybElXTU1va2l1emtpdXJSM1ZwTnpZWTI4SzJZWkN6MzBvZzBERUdHZ0pYU0hVaFhBbDRnbExkdkVET0lwZHY2d2JUcklMVjlHLUJmZW85T3dCZXJNQmdaX0tGVmlmSTdMVzgxaFk0amNVaDFNWW5makZBLUzSAaIBQVVfeXFMUERKTkwxNWlUcFBLSWZCNzZiMmJlU1pyOHlCRUxiV2lZc2pnMjhkeWN0eTEzR3dwbFB3bnh0ejE3S1ZjTFpvdmpTMnRldzR2NGdxRmMwOFhOSUN4cEszMTdVVFVNLU1BQ0hadU9MMEZ1T1hXTXFTS0Q3NmgzVXRENmthR3NDQkJ2RkV5YXZvYWV5T0taR01HQ3dOZC1zQVI5ajdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 秋田県湯沢市 石塚岩ノ沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSEF2RklMdlBlX2dHQ2dMd2liaVNYbVNXTm5MVU5SOXIzdHRacjg1cENFWjJyUXV0VXp0XzM5Z2tJQmFFQU9kQ1JfeEN3TlFTRVo2TGFZdEpEeHl0WDlhVW1HaUNTLU4tbG9wQ0pjLTZOWkJXQzVWNWU4THNqc3QtYmZEdllScTNaMXlwY3B6X3Y5U2VHd0dybGlzUXnSAaIBQVVfeXFMTUZIZERuRm5JUEZmdU9wS0s3MVNjbWJWbGhpQWhOTFFyX2tERC1IdW9IcEhYaTkzWTAxR2dzN0VGU2xOQVpHREVQTjY1WmZkVXVldzgwNUhfNUdrU25pOTlRbUtaeFZhMW9XYlVCclFibEdUaVlHSlZfYlpOUkVOV05BWURpUGkyM29YX1FGek1iYjdSUVg0VUktMWY4YU5lQTd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 福島県小野町 浮金北ノ内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPbnBjSVZzbnZCSEo2TEJsU0sycENLZHNJd0ZmQ1RNZWNnVmZLSFBXVW81NjNWTGVZV1ROeVBpYjlxdm9FRk1BcmhYeE9hVkw2dFBLOWJKa3ZEclNOT0taUzJpQ3RqWExVUmRpeWlaZkNnQU5UeVA0VXdHRS1hdGVFQ1ZrbjJ4YnlyREVHaDJQMW9WcUtLTUVqNWZadVFqZmZwdzFfNWJJdmtLa3MzcTdPS1hKdFlkQUlTQ2VfcVFDQnVsVmwzcGFYeW1SeGNTR2E2Z2xJMjdwZTU3SzhPRnREU19YU0ViN05fSEgyaUZaZzI5QdIBogFBVV95cUxOZjMteDAwZ21FdTlzNDk2Uk9fR3MyS2FrTEUycFM4c0lqUEdIWkJmckZkN0RvNkNvRXppV0tKUFNPR0J2LXJaSVc0Um9EUmZtTWVYMVp2NGxFaDJnc0VWa0RDTExTcUdJd21NdXhvbWQzemFXNUhVZjdCakx6ZVZ1RlJHWk9JdDlLR0xGVkQtYmxwVlRpaXc4S3pteE5NU21ZRXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 福島県小野町 田村郡小野町大字浮金字北ノ内の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 埼玉県小鹿野町 河原沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8zOTRadkVzTDROUWo1SUI0eVFGNDdpWC1OYjYtWjlvNlA0dDZIRzRyOUwxSUtPWUQzUVhVYTlLNEMwZENfOUY0X3YzOWRURzI3UmlzaC12bDFQY0RnYU11VDY3R2Jtd3YxVFlDVWExbXJPY0dueE1hajhJZU0tbFk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 埼玉県小鹿野町 小鹿野町河原沢大諸バス停北西150ｍ付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 埼玉県嵐山町 越畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxObVhGVDhvQmdxelJIRGp5T3NrRlk1TmxBMldDaXBvN3U5SzN3M2JwOTZ5SUI4RVIyM0lRSXZjU2paNE9ITnhyWThiTVpCZV9WQ2dfM0wzWXJnOGY2RWNuQmxjR3RtUG5sLTdJYjk1QmMtQ2FrdGRUQjN2THYwc1BLT1dtc2tSZG9kQXFzTThnbFBubjhPcUFzUUVtMGpUaFhUZGVwaUZhd24yYlBPTmZz0gGiAUFVX3lxTE5sRHp0aFpta1VGeW9MTDdGV3RHbUZMM0xJV3JlVG5rcFNTSEZqTEtpRnZjZl9IWVdhRDlHRmRmNkplRUY0QXNNbWxXc0VGWm84QVF1YnM3cnhtQXlfNG40c1h3S25PUG1pOVNOeGh1UWpGc3RENk8tOXdXdWJYdm5tcEphc3FFT0pLYkZLRl9BNWNnSW1rTjhUZzNDRV9mYkoxdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 栃木県佐野市 牧町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPT2oyNHRmTHpCczFDenJWX2FHVmlJaDJTQmpoQW5DQ1ltLXNPSU9XZnJqQ1gzR29ockJLLXJrY3FtVzhnSExVTjVlYlZmUUVOREdDbnNXVnQ5V0FJWHFlM1Fpc1JJdnptZHRIMTRnTmtwQVlWRHNuaHZXX2Q3SG9Wd21LczAzeG9rNEhiUTRod05Uc3dpbjE2VEdUNFfSAaIBQVVfeXFMTlN3cUx2V0k4bTZoTUZsczN2cUtIZ0R3NE94X05yNUlFLW5UczlIVjl0bGRrczZ1UkVwYTM3RzNHSU5fTHFPVG9SblBVcDluSU9WLUlvVmZ5NjNZVmNyTzMyN2JudXZXbzBGSVdUekE3X1owUDJyLUNCalA4cjMzMWRsOFhSdkpsMXZjcnhyUUpTSXNxcGNMMzdnbU5qcS13TGpn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 栃木県佐野市 豊代町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQbmNZdlNZdzZZS2FpeGw1UmpnTktFVzhZcGNrcmYtWG0yc2I2bFgwbk5pVjY5TEwtYmlzTER1LWpVUXhBTE5mMm81aF9tZXVaX0c5SUh5RzVZajY4TjJvMDd4QXBzWk44Uzl2S3JWRDdCWk5ENFRTdFRobmVQRHJjZUxyMnh2SkwyS0dHbFdlTjN2RnUtc244eHpBSGtpTlJLMm9PeFRTaGVSdGtUSC0yYl9FUS1IajRVSEk2bDBzbThuclgycjRTWHladXFjNGFmMHlZRU5iLUozcEtUaFhLb2NIcTdfYmhCVkNYWlFNSjRNUdIBogFBVV95cUxQUXNUSkNadGt3NldrdHQ3RVNFSXZhRENyUEVvTmRKamUwcGpBUHpyRlNmOFIyLWhRLWpyWTJPT0hocEs2eFhZZktzaVliZV84a1I3RE1EbHlkbkQ4VkVDOXZGd1N6RWlqdTB1QkFNSF9GV09IRVVQS3pLNlF5TTlmcUlzLXJBRS00bDFTdlFrSV9RR2w5UDc3aXdwRzZGU2ZTVEE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 栃木県佐野市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 神奈川県相模原市緑区 中沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdmZPbTBRU19vZUNYSE9XYVdfdVlaTUhuT2h4Z2JqRzlhS2o2OWg3T2JlbFdpejgwSFAwUGtiWUh0cHB6YkVVeDdQTFlSVXpLTXVMZkJYSHRCdERuVzVJQ3EtZFVoNk96RTJZTUNGbjk1Vy1nbEcyd1owTm5kTVA1cWItenlxT25RSjdOVFZwVkE4MnNRZktIaEVURkzSAaIBQVVfeXFMTTFKYjRRVm1Lbkt6UF92aFNtQUJnQmthNm4xOHpDWXpQcDdyRW5kVlRoa2g1R0V5LUszODBRcnctT1Q2VzJkcUdXQVVCb2NSY0loZ2VVX0wxLXYzcVh3cjVLUFNzc1VIaWZCTC0yMzB6OVNQcE5Vc1ZyXzItaU05NkQ0bHZldW9jZGQzMllBV2dFR2otN3QzOHdwTWhxY2NzUEln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 神奈川県相模原市 緑区牧野の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 東京都日の出町 大久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVVRhTjlDNzlhMEk4T2xDTnlhX0I0dEE2MXUxZW5kZ2dONkhyYnY4MW1aSHJCSjVPbEY5ZS1ZeDRoVlY0WGFQNW9EWW9kbGZNWkdlRHUtRTBZeEg0Vmt2cktwaFZYY3hrLTdTQ09sVzhIS3p5bVpKMXRVM2NvNEp0dmJSWUw2T0lIYkN2MlMwSVRWaXFWTDBPRFNvenHSAaIBQVVfeXFMTmpLTW5zMW5WaTc1dUN4cDk5RXdaVTNQQ0ZjYU1YWUxyOW5nRnJFQmh6WEFwM09XVzMwdndIR2E5MW9iMjNMOU85djkyeVJwcEtDd2dWOVJOaGxieWRzdFdLSi1RemY0N2lwOHVvQTU0anNDakFNMkRzVXJoZFlYQzhXY3hTamlxVTVJYUxTNlJCek5oRWxvdGVLTk9OOFdjRkV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 新潟県長岡市 来迎寺の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 富山県南砺市 川西の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNVFhqd05JWnRMTUh5bThqTWJGWFRQVnZqZzRtbVNuZ1VFMG5UeDhqbjdGVUoxc2lEdWlSME5pWV84RTloYzl2dTdmRmJ1N3I4UFhpX09pb1RSTkJfSjdlREc4THF0d2FTd2NRYUJqbE51aE1qdnpWX0pIOGRScjlOXzZVTlo3aVFwYWFlcGdzZ1QzaXFQSjNjR0dxbDVoQUtLZEJhTFFQbVk3N1FRN2tuazFsMk5DUUZOM3Rjd0JPYS1hV3ZROHpWRHY2MnNDOFJYOTRQZG5XOXFsMjIwMjNldjhDaWMxam4wN3FGQ1lnUVRod9IBogFBVV95cUxQY0J0WnNIa2FuTGhNX1cydWp6OHBfRllzelNncnJNZjNuekxRRTJhdnVtT0o4aGhqM2NIeDJrX2s4VXEwZ2RjdGJ3WW1wOUpVdFp0X2YySGhyZGpQS0ctUTBJTTAwS3Jiam1maU90U0lpUHJjQmt3UjFsNXJ2SUJxWkdZSlZHaDAxSkRwWnk0Qm5aa1lielAtdGFURkdJM1plekE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 福井県おおい町 名田庄三重の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQNzdjQktKdFBlSE12M3VPX1lvNXNPU2c4dDE0VkJwcHFtZ1Y2Z2w0NjVmdkx4NVlkR0xvblk0WXJXbDhtTWpEa09aaC1XZEhRSWtRTFc3NEN3dGVRc1pRS2ZWTnd2NWMyNDdMSXZsa0E3MXZodGxJak50N2dLSDBkS1lVVkpTMGZNUC1TRXdLTjh1cEpwVlMxa3A5YmZsWGdOQ2hqbU9rQm12SDNFMDViaFAxWm16MlNRS3FyYlBrUkJVMGViWThLVGRwMHBhUmYzMWcwQUV0NWoxNzNGVW1OWGREd3FobjhENWM0dm5ZQy1wZ9IBogFBVV95cUxPU29ZbDJwRVlNREtwNTVieDk0UVVkaHlPRFJpeUNLSllycW40ZkFBVlN2UUlnajRualhKcGU3dkZadUpLMzNuNVZDblVGQTRmb3F1TXZYa1A3LWRUazhzbmwxbDBfc3hRbW1vNEdHUEVzT0dwT2VwTGMxVkxJTjZWLXozUUs3aklfeVFLUi03TkJONXc2VmpHcER6MUlxRXA3Ync?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 山梨県北杜市 蕪公民館の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 長野県上田市 真田町傍陽の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcHp3YmFvNXFnUi1FOGJjWDNJaGQ1VFFMQWRHbm94dmZHeVpRNDdRWEl2cVFOQlpMY1ZFMjU1aHhtek1oS0UwTG5EaXpuTk1RRUgwQVNZdVFtcnNhcWFNb0MzMzM2NGNnaV9JYnB2ZGRBSTkyMk5yYnRHQXVLaDBhTWVTSTJfenNXRzI4empRZUZDMkw5eHpnVFNnQ1LSAaIBQVVfeXFMTVc1WnYyblFZN1NEVDJoOWFxYUNTR2lHR2RydURDSVB5a2hHeFlOX29SZXRuTzhhNURUR2ZQSzN4eHlkUTJ1Z0hoYURnTnZtT1lzUjA1NURfZmZZZzNmelkwZnVSVWk2bWNvQVJwWTE0WC1oVFN3aklhRlZqYlVIS3Z4Q19sQzFxNkZZdUxZS013dUdUQW1hOVg4ZGJxZHZjQVVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 長野県伊那市 高遠町藤澤の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVUlGcUFSMlFjNldEVVZKZHBWY1lBR0xXeXNsdmFkQU9kd0VmTTJCY3VDVzdJTzdZUWU5S0NtVkJnRjA2blQzcTNqc3dHZ2RQUmk5bmxxTUVmN2FkTE5ablNnQlFIZGRIUV9XeHhmNEhDZWNDXzc5N3ZuRm9pdFBtWUloUGpBTHEtdGgzZm42cV9IWmswcTcyNFNEX3jSAaIBQVVfeXFMTVI1Vk5qeGZ4czllM0FEaW1zeXBCa3k5d1JBejlFQVdIakYwQS1uTXBSeDl3Y2xhdzRjd3A5OUZmNmU4X0hHUUt3QVFMbWpISThVd1hsVXlDdDFzSUdiQmpOX2xsSkstcXFhWll6U21vZ0xjRnZuck1oMUZCLVl2aG5iS0lBZlQ1MHVuNFktYlZRWUdpODlsVzRHWkxxcmYyTzNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 岐阜県美濃市 立花の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdlZpd0dSV2xROUlkMjdLQjdXUWl3VmY1Mml2WlVOZ2Y3aHAwT2hXeXY4X1J0ZXZITE5HQXRkNWpRc1VGVUVKODVmTWJFTGtUTDB0dmhvU0JEc0tSZ0RjdERZb3ZfNzVNU3N3QmVJZmhzcDIwRjZnX19qdHk0MEVkUXRGS2tCczY3R3pxUEExVzlvOXFnSmdJdlpiOTjSAaIBQVVfeXFMTVVMYlg1WVo2Ql9vOEMtcnYzMUhyNUdENnplSGUyMndlZ0RDZktLZnZVVHZhZ1NQYS1xcXJGOHRETFNjVC1Tc0NhLTBxVXFXRENSZ0tKSDVrV3VnN1dKSjhrTWgtSlRXT3VmeFMta05tUlhJaWlOaGRqcTZCREZ1RHFvU0FvcHljVkRjZXViWnRjN2lSVVpsV2NpalV6eTluTjlR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 岐阜県恵那市 明智町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 岐阜県中津川市 付知町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 岐阜県中津川市 福岡　八布施　地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 静岡県富士宮市 羽鮒の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNYUNxWVhuZ3NNWjdBXzlxUUt1cnBNZUVGdVlfMXYweVpBckxzaHBReWlmWjFHYUhzZi1iN0tFUGFfMjRSUmJqaFdNRF9FLUpvRnBGcS1Wa2M3d01SNWFqX1JPSGJqVlNNYXkyeFFMTzQ0T2hWQ3d5cVJvNERSbjRJQzByeDV1Ump4dTRZVkJlOE9nTGt3eWx1NldQX27SAaIBQVVfeXFMUGlRU0xORkhncnAtMEc0TDRlaXFRRnhqLVhyZmo2VWo3cExUdTR6RER1Mk8xSFlrdnk2WjE5WW5KVE5XMEZwV09LeXg4bXZOSXlMZ3RnRjh4VFZZTmk2WmZyRHVZNWNmdnk1RkpjaVg1dVpxMW9zVUZ5b3hEOTg1ZjdFS2hWOWc3N2lhOFVoOVZaRGNTXzNhOHVpV3llcmZCaUhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 静岡県静岡市葵区 梅ヶ島の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 愛知県豊田市 押山町ススベの出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 兵庫県神河町 猪篠の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPZjFncTFuUlhYRUlmRFRmQV9lcUc0aHhrVzRkRkp6MklyUVBXTW5HVjJaYlpDcjY4ZUxueVRGVGVzNUZPU0FsbV96TzQ1cHFyd1pfc1ZPMjZrTHBGM05reHgwSHg5VWxuZ3VZRUc3S1EwUGE4cjJIZWFQNXU4VThSNVFtNUdOTWZXd01VeGstWjc4Y3FyaUQ2M1BMbU9TTXRiMHfSAaIBQVVfeXFMT2YxZ3ExblJYWEVJZkRUZkFfZXFHNGh4a1c0ZEZKejJJclFQV01uR1YyWmJaQ3I2OGVMbnlURlRlczVGT1NBbG1fek80NXBxcndaX3NWTzI2a0xwRjNOa3h4MEh4OVVsbmd1WUVHN0tRMFBhOHIySGVhUDV1OFU4UjVRbTVHTk1mV3dNVXhrLVo3OGNxcmlENjNQTG1PU010YjB3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 兵庫県丹波市 青垣町文室の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdVQxUTJyVGJfc0REbTZkLWdwUXFNNzRhb0lyMjdadWNuVEJXa1N2Qmpxb21mbTNsQk4xcWhfUXEySTJLMjRUOHJjUTg2NHRSVThqdElMYVUzeHYtWmE4Z2x5RkZFakUya0JyUmgxRFJQSVJFbFQwM1RtR25ySFJUYjBqWnhqX2NONHItckZjUTIzMWVLOHpGOFpOdnTSAaIBQVVfeXFMTjd0M1JneFFBTUNDQkpIUUp3OFUwbGx0UU05bzhvQmlMWVJYdG1uNHNBSF9hdW1TTy10dDQ3NVNpQWJxZzRWUVRRSTRKZzNxd2ZGSkV6cl9CVkRyNFc4cmZKOFdPLWduTENyWHl6WndpSGhUMGZzRkVjcTByZVZvNHhlU2NQdXhvdl9jY2MzRWpVWWlVdlg2N3pySVl2REJsLUJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 兵庫県豊岡市 船町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQOHRSMU91RWQ3MjV6Rk5GT0hETnJIUFlqeUJyT1FuZ1JROFNaejZrZEtTeTFyc3BfZXQ0aThFN0ttT3doNVJ3U2tqOUdaQklhR2h0NG5HYUJKX1ZsZUo2aUZUUF9oZzZtU0xlSWxCVndVLWQzdUYtTl9UTXAxa1lQXzVpZW9iTUJrQjBCSlBnam9TMXNZZVpjTkM2OVFSdWItRGpodGhkbkZUMDFYNm5J0gGiAUFVX3lxTFBNR3R1dTFNc3l4SVljYzV3Mm1pZk8wMlF2am5jQ0o2amVGbWdKLU12U2hET1lGY3lHcm1oTVRudU1Yd0Y4a0RZSk9sb3lwSUc5bDJJUVVzcC15RGhGVWMtQUc5c0I0QzVodEpEMFU3cVg1Nm9iQmN4MmdXaWpWNjYxRjVTRTVGb3pCN19JaGZkZFVmYmpHREctQWNlSms4M0JuQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 兵庫県新温泉町 熊谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZ1B3el9Vd0Uxb29Kd1o1Y2lLVl94M2x5WXdkNmFXUmZNVC1ZVVdDbFljanNFRm1JcllSMTh6UjlVeXh6QTJsdlkwRXlWdTFjY0lwbjJkbTAxVllJRDlEUS00dkVVc2ZXNzAtMklVS3pIWlNOTndYNkhmN1llM1BEdFdfVXpUWWhyTndPYk02cFpNcU9WT1hXUXdSei3SAaIBQVVfeXFMUENmZEtkaE5mOHd1NS1kdF81RV91QWZzeUpfV21LMFZnS0ExUm4zYU0yRWgzY1hwNC0ySVRtLXM4c0xPeVJKSVNFQVF0OVBnenc3SThfNGswV244MndpbGtmNG1pS1FvQ3BfNWlNZWsySm1qZzV5Y2FCNVphaDFLNXlxLTZaa180VzYxNmlVMXdleXdFR0pkSEZyeDQwcDVYX2tn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 兵庫県三田市 藍本の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNb0dteXU4R1o2NkpfemxMTDFSX3ZFdEV5TXN2bmhVZF9rVzc3Ykoxa2JiRGY5M1Jzc3Nqb1JVUVRJNU9rTk54Q1RnMktPYndxNkVzVUJSUWVNLWcxdVRjMVB2WmtJam9QeXp5LU5Valk4MWRxRjBhbXNSMUtHRTJUMU4waEoyaTJPWG1UZjBZSTBiMHpwcWt6NXF2U05wb0dMMWfSAaIBQVVfeXFMTW9HbXl1OEdaNjZKX3psTEwxUl92RXRFeU1zdm5oVWRfa1c3N2JKMWtiYkRmOTNSc3Nzam9SVVFUSTVPa05OeENUZzJLT2J3cTZFc1VCUlFlTS1nMXVUYzFQdlprSWpvUHl6eS1OVWpZODFkcUYwYW1zUjFLR0UyVDFOMGhKMmkyT1htVGYwWUkwYjB6cHFrejVxdlNOcG9HTDFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 奈良県曽爾村 小長尾の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPX2FHU3ZJUEVhbjY0R2NBSHZsZkF6eERnRU5YaUMwOF9HbE1oNzhOV3VqX3VtUG1hbDRnSFg1WjRwTnVhTnUtQ2lnS0xEN1gxeFU0UUkyamJrRy0zTHNtaWZmaTlEZzFaczliNFFGel9IUDlubDJ3alJMNnNiQ243ck5qZjFIMEFxcDVqckZ1X2twUWNMdG1nSXVBQVBVZ3I5aFHSAaIBQVVfeXFMT19hR1N2SVBFYW42NEdjQUh2bGZBenhEZ0VOWGlDMDhfR2xNaDc4Tld1al91bVBtYWw0Z0hYNVo0cE51YU51LUNpZ0tMRDdYMXhVNFFJMmpia0ctM0xzbWlmZmk5RGcxWnM5YjRRRnpfSFA5bmwyd2pSTDZzYkNuN3JOamYxSDBBcXA1anJGdV9rcFFjTHRtZ0l1QUFQVWdyOWhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 奈良県十津川村 高滝の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 奈良県十津川村 内原の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 京都府宮津市 宮村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNMzhjaTlmYk96M2tiU2MxOXFOaGk4bTRUM2gzQ2V4Zm16d05HUUFwQmJRdy00TWpicmZoS0F6MXRUM1BVM0NYb0d6dHNMckpTMGVSWlNoTW1pQVZmVVdCcEhROW55TU5IamVRTUVOZmtUeDZRTUtobExMYnVOVTRfR0F5cVNmTi03Z3pTaHRKUTVBT0FnUjFETk44TXdTTFNCUnfSAaIBQVVfeXFMTTM4Y2k5ZmJPejNrYlNjMTlxTmhpOG00VDNoM0NleGZtendOR1FBcEJiUXctNE1qYnJmaEtBejF0VDNQVTNDWG9HenRzTHJKUzBlUlpTaE1taUFWZlVXQnBIUTlueU1OSGplUU1FTmZrVHg2UU1LaGxMTGJ1TlU0X0dBeXFTZk4tN2d6U2h0SlE1QU9BZ1IxRE5OOE13U0xTQlJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 京都府福知山市 大門の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNRHNja25tRnFmR1JPdm1aUVBZMjNra3o4SGRmdXo5bWFacXJ1dWtGQ2x4MVdLeWlfWjQtQ2hNVEpxRWV6N05TeUh3Z0Y4ejBoNWxFakEzVnNHRDc4ZkxLcVlGbVZMWUk4ekFpY2JITHBGcWtwQlBVVVktNzJDMXBVamZrZXIwNW1FRy1tMGdrR2xSQVdGNlNiaWZwQU5TdUNGcUHSAaIBQVVfeXFMTURzY2tubUZxZkdST3ZtWlFQWTIza2t6OEhkZnV6OW1hWnFydXVrRkNseDFXS3lpX1o0LUNoTVRKcUVlejdOU3lId2dGOHowaDVsRWpBM1ZzR0Q3OGZMS3FZRm1WTFlJOHpBaWNiSExwRnFrcEJQVVVZLTcyQzFwVWpma2VyMDVtRUctbTBna0dsUkFXRjZTYmlmcEFOU3VDRnFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 京都府京丹波町 下山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQemFPaGx0UXo5SmZGRDJXZllFNFdOTXJwYjBnX3RYS1VsZjcxTWo2cExxX2dlYUF6bmNMa29pUE9UU0k0SXpTWnhWZ0x4c2V5VXRLY2V2OTA1T214N3RBY0U5ckpkR2R3eTJvak9jaGdIWDQwaEFXNjAzNnAtXzNRM1VqdDEtY0NobXdXc0tmZU0yTEU0bzRhU2UtSlfSAaIBQVVfeXFMT2xLZmJ1Z3lSN0Vwc3ZScG1vdVZ0RDZwaVF5ZmU0S3NsRnZ2eF91ZC1NMElBbmJlYTc2NDZMbjcyYXVleGhfVW9LNWhjTmtlazYza1RaNDF2RUhHQXlZREd2OGxncFY4UDYyWlJsX2RGTmNuZi1JSnVRM25CSWRDRElpcmJ6S0dkTWVJMFhHNTBva2xNMFNoLUJDQUNEeXhoRW9R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 和歌山県紀美野町 明添地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 和歌山県紀美野町 三尾川地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 山口県周南市 鹿野中の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWkh6d210SEdhVGhDb1RlQmg5dkN4QklzZ2VWOUxvR0NmYVh5SUV3enYxVENKQ0NaaXVMWVhXOC1uTlQ2cVU5SHZ4RVpaMi1DX21lX2VFVUpTem15WWMyN2hKai1XUTRUZk15SVh0WW1QZXdSdTVmZlBDUWlRNnlYU2Z5X1E3SlhITkZwakZ4alFxTkxCX2RkMnVRT0jSAaIBQVVfeXFMUFhJV1lxVlRJVzM5ZEIxbFlVU2d2MzVUQUZKUVU3R2JqZE5DMDQtbmpxS01PME1GazVxQXkwUTdCOEtaMVF2cnBvb1RqdkJVaHBQMThOeHRyTFluWGJoT3pyLWFqOHFOTmRlc1NONDd6RjU3VjBNYTYzYk9sWjFvMjFHTmtIb0ozOTg3NWowTDdqM0RCZHduVmNPMTVlVGhnV1ZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 山口県周南市 呼坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdnNmdl9tek9aMG1wS1F3eV9KMEhtY3BHWTNXbzRNaHJQU19RXy1taEVfT3FUTDNQdWdobEFZUkgyVnd3S2w0d0hUSmVFVE9POWQ1bzEtQXdvbGlFWXIxbEZqNmJVVHpPbW1sZXFVNXBOcGdnXzZDTXZDaWNUNWx5RkdNQmFvZGw0N004dm9fRUd5eTZ5QU9ndk9HX3XSAaIBQVVfeXFMTklBV2pGcGJXZWZtWTZ5Z0tuQm5kNWNtUDZGOE85aTUtTzBRaFdDdFBqdXlHSEZ4WVJuWUtBQ05HaUtyaTMtV1BZR1ZYVlYxTXVUTGxPSnBadTlmVXQyYnhBNnJLMmtWQVhPNXBYVXR6RmRVZVd6OTFiRGRLZG9UbnVOY0NtRlBOWkZKM014ZzZYbmxJRXY3eWdrUlczMlBteHd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 山口県周南市 上村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOW1QbWhXOWM3ZDRKNXdkWTRneHBtZWd2OUd2NWgwemE1bFdCTzJ2NUItem9ZRWRMM0RoUnZtMGdzdS1WOG1OQTJSQUdQR2R5ckR4NlpMMXBNQ3Bkcjl2bWtTajNmZFA1WC1yZ3BYSVpBamFjNDRhNDQ3MEVpS0M3R0tWMmZfeFdrbWJ3Y0RlU2JCb1NFVXhXMDRSbnLSAaIBQVVfeXFMTl8wTERBSkEzQ1JkOWJ3M1VBakRnS1J1TmxnelAxZmxWR1p5bHFjX0RjUXZwYnlpNE9kSkFSeXQyLTcybnVxVUd0SVh4UFg4STB1NVNCX2ZHUVg1dEVFcWphVTlKM1JINzJBLUhQUXBTeXp4SkNQSkJBenRyc3NfTFJETUM2V0d0SDN4VjNfZHc5dmhOR2xrNHBIRC0xTXluaWpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 島根県雲南市 木次町西日登の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPcEVLeTFnd3NTN2xjS2VBTXNIMkpBLXBxX2VSdTAzQ0hFb0hQZktQZkZURGNxTloxakxZZDFmVkFDS1FVanVIOThaZl9UMGpucWJGUVVKQ0pZMGw4bGhRLXFQaEhzNmtiYmhhUlVUN3FidUFlNVUxNXo1NTlobHZuU2hEQWZDYXQ2enR0QXBYQ1JtNlJSRFZVcGIwZVo5OHJDSnU5bmhqNTBnejZiSlAw0gGiAUFVX3lxTE41MmtQbFNpdTNPWDdZa2l6TVFiWjFEMkFxRG51QVk4N2twNm41bFJyeDFYNm1uQlBJZ3hDZnVrQWwyN0ZEbDlGZW1qVFFZRnlkbU12SUxnbzF3UkFfRlN1VFNBZVFMSTBmMFJOU1JtOWFZUEYxX08zLTVtZlJLT0x6cko0Ml9tY3hUaGU3YWo3ZC1zaElMZTBtTVRUYm55RzdwQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 島根県雲南市 国道314号付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE14aG41S1hZZE45TFYxVTB5Rjg0MGhXVEZZcTN3bm82YU9oRGplZ3ZTZGJ0YWU4SVpBQ0tKNU1IZWE5S2lCUTVQYTdIVGJBYmRaTW5EQXFZWjVpUXFiTXFjMXhZZzNvTGJNYUluTVE3ajhVY1BvM2N3Y2RiY2hEM2s?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月6日 島根県雲南市 雲南市木次町西日登の国道314号と飯石ふれあい農道の交差点から芦原方面に約700m付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 鳥取県西伯郡南部町 伐株の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月6日 鳥取県西伯郡南部町 西町の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"山口県","count":13},{"pref":"北海道","count":9},{"pref":"宮城県","count":6},{"pref":"秋田県","count":5},{"pref":"兵庫県","count":5},{"pref":"奈良県","count":4},{"pref":"岐阜県","count":4},{"pref":"岩手県","count":4},{"pref":"埼玉県","count":3},{"pref":"栃木県","count":3},{"pref":"島根県","count":3},{"pref":"和歌山県","count":3},{"pref":"京都府","count":3},{"pref":"福島県","count":2},{"pref":"静岡県","count":2},{"pref":"鳥取県","count":2},{"pref":"神奈川県","count":2},{"pref":"長野県","count":2},{"pref":"群馬県","count":1},{"pref":"新潟県","count":1},{"pref":"富山県","count":1},{"pref":"愛知県","count":1},{"pref":"山梨県","count":1},{"pref":"福井県","count":1},{"pref":"青森県","count":1},{"pref":"東京都","count":1}];

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
        <span>対象期間: 2026年10月6日</span>
        <span>·</span>
        <span>公開: 2026-10-07</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={83}
        periodLabel={"2026年10月6日"}
      />

      <h2>主要事案の動向（緊急銃猟・生活圏接近・学校対応）</h2>
      <p>本日の記録において特筆すべき事態として、和歌山県古座川町において生活道路の脇に設置されたわなにかかり暴れていたクマに対し、県内で初となる緊急銃猟が実施されたと報じられた事案が挙げられる（※1）。連続する人への被害を受けた措置として言及されている（※1）。また、奈良県曽爾村ではクマの目撃情報を受けて小中学校が臨時休校の対応をとるなど、教育環境への直接的な影響が生じた（※2）。</p>
      <p>人里や交通網、公共施設近辺への接近事案も複数報告されている。秋田県由利本荘市では県消防学校から400メートルほどの県道上に体長約1メートルのクマが出没した（※3）。秋田市では千秋公園で出没の可能性が報告されたほか、千秋矢留町でも出没が確認された（※4・5）。岩手県盛岡市では県立博物館の駐車場で親子とみられるクマ2頭が目撃されたと報じられたほか（※6）、神社付近や住宅周辺での目撃が相次いでいる（※7・8）。さらに、群馬県藤岡市では道路周辺の山斜面を歩いていたとみられる2頭がくくり罠で捕獲され（※9）、山口県周南市ではイノシシ用箱わなへの錯誤捕獲が発生した（※10・11）。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生地域</th>
              <th className="px-3 py-2">場所・環境</th>
              <th className="px-3 py-2">事象区分</th>
              <th className="px-3 py-2">概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">和歌山県古座川町</td><td className="px-3 py-2 text-xs">生活道路脇</td><td className="px-3 py-2 text-xs">緊急銃猟</td><td className="px-3 py-2 text-xs">わなにかかり暴れる個体に対し緊急銃猟を実施（報道日）（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">奈良県曽爾村</td><td className="px-3 py-2 text-xs">村内</td><td className="px-3 py-2 text-xs">施設対応</td><td className="px-3 py-2 text-xs">クマ目撃情報に伴い小中学校を臨時休校（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県由利本荘市</td><td className="px-3 py-2 text-xs">県道（消防学校付近）</td><td className="px-3 py-2 text-xs">道路出没</td><td className="px-3 py-2 text-xs">体長約1メートルの個体を目撃（※3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県盛岡市</td><td className="px-3 py-2 text-xs">県立博物館駐車場</td><td className="px-3 py-2 text-xs">公共施設出没</td><td className="px-3 py-2 text-xs">親子とみられるクマ2頭を目撃（報道日）（※6）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県周南市</td><td className="px-3 py-2 text-xs">大字莇地</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">イノシシ用箱わなに誤って捕獲（※10・11）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没傾向</h2>
      <h3>北海道</h3>
      <p>北海道では9件が計上された。函館市釜谷町（※12）や新得町栄町（※13）、遠軽町瀬戸瀬東町（※14）で出没が記録されたほか、仁木町大江1丁目では痕跡が確認された（※15）。また、黒松内町黒松内では出没の可能性が報告されており（※16）、道内各地の広範囲で活動が継続している。</p>
      <h3>東北地方</h3>
      <p>東北地方では、宮城県で6件、秋田県で5件、岩手県で4件のほか、青森県や福島県でも事案がみられた。青森県十和田市米田字長台では早朝にデントコーンの食害痕跡が確認された（※17）。岩手県では盛岡市の博物館駐車場における親子2頭の目撃報道（※6）に加え、奥州市前沢新城（※18）、盛岡市上田松屋敷（※7）、盛岡市高松の神社付近（※8）で出没があった。</p>
      <p>宮城県では富谷市日吉台1丁目（※19・20）、気仙沼市赤岩石兜（※21・22）、大衡村（※23）で記録された。秋田県では由利本荘市岩城内道川の県道（※3）や同八幡前（※24）、湯沢市石塚岩ノ沢（※25）、秋田市の千秋公園および千秋矢留町（※4・5）で出没やその兆候がみられた。福島県小野町大字浮金字北ノ内では体長約1メートルの個体1頭が目撃されている（※26・27）。</p>
      <h3>関東地方</h3>
      <p>関東地方では埼玉県で3件、栃木県で3件のほか、群馬県、神奈川県、東京都で出没および痕跡が記録された。群馬県藤岡市坂原北久地域では道路周辺の山斜面でくくり罠による2頭の捕獲が行われた（※9）。埼玉県小鹿野町河原沢ではクマ1頭の目撃により警察から注意が呼びかけられたと報じられ（※28）、同町の大諸バス停付近でも住民による目撃があった（※29）。嵐山町越畑でも出没の可能性が報告されている（※30）。栃木県佐野市では牧町や豊代町など複数地点で出没が記録された（※31・32・33）。神奈川県相模原市緑区では中沢での出没（※34）や牧野の人里での痕跡確認（※35）があり、東京都日の出町大久野でも出没痕跡が確認されている（※36）。</p>
      <h3>中部地方</h3>
      <p>中部地方では岐阜県で4件が記録されたほか、各県で散発的な出没がみられた。新潟県長岡市来迎寺では田んぼにおいてクマと思われる大型獣1頭が目撃された（※37）。富山県南砺市川西（※38）や福井県おおい町名田庄三重（※39）でも出没が報告されている。山梨県北杜市では蕪公民館から東に約150メートルの地点で目撃された（※40）。長野県では上田市真田町傍陽（※41）や伊那市高遠町藤澤（※42）で事案があった。岐阜県では美濃市立花（※43）、恵那市明智町の道路（※44）、中津川市付知町（※45）や福岡八布施の山林（※46）で記録された。静岡県では富士宮市羽鮒（※47）や静岡市葵区梅ヶ島（※48）、愛知県では豊田市押山町ススベ（※49）で記録されている。</p>
      <h3>近畿（関西）地方</h3>
      <p>関西地方では兵庫県で5件、奈良県で4件のほか、和歌山県や京都府で事案がみられた。兵庫県では神河町猪篠（※50）や丹波市青垣町文室（※51）で痕跡が確認されたほか、豊岡市船町（※52）、新温泉町熊谷（※53）、三田市藍本（※54）で出没があった。奈良県では休校措置がとられた曽爾村の小長尾（※2・55）のほか、十津川村高滝および内原で夜間から未明の時間帯にかけて記録された（※56・57）。京都府では宮津市宮村（※58）、福知山市大門（※59）、京丹波町下山（※60）で出没が相次いだ。和歌山県では古座川町の緊急銃猟事案（※1）のほか、紀美野町明添地区で蜂の巣が食べられ（※61）、三尾川地区では柿畑での食害と枝折れ被害が記録されている（※62）。</p>
      <h3>中国・四国・九州地方</h3>
      <p>中国地方では山口県が13件と全国で最も多い件数を占めた。周南市大字莇地でイノシシ用箱わなへの錯誤捕獲があったほか（※10・11）、同市鹿野中（※63）、呼坂（※64）、上村（※65）でも出没が記録された。島根県雲南市では木次町西日登の国道314号交差点付近などで成獣1頭の目撃が確認された（※66・67・68）。鳥取県南部町では伐株や西町でクマらしき動物の目撃があった（※69・70）。なお、四国地方および九州地方に関する出没記録は本日のデータには含まれていない。</p>
      <h2>リスク評価</h2>
      <p>季節要因および餌資源利用の観点からみると、青森県におけるデントコーン畑への侵入と食害（※17）、和歌山県における柿畑の食害および枝折れ、蜂の巣の採食（※61・62）、新潟県における田んぼでの目撃（※37）など、秋季における農作物や結実植物への執着を示す事象が明瞭に確認される。これらの誘因物はクマを農地や集落周辺へ引き寄せる主因となっている。</p>
      <p>人口圏への接近度については、生活道路脇での罠捕獲個体の暴動と銃猟対応（※1）や、学校の臨時休校を伴う事案（※2）が発生しており、日常生活圏との重複が極めて高くなっている。道路上での目撃（※3・68・44）や公共施設・公民館周辺（※6・40）、都市公園周辺（※4・5）、バス停近辺（※29）での活動が確認されていることから、人との不意の遭遇事故が発生しやすい状態にある。また、イノシシ用わなへの錯誤捕獲（※10・11）や道路周辺斜面でのくくり罠捕獲（※9）がみられるように、罠周辺での危険管理や住宅地近接エリアでの警戒体制の維持が重要である。</p>

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
          <dd>2026年10月6日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-07</dd>
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
