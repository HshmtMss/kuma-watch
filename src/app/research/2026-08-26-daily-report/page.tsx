// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月26日 / mode: daily-report / 生成日: 2026-08-27
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-26-daily-report";
const TITLE = "2026年8月26日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月26日の国内クマ出没は55件に達し、人身被害は報告されなかった。しかし、新潟県や福島県など5件で都市部への接近が確認されたほか、三重県では1件の有害捕獲が実施された。出没は青森県（11件）、北海道（9件）など広範囲に及び、秋に向けて警戒が必要な状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-27",
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
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
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
      "title": "新潟県南魚沼市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1IS0VSY3RFZHRWcXR0R0hvZEZCUlFHcDRRY3F6WXpHc1VRdlpJOEVfZnNBQk4zX0thSjdmQ1dZMUhiaUVEbDlYS3o5WGh2dw?oc=5",
      "site": "報道"
    },
    {
      "title": "新潟県南魚沼市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5RWklBM3RKNC1IUlcxX255dGgySXNhTUhFTHR3ajNLVXlWeHBEbUlReVNUbFlCTlZubmE4Njk1UU4tcmRFSUFFVDVKSmNOMkhmbFFndkxmXzhNSVRqSW5NVEIxNDdvZWttM0NVbC1sLWYxU29IV0dmT1N5c3hIRjg?oc=5",
      "site": "報道"
    },
    {
      "title": "新潟県南魚沼市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5fOHBtNTJFdUFnU1Riblp1U0liaC14S1V3ZWo2VUxUTWl3djFUMXRESGJTdVRxLVhTajlST2YtcWFndkdYM21kYURnaGdFTVpkS1lPdjl0TDNNbnhjVFVr?oc=5",
      "site": "報道"
    },
    {
      "title": "福島県福島市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1EM3ZRN25VWjY3OFJORDlPLU1oeDhqS1kySGxvTkNLbWhSN2tnbnFBNktjOGYxbWhtbHhybWFkemlUdTlkc3ZYeHlWbGswMlFsV1I5WjNyNGE5cDVoNlFvd1FVTVpnT0wtdlRFZzBB?oc=5",
      "site": "報道"
    },
    {
      "title": "広島県広島市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9jQ1NFcmpWUnZNODBCV081a19jc3BRc2RqdmRVNDBLN3RmY0ZCV242OU5ERzlwMzJvUFQyMV9ZSFgwRFhJTnQ1Q2ZGYXlCTEhnS2o5TV9jbmoxdXdQaUxuNA?oc=5",
      "site": "報道"
    },
    {
      "title": "三重県尾鷲市でのクマ捕獲に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBKRUJ4VnlZRThSQUl0SW1WSjZFRFBKeDcyamZyU2hVd1NrUUxURXc2bzUwNlZQdEsxcVJRYnBXR0h6d2ZMWFdRWURaSQ?oc=5",
      "site": "報道"
    },
    {
      "title": "北海道愛別町でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTlpSdFk4NjJOWUQtLUNaZFBMczJTOVBXNXBjSjJsZWdFWVppMG1IMWlWaWYyZm5fSmZVQTZyR1JhR211U2NKX2ktVDRsdS14ZUtyUHlfdUV4dGtBVmhFNkNaa2xDMnJoRVJXdlNBam9fRWRrYzhuaVo0M1BpalBRYUJBbmVwT1NtYUVTZkVmUHVfYXNja2diLXRhM27SAaIBQVVfeXFMT0paMENBazBzSk5qbVFfd1VGOTlWZGRwamdaU0VRYVVBb2ZmWnl4dmhibHBiSUt2ZmFvaWpFT1lxVG9sd2FIaFRwVDBzQ19FYUoxQ01qeGlhM05la2lHRllVNUg5dHFmU0xOellCZ1VndUVMR21SRDVyczVNQVIyR2Y5c3FyZGNBOEx5OENLY2ZiSE9TWjZxMG1Lc3hXejNydWZn?oc=5",
      "site": "報道"
    },
    {
      "title": "青森県六戸町でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQM2VJQ0YzUVVJdTVxemJfUDE0WXlJUnpmYlVqS0g1aXQ2R3B6MnRMQ2w0V2hOeDIzTWp2X0hXRWZXTHNuOUVvc1N5N0ZDbEJWbVBrWHFhTnprdHQxT1VGUjZJMmZKVmN6Ym1mTE1pSmVvZGVNNFN3VC1Mdm55LTZNME1hbFB2TVk?oc=5",
      "site": "報道"
    },
    {
      "title": "青森県弘前市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdEEzQ09mc0t5NlJCb3FOSFhURjBlb3FZRUc5SlFmdnJRT3duMlBlV3NHWThCUWlQaUFQYTFYTHVQTmNmODNDdTFBZFVmRHdraDZCNlVKbG9ONjZPcHVwOE1aTjgtSkdIYlB0OHZKU1ZKR2VPa0lacDJ5dnRvQzdjZG12VnJwdDRaLXFoU2x3WjdlUjNIRk5RNXNoLVbSAaIBQVVfeXFMUGhjcVFONWNIVXFlbFJIdkJwdWdNUmU1LXVZbUl1SEJpbHBqal9ocm1wdlFvMjhPR0U3VFNTeGNSRlFfdzdaZGNpaVR4WlVCWXRIc3VjYWpaV2hHUTdSMG5yOF9aM1VUM0NfdHFZaTI0cmhIbktybVFyaThwcjZRNFFuVE4xdXVpbVdDMllYM0ktZ3FDazQ3R3hIT284M0Z2Tm9n?oc=5",
      "site": "報道"
    },
    {
      "title": "青森県深浦町でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZEJGTHozd004Tjh2UFBsTS01cFlUcmNYNDZ1ZHVyUjNMVVpfWHN1X1ByUUhoTEJYUXEtR2VXLVR6dmlHMUdNdVVKSTYtekQyZ0lfb2lxenR0SUh0cEpPVzFoVmV1OHAtVlNaQ0JSU2VDY1RDOHlpcEdFZXZNUndPMTlJcEZpc1FZSC1yTThsemMtWVJaZ0FYM1htWGXSAaIBQVVfeXFMT0lzRTZqQ09GVDRsRkc1Q2ZVV2gxci1kTEZ2QjBHNEE3bXpELXJQdmJNSFFPbElacjJCWWliOE9xMXA1WlA2ZHU1dnQ1end6VzlsOUVlb1dmckNCUU1xZ2ZmMUs0aVJZX1JieHZQT3JOSFRYeFdxckc3ekpYQlo2czh5b1lUVzdfMVFvVWxEME52clBEWVkxczNNTjFUZlhYYWJR?oc=5",
      "site": "報道"
    },
    {
      "title": "福島県福島市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1HZHZEMTE3X1o1ZC11aVhLTDh1aWFlSlRaNy1WNHdpOTVfS3hwUVV6eW1IaUhkR25vQkw4ajJ5UHd0bGx5ZzlrYzBYRQ?oc=5",
      "site": "報道"
    },
    {
      "title": "福島県福島市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE84RmJkRDBxMUhPU2ZwV2haajFVUDU3REZoM2xGVVA3ZUt1YnVjdHFpN3NEOU9iS085eVRaZVdRU2FpZjNSWi1ndmlYTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "宮城県栗原市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUFlPelEwdDFMSEJ0YTJqNTFpQzc0NGtHdlRheHNkQkhVSTlwV1M3RHNiMHJzdFNDVWhnejlaaTVzWVh4ZzlQSnBSVFJOQlpuQTN2QVJCeElaUlUtNTI1ek8zOFNEdW5JUEVET1Y0VkRJQXE4VVgwZGxpdTJfcFN5TGtfWFVQRnNkcUtNb09zVEl4a2RhOTAycE96LWLSAaIBQVVfeXFMTUpHOVRzT3N0Q1lJemJObWQxMTZDaUVqM0p2ZFVHM2JpUTJEdi1wdjB1ZUlXQnFyX0I0bnhEUFZfV2pyNkNTWm9wOGUxWTg1VXZZRlozc05YMkpjRTd1MXdoSHFYU29UOUNuNnZtamNiWDh1ZWV2T0JBSEtBSXBzclIwcjltTGQtQlB5ZnZzeGRfNkpHWW5xYTZEVVloVERKM1B3?oc=5",
      "site": "報道"
    },
    {
      "title": "宮城県仙台市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPYVA1S2RSZkFFTEw4MmFlVEpyMVhYYkYxQUdBZERHemZBcG54aGg1SFQ2UDFUbzNaaHR0elViYXg3SVNUYmhmeUJvdXFGcmFodG5KMmNKcTRRVUxlRm5naS1CMGxjcU1DZkpJT0c1N2ZMUGlhOGRVSThLUHJIZWUzczRlNnBXbTJiUVVnaVNwc3FrYTZ1UkRiaDhGMVPSAaIBQVVfeXFMTm1BNlF1d2xfWjNsZTlna2U5WDlyZmJBeUlWZjRIN0lHZlZmYUFGVUtxZjNWYWw4MGRGUmVOSGp6UHpiYXp3bzFfSm9xZmJIVTNyYUVpbTAzcUxnSmQ1a0REYncyT0FwRkdjVms4d1REOC05by1uNEdMY29abV9IcjQtSjhIYmRDYk1IdUE4dE1TTHRQZTVKXzB6UUVqNmdWZkVR?oc=5",
      "site": "報道"
    },
    {
      "title": "岩手県花巻市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPU0NpSTA1Tm9OUWI4Yk1uSExDWlRKQXlrQmFHeGQxcmp6WmJZcVVfMFNOdUwwbWpTRURIOGYyLWgzdDQ4eEtrMUVjLTNkdXlNaVQ2eS1QVFM2NVp4aU1XTktwMHJkZTA4a2hROXJjaG84Q1VGaTZ1a1JHa3k4RDFzTk96UnJYeWtzOWlMcTBJM3BkQl9WTi1ZR1VVRnlBdUhmMkhGNUV6NVJPczZqd1F1YkZtMnFnZ3NMUndDWENfOTJ2cFdHay1BRnJXYi1RU2Q0aTlJVU1GUXdZakhlQ3NhZUplVkJuSVlHSjNzMEhlanhPd9IBogFBVV95cUxQa2d2TlRpVlRWZnU0YU5kdFdQTHZDdDFleWxLNVUwWUpzNDNLV1l6bmlJQzB6TS13aFE2MVdvSUdRVFdCNEw1d0ltRFBNWWhkVmVYNFZuRi1ncUxkY2dtUW45Tkh4MlBhXzdBOFNtNjJmT0pfX1FVTGpCNTZVb2dmcHNya2ZOMktwemZ6bXFENlpGa0hTUXF0UEI3RmNyMEl3cWc?oc=5",
      "site": "報道"
    },
    {
      "title": "岩手県宮古市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQYTFvdFFlaHJZYThkVHowQlZFWjZfWW5vTVFzUE95S1lmSU9EMW5DcWY1eDg1QV9nd2dqMFN1M3c1XzBHZW5ETzR6ZzNRY0EzN3FOeHVMRXozMFdZaXdZeUFSVHV0bnVUNm5QUnQ2a2l3aEQ4V1A4OW5xWkZjb0JXRmNsWGdkR2dNN0RuaElOa3hTVW1uRlZWX09mVDVJeEszWDN2Vy1yMi01OUdCd2JRcVNYOEtGdDRQd2wzZlBRS1VJSG93YWtLYi1jQXhPM0wyUzFOQXlJQU9Hd19yUlRULVBfbUZSZlE4MmxCUld1UnFod9IBogFBVV95cUxPVFpjcGRPY3AyQ2swQjNOb0JxdGV3a2luMURvdy1nVkZ2OHVrUlhJVE5QTVl1U0Mxd3hSNzAzenhzWHBrNkFXbS1jMUI5cS1YUTJiNDVnSkdnSFlIUDVHZU5PZWxtaUNFZlZOcHNDdDU3MFhHZlVGZVM1QUtHV2RSM2hmeUpCTzlYUlhMT2JscHMxUFRBLTZQc0pVZ21XQ3FyMVE?oc=5",
      "site": "報道"
    },
    {
      "title": "秋田県秋田市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaHZxOFNobVEyc0pQOXRRNmp0dk5TWUpxdVNaSV95RUl3eGJrQ0VEVUZqTFpxTUsyYkx3emZMTks3VUhIODBMdmViM1dEUGltcFJpSlNiTHpQWDVHMW1pc3ZuUWdMN1k0TXdGRDI1RFZyMXdIaElrSkVMZWJQbC1CbTNXakN1WWYyUGd4ODAwWFZ6YWdWUUZwbzdLMjXSAaIBQVVfeXFMTWtsbXo5YU1QcnlNTlVnMkpJNWp5Qy1BcVcteDFGLUZtdnItLVEtYjVnMDZtQ0JlU2pOVDBDNG5MWEYyMy1BZUZHbVp1ZnNpQW5qcG1zVXpoVnUxdTZlQlVWeDRRLVZqUkxtMlZoZHFRcHRkWVF4ODZBUzIzRlhxNEVLQTBQanl5UENFSURYUU0wQ0hrendDalFPTWlVRkh3N1Fn?oc=5",
      "site": "報道"
    },
    {
      "title": "群馬県高崎市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMDl2VmN6aFY0YVVrc011bnRJTUFIWGh5VlcwNHZkLU53VnFYejVINWNUMFdGVHR5M2ZuS3lzejRKTDZCcFJBc0h1cXBULVhDNWRic3lhY0gtM1RLOEdNajdkTzFPaE5tdEdMVEVzem9RZGVlLXpmV0hwWXBsV25hdHNBVUUxQ1RJZVpQM1pWWEQ3OTRib2tiWnJRTkPSAaIBQVVfeXFMUExrMDJxekVmN0lRU3FYTF92bzNxcGtodGxhUFMtc1ROWVpoVl94Z2kzc2V0b2dLZW5YRjFHRUR3aDh0U3hmenA4d0haS0h3endyWHVQZDJ2R296VExKWGM2TUpieTkzaDdkaGVjN0pRdW56WUZ2Y0VFUW4za1dsX0xKMW9XYnU2SUNDSHM4NlZMX1ROUGJzNW1BRkVNQlZ1WVd3?oc=5",
      "site": "報道"
    },
    {
      "title": "群馬県安中市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOWHFwVXcxY3l3WGZGQTZpWi1IV2JEOGI4Mm41WEZWSXpXZEQxQ3JpNmV6THotaVFIUklwbGNBZFdGbWEyY2d0NndVR1lRa0xxWUsxLThveVEyZjY4bUhSQTB2dzh5SkhMbEhxMkNuTHRnUkRZRURteDdHSUhxRVpMaXR6WXBybl8xdEF6S19uS0gydDRKS2VDUlhsb25nLXdlOGdjWWh2emJycU9pT0sw0gGiAUFVX3lxTE1uUDE5b3o1WkxoTjFnMGs1Qk45aURRUFF2RUhCWEYtT1B3cnU0Z0czUW00OUFEb3R1eXdabjhQcGRwX1pkcVRXczJXQndram10dUM2cDRSSjNyUzluR3BGN0NUaFV4eFdaVTY2b2o4Ui1JcV9JRFF6cUxPN2xYaGNJcEItRWhLVkZQUTBSSjFyb2JtQ2R6U1FrNk8zZmloNjBadw?oc=5",
      "site": "報道"
    },
    {
      "title": "新潟県加茂市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE1tQjBaY1prZkpfcUlzZHNPUFZGYjNianVMd2FZaXFndElSNXlrYXM2c3ItWWZSRi1BUTh4TWstM04tRGl2?oc=5",
      "site": "報道"
    },
    {
      "title": "新潟県加茂市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9DQUFrcmMwTGxxUUxrZnRnc3QxOHVmbDZwZ0VLZ2RXM0E0WXFqclJrUC1XcG93SXdFVVBVckM3S3lxMEpQT1BieHpvZVJzSHJxREdQNjN2Z0ZDY1I0SFI5eUJtVl94QjZsNkw3QTMwcXM2TFE3eWl4Zk1nYjVJamM?oc=5",
      "site": "報道"
    },
    {
      "title": "長野県大町市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNT0tMTVRGWEJtT0RnUkdfendtVFFrMFh6SUp2M3k2QjR3N1pOanBCVkNOMTdZTzZDZU5EMUZGY29heWE4QzVDd2ZNcjdCMXJrTTBrTzEwa2h1MWJvN1pUei1wbnpYdFRMbm9uUFdZbnl6dGhDY2F6Z2QyTUhtN0R0Umw0X0dVU2pmQTdMQkJ1bGRpcnZUS2I5LUktckbSAaIBQVVfeXFMT2x2T0JCUlg5T1JncVMxY0E4S2gxNUN3YUlQM3JhZ0xPY2ozS1VueXdQUTAtanNyN2VCT2IyMi1CcHBBNS1aclFseThXR2NsZVRZUTY5Um9vNFNuNG5SOVcwRHFLTnJXX1BVWFlmU0lDMlJYZFY0bS1HZGVJTGJ3UzlFeE1ianduTV9DalM3THVNYUx2ZHVod3hOcW05R01WZEFB?oc=5",
      "site": "報道"
    },
    {
      "title": "長野県中野市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNYXJJTk1lZ2FUNUVXOEFnLW1xQ3B1aE9fSHY1amFrNklwd0FHY2FXOUNLdmJEdFNMb29tb1BRMmlzclZfV0FrVDc3TzZPRTU4RjN6cDV0QkM2WWlKWm5pN0NLV0RIRWcwWjNSbldNY0NIdExhUVpPa2s0VEJRT2ktODR6UUdxenRmdldSbnlPR3BhV0NZWVpiTTFQaHHSAaIBQVVfeXFMT1FXR0RfazlwWS1sckdDOGFtTEZFOVI2ZXktal8td3d1YURrejd3N3UtODUxVmZDOFd5cV9faTJsdm9FWHc1NGNLWGJiX3ZlTTBsRHIxV1VYN01BR2RRTWlteTJPZl9hODk2MF9PbkRXWW1xUVo5N2ZlVTBid1FtMHJJRlpXcWhIS2tNZnppbWRjTkRFX3lRd3oyUmVRUTVteWNn?oc=5",
      "site": "報道"
    },
    {
      "title": "福井県坂井市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQd05DMFZvNVh3TFFzUk9wRzZnY2o2NlNLRG1pNWxHOVl4QTd6dmJ5dXNkYnU3RkRUbHVCYzUwend1YnRUVUxKQVd4VW5sdUFqQWwtR0RIM1lOQVRNSlhXaWEtWFNiV2dsaTRsQ1g4OTVVSjlyTUZ2VThxTDIzMmo3QmVaZy01VGxxRlpyYnBRM3lPd2xsV2I2c1ZGZmvSAaIBQVVfeXFMTXczX0tWcFI2aHhrbjJralRKSFNnUHlncWxmOGdVV25DSWVGWTBoSUtldXdKbnZHUGlKUnF0UVktZUI2M1NZTVhpUkdQZ29QcUJia3gzVG1TMllfZnpoTFB6MHV4WHV2SUVoZWpxTU5oRERWSHgyZ0NNdEhBaHRsSmZkUEl1WC1ybF9adU9zTGN4N29ieWFOeUVvd1BCLW5wcVR3?oc=5",
      "site": "報道"
    },
    {
      "title": "京都府舞鶴市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPWW5JYXpqVnRBSlFJZ3VRbHppTWtiNVVBNmhMXzE0aWU1dGNtd09SWmZNYTBuV2c2cFV3ck5TRW1ZYi01dlpQT205aHVFeEhOaXVrdEJQSHZEXzV4MTc3RktuZlpod1pFYmZrN0dDZkZkZy1Bck9hd2xxaUR6c0owWXVLelBuQmI1aEFZSC00RnZpUWNmeTFvbExJTG5QR25uRjgzOUhya0xXUUxiWjBiVUMwbmJ0MjZwRUUxSnBGNDdhRU53MVhMeEUyYklxM1RQTkYyU2w0UnRsaWR0R09UWWxwWHlvTHhwazE0OW9GR1I2UdIBogFBVV95cUxNMTU4RFZlT0gyN3RFVGk0MVlweTV1cExnUGQycDBCMWNLNG5udmgxMjh0cEJiU0MzU0ltbUU3UVRlc3J1ZE1odnVqU01YVXYtX0RjRlRzaWg0XzlHeU9CZEhWZWc3YzM2ckxTc3F6R1g1SEVYS3lQSEhjdFpheUZHODFxUF9fS2xUR0o0dGxyaTVqOGphY00wRzZ4b3dhV3JmRGc?oc=5",
      "site": "報道"
    },
    {
      "title": "和歌山県田辺市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSjRDMnVkM1l2eGw0VFNSUkpqLXNnVUdGZDZ3SVVlTTBOcW5WczBpRVM3dV9JWXNrTXBZelBJUFNPMmx4UkptdUR4dUtXY2ExOHJEWDRzMC16bGR0NnlSc3VSNnBSd1psYzZzYW51S19weWF6WU9KYks1OW4wNTJLMWlWZFpyVXJLbUNRNXRPam9ENGJ0VXJCVWtRbHnSAaIBQVVfeXFMTXk5TWY2aVhERXo1UGk0NF8yQ0F5R2JRRkUwbWtrUl9SWGNiZ24tYy1XQ0RTVW83djcwbXlNNXNLSE5jX1NiSlF5aHpxd2o0TkNnai1ILXlDeERGRk5tRHE2R1A4Y29PWm9BU0VlQ0RNQ3ptQXJCSjhNNy1yYkpRQVlTdXExMWR0WE5wSjdGc1V2ZUt2WnJIV3EyUmhEMjJoMUtn?oc=5",
      "site": "報道"
    },
    {
      "title": "島根県益田市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQY2Z1V25wdU85RGFDMnpreHRURmU3OXNZblNCT1laVmV4M2dnRnN1Ml9ZSkt3OWdUVEhnTlZENjRYczFFWGtoQXg3REZjaG5jUk1oVnBQQjFMZFF3MGFmLVFmN2tNcXVodkRGWU95SHNEYmQ2ZGp2UFB1dGZqOG1zWC1UenN6RzNzQ2xjNm1vSFdlTjUweURXcFRRY2FoUXk2UnJNZENsdGdJOFlGRDRndEZxZng3VTJ6bU5jM2tzNGRKYVNieFloSHNXQmtHWWk2U3ZQUW9vRERaOF9xcjZfbjQya2ZHQnVhcG1WVXpBSUNBd9IBogFBVV95cUxOUXhXUjZXOUZEdmZZWnYzaUJXQUx1dVRHSWJIV0Q2UUNZdjFUX0U4MENMZWNQRDJDRWZvMDd4c29MX0F1WkpoS2RGWDgtWWV2dFpWSjcwRGYzQU1nUUxReW5MeGU1aXM0OEZQTndnZFg4bVdMWG1BOE5rdlVsclQzMUdWUFplTUxMQlhkUldVRWFtUWJTTGpQNkxWOG91YVRXVVE?oc=5",
      "site": "報道"
    },
    {
      "title": "島根県益田市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQWG1QMWhYbXI1QW5YREhmandiZ0RWVkZwYXBRTjRwMkZkSkYwU2Z3clhSc3RQY0JsNlZzejB5RG9mRXpmb2k5WWNXbUJxLS1iSXlJMm1ONFdCRzVGNkN3dFZYaDdxWi12ZVpFaHNreWNFMEw1VkJGVEZmY01LcFNEaEVTMWNRd21QYlhjblJHc0FMa0dyNHdsV0JiemFnME1leW9ib2g0MEJxWFF2T0hR0gGiAUFVX3lxTE9renBrcjFVVkV0X1h0c0RBWERzN3hNaVVwSC1iTlZUdDByc0t5S3hmV2M4LXBGWmI3Vk9SYmwzazVWbkxWcm9NTDRmSFYyV0RlanRCeUxVUDdXVGRBLUJnQ0dTc2MtOHNJLW1hNGRUUkI5dXlYN2pEcXdIaXV0WFFwZE96LVZaYm9PSnZ3Z2RRTmw3R1JOMF9NaTVhR0dWM1RZdw?oc=5",
      "site": "報道"
    },
    {
      "title": "山口県周南市でのクマ出没に関する報道",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQVlaUTJNUHVYUHd3Y3hPVWZGVjlZVkp5RF9uS0ZpS2JCS0c0R1lEV0kxWG95U0hKNEEyckZ5dzR0VUlpLXRsd093bTl2b2FZM3hPX2FJSDNEX1U3b3c3SEJNOUJXaktXS0xhZmJhOGlRY2NxME5HTFJacU9WYkk0Y0RqdUtrcUduTXpKSDQxVXplMTFYLUxwcHExdWPSAaIBQVVfeXFMTzFoQ3RMcDNFUFVTTmRhUHh1VU9oRHlwcmNpUnJSN3BkbVZvQ21sREI3SmdMc3pEQ1l6Z2EzT2JNY19KZWN0Q3lrZGhrZG5uQ0Mtb01QTEpTVTVkSXNMZ0U4LU93RzZ6OUR0VkxTUHFKWXVNX0Fva210N18yZmtiNklSLWRzWlVxNE84NWhLZUw5Y1Q4Nm8tSTVNTk9yVThCd2Zn?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"青森県","count":11},{"pref":"北海道","count":9},{"pref":"新潟県","count":7},{"pref":"島根県","count":7},{"pref":"群馬県","count":5},{"pref":"福島県","count":3},{"pref":"宮城県","count":2},{"pref":"長野県","count":2},{"pref":"岩手県","count":2},{"pref":"三重県","count":1},{"pref":"秋田県","count":1},{"pref":"和歌山県","count":1},{"pref":"山口県","count":1},{"pref":"福井県","count":1},{"pref":"京都府","count":1},{"pref":"広島県","count":1}];

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
        <span>対象期間: 2026年8月26日</span>
        <span>·</span>
        <span>公開: 2026-08-27</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={55}
        periodLabel={"2026年8月26日"}
      />

      <p>2026年8月26日、KumaWatchが収集した国内のクマ出没情報は総計55件にのぼった。幸いにも人身被害の報告はなかったものの、市街地や住宅地への出没が5件確認されており、住民との遭遇リスクが高い事案が散見された。また、三重県では有害捕獲が1件実施されている。出没地域は北海道から中国地方まで広範囲にわたり、特に青森県（11件）、北海道（9件）、新潟県（7件）、島根県（7件）で目撃が集中する傾向が見られた。本稿では、当日の出没事案を分析し、リスク評価を行う。</p>
      <h2>主要事案の概要</h2>
      <p>当日は人身被害には至らなかったが、クマの行動が人間の生活圏に深く侵入していることを示す事案が複数確認された。これらは、偶発的な遭遇による事故の発生可能性が高い、特に注意を要するケースである。</p>
      <h3>都市部およびその周辺での出没</h3>
      <p>都市部やその近郊での出没が少なくとも5件報告された。新潟県南魚沼市では、スーパーマーケットや民家の近くで1頭が目撃された（※1、※2、※3）。また、福島県福島市では住宅の敷地内を歩くクマが目撃されている（※4）。広島県広島市西区においても、公園でクマの目撃情報があった（※5）。これらの事例は、クマが食料を求めて、あるいは移動経路として、躊躇なく人間の生活空間を利用している実態を示唆している。特に商業施設や公園といった不特定多数の人が利用する場所への出没は、深刻な人身事故につながる潜在的リスクをはらんでいる。</p>
      <h3>捕獲・銃猟事案</h3>
      <p>三重県尾鷲市では、小学校の近くで有害捕獲されたクマ1頭が殺処分された（※6）。人身被害が発生する前の予防的措置として実施されたものと推測される。学校の近辺という場所柄、児童の安全を最優先した対応であったと考えられるが、これは同時に、クマが次世代の人間と近接する環境にまで出没しているという厳しい現実を示している。</p>
      <h2>地域別動向</h2>
      <h3>北海道</h3>
      <p>北海道では9件の出没が報告された。恵庭市では体長1メートルを超える個体が道路を横断し演習場方面へ向かう様子が目撃されたほか、愛別町でも出没が確認されている（※7）。また、函館市では農作物への食害も発生しており、農業被害への警戒も必要である。</p>
      <h3>東北地方</h3>
      <p>東北地方は最も出没件数が多く、特に青森県で11件と突出していた。六戸町、弘前市、深浦町など県内広域で道路を横切る姿などが目撃されている（※8、※9、※10）。福島県では福島市渡利で目撃が相次いでおり（※11、※12）、同一の個体が周辺を徘徊している可能性が考えられる。その他、宮城県栗原市・仙台市（※13、※14）、岩手県花巻市・宮古市（※15、※16）、秋田県秋田市（※17）でも出没が報告され、地域全体でクマの活動が活発化していることがうかがえる。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県で5件の出没が確認された。高崎市倉渕町では民家の庭先で目撃され（※18）、安中市松井田町では碓氷川を渡る成獣が目撃されている（※19）。みなかみ町でも道路横断が報告されており、山間部から人里へと続く河川や道路がクマの移動ルートとして利用されている状況が推察される。</p>
      <h3>中部地方</h3>
      <p>中部地方では新潟県の7件が最多で、特に前述の南魚沼市における都市部への接近が顕著であった。加茂市でも田んぼなどで目撃されている（※20、※21）。長野県では大町市と中野市で出没や痕跡が確認された（※22、※23）。福井県坂井市でも出没の可能性が報告されており（※24）、警戒が続いている。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では、三重県尾鷲市の捕獲事案のほか、京都府舞鶴市（※25）や和歌山県田辺市（※26）でも出没があった。中国地方では島根県が7件と多く、益田市や奥出雲町の市道・県道沿いでの目撃が報告されている（※27、※28）。その他、広島市、山口県周南市（※29）でも出没が確認された。</p>
      <h2>出没情報の集計と特徴</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主な出没状況・場所</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">11</td><td className="px-3 py-2 text-xs">道路横断、山林付近での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">道路横断、農作物食害</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">スーパー・民家付近など都市部への接近</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">県道・市道沿いでの目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">民家の庭先、河川での目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h2>総括：リスク評価</h2>
      <p>8月26日の出没状況を総合的に評価すると、クマの活動が全国的に活発であり、特に人間の生活圏への侵入が常態化しつつある危険な兆候が見られる。以下にリスク要因をまとめる。</p>
      <ul>
        <li>季節要因: 8月下旬は、クマが冬眠に向けて栄養を蓄える「大量採食期」の始まりにあたる。食料への執着が強まり、行動が大胆になる時期であり、人里への出没頻度が増加する傾向にある。特に経験の浅い若い個体は、リスクを顧みずに人里の誘引物に接近しやすい。</li>
        <li>餌資源との関連: 全国的な出没多発の背景として、山間部における主要な餌資源である堅果類（ドングリなど）の凶作が懸念される。山での食料が不足した場合、クマは代替食を求めて農地や住宅地の果樹、生ゴミなどに引き寄せられる。当日のデータだけでは断定できないが、都市部への接近事例は、山での餌不足の可能性を示唆している。</li>
        <li>人口圏への接近: 新潟県南魚沼市のスーパー付近や広島市の公園など、本来クマが生息しないはずの都市環境への出没は、極めて深刻な事態である。これは、クマが人間の生活圏を安全な採食場所や移動経路として学習し始めている可能性を示す。人身被害ゼロは偶然の結果と捉えるべきであり、潜在的なリスクは極めて高いレベルにあると評価する。</li>
      </ul>
      <p>結論として、秋が深まるにつれてクマの採食活動は一層活発化し、出没件数および人身事故のリスクはさらに高まることが予測される。各自治体および住民は、誘引物（生ゴミ、放置された果実など）の管理を徹底するとともに、最新の出没情報に注意を払い、遭遇を避けるための基本的な対策を再確認することが急務である。</p>

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
          <dd>2026年8月26日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-27</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-27</dd>
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
