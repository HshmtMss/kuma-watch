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
const DESCRIPTION = "2026年9月28日に収集された計41件のクマ関連情報に基づき、和歌山県での人身被害、東京都八王子市での緊急銃猟、および住宅地や農地周辺への出没状況を分析した日次レポートである。";

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
  dateModified: "2026-09-29",
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
      "title": "和歌山県有田川町で農作業中の男性が襲われけが",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9hbTFFTzF6VTBhN2E0SlVOd0V1dnc2X05oWWhEdnVkbEpoc2dsUVJMd2lnanlkTS1tWmdkM19OdkZrNnBXbWZ5QkZuTU9SSm1ITUFxSTQ2OTVOZ0xuT040bFFn?oc=5",
      "site": "news"
    },
    {
      "title": "東京都八王子市でクマ緊急銃猟",
      "url": "https://news.yahoo.co.jp/pickup/6596889?source=rss",
      "site": "news"
    },
    {
      "title": "（北海道）広尾町紋別でクマ出没痕跡 ９月２８日",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVTZGdGtmbVByQzFNZENPQ0JVZE9uaDd5QkpRREVBUkRGTHNKSlFWNUp4Z2RsUDhpSFU1Szh3UHhJcFRzUHRhSUlJX1kzM0RTcElxcDV0YW9TYUdmcFh1MHlIeTVFdWJZTkVaZDIybFhGX1diSVJGeF9idTkxa1FlTHRibUtoa3c2dDFTOS1FVElSQUY4YVNFWDFxZTXSAaIBQVVfeXFMTmltV0J3bVBfbjhWMnB4aVpQTWxhUlNCUnBnb1Q5eXVNUVFkYnVhVW91SWVIVzUzMnZ6Z0R5bHFLR1IxVW9WaVFIU0M2Q1laZjZDakFBMWlORU5qYkZuLXVRbU1uV0lZSDVOUUc1MVBkNGpJa2ZGLTBQUWVZMm5ZRUxtaWZDNmxhanlZN3ZCMXNCaGNWN25NOVBIQXFURXR6UG53?oc=5",
      "site": "news"
    },
    {
      "title": "岩見沢市毛陽町でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOc0d3cHBUS2dFWkxaSF9obzNpRHJRem1sOWpJUlBWVEVqUDM4LUVVWUlhZzBvMUFuaVQxMlplVk4xMnd1SUgwWHYtdTdfUm0xdlNIUmhSM0duaHRzdy1mRXZNem1CamItRVlEeWptMk0tdzVDVGp2WDUyS01RRGU4eXU5SF9qeVA2NXZzQUdURzJ2dnNLR2hEMURaMkbSAaIBQVVfeXFMUElGbWxVTEh6cEJuVDNxeFVfNkk2M0gzaEItZFUzNW9ZeG5DVDlXOENmWE5FcVdSdkg0NFpXWGtocjN6TEU4T3JTa0NSeFM5Rlpva0V2VEVWSUd1X20tNVYtSFNHeE1vWUJIektucHcxUTlTYWk3R0tEQndsalpoNy1nZ2hTQVB1TDFYRGxGbnNScHJrQUY4dm9hZ3RvZDNPcDd3?oc=5",
      "site": "news"
    },
    {
      "title": "斜里町富士でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdl95UFBwbTR4YXZQUVFwT0JWV0NYMWU1cWYybXJKN25UbTVwVlJLZnJmY1FyalNKY3VCclhfTHlWTHNMSHJISzRGcVhnS29pamJ2bzRUQzFEZVVCTWl6ODgxNEN3N1FEM2lfSlZnbjJGWVVPbDRlUG9Ld1NObkJiVGZDUDBJay1FMDFORXRYUTBMZEwzV3ZJUFNKemzSAaIBQVVfeXFMTlFSZXdpYkxScG9xbmhMcjZ1b2lfalB6WUNIY1p2a0UzWHk5NTM5aUpZeDBMa01lNHdzWmhoTW0zb1VPZ1poMGJxUDQtVWVSYjcwMl83QWdnSUtNaVFSRjdEN3NNYlZNYjJIZGtuY1FQUnM4eWhtM1Ita3AycmRYWlg5Ujl6Ri1pTWFhQkJKYmZmTlJyR19fNXRIcUtzN0thREJR?oc=5",
      "site": "news"
    },
    {
      "title": "北海道深川市鷹泊でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNa2FkUElJZ1dFWTl4NUZ2VkJ4eFVtOGdyMHhLWTgxbGRrZ003NW5URlpWSHBGVjg2eVFFQW5xV084dF9JdU5fZXBzOVdjQjFlRWkwYjUzY0pPZlUxZGthNjZvcEVLaF9tbnp1ak9pY3hkTHp2VERvTkJtNHFGMTN5ZTRkLU93aTlDc0lWVm5Yam1PRWE3alJOSEdIeWF5ak1lekd1WDcxVmdGSHZwaHRiUWdmN0dnNzVQcHVsWWgzN25yUnZRUFBfT2R3Ti1pbGRZcE1ocm5MX0JaTjhSczlFV2lEbHVHb2Z1ak9wVWpUY29mQdIBogFBVV95cUxPU2ZfRm1yMXdsbmtwQURZTUFIbFlCMTZpcXptTnR2UVpaRUZKMGxLeTNPeVV5cFh3Q0VkbEFiQThsazlGU004cVFRQk1YaV9WSTZNckhDaWhSSHpOZHNFV1B1WVVEMUpXV09GNV9LWUw1LWlrdlg1ampXSVFnWU51SDdWWkdPZDkyNy14RzdncEFDWFhiaFMxalR6VnBuNXQ0Y3c?oc=5",
      "site": "news"
    },
    {
      "title": "えりも町目黒でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQNUV5YVNBRjN4dVdMMW14WUVvX2hPcWgtSnRRZ3NVZks0SFNNcmMxWFgxbDBoZ2prUjZMRnAtM2JvbUthdGNhdlFuSGtpYTY4NEluM3phMU44X0JycFdiOC0zUVRuQnJUX0Z6Nkd5RXQxajE2UnZYdzVuSGFjRGl3UlZybThBR0lKNVB6ZF9OYWhnTTlLN2E2cGZkRVZRcUd6TW5wSF9xN3FHZG9kbmlnQm9KcmcxWFNkZFhRT25CRWZGVWdnY3ZYVjdLR0FrUXM4ZW1sM0tDT2hjZENZMi1iOUJEbmMteHFwWWtKd0lTeG9ud9IBogFBVV95cUxNd3FjcWpBeEJOSjVSMExOMDFaUUFSQ3FlZXNHM196bXRUeTFaeTVVRHBJa2NZOHRzdmVnb1h3c2t1a0xidjNwbG1SWU9hRlQ3MEtJSjNXWTZiVkFudEVrZVRmR1dieDRlc3ZtZi16dmNrbGthbG1aSUlTZnM5Q0IyekdMVnF3UXlLT3pIMjlrQWl5aDlCNEM1VEk3aGl3MjhBOHc?oc=5",
      "site": "news"
    },
    {
      "title": "階上町赤保内道仏道添でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOZ19xQjZtZ2FRUlpGb2J3WUVzRm10TThsZDlBZTZLLTlGcHp0YjlzazN2X3RwSGVSdlJxbDdqaFdDQ211anliYmRPYkx6VnJybG5LZ2tOSFlFcWNIdHJ0LWdNcHBMekZKVWdpOVg4U1hiUmYwQXI5ZnBBbmJVSFhudUIyU0hnbjRSZS0tZWFobkpwalRxRGdPYnlpb3VXYWVWWFlQMERLazNhd3NLUVBR0gGiAUFVX3lxTE0zblpJUHVzUTVMYjk2TGNOalV5SFZ2VldoN1NhRWFDVU8tT3hRZTh4ekdaMkRXSjl1Wm9iRDB4c2VRSWRaZmRGQnlNeEgzM3RqVE8taGhhMUxJRDhMSndaUkxITUUyaWZYVlhMNm00S3h3MkRmNGVnWkJfaWhtTDJYRWN5cW9YVVpqa29pQjJSczdGOHFWeEdwTWpVQVhVLVk5UQ?oc=5",
      "site": "news"
    },
    {
      "title": "六戸町犬落瀬金沢でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSzBreWhSb1lKZ3U3MllDUElMZDBMVmJtbWJXZTYxU0tlQ19rSVlQVWZNU1RleWVtRm9qQjMzRjlscUh1MEZoaFprRS16RGpiTkpBN1AtZ0RnTVNyNld5OHBxbVE1NThydGRzcEMyYmNEZGFmM0Z1ZzNLZVB3cXlPTG00ZGhNX0VPWms2cW9adENYc1dlNnpNSW5Kc0bSAaIBQVVfeXFMTUJHVWc2MVFEWDhJczQxTENMZnJKRXRzLVRRMFh1NVRVWWZJd3pGOXVvVnFPS1RsQlBqUVFLQ3U0RFRHaEIyMDRmS3pITUN2WHo2RGtDR3R3cXNVclFDVlhFbFRkeDkxWDRXMUo5MjNiM0JpUDdFbzJwcDRKMEZ3bURfUTNOZVZIdk4xUlFJVU0zZ1A5b2RvcDJ3c3lHd0l5a2Z3?oc=5",
      "site": "news"
    },
    {
      "title": "東北町夫雑原でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWGhld1o5ZFFQUldRQkVDTEtQWVctcHQyWTdXNHFuUkt2c1FaVHVOd1JSQXVHMmItelFZRnVIX2lOZ3d0aTBuMm96TGFmSC1UZk1EZUtqV2VzbnJNMDkxcDFTNnNZZkNOeWZhN05acXJERm50d0ZFQTc1Y082NFZyTFFFNkJNQklSQW5UUlJYZ3NkX0ZmMHYyX0M0NDnSAaIBQVVfeXFMT2twVnc0dWRIeHdudGF4MEFhUTJoSWd2N09VU0tDNk1UelRIU1FZY0dINTNkTExJUVU2S3JPOERhZFJVclhzdVYzbXQtWE1LbkRuSi00eml4dnhjUE5DWmV5UG11dmJFcHN2WWVySEZibmtfa1IzZ3dfQ0hhMmxhTXBWRGpObkNibEpzem5ubEhVeHRnc2lXRTJEcTVrVFZaZ2ZB?oc=5",
      "site": "news"
    },
    {
      "title": "北秋田市前山萩岱でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONExiNjRkR2pHM21LQkFyYzZiUUxfbkN5MTM2a1c2M25JRnBSemZrNllxR0NINEpiRDFvSFRNNUwzcVE2cUxDdDdsWVVmc2hfUWJBcERueGpxRWUwZTZDWnpCWU9yemViZkxXRGdvcjF4MTlBdWtMSTNHMkVIU094aE02MEYwV2pKVGt2NXJJVlRxQlhDZVYtcXJXYlrSAaIBQVVfeXFMTVl5eDAyTTZyaVgwVnFWSmpMVFRpNl9DOG5MSjRYZF80dGhmVWg4aERaQUJwdENLdnhyd2lHdWNjVTBIV2VEX2tOSllyc0M0VnVuendfSUtiR2hhRGZNUjJlN05EQi1HbzFqc0dVMUtKdXFsdkNkb09IUUZGbURKMkZ1OVFpUEtPM0NEb29kSWxtMFVoZnh5NXBqNU5BUXZXdFl3?oc=5",
      "site": "news"
    },
    {
      "title": "秋田市飯島堀川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeDRncmRiMFdoek8xU0Nmb193WndrLUk1Z3pJR1FnNWlnNzlLQ2p5cm80MUk0VXBycjJMOEtqVkxCTS1ubEh1bE13Z284RU9JejJPWElDZ1Btd0dGUS1nLXI4dkRMS2R3VFhYZFhUOWkzZzBTNXlZSFZMdGhkY0oybnl2Z3BkXzV5U2NQRmJMR3JBdndwQVF2TEY5TmTSAaIBQVVfeXFMTjNvc0xxWk0tMDhTeC1mMm5Fc3JFLXFEZHpMdFp5bEtOWW4xUFpKRVE0dDBNODd2OXBPUHdvQUxGemVqel9NVVV5a3BtNGhMVExDcFhBcHZ5LWhMZzM2bjhmQVVrcWNocm5XY3FubkpaRTZyYm5fbllxMnM5REhHQlNGRzdNck9SWGF0RWJTWkRDbjJKUUxnWFBKRmhoOGdSRFRR?oc=5",
      "site": "news"
    },
    {
      "title": "仙北市田沢湖生保内堂ノ前で出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQZWZCWTRYRXBQT3pjOF8yRWppdlQ2TFluQTN1ekRYdnZjVlFBa21MdXBmaExvY1UtWENWN3U3dzh1cTgwLTd6RGt4bzNBeUlUMThaOEoxSTF5d2VxMGlLNjdWS1FKMnI2ZTJBcUQzV2YwMGdGNjc0dXdpZUVYUm93NzU2RldDemE4b3RnQmY1dGg0SlRqbjdzT0E2bTdINHhlME9MUENubTlKZkp2VTczRXlyNzE1Rjg3eGdfV1BMQUlaTWpkcU1SUUlIeE5RbS1tMmZfQmZHSkloemN5dkF3b00xeHpDV21zdmExb2JZNm5ZZ9IBogFBVV95cUxNbmNBLUpQWGU2Zlc2aGhuSy1wN0xYN2JnV21HeGUxRC0zY0NBbHRQUFZ4d19XVWRqRnlJbkZ2aDFKRFZSNEJxRXNuTmNIUlVqVmMzMmVwN0s5WGlSaXdGSWFXcVB6a1p0LUlTU2t1SzRVY1hTUkNpZ0p0RW9EdDJYeE9pUGpFbENNX0l6YzZCVjNCZDV0dF9wUEwwRHBfcVliVGc?oc=5",
      "site": "news"
    },
    {
      "title": "松島町幡谷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZVBmcFhXMm1xcmFRMUh1cW1jRjlSMHVZaDBVcHBXdmhfaDY4UlprWFBnX1pxdXRicWRvREh5NDQ0YlpoUFZzRmpmYWpFQlFackU2UGxoSFJESjZLX0pLWEgzWmc2ZjZJalB0cmcyRTF5NlRONjdMYnp4ZUlyZVh3LUtGY1B1UXFpRzhGM3MtS2tNUElCQlNoeENYdzDSAaIBQVVfeXFMTm9jS1ZUZVVNQThuTG1jOWltZ1dsS0V0M05LaU9FSGZkWmN5TWdQaVI2NzBQM005Wm1BRElzSHlILTlyNS02SUxHbHBfU19Yc0ZsX0JYSzlLQlVIbHM1amo5Qm9NMHFzNzNOVWU1bzZjdzBVWHAxdl96dGVMQ1g4NndfMWhfX2xCYlppdmR3ZHdKMVpTOGhGUkFyM05ERWptU1Z3?oc=5",
      "site": "news"
    },
    {
      "title": "栗原市築館小淵東でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPLTU0YnZzX0hweDF1WEROOXZ6X2FlS0gzUllqMmdDWl9pYjVBTlBlRFFSNGo3alJqMUtBOENDNFF6VGlNc0wzckhGMjRQSlpVdXJJZzRkcldabjBIZjFKcm5ZajBDSlNwMzlxZWhCZkJzYnZwZzgwa09Pam9nNUhWRWJ3VWxBdGszT3FtVUt3clZzVHA2Z2xVdDJ3enbSAaIBQVVfeXFMTzdRNXB2LTAyWHZ4UDZQYTVVSWJjM004bHJvVUppb2hzZlRoZmZac0JiZFdLaUxieklwWklDQ3V4U3cwZ2NrOXJZNmo2bFpLc3pSc0JSZUY2MTJ3ckJoNmRsbnZodFNOaWt6VEVMaWVudWl2dkJsOU43YTBEWEs5ci1JdXNCMzZOQVMtRlMxczlwdkItYzNCRWd0bHVTWG9Dc01n?oc=5",
      "site": "news"
    },
    {
      "title": "山形市泉町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTm9XOXo5c0JHYnF6RXl5ZnhBNll5LVlEd2dIR19FaGlKSWRKVkF5Wnlodl94aDZjT3ljUW5QSmdXcUprejhpRmRZTlBRdU1lRWtIV0VpYjRiZ0lVZGFxMzJKejYwNXFHeUo3RmYxUlJWd0R4RTNmcDk4UTd4MjBLLWlWWmtKdW45Z2t4UTRPX3ZNUXhkMUpKN1VkVjTSAaIBQVVfeXFMTzBtbFMtYUFhQTVjNnZ2elFVTW9Zalc4MG1tUjJQVlBWa205RUl2MmtiR2FES1V5UHpIaEZfTmx0clRoNTExdUR0RFVrb3lDazkwYTVJR3VSeHhpUnRWYUZfdGNVZmVpZDBTaWJkNXRJendfMGh3SE50andXQjNLT0NDREVXdC1NblZDT2RTOWlRdUZjdnN5YmhMVUdnaG8wbGdn?oc=5",
      "site": "news"
    },
    {
      "title": "山形四中近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBsTDByek5zY0pnRWhwZWJzQXNISF9NeHZrb3lBQmNiVjgwcUNyTnFGWXY0Z0dKeHlUZ0lVdHVfMlRIVFg0NERXcUVrN0tyWDl0R28wanlvM1p1T0dwQ29kVXE2ZUwwOGdkVXZJTHNBYw?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県下仁田町川井でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxORDVTMnRwTGJlRDc3X0VUd3RaMVp3MWpGUVJNX2dfQm5qUlRIYVJ1WVdKNU9GQ3diMkdqd2Z3V3ljWTdEVUZCNWg5SXZRR2tkXzZsd09DbG16RURGSWdCRVAtOGJNSHdnbnlPdmVRMjNBa21BMGVxbExPUkxLc3hlZHJKS0hodUtINmFFVlhHRTM3blJJdFFDTHd2NHVoa1FuMERQdV9xa0ptMWlZdlNj0gGiAUFVX3lxTE1udkFvcUwydDl3Q0pQUi13R281Z29FUDVNWkR3dWNNYTlxOFRaUFVRT1F3bFZxYnFmTEdFSEotMmRFVnhVTlF5VHAxd2JsUExuNUtqNXZBNWc0Y2taZzRQWVRYbU5raWtfVGtiNUItUkNycDVVRjlyclBzUE1BUF94di0tcnN6SzZoeC1LV0M4OG9TMndhS0hkdVVqUEFtdndFUQ?oc=5",
      "site": "news"
    },
    {
      "title": "沼田市利根町老神でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSjJOOWVUUlNkb0tGUko0d3VGbjh6YzRHLUdvdFNMLXRJNXpzNmZXQU45OHlyUWJUOEJaWXlrSm9nVFQ3SGpKRkxwUlFLNkVibHBJSUtSdXEtZi11bEpIMV92UFV6enVBVzRaY2VMbXhoemdhU2toQlFNcHo0VGUybnFDUTJNZ1RKLU9Ib2M5RWJTR2xFT0ZjYzEtRjXSAaIBQVVfeXFMTUNadjVDaExYSjl4VEhIRkdWS1lsUHFqRVVTZlU4RnNiVmFFTG9NejZhb1VnNDd3RFBycHJxZE93UmJCbjFnZ3dQdHJxVnJ6cktBNHU3QUZMRVhQOFhEaTNlOEtvZ3gzeEtiQUFzVnlZR0tpaXppVzBfRUdNRFZxX1VtNjdIeVMtRWoxMjdPRlJJNUIxZlE4WlpDOExVcjZXZVp3?oc=5",
      "site": "news"
    },
    {
      "title": "栃木市梅沢町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPamVaWXBNeDlQWGlnLWN6NjR3WEZyN3J6Y1BzcWU2R1h3czhBb0FHYTI4bFd4dzRWRVowM2pRcnZycGI4d3ZZRUNuLTVRWE0wbmZGTmp0TTZYNGNzbTJQR0c0R2NnSWRsb25CVGtJMm1GeG52WEFHWWJpYVZLTm9hak5PSWdtOF9VTTNCckdIVFVKS3NGYlZROVpZLULSAaIBQVVfeXFMT2tXRHJjVTdwaVlGdFRTWHRlZms2NUE0ZnFrRnVGMW5xSDhtVWpnMTdrRk5Hb1ZuWlYyOGpReHh0dDcxTEdwNktJZXJEaUZFYUJUWWUzQTUwelU0Sl9ZWUU2OTVoZEV1aGtiQzdGa01fd0hNOVRUMEZNOXZsX1hLSy01cUtmemtwWDA5Y3N6aVFTaEtNb1hVek50UmY5RFNHQ0tn?oc=5",
      "site": "news"
    },
    {
      "title": "東京都檜原村本宿でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPc3U1S1dEa3BIeHM3VVQtOXdTQ1ZiZmZHZ2R0cC1jLWRDWTRNWVBSd1lTUzR4Q1BKVmNGbEo3QXItNHBvOXd0OWhvampWWE5RZjZUajJZQUdpcWloS29WeDAzM3cyOXNUbU1obmJDaTJ2eU5reXEtMHNPNXNFak1kcXpLSVRfSVhOQS05ZnNEb3c3SWZwcE16Z3ZKUE7SAaIBQVVfeXFMUElUUmI2dkp2QnRZWURDU2YzTXN5ajN5aE11TEZmQ3JXVzAzemlpZXNrX2QzTGx0RDZHSEU4MHdPeVpfM0pfbFJTckNhdm9KR2N1d2JxM2w5NjRUYXV4UXZ3a0R0d0NjUy13ZUlibXlLMHI4NkFOaFVMU3p4cWJLTC1lOUtuWDhGczRhRzJhTERhYmdBUk5NdjQtYmlNVDU2UlFR?oc=5",
      "site": "news"
    },
    {
      "title": "三条市下保内でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTlhzdUxOYmJIbVVGUTJReDlnOF92UkxRdEZoYjd3anRvMlppS2p6WExmQTlCajBtdWhZdG9NT2lMdXRMXzBTSWw4d2tMTDV5dXg2MHJMUTNPOG1zLTZwV0l2aFE2VkVwZnN6Zmc4U3VDQXJ0WF9pVmhoN3R0dFliWEtZRDd0ci1ibzBKcVFMcmJWckc0Rk9KSGJJOGPSAaIBQVVfeXFMT1N5Z2NXMmFRd2duc3pXWkZUTVdOQzE4VXNvTnlMMXRMX3hfTVEtaHpheTFjZ3lDUUtfOGJjX3BLWkR0bzRvN2dhNTdBWDBEeEZ1NlhWRWlaUUROd1JhWkE2TXFhR21ZV2ZaTEdXTWNySW9ZQTc0VDRnNE50YU15OXljZDdNeHF5U2VoczdLYW9xNk0zOFJGeUJ2aW9qYkxfVE5R?oc=5",
      "site": "news"
    },
    {
      "title": "民家付近でクマの痕跡を発見",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE56T3FpNlV2UlBjcnpWdTZYai0tVHExRmd4ZGhNVWV3d1R6S3o5YXZKZENnMjNvSG00Ti05RXBFLXFxUDUw?oc=5",
      "site": "news"
    },
    {
      "title": "富士宮市上柚野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcmxabGNtY2FlZ3ZIaHVxRVQxUDNMaTBMN181dlhvamNod0RsRW9ucDlwQjFxZXRkNTdMa3BPSjc4cXlhSXFfeDlNWUZEbG9IYTgxV0gySE5HVmpZMmcxUHRUZ2xITEtwVlJwTzlLbUQ4X3dfV0dFeWhDSTI2TWdUQ1dBYV83bzlNYWRuVzV3NnR2aG80eGdTWWVlRGXSAaIBQVVfeXFMTjRhODhyYmp3YzA4ZGdPb28yUzZtbWlCVlE5WHFHMGRUNTNnQmFWTVlBSnhMTkU0TEVoSnNPNnFlVy1xRUd2alAtdzF0Rk9reVNuY3dEQTlGQlpzRDBwRV82S3FfcTNUMHE1b3dOd0VsajFNQjh2SENnYzdSOHk3OHpnSC1VSDZUd3pqcDZWZVl6aDd0Y2pPSDNHTC1qR2FKVVV3?oc=5",
      "site": "news"
    },
    {
      "title": "舞鶴市大波下でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPX3BUQ1RpNFVwUEpnM0hGNENyQ2VQcjJIeDJSalZBWEhyVU1ubGVBMnZNNzM5bFVKYmVWVVVpdXE0MEN3VjZpbUluN3NkSWNVVzNDS1V2Z1NTcExzNkZoNS1FbG1iaWkyQnhBVlB0OGxkb2FoLWh2S2tnVDZqOGJmX3Znb2g0RXZiNlVRVC1sSnNmWXJNQXZ1NHlwWkxZbzFEd0HSAaIBQVVfeXFMT19wVENUaTRVcFBKZzNIRjRDckNlUHIySHgyUmpWQVhIclVNbmxlQTJ2TTczOWxVSmJlVlVVaXVxNDBDd1Y2aW1JbjdzZEljVVczQ0tVdmdTU3BMczZGaDUtRWxtYmlpMkJ4QVZQdDhsZG9haC1odktrZ1Q2ajhiZl92Z29oNEV2YjZVUVQtbEpzZllyTUF2dTR5cFpMWW8xRHdB?oc=5",
      "site": "news"
    },
    {
      "title": "岩国市錦町府谷でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNVd4a2xCRWo4cVNNT2dpOElnUEFReTVHMHdSR00tMG9ERXNxWi1GVm1pb1FzdDZxQkQ2RDJ2c0ZHMnNiazNPSlUwWGFQX1ZtanVSZEtMS3pERjFQMGgyaS0xYVd6WUVpaVpCbnpHRXVvcUttQTAwVGRpcHJnRDJxcW9XR2xwX2JnLVZUQzFMRlJkSXp4UHA5V1lDaFrSAaIBQVVfeXFMUGZNMlNBVG4zUEdNcXh5Ync0WVhBOHlBMkMwQ3MwU2txM2JhMHJhS1AxNkdpcFhMZC1XMmlveHFVZkNVSnhGR05uX3lRZWJTQmNLaVd0UXNVdHFjd05mOWlxcThib2MtQUQ0LXZsOGxhaXFLWG9xMS1id256ME1FV2RScmdMRjYzazk2bmZOTVpiNm1Ua2ZaYXVuYUI5Ry1pZFFn?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":8},{"pref":"青森県","count":6},{"pref":"群馬県","count":4},{"pref":"新潟県","count":3},{"pref":"栃木県","count":3},{"pref":"秋田県","count":3},{"pref":"岩手県","count":2},{"pref":"静岡県","count":2},{"pref":"宮城県","count":2},{"pref":"山形県","count":2},{"pref":"東京都","count":2},{"pref":"富山県","count":1},{"pref":"京都府","count":1},{"pref":"和歌山県","count":1},{"pref":"山口県","count":1}];

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
        total={41}
        periodLabel={"2026年9月28日"}
      />

      <h2>主要事案：人身被害・緊急銃猟・都市部近接事例</h2>
      <p>2026年9月28日は全国で計41件のクマ出没関連情報が確認された。このうち、人身被害が1件、捕獲・銃猟が1件、都市部キーワードに該当する事案が1件記録されている。人身被害については、和歌山県有田川町において農作業中の男性がクマに襲われて負傷する事案が発生した（※1）。農地での作業中における不意の遭遇が重大な身体的被害につながった典型例であり、作業環境における警戒の必要性が示されている。</p>
      <p>また、東京都八王子市においてはクマに対する緊急銃猟が実施された（※2）。市街地や人為活動圏に近い地域における緊急的な排除措置であり、人身安全確保のための対応が迅速に執られた。さらに岩手県盛岡市茶畑一丁目の住宅地周辺では幼獣1頭が目撃され、北方向へ移動したことが確認された。市街地・住宅地環境へ幼獣が迷い込む事案は、母獣の存在懸念や住民との近接遭遇リスクを高めるため注視を要する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域・自治体</th>
              <th className="px-3 py-2">事案区分</th>
              <th className="px-3 py-2">発生環境・概要</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">和歌山県有田川町</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">農作業中の男性が襲われ負傷</td><td className="px-3 py-2 text-xs">報道確認（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東京都八王子市</td><td className="px-3 py-2 text-xs">捕獲・銃猟</td><td className="px-3 py-2 text-xs">クマ緊急銃猟の実施</td><td className="px-3 py-2 text-xs">報道確認（※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県盛岡市茶畑一丁目</td><td className="px-3 py-2 text-xs">都市部出没</td><td className="px-3 py-2 text-xs">住宅地周辺で幼獣1頭を目撃、北へ移動</td><td className="px-3 py-2 text-xs">自治体マップ報告</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別出没動向</h2>
      <h3>北海道</h3>
      <p>北海道では本日最多となる8件の事案が確認された。広尾町紋別（※3）、岩見沢市毛陽町（※4）、深川市鷹泊（※6）では出没痕跡が確認されているほか、斜里町富士（※5）やえりも町目黒（※7）では個体の直接目撃が報じられている。痕跡と目撃双方が広範な自治体に分散しており、秋期におけるヒグマの活発な移動行動がうかがえる。</p>
      <h3>東北地方</h3>
      <p>東北地方では青森県6件、秋田県3件、岩手県2件、宮城県2件、山形県2件の出没情報が記録された。青森県では階上町赤保内道仏道添で道路脇から山林へ移動する個体の目撃（※8）や、六戸町犬落瀬金沢における親子の出没（道路横断事例含む）（※9）、東北町夫雑原での出没（※10）が報告されている。秋田県では北秋田市前山萩岱（※11）、秋田市飯島堀川（※12）、仙北市田沢湖生保内堂ノ前（※13）で目撃された。岩手県盛岡市では前述の茶畑一丁目に加え、下田字生出のスキー場周辺で2頭が南東方向へ移動する事象が報告されている。宮城県では松島町幡谷（※14）および栗原市築館小淵東（※15）、山形県では山形市泉町（※16）や山形第四中学校付近の教育施設近接エリアでの目撃（※17）があり、人間活動圏近傍への進出が顕著である。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県4件、栃木県3件、東京都2件が記録されている。群馬県では下仁田町川井（※18）や沼田市利根町老神（※19）での出没報道に加え、中之条町大字山田字寺社原地内で栗の木に登り果実を摂食する幼獣、みなかみ町の県道中之条湯河原線での道路横断が自治体情報として記録された。栃木県では栃木市梅沢町（※20）や大久保町で出没・目撃が相次いだ。東京都では八王子市での緊急銃猟（※2）のほか、西多摩郡檜原村本宿での出没が確認されている（※21）。</p>
      <h3>中部地方</h3>
      <p>中部地方では新潟県3件、静岡県2件、富山県1件が記録された。新潟県三条市下保内では民家付近のビワの木に爪痕の痕跡が確認された事案が複数ソースで報告されている（※22, ※23）。静岡県富士宮市上柚野では瀬古バス停付近を含むエリアでの出没が報じられている（※24）。富山県南砺市三清東では子熊とみられる動物の目撃が報告された。民家周辺の植樹や集落近接部への接近が確認されている。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では和歌山県有田川町の人身被害事案（※1）のほか、京都府舞鶴市大波下でクマの出没が報じられた（※25）。中国地方では山口県岩国市錦町府谷において出没痕跡が確認されている（※26）。四国および九州地方での報告件数は0件であった。</p>
      <h2>リスク評価</h2>
      <p>本日得られたデータに基づき、季節要因、餌資源、人口圏接近度の観点から以下のリスク要因が抽出される。</p>
      <ul>
        <li>季節要因と活動性: 9月下旬の移行期にあたり、北海道から本州の広域（東北・関東・中部・近畿・中国）にわたって成獣および幼獣・親子の移動・採食行動が活発化している。</li>
        <li>餌資源への誘引: 群馬県中之条町におけるクリの摂食や、新潟県三条市におけるビワの木への爪痕など、人家敷地や農地周辺の樹木果実に対する強い執着がデータ上で裏付けられている。</li>
        <li>人口圏接近度と遭遇リスク: 和歌山県での農作業中の人身被害、東京都八王子市での緊急銃猟、盛岡市や山形市での住宅地・中学校至近での目撃など、生活圏と重複するエリアでの遭遇事案が継続している。</li>
      </ul>
      <p>以上の状況から、果樹等の誘引物管理と、農作業や生活動線上における突発的遭遇の回避措置が重要な課題として位置づけられる。</p>

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
          <dd>2026年9月28日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-29</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-29</dd>
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
