// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月8日 / mode: daily-report / 生成日: 2026-10-09
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-08-daily-report";
const TITLE = "2026年10月8日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月8日のクマ関連事案は全国で計104件が記録された。北海道の16件を筆頭に山口県で11件、宮城県と京都府で各8件など広範囲で出没が確認され、学校の臨時休校や有害鳥獣捕獲、集落際や生活道路への接近事例が複数報告されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-09",
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
  datePublished: "2026-10-09",
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
      "title": "2026年10月8日 奈良県曽爾村の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNMFh3WTFWcEFoNUxsMHE3VjJocThFZDNWZjJFSzdXMldlZkZtTU8tNlJJVDNhNjJxS21MUmJGNmhINEdSb2RkdzY1V3BHaWo3SVNJd1VzVy1GMmFjOHZHVDl2em1mcnhsVmdFTmpPck9ZSHJlaFFhYVFCZDhxanQ3ZEhQN0hBU2tSNDlGd2R3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 山口県岩国市 錦町府谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 宮城県気仙沼市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBNNXBDV0VFaXlQQXRESllQZkpVbFNpQXdoTFdiOFZRem5IVTRiUU5YWm5wSGFudjl0cURkdVp4NGVFaVZDaHBQaGMxcThzN3JEOEhqTk1WT2ZqOXJteWJvSXdzVkh1YnZKdDlvSFBrWEJrd0RKZnYtcjRrQXNCN3M?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 宮城県気仙沼市 南が丘１丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQXZBaUUtRlV4MlFidVRvUGNLZnZuNmFIQU5NSXdBVHFIUVd3bkczTEtaTUlpdk5jT25zcVRlcTBCQXUyS1lXcGFnTG5la0o0Q1l1cFQ3WDd5U2tkUG5BSEdWOVhRbUZYQ2xFWE5FMkdud29NejU1WHdZVmlhUjJOUGRDMnJDYVFXSHRnMkZkUmdtMm05dE1BYWxlX3LSAaIBQVVfeXFMT3dwVjVhM0VfTzVNZTkxV0tadmdDX05kc0hVN1NuX01EWmZKeFNiRV9tdVRITXl0VmVEYkxQZXlwTi1neGlISUs2RFBJT3Mwc0RhM0t1S0IyMklhVXRTcktWV3ZxNV9YS2RZOHpoNFNsSDBlVXFGMlJwTkx5X0lOdmNMVzlWQzBObFgyVGx3aUdkUGpfelU1cmxVeUVHanlGYl9B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 宮城県気仙沼市 笹が陣の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZElncV91RUUzVV9vaGJWamNfUnVFS0hFdHkxQ3R4RkhFRWlrbEZVenBkU2J3WnJIblplaDNWM3A3cmFHbTdBN05UeUhucFVCclRFaEluVXRsWWtsZ1JJaGYwLVNwdkZWMHMtX1hIVHBfeGFWQWxya2JLeEdCcDRCZlI0T3doVENVcFIxUlFMNlUteXUwY0paSlhHTXfSAaIBQVVfeXFMT3ROMEpjMzBUcDZZTGZLbVZZdzAzdXQzUGVjUjFOdnBCU1VZYzJzMHBiY1loNDlrQldmeEpzMXo3M3lDOWZYajl3NkZfTm5sX2owY21ZNmJPT3JoYm54WGdyZGdDMjc1ZVNHU0lzdWFaX2RVRHBCTVVnZnFieWNOaGR6aVVGSkU5RXBZcU9JUlVGM0g4eW8yQ05mamthTXV6dWhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 宮城県気仙沼市 芳ノ口の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQWJqMGhITHVMWExlQzFUc2l0S3F0ZzhEVkJsZFZNWElqMUhDRjlvQXlIYkUwRzJEZGtMOFh4RDhnWUwzeEdCQkJIdDg3OW9rVXdzLW5veUUxUjVwR2ZaT3dMNjFnWk9iWEg5VEpueThCQ2pMbDVFV3BpSHhKMk9Wc0ZxdzVkU3pORFR1bF9PT29ab0ZXRVlWZnFNcm3SAaIBQVVfeXFMTzVQZmYzVENfRzNVQVZnYUQ5SkRmRnJSWS11SERxYnJka3lYb1lOQUVMWW1nQ0JOMEtMNGVjVjJ0emoxRkZBanVTbVZ4Wm01RTFWSmk5TjZSTVZFdnBNZ0JycERUa0h5cWh3Z2pIelJEOXpTU2JXLWpzcm4taTY1R1lGRk1xMDQxMFNZRDNJU3V5bnduYmp4Z2JTTVJTalhYQmhR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 北海道様似町 様似中近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1OdDQtRWxBYXk1MzdRMDlnN2JPWXJkcDhhbTlxN195blpONnhMeVdwbFpPaTVrU002V1g3RFJHZXpKc0thS0I5bERXbk9qeXlSQ2NZdlJxUktYUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 北海道石狩市 浜益送毛の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOblJPU0pBQVVsZWZhNk5CeUh5bzlVR3BYUE5IS20zUVlyc3kwRkdtLXNjVWFnbmVSWHhhNXRRSWdpSEJTYy1NOXpWSkRnZ3BBYTRrbmlOX1BBaXkwUjM2UG9TZTRJaUJhMFEzdk1Kd2xQWm0wX2kzdkFFejZKb2JPUi1GVGZsU2gzaldFcnhjTjhHVnVMQWZCZUpHY1nSAaIBQVVfeXFMT0dHR3JKdVJORHl2cW5HdGZMX0w5UnNmSzI3MzFzTVg2dUd4SS1mbkg2ajdTU0lQSlFTWlRSa0JfNmRhN2FJeExON3VDRzJybTl0Mk1EOUUweFN6WVlPVG04MF9YWlZrYk45b2NsUzhxZlI3Y1RPZVJnbTQ0RGhwTnJMdzBlWllVUzRJV0tTY2ZkdVpWeWhMZ3pvalVIVTFTcmdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 北海道根室市 初田牛の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNEN4ZWQ5TzQ5NXhiazZjRmp2a1ZjbnJ1R2YwS1lSYUJ0Y1I2N2FzeU1pRVc0TnktQ29sWEhRVlVfTzF5M0NkRG9QcGtKMkh1RU16aG5yajNFM3d3ZnduUXhWcUFmUFpMNU4xNjBZX3h6Rk45d05qYjROVy1kbjVaSXAtdDF1Q1RrR1REYzNFaFhaM2xxUjZQejc1dUvSAaIBQVVfeXFMT1pGeUFjMjVFZkw2cE14NVdrVDVmVlVjWGswVWxCM0ROLVBDT19DR2FqRTJMazQ0alExcEZJRzBWM2tmbUFhclRiX050eEljdkJuQ2gzTUwwRF9lY1RqbGxQSlpkc0RWa3FoRFQ1NGJIeHp5NEZnRlNRMHNXVVZ4Z2hqMVpYY1RDTWxKQzQ2TTRRbW1sM2ZkMVBZM2N5RGthcFl3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 北海道富良野市 東山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQQnYtQzl3WnBuaHdfYU9uM3JHUGc2aHJ2ZGZFeFJMRnlWck9yVTJDVjdUbDJDSzlPSUVmQ0NwdDRjUXFfZUF3Y0NMaDQ4S0ZrOXNLMjFrRDZIVy1CUzJOV3Z3NXhMZG5ERG91VjE1MzFTUFdUR3BkS3c5Mzd4blFGWlFBVlBXY0dxNkR2Vnk1bkwwVlViekluMnp5UWx6UGl6YkVzT2tXcEdVZGxVUjV1aXFfbUtCeV93aWM5a3N0SVdRMEg4eDBxU0c1NG1WdkdKcl9iYTNsWHh2eUdaazNEVTlHUGlHM3pHWjREcmpvV3R6QdIBogFBVV95cUxOLVVKOE5mREpnODRLUFAwZ0swcXNFZllGSk81cEZGS1g0SXV0RkFyM0hCWHotcXktWGVMd09nWGdsdDJOTHF4X3JFZ0hyZTZ5cmFJeXJPT25xOVRDZmZxZ1pyajV5cG1BLWVlVFlVUmJ0WDlma19yWndjZGYwOEdnQVdxSXRrX3drcTViRHQ5NkwtWmdiT3QxVXdPdzBqb2dmUWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 北海道北見市 緑ケ丘４丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNV3BWNnJLTTRrcWh3eFVxd3Y2ZHIweE1ZRUNCdEpmVE5QWVkwcms3SUhwRjRjUHBZcjJWYXVXRWhqb2lKb250emtjemRhYkNmSGhZTXh5d0pLb1JzaDBjbWpaWU8xOURVM2tuUTB1MWF5TUhWTWpEbVZvc1QwT1h0SFdiekd5cjViTmtlZ2VJMXFBY08tU2N4TjBwTUHSAaIBQVVfeXFMUE1hOWtvTFN0YWNOWG1Ja2xnODdGNmFCLUZNZVVKZTFSZ19jRmNtU09GZElxSGlmM3FMWGN2akJwR3laWHdublJCbWdWbHRDNVVDM2FUS3BCOUp2NVNqMHBnbDRwYnBudjl3VUFiSGxrQ2FSRm9fN2kwTmY4d0tWZ0tzc3hpUGMtV3pMZEFvUnNfa0MyYXAydHJ2TkdNbXJ4ckN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 宮城県富谷市 富谷落合の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPakotcFdYMGpCdjdZWkJEY2xjWW5Ja283bUVmbDBjNzkxUmp6d3FUbHZLQ2xTUWhzRDdGT1NGam0yeTdjZWpIUTRCNGViVkFnT3dZMWdtb1p4QWxiNnhLOEphR3NXZ2hPdlF6TDhLeGhPd1N3bkZDNEhjOGtiZ1VzVTBJM0drUFBpbHhoQnVFLVR5NHlYenZzeDVkTGvSAaIBQVVfeXFMTnAyX3VNNHBlbjd4MFRHejRjVTM1MU1XQ1BtLXdRQnVZbWU5VDdhck1OZ0Fldks3bng2U0pLMWV6a2RZRGdieWZELUtVTVp0TVd6OHY3SVZPakpQQ3FwbnJkTGdCWTdKM2hBVHQxTW9LRFpvLXNJUHJ6TjhYMEMyWkt3Mktvb0xnWWlNMUNZUXRRSGxjVW54YXh3d0lvSkJ0Rm1B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 青森県三沢市 三沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMndvUjhIczF0TXhOZ3dHXzZ0aG5YOHppbUFzYmw1SjJBQTI4UC1HaGhYNnl2LVlOeUxrZXZWWnhwa3BwWjBrel9LYUZ6X3czMHhGU2JBdUxETkZxRlRCSUhjX3dldFFldE02bFg4SURKSk9falFxOHdSRE80SGpKS0RBX3BYbkZpODlYbkxuZVc5bzJNOVlRQWp5RnrSAaIBQVVfeXFMT3cyRW5vLXYzYlFObTlzMkt2MWJtUnpkSXJkVmgwcHdpLW9JZlRqYTRwd09vd3AxZmFZS1dqV1g5VzBSY25YMDd2V3JVa21wTFI2RHBBVzVuSmUxMGppaVlSWERHODZHbVRsWFIyZjNEaDJKc1h3eGZnU3RaeWtmcW5iU2h4Tmp5TllVVm5TOHNJS3Y0ckpVbkZ6Z01aUnQ0VzFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 青森県八戸市 西白山台２丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbFA2bmRNU1hCR1RxNGNUODJUSmtHanlmTVlVdlpmWXJ0Vk41Ry1VcE9ybnNjQWRIelR2YmwzM1kydHlnNC05Tm95SXE2R2JaTHFPSzY2OXFWYTZ3TFEyMTRqWFpWM1NXNnhPMGVxdmRHQ1VyVE5KekdQbGNlbGJMQ2x2d0h5VVlEMEsxd284VDZIM21vRUZmakl2OVjSAaIBQVVfeXFMTmxLUGxxRGVkS19jMGdqanpWa3NvZlNaaVNqUE16THoxeW1rdkVMQ2ZRdEJ0MWRDSTJxY2dienEwbktWSXRRVndwZEhiYlBiaXhDVnc4QnNxakRvNUJKR1hrQUpXNW5ZNjBBWHVwd3Z0VXozY2ZrdkoxU1Q3OUNYcDdFVnpNZmE4OXhrVnNlSlByTU1JM1ZDbnV2TUJvYzdqajF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 青森県八戸市 西白山台１９の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 青森県むつ市 桜木町３５の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 青森県十和田市 奥瀬の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 秋田県大仙市 長野長野山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTmZlbk1VZnNfbDN3MDFMNE1UNDQwREFHdmpGV3pkUnkxOG11Q0Q5TmhjSTZRUndqeXJ1Y1phMDc1bGx6a1VndWNWcVBOUnNWSHIwRlRpMnktMWtfZWRCWWUxS1FvZUxDQ1dkSlZqVDF5UmZUZkl6endlMHFMU2RBR1BjYzY2ZnQ3UmpMcHd2S0g0eVZyclphV0FWMVfSAaIBQVVfeXFMTm9Qb1owZ3NpQkFOYS00OGFHdU80OXlndi1Mc2ZsTU5YYWtfd0JfclRuc3pBRkFfcU5rcmxmeVNINnVmODI3QlBfUGlDdnNFUDZWcmJPM3JMbDFvYXJHa0M2dlRVWnhha1RFNW9hQnJoNWJJUHRFS2htRUFVTjhkbS1hQkxRTG1WWTl5Y2Z2OGNBYWEtLTFEU0szS0hvMWVYZWRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 秋田県小坂町 十和田湖の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPLU5pb1ExWVlGVHpvTDc0alg5RUNUUEVQRWp2dllDcE50OEF2N192dms2NFUzbWFZT1RTTVRCVHA5RmFxaVBLU3BPWVBFMTNBMnFoMldZeS1feTVZZnpEZmM2MnJXc2hYSUJvc0RkNlJMd1YzUkh3OEhabDVCSTI2dWwybjNuU215Z0ZnLW9oSV85a0U4eHo3ZDU4RHDSAaIBQVVfeXFMTUlNUEplcnQwS2tJekVYX3RhV2t4RnpkZkdKbnItTmtwQWFVRmhlUmd0ejR1QVE2V3ZCVnpxQm9wYmJXM3dOdXg2R3FVaDNMRnZKS0p1RHlZeV94NGwweWNsTWRHTkZuYlpJLTR2VDNqbmlydnE2MTRVZWlDdC1zZ09rVXRJS1hYLXhPdzR3eFdYWEF5SzJTWEt4YnlWckdmTHRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 栃木県佐野市 作原町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQVBxZXZOUXBtTGRtT2NFVFlNX3BzY0tkMnZSaVh6Q3hfV2plQ0lGNEdTYlZkUXBvMG1BeGRINU44Y3RyZFN0Y29HQnphWVlGSkRDeFRMTUxKalJocWNnN3ZuYzFiTUM2Q3p1MzF1Z3p1YVVTM2ptbXFwc1FtVkZQUEZIVUlKUEFPdFFwQ050WHBRTGZCczBLRXNEQTnSAaIBQVVfeXFMUDFjX2owTnZlRUFGY2k2U1BQT3ZhbFVfby1VNlprQm0teDFZSTJZODNiUHpDdWlNTUNIVWNfT2g4S0FaajlrRjNFSG52b0JYeWphYVFnNXhIUnNac01Lek9aNUx3RWQxR2d5aUxMbFVPM0tLVkk1eDh2eDhKLUZZc2k3VHhLSVRhZnZtZlN1RWZwaVdhXzhzNFIzeFVPS2cweG1n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 栃木県佐野市 下彦間町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSUJJZUpIdlhrdEhMWk85ZUVMemtXMlEyQ19ocVZmWTBTWWphOUJxUHZySWgtcmplaDdPWEpNcHljTWwwZ3Y5MG9MWXpRcUJnbC12d0FkMmU0TlFZYV9qNkFSR2lSTFBzbDhwV0pvRjFjejJxOVJqb1JJa185VHA1U3dtUS16WXo5QjB5elFEZnk0NDJGU2Nhd0N5RzDSAaIBQVVfeXFMTm1EaFN0NFd2TVJHa3locFYyZ3l6YV9EZHktSEV0Wm5WSmdFNEFzZ1l4TVloY09SampGVl9kN3M3cW8wNWo5Z1ZNT0xyWXJRMXpaUE1NYjgzVk5BUDlHMjdvaGdGMk82b1gxbEVQTG5NdlR3YllRRUFhdDZmc21mWHdTMWk3eFVvSDBwcFpxVnRpbG5xdlNvSmxIUTV4bHFsbW93?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 栃木県佐野市 路上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5CUDByVVlRZzZCaHJPbjZrLU9UVjMwMlBfbE9Tazg3S3JtMkFjNmtoSHp1aVN5aXlZdTkySEpJcUxUVUliZHN0Z0p1c0J6ei0zQV94dlhfc3hHbDQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 栃木県鹿沼市 口粟野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZ3NfQzBTeGtrZG5GX2VCV3ZHTm9MVmZub25pTGdSdTJqdmVUd0haMi1XRkEwdzN6TEpUejFQaFc3SVY2LUtaOU9RclNSTDUyV0ctQmJtWXJrTWZaTlZpbHdyaDhjODdjbVJfVzktUTNrQTdjV0lUWl85S2J3REc1ZUJSVU9DY1duQW1KMGlyZmVuQS1BaTlzMExYWWvSAaIBQVVfeXFMUElnYk9MeTR5bHNCajV6aDgyNVpsekNQbU9QV3dZUXNiemNfZVJnQ2MwTV9PbjBQSVlwLVh5MUhXdlNaanN4ek1sRWZGYTB0MWFvQ0VZUVp3aUxhUDZfZlNmM3dLMV9jc2R5dXhiZ0FzNDA5V3RSdGJoREJrRkRfZHJfanlNcEFxMXlINTFtaklZalM0X0VOVkdBa3pjakQ2ZEdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 栃木県鹿沼市の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 神奈川県相模原市 緑区牧野の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 神奈川県伊勢原市 上粕屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTVlFbUpCTlZnU1JFeTNrTGRwSVRZMlJLMUtFVTRXcS1rN3hNX1cwbVNfbEtNZkl3OXp6UkdNT0xJMzZ5bnBUM05VV2Fyc05vM19ZSDViMExvTWxidkdxWFRuVk1qMVU2eEtjdUJ6N2FjMURzTEVkMFY3cFFOR2hMNjViTjFVTHY4b1QxeGRvcXYwU0NUR25WZ09XNkLSAaIBQVVfeXFMT0ZxLW82blVxdjIzR19TS2tjVHRFLXZsMHBVMmdTX1ZqWGF6UFZmNXlfRWRKVVFfNnpLQnZDOS1kb05OTWpKWXROTFF4MmZSQ1NrN3BzTFVRSE9OZGpSOFFQeFVlWEE2ZzJmcFhxNUV3YjF3YVJxUmdvd2U3X2dueVlsWjY4bUx1Xy0zNG1jWUg3OXhyX2hsemhlSEphaW9ZbVJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 神奈川県山北町 山北町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFA1NHJQNUhNcFV4b20zMEYxVWNMTUhCRXFmSkgzLUtTcUFuYUhRdW1JXy1ScDJ3am52RjhPbGR4cmlwZ3NOREhFM25DVnRZcmFDc3BIZFJjTWd5QQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 埼玉県秩父市 荒川上田野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeGREaUdZbHZvbmNIZklwbmtSeWsybWI4emRldFpCekc4Njg1UUozQXdJOVZjRS1qNDBBVy1NeXBIdFR3TDQxeU5SM3VDb1dfaUJud0dMVVU4enRreHRydzFSQXkyeTRwbEVOQTVHcWUyM3Z4UWFfOHozeDJ6QllKcU15ZlU0SGN2dVVEenZ1WGNiUDR2Mko2eVlTY1jSAaIBQVVfeXFMTW83ZEdJQlFQdV9KYzk1dllMbGl1bGI2R2pFbkpGQmQyQ3lTR1Z0THlxMTNMOU9aZlItdm9iYS1xd19HbW1tckF5YVpIRy1fZ1hnaXpXRFY3Y2t5azZZMkFXcmUybXlSNUctS3I3QW84ODgwa2tEc0RQdE1TeHhlZHc5eVZ1cUVJMWRhRW1oaXpVb2xuNnVRenRjRjEydTdWSEpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 福井県小浜市 下中井の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 福井県小浜市 門前の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPa3pTbzJzdEpBVE9MdHVXdWFpdGxSeHp6UHY5YXBoSnF4cHNiWDNVaHotZ3RIb0xHcEpLUEZxQk5LOG9EY1BXMU5lbk5xeDdVU2YzbXNqcHg3MEdFNEF5cy00VUpVMHM5SG5Fc3RXc0xsT3hhNVZMbGdtbVRYYVFZXzl6bGVYWExDdEd5ZkRFbDdCWVg5NHdncExyUm1UUzlyajZyS0ZPdHNKX2J6ZXFB0gGiAUFVX3lxTE1NWGtzRnY4RVEyVGFIYzRZcmdnV1VCZ1hBdjRTQjRya3JJM1htczNtMzZ1Uk1UcjRmZ2N1S2R6S0hIRnBiQ3JBbmU2SDFfN2ZoejROR1JDMVJFOV9IaU5PV0UwUDhhdEd0RmNqSGw3QVk0dXcySG94U3lWb25Sd20zTkZscEN1Q0lkSERlOVJ4X3dqbndqaElpNHRUdUZrSURuUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 福井県小浜市 口田縄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNWHQ0ZGJiUFZRS0VUQkNkRkcwZkNQcUJZLTFQRWtHYThpRVhlcnZlMlZLRlZmNzlrZENWa2RsblFQdEoxUmxZV21VVG52YW1fWjN4ak4zZnJLS213Mlg2SjdYZTFsU3RhRFp6aS10X0lLVUwzdGNoVXd3cWRuU0t4RHVDTG5GT1dhUDZueG1VRjlMckhWc3BnNE5ndGVSYjlKaEdqOG1GVl9MZEg4SUZ6SjBJR2poV3QybnlZdHVqbVd6VXZmZmdkSUZ2TlVGclAzbTFISGtQNEFGYXVVVEhwajl5c3huejZ0aU1aWlRGaXZlQdIBogFBVV95cUxOVkdzUzhydWVIdDFpcVUxeTVBN1hkLW1FVFlkTEVhZm5BLTRBMmZHU2NsMFpZbi1odWo3Znl6RUppcHpDUUZSQ19IUE94UklQYUlwSEg0VUpXUjNtZUtiZ0tnVXFuU0U4QXp2SEFZQXpMc3JrVGYzUEs5cmRZRVZoT2hGeGdmT0o4Qk9FRGJNSFNzYy1nRi1HWTRYeHNKc2NiN3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 福井県南越前町 奥野々の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQUU1heHM0RDl0Y2o4VHppZHl2RVlPaEdudGZnQk9PT1ZZMnZjajBFYkVfeUdFWWpYZGRJRXJpZUlYeG1NOGF2MDZjSHZybE14N09NaVVEWlBJQlZVdUtCOE54bzdvU2VRQzlMWHlyb2xsS00xTkNiSVo4QUtWNU9RSG84QmxtV2paZ01zVFNkNkJhN3NHajVQclVVcFFhMFItcy1wcTBpUkdaRWNyT0VrenluRHlfelc4eTZrSEExaGdOWno4LVpibVhJYmNJclBvSVlxSWRlUWxNMnlnRGVmbVhoclgta09NcHFyckJCWlQzQdIBogFBVV95cUxQNFRCOWZZdkFMR0tCZFowUkgwZVpoRWVJTFk4bzhjUHNtUWM0a2VsVXh2cWxpQlpPM0U0VGV5Q1Jwc2RjREE5a19fNHJHZGJHUFVkZmJGMjc4V3VIenRiaERzT0RKczR3OHQ2N2EtZEVyZUIxUks4djVvTWxxY0JqZ2dCYmtSUVJwOG1jSWF3MHdhckZfdWpGM3FBUnBRUzlNMmc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 福井県若狭町 新道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSGVlejg4QUtXS0ZKT28zaEVFSGFPWm1JbFBQcVVkQjdjb2NTcWRFT1llQWdGVnZtbjhITjdRbVczd1lGQnBqeUxTODR6NWpSYWFoajMxcVZsMm9TNnpsd1ZaMzF2V1hXSXJZMFdtaG1jTl8zQVhjYnZhcXN2aU1LMWJKTFYwLXEwS0xoeWs0UzhhTUNiM01OMjFIbGHSAaIBQVVfeXFMTjZxWk80MWFEM3BSdEhJaE1QU1JHZjFzU094VWE0Vkt0c2tvWVJCTEhXNk5INmppM09URWpldmFFRHBaLXd0WDg5QV95emlzLVYxc0lwWXdBOGtBZXFya25Id3JpR0djLXNzZFpKR1hGRGdGSTJ3QU9oc0pHT0R1QjlmOGxkcUhqV2Y1ZzRma0NDUU93QnF0Z3J1UXhBWnE1RmNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 新潟県魚沼市 公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9IS05fMGtUUWpLVGRNQV9qNDFZbG5yMFdKYUhhRk1aQjFrbnVwc0F5RTR3Y05WbXFjSElfZGM2N2FyMlUwV0RVNVNnT2RuN19VN1htaDZ0WExISjZiUjFJTHVyZGVWNEFyQnRXUUFyX19wYnlaRFR4VURHNk0zWnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 新潟県魚沼市 月岡公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE5QYWJBR0wyYjlNN1VKdnBDcmptX2ZJX1dnd2FKVjJhdW1KQm96MjVIc2NRWHg0Y3FRY1RHN3ZJRkhRYVlo?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 新潟県胎内市 国道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5OSTNsVFBmUlJvSG42QWdEU0ZlTnN6M3FNa1RwQWM2bU9POEdrWXY4NkZNVmRadGxRMW9GNjVBWnpMU1Z0RE1yRldKR0VtSF9HOGhWcVlIbE9EX29LdzlIRlNJbVJSSW1hUXozaFFxbVNfZm5seWpiazE0MkFjazQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 新潟県胎内市 須巻の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 新潟県長岡市 中潟町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 長野県南木曽町 田立大野正兼の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTGF4WjNydHhLQmFPNmVyOUdlazV2Vy1Gd2YtSkt5RDU0TUd3VFpUTThfMHR2aHpSa2p6d3paYlcxRWtWRzJOeTJEWDczQkM3VlRwb0xrVW1UWk9feGVpczFNSzJTRWlrSW5YNEhNUWZ2MHYxSlRGMDV6VVpRYnU5WGVCY2ZtNTFZWHNVYy1sYzY2NmhRS201dHl0T3bSAaIBQVVfeXFMTnRwNE14MlNVaUVJY3Zpc2ZRMHVzRGdoS1g3dHQ5U01Sb09McnhCWm1faXJJZEFVQXhydmplaGgyQ0Y0d3JHSFU2Wndfa1ZtRUhxdnd2QVlpTWhwTmpoWVg4aExpTm9xUUxtY1M0b1NHd043dXVWdDVsRzh0TUlXbVpHanJNUmVxWlFWbU9udmlDSHphQmNLWVh4WUpkWUtmVm5R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 長野県立科町 牛鹿の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTWpaR0V0cFZGN291STRHdW1xWlA2X2Y3YlhhZW03bmxnTU03RjBlaW5reHdRdlZfYXNXd25GSTNTS2pxSUlqdTFBYUdzLW9QNktud09TZjRHcTctMURzdDRFQkd3eDZEdVlnb1N6MGhPNW1iSkptVXBsdVRMUWVIbHNfdzBuQ1dKeHRiejZRNThZb2lFZVVTMDZwNUbSAaIBQVVfeXFMTk83Z09XNmdZQVRvSGYwc3A0VWNaZ1h3azE3TzVod2tFOHpqdjV2SkRuV2dEaHRsU1NBUkYzY3BkZ2F0Sm9xeXBkV1R1TWZMLVBWLUJOWmg0WGozRGdZVzJTby0yZHNGbkRDWTNlb3QzOFZLakFGOGd0N1Y2eWk1cXJpVUpfdml5Y3Nvb1o1LXhXZ0pvS0F5M0RFUWFfcTRLQXJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 長野県飯田市 千代の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNT3VGNFQyZUNqdWJ3V2EwY0NGUVlwNGJ1TllVWmE5RHJoUFVCUktGSHNjOFhDS1U0TGJtOURZRHBUdlIyMEVOX2pJdWRoaExlZ09iaDRBZHpJaXJzSkRMWXFwSFQyYjdRRXRfcVV4dmFyRk5lWG1JWXdPZnd2UThzXzFNUk9iQ0ViY2lNY01ha3ZWUHFSY1RmUmwxdEVGVmtkTnV1NUR5T19Va00tLXdZ0gGiAUFVX3lxTFBQVkRnS3U5RjgxMVRtNXluVDZvRVBYbTdJZTQ1bGdlVlRJbTM2OUpvSThQbkJ4YnVaLVF2VmRwZkVfVHZkU21TUEh4a3BlRkREU1F2RmRXU29NMXFjdUNmWDcyNFBZQWN6QnY1bG8zTnI2ZzF5NGxESURJclJLSnNlbkxfRWFtV0x5ZGZxOFg3Y21CWGhZUURNVTBHQnp4LVN0dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 富山県富山市 八尾町保内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPRUtNZmVaNk5mai1USl8xdUVjam8xeW1tdzN0LUhkZF9URk5MbkNJbllhLTUydzRib1VneE1RUm5UTGtKWHI2NFNxY0ZzN2V5WFoxOHZISVN1RGNoWEt6dVMwUWp6RV9XUUFhRkd4V1NSZGlUMUdwZE1ZbU1DcXNNLVNMNVdEeUlzZW9obW5PT2hiSjdsZEt4ZW1CeFVGc3lta080Q040WkRNbGNfUXg3TjljNE1KTk9LemZzOGpWcy1LSWNrblJmN0dFYmduM04tRUR3TWtpWlpyVHUzRjFjTVZNYy1HMlVRUXB5NE94cW5kUdIBogFBVV95cUxPbzd2QTlVRkRHbFNpMFBCVl92U0k4MWV4YWVXYmZRaVRoUlczd3AwSHRLbm4tWm53UGVqYjZ3OFdsYzdoeHpqWjdPcFFhLUlZUWtJN3BUZGRFUjJQdk42YVRvclk2ZU9EQWdwam9aeUZ0Sk9pWlkzdFk3VUJoUXdrOWltajN0Q296cUZnU29nYXVYRm1fbEo5bFVrM2huS1JhWVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 静岡県富士宮市 粟倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNWUtIbUctUWVwQ2xua3M0cFg3b1ZkbVZzcGp5ckVLTFl2RnNLYzAySHk2YjY5dkdMRWxIN0tGQ1Q3NTZGYVRqNk9PMndPUXBrUU02OTFCWEl0a2c0V1JHczIxdWQ1eEJuQ3hQenhEMndGYmtVdGZNU09nTTF5Nzc0SFM3bi1zWUtCdGk5Nmc1SVVSX0NSXzJjaG1TLUZtMTdGN0ctM0s5M1hRUWxmWjRGUkZiZFRyMkM1ZFdVYXpWeFZPU2d4OHI5X05McmhMeXRlUmszSURFTThpZGhDZ3A5LUFOWFhPYU5teHEzVGkyUldJZ9IBogFBVV95cUxOMWNxS1BIRGtncGRzQjdSU2xNdHA0Nzl1dWh1Z1FZOG9uZmhkNkgzallqM3NpOFVwdEJVUk5yZzJ6amNhQm12bHVHa1hpcWdkQktON3BaSl9uR0xBRFBjV0NTb1h6NTljUHRsdFNkb3YwaVppOVVhc0tfdHZpVGJLUnc3bkJiNm45djR2Rkh3emx6WllUSF9XWU9XemRVclBtQnc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 岐阜県恵那市 山岡町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 岐阜県恵那市 明智町の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 三重県大台町 大台町岩井（集落際）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 三重県大台町 大台町桧原（集落際）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 三重県紀北町 紀北町河内（集落際）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 京都府京都市 深泥池周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNaTR0OWxYbmZ4R1pXb3BFQzUzS1FIOFNxaE82NmFVU2FGb3dEeUlJaHV4ZXlwLW1KaVNxQktYa2VCZDFjSmd0YlJYUDVhRjhwWEh5RzVwcEZfczRzU0R3VmJld3A1ajhnamt3Z3pEdDZjbmF2VVd3YU9KUnpwbjVxS2V5anpWNHR5WE9WcDRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 京都府京丹後市 峰山町二箇の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQd3hGR0NUblhENVFDalZpdmpJdFA4REwzQUNra2JCNlYxUnZQTnVkTlg1VWNZQllsSm4zMmxja2hlRldrcVlISGp2VjBrQzdYZnJvelNIdFZMWENwVmQxVlVHbTg2V3c0S190aTBNSDdicDdnazFEOVhZTXd3ZzVtazZld19lWlVPLURPR2hwZl83anNpclBIZzBfLVfSAaIBQVVfeXFMT0hNWmJBWHpzeU9Xd2V1YVR2Qm5HNEV5RC1pNFA3TXVnaDJybkh1dFJZa2Z2eUVNbzlSZ0dJbVFwcWItd296Mmt4X18zWHk4cUhVTUZKRGdlNDAyMlBwOVhkbzNqUE5rd2FMNFZxM1hybTBGLTJLcGtMTUw2R3dyMlZKX2g4cFNuVFVEUzdlaTgwWmRqRURjSjBEY2M5QTJHY2ZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 京都府京丹後市 峰山町鱒留の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPXzZNczBpbVZSa2VYb0M2V0hLeFBpT1ZnemxIc3NrNE9saWRHLVZwelVkS1o4bUtVbE5WT3Z6NEJfaXhhcWY3VWlFTWpGaWozaV9zS3hJRUNsc2J6MTdBbDByc1pEYlMtR2hwbVYxaVhOQzdKNmlVR0dIb0NBU3ByeFZhYXJtV1hWa3JEa1V4ZF93YTJmMVdhT19VcjDSAaIBQVVfeXFMTXZxYmd3SUMzaTVoTGpGY3RIdHBjcnF4a2J3bTNjdkk5eW5lbGQ2VWQtbUVIZjZmOHVJMTd1d1d6RjU3dkNJM3cwSmJkSW1TMkNVcU0taWhCZ0tsTk5UTnRlNUFpMG5Bc0JOa3ZOZ2FRdnZfVENrdTRlNnJmQkd5RkczazF0azlxRFpuYmpNcXBLV1AzOEYwUUN3eEJiU1I2NHR3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 京都府福知山市 猪野々の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQYlUwYmJ3dGVOcHdxRzU2dnFiUGxGS2o0UHRXZ2pLbElJelhtOEk1aDdaUjRrZ2gwYV9FVVdlQXdrMDZGTHNLUm9mc1RDWkpPVkliWk5yS3k0YmFiOWIxYUNnUjJ3UHpXNWhyaS1Zb0ZlS0kyRlppUVh5NTJmZ05oU2JpcVZ0aDNsY0lTbWQ3MHFrZ0xKTWFIbU5XQ09zaVBHbkHSAaIBQVVfeXFMUGJVMGJid3RlTnB3cUc1NnZxYlBsRktqNFB0V2dqS2xJSXpYbThJNWg3WlI0a2doMGFfRVVXZUF3azA2RkxzS1JvZnNUQ1pKT1ZJYlpOckt5NGJhYjliMWFDZ1Iyd1B6VzVocmktWW9GZUtJMkZaaVFYeTUyZmdOaFNiaXFWdGgzbGNJU21kNzBxa2dMSk1hSG1OV0NPc2lQR25B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 京都府与謝野町 金屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVWFOWThUbG4wUmQ3SnBTVWY2a2xqT3VheW1FZUo5eFY5MjRtcGl0NE9UcFhtaDRNV19aSUtvVTdCYWVHanNYQk9BVXJFUUZIcWttVmF0bExYWmVCZ3BQMVR4X1F5VDdzTlRuRjkwNG9nMzU0WlBaOVMtNW9RbnpaN2lYaGVEeFQ2N3FyTU8yWk02dFZTTkYxV0VEVU3SAaIBQVVfeXFMUGx0LWJSbUxuZ2VIeWtHSEdOUXFKT2drYnM1MDRpd1ExNUVuWnQ4ck5Vai1xS2ZoT2NjMkhEb0ZxRHQ3UEFjZmFZRVhJYUR0UGQ5R0E1bkpKbHpTVk1kUkVVeTQybF8wRVFXM1Z6TENMaTVGNEkzNmlBbmU3TTVVVlZmVFZpMlJZSUtlbWxncThtNEttandESVMwckJUQndaQzV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 兵庫県豊岡市 日高町山宮の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQdnFjNmR0dk9HOUVrWlJwcHV0aW5EY0d1S0Fvd2VCY0tsRU5VT0drdmh4T1VobW53bUlSaU1mZE5Ob1V6Xzdibmo3cWprdmJCVFAxTjBlM3h5SGQxWk5ES0xRX0tNY01QNVFzZ0NYeDhWR05EUE5CVlpBejM5c1Q3a3pLN3NWZHpGSXhEeTlCMWxKdXU1NjlBam1MV2RlVW9MTXFUY19USUZ6cTA4NEp1S0VJekNpYVpwcktlUjVtakxsa3k1SE9NbnJJT0M3Yk5EYzNHR3NBdEZlRzNiNWlxclBPWGxsQi1ILVZxSVVEU0g2d9IBogFBVV95cUxOdkQ4YUxPZmF2cFlWMDZ5YVZIS1I0ZjktcG5aaF9QdC1JQ1BwSm5uOWFZblFKMkppYzVSdFZPaU1LdDVZT0VheVJpU29YaVdhZmFUNlk3LVE1R01SQ0lyRUtLb29lUWRXXzF6ZHBVaFdyNms2em83M1Roa3FnOUJoUUlHTzRZczVQeWhrbm9FOVc4UTdTQW5RZUJFcDVUdWozeWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 兵庫県丹波市 青垣町市原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOZlVCQ2pyVEJrUWF5SkNxYlRCNGJUOHRwSkhsbmJTdFR2ZExraE9TeFljTEstQTBPTERaOGxkVVBndDJObG5lcmFXM2YzanB6YVltRGs4VVd4NTJaN01yZDU2MkZUaHhPZ2xRdkNnM3dTUXNxdU1ObnUyd3dGaTZGdDZ2MnlYZ1BwcjhONS16RkpVbkZHeDRPZlFrMWFYbVNhZFJsOGkwNk9xR21ScEN30gGiAUFVX3lxTE02VDZxSTBmejNNNzJqaUJmeEZVLTd6MzVqd19qcGpuajBwV3FYckJrY3ZuS1NHQWdsSTBBMkp3bGowWW11ZnBXeS1YWUlhSlZjN0JIMnQwVDRvdkVyY3I5X1Bkc0NuYXFlVDBaUzJWT0p2Ry1xVUtxd2tIRHhtWDRfdUpZLXJmNmYtUnRBaFhpUi1mbnNtbms5TkxfWTdFWFRXQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 兵庫県新温泉町 桐岡の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcVFqbzdMVmV2MWI2SWtMVFJXWmZKbm9wX2hKeldQVDlTZ2NrZEM4VzNsc1hrNnVkajY3NWhfWmJMbWJibDBITk8zeUx3a3lUQklOYzdwT3ZJM0pkSjVDYkhQSnBQQWVtcXp5Um85Y1ZEUUNGSklEVGRsanhBaWhMZXdiWHFyUDd4ZlBZU0FsaTRsMlpVM0JzdTZMc3nSAaIBQVVfeXFMTjZpVTJaVHhMVXZvWlJPdm5yeDlMYzZiVWRMT0xhZ2xreVJFNWc2TVAyT3dVT2hsUkg3OENBT0xzd3ZWQkhfdFZ0dDY2cF9sUng0aXFHVjNXcHBDSTY4dldGaDB1SlFGQjVTTXA2U0xGbnVXRzBTT3lMUXVIZTY3VC1RcHFxRFYwNF96YUlySFhyb0VlREF6ZE9yQ19fcnpGN2FB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 兵庫県香美町 香住区油良の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbE1NSVRHMHg2ejZDVG1aSjB3WHQ3MDBSbXROUVhKRDlKcXd6X0toSGRGV0xJdVZxY3NuZ09fcGpaVm5Hai1HcXJBRXFZWmpuYjhJUDFrVXJZS0NDU3hqRUw2ck5mUWJWUkxEWjVxNF9wVVFQeDZRRHpaMVpNNGlQYXppM3dCT3BYNG5qVTNmSThFZS1zNzR1bnBSMzXSAaIBQVVfeXFMTno4dzNfdV83TmhjTTdHMndWVU9xUElWWS1jMVdNcUtzMC1NSnlzWEx0aVRoR2xDZXlXMFVuaFFEWWV6VHVrc1JNaEtHZVg5M0FJaE5weE1xQ0JCVHhscW5QRXNhVUM5R3l5TlVwUEdHOWR0QlNVb1ZhdXJNNlN5RVpYM185UUtDTGlvdnczYlRrMWMySWpTbEtqM3lFOG1rdkdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 兵庫県香美町 小代区秋岡の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONVdsbng4a2w4QTlPcmw3QnVRTjZjNkdDVzV6aFdwOWtJRXRXcFUtZDBFZVBfdjBWekgzUVAtUGtoSWZkM0J2M2MtSWtlWlhNZUtkT005LW1XYkIwMFJBOFNTWXd3eENibE1lYkdSZ0RpX0thZU5mOFRRNzlfTGllSkQyQ05yNnJFT0ZsUU5QNTNXNDNPMHYxdE9WLXnSAaIBQVVfeXFMT3NwU1ozSGpSaW5Qc1dRbHEybTI2QW5qN3RQWmhrT0FfRnE3NFZ1QzlTWmtvbThPUjhPQ0Z6OV9WSmFuOGo4NG5RN0JhTzJ0elN6UXJiR1NudXU5RTNHWUxsQWI1b0RWTkdNaVNtSk12dDVWRktRQmtVUFNpdmhEa0x0SVB5dzc5d2xaeUJjYmNDYjFKdlc4Rml4VXRlTXBFS3ZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 奈良県曽爾村 小長尾の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 奈良県十津川村 平谷の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 奈良県川上村 白川渡の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 和歌山県九度山町 上古沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNbnVTOFRNV1RrTDdweEJsN2tPOVI5MFhnYmlrcFE1aDZ0b3VxUXhMYTh4QU5PdnBpNE9wWjFiamFfVU0yb3RiSzNqZFo2WkhMbWdWRDBKUFJ1YUxZVThTMGo5S250ZWl2V1JfMmE1UXNNS1BXbjgyeDJEMTZRUTlseFZrOENQcUNBaVFDQnhnNXJoQmZ1UHpRbTRlY2c0UThaalHSAaIBQVVfeXFMTW51UzhUTVdUa0w3cHhCbDdrTzlSOTBYZ2Jpa3BRNWg2dG91cVF4TGE4eEFOT3ZwaTRPcFoxYmphX1VNMm90YkszamRaNlpITG1nVkQwSlBSdWFMWVU4UzBqOUtudGVpdldSXzJhNVFzTUtQV244MngyRDE2UVE5bHhWazhDUHFDQWlRQ0J4ZzVyaEJmdVB6UW00ZWNnNFE4WmpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 和歌山県九度山町 椎出の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOX3g1M1RPZzEyYUNKUzdsWmVTRmJhUkdkb2doeHZBdC1OSjdvNlZGRS1zTHo3M1c3a09PNTJENDc0aUlkMVNkYU5Fd2VFcVJaVDNwX2J4THFPWUhhWGxsVjdVRFEwelBzb0ZFT0x3cDkwblVNb09KWVhCYWMydmYzR0k4a21UYjdoUlY4VkliMkVsRTU5dHhNdDJNNzXSAaIBQVVfeXFMT1BfU0tRdUZkLThUazZoS0daRkhXVUtuZjBXdzZqWVFWazd2cWNrdHdBWEU5MHFpVXlvZExBcXY5NWo0NGpwWUhwZzFaRnRZeThHS3hLN0FuUlBhZEc0aWxhd0loV2dvMnVqOEVQcjdIRDVHWm54LWJXRG9FUFVDa0ZkZ2FVcG1lWGwyWGRWTjZ6d2xONlpadEY2Nk9fdG5hZGtn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 和歌山県田辺市 龍神村小家の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPd1JkbDg5dHNkdTFIOERTV3E3dFNXY2UwZkVrUkxYc0xHdTAwUVFuSWZSYzFiRFAwNkFMWlZRMWF2UFRSTmxDLWdoa3RoWWhFZm92VDAwb0lXek54VzFPbkQ2YUprMkRtUXlkV0tqdDNNTkdRcWFoYmJXUmluRnBFZEFSUGs3Z2VoT00za3h0a3M2ZnV4THlWc2doX0rSAaIBQVVfeXFMUGpqOElrRTdCYVQzQjhaVHhMcDk0WmxZUzVuSzNxSGpfNXgtckpwQUVBbnJIekdyR1BoOXEwREo3a3Rzd0JCQ1NoRVNxVnQtMTdCN29qTlp2UXB6bUVXdVRSREV5LVpsZVBmbHpWZ2JjcWd5SE5mZnMyZnNlbU1UOFZleHU3VHZRRTB0bDhrRW9PM2tqZVBIZzRMZlhLNmJrN0VR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 和歌山県紀の川市 下鞆渕の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOckNIaGd6TXk0Mkk2TkF3S2t5bnB1LThmRkdUY1RlOTdoR3NzVlpPdDBfaXpTWGJiM2NWZE1EV1Y2WnNrVFRfOFlDZzUzaTFfSnRERmdHaDFVVTNON0VGT3JuRHBvQ0ZZYVYtUXFpSnZsamNfd3E4MDhSbXJrS1FxS2VQWHkwWV9xUUdjS29jdUlNV1pfM183RDkzZE90bklqWEHSAaIBQVVfeXFMTnJDSGhnek15NDJJNk5Bd0treW5wdS04ZkZHVGNUZTk3aEdzc1ZaT3QwX2l6U1hiYjNjVmRNRFdWNlpza1RUXzhZQ2c1M2kxX0p0REZnR2gxVVUzTjdFRk9ybkRwb0NGWWFWLVFxaUp2bGpjX3dxODA4Um1ya0tRcUtlUFh5MFlfcVFHY0tvY3VJTVdaXzNfN0Q5M2RPdG5JalhB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 滋賀県高島市 拝戸の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOMEhBUElqVXBRRVZqVmNPVmx4a2NfZTk4Q2JlenFBZkJicGtIQ3R6dEdyUzY4VWhXd1cwOEdXUXotZGgyOVBVZFVNVVBjYjFvNGpUVFlPT0lUYmstSk9NYi15VjNDeEl6OVR1b0NRb1VqMW9QbmdLZ1VoeFVWbHNRUkQ0N0RaZ2VXU0pya1NUMktYSW56YU8zV0N3U2x3ZlpKZDJFV1JwTy12aFBiLWZSb2ZEUHJ2em5mbXlkZWFQZzRockNSbmlmTGtONlVKcnRqb0FOcWQ1NDBSVFZjMGVXdmlqR2hTdUh3MXFNaDVVb2tzUdIBogFBVV95cUxNaWhyX1NGUkVPQ05KbS1tdmh5NThSQVNtbVJYQzA3dmlsRFY4RHJiSUVtM1VHQml1S2QyWUc5UDRpWkI1d2lLQTZVTkthMVhpR2x4NnFjUUY5VVduTEVzbUp5N2UwcVk3bTBuS3ZpcC1jMUdMcEhNQjFEbnpucHhXVFdIVmdrMjJydmJPX0lzRms1X2NPTjg4NkRHSTJaVDZwM2c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 山口県岩国市 美和町秋掛の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQcFRmTFBPSHBBR1I3eElJT0pZODlSZnJ3UmVxUkIzekw3QXZraWlJdDgtbUxkWHNOcm1PVUhiUHZqVEpRVjNsT3RfeUE0SVRBMmNLbEw1M2lEUEVTNXNYZWc2NURsTWZyZUR2c0M3YUg0Vk83N0xxZUFKUXY2YzdvTV9ha01FWHBQNlJmMzUtMEZFMHh3VDM5V05mVzRHTDh6VGfSAaIBQVVfeXFMUHBUZkxQT0hwQUdSN3hJSU9KWTg5UmZyd1JlcVJCM3pMN0F2a2lpSXQ4LW1MZFhzTnJtT1VIYlB2alRKUVYzbE90X3lBNElUQTJjS2xMNTNpRFBFUzVzWGVnNjVEbE1mcmVEdnNDN2FINFZPNzdMcWVBSlF2NmM3b01fYWtNRVhwUDZSZjM1LTBGRTB4d1QzOVdOZlc0R0w4elRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 山口県岩国市 美川町四馬神の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQc0Y2M1Myc1pVVTJpaEhibGY4N1FVLTNzaHExYnQ1V1h6WUJMUVgzV1YySnljUlJDUUllUG1EVXhqZHRGWlBvWmFBSVgzNlpwd0duTGNOVzJNbUlXbnJIczdsT0tkZXNYaFdqUFpieHBuSzZNbGMzWkpDT3o1STVkVnlUdF9RQ1VhRjJwN2lLcHRIZklrRkdDYlpHRG1hZHEyUmfSAaIBQVVfeXFMUHNGNjNTMnNaVVUyaWhIYmxmODdRVS0zc2hxMWJ0NVdYellCTFFYM1dWMkp5Y1JSQ1FJZVBtRFV4amR0RlpQb1phQUlYMzZacHdHbkxjTlcyTW1JV25ySHM3bE9LZGVzWGhXalBaYnhwbks2TWxjM1pKQ096NUk1ZFZ5VHRfUUNVYUYycDdpS3B0SGZJa0ZHQ2JaR0RtYWRxMlJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 山口県萩市 江崎江津の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOVdyQjVJajRyWWpuWXNmazFGQjdoVl96dUx1Z1p4RHVJRmFLRDlpRlBWYVE0YkFWeDFDLVdPTVM1RElwUHdBcjJrRVpicE9ocFJhOTJZNnl5c3BWS1V3dzRLYmtncnVDbkFCS2phbVNnb2JqbER6NWdtWWlDVVZ0Z1RfNTRXY1VvRXd2OGl1cWMtUFR1Zk1ScjhObUrSAaIBQVVfeXFMTnFYbTNTcUNxcHIzNXhNT2dFVDdDaXpMTjNsOU8yWGxXMl9Ib0FIekl1Q0VocTNuR1owQ0NxZ2phZngtQkpvZzNMN3gtSE5QdnZxZU40aDFCeW5vSk85S3VMMDZZWWlycTVnS29SQzZIUFY0ZUJERy15NjRmT0hTZ0JpMFhMRGVGZjJWekVTT2RBLXBHdTBZZ0NibGs4Z2ExX2p3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 山口県岩国市 美和町生見金山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeWtPaGkzMkZkekpsazM4dEZBT3hXTEtDdkMzR2l6TnFIMU9vQmxVSGpQTjlGQzJpaFZaa0NXVFY3R2RCVnhQbW9uTFBFOGRmMjMxNnl4alNrcXgzWjZXUzdwcW94clVLUE1JN3QzVVQ5NktPSWZhdzY3VUhpalNQbnVwd2RQNTdBd3I0eE9LZ3dGejZSc2VEa2FVemLSAaIBQVVfeXFMTnJqSTczT1J2VVcwTXhLTjlOOTJ4UTk2ZWlTUHlsRHdpM1BheGNtbkZXU053ZXBCWDktdGtaLV9xazFOWjRYbG5jSk5lMERUa3owMWVuZkwzSlV1MEI4VHBSa09EalRmY3M1bGJYNFpxTnptT2FhNlZxa3JHMjBwX05NOE95WmZkU0UzbXZnYUZ5bUZ4ckJFZ0RsNU82LXBrand3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 島根県益田市 遠田町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMEtfREFrejVSbTBQRnpickFUMjRFa2M5ZHNVRHRXcGFXSVl4ZEcya0pxY0tLQng1M3NscDlCbWF3SUlXUWlpd1FqYlZJOXd6b29EY1dLTE41MV9TcTdjYnJxeXdZZmRIZzJkeVVCTUdVcVdNd1JrdlVQcnJBUl9wT2RQTVpBQkQ2ZENWZ2c1d2lQaGRZUEZ0QzlHR3XSAaIBQVVfeXFMUEZibThaa0VTcGcyemhJbERjUHIyVjNZMENXMTFsRWE3UDNZa3MwZmVsQzdabEFLWm16Y3UydFU0WXZqVkZIU014anNXcGhPRTEzOUkyZWpHdE5pX3FsOC1ra3VDU1ZGc05HN01mZWlqN2VFTWRIaGFhRkFhT1BiWDZERzBKTlpfblM5SHNOVTk3cWNRYWo4eWhEUnNhNE95Ylp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 島根県益田市 益田市遠田町、市道の交差点付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 島根県益田市 益田市市原町、県道14号（益田阿武線）の交差点付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 島根県出雲市 自治会館近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1zcjhBTXhaeFBreUZ3c3Y4bEtPb3o2RkhRMWJocHRFVklBVGQxb3FBc0NHRTJrTHBLV0dWV2pJSTFPakNqZzljRzA3SUFqVVpZZV9uRkM0aE1Bcjh2M3dMQXdTcTViUW12SDBwcTEtSE5UWXlWV29XUDR6bUNZWDg?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 鳥取県鳥取市 国府町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE53a2YxYTBTYl92RnhZbDl2SDk4NTdBU1YtOEswTDZrQTJDSFpVamMzckYtdmxGb1o4VEdPRHdxR2VOUlUxZk1iWUxkeHZ6R25P?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 鳥取県鳥取市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE00eFFPUTVCZEttd1pjTUtiWWNoZ01xVzJRMUZ3bHc4Vm52SHB6N2JURDlZVFVaYXhvb1dYQkdfWkJRbzI0LXc5djRTZlRBZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月8日 鳥取県鳥取市 福部町湯山の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 鳥取県東伯郡三朝町 大瀬の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月8日 岡山県美作市 右手の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdDd0WFlqSXByUmFyT0NHNHg4N2pzbnJ1QjNpN2NiZXVJS09xdjdmb25ReXV0alNiRnVRQmJOWHN0c2pQT1Flb21hX0EtenNQX0kwR0VZckZjam41bEUtYVc2MkdQS08zMHJCZnNEQnNKcUJxVGtBdGxOaHk2RG9YeHFqakR4OVZod2U1cDVTckZGOFNybERhQ0gzQ0nSAaIBQVVfeXFMUFJhWDNtdUtlakFlUmJma2h4dW1IX1lLLXMyeWZfT1hkdU9oRnljTVBjZERrNkpIRFFuUVRweUdmU1Y0Yno5RERCWWZLcEhULVV2eWdNdHVhcW5PdmVoX0RlY0dIZUxJS3VEaFJzekFXSkRqRUlUUlFaMnJoTmVjMXVnT283cGtnbkF0eHFTSEs1YUVpREtHdm1qUVlJMTRSX19R?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":16},{"pref":"山口県","count":11},{"pref":"宮城県","count":8},{"pref":"京都府","count":8},{"pref":"福井県","count":6},{"pref":"兵庫県","count":6},{"pref":"新潟県","count":5},{"pref":"栃木県","count":5},{"pref":"青森県","count":5},{"pref":"島根県","count":4},{"pref":"鳥取県","count":4},{"pref":"奈良県","count":4},{"pref":"和歌山県","count":4},{"pref":"三重県","count":3},{"pref":"神奈川県","count":3},{"pref":"長野県","count":3},{"pref":"岐阜県","count":2},{"pref":"秋田県","count":2},{"pref":"富山県","count":1},{"pref":"静岡県","count":1},{"pref":"岡山県","count":1},{"pref":"埼玉県","count":1},{"pref":"滋賀県","count":1}];

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
        <span>対象期間: 2026年10月8日</span>
        <span>·</span>
        <span>公開: 2026-10-09</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={104}
        periodLabel={"2026年10月8日"}
      />

      <h2>全体動向と主要事案</h2>
      <p>2026年10月8日に集計された全国のクマ出没・痕跡件数は、重複を束ねた後で計104件に達した。都道府県別の上位は、北海道が16件と最も多く、次いで山口県が11件、宮城県と京都府が各8件、福井県と兵庫県が各6件、新潟県、栃木県、青森県が各5件、島根県が4件となっている。</p>
      <p>当日は人的被害こそ記録されていないものの、人々の社会活動に直結する深刻な事案が複数確認された。奈良県曽爾村では、6日と8日に目撃情報が相次いだことを受け、小中学校が臨時休校の措置をとる事態となった（※1）。また、山口県岩国市錦町府谷では有害鳥獣捕獲許可による捕獲が実施されている（※2）。さらに宮城県気仙沼市では中心部周辺においてクマの目撃が相次いでおり（※3）、市内の南が丘1丁目（※4）、笹が陣（※5）、芳ノ口（※6）など生活圏での出没が連続して記録されている。</p>
      <h2>地域別の出没状況</h2>
      <h3>北海道</h3>
      <p>北海道では当日の全国最多となる16件の事案が計上されている。様似町では様似中学校の近くでヒグマが目撃されたと報じられた（※7）。また、石狩市浜益送毛（※8）や根室市初田牛（※9）で出没が確認されたほか、富良野市東山（※10）や北見市緑ケ丘4丁目（※11）では出没痕跡が記録されており、道内各地で人の生活圏や活動領域への接近がみられる。</p>
      <h3>東北地方</h3>
      <p>東北地方では宮城県（8件）と青森県（5件）を中心に記録が集中している。宮城県では前述の気仙沼市中心部周辺（※3・4・5・6）に加え、富谷市富谷落合でも出没が確認された（※12）。青森県では三沢市三沢（※13）、八戸市西白山台2丁目での出没の可能性（※14）や同市西白山台19での16時30分の目撃（※15）、むつ市桜木町35での13時50分の目撃（※16）が記録された。十和田市奥瀬では15時17分に御鼻部山から子ノ口方面へ車で進行中の運転手により道路左側で何かを探すクマが目撃され、林内へ立ち去る姿が確認されている（※17）。秋田県においても大仙市長野長野山（※18）および小坂町十和田湖（※19）で出没が記録されている。</p>
      <h3>関東地方</h3>
      <p>関東地方では栃木県で5件が記録されたほか、神奈川県や埼玉県でも出没・痕跡が確認されている。栃木県佐野市では作原町（※20）や下彦間町（※21）で出没があり、路上で子クマ2頭が目撃されたと報じられている（※22）。また、鹿沼市口粟野での出没（※23）や同市内での関連情報が寄せられている（※24）。神奈川県では相模原市緑区牧野の人里で午前中に痕跡が確認されたほか（※25）、伊勢原市上粕屋での出没（※26）、山北町で体長約1メートルのクマが目撃された事例が報じられた（※27）。埼玉県秩父市荒川上田野でも出没が確認されている（※28）。</p>
      <h3>中部地方</h3>
      <p>中部地方では日本海側から内陸部にかけて幅広く記録されている。福井県では6件中、小浜市下中井で15時30分に成獣1頭と幼獣2頭の計3頭が目撃された（※29）。同市門前（※30）や口田縄（※31）、南越前町奥野々（※32）、若狭町新道（※33）でも相次いで出没している。新潟県では5件が計上され、魚沼市の公園でクマ1頭が目撃された事案（※34）や月岡公園での目撃情報（※35）、胎内市での国道横断（※36）が報じられた。胎内市須巻では走行中の車両から1頭が目撃され（※37）、長岡市中潟町では道路沿いでフンと足跡が確認されている（※38）。</p>
      <p>このほか、長野県では南木曽町田立大野正兼（※39）、立科町牛鹿（※40）、飯田市千代（※41）で出没があり、富山県富山市八尾町保内（※42）や静岡県富士宮市粟倉（※43）で出没の可能性が報じられた。岐阜県恵那市では登山道での15時から16時にかけての事案（※44）や明智町での1時から2時の事案（※45）が記録されている。三重県では大台町岩井（※46）、大台町桧原（※47）、紀北町河内（※48）のいずれも集落際での目視等が報告されている。</p>
      <h3>関西地方</h3>
      <p>関西地方では京都府（8件）および兵庫県（6件）を中心に活発な動きが確認された。京都府では京都市深泥池近くでクマらしき動物が目撃されたと報じられたほか（※49）、京丹後市峰山町二箇（※50）、峰山町鱒留（※51）、福知山市猪野々（※52）、与謝野町金屋（※53）で出没や痕跡が記録された。兵庫県では豊岡市日高町山宮（※54）、丹波市青垣町市原（※55）、新温泉町桐岡（※56）、香美町香住区油良（※57）で出没があり、香美町小代区秋岡では痕跡が確認されている（※58）。</p>
      <p>奈良県では前述の休校に至った曽爾村（※1）の小長尾で早朝5時56分に記録があり（※59）、十津川村平谷で夜間21時58分（※60）、川上村白川渡で朝7時20分（※61）に確認された。和歌山県では九度山町上古沢で痕跡（※62）、椎出で出没（※63）が報じられたほか、田辺市龍神村小家（※64）での出没、紀の川市下鞆渕での出没の可能性（※65）がある。滋賀県高島市拝戸でも出没が確認されている（※66）。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県（11件）と島根県（4件）で目立つ動向があった。山口県では岩国市錦町府谷での捕獲（※2）のほか、美和町秋掛（※67）、美川町四馬神（※68）、萩市江崎江津（※69）での出没、美和町生見金山での痕跡（※70）が記録された。島根県益田市遠田町では出没情報（※71）に加え、市道神出線と市道下遠田黒石線の交差点付近で12時40分ごろに3頭が目撃され（※72）、同市市原町の県道14号と市道市原西線の交差点付近でも17時45分ごろに1頭が目撃された（※73）。また出雲市では自治会館近くでの目撃が報じられている（※74）。</p>
      <p>鳥取県では鳥取市国府町での痕跡が報じられ（※75）、市内でのツキノワグマ出没痕跡（※76）のほか、福部町湯山で黒っぽい色の動物（※77）、東伯郡三朝町大瀬で何かを食べている動物（※78）が目撃された。岡山県美作市右手でも出没が確認されている（※79）。なお、四国地方および九州地方における当日の記録はない。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">代表的な記録地点</th>
              <th className="px-3 py-2">主な出没形態・特徴</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">16件</td><td className="px-3 py-2 text-xs">根室市、富良野市、様似町</td><td className="px-3 py-2 text-xs">学校近隣での目撃報道（※7）、痕跡確認（※10・11）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">岩国市、萩市</td><td className="px-3 py-2 text-xs">有害鳥獣捕獲の実施（※2）、集落周辺での出没・痕跡（※67・70）</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">気仙沼市、富谷市</td><td className="px-3 py-2 text-xs">市街地中心部周辺での連続出没（※3・4・5・6）</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">8件</td><td className="px-3 py-2 text-xs">京丹後市、京都市、福知山市</td><td className="px-3 py-2 text-xs">池周辺での目撃報道（※49）、北部地域での出没・痕跡（※50・52）</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">小浜市、南越前町、若狭町</td><td className="px-3 py-2 text-xs">成獣1頭・幼獣2頭の複数目撃（※29）、集落付近出没（※30）</td></tr>
            <tr><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">豊岡市、丹波市、香美町</td><td className="px-3 py-2 text-xs">但馬・丹波地域での出没および痕跡確認（※54・55・58）</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">魚沼市、胎内市、長岡市</td><td className="px-3 py-2 text-xs">公園での目撃（※34・35）、国道横断（※36）、道路沿い足跡（※38）</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">益田市、出雲市</td><td className="px-3 py-2 text-xs">交差点付近での3頭目撃（※72）、自治会館近隣（※74）</td></tr>
            <tr><td className="px-3 py-2 text-xs">奈良県</td><td className="px-3 py-2 text-xs">3件以上</td><td className="px-3 py-2 text-xs">曽爾村、十津川村、川上村</td><td className="px-3 py-2 text-xs">小中学校の臨時休校（※1）、時間帯別目撃（※59・60・61）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>10月上旬という季節要因を考慮すると、秋季の活動期に伴う移動範囲の拡大が顕著に現れている。記録からは道路沿いや車道横断中の目撃が新潟県胎内市（※36・37）、青森県十和田市（※17）、栃木県佐野市（※22）、島根県益田市（※72・73）などで確認されており、交通インフラと個体行動圏の重複が日常的に発生している。</p>
      <p>餌資源の探索行動を示唆する事例として、鳥取県三朝町で動物が何かを摂食している姿が目撃された記録（※78）や、青森県十和田市で道路脇の何かを探す様子の目撃（※17）が挙げられる。これらは採食行動に伴い警戒心が低下した個体が人目に触れやすくなっている状況を示している。</p>
      <p>人口圏への接近度に関しては極めて高いリスクが示されている。奈良県曽爾村での教育機関の休校措置（※1）や北海道様似町の中学校近隣での目撃（※7）、島根県出雲市の自治会館近く（※74）、三重県大台町や紀北町における集落際での目視（※46・47・48）、宮城県気仙沼市中心部での連続出没（※3）など、生活空間の深部にまで入り込む事案が目立つ。また福井県小浜市（※29）や島根県益田市（※72）、栃木県佐野市（※22）のように母子とみられる複数頭での行動も確認されており、市街地や通学路、集落周辺での遭遇事故に対する厳重な警戒が求められる。</p>

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
          <dd>2026年10月8日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-09</dd>
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
