// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月19日 / mode: daily-report / 生成日: 2026-09-20
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-19-daily-report";
const TITLE = "2026年9月19日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月19日に確認された国内のクマ関連情報は計64件であり、人身被害や銃猟による捕獲の報告は0件であった。しかし、宮城県塩釜港の漁船への侵入や小学校至近での目撃、山形県酒田市の市街地出没など、都市的空間や人間生活圏への接近事案が複数発生しており、接触リスクへの警戒が必要である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-20",
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
  datePublished: "2026-09-20",
  dateModified: "2026-09-20",
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
      "title": "小学校近くでクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQZlJPSFprN0xVWXFtZjdCdnlscklrVDhpQjVrUGFQakhJb0ptSmFMZ01yalByOEh0SlN1bk5jYV9XSlliZ24yQ0ZBVWEtUWlaaUFoTkVqUV9ybWhDbGc5R0ktVzdpWktSSjZEQl9VMXktbHg1c1I0ZnZWRWpMT2pXdGVCekhfVWs?oc=5",
      "site": "news"
    },
    {
      "title": "漁船にクマ1頭がとどまる",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1FNVNwTEh2b1ozQ3VYZ0ZNa0tjLWJiM2E2SzNXTThfVGhwU0lNYjlFWGl4STB4OS0tRmNKLWYyWGJfYzY5ZzFqWnJsZzM0Y0NDbWlBaEZDWEN6YkZWYkJGRFNfV01PTnVOVTVXS0JueUxmM1V3ek9MUVZidVREejQ?oc=5",
      "site": "news"
    },
    {
      "title": "高速道路の路肩にクマ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFAwdHA4NVFVNmpmSHZHMFhMOUVYU25sUnd5eTIzeUlGakhBUFBpWGhUMHlRYlpkblZNbVJqazBmOTBITFNvNFF0YU90VXVuMkJTOUJGREE3MmNDMWhyNUlMMWQxMi1tdE5wRkw2OENpeVpoMWY4NThIeDVrM1ZfZm8?oc=5",
      "site": "news"
    },
    {
      "title": "クマがサケを持って行った",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1QOU5uSE15SmtPd1pxSkFjWTRoVkZtYW5sMWpCbGlwR184ZWc5NkI3QnFTNW1WamVWVVJuVlMzZS0tc3k0R25uTmtDQURWMkkxc2VrTEtCNGhHU05FYWd1ZGFaYURiUG5qX1dXbGJDbmFLakdPYl9HcTZjb0w1dUk?oc=5",
      "site": "news"
    },
    {
      "title": "若浜町でクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9QX0dmd3JEV1ZQVUZ1YzBWUEl5ZU1SVkl5bXdzYXFNWHI4SFRibGlSSFZmaHB6dW9qaU8zRTc0V2xVTFBfOGY1dGZmSTFKUnFCUDJ2aTJXZFFNUQ?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbk5EV1ZRZ0lqQlJmX2IzdlJjT3ZkazdDeW1oQzlpVklhNTBGR2pLZlhpV3VuanVUSUFFY3l1UlNDeE42a212WlFGSlpmcDktc2dlQ0pjRU4yOTBhNXVjQ2xHTE1BSkdmTE5aMWZFRzZfdHdWZFFKYVZ0UldVcXVGZnJRSHEyM0s1N1BuMWNyX3E1Ym82NmJGUHhpdjHSAaIBQVVfeXFMTVBtQjJCaDRpWFE2bHZQdUZuUWR2eUt0SmdwYzl4Y1B1bkNBYWY4TWpmNkFNUjB1ZFZlbV9YMmYzakVlZVJNcVl1MFdBdVVCSzNxRUNnOHZyUUZ4dmlHcHEyVzlBQXRVOUQtUV96Ul9KR0JIZW5SZi1lTEk4YUlzbFYwMjZBeFZKZmw4T3dsNUhRMjU5dW5rWE9JV2lzMTFPeGpR?oc=5",
      "site": "news"
    },
    {
      "title": "日本一登山者が多い高尾山が「クマ出没 危機レベル1」の理由 登山道付近を歩行する成獣がカメラに写る - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPMEp4VmV3ZkFRMVdncWhuYklYamlBWWtjNFFrT29YQVo0OUp6b0EyUTlWcGlSOWM5dHU0akNfZWRiRkhjelNZS0hlcEhOckl5UE1WUlMtMFBDOERiVUYzNjRPQ0tjTlctSXZ0N0YyUG8wbHY0M3lqVHp6YzYySWtqX2lLelDSAYoBQVVfeXFMTnl3MzU3SjFVNW4tTE94NWpMaDF0MUFMejJVWldJZ0V3OW9uek9qSjRFbDZlbVFKdEFidGVPN2FwYmZPX3hBU2RGX1NOeE5ZcXF6OXhRTFJxVjRsQ1F6MURQdkp4Y2sxYWxTUHdmaXMtQjZDWGYxZHVmaGZsREVUWFU2VXBiRXZMZW93?oc=5",
      "site": "news"
    },
    {
      "title": "住宅から約1.3キロでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5lZUVwNzNTUTFWcVlLaEV1V2xTN2ZGSDV0YXV5ZlBzbnZnNHYwbHF1c09rcVlsVUdpNVJPXzZRMXdoTy0yRGF6bmtteVpCZEg5QjA0UTc5dnBKYllKeHZCbnNQeTA5ZUFkU080c9IBckFVX3lxTE9HcEtTSnNwdGQtSno0dVpmSjBqT2Z1d2NpWjRBdDJ1TWN1OHVJVEhuUDBEMkQtWHV5ck9raXdkMzYzaUtiWFJDVE5xR041VXNScnJZUUtHT3hFSUdoYVJZMW9OZERaX21yYzV5LWc0MHhaQQ?oc=5",
      "site": "news"
    },
    {
      "title": "上川町白川付近でヒグマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9TUTBYLUg4Zi1JQWlzSlNEWmZDRDhuUnItZi1Nd3pHQk9vN09RWjczT21sMGZpellON2ZXZFBkT3R6LXlrRDhkd1hrZURiOHViR25JUy1PbUozZEhIM2d2TklYZ1JQZG9pMGtzckk1MNIBdEFVX3lxTE13WEpoVXlmYWR0aXFBTnppejdzQXNqT3BzTUFEcXZNRWJQUXF4TENPeFhCeVpnRkZGZmhwbXo0WEs0dEZ6WENRVjVJMy13MHNnLVZLSW9pUDIwSTBJOWdwMmpFSjBmcUJBN1JwejFOOWQzcFo4?oc=5",
      "site": "news"
    },
    {
      "title": "酪陽でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNDlySWxyOG52TDEwb0QyaW1sRTZPZmZSSUFXZEt6VkVCMDhjOXZBc3M4U05EWVJJbXZFUjBYNnhPSmxHcU1aS2lhWlpFMnlyTXBVeTBXT25xdmxMWS1wUkNzOG8yelAzenRNSVhOQ0FMX3hXN1V2WS1uVGhvdExvcXVyQURrdEZPT1hrZ1M4SmdTZ2V5N3pzamxwS2fSAaIBQVVfeXFMT0xMLTM0NENxckFhMjJoQjZFckJxUGthTGpRNDdTQ1RSNlpVQkZ3djU5VGVFQzdKR3lod3pVRUxkU1dBNG9xMHlkUGczYjExQld5UlhZWHlvR2JsRkFQTHVNWmFYczV0LURKQms0QlJXT2pCY25fZXh4Y2RCUW12MW5WN2xUVUxGdHVzRDVWcUV0VGdPa1hKNmdja3Y2MVZsd1d3?oc=5",
      "site": "news"
    },
    {
      "title": "浅茅野 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdXIyUjVvSXpnREg5V3QtUGRveE5UTFZab2VGc3JrQjhqYnZwdVNYYWprRk5NU1BmMWNJUjZuTTFOODFJU2xxb0ZzQ1pXelJJVkkwYjk3QTIyUkw5Rmp0NVV0OU4xUDRtZDA4TFlQZ3J0eWxkd1BOQzRxUnNjM0Flbm1FRmprVUxCb1hfZ19USVlEcDBPUmU2dVRlaUnSAaIBQVVfeXFMUDF5cl9UbHRwWUJ2akQ3cXlyc2RTYjJZQVk1V2l4RDJub1pvcDdGT3Q1WmVzejlsXzVfZ09NM1VISi1HcVdCU0F6TWtLeXcyLTY2YXYyQ2xCM0JVbjd2VGxGRHNwYU83ck9RRURHUnFnUk94UGFjN0U0aGdWUGZEOWhOV2s5SGg2Z0xaZm9iQUJNU29IMzJQdjh3a21YSUlCQzV3?oc=5",
      "site": "news"
    },
    {
      "title": "犬落瀬下久保 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOdkp6bElwdU5Gd1h4RzRUM3dtUHFndEhINjJBS1BUcXFWSldvZDBqd0FqTllkU2Y1WnhpOW1rdFJjOTR6eXV0VlZ4VHg4YTNXX3hEV2Y3TjVkU1Y0ZVlZV09sQl9mVkpNVWFxcVg3V3hVMmhMaGlKakhzYXFsMlkzLTFsaUVLblJFSEJMS1NwRkg4SnVPMnFmazVxdlZ2NlhDSHk2QTg3cFhfbUxOcnR2b19kNkFKMFRXT2ZjMlQ4TXpZTVljQUltSzZJQ1NoV01CRWFiS2s5X3dYWkVnN3VkZi1Nb1RmY1RuSm50Q0RRcW5lQdIBogFBVV95cUxNZ3RlS0JpaXBrNVEzUi1MUzYtcHdoQ0tkWmJCb1dMVnZFSUFSdXpWbzltVHFBU2lNZk85cEVpUWw1X1VEb1hvbTN1RG43LWJRMlZfSVRfaUJYcFVxejRBMTl5a21BZzBFOTE5ZFh6bHF5OEQ3a0pwbEphYkN6aDhFdXphbVJiamZMU3FYM0hjd0pFMkg4NDhzOTJmSTRzYWx4SXc?oc=5",
      "site": "news"
    },
    {
      "title": "酸ケ湯沢 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSzFXanRraWlEVEhKTXZUb09DUEJfTzF1ekhEQThWNjM5TnV2c1BvWUFSNFNXbkNDR2RnQTZ6WTFqeWxMMlR3ZU1DUmFlWUlLbmN0YjY4bXBfUWdHUFI2bzNjRExHTXJvLUk4YndCYkJMYUFKX2xUbTh5dndhOUNQOHRJZzFaNnQ0aHFZaUtIU1hYT1BqcVNpNUdpSGPSAaIBQVVfeXFMTXBENkVVNUZqeXlsWDQydVBxX3IzZGJoMkc4YUZSWDhiUXlhblVuNmQ5dkV6S2d6UHdHZS12UkFuakw0d0owbUExOFM2MTZRVzZwZTFvQXRlZFNPaWZCTjA1b09iVnVwQ3NKWXdjcnAwSklCRzh2eVJWV3lmTVZTQ1VLUTlYNXlDdEc2VzR6cWl3MjlUaXlUb19reW5aTTY5Z2x3?oc=5",
      "site": "news"
    },
    {
      "title": "金木町川倉七夕野 クマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSlc1OXNXUGphVF9LWGdzTUN1aWcyYTNHbFRSbWdKS2RqeGwxNDBBLXUyU0YxZk81NFRNLUJ2dHRNbWFnMnJLVjJOREZ0WG1XajYxbnlOTkdfQTZjS2pheEV3aGQtTFRraGlMa1BUWTZpaGUwQjlCNFVPdGtjc2hmbl95N2w3aUdTZ1pteFJ3RFZEVTJxblg4LVlWb0LSAaIBQVVfeXFMT2JpZXIwZWZnTG44YThTT01sVmRxOVdOX0pYOTFCTGwxdm1lZ0JsNThEU2FRNHNQWHEteTMzVkVVTWlVTU1YNmxGcUpjQmx1UGtqWW9iTGlNcjRlaTE4MXRQWmdnUHl3dDJqT1FkQjZsSHk1dU55UjZuWjR0UWttcWFrTHh3MUFHQVd3VkZ0NmtBaDZhUTBaMjREX1RqRi0zcEJn?oc=5",
      "site": "news"
    },
    {
      "title": "河辺和田岡村でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWE1OV1lMQmpBZ3Z1TGwzM2xKalUtTkkwS2dFdDJKY2dpV3ZVSWZfbFI1MG9KaHJGU2Q1VmxFeVpvMWdqYTE0R25XaXN3Vmk5VDBrMzBOMHJoa1BjZ3ltbWVXQUlETTBfZlZFMTM1X19OR1ZDVGk2NkNiRGkzRnVzbjlReUVVM0RUNFJtVVRJaG13dnFycVFkSGdCTnTSAaIBQVVfeXFMUGVId002M0ZSSmNYeU5PVlRrSW5EcmV6SVVBOFBWckh4MXBfMno2RTBWQjVPUXkyQzhjbW1yMFdqWnFuMVFtM2IzTVpDZExJZUpsZ3ZlajNkQmYzNVlJaTRTUVpINTBVSU4xOW5SUjkzeDZPWjdHR3R3R0NwOG5aTVBzREY1Z3ZoN0xBekkyc0dTSG0yWDJPN2RBNmhOVUg2LVBn?oc=5",
      "site": "news"
    },
    {
      "title": "花輪寺坂でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUjRfSDlxOGFuRWpYLThnQTd5NjdudnNWR0hqR1B2YXl6RFRYLTBLeGpwSlZraThIUFM1TnVJT255YVlyT0ptVGQ0a3dQQ2JqZ1VWRTlSM1o4U3lfQnUxcTktaG5WMGdxZ29kM09TeVVjNzBCUklQbkhyUVV0U213UkhSa0NDUVJYb2M4Qkh6WVpkbms3RnI3aEd0MGLSAaIBQVVfeXFMT2N3Ml9PZVBKUTJtdnFxRVJEVXhyYlVsb0Z1TE0yTmd4Tm5SY0pCWGhtS2tENk5sd05IX2s4RldrSzZVODM0c3pnY25kSDJWSUU1TmNBMDZNdjRkTmRKSS1maU5fajhyUG9mVnFMaHdEOGRiVHFVVHJWQVNpTjFYXzQ2b3MyQndMRlo1ODRMeFhodlhCTWdPVERseVgzVjFlRTRn?oc=5",
      "site": "news"
    },
    {
      "title": "払体到米沢 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQZHlkbXJLa016aTg4blJOVzZDMWU4V0tlSXUzSEttekR1Yjc3N29hemdaSjZBTG9FUGQzaGZvOW1ORE1HaUZUNmtQOGg1X0hYaGl3akYyQUE3TnJjTXMtaERXWllyekQxdnBnSy1oSW4zOGE4SUxiUzFEUWZsX2w3dFhBbnlOd2VLa2VCVzFscUtrbFRCRkh2bkVuQVhELXlwOTdQd2RlR3lqaEgtXzJBRUQ4b3JvajJYTkcxTHZ5SG02MjdTNDBfNzRseV9kRXF0bUZrR05JQndtSG5iU051R1hFS280QWNDZFAtaWtySVBuQdIBogFBVV95cUxON25TZ0FMRVViRVI1dE12MUw1MHNRUDBJcEJmbVJDb0hCLUJrVnAzbE5xN0wxb3lBekRiN1Job2tjYVNPX0FpSG9QTkZYZ0JxUFdYTnBQakNyOElzSHRmODV0Q2J3UmZpa0hMazRMU2ZBYTNBaHp1SV92d3ZOdERLaG9IbUNUeXg2cjBVZk1XZjJuVkRJNGVtQTZ6c0RrUV9BaHc?oc=5",
      "site": "news"
    },
    {
      "title": "岩瀬田茂の木 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQTRJeERPaFYxSGZSb0RRbHItSjBka3ozTExZRFlSRGR0emMyUE1WYlV4VklXRDVJRFJxQUdraEN0dXgwZUZONTNLMkVlbVBuZWRhUURFX3FvVW9BZDIyNVZjM0h6cVk1b3J1R1FpYzkxV2pnY2RtSEY1S1p4NDUtRC04R0FNU2h5VDNyX1ZGZXpFeWV6alVyMGZiNjXSAaIBQVVfeXFMUDlSdFdmZFc2OENrQl9ENE1MMnBZb3d1YkhtVDQ0d0VubUVlbmZPZ3B3Ry12MkM1VTc0UWhWRnlHWEZ0WEsxSTZDQUlqcGZRTjlBSVBJSndwaHlZUlkya19SdmRFbEJiRnp5eWFESFY3amRna3QtSmRDVEoyRzU0QnVXOUY5cnU4OEk2R0NidnhVSzNxLUpMQTNJMFZ3NnItbGVB?oc=5",
      "site": "news"
    },
    {
      "title": "河辺三内 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQdk5RWHk2RGtPdWhUNUJRZm1QT2NiR3MtQ0pUSVJ1Q1ZoUEs2TTFNZC1Tc3NHT2V6QTBQaXluMFRFMldrWmFDS25lU0NOSk5RZC1JaW1ac0x0MTcxWUx4U1IycmlVbEhKSk9LLUk0bk9zVEY5SHN1aHQxc0hzbm9yYWwtYVdzV01xQWJNTWJWVzlGVnYyd1BGbC1sREF1Ynl0eVBlSTFZY1dMY05aazFF0gGiAUFVX3lxTFBLM0VWVEx0MlFFVTdqT2NrTXBFZGhrME5uTTlVNkRFVWh4dC1oVV9RZWhwVmEyWmN0cG9BTFhnYjNCbFNHUm15SW4wMDhYd0IzLWVwMHZJM0E1ZEdLbVVPN0hjZVo4MHljczlEMzZjS2NRT3RVWWpuLXU1SEo3S3BVVXhud3JWd1RfTWQ1R2F3V2ZLbE5jZHlSWkF6QkxGWk9SQQ?oc=5",
      "site": "news"
    },
    {
      "title": "夕暮れ時にクマの目撃情報2件",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5PRDRvc3BqZk1VQy1kWXdXWFNfa0xsLXdSSUN3VElHY3NxeFIyeWJGTjFYZzdtMFZTaUZNekE3dGZPdFV1TDhIZzU1ZnRlOTdmM3NIQW4zQ1M1RVVYcUJveG40bUU2cHlOdzAyVnowN3dxQk1XbVZreXhsUkZlWkE?oc=5",
      "site": "news"
    },
    {
      "title": "新浜町でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1ScGZFZVRFYkdUeHc5VEJVUjlHMHk2NExKM1MwWlpIbWlzN0FsendVVzBMVG41QWUxWXFZRDVfb2JTSUZpNUctVE4zZw?oc=5",
      "site": "news"
    },
    {
      "title": "和良町方須 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNMEJJOEUtZlNyQVJUa1BzUWdoOFVjdXJKU0pyU21KVWwtNEw4a2ZzSUdhUXM0U3YwNkEwQi1KZFFjbTFJRGdmbDJMM1F0MzNTeWIxcjV5dDhFa2JLSW16d2JUbHFtWDZWdXBQclZQV0dVczZ3OVhOY2ZOZ3pQb2VOYXBrdkdhQmk4VS02cWpuVE01V3N3SHdWQUowelHSAaIBQVVfeXFMTlVGcm1zdTM0TEx4aHljQnFiczVKWXk4MGsxSzB5aFp5Tk1pRVlud0pJdXZiYkdHUDZWN2stNDhOcnNPUzRkdno2djhnMW0yb3NSSjRXbWQxeDM5WUoyUWt2U09GbUNPdlQzWUJmSWhKaktRb3RLX0xUbmJGUExjdkZxY2JrdzB5YTFDeWdRLWV1dVlBdnhGR3V3emlOOU9mQXNR?oc=5",
      "site": "news"
    },
    {
      "title": "畑野町千ケ畑西山 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPMkJfbTJtVFhrRTNLUzdIS052ZmJyc1Z4Ui1QRVRuV1B0X1pNbTJJeDFnX1hyMmtjcktQR3pBLXpLdF9HT3luQ1JITndpNUoxbGNVWktTUEVUZXVFbmZ5UjlzRDV2TzRWTy1fVUpneGZuMXZ1TFdnenBxdi1MTHVMMjgyN1J6b1h0Sm9LaEx0ZDdlWnI0RHdlQWExYmpTOFUzTlVLTXFndGxkLUxINVRR0gGiAUFVX3lxTE5NN1dpd2hqQ2VKaDJGY3lFcTFHNE5XNkJXSFl0VHlUTVBEbU16cUkzYUwxdi1TclFRZXp0XzJCd2tuM2xHTk1CZFBzVXVOZW56UHFuZ1IydXU5dERFQkFNaDZ6d05YQ0ZIamlYRXFTZlNHLU9ucl9OMEZYZXV1VHB1c3I5RUgzNllnYlRXelF4MEpYTEZPVjhrQnJwSGVndkxzUQ?oc=5",
      "site": "news"
    },
    {
      "title": "丹後町平 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZGk4dGdkSThrOG5YVDFqTDJTbWhaaW10aXhmRjJZUUxQNlF0QmRlckZzN0o5ams2TlRHeEJVU0ZXX0lDYUs0RnZNYXRpQzJQcWVpNlpCYlF5aVBlSnhWQUVNZmJySWZ6QU92UXlkS0VrMkF2T3doSnVmeG11dzlFUjI4c2VFQ25yME93eTI5RXRtVFp3YU5zYnByOFXSAaIBQVVfeXFMTkltdTBqN2hxVkRneE96RlNITnNQc2x5STRIT1V4OHRFYTdXZGp1dEZnUjc1anVST3N4cUN6ZjVrb0hDMXhXRklEVFFTWXRqX3JSMkxCVGhucHhmTkxLa1hLQ1JNQ29ndWd5RDlfT19LNVpVaThvQzB0dkdBbE5pUFRvSjdBSmtnWERUUHVIVFBSNnNia1ZZam53QWd3NE1MLUtn?oc=5",
      "site": "news"
    },
    {
      "title": "赤城町溝呂木 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPb3JtQkhuMWRORlZnQmVVLWx2Mlhma09EcXpYZVg4cnpyWFVjWDJXVUc0bXExaWlDVFpRYkRfZmtVZlpkYTlwZjc3TnRwam82Wi1MV2d2b29JRTVRb2dsZnVBWkhBdXYxc0JWM0VDQ1ZUMW9PLWxsZjdBV3pOakFrdHRNS3RlaXItWEdqZjliZ1hvYW00Y1JWZW1EeHHSAaIBQVVfeXFMUHIzalJ3dDNVZWEzYm1OSU9LYnllYVpVZzd3SFNpZFdGREU5TmJkakwyRy1lSnFCQ2plVlFpWXhwZjZmdjMzUFJ3b0s4RnFvT0RDaVV5REprS01BV1ZQWm9HNkpyd3ZQbm5sbnJPMFJyT1Atck9ZQklhakxXdlNMSURXN1Q1QVAwZWRaTnR2VFBMQVVHRjc0MGZBU0VuYjZmM2ZR?oc=5",
      "site": "news"
    },
    {
      "title": "白沢町上古語父 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNdmFfUVNvaFBjR1pzM2lsNldTWFhzMkgtZzZuRTBZWmljbTBMN0tJVEJJMW5zOU1wbzRwZTE1R0twSlZsZkdKS3RFSUlyNlRneDJxWFVNcVotSjFDVVpCX1ZVNlBka0tfaTdlejJVZmZhMDdhNkg5c1QyYllDb0lMRTd3RmpFTkJubVp1SkpuQ1l3OXZ1RmJBcmRZRDF1enhyS0ZxUVJDdEpQdGFZT3JBdF9xM2pSb2RISjZiZzhGbHFFMWZ2Ym9Ub01GcExObFdYTnVMbUVMRUxrTGFUVXdNTE8wSWlCeW1WYmNGNEtvd0JLQdIBogFBVV95cUxQOEpiT2FUWmNWSU5Eb0JCZ3VLdGtGTGV4a1I3V0N6ekp3bWZxdWE3YnZBVWg5R1hpTGMtbWJqblZtanFxUVFIN3NCMnU3eXd3S3pjVXRNLXhvSW4xaHZUQldUSXhrb2c0UDJCbjRjSV9zam91b3BSZm5NS3lLSFZ3NThiMExTNlJGaHBTWUVHd1Vxa2VaWl9OWkdCbDZmY09fb3c?oc=5",
      "site": "news"
    },
    {
      "title": "花園中南 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQWVNX2ZOV1FFT1VGRm5KX0xXdlVnS0EyVmVjdXU5WElnY01NMUNrQ2JQd3QyTEdMU25waGZLOUhMT3o4VGIxdktsR1BFd0pZWm5OblRvZ0UzVm9BTEdGcGk2OWtma0NySGhrdUIxd2hTWERiUjdLWkFjRTk5MkU5YkQyV0R3b3dHWjdGZWZpNVVWWU1xZDNSOGp3UGfSAaIBQVVfeXFMT0ZFYVNMM094dXVPMTh2VEtobDI4Yy1uamFwZmJpQWJqNUNOQl96Q2g3b25Na19VTVdBQ0d4bVhXRXNEdjJ0dF9IbTIzRXJKUjZBa3Q2Q01xZVhRaG9Nc19mNUVuUmVuMXFaYVBmb1hZRFE0UFhQVjBTbGtKdlRZeV9TU2luMkhyMVlNakpHSUJ1LVNrRzlEX1hBZTlYN1RwZjVR?oc=5",
      "site": "news"
    },
    {
      "title": "香住区上岡 クマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOQUduRjJ0RFA5YVZTSGxqU3Jqd2xfcUloeHRnMTVjbFU4WlpQYl9oMDY4MlMzQWFnSEpfVHpGNEJIeno5VlVUYTVRcUhIcEZGT2UtSG55LWxkc1FlUlp6SlFweEtsVEJlZS1oQXdtQlY5Yjd2NUpBNnJYRWJWQ0YzVmh2Q3pJN05rVl9CVHZEdnVMbndqclpaRTBKUUFaMDAtUEMybXVSTDljclF3VlVyanJmaHZ2TGpCRlkybUNVclhDT0RQSTBwYV9KaVMtTVJLREV3dDRGNk5DM2hYRmtObk1mb0tJTEJNMVZCQnhJeVlpUdIBogFBVV95cUxNeWZNdHZEWU92T0RJZTlYR2JwcDdBbjZpZjlTOVNrODBZVG0ycE92VVhkc3MxNkZNbS1RTUlMLVZPWW1fLXkyUXQzQjMycUtpcm5ubTM0alNNam12VDVZeWN0VVkzUUR2dEJKR211QVFzQTB1a1ctY1N4eU4tbEszSFZpek8zVzdzZERBREJjZVdDR3o1alFzalZSUTJnbUNnZHc?oc=5",
      "site": "news"
    },
    {
      "title": "（新潟）村上市荒川でクマ出没　９月１９日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWjFjMVpFOURNVDFObmptMUVWMWtzYW9JY0tuTjVTUlFUY1hqN29ldHFSTnBpRV9XaE9OSVNaYmJDeUtJTEZ5T1FZeWc1YzVVSlhyMDFfcy01UHNWNkVyQkJWNlJQTjZUTmRIa1hWSXVESmo4TkV0NkFuX2NzUERreF9PRFcwQzZEYzRlUVBRYkZVMVlPMzdzam5va0zSAaIBQVVfeXFMTTA2bGYzaFJtbVVNODZ5VGp4a0wyNzlHZ2lNMDBlVUN4N3dDVEJ6eTB3Nkg1SDc4S1VrbmdpQzFMdWRBU2dsSXh4eUlLOVFYYURDcHRkbzRPNnBsYmFDT2hUeFVNNEVnZnotNkpIeVpDQV9UNmZ6c0w5LVFKaEpsTzhROGZiU3BIWGloektJV2xySGtwVWpMVC1wazQweUZ0cGdB?oc=5",
      "site": "news"
    },
    {
      "title": "大代町新屋 クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQYnJoNlZkLXIxUG4ySmEwZFhxNWhiZHJVX2tDam80YUJjR3Q3Y1hMZy1TN1BTWDdyZHVLM0VsRTI4WGRTb291WVVTX1dQcDlkdXMzZzVOWl9uMjgzV01qTUl3dFJ0cGtaNVJiLUVFdjZ3UmYwaEFjWnpuTFpfSFp1MENteGFKRGlHZUNZWlVjeG44ZG80UWpBUjM4RVVDalFqZzB6N1c0SGF6UEdJTWZ3Sl9vaXhBVXZDQ3FDRjdmSFNJRHc2UFVtRmRtN1BPOFQ3czF1d05uYXV2QzNtRVBGZlpRMTJoQWY3SlNXU054dHV2d9IBogFBVV95cUxOb3J1NXlGN1ctckg5MllidFU1Y0M3RS1uNHVBZVhKcHQxYURWcjNoSllaUUZRaVJORkFYWG84Q3BIMFV0Y1VTT2JPTUtqYUJnaUFOUkJGdHJ0NXI3QTdSdy02Tkt4TUxmNXU1VGw3dExGNnBlZDFJb2xwOXU2MXpDd3BaNFhFSy1Rbl9UTWhYRl9mVTdEMFYxUGl3Q1dGS3RVY1E?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":16},{"pref":"宮城県","count":13},{"pref":"秋田県","count":7},{"pref":"青森県","count":6},{"pref":"京都府","count":5},{"pref":"山形県","count":4},{"pref":"島根県","count":3},{"pref":"群馬県","count":3},{"pref":"岐阜県","count":1},{"pref":"和歌山県","count":1},{"pref":"兵庫県","count":1},{"pref":"新潟県","count":1},{"pref":"東京都","count":1},{"pref":"岩手県","count":1},{"pref":"福島県","count":1}];

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
        <span>対象期間: 2026年9月19日</span>
        <span>·</span>
        <span>公開: 2026-09-20</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={64}
        periodLabel={"2026年9月19日"}
      />

      <h2>主要事案の分析（生活拠点・都市空間への侵入動向）</h2>
      <p>本日集計された64件のデータにおいて、人身被害および捕獲・銃猟に関するキーワード一致は0件であった。一方で、都市部キーワード一致が2件記録されたほか、人間の日常的生活空間に対する直接的な接近事例が複数報告された。特筆すべき事案として、宮城県塩釜市の塩釜港において漁船内にクマ1頭がとどまる状況が確認された（※2）。港湾の繋留船舶という極めて人工的な閉鎖空間への立ち入りは、沿岸部や市街地近郊への移動経路が存在することを示している。また、宮城県多賀城市では小学校付近での目撃情報が寄せられ（※1）、宮城県大和町では高速道路の路肩にクマが出没した（※3）。教育施設周辺や高速交通網への接近は、偶発的な突発遭遇や衝突事故の重大な潜在リスクを内包している。さらに山形県酒田市においては、若浜町（※5）、新橋1丁目（※6）、浜田1丁目、北新橋1丁目といった住居地域において連続的な出没および目撃が確認されており、市街地環境に対する侵入圧力が顕著に見られる。</p>
      <h2>地域別の出没状況と分析</h2>
      <h3>北海道エリア</h3>
      <p>北海道では本日、全国最多となる16件の事案が確認された。石狩市の毘砂別川河口付近においては、クマがサケを運搬・捕食したとみられる事案（※4）が記録された。また、浜中町において住宅から約1.3キロの地点で目撃された事例（※8）をはじめ、上川町白川付近（※9）、根室市酪陽（※10）、猿払村浅茅野（※11）など、河川河口域、農村・酪農地域、林縁部に至る多様な環境下でヒグマの活動が確認されている。</p>
      <h3>東北エリア</h3>
      <p>東北地方は本日の総件数の過半を占め、宮城県13件、秋田県7件、青森県6件、山形県4件、岩手県1件、福島県1件と広域で多発した。宮城県では前述の塩釜港や多賀城市の小学校付近に加え、塩釜市新浜町（※21）での目撃や、富谷市における夕暮れ時の連続2件の目撃（※20）が報告されている。秋田県では秋田市河辺和田岡村（※15）や河辺三内（※19）、鹿角市花輪寺坂（※16）、羽後町払体到米沢（※17）、大館市岩瀬田茂の木（※18）と内陸部を中心に目撃が相次いだ。青森県では六戸町犬落瀬下久保の道路横断（※12）、五所川原市金木町川倉七夕野での痕跡（※14）、青森市酸ケ湯沢（※13）および酸ヶ湯インフォメーションセンター北東側入山道付近での子熊2頭の目撃が確認された。岩手県盛岡市では1頭が東側の山林へ立ち去る様子が記録され、福島県福島市松川町でも山林へ移動する個体が目撃されている。山形県酒田市では前述の通り複数の市街地町名で同一もしくは複数の個体が確認された。</p>
      <h3>関東エリア</h3>
      <p>関東地方では群馬県3件、東京都1件が確認された。群馬県では渋川市赤城町溝呂木（※25）、沼田市白沢町上古語父（※26）、桐生市宮本町の中山間・山林近接エリアでの出没が報告された。東京都では八王子市の高尾山において、登山道付近を歩行する成獣が自動撮影カメラに捉えられ「クマ出没 危機レベル1」として報じられた（※7）。高尾山は登山利用者が極めて多い地域であり、利用者の多い行楽拠点における出没確認として注視される。</p>
      <h3>中部エリア</h3>
      <p>中部地方では新潟県および岐阜県で各1件が記録された。新潟県では村上市荒川での出没（※29）、岐阜県では郡上市和良町方須での出没（※22）が報告されており、いずれも山林を後背に抱える水系・集落沿いでの活動事案である。</p>
      <h3>近畿（関西）エリア</h3>
      <p>近畿地方では京都府5件、兵庫県1件、和歌山県1件が記録された。京都府では亀岡市畑野町千ケ畑西山（※23）および千ケ畑での目撃のほか、京丹後市丹後町平（※24）、網野町塩江、峰山町赤坂で出没や痕跡が集中した。兵庫県香美町香住区上岡ではクマの出没痕跡（※28）が確認され、和歌山県かつらぎ町花園中南（※27）でも出没が報告されており、丹後・丹波地域から紀伊半島内陸部に至る広域で散発的な活動が記録されている。</p>
      <h3>中国エリア</h3>
      <p>中国地方では島根県で3件が記録された。大田市大代町新屋の飯谷川付近において、道路を横断する幼獣3頭が確認された事例（※30）や、大田市内での追加情報が寄せられている。幼獣の複数頭連動行動は母グマの随伴可能性を示唆するものであり、河川沿い・道路横断時の遭遇に注意を要する。</p>
      <h3>四国・九州エリア</h3>
      <p>2026年9月19日の集計データにおいて、四国地方および九州地方からの出没・目撃情報の記録は0件であった。</p>
      <h2>本日確認された地域別出没データ概要</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">対象都道府県</th>
              <th className="px-3 py-2">確認件数</th>
              <th className="px-3 py-2">主な出没環境・特異事案</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">16件</td><td className="px-3 py-2 text-xs">河口（サケ捕食）、農村部、住宅近接</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">宮城、秋田、青森、山形、岩手、福島</td><td className="px-3 py-2 text-xs">32件</td><td className="px-3 py-2 text-xs">港湾（漁船侵入）、小学校近接、市街地、高速道路</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">群馬、東京</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">登山道近傍（高尾山）、集落・林縁</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">新潟、岐阜</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">河川流域、山間部集落</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">京都、兵庫、和歌山</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">日本海側集落・痕跡、中山間地</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">島根</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">河川近接道路（幼獣3頭横断）</td></tr>
            <tr><td className="px-3 py-2 text-xs">四国・九州</td><td className="px-3 py-2 text-xs">全域</td><td className="px-3 py-2 text-xs">0件</td><td className="px-3 py-2 text-xs">報告なし</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>2026年9月19日の出没状況に基づき、生態要因と社会的リスクの観点から以下の評価を行う。</p>
      <ul>
        <li>季節要因および餌資源の利用動向: 9月中旬における活動として、北海道石狩市河口におけるサケの獲得行動や、島根県大田市における幼獣3頭の移動など、水系や林縁を利用した活発な移動・採餌活動がデータから確認される。秋季の活動拡大期に伴う空間利用の活発化がうかがえる。</li>
        <li>人口圏への接近度と突発遭遇リスク: 本日記録された事案の最大の特徴は、宮城県塩釜港の漁船内への残留、多賀城市の小学校近傍、山形県酒田市の市街地町名（新橋・若浜町・浜田等）における目撃など、高度に人工化された空間への進入である。本日の人身被害は0件であったものの、遮蔽物の多い市街地や港湾、通学路周辺での出現は、至近距離での突発遭遇事故のリスクを高める重大要因である。</li>
        <li>多面的な監視と警戒体制の維持: 北海道の16件、東北各県の多発傾向に加え、東京都八王子市高尾山のような高密度登山拠点での撮影確認など、出没地点の性質は極めて多岐にわたる。各自治体および管理主体は、河川回廊や緑地帯を経由した侵入動線に留意し、地域特性に応じた情報共有と警戒態勢を継続することが求められる。</li>
      </ul>

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
          <dd>2026年9月19日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-20</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-20</dd>
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
