// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月16日 / mode: daily-report / 生成日: 2026-10-17
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-16-daily-report";
const TITLE = "2026年10月16日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月16日における国内のクマ目撃および痕跡確認事案は計95件に達した。福島県檜枝岐村で70代男性が負傷する人身被害が1件発生したほか、文教施設周辺や都市部・市街地、鉄道路線への侵入など、人的被害のリスクが高い近接事例が全国各地で顕著に確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-17",
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
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
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
      "title": "【熊出没】檜枝岐村で70代男性が襲われケガ 10月16日（金）福島県のクマ目撃情報 - Excite エキサイト",
      "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE56TDZaMWxMOFBzY1ZxT2ozaWhsZHhFOElzZ1FldEstV04wZk4wYnFNaXNlR2dNZ1JOMDlVT3hEeG5mdkN0d05TYkNYQzQtcHpHWmJFY2kyV0tDQnFGdUhvN2ktZGl3Um5XOFlxTlhYR1YzVXpxOXNNVTBn?oc=5",
      "site": "Excite エキサイト"
    },
    {
      "title": "南区の小学校近くで目撃",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFB6bGhQVEZVRWVfWjd1WUtYeVpaVlhIMFFMMHNxanVwaV9BdHRpSzA5Nk5zWks4cWZobGkxbXdjOXR0dkRMZms3bzlva1cyZFgyNlNwbW4xd1J2Zw?oc=5",
      "site": "news"
    },
    {
      "title": "クマのような動物２頭目撃 車道を横断し公園へ立ち去る 札幌市南区の豊平川付近…市が注意呼びかける - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9xOFBzYmx0WFlJck00eWIwam1mOHFWVUFmbXZheldRNlpJVjdidTlRVmVQS1laazVCdmI0ZkszLXlxd3VmWXh2YzNHQ2tTWHNUUktBUlo1T242czRWSWk5aklycDJFT3NlYnFkRmUwbG1qcFh1SklsZlAwZWxSU1U?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "小学校付近でクマ１頭目撃 きのうは親子グマが出没 別個体か 連日の出没であす猟友会が確認へ 豊浦町 - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9za1RQVl9rUnBFUlJfNFJnM2ZULXZYS3YtajZiODFFekVmLWVES0x2Nm05SlJHeDA1UTNoU3pubUpWUmc1SlhqVVZ0WGhTd0M5TDlhVXdxNFN1N2Z6a3QyYm5HdUVLdFk0VDhDc01nbF9WWWVRSGJkM1FlQjYyb2M?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "「初めての経験で怖かった」 クマ親子か 住宅街で3頭目撃 木の上でカキの実を食べる姿 山梨・大月市 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBVZGZfX2dSNXN6STA0dlVHeDVlRkI2OVBIYlRrYjZnR0RrVVJWN1pEOHVXTDE1dWFuN3UtbTktX1k5bzFJZ3h2S2V2ckgzQW5RYmt1Y2VpTVVXQzZYeU9scnZ6SWpkbjQtQXl5SGhKQ1k2QllvZ2NEN2tBMNIBgAFBVV95cUxOdXpCTDVjRTFIdDVJNnBWSjYzOUR0RGxEdDRObWlqMjRJRjJLdDRtbTNQcUhocUhiWkhONnloVVFQRmk4SDF0WEIxVTNyNVBZeWNjR1U0YTRQLXRaNWxacVZ0NlB3bldBczI3ZlRfQ3M0Mk92cmZibFRRekZiQ0Vpaw?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "京都・小学校近くにクマ出没 冬眠前の“危険な時期”で出没ピーク 山口では鋭いツメでカメラを威嚇 - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBHcXVybTFScThaVlNoaWpRSXd3ei1sOU8wSlJkamVlZzVERVIxeExscG84cGYwRXhJOGFUM0tTTWN4MXQzN2NpX2FEcnlGdHJqRUpfQzlqeFdiTTFoZExaRWpwN1ZzdnNrUmtQRjNHQlNnd3RfUGJER01nX3U4MEk?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "【独自】京都・舞鶴市の市街地に「クマ」 道路を走って渡る様子とらえた映像を入手 周囲には幼稚園や小学校も 屋内退避や集団下校など対応も 近畿でクマの目撃情報相次",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9mRWJWYUlZRFNmRGh3Tlk3cDNpcTFJWVRhdTNSVGN2MmQ3eThXQVVGOXZkZ0xiaUNVdFNiYllNbDU5R0MwTU9vN3NrQmJfTTFvNWxXR2lqUQ?oc=5",
      "site": "news"
    },
    {
      "title": "京都市内の「小学校」近くで熊らしき動物２頭の目撃情報 - 京都新聞デジタル",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE8tdFhTX2FpWDEyWFJocnlLMHhkem9NQ09HMkZCYl9uWnh1bE9kZlp2OTVQZHgzRVJlOFVHNk9kQXQwT3ZsclRrSkpiYVY1NWVmT0t1V2MyRkI?oc=5",
      "site": "京都新聞デジタル"
    },
    {
      "title": "荒川贄川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNzRYaHhrNnpTSlNWTnk5Skc0WDNlMi1lUDBlZWpmQnVJSGE0akNLTHh4SnByYS1kem9zT0FKazlCMlNvbHRodUFNdndscWpiTUVCOVpjRy00TUVuNUNBMkE5OG8yQ3p1d2lRTGhrZk9OS0dZSlRnQnBsVHFndkxKeWRwUHVyTDhRZ1M2STFxSnJYVnZBbmthbzhrUEPSAaIBQVVfeXFMTmROZUh1M3dYNDk2ZjRROG9FYjVwQUM5di12Rldqb0l0dVN0SnRYX0d4V09GLXNJY25aWVZIbDJCREt4VW43TzdzVU1DZEJMaktvaGtybkFVMXRQTHpHeElHOW1QdkdDY3l0VklBOUV4NkYtRzRqN0l3M3NRbmx2RTR5eDBTQkt5a3l0ZUpvcV9LSHZZZVRZTklIMnBKbDZMd2x3?oc=5",
      "site": "news"
    },
    {
      "title": "埼玉・秩父市でクマ2頭の目撃情報 県警が注意を呼びかけ 身の安全を最優先に - ABEMA",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE00ZWQwUWcyMVJPZ3JSbGUyQ25Fc0E3bk5mM3lTemxDWjRqNjk0LUtad3JCLVJXUDNtRUhqcmJpOXdVcExxTzQ1bkNpdXRXQ3BVZUtHT0VfcXRKUQ?oc=5",
      "site": "ABEMA"
    },
    {
      "title": "国道をクマが横切る",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1Zb2txdFhIX2lLbVp6ai1FY2FpRkJNMFhpTFdtMUMweU91cmYtVGtQc2xBbUdtaHRlR2xBWlhYdEcxSTZBaXkwRDBhMC1BLUh5bVdKQnpIZTNrSnU3QjZqMXVULWl6UmQyX3NVNmZhWlRCaFJCRjdwSGZjT2s4QXc?oc=5",
      "site": "news"
    },
    {
      "title": "クマ４頭の目撃情報、牧場付近の広域農道で 16日、島根県益田市（山陰中央新報） - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9jQ3piQVAxTGJaTnV6RGdZdGpNXzQ2VFl0X1hscUpXMTdMT2FiR2N6aHpOOWlRNDN1enh2SFBMbmk3ZFdsQ0dRME10X2ZPMDdMVHFQOUZsSHp5ZE9odXVRUmNWblc3OVNmZEFHNy1hZ1VFNnRRZE5lNFJzeVVZZ3M?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "クマ出没で注意呼びかけ 和歌山・印南の真妻地域（紀伊民報） - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBCVmtZTmNGeHFiTk9EOXJMRkp2dl93R3VsRHRhdGVoV011VmRSczFJczNhOHJwaWhMdk85UnZ1SUlVaVZKTmxYaDZST2tYRHRsWC1RN0lxY0xISHFUTkpYRGpfYnM2SGhfbVY0UVE2emxIbGZLYnNwNTJPcXMweW8?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "（広島）大竹市栗谷町後原でクマ出没痕跡　１０月１６日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQc1MxVnZGNnV5dUFhUlhrUTl0RHZTS0NNeEFDVmFVWnl4dFVKLTBnZHh3UVRGc0N5dmVNLS1WR1JSVVFVQ3FncDZ5SWFrSGc4LVQ1Z2hBNnd6TlZjWnZYb3d4Y081ajJPRFpYTEdibDNvQmFybmZVQXNaNmpzWnVfV1Fvc3RSX3dqbDVQS1BhbDBhY1JGYm53ZHo2T0_SAaIBQVVfeXFMTXdNWmY3NDRzbjd5STA4d05FeXl0T0c3c1lsT0N0dXRnYlE3dzh1RXl6TExMeHhEcm5iNi1lRTMweXJScGR1S3lCLXlGMGJ1aFB0SG1iY3RQRGZPZ1UzQVhsbU9KV1lUQmJIdk9pZUNKX0dPTXp0dWY0T0U0a05vZmJpa3lkcEFuOG5GRTBtZDR4RmNhZUtLS3pwNnRxbjJkRE9R?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（広島）大竹市栗谷町大栗林でクマ出没痕跡　１０月１６日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPb09HNnRPQ25fNi1TNVdWRXdxSlVsdlZFN0hCdUVZaW9pdVJYbTFvdU5xQXcteUlSM2tQMlBZdFJBQmQtZm5iY1lYQjdBWk9XeTAtVjZuemt0RGdhV1JEejNJNFZwbDFOMWFaRWd2UFlmNF9WT3YxRWV6a05mZ0xjVXBRQ1pXWXFwN3pOd1NlalBVWDJIdUJxQ2ZrVWvSAaIBQVVfeXFMTXFfM0JfWUJFVWdaZEtoRUlwNmRzWWFBcUtpa19WcjRRS293Z2Y3ODkyTzVHUFk0SThXd3dNam1XWkplME1ReHI0NE94WmI3bzBMY1RJRkJxX2hLVzFwemF4ZjM1ekFJMExwZmdRRzZscFM0R1dRU1VqekhXd0xnT09ERWxwRFRBakhFeU5WeGJtZV9tWmdaM19BZ3pSaHdUdFhn?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "東京・あきる野市でクマ目撃情報 市が警戒呼びかけ（ABEMA TIMES） - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5NUmstcVV6VjBhQXAyNTBpbmxZWVhhRnMyekhrRkVGMG9VOWJNRzlqajNBc0VsWjRaNDVlYnd6c3pfZ1lBNDhiaFdaUk9JRzFabGpxbWtGTC1iWkxtaU9DTlJtWko5TnlXM1J5UUVaYXc3SEU0aHZZUU9ONWFNVXM?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "弘法山一帯にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOeWY0UHpOS044R21TZkI4ZlBoMzlabkY1Wmx3RXpyWGxuTkRTM255YnlzNlBDR0RacjZrZXg1cFlDd2x3OFBpbG5fWEtpS1NYRzZ5U1FZNHR5TzVueVdMaXllUWF5SWlOZzhuV0dEM3g2RzhWanoyb05sNTdCQURJWVZfYjF4RDhkYVM3bHRTazc3Sngyemo1Z9IBngFBVV95cUxPUHk1RkhPZ1IyX0cwM1FYOUN2bFM3MFdDd3BLWV9IOGdoRDRtRUFyRzJqX0M3TmxWeFZpWkM0MlMzZjctU0djbmhJMHVnemdycjZqNVZMRC1Xa25sZG16VEZvcF8yTXY5M2JXQnA2V2xzMlF0U1poVjlSUmlNQXQ2aEUxOGJtaklLODdzbDZxbjA5bnNyRDNTUDlTWWljZw?oc=5",
      "site": "news"
    },
    {
      "title": "秦野市でツキノワグマが出没「クマがほえながら出てきた」 警戒続く（tvkニュース（テレビ神奈川）） - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE05bjhPS054djJrRzhmYnprWVZYc29fUy1mN0pXTVlmYXNwMVk5RTRBc0t0YnpESEstWlZTWVFYM293YXdSQThvU1N2UUFQclhyUTJPTFNxeGQ4NkxGUlRYcFNKV0JWYnZrYVpOM1czbnh6Tm1zSnhsa2txY2wwRDQ?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "（山梨）都留市法能でクマ出没　１０月１６日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPOUxsem5xQkFKaUd3VG5iVnBfNDM1UTFSWlFtRXhIQjNHZWViTXVLZWpveHhsT3A4ZGVtbEM0QVdrS1BWTGVfUnVnQUFBMDdnVV80Y3NXNnRZUWsyMmR4UXJxTTB6Uk95MnRTUEpjNGdpaDZRT294MTZLX0ctQzZ4T1RLX3dMRjNzWk5yOUV4T0hhenp5aVEzNjA5Y1LSAaIBQVVfeXFMUEJlMERkNEJKdUIzZnhnbTVpejBYbk9tc3Y1aGpwcG1VY3lOQ2p6RUJYVGMtX0dUd0NGQldjb0swUGg2aDcyeV9ITW1rczJGb1Zyc21Pd0R6Z3psNnVZVnhKbC1PRUQ0azFDNnJuVGxfR3RQdXRUSUpyQ2kwUTlldHRkU2RZYVNENUgtcHlMYWtBREhkZk0xUDg1UzFPa3hrdlF3?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（山梨）笛吹市八代町奈良原でクマ出没　１０月１６日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTFYxTGlGZkFjVlJDZHdnM0pmN3JvZ083YXZXR1RkZVFKQ0Z3NzZHd1VmNElnVXZoRWduTmlROGhtWm9ST3IwbU1HUXVfQnFveGxZS1UtQUpNYlBjdUpLbW5LSWtnVXR4V2QxRXQwdnNpRjJ6SjFSUV9neV9kN0ZURlVDUVJZWjlFdXpLa1JuZXhsS0ZaYjBZeExVdTDSAaIBQVVfeXFMT0gwU0lQb3hBRlp1QVM2cFVaMXpnUXBRLVo2cjJaa2lxNzNKOGt4RGdpTXBXVTFXZTlrd3VSMjI3b1hILXRWMl9QTkJHaUI2SzdlWU9UamF3aG95WmFMWVNiTmdmRzkza28wN1NvU1FJeUlNekhreHRBZzdMWmx2SWJVYlF0dmpSQVN4MFE2TExIcnVBbmUtU0dwNFU0QUJwekd3?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "八尾町福島でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOUhrODVGZGstbERyOWl1d0FLYWZseWt4YXdoNllDUTRNcktMa25EOVVhaDJFWjV4cnFkbnJPa2dtZzRBdmk3ZWNIUi1WUG9fZEpDVlhvWEhXWVA4bGN0US03b1JGa19malptMWVpNlFEd1lrbnluOVVidG1DRlRnYkt3ZVJGLUZMWk9tU2hCa09CbkljcWFZclEwTErSAaIBQVVfeXFMTXVHYkFKTThRWVVHOGhteU91cVpaRGxNWXo0UnRiS3lqbk1JSkJ1TzQydzMxWkNGYnNHTUhXckRSb1JDT3hNVnNWVnZiTHROcURicTlDWm5uYjY5MUY4QjNZVTgtQ3hBR2lGNkZKMTZJRkFIelFxOW0wekJLOGE4V1pNOXM5YzdyblVOUU9MczNseHlMeVBJZjdrSkdvZDc4SW53?oc=5",
      "site": "news"
    },
    {
      "title": "（兵庫）養父市大屋町大屋市場でクマ出没痕跡　１０月１６日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOeDhtOFVNUTVXMVZDeUI0bnU0SVBmSG9oTVd3ZW1ELWd0anhkX2xSTS1tMlh3X0RzSXNjMFctRHhyUC1xVWIwS1hhclQxSUxlcFA1QWphYy00YWducmVnQkw5Y3FleGJXQmVKYnQ5QUhkejBFbUpiRkRPVThnczVYYVpSRXR6alRPeHRnbGFrRlJJZHNCSV9YWFBJUUvSAaIBQVVfeXFMTUZvaGR0Q1l1UlhWWkRjc2hpSnVQOFlwM2dJXzZobzhQdU11amVNYXhiT1h4QllOdXVvRUpSX3JQYnluUklkTzJCd2ZtVTZOYldOZTMwNjNZNnA0RmVBZ1k0R2hGelV6bHN3Q2FqaU01RHFoX2lCU0hGN1gwTmtXNldQUTFiS2JTTDdKckFIYzM0S3h2ODBBWVdyQ0xtMFdUdmJR?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "北アルプス登山口で子熊3頭の目撃情報 安曇野市が注意呼びかけ - 47NEWS",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE9HdHdfcnI5OWZaNzFROE82VkJNalh4aUNwNEppTGJCM1JJanNlbl8zU21aU005ZFJNMnFFR1A4VGJfNGN5Z3YwdUR2MA?oc=5",
      "site": "47NEWS"
    },
    {
      "title": "（長野）天龍村平岡でクマ出没　１０月１６日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTnhwM21aZmpwRmQyYWd6VFpIX2Mtb3BSRGV2M1pzdnlwTXcyalVpR3JEUjFXVHNDVVBWUjY5dkNNNWw0QTdPZURlYUg5OTNFVkU4bE9PMTV4eGtiZmNZa2FTcVUyRXBGdWdiZ0ZpcGcyRWs0V1lfcUZRbVBRRUFyQTFUekFYellqNkFsbFduRXlmLXNWMVdnSFZyVmzSAaIBQVVfeXFMTS1jSkZReExGc3UzMnQ1ZVRRRnc1R0Q0T3BTSGN1azFTTVBvV0JZY0thakUtSndFMjJGbDJ3NFN6cHNvZEJuSlBvT2NRN1h4T1U2ck1yc1JqenJ0SDB6R0hkaFVsR2FuN1E2bnRlMUc1NzNleFM2ZU9nSVI2N1ZPNmVKdmxNZnI2M2lhMnBvakhBdDJaVnJ1YThXeDkwd3RiMGF3?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "鳥取市佐治町で熊出没確認 - 日本海新聞",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9WaGduNHNnLTA3eUJmVktBVTJ1U3Q0ZXJDamJWc1BuRGJJdEkxQ1BEU1g1SW1GSm55cDlrQzVJYlJ5cGNlbXA1a3ROdkNReXYx?oc=5",
      "site": "日本海新聞"
    },
    {
      "title": "（宮城）仙台市泉区大沢３丁目でクマ出没　１０月１６日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcG04dWw4REJ2bzNNaGREcVFKX3pwQ05xYy1DS0FycmtzS2hTMy12djJIZzdtMkhzLVQ2XzM4LTVaNTV2UnREX1FKc0thV0dXQUNEVVhyVmZ3TTVNUEZ2Rzdpb2Q5bFZXeEFNaVJxc3NRUXN5VDZkNTBxb0xhV1VXRzR2MkRaT1pBOXl3ZWNxa2tTcnZSR3Y0WGdscTXSAaIBQVVfeXFMTy04RWhEUDIwd3JpOEJSN25aMENaS3dKbEVXcEhfdEd2dlBnalJDWGQ4TXhsSTFGdHY5M2tUQzdFZ3ZUSGtRY3dFNGtxY20zTXhYclpBdHg5eG1BUEFGOFB5bEVhS3k1eEFBUW9mbU5NT1dXS1lkNGxjQjhNLWMxckdnWDNWMTdwX0x4SGtGaTNPVHl0SzVRRXRGdE9qbWNtR1NR?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "（群馬）桐生市梅田町１丁目でクマ出没　１０月１６日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRHZYdzFBT1pnUUh2TjFXc2hOdFBORS1PRWZ2cWNxb1dyTjJhOW0yTlNlVk1YNmZzRDlrcXFCUk4ydEZ3SHdSNzVqeG04Rkxvc0JIOWZFLTB2aVdTNXJuNzlyZF9TaVZRcHJfaThyM0h1cVlzZk5za1FrUFVmZS00OU82dWllLXJqdGFaTm5vdmhwclQ3N05WaDJRMHfSAaIBQVVfeXFMTXlnZXpSbkpyN0c3cmVWV1hKOXpUOHo3UmE0OUZlZXZ5VVFfamFzblEtUFNJOWZoekR1aWExY0Z1YzgwNDRWMlpLV3JjY253a1dKejFNODN4Y0N2U01SZnF3TTJnQ1dHOEY3U3FBOE5RZ1pTUkpQNkFJVHFVc0RUT3czODlaSXcyZnI3NHlGcExJaGFiUlhQbmJRdHV6bnpNQXpB?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "柿の木に…　愛知・豊田市でまたクマ出没　市内の出没4月以降で50件超 - 名古屋テレビ【メ～テレ】",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1GWGtkU1lhSEZVQWtBZGZKbDJvcnhhQ3p3QUxlTHJEZEpBdjJMR1A2TjBMZ2tUNXM3eHpzVTdtbEJzUDI3eDNwWDFHeEZJVURWc2xMbnZLcjltWHpVdDZjc1hzZlPSAWRBVV95cUxNRlhrZFNZYUhGVUFrQWRmSmwyb3J4YUN6d0FMZUxyRGRKQXYyTEdQNk4wTGdrVDVzN3h6c1U3bWxCc1AyN3gzcFgxR3hGSVVEVnNsTG52S3I5bVh6VXQ2Y3NYc2ZT?oc=5",
      "site": "名古屋テレビ【メ～テレ】"
    },
    {
      "title": "サンダーバードとクマが接触 湖西線の北小松―近江高島間で - 中日新聞Web",
      "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE5nN2lwNDJuOEQxaVhpLVlfS1FyZHpHWXBzNmc1a1ZKQzh1b3VSblVRSjZZZm05MmNIRk11MkZhck1QSkU0VlB0blVvUEVlYUhpVGcweA?oc=5",
      "site": "中日新聞Web"
    },
    {
      "title": "（岩手）大槌町吉里吉里４丁目でクマ出没　１０月１６日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPV0NJQTRyYTI2QjJodEVHNi1tQUU4M0daLUFLX3RRREN6d1U3YndZbUQzLWVHMF9HeXgxZWJOSXp2NW95bGhtWWpfTHZuaWJTWDczMzB5Qm1pTHAtMlJpbGU5WHh2VHlaV2ZJRlJHVjlBeUxseldCOXVTRU81SXp4ckNzRG12SzZ5cGtkMjg5bnQ4ZFVUNTJzQ0dMUEFxLVhlOW91RVVPa0IwNWl3ZXhRdnh0T0xqZENnQzR6OEFDcWFSNU5rNnlwQUZBbFliQXBDanJ3SnNfUUwtS3NPVzBjZGRfcFk1YnByNVJsZnFIQ1c5QdIBogFBVVfeXFMTXg0ZmZnblh0TU1qT2ZpdDNfWTU1bXJGcXZPY3gyd0RXN2VCRzE3eWw0UjRTSWJvU0lmdnk4eHBTdnA0YWdQUmFHc0dFUmVudXRTSmhTNzRIVFFlbW8tczFSakNXR2RvbUdXUi1idG40YTRqQkt4QnRRMXVSetJHeWZIdl9NbmVnZm5ia2pibjVwZ0VsYjRhbU1wWmozTjV1eWZEZw?oc=5",
      "site": "ｄメニューニュース"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":16},{"pref":"福井県","count":13},{"pref":"京都府","count":9},{"pref":"広島県","count":5},{"pref":"長野県","count":5},{"pref":"島根県","count":4},{"pref":"東京都","count":4},{"pref":"神奈川県","count":4},{"pref":"山梨県","count":4},{"pref":"埼玉県","count":3},{"pref":"新潟県","count":3},{"pref":"岩手県","count":3},{"pref":"栃木県","count":3},{"pref":"宮城県","count":3},{"pref":"和歌山県","count":2},{"pref":"青森県","count":2},{"pref":"福島県","count":2},{"pref":"兵庫県","count":2},{"pref":"鳥取県","count":2},{"pref":"富山県","count":1},{"pref":"群馬県","count":1},{"pref":"秋田県","count":1},{"pref":"山口県","count":1},{"pref":"愛知県","count":1},{"pref":"滋賀県","count":1}];

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
        <span>対象期間: 2026年10月16日</span>
        <span>·</span>
        <span>公開: 2026-10-17</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={95}
        periodLabel={"2026年10月16日"}
      />

      <p>本報告は、2026年10月16日に記録された計95件のクマ出没情報に基づく日次動態分析である。当日は人身被害キーワードに合致する事案が1件、都市部キーワードに合致する事案が9件報告された一方で、捕獲・銃猟キーワードに該当する事案は0件であった。情報源の内訳は報道由来（news）が69件と大半を占め、自治体や地域情報システムからの報告として福井県8件、北海道6件、新潟県2件、広島県大竹市2件、埼玉県1件、岩手県盛岡市1件、栃木県1件、栃木県佐野市1件、島根県1件、和歌山県紀美野町1件、東京都あきる野市1件、青森県1件が記録されている。</p>
      <h2>主要事案の分析（人身被害・都市部近接・インフラ影響）</h2>
      <p>当日の最重要事案として、福島県檜枝岐村において70代男性がクマに襲われて負傷する人身被害が発生した（※1）。人身被害の発生は地域住民や野外活動者に対する差し迫った物理的脅威を示しており、現場周辺における警戒態勢の強化が求められる状況である。また、都市的環境および文教施設周辺への出没が複数地域で確認された。京都府舞鶴市では市街地において道路を走って横断するクマが目撃され、近隣に幼稚園や小学校が存在することから、屋内退避や集団下校といった緊急対応が実施された（※7）。同様に、京都市内でも小学校近くで2頭の目撃情報が相次いで報告されている（※6、※8）。</p>
      <p>交通インフラへの物理的影響としては、滋賀県高島市のJR湖西線（北小松―近江高島間）において、特急サンダーバードとクマが接触する事故が発生した（※29）。鉄道敷地内への侵入は運行障害や重大事故に直結するリスクを孕んでいる。さらに、生活圏への直接侵入事例として、山梨県大月市の住宅街において親子とみられるクマ3頭が目撃され、庭木等のカキの実を採食する姿が確認された（※5）。人里に存在する果樹などの誘因物が、市街地や住宅密集地への誘引要因となっていることが強く示唆される。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生地域</th>
              <th className="px-3 py-2">地点・施設</th>
              <th className="px-3 py-2">事象区分</th>
              <th className="px-3 py-2">概要および影響</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">福島県檜枝岐村</td><td className="px-3 py-2 text-xs">村内</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">70代男性がクマに襲われ負傷（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府舞鶴市</td><td className="px-3 py-2 text-xs">市街地（学校周辺）</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">道路横断を目撃。幼稚園・小学校で屋内退避・集団下校（※7）</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府京都市</td><td className="px-3 py-2 text-xs">小学校付近</td><td className="px-3 py-2 text-xs">文教施設近接</td><td className="px-3 py-2 text-xs">小学校近隣で2頭目撃（※6、※8）</td></tr>
            <tr><td className="px-3 py-2 text-xs">滋賀県高島市</td><td className="px-3 py-2 text-xs">JR湖西線</td><td className="px-3 py-2 text-xs">インフラ影響</td><td className="px-3 py-2 text-xs">特急サンダーバードとクマが衝突（※29）</td></tr>
            <tr><td className="px-3 py-2 text-xs">山梨県大月市</td><td className="px-3 py-2 text-xs">住宅街</td><td className="px-3 py-2 text-xs">生活圏侵入</td><td className="px-3 py-2 text-xs">親子グマ3頭が木に登りカキの実を採食（※5）</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道札幌市</td><td className="px-3 py-2 text-xs">南区（小学校・豊平川）</td><td className="px-3 py-2 text-xs">都市部近接</td><td className="px-3 py-2 text-xs">小学校付近目撃および2頭が車道横断し公園へ侵入（※2、※3）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没状況と移動動態</h2>
      <h3>北海道地方</h3>
      <p>北海道内では全国最多となる16件の事案が記録された。札幌市南区では小学校付近での目撃（※2）に加え、豊平川付近でクマのような動物2頭が車道を横断して公園内へ立ち去る事案が確認され、市による注意喚起が行われた（※3）。豊浦町でも小学校近隣で1頭が目撃され、前日の親子グマ出没に続く連日の出没に伴い猟友会による現地確認が予定されるなど、教育環境への近接が目立っている（※4）。そのほか砂川市吉野1条南や留萌市留萌村留萌原野など、道内各地の集落・平野部周辺で出没が確認されている。</p>
      <h3>東北地方</h3>
      <p>東北地方では前述の福島県檜枝岐村における人身被害（※1）のほか、同県福島市松川町での目撃が報告されている。岩手県では盛岡市上田堤二丁目の児童公園付近で成獣1頭が北へ移動する姿が確認されたほか、大槌町吉里吉里4丁目（※30）や奥州市江刺米里本小路で出没が記録された。宮城県では仙台市泉区大沢3丁目における商業地・市街地近接エリアでの出没の可能性（※26）や南三陸町歌津皿貝での目撃が報告された。青森県八戸市是川（土間沢、2-3番地）では成獣1頭が北側の森へ向かう動線が確認され、秋田県潟上市昭和豊川槻木真形沢でも事案が記録されている。</p>
      <h3>関東地方</h3>
      <p>関東地方では東京都4件、神奈川県4件、埼玉県3件など、首都圏近郊の山間部から丘陵地にかけての出没が目立つ。東京都ではあきる野市乙津（成獣1頭目撃）および檜原村三都郷で出没が相次ぎ、市による警戒が呼びかけられた（※16）。神奈川県では秦野市の弘法山一帯でツキノワグマが出没し、「クマがほえながら出てきた」とする目撃情報が寄せられ警戒が続いている（※17、※18）。また相模原市緑区牧野や愛川町半原でも出没の可能性が報告された。埼玉県では秩父市荒川贄川の平和橋北側付近で地元住民による目撃や2頭の目撃があり、県警が注意を呼びかけている（※9、※10）。栃木県では鹿沼市加園や佐野市下彦間農村公園の一般住宅敷地内で目撃があり、群馬県桐生市梅田町1丁目でも事案が発生した（※27）。</p>
      <h3>中部地方</h3>
      <p>中部地方では福井県が13件、長野県が5件、山梨県が4件と多発した。福井県では小浜市（飯盛、須縄、深谷、尾崎）やおおい町名田庄三重下三重などで集中的な出没が記録されている。長野県では安曇野市堀金烏川および北アルプス登山口において子熊3頭の目撃情報が寄せられ、市が警戒を呼びかけている（※23）。山梨県では大月市大月3丁目の住宅街でカキを食害する親子3頭が確認された（※5）ほか、都留市法能（※19）や笛吹市八代町奈良原（※20）でも出没があった。愛知県豊田市では柿の木にクマが出没し、市内における4月以降の出没件数が50件を超えたことが報じられた（※28）。新潟県では長岡市小国町七日町の国道291号を横切る成獣（※11）や加茂市下条川ダム駐車場トイレ付近での親子2頭、富山県富山市八尾町福島での痕跡確認（※21）が記録されている。</p>
      <h3>関西地方</h3>
      <p>関西地方では京都府で9件の出没が記録され、舞鶴市の市街地における道路横断事案（※7）や京都市内の小学校周辺における2頭の目撃（※6、※8）、南丹市（美山町宮脇、園部町船岡坂本）での事案が相次いだ。滋賀県高島市ではJR湖西線での列車接触事案（※29）が発生した。兵庫県では養父市（大屋町大屋市場の痕跡確認、奥米地での出没）で事案が報告された（※22）。和歌山県では印南町真妻地域での出没注意喚起（※13）に加え、紀美野町上ケ井地区において足跡とともに柿園での食害が確認されている。</p>
      <h3>中国地方</h3>
      <p>中国地方では広島県5件、島根県4件などが記録された。島根県益田市では種村町および松永牧場付近の石見西部広域農道において成獣・子熊を含む4頭の目撃情報が寄せられた（※12）。広島県では廿日市市原で出没の可能性が報告されたほか、大竹市栗谷町（後原、大栗林）において連続して出没痕跡が確認された（※14、※15）。鳥取県では鳥取市佐治町での出没確認（※25）や倉吉市大原での報告があり、山口県岩国市寺山でも出没痕跡が確認されている。</p>
      <h3>四国・九州地方</h3>
      <p>当該期間中、四国地方および九州地方におけるクマ出没や痕跡の報告は記録されていない。</p>
      <h2>リスク評価</h2>
      <p>本日の集計データから導かれる第一のリスク要因は、秋季の活動特性に伴う採食行動の活発化である。10月中旬という時期は冬眠前の過食期に相当し、個体が広範囲を活発に移動する傾向が強い。山梨県大月市や愛知県豊田市、和歌山県紀美野町で確認されたように、成熟したカキの実などの人里周辺の果樹資源が強い誘引物となっており、これが山林から住宅地への進入を促進している実態がうかがえる。</p>
      <p>第二のリスク要因は、複数個体（母子グマや群れ）による人里への出没傾向である。島根県益田市での4頭目撃、山梨県大月市や長野県安曇野市での3頭目撃、京都府京都市や北海道札幌市での2頭目撃など、複数頭での行動が目立つ。母子グマの場合、母獣が強い警戒心から突発的な攻撃行動に出るリスクが高く、人間側との遭遇事故が重篤化しやすい。</p>
      <p>第三に、人間活動の密集圏への接近度が極めて高まっている点が挙げられる。福島県檜枝岐村での人身負傷事故に加え、京都府舞鶴市や京都市、北海道札幌市、北海道豊浦町のように、小学校や幼稚園の至近距離、さらには一般住宅敷地内や児童公園、鉄道路線への侵入が日常化している。捕獲・銃猟による排除実績が当日0件であることも踏まえると、市街地侵入個体が生活圏近傍に留まり続ける可能性があり、通学路の警戒や不要な誘引果樹の管理、早朝・夕暮れ時の単独行動回避など、徹底した現場安全管理が不可欠である。</p>

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
          <dd>2026年10月16日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-17</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-17</dd>
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
