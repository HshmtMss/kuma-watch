// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月4日 / mode: daily-report / 生成日: 2026-09-05
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-04-daily-report";
const TITLE = "2026年9月4日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月4日に集計された全国81件のクマ出没情報に基づき、住居侵入事案や農作物・養蜂被害を含む主要事案の特徴と地域別の動向を整理した。京都府での民家軒下侵入と駆除、北海道や山口県における農業被害など、人為的利用空間への接近が各地で確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-05",
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
  datePublished: "2026-09-05",
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
      "title": "2026年9月4日 京都府舞鶴市 住宅の軒下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQd2VPOEZkZFBnRk9pY0lvaVlpY0R1YjVSS3RCbHdvYkRacHZGSkt3OURkT09NSFV5X2F5YURZS291c0ZiVWpzbGZPYXJRNGFjWWIwUjgtSFE3bHRObVhuRFg1c1h1X2tZelJyMmpDY2dXUW53cmdwLVJoTG9jYmEzZU94aHZ6QTRnXy1MRUZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 京都府舞鶴市 住宅の縁の下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE92NFR4UjZLb0xGeWJ6M3NUQUdNeUlyTW5YSzlFa2ZMRTZGZEFYRVdUNGl0OFR4ZEpIdXZEWF9ZSGdPNUJyUHJWZDdHd3Vob3gyQzFqa1FmNUNaZjZzQWdpS2x5Q1RaSlpqeXBZUHFyWHlOWEFNcDY4RQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 京都府舞鶴市 民家軒下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9CSDBJZFFuUDJDeS1YY085V0JmOVdsQW5yeWlKcEpZMk91a3dmRkV6ZnpTWjF1U1pPbHdseHhJQ1RhZDY5MUFPMjQ3a1otREtiM1VxLTdQVWJ2THQyc2QtTlN4U252MWhTU0RPdWd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 京都府舞鶴市 民家の縁の下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQU1MwZFhpNXpXQmp1RWhwRjBQeXR1SnhmWG1UMmwyWVc0LW5KVGNUTjYwSG56Vnp0dnJiT3ExeVdEUzhfdG1xaEF1cHRZRUhkVVYzUFJyOXVnZUNKcWo2WVplY2p2S2pVTFBUb0cxOWpBMFpOUFdsQUUtZllleC13TVREMmNiY3JMYnYwN3hB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 京都府舞鶴市 駆除住宅付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5jMXdaSWYzZmx4WDBpMHNSV3RhODNDZFFsVjVwUlhLdXRYZnhDWndHaFI4Q2ZkVE1rWkFDZmlhbTh6eWxITDJNSXNseVdPLVk4UGNfU1NSNlhTQmd2TjR6UEF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 三重県熊野市 私有地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNS3NsUWxFMDZiR21GT1F1SkQyQllJemZMYkx4cktBWHJ2cUtJREFwcFkwblFGN0hUTXhueXRHemV6ZHBzZF9lMFZWX2Z6M1dHQ09LUjJFek1aVElRVElzeHRkeFcxUFNfUWQxQkZzWUxaSGgtRHMtc2E3cGdMZlBZRmhYbjA0MFnSAX5BVV95cUxQajFmZHNnYmtCNG1WWkp5SVVJS05NY29CMk9JSm43eTlKZUlBcnlDYlhtNHd4TGN2d2k5NjNCV0FkY2RpRWRaa01veU1wRktzRUs1dzJ6akhSM1R2emJVanAtS2V2RGVlWnc4YndHY2U0V1ZmTm1lTzJucWdUa1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 三重県尾鷲市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPX1RHUFl4YnQyc21KOEI2enlsSkhzenRhUTRKUUkydkFabU9qSDF6al9sSlRwd0tuNzdIT0tFZlVGcUItRXQ5UkVidzI4TklTYmxtMGoxZHhMVzgzN2JaYUI0eGZFeFEtcHYwS0cyRHRHbTNIZFpxTzRjNWtCNTNTcGxNdEpER1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 福島県いわき市 小名浜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE02TzBVSXlrSi1xd0RKOW5PcjAwSUIteFd2RGhGdm92QTdZQ3pHNk13V3duNS1CLUdZY0t6dWRYT3I4aFhSYVZEdG5qYw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 福島県いわき市 小名浜支所付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBwNk1zSWJveEFYWjM3akF2ME5WOHZfVDQ4ZExkT2E3OUpXNUZOY0ZyY2FsaDUxREpJNGptUFY2SEFpaFNFSXgtY1JIUlZJZG8?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 北海道函館市 畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFB1NWJBWmhmWUhicTc5QThnamFaeTcyamNLNDd6VjNzcWZ5ZDg1SGRyaklpd2FpUkxnaDZsNWZRajF1ZFFmTjM5anhhZXlMdXF3ejY0NC1jUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 北海道岩見沢市 毛陽町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQX1N1eWpDc3ZibjBjS1JHMGlvcWJfWDhqSGl2blBMTkU4d0RKZkpfSW5MS0V6TzAtd3NQVXdXeTIwT2dfY0RPeTU1NlQ0TUFwbVJSM3pVYVFndU1tVjBzZHlabFVmdnY3ZVZDdDFDb09mUVBYOUZXWVVlOEd5bTJoMWdLMG9TVEFyZ3VCMXhaRUo0ZmczUTFsYXJ3Y27SAaIBQVVfeXFMUG9IaW43N05WeDJidVJEOE5pLVctV2RnVWxYNGpmdWZhSmNxMlVuMjZIWUtaNDVDaVprMEUyTXEtREJOZGdzaHZKTXJmYjV1Q3Iyb1BBb242a3FQRUVSRkUwNTRSUlZDWEhOMGFibTNEZjVybEF6dnpfNHR1cVktVlBLUXVvQl96dnhaLW52b2NuVFZHWldfSGRta0JKblE3ZC13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 北海道西興部村 上藻の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeTFyd1NGSUNlZVlvNnhSeGhrRUVFcWRNb2xpdWhlejJnUW9QdXJKX0swWkxURXVBM0NvNlNGX3BhUTJRa2xleXFGcFRyeGl5blZoMzE5S21YT1NUbXhhUnFLOTkxUktiVGRtd3BwRXkzMmF3eFZBNkxqX1BKN2QtTDdYV0R3NWR1TUxZcVUwU09zT2pmQW1GaENHVnrSAaIBQVVfeXFMUHhEa3dPemNYWVJSTlF4dVhldEJwanNiLVB1T2FQUDNTcEZNam44MDlNdHhleTNoRTFXbnlwaFotMWh4M05FQ1g4ZG9jWjNENllFUVZiSjhhR2pVM2QtMDRNTTFIUm4yVEwxWjRMeThHVXhSR3BGQUxFbC1HeUxYS1EzSEJld3FSamFUMUVDZFRXejVfRUs4ZXhYc1ljUS1aWU1R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 北海道遠軽町 生田原安国の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQTGJZVEM0aHNvTGtoYnNROURjN1JjY0lCaUNHQ2pMSTMycThXbUZya1ZwYnM3UjdJX2s4TzJPUWlobkZZMS1sdUZvcmE5NTByeE8zQndsWjVIeS05bEFubUN5WDdaajdBRDh4MUlKMzJ2ZTVYbXpaWDBrVk9lYlJGYk8wNlNkMHd2NTVPQktKLVlCZUVXcUNfOW5Yb3JIekw3bWNYV01JSmJqZnFYRG1n0gGiAUFVX3lxTFBDVGZnOVVaRG8yb0RSdmtkZHI2VUhrWHdtbUhNQldwQUZaQkk4STFIMmVub1g1aHJfVWxUX0E2MTAtMjVxdVRYWlBTZkp0Uzk1TkZqVFdGWWpzZmlONTlRSlFXTUZuVTRDUy1GbUFfNm9mSjdVVGdfYTBSRGtnMnk2cGhKMkV3MmdYWWFxNHpYYVVVdUpqSzhPN0pWZTkwM3ZEZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 北海道新冠町 西泊津の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNdXRqR1RhNGFiT0tQY3A1UUpmQ0dGbDEwejE5VmZtT1NNWGN1Nkp5WThwVXZ5cFc2R3E3Q3owaXBPTU1MYzB4YWFDMTB2LTZGY1NfZ3JQNG1RbEFKanNPRXo2R1hjcnp3OGlMWFpNR1V6MFJlVlZQWDRyUlYtamhhaGJwSmFUNHhRS0xkZEpjQUZJUkFrRVZTSFh4cnnSAaIBQVVfeXFMTjBuaENCZWwwYUEwNnF0WGVqN0NULVdjd0JUS2piZm9qMjhHQlduZ0FJMGF1eXhzVDhucnQ2ckg5RWN1d255cjNHNjhmdnVRbHlRbnNna0Rfb3BRbXdaLUhaNGNlQmxYcHNEdjBSVUJxX2RkeG12SGFmM1JzMkdmeUtzQ0RKQlZHZFlhZURXM2xtMGpWeXZyUGhQUFV2c3kxbzVR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 秋田県由利本荘市 小栗山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQT2tNLURWRFBlN0ZnTGhaMjBSYTdfUklDd2FxbmRUSTllNEdCbjM4WE96aGVoMzBya29fY2tQWkxjbmppRkw4dnpwNlFuU19oeG5vVGZ6Skw1bld5TTZ0RzF1ZDFWdDBmUzVaSDc0bUVXVzR2QnQ0b0xjbktuem9vd1JRTHF3bjU5VkRmNEdkUl9HRDE5bDctc1FNNTTSAaIBQVVfeXFMT3pfZGJLbVl3cUtUNU1sQl8zREFiaXZDQWhNNWt1M3A4UWo4cHVPcG9WR25FWERUQmtBcnVnS3UwbUs3Wm4zTzlRTkRlemtVbG9BM180UUNvVzJqVzd2M1NILXlsZVpPby1LRW5xX3UtWFFHX1hfWHZsY0NwcW80OWhBQWplTGlZTmFOMkZWU1pDN3Q4MjFjU3NiQ29yYlEzczVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 秋田県鹿角市 十和田大湯湯ノ岱の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRUw3MUlONjdIbzNvSk9OUDdteUJyaVFNYjFzQlJzdFlzTnNrM2pIVFM1YkdUY0tBcjdvOW52SE5CM3RsZGFjaHNITGdPcTFlTDhOeEpWRlJ5TDNSNlp2ZmtLSFByUl9USTNUTl9XQVNPUlVfNDM2NTN5RDFrWkV2bnozcjM3ZERpTy0zWnhDc2J4TE9KMUNJMjFEUDLSAaIBQVVfeXFMUGcxZWZTQ2xrX0lFSUw2RlgtMjhXRnRWOEx6Mk9pV1ctcjEwNWhMaGliRFdhSUxQeDR5cEM1bzY4UVV1dnZfQjFXTlVwbE5RaFV2MzBXc09yRDFnMG4yQk9KbkF0MG9MMmUyM1o2dzdrTWpqX096TnBFZGh4ZksyaUJDQlg0TnpET3JOUW5iRS1GZ3BPT2IwZTltOUhqVDJBYU1n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 秋田県羽後町 軽井沢隠里の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPa2FvUXQ3NG41QW5LekcxNm1pM1ZpSUdpSXd0ZU50UVpndFZwcmpvREk5UW1WaU4xcnFSLVpiV01JdUNyZnRDWDFwU0Z4STBadTRKR2lNUDl2REtMV1NnT1VwZi1TZlEtU0NkZEF3aTFVcUtQRjNOTGZRNXNTNGRLOXRLajNyOVlHcHYtRTZxS0RrcXM4eWxiSmtFMEPSAaIBQVVfeXFMT1dORGFDcW1ac0oxaEljMFh5SmRYUmU3YUxLT3pfNUU5VjZGX0xTZXIxamVIaFk1WFNmdVg1aHg4anBTd25tUDFNT19HUkEwNVFQQTBOLUMxbXdqRVUxdHdVVHZ3OEV4TkRiNVlCNUM0RmNBZzZYdnRONFZoaFBCZURpM2pPX2pXUlV1d2RxQ0N5Q2VQSnlhLUFuX2phUUlwM0Zn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 秋田県羽後町 林崎槻の前の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQN1RkRUVCOFZGY2ZKMnFHc05NRExSMC1mdHFYT0g2YjBHUWdUdHVmUmZqYmtTRHVyOVFuMnczTnZyMkFzTTMyS3dRemVnS1RZdW9jN2pod2lCR0VaRWFzQS1fTzBnWkJXU1FWemNCYVJKZEVXNVB3bHlyZF9nMmllQ2ExY21OSWJmM19UZDJVZmw2ZXFTZ0NSSnZ5VEfSAaIBQVVfeXFMTU5jZzRPcFFmZndSN1V1YW5ObDZ5aklaQWVtdkZhWkNDYzVvNHp6Q0JySkhFLV92XzJ6NkRCVTBxTFQyNGJqcUw5b1V5TTBCNG5WYWNiM29kSVNIYWZEQXV5bVBYbmhDaWpwbWh0YkFHZGMxeWlTX3VEVDYyb3djaTdRVm5IOWFaWFQ5R3h5Ykk0X0F2d1FDekN6QUEwUHlYQjFB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 秋田県小坂町 荒谷道作の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOWlIdXI3NTJXTnJxRVpoZ1ZRZmQ2eVNwRkxaMmNwMUVIT0V2MVJsNHo1d25WWElXa3BCUFFMWVIyQVhmTnFpSF9sTDc4RUF6RE10NUZrSzBBWFdlMXUwQlpVZEZDSjRBclhNSFhaTVZaMTJDN04zVTBYQURVQjV3cmRJNGxaamY3RWNRaWZBOEptVzF4cWJ3b2ZZU3LSAaIBQVVfeXFMTTg0YkVoRzRCZzRzZlAxbzV3X1BOUUJaVDg2aDBoUWpXdzFkSEhBX1JCN2hQSVF0VUdTX1YyY1RiS3JISEFkUV9WaXEwcFNveklYaVVaNF9mekZ1UUZaNTZWTHYzODJVdW90RXJrbElMYUpXdUZEUDEyMTRJanA2LWU0aWllSDdtNGR3OVV2M0dmWEpLWG1KNmxRNkNTalVpS2tR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 宮城県大和町 宮床松倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTExYYUhVUTFaOVdfVjZ2QWtGRlVzcURlVHdPWFFtZEZBLXc3TDdLLTl5R3daQllQazBZZnM5TmRUM2ZtTW9PVnFYOWptU0lwZEVqOHhKUUFVeUZvcXc3dUpsMkF2aXR4bHVheDZsVUxGSXFpQW1oVFNRbTkyMk9RcXg5d3owN1B1NFkxY0FpQ1RDR0M2aUkxYlZZZWTSAaIBQVVfeXFMT2ZURU5tTktWSjNxVGktYm9DUTJxZF9scEhSTU9KUE1WZlI1eEZvWGNnbFJLNkt5OGxhNEpUcU1nVXpPcHF4ZmR3REVFLWYxTGpKcmFnQ2dLbDJzSmpKVnVELWh5VF9ZNzFHbkxVS3dVZF92em1mMWN3V2ZkZzNWeFVJS3p2My11bHlQRWc1bFltdU9qYjhlSVJNVHBEbFo1endB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 宮城県大和町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 宮城県仙台市青葉区の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 宮城県栗原市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 岩手県北上市 和賀町後藤1地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPOE9nVTdyTm5jWmhHbGs0RnNNbXdndVFINGpPVG91OGQ1ZWZjOWo3SngwZjgxalNQQUpLVjBsbzhpV2tRWXBEN1FhUmVTa0d1WUNIUGhPSDBWM2NubThHVU1Pai1ieTVZNk9UZklQckhSbnFva25HRHFlOTVjaGRSb05XVEltdXB3Y0tSc3JsM2J6T1hMRmowSXhrNl_SAaIBQVVfeXFMTWJrMWJhLUtkU3gwQ2lxelliUm1YTlBpd0tJWktEU3gxX0dMc0tqd2lSN1lhM0xTV3czU0s4dVpRWnBlSVM4ZjAyMHRocUZxbUt2NXRCR3ZrdnBfQzZzOXhtdTZNZ0NSTzBRcTFHdVRXVzMxRFE3Mm5pUzBlUnk0UmswU19fUHRqc1BoZ1QzVENJbjBEbERhcVRhMlBibXVrZWNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 岩手県北上市 更木３５地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPdlZPeWQwSVlVa2QtQ0JVYWRveDk3N2l4WVphbWxZQTdscHhlWTBCUWtwWWU4YllQRVNYeENuTmp6TkRWMGhiYWV4b2ZUb1gyS3BRSkRLREJNMzRHbFdsNXZmd0gzUVluZGtTb0tLaHlIVjlzRGZsUlFMdUwxSnhKWjZnanBZYld0cUhlVUxkVk1qSkdsVWF1TFhYMktsM1R4d3ZPc2tfNzFoYnBpNmkyS3BMTGxKbkJETUFCZzVEclE0VUNNT3BUdDNybjRJcTllV21WR3M3VFVRSWJvcGNrZ2VSXzJ2QXZOZlZ3TjMwYU5TQdIBogFBVV95cUxQMnFDaWxfVUpCRG1hUUVKT1ZDdF9vSEJHc1Q4ZGkzSzFYeW9jbW41UDZfamFjOEpPcXRPcld4NlN3U3NJSFo2SWNhNUllNERUYTc4SU5PT0FjVzg4MFY5dXQwcndGWHNBa3FGQlFWNUtrc0tIMmhyazJiMVJVQ2M0OVlWSjJXTVk0WkVDaFBkWjRDdnY4czdtOFZIYkFnT0J6T2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 岩手県紫波町 高水寺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5IMWc0ZVRMbWFLYkFDclEwZ3B0dlJ1eE4yVXBoaE9mNDdzdkdlMlBGZFJnZ242R25FUFdGZ1ptUjRCQ3NXcDc4NEpLZl9yUGVTa1p4V1Q2NWpxbDdYWFpr?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 岩手県紫波町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE5leVh2WEZjckYyRVkyMy1mVTlzLXFhbWFYWjdKbkpqWmdabFQ4cDEzQTk5ZjVTdmlxb2ZodERSX25Yd2djVE5oRmxiNFJUME94OVl4ZTBENA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 青森県東通村 猿ケ森の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNT2NyMUlkTUhEcm9RS2JHdm5VMnlXa3dVdTBzYWFrTGxWWWg5UmlIbzlLaFpSYnRnNjhHMTd1b1ZjakE3ZlozQ0VMa05iaFRrSldsYXE3Wm82b295NV9lMGVLSG9maDRUcG9td0FuRk42aWl6NjJHbjFxZkoyTlJ1TnJnUnB2S0lqcVpBQ3FTcXdXQXFJaWZvdU9VNExvVF9jRHVZenFvUEhiTXpmbGNF0gGiAUFVX3lxTE4tQnE0M2lZcWtXaThYX29vUzh4WHZ6T1kwZWNhZ29EU1A1aGhwTmxWUENsejZUaTF3ZTBGMjhSTFdJUi13Q0F1TVZvYlJPeUU5ZUZZakluMlV2V1Nld3NmQ2c5LXBWT3luYUEwNkRPR2NiT2o5bTBRVVZNUnlZbjRSeTFGVE5zUGxzT0lST1dFTDc0NkF0RjhLaThJSzVXdDBmdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 青森県東通村 下北郡東通村猿ケ森の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 青森県東通村 下北郡東通村小田野沢１−３４２の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 山形県河北町 谷地工業団地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9QN1BrRVEzeWVOOWk0YVBYMUo5TmJhRDcwNEhNX2hCQ0IzaEtTSzMxVGVDZGlKdXhRVlM5c1pjdW9WOG9PbEpuOThhS05NUzFFaWtraVp4Wjh5UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 山形県河北町 谷地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE0xbU1XallfV01lZXh6YVFmSEVMMDR1eWhpeG55V2NtanRNWl9OeElDZ25qcnpfVDVjaDdNQnpQZVhwVk5XM21veFRnNWV4Y1Q3RlRCQ3J2bVk2OUUzeEVkT2w0U21DakNMNTh3TXctQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 群馬県下仁田町 西野牧の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOEw0OHpsdk9pQV9vVUFBWG1Iblhzbmlpbl93blo3aDd5OHdXdE01Mmo2bXlrWnBPU1lFTXFxRFljOXlEZFo4MFdFOTVaNTBWWU10a1FJNDlTdjR6NGpSdk41RWQyYWNmandid21rZ3lHN1dKTENzSW9VN0liZzg5ZFNRZnBOSE4zdkxScFZhcXMtSTEyUEFmS0ZJNUXSAaIBQVVfeXFMT0xwSEhXUEdnaEpvaVFibnRmUHJFTkhOOEpIdk44WDBoYVFnVEY0R3BUZk9qcG12Nmx6Mk9tRjh2cGhPTG1lNzIwQzR3MkdVcldJTGg1aENlTDkxckJQbTdJMkdab0laOElQWXB4TFlFRmprbjgzWmVWRjd6VVNsWDN1MWV2VDlnSlp5ZkcxLTRUQmxSakxEUkJYdDRVM3JrNFFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 福井県坂井市 三国町安島海浜自然公園付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 福井県坂井市 三国町安島の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTHBnWHpkVTBfZ3E0eW5DS19VNFlaanNrOUVIdGRuOXhLTjNJY2tBRmxIdnh5WHhneDJDZzE1Um5IR25hLXlYd3p5cmxLX2h5bWVDa1l0MDFTUndsMUVHLVhXcFU1VlpwbjJhaXRVYWZJLW9Ra21FcEJNOUswd2VnQ1NjZ21PLWVSN1JlLUNzbXFyc3RiWC1TdmprcnLSAaIBQVVfeXFMTWVZNW9uMFNIeFo0TVlvS1JhUW1nS3VxUUJBWWJ1aTFqTjl1djk4cy1lVDlSZVk5eDY3emRaSll1enlEWjk3a3Y4X3JXUWRBM1d1Qy13NlpUaWFXUTZ0VWRQMUFfU0pSMjlpVG9xUV9LdGxRblFqS01TS2l1a0YxSU80T3ZlRHdNTUN3RVMyWEZQeVl5T3huM2RtMkkyblNBTUpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 福井県越前市 春日野町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPSDA4Z01pckhXZDg5LWxjaUNKQVp1RHB3WnlJTnhuc1hmbTBseURFdkVzZE1TT3hZbmYzQ1VrcEFMMDlPcmlEeGZNa1QwdkplbWczMF9RMmpPVG8teUxjMnNCNjJzWEFVQWw5NDVzQlN5RnZNdElqU3RIeHdCT0lkX1VJLVJNd0hOSFlRZk02T0hIbFdwdEs2NmJJT1NLb2NLZ1BKRDJ0dnI0MHlrUTlReDNjdnZsZ1VaeWpUdmVmQlFGa2tQUzhwSkpxNXhldlBhT3RCdTc4NDkyR0ZRTV9ZN0cxRzFLQU5na05Lb01NV3Rhd9IBogFBVV95cUxQcTJldV9ZTmdtZnlhcEZzRXVwazk5dXN1Y3UwOFg3Wm1RTXBPUDdCQkdCaEJ5UHZnOVpsRF9FR2ZHVVcwLWZGR0ZoWHRYRkxBckVZVUNaczJ0VXZHbGw1ZlpXb096bnp6N3pBbkJWcWVpa2dzVmN0WTQ2QXdRaVRXUWhSLWZIeXBNRzJHaHRKcENVTnR4NWNnazdhNlRfUmVSakE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 福井県南越前町 河野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPT1RpSC1XS0ZVU2xmangyaTUxSXlvOXhvSXUtRkxZd013M3gtb3JaN3lIMlN0MXQ3dVBlT2drUHE2b3J6VEZ6MDZOTnFzUFdIMTgwUFZhNVpValdFVzNNR084aEtmWE1vZlRWRF9adDROSl9TTUUtdXNFcHBWblVzOVZ0OHBQbHpCQ3RhS2ppckx3b0llOFYwVkQyaGzSAaIBQVVfeXFMTlFuX3JERVFYcTVOeFAyVXEtQTh5WUtSV2FIQ3VpVVRmcjlRWWNVUmpwcEtPZDJFc2hqM0FqNmpQUmtHNGVJaUtXNFhiWGtmWEg4ckxZU20zTG92N0gyYzZpZzJIQmRGb1ZOMWVJbHd4WGp0cEFFOUJERi1ac0ZmWFNsSGhtbndFbzFTSGJKSnNhQWwzN0l1YXZEd29vNEgwY25n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 福井県南越前町 河野地係の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 富山県富山市 八尾町深谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE1YMndsdjM2U3J1cUJmYk9OY3BuVGd4a2UtVGYzWjhCN1RDWlFiYUxPT1ExZDh5MngxN1pyT3BILTJGSnd0N3dDRmlOQlEwdkFCazZ3OTM1bzkzUVRXLWd1V1FFYlFMaEYtQnlCVmUtckJtZEI0TjhWZzRB0gF_QVVfeXFMTnlPQWRBWWFGMlVQMmFobDVkWk9kWW9vNjVUS19PU0wwN1FYUGx4WTNVbEJVWGdOM3dZemNPYVNpcEpIcDNreVhaS1VnTlRkM3pMLWJpQVUySHZOZXhaY3dYYXo0RjJUWVFXV041aGZVOHU1MGRoV0U1alVlU0hZZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 富山県立山町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1FUHpKOTZKTmJnNkc1S1E4VGpmeURQaXJCM1AxUzNzemprTDNnVkcxbnBkM0VRY0tBS0RVYWJOOTREcEZpaUFZOURCUzNVbWgyVUJjbmFVRFItZi1RQjNDN3A0aUFqRE3SAWxBVV95cUxNUm5qMk1XM0Uydm11Z2F0d1dSNUxxeEFWa09lbGNlV1lXOFlERGFUblk4VFVOM2xHaXJrbTByQzRJZEl6TVNvYW1PemRadTFqeDl6Mk03SnhqZWxpcW5CSGdOcE9nWE9NWFN4Qkc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 富山県立山町 立山町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPX2xiQTR0bFJyRjQ0cllmQW5WOHNxT3hyYjBUUk9XWEMzZWxNSTBNSktHS3R1Rm12V0I1bzFHUzJRSzU4bUN4TU5abm13b0lkNjd2WDYzeVhZdVBUVDBDZXQxZUhXNDVqaUlyTEdSUFpNZnVpamFaOUVNeW1kMmtLem1zaWdLczdzLTZUa050R2h6OXVmUXk4U3JjVXkyRXZ5bDYwNHl4eFpIMEFLNURSOFFreHRRNTdDdG1yZlRJZTR1TzA3TW8tYmRKWXhfTzhSVUNEUndRSUVNY1Q4OHR4R0ZNUW9CZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 富山県立山町 石坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUDJWdXFuSjNqMGZjRnZDcTFRQjFTMTBZaW4xVnBqRmE5R0tiYUd4UnpDQWNOWmZxUVp3WjQ0UVgzV21TTHY2Wmx0NkxNTVRkdzR4alc1RDQ1LXNQZW9TckhwcEcyUkUwemJaRkt3NGlxTUtHejI2eFhrSHl5bFNSSFJBS2phY0FoNW9zS3h4TEhrU2czbUN4RGpnRjHSAaIBQVVfeXFMUENpMDA1R1VxazNTUnhTZXFqQzJPTDlpRGFFcEh1bTlxdVl4cVVFN0M5d1pmTU9XTWVkR1NXNVg2OGZCdm4xRDhzZUUtY3FMX2ZsSERxX2laazRBeUp2ZExsN2M3OFZJQlRGaHU2dUZhSGViNm4tMlRhRzBSV3R5eUowN05DYnVoUnlIVDM4MWpWRm5kSVl6aVRWQ3pZTXY2bUJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 富山県立山町 白岩地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 新潟県糸魚川市 大字大和川の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 岐阜県大野町 稲富地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 兵庫県豊岡市 日高町栗栖野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOM2hEWElmU1B3REx4Qmx2TElqam44ZXJuUXRiNHh4eDZtS2dCQWdWYlRvQUwxcHRwaktfUW50V21uN05YMnVCUEFzVW1IcE5YSDdXaFE5SURQZXRCUURTZkxUMFB4cG5kOWFpX0xGZVZ5dTlmWFlXZmh6OVVqTHJwczVybjI5OHBEWFJZOHJsNWNNYVZRQXZDNDdiYXnSAaIBQVVfeXFMUGJOQlg4QzJhSldLYzB2Qkl6cS1zbTJfRFNod1dXb1RFMm1hdTRmeHRZNGtpd0JEcEhhbXB2bWUtNTE2Z1Rwd2RPQWI4Qnd0Q3p1b1oyczhQdlpZaHJjMU9QbU41aHVxSVowcU16RTR6SlJ3NkhRbU1YbTNPNDlaU1VuMmVfZTJMTHF4TDl2bzR1QThRaVdSQUhHR1pabXpmRWd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 兵庫県姫路市 夢前町前之庄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONUExUjZWNXJGVjFxUGYwUzk5Ym5fTFM1RXFPM1JRUDlxVnBtVnhJRkMzQTFfUU5Vc1ZtNXNDZHM0VUtyZ0JqWDN5TVlRLUN2NlMwQ1QyREkySkQtd015NGpuUElzUUpjSjlXdTBZQWxsdVBKWjFQODZYV2ZPVUtsQ29uTi1PU1NKNlZaOXdWT2JtNUFIUHFJdFpwUXfSAaIBQVVfeXFMUF9LbEdXczRDcFJKUjBudlk1WGluR2VwRzJIUHdOWHpUdlp3emYyLVhtV0lqbVphWDBuOXVxZTJRSlAwdlhFRTVaNk5DdE54SUlSSGVXYmFqYmItUHBWSHZtazFZSUVpNmhGVl9Cc1FrdDd3X2F6SDU0VE9oU2EwRnowTTJFaUFDRmE1ZWQxNUNWUzJBNHlmQUFHTFZSajdQLWRB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 奈良県十津川村の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 島根県益田市 黒周町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeGYxOGRfYWpCQ0JJVHJxSXR4dkJjSEk5aWJfdTItUWVQQU9wQnd2RkZMZUk0ZjhhWE5jOUlCc1p5dEU4aVM1cVd2RkUyNXdqWFNhLUIwb0tqWEFfaU5ESldRTGVUQnROa3lsNjdnRXllUjh2THN4MERGUld3a2lMcG5PU1J2NTFWeExfb19zeUVPR1VEOEUwaVgxLVDSAaIBQVVfeXFMUFVTYk5iNkJfekZJMWlWV0hwNllzOUwxR3FEdkwtR3lCS3BTS2twM1c1R2U5MnB2TVZuZ1NlTl9vZER1UFhvNDhnWnU2M0ZpOF9OLWx4ZnpJLW5ILW5HbzBiQUhPemtScUdWQU5GRFJZZDA0aW5LUjM1OUY1MWozZXJ4WEFvWFc2Ry1xMmdiZU5zMk9YczZHWC11bmpEdGtQMDRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 島根県益田市 美都町山本の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQWnFnR0Z6VjAyMGtSUllwbm9pcHg2c3lzdThzc1RKWUpfUVh3aWpQZmVTM0tsY0c1WEtYTWlGanNrMEFzTllFdHQ5VDByaGMwVGVVa2VDeE1iREpBMkpjaVBXd1VzTmJYT2N2RDFUUmR4V2ZWSGZ0aDFhYVlGMWRZRHpNd00wWGgyNzA5aUhyTkFBQVFPaHMwWGttMndmUWlUZnU5NHhpZTdMYTBEeWxodVBPWmxpU3B4VU9jNFBCSXpTVFAtNV9FRVhEVS1GSmtFWmZsb3kxaHBmOTFjcGlKdHVrcXdtcFpzb3EteTJIR094Z9IBogFBVV95cUxORE9iM3ZhWjA4Q0JwOGlHYkQ5SWVoM28tb1ZoQ2pmaGY4XzBxWEhpN2tVT0ZXRk16V2tjdzRWYm5seFQ5WEdrQUk1MTlEOTVybmVZcjl4U3ZyeEItVVBqRkVZYXgzLWhLRHgwWkM0NV9MTVMzV01YT19FcDhWQy12VnhlaXdGQkh5WWNxZm5PdlVoWWl6a2tWUmFDQm9wX0dISnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 島根県雲南市 掛合町多根下多根の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPMzhYZ09MeFRiZjRmSGtLUW5DclQ5eFVwWG9RNk9zU2FCZExqaUhjMjNKdHA2LXBpRjBGbTV2anVWQ19GejEtQTVlNUx1RnU0Y1RuRldYcEN2YlVRVG5GdzdCQ1VCTldva1JOcXN6X0N0VmlvMDh0N2RLTm0tYm5KZVJldVNIR2FLZzZEQjR1X0dYLWpZRWc5TUROSnVreXZSa21SWXJSeXV0dUpDRmlN0gGiAUFVX3lxTE1mLV9STVVzVlppQmxQblBKaVEzUEo3WWlBV2o5bDFoSXN2QnBTRmdrQThNajNTT2NEclhYM2tFVDZIR1JDeGpQVlFPc3llQmxERk9DS1lXVmVJeTYxOEFZdUtvZ0VhM01LTjZUM3hmendyOG1ubGF5QmloUXJudmlJa2NmbVFBc042QVJEaWIwWTJ1Q2hwWlV0NFBPY25fbDZrUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 島根県益田市 美都町板井川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPczdXWEdySzhvd3FPV2hnTmlsOE40QnZJOWNuLWdtZWtEQWxfSjZ2cmVrMnlGODdTVGN5T25nRDhHUEN6aFBHc2l1dlJEd2VreWtqS0U0VVhsNEk3eVdNdExUTXBaX3Y4RXZyNGdMQzRlZXNtTHotVWFYdENvcTlCWTI5TEV3ZXRZWUFkSUhPeUpPMF9odjhRbGUxYzLSAaIBQVVfeXFMTWxILXRLQTZtX1ZfMThZQkRiTzd3SGVNNFllZk85bm50eHVKcVZzSDlqdVFnR2ZSZkEtUnJrbnYzVXdmM1pWcndNdEJzckNSUXBrdzZuTTJXdmVnZWRwNGFGSG1fV0JFY1BQX2pzUGZfRU9ha0ZTbnRfNTVIbjdxN0ItSWRabWNFdTBmenE2eHg5OHB1U0JlSnBVaHNRUVZ4ZE1n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 島根県益田市 益田市美都町板井川の板井川大橋付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 山口県山口市 阿東地福下の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 山口県美祢市 美東町大田の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 山口県萩市 国道上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9naERfbV9LQU5oZFctVjNtQ3FKalBDUWhwU1A2cFNKSWhLVWswZlM0STVMak5HREZ5NXBfcmliTVEzRnhqTWIzUjFHVUhlZUNrOTB1cjVZQ0lDclNfY3ZmWUNoaw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月4日 鳥取県八頭郡智頭町 中原の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月4日 広島県廿日市市 原上川末の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeU9yd2NnVXZzSzh5NC1Famh2VHhmNFhQZEhQOTZMWEdENkNUSXk3UjljMUhoY0UtXy1vUjZkUjFHdVl5WjRoeDNVZ0VlSGZLTzVmVUJGVHZHZWxfam9IRnM1NWE2blhHVi0yeDk0Wk5ocWtUU1JiX0xveVJ6Ti1ZRC15TDhndDZGVi04Zmg5UW5HLXRZVWJVLWpkT2rSAaIBQVVfeXFMTlVHVV8xOVh5OWxPM3g2UDR0VU5odUhKX3VzTkJqQmhZdXdBN3pOeV9pRmgtQlpjNng4YnA2SFFHS3hEdUtzSEtsUTNoMG9OYnduMmZRWXZBYW43ejA0NTBKOUVYSzdNQWtMaHdfMzZlbHpJRjZuMHh5a3pOenNPZ0ZwYk5mZ2E4cTRHenhiN2M4bmtjQ05naDI3a1dYXzFiVHFR?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":15},{"pref":"京都府","count":12},{"pref":"島根県","count":9},{"pref":"福井県","count":6},{"pref":"秋田県","count":6},{"pref":"富山県","count":5},{"pref":"宮城県","count":4},{"pref":"岩手県","count":4},{"pref":"山口県","count":3},{"pref":"青森県","count":3},{"pref":"山形県","count":2},{"pref":"三重県","count":2},{"pref":"兵庫県","count":2},{"pref":"福島県","count":2},{"pref":"新潟県","count":1},{"pref":"鳥取県","count":1},{"pref":"奈良県","count":1},{"pref":"岐阜県","count":1},{"pref":"広島県","count":1},{"pref":"群馬県","count":1}];

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
        <span>対象期間: 2026年9月4日</span>
        <span>·</span>
        <span>公開: 2026-09-05</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={81}
        periodLabel={"2026年9月4日"}
      />

      <h2>主要事案の動向と住家周辺での対応</h2>
      <p>本報告期間中、京都府舞鶴市において住宅の敷地内にクマが入り込む事案が集中して報告された。住宅の軒下で親子グマ2頭が駆除されたと報じられたほか（※1）、住宅の縁の下における親子クマ2頭の駆除（※2）、民家軒下での親子グマ2頭の駆除が記録されている（※3）。また、民家の縁の下で親子クマ2頭を駆除したものの1頭は逃走中であると報じられた事例（※4）や、駆除が行われた住宅の付近で目撃されたとする報道もある（※5）。家屋の基礎部分や軒下は野生動物の一時的な潜伏場所となりやすく、居住者との予期せぬ接触の恐れがあるため迅速な対応が取られたことが示されている。</p>
      <p>生活環境や社会活動への影響も記録されている。三重県熊野市の私有地では、クマが養蜂箱を破壊し目撃情報もあると報じられた（※6）。三重県尾鷲市ではクマの出没に伴い小学生の行事が変更される影響が出ている（※7）。また、福島県いわき市小名浜やその支所付近では、市街地環境においてクマのような動物が目撃された事例が記録された（※8・9）。</p>
      <h2>地域別の出没状況と特徴</h2>
      <p>2026年9月4日の総件数は81件であり、上位都道府県は北海道15件、京都府12件、島根県9件、福井県6件、秋田県6件、富山県5件、宮城県4件、岩手県4件、山口県3件、青森県3件となっている。各地域の出没傾向について以下に記述する。</p>
      <h3>北海道</h3>
      <p>北海道では期間内最多となる15件が記録されている。函館市の畑ではデントコーン1000本の食害痕跡が確認されており（※10）、大規模な農作物被害が報告された。このほか、岩見沢市毛陽町で出没痕跡が確認されたほか（※11）、西興部村上藻（※12）、遠軽町生田原安国（※13）、新冠町西泊津（※14）など各地で出没が記録されている。</p>
      <h3>東北地方</h3>
      <p>秋田県（6件）では、由利本荘市小栗山（※15）、鹿角市十和田大湯湯ノ岱（※16）、羽後町軽井沢隠里（※17）での出没のほか、羽後町林崎槻の前（※18）や小坂町荒谷道作（※19）で出没痕跡が確認されている。宮城県（4件）は大和町宮床松倉での出没（※20）に加え、大和町（※21）、仙台市青葉区（※22）、栗原市（※23）で事案が集計されている。</p>
      <p>岩手県（4件）では、北上市和賀町後藤1地割（※24）や北上市更木35地割（※25）での出没に加え、紫波町高水寺でクマ目撃情報があったと報じられ（※26）、紫波町町内でも目撃情報が記録された（※27）。青森県（3件）では、東通村猿ケ森で出没（※28）や16時15分に1頭の目撃（※29）があり、同村小田野沢では17時05分に車で通過する際に目撃され、車に気付いて林の方向へ引き返した事例が記録されている（※30）。山形県では河北町の谷地工業団地でクマ1頭が目撃されたと報じられたほか（※31）、谷地で目撃が報じられている（※32）。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では、群馬県下仁田町西野牧で出没が確認されている（※33）。中部地方では福井県で6件、富山県で5件の出没が記録された。福井県では、坂井市三国町安島海浜自然公園付近で15時45分に成獣1頭の目撃（※34）、同町安島での出没（※35）、越前市春日野町での出没（※36）、南越前町河野での出没（※37）、南越前町河野地係で8時18分に幼獣1頭の目撃（※38）が報告されている。</p>
      <p>富山県では、富山市八尾町深谷の田園地帯で痕跡が確認されたと報じられ（※39）、立山町内では1頭の目撃情報が報じられた事例（※40・41）、石坂での出没の可能性（※42）、白岩地内での成獣1頭の目撃（※43）が記録されている。新潟県糸魚川市大字大和川では敷地内に糞が確認された（※44）。岐阜県大野町稲富地内の山林では8時から9時の時間帯に確認された（※45）。</p>
      <h3>関西地方</h3>
      <p>関西地方では京都府が12件と集中している。前述のとおり舞鶴市において住宅の軒下や縁の下に潜み駆除された事案や付近での目撃が相次いでいる（※1・5・2・3・4）。兵庫県では豊岡市日高町栗栖野（※46）、姫路市夢前町前之庄（※47）で出没が確認された。奈良県十津川村山手の片谷橋では11時45分に出没が記録されている（※48）。</p>
      <h3>中国地方</h3>
      <p>島根県（9件）では、益田市黒周町（※49）、美都町山本（※50）、雲南市掛合町多根下多根（※51）で出没があったほか、益田市美都町板井川での出没（※52）や、同町板井川大橋付近で午前5時半ごろに1頭が目撃された記録がある（※53）。</p>
      <p>山口県（3件）では、山口市阿東地福下の梨園で食害および電気柵ネットの破損痕跡が発見された（※54）。また、美祢市美東町大田の樹園地管理中にクマらしき動物が目撃されたほか（※55）、萩市の国道上で1頭の目撃が報じられている（※56）。鳥取県では八頭郡智頭町中原で目撃（※57）、広島県では廿日市市原上川末で出没痕跡が記録されている（※58）。なお、四国および九州地方での記録はない。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">確認された主な形態</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">15件</td><td className="px-3 py-2 text-xs">畑での食害痕跡、地域内出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">12件</td><td className="px-3 py-2 text-xs">民家軒下・縁の下潜伏、成獣駆除</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">橋付近での目撃、地域内出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">公園付近での成獣・幼獣目撃、出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">地域内出没、出没痕跡の確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">田園地帯の痕跡、成獣目撃、出没可能性</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">町内・区内出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">地割地区での出没、町内目撃情報</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">梨園食害・柵破損痕跡、樹園地・国道目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">道路走行中の目撃、地域内目撃・出没</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <h3>人口圏接近度と滞留リスク</h3>
      <p>舞鶴市の事例に代表されるように、民家の縁の下や軒下といった建築物の構造間隙に入り込む事例が発生している。居住空間の直近への潜伏は、住民との至近距離での遭遇を招く極めて高いリスク要因である。また、国道上（※56）や海浜自然公園付近（※34）、工業団地（※31）、行政支所付近（※9）といった人為的利用度の高い空間での目撃も散見され、生活動線との交差に留意が必要である。</p>
      <h3>農作物および人工餌資源への誘引</h3>
      <p>函館市におけるデントコーン1000本の食害（※10）、山口市における梨園の食害と防護柵破損（※54）、熊野市における養蜂箱の破壊（※6）など、農産物や管理された飼養資源を直接的な誘引物とする被害が確認されている。これらはクマにとって高栄養な採食対象となり、一度利用されると周辺への滞留や再出没の引き金となるため、防護設備の点検や速やかな被害調査が求められる。</p>

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
          <dd>2026年9月4日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-05</dd>
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
