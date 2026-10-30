// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月13日 / mode: daily-report / 生成日: 2026-10-14
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-13-daily-report";
const TITLE = "2026年10月13日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月13日における国内のクマ出没・痕跡確認事案は総件数87件に達した。京都府や北海道で各11件、山口県で9件など各地で生活圏近接の報告が相次いでおり、鉄道敷地や病院周辺、果樹被害を伴う出没事例が確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-14",
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
  datePublished: "2026-10-14",
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
      "title": "2026年10月13日 京都府京都市 叡山電鉄線路上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBjdERKQ0szNUtHblZqZW9Md2ptOEdtMzhIZXc5dDUtM0w2VGxfS01QLW5kMW5nOXc2aUg2bHFGbEN1QXFCVV95MDl4VGJXb0s4bEJhemMyWHQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 秋田県大仙市 協和上淀川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBWdF90NXpsSklGbkFISzdqTXdUcWxHSy1BTUYzcXp3My1qSEUwekFQRWRLSVl0TXRMNXR1eUVoZk1jNzE1RXhsSTdhTHhvTHp0ZVF4YXZWWFFNZHpxRHlkMUdINFB0LS1VZi1jSF8tYUJySmRIRFllNzlrRdIBgAFBVV95cUxNZU9mSHY3NDFvc2FVSFplVlVXX2dCWlV6aWpjbk5iYU5XaDItRmN6bnRNcTJ4X3NFSFV4NHFOZEdyLVU1LVAtMU9YU21uR19hVjlkT19RY25CSUEtWTBCc1ZDUXFMdlZyVS1ySVNXTXRmRW40Y3dGYk5rSGoyUFhobg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 北海道士別市 住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1nYzB5VFNXWVZuY2hIc3kwVGxub3JnZkQ5OHU2TXZvSHZSR3NfUk94S3VIVTFkX2pUdmlNc3loZ2haRHZuY0ZBSlZhdDdzeHdlS0szRDBBa0RZYy1iWTRsSTAzTFBuaTNyOE1vTUxGV0psSm8yZHhUZk4tNW1BcUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 群馬県安中市 松井田町松井田字塔ノ下地内（下町南信号から碓氷川の間）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 群馬県安中市 松井田町松井田地内（女神インキ工業の北側）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 群馬県南牧村 群馬県甘楽郡南牧村大字大塩沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 鳥取県八頭郡八頭町 用呂の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 北海道愛別町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTFBGWnN0bGJRYXFfUVA1cUhFTHlmdE01WW5aVlBxeDhhOFNSdWVCdFlJV0NLZDNUcHZxR1phRFQxQmFqT18xUUdYay0xVnNGbDJvN3F6RkpTa0ZKS2VaZFA1MEQ3QlcwTG1yU1JTZdIBckFVX3lxTE9uWW1fSUxFODFhY19ZQlAwbG9xUVpRM2VFNDQ2MzI5UnZMN0R4RmhDYUNLalh6ajVDWG5qZGpraVlmUjlxdms2WlFEdU8wLWRtV0dwSlA5UUg4OVZFalRJbk9GZUYxLVgzc1ltWWFtblFzZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 北海道愛別町 北町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNOG9xbzdvYi1uSnJUbUFPSHNYQ18xV0pLNGpydEw2RDN2ZzNlTENUS1Vibkozb1RBdkVJekpYaGNFck13UkJ6MktaSEJ1T3RQQnh5WW5sSTktcDRzenBtWmpBd2RSZmw2bHJwYmNTX0owa1F4bGoySmdJWjRaaDR0ZjN5UEhtWEtPNWR1UnFwVm1QTEN4YldBSGJIVWRTVXlyY1VYd2hVeXZQSmotUUcw0gGiAUFVX3lxTFBaZk5iSi1famE4RjhlZ25sWEluMC1hZjhuYlQ1UzI4Z2hVb0h3eUpmYXBXcVVvSDJ5WmoxbmxKMlF3TGEwVElodFd4ZXFhZTlvanpia2lSSFZfRXVwWkF1WjRPLTNjSFlwbDRxSnlMT0wzZlprNzZERWlGMHRKbzJ0NW9IMFN2eDBtcWlrbHFMdXFwR0ltRVNLdXRJY2pjUVd0Zw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 北海道千歳市 柏台の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNREhobjJOU2IxSlZKM1haNUFTTU9VSmFkT0hRemloT00temlla1l2RnEyV0ZPcHFRdkdSaXZhTDZlRlhQamswLXVIaXYzdDVWa0hhWmZSbDhVdzdEZDI2X3ZOYVF1MmRTR0JfTWwyS3J5SldzTVJYT042dXp3VkVuSzJlTlBiYklQRnVtZmR1aERGeFhxTVlWMWdacWkzV3dnMWJUakpCWk9KcGJEeURR0gGiAUFVX3lxTE5Ga294LXBGMHBONm44X3FxNm1UMEpFZ2xrTEZiSGpKLWhOWng2M3dnNEJKbmRtZEJJXzQ2N0FpR3hGbnpoMW9fdHpKVlJFVFlCLWxON2hBb2dfeUlJVXlmZFMzeFMzY0xZdEE4RVJXMFFDR2VWa2Vma2xvSk5kUnA0Y0lOaTd4a2F2YmRlUGFfZnhWMmZNQnNkUHQyM1RucTNzdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 北海道泊村 茅沼村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQM3NxdTVsZUZNWDlmZXFZOWQyVWtPSmlWR29BMmFXRl9mT2VUa2hNNVJaV0xaRktxaXBxVzhuakVrSkJHcmhRM3dVT1BqWUJaSll5WUVIY0ZCaUxGTEVNQTdwZEl1U0pLMjlkS1pwNnpDRWlnN2tjTHFUTnpudzdPVjV4UTllb2l1NUZ3TnowMnpQU2RZWkxLRDBwSkHSAaIBQVVfeXFMTjdPUzFFcjhJc2dJeUFiUmdhQ1hPUjktejg4X25FOGJ2d2E0Rml6dUhwSWJ0Tk5mcmpNQ1FaYllHaDJsS0JDS3dlb0xabTZGMEVod1BrZERhT01abWx3QTdiOEw2NE4wdUpxaTBpRVJWZHNZZTJTWDVoOWM1ZUtVZkUtRjNwYVpDd0VZLWpyMXdOWHJVaUZwN3NyZjJoaWl2bWZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 青森県青森市 浪岡大字大釈迦１１３−１８３の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 秋田県大仙市 協和上淀川坊台の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcTAydDREaHBDQm1NV3RmSElGUnVmbTBVVmRSQ0NUbXBTejYyamdKQ1BqNnpFaVFZV2Q4WWZpQnkyTDBiMnlNaUNyX1Q0TUh2VldhNnVvXzNDeVB1Rks4MVF2cENqMWM4UlJyV05fb0xkbHQzUWlHc19ham1qblNLR1ZtZHRYSWtVR2lvREQyRmU0VU9zYm1QTzEzQXHSAaIBQVVfeXFMUHprTkVCNVlnTWlNbTlZWXp5dGhFNkJLMk90Sm1TU19pWkVVUFp4TVZhaEREekpIWDQ2Q09CZkpqd3hEdjY4VDBhXzZkX0NIcW9fOTh3MHpYeXVIV0ZJNDRIc2YtaGdjWDJjTVMtQndJRTBRMHFMSFRFMXhjUUM4V0ZpTDJka09qMVd3bWpKRV8wNFo0c1RESmRSNDlIR2lzbF9B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 秋田県三種町 外岡羽立東の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBERkR4TUZ6T3g5ZFdNbWVZaHdpd1RUazlneG82UHJCVnFGYUZaOEtWZEJ0R0t6TUpadllqejNMS0hGQUI3UE4xODdRdGx4OGYzMl90VUdaNzV1QmIyN2FWbHhVTnlOQTZidFc2N2tYQ256WklOM2I2Szk2Y9IBgAFBVV95cUxNd19Va0lzRkZLZ3NmcXp4YmZRc2pQeEw3NlRjVkUydjlTN2NFUEx2aUdFcHVnVUVuMTkzU0ZZZUxROHhPaGlybnYtZnl0UXVGbWJaTE1tUk9rOWNxdDRMdEU0VHE5dThsb2dFTWZZaF93dVA0VlJ1R19xUUNzY0NVdQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 秋田県秋田市 桜台3丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRThLZk9reERXX3lLdGhETEtWVnRhMjJsbUVFSHlmRGFIdkIwOFZtTFNYbmYtZVdCRk1ycjRxa2VJMnhwQlF2Mm1TZ0NuajdxUFdOaG9faTYyTXBXV3ktUmJDRGdWaGVLbWRiV2ZlSXRseDhwV0V6OTFvR3lObFk3OGJSS0c0dVlfRGRaZlhHV2x5VlV5WV9DN01RSG_SAaIBQVVfeXFMTWltQXN4c18tMFpBR1ZTVnhfbkhydnpSSU0td1dXa25KR1hwUTBFOWppZzlsZ0c0Q09IYW5sSWVzWEUwR1pBUmd6VWFHT3RpYnRJem9iM29YZ3R3UGpFRUZZZnBQMHoxVzlRc3VodTNVaUFlQ1U2YmcwZlNnekFjLVZmWjFjTXVzaXZaUmFaTFRpak84Uk45bFpLMjFTdTJ1NGpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 宮城県仙台市 青葉区中山台4丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWFJRTnhVeHJ6WVB6VmVhTkxVSzVFZW9fREtTSVlCRnlMSF9IeXRxbHpfem9xTzNEOEE1ZW94NkFscWpZSkdCQnhlcWt2Z3c0T05mUnFLNm1FTVlHMTBaOE5jbVJOZ2FiMTJLU2tBTWw5Z0JfR1RVZDBVcmx2cTB0NWNoUDhwYnhSYW5adjlWLTRsTWhJcU84dkVhT3HSAaIBQVVfeXFMT0tBN2JMaVpRaTQ2THNXU0Q4YzA4dllYWnY3Q3VaTC16QmEwTHkzNzNiMS15Z3U0VVZvVjFkX19wcHV2aTZLNlliU1NjMHJ5YnBfdjNkbEZRWnhDMDh3UHBNSFNzU0wwdldpdnhUZXRVRVV5c0U0N1g4TzlzZUY5enRHWm0zOWV0OFVRV1h4a1BoSnFSV3Q2ZWVkYmtYcWZxTVJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 宮城県仙台市青葉区の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 宮城県栗原市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 宮城県大郷町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 宮城県登米市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 福島県郡山市 田村町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOZ25OeWpPTnVNTXNNalNKTUpNaHRNNG1NVHhkVGcyMWFpY0F4TldzVFl2WUFvRWpkb0lZb1FLUzBOeXNKakRNcnZaOVk0T1ZrRzUzRUdwaFJmWUdFWFJZd0tqQW16VDM0cDIxcUlpWnEtVGtwbEhUc2lLMjFKT2hJTENNYVlmY0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 福島県郡山市 田村町徳定の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA0cGpWT2pZQi1KWVhoOGJCY25ScHRKNkpZUFpFVW5kdHU3VWhUeEtBUjhUMHIzV3FVeDBKSTJUQmxBa1dWME9XQ2pnUWppNVRKWEl2aW9kTVA1ZFJ4WXFObUU0YzlEWU11d1NZdzRBdkZBd3htdFpPLWRUMUhiMTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 栃木県佐野市 閑馬町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOYVhlcEt3NzJkaTVodnpCMTB6ZGlHWmk2NnctTGUwOVdHQ1hxSkRvNm8xSEZhYWdyTU91TUdmZnZQa19rNGlkajdXMTlYOFBNMGgxVGl1WU1OdzN5clZtRTBaTW9wZmo0eW9oaDJXTnByTzZkMzZOeGlGUnh4TGNtZjdfd2t6c2I2Y0NlZWVBRjk4MzM0MjhpR0toTHFuTkl6S0ppR3ZvYWJBNnliR3U00gGiAUFVX3lxTFBNbzRGaklpU0RDRnRtUUVqcjRVdS00UzVUUVhZVzQwRHdSRUpzMGpYb3llQVFwOUdVN2FxakVWbWZsdnB5UXowU1h3Ui1MVWhrbHhSV3RSdTBjaG10V2txVUw5eWZmeWhtOUdDWnRXMFNUOHhkZ2RhWGhsU0tSbnY3NmxDNGNlR2pfWjVkQjJrSHJCVG05OW1GSmRCUGJrNUNKZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 栃木県佐野市 牧町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVHMtSV9YVW9jYl92NDVUNG5vQ3pJeFpfZlJ3OVl4dnptOGlSWHIwUldST0R6QkVBUEd3NERwaG9SbzJ1WXhaRWI2SjRVTEpUT0FCTlZCTk1PYWpUcnRqeV9CQWFnLXRmZlo1dHBINDdLck5NaXVFTklIWEJxb3RRMWlPZW9FVHRWZVJma0ZFTjl1VHB2QVRqVGY0dFTSAaIBQVVfeXFMTmxaVkh4T3FaYjZqTTJCSk04UWtHM3JkSlBkMFg4S0hnVGxRWVNzcFZIa2dnX2ZMN0w0VkJOTnpaMVdlUnN0SWpobWVrWWZyTFJzbG1sM3FobFEzdlc3a2xpSmlQQmdTeTZaRDZxbTN4YjVVUFhQM2cxemJFSnlzTDhNVDQ4TDYtd3lLMGRnUWEyRHRkSGZlc013ejdPbXlCMWhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 栃木県佐野市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 栃木県日光市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 栃木県那須塩原市 千本松の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 埼玉県横瀬町 横瀬町根古屋3区コミュニティ広場付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 東京都日の出町 大久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQRl81Y3hOd0lzdGh4OUJvTXVyc3BXTkU3M184Y2Q3aUMyQ1kzVndmRTdFbUZMUjRGSW4wd2xSd29WWGJza2hxTEQxZVlwM2NfX0NlRU5kX0dyenFhS2JjUWg5MVBxZGNBeTZsejRBd3NqbEdTc0YyUmJydHY3SUJWTzlia29fQ1pfdEI2amhTRWFUZnJDYUZpSWROSU7SAaIBQVVfeXFMTmRqQWEwOFN0eU5hcUplREpNSG9fLXh0SklqV0pZRGlXdGNJT3otY2t3UmhxRWo5YnFIT3gzeUdwX1hmX0dSNWgxMWNSWXRTaGtTRXZuSzBBSHIxZXNQVXRaYTVacFF5N2ZRQU1jZW1kYmV6Qmtva3VDR20wajFsdW8zVjJQRk11OGs3Tl9jRC1hRlFZYnpZWEtjWEI0YTZqOTJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 神奈川県相模原市 緑区佐野川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNTdVbnJLb0NZMXBoZFJNZGNVVUxJM0RhUGJEZ25DTnNzU1Z2SFNBN2dBWTE5MkNJcWJiTjA0RWl4OFBYSW9oZ0ktbmplcjUwRGxVVWhYMlJrQkRLNG9kQmMxM00wQWxXV2VjNU94ZHhOZjBsMTRYZDktMHZQYzNiekc1Szc2eUxlS3JjbWI1NjQwWEItZXl0TnRaNlnSAaIBQVVfeXFMUEZNOXBVUUl3MWpMa1RIdC1DemItclk4SFRzRTFqODZIR2N4N2dzNEVYS0lyZDJRdjJIa1pHbmZJenFEcVlHaUlmZUVBSWhlZUpMX1R4cXlWX1FJWDBfUUw3M0E5U3QxOGFySmxueGZnVmlEdFJEaHkzclpHRGUzemlUancwV2hybkpvRjR6czJjQ1NaVHctb1RobVVmYWhKTjBB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 神奈川県相模原市 緑区牧野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVlNCRzRWdDZkcENfWUZ5TmFfbkNZZDJ5VXdJNTVLWnlFek8ybjZ5SUp3Z0pNdjdISVMtVUROc29QaUZ6dC1kTWdyRC1KbUxXakZNWnpYb3RXbWpMXzVodlgxNzNMaWJQWmkyMnZicXhrQV9rRTRJY3E0V3RtSGk4LXhGckdiclBQOTV6QXk3eTVBQXZHRkFLeFRHLWLSAaIBQVVfeXFMUFBscDhybGUyQklXMHpIWFJtTmFmV1hrdkZHeGVBWWtRMm9rbGhGX25aNDhGM3MxN01nZjhZenhONjR5dzdwdFdGSG96TDVxQ0p3UlNMTXdRY3VFclc2el9EWlFSa2FDZkhIaTZzcktFY01rREl6SHRESUJkOWhpWUtkcGVBOE80cUVScXJadUExekE5RlNLYkJPcm1xdjZsbUNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 神奈川県秦野市 曽屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOUxMSENxdE4wV3RCaVpyVEJpTzZOMEQ0bEJHMzRfd3gzOGQ2d29hOUdqU096ZFBpdGhCVjJfUHpNTFdfMVpMUmRlT1k0ckRMM2d3RWk5N3NUYlJRZXlfOWZOajdUcVBNVTRNZkIySmFJUmFDZnJXZ01ab2o4MnJzOHZidldPMzlFaEJUUUpoWHR4c1V5LU5XUWxvRkPSAaIBQVVfeXFMTTVUc1dlLWZpWWNuc25ES2plekVDa2Q0QkJ6MEp4djlnSzNudEFDSjFFR2tDYjVsUWt1MnlmeGZmSmd1T3BZNXlxcmpCWWR3YW1wY3k3ZnRoQ3pyTkNRTkRfSDJDclQzeVRzTk5LRDFNS0k4NlJiV1V3Y0FmQlVKRE9iSUJlckNkaTlQTnliOHNPcnJaQ2JtdEhkOEplTHhiQkdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 神奈川県秦野市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE54RXdvZTlVdkIwcGNvVDE1ZGVLNm80NVdBakpNWnVQSVNmbXFPdndIUkRpQV9TSlRBd2N3QUljTnlVS0ZyOGwzTXZKRV83a3pzc255MmFNb0FDWWlSdmRZbXNST2JVUVZTNkRGU0NzQV9YdVgwYTV6UHlIWmlVMEk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 新潟県村上市 平林湯ノ沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPeDJKRUk1MzVoeG5DVnRBQVZHbVJsRk5UTEJZODNlNl9PN0xGLTEyRWF3OHRFV2p2TkRLaEhheDg4YmtyN1JvUlZRWkRpWVZFS0ZPcVUwa2lTYlZZWjQ4ZWpTODZfWnJIU194XzgtN1JFaVBQQk9FZmRXd2RyUXpYdWpmOC1xOFZoVWpXMFJUUXhpRkZuaE50TXd3V28wWmcxSUdsU1NsUHpKMjdNTERv0gGiAUFVX3lxTE5ETXMxWmUtU21FR19wZUJ3WHdfbEo1TTBJNWJaVUk1TnAyVFg1VjRXb2M3YjVEOEdWS3hCaHk2VkZMdk10bVMtQmZZS3JfQlpIUTlzTi11WGRpU3JNY0hHaTM4WUFEZUdNOFczdDRlYlc2UEZqX1FILVdwaW9WZjBKd2hRdE5Tb1M2UTgycmFITUI4VVptRl9QYkFNVUNIVUpfUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 新潟県阿賀町 向鹿瀬区の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 新潟県村上市 湯ノ沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 新潟県加茂市 下条の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 富山県富山市 八尾町薄島の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 長野県東御市 和の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSy1fTEhDVkV5UTQtMkZwOHRsZGJSM2tqZk5LV3JBbXVnWm54WC10UWpkUy1NeUc0YzRBTHVDQ1hLa050TWxMTjBMNUw1MlJRcUJOSWpzdFN6U3J5cnpSaERQSU9uYmlvVHk0VHV2bm1TZmo1X1VodHlYcWtLVXQ2dUVGTmVybFBRaVN2VHNvQW5yMHM3NkNEUW1kV29DX1RrNl9JRnpSQ3U1YVBISTBPSjdQaWNBREZpbk5OZTA4eXU2bEpCQVBMQTFhdk1zZGhjOFdvV1o1aWxrYTFXUTVaTkFCMlJvbTdGbmpiNXdvTmNCUdIBogFBVV95cUxNeTNlVmgtZUhrSlNMdEF0ZVJwTXNBWDlSZjdlSWpYRV94MUlfMngzT2pVa2RTYUF5ZUNrWkYyMkowNVlOV1Q4a1p2dFM4LXBtVzZoQ1dwXzZsaGczaUVUVTNQeGhCbWN4S3g4dUVjWEJ0NkE2em5WdGcyR19tdHo4NFQyWThpYXUzUG1FbUJkVkhacmpER3NSbEpzZ2JKYS1aanc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 長野県軽井沢町 長倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPaVZWVDV5ajJJWVU5UWlZUDBhZWIzMTVacU5qMHZVR0pCWkdrMEoyYXc4WUNYbXZJVFVIcnl4eFdjLXp2YnFYc0pIN3FNeXdyeENRU1JvYW5PeUgycWpaUW40enR0bXZqOHZFVWVuaUprT2NObmpWalVuTkdxa1VGUGRaUkNIQU5YV3l0SUNPRWNGVzVScFFlZjg3N3JPMlZ3R0tzUWY0OHc1M3cwQWRRY0dycHJoZXJmeDdCQllkS09tTXdjTnZqbjVEOEN0bEpxM2ZXNTVQV0s5aFBNUTB4MGVZYTNrX2x6YV80MWwxaGF6d9IBogFBVV95cUxNV0NPWlE1VVZSeTBrRFV6aVp5RGtqamxDQUI4eEFDc0hVUTJxTzU3eGduZkhfU2R1X0J5b2cyQmdFc3d1RFI0N3hHZ29tRVotdWlvblFydGZNc01hanliQnVrWTRoa3pVSGFrQ2d2Q2VPbGtuMmI0QmJmMkFkV0pZUFpTWnBPRVJCVzRWcGhkOURVaWM2SkxHMHIyWkJENF9Xd2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 山梨県山梨市 牧丘町千野々宮の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNZWFiRmNoaExyeFZMUjE3Wk1uOE4yM0RLVzR4SFJWdGVZTU9DaER3Q2Y1aExINXhUTWN6dzlkUzdUZ3lpR3pxbWJ1dzBubVI4ZjZEa1MwaDU4bjJ1U0hmN21wa2M0MnJtclMyMm9lbEJhQWE1LVJsTUFPSWkyeG1va3U3aDU1YW56ZTByY3RWdUROaDJYS3EzTUVPbVRIU3otTTIxS2REeVByYW5aeE1zSVRCTUI5dmVwS0VDTHlYdXRhNjN6a0JkZHQydmtVNmdyUHM3Vy1Mdm1zMlY1Q2JXTFliSG1YQndtOVBRbUhBaHVYZ9IBogFBVV95cUxObnRMSVZqcU5tUER3cTVTRDFQZmlXZUVrS1Z4WE9iSU5KV3lDVXA1SHR2RUxxWk83Q3JCemNzMnB0T0NOU3I2YzVIVkk1YUdxRThBdEU5a0VXY0ZBRmVMVm9YcU0yZk4tLWRZV0c1dXlUejlfU0FWc2ViSTc2TnFCSWhGa3F3UEFXTE9IQklRSVhGXzktZWZmY29DVkRNR2lLY0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 山梨県鳴沢村 京王1次別荘地の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 岐阜県揖斐川町 上南方の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQlFWWDczVGxoYnhtRFZlYnJBNWNFNmE0dHhBMldjQzQ4ekozdlFnUE9KRkZld25WdlN1cTBTT0xjWTVpOFBxWnVkcHg2Z1p2QnFpemlBNmptUWpSWXhFZXVJbDRjUHNZSDgzQVpKMUducEN5bEhRZXR0b0pxUW5NZU9wbEYzZFBtSEI5WWVkV2ZyajRJckdNa1R6Qm_SAaIBQVVfeXFMT2hzQ1VMR0U2Y3RjV2hXcWFvU1JVM3FJbjM1OHRVVzZNVlN1bi1adjlGR1FFQndBNVlETzlNWDM4VUNfNmdsODRMbzRxM2tLajc4bkd2XzBkZDQwbHk3eGN5UEpnazI2aG10MXNraTJFekp6bHZUY2lfc3ppRTJmMXU4SzRPV0xCa1FPcnN0NjZHQVhXekF0S1g5UmQ2NklVUXFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 岐阜県神戸町 新屋敷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOUGlZMzRVcU1zckVGbHY4Yi1uMDFjcG12STFhcnFyRkdKYjhHUm1OaFg5MENJOUVKeXJRTE94a3Bpd3VDZWtxeG1fZTVXUHF0SEVfWDBPMXYzQ2N4aDNSUWJpS05wSnBmck5kbGxnakc1akhjYVQ2Mi1SZV9Xc05ya0lUTS0tcWlmajMxaU8zVmNGWFdEUlZvZTg0cnlxS0JZSGgydk9qZVJHdU1aOEE00gGiAUFVX3lxTE4tZ1QwQlZzdUNuby1tWEpqNmh4SjJObjdmSXFKQTNXZEtzMTlKb0ZfQUdOa29rX015ei1vMHdpSDJwSEUzbG9oNDhlYzJVZEU5cVlfWlF0enNPMDNKRlQwamVnbm4zR1d2NVhtSVR1aGRsMEc5dUMtazQtRTBLZmFoS29VM2xtYW9pQ3laTkJRSVZLaWw2MF9pTXl6QjJlTWt3Zw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 岐阜県八百津町 潮見の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 岐阜県飛騨市 神岡町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 愛知県豊田市 小原田代町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNaHFYbzR0dlh4TGt5RGxRcUdlZVp5Rk9lZWhjVXcxb0tfbzhObTV5WkpqdnhPSHBycWlxQTFXcksyQkJvSk9mWWpLVUJYWGc1b0RUbXZ1b2lTUC16UjlhdGdTZXp6YTlyUTRIc2gwZGZSa2dDVUNBTFE2bmVac2hrVUd2WDFZSWRzdVBqYThGRThJclJJVllYZm5hYmvSAaIBQVVfeXFMTWhhUjd2OElHVjUxcktSbkNqV1pIQVY0eHl6MHoway1oak5aNVZCM2tKRmlhU3MwSjJFaHhSUXNQeEFPVU1rSnNKdVFOSEhlY2U2VWhJclFEM0JhdlM4N1FfQjdJbUtyVmRnRXhTUE56QVl1cDFYdlBJVE1lQkdiMW5TeU5Od0MtcV9HaTNNWXhzZDlmWlVoSDJjMDBMWjZsY0ln?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 愛知県新城市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE44NTc1djJWdHNDQjJwQ3ZhSmhLc1FpM3RONndHeFJpQk80emdxeWN3WU5MUEpVM3VBajlxbVRVVGVrMDJ3TXBmMHpoVWpNREgzVXFCZVlvWUExejRRUThpOGJzWFhrSjE3c3ljdDR6aHA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 愛知県豊田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBfd2s3OWlIaGl2UjV6WXNNdUxNQnJ4REhVVHQ3OUtmZU80U3FUYV92RVNrOFJRYUpmbWtCcTVxUU5uV29LWk8ycXpuRmo0MlBYQms0WHBOM1dfaHRDa3I0dHotS3hqQ0hKVksxUlNTTjJYT2VFeDVzUFVBTdIBgAFBVV95cUxOWlEtRHRKcnBDXzFIYjBXUlltZVI3VWN3SmU5NnFRVkM3SVFlblIzV1c5dUlyV01uamVwT1h3UzQ0MnRUSWhTWDVQcFFuVlJfMU5EX3I0X1RMb0JjdGhhQW5PRVEzQS1Pb1REa3hKT0dBSGJmWE5KOXI2WjZLZXRVNQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 愛知県豊田市 旧小原村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE1qNWU4ZWstWk5scGdweVFOQzFUWVRUSVdJa1pHWXFyYUZzMGpaRW1pMVRDQ0hOX3R1aGtFVURNdDhvQzc1OHVDQll1SnRBT2xha0J2Rkk4R3NvVVRE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 愛知県豊田市 松平志賀町石亀の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 福井県おおい町 名田庄三重の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbTRpODZpSDlsaEoweGllNVFDLUFEZ0JGNWpSQ0JxVkR5ZDZ1aFl1TzJkN0lTb3U2bXhBLVd1UmF0VkhUNEpjRXhjbUgyTGZWaXpPVnpqVGZKM3VuTk1kb0Q1WTdtaEpkLWlsdlpWZmdpZG5aTDFYY0VON1BMVi1aN2x3a1BWMDd6a2Nvb0lOMjNuSXlXVnlMRy1UMFI2VE1PX2M0aG51OUpla09PdDE0TER0czNwY3BiYS01MnRGdDZ4Wm5oZFQxZXNZU2NzeF90N2RpSUVTOFVpSng2d3ByZnVvLTVqLWU0UW5QazZSX3dxd9IBogFBVV95cUxOV1FDY0xBVVhUdDBBUkg3VDFJVG9Wd204VWpBUFpKWW1XMjljcFZySEkyQmpyOWpqOWJjd2xLUExvak1RZThuLWo1NTN5MHFYMkphd2c5RG5RelQ0N1pmVTM5Q19acE9RMWdhVEJsZWtMd0tzUWNrc1hWeXNFMjJNMWdlVldVeXpNR1JaaUxpZFMwMGZpVkZvQ1k4UFdPc0dZX0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 京都府宮津市 日置の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOWGptOXJYWWhkTWdwckFzUnJlbXR6cXBqb0g4d1NKT0xNanpON0xUTjRNdDgtZC1TYmpWaFZIZWRKeWFwVUxIakYwMkthN2FKYkRTNl92WE80YS05Sk5XZkpvVkhDS0RUbEYzUjFZOUU5b0FRZ1dma0xrNUNaUmxGVTJ3dDR6UEpqRXNCNVFhdGRhQUNaemFNY2tfd0lrMnlJS0HSAaIBQVVfeXFMTlhqbTlyWFloZE1ncHJBc1JyZW10enFwam9IOHdTSk9MTWp6TjdMVE40TXQ4LWQtU2JqVmhWSGVkSnlhcFVMSGpGMDJLYTdhSmJEUzZfdlhPNGEtOUpOV2ZKb1ZIQ0tEVGxGM1IxWTlFOW9BUWdXZmtMazVDWlJsRlUyd3Q0elBKakVzQjVRYXRkYUFDWnphTWNrX3dJazJ5SUtB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 京都府京丹後市 久美浜町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQjNCZnJ5Vm5pUk9lQXZEQTdwOGgtRFhYRGNDODNPd3oydTFqM0RsUWtRNFNUTDBURVFkZ2N1RWVZeGRkeDNaV1RwazFFc0Nnei1kNVJYLVBDTnlrdV84bng2a0JJa0JFdUZZOU5iLUdqdlI5MEw5eWh0RVdpU0U1bE5iNU0zeWVXVU1DVzNKa1hVNFZtcDJzMXNqdGjSAaIBQVVfeXFMTm9DSU1FM3dmcUdaamxHOEFrY2hIUUJveFUyMHFnb0JwdHB0alNMS2FoYjdHc3R2Z25wLVZWc3lrVFp0ODJBaEQzNXNkSDRWSnpDNl9hN2VBel9uTUVJX0k3cHFXcnNKa3JrYmpFdzJPYWloMG9WcE1KTmx1OTBDX1hVRDZ6SjB0TGhvTHZ6U1Y2V2xsMWZTNF94WUZ4OHlrMXVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 京都府京丹後市 久美浜町金谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTnk3MXVrY0daeU84NFhYVk1YS0kwMWF5TG1nMFRzZ0NtaFBDNUVOVlQwNlVVN0xkWTZlVnktRHVoRnlaV3ZnZ2R6dGY1OUh3elI2M0dyMnR5bDFzWWlVdkJ4MjJvdGY3aVh6OFg1Zk9MNU5Td0hWaE5MS3c1SkdKWmRGM2tYQ3R2VHVaUGd5VDZFZXVySGpGMVNPMU_SAaIBQVVfeXFMTXN0dng1RE1xdHVuNHI2VWJSYl9yRnpsbjZEXzhBXzRCVThxcEFyTXA4ZS1CVVZpZXJTOXdWLWcyQTlXNmNYb243UllVamJ4SnJIWkhROTV4czZMVVJkckJpTmhXSThqb1JHMzJjSDdVejd5clVrZUFxZDJ3ejZ5UEgtdmJha2g1NnlIUy1zSm5wZkROVTJxX2U1SkNzZTE1b2tR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 京都府京丹後市 弥栄町鳥取の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMnlfOEI2WFlLd2c0ekdLQkt4RzB4MnhXYU82NHlBdjVhNnRxdl92c2UxbjgyNkZRMC14a0dSN2RhZDhNNWRBOTFUa3JsZ3A0WDNRUjByMldfNGhhd0hWcGtGZndicGtDdnhQT0Zkcm9yS3h5anIzWDFvdXloa0E5VG5oQkdhUUotY0RFZzlEZk5lSXdfWWhXMDF4NnPSAaIBQVVfeXFMT1BacF85Q2dheEZyZ1BWRUhPUFNLNU9Xa0VFM0s5R0VJWjY0X29YaHVkNnBOQ2hURGhmNVk5V0JSZUd6aUhuNk9SQm54VTAwV0NHenVhNXJqWHlKZTZuZnpaT3I1QkdJQ21sUU84WWhzWTlqN3FCX1hQMVEta1VPUVl6YktHbnJHZEVjVDRlclQ5TFlhVjNWUzBnR21rMjZTallR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 奈良県五條市 大塔町殿野の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 奈良県東吉野村 平野の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 奈良県十津川村 上野地の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 兵庫県丹波市 青垣町遠阪の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQXllTmdCeDFRdi1OeWJCdzRSVDNyV1QtVW82R0l5M29udXNNQWlxaHA3VXJsZUJZRHIxeDVLbHh6ZGRyWW9mT3EyMktyUUE5TmxzU0t2bWlTQmUyZURtM054NTc0MExYYm5pRzBxUTZTWGVQS2p6UnFxSEktQUtSeDFwcE5zU3FERHljOU1GQmVmQ082a0VZQklwMUbSAaIBQVVfeXFMUHExYUN5Yk9odVFtY3ZDN21FSFk4cjlzZFRZa3o2VXNnVE0yenMwbFB6UExpZGRuc29ab2JId0dFbElQT3Yzd3R3RHE4Y05YRmhVSUZHLVZxM01ZVkp5cjJUSlp1WWZKcFhtSFBFdTM5NTc0RmdhWHBYMnZDc2szSDFyUmdzc3Q5b3JKRlJ2QVYxLXBiclhoWm1INVRGemxUbFpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 和歌山県九度山町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBDdjh1eHQ2cVlXWFJWS1VVSXZ5TzV5ZDE4NnhZTG1KQlVkUGJQWjE5RF9HQUdkQjRwaVVNM3h6VjNqejVKQTdYSjdEZ3FQTVZWVmF4ZDlibk90bGY1a0lIOFVHSzBqYkY1VGtwRnlfTnRaRDZQNllFLWpOcUhXeUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 山口県周南市 須々万本郷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZUs5X2IycW9iLXFlMk91WVJLTDhCLWFEQ041eGNLNkxJeDNrVVQtT0RHczlTMnNpQXZMeVVIcGZlaDEyMktyUFB0WWtnaVNkYnBzNWdoR3B5dFpJOXBsbEpvNVh0Tk5lMC1GVUlBVHhzdzY0WHJyTG8ySmg1bmxJaHBueW1HMUtXWEcwMkNYUHY1ZlRMS0gzVE1wYzDSAaIBQVVfeXFMTWY4Q0l4blp6bmRUZW1sMllsNi1TNFBnVnRSM0Nvc1BOQ3pzSzlhV2J6UWd1Mzd0cHo3V2FLWEhsVzQzaU5JNXpsTHR3VlJvb2dEN1czOVB2VGFZbG93TzNWTHQydXpyVEdHMDZISXZSMFZ1R0xsc3FlcmU4VXNGcFhoMVNwRUxjRDlRWlg0OFdJOGNUSm9raUp1VUxIZ1Q2LTNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 山口県周南市 鹿野中の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月13日 山口県周南市 久米の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPbnlCUHBOZDNzSFJ2NHk2Tk5LRmNSVnB3TGdVODg1b2hsNlNXZWViLWpYT0w3bDZTSVZjTzg2bGY4N1ZMMW9HTkxmU2ZBS0dVTThvWFlZUFNXdlVYWV8tTDc3WWd4NHpHU2FmOUNaNkIzc1I2Y2lmWGxqYWZldW1acUtjTV9oR2p3NUpQMndPNkRHdnAtcWNLVXR6UUU0aW8zM3fSAaIBQVVfeXFMT255QlBwTmQzc0hSdjR5Nk5OS0ZjUlZwd0xnVTg4NW9obDZTV2VlYi1qWE9MN2w2U0lWY084NmxmODdWTDFvR05MZlNmQUtHVU04b1hZWVBTV3ZVWFlfLUw3N1lneDR6R1NhZjlDWjZCM3NSNmNpZlhsamFmZXVtWnFLY01faEdqdzVKUDJ3TzZER3ZwLXFjS1V0elFFNGlvMzN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 山口県岩国市 通津の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNZHJxYmEwU2FzaW5OMldiZUt5NmdQTkFMODZsZ2dxSXpmN2NZUGxGWjhJeEMxdTNTTHlNeHYzMGdWQjhKYVYtNE04NVlYUmVleUZnUnJhMUFrcGM0UVc2Z0NWMElXTnBfc0xjYVJyYnhDWHh0WDJMYUxjdjVISjU5OEl4bVhaUWVhV2xxZEd0RGNiQlZXNEREaXo2TmM1aURhZHfSAaIBQVVfeXFMTWRycWJhMFNhc2luTjJXYmVLeTZnUE5BTDg2bGdncUl6ZjdjWVBsRlo4SXhDMXUzU0x5TXh2MzBnVkI4SmFWLTRNODVZWFJlZXlGZ1JyYTFBa3BjNFFXNmdDVjBJV05wX3NMY2FScmJ4Q1h4dFgyTGFMY3Y1SEo1OThJeG1YWlFlYVdscWRHdERjYkJWVzRERGl6Nk5jNWlEYWR3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 山口県岩国市 周東町下久原下川上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMFpiVHE3dGVkRG15WmNfV0NLSVBXYm14Qi1CLTFKVWQtTmpGUDhvLWlZdW1BNjBpTmlxcVVpaHg0U3RPRkdYUXFkLW9QckpLSXFHTEdtN00wUmV1OWR6eWhiQUp5djhQS3dwOUZva3RMZS1oN1Y5bXQ1MXhFcnhZSFMtdlJvaElFRHE3WWhvWlVnQlR4NTJCb1VILVHSAaIBQVVfeXFMTjV3M193amltLTZJcU44MHpXRUtKemJMWF9iOTBWYnVrV0hwMkJ1Z2ZGZE9kZnRRbEZRM0lDSmlzVVktUER3aVRYeDRBR0MtZTM3aE56aUpQSXVhTEMwZ3E0YWpRWnBmQjdRU2IxdTFvY3cyeno1ZkdtMGFrZHRtUElydEZoWlNjQXdHeUphWnMxYV9kN2hmMjd3M3BlVHJoY1NB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 広島県広島市 安佐南区伴東の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxQX24zNlYydTdTdlp0cWdETXkzR204bTNfZnF0bjhwaVpZUjRUZnJ0S3U1MklhSENkR1c2UnBmM0FNNXQxdDM2SXlybWFXcVprWFpxbXRWZGxZUnZxTXgyWnliNzdZc1RZR2Q4dUpkbXo5dDkyZE1fYWlsa2I4S0xDVnlGVkluZWxBUllRc1YwcTlOekE2WWVNV2F4V0hVZ2FSZnhQcF9CRk8zT2xWODJFMWNOMW81cTNNQURWemJvdnpfaHA2TUFzalVpdVlteU9IaE9KX3JhTHRNRTE2cWdiMXpHVWRIZmloWm52NXMzbVFwNl9Sbmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 広島県広島市 安佐南区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE50M19FUzVCRlVKZUhsdmozUFJqVWk0di1PUFo5VmMxNDRBVWdXLWo2WEdNMUVieWpoOXpHQWVFRnpMaW5rYWk3QU1RMUhEU1hTQjI1eUx0Sk1lTnJvbll3OGZPNmV4dU9ROUZnQzdPNFY0UkR6V3NPaXp2dkw2ckk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月13日 広島県廿日市市 原宇治久保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQYTRXSUFkN0l0djk3VTdjNFh1LVBtS3NDanQwTWdlZE5yOThlYlBlN1g2MEU2MHNVY3d1MVZGcUI0RXlLTGcwOVZ4aWRla3RHUklBNWpObDdqM1BXTmFRbUoxSmNyRzR3SzVBdEUzQTRqamJRdVZNeHdlUkpyWnpNSG83STI5NVVBUi1rcnBqR2NIVG5fdEZhUzFKWHE5RlM1QXfSAaIBQVVfeXFMUGE0V0lBZDdJdHY5N1U3YzRYdS1QbUtzQ2p0ME1nZWROcjk4ZWJQZTdYNjBFNjBzVWN3dTFWRnFCNEV5S0xnMDlWeGlkZWt0R1JJQTVqTmw3ajNQV05hUW1KMUpjckc0d0s1QXRFM0E0ampiUXVWTXh3ZVJKclp6TUhvN0kyOTVVQVIta3JwakdjSFRuX3RGYVMxSlhxOUZTNUF3?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":11},{"pref":"京都府","count":11},{"pref":"山口県","count":9},{"pref":"栃木県","count":7},{"pref":"宮城県","count":5},{"pref":"愛知県","count":5},{"pref":"新潟県","count":4},{"pref":"岐阜県","count":4},{"pref":"神奈川県","count":4},{"pref":"秋田県","count":4},{"pref":"群馬県","count":3},{"pref":"奈良県","count":3},{"pref":"広島県","count":3},{"pref":"山梨県","count":2},{"pref":"福島県","count":2},{"pref":"長野県","count":2},{"pref":"埼玉県","count":1},{"pref":"富山県","count":1},{"pref":"鳥取県","count":1},{"pref":"福井県","count":1},{"pref":"青森県","count":1},{"pref":"兵庫県","count":1},{"pref":"和歌山県","count":1},{"pref":"東京都","count":1}];

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
        <span>対象期間: 2026年10月13日</span>
        <span>·</span>
        <span>公開: 2026-10-14</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={87}
        periodLabel={"2026年10月13日"}
      />

      <h2>概要および主要事案の状況</h2>
      <p>2026年10月13日の集計では、同一事案の重複整理後における全国の総件数は87件となった。人身被害の報告は含まれていないものの、市街地・公共交通インフラ・福祉医療施設などの生活圏に著しく近接した出没が記録されている。</p>
      <p>生活基盤に関わる重要事案として、京都府京都市では叡山電鉄の線路上でクマの目撃情報があり、駅やホテルの至近環境として注意喚起がなされたと報じられた（※1）。また、秋田県大仙市協和上淀川では、付近に病院や老人保健施設が位置する駐車場において体長約50センチのクマが目撃された（※2）。北海道士別市の住宅街では、クマが徘徊する姿が防犯カメラに記録され、小学校周辺で幅約15センチの足跡が確認されたと報じられている（※3）。</p>
      <p>さらに、実りの季節に伴う果樹資源への誘引事案も複数確認されている。群馬県安中市松井田町では柿の食害や防犯カメラへの撮影、柿の木に登る成獣1頭の目撃が相次ぎ（※4・5）、南牧村でも柿の木に登るクマが確認された（※6）。鳥取県八頭町でも柿の食害および糞が確認されている（※7）。</p>
      <h2>地域別の出没状況と分析</h2>
      <h3>北海道</h3>
      <p>北海道における当日の事案数は11件であった。士別市の住宅街における徘徊や足跡の確認が報じられたほか（※3）、愛別町では足跡発見が報じられ（※8）、同町北町でも出没が記録されている（※9）。千歳市柏台（※10）や泊村茅沼村（※11）においても出没が確認されており、農山村部から都市近郊住宅街に至るまで多様な環境下での活動が見られる。</p>
      <h3>東北地方</h3>
      <p>東北地方では宮城県で5件、秋田県で4件のほか、青森県や福島県でも事案が記録されている。</p>
      <ul>
        <li>青森県：青森市浪岡大字大釈迦において、11時40分に車を運転中の目撃者が西から東方向へ道路を横断し直後に戻るクマ1頭を目撃した（※12）。</li>
        <li>秋田県：大仙市協和上淀川の施設近隣駐車場で体長約50センチのクマが確認されたほか（※2）、同市協和上淀川坊台でも出没を記録（※13）。三種町外岡では県道上に体長約1メートルのクマが出没し（※14）、秋田市桜台3丁目では出没痕跡が確認された（※15）。</li>
        <li>宮城県：仙台市青葉区中山台4丁目（※16）および青葉区内（※17）での出没のほか、栗原市（※18）、大郷町（※19）、登米市（※20）において記録された。</li>
        <li>福島県：郡山市田村町においてごみステーション付近でバイク走行中の女性による目撃があり（※21）、同町徳定でもクマと思われる動物の目撃が報じられた（※22）。</li>
      </ul>
      <h3>関東地方</h3>
      <p>関東地方では栃木県で7件、神奈川県で4件、群馬県、埼玉県、東京都で事案が記録されている。栃木県では佐野市閑馬町および牧町での出没（※23・24）のほか、同市内での目撃（※25）、日光市（※26）、那須塩原市千本松での痕跡確認（※27）が報告された。群馬県では安中市松井田町で防犯カメラ記録や柿の木に登る成獣が目撃され（※4・5）、南牧村大字大塩沢でも柿の木に登るクマが確認された（※6）。埼玉県横瀬町根古屋では広場付近で住民による目撃があり（※28）、東京都日の出町大久野でも出没が確認された（※29）。神奈川県では相模原市緑区佐野川で痕跡（※30）、同区牧野で出没（※31）、秦野市曽屋での出没の可能性（※32）に加え、同市内で糞の確認が報じられている（※33）。</p>
      <h3>中部地方</h3>
      <p>中部地方では愛知県で5件、新潟県および岐阜県で各4件、長野県、山梨県、富山県、福井県でも記録された。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">地点・地域</th>
              <th className="px-3 py-2">事案内容</th>
              <th className="px-3 py-2">記録ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">村上市・阿賀町・加茂市</td><td className="px-3 py-2 text-xs">平林湯ノ沢出没、ヘリポート付近小熊、道路横断、ダム自然学習館付近の親子2頭</td><td className="px-3 py-2 text-xs">（※34・35・36・37）</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">富山市八尾町薄島</td><td className="px-3 py-2 text-xs">子グマらしきもの2頭の目撃</td><td className="px-3 py-2 text-xs">（※38）</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">東御市和・軽井沢町長倉</td><td className="px-3 py-2 text-xs">集落・町域での出没</td><td className="px-3 py-2 text-xs">（※39・40）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山梨県</td><td className="px-3 py-2 text-xs">山梨市・鳴沢村</td><td className="px-3 py-2 text-xs">牧丘町千野々宮出没、別荘地内での目撃</td><td className="px-3 py-2 text-xs">（※41・42）</td></tr>
            <tr><td className="px-3 py-2 text-xs">岐阜県</td><td className="px-3 py-2 text-xs">揖斐川町・神戸町・八百津町・飛騨市</td><td className="px-3 py-2 text-xs">出没および可能性、山林部での目撃（5時〜6時、19時〜20時）</td><td className="px-3 py-2 text-xs">（※43・44・45・46）</td></tr>
            <tr><td className="px-3 py-2 text-xs">愛知県</td><td className="px-3 py-2 text-xs">豊田市・新城市</td><td className="px-3 py-2 text-xs">小原田代町や民家近くへの出没、親子連れの目撃報道</td><td className="px-3 py-2 text-xs">（※47・48・49・50・51）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">おおい町名田庄三重</td><td className="px-3 py-2 text-xs">集落地域での出没</td><td className="px-3 py-2 text-xs">（※52）</td></tr>
          </tbody>
        </table>
      </div>
      <h3>関西地方</h3>
      <p>関西地方では京都府で11件が記録され、北海道と並び全国最多となった。京都市の叡山電鉄線路上での目撃が報じられたほか（※1）、宮津市日置での出没（※53）、京丹後市久美浜町および同町金谷での痕跡（※54・55）、同市弥栄町鳥取での出没（※56）が記録されている。奈良県では五條市大塔町殿野（11時30分）（※57）、東吉野村平野（16時40分）（※58）、十津川村上野地（19時00分）（※59）と山間集落において時間帯別の目撃が相次いだ。兵庫県丹波市青垣町遠阪では痕跡が確認され（※60）、和歌山県九度山町では柿畑における痕跡が報じられている（※61）。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県で9件が記録されたほか、広島県および鳥取県でも目撃・痕跡が確認された。山口県周南市では須々万本郷および鹿野中で痕跡（※62・63）、久米で出没（※64）があり、岩国市でも通津や周東町下久原下川上で痕跡が確認された（※65・66）。広島県広島市安佐南区では伴東などで体長約1メートルのクマとみられる動物などの目撃が相次いで報じられ（※67・68）、廿日市市原宇治久保でも出没が記録された（※69）。鳥取県八頭町では柿の食害と糞が確認されている（※7）。</p>
      <h3>四国・九州地方</h3>
      <p>本集計期間において、四国地方および九州地方におけるクマの出没・痕跡の報告は記録されていない。</p>
      <h2>リスク評価</h2>
      <p>2026年10月13日のデータに基づき、季節要因、餌資源、人口圏接近度の3つの観点からリスク評価を行う。</p>
      <p>季節要因および餌資源動向として、秋季におけるクマの活発な採食行動が顕著に現れている。特に群馬県安中市や南牧村、鳥取県八頭町、和歌山県九度山町において、柿の木への登坂、食害、および周辺での糞の確認が集中している（※61・4・5・6・7）。これらは集落周辺に存在する未収穫果樹や人里の植物資源が強力な誘引物として機能している状況を示している。</p>
      <p>人口圏接近度の観点では、秋田県大仙市の医療・保健施設隣接駐車場（※2）、京都市の鉄道線路上（※1）、北海道士別市の小学校周辺住宅街（※3）、福島県郡山市のごみステーション付近（※21）など、人間の生活維持に不可欠な施設や導線への接近が際立っている。新潟県加茂市や愛知県豊田市などでは親子グマの目撃も記録されており（※49・50・37）、突発的な遭遇に伴う危険性が懸念される。生活圏周辺における果樹の適正管理や、早朝および薄暮時間帯における移動動線の警戒が求められる。</p>

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
          <dd>2026年10月13日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-14</dd>
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
