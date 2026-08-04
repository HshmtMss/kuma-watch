// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月3日 / mode: daily-report / 生成日: 2026-08-04
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-03-daily-report";
const TITLE = "2026年8月3日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月3日、国内で66件のクマ出没が報告され、特に福島県と北海道で多発した。福島県会津美里町では80代女性が襲われる人身被害が発生。公園や学校、海水浴場付近など都市部や生活圏での目撃も相次ぎ、人とクマの遭遇リスクが極めて高い状況が示された。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-04",
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
  datePublished: "2026-08-04",
  dateModified: "2026-08-04",
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
      "title": "80代女性が熊に襲われけが",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE5YX3NlWGVZRW4zUEVaWWlrNFpncFkwLUw1elV6NlE0MW12UzF0V092SnZCVjF5eEFzN1RkMzlPUHJJbWV2QlJoVFdaOXMzZHM?oc=5",
      "site": "news"
    },
    {
      "title": "会津美里町でクマによる人的被害",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBqSFJGMTY2MGkyenZ3ZTVsSjJjM0VFbG1STmVxN0VfVU9IRDZDQUx1V0VqcTAwM182SDhXUERuZXlFUmFmYkRHZ3FqdmtyZw?oc=5",
      "site": "news"
    },
    {
      "title": "公園の野球場内を子グマが徘徊",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNQndyck1mWDZHV2hOakhVMGNNY2Fod1VMYnRUR3c1RGZaNG9TUGtNNDJQaGNUelIwWEhodWZsVUlwUnA5bzBrT0hpT2dDTHlVcmFuNFNWZ18wNERTYko1WmljV0hROEZfdWNJQVBEUmM2eGlOaU8xZ3RGRTdESFVIb25PaFR6TnM?oc=5",
      "site": "news"
    },
    {
      "title": "浜田の小学校や海水浴場付近で目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE52aWJUUGkySHExXzhNUGN1RVU3YWRUMkxPcGFSbDJsZFdGY25wcUdPT3gySlFEVlJXWW1hWjR6U0xrdjBNc19fb2VCcjN5X2xkNDBTQlZIZm1wSng0ZUt5T2h5dG5MQ3JKb2dXamJ3eGVrbXVhWkV0c0xWRdIBgAFBVV95cUxNc005SGdXV1RDTWhvWEtOdGFjbzdoVVFSaENhSDNkbzdwZ25qaFl3ZjFvMzVHSnpZNHFDM1VnQndEZkN2U3lFaUdlb0pQSERUbzZjRUpZRnNFcTVhTTA4b1ROdllHY01DQlFBd3hUa0RZR292MTc1Q1VYYmdsS0cxWA?oc=5",
      "site": "news"
    },
    {
      "title": "桂浜海水浴場の海の家近くにクマが出没",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE03Zm05Mk5IbjlkelpLY1lJbWJucDNLdXh6MmE3VmRvUmhMUG5WOTQzcGZ0cTZsYzlaMzBRSHFiUkJlbkhUVGotSTMyYzVrOEFKTDdMeXdYX1d6LVNQMDJOc1B3?oc=5",
      "site": "news"
    },
    {
      "title": "第二養護学校の西で1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5sN09YSDZVWTM0Y3lqZDRJYVpIdU4yNl9tWVE5WFMydXBsaGpwLWJyaU1QQTRCenZkZ2VZVDRwSmZOOEZjczFwZUctZE9BcUctV1pyYzFhNzgzTEdhc0taa2c3RVEtVUdNOFdtOS0ybms4cTRIMXFjbHpSMlN0WFU?oc=5",
      "site": "news"
    },
    {
      "title": "八戸公園第二駐車場の南東で1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5YV1lKOG9fQ2ZCS3I4cUl4Qm5tTm91SXEtNzBSU0tKS3lkc2Y0NFhXU19UMWFRU2JzVnpFbGxpTGIxN2F5VzhqWGJvc245X1ljN0JiWktxSG10WXprT0ozUUFmdXE2N2p3S2ZVRUxGaGlMbi1NRWJoRnVuR2VRQTg?oc=5",
      "site": "news"
    },
    {
      "title": "深夜に町道を横断するクマ1頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQblVNbWhsLWJBNFlUM2taaVdmTUdNbmZCTTJnTmgtTFBQXzItV0g2Nkc1SFlSZDZya3JnYTYxTGN0TGZUelNFS0xpZVd1dDMycXZ0YjdHdC1YRlhCdzRRTm9HOXpoc2RfQzFlbV9qT21MZEstRVlnOVhOQ2kxcnM4S05fdEp1aE0?oc=5",
      "site": "news"
    },
    {
      "title": "家のそばにクマ3頭が出没",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1JVDJvcVEtXzc4TE1CRkEtZWZMQ3hrOHZTRHZSVEtYRkM0c2lLSEZ2RXFmVnpNbmk0V0FyaUtucW9Fc3AwbjNlTTZUSVMwdw?oc=5",
      "site": "news"
    },
    {
      "title": "家のそばにクマ3頭が出没",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9XaEo0aFkxMkprTklYeUVZUk0taGFQYjRXbnBITkx1bjdxeG5sakhReUdOTU0tYTRIcWd6eEdKWXdVekwxQkhCcFVaTXViZXZkdjdkeWdPRTZsanJxMVpuWmZCUlNqX1pDeml1UkJqR08wUngtRFBRMHYtMWF2Ykk?oc=5",
      "site": "news"
    },
    {
      "title": "北斗市三ツ石でも出没",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1hM3oyV0FOTlZJWkVUWkZ2SFE0TVUwNlVnN2Rpa2RFLUVZZmViTDFpeDhybXB2TnZTMHJMczVtUmloSEJEc0hORWZLV1ZCSHg5OWJDTjBhaGs?oc=5",
      "site": "news"
    },
    {
      "title": "阿賀川河川敷でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBTTFByS1dKUnIyckh2X295MGVBNmRybE9JbEhxT2tPYXpmNHpQb0VHekU3anBDOEd2QUptOGZoVmkzUGd0Ry1IdnQ1Z0xuTFJ3OXBCc3FxMjlfVWlHR2lQZ3RrOVlRaXRjS2lSZUUtTGVHQVBDSVBpZmxxTjR5T0E?oc=5",
      "site": "news"
    },
    {
      "title": "りんご畑で1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8tZHdiV3k4SW4wenZHWnc1eE1TVXhKTmVmS09XVDVhaV9tTFpwcUFHenNXckx6RGg1d2NMVGQtaG01RU5odVRtVzA5cExNVG5yaGhtdUxfdU05TFBCNTM4cWtVR3MyNEhReGtSQ20xaGIwdDdWYVBISExsRXQyQ3M?oc=5",
      "site": "news"
    },
    {
      "title": "むつ市でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE0xT3ZrNFpjRzlINFNoV0dzNlo0QllTRTBpVjZiaklzajFRZlFCRDRUSXQySHdnWU1FNFJWYzVGb2k1d3VBV1dRZjNjMnFkNjZVQkdHcVUxMVlaaEpkUkN0VUtST0lrR2liU0NqakY4S3hiVkxvXy1OckEwb9IBgAFBVV95cUxQVEdBN0EySUFjNHo4Q1JfdFV3ZGxsclVXQTVLT2E3Zkx5YjV2RURLZy16dVF0U0xfRzZzTDUtY0ZXZlBWS1NLeWNCMjZndmExQzVPNEVUSDF3QzdVUDM5aFdiWDNHaVgzX3B6blRCSmhERjZEbVhNV1FqZmtfR0hHRw?oc=5",
      "site": "news"
    },
    {
      "title": "朝日町でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9aUkpvekthc0huZ3IxTEo3eDc1V2lCLUp5RjZvZzAxR2RCa2NZc3pFWEhtSmxULUw2bGdYVzF3eFVGSjVEblROYl9lM3BVMU5raEh6N3A2cTljNTlkLUhqVzVpT3RNQ2ptWEVMb2k1UQ?oc=5",
      "site": "news"
    },
    {
      "title": "真室川町でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQZnZIWVhXY0tCRVI1cGVlcFloanZhbXlmRHlXdjdmSlMzSnp6RWxSSTNwc25Vcm9wRWR4bS1wNUFmNjM3TUxsVjdYdzVaZ1RZX2lGTVJib1lta2xCTFdZOXp1WGMydk12YXlTZXZoX2F1VGxmWTBhcVMtZDBHeFBHeWE4ZmxmTHc?oc=5",
      "site": "news"
    },
    {
      "title": "真室川・鮭川でクマ2頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBGRUM3ZGlzRmxkV2xWem5QbnpnT2FodWlhY1lTbTgzRWN1UlpvWlpMNlJYTTYybjJfYk15WXYtRmR0ejZtUkpUa2Fadk1UdzJzU2xDRk91eUlGYjF4RlRuSGUtNE1GMHVhcjAwV3doOG03SG83Rm1pWFJPTkZ0T0k?oc=5",
      "site": "news"
    },
    {
      "title": "和賀町横川目３地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTW1CcFAxd2RuZG4tNDBNdEsyb3E2czhaSVhaYXZQeklDYXNrMmNSMjNNOFBwVnpYaDFNQzQ5R25xMGlnd2o5UXVhWjNMTVk4RU9WdHo4T3YxRFRJSWFoMTAzY09yZDZraGlibWd5YU9PWXlMOTB6N0xRak1ubkUxcGJ1eFRGejJjRm5GV2xrSFJUd2JMMmwyN19CTkXSAaIBQVVfeXFMTTRCM3dSajZUb0tGRkkzNkVhNDN4SS1keEN3QlVjWlh1NDE3TVZSWjNoZDR0ZkRGQkNfSWNhVV9WQW10ekszc19hSUF2RWZMeUswMk5WS08ydnMyUDhzdjd1Y1piaUxYTGVJMGxJeENyS2dRRmM0eTA0NFJsOUFmVWViWjdEcWFVMUhyRzBBeFJidlFBanJreEtzN210dnNlNGRn?oc=5",
      "site": "news"
    },
    {
      "title": "利根町老神でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNVdqZTV4T2tjbFhxWEN3MlliUGk0eU5BaEZ6OHlyb3VFdGc1TG5Ta1pvREgxYzFmZnFzaGw1X29RYkR6WXlKYV9ZWlZXaXJwNGRmZVRfVS1uQXdCQzZ4dDREYUN5NmM0dkY3ampXUm5iaTMtVkZISzd2N2VPZHdscGJjdjU0V1ZiLUlFSC13RWNJeEQzNVduWXJVRFjSAaIBQVVfeXFMTmpJNHZWdWtmMmZDUnFPMFpxVm5XdEJ0TUhmelVsZzBaeEQ5blZ0c3E5ZzFoNlFUX2xkM1hWUk40X2c5cHlHNlE1ZnkyYkkxckhGRG50V21ldXN5YnJuMDBrS3lwdzVFaVVrdTEyRE9pcnJtdm8zSHFxMEw4M1RUbWxFNjgzZ1Y1czVtQTQ2bG1rOUZCX1pIM1d5Vm9oV2RuTDhR?oc=5",
      "site": "news"
    },
    {
      "title": "御岳2丁目でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPX3R3STVBNE8wUGxrQ28zTHJaVU9kemtZRldzd3dLeDgwUkZJNjV4UW94NDE0ODNNNUF1YXVjcTZpV2Z3NkpIbjI3MEdwMXI4Wk04dmRHMG9TXzFaMUtIOXpLVm1sbVRFWk5Jd1ZsYmFrTGtNMVV5OWZWeXh5c29USGVRZ1VDMkVEZHhvM3pEQUt1eVpaajNiUXNOVkTSAaIBQVVfeXFMTlRtUW9yTU5HWTVjZl9pbEYwMFI5TjFDei1ONThNNTNpMmI2bXBDZWZycUlnNGdmdks4ZlhhbGsyckNrV01MWGkzNlltdFRMa1Bxc01QeUhIdTlrV0pQbmZUXzlPejFLZEN0X0MwRzkzblZlZXg4Z0xnQWxudFZhblRXYmJNdk1ySkxWSGdvRTdDdlptZ0VhSHBkdnRyUDM3SXlR?oc=5",
      "site": "news"
    },
    {
      "title": "南足柄市内山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQcGgzTEtRc1FjdVdWUV91ZVRwaHJYQTdvMzBXZl95cmRsVWVwVXhTLVJOcFdkckRWaDZyY2hKVzJnRDNwNXhRREczWGZ6dlExVE02emtWZ2hJWS1GZVhxOEl5eXl2OWtfWC1hdUthdlVzd1A1c2hoeE9mTHUwZ2dfTVA2RmROeUJETnpNYUxrb3NQNzV4NEdUeDZUdVjSAaIBQVVfeXFMUHpUTmV2QjFGbWM5SG9pX0hmWmQ3X2pobFZzcm1FNDlDU1U3X3YyMW05bHVPcVprMlRmSEhRMDEteWxZcTJEdi00ZHZNSndWT2ZrdHVmUmNPenpSRENrT0ljRTRfZmYzb1pyenhYRnBJUk90UjVwNUtJcnZjUmRjU01qZXRLYlJQZkJuQmEzWWlOSENDSDl1UXVwcnZxcGZVT3Zn?oc=5",
      "site": "news"
    },
    {
      "title": "城屋でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQUnFyZmtWNDBhVGQ4aTd3T2ZMWDRqWTM5UVNZSFZ3OTN5bldBcVh6NjBtVTZnOGZDcTlxNzFKM3NXSjBsWWt6Wm42Mlp3ZV9WSXlGa0JNVWhxWFM1OEpYR19uVElqbDNkYThaLUVrSWp2dm11ZmtFSGFsbXBxZUhXdTFxN0YzSENESHJ0Z1FnYl9fT2VKMVROUjV3eS1JQUlyTHfSAaIBQVVfeXFMUFJxcmZrVjQwYVRkOGk3d09mTFg0alkzOVFTWUhWdzkzeW5XQXFYejYwbVU2ZzhmQ3E5cTcxSjNzV0owbFlrelpuNjJad2VfVkl5RmtCTVVocVhTNThKWEdfblRJamwzZGE4Wi1Fa0lqdnZtdWZrRUhhbG1wcWVIV3UxcTdGM0hDREhydGdRZ2JfX09lSjFUTlI1d3ktSUFJckx3?oc=5",
      "site": "news"
    },
    {
      "title": "福知山市大江町南山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNX1h5MW9kcllMOThyVW84RXVCNG9tVE9VZ0lrTUFHcjFka2xtMWRNaDN1RzVFcVRCZFdwNUswQlRuVVpfdlR1N1NybnpPeHo2RXlpRnZPNXJsZFdYd0FmV1NON0kxVlR6STBGTU5PU1loRU5iT2d5YlZtUUpsMGZ2M2g1anlSRVdhaXBLM1NyRHplbGU2SFUyMjdGUU9hT193UVHSAaIBQVVfeXFMTV9YeTFvZHJZTDk4clVvOEV1QjRvbVRPVWdJa01BR3IxZGtsbTFkTWgzdUc1RXFUQmRXcDVLMEJUblVaX3ZUdTdTcm56T3h6NkV5aUZ2TzVybGRXWHdBZldTTjdJMVZUekkwRk1OT1NZaEVOYk9neWJWbVFKbDBmdjNoNWp5UkVXYWlwSzNTckR6ZWxlNkhVMjI3RlFPYU9fd1FR?oc=5",
      "site": "news"
    },
    {
      "title": "京丹後市網野町浜詰でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPemtGSUlIVV9acXpSUDl1Tkg4a0NKVTBaVnBRcXg2eFVXOTFvTzVqM3JrQmNhc25HRmd3bGlzdE1XZ0dyQV9vTGlaREhzNXJnUGg0SWFNRWdQUEN6Zi1Md2ZsV19zOTBrNk9uTTZUWU9HVUZxUGtaQXNzVFB3akVFZEwyN3RDY1Qzdl90WTBnRUk1TlFURU5fMnQzTE1EQkJTcFHSAaIBQVVfeXFMT3prRklJSFVfWnF6UlA5dU5IOGtDSlUwWlZwUXF4NnhVVzkxb081ajNya0JjYXNuR0Znd2xpc3RNV2dHckFfb0xpWkRIczVyZ1BoNElhTUVnUFBDemYtTHdmbFdfczkwazZPbk02VFlPR1VGcVBrWkFzc1RQd2pFRWRMMjd0Q2NUM3ZfdFkwZ0VJNU5RVEVOXzJ0M0xNREJCU3BR?oc=5",
      "site": "news"
    },
    {
      "title": "上郡町神明寺でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNMzRNX0M0MTRJVVVTZlZvQ3hHSF9pcnRrSEp6U3JJdnlfVEFEUjRJMUtkS0kxbFRCbXBCY3J6WGNUeTNRMEZ6bUhvTDFOQTNaZF81OEQ4TEFKeUI1anhqOG91UUVpWEZYRkVrdjJMdHFJRDlNakVWZGI3NTFDYUpXRVVGU3NGbWNGYjFza09UdjByZEZOX3N1RUE1NEtLbkxzd3fSAaIBQVVfeXFMTTM0TV9DNDE0SVVVU2ZWb0N4R0hfaXJ0a0hKelNySXZ5X1RBRFI0STFLZEtJMWxUQm1wQmNyelhjVHkzUTBGem1Ib0wxTkEzWmRfNThEOExBSnlCNWp4ajhvdVFFaVhGWEZFa3YyTHRxSUQ5TWpFVmRiNzUxQ2FKV0VVRlNzRm1jRmIxc2tPVHYwcmRGTl9zdUVBNTRLS25Mc3d3?oc=5",
      "site": "news"
    },
    {
      "title": "多可町中区東安田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQckpPS1l0aEh4RzFtUE1ib2xSbm1KNDFpOXBMZnFTQzdCWFNOeTV4VEs2WUx1enh3WklqYTZrR29lTWJIY3dENXNLRHRGbVh5UFJuTkhuN2lOUmlCczVZZzNIbW5PaXdobGhkOTNZNFFKcU1jcHJtc1hTSFktVFhJempiMFdydzBFcE5peWtidDhYZTllUnE2anBERThROHFmNnfSAaIBQVVfeXFMUHJKT0tZdGhIeEcxbVBNYm9sUm5tSjQxaTlwTGZxU0M3QlhTTnk1eFRLNllMdXp4d1pJamE2a0dvZU1iSGN3RDVzS0R0Rm1YeVBSbk5IbjdpTlJpQnM1WWczSG1uT2l3aGxoZDkzWTRRSnFNY3BybXNYU0hZLVRYSXpqYjBXcncwRXBOaXlrYnQ4WGU5ZVJxNmpwREU4UThxZjZ3?oc=5",
      "site": "news"
    },
    {
      "title": "田辺市長野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPb0NIMXkweHdYY2N2WEt0TWswUWhXSkZBMDNCNDBIVzhxb3l3N3lxcXFfb0ViWHAwQzdiLXdhTzVFMHlTNG01RU1teWhSd2pmaDRxS3VtbUtqeVlad1hBamQzY1Frb09ETjlIaVk4VThCeC1BUFhNbnlCYWV0ZERZYVdEREwtUFdtdzlNMEVHR0VUZzduMDVqWmlUdktQaDRHZVHSAaIBQVVfeXFMT29DSDF5MHh3WGNjdlhLdE1rMFFoV0pGQTAzQjQwSFc4cW95dzd5cXFxX29FYlhwMEM3Yi13YU81RTB5UzRtNUVNbXloUndqZmg0cUt1bW1LanlZWndYQWpkM2NRa29PRE45SGlZOFU4QngtQVBYTW55QmFldGREWWFXRERMLVBXbXc5TTBFR0dFVGc3bjA1alppVHZLUGg0R2VR?oc=5",
      "site": "news"
    },
    {
      "title": "周南市八代でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOM2NocV9xRzZ4eU4xQU9IYVJDNFNGTkxCc3dsNS05TmtteHNxOGkySnpnNWthdFE5T3oybzlKZTlSem9wTHQ4MF8wSHl1cU1nVk9Cc1k2WUoyVDRCUV82WmVjd3ZsSzVSSm1jbXdONk5iN2JCZ1JyNHNsZGgtRzRZMk5pMS0xNG5wMFpxODNUdlg0XzVhanZHWHZsem9yUEk5TWfSAaIBQVVfeXFMTjNjaHFfcUc2eHlOMUFPSGFSQzRTRk5MQnN3bDUtOU5rbXhzcThpMkp6ZzVrYXRROU96Mm85SmU5UnpvcEx0ODBfMEh5dXFNZ1ZPQnNZNllKMlQ0QlFfNlplY3d2bEs1UkptY213TjZOYjdiQmdScjRzbGRoLUc0WTJOaTEtMTRucDBacTgzVHZYNF81YWp2R1h2bHpvclBJOU1n?oc=5",
      "site": "news"
    },
    {
      "title": "岩国市美和町生見でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNdFJGMzc1dEJiLWswNnI0eV81ZHZwNEJRWjVLaFltZk1uYzZuZzd6eVNoQzktVUQzNGFqZHRiakJZVnlnUHA1MUFqZktmVXNvelBFWGI5ZGpDMHRQeXNCb1p0dmV0bnhvQUE4WXVmbkpEa3VsZmY3NnVFUUFPRkpNZXBGUDdsNTI5d1NYQ3VzVW0xVGJjcm1kYm5iRXZjMHZuUlHSAaIBQVVfeXFMTXRSRjM3NXRCYi1rMDZyNHlfNWR2cDRCUVo1S2hZbWZNbmM2bmc3enlTaEM5LVVEMzRhamR0YmpCWVZ5Z1BwNTFBamZLZlVzb3pQRVhiOWRqQzB0UHlzQm9adHZldG54b0FBOFl1Zm5KRGt1bGZmNzZ1RVFBT0ZKTWVwRlA3bDUyOXdTWEN1c1VtMVRiY3JtZGJuYkV2YzB2blJR?oc=5",
      "site": "news"
    },
    {
      "title": "福岡照岡でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTW05TlB2VW1TdVJRWVRpOGg2bGpMZ2FFRTZxYTRYaWNGNlF6SUdFWWMwV1RoQjluWkpNb09jZXhFX1JVbE5SOWpDWm9YZnhhMkM1dlRUQzFtc0w3WlNOaWRqajBGZVhQSmFBS0h0U3BaUmZyUkdWUVBiWWxkUnFBdFo0M2JJZkhabXFFOUVuZ0FORko1b0FxN0FzcnHSAaIBQVVfeXFMTTlJWktSQmxWZmlFRmJ5cHRHRkl1bkdmSGczWWg5QjFQckxPZlZsRElOT0s1NmQ5OFZ5RmdlODF3RlROZVVJRzVRSFRCQjYtSjIxa3F0RkVZdFJJdmhlSmlvd2VielRwWmk1ejlhQk1YOWhySW1pQUwxdFg4MWZHWHdCZVJUa2pHcml3V1hKSEVDTUlYcUxiNm1JRURzekFWSFZ3?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"福島県","count":17},{"pref":"北海道","count":12},{"pref":"青森県","count":6},{"pref":"山形県","count":4},{"pref":"京都府","count":4},{"pref":"岩手県","count":3},{"pref":"島根県","count":3},{"pref":"秋田県","count":3},{"pref":"群馬県","count":2},{"pref":"新潟県","count":2},{"pref":"山口県","count":2},{"pref":"兵庫県","count":2},{"pref":"富山県","count":1},{"pref":"三重県","count":1},{"pref":"和歌山県","count":1},{"pref":"東京都","count":1},{"pref":"宮城県","count":1},{"pref":"神奈川県","count":1}];

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
        <span>対象期間: 2026年8月3日</span>
        <span>·</span>
        <span>公開: 2026-08-04</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={66}
        periodLabel={"2026年8月3日"}
      />

      <p>本レポートは、2026年8月3日にKumaWatchが収集した国内のクマ出没事案に関する日次分析報告である。当日は全国で少なくとも66件の出没情報が確認された。特筆すべきは、福島県会津美里町で発生した人身被害事案である。また、出没件数は福島県（17件）、北海道（12件）に集中しており、東北地方全体で突出して多い傾向が見られた。本稿では、これらの主要事案と地域別動向を分析し、夏期の出没リスクについて考察する。</p>
      <h2>主要事案：人身被害と都市部への接近</h2>
      <h3>福島県会津美里町における人身被害</h3>
      <p>8月3日、福島県会津美里町において、80代女性がクマに襲われ負傷するという深刻な人身被害が発生した（※1、※2）。この事案は同日に複数の報道機関によって伝えられており、地域住民の安全を脅かす事態となっている。夏季における人身被害の発生は、農作業やレジャーなどで人の活動が活発になる時期と、クマの行動が重なった結果であり、最大限の警戒が必要であることを示している。</p>
      <h3>都市部・生活圏での出没多発</h3>
      <p>当日は「都市部キーワード」に一致する事案が4件確認されるなど、人口集中地区やその周辺での出没が目立った。岩手県盛岡市では公園の野球場内を子グマが徘徊する様子が報告された（※3）。秋田県秋田市では、小学校や海水浴場付近で目撃が相次ぎ（※4）、特に桂浜海水浴場の海の家近くでの出没は、観光客や地域住民への直接的なリスクを示唆するものである（※5）。また、青森県八戸市でも、第二養護学校の西側（※6）や八戸公園の駐車場（※7）といった、公共施設が隣接するエリアでの目撃情報が寄せられており、人とクマの物理的距離が極めて近くなっている状況がうかがえる。</p>
      <h2>地域別動向</h2>
      <h3>北海道（12件）</h3>
      <p>北海道では12件の出没が報告された。浦河町で深夜に町道を横断する個体（※8）、上川町では民家近くに3頭（親子と推定される）が出没した事案（※9、※10）、北斗市三ツ石での目撃（※11）など、道内広域で確認された。特に、一度に複数の個体、とりわけ親子グマの目撃は、母グマが子グマを守るために攻撃的になる可能性があり、遭遇時のリスクが高いことを意味する。</p>
      <h3>東北地方（33件）</h3>
      <p>東北地方は、福島県17件、青森県6件、山形県4件、岩手県3件、秋田県3件の合計33件と、全国で最も出没が集中した地域である。福島県では前述の人身被害に加え、会津若松市の阿賀川河川敷（※12）など、会津地方を中心に多数の目撃が報告された。青森県では八戸市、弘前市のりんご畑（※13）、むつ市（※14）などで目撃されている。山形県では朝日町、真室川町、鮭川村（※15、※16、※17）といった山間部で、岩手県では盛岡市の公園や北上市（※18）で確認された。秋田県秋田市では、市街地に近い沿岸部での出没が特徴的であった。</p>
      <h3>関東地方（3件）</h3>
      <p>関東地方では、群馬県沼田市（※19）、東京都青梅市（※20）、神奈川県南足柄市（※21）で計3件の出没情報があった。いずれも山地に隣接するエリアであり、都市部から比較的近い場所での出没として注意が必要である。</p>
      <h3>中部地方（4件）</h3>
      <p>中部地方では、新潟県糸魚川市の寺町5丁目や蓮台寺2丁目、富山県小矢部市の横谷、三重県紀北町上里で、目撃や痕跡が計4件確認された。新潟の事案は市街地のバス停付近であり、住民の生活に密接した場所での出没であった。</p>
      <h3>関西・中国地方（9件）</h3>
      <p>関西地方では京都府（舞鶴市、福知山市、京丹後市）（※22、※23、※24）、兵庫県（上郡町、多可町）（※25、※26）、和歌山県田辺市（※27）で計6件の出没が報告された。中国地方では島根県（益田市、奥出雲町）と山口県（周南市、岩国市）（※28、※29）で計3件が確認されている。広範囲で散発的な出没が見られる。</p>
      <p>なお、当日は四国、九州地方からの出没報告は確認されなかった。</p>
      <h2>出没状況の集計と考察</h2>
      <p>当日の出没件数を都道府県別に見ると、福島県と北海道への偏りが顕著である。以下に上位5都道府県の件数を示す。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地域</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">17</td><td className="px-3 py-2 text-xs">会津美里町, 会津若松市</td><td className="px-3 py-2 text-xs">人身被害1件発生</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">12</td><td className="px-3 py-2 text-xs">浦河町, 上川町, 北斗市</td><td className="px-3 py-2 text-xs">親子グマの目撃あり</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">八戸市, 弘前市</td><td className="px-3 py-2 text-xs">学校・公園付近での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">朝日町, 真室川町, 鮭川村</td><td className="px-3 py-2 text-xs">山間部での目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">舞鶴市, 福知山市, 京丹後市</td><td className="px-3 py-2 text-xs">府北部で広域的に出没</td></tr>
          </tbody>
        </table>
      </div>
      <p>情報源の内訳を見ると、全66件中45件が報道機関（news）に由来しており、URLが確認できるものであった。これは、メディアの関心の高さを示すと同時に、自治体ウェブサイト等からの公式な一次情報がリアルタイムで集計システムに反映されにくい現状も示唆している。捕獲や銃猟に関するキーワードとの一致は0件であり、目撃情報の段階で即座の駆除対応には至っていないケースが多いものと推察される。</p>
      <h2>リスク評価</h2>
      <p>8月3日の出没状況を、季節要因、餌資源、人口圏接近度の観点から評価する。</p>
      <ul>
        <li>季節要因：8月上旬は、春に生まれた子グマが成長し、母グマと共に行動範囲を広げる時期である。また、前年に生まれた若い個体が親離れ（独り立ち）し、経験不足から人里へ迷い込むケースも増加する。盛岡市での子グマ徘徊事案（※3）や、島根県奥出雲町での幼獣目撃は、この時期特有の傾向と言える。</li>
        <li>餌資源：この時期、ブナ科の堅果類といった秋の主食はまだ実っていない。そのため、クマは昆虫や野イチゴ類などを食べるが、より栄養価の高いトウモロコシなどの農作物や、果樹、人間の出す生ゴミに誘引されやすい。群馬県昭和村で確認されたトウモロコシ畑の食害痕跡は、人里の食物への依存を示す典型例である。一度味を覚えた個体は繰り返し人里に現れる「学習グマ」となり、リスクを増大させる。</li>
        <li>人口圏接近度：最も懸念されるのは、人口圏への接近レベルの高さである。公園、学校、海水浴場、バス停付近といった、不特定多数の人が利用する場所での目撃が全国で報告された。これは、人とクマの生活圏の重複が深刻化していることを示しており、偶発的な遭遇から人身被害に発展するリスクが極めて高い状態にある。福島県での被害発生は、このリスクが現実化したものに他ならない。</li>
      </ul>
      <p>総括として、8月3日は、特に東北地方と北海道において、クマの活動が活発化し、人身被害を含む重大事案が発生した一日であった。今後、秋の過食期（ハイパーファジア）に向けてクマはさらに積極的に食物を求めるため、人里への出没は増加・常態化する可能性がある。地域住民および関係機関は、情報収集の徹底、生ゴミの管理、藪の刈り払いといった予防策を早急に講じ、最大限の警戒を継続する必要がある。</p>

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
          <dd>2026年8月3日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-04</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-04</dd>
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
