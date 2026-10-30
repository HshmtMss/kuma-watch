// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月30日 / mode: daily-report / 生成日: 2026-10-31
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-30-daily-report";
const TITLE = "2026年10月30日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月30日に記録された国内のクマ出没・痕跡確認事案は計40件であった。秋田県、福井県、京都府をはじめとする本州各地域および北海道において、公園や集落近接地域など生活圏に隣接する場所での出没や食痕・フンなどの痕跡が確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-31",
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
  datePublished: "2026-10-31",
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
      "title": "2026年10月30日 秋田県北秋田市 翠雲公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBfQVRyYzJPakdjTmhKUHpkVnowZTh0Vm1TalkzNGtqOXRvWUlrOUdqN1JWa0p6eXFMSkoxVVNQaU1ydmlURTM3OFEwZHBVdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 神奈川県伊勢原市 塔の山緑地公園の出没情報",
      "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQbElaV0VDQnhUcjkwS2NiR1I2NFk4ZHFNcm1RS2xDUXZXNnhlSFRObm10cENIZEJZSVZUZlpUdUl2bkpBRWxoVDFuVGVIOVpxTnItSGwxdGxsczN3aTFsVkxWY25XYVhUNUlDZ1FJcDNGc1NMejh3bEVLOTNrdlZmdjlxUnQ2U3RwUkd3eG9ocXBnaG_SAZgBQVVfeXFMTlQyRFo1RlBUeGx2eTlOTkZKTjRpYnVIZU4ydHlabFJhR2toTEhGQmpPYU16bjA1SVk5emhhc2l3b3A2M2ozT3NvcFRPMFZ4Y3hxVVFGRGNjOTVjbzVERmRQUHpkM1hINVpvUUVRMk94VEdLclhPem5rWFJrNkY5Uzk3SU1VZ05nbkw4Sk1fWmNMUG9FNnlHWjk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 福島県只見町 三石神社の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5XUEt1OXkzREFKV0RaT0pQVXRGTHBzLWdmM25tQkRlNzNSRVRnU0VjNlBqQ2tYYjZNVEVtTkdkZ2szWVktQWRmOWFCZ3Z2Nk9GN2RwR2gtUlY5NHhJSk93SnlhcG1XSTViM2xOSjd3a1Y5T3hPenZuZzRhblhRLTA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 埼玉県秩父市 秩父市荒川日野地内（芦川区農村センターより東に約１００ｍ付近）の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月30日 北海道幌延町 元町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQV01TX3NoU3M4MnNWRlFJS0ZXdXhDVWhhQi1Ec2tnSGdDUGY0cjVMX1prc0RXMzk2cVJrd0dLbVl0SE1na2l3bXo0ckxWbWhsYmhSa2ZzVkxpbW4xRVNXdV9MNkhvT3JnV2VVQkEtUEFnYUhqMEpxSTl3cjUwcWZtbHNpcUljU0UyN0xpTzBReFNLblJEVlVWNWJ5ODFpRnNLeTlYcFFrSG9WckJFdlYw0gGiAUFVX3lxTE5pVDlXblFCUV9FalUwNE1iM1VNdXRjdm9CcGZKSTYzZ2psQ0JJOHJaWVB1TVZKQ3B4akdHejYxQ2ZuVU1zaHVzQ29PRENrXzJ4UW5sMEI0TkhmbmlnODlBMFZXR2JBaXVXb2tVd1NtYXhkMjJoU0VGdW5zdDl1dkdJS0dteWlZdFpGc2RWcndMbS1mdG9LeUFJRng0Yzl1MURmUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 北海道黒松内町 熱郛の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeGRzeUNsZ3dmdHltTzFyNkROaXFhbjdYWUZianRLbWNGRnhmUmJnZUxhQkMtYkdCazR0Nm85RzF2cmU4aVVEWnNDTFBxVnNZMW5yVlpfNVpCOVpWU2lfSnRFVkM0YlNBUEdCNk85c1dqWHdCenphMHE4YVVaWlpLV0p5ejRabmtyWGVaeEw3TnUtQmxjS2RRdTEzMWrSAaIBQVVfeXFMTVN3d0RIUVh4TzJvOHZkUjRBRlVFdl9IT3JmU096MWZSbmc5X3Q3OGpVX3FXaVh4QkhiUjBIWHNmeGJVMFNQdmRQNk1FRWluOEFkaTdvazdYNWd5ZnU2aFhfVW4yM3d0Y3RkcEFkbUlUMUtzRlZXam13YzMzNVJqVFlXamVZTmRhVTVPQ3Q1VHpYdE9rU0dvdG15NFFuZk5hMkd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 秋田県北秋田市 三木田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeUlpVFFwR0I4Mnpyb0c0ZkdZRHpSTUUyb0tfaWFrMmdqc0hqZVpxMzFJR2xjcUNlUFlhRm4tT3lhQUhiSE0yX0x3S2FkQkxRakRIQ3h4YncyNTNUUUUwN0hWdHowYTR0Zm9SQmZjRXBVOWtsWWZzSXFFbnJ5azl6dEJ5d2dmSHBxNS03ZHNqN0ZVaklfT1luMGNnY0TSAaIBQVVfeXFMUHB6V3JXZ1NJRGNlSzFLOVduUGtjQ2ZNUlNaQ3Jnc3VaQ3JITnZPdVdPOUdZUE5SeldqSTJJOEtZOU5Eb1lLbDRpNkZiandnNVFnNW9pc0lOX2NqNlJTdmVCSDFudVBtc05EQ3psSnd5ZmVERWZCOWgweldRWDJDbzJseWk4WHhIa19COTBYVnJoTU9tbHRQT19fZDBoQzZSN3Rn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 秋田県潟上市 天王北野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOEJsM3kycVBINVBtSTNlSWZ5Y3RPTzJGY2dHSzVWeTlkNkJ6dDNGMHBLaGVMcGg0R1lnMGhrZWdKZGVCeXNYWGZoYTVhNnFTdk1pVGxseDFmb0Vwa0pLeWMxdm12M2t5dmxhTVlCM2Y0TmtqVExQejhTZkVIOHNTV0UtM1RQT2tid3hHT2MyOF82S25UOTUwT0NqNnDSAaIBQVVfeXFMTVFVdXVNY0U4aEYyaF90UnlwdHliQ1dCRUNHN29OVmZzbkRaa3hFUl9Nbzl2bk1PRnJkQWo3S1pYbUVwbHJ1YUlzRGtONWpPUmZQTlgyVWJYY2F4VG9GQ2JUQy1UdDFNbnhVLVZoeGZHNkxBajQxQU1rZnM3bWRMVFJzN2hObkxWb3A3WW1pem1NRTNJU0JPYU5vTkRPbFdOaWRB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 秋田県潟上市 天王の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5jUnJGT2xTdEI3TXNuUVdOWXhIMHZ2cEFHNjVUSVRuZmNEZ2FQdDNlb0xES3FkSWYyNFJIUndzUTlGaEo1RUFGQWRKZFZpb3lZT1dRMHlteUVEcVJuUGVtSnhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 秋田県潟上市 雑木林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE80bjJPdUVnV3FZMkJZY09nQ2Y4TElfZ1VkX1VBdHVyTWJzRERuVzRDVlNOcGZzaDgxNk1TRnNPWnZEckd2SFFzWElwSmlVckhpb040bld4N0NOY0FRand1NGhaeGMyQzAxMWhpTlVCZlc0MUxXZkxTX1I5LTc3c1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 岩手県花巻市 諏訪の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcmxiUGdnYWc3ajFyYlNfLWhBR1p6ZjZ6eUdDUUlyVF9WVWJERjhFUnE0Q2dPdkM2eHQzSXc5NEh3Q09vZ1QtOEN3WjV5S1lJM3REeTdaSlA5MXhkUUlIc25EM2xtZ0dyaFR0S295WF9GS1J1eTZvWWZOMUxtOGZBaU02UGVMd0YxbjFtMmN6MmEyOWg3M0NtbHdRWFfSAaIBQVVfeXFMTUQzVWJhVF82TDV4UFVfbW55b2U0eVdsR3JFMTJHSDE5V3lzYzZJbUZ2dkxDYmhmaW5rRnVPbXVvX0N6WnM4VEZzR3ZzWkdMcnlzTDZPdEdWUFFrVHJud3laMGMxdnl4eUhiVlVxWFBEQTJsWmwweUVPNDJiVXNYZkticUhncG1EcTBJUlR6bVA4Q0kzajh1RHQ3ZlJFY1Y4M0FB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 岩手県釜石市 甲子町第２地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOZHpDck1QaU0xc0kzS3pGR0FXcnhudllpemdUdFJScWVXRFZzVnJWWmx0U0JIdzJNMmxGVUtFNDhnUDg3bkU1Xy1MNnZLOUZ4Z0g0Z3RVSXpwSm9JWVFqUENsUzdqQlh5aGptaVlidWVhckxLV1ZKZ0x4Y1RYTjRvN3F4RkNHZmttRHByVy1EZXphbm1wOUtuQ3Q1RTRSaFZHcmNfQmhkdDUxNS1DbFBCc1NqdE1mQW5UMjRsRDFtQkMzY054ZldDcWVneGxTc1h5c2trWVJ4ZGhUZEt4bU5GZXFPMVNuUVExSFdaOVEzUS1mUdIBogFBVV95cUxQeHROTUxxdkNVRlpOa1hfdTFKcG04TWVhcGY2UHNpSEQxZlFRQmgxbFNYMWtMZFpBa0JSSzR1YW9wNEtHNUVSV1UxWkFFNUdzYU9hRlJrUmF6TmdIbHBVUWFqYkNyV0dlSlFWZVFCMkM0aHFpVnpGN0kxWlE5UEIyQnk3dXdNRWEwUW1rR3dRYmtvUkdMdkYwYjhGTV9sTG9kM0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 福島県只見町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5vdXlZeU1vanhFOUpHRzJsV011aTBvVUpFdmZvdW5RMllPTENkZDZOS21vNXE2THBPM1JaYVQxRWZCczZZVkFJTm9WRlEybWFoZVlyWHhNX3ZNbWQ3WEJ1NWVnckFoQnZ1cDFDd0VRNFFFalctMzVUdl9iaTRWWk0?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 宮城県利府町 沢乙北橋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZW1YOHRJM3NMekRUWFJTYVYwMlJHaW05SkYyZUxiTzFNVkI4VXMzNFg3cW9Idlp0aHpSZjJ1U09lN1NPdVc3dW54emN4b3ZEcmVEa3MtYUVzNjJ0SjdJZ3VwQzNfNWJUekUzTkVvVEk2T1VodjFkZk1ubm1aWnhabzhtbGt1Ym8xMXBkdjVnVS03ZlFJeEpBWEFHT2zSAaIBQVVfeXFMUEtjeXdtM0x0UkNLSjlXazdDMTlnNkVfYlN2LWV5QW1CMVc5QVBveTlCWGd4UzBYVDFranpZSnNzV2FRS1hCSUQ1dDM1SkhTSkJ1b1NGMG0zNENmTW4teVdmdkx0U2o5LXk2Q203UUkzU2xtaVNjOXZ2Mjl4NGRPVkR6anJWUlpYc0x3c3h6cnJHTEloVzZvNV9NMmxxSE5ub2JB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 神奈川県秦野市 曽屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSXZsUE5ITld2RXpMVGNsSXBacTZoT2pJU3J5RlNyMUdsSzA4eUgxX0tnNVMxQmpJLXFOOXVUREo2TUhXbUIyOTVkOGxHWi1HNkdpcWJYQkpJOFNKa0NEci1CV1F6Ym9oZXdJNjZqWnZqcGNxWjNONER0RzE3eVkzLTNZVjFiRmRNSG5WSkZXREZjT0pIZG5nX294Sm_SAaIBQVVfeXFMT2x5V3Y0WmpCUGZKZUk4V2kwS1hlR1dhSUM5N01oUFdsNGlId0pXMl82NlpVN2dKOE03SjlhaGxRa0dDWE5vTS1mdWsyU0xOTjdOLW1jZ3J0VGpZS1pJRzN5UEh3OE1nRDVxelNNb1JmbC1wVEJGLVB6SFhBNDVMVDRLU2NETVR0bVI0aUZ5dUtPWjk0Q1VZOEFnOUI2S1RxZDJB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 埼玉県秩父市 荒川日野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxObkxKaFNqTWE1WTMtMUg0eHhnc2lodk5ROVgxSmJZTTJKSk9LaTJidVdxVGdsTHROZTJDVTg4VjVsWlVzVE9CY0ZDNlRUS3hwYUxnR19YNVFyOUJhZXA0S0tPRVoxTkZwYlZVZFdCUGlXbVNWVTFYQnlpWWdmQW1GYVo2Vk4zSmNuSHRzZTM4cjhFUmJaREl1VjJWOFXSAaIBQVVfeXFMTUp4S1RkSnZjSXJfZzgtZzFrNUlzWlFZekNXTldJa2FLeGplc2tfOUZJa2dJN2RuV3I4YjJEWGd6OFVQVjhuVTI2U1hIcEtZV3VnN1lxdWlSMHYwdHNWd3M4bHMwWDdacnFSb0Q5ZndoM0w4cVhaSkVHVWpsTDV3QTBYMGNSV3BVLXplUllZT3l3OHZhdnFuSG9hdW1MQ1pZYTJ3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 群馬県南牧村 群馬県甘楽郡南牧村星尾の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月30日 東京都日の出町 大久野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNZzVEYWJRT3RValltUkxfbWVWdUhGQW1tYXhLcnJBNC04RlBueVZkQXNxeUhnY0ZGVHc2QVJwQ0JaQnJtel9BS3ZkdUxoSnJsMkplYzBvdG9sRlZXUTNEc3kyWThjM3ItQUZiTFVBMFZkbFZmb1ZlS3ZrM1ZRTC1FLUFKUGtDSlZXTElBTlZreHpxT1Nkc0JxRGZfUjg1QzlTaW5iaFZNbUUzRHRscnRGVUtSMHVnQjBOTUhWbmsxVVpackhPa3lRX1h0VzNhQ3ZhUXl2aVZqQVNDTWM3RlBtX1VjZGtaTUNLcXFFeFFpcW5MZ9IBogFBVV95cUxQR3J5VnAzMG1lSzljTUxaQlBaaE1WMlQwZWVaWmVZMUxoYl9MN2w0UGJmNEkzX0pqNmZEM0I4VkZMWGgyanhVazZLaEFBSzl3RzRNWEJFcjBVMWtCSVNXRVppVlRhRVVSMHh3cGZyZEFLVkdHS240Z0ZoSlJvQWtHbm5nZmc4Y2c2WWp6SFBWODNsVTYzbWc5TEFlcnhWd19Da1E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 東京都奥多摩町 川井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQRm5WSVlSd0lSNlE0MVZRaFAwaW81aUdqQkxJRjlTaTdmRkJRdDhKNHZFeXFMVmNBbkhoTm9sV2JITFJtdUNBaWVRaVhfTVBZYXJ6RnZka0I1MG9RMVBwVHNHZ0hNLTNXTk1NODVVT3F0OGw1Zy16SXVzbFBSRVJZbnl0c0R5REV0dkNvYmt2aWxlMXE4SzF6WjRSSDE5eVFxak1nVk5qTndBSG1hSWZpMmh3U0VTX3l1QXNfQ1hBaUhJS0JPNmJoS2x6RHdPS0Item9Gc09vYnlKM1JMZzJyRHp1XzNKUmg4cXdBOFZTSmxsQdIBogFBVV95cUxPd2ZzR1JzZS1WaFBPZkhmcjJOOW1HWk1FazVWZlN3bU45eVZNMUJOR3NqRmJVMzM3ZFNyRnA5OHh2aHdNdXFtOElseV9pZ2V0MEt6YUxsMVhQT0dEcEwzcTNQWUYyV25aRlJ3WExYTHBoek1ZOWMwa1k1UUFqMzFxQUpzSnNwY0FROGxVRkplb0duRUhQd1pBdTZDTGNhZjA4Unc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 福井県小浜市 尾崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNalRBRU55eHZpUEwwNzd4S0J2aTd2VEdsY01YR0ZSODFMbUFseDI1NHN4ajF0VHoxZGlEMVZhU2hHNFh1Mmowd2lnQUNXeXNKRmMySjNnOXdQcmtTVEsxZUVKNENmNngzUEp1YWc5TTFQNkhfc0ZRcDNvZVdLZFktU0liV0xlVnBKVXNJWGwyajV1dVFqX3hIRVNQNk_SAaIBQVVfeXFMTWlvT3l5Tm1UbVZSNG01MGxTZ0xDV0ozNTZ6UmptOE1JenlOS0c1T3d2TWk0Q25KQjhWWkZaT1ZlUUJSblFTRGpkajNuSGhFaVdNN2hoaWtkS2cwLUxxVllBX01jeUtZb2ZycHdiekZ0RFlvcDFSZFZjZmVnYjRxQ0YtTnVzYk1lNkp4eWNXQ0s3anRqRmhRS0xBekNCZ2ptMGdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 福井県小浜市 谷田部の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月30日 福井県小浜市 中井の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月30日 福井県小浜市 岡津の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月30日 山梨県鳴沢村 三湖台周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOcGtGUjlNaExMQUh1aDJpaUE3VXVydzNrUi1QV3Y2MUt1eXczcU9iZHFqSXdjdzlTMDdMTmJkRHZRcWpOVi1xU092VG9ZS0R2Vk1xUmFBbW1iUGxTU3FDOGVkT3ZIUWRMNnVkNzhWYzJqU1ppdTI1ZFB6VFhKNUZPZjA3eVpvc1RlbkswNEY2c0Jad1F3OENvWk0wUFJJOWpkLWstS24xdjVwbkNrUXBB0gGiAUFVX3lxTE41NGxEYmlvWXVhNkc1NkFqT2dhcFFNbmJlR1dxbmdCNjlkWS04U1JKLWllTEpZZkpwTnJBY1ltTkhGUGVidnllOXhpN2hWTzJMdmF0a2NPNk1nMUh1T2YtcEhDSlI1ekI0MURZV2ZwWGdjdXJGeDBpZzBhZGJwOUM0MUJVaWRiSWhId2ltOERtUHZ2MzYtODREMmlfc0d1Ri1WQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 山梨県都留市 大野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNUnhZUG5qbi1Telk5N3QzUTliNVNpVjl2cF84N1B1ZjJOSWVlNTlEWnRSOGZDamdoMUdnZVJ6VXU2SHhNUWN4NTN2ZWpVOFJ6V0dQNlBuYkFZQ2x5NHJRZkpmZTlJUE5lMXRmYXNOSmpPYU00MWlacl9MLW83OGFYRzdGQ0diM3lrc2VvY1R3d3hwcElXOXFkWDZ2b0EwaHRMdktsQXBtZ2dtc0I1VmZzZjBmQTB2c2g1SWpTWEpYc0ZPcTBtVDJRcFM1R29aSVJ1Um11a21fVkNLYmVmYkl0c2g2ZGVaU1lyVUFpMEQ1ZjZWd9IBogFBVV95cUxOSU9zRzNOVm1JXzNSS1doXzVJWXN6N2pHQ0lUUXZna1N2TVM3MElGTTczbnRvQVhyRVFqT0hYRGtqMDhDa0hlZ282b0VWeld1eWZlVVduSDhNWkV5YzJfX2pGdnA4V2FXQ3U2S3J2ZmdmbG1qcjIyU1RKVjZGUnpUZ3lncHlTbTVzV21tNG44TnJqTTRTeXhVUjlCUlJmZzNiVXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 山梨県都留市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE54TjdEWkJoWklZcC1EVXpiQVF6dkpEcThPSHN1R0NyUG1Cbkc0aExEWFl4aXpXUTgtYUtGSjlEYWhpYV9RUnFwZFJwTmk1a1FGUWhNUTExbDJEczVqUnZWb2dvMnI?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 愛知県豊田市 御船町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTkZFaml5RkhXcDdFUTBVc0xwWl9TUVd1OURSbXNKbXgxNElKRzNmend1b2ZjRTFuMjZ4WVVRa1N2cXRjR0JMc0RTaVJaaG9tTXFIazlHMkY2UDJxRkpOZFc2NUNHNmNJRXhGWDdLVEtlX3JzZ3AzaGZ1Zmx3SDh2N2xkRmFLTXJoX2xzeXAwWU9VZENYX2NEeGhucXLSAaIBQVVfeXFMTm5YelJXdE9qUVg5bUNJRVJYb0w3UEJjbWhFSVNqRm9qVnpHaVpxOE1aakJUVjVUa1BGdTJQV09TRlBCM2tfcXZUMnd6MTZuZ0FEZlZtRURFUHktQmJCcnNhVUtjVHNEYkhHOGN1b3dtOWVxc19OTjVHbDFJMTZ5amdhbWtVZUMwQ2NrVTVoOTczZk9yR3pQU3Y1blgtWVp2WEdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 愛知県豊田市 御船町山ノ神の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月30日 静岡県富士宮市 大中里の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月30日 長野県泰阜村 門島の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOdzhXVldPTE01TGFqRGNkTW03amRKcUgtVEZvYkxlYkl4WUNMdWlIWllwV2FWVzd5RG4tVXVReHNrVmZOdzFBdGotUDRCeHg5bGFtaU9na3Mwc0RrMVl6SmRhQTZGVUJTaTMybDN4YV8yZ2dFbEVPT0h6MHNGQkFublpZSDBhMWtsRjI4WmFUSjMwdHpJRWRZZzctQlpZSHFrckdvb1pnSkNaVXhCendNMnlmRDRzVTYyUmZuR0hBRG9zbFdRdDZCTjdUQTFUZ2N6Z2RiNl9IX2htamNZYVlZeGpvNC1zMHdpSmVBb0FxUkQ0Z9IBogFBVV95cUxNUThtTENhRkM0Vk1OMWI4Z09sZlV3S0pwTkxnZ2hJWFFoRUZ0NkI2ZS0zX3ZNVEFyeV9XRjV2cHI2amZyVlN2RUt2TXpoenlQclFuREdGeGVFNWRsVWtFUGRvUEFHa014SHhUeTd3SjRmUnNlXy1Ea21ZT0ZBcHh0Mk5pTWZYZnFobGFmeXQ3cG9lcmh4Yy1DNW5sTXVhRjZtYUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 岐阜県関市 板取の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQN0xjYk15T0lWbEp2SEQxLXNMNFNQalg4SnBoeTE5UTRyRGVLMmxXTjYxX2NUbkFOeTBmYy1lalpNU1h0REJkR3VhQ0VXVTVsOVMyVzVGUFY4bnByMmc2MkRXc252MU5KOXk0NVd0ZXdOV3BHWnBiNWpIMUZ6aEQ4cTQ0S3JlNFcyRFIxWTlRMnpqZWtuc2xfRFpSY2Y3ZTNwUXpDeElLNkJ5T0J3N3Z2OWxJWUhrdVRpeUp0R1FvMEV4WVB3eFZub2otaElweDhWWm1KR2IwZGlHS1ZCbWRZdlNCWWxQZ0hOV2Z1bHM0cXhVZ9IBogFBVV95cUxNNU1iY0VwUmM3WDIzNzNBRmFJQ2tuNXBrNlRwNEVWRS1QZWVGdGp2RXBnVVJhOG1JeGpWNTFGN1phcjJ3VmhRdTlnWWpXLVpTTmZJbGFCT3RId29nRW4yc3V0T2FET25tSTRDWGVmZlJMU3B5SmdiMEpRalJTR2o2QlV6UnZwdXFaSlJCdG42d0VHQ212QV9WX2pFeWpDLWVhLXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 新潟県村上市 宿田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQQjdzTG9oV2Z6R0VuZmsxLXdHREpPWUJzSlBQOWZYdXZPRHZlLWlxNTF4ckRvNTBqLU0wRkJ3SV9TdW5td05XZUE0dUh3VU0tUW5SMFJPUENKazF6aXpza0hNeG4yUVZ3N3k5aUd4T3UtcDF1QXNXXy1lVVBLNHhneGduMGFHMGROT21iODVGT2h3N2ZRbHF0RGtXOFFTLUUxTEVJNE0yNUVXRnhUQnRj0gGiAUFVX3lxTFBDS0Nuc2p2U0ZGSS1RamZyNmc4QTlVaGNvODRCc1JXTktqYURkbzRVV3pGSlVhc3puenJ1OFNDQnJNczQ1empDd1hRRE9yVXNjUEZGWkROV0NDN2JYOUctRnE3eDg5U25SeWxLT1p0QlVhUlZYV3Vvd001ZHpfaTg0eGpsaWJpQ0FWNWg1aUZiNnhRNWlFUTNKUHdQUk1YUWdsZw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 京都府南丹市 八木町氷所山野神の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOX2FwSjU5bWRsbUhIa3B4YWdUVWh5Mi1mMDlDb09lZjA3QUF2ckJGMnVMSy0zX0ZUdFREdFh4WVRkZ2gzaDM1QnRCcTRweEVXcWt1cVJIa0trN0k4UUtaTTFnRTlUNFRkYzgyMnF1Si1mV2htaHRacll3WlNCcmQyMXNYUXZCMWhfaFZXTC1mZlRtd1VDbjQ2NG9NN03SAaIBQVVfeXFMTWstdER4azZhTHpyeGFrOEZGcEtoM0dhMzlNQ3Z1UUpyU0QtMjY5SV9WYWhsbWlVTmpIZUZRVTZxdkNnZGhWb1FXcjd6anpSMTNGQ1RmSjFmVmM3bThFN1hscXVWREw0dFlfYzl0UlEyNTF0elRsdnJtSFJzQ2pCbkt1UXo1OUxFWmRmZ0gzcFRxSWVYbm5OVks3UmNPUlFLYzNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 京都府南丹市 美山町南島田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdFYzSkVqcHhIdS1FckNSblFXN25DaVViVGhaS2lMcDNsTVJPeHFuNTlncmFrb0xoVE1tUFdfcU5YVTJET3NQT2NsQVoxek0tQlVxTFktLU9rMlhJUEsyQUtxUE93Uy1YLW5EZWV2b1ZfU1BoMHI4R2RxSTQ5aTdqV3JZSDJ6c2k0bnpnSmxHTkV3SDFnQlJkNHRwX2_SAaIBQVVfeXFMUGVOWXFfb0V6Zm5aNldVenQtaXNBRTh6QncyMW4yTHdNN0dLOVVWTC1vMkp6ajVnblZrXzBxMWtpOE0wdUdQR21HV0FiQ0VSZFpIc3ZKVG1BdUZTeFFLaFdabnI4NDltVDNBUTFkT1BNUkRQVGhFN0JGa3ZDdWkwYWUzYWJZdzIxcm4zLTFNb3BNdG9FWGxmRFhDUjNidHRvTHlB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 京都府京都市 左京区花脊大布施町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNU1dNZXkyZHQ5SHpaTDZoMWx4VWhkNUdKaU12RVVsajN1eDhCdjdxZHprLVc2RXVqT1JKSkFQc0JVenpaY285WFRXRmFaM1NQVmxUbmhLZzBONWtIejdfS1NGcklNR0d1dEpBX2c5a1NrMUUtbzFWcUNMNnpneWkyRjVETFNSTk1xX0U2Yk1scmlwS293TVdoS1REZ2vSAaIBQVVfeXFMTm1BSG90eUdZMGhUaG9PcTQ4ZW1uQlFubHgtOEJBYzljMVVrN1RrWnBSN1VYR2ViQ2R5R09iTGlRMlc2U0JBZm1UVTl4c1BQT25WNDJndEZBS09ORFl6UGFaWEEwM2lVRFRpdTY5dXNqTzE0T3gzWWFRaVV5V3BwbzFBRjQzZnp5UHAxd0VQaEJmYUJkclZ1dGtjc0l3OEJ5MHNn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 京都府京丹後市 網野町溝野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQZjFQbHRBbFB2M3ZDTTFPMWNJLXdQb3Itc2hqek5Ya0FOUGtJbUN1VFZUTjl0WUI5NUNjYnJ6QXpoQ1Frd2RsVlBJMXJpTVpGLVAxN3R5ZnlPS3p2eHVvMjlfSGVpNXd3Tmdxc1ptbjA3c2tzNWVQZUhqMG9JazdkcFhCTnZUUzk0bWxiUnFwYlpSLWJRcXA4Q2hxeFZsejh0WG5HUHlYN0F1UkJrdThIRENMSnVkVThraDFxZGNTSUtSMU1BNVhGN1dhcDQzWFYyVGFEZG5VdzEyRG9lZ2UtTmFPcVV4TWFnV0VJR0JobzNRQdIBogFBVV95cUxNWGltWmloeEpMNGN4ME9lRnZzaDY3c1hWbE94VlBBZnVoWDZfOW9mbjRnUjdXaTVnd0VxZ3NzNUh3cGNuN3FZV3FEMEdkRG1xR0lGNzQ4RHp4cFhtNDFyWEdUMmpfMzFnQ3RDcTQ1cjN4dFdFbkVyTGpkb09wdDQ1aXBRcGdZblNLdWZ2QmloWlFXcXJKRFpPM00tQ2ZydU00RWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 滋賀県高島市 安曇川町中野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZlhkZ3FhcnVrTnlZSHNSeU1USUxZbWVwTlEtWXBCV1hsbTBZZEpWSFlnWC02UXdPTlFWaHRlcXdhS2FsdW04MDZBWmgyX20xMXBZXzJJRGFjT0UxTk1Hb29hdnpoMGMxODhGSHl0UGRscnhsV0tlRXBIcHFyNmhvRmZKWHFMa2oxOWEzc0ROd25ybFhzTXNnRTV6MWjSAaIBQVVfeXFMTTVzLS00ekVBT0JBSnFJT0V5M2MtWHI5NUdaTE9wM2Q0UVNQMEZoN1k3SGstREVFaWYtazNmRkJwXzVEck90dDJMbXItbzVYZ0xud1RtY1BWeGNORFhIMVB4WHpUa2ZCa28zZExBZ1NpbVFjYi1ialFLeGU4b1BCYzdDbC0yZ09fLVBaWHNyOFVrRDNRdlpyaERKVlBBaTUwNFF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 奈良県上北山村 西原の出没情報",
      "url": ""
    },
    {
      "title": "2026年10月30日 鳥取県鳥取市 佐治町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE0tLTNqNWkzUnl0WTk4TVNEa1Nqem16MEhsbmg3Tk12ZEd3eVpUOWZRS01tMHF3WU9JblVVOUk0d1R0VVNQemlxSlNKbFhwUXFyTm5Ed0FxSGdUOVIzZnQxSmFLbG5rdmw0bFdvV2hmZTlKZzlzVFpJSGhLU2QtbVU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年10月30日 鳥取県日野郡日野町 濁谷の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"秋田県","count":5},{"pref":"福井県","count":4},{"pref":"京都府","count":4},{"pref":"山梨県","count":3},{"pref":"埼玉県","count":2},{"pref":"鳥取県","count":2},{"pref":"愛知県","count":2},{"pref":"岩手県","count":2},{"pref":"福島県","count":2},{"pref":"神奈川県","count":2},{"pref":"東京都","count":2},{"pref":"北海道","count":2},{"pref":"群馬県","count":1},{"pref":"静岡県","count":1},{"pref":"奈良県","count":1},{"pref":"新潟県","count":1},{"pref":"滋賀県","count":1},{"pref":"岐阜県","count":1},{"pref":"宮城県","count":1},{"pref":"長野県","count":1}];

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
        <span>対象期間: 2026年10月30日</span>
        <span>·</span>
        <span>公開: 2026-10-31</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={40}
        periodLabel={"2026年10月30日"}
      />

      <h2>全国の出没動向と主要事案</h2>
      <p>2026年10月30日におけるクマ関連事案の総件数は40件であった。都道府県別の内訳では、秋田県が5件と最も多く、次いで福井県が4件、京都府が4件、山梨県が3件、埼玉県が2件、鳥取県が2件、愛知県が2件、岩手県が2件、福島県が2件、神奈川県が2件となっている。情報ソースとしては報道由来が31件、各自治体等の報告が9件であった。</p>
      <p>主要事案として、住民の利用頻度が高い緑地や公園等の公共空間周辺での出没が確認されている。秋田県北秋田市の翠雲公園ではクマ1頭が目撃され（※1）、神奈川県伊勢原市の塔の山緑地公園でもツキノワグマの出没が報じられた（※2）。また、福島県只見町の三石神社境内での目撃（※3）や、埼玉県秩父市荒川日野の農村センター東側付近での痕跡確認（※4）など、人為的活動領域と森林域の境界部における事案が目立っている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な確認地点</th>
              <th className="px-3 py-2">事象内容の概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">北秋田市、潟上市</td><td className="px-3 py-2 text-xs">公園での1頭目撃、雑木林での目撃・出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">小浜市</td><td className="px-3 py-2 text-xs">成獣・幼獣の目撃、複数頭での確認事例</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">南丹市、京都市、京丹後市</td><td className="px-3 py-2 text-xs">市街地近郊・山間部での出没および痕跡確認</td></tr>
            <tr><td className="px-3 py-2 text-xs">山梨県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">鳴沢村、都留市</td><td className="px-3 py-2 text-xs">山間部周辺地域および市内での出没・目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">秩父市</td><td className="px-3 py-2 text-xs">荒川日野地内における出没痕跡の発見</td></tr>
            <tr><td className="px-3 py-2 text-xs">鳥取県</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">鳥取市、日野町</td><td className="px-3 py-2 text-xs">食痕、糞、爪痕、枝折れ等の痕跡確認</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没状況</h2>
      <h3>北海道</h3>
      <p>北海道では計2件の事案が確認された。幌延町元町においてクマの出没痕跡が確認されたほか（※5）、黒松内町熱郛ではクマ出没の可能性が報告されている（※6）。</p>
      <h3>東北地方</h3>
      <p>東北地方では秋田県、岩手県、福島県、宮城県において事案が記録された。秋田県では、北秋田市翠雲公園での1頭目撃（※1）、北秋田市三木田での出没（※7）が報告された。また、潟上市天王北野で出没があったほか（※8）、同市天王の雑木林にクマがいると報じられ（※9）、同じく潟上市の雑木林でクマ1頭が目撃された（※10）。</p>
      <p>岩手県では花巻市諏訪（※11）および釜石市甲子町第２地割（※12）でクマの出没が確認された。福島県では只見町で目撃情報が寄せられ（※13）、同町内の三石神社でも目撃された（※3）。宮城県利府町沢乙北橋においてもクマの出没が記録されている（※14）。</p>
      <h3>関東地方</h3>
      <p>関東地方では神奈川県、埼玉県、群馬県、東京都で出没および痕跡が確認されている。神奈川県では伊勢原市塔の山緑地公園でツキノワグマが出没したと報じられたほか（※2）、秦野市曽屋で出没の可能性が報告された（※15）。</p>
      <p>埼玉県では秩父市荒川日野でクマの出没痕跡が確認され（※16）、同市荒川日野地内の芦川区農村センターより東に約100メートルの付近でも出没の痕跡が発見された（※4）。群馬県では甘楽郡南牧村星尾で記録がなされている（※17）。東京都では西多摩郡日の出町大久野（※18）および西多摩郡奥多摩町川井（※19）において、それぞれクマ出没の可能性が記録された。</p>
      <h3>中部地方</h3>
      <p>中部地方では福井県、山梨県、愛知県、静岡県、長野県、岐阜県、新潟県と広範囲にわたり事案がみられた。福井県小浜市では尾崎での出没が報じられたほか（※20）、谷田部で10時30分に幼獣2頭の目撃（※21）、中井で17時00分に成獣1頭および幼獣2頭の目撃（※22）、岡津で19時40分に幼獣1頭の目撃（※23）が記録された。</p>
      <p>山梨県では鳴沢村三湖台周辺地域で出没があり（※24）、都留市大野での出没（※25）に加え、都留で目撃情報があったと報じられた（※26）。愛知県では豊田市御船町で出没の可能性が報じられ（※27）、同市御船町山ノ神でも記録されている（※28）。静岡県富士宮市大中里では峠バス停南東300メートル付近で目撃された（※29）。長野県下伊那郡泰阜村門島（※30）、岐阜県関市板取（※31）、新潟県村上市宿田（※32）においてもそれぞれ出没が記録された。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では京都府、滋賀県、奈良県で事案が発生した。京都府南丹市八木町氷所山野神（※33）および美山町南島田（※34）でクマの出没が報告されたほか、京都市左京区花脊大布施町でも出没が確認された（※35）。京丹後市網野町溝野ではクマの出没痕跡が確認されている（※36）。</p>
      <p>滋賀県高島市安曇川町中野でクマの出没が記録され（※37）、奈良県吉野郡上北山村西原では15時00分に出没事案が記録された（※38）。</p>
      <h3>中国地方</h3>
      <p>中国地方では鳥取県において2件の痕跡事案が確認された。鳥取市佐治町でクマと思われる食痕やフンが発見されたと報じられ（※39）、日野郡日野町濁谷では柿の食害、糞、爪痕、枝折れが確認された（※40）。四国地方および九州地方における事案の記録はなかった。</p>
      <h2>リスク評価</h2>
      <p>当日の記録から、季節的な動向および餌資源利用、人口圏への接近傾向について以下の特徴が挙げられる。</p>
      <ul>
        <li>餌資源の利用と痕跡: 日野郡日野町の事例に見られるように、柿の食害や枝折れ、糞、爪痕が確認されており（※40）、人里周辺の果樹等を目的とした採食活動が継続している。</li>
        <li>家族群・複数個体の動向: 福井県小浜市において成獣1頭と幼獣2頭の同伴個体群（※22）や幼獣複数頭の行動（※21）が確認されており、成獣だけでなく母子グマや若齢個体の活動が目撃されている。</li>
        <li>生活圏・公共空間への接近: 公園内（※1・2）、神社境内（※3）、バス停周辺（※29）、農村施設周辺（※4）など、日常的に人が滞在・通行する場所への出没や痕跡確認が複数地点で発生している。</li>
      </ul>
      <p>集落や生活空間の周縁部では、未収穫果樹の存在や林縁部への接近が出没要因となりやすい。地域住民や管理者においては、柿等の誘引物への対策や、視界の悪い林縁・雑木林付近を通行する際の継続的な警戒が求められる。</p>

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
          <dd>2026年10月30日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-31</dd>
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
