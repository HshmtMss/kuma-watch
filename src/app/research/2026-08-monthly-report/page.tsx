// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月 / mode: monthly-report / 生成日: 2026-09-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-monthly-report";
const TITLE = "2026年8月 国内クマ出没事案の月次総括レポート";
const DESCRIPTION = "2026年8月、国内のクマ出没は3063件に達し、特に北海道と東北地方で多発した。人身被害が全国で報告される一方、市街地や住宅地への出没も頻発し、住民の生活圏における遭遇リスクの高まりが示された。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-01",
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
  datePublished: "2026-09-01",
  dateModified: "2026-09-01",
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
      "title": "福島県会津美里町で80代女性が熊に襲われけが",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE5YX3NlWGVZRW4zUEVaWWlrNFpncFkwLUw1elV6NlE0MW12UzF0V092SnZCVjF5eEFzN1RkMzlPUHJJbWV2QlJoVFdaOXMzZHM?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県みどり市の山林内で釣り人がクマに襲われケガ",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTFB6ZjE1WWdxSl9ETm96ZzJsS1pkaFZMNHBndlBBc3pweHkzLXBkajVoZlZyaDFuQjNGOWN6MzN5QS04YW5ROTVDcXJzT1BjMHR0cGQwaDVxdHI5VzhTVFd5LVpWcjRlelY1?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県雫石町の河川敷で50代男性が襲われ指骨折",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFA5UjY5dm55VFZobU1XbFpqZjlxSk1NZWNnVHF0LU9WbEtPT3pkT3d2UGtIMVprSWpCd2xUTEQ5T0NFSmpZekpBU3ZKdlpJOHp0QU45YUdKeE82WWw0Xy1YTHB6bHk1RDRnM1ptNFBn?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県仙台市の園芸用品店でクマに襲われ従業員負傷",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9IYzl0OVZsRFZyX3lkeUlnRFUwc3doUlJmOE5ZajlENFRXOVJvMVRkcVRFY2cxX3hqa1dmVHUzQ0t5ZFZRdjNHRUFvRzI3XzRUNmMzUkstUk4?oc=5",
      "site": "news"
    },
    {
      "title": "静岡県浜松市の山林でクマに襲われ男性軽傷",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1HazE4b2NNdVV2VnBvNDg4NHZvQm5Pelo1VWNybzVSbld1YTJKMk10SUJIZndTZjJRUW9VNUdfRnBZd29rUjBJSVJ2YkNzOTdOY2RZVmdsT2hndHl6QlItT3pQXzJzd2JDQ2NhMUNQYXMyeC1TNVpneWwtNVNKT1k?oc=5",
      "site": "news"
    },
    {
      "title": "北海道八雲町で牧場のヤギを襲撃、クマを発見",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE03U2tyV19Nb0ROZXotNjFIMFRBYnBHMElWSUdSUjBNcWZhQ3ptUUtrc0g3dmx2cTlhYk9VX05lOEs3UHhDNEkwMzRXSkVRNE9EZmxEUGxNd0N0UmJZTlBrZFZZUkpoN1E5dlFoRG1OTWY4YUNMMm81SEdYcFY3b3M?oc=5",
      "site": "news"
    },
    {
      "title": "岐阜県高山市でランニング中に襲われ男性けが",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9QcEpFaE9pOE1ERHBZQXRoSXdxanJ1WmU3X1gzQ3c2TDVNSmRTMzBxZFVzSzQtU21kNWRDLW9HU1pEa2hZeUJhU1NHcXJzV0xWUDJpWXlmVERPOWZEM2hpREJTTW5yMGJ4b3BPV1Rn?oc=5",
      "site": "news"
    },
    {
      "title": "青森県十和田市でクマにかまれ外国人男性が負傷",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5KZHZ3Rkh3Mm9ENzhCMDROcTY2SVByTlE0MFU0YmVLZ19LTTJqV3VIZ1dYRDlhakJzS3NPZGFZMC03dzFRSHlrR0t6U0tvbm5UMHJTTUMyWVY?oc=5",
      "site": "news"
    },
    {
      "title": "三重県尾鷲市の民家や小学校近くのわなでクマを捕獲・駆除",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBlNUJzdTI1UFBDYzJiUC05czh6dXVnbUhjTUl4NDB6RE1palJub0Y4czhoX01xci11SVNOMDRUV2ZHTFlnT3VuUUF0YldnSWd6djdIMC0zQVlLV09yNXpDdnFwUXdiejcyWEk1MTRn?oc=5",
      "site": "news"
    },
    {
      "title": "福島県福島市の渡利、郷野目の住宅街でクマ目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE14eWljdEVUbjJpWkJvRUdyd3hROV9ORXhWR1hwLWRiZng2Q2lNWUJkdmZQcENkOC0yN3Q1SXR0RmlFYXRYYWs3dFFTQkFUbkJYYzhZWHhLeEk5MlNyUVYyRDhiaDNYMnNsZXoyTGhpYkFPdUhKX3BTOHQwb0xQalk?oc=5",
      "site": "news"
    },
    {
      "title": "新潟市秋葉区東新津駅近くの踏切付近でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBJVXFFZlFMTjZ5ZlRLSDFZcUJrVEp2Z3dGTVpqSFNhMXE2SXd3RkE2QnRIMUNhcHN6RC1PQW9pWHJkeGZy?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県盛岡市の公園の野球場内を子グマが徘徊",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNQndyck1mWDZHV2hOakhVMGNNY2Fod1VMYnRUR3c1RGZaNG9TUGtNNDJQaGNUelIwWEhodWZsVUlwUnA5bzBrT0hpT2dDTHlVcmFuNFNWZ18wNERTYko1WmljV0hROEZfdWNJQVBEUmM2eGlOaU8xZ3RGRTdESFVIb25PaFR6TnM?oc=5",
      "site": "news"
    },
    {
      "title": "山口県萩市の住宅屋根に体長1.5mのクマ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1GdmZPUXRTQlNUWHoyYy1SbDVDR2JkNUVoNkw5dll5NDV4UmdZQm10RHA4SFJwcWtEY25raDhmc2d2b2QzVzJCYXNLTDhuSmp6RUEyZkxkUTQzX2dmLTJRQnhqWEplSmNJZmVFalNaekt4cE1aNWF6d2h6RF9EdlE?oc=5",
      "site": "news"
    },
    {
      "title": "秋田市浜田の小学校や海水浴場付近で目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE52aWJUUGkySHExXzhNUGN1RVU3YWRUMkxPcGFSbDJsZFdGY25wcUdPT3gySlFEVlJXWW1hWjR6U0xrdjBNc19fb2VCcjN5X2xkNDBTQlZIZm1wSng0ZUt5T2h5dG5MQ3JKb2dXamJ3eGVrbXVhWkV0c0xWRdIBgAFBVV95cUxNc005SGdXV1RDTWhvWEtOdGFjbzdoVVFSaENhSDNkbzdwZ25qaFl3ZjFvMzVHSnpZNHFDM1VnQndEZkN2U3lFaUdlb0pQSERUbzZjRUpZRnNFcTVhTTA4b1ROdllHY01DQlFBd3hUa0RZR292MTc1Q1VYYmdsS0cxWA?oc=5",
      "site": "news"
    },
    {
      "title": "山形県酒田市の市街地でクマ目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5jMmNUMUFIUUZMZndWQnNaY256WkQ0eGk4VlNJWm51RUtDR3NodVJPSDhlUW14RTgyWjBjV0p6VHRSV2lrMVpldmZVSkRYVnNyWGRoUURNUjhOczgxTmlWWTlOd09kVXg0X1loYTJ1UdIBdEFVX3lxTE9MendHTDZJNnRWdlZ0ak1NUDl0YWJHOEVfSVNRX3BwRGJmZUxwaTZFR2I0Um5qRmdIVVdwak85d0ZMMk1lbXVpNE1RQ0JhQ0V3Q002VjFpb0gtQTF3Ukh2RTFteHVnTkppM09hNG5iaUtZT0VP?oc=5",
      "site": "news"
    },
    {
      "title": "広島市の安佐動物公園のカメラに野生のクマが映る",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTFA4eTRzcUZwZjhtMWNoWlVXUnRuUzY1cFNwUS1OcFdib2YtTHU4eWlBdk1feW9UVk9ZMHM4ZVhNNGlJdllDYzBZNXlGSkFBU09GYnBobXlLdDlVUXAwSHhR?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県日光市で100kg超のクマを住人が自ら刃物で駆除",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1jamp6SVVrS004WUlsNlQ1b005UXNiWHBueC10Wjd1dFBmNFpYZWxqM2laSW1xWFB5eVdSdVdVVG5EMnZDa0M0ZFdHNnFwVkxxWXdFaVU5elRfRmc?oc=5",
      "site": "news"
    },
    {
      "title": "京都府宮津市の天橋立付近にクマ、麻酔銃で捕獲",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQTEhxR2Ezd1VhQnlXX1R6YmRmOTlVV3Z4WFIxMkhicHczVUdRYWw4SldTSDBTY2ZrMXc0MlJBdkZhZHEwMzd6WlFNd0Fod25aNUlocGZvdlh2RkpRT1lEZjR5WmpRRW1ISmsxMlVvWFpqY1ZDN3UyeE5zVnVNekZhRWxjMlhPeFhEYjVaTTB4aTNFZmt1bzhtRjRvSWJHZEdUSW1kam5ra0tTTVNMV2JKN3VB?oc=5",
      "site": "news"
    },
    {
      "title": "鳥取市佐治町で梨の食害などの出没地点でクマ捕獲",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTFB6eXpYOWNqaWxaUUlEaGFnZ1o0dmk0b1JSRzM0cFJEeWthUW5CSTBKMTNQZ3p2LXVvX2hRcVNpMVFROEowazFlX1VHQnNzOUho?oc=5",
      "site": "news"
    },
    {
      "title": "山梨県中央市の道の駅や住宅街近くでクマ3頭が出没",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNNjdGLVN0TERlc1p0a0ROTmQ3U3A5VGhUWGs0LTNZR0pfV09PaUFGWndLNi0yMzduNURuUFlSa0Z4ZU05QXA5YjRrWHJZOERlU1Nqd1Z5QzVCM05mUjdJN2k5ZzZpQWhXTUhWRzJxdFh3b1FaZDQ0Z3lLbU5jU0RtTDR1SnRMdWc?oc=5",
      "site": "news"
    },
    {
      "title": "埼玉県秩父市中津川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNLU1tWmdkc0U4dXZKY1puYWVzc2NKa1ZZX1pXV2NXbnBkenZDR1RILVEyUWcwa1RBVzNIUlJTbnZIUDJyeGs2S0FLRmdQYkp3ZmZ2ak5HaE1RRUt3N3JBaGNBbUp1UGd6akdIWUJRdHJlRXp1Mjk5bThBYzl0eWtvdGtGYi1NakVJRnc1LTVuZEdqQ0lOSlRSWVFxb2FyNk1Rdjg5NVEyWWNiVTk4cjdWTnFMRV9qWTBvWEJoUFkwNnRXRDY1ZXZEcXJ1VE5BbHNxVWItYkFGbjdydTQwMnZuTWlQS3FCNFJkNVJQX2ZSN0pYUdIBogFBVV95cUxNa0lzYWxPNHNCSV9KOEhSMEhwT0FFTDZfczl1REJyUDlnXzcxMmtVSUlOVEgwbF9BeGpoQl9NdnhmQlljcldfdEx0LXNxSktHSXYyaVRPcFVtY01NMy1xZEZDaXVRbFdUYTVJRk1wajZ2TEFGc2dhZW1SbzVIeXRiWS1WNmJtdUNpZW40dXJLWUd3WWs1QWZ6SThLNC1rb3FXU0E?oc=5",
      "site": "news"
    },
    {
      "title": "東京都青梅市御岳2丁目でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPX3R3STVBNE8wUGxrQ28zTHJaVU9kemtZRldzd3dLeDgwUkZJNjV4UW94NDE0ODNNNUF1YXVjcTZpV2Z3NkpIbjI3MEdwMXI4Wk04dmRHMG9TXzFaMUtIOXpLVm1sbVRFWk5Jd1ZsYmFrTGtNMVV5OWZWeXh5c29USGVRZ1VDMkVEZHhvM3pEQUt1eVpaajNiUXNOVkTSAaIBQVVfeXFMTlRtUW9yTU5HWTVjZl9pbEYwMFI5TjFDei1ONThNNTNpMmI2bXBDZWZycUlnNGdmdks4ZlhhbGsyckNrV01MWGkzNlltdFRMa1Bxc01QeUhIdTlrV0pQbmZUXzlPejFLZEN0X0MwRzkzblZlZXg4Z0xnQWxudFZhblRXYmJNdk1ySkxWSGdvRTdDdlptZ0VhSHBkdnRyUDM3SXlR?oc=5",
      "site": "news"
    },
    {
      "title": "神奈川県南足柄市内山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQcGgzTEtRc1FjdVdWUV91ZVRwaHJYQTdvMzBXZl95cmRsVWVwVXhTLVJOcFdkckRWaDZyY2hKVzJnRDNwNXhRREczWGZ6dlExVE02emtWZ2hJWS1GZVhxOEl5eXl2OWtfWC1hdUthdlVzd1A1c2hoeE9mTHUwZ2dfTVA2RmROeUJETnpNYUxrb3NQNzV4NEdUeDZUdVjSAaIBQVVfeXFMUHpUTmV2QjFGbWM5SG9pX0hmWmQ3X2pobFZzcm1FNDlDU1U3X3YyMW05bHVPcVprMlRmSEhRMDEteWxZcTJEdi00ZHZNSndWT2ZrdHVmUmNPenpSRENrT0ljRTRfZmYzb1pyenhYRnBJUk90UjVwNUtJcnZjUmRjU01qZXRLYlJQZkJuQmEzWWlOSENDSDl1UXVwcnZxcGZVT3Zn?oc=5",
      "site": "news"
    },
    {
      "title": "富山県高岡市石堤でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOREtKYVZ4RVNyR0RRZm1PMENwZHFjc05ibHpWWnE5R3NaRFEtdHNtN2tMbW16UTB1X0RzYjVodERMd0tLZXB6Y1pEX1NWSnN1TkJ3dGlXczVJckdfdmF5V05RVUNDbEI1R0Y2Zkd1RFFsMTRyTjVGbVRjbDBqaVU4LUNjY2FBYlFJaS1BM3VONGVPRW1hTVhIUTA5N2bSAaIBQVVfeXFMT2tTRlRBZ3p5NTA2QnFZYS1jU3lwNlM2VldGNVRrYk0xRVlQRFZsYzZDbjktZEJaejgxaTZZNW5vU2Nvbi1HRWhXam5GNG5RQVFQbVVLX1l3cExVZ0k3dXo1d0U0bjk5V3pCdGE1bXdQR2hWYTcyM2tBbnZiRmNuTUhVbkNSZTlLVmdsQnkzT21uYldTZ3RadWdJVWJCODJkWGJB?oc=5c",
      "site": "news"
    },
    {
      "title": "石川県津幡町上河合でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNV9PQWNGWGZOUG1STFgtMm9RUXRCYmhTanhOOWVfWTZ3bTRaWWpFZUxkZkhzM0VsLTh0Vmx0QmJMMVNUM0VPOXdaS0hUQ1NKVUpYQTdQa3U2eC1XMXFsbWw0UUtLQ3RES0FjLUNfZXFUbkRLVl9DSWZxMHF6WUcxbk5pQkppMHpPVlNhZFFMR0c2aGVQRlE1U2F6dknSAaIBQVVfeXFMTTA2SkVMOXpPSHNhWWg4V2sxUlZ4dnF0amdtSWZ0MVJ4aVNHcC1takxFdy1EMjVHVkE3Zm5GZ0RGNFlfZ191UTBrOGRoWld6SS1XTEh6T3RNNHhsMnlhUXFSeFQ1X1BIamVDVGdhQk9yYVAya0hEYkljdTVwOTRlUUo0RWRXVmRfbXM0S0tfZ05jdWI5cEF3UXFBVnBRTkYxUVN3?oc=5",
      "site": "news"
    },
    {
      "title": "福井県若狭町気山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPM3RITk40MzlJRTVMMEJ4UWk3QlNFbnNLR2R2N3dTVkdHTXprLTJZRWt4UGE5M2phYWQzMm9TaGFJSXlDdU94WDlwR2RMZklnZkhnU3pOVl9aUEZZTzBTZzMwQlBLeEU0WWh3ZzdpNXE0XzM5ZHAyUU1FRVJTcERneGkyd0lmS19DbWFfZXh0bmxqQXR4VC1OeXRJYmZ3eXdjcXRtUXl5ODIzeGpzZmhBTUs1UHJiX25acE1BRHFvRnNtLU5CdUVNeFF6Wnl2U180Ulh6T25NRTktTVZvcWczOGVFMkxTcmRRWDhqMXRnWl9rd9IBogFBVV95cUxQWWU0SkZoTHYteDFaOTRtX1pXVUNVWmFsSHFueEdNekRSLU5nQTFPMVVqT0Y4bnphMFhRTkx3ZllZcDE3S3YtTWt5bXotdmtzeXZHYnpnOEVNQ2xQbmRkYWxrODF4VjRpbXdVYmsyM19raUZOdWNjcm9nV25WdWZWVmk2djZkM0tCMEVRZXRqSHVIcnlPNktCd2tmZHhpYmJ2UXc?oc=5",
      "site": "news"
    },
    {
      "title": "滋賀県長浜市余呉町上丹生でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNSUFKN2lNVTR5Q0RJeUZpcF9DVzhRS3hZbWJ6X1FpOGtTWkhzcElqWWFBdU44TVl4M3VLY3RJQldGWkpwYndPVVJOc3Fnb2ZuREczTnRVU3JDR2plUkdFSVhEMmhTdmpUSTZtN25PdXZ5NmNONXB3amlQZjFZZkJ5M1FfRk9RMlloN0FhdnU2aU53TXU1SEpnMFdxanE3OHN2bVHSAaIBQVVfeXFMTUlBSjdpTVU0eUNESXlGaXBfQ1c4UUt4WW1iel9RaThrU1pIc3BJallhQXVOOE1ZeDN1S2N0SUJXRlpKcGJ3T1VSTnNxZ29mbkRHM050VVNyQ0dqZVJHRUlYRDJoU3ZqVEk2bTduT3V2eTZjTjVwd2ppUGYxWWZCeTNRX0ZPUTJZaDdBYXZ1NmlOd011NUhKZzBXcWpxNzhzdm1R?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県佐用町下石井でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPVERfZjZuQkxGdzQ5TXZndVRQLXh2S291NWxpTi16c1hqcGE4U3ViaklnTW5JWkJxMlB3S280V1lyX0pjdDd4Z1F6V29VX1E3NHpVYXJtZkdxXzIxZkhvR3hHVTRYbFB3dXlZMlQ2Z2FBZUZ5ZmZLcTFzMV80T3lVSkN4Q1AwUHd3UWUxLUdJc18xNnJreFQzQ2o1M19HWWxmSGfSAaIBQVVfeXFMT1REX2Y2bkJMRnc0OU12Z3VUUC14dktvdTVsaU4tenNYanBhOFN1YmpJZ01uSVpCcTJQd0tvNFdZcl9KY3Q3eGdReldvVV9RNzR6VWFybWZHcV8yMWZIb0d4R1U0WGxQd3V5WTJUNmdhQWVGeWZmS3ExczFfNE95VUpDeENQMFB3d1FlMS1HSXNfMTZya3hUM0NqNTNfR1lsZkhn?oc=5",
      "site": "news"
    },
    {
      "title": "和歌山県田辺市長野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPb0NIMXkweHdYY2N2WEt0TWswUWhXSkZBMDNCNDBIVzhxb3l3N3lxcXFfb0ViWHAwQzdiLXdhTzVFMHlTNG01RU1teWhSd2pmaDRxS3VtbUtqeVlad1hBamQzY1Frb09ETjlIaVk4VThCeC1BUFhNbnlCYWV0ZERZYVdEREwtUFdtdzlNMEVHR0VUZzduMDVqWmlUdktQaDRHZVHSAaIBQVVfeXFMT29DSDF5MHh3WGNjdlhLdE1rMFFoV0pGQTAzQjQwSFc4cW95dzd5cXFxX29FYlhwMEM3Yi13YU81RTB5UzRtNUVNbXloUndqZmg0cUt1bW1LanlZWndYQWpkM2NRa29PRE45SGlZOFU4QngtQVBYTW55QmFldGREWWFXRERMLVBXbXc5TTBFR0dFVGc3bjA1alppVHZLUGg0R2VR?oc=5",
      "site": "news"
    },
    {
      "title": "岡山県津山市でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9ibGxpVDlKdmpQN3BrenpKNjloNnItamNZQk9ZUlIyY2dRUmlRVUJPSTcybGtLLXFKdTdaaGhGWTB5UThsaHRqM3pzQkZKN3BK?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":544},{"pref":"青森県","count":413},{"pref":"福島県","count":308},{"pref":"宮城県","count":260},{"pref":"長野県","count":218},{"pref":"岩手県","count":189},{"pref":"秋田県","count":148},{"pref":"群馬県","count":122},{"pref":"島根県","count":114},{"pref":"新潟県","count":103},{"pref":"栃木県","count":89},{"pref":"京都府","count":89},{"pref":"岐阜県","count":79},{"pref":"山口県","count":78},{"pref":"富山県","count":53},{"pref":"山形県","count":53},{"pref":"福井県","count":40},{"pref":"兵庫県","count":30},{"pref":"三重県","count":17},{"pref":"山梨県","count":16},{"pref":"和歌山県","count":14},{"pref":"石川県","count":12},{"pref":"広島県","count":12},{"pref":"静岡県","count":11},{"pref":"岡山県","count":11},{"pref":"埼玉県","count":10},{"pref":"滋賀県","count":8},{"pref":"東京都","count":8},{"pref":"鳥取県","count":7},{"pref":"神奈川県","count":5},{"pref":"愛知県","count":2}];

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          月次レポート
        </span>
        <span>対象期間: 2026年8月</span>
        <span>·</span>
        <span>公開: 2026-09-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={3063}
        periodLabel={"2026年8月"}
      />

      <h2>月次サマリー</h2>
      <p>2026年8月の国内におけるクマの出没総件数は3063件にのぼった。報道された情報が1877件を占め、依然として情報収集の主要なソースとなっている。人身被害を示唆するキーワードを含む事案は51件、都市部での出没は146件、捕獲や銃猟に関連する事案は68件確認された。出没件数が特に多かったのは北海道、青森県、福島県であり、これらの地域が全国の件数を押し上げる要因となっている。</p>
      <h3>出没件数 上位都道府県</h3>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">順位</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">544</td></tr>
            <tr><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">413</td></tr>
            <tr><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">308</td></tr>
            <tr><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">260</td></tr>
            <tr><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">218</td></tr>
            <tr><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">189</td></tr>
          </tbody>
        </table>
      </div>
      <h2>主要トピック</h2>
      <h3>1. 人身被害の全国的な多発</h3>
      <p>8月は全国各地で人身被害が相次いだ。福島県会津美里町では80代女性が襲われ負傷（※1）、群馬県みどり市では山林内で釣り人が襲われる被害が複数報告された（※2）。岩手県雫石町の河川敷でも50代男性が指を骨折する被害が発生（※3）。また、静岡県浜松市の山林（※5）、岐阜県高山市でのランニング中（※7）、青森県十和田市の十和田湖畔（※8）など、レジャーや日常的な活動の最中にクマと遭遇し被害に遭うケースが目立った。これらの事案は、山林だけでなく、人の活動エリアに近い場所での危険性が高まっていることを示している。</p>
      <h3>2. 市街地・住宅地への出没と被害の深刻化</h3>
      <p>都市部や住宅地への出没も深刻な問題となっている。特に宮城県仙台市では、大型園芸店の敷地内で従業員が襲われ負傷するという事案が発生し、市街地における被害として大きく報じられた（※4）。福島県福島市や新潟県上越市では住宅街での目撃が相次ぎ（※10）、新潟市秋葉区では駅近くの踏切付近でも目撃情報が寄せられた（※11）。岩手県盛岡市では小学校に隣接する公園に親子のクマが出没し（※12）、山口県萩市では住宅の屋根にクマが登るという異例の事態も確認された（※13）。これらの事例は、クマが人々の生活圏深くまで侵入している実態を浮き彫りにしている。</p>
      <h3>3. 学校近辺での目撃頻発と地域社会への影響</h3>
      <p>全国的に小学校や中学校の近辺での目撃が頻発し、児童・生徒の安全確保が喫緊の課題となった。三重県尾鷲市では民家や小学校近くに設置されたわなでクマが捕獲・駆除された（※9）。秋田県秋田市では小学校や海水浴場付近での目撃が相次ぎ（※14）、山形県酒田市でも中学校近くの水路で目撃されるなど（※15）、市街地での出没が教育施設周辺にまで及んだ。島根県浜田市旭町でも旭小学校付近の交差点で目撃されており、通学路の安全点検や地域全体での警戒体制の強化が求められる状況となっている。</p>
      <h3>4. 北海道における家畜被害の発生</h3>
      <p>出没件数が最多となった北海道では、家畜が被害に遭う事案も報告された。8月10日には八雲町の牧場近くで、飼育されていたヤギがクマに襲われ、捕食される被害が発生した（※6）。体長1.8mと推定される大型の個体であり、地域の酪農・畜産業への脅威を改めて認識させる事案となった。</p>
      <h3>5. 各地での捕獲・駆除事案</h3>
      <p>人里への出没が頻発する中、各地で捕獲・駆除も行われた。栃木県日光市では、民家に侵入した100kg超のクマを住人が自ら刃物で駆除するという出来事があった（※17）。また、日本三景の一つである京都府宮津市の天橋立付近に出没したクマが麻酔銃で捕獲されるなど（※18）、観光地での対応も行われた。鳥取県鳥取市佐治町では、梨の食害が報告された地点でクマが捕獲・駆除されており（※19）、農業被害への対策としての一面も示された。</p>
      <h2>地域別動向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道は544件と全国最多の出没件数を記録した。東北地方も青森県（413件）、福島県（308件）、宮城県（260件）、岩手県（189件）、秋田県（148件）が軒並み上位に名を連ね、国内で最も出没が活発な地域となっている。人身被害、市街地・住宅地への出没、学校近辺での目撃など、事案の多様性と深刻さが際立っている。</p>
      <h3>関東地方</h3>
      <p>群馬県（122件）が最も多く、釣り中の人身被害が報告された。栃木県、埼玉県、東京都、神奈川県でも山間部を中心に目撃情報が寄せられており（※17, 21, 22, 23）、首都圏においてもクマの生息域と人間の活動域が近接していることがわかる。</p>
      <h3>中部地方</h3>
      <p>長野県（218件）、新潟県（103件）の件数が多く、両県とも出没が活発な状態が続いている。岐阜県高山市ではランニング中の男性が襲われる人身被害が発生した。静岡、富山、石川、福井、山梨、愛知の各県でも出没が確認されており、広範囲で注意が必要な状況である（※5, 20, 24, 25, 26）。</p>
      <h3>近畿（関西）地方</h3>
      <p>三重県尾鷲市での小学校近くでの連続駆除や、京都府天橋立での捕獲が注目される。滋賀、兵庫、和歌山でも出没が報告されており（※27, 28, 29）、これまで出没が少なかった地域でも警戒が求められる。</p>
      <h3>中国・四国地方</h3>
      <p>島根県（114件）が上位10都道府県に入る活発な出没状況を示した。山口県萩市の住宅街での特異な出没や、広島県の安佐動物公園敷地内での野生個体の確認（※16）、岡山県や鳥取県での農業被害や目撃情報（※19, 30）など、多様な事案が報告された。四国地方からの報告はデータ上確認されなかった。</p>
      <h3>九州地方</h3>
      <p>九州地方からの報告はデータ上確認されなかった。</p>
      <h2>月次評価と展望</h2>
      <p>2026年8月は、全国的にクマの活動が非常に活発な月であった。総件数が3000件を超えた背景には、夏の時期に繁殖期を終えたクマが、秋の大量採食期に向けて行動範囲を広げ始めたことが要因の一つとして考えられる。餌資源を求めて人里に接近する傾向が強まり、結果として目撃件数や人身被害の増加につながったと推察される。データ累計から見ても、人里への出没頻度は高い水準にあると考えられる。</p>
      <p>特に、これまで比較的安全とされてきた都市部の公園や商業施設の敷地内、住宅街での人身被害や目撃が顕著であったことは、クマの行動パターンの変化、あるいは人間社会への順応を示唆しており、今後の対策を考える上で重要なポイントである。山林でのレジャー活動中だけでなく、日常生活圏内での遭遇リスクが現実のものとなっていることを、広く社会全体で認識する必要がある。</p>
      <p>今後、秋が深まるにつれて、クマは冬眠に備えてさらに採食活動を活発化させる。そのため、出没件数は高止まり、もしくはさらに増加する可能性が高い。特に、柿や栗といった果樹が実る時期には、それらを求めて人家の庭先や農地に侵入するケースが増加すると予測される。農作物への被害対策を徹底するとともに、地域住民一人ひとりがクマに関する正しい知識を持ち、遭遇を避けるための行動を徹底することが極めて重要となる。</p>

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
          <dd>2026年8月</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-01</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-01</dd>
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
