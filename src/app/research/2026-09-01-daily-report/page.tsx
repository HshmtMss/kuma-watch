// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月1日 / mode: daily-report / 生成日: 2026-09-02
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-01-daily-report";
const TITLE = "2026年9月1日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年9月1日、国内で90件のクマ出没が報告された。特に山口県で小学生が負傷する人身被害が発生し、岩手県盛岡市や宮城県仙台市など複数の都市部で目撃が相次いだ。冬眠前の採餌活動活発化に伴い、全国的に人とクマの遭遇リスクが高まっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-02",
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
  datePublished: "2026-09-02",
  dateModified: "2026-09-02",
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
      "title": "山口県田布施町でクマ2頭目撃、小学生がけが",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1SRkRNVUM2V2s3YjFSN2lmYUs5dTluY1FOTkg2MEJrRk4yVUJjM0FCN0Q3RE8xaHdJRVVCUmdZdTdONF8xMFpvbXpDNWJOX1BmSGphZWVzZTh2dW9WMmF6VEFobi1QbGMwMk1ZeWlPZVR4Q3FYSHdxMnRYYXdHYmM?oc=5",
      "site": "news"
    },
    {
      "title": "山口県田布施町、逃げる際に転倒し小学生けが",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9ydUlGcTlXcURIemM3UTVHMnk5aWhXZTcwSF93TlVRWTZmNjhBLU05bXFqNmNtNXl0S0JILWg4MFkwNHFlX05wRFctRGxOalROZWhjOUkzOVdQM1JDdmlmcmo2NHdPLWRia25OMU5kY9IBdEFVX3lxTE5TM1d5QW1YM2ZIOXE1d3pBUXZqRUtJTEZwZ29ZN0tyRGppcGQtbjRIUnFXQnk4eE1PY1JGRkQ1Z0xKZFl0MkdwOGJZazV0cjFpaHFtekFMUlNLV0JrNUxVbk10ZDRDNXdyVXJvVkVwVTc3dE5I?oc=5",
      "site": "news"
    },
    {
      "title": "山口県宇部市東須恵の空き地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBXNmhxbEd5WWRiaUpVS3Fpdkg3eVJuM3BzSHQtT2h6ZUN1REVZNkI5ci1YQXZKNVlkZV9ZQnNJVXBjak5qM254dFI5VHhUd01UZ0lQMmFPelBUSVV5VWhmQnMwekZxdmRDdkE?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県盛岡市の住宅地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE56Q1FPUHo1am95MVV5UldJX1pKOEJwSzNNVjZqMkF4SXpIaGxyc2h5dThubVQ4el9fcXdOX1NkUnJLWUM4RnNuZHRNN3Z4eW51VDRLNnVEVjdHMkpETDUw?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県盛岡市上米内・青葉台でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE14Wk82NnZJM01BU28xcVZvZHZJbDdYM0ZNU0YwMWtZNzIzT1FhWGRHejBkeVVSWl9pSF9Na0NvUlFNRjlpUzAtcU5qM0FORkFzdmxPMi11Z3g3UkNBYWNn?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県仙台市八幡3丁目の住宅街で熊目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5RQUMyZDVremhZUTZQMUhhMUZtRzI4Z1ZsOTVseVQteTBwczN4Y25keGRYeExiVlpYYkhVOTJCWjBfQUJYSFhkalJ3Yi1FVjJLdkM1OXN3RzE2NmM1ZzJ2a0xGVzRfSTNKc1M3Umxwb0llX3RORE1NTEU0NXhQaVU?oc=5",
      "site": "news"
    },
    {
      "title": "長野県安曇野市の小学校の近くで熊を目撃",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1TMi10eXpQbUhZc2V1X0VMWE90YkJZQU9DcEFrT3VqdzloVjFCV2dBWEFDQW56alktSk52VFM4bl9GVnpVTENaa0Z3UlhvbVhyRXJKT0RlMExidWpEM3hsdlhxYmF5Ui1jOFZaOUlnd04?oc=5",
      "site": "news"
    },
    {
      "title": "北海道函館市のキャンプ場でクマ出没か",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1aVHk3OWMyTGIwdi1ZSTVUcWt1OEl5RU5rVGg3c0R0cVFhY0ZLR2xoX1lmN3laSm04X3Q0Q3hCVmF3N08zbk1BazhCNzZkMWk5a0F4Q3ZRejB5Zw?oc=5",
      "site": "news"
    },
    {
      "title": "北海道留萌市大和田1丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOT3YyWGdlTGUxNUttRnduWHEzNVZqSncwRGwyVHVZRVpJSVBVcUotMV8zaS15ZXFCNEpOdEg0ZFp2WFVXVXJoSXVHLTJOMXdrRFZ0cEFnckVFYkZHSU02dzk3N1hvR2d4NGVPbkpVRTdPSVlxTUhKdHpxaXRDTWxCdHFXZ2xrSmFlR29rajN5c0E5dlhpXzNWVDdIbVDSAaIBQVVfeXFMTXJSNVUtOWQzR3hzV09fd0NMNmVrV0x5bGJmd1lqcHE2S3VRVWttc3RKejBKNm1KT3VTalNVcks5YWhQemE0a1hJUERBNFdRUE1ob0lSVnNRTk9TRjF6MzBWOEhQb1g3ODA4OW81REs0cDNrTjBaalBXY0dUR3BPbW5xRmRUSkhPcE85WVlXVi1meGRlMTJhUEw4dTAza0dKcDRR?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市新屋比内町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQN0hycjhjYnkzR09YNENhWUM3ZVBJZjJJMWQ3X0I5WUYydXpIeHR4Z21lQjNXcWpTc3BhcDczQ3JlWjByNEhNbTRKUy01RVhQcjROcGRzUHZxbTk3SDhLcmVkSmtaanZOc1dwSVRoZzVJR2NXTFllTFI5WlNwbE9vSXlEU292eUdKdHREWUVzQWRVN21PM19VUnBRMjFkR0dScjFRYndtTlhhMXRhWHRLa1QwY05EYXhaS1hrOFlRSGRFN19zTzBjdWktdXVHTzFWaGVhMFFrNHJIUDAtcGQ0czBjM3d5VG5aZWxyQTJ5eEpld9IBogFBVV95cUxQdWdoa2lhXzFpdWFWTjRGRzk3Y25vdXlITzdheGZ6bHpkakczYXBSbVVOaV9HRzQzTnZtblVYempFd3Fac1J4YmZBY25GTFkyaG5meXRIWUdjUHdjbldHUldzRUxEcl84VEJ5NEFINERYRzdMZUMzM2gxdGQwUC1TaGlfVnlUNXFSMThEUF91SFZvWUxLbjl1N1RVRi05dXVWNXc?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市寺内神屋敷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQN2FhZEgyaC1fV2JJeXc4YTFVQjNESFBxTHRqalJQOWIweVEybEhwSlpPNHdrV3FhUFo0enJfRFZDQUVUaTFxcWhEM1hPVndBRHRLaUZFa1luTmZ6UEJRSnU0SVVFSmU2VkpRUnRhWU9KMThsbE0tX0h6cERBcmVHUGxQMlhiZTJ1NkVtZFdmYUFJckY5YzVXcTVTdTRSdkJWOFVsZHk4MVpHZDY4V0xidjBQdkJyLUU1dWlMOHZuVjk1Y05TMTFYUGtDSmpLc01rSVJFOWhNMHJ4aXowZTNjTUYzdGZFUkRiSXQ3ZW5IS25UZ9IBogFBVV95cUxQM0JjVDYyQm9lcjA0X1d5WmdQMzhQc19VTGRfdVA0SVdFemFjdnoxV183dDBzTDJ4SU02T3kxbE8tMEdrV1VPLUdRampJUl9vRXBKYk5EZmk3VzBLVHBNZmFMdUlaYVdqS1R3aWI0aW5Ua2lZVHJzZ1RfaVVJeHBZZ0N0a3UtUUk0N1RzNnRKV2Q3Zzh1NHFvV0g1dy1HWGUxZUE?oc=5",
      "site": "news"
    },
    {
      "title": "秋田市新屋比内町の林にクマ",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5JTVgyMzlPMDlCdGFWWHZJS1ROcExWLTlsRlNHT1JQQ3pGejVPMzlzZHBxNGkxcEFvbXFYRlVXM1N0WUUzOGxIZW92UzJsTmxPUFFvVkI0SWJIcGRlSnRybUVB?oc=5",
      "site": "news"
    },
    {
      "title": "山形市インターチェンジ付近で3頭",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1SQWtKVTdhSHVzU0NQVnRUT1R3UjVud1Y0Rld0ZDZqY0syZTRJbENnMmhkU01kQUlSLUM5d3lHUktQbGNfWVpjX0s2VjJzUmJWYzJ4eXI1cnpQUlNjT2Q1c1hiaGxrVGVCeWtoZXFMNNIBdEFVX3lxTE5GVlk3bXZTOTZaalZtOENmZ2tkZ0Y0NW5FMmVXOGoyZWZyU0puLUdzbEk4N05OS0t6bG0tSWFURHllMjZtalBjZ0RKdE1YOWJiZnVqdjNNUy0tVVAwcUVjUU14S2xuYVlnWmFzOU9BWHdTbVEz?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県佐野市の路上でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5xNU5IbHpSQlJJaDZ4QURjUVc5Y3ZiaGc3TnFQYXRxeFlYTTdvWERKX3FQYTdNVVFuX2VFR1d6ci1WT1VPZHJZaERzTGF5QWtXYXplNXphUHVjNnc?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県佐野市築地町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPbmZ4LVZCQnlNbnllSVdrdWN1THJtb2IxZUF1STdUdUxOOFg4X0szYXVQVXdEVVNsTGx4ZEVDek05Y2pZRHk2WndETGdGS093THBJb2hfWlNvYnYySndMaGpVVmV3bk1jNG5NeE1sVy1zWFdleEFIMHpXeTVBSjhIZWgyNHBYY1pobTVYUW1OTm1yZzY2WmFMNDI1OXBuNE9KcnF3QlVqeU1USEFPRXlBZVkwX0ZJR3BUUGdJTmltQWRrTF9SRGluZExDaS1xYWV0NTVsUTN4RGx4Rm9VYklvRFlLaHg2Qi1PamwtM1BjR0RYZ9IBogFBVV95cUxQWXgtUUV0NzE0SjZsWDgydXktbm5fXzBVX0w5bHV1eE1rUW9XRi1TX2V5bE1SamxScVB1WWZwMWdjUVctUjN0a2hOVW5zQVYwYllSVS16YWlQOWd4QTJEeTNua1UxV1dfbVFJXzJ5QmE5YnQ0N2oyVUlhc2JocmtmTUotRWgzbnVlZ0NXd3ZRaUxaWU52d0lKZFhYNHJTbWZMRXc?oc=5",
      "site": "news"
    },
    {
      "title": "佐野市築地町付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiXEFVX3lxTE0wSzRtdEpSWnpZSExRYmtwbklscko0cHNnTnd6VC1vaHA0Znlua0pnYXZrbnhJaVV6dXRTcFl1d3pYdDJBQU12RHhIZUVCSTdwQ09PeW15Qm1tVHow?oc=5",
      "site": "news"
    },
    {
      "title": "東京都あきる野市菅生でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNEZxdTJtODk4M1p3MXNRRENDUnVwZTFTS0M5ODgzcmJCUkJMNk1VaFVzRVF0cHhfMUl6ampIVHZNeFdkYWpub2RfUGprSndEOUhlZGhKQjBFZmZWMXZobHo3cmxSTVBGc1ZMMGJOWU5xRkVaTFdtYVRsa3lzWWVzOVh1UW9Mb1YwNDViWXc4b2F3akJkbVBOMlRkeHDSAaIBQVVfeXFMTVpKQ2lpcnZTY04xUWJteXNLU01UWlk1VmpNNldTODlLZWFiM0JGUmxZNmx0M0ZwZUJ6NFBiVUphNDdDUnk2cVVTRG5GTnk1Unh5cGtQSUNXdG9BaXRiZHpkMy1ZT0RGT2c0c3ZTVVpVbnNSaUZvX1NhZ0k4cmNDMDVhUmZTRGxvZHBOSUx3SldMM1lva1MwbUdlNFpGdk41Y1ZB?oc=5",
      "site": "news"
    },
    {
      "title": "富山県南砺市川西でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQODI3cUt6UE51eW5qVDNQUkdyUzZZTXBObmI5ZnNtc2ppMUFLNUF4UFJSa3lEb0xvM09lR0p6VGQ3azZJWGxHbGg2RWMwbzAtRTVINERuTEJlSlNaWDJiS0dpVWFYWXhSMmhHOHkyYnpZNlhsbzVfT2N3ZnotcGtQYUpEcUw5Q3VCUVFUMEZaR1RiRUFSOGkyQVdueEnSAaIBQVVfeXFMT3BEek93YWNVM3FzZ3ZBUFN4Sk8zQ3hNeFNkUHhQQ2c0QmFBMlJYUVBnMWxfSVF0OHl0RlJlNnd1UUk4UGczWXZBdUsyVmRnUXI5QWY5ZTJOMmFxam1nSnFDZEFWd1R2MnVLbGl6OHBPcm0zcy1taXUyRWtWdmhrOUp6V3A5Tk1zVWV0LWxUZVpXQ080YzJUYkJfRHV1N1lKZDdB?oc=5",
      "site": "news"
    },
    {
      "title": "岐阜県郡上市八幡町有穂でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUWwzV2FrLUNyRXdWRGo4Unc1YVFPVC14MF9pZWZuYWxMNjFSa29Sd1RqUFJldEk4QzNWMndTd3ZpS2hJcTlwZ3VYNWdYY3hIVTU2X3FYNlBxZnd2cWFyeXJyNTRxNjExcjVxemJySHR0bndBemtOT3pnWEQ3OVpvX3RIS1BGYTJkaFpKbmxncjFaQlhMV3M5ZDJyY2bSAaIBQVVfeXFMUHB3cGFnNkljeklmcFlLcXNveGNrV3o2T2MwLWxUNTdVNHZoTHRJOEpOeHdWZXRCZzRLaXZ6NTRnb0o1c1lHNm4xSFFZSGZMZ1NzZXdTU3BmN1JYZnhQZ3doVC1yUmg5QURORmFUM293c1p4YldwN3B4OHVucVUxS3BtMG93WFl3YUFjODZWQU42T3Z3OG9sck9ra2EtZGduTjJB?oc=5",
      "site": "news"
    },
    {
      "title": "岐阜県大野町稲富でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQTVJ0VC1peV9tQlktekxXT25pS0xYbHVMa24ycy15ajdjcmdLTlJObWpyWnlSdnZLQXZ3cXFXbERBcTBWQ2ZhZUw4RU9QWURYdC1QcnNIWHNObVNRV2tCZUowTHVwUW5qY0UwazNibjdTTXVWOEFVdmZzN2pPMTZaMExkUVFpY0x4bHV5MDdGNk80RXgyZnRKdUo0S08zUjk1eEM3RXlqS3Rfd1lNTjlkTHFfVzhfRlZYTklmdE5IcVB5eU9SMWNTd3FMQm5WM0tkT1ZNMjRlSHY4Y2VSZGhORlljdmtTZVlCc0ZiNTNSZG1Td9IBogFBVV95cUxNWGZGczNkQjBERktVN1JaR3lrTDdtY05YdUFqOEdqRzlHcm9taEJQb2NONVcxZXhRVVUwZ3pkcFR0WWJWZTM1dnQxem9TZFZTMjdIZ18ydXpDU2FoWHJOZGY5RDJxc0wwOGJLV2dPcnQ1VkxTdENPczlfR0dTWTBGTjRvNm9RdTZHSWpBTzRGaW13QXV5QThjVS0xVzlRT25jR2c?oc=5",
      "site": "news"
    },
    {
      "title": "島根県益田市美都町都茂でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUFphQ1BuVzdseTRkN01yTURDOFh3TUx1aTJ1eXBOajE1STZjRGNMSDhuY0FkdlhsNkgxQmpIMU5lcktoR1dUZlowUUtxU0ZnWFozbGhqYVprZ1Ryd2FuTXNTd2h2Wkw0bWEtSnpsdDlHNlFXalNDUTlrRGxfaW5VVVIzSnVJT0R5OHB5R3FRc1NoVnh3M1dxVFBlcDXSAaIBQVVfeXFMT0dTeFh6eXUtdUJXVW5tR2RzUU9FTUgzR3U2UTdQWHF2dzd1Q0x4aThjLW9qd1NudG9HVDBEM0lmNmMtN2dHLU9OYkh4R3Z0VVEwdDh2TktKRndTZFh1N2pVRjlmU1hseXlieGhSVHF0TkFEVFJrRVZXdGxrWS1VSHlsMm4teTJKcko0WUM4VmlRdHFFVU9DU2YxcV9VTWRqZjB3?oc=5",
      "site": "news"
    },
    {
      "title": "島根県益田市下波田町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNy1BVlF5LVhMdFZ1Q292T0pRV0p1V081NkM4RDNsTjlTN2tvN2hNQV91R2x6ZndOWDExZTRBeTVwQm5Mckh6My1uNHlHVi1FV1pGU2NYVXl0LXFjTTJCT1NWVVkxSGlrdnFacktZRjVBbjlYMThpUkJhSm0xQnF3b0VlTWJoYkdHNmI2dHpHa0hNOUZuekJEeHQ2bkLSAaIBQVVfeXFMTlFnN2hiZlRmUGtFS1hlQVRXQ3MxXzlRR00xTHJiSEpOcVBwOXkxd3g2OHp5OFVETTloQTlQWDZVYUk4dHZpMVNVXzQ2NEdVb1ZSUmpEbldWN0RyaU11S3ZmaGF5cjF2T3NQN2hRYzJ1eXRTMUtCa292Y241V1FSSFBiM2piUlhVWWRObG9IQktMak1OcDZOVlJqRkdoRkpzbTZn?oc=5",
      "site": "news"
    },
    {
      "title": "広島県廿日市市でクマ出没の痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeHNYLUhkTkh4MkRvMVNYdWRnbkRHS3JLM3JfV0txWkI5eG5LNGFvWnJ4a2dXcEJnajVMTWROOFFTUUN0M0xYdnRBaDFoRFhoWWZ2QmM0ZUpMUDVyQkVXa2UyM2FJV1p4c2VDSzZIT21YRVdaZ0tCcV9Hejlnd2QzZkl0UENSTDFWelhseWVDY1JnSHFFcjFHemduNk_SAaIBQVVfeXFMT1QtbzNtbmF0R21EM3lldjVzZ3U5QU5zQUludW1rR0xlbFlHWUlXUnJ3MThkajRYTXBfWGhyTWZRN2VrMmd6RjJROW5UbU5VZXhORzNoUnlCaUc4TGZvR2FIYzRRNFhjQ1dSQnBIZVRYRjFLamlaajN5YmRIUWtRYmJGZmJlZ05rc2tweVJVdi1IN1V3MUtMbVhzNFBqSTZKMFRR?oc=5",
      "site": "news"
    },
    {
      "title": "広島県三原市久井町下津でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOX1F3U25iUDY5OGdNMGFnb25WN3otZ2NudE93Qm5Fc3Z0OGtyVTdPcTdVSHBFUTY5QjlLVEMxRU5NR1lmbVBNai1TWFotLXZPeFRET09famM0R1B5dnZMNXZtZlpuMlpuSllfM2VlQ2NFMEdpb0o3NjgtRUJ5b0RfY1lYNFZqcjZ2VXc3TFZ1X2NSTDJvQ0ZLekhMWTZ3R1hGM0HSAaIBQVVfeXFMTl9Rd1NuYlA2OThnTTBhZ29uVjd6LWdjbnRPd0JuRXN2dDhrclU3T3E3VUhwRVE2OUI5S1RDMUVOTUdZZm1QTWotU1haLS12T3hURE9PX2pjNEdQeXZ2TDV2bWZabjJabkpZXzNlZUNjRTBHaW9KNzY4LUVCeW9EX2NZWDRWanI2dlV3N0xWdV9jUkwyb0NGS3pITFk2d0dYRjNB?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"岩手県","count":16},{"pref":"北海道","count":16},{"pref":"福島県","count":12},{"pref":"島根県","count":6},{"pref":"長野県","count":6},{"pref":"広島県","count":5},{"pref":"秋田県","count":5},{"pref":"栃木県","count":4},{"pref":"岐阜県","count":4},{"pref":"富山県","count":3},{"pref":"山口県","count":3},{"pref":"群馬県","count":2},{"pref":"三重県","count":1},{"pref":"青森県","count":1},{"pref":"東京都","count":1},{"pref":"山形県","count":1},{"pref":"京都府","count":1},{"pref":"宮城県","count":1},{"pref":"和歌山県","count":1},{"pref":"兵庫県","count":1}];

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
        <span>対象期間: 2026年9月1日</span>
        <span>·</span>
        <span>公開: 2026-09-02</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={90}
        periodLabel={"2026年9月1日"}
      />

      <p>2026年9月1日、KumaWatchが収集したデータによると、日本全国で90件のクマ出没が確認された。これは報道機関からの情報60件、自治体等の発表30件に基づく。秋の行動期に入り、クマの活動が活発化する中で、特に山口県田布施町では小学生がクマとの遭遇時に転倒し負傷する人身被害が発生した。また、岩手県盛岡市や宮城県仙台市などの都市部や住宅地での目撃が多数報告されており、人とクマの生活圏の重複が深刻化していることを示唆している。本レポートでは、当日の出没データを地域別に分析し、リスク評価を行う。</p>
      <h2>主要事案：山口県での人身被害と全国的な都市部への接近</h2>
      <p>本日最も深刻な事案は、山口県田布施町で発生した。町内で2頭のクマが目撃された際、遭遇した小学生が逃げる際に転倒し、けがを負った（※1, ※2）。直接的な加害ではないものの、クマの出没が起因となった人身被害であり、極めて重大な事態である。同県では宇部市の空き地でも目撃情報があり（※3）、中国地方での警戒レベルを引き上げる必要がある。</p>
      <p>人口集中地区への出没も全国で際立った。データ上、「都市部キーワード」に合致する事案は7件確認されている。特に岩手県盛岡市では、住宅地での目撃が複数報告された（※4, ※5）。宮城県仙台市八幡3丁目の住宅街（※6）、長野県安曇野市の小学校近く（※7）など、市民の日常生活圏内での目撃が相次いだ。これらの事案は、山間部だけでなく都市住民にとってもクマが身近な脅威となりつつある現状を浮き彫りにしている。また、北海道厚沢部町と滝上町では捕獲事案が報告されており、個体数管理の対応が取られていることが確認された。</p>
      <h2>地域別の出没動向</h2>
      <h3>北海道：16件</h3>
      <p>北海道では16件の出没が報告され、依然としてヒグマの活発な活動が続いている。厚沢部町と滝上町で各1頭が捕獲された。また、浜頓別町の公園や函館市のキャンプ場付近での目撃情報（※8）もあり、レジャー活動における遭遇リスクが懸念される。留萌市大和田1丁目といった市街地での目撃（※9）も報告されており、広範なエリアでの注意が必要である。</p>
      <h3>東北地方：36件</h3>
      <p>東北地方は全国で最も出没件数が多く、計36件に上った。特に岩手県（16件）と福島県（12件）で多発している。岩手県盛岡市では、上田、小鳥沢、上米内といった複数の住宅地で目撃が集中しており（※4, ※5）、市街地への侵入が常態化しつつある可能性が示唆される。秋田県秋田市でも新屋比内町、寺内神屋敷など市街地に近いエリアでの出没が複数報告された（※10, ※11, ※12）。山形市のインターチェンジ付近では3頭の目撃情報もあり（※13）、大規模な交通網周辺にもクマが出没している実態が明らかになった。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">県名</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地点・特徴</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">16</td><td className="px-3 py-2 text-xs">盛岡市の住宅地で集中的に目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">12</td><td className="px-3 py-2 text-xs">いわき市、国見町などで広域に目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">秋田市の市街地近郊で複数目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">仙台市の住宅街で目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">山形市の交通要衝付近で複数頭目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">深浦町で子熊の目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h3>関東地方：7件</h3>
      <p>関東地方では計7件が報告された。栃木県佐野市で4件と集中しており、築地町や路上での目撃が続いた（※14, ※15, ※16）。また、東京都あきる野市菅生でも出没の可能性が報告されており（※17）、首都圏においても山間部近郊では予断を許さない状況が続いている。群馬県富岡市および嬬恋村でも目撃があった。</p>
      <h3>中部地方：13件</h3>
      <p>中部地方では13件の出没が確認された。長野県（6件）、岐阜県（4件）、富山県（3件）の順となっている。特筆すべきは長野県安曇野市の小学校近くでの目撃（※7）であり、児童の安全確保が急務である。富山県南砺市では親子グマ2頭が道路を横断する様子が目撃されており（※18）、この時期の子連れ個体の行動範囲拡大に注意が必要となる。岐阜県では郡上市や大野町での出没が報告されている（※19, ※20）。</p>
      <h3>近畿・中国地方：16件</h3>
      <p>近畿地方で3件（京都府、和歌山県、兵庫県で各1件）、中国地方で13件（島根県6件、広島県5件、山口県2件）が報告された。前述の通り、山口県田布施町で人身被害が発生したことが最大の懸念事項である。島根県益田市では複数箇所で目撃が相次ぎ（※21, ※22）、夜間に3頭が目撃された事例もある。広島県でも三原市や廿日市市で出没や痕跡が確認されており（※23, ※24）、中国山地一帯でクマの活動が活発化しているものと考えられる。</p>
      <h2>リスク評価と今後の展望</h2>
      <p>2026年9月1日の出没状況は、秋の採餌活動期に入ったクマの行動が全国的に活発化していることを明確に示している。</p>
      <ul>
        <li>季節要因：9月は、クマが冬眠に備えて栄養を蓄えるため、食料を求めて一日中活動する時期である。この「秋季大量出没」の初期段階として、今後さらに出没件数が増加する可能性が高い。</li>
        <li>餌資源：山間部の堅果類（ドングリなど）の豊凶に関するデータはないが、人里、特に住宅地への出没が多発している状況は、山中の餌資源が不足している可能性を示唆する。庭先の果樹（柿、栗など）や生ごみが強力な誘引物となり、人とクマの距離を縮める一因となっている。</li>
        <li>人口圏接近度：本日報告された90件のうち、住宅地、小学校付近、公園など、人の生活圏内での目撃が顕著であった。特に岩手県盛岡市、宮城県仙台市、秋田県秋田市といった都市部での事例は、クマが都市環境に適応し始めているリスクを示している。山口県で人身被害が現実に発生したことで、遭遇リスクは看過できないレベルに達していると評価できる。</li>
      </ul>
      <p>以上の分析から、全国的に人とクマの遭遇リスクは極めて高い状態にあると結論付けられる。特にこれまで出没が少なかった地域でも警戒を怠らず、自治体は住民への迅速な情報提供と注意喚起を徹底する必要がある。住民一人ひとりが、クマを寄せ付けないための環境管理（ゴミの適正管理、果樹の収穫）や、遭遇回避のための知識（早朝・夜間の外出自粛、音の出るものの携帯）を実践することが、被害を防ぐ上で不可欠である。</p>

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
          <dd>2026年9月1日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-02</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-02</dd>
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
