// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年11月17日 / mode: daily-report / 生成日: 2026-11-18
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-11-17-daily-report";
const TITLE = "2026年11月17日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年11月17日における国内のクマ出没は総件数28件が確認され、群馬県前橋市の住宅街では50代男性の負傷事案が報じられた。本稿では当日収集された記録に基づき、都市部侵入や親子連れの動態を地域別に整理し、地理的特徴と空間リスクの分析を行う。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-11-18",
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
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
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
      "title": "2026年11月17日 群馬県前橋市 住宅街の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBydnE0Z1lnaDRUNlNwWE9kc2tvYVQ0UGp1YXBBLVhtR1hfby1OcEFJVEZJanY3SVZ5XzVjeHJPV19paVFnU0ZrclBOZzJNd1dlZ3lySUJlLWpmTjhLZkJ1ZFBHSDdxcms?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 群馬県前橋市 広瀬川付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5nOHRTT0xwQ2NOSWdITGdWU3NITU9yT2IxZjYtaWNMT19WT3NUUUJla3hRRTYwRjZhTG5LREJva1N2Q3N3NlBsRzZEd0tUM1I0b2Rnb0x6WkFXUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 群馬県前橋市 城東町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPR0ZwYmRCRTZXbkJnTnNoWlZtS2F6a3hHZmdCT0YzaEluei1zSE1ONmhzcS1lSDFzU09VS19GdFN6cTd3T0JUWTQwTmplS1JZM0dTZElFVEFMTE44NG5EaXIyaEs0WWVfRDZnUUlqeG5PMm80S0JNa1M5NFd0bXpidk9SdGxkdWY5V2NPYmxJNDRKbWtSWGVGSGppX3VjVk1NN3RHNGtPUklrT3VDQlQ1NWhPbVMyczlUSU5FSnlmVC1oQkpxQjE3dmd4TFVMem5GX2NsaFcyNzlZZ2RpY0x5WUVvLVRXMmVPZUQzc0EtMVFYd9IBogFBVV95cUxNUmU4X0JDQ2ZEWGZMVkV2TWtpdXFlVzloZ2tXX1BzY1U1SHBZZ2EwVm02NkR2WHU3T1BPMm1oUUl0dDRacGpDNzlpM04xaWozOWhGWXJBNWNRVmlOdWVCbEZGWV9ZWnhpMlJ3blF1Qm5WZU1ZYThITW1NOWZ2YzhEMFB1bWhJUHphRUNfdzRlMkh0alNhOHA2aDJKSUlVRHdjYnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 群馬県前橋市 天川大島町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPOHhnN1VOVWhnTWM4SkpiYUg4YXR1ckVXOHA0TGRncmd2YkczcXVKd0ktV0VWLV9KRUJ6QV9lMk5xTFp5bDQ1dWMtbExvTjhMVHRUcmd6M0MtVmg0dDZSSXBiSlhTbThuRkFxM05Dd1ZIdzc0TEIwdXcta213ZXZUZ0Z2MW9DanoxSjZ2Y2JPTVRDT3JpR0FONnp6N293bDhXVzZLZmQzTUNrX2tTaDBr0gGiAUFVX3lxTE16R0I2N3NlR3MxQlNrSnFUUnlIU3BBMVlIdExCeWs0bDFtdXBwT1lHbWlKWldBTDh0Uko0NUhpMldGNXE3S0J0ckRFWjhrOE91M29PUHVZaWhnSy1VV3VUd0djb00wVHgyWWFwTUVXaFpGSGZ4b2YzdnRrd01lQmljY1ZVVDVZenJ5ZnNFSm5MS0V6b2hvUExxeGpuNTJYNmp3QQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 群馬県前橋市 天川大島町一丁目・城東町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE41YWVNTWVSYXRBR19GNFRzM0FkN0Z6Z3VHcTdOTnNPQnNkRGNvMGg4dXpaZVN5bWt5dU9fb3NRc3B3NXdDcUJ4S081RlpVZi12OGJ5WTVhUmdGa001LU5jZkRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 岩手県盛岡市 月が丘三丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月17日 岩手県盛岡市 月が丘の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBfYUNLUmIycFBNbHNQbmc1dmdsNnA1d09PVDRINU9fc1cxck8tdF9JTUhHWW9jYXduZDRYQmxuc0tzelpUTFpqb2hENjFoNUhCdEVlblo2ZWhNS1BhQms4enV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 岩手県盛岡市 下田古河川原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUHVDQW85TkV6X1l2SGxsYk9uaEo0bHZ0WXVCZkdwX1V4RW9CbDZIWGJ5blYtSVNWakxYYURTc3A5c2NfVkRSNFZUTkdScFlJUVh6WGFsQm1TYVNILWM5R1gtOXdnU2VjaGdZcm0xR3ZjMUx3azl0V0JUbWtidHNrdVV2YUFYdUV5RHhwdGtxT0hvQl80UnZiN0w5VUjSAaIBQVVfeXFMTnN3QU0wMGNqLWduNkdrMkNEazN1dmQ1NU9oUzloNXZJSXNTMHIyMWh2WUFybnRNOEIwNlBNUUtxeE9KdnBNWFNBZGdOS3RyMlVxM0JHMTI4bE1zM0FPOE9NYnhwTkVBZE9zT3RQZHdDd2trMU90am5kQUVWbmNzWWlJZmxjcEJFZnRpS3ZpYzJqd2MtS0NwMURXZGZCWjdfZWV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 岩手県盛岡市 下田字古河川原の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月17日 新潟県上越市 中郷区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1kTEt3WnpGQXJyUUV3OXpfVVloWi02MW9iZUY5ekw3dkdaUHhXMFVDX3IwUjhUNWtIOGphbEgtMmFwSTBISXBrX013R2xyM3V0RWlsQzBMU3lYSFVYSUV5OWEzS2NjRldKc2pHNjZSb1dibkFSRjExNdIBfkFVX3lxTE1QMzJjZ3hFQm42LWhoTnJVNnZTVml0cmFMRW5nSFBxQ0V2d2w3TWNueUdXTlNLeEw5SG1TRlRxUWFpTXdWTU15Qko3NVgzVGVmQ1ZvYTRkRm0zQmJSMW5KS0ZPblZjQTlOaks2TDFXMUJKajhGc2FTYTVLUW5FZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 新潟県上越市 中郷区藤沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月17日 福井県小浜市 中井上中井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQR291dEt3N1ItSUZxMTdWVTFNTXpfZnRqOVROQUQ4MUg0bFJzSk8tVk9mT2FmLXJiLUpPejNVRHNEWE9tZkhxNlhPUjBCdFFvODZqR2lJaF9XaU9fZ1lIUFQ5REpCNUtpaG1Lb294V09YYzJzN1BpWnJRaUkwcGNXcFdrMHlKeEZCc2J6LWEzcm9XOUczUzV6QmRJMjbSAaIBQVVfeXFMT01CYmhjQ0JPV3pWRXhGUVhTUUpWZEtSb0lZZGUwQWZaREo1bkd0dFdZZkp0X2pxUDdTMF93Q1ExdkFfcTdDdThkRjZsXzJoSk5QNjhtUE9pNGxfZGhnOVZlN0ZQMG5VcmtWa0s4VWROdmxFdEd5NFhkSXFYa3JFT0tWZW5MR1Y2V3Z5RW52am5tbWJ0aVU3Umd3bzg1eXRfaDZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 福井県小浜市 上中井の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月17日 福井県高浜町 上瀬の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月17日 福井県高浜町 上瀬地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月17日 福井県あわら市 吉崎の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月17日 北海道枝幸町の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月17日 北海道深川市 納内町納内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNa0dUbWNMdm5nSDlraHk0ajJCS0taOVplN09qeTlXNXlUbG9qTnN5S2RndzV4dmJUdFlNNVpqaFNtSFJPTHNULVU5OFJXeEh1eTlfUVVqZ3dyRktPcXo0alR6UVRqRUN2d0JJQ3k1enZDZmJnb1BDaUpJSFg2azhYODRVaE1tZFQxMDBKNmE2a09IR2l6UThuREdVWXPSAaIBQVVfeXFMTURSVnktcVJaS2ZjSzVpWlhuaHdaREJHTms2VVFTaDJfSnl1REVidzNMZVBlc0tmcUpIQ0JMakhTTXVMZkZYM05sNVJLRV9va1ZpMndkd041eUJvNGxfYWE0TFRBTXR4TkNMM3RKTjlnSjZKbnlDSjZfSFY5MTZvNWlJSHhWRHlhMDVyaGxPYXlCN016NVJLSF8tTk1FZVNFcUd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 秋田県秋田市 御所野地蔵田5の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTUJlNG9vcEFwa2xRUk5DNVJ5bl9SeUhjMExzalJhNUZzN2RmQ3JKc2V3cWJKaFR4bkZEb3gxWlc5WUl5QXd6SWxaWFRPOEZ5ZFl1RWpsVGI5aV9sRUhJLXBKeEEtSWxvRlVnbmlCQ1JHUmc0bUlrTVVEUWlWY1RDWVE0SkdFVGxIUUlBczZUdlNFRXBiSjMtNTJWclDSAaIBQVVfeXFMUHdyWlZCMXhSUVFnNjMwSjZfTWlJMHVTVHJ3SWFmYVRHYS01TklRc1VxNWdNaGhma28xUjN0VmtTZEtMY3loWFZiZDhiSUZmbDJPMEFuVEJBLTlZYXFXTkV6WWV5Z1N6UUkzSktJU09IQ1U3ejNtYVNFbHVSUWN3VERTSmpMQ0NibWhrcHJZY2kzb1RSOWxOLU5LQWVaTHhVd0hn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 福島県田村市 県道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQaHpMQzhFRk9NalpPT2NJSHM3ZWhyUkFrNThVd2RxSHZGa1R0ODNKcWFWcG1MNmxrdkFSdTdGWDBzbFBPb2FSSGN1MVdGZmQ3WHk0aGVOclZzcTJKU3VIX0RCSnhTUW1pODNBSlFoRVpzQVowanBqd1paM3FsS29VRk5tckVzYmJ1bzl2cGZpbzZLeFNLa2JnVlBlRTdUR19DMkRmQWk4ZEZBVDVZSGx5Y3ZmdGNueW9PSTd4RUZieURfNmpm0gF0QVVfeXFMT1pUOERMRmxaX0tsNkg1a0taMG02eVc5R1ZfMzNDQ20td3M1blFYWk9HMmc3emNSZ1N5cjZUVEdMNzJuNHRLNXFITlRvN203UGRlcWhKV1ZSWV90Q3RSVUl0aElEbHhWTGdzMS1YbHEwQkNBTUs?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 静岡県富士宮市 精進川の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月17日 京都府南丹市 美山町三埜の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQkNzMjhRMk9pMjBXWTBfODg4bUtVVmlWU3RDTjk0ZnZKUUZrOEpqSUFHQjg1LTFYaWdLVW1GZ25kNy1SSWZtRDZQS2NaUVdhS3hzN2RmcFV5U1F1N29vS3FUZm1RX1lZTUdXUWJIRVdNLW5wUWZjbl9RaXRqZEZmcElqaEg5RmtNdUVmWW5QZmlMaVdqRTN1VjhuTUHSAaIBQVVfeXFMTzZfajNrWXg2Z1YzLTNnYXZIUXlqM0FiM04yMFlsMkFVOUVGN0VmTElhQ2VoS3ZBcURGdTRLS0VtLXowZzhNSGMtaGN5TlFPcTFKdFUwZ3B2a19SRDNIZU0zVldrQmdNR054aWJhM3dLbXVXc2NTSUtlRUNkZmEyR0R6SG0wLVVvR1h3ZlRDXzVWalVOdTF3bjR0ZVBRRHNmNmpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 京都府京丹後市 丹後町徳光の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdmRNeG5RcWVjVDRBOThxb2o4U2tmdWlXWktVOEF1MUs3cHQ4cFBsTlJ5VlprNXQxMDR0WHpwMTI3dmd5aDdDY3k2SUFsbzJsUUlJMDJ6SHpFWWJtSjNZanNRU0VEdzBmVkd5cWZJTldueXdPTlg4d2NCOVdOUUxqeWhoZloxQ2FjUk9lMldUdjh2Tmh6M1h4TXFxZjHSAaIBQVVfeXFMUDVwX1ZsTFRJeVR2ZEQ0bVphWXo0eUYxcGdiSExIYkVHMVBVTC13VmtmTWlmaFJPZkg1cUY1TVF2S1oxT0RpRnV0Y0dIMUdzVmZKLXdLY2dyby1SYkRwNV9kaUYtcGlwRl9CZmpnRE94N19hazR3dU1MSnpjRUIxLV9udDJIX3hTcU92OVRJWm5YcXk3c0dEWUdzOHg1bkgwQjRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 兵庫県豊岡市 日高町篠垣の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeHE2S3ZDTy1pdExuZXNFbExOSnkyNUdFSHJzZW1RNUtWdDFPVFE0dTA1eUFUSWVrbmxIVDE0aTRIRlhPUlJBd2pIenFfMGhjeWtmZDVJal9uUDUtSGl1d1hxM2pTT1V5YXk0V25MM3ZJZ2YtZVlCNXp5TWdpX3JEcjYwTHZJZnhXdHpIem93YzVvVnFNTjBfNENYaXfSAaIBQVVfeXFMT3phNFFGMGE3V09rT2M4cmExWFJ2UzRYRURKM2dnYXNuLThHOXNzMDhEeHFMeC12QUEtZEllal9INU93YjNTa1RtY3dyT0gwQUZySWFRRWlpN0dSQ3BrTW1WN2JMVU9kdWlPNE0tVjdqLXNXM0hNTThFVVVCZi1vUUhQT2ZaZFpCYnJUOEVKU0ZfMzhxZ0Z5R1AtbHNyVWFnM1BB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 和歌山県新宮市 三輪崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPc05EeWdBUy1SNl9FWm1lQUpvNmpsRlVjU2x0RktjMWRmN25vaUhrQVB4Y2pScHVadVJWQjM3eDFIQkRrNmJtZmxFUGNHYVhibktqYXMzRWlIdHNET1o0QmJBc2JoUGMyY2RhUmVkV2pfelRFZ01FZ29EYlA1OXZDVTlwNHRUaXA2eGZlc0dIbkMzTXpCS2JHR3dIbkLSAaIBQVVfeXFMUEpReEdSR0g3ZGliWm1vQ2xxQUJlbDBJR0J2WEFFY09KajAxcjFEbzlDUHlGem1iVjMxYkRjOGVwd3otSEg4OWRqZWRDSEM2ZTNBQkl2Tlh1NFdXdjRpd2wxNGJHN0JtZVhKSjd1ZDlLUjdMSk9PdW1XQ0Q3MXM1czVtNjFHSmVna0ZqYXlLWElKZzcyZENyUUhsOWdjdFlnNjF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 山口県周南市 校庭の出没情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9JeU5nRHFoSU95dUUtSGtqbDJGcFhhUUpqVlBwNTMyZmxzamZKUFp4SHhDTXNGcTZaZWJwZHdXUG9jby1sNjhxREpzZ0kySlRGVzdLbkVDUWxJcm12b282VmpKbUlNMnE4V2NJRE1R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月17日 広島県安芸高田市 向原町戸島の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVGR4ZW42NVRMcGJBTnhMU2dyNDBPbzFRcTJLamhUejNjQWUxT0phVHJZOFFwQXNlci1fQmVqcFB5bC1nQzV6UEFScmJ0N3JDYW5xQ1VucVQ4akpRbUxndEtrSkFKUzUyM0VleDFvcGxWOHh3RFcyYjczbDhfMUJKNVkyMHpQNjd3RDZfZXh0Y3pPX2tSdkhnTF8weHjSAaIBQVVfeXFMTzNzWmxMQzJKcFBEejladVJLalNxN0JndU1RNzF3Y3BweVZHSU5IMHl1M1ZNZW0xVkNUWF9abzFGT2thd2V3N0VxcUZYWElBcGJMQTJFdm91aGsyUnVLWURjT1AzYnRocnZJOG5kUk9ZX2xUWTlWbW5fbERhRDZ3ZU5PeUMxVXZQT00xelVMeV9TTF9CRGphQ2RRRzZkWEpWX293?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"群馬県","count":6},{"pref":"福井県","count":5},{"pref":"岩手県","count":4},{"pref":"新潟県","count":2},{"pref":"北海道","count":2},{"pref":"京都府","count":2},{"pref":"静岡県","count":1},{"pref":"山口県","count":1},{"pref":"福島県","count":1},{"pref":"秋田県","count":1},{"pref":"和歌山県","count":1},{"pref":"広島県","count":1},{"pref":"兵庫県","count":1}];

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
        <span>対象期間: 2026年11月17日</span>
        <span>·</span>
        <span>公開: 2026-11-18</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={28}
        periodLabel={"2026年11月17日"}
      />

      <h2>概要および主要事案の分析</h2>
      <p>2026年11月17日に集計されたクマの出没事案は、重複を束ねた確定値として全国で28件であった。都道府県別の内訳は群馬県が6件で最も多く、次いで福井県が5件、岩手県が4件、新潟県および北海道、京都府が各2件、静岡県、山口県、福島県、秋田県が各1件となっている。</p>
      <p>当日確認された情報の中で特筆すべきは、群馬県前橋市における住宅街での人身負傷事案である。前橋市の住宅街において、親子とみられるクマ2頭が出没し、50代男性が襲われて負傷したと報じられた（※1）。同市内では天川大島町一丁目や城東町においてクマの親子が徘徊する様子や出没が確認されているほか、広瀬川付近でも子グマの目撃が報じられており、一連の居住地域における移動と同一事案である可能性が高い（※2・3・4・5）。市街地および住宅地域へのクマ類の進入は市民生活に直接的な危害を及ぼしており、重大な警戒事態として捉えられる。</p>
      <h2>出没事案の集約状況</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">主な地点・状況</th>
              <th className="px-3 py-2">個体情報・被害</th>
              <th className="px-3 py-2">記録識別番号</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">前橋市</td><td className="px-3 py-2 text-xs">住宅街、城東町、天川大島町、広瀬川付近</td><td className="px-3 py-2 text-xs">親子2頭／50代男性1名負傷</td><td className="px-3 py-2 text-xs">（※1・2・3・4・5）</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市</td><td className="px-3 py-2 text-xs">月が丘三丁目住宅地、下田古河川原</td><td className="px-3 py-2 text-xs">1頭（月が丘）、1頭（下田）</td><td className="px-3 py-2 text-xs">（※6・7・8・9）</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">上越市</td><td className="px-3 py-2 text-xs">中郷区藤沢 国道18号中郷大橋付近</td><td className="px-3 py-2 text-xs">クマ1頭</td><td className="px-3 py-2 text-xs">（※10・11）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">小浜市</td><td className="px-3 py-2 text-xs">中井上中井・上中井</td><td className="px-3 py-2 text-xs">成獣1頭・幼獣1頭</td><td className="px-3 py-2 text-xs">（※12・13）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">高浜町</td><td className="px-3 py-2 text-xs">上瀬・上瀬地区</td><td className="px-3 py-2 text-xs">成獣1頭（複数回確認）</td><td className="px-3 py-2 text-xs">（※14・15）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">あわら市</td><td className="px-3 py-2 text-xs">吉崎</td><td className="px-3 py-2 text-xs">目撃情報</td><td className="px-3 py-2 text-xs">（※16）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">枝幸町</td><td className="px-3 py-2 text-xs">風烈布コミセンから音標側約400m</td><td className="px-3 py-2 text-xs">目撃（午後9時30分頃）</td><td className="px-3 py-2 text-xs">（※17）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">深川市</td><td className="px-3 py-2 text-xs">納内町納内</td><td className="px-3 py-2 text-xs">出没痕跡</td><td className="px-3 py-2 text-xs">（※18）</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">秋田市</td><td className="px-3 py-2 text-xs">御所野地蔵田5</td><td className="px-3 py-2 text-xs">出没痕跡</td><td className="px-3 py-2 text-xs">（※19）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">田村市</td><td className="px-3 py-2 text-xs">県道</td><td className="px-3 py-2 text-xs">目撃情報</td><td className="px-3 py-2 text-xs">（※20）</td></tr>
            <tr><td className="px-3 py-2 text-xs">静岡県</td><td className="px-3 py-2 text-xs">富士宮市</td><td className="px-3 py-2 text-xs">精進川 農地防災ダム付近</td><td className="px-3 py-2 text-xs">出没</td><td className="px-3 py-2 text-xs">（※21）</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">南丹市・京丹後市</td><td className="px-3 py-2 text-xs">美山町三埜、丹後町徳光</td><td className="px-3 py-2 text-xs">出没</td><td className="px-3 py-2 text-xs">（※22・23）</td></tr>
            <tr><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">豊岡市</td><td className="px-3 py-2 text-xs">日高町篠垣</td><td className="px-3 py-2 text-xs">出没</td><td className="px-3 py-2 text-xs">（※24）</td></tr>
            <tr><td className="px-3 py-2 text-xs">和歌山県</td><td className="px-3 py-2 text-xs">新宮市</td><td className="px-3 py-2 text-xs">三輪崎</td><td className="px-3 py-2 text-xs">出没の可能性</td><td className="px-3 py-2 text-xs">（※25）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">周南市</td><td className="px-3 py-2 text-xs">校庭</td><td className="px-3 py-2 text-xs">足跡確認</td><td className="px-3 py-2 text-xs">（※26）</td></tr>
            <tr><td className="px-3 py-2 text-xs">広島県</td><td className="px-3 py-2 text-xs">安芸高田市</td><td className="px-3 py-2 text-xs">向原町戸島</td><td className="px-3 py-2 text-xs">出没の可能性</td><td className="px-3 py-2 text-xs">（※27）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別詳細動向</h2>
      <h3>関東地方</h3>
      <p>関東地方では群馬県前橋市に事案が集中した。前橋市城東町および天川大島町周辺ではクマの親子が徘徊し、住宅街で50代男性が襲われ負傷したと報じられている（※1・3・4・5）。また広瀬川付近でも子グマが目撃されたと報じられており、河川空間や市街地縁辺部を移動経路として利用しながら生活圏へ深く迷入した構造がうかがえる（※2）。</p>
      <h3>東北地方</h3>
      <p>東北地方では岩手県、秋田県、福島県から記録が寄せられた。岩手県盛岡市では月が丘三丁目の住宅地内においてクマ1頭が目撃され、同地区で目撃情報があったと報じられた（※6・7）。さらに同市下田古河川原においてもクマ1頭の目撃および出没が記録されている（※8・9）。秋田県秋田市御所野地蔵田5ではクマの出没痕跡が確認された（※19）。福島県田村市では県道上において目撃事案が記録されている（※20）。居住区域や道路インフラ付近での確認が目立つ。</p>
      <h3>中部地方</h3>
      <p>中部地方では福井県、新潟県、静岡県で記録された。福井県では小浜市上中井（中井上中井）において05時40分に成獣1頭および幼獣1頭が目撃された（※12・13）。高浜町上瀬（上瀬地区）では07時40分と09時05分にそれぞれ成獣1頭が目撃されている（※14・15）。またあわら市吉崎でも目撃情報が記録された（※16）。新潟県上越市中郷区藤沢では、国道18号中郷大橋付近でクマ1頭が目撃されている（※10・11）。静岡県富士宮市精進川では農地防災ダム付近に出没した記録が残されている（※21）。幹線道路や農地基盤施設周辺での出没が確認される。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では京都府南丹市美山町三埜および京丹後市丹後町徳光でクマの出没が確認された（※22・23）。兵庫県豊岡市日高町篠垣でもクマの出没が記録されている（※24）。和歌山県新宮市三輪崎では出没の可能性が報じられた（※25）。中国地方においては、山口県周南市の校庭でクマの足跡が発見されたと報じられたほか（※26）、広島県安芸高田市向原町戸島でも出没の可能性が報告されている（※27）。学校敷地内への足跡残存は、児童や住民の生活動線との近接性を示している。</p>
      <h3>北海道地方</h3>
      <p>北海道では深川市納内町納内において出没痕跡が確認された（※18）。また枝幸町風烈布では、午後9時30分頃に風烈布コミセンから音標側に約400メートル付近の地点で目撃が記録されている（※17）。夜間帯における集落内公共施設付近の移動が確認されている。</p>
      <h2>リスク評価</h2>
      <p>2026年11月17日の記録群から得られるリスク評価の要点は以下の通りである。</p>
      <ul>
        <li>人口圏・生活空間への著しい接近: 前橋市の住宅街における50代男性の負傷事案に見られるように、成獣と幼獣からなる複数頭が市街地内を徘徊する事態が発生している。岩手県盛岡市月が丘の住宅地や山口県周南市の学校校庭への足跡進入など、日常生活の空間と生息域の境界が著しく侵食されている。</li>
        <li>交通インフラおよび水系を通じた移動性: 新潟県上越市の国道18号中郷大橋付近や福島県田村市の県道上での目撃、前橋市の広瀬川沿いでの徘徊など、線状のインフラや河川がクマの移動ルートとして機能している実態が確認される。夜間や早朝における道路横断時の接触事故リスクが高い。</li>
        <li>母子連れ個体の徘徊に伴う突発的遭遇リスク: 群馬県前橋市や福井県小浜市において成獣と幼獣のペアが確認されている。子を連れた成獣は防衛反応が強く、住宅地や道路での不意の遭遇時には直ちに人身被害につながる危険性が高い。</li>
      </ul>
      <p>以上のデータから、市街地住宅地、学校敷地、幹線道路といった人為的空間への進入が全国各地で日常化しており、地域住民や通行者は時間帯を問わず厳重な警戒態勢を継続する必要がある。</p>

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
          <dd>2026年11月17日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-11-18</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-11-18</dd>
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
