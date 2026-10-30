// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月28日 / mode: daily-report / 生成日: 2026-09-29
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-28-daily-report";
const TITLE = "2026年9月28日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月28日の全国におけるクマ関連事案は総件数63件が記録された。和歌山県における人身被害報道や東京都での緊急銃猟報道をはじめ、東北および関東、北海道を中心に果樹採食や住宅地周辺への侵入、道路横断事例が広域で確認されており、人為空間への接近傾向が顕著である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-29",
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
  datePublished: "2026-09-29",
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
      "title": "2026年9月28日 和歌山県有田川町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9hbTFFTzF6VTBhN2E0SlVOd0V1dnc2X05oWWhEdnVkbEpoc2dsUVJMd2lnanlkTS1tWmdkM19OdkZrNnBXbWZ5QkZuTU9SSm1ITUFxSTQ2OTVOZ0xuT040bFFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 東京都八王子市の出没情報",
      "url": "https://news.yahoo.co.jp/pickup/6596889?source=rss",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 岩手県盛岡市 茶畑一丁目の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 山形県山形市 山形四中近くの出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBsTDByek5zY0pnRWhwZWJzQXNISF9NeHZrb3lBQmNiVjgwcUNyTnFGWXY0Z0dKeHlUZ0lVdHVfMlRIVFg0NERXcUVrN0tyWDl0R28wanlvM1p1T0dwQ29kVXE2ZUwwOGdkVXZJTHNBYw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 山形県山形市 泉町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTm9XOXo5c0JHYnF6RXl5ZnhBNll5LVlEd2dIR19FaGlKSWRKVkF5Wnlodl94aDZjT3ljUW5QSmdXcUprejhpRmRZTlBRdU1lRWtIV0VpYjRiZ0lVZGFxMzJKejYwNXFHeUo3RmYxUlJWd0R4RTNmcDk4UTd4MjBLLWlWWmtKdW45Z2t4UTRPX3ZNUXhkMUpKN1VkVjTSAaIBQVVfeXFMTzBtbFMtYUFhQTVjNnZ2elFVTW9Zalc4MG1tUjJQVlBWa205RUl2MmtiR2FES1V5UHpIaEZfTmx0clRoNTExdUR0RFVrb3lDazkwYTVJR3VSeHhpUnRWYUZfdGNVZmVpZDBTaWJkNXRJendfMGh3SE50andXQjNLT0NDREVXdC1NblZDT2RTOWlRdUZjdnN5YmhMVUdnaG8wbGdn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 北海道斜里町 富士の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdl95UFBwbTR4YXZQUVFwT0JWV0NYMWU1cWYybXJKN25UbTVwVlJLZnJmY1FyalNKY3VCclhfTHlWTHNMSHJISzRGcVhnS29pamJ2bzRUQzFEZVVCTWl6ODgxNEN3N1FEM2lfSlZnbjJGWVVPbDRlUG9Ld1NObkJiVGZDUDBJay1FMDFORXRYUTBMZEwzV3ZJUFNKemzSAaIBQVVfeXFMTlFSZXdpYkxScG9xbmhMcjZ1b2lfalB6WUNIY1p2a0UzWHk5NTM5aUpZeDBMa01lNHdzWmhoTW0zb1VPZ1poMGJxUDQtVWVSYjcwMl83QWdnSUtNaVFSRjdEN3NNYlZNYjJIZGtuY1FQUnM4eWhtM1Ita3AycmRYWlg5Ujl6Ri1pTWFhQkJKYmZmTlJyR19fNXRIcUtzN0thREJR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 北海道えりも町 目黒の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQNUV5YVNBRjN4dVdMMW14WUVvX2hPcWgtSnRRZ3NVZks0SFNNcmMxWFgxbDBoZ2prUjZMRnAtM2JvbUthdGNhdlFuSGtpYTY4NEluM3phMU44X0JycFdiOC0zUVRuQnJUX0Z6Nkd5RXQxajE2UnZYdzVuSGFjRGl3UlZybThBR0lKNVB6ZF9OYWhnTTlLN2E2cGZkRVZRcUd6TW5wSF9xN3FHZG9kbmlnQm9KcmcxWFNkZFhRT25CRWZGVWdnY3ZYVjdLR0FrUXM4ZW1sM0tDT2hjZENZMi1iOUJEbmMteHFwWWtKd0lTeG9ud9IBogFBVV95cUxNd3FjcWpBeEJOSjVSMExOMDFaUUFSQ3FlZXNHM196bXRUeTFaeTVVRHBJa2NZOHRzdmVnb1h3c2t1a0xidjNwbG1SWU9hRlQ3MEtJSjNXWTZiVkFudEVrZVRmR1dieDRlc3ZtZi16dmNrbGthbG1aSUlTZnM5Q0IyekdMVnF3UXlLT3pIMjlrQWl5aDlCNEM1VEk3aGl3MjhBOHc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 北海道広尾町 紋別の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVTZGdGtmbVByQzFNZENPQ0JVZE9uaDd5QkpRREVBUkRGTHNKSlFWNUp4Z2RsUDhpSFU1Szh3UHhJcFRzUHRhSUlJX1kzM0RTcElxcDV0YW9TYUdmcFh1MHlIeTVFdWJZTkVaZDIybFhGX1diSVJGeF9idTkxa1FlTHRibUtoa3c2dDFTOS1FVElSQUY4YVNFWDFxZTXSAaIBQVVfeXFMTmltV0J3bVBfbjhWMnB4aVpQTWxhUlNCUnBnb1Q5eXVNUVFkYnVhVW91SWVIVzUzMnZ6Z0R5bHFLR1IxVW9WaVFIU0M2Q1laZjZDakFBMWlORU5qYkZuLXVRbU1uV0lZSDVOUUc1MVBkNGpJa2ZGLTBQUWVZMm5ZRUxtaWZDNmxhanlZN3ZCMXNCaGNWN25NOVBIQXFURXR6UG53?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 北海道岩見沢市 毛陽町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOc0d3cHBUS2dFWkxaSF9obzNpRHJRem1sOWpJUlBWVEVqUDM4LUVVWUlhZzBvMUFuaVQxMlplVk4xMnd1SUgwWHYtdTdfUm0xdlNIUmhSM0duaHRzdy1mRXZNem1CamItRVlEeWptMk0tdzVDVGp2WDUyS01RRGU4eXU5SF9qeVA2NXZzQUdURzJ2dnNLR2hEMURaMkbSAaIBQVVfeXFMUElGbWxVTEh6cEJuVDNxeFVfNkk2M0gzaEItZFUzNW9ZeG5DVDlXOENmWE5FcVdSdkg0NFpXWGtocjN6TEU4T3JTa0NSeFM5Rlpva0V2VEVWSUd1X20tNVYtSFNHeE1vWUJIektucHcxUTlTYWk3R0tEQndsalpoNy1nZ2hTQVB1TDFYRGxGbnNScHJrQUY4dm9hZ3RvZDNPcDd3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 北海道深川市 鷹泊の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNa2FkUElJZ1dFWTl4NUZ2VkJ4eFVtOGdyMHhLWTgxbGRrZ003NW5URlpWSHBGVjg2eVFFQW5xV084dF9JdU5fZXBzOVdjQjFlRWkwYjUzY0pPZlUxZGthNjZvcEVLaF9tbnp1ak9pY3hkTHp2VERvTkJtNHFGMTN5ZTRkLU93aTlDc0lWVm5Yam1PRWE3alJOSEdIeWF5ak1lekd1WDcxVmdGSHZwaHRiUWdmN0dnNzVQcHVsWWgzN25yUnZRUFBfT2R3Ti1pbGRZcE1ocm5MX0JaTjhSczlFV2lEbHVHb2Z1ak9wVWpUY29mQdIBogFBVV95cUxPU2ZfRm1yMXdsbmtwQURZTUFIbFlCMTZpcXptTnR2UVpaRUZKMGxLeTNPeVV5cFh3Q0VkbEFiQThsazlGU004cVFRQk1YaV9WSTZNckhDaWhSSHpOZHNFV1B1WVVEMUpXV09GNV9LWUw1LWlrdlg1ampXSVFnWU51SDdWWkdPZDkyNy14RzdncEFDWFhiaFMxalR6VnBuNXQ0Y3c?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 宮城県松島町 幡谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZVBmcFhXMm1xcmFRMUh1cW1jRjlSMHVZaDBVcHBXdmhfaDY4UlprWFBnX1pxdXRicWRvREh5NDQ0YlpoUFZzRmpmYWpFQlFackU2UGxoSFJESjZLX0pLWEgzWmc2ZjZJalB0cmcyRTF5NlRONjdMYnp4ZUlyZVh3LUtGY1B1UXFpRzhGM3MtS2tNUElCQlNoeENYdzDSAaIBQVVfeXFMTm9jS1ZUZVVNQThuTG1jOWltZ1dsS0V0M05LaU9FSGZkWmN5TWdQaVI2NzBQM005Wm1BRElzSHlILTlyNS02SUxHbHBfU19Yc0ZsX0JYSzlLQlVIbHM1amo5Qm9NMHFzNzNOVWU1bzZjdzBVWHAxdl96dGVMQ1g4NndfMWhfX2xCYlppdmR3ZHdKMVpTOGhGUkFyM05ERWptU1Z3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 宮城県栗原市 築館小淵東の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPLTU0YnZzX0hweDF1WEROOXZ6X2FlS0gzUllqMmdDWl9pYjVBTlBlRFFSNGo3alJqMUtBOENDNFF6VGlNc0wzckhGMjRQSlpVdXJJZzRkcldabjBIZjFKcm5ZajBDSlNwMzlxZWhCZkJzYnZwZzgwa09Pam9nNUhWRWJ3VWxBdGszT3FtVUt3clZzVHA2Z2xVdDJ3enbSAaIBQVVfeXFMTzdRNXB2LTAyWHZ4UDZQYTVVSWJjM004bHJvVUppb2hzZlRoZmZac0JiZFdLaUxieklwWklDQ3V4U3cwZ2NrOXJZNmo2bFpLc3pSc0JSZUY2MTJ3ckJoNmRsbnZodFNOaWt6VEVMaWVudWl2dkJsOU43YTBEWEs5ci1JdXNCMzZOQVMtRlMxczlwdkItYzNCRWd0bHVTWG9Dc01n?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 宮城県仙台市 青葉区芋沢赤坂の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOUC1iZWZMSWV4NVd1alg5S1JKYXNwc09DOXJtc3RTY01IODdIR3VoNHVybzA1R09NZGtVcm9oZC1ON0FNU2FrRVVXYU5Hd2ZPaktmOEdWeVliMzljTmt4VE83cFBMZ2VaZWRJamNXOC1JRmRZMEJkaE10U1Zuc0RLTzBBTXFSYnRzV0o0ZzhjclE3RkRqWHpNUzFVeGHSAaIBQVVfeXFMTlFlRXhzekN6ZVJxazNxRHp6dUxMVjF5NHI3UXFKMFpZLUZxblA3SVZVejBoSmRsT3VWbzVEeURkVlF5Smp0WnNlVXRFaWstSXRyVVYyc01JOXp4cE53SzdsSHE2c2F3Ti1GOVBRUU9MN0J3NDBSdUt6OGVjblZMeU4wc25qWlk0aWVOaVlNV3hoSTBxX0FjQTA2X3RSUzRyeHRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 宮城県栗原市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 宮城県大崎市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 青森県階上町 赤保内道仏道添の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOZ19xQjZtZ2FRUlpGb2J3WUVzRm10TThsZDlBZTZLLTlGcHp0YjlzazN2X3RwSGVSdlJxbDdqaFdDQ211anliYmRPYkx6VnJybG5LZ2tOSFlFcWNIdHJ0LWdNcHBMekZKVWdpOVg4U1hiUmYwQXI5ZnBBbmJVSFhudUIyU0hnbjRSZS0tZWFobkpwalRxRGdPYnlpb3VXYWVWWFlQMERLazNhd3NLUVBR0gGiAUFVX3lxTE0zblpJUHVzUTVMYjk2TGNOalV5SFZ2VldoN1NhRWFDVU8tT3hRZTh4ekdaMkRXSjl1Wm9iRDB4c2VRSWRaZmRGQnlNeEgzM3RqVE8taGhhMUxJRDhMSndaUkxITUUyaWZYVlhMNm00S3h3MkRmNGVnWkJfaWhtTDJYRWN5cW9YVVpqa29pQjJSczdGOHFWeEdwTWpVQVhVLVk5UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 青森県階上町 三戸郡階上町大字赤保内字道仏道添の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 青森県六戸町 犬落瀬金沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSzBreWhSb1lKZ3U3MllDUElMZDBMVmJtbWJXZTYxU0tlQ19rSVlQVWZNU1RleWVtRm9qQjMzRjlscUh1MEZoaFprRS16RGpiTkpBN1AtZ0RnTVNyNld5OHBxbVE1NThydGRzcEMyYmNEZGFmM0Z1ZzNLZVB3cXlPTG00ZGhNX0VPWms2cW9adENYc1dlNnpNSW5Kc0bSAaIBQVVfeXFMTUJHVWc2MVFEWDhJczQxTENMZnJKRXRzLVRRMFh1NVRVWWZJd3pGOXVvVnFPS1RsQlBqUVFLQ3U0RFRHaEIyMDRmS3pITUN2WHo2RGtDR3R3cXNVclFDVlhFbFRkeDkxWDRXMUo5MjNiM0JpUDdFbzJwcDRKMEZ3bURfUTNOZVZIdk4xUlFJVU0zZ1A5b2RvcDJ3c3lHd0l5a2Z3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 青森県六戸町 上北郡六戸町犬落瀬１１７−５６の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 青森県東北町 夫雑原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWGhld1o5ZFFQUldRQkVDTEtQWVctcHQyWTdXNHFuUkt2c1FaVHVOd1JSQXVHMmItelFZRnVIX2lOZ3d0aTBuMm96TGFmSC1UZk1EZUtqV2VzbnJNMDkxcDFTNnNZZkNOeWZhN05acXJERm50d0ZFQTc1Y082NFZyTFFFNkJNQklSQW5UUlJYZ3NkX0ZmMHYyX0M0NDnSAaIBQVVfeXFMT2twVnc0dWRIeHdudGF4MEFhUTJoSWd2N09VU0tDNk1UelRIU1FZY0dINTNkTExJUVU2S3JPOERhZFJVclhzdVYzbXQtWE1LbkRuSi00eml4dnhjUE5DWmV5UG11dmJFcHN2WWVySEZibmtfa1IzZ3dfQ0hhMmxhTXBWRGpObkNibEpzem5ubEhVeHRnc2lXRTJEcTVrVFZaZ2ZB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 岩手県盛岡市 下田字生出の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 岩手県花巻市 湯本第1地割の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNlplcVVCRmp1clVCdW5xY0c0TWhiS19aUEhZc09Rakw0cGptNl9ZZ3VzUkRpSFBsQ0RuVWdJalNELVZpU2R6SWxNUE9pUnkxV1lCeEVxN1FsX29tYWJYNGZqQzlMSUpCdEl2ckFXbTVzT1dRWm95Wkt4RERYWmptNUIxY0pyS2ItZ19HUkpEOVBuT2Rrbk1jcERxVkjSAaIBQVVfeXFMTVhGbW93UXFXMVFTdzV0c3htX002MUJJeGxtbXdhZ1ZFa0Z6UnhvNjFyb0hnTzI3eUxEZFhSamZDRHFnTEJMYTBDald0QmRicFYzbjdLbHBzY202UmZ1amM4UEFUenBmek5saFZ6aUFFdHFGUmhMMHFnX0UyMEFvWDJTNkNMYUMxcXRyd0NaSy1yaTFzUzJzb0g4UmFjVExkQTV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 秋田県北秋田市 前山萩岱の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONExiNjRkR2pHM21LQkFyYzZiUUxfbkN5MTM2a1c2M25JRnBSemZrNllxR0NINEpiRDFvSFRNNUwzcVE2cUxDdDdsWVVmc2hfUWJBcERueGpxRWUwZTZDWnpCWU9yemViZkxXRGdvcjF4MTlBdWtMSTNHMkVIU094aE02MEYwV2pKVGt2NXJJVlRxQlhDZVYtcXJXYlrSAaIBQVVfeXFMTVl5eDAyTTZyaVgwVnFWSmpMVFRpNl9DOG5MSjRYZF80dGhmVWg4aERaQUJwdENLdnhyd2lHdWNjVTBIV2VEX2tOSllyc0M0VnVuendfSUtiR2hhRGZNUjJlN05EQi1HbzFqc0dVMUtKdXFsdkNkb09IUUZGbURKMkZ1OVFpUEtPM0NEb29kSWxtMFVoZnh5NXBqNU5BUXZXdFl3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 秋田県秋田市 飯島堀川の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeDRncmRiMFdoek8xU0Nmb193WndrLUk1Z3pJR1FnNWlnNzlLQ2p5cm80MUk0VXBycjJMOEtqVkxCTS1ubEh1bE13Z284RU9JejJPWElDZ1Btd0dGUS1nLXI4dkRMS2R3VFhYZFhUOWkzZzBTNXlZSFZMdGhkY0oybnl2Z3BkXzV5U2NQRmJMR3JBdndwQVF2TEY5TmTSAaIBQVVfeXFMTjNvc0xxWk0tMDhTeC1mMm5Fc3JFLXFEZHpMdFp5bEtOWW4xUFpKRVE0dDBNODd2OXBPUHdvQUxGemVqel9NVVV5a3BtNGhMVExDcFhBcHZ5LWhMZzM2bjhmQVVrcWNocm5XY3FubkpaRTZyYm5fbllxMnM5REhHQlNGRzdNck9SWGF0RWJTWkRDbjJKUUxnWFBKRmhoOGdSRFRR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 秋田県仙北市 田沢湖生保内堂ノ前の出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQZWZCWTRYRXBQT3pjOF8yRWppdlQ2TFluQTN1ekRYdnZjVlFBa21MdXBmaExvY1UtWENWN3U3dzh1cTgwLTd6RGt4bzNBeUlUMThaOEoxSTF5d2VxMGlLNjdWS1FKMnI2ZTJBcUQzV2YwMGdGNjc0dXdpZUVYUm93NzU2RldDemE4b3RnQmY1dGg0SlRqbjdzT0E2bTdINHhlME9MUENubTlKZkp2VTczRXlyNzE1Rjg3eGdfV1BMQUlaTWpkcU1SUUlIeE5RbS1tMmZfQmZHSkloemN5dkF3b00xeHpDV21zdmExb2JZNm5ZZ9IBogFBVV95cUxNbmNBLUpQWGU2Zlc2aGhuSy1wN0xYN2JnV21HeGUxRC0zY0NBbHRQUFZ4d19XVWRqRnlJbkZ2aDFKRFZSNEJxRXNuTmNIUlVqVmMzMmVwN0s5WGlSaXdGSWFXcVB6a1p0LUlTU2t1SzRVY1hTUkNpZ0p0RW9EdDJYeE9pUGpFbENNX0l6YzZCVjNCZDV0dF9wUEwwRHBfcVliVGc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 群馬県中之条町 中之条町大字山田字寺社原地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 群馬県みなかみ町 県道中之条湯河原線　湯坂付近の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 群馬県下仁田町 川井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxORDVTMnRwTGJlRDc3X0VUd3RaMVp3MWpGUVJNX2dfQm5qUlRIYVJ1WVdKNU9GQ3diMkdqd2Z3V3ljWTdEVUZCNWg5SXZRR2tkXzZsd09DbG16RURGSWdCRVAtOGJNSHdnbnlPdmVRMjNBa21BMGVxbExPUkxLc3hlZHJKS0hodUtINmFFVlhHRTM3blJJdFFDTHd2NHVoa1FuMERQdV9xa0ptMWlZdlNj0gGiAUFVX3lxTE1udkFvcUwydDl3Q0pQUi13R281Z29FUDVNWkR3dWNNYTlxOFRaUFVRT1F3bFZxYnFmTEdFSEotMmRFVnhVTlF5VHAxd2JsUExuNUtqNXZBNWc0Y2taZzRQWVRYbU5raWtfVGtiNUItUkNycDVVRjlyclBzUE1BUF94di0tcnN6SzZoeC1LV0M4OG9TMndhS0hkdVVqUEFtdndFUQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 群馬県下仁田町 大字川井地内（川井集会所付近）の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 群馬県沼田市 利根町老神の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSjJOOWVUUlNkb0tGUko0d3VGbjh6YzRHLUdvdFNMLXRJNXpzNmZXQU45OHlyUWJUOEJaWXlrSm9nVFQ3SGpKRkxwUlFLNkVibHBJSUtSdXEtZi11bEpIMV92UFV6enVBVzRaY2VMbXhoemdhU2toQlFNcHo0VGUybnFDUTJNZ1RKLU9Ib2M5RWJTR2xFT0ZjYzEtRjXSAaIBQVVfeXFMTUNadjVDaExYSjl4VEhIRkdWS1lsUHFqRVVTZlU4RnNiVmFFTG9NejZhb1VnNDd3RFBycHJxZE93UmJCbjFnZ3dQdHJxVnJ6cktBNHU3QUZMRVhQOFhEaTNlOEtvZ3gzeEtiQUFzVnlZR0tpaXppVzBfRUdNRFZxX1VtNjdIeVMtRWoxMjdPRlJJNUIxZlE4WlpDOExVcjZXZVp3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 栃木県栃木市 梅沢町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPamVaWXBNeDlQWGlnLWN6NjR3WEZyN3J6Y1BzcWU2R1h3czhBb0FHYTI4bFd4dzRWRVowM2pRcnZycGI4d3ZZRUNuLTVRWE0wbmZGTmp0TTZYNGNzbTJQR0c0R2NnSWRsb25CVGtJMm1GeG52WEFHWWJpYVZLTm9hak5PSWdtOF9VTTNCckdIVFVKS3NGYlZROVpZLULSAaIBQVVfeXFMT2tXRHJjVTdwaVlGdFRTWHRlZms2NUE0ZnFrRnVGMW5xSDhtVWpnMTdrRk5Hb1ZuWlYyOGpReHh0dDcxTEdwNktJZXJEaUZFYUJUWWUzQTUwelU0Sl9ZWUU2OTVoZEV1aGtiQzdGa01fd0hNOVRUMEZNOXZsX1hLSy01cUtmemtwWDA5Y3N6aVFTaEtNb1hVek50UmY5RFNHQ0tn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 栃木県栃木市 大久保町の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 栃木県栃木市の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 栃木県那須町 高久乙の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 東京都八王子市 小津町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQR3laMTZnV1F3Tlp6akNMZ2hneUVYTVEzVkFhczdxWXlpRlNJSDQ4aXhsZndoYXdyLW9XemQ0Y1ZydXhQVE5qbUZ2QllVNFZwSWxDSzVmMkJYT3FieDRsdnctVWpnY05vV0lrY0FOSHFabWRsWWtaOWY4N3JycHk5Z2FpVEFEZ29uUmJtb09XalhHSHJZQ3ZHdW52emPSAaIBQVVfeXFMTmx3NEZNcEdVNmhON0hsNVFlb0RvclFXc2hXUmhmOHg1Ry1mQXhucHd0LWRDRVpfRjF0OEdHRHlpbk8xdW5lekNTNE13M01sYjV1cnJ4QVVxTmVlOVNVSzZnai1zQWtrV0JqRnU0MXZMU0J2VndpTnRQaFNYMUhHdWVrcVRFR0RSY2FubFZqV3dWenpIZ1p1QVZJUFBRM0ExZklB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 東京都檜原村 本宿の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPc3U1S1dEa3BIeHM3VVQtOXdTQ1ZiZmZHZ2R0cC1jLWRDWTRNWVBSd1lTUzR4Q1BKVmNGbEo3QXItNHBvOXd0OWhvampWWE5RZjZUajJZQUdpcWloS29WeDAzM3cyOXNUbU1obmJDaTJ2eU5reXEtMHNPNXNFak1kcXpLSVRfSVhOQS05ZnNEb3c3SWZwcE16Z3ZKUE7SAaIBQVVfeXFMUElUUmI2dkp2QnRZWURDU2YzTXN5ajN5aE11TEZmQ3JXVzAzemlpZXNrX2QzTGx0RDZHSEU4MHdPeVpfM0pfbFJTckNhdm9KR2N1d2JxM2w5NjRUYXV4UXZ3a0R0d0NjUy13ZUlibXlLMHI4NkFOaFVMU3p4cWJLTC1lOUtuWDhGczRhRzJhTERhYmdBUk5NdjQtYmlNVDU2UlFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 東京都檜原村 三都郷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNM1dveE1xRjBEMkwwNlZNVHgtazVGM1FBV183YjB0S0NWaVMwSGZMMEd2TmVndXdWNm5KbUJGXzdnM1RQYmhPSlE1clNsaldfVTdZRWU2ekQtOE5QRW9odjFNUzFaaC1nUVIwVTQ3aTc0WHM0N2RsRXlrcDFETjhwWkgxa3pPWVpFUjZ5RmtEWV82eENQLV84eDFwcE3SAaIBQVVfeXFMTnRzQzc1dFZBT0Y3UUxoYWV1UGcxNlVDeVdidHhZcUFQVnQ4dFFVQ3J3QzUzbWJ4dWxKV1B1Y2Q3TkhVOTY2Qk1XQllfdjNNVk1lc1VWU2wwRkswdG9WaldQXzhJZ3hmOHV2cTdPVXVVVXhyOEJoVlhGNDBySVkzQjg2ckl5NmNPdDFydlJuVS0zdmZ2T2wwVXdsUi10WHh5STlR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 新潟県三条市 下保内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTlhzdUxOYmJIbVVGUTJReDlnOF92UkxRdEZoYjd3anRvMlppS2p6WExmQTlCajBtdWhZdG9NT2lMdXRMXzBTSWw4d2tMTDV5dXg2MHJMUTNPOG1zLTZwV0l2aFE2VkVwZnN6Zmc4U3VDQXJ0WF9pVmhoN3R0dFliWEtZRDd0ci1ibzBKcVFMcmJWckc0Rk9KSGJJOGPSAaIBQVVfeXFMT1N5Z2NXMmFRd2duc3pXWkZUTVdOQzE4VXNvTnlMMXRMX3hfTVEtaHpheTFjZ3lDUUtfOGJjX3BLWkR0bzRvN2dhNTdBWDBEeEZ1NlhWRWlaUUROd1JhWkE2TXFhR21ZV2ZaTEdXTWNySW9ZQTc0VDRnNE50YU15OXljZDdNeHF5U2VoczdLYW9xNk0zOFJGeUJ2aW9qYkxfVE5R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 新潟県三条市 民家付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE56T3FpNlV2UlBjcnpWdTZYai0tVHExRmd4ZGhNVWV3d1R6S3o5YXZKZENnMjNvSG00Ti05RXBFLXFxUDUw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 新潟県三条市 三条地域下保内地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 山梨県早川町 小縄地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 山梨県身延町 三澤地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 山梨県小菅村 余沢地内の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 静岡県富士宮市 上柚野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcmxabGNtY2FlZ3ZIaHVxRVQxUDNMaTBMN181dlhvamNod0RsRW9ucDlwQjFxZXRkNTdMa3BPSjc4cXlhSXFfeDlNWUZEbG9IYTgxV0gySE5HVmpZMmcxUHRUZ2xITEtwVlJwTzlLbUQ4X3dfV0dFeWhDSTI2TWdUQ1dBYV83bzlNYWRuVzV3NnR2aG80eGdTWWVlRGXSAaIBQVVfeXFMTjRhODhyYmp3YzA4ZGdPb28yUzZtbWlCVlE5WHFHMGRUNTNnQmFWTVlBSnhMTkU0TEVoSnNPNnFlVy1xRUd2alAtdzF0Rk9reVNuY3dEQTlGQlpzRDBwRV82S3FfcTNUMHE1b3dOd0VsajFNQjh2SENnYzdSOHk3OHpnSC1VSDZUd3pqcDZWZVl6aDd0Y2pPSDNHTC1qR2FKVVV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 静岡県静岡市 葵区入島の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRDZfYXRfZjBXNzdmYkllYnpvSU5JbHU4X3dtXzlHZnhEQjhBdXJudVhGXzNfUWtqRmhNQ1l5ZHk0SkJERkEwMDVTdzVtbU9kc19UbW9Vall1T0JuamxpbHpzdEhTYmFKZl9yaTF5U09rTzYwVEJ4Qi1yVUdMVHNDMXp0ZkRQeTVWbmJ0QVExWVJ6eVlxZmwwSWpib3bSAaIBQVVfeXFMTy1zRTlCaVlLWThXN0dPaEQ2MXJ3dE9nM29Rc3dyd3JTc0FqMXpFTDBfLTNxUjZiSlZzS2ZQQ3FiM1RBX2w0NnBHRmhUZi1pb1pOZlIxMU0tUVNkd3U0QUozZC1KbWtyc0FIU01BNWhxVndZMC1CYVlIcnN0emJFUWNEcU14ZTc5YWdjdGFmSy1BSmtmem1xM3J0X1BSbWFhX3B3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 富山県南砺市 三清東の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 愛知県豊田市 大野瀬町マセドの出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 和歌山県高野町 高野山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeFFTbG82a3QwT0tVczBDU3ZiU2ZLMnhBWExZNnpTSW5DX1dKRm9ma19WSzVLVnhPRFIxZjFwYjB4R1k4bXQ5OWJPbXV6TW5tczRZSEF6TVlMcXFfUVdQM2ZIRTN2em9fa2l5WlVaRjNFcTJUR1FnUkd2aXBOZVFGbTVfYWtnQkh6QW1ETGo4ajZNQ2FPeDE2MnlEdzXSAaIBQVVfeXFMUE1pZDV4UHRDcDN3T0k4NmRNaUdkYlhEVlBLSHNhWWFzUDQyV2VfZWpkRDNYY2JWdFBGTGk3SWFrNWhyTllFVk9kNGp2UjVnSHUwOEE2Y1dOQTlvSjhzNThfSks5eWZfZDRTMFZ5OGwwejVGVF9xeTdqa1VSM1dIMzBtdk9fb2xqQ0hhSUdLWmM5MEloTVpGOTQ5UmhCRFpacDl3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 京都府舞鶴市 大波下の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPX3BUQ1RpNFVwUEpnM0hGNENyQ2VQcjJIeDJSalZBWEhyVU1ubGVBMnZNNzM5bFVKYmVWVVVpdXE0MEN3VjZpbUluN3NkSWNVVzNDS1V2Z1NTcExzNkZoNS1FbG1iaWkyQnhBVlB0OGxkb2FoLWh2S2tnVDZqOGJmX3Znb2g0RXZiNlVRVC1sSnNmWXJNQXZ1NHlwWkxZbzFEd0HSAaIBQVVfeXFMT19wVENUaTRVcFBKZzNIRjRDckNlUHIySHgyUmpWQVhIclVNbmxlQTJ2TTczOWxVSmJlVlVVaXVxNDBDd1Y2aW1JbjdzZEljVVczQ0tVdmdTU3BMczZGaDUtRWxtYmlpMkJ4QVZQdDhsZG9haC1odktrZ1Q2ajhiZl92Z29oNEV2YjZVUVQtbEpzZllyTUF2dTR5cFpMWW8xRHdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 京都府福知山市 立原の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcE15am51eGZUVGxnVE1jeHNLaF9ndmVJc2MtY0hhSy1Ga0VSYWNwOFh5YkNacGswcjRVcUdycEFCLUhMVmdKZHFSUzBLb1NUalpjQUpCQ1NBc0RHS2MxMVlJRGhhNHdhSFVVWHl6NkxnQnhHV3JrYkJLX1hZTkt5RklwTGxDd3JFQi0tWFA0RkpmVm5KZ3l3b0NMbE_SAaIBQVVfeXFMTnNzQ3B0SUktaC1POVd4ZlpBOUV2Q1o2M2dSdkp6ZnJ6U1RLWmdsRWEtVUhzRzBsa1lvZEcybm1Ca0t2eXltZFJTV0c1dWt1UFpYZ0NhOS00N1FxTDRyYzkwNEpQa0tVUUNqZ3pFWXhfeWpNejdOWTZCRlpyS1VIY1VOZWpNc3RsM0liUm9XX3FvT0Vfd3g1dFVJWFgxMW1HMjN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 奈良県野迫川村 弓手原の出没情報",
      "url": ""
    },
    {
      "title": "2026年9月28日 山口県岩国市 錦町府谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNVd4a2xCRWo4cVNNT2dpOElnUEFReTVHMHdSR00tMG9ERXNxWi1GVm1pb1FzdDZxQkQ2RDJ2c0ZHMnNiazNPSlUwWGFQX1ZtanVSZEtMS3pERjFQMGgyaS0xYVd6WUVpaVpCbnpHRXVvcUttQTAwVGRpcHJnRDJxcW9XR2xwX2JnLVZUQzFMRlJkSXp4UHA5V1lDaFrSAaIBQVVfeXFMUGZNMlNBVG4zUEdNcXh5Ync0WVhBOHlBMkMwQ3MwU2txM2JhMHJhS1AxNkdpcFhMZC1XMmlveHFVZkNVSnhGR05uX3lRZWJTQmNLaVd0UXNVdHFjd05mOWlxcThib2MtQUQ0LXZsOGxhaXFLWG9xMS1id256ME1FV2RScmdMRjYzazk2bmZOTVpiNm1Ua2ZaYXVuYUI5Ry1pZFFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年9月28日 山口県周南市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE90QmFVOWFKTFFiczdyeW5VQnhHX0tsWnh3NFJMSlJCdXIzNnJHcTJNdXBYUE9RNWRmWWpwcjd2aEh6YXBpQjJGWFllTmhtaTM2bk1ZQWJkLXRZZHlYV1JOSG13SHJNajZ1WDktaVY1VdIBdEFVX3lxTE5qejNVUXB6UWhTWEFIeUotUk14dzNqa0c5YjZlekRtbWczU0RYSjhoQnFuZEpZQU1sbERSNm92Tk5qTzZJTTZPbDVVYi1DQlhSV3pmOFhvekNobXRDNWtyeDFvYk5UeDZDdWg0cEdxUmlYaTRJ?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":11},{"pref":"宮城県","count":7},{"pref":"群馬県","count":6},{"pref":"青森県","count":6},{"pref":"栃木県","count":4},{"pref":"東京都","count":4},{"pref":"新潟県","count":3},{"pref":"山梨県","count":3},{"pref":"岩手県","count":3},{"pref":"秋田県","count":3},{"pref":"山形県","count":2},{"pref":"静岡県","count":2},{"pref":"山口県","count":2},{"pref":"京都府","count":2},{"pref":"和歌山県","count":2},{"pref":"富山県","count":1},{"pref":"愛知県","count":1},{"pref":"奈良県","count":1}];

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
        <span>対象期間: 2026年9月28日</span>
        <span>·</span>
        <span>公開: 2026-09-29</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={63}
        periodLabel={"2026年9月28日"}
      />

      <h2>重大事案の概要および対応状況</h2>
      <p>本対象期間においては、人身への危害が及んだ事案や緊急銃猟が実施された事案、ならびに生活圏深部への侵入が確認されている。和歌山県有田川町では、農作業中の男性がクマに襲撃されてけがを負った事象が報じられた（※1）。農地など人の日常的な活動空間において突発的な遭遇と人身接触が生じた重大事案である。また、東京都八王子市においてはクマに対する緊急銃猟が実施されたと報じられており（※2）、自治体や関係機関による直接的な捕獲対応が取られたことが示されている。</p>
      <p>さらに都市機能や居住地への接近事例として、岩手県盛岡市茶畑一丁目では住宅地周辺において幼獣1頭が目撃され、北へ移動していく様子が確認された（※3）。幼獣単独での市街地隣接エリアへの侵入は、迷殺や偶発的な人身事故を引き起こすリスクが高い。また山形県山形市においては、山形四中近くでクマが目撃されたと報じられているほか（※4）、泉町でも出没が確認されている（※5）。これらの事案は教育施設や住宅密集地における警戒体制の重要性を示すものである。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">記録番号</th>
              <th className="px-3 py-2">地域区分</th>
              <th className="px-3 py-2">所在地</th>
              <th className="px-3 py-2">確認状況・内容</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">S1</td><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">和歌山県有田川町</td><td className="px-3 py-2 text-xs">農作業中の男性が襲われけがと報道（発生日不明）</td></tr>
            <tr><td className="px-3 py-2 text-xs">S2</td><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">東京都八王子市</td><td className="px-3 py-2 text-xs">クマの緊急銃猟が実施されたと報道（発生日不明）</td></tr>
            <tr><td className="px-3 py-2 text-xs">S3</td><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">岩手県盛岡市茶畑一丁目</td><td className="px-3 py-2 text-xs">住宅地周辺で幼獣1頭を目撃、北方向へ移動</td></tr>
            <tr><td className="px-3 py-2 text-xs">S9</td><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">山形県山形市山形四中近く</td><td className="px-3 py-2 text-xs">中学校至近におけるクマ目撃と報道（発生日不明）</td></tr>
            <tr><td className="px-3 py-2 text-xs">S36</td><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">群馬県中之条町山田</td><td className="px-3 py-2 text-xs">幼獣が栗の木に登り果実を採食</td></tr>
            <tr><td className="px-3 py-2 text-xs">S53</td><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">青森県六戸町犬落瀬</td><td className="px-3 py-2 text-xs">親子連れのクマ確認、1頭が道路を横断</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別の出没および痕跡確認動向</h2>
      <h3>北海道</h3>
      <p>北海道における総件数は11件が記録され、全国で最も高い事案数となった。斜里町富士での出没（※6）や、えりも町目黒での出没（※7）など沿岸部や森林境界での直接目撃が報告されている。また、広尾町紋別（※8）、岩見沢市毛陽町（※9）、深川市鷹泊（※10）ではクマの出没痕跡がそれぞれ確認されており、個体の直接視認にとどまらず広域な生活痕跡の残置が顕著である。</p>
      <h3>東北地方</h3>
      <p>東北地方では宮城県7件、青森県6件、岩手県3件、秋田県3件など多数の事案が確認された。宮城県では松島町幡谷（※11）、栗原市築館小淵東（※12）、仙台市青葉区芋沢赤坂（※13）に加え、栗原市（※14）や大崎市（※15）でも事案が記録されている。青森県では階上町赤保内道仏道添での出没（※16）および道路脇での目撃後に南側山林へ移動した事例（※17）、六戸町犬落瀬金沢での出没（※18）、ならびに六戸町犬落瀬における親子連れの目撃および道路横断（※19）、東北町夫雑原での出没（※20）が報告されている。道路を横断する親子連れの事例は通行車両等との遭遇危険性が極めて高い。</p>
      <p>岩手県では前述の盛岡市茶畑一丁目の住宅地周辺における幼獣目撃（※3）のほか、盛岡市下田字生出の生出スキー場周辺でクマ2頭が目撃されて南東へ移動した事例（※21）、花巻市湯本第1地割での出没（※22）がある。秋田県では北秋田市前山萩岱（※23）、秋田市飯島堀川（※24）、仙北市田沢湖生保内堂ノ前（※25）でそれぞれ出没が記録された。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県6件、栃木県4件、東京都4件が記録された。群馬県では、中之条町大字山田字寺社原地内において幼獣が栗の木に登って栗を採食している様子が確認された（※26）。さらに、みなかみ町の県道中之条湯河原線湯坂付近での道路横断（※27）、下仁田町川井（※28）および大字川井地内の川井集会所付近で道路を横切り山林へ移動した事例（※29）、沼田市利根町老神での出没（※30）が記録されている。</p>
      <p>栃木県では栃木市梅沢町（※31）、栃木市大久保町での目撃（※32）、栃木市内での事案（※33）、那須町高久乙におけるフンの目撃（※34）がある。東京都では八王子市における緊急銃猟の報道（※2）に加え、同市小津町での出没（※35）、西多摩郡檜原村の本宿（※36）および三都郷（※37）での出没が確認されており、中山間地域および近郊山林での活動が集中している。</p>
      <h3>中部地方</h3>
      <p>中部地方では新潟県3件、山梨県3件のほか富山県、愛知県、静岡県で記録がある。新潟県三条市では下保内での痕跡確認（※38）、民家付近での痕跡発見報道（※39）、ならびに下保内地内の民家付近にあるビワの木に爪痕が残されていた事案（※40）が報告されており、民家敷地至近の樹木利用が確認された。山梨県では早川町小縄地区において集落の柿の木周辺を徘徊する個体が目撃された（※41）ほか、身延町三澤地内での山間部目撃（※42）、小菅村余沢地内での走行中目撃（※43）が記録されている。このほか静岡県富士宮市上柚野（※44）、静岡市葵区入島（※45）での出没、富山県南砺市三清東での子熊らしき動物の目撃（※46）、愛知県豊田市大野瀬町マセド（※47）での記録がある。</p>
      <h3>近畿・中国・その他の地方</h3>
      <p>近畿地方では和歌山県有田川町の人身被害報道（※1）のほか、高野町高野山での出没の可能性が報じられた（※48）。京都府では舞鶴市大波下（※49）および福知山市立原（※50）で出没があり、奈良県野迫川村弓手原でも出没が記録された（※51）。中国地方では山口県岩国市錦町府谷で出没痕跡が確認され（※52）、周南市では道路上において子グマの目撃が報告されている（※53）。なお、四国地方および九州地方を対象とする出没記録は本日のデータには含まれていない。</p>
      <h2>リスク評価</h2>
      <p>季節要因と餌資源の観点から分析すると、中之条町における栗の採食（※26）、早川町における柿の木周辺の徘徊（※41）、三条市におけるビワの木への爪痕付着（※40）など、結実した樹木や集落内の果樹資源に誘引された行動が複数地点で確認されている。秋季の栄養補給期において、山林から里地・集落内へ餌資源を求めて進出する傾向が明瞭である。</p>
      <p>人口圏への接近度については、盛岡市茶畑一丁目の住宅地周辺（※3）や山形市の中学校近辺（※4）、三条市の民家付近（※39・40）など、居住環境の直近にまで及んでいる。さらに、六戸町での親子連れによる道路横断（※19）、みなかみ町（※27）や下仁田町（※29）、階上町（※17）、周南市（※53）での道路上および横断行動が多発している。有田川町での農作業中の被害（※1）に見られるように、農地や道路、民家周辺における偶発的な近距離遭遇のリスクが極めて高まっており、誘引物となる未収穫果樹等の管理と移動経路となる道路沿線・集落周辺での厳格な警戒が求められる。</p>

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
          <dd>2026年9月28日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-29</dd>
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
