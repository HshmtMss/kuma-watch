// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月15日 / mode: daily-report / 生成日: 2026-07-16
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-15-daily-report";
const TITLE = "2026年7月15日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月15日における全国のクマ出没件数は232件に達し、東北地方の岩手県や秋田県を中心に高い水準で推移した。住宅地への侵入や中学校近辺での目撃、農作物被害、さらに道路上での車両衝突事案など、人間活動圏との交錯が広範囲で確認されている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-16",
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
  datePublished: "2026-07-16",
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
      "title": "2026年7月15日 秋田県北秋田市 小森の国道２８５号の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE44aFhGeWVqZzQxQ3Bnc21BcXl2YWdFZ0Z1cXRoNGY3QVUxb0tmYVJCOW91ZHJVb05lazNtTWV1eENLejRzQ3hJbE9NWFJYQkI2aDl5R0h2dW94V2I1aVdpQURn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 岩手県雫石町 住宅の出没情報",
      "url": "http://www3.nhk.or.jp/news/html/20260716/k10015178631000.html",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 山形県鶴岡市 中学校近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1ER0FOSnp2Y0xSVEUxLWlrVXN4Z2dIZEpHNS1JY2hpaGZqR2VIMEJhb2U4bXNmMExwUlBoSkRReFBOUFI4Y1R4OW9fdjluRHdpMXRLR194dUxlQk5YZ3Q1VG4tV205cG8tYWFfdHlYQ3RPUm5teFU2aGdfZVdTSUk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 宮城県富谷市 中学校近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBwM3B2Ykw4VWxvaGFWSjUxcVpMck85SUxrM0xmMDY3RzFmaE5CNC1HM0lIVXpHeWk4NFRNajhmMmdFV0N3T1ZoaXB6NFpqMjRGNVBORFBHVVRvMVlwNXNVa2tUYmd4cHVyTlIxX1FBektEZGZ5WHY4bThLOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 宮城県富谷市 富谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9ZeDh5UVY3cnNrVDlwTXA4R01oeHZudjBBb3gtSmc0QzRfOHE1VXlyY0R2aUg5OC1iNEVIM1dyYUw4azdzWkRmOXBrOUxKaHNJXzBvekpNS2QtUFBCSElsWQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 宮城県仙台市 宮城野区原町５丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQa1lwc3N1bzZOWWd5RG9vSXViVjctY1Y5T2hFcXdpMUcwaWdJX0JJNWxkWV9FZGktRUltVzRLaUxvdi0waGs0bDJ6dDk1SGtIVnI4OUNqMGtJM2lIRnBUcmZINlFsVENUZ1pONUl3S0xYdElxWG9TeTZydWpUS0pVM3NXc2p3UlFfVGtXRlRLU1ZZSzk4dk1rdFNmN3rSAaIBQVVfeXFMUE0wSTEtbUFQRGNJR1paSHF6R1M0UG9KQkFvWGFKdXU0cU1iVWpYNHR1ODVGS2l0VjlHMURwMGM2VXNSY1VNZTkwOFk4R25KeTl5Qi1VZTFXanQyMnd3OVpBUjZkeUs1bFhJcU5GOXZ0eXpOVkU4VU0xQ1VNTlZVczhVX1g3dEVhLWN5WG5BVlB0bENWSlplUlllTGhfeDE2WU9B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 宮城県仙台市 原町 梅田川河川敷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBsVXI1T0lIWFhBandoLW9XVVJMWE9PLTdNSE9ackxVMzFORk5OaE5IQ3NaYldlSE9BRjhnQlMtbXZlRkZuVDk0R1RwWU9xbnFhaDVjYzVjeFJFajlzcTFCbG5RYi1KSzFqdzRtc1hINFVxQk5ydkhMcDdYeXJMRXc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 宮城県仙台市 泉区明通３丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaXZsRTgtV3FsamZUeTdKbXFmQUp2aWIxQkhzd0pGbUxKQ3MxYlZUMW5La083Q2Z4bm9jMmR5UmctOUcwdFFEbmJHNUUzbGFBMmVTVk9vVUV5R0hRUXRiSE5rSjV4S2tvdDJfbjRLM2hrTHBwdnhKYmdDV3VMNjhqQmRxQVRDZENXVV9SZDlQT216YmRyOVBycGZiaC3SAaIBQVVfeXFMTlp0QThjYmZBTW0wYnNDV0ZQQ3o3QlRsV21ORjJmVVUwSVJ2X2pqLU1ZZ2xmX1dnMHFmWGRpdHNBcmxwMFRjZHhmUnJIbWI2azRpSHNjS0RvNl9hQ0REai1tQmtnNXVqOVRrdFZYc2ZRcExIXzlSMllpajE1RzJ3aHdCOW41TUdxdktyY2doRmRfdWpyZE5za0o3MldSUHl4NE13?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 岩手県盛岡市 黒石野三丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 秋田県大潟村 大潟村中心部の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9TVjdUYlRnN1pCMzF1RUJaNzZPZ2tCT0xJVnRla2VrdVc3cXZPYmY2czN4blhsUmdJYy1aYmNMd2VrcXhFcjRia2R6eUlLTHhFRjhkbHBad3BHZC1UTjl3ZHp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 岩手県盛岡市 川目国道１０６号線上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNUjN4VkZzOXNrYkpDZlI4WmRkckxBNkEwWVpvSWVxUnYxeG4xb0JMQkhTNU9sczFqZHZtLTItUU5USFZpMmhISWxTQWRIelpqdEtLaW5aVnNNSjAtUnV1dU5CM2V5RGpVRkJ6YndzX2hLTmtNaDI0MEJtXzR3dVJLSWp0QkpJdTA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 岩手県盛岡市 川目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE1NTXR6aXpZb1ZpSjZMbmJKUHBFbXQ4OHRRYkE5bGYyeDdxdllwVmdvM3FDSVVMRnVJcnJwUk9yT1p0LTVJR2pEZFZOdUx6a2ZMcUM4VmdxQjdLdTFiMm5LMERNWV9aTGFzeFlqQXZ0Z1o3ellOOXNmWW5XZEbSAYIBQVVfeXFMT0ZTbWt0ZDhEVlZDLUFpVjFYeXc0Y3Y1Q3VBLWdDdWVQRzJEM2NqM1ZIaktkV1E4REdQMUYzUEdvakpXT2M5WGlrZWR6U1dNSTUtSzFjRDVVaDRzTi1DdlZ0ZlVTX2tmYlpJUG92cGc2RVJwOEpKbzVveTg4aW92b2ZBQQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 岩手県盛岡市 玉山字白沢の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 秋田県大館市 長走陣場の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPN0tEOHh0TXBQSW9VR3JuZlZWQlZVd0lOanJuNkVIUE5xcXNfWWFVZTR1Uzh0ZWhyMjhURDhvYWIwd1piYUk0TDh2OU1QSkdmZXBJVkJwTkw5ekxpRXZOQ0VHcExvVVlBMFRTMmZPZUdjQjNtOWlvdUVRT0h1bGVCMVVaZkowYWdJVl81czVVSWR0VEJnSHV4bEhaTkfSAaIBQVVfeXFMT09aTGpUeTF6Z3ltNzRJTFlOblZNUHdadl8wdnhsN0xrODhwdDEyZDZ4VFRtOHFlalJQRHB0d2tvbFRwZ2NzaDh1d0Q2UjZtOVBOUWFYaFczQXhwT3pSYWJ1SlJhclpIcTJ2SHlFR3F1MVpmVHhlZk5MSzYxUENXdkVmYkV1ekh5TWNfMi1WU185NTR5cUIxSnEyTjhBUVJVZGp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 秋田県秋田市 寺内蛭根３丁目の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOTFFzekhsSEppMzRtX0tPam5IM1JGZzF1SlozN2VLSGktT0tjVUJGWWxpQ0plczBubDZwaUc4MFo3VG51bWFBbHNnTmpreXZtZmFhZlFySDBobXF0TUVmRTVvOGxWWVVkYmZXQUlmRHA4dlVzYnZDTzNraTFaTWt2cDU2aXMwRmZjeXZjb1dtdFRhQVRiczhSUnlqYmR4d3VobUQ4OHB5M3hudHhYTGZPZm1nekVhMF9lZ0k5OENjNTRTT29PZlJHYllZZ1hWc2hPWmJlaFIxVUxRTFlSWUkwMjVkR01IckF5SmstbTNVREQxd9IBogFBVV95cUxQODdRSGplcjJjdjZ5NjJPNVpQNEoySS1CS25RVXFHYWFScFMxZUlvZ1hVOGhLbl9kMFFOQld0dlp6RHZkZEtzOVpUVm9iaDRmNDZsaHAySzVhVDl2bXgxdW5VbTFselFMWHd3LUkzcEVOV0pWQmlBZnpSNFF4RjZCLU1mYk12UlR0TUp1a3NpUGVjNEphZlBQTXdDbWctbGZlbUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 秋田県秋田市 下新城長岡前谷地の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRHF1N3NXUDBnc0NlN3lGNWJUUnFmR2p5NkZmeGZTbDhpMDJfcmpFMHR5d0t3Z2dKQl80TzZZX05OR3Vhbjk5YXF2RDFnMmZmMV8xcHZzbWdESDQ3cFo0dGdONWk2bUxRaEZTS29HLTR4VjI0eFI1MFpYT3R4cjZfVFRCQUl6X3pOOGVVa195ajhWNUpYWE9rSzhMUEvSAaIBQVVfeXFMUGtONlZORlh5ck1sOVB5TjdXOWd2T2NpOHNvVS1RSVRlWkhQNVpseWI1SFVzQ2hDMDU1RTlVcFNSU0F5bTN2MkdRN0RzVzh3cUNrNHlyWlU4UFBSOXRyQ1F6czBENkFSU1dKSy1mMWhCWmZqanA4dnZLRDc5a1pyaTczdDNlMmNJay0tN2prckVUbzlpMzhSWHB3Ykd3LXRHLXVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 福島県三春町 熊耳二ツ石の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNR0IzNEF6d19mS2puQmVrOE9oWXNKV0pfaFBWOWhzdWxmU1dtSDNNQThmMFpEZ0ZDVjZhdmhobXdlOWlJclFpVmktdzl6ZlJ1d3dWS0RVenhnS3l4VEZrS2JyMlp1azRjdFRwUkFnbVdVZFFSWE9BWDVxaEZ3XzdYYlljZEl3X0RRNGRlRWtNRzEtMGdIbU9ELUdGLXhCMHR1RC1Ua3A4clU3TERKalZyaWpPZDhlT2pQa1NseEZ0MTlrMkFfMjU1dURsVk1WVzlySnhHaFllMmR0b0JUNC1QVG1sTUsyUGduZzJQTmY3ZUF0QdIBogFBVV95cUxQNTJnZ2xvY2lyZUJXLVlEWXRnSUh2R1Vwd0N1UHFyV1F6bkozV1plVUF6VkM0LVN0TkwyRzNkWlpPUm1tVlRpemZFamFIa2hkU3htRU50WE5SNjh4dklLN05EcTFLR2tSeFpwQU5hTE1OZENDUkZOWlNfX1BYU3pYTU5qVFhFczRudHhUeDRiRk8wdFZYOU8yVDV3V0pGVDlpRWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 福島県三春町 熊耳の出没情報",
      "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQY1A5Z25rNnVuSzlmX2swS1JmMnM5eENHQ2gyUTFlMjUtX1NCOFlydW1sNTF0VXg0cmh6aDV6eEt0eksyZVdTVTFaNUF0R1MyalBlM0dEUUFtdVZucXMzLXN0cUswakNCcElKd1Y4elFQRzdCQUo1U3J0Qmx3R3lHUHdLMHh5NUFVSGFaOXRLVkFROXR60gGHAUFVX3lxTE9GaVgxOTlZdlAwZUxWQTZDVDNxVV9ma2N5d09LY3RseWtWODFOWG4ybkh1YlJBSmNQa1dTVXFPckhmdVVQcVpDM0s5NWNQN0xuZVZ4aVAyekh4X2JuVG1KQVFPX1VHempmbjBOR20xa1pBM1hJcWlSaUFNZkJWTUlPX1dWdW9WTQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 福島県福島市 ナシ畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBxLXBzSkN0ZVRraU45Ry1hdGEwVk5UNzk0a0ZLRDdOQW4wVVZOem9RZmc3LVlVUEQwVmNYeE1xb0VManRHdHk4cFQ3T2dIaUc2UE11X0NJVFBVd3puS0I4MHNmaWtlYzUxaUZCXzVGdW5XUVZrQV84Nk96R1FTUlk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 福島県福島市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5LenRHMU9pT0huMWNJQUNIMHFEZjhzSnBjQTkzcm14R0NaS0lrdlVBQU1zTXUtSkxsTGk5OFN3WEVzS3Q0Q0VQLU5ERk82MU5vU3lVNjFGeWFfclZsVk9zNkJTOGlxdGJldGxTUjdaVGVKNV9Zd0dkbVZUby1uZVk?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 福島県南相馬市 小高区の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE84a0h6ZnBtSTdjM0JUbTZ6MTRvVWFVeXZBNmJhdlNFTkRMNko1cV85TVpmMzdaNXlIVjlNNnhoR3E3eHIyMTAzelFCakZjaXBDRk9wd3l0Ynd5TWV4SlZNNU5xYng?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 青森県弘前市 弘前市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNSVU1SG1DS1dYQnpZRjRCU2p4VUV3MU1qYTZGUXZ1TzdFZWcyT0plZ3NTV0hEX0hlUFRGMGRTUFpycHhkNjFiSVRSZ3V6OXltQVk1a2J2S3E3eUN0MFVlN0VNbm02NHE1SFBoaXMzalFvSmF5QnNjU2Zab0J2Q21ZMjFuN0VUWjA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 青森県弘前市 県道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE0xY2lZeFQ4UDgtYVBKS0wwWnlrQy04N3ZqTHpTZldjZ1NiclkzWmNvOWlTbzFDd0s5ZWhRTmhZQnphUGxMemZaYXZBQlY2RnNjbG93RkIzUnExN2ViWHlscUxoSjBTYVlqVzlqWU1UQWRwcXBFR09fT2RRcDYweVU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 青森県弘前市 大森の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNYjJLOFlsaVRtRUZmVkt1TkZJQmlsNl8zaUJMMFk0MDB6MmRZellsSmFCQlFEaS1EYmJUdDFidmVhVm42MmhlM0g4eWk4Z3A1dGpaZC03eHN1dXpRenF1MzhNdnhMbmQ2ZTF3SGdHTzBYMnpZN1kxUFpVUVhvd0JPSEVsY1BCd29TYlR2N3NvVjRuWFNYRTdzUUNmX19Ka3Izc202TGlzbEt0WjDSAaIBQVVfeXFMUFBYRXJLeG0xalV6SHRRcVRwSl9OeFhmdUNMd1E4Y1YzYy15ZUtaNzBMQkdXaS1mQ3pObUxRN1owQ2E1N2hLcndTd3B2S0NRRnRXTjV6dGtGaE1hYnVZMGZZZmUweG16Y0Y3Tm5hYTZoZXpkUXNHWjFzOF9EdHkyRWxnTko5ZVNIdm1aSWJqZWhjQU5lcUJJd2I5OXhmR04zR1NR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 青森県弘前市 薬師堂南熊沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNbFN0anFFcE1Kb1FuZ0U0VldUYWNzOE9qeklSXzMwc01lN3psSXA0QnRSYWtXLUxWRDFWakJ6RndzVWNIN1lmY1hoYk5lVUh3VDRIQzJVVmhWV1FNbllMd3V1NUk1bXc3ejEyWG1zUU1tNFJoakNGMFlRUEFSa0tMbnhlVnBsbThna2ZEeE1xbzR4YllYYzJrWjgwV29qZVF5ZndUa1NNLXp3Z2xDdkR6d205X1gzdTVvb1ZBREUybFo2YlR4MXVLZnBWWE9PYXcyNkN6RnVOb3kxNnJBZDNtcmNRZ1ZxczVWOXJqMmF6eF9QQdIBogFBVV95cUxNNnNLaGRybGdGeHduc2FBUklZX2c3dm10cTA3MHVUdnFOc004QlgxT1Bzdklnc2Nydkd3U3FZanp4TWN5MHBhUTB5aF84NGIxMm1jbXQwWXRwZHlxaDFsSzVFUmxsTTVBLTlZd3VOQlJ4YjFuOG5YbXQ4dHFGQk1yRFN2dVpIRC04cjk5SXdsa2ZHVkxraVkzb2xYeW1BUGt2cVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 青森県八戸市 是川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQRFVWRUlpTjR4S2NndkdDNVRQWWZ0OUhZMFowc2xfVDFDMGhZM1dCd1ZETktIcV82TG84X3JvaTNxMWlNNzlzUE1JbDZyNUJTX2Q1N2wtYkoyMmphaFIzZ0FDMzc0VXBmZDdDeUxoRkw0RUpRRy04ZEI5VXNsV2s2cDAzdTNjNXJWZmhqS0t6dnNjeTI5LVd0UTdiZnRpLVZSbFNXeXNMbTY4RkdneDdn0gGiAUFVX3lxTFB0WmUwSVRTT0RkRWIySFVFWFZrank1UEVvcUlaWWhRSl9jbFRfWG05Z1dSVzRWS0hPUFg5d2VLMjBzbkZJRkgyV1ZkVVpVNTBxWGJONjJyZEtuVGs0dWVzRUNfY0tkLWNHbTU2blFFNEtvNkk3aFFjOThxa1A3VkZ4V1RPMnpmY1B4YkRSdmw4dmVMZzl4S2RIdTg5alUxS0Y5UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 山形県鶴岡市 羽黒町荒川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNNjU4RkxpeFhMdmcxSG83Mk45cGx3b3dqb3dHQ0pXMzRnT0tLWHdxMzNzcEJlNUVvemg5eG0zQV8yMjdkT2dMMnIxTjZOOEg4V1VXNlE1NUZ5Nm5iQUtGQnNCaHFneXB3c19IZE1NbHhHMVl4ejhhR29Jc0tKcU5pNEdjY2FaMWlpVGxZSlVVekNJaDUwQmZvMzdLYWRVLUQ1Qm9rR3RLRXRTUm5HWXlTZWtYOTRSNEhtUXFzeDgtODdfS3FEeFB1eElMNU5aWXlzdmE2NFRRMDJoUkVTQkNyN0otekI2SEhUZ2xVU2J4YUZLQdIBogFBVV95cUxOV2ZacEtRQWJGMENzaHZteldjQUVqcXdyMXV4RDEzd1BCNHAxMmpaWElTc0RwdGpkaDkwRm42RXV2R3AtUVMxa3hza3pzMDU1TjhWeFVRNjRyMnBoeTJFdGxKOEs0ckgyZVlzYlBRcGJ1dHJ6YnpNa3JEcEVCY0JFRlE4SkEzR05PUTBBaW1BSVM5bVl0bG1tQk1WLW8yOXFkYUE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 山形県米沢市 米沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5uM21pXzhYeU1HNk42M0RReWg3N2VRTkxoazd6MDRpbzFFNExPQmU1RlkySWd1ZHJ0ZDdmVkYxb0Q0WW44RVZ2ZENnZGl4aDFfNGtYbWROdVVhajc0ckplVk9haXhjTFV4TmFQamwtbmswbDlSQ2paQTlWX1VzeDQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 山形県川西町 高山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNMmNvM2I3aV9sTjU0UEl1Yld5ajNYTGFOVnlleWdhN3FzakRyVWxjQktGVXMzRHJGd0VIUVZieUZJVkkxOElUVTh4UXJmUk05dzdOVEszSzJqaG9jQ0h0UTd6QU1TWjJRWWNwVkRYb1dFLUJwU09OdEZmalRFei0xVVRwNVFpQ0JWZUVOemFXNzJGZVd2VjlRMFJHcENlbS05YS00MlJSMndFbWFUMG15V2hXQ0MtV1VEQktvM0JlLXdrT0pzT3MxTWdvbU03VmxkSXUwRzZlSFdBUFVwRGVncERzUTJlTUFHR0d1d1l4cHJLd9IBogFBVV95cUxPNVJ4YWJtUU1YanhqbVhIX0lUcW1iN0NVUTh2ZVBrVm9SNDdzX3F1aVVpNi1OanlPY2w2WC1zSUw2TWo2WEVVaFFPSnVrZnBGWXlMVDZzWEhpb04wcklEVlBEbWJvQmRBcW5zSnh0WHoyUmd0aDZIajgwM2ZsNG5OZFQ3cEVaN2NoaE5RMmVfbXVCdDY5ZUVYRmtVT0xnN1c2TkE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 山形県川西町 最上川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBJMmdIVGVuYU5uZUdDclpPeVRpREZEbEl6SWxkeFZiaG1RblNOMGFFWXBZVC1ROFFqWjVBREdycm1oZXBmdnNvUHkzOEhQLVNIV0dRREVCMzRRcUxXUVYzNENwS0JJRGppTmN3SEhHWdIBdEFVX3lxTE55dU4tTXgzcHAtWi1EUUhzbjBZbWxLXzZObTNqaUVYUU96cTBjdG41emhCNTExVmJoT1BNZG5NMFJRQWFiOUpUWHdOWnk5ZFotdHg4b09OUkdwc2gxN1cwLTJJRUdiRkNMWC1RWDJMOWJBRVdN?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 群馬県長野原町 北軽井沢栗平の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSUg1VmFOYXYyQTk1SVRyZ0pFdHB6MzBBODlObjYyTlExRy1RWkU4eTdSYl8tODRhMDJwUFB5OFFxQk1naEM3aDg5OTQ5TGptdWJnblBjM3BsOVZGX0tNZm9GcVpXT19COEZkMG03d3RfNHhQZHRieW8xRzh6ZDRrRWlYbWFwUzFfZU1YUHJFOHNNOGdwdWdJNEFKYV_SAaIBQVVfeXFMUENhYXNVSkdQNnJlR1NTNWtZVTNSN0JHV1BKdWxQeC1jOTFpZlJMU1lDLTJGSXRDZGVzZGUyS0M5STZHa1V6SG1XR2NxdVpGejQtSy1uODM4SlRhZ0ZMZzRTSE40QUUwZEhZVHFmQjdjRHp1SzdyVHdLY09PaS00RkNwOVdDY0Y2NjNXbThBeDRCOXlBRXdENlVEX196Z3ROcVJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 群馬県長野原町 栗平付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 群馬県渋川市 伊香保町伊香保の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWlV5dk11S1ozSjJkaWlhOGZPOGZyRlc5dEtMb09VY2NiNFVpbHdfQW5nWjF2MkN3WnhvcnpFZXR3elFfanVscUt5cUNmaHZXdmVhdjE0RVFKb3YzaGRqOGFxdGdieHVHX29Bc2xKYmlhLWxsc3dXYWR1dHdaNU1YWmVKb2FBUmsyVmVSb3VqSVN0UXdERVRaT3pHRXTSAaIBQVVfeXFMT05LMjNMMFhDRGl4dVRBM2pZRmtDSklBdFZtRnhBVUhCRzY1NzRvMkVZa0NuR3VKTkJteWJ5UndGemx2MjNjVVFTcC1nZXVVNGYxVE1GRzBybzJITXpNMU1kb2hsQVozc3V4TzN4LWpnRmNRUENpeE41NFZlcEhtaERac2VCdU9JQXJWc3QwT3lOZ2M1MDhVWmtwSnBFZFVhbVpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 群馬県下仁田町 中小坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNT2FiSFIxQVozOC1FMjZZOGdVTUttSW9YdW1xeU5KVTVVMG5FdGo0OVVxNWN4Y2tCNWNxYW42SjhpQWh1RUNZQm5DNG5Tenp5VU1xUXdrbGpWUjctQlJRcktJZEZLZ2p3R1libXIydHlWS3Zvb200SUFZeVRpdjBQeTZPcFR2UzdVS2IxUFVRT3Y2S0xXLU5rMXYwczLSAaIBQVVfeXFMTmtHdVhpcVJlNkxkUWxTNEdpWi1mSS1GanZudGZldks1bDA0YlI3Sll2TEtuckNLNGEtQnlwWjdzd0tPUS14RmQzaUpqTmlGQ203VHFmZTdzNGtnc0hUYnhMVmdWQ3hIMHptd09KakM2b2stbFNocDlwY1k0OFdqamtpbkNDdFNHSzhYSnZNZ1ZKLXJ3Q0lSVDgzbTJyWFBlYTN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 群馬県下仁田町 下仁田町大字中小坂地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 栃木県那須塩原市 木綿畑の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPaml5Z3FIVnFiXzMyY1pEOHJpc1VsZzdLUWFIOFFNRExCQmtfcFJfdmhqSjQwU3RZRENMbm94UnExa1lnMS0zcXR0ZUphal9vSEplZWpfbmhyNzhLRm9FSUlvM0lKT0J0NlFnRjlvUjk4TW9JVGxrelBWR2sxV0hMTXFXZHdpcXo1QXc4SXhHR2ZDMF9VZ2N2eldXYUXSAaIBQVVfeXFMTVYtOC1xUXVpREVaMk1RNndtWWN5N290T2F2c3kyQXdxdUNzT1ZIbl9DalZNaW0tNU9BYlZ1NnYtU2tzcGVibXhHY0RSeTZyTFVxWnNaSG5ROTdhekQ3UmpfTVBWclhzZkZkRmNic3UzMkRfNjBheVFFYzVRbHB4Vlptc0JBY25FV2RoSjlxZjdndS1IamVhaU9HMW94bVVpNC1B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 栃木県那須塩原市 那須塩原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1LUHp6NXViblBYbjk4ejRFampiUzlGVDVNdS1KbzN1djZsWFNDWDFRdmVySlRjWHFfMzhuM210bmtoM1lOZ1pPMEdsOA?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 栃木県那須町 湯本の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQQk96Z2hMRzFlS2UtQVgyNFFkQVhVSmRSWHdwbHR1ckVKUHVLMDVwb3R1aXJadEFHb0NjSDN1dFdub05vamZiOVNRVl82bTlNeDJiTVd5RTJ4alY5cjBLeWVtZlZCNUQ4S25ZSllnNDRna3Fvbi1Wa1R5T3U5NW9HVkhRRnRwYXBhY3YwTFV2Q21RdE51OTB6eUU5RzBZckxXWHBBLWVEVXl6Z3VMcmVQN2FnZ1QtVXBOUDJLcHhuWGJQdTd6cDlzeTduaVhBMHBLMlJsazBjUTBCTXo0QV9TNHJ0a1AzaTlxaURmNXpDMjNIZ9IBogFBVV95cUxPSEp0Rl9mWWRmZk1CNDBMYlZmTFAyZ19uOXZhaXpBaXpOU1RCYU42WmJjcEpxOC1GTjU5Y19IQ0NqM2JheXd5TGl4RVdHRlRTbW5ZdUxsRXFzdzc5TVJaMzJFdDlaZUd2S1J5QW9qU1JGR0JVUE96M2NHYTJxTm5jZDRWOUNWWG5yblhSQ1BCYVY2a0xCcUd6eWVXQlI3NGRkb0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 栃木県鹿沼市 上粕尾の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPejA4TllBSkNneGlvdFd5b1YxeTVTZW85WUZlMzgtazlJRXFCTzNNVWhBZ2s1VDlRTEw3bVg3ZG9iV0FXOEViSEVUd3JFTWllSlBicUZDUlNKRDdkWnBidWZ4aklTOHZCSVZGWjVyR2YzTElBSnozTFJPRDNtWFBkSl9zcEJmeE8wVmpZemRKWWFWTkNHM0l6LU04bHY4d0VnbkU1ZnRNYzJJQzB4RTdBU2E5ZUdJNnJ1NmFpNWhrMF9PTWlvQUhPLXkzTXItZnk5RDc5dmx3YW1jeVNYbmJ3UktkNUhjbVNmWU1MTFdGZkRsUdIBogFBVV95cUxNVnRpUjdfZHlXb2JfdWwxQnJLTTE4X29MQVcwNWJ1aV9mLVlxSGRNSnZHZFB3MF9QRE9Pb3VYQXUyMU50UTl0NWxHMUpLUGlXRUJwbVZiZUI0ZnFKZnJGMUNwcV91QnFvYkV6UGFweTRDTzJoWGwzUVluSEo2cjc2RUFfYldRWWxIaFZEck1iN0kwXy1WY0cwalVaTkNNZTVLMVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 栃木県足利市 松田町・藤坂峠の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBPZjlPOE12QllUYi1PSHYyUVpwOEtpNHRwQXRsbERUdDI3SlJVX2Y3aEF3dHBxa1NKbW16Ul9DVzk3cE01MUxJbnFEaFMwUFREZjU1dUhORndQU19kSTI0aWNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 埼玉県小鹿野町 小鹿野町両神薄出原出原バス停北東１００ｍの出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 長野県松本市 蟻ケ崎の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNRzE2WWdieUNhTmdtTUxWZ0RWQlR6NVc3cG14QWFKQ0tOZVEtVHZQT005VVNvZW4zWmFINzZsN1NSM2Y5OGFUX1ctV1FhRDZpUnFPeFA1WGlVWVIyUVZwNGJ2WTlNU09KOG9IaTJSQlJkSDFmaVpqcUl0MVJTdGtNWnA0MWEzc09CTXNvaGtBb1RuRWlkNjBjb3JfSXVQRmZLdHBFeTRIb2tZczd2bHBZZzdNWUV5NmdZa2x5ZFZsbW9EcUR4Wk1OSHJfY09fSGFiUE1BRkk3RU9lOGYzWGFYUEttWEJsYkxCbEFORVM2QWFVd9IBogFBVV95cUxPUjJka1R3MnVxcmpnZkE5U09SWEl4Mm1WZGtKT3F6ckFEdGo4TlVLS29KY3BnWC02N2VpY19sanNlZUxsSnhMTF9xWEVqckFBanQwVk83ZUpKRVNNOWNZZzhZQmRJNXdyUlJ2Zk9qd255bnRaS2t3QUhNZXZUUnVWaWV3QVNndlVTMlFoWFl1SHNWbk90dWdNMWF6U1l6bHpQRVE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 長野県大町市 大町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPV1daaGVoWkFiYUZnOVB1UlY1OXZOTUVmZUVHRTgwaFlGaF92UFFtbDI3dU1MdENCeVdkMC1CQm9VMFpjN0JTNEFPVzUwMVdEQnFJR0tvWlMzekRmYmVEM3RvbjhyVUo4aGxiaHVPYmdWV01MeVJ6dDRlSzdyVUloWWlZZF9ZWG11Qy13dDlsX1IyVDdLejJqZnlnQ1JibEhvOWxTSVVVQWdzY2ZTNWpWTzVFN0JvZUFGOExLTDFGR3V3eHhTaERreTEydEJIMXJPb2tGZ0tscnVKdjQ2UzMxQXZWTXVkYmcydjRMdDFIU0tNQdIBogFBVV95cUxNRG4xVkM3VmgzV3VLaW0xNGhvZnBpSXlmSkg2bGdlVFBfdnB2M3BRdVNrQ1J6eXZRRk5HWGNMMW9PQ25KZFlkT0IwSU4tdFc0dUxTSVJpRlJ0ckc3WDdrWFBHREFnODZNQUNUR3VCU01hYVhieE1QajFadnBDQnE3MzBvSWVjOUlsRXVMSm9sS0paZk9SVUxqbTNMbnBMR3hyTGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 長野県木曽町 三岳の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNT19yMG5HampzUFN0ZzZ6Q2NjS29wVUp2MlNtR2JGV3habEVFVk85M1AydjBMU1NnUXpXRTlnUXpxV3dHNy1MMGhOYktVRDJ2MzVyRmtFeC1ZaXpaekNvNUNGeG5tRC11ZHprUFBoY1pMOUtSb3J6VW9Cel83VDhsbEZyTE0xa1BUZlpYT1Rac3M0ck1VMGNZR1JkaHjSAaIBQVVfeXFMT3A4cVZuSnVRTW5UQ2ZoQVgzUXBqVHhKcE5lb3hsdkxtazNPMzJoQVZmWWxSLVNUU1dhOUtzZmtTYTRIbG05LWlia2ZvTkFLRXdoM1pvQ3hmMnYwckQzSkk1RDhLZWdfZXF3VnExVFJpejFkUzNOS1lNZUxtSGdKTlJZczNoZ3o4N1VyVS1PUFFoRkpBeFlGeC1CN3FkQkd3OVNB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 長野県飯田市 正永町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPY0UzMElvZzB5WjVuN0E2UlFBaV9hMzdyQW9saU1fZm5SWmx0QnU3SWVnU3VRLWpLTXczUkJnUUZmWi1mRmxUT3ozRWE3UTBlb3lyNU5QQVFPRnRGOWUtQTU0MnhuZG53QkRjaGluUkE1bzU4TG5WYzJ6X25EYWhFZklZemhxX2tGT0NKSmItWkwtbFpuazZkMHdVeXLSAaIBQVVfeXFMTW8tS1JualU1UVJ4UzZlbWNIczFwVUpKTGYzSDN2SVZtLTBRSnptcjhweWZ2cEJjNS1ISW15blpfY0V1SUQyekVVbHJHQ1dIbjhUeGRUdC1rSG1DSXZiNWVuMDVGS21wanpobWVobGtkVXJHTWJDa0k3UDh2ZGxKdmh4QW56RmFiQjNkZkk1RUdZOUZkZTlCSlVRWHNHczg3aURR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 長野県軽井沢町 軽井沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSWJrbEstMHFzazB5N055a1gzUUNodk1pV09QbENXNVlXYWR0UXRyT2x1emE5WWp1aTZxd2lHLU9adE9aS2xpeUpYb1p1VkZUQzB3RkZ2ZzNrdWl5bVF5Yk1jdnVkRzJjNTdianlybm1DTUZrdnR4Mmk5WWxFcXluWE5VOXdLdTBfZUxJVVZHNHFtdFBlaDZ2eTRrc1_SAaIBQVVfeXFMUFpjb29QV3NRb0FjblBfX2pFSFJwN3NLa1lrTWRReXpSWG9lMjExX0xzSzhZMjFKeTctamw1NXpmS0lyd0RuSjhHMjFNWUw3d1JBMnRaMlJSdGk5YUp5dlhDOHFjZ0lIdzFNRldFWTFua2MtSG9ESHh6OVQwYXFBZ1d5eDlQZXFlaGxHVXBlTThhbmtPOTgwalg2WTRPakUwN0t3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 新潟県妙高市 宿泊施設付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBaTy1mVUwtMGNmdmZXSThGanh4dzNGXy1nd2pRRnNNVFlNTFBxQVV3aHNNT3VxQXVDTXZYOHB4X25MTHp5?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 新潟県妙高市 新赤倉温泉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNYmVCZUo0ZFVXMElDWVJnVUJOZm9NNjhpSGlqYnVHT1ZYRm0zUXdGeWRfTVN6WEhYQUFyRjNJdzM1TnpHNEVIWXRWeEZ1X1hBblpWQ3hmRks1YWhhNTh3MjBiMExrd3E4RUs0RFFGQUV4YjhkQ0RkUHhsLW5hc2taeHQwVjRqSkx5X000VzhaNkhoWUxManNDLU9pbTnSAaIBQVVfeXFMT2FDWllqTmtzZ3BnY1NTM3UxeEh1VGEyeXlHNkZhQl9nWWk1SV9SdGdnaktwRGNMSzNyMWV1NHp2OXNLdVdVTlRCR1doMFRrcWxhaGJINUxxR0h5NHFtMURBWFI1Z3ExcE9iZlh2QWtkbEN1aW1lOVVjRXN3OEhITEJna1NmeW1FOThDUlU2OUcwOWdnZjZzajNlOWtZdU9tNE9R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 新潟県妙高市 妙高市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBCWi1vU3RIbENncHhlakk4YXJnVFg2YUp5VzlOZmdaQ29mSU41b183VEI0OFNkVmRjUW1oaFA3M2dlMjAxZ1o3TEVCUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 新潟県津南町 上郷宮野原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSUNrSlJKYTJTb2pOTkxnTkltWFplY2tMRkJMMkR5U1ZFVDB1emZPUndKazhadi1pTnliam5pRWV4Mk15M0ZBVE02Ul9QNjhwb0VKZWYtVkRhaTc1ZXFEbDF1bmluWktoOUJEcXZtNnE0ODNGZGlOdENFcTMtb1hGVGRBYXAtNVhJTWtiWUtsSEh0V181Q3RzdFYyVUppNEhqYl9wT1pKWDNBWl9wOV9yVTFqM184TUp5SWlCRlBmcENMTDh4YzZuLVh0aWlmekNvdl9RVHdDbFUyd01YNEFKNi1KSVQ1c09KaDlOQlI1RHVLQdIBogFBVV95cUxQUGdQb05nSkU4N2hOTURVMkt3LWNtbWplOEw3MTRzTEVsaTNrMHFpdjY2ZnNQSG5ZLUhfZzZCRnNNR2djLTR1QlNCRnFadlVZd1E3MkE3bENBQW5ZaHBSYXdxR0QwaVZRaGNHUUR5dXRLaFhwcldUUEJaOWo3RWl2NkM4aWVsaHlQTUlqWXNUWFN2LWFzT2lQYXMwb3A5VTI2YWc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 新潟県湯沢町 湯沢町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBCWi1vU3RIbENncHhlakk4YXJnVFg2YUp5VzlOZmdaQ29mSU41b183VEI0OFNkVmRjUW1oaFA3M2dlMjAxZ1o3TEVCUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 石川県白山市 平加町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNLVZTN05zckxRV3oyQWRHOXowbWtiVnBEOExyOW4yb1ZBT3ptSTZjVEhaZ2c0R1pmdFF4dFpaNXpqVWt3UVI1VTJGN3dDTUZSckRyY2VDVkt0ZjMxZktTRGh3NzFMUjVzRjcxV2tfUXVla3dmenEzYlFWdEdwM1h1U0p2YTc2dTNndlhjSVYxOUgwM3lrbkgtRVl6dmXSAaIBQVVfeXFMTkd2VlAzSE9MQm5LWS1Xc2xQM0w4Z2pLb3NQTFpHTS0tNUhWcGdPOC15YUhXVk92dDJMQ2VIbHZnNUpfVjJfRnM0YW8yNkZON1RVbWZnNlBSU2JHNkJnVDBxUnNEaUUwNnVqSGIzTmtkbHlYSlZPcEtOeTBsN1FvRWQ0NUlJQkI4RlI1WUtOajAzVDFrTWp6NWVEbjRESDkta1NB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 石川県白山市 美川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBqN2txLVRldF9KajJrS0ZYVVRHUVhSZ1RVVENHdEhhR0dXRXg1d3pwZEVRSmZTWEtRWVVTSHlwcFExQi1hU1Z2U3JhVUdndXNpbkFGWHZmVQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 石川県能美市 緑が丘地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 富山県南砺市 利賀村高沼の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVElIZWV0YjRkcUdKQUFKUk05UzdYdVZ0R3JJSW1xWlNBWURqV0xlU1NmMUtGRUFFN2FFSVN3a0dPbXVxRnE4X3c4VGpka0Z3RFZfdzdMRUdGYjR4YTg4M09fcGVzV1pIREVhUVpCdFBpVlR5OVlLVHlnM1E3OFgwX200ODE5YURxSDk0UnNKbE1FR1FIeERmNHJQNEnSAaIBQVVfeXFMTVNndnRtS3FBSDBRMDEyRG80VHlLWVBfbEc0Sk16N0FCVko2OG92NFZwbko1eWl1YTBJUE1rOWdDS0VMbmFqQlVLUTg1cGdjNjQ1TDRsLUgwdnd1eUZERjVXb09YaWJRVFgtZzQxUGt1QjFtTjRHRmo0cWpMWFpfN3BDWkF6WUpPNHdlTjRQbFZScElDMFNEN3ZadEVENjk5MjdR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 福井県越前市 土山町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOdm8xekJvUEhKSy1qa2RLelpOT0NhZTdOTnV0Nm1ha1k3eU51T0ZkSU1ETlZVeU1TTGJGYTRfREpXOWpJOWRERUVzWVhueEhBSDRaUmREM1RTc0Q5VkdaQUgtbGI4TFQyV19KZDhWQlZFc05reDJOV2dNOVQxWjdQSjdrQjNMbUFqblJucWk5aUIxT1FPV084WDBla256TjI2c19HRmE3eTUwOHFwQjdSWkFXSGZQTDlhMi1wOEdsMFQ1RGRKZzZINHhoX0g0RUpOMjdLSTBsYUZhcGs1djhMVlY4d1pBWlFaVnI5TXFmd21aZ9IBogFBVV95cUxOUExpZ0FjTHg3Ymc0SFI3U0ttN3Y5SzJSbVZNbk1adkYxb2k5TXNfcTlsbWNQWEJ6MUtXX0t6aHhiRFpTRDJuem82LVprVHZweVpkYmtsSEt6b0k4Y0MwUnY4T0Z4ZkFUUkU1bGdYTG1xNnhtSXRkQWdhZVJvbmF5NDhHZjQ3OFE2QjRmS3VBZkNkOVNIU0hBNlF1VkIzQXgzMGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 福井県南越前町 河内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNVUFKMndhdFNrU2tyaEdfN1JMUndEcElJOTJ0ZVRmUFg2WnBaS0h3VUlyNkVBdnNVd2dnblFnWGE2RVlheTNoc3J1NklCeHJJX24zOHBSdVR0VkJ1UWhqWkVKZUNSYjlLaFFRb1hMUTNaNElCSGVEYkVFVTY5Q2VZR245eEs4Q1g4bG8xbDNYRGZNS3gza2RYeFBPOURDUXNKTzF3WG43aVdiYVZWcGxuMzJHYkFWWDdvT1YzZl84M2M3blplbm5SY3hsUU1rTTVWMFFQemZySE5uVFF5eEN4cDloM3VpOFhHOElvUTM2Mi13UdIBogFBVV95cUxQRTdGOVBnTGxlbm5BMlF0VzJ3dS1zVGduZFpoVGdDdDlPak1ramM3RFk4dE41YzI4ZzFBbHBHN29KYmIxemEySUZvR3NFMThYaVF6cHdmR09QcEducWdiazM5bTVWSlBHLWNjaklpaVFMa1hrajBIRk84bmUyRTBFTkFnRUtkR2xDSU5CMUJJU1Z1d0NqUlVQNzNYdzBKX0ZqX0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 岐阜県揖斐川町 白樫の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPWFlEMFdGSmtBSWduX1pPLUx3aEpiZ3FrSnZKS2tPbUh2YWxRUVg0QWRranhHdURuMlBhUzdqTm52Zy0zUmh3eElJNkt3dm1IWGdLMVBZZ0hqNEQzLVFkb3NHbXJWVkVFQ3lJZzBuX0U2Q3p6WUhYMjBfQnFHenJJWXZiMUstMW5FNXBaWmEwMUJhTnhCYXVmcVh6b3XSAaIBQVVfeXFMTlVWeWFOZTJUVUFsQlQ3cG1BVkdKajdxUVdDOC1VZ1BleVNKZFBzdnI0N1JXQ2JWYkRyQ0psWlVtaWZ3WXd6bTB5NFZwVFN1cVkwVnRWQ3R3QmRSc2h6bnBlTG16R0VXc1prQmhsUjJoZFp0QThhRk1HS29TTmpwTHVBNGYtR0w0Tm9xQjAwNm1VaXNRdDc3c2g3QnBYMnhOS0Vn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 岐阜県恵那市の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 岐阜県恵那市 岩村町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 岐阜県飛騨市 神岡町の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 静岡県富士宮市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE5ZM3JEUzhabHRhUXlBcDVOelN0emZUbmNxWWk3ZV9GdlhiT0lxOG1FV0JQNzJaQ2RwZ0ZmTmRBb2h4X3UtM1hiY1JQcTFvcmJHMW1WZmZfYw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 静岡県富士宮市 富士宮市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5rWlRBV0NnOXVYZl9qbHZkbjRrME5LaXV0eS1uYTBEWWY1Wmt0WkNIdXh3NkdVVVJoS0lFV1hXT1d1LUt6SDgwcWNJQkNjeWhtSzkzUHJFWlU5OGlEM0x4Rw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 静岡県富士宮市 上稲子の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTVlfcWZ1LW9wS1Q2TXpQcDJVZnhoTE1HR0NlVXJmc3VmQlFrLVJ3THFrQjNUNDRYai1KTTJEMW83TXBkSDdXRVFBcm5TUWRaeXg2VWNmMnhPYlhQR3VxMW9pRTV6WXZPZDNZZU5wZHRaMU9UU1ZyN3M5NndOeEQ0VV9zbU9kRkhoMXNUWkRJNWwyal8tUVVqV0dDZTTSAaIBQVVfeXFMT3FjZzdhMG9FODlDVTZsUE1QME52elY2MGl2QW1PRU9QUE0wRDJKSkJVZWRkVGdKSjEwbGJPUHlidjdPWnBXdU5RZ3VUMV8wQmxPaXdiaDkzTDZSSnFLWGkxSUxqRlc0c0RrODdJV09SV3Y1M1NJWTJ6OWRLWEVZRkN3OXFFUDczX201Y3dsYi1FanZDVElCb19PR3NqVl9pOW5B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 愛知県東栄町 振草下粟代日向の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPS1kwUkF4QUJSbzV0MEN4TmVLeGdWTEl3cExUNXNsaWZUQnJoY2QxZ1RFN0tEUlEwV2ZsZzJXczR1NmhQUXgtQTYwOFV3OW0xRkZfMlg2V0IyRmFfX0ozam1XTzkwYTl6dVFRa2xfS0loLTNhZnh4bXFRanBGVHBad2hYakFYYXgxVGhyMGV3X3RrVzJpQ00xblhtMmbSAaIBQVVfeXFMUDlzWTV5d2daNmIzR3hteWJVWVNqU0NrQTVyNlpUTzJ0RkRJeUFpcVpoakZmNkYyRWNYV3lHYTJXNzRQWC12LVRlcE4zT19KR2dKUjdlV1NHWlJaYmdjMjNpbFZ5WmI2WTlyTWh5YkVHaHc0Q0hqSW1HTXcyM1lpZ1hEMG9NUDVFUEphTjYxNDhhemZYWWlaTWNDcHB0anp4cWNR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 京都府京都市 右京区京北矢代中町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxObmZHaW9BR01YVkdxcUEwRF90SG5Yd01xa21mQ1hGX21BX0dTYkJWb0w1Qm1oeWdreW9pTmpZVEhaLWNoQnVHenpQSHZHQ0dTeW9uWG1XSnFJLWlwelRLQnFlZ3h2M1pIVlVsb0szUXlEUjY3Y1lHMTNSY1VQUjJXZWptNTJ3RHhBM3hyd25KWDVYMmpZUTJtWTFVeExNc2ZleG5GV1Z6X0UxeG5kMXJFMUhhY1BlMlk1RFhrSk56LXZFVllETEJJNEM5bTdQRGRqWTZKam9sbTE2M2NORjFBWktGb19pRC1wZUgyR1VhNS1KQdIBogFBVV95cUxNcm5NaHRKWFNPcDZHUURma25ZUFcxM1ZacjA0TDN0blgwYTJPR3pIZ3MyemtZVkdva0YwMkYybnNuVzFsTWhuc2RlcVhXNjhpTzQ4cnlSaGNybHc3a3hZeEc3c0FBN2ptZnQta3hCdmtaZ09OVEFiV0xDdFV0dlNrSzZWMTJySGxOVlNUaHl0TjVBckd1STI2YmgyNktENmY5V3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 京都府綾部市 西原町鷲垣の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNN1FBNW9OU2UyT29nbW5pSS1ub05ZUlpyU0JuNEd2aUtpdXR3NGVIUWJwVVh0b3huLS1QT002S3pPbS04YkozVFZRSWVYNzltMEo3ZHZzN3JuSVZSaWhXbW9zVFQ4OFMxZmJZYk90VVJFNXBmQkdwdVZtaU92R0o1U2dlOE1abTViMmlLNUhsNUpraVJFWHhQUUdpWEpJbUNjLUHSAaIBQVVfeXFMTTdRQTVvTlNlMk9vZ21uaUktbm9OWVJaclNCbjRHdmlLaXV0dzRlSFFicFVYdG94bi0tUE9NNkt6T20tOGJKM1RWUUllWDc5bTBKN2R2czdybklWUmloV21vc1RUODhTMWZiWWJPdFVSRTVwZkJHcHVWbWlPdkdKNVNnZThNWm01YjJpSzVIbDVKa2lSRVh4UFFHaVhKSW1DYy1B?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 京都府舞鶴市 吉田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVmREZXdMWGVfMS1QSW9La1N6UzBJSWhQaDgydXRSNU5HWWo1SEx5YVk0a3U4ZkJqVHV1YTN3czN1aTJ2dS1MQ1JoLUJtYnNuVmdrT3ZKRjdaTUxTWjFCRDN2ZU5TOFJsQVpvTWcxRElvelBSZklRODV1Wkd4ZTRoNVROOFNVWTVNSkNzVVVrWlZhUmhQVW9yMmZ4RDPSAaIBQVVfeXFMUDFIOXB4Rkp0RWxPVXlkZC03NmNlSDE1VlRDMVZ0Rk53SEZSek9icnpjSjB1NTN2WlphNGJNVTNHaEFBcDFfTjRlT29DbEVCMGN5N2puR09GQWMzekpRaU1LZGlHTnN4bGFxSTZ2S3U3TV9ndTN5ejRocExvUzI4N2NsM3RhZmVLRHppbkpnREFOSHRtQ3VFVVFjUEFuQ3JHSzdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 京都府京丹後市 丹後町袖志の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdEJfaXp5OWVRbmF5dy12dTJoLU5qNzlBUEk0LUdFMUs2UFpkOWtsbW9iUnNtX2NpenlaQnlaUGpZSFQzR2lPMmFmS1c5UFBvaWZpekRWbTRBa001T2VOMW52ejhYRFA0TGExZEg5cGlCWGdIbDlGQ1oxS0JZbzhncXFMRU5ndDBaSm9KQkUzejFOU2FTanBhOGtfdDXSAaIBQVVfeXFMUEVFMlgwZ3VuVjM3czdCMjVLSGxKcm83RXltOVF1bUdyeEw2bmM1Z3RtWm5wVVFJekh5NkhsMUtvRUhZZGczcTdXQ2trTTBaZENNVTlZUm5DLTI4aENNNEx2d0ZjZVBId1pjNVNHYUh3UTNrSDZpU0p1WUFMZkc0SlFTdm1FdjNHT0RVNDZOOUpEUm96YXAwU0VvUmVaQWNhYlBB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 京都府京丹後市 久美浜町栃谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOVGhReEdFMzM5SGYtV0pUSjE2bTZTX1EyYk53am0tZ0dFc2I1NGlDcklQUXBzbXExWUdIV3FRWlZjLXlSbUNWRTUzZEpCVVZhNmJGeVBRdEZQWklxMjFNMEdBRGFqNXB4RTJYWjB1NjRwbS1ISmVaZ0h5cWlKZWphNFZiRHVsRk1ZMm9NbTJJa1Fla2JCZHpvSHZUaHnSAaIBQVVfeXFMTXRYVy1jRWVMaUloTVgweW5vb0VzYUJhQUptY0FYQ3hvOVdZcHEtc1FQVURYUnpaZ2lPYkdBcnBVZF91YktCcHo4a2tTa3RXRU1OeldEVGs3ZVZYVWJtdHF5SEJwTG84cUh4ZHRMcU9zOFBiVGo5TjRDMW05RFp0THpINGtOUFZvZ1FlR2JSTEV3SUdIeUxMd2sxaUFOV3BhMVRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 兵庫県宍粟市 山崎町高下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVktvazBMbjRWQTNXVmE2ckpTMkJmMkVXdmp1eXowcDEzc2w5LWJZWktWRlozQmVpLVlfc2x3ejJxRzlrekdBeF9YUjdkTDdybElncG5XS2Y5dU03SF83QnFLRTlvRGx2Nll6UWc2OGk1RmMtZnJrODlLWVUtNVg5Z0RtTXlNUDVYVFYtMndCNENQb09xQlBtLXRJeWfSAaIBQVVfeXFMT3gyZkNNQW1oYXBVd0tiSlNfVmNJS1BVR0pVZEdBSjJFNWNpemFsbFRiS3lDVzJqLTM3aWdEOVZGMmd4aFpwTFB1YlROLTY1bFo4eGlGYnRTRkV4US11cHJLcm1GNkRBbTROY25jd1d6LVRqWlo0amxjcXhlUVlhWGE4MEFyZ2FkVVVpWTZqaXZIbjBvMndlSjBaQk5ta0dqZnF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 兵庫県香美町 香住区香住の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNczZvckZvUVJmQ1lEa0IxeXFKMm1ReTR4LUpETXRHU2lIZW5vUHBsWFBtM0o4RTBsdXlqYmRwZ3lKZmN1UXB5TWZWSjBxYVR2V0JyYUFINWNLYzhvUk9kYWpJYWV3bjB3NFYzaUx2THQzazZqY20tZ19GdEpWakZsNHB5VlZXUzA1WmMycWdRQ2MtRWVOd0xSV2I2TWrSAaIBQVVfeXFMTXdyWXlvV01JT0F4SDdfMG50TUF1RjVYU1l1WUdMTzZUbENvaHQ0aUdpM0FOM3FlcWRWdUtUMXE3bHgtQXd4QTBKNWtNdWtVYk5TVk9ld2Y2eGlaZzZZZW9aTjVIRFlGU0hfNE4tNjZEaGY0bXhUTmttMmtybUxoUF90b0J1VzZzcVctdERFaGdhQkFHWExtWFY0NEhfWkZPVWlB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 兵庫県新温泉町 細田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOY0hTNDZIM0V3WVJ0SmJRbjJ6dUowNk5TZS1nSlFLcnNSY3MyR0VOV3JBNW9SMTRpeHFVMnhTU1ZaMjdDNjROYnhOYjJSdHhod3JGR2J5ZFJrZHBqeFl5alVIRlR6VWYtQUxPdUxURzYwdnJuTGVDeWViZGg5NWMxRmNUSUw1WFJfRlFlQ20wdEYzbDJlODNJMzg4bHnSAaIBQVVfeXFMTnVxRlF1b1pxQngwQlJzUWZ3V1UwY28xZDN1ejZmWnR6Y05FT2NZNzRBeHZyX1JMMEt3OWZWMEZRQVlUQVZENEFpR0tKM0hPQmFhVVJub3NqekMzSVo3TG13dzI0X2RFaVhESmt1RnZLb0NBWFhPVGR3YUlPSDI0OXBWbnBjOFB5MlN3UFNva2E0RnR6Y3haSXZrYnZqbFpTejBB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 滋賀県高島市 新旭町饗庭の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeVBtRFVYYVl2VEpBbk5kek5HVFlUdlp3eUhyZnJWUU4yb1FSTW5RVXl2dXZnOGdZc1J1NldBUGZVWm5fNmlUczFldjh5MWt5blB4Q2pvZ0dueWZrM3A0T3AtVmVqVmFpYldNOU9tUmNrNjFVZUxJalo3eW9wWVFVeTIyU3NNcDNuNHZQR1JKMWpJSzBoMGpNUWFRUC3SAaIBQVVfeXFMUDBrZ1NwZ3FkMnRwWUpTbU9WZnJPSm5mNm5rOW1BMXFtN2laZ0VsMVVnQlVsU2JPaDN3SjBwZThiaXBRaEwzeVhOSlhJcjQ4aEpZVzVzOEhUU0FfNHRyVzhNbW5QNjJuUXNMUnRTdUw5UHJHcUM5SjRhRTBPQTFGOVBMSFFTaE56dVFJd3NZWVNGUF9DNS1YN2ZQNG1YT1dESXlR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 和歌山県広川町 西広の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQ2Q2VGE0SzkwNXpGazFzWmVKaUJPdTZmOGRnbk93T3VYbWFpNXBXTlhsaGs1VHFzNFg3Y1RjOUZ5SHJ0eDBlSzloVHlnYXBHRlZiSTlDZDZhYncxNTRnekpqQ210VXRWY3RVRWoyelVJWW5CR2MzUk1SdDh0ZXVkM1RhOVNfaEY1QmFxT1pSalFWbVBydmtZbno5VGLSAaIBQVVfeXFMTS1BeEtQTnowWmlwaGNuU3VsNUwwdkw3QWN2aGVWd2ZOaU9zMTA1ZWZkaWNuVUlVMjNXQXJsUmFaaGZKb09LeWtsc1VMYWZEV0xmSTRzdklYT2xhdlhkNXBMTXc4a1NlbW9EOGF4V196M2hseWRHVWJhb2JtRVZPeHV4dUFsNXBsZklBcnFOTXZTeWxNaDJpMnpXajB3LU8zTFZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 島根県浜田市 金城町久佐の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNOWxkd0VVbFdUV0JTQ1FPc29MNmpUOGVFU1YwU2g2R0hXU21KRmRyOXVOLVAwS2VXZGNaelJ6M2lXZjRuQ1pkRW1GMVNfSUVIQWIzOW1YNXZQRVlXZ2V1cnZZd29LbzYyYzg5Tk1JRG1fSTM1b1MzU0xOOVpxU3BacWRDalV2UzgtQlBmR21rSDBOeVJsRUNDcXVMTmtuRWFiUDM5NmMyRG40SnJxOVJWMXBSdTJBWkdUTEhaZDBZWWJqU1N1bG56c2tfbGdoTEhDbkZaVmlnWjNaV0V5SjlzTXBERnU0U2NhTENwOU40U3ZpUdIBogFBVV95cUxNUGxnV3hYSnhkaHpPRXFUeFVZWVlTLU5obmhBMXJQSzFWSDVZclhVZDI3Y0N5aHpOaDAtQ2FvcHdjTUUzaEFRTVAxdmFmbjFhaWkzNmdEOWk3bjI5bjZ0bExqT2pSMFd3ZGNIUTVSYzh3QXFEUV9kS2RyU2Q5SXZqWmRGQjRURGlDNGxBUUgtNFZDLUlsWTlRZ2pydFlFQ1FDOFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 島根県浜田市 旭町今市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQazVseVptRW5FSG4tYkhOS0VPN1BRM0lfTXYzLUgtOVlLT3JOV2tqeE1nNFU1S1kyWU9NZ295bUt2TkswaTZhbmdGOXpzNElEZVFnakVXYWpQZ2Jhd0pYZFlncTdPUUxkNkdJNWRlbmxqSm41c1E4bHBlcVpkdzNMUzZOZW41ekQ0WEJXUHlrOGVJZnp4QWtoTm5wUFnSAaIBQVVfeXFMUDJOb0Z2Y2lseW9uaGloNFZCa1Zjd1NjUVJ0M09JY1JTc1laRUVHOEp4OXhNY1VpVUU1ajdBUzBYYmlZNkdJVlJ6bFhOQlhEaExuZlgzNlZjOFltVkRlWUE5aGRWanF5T2tRb1ZnMnJfSllqSUhwdlRCOVNScVViTDEzVXByc2g0ekhlamVwdDNZSGFsWmdEX0ZPOEdLM2lrb2pB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 島根県浜田市 道路・山林の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOWFQwVDF3RkxIRnVFVUlkbUtHUU1VRUFnRl96MFJLVHBGMnRxd3cweFZ1b2ZPaGtSV3lRNjJ2VFFmUGZxaEVKNkl6UVZGTXhpcUNPckZ6cGxIc3QwOXdmQlAxa2tqYTNYQTZhd0lGTXhWTkx0aG9zM3NyUzE0dF9HaXR1dEFpZVlm0gGIAUFVX3lxTE5YVDBUMXdGTEhGdUVVSWRtS0dRTVVFQWdGX3owUktUcEYydHF3dzB4VnVvZk9oa1JXeVE2MnZUUWZQZnFoRUo2SXpRVkZNeGlxQ09yRnpwbEhzdDA5d2ZCUDFra2phM1hBNmF3SUZNeFZOTHRob3Mzc3JTMTR0X0dpdHV0QWllWWY?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 島根県浜田市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOTEpUMHk1N3E4UTkzdUhLSFdJSFByelY2YmRqbEN2RnBYTGlCRFZlZTJ3dldIdEJQM1U0d0dVZmcwdkZsaHA0VmpFamduYWFIOXNCb1YzMzVIUkMxRUhuMGhsdkxOekhXdk9YMW1GN0loSnVaakIyYmp0cXgyWVVfY19JUWJjSGMy0gGIAUFVX3lxTE5MSlQweTU3cThROTN1SEtIV0lIUHJ6VjZiZGpsQ3ZGcFhMaUJEVmVlMnd2V0h0QlAzVTR3R1VmZzB2RmxocDRWakVqZ25hYUg5c0JvVjMzNUhSQzFFSG4waGx2TE56SFd2T1gxbUY3SWhKdVpqQjJianRxeDJZVV9jX0lRYmNIYzI?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 島根県雲南市 木次町寺領の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPQXExbGN1ZVpJZjBZVHZTN1RZUXFlSnUtZmVaRkZXX0ZQM3ZaRkEwRjlwbDVPMWwxd1c1VExZNnFQMjFjUTU3WlZJbzZFeVAtLUF1Qjg3dDd1REFLR2hpVWNtZ0lMOXZXdW5NdTN5UHk2THBCYklObkFEandnczVRWGg1M3FjY0FhYmxtcmppV25NWnlDMFhMVUxSVGlUdFhOa29zQ2RMemEyRTNqOFAxSmluZTJ4NC11TEEtRC1KaGNuaFNfWF9ibjMtbDhJaklvU3NDMDNoc0pRQjlUSkhEMlNJQUtLWVQ5OUpkSEpKNzRqUdIBogFBVV95cUxPdEFCcHE4Vnpuek5tNlJrV1NuMmVUVjd4NzVQMmMtS0RQSGFCckJkWnZFVVhfVERaYldVNUw0SW9XN0ZyaWlsZHc1N0R4NXZfSXI5SGdOLXltaUtyUEhZaXctTFozSXViQUQ5TTk0VFY5YUQwcFh3UXVNdW83Nm44clJ1UWR2MWFfT0wwMnM4VUh6WEVOSGJPclpHLWo2VXJLaFE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 鳥取県鳥取市 福部町高江の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 山口県萩市 椿の県道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBOeEdCLTN1RXl0LWZ6cU1HemtXT3ZTS24wZ0FacUVmQk5jTUNINHd1d0hTM1FIZzNPWC1qdEQzNXhsSHNOVUVNUkdPNlNSSm1SUy0tdWd0MEhqWm11Rk1GNGM3dFI3dkszakE?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 山口県萩市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFB0RmtBbk9CR0tpVUJ3YWkwMW9tY2k0c29ZOERsMWI5QnhpeUYyZ09NMHlTWlN2WEN1d093b2NJdXBwUmc0eEZVUlNBM3g5VXFJWjBneEtUb3VZVGZmR3owdEFYTld5Xzc5V1VEd1VSR3NFMHAwbmliRmNXaE5YQ0k?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 山口県萩市 道路沿いのり面の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1uOXVFNFVpaDQ2dXNKNmNndFRGYzd5STVkS1JKOGJqeHFkbDlkZEJuQlRCT3hJb3FMR2x5MTE1WHY0S2lNMVZZS0RWcVNQWElpc0VpWUZmOWFGODh1anllWHl4ektaTk9UN3ExQ2I1Y9IBdEFVX3lxTE1JNDloMzNaSDR4OG5OeTYtS2VsT2JLZEszNW5kRFFodWVTdEh1NVNmV0c3Qzk0NksxOVJrTWdEZ25RWjNfd01SVk5iVVh4UmhHOTRYaUd3Q2R5bnFLZldMM3V5ZENmLTE4OWxGcVZxemhNR3Vq?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 山口県萩市 萩の出没情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOMGYzNVJIRnJEOXcwTmdmWXVJNS0waS1xMUhZYzNYOGphdUFKRlA0dk9ydEhsbWVqZ1ZnSlVoeGRua0VBYVZtdldLcVFiS09UN3NmUzY2M09UeWVEWV9lS3hPQzVTTFVjbUxjc2p6eVlWM01xb0JCVmtyV1djRDJSSGJEVnB4eWRiXy1aWWtR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 山口県周南市 中須南の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNN1E2NkNNR3BUcDdidU5iQTVJeEROY3J4QVBfRENRR0JEOGphS09lbGtNRzU1WVhoeTh2MXhmMWU2dU93b3psT3p4SERseDU4Ym9NU0ROSVM2ZWV3amxjdFcyV28xM3NkdjVrVFUzZDl5bTdabG00V1pkTVBOTHF5WDNRRVFQNTVyRjV5VU9mRHJFUHlwRmlkZHNDTkhKb0hVbEHSAaIBQVVfeXFMTTdRNjZDTUdwVHA3YnVOYkE1SXhETmNyeEFQX0RDUUdCRDhqYUtPZWxrTUc1NVlYaHk4djF4ZjFlNnVPd296bE96eEhEbHg1OGJvTVNETklTNmVld2psY3RXMldvMTNzZHY1a1RVM2Q5eW03WmxtNFdaZE1QTkxxeVgzUUVRUDU1ckY1eVVPZkRyRVB5cEZpZGRzQ05ISm9IVWxB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 北海道千歳市の出没情報",
      "url": ""
    },
    {
      "title": "2026年7月15日 北海道標茶町 ヌマオロ原野基線の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZjZqdm1PWW9zQWYxUWkzQzgtM0VSWnlBVkV6dUJVTXlsNk04UFo2b1VLOUxicWJIUWRFQlptMm1pdDhESnFXQ3c0ODlJOTVvQmhad0oyUXhyRFJGUVBCYnNHSmtubGZPa1Z2WGpVNVRQbHRILXdFLTRGY29pS0FPdWFnMGlDRC11SHBrUmdoN3g1eG1HRnpKUXpqNmrSAaIBQVVfeXFMT2RDbmxPc2FmUGE2T1VFeERqNEp6ckphOEdNakxBTnJtOVUxcExmRjhWcGlXYmxpYmlCcXhoT25NNzVBMUlHM0tjUDFpZGRBMjJkamhDX05LeDhOdzlkakstbUJIODdyQXlmcHRVX0l5ZkFiOERLRm8zLVBhMVozd3pVZ3E0RTZlRDJ3WE9YZDh1ejVHQmhsaGlXLUJUMnZ6TFBR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 北海道初山別村 初山別の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOc3VMb0VmOWpnX1F0MmFrRm5MS1o1dDU3dHN6UUJVRmwwNXB3Si15R3oyZ0M0bmVhMVRUZmNiZW5reTFJRXNuOFo2QkU1a0NXcHhFR2xkQWJ1SGRrR0ZKOEtRMEhCZVhQcGVsX3ZvVUN2WGlUQ1lYNUhETzN0OWVqNFQwREFuNW1oWGZXY0d3R2VDY1R6MHNEQXlQNU7SAaIBQVVfeXFMTk1lWWNkLWp2dDEzQmNreGt2QXdOWkdCaUpreWk5SHVjRU0wZFk5azdhdGxqMDVkSHY3ME5DREZsSEs3UDNuMTRNQV9jd19kSElYYjBkQ3JCSHZrOGhBY25LY2dDcDJ3a2hGZjdTUG5xRDFibFlfYzJaU0lSaG80SFlJbUdqRTk2YmdjSlAyS0FBRVVreWpUWVRPV25LR2N2ak93?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 北海道今金町 日進の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQNHRGR2RwZEdLcW5jNWotcWNCNVN3dDFMRXVoN29tTU9CTkU2bGc5OEQ4R0I5aUdPbjg4ZFhCSmZGb012dy12NWNmZ0N2aFJwS1FKaGRDWG9MdjRpR3h5Z2R2UVpFdTMwUkNhRWd4QWJrV183aWJQU0d6MlI4T1VGU1RkT01SMkQ2MzJxdHRsMjZOV0s4N0tCX0RDOUx4TVR1Njh0aHgxbEJhRGRMTkc2NmRoWlgtUDJIMmVtbTdadE80SjFWUWplTFBJUHoycXNBYnFlaHlUbTIyWTloMDNpZ05UVEhoUXphUEFxUkVvejkyZ9IBogFBVV95cUxNVGI1ZElFZzRKTS1hRDVuWjZXb01SamRxUE4xUnQ1eW53cEl5ZEpCeTN3MVVJRzVQNGg3UklzX19OWUpwNm1idXlBelRwOU1TUEZ5Nzl3cnVFTGxuMzVGNXZRUm5OMm9XWlU3aG1VVjJEdzNhb2VNSEZHR2ZFTlhxcE5paXdDdDNtVWFKdGxHNkduNHlZSzJCeDhEYVVhUkVpUHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年7月15日 北海道厚岸町 太田７の通りの出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNQWhPUG8yZ1gtOHFDUkpfc25pQkd2emg5azRmTFhWM3pxYjZUSjl1bjNtZTZ6TzJFVG5sQ1ZlV1gzX0VONmh1Y3kzNFdDMjZiRzI5X2VBbGpkUnNjLTk4M2JtWTNKbkRUcnVNTGFMS1lwZi1NdFQxOUt6LTJXaHNqdUJHaUtqOXI4T0xzNm5wN3NPQU43Q0tsSXRPSWlab1EzdDFKMS1lOE1kUTZKbWNNeXpSejZIUDh2d3JEckdJR3RXVmRrQXlTbVp6akxENnk5SkNxOXk0aHlNMjJRRW80Q25xRjVXeFU1cWJoNjF3dllTQdIBogFBVV95cUxPRjBVU3VzWnZfVU1sWjQxbkVQdFJPTjRZbGdwcnlkTmoxaUxVbnhPcWxiZDg0UEI4ejlQMk8zS3VGcGdOY0RFQ0JQQ3VwNmt4SHl3M0p6Z21nNkVoRlFIZm5WZWNRNmp6Smg1VHNSTmpSZFRodjhieDI3VUZFX180VTRvcURrY2FGaW1Jd1VyRUZ4UFBIcEs5R0o5NVdQblp0TWc?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"岩手県","count":33},{"pref":"秋田県","count":32},{"pref":"北海道","count":23},{"pref":"福島県","count":18},{"pref":"長野県","count":15},{"pref":"青森県","count":15},{"pref":"宮城県","count":13},{"pref":"島根県","count":12},{"pref":"新潟県","count":11},{"pref":"山形県","count":11},{"pref":"山口県","count":8},{"pref":"群馬県","count":7},{"pref":"栃木県","count":7},{"pref":"京都府","count":6},{"pref":"岐阜県","count":4},{"pref":"石川県","count":3},{"pref":"兵庫県","count":3},{"pref":"静岡県","count":3},{"pref":"福井県","count":2},{"pref":"鳥取県","count":1},{"pref":"埼玉県","count":1},{"pref":"富山県","count":1},{"pref":"滋賀県","count":1},{"pref":"愛知県","count":1},{"pref":"和歌山県","count":1}];

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
        <span>対象期間: 2026年7月15日</span>
        <span>·</span>
        <span>公開: 2026-07-16</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={232}
        periodLabel={"2026年7月15日"}
      />

      <h2>概要および主要事案の分析</h2>
      <p>2026年7月15日の集計において、国内でのクマ関連事案は総計232件記録された。都道府県別では岩手県（33件）、秋田県（32件）が30件を超え突出しており、次いで北海道（23件）、福島県（18件）、長野県（15件）、青森県（15件）、宮城県（13件）、島根県（12件）、新潟県（11件）、山形県（11件）と、東日本および日本海側を中心に出没が多発している。</p>
      <p>当日は人間活動が活発な生活圏や交通インフラにおける遭遇事案が複数記録された。秋田県北秋田市小森の国道285号では、走行中のトラックとクマが衝突する交通事故が発生した（※1）。また岩手県雫石町では、住宅に設置されたわなによりクマ1頭が捕獲された（※2）。学校施設周辺での出没も確認されており、山形県鶴岡市の中学校近くで目撃が相次いだほか（※3）、宮城県富谷市でも中学校近くへの出没が報告されている（※4・5）。さらに市街地や住宅街への接近事案として、宮城県仙台市宮城野区原町5丁目や梅田川沿いの河川敷（※6・7）、同市泉区明通3丁目での出没（※8）、岩手県盛岡市黒石野3丁目の住宅地内における幼獣1頭の目撃（※9）、秋田県大潟村中心部での相次ぐ目撃（※10）など、市街地環境への進入が顕著である。</p>
      <h2>地域別出没動向</h2>
      <h3>東北地方</h3>
      <p>東北地方は当日の総件数の大半を占める最重点地域となった。最多の岩手県では、雫石町の住宅での捕獲（※2）のほか、盛岡市川目の国道106号線旧川目小学校付近で目撃が報告された（※11・12）。さらに同市玉山字白沢の住宅裏では成獣1頭が濁川方面から西側の山へ移動する姿が確認され（※13）、黒石野3丁目の住宅地内でも幼獣1頭が確認された（※9）。秋田県では、北秋田市でのトラック衝突事故（※1）に加え、大館市長走陣場（※14）、秋田市寺内蛭根3丁目（※15）や下新城長岡前谷地（※16）、大潟村中心部（※10）での目撃が相次いだ。</p>
      <p>福島県では、三春町熊耳および熊耳二ツ石で2頭の目撃を含む事案が発生したほか（※17・18）、福島市のナシ畑での目撃（※19）、同市内での目撃情報（※20）、南相馬市小高区での出没が記録された（※21）。青森県では、弘前市内の県道を横切る1頭の目撃（※22・23）や大森（※24）、薬師堂南熊沢（※25）、八戸市是川での出没が確認されている（※26）。山形県では鶴岡市の中学校付近（※3）や羽黒町荒川（※27）、米沢市（※28）、川西町高山での出没（※29）に加え、川西町の最上川を泳ぐクマが記録された（※30）。宮城県では富谷市の中学校近辺（※4・5）のほか、仙台市宮城野区原町や泉区明通などの市街地で出没が集中した（※6・8・7）。</p>
      <h3>関東地方</h3>
      <p>関東地方では山間部から丘陵地にかけての記録がみられた。群馬県では長野原町北軽井沢栗平（※31・32）、渋川市伊香保町伊香保（※33）、下仁田町中小坂での出没および県道横断が確認された（※34・35）。栃木県では那須塩原市木綿畑や同市内（※36・37）、那須町湯本（※38）、鹿沼市上粕尾（※39）、足利市松田町・藤坂峠（※40）で目撃された。埼玉県では小鹿野町両神薄出原のバス停北東100メートル地点で地元住民により痕跡が発見されている（※41）。</p>
      <h3>中部地方</h3>
      <p>中部地方では長野県（15件）や新潟県（11件）を中心に広域で出没が報告された。長野県では松本市蟻ケ崎（※42）、大町市大町（※43）、木曽町三岳（※44）、飯田市正永町（※45）、軽井沢町軽井沢（※46）と南北にわたり発生した。新潟県では妙高市新赤倉温泉や宿泊施設付近を含む各所（※47・48・49）、津南町上郷宮野原（※50）、湯沢町（※51）で記録された。北陸地方では石川県白山市平加町や美川（※52・53）、能美市緑が丘地内（※54）、富山県南砺市利賀村高沼（※55）、福井県越前市土山町（※56）や南越前町河内（※57）で目撃された。東海地方では岐阜県揖斐川町白樫（※58）、恵那市東野や岩村町の道路上（※59・60）、飛騨市神岡町の農地（※61）で記録され、静岡県富士宮市上稲子や道路横断事案（※62・63・64）、愛知県東栄町振草下粟代日向での出没可能性が報告された（※65）。</p>
      <h3>近畿地方</h3>
      <p>近畿地方では京都府や兵庫県北部を中心に確認された。京都府では京都市右京区京北矢代中町（※66）、綾部市西原町鷲垣（※67）、舞鶴市吉田（※68）、京丹後市丹後町袖志や久美浜町栃谷（※69・70）で出没した。兵庫県では宍粟市山崎町高下（※71）、香美町香住区香住（※72）、新温泉町細田（※73）で記録された。滋賀県高島市新旭町饗庭（※74）、和歌山県広川町西広（※75）でも出没が報告されている。</p>
      <h3>中国地方</h3>
      <p>中国地方では島根県（12件）で活発な動きが確認された。島根県浜田市金城町久佐（※76）や旭町今市（※77）のほか、道路を横断して山林へ移動する個体（※78）、親子とみられるクマ3頭の目撃情報が記録された（※79）。また雲南市木次町寺領でも目撃された（※80）。鳥取県鳥取市福部町高江では梨の食害および足跡が確認され、農業被害が具体化している（※81）。山口県では萩市椿の県道での目撃や、道路沿いのり面を登る個体の目撃（※82・83・84・85）、周南市中須南での出没が報告された（※86）。</p>
      <h3>北海道・四国・九州地方</h3>
      <p>北海道では23件が計上された。千歳市泉沢では青葉公園の道央自動車道千歳インターチェンジ付近に設置された自動撮影カメラにより午前0時05分頃にクマ1頭が撮影された（※87）。そのほか、標茶町ヌマオロ原野基線（※88）、初山別村初山別（※89）、今金町日進（※90）、厚岸町太田7の通り（※91）での出没が記録されている。なお、四国地方および九州地方における当日の出没事案は記録されていない。</p>
      <h2>上位都道府県の集計</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">順位</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">出没件数</th>
              <th className="px-3 py-2">主な出没環境・特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">33件</td><td className="px-3 py-2 text-xs">住宅地内幼獣目撃、住宅での捕獲、国道付近での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">32件</td><td className="px-3 py-2 text-xs">国道でのトラック衝突、中心部・住宅地での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">23件</td><td className="px-3 py-2 text-xs">インターチェンジ付近自動撮影カメラ記録、原野・農村部出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">18件</td><td className="px-3 py-2 text-xs">ナシ畑での目撃、2頭目撃、市街地近郊出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">15件</td><td className="px-3 py-2 text-xs">松本市や飯田市などの市街地・住宅街、観光地周辺</td></tr>
            <tr><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">15件</td><td className="px-3 py-2 text-xs">県道横断事案、弘前市・八戸市近郊での出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">13件</td><td className="px-3 py-2 text-xs">仙台市市街地・河川敷出没、中学校近辺での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">12件</td><td className="px-3 py-2 text-xs">親子3頭目撃、道路横断および山林移動</td></tr>
            <tr><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">温泉街・宿泊施設周辺出没、山間部町村での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">10</td><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">11件</td><td className="px-3 py-2 text-xs">中学校近くでの連続目撃、最上川遊泳個体の目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>当日の記録から確認されるクマの行動特性とリスク要因について、以下の観点から総括する。</p>
      <ul>
        <li>農業被害・餌資源への接近: 鳥取県鳥取市での梨食害および足跡の確認（※81）や、福島県福島市のナシ畑での目撃（※19）、岐阜県飛騨市の農地での目撃（※61）が示す通り、結実期を迎える果樹や農作物が誘引要因となっている実態がうかがえる。</li>
        <li>交通インフラとの交錯: 秋田県北秋田市でのトラックとクマの衝突事故（※1）に加え、岩手県盛岡市の国道106号（※11・12）、青森県弘前市の県道（※22・23）、群馬県下仁田町の県道（※35）、山口県萩市の県道およびのり面（※82・83・84・85）、静岡県富士宮市（※62）、島根県浜田市（※78）など、幹線道路の横断や通行事案が多発しており、車両との衝突リスクが高い水準にある。</li>
        <li>人口集中地区・教育施設への接近: 宮城県富谷市（※4・5）や山形県鶴岡市（※3）では中学校近辺での出没が相次ぎ、宮城県仙台市の市街地や河川敷（※6・7）、岩手県盛岡市の住宅地（※9）、秋田県秋田市（※15・16）や大潟村中心部（※10）など、市民生活の基盤となる居住地域への侵入が日常化している。</li>
        <li>移動経路としての河川・緑地: 山形県川西町における最上川の遊泳目撃（※30）や宮城県仙台市の梅田川沿い河川敷での目撃（※7）、北海道千歳市の公園・高速道路付近での撮影記録（※87）から、水系や連続する緑地帯が移動経路として利用されている状況が確認される。</li>
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
          <dd>2026年7月15日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-16</dd>
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
