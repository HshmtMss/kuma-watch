// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月1日 / mode: daily-report / 生成日: 2026-10-02
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-01-daily-report";
const TITLE = "2026年10月1日 国内クマ出没事案の時空間分析と概況報告";
const DESCRIPTION = "2026年10月1日に収集されたクマ関連情報は全国で計78件に上り、東北地方および北海道を中心に広範な出没が確認された。人身被害や捕獲・銃猟の報告は記録されていないものの、都市公園や駅周辺、民家敷地内への接近事例が複数報告されており、秋季の活動拡大に伴う生活圏への侵入リスクが高まっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-02",
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
  datePublished: "2026-10-02",
  dateModified: "2026-10-02",
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
      "title": "千秋公園にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQ3dsZHRMaW9GXzJUS3FMdFlTUUxSYUh2Yk83enpfSjRiSUozNmtJNzhjdU5oNXh0YkdZNHhiWWczUHJuTWFlT3pOMFdfRUVTNDg3ekZuX1ZlcVZsLUloQjBoYk9YUFFNM0ctXzBSbVdvVVkzTERtVUhJWFg4d0Y1elFCM1dXdlpZbVlQdkJETmZPZWh0Yld6U1VaeUvSAaIBQVVfeXFMTnIwc3lwMmtmVlo4QVNFRFg0WnVITGk2MWdDcDdTU0ZVWGFvenBwZFJwSU9rMFB3cUczdmVpQVVMcHA2S2xrMVVMVmdFT0paNHNkS3JPTlhfd2NXMk15ODhmN1hhZ1dZV3dlcHM3MmVGN1J6WU9ZRS1icm1uUXZ2WkVVQlpyVmNqcHZZckdSejlnWjNBTWUwUmFIQVFjamkzTElR?oc=5",
      "site": "news"
    },
    {
      "title": "翁沢畑田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFAtUkpIb3NnVFNEQ1FnNzdLVWVDMElqVm1DeFVrcUs0SjRXU2piUVp0WWx0Y2FfZ1VPZ2dOWTBSNVFyeUhWMU5QaTlubEdxdw?oc=5",
      "site": "news"
    },
    {
      "title": "国道49号でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE9iNngyZ0hEMGNJaW5IcWNTQ1BualU3QnR0Y3NDd3ZWdWdaTWktejdMNFpyUDV1Z1lNQUFpTzFmRkZIUXZLUEpUcS04eVp3MEp1NFhGc24zSk02R0RCVU00VThsNGFHMzA0bEV3YlNR?oc=5",
      "site": "news"
    },
    {
      "title": "クマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPeFV6VEdvNGs1aGJLa2U5MldYb3p4Y3lLYlZnclozbVlCa3VkQjJyYU9Qd3NrUFBjZ3p5eG5UMl90ZGg3b0cxZm9qS3ByZlRjakhvMzQybTRCMXNJcm5JLUg3NzZ3X2U0T3FBRk16VUhLNXg5UTg3YWh1QzJVejRweDFmbWtqSk1SN0FhM2l3?oc=5",
      "site": "news"
    },
    {
      "title": "早借でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaXJ5YS1zTTBLdXMzby1Mc1p4amZndXk3dkw2QlpUdkt2QzREbHVRR0RxZzNramp6SjNPTUJSbmdsRW9FdEp4aFpuZVpnY2dseXpESkZadTZlZjNXRzIyZTRCbGVDWVcxOHR2bFYxeFQ3eVpaRlpST09BVHdiR2doRmVEdjJSYTBLc1ZRUTFDWkY1RmFzX3RLaWVuTVPSAaIBQVVfeXFMT0k1VHZ2eGNWbXJyaGxuU1QxMUVvVGFDZXJWcjFIOXJtUkFpTWQyaWVSNHlxZEVjSkV3QS1FSTlnQnVCeFVEOVJHQmFJeU5HN1RKQ1NDMGVISVptN1lnRmQtY3hrNU1VcXhzR1AxU2cyZ3NudlBiOHlQZEZZMmp2bElBWjd0VGtPcmppT1pJNGd3VXpyYXhDRXlSeHY2T1NuN0JB?oc=5",
      "site": "news"
    },
    {
      "title": "高窪でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQaUVkYm9oT3NtbXlVVEdyNzlELVFndUFNSEI2c2VwOXBFeGVOdkwzTlRlVDUtWDdYN1QwbjRROWtuNGdSaUcxbThkMlpaMkh0SVpKVWZxTkVTWHlJZkdaNFBadi1BM09UalBmWGQxa2JIeHZqSUVBWDJYckFxWVdwc09IdTRjV285NEx2N01wdDVoODNYY3Z1YVVxcTLSAaIBQVVfeXFMUEM1TzluR2dWZUluS1ZMdVBybzliamF4MVVmZFRCemYtQ0RVNS16ZDVhT0toQlJsLTd3QWtOVEo5R19FZWFLRUU1Ul9WTkJlc2cxWGYxa2s5di1vWGlLeDcyRWp2NU9JZXNHSUhBVmZjb1JXX2lrcGRaZnB1eG4ydlU0cXpabXlwUDdHSS1pRVVJR2hTUEdOOWx5QW5fNGFWdDl3?oc=5",
      "site": "news"
    },
    {
      "title": "和賀町岩崎新田大和でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNUJDb0dFMmU5TFpETlhnNDBDMzYwTkkyZ2EwQW5LWXAwTFQzbGp0dXkyZzlSSnBsS28xb1c5eGhLYjVmSGRvSnkwUnF6Z3dyTm9xbmkwTXVxcW1xVmlUV2ttczMtLVVMTlRLNm4xb1ZaVFRiMWxrajd5SFkyVm5BdGN0TXFXWDNCYTlWMU0yTndaSVJqUVYyNWdKNDLSAaIBQVVfeXFMUGFUZXJhN3lONWE3ZGh1QWJVM0dPQ05CN1lCRkhYX0Q0M3VKN1JRQi1rdFJneERtZVhiejJWNWlYVWhURGtBSWwwcTFPa1RnbWtvZHhtOHVWcXNhdUJPbXlEeU1YbUU5amlseXMzZmdMcmdhcHlmaG5lRFl2WkFEWS1ZeWNwSWc5RHVvb0lNem9BcGVnRmg3MmRrVk1lNmRGNUd3?oc=5",
      "site": "news"
    },
    {
      "title": "長内町第４６地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPU0NVa1pyU3FUOW1xUE43aUFUQkotcmtaRjloWm1BNnJfeTFLZkFGdno2WUJ1NjBBN2pBTU5XejJIMFBiV0FpOG5mM2hjQzJkZUhtX0JMd3QtVFlQd2x0dUNhb003MFN3TTFzOXNmV0ZMUUdiWEZhREFERHlLenB4bnUwQzZTMVNpU0FJQ3B1ejZaWVUwT2REckN5RGVRRUdqUHk4eGFJRlp5cHBzWXViQTV6bHpySUVJczNTdEZsSWQzYnQ4eG85dW1IQy1UaG90dl9RelhjZXpiY21HNHdhMWV3SUVXSDcyeFRtOTI3NXhBUdIBogFBVV95cUxOZGM5UHA1TXJXSHNfZExSeU1EajRPUGJMVlNJZ2x2N2V3a204Ql8zLWtsOFlZWFVfTzJidVFCcXpWeTA0UGFOSml5RW9tSkZGQ1haYmZpVWVKSjVoajlrckZCUmUtd29SZDhqMGM2WU9aMjJ1QXVJTW5HWk8xekwzdFBPM1FjeVRoRXpXWXVXR1NDLVkta1lpSnpROW95YVJBNXc?oc=5",
      "site": "news"
    },
    {
      "title": "川貫第７地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNY1d0anlreUwxSlhuOVBHa2ZsR0VnU2g1UkN1N3NpX3JsTUdzWXhtRUNMVTUtSTNsTkJvR3JuSjY2QUVzb2thaW1iVFhNREI2Ny1uVlNHVHhfRVRsc2NCd1UxM2QtMlQ2QXVURFZlSzlVUHh0NFJreGJNRzctWG50UnpwVlNrcHZMLUxMaGFUcDBSQUt6WVR0Ty11TV_SAaIBQVVfeXFMT04xTjlhY19qejh0LWpQX1ZMWkNaa2pyaFVtVmtScWU3OXVPU1p5TVg5cVl0UERrbnliaDlQcEFGODQ0UXRpNFBSTTFXcUZnbU9heTZPNnB5Rl85ZzFrbDM3cmdmLUlCX2tLWDR6UUhvYl9FazdaZkxMQzNQSHI0VWZFcWhaMHlsNDFtQlc0dEZZamJxclpuelB6U0xPVkZyMFh3?oc=5",
      "site": "news"
    },
    {
      "title": "手代森６地割でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQalhpN3NST0laYVhsYnlCTV9MeHZxYzhRY0EtbzVsb1kwLTVMZDVaWXJZVEhuS29KU1dtQ3V4QllKcEJKc01pOGhpRzZhTWFjenVGWnhwTE9mS0tWaXhvaXVCRVRfM0Y5dXMyaHktS1BLdGRzSkw2cG9kMHRtQmQ2YUNsWlFNa2pYQ3dxM0pNS0Q4ZVVRSzVmUWhWX1nSAaIBQVVfeXFMT1Q5Q09EeEhPRHRJTy03NmJBQUdSeVR4eE5WZ1dBTkMzOHlPYW1DdWFaTFE0dTNUUjBRaWhnekxIbEdzbk1sSU96dTRwN0JQZHRzME9FczIwLUczUk8wN0htS0F3TXU3bjRXdDItWm5hR1B0TE93bDhTU2NqYlVRU2lsWGVGYndjeFV5NGtSLWZ0WHdxU3hLTWVGNjlTcVA4MUdB?oc=5",
      "site": "news"
    },
    {
      "title": "手代森でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9YcHV6QUVmSlpRc0xzelQtU0NLUXp2WGc5UDFnblVlM0s0WEUyaEZfZ2xGMmdkZG5tMV94TEpyeGJoU2o3eFBZRlA3ZlgxYnI0UHpEUmhZYW9aQ0tLZTROWg?oc=5",
      "site": "news"
    },
    {
      "title": "豊代町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUFRWRDJlem1hdlN3RHYzV1VxeUhmalBkRzdMYUtmSVRYVDJpWVZ3b3A1SF9TZlgzTUNwOHhmVUo1QmxtbFg5enZ2bUtlWHdzTGZKNDctdVRnTXg1R21HdFFxVGJBc0R5ekhRSHJVMXZ3WXI0eDhTZkJTZmpYNm1WTnVKS0czU2pWZHhCMXB4Y3I4dW5ScndGNmtCQUrSAaIBQVVfeXFMTUZsZ2daelBYYWQ3RXlDUTQ4bTJhTlpreW95WGNIUU9vLXc3dzduVGJ3bEVVbjk1dlk3emFFajFSemczY1ZreFRlOWQtZktsVXREcnNrRE1sbXliaUF1REoyZG1JSmt0VEhqSmVQdHRuUnFsNm5qTXFPSUpyQ1ltSEwwTDF4NG05MHd4bWttU0hXRHhmUFFKd0RLMG9qZkNUX1Rn?oc=5",
      "site": "news"
    },
    {
      "title": "佐野市 民家でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE10WkdyMGRvX3FqcVM0UWdwNTdReUROYkZXWndIclQ1blVqYW9RY1hsb2xwaUdNWHZ5ZDRqNVhmMWFJampydnVmR250RUxGUEUzQ2RSeXc3VldUdUE?oc=5",
      "site": "news"
    },
    {
      "title": "那須塩原市 路上でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE4zYmxld2RXcmJCNGlYWlUxb2FtbGNZZUVzcVBnS3lFM0Vic3BCMlI1ZFRldGtib1BkWHpVdUFwRFRXdjZmTlREU3VSOHFaMVU2ZTU1Qzl1aHhzYzg?oc=5",
      "site": "news"
    },
    {
      "title": "三瓶町池田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdEk2U0dlNGZYbHVBUTlCaTU5cnZXU3EzcGZFM25tUm0yb3hoQnJwM1JqdjUxdVljV1lobHk0b0hiNklSUGdPYm9OaGwwbk53RlZrTndMZFRLandSSHJZb2dUbGY2amFFWHdJdUpXX3NKQWVpNUdwVmkzY2RqRDQ4d1ZDbGs5bE5oblNNQ1ROazE4Wmk4Tmt0YUFwZlLSAaIBQVVfeXFMTVEySjhpRDRDNm1HS3lYOGVHOGNKUC1kTTdCNm11VHp5bm83aDFja0xwa1diRDBwdHRGeTZ6dXo2d1owN2JONXU4S3dvcjZaTGwtMkxBMnFPYnBOdmoxX1BOZVRUd19ZdzRRWXlFQmFRa1A3dS1ISGF6X25GdjBoZFpTcnpza0tPb1F5MWVkYVdTcFNvN2xhT3JJM21GQ2Z1U09R?oc=5",
      "site": "news"
    },
    {
      "title": "大田市 市道近くでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5HZDk0azZCaDRUUE0yT2FFOGM4SzBjblFIRGl1OUt6YjFWRzFqYlpscEo0SlBEMHktVzdiQUhUZU1FYjZSeHBCa0wyR3JxcXg1M2dRcUJNUUhrbkQyUWJfYV85Q2FuUDI2emhhX3cxcUdpMUMtc1Y0RjhXWFBIaEE?oc=5",
      "site": "news"
    },
    {
      "title": "喜茂別町 栄でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNckVMWTBIbEhKMXZTdmc2a0tySnJoTEdaR0h3OUlKcFlnd1hiMGd6cjlHQUNyUlN4YTJfLTNEcVM1V3lQbHNMRVRpbUgyaFhIdkJ6WXVFelZiOGwxeGpQQTlMQXVRNnFhUUQ2LWtEY3AzeDJUNGdQdV9La0lmdHZHdV90enhhc3B5ajlrRERHQUg0VlBQak1aQWlpVTnSAaIBQVVfeXFMTklUOVZud2tZTkp3UjZtRkQ2Q1A2SUxQRzlkTWtOd3pEbkdBX2R6ZUhVcFRwcEhzWHBSdWwzazFBN2JIbHBoQjJvZ1BoWEpCR3M3WTJTY1lFWmxrR1dOQXBBbmh4TlBQSHVSanZQQWRpaVFldlZyTFFXbGZEN3ZHM21LbzVZcVBCRDhxbVRzUFFidENoajJlSlA1SzJmcmVtX05R?oc=5",
      "site": "news"
    },
    {
      "title": "富良野市 中御料でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTGVWcjQ0UXdqNlRlbS1jdGxub1VYOE1MUUhtMksxM3dsaVZwQTJwTV9tVC1zd2U5MTlkU0xwdndnSHdFMGVscV9rNG5lUDVQS1ZtZ19UbTY1Y2J1eDMyOWNPLXA1N21GMXNvdVpFT1MxU1puVWJJMVpDMFJxUmJQWWZCX2ZiVzZPLTczVldxR1lWdTltbW5ZT1liT0TSAaIBQVVfeXFMTkFPZ3NBTEJiYmRwTGhrRTZXeGdJeHdVSzdCTzA0SWs1Umhvd2x5VmNUYlRmZnU2eWNtMlExTExRakZrakFWWDdLWm1HclNWSGFSVk1kNVpvbm1Za3RZSVZMYllEdTJsb0JZeE5FY1AxRnVqMUFtVTJRRTdZTEtCVFpwbWY4NWtRWU1fV1k2SGFIS3l1dWFRVENpeGVnRFRXc3FB?oc=5",
      "site": "news"
    },
    {
      "title": "花園梁瀬でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQaGZRdWs2bFlFN2JfVWxnZmNpclh5TWlwSTV6eHFUQ0psQ0ZxSHRxdGZMUkNxXzZUTzFGdXhpQ0pqUmpxVE1EcFdOeExRbEkyeGJCMTh5T0xGZkxvMFA5aklsbFlvSkFWVGEyMkJIMDN0b3VPQnk0X2VOZnBpTFFudVdDT0hsVGxTazV6c3o3b29CNUlGQWtoWjVMczdUZ3NYOHfSAaIBQVVfeXFMUGhmUXVrNmxZRTdiX1VsZ2ZjaXJYeU1pcEk1enhxVENKbENGcUh0cXRmTFJDcV82VE8xRnV4aUNKalJqcVRNRHBXTnhMUWxJMnhiQjE4eU9MRmZMbzBQOWpJbGxZb0pBVlRhMjJCSDAzdG91T0J5NF9lTmZwaUxRbnVXQ09IbFRsU2s1enN6N29vQjVJRkFraFo1THM3VGdzWDh3?oc=5",
      "site": "news"
    },
    {
      "title": "田辺市 鮎川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQby1ld2xRc1NLMEd2U2l6QVhVcktDNWU0Ym13VnNXSW5vblJkNkhaa0xweTRRS3pqTVF6ajhUdWk5RzI5eEhFbWZtY09hOXJiZEdnOGFRLXV1T3d6b2F5X0NqaGt6TXdpNG5SekhfZUlHNVJibzFzdzhSSjRiXzh6VUNoaVZRNktZSlpNT2JhWTh3SWhFWWJyUGFRMTjSAaIBQVVfeXFMTVFvWFFHMzF4R2VndDJiMEpOXzdRRVZRSllmeUJoWXhBQXFobmF6U0owN29TT3JpWmx1TVFMODNTbjFrU1FkaFNxY3M5YnExbE94d0lRZXpnTnhsT2k0LWVCczU0NEVYd050ajNpTXAxTVpDU3hQbi1HNmdTWFNNczNLSzVWMC1kMmVhLXpWaTZVS0JOT2c4dTFZVmd0TFBnWGFB?oc=5",
      "site": "news"
    },
    {
      "title": "日高川町 寒川でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeXJOcTF6T3BuaVM2QTc2bzI4MjZCWVV5V3U4d0w4MHR4Z2JxVTBFRko2bzdYbzlMbUdYckRFQTJMMVZSUnFpYkZFUEZXSzBULVB2N3VSQUYwTnRDb3A5anp3SDczZzhQTzlhb1k4NUFZbXZfZDg5WFJWRjFSMV82cjJ0RHEtNGhRc1pzaVoxVUNvN3loRC1NZlNxRUbSAaIBQVVfeXFMUGR0SFFYX1hMaXYza2J3Q1AzaHpWT3JCdXRaN1FNUThhNHpRZUxVYTRtbzZkVGJ4VFVNOEVyUGtiYlgxUl8xaHdkQjJpZjZWMVc3S0ZRUWd5cVVuZWpmSVo2X1REdDBURVVDaFBuMm1PU1Q4RXN0Nkg3QlFCVzIyMkhDNEpvdXlEQmpHZFZxS1JHVG50MkFwYVZLZ1VXLUJscWdB?oc=5",
      "site": "news"
    },
    {
      "title": "由良町 江ノ駒でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPanVvXzVWVmpIeGRQZzk4RjVoUG1OTmlLOHhrOGgzU1pJaDcyZXRuLWtObXpfVVl2aVdUZk5tVUJ6T2pvRTBka1dYR2pxSVU0c29aMDlJaFBRMkFGZmdVbmVxck9NZ19PcHhNdmJ5ZFUxN1QxN1VNRUxMRjVwbkd4bnR5MU9FRFVlSG8zcjVPeXNHRWZsb0YxclB1Q3PSAaIBQVVfeXFMTm02TVp0UkUtVktNT1VSMUl3cWljdUt4VEF5R1lPLVdsc19HZFdzX0dzRkdFcXRpNVBYRVBRZjlPQVdBQnUyX2s3WWpmQXV5azN2VjMzZjNLbWNGNUpqbFlmR3g1X05BMGhqa25INTNkRzhNZ2RCRGNfaTdvblYzZW1wY3oyMk1uMlJIUS05ZVlrZkNXUTZUeGEydFBvRGgzdzd3?oc=5",
      "site": "news"
    },
    {
      "title": "富士宮市 西山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOakZSZDJfRnNHY3F3UzdmS0VROUJDcXdWRl9zS21pVUI1Mk5xdzQtWjhGLV9NZk1DekFwc1A4S2I0MFc2d1EtX1lvYkhGaEZ3Wm1JLXBMVkxxOG5SLW5NSFI2WWpaV25DTUkyeC12NTNhalZJSTRURTdWeXUxeFBqb0FfZTQwWTMyb3JRajc5U3I1UXNpcUxXdHFDR3bSAaIBQVVfeXFMTWQyMDV0Mkd2MTVSTk5lZk9BM3pIZE9pUW8tQ3hhbTNVUHF2b1otdDZfTVlpeVFtQ0UyZGlQSzdGR25CdElVejNGV3JRU2FtdFlEX2lnSlQ3SW5TakRWYWRZbDJQSzkzRWZvSTE2NTU0U08tajlyN2VQQUFiWDlxT2dnX3JkSFVQVHFFRFF3RHg2bWsxZjR0U1pCREZNVHdhcFBn?oc=5",
      "site": "news"
    },
    {
      "title": "美和町百合谷でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOU3pQSWhBblc3SWM4Q2l5SkZnT0dPckUybkQyY1ZRZEVQaEF3N2szaTNKSldzNGFlb3JwaFB0eDFUX1hKTGhlejBnUVJLdmNTemVodG1LeTR2Z1hKSGFaTGdvNnJOZVl4dDdVUjJfMi0zVjFHLTFiQjRzMWFBTGVjUVkwZElCOTNBUEpESzlFNVFZYjk3R1F0YnRqM1nSAaIBQVVfeXFMT0RLT1FFLWVYbHlnSHZ5Szc1VktjMVY3cm4yM0g1VFlKWXhZRW1XYTVWbklVTjh1ZDdlcGc1VVk4LWVQV0drWmtTNlE0WTcwWTZ5MzMyNEk2WW5qYV84MGsySEFuekxGdE5tXzJRSXpKbzRoNF9IZlJmdlJEYmVSU0hCMjhqMVZkWHpOVXVJY2M5RmFDeF81Z19WdVdReHUxYVR3?oc=5",
      "site": "news"
    },
    {
      "title": "鹿野下でクマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOZm94ZUotRDFvd2hiRjFfZ2prVXpSQkEwSGhnLVhGUXBXRERyS1FfRThTbG9GOS1BM0x0bEFHaEM1OER2VGNGanVMLVZBbDNnUVZMMmJHcDhLUW9qMmI3SHV2aHVCSzlKVHR5QUswVkUtWllGaEU0Z0Q3cVh4a3cyY0dIaXRQOUV6cVpUZnNadVN1VXduNzFIZUNCZVjSAaIBQVVfeXFMUENLUEc0WWd4LVNDc2VVMkV4eTl3MlB2NW5TLUpyRkJNX3VYd3RNWW04S2x5ZlBBMl84OTI5aHFBYWJwanpfbklwdUFUZTlfckJsbUVEaG54ZC1tM1JNVU9URXJBamVKRENQSnhLcjVDcTFYdkVwME1wWGFnb3FTZkhFSm8zT2Z6MDAxYjA1SUl3LVBSX01oTGJEUTI3ZmJHYkdR?oc=5",
      "site": "news"
    },
    {
      "title": "周南市 路上でクマ3頭目撃",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNbTkzZ043RzJHczB5NXphWENFNV9QSjM1TU1iUGZndDlOa3JPV25OeVktck5sdE13a1pRdkxrNV85MTNvVUpia1RDeXB4U1gwSGI1Vlp3THVtVDVoVmo4R05TSzdWRVcxbzJSRW8tamsxZ2RyT18tSjNhVzRaQmYtWUJSWHZwWll4YW8zazFTU0ltRzkzZkRaZ3MzZm1Wa3JFOHZ3ZnpCcEt1S0RwUkNCdmxVTTNXd1JmcGJsZ0xNSTJqS3l00gF0QVVfeXFMTW03S3d3ZnhYdU5Ybk4teF82MG1RWXdjU3lCZjRNTjZfMnZOUThKMHdQNUp4ellYUzR0Rzh1MFpORlNIc1g5M0p0dzBvX05jeS0wTkx4ai11WVZfMUxNdi10X0lpdnBfMzluakF4cjMzcUJsOEI?oc=5",
      "site": "news"
    },
    {
      "title": "大久野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOYzRpcUlQbkhrbHJGOTl3TVVZQWIxYnhnTmxRMDV0OTRqeGFyS0NjMmVsTzU2OGxJUE1UaEtvQThndkk4a3ZMV1lSNHZ5SEVHUFNnbzNnRk1mV1Q1a2dIRGo1ODFQZGY0V01FbVpzWDFGdmY5STh4N29TVERwemt1RjMwcmtkQ1RhekdqYWtlalktb01Uc3BPNGlMMDfSAaIBQVVfeXFMTzVtVGNOMXFQZDZ4RTVMc2ZlZ2NSNXdBNm9KVFpCWHJSMVQ1TEVXaU91RjM0WUxuMGxQTWFUT2JkQ21MUEYzTU5pME5fRFpIWXRMaGg2em1lTnJSVDhvOXRIa0V1Mm1zSE8xcldNTkFyaUl6VlhPYkx4YXo0YW85VVRRbWMtMjZ3RU8zRHJtQ1ByeTBIUGpWOGpBLVRFMkd6MEJB?oc=5",
      "site": "news"
    },
    {
      "title": "入野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdmo4SUNZQzZVVkd3UTlHSWI2NnhzejJBT3RfZVRKcWYzdEdvZTdBX0RGLS1tazlPZkg3bzZORm00UUpoMjIxWHk5a0RYOUV2UFEyaGZRei1NZXM0aFZEbkNXR0Q3eTF0MUxEa2VxczJDV3FyZThselRCUlhTMWdyeVJwdm44b0otUDFNdko4NEtPdjdjQWxvZ1M2OGbSAaIBQVVfeXFMT2I2MVJ1QXhQNG5nbmk4clV6bEl6RV9lWmZZbmlTWXpzNzdaYklQcndjamdoQ3p2ZDhfZHRQcERNVzBlanlGRUNwN1JQenpxbEIwdXpIMWlCQTAzS0EzNm1OVThnZTNUM2thbHp1Nl80TkpEV2tKaVQwd3g1X3dibkhnVGxXQ0NyZi1VVHZZVTJhZldHM1YzYTcxTzN1MHNjd2hR?oc=5",
      "site": "news"
    },
    {
      "title": "秋田市 手形中台でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxONEkzTHdBMlVUeHROOC1KOXhJMV9KNDcxSzh3RDdhVUFtbFB6QXh2Zld3SDJuczVYdDVKYmdka0ctaG5zNy10S3Q5SGt2YTU4ZHZTZDE5MDBCQjVqYXBmN2ZvMUYyR3VlY2treXhObFlrTFVHMENnbk54emQ0VUNwNXNVV2xPcFhJSXRrYXF1bjJSbmRObjVpem1mbWPSAaIBQVVfeXFMTkZNMEJKVjNzTEozbEhDR1JxVXhFU25rU0ZibzVvN2NzWUN5NkZwdTlaQ25QS3ZFRExhLWM2dzVmd3NMYTROY1A1dmUxYWpWRXIyR0QyUUN1YnJtSVY5T0RKa3NhYS1IMU5scmRMQ3NiTldQNWxNdDJkTGEzVE5XLUNOcjVsT2N2bUJKcGFDU2pDLWxGXzhFZWIyMGdZaUI4R19B?oc=5",
      "site": "news"
    },
    {
      "title": "豊田市 民家カキの木に爪痕や棚",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPd2lTUm43YmcxeldDYTg4dGhRYzJXZmVTSTc2d3c3NzZwYjY4Q2lmMUVtUWZVelRuOXpURWFzaHZQT2RGUmFkdm9TVFlKaEdYSUFfYkpUU2RFTDlVZ1dUQllTYnRrU2Z5cDVEaXRQRWZhNDJ5SHBnTjlvR1NHZmVEVGsxNnVmVERuUDd0M29R?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":7},{"pref":"岩手県","count":6},{"pref":"栃木県","count":6},{"pref":"和歌山県","count":6},{"pref":"青森県","count":6},{"pref":"秋田県","count":6},{"pref":"山口県","count":5},{"pref":"宮城県","count":5},{"pref":"福島県","count":4},{"pref":"富山県","count":4},{"pref":"島根県","count":4},{"pref":"東京都","count":3},{"pref":"福井県","count":3},{"pref":"長野県","count":3},{"pref":"静岡県","count":2},{"pref":"奈良県","count":2},{"pref":"新潟県","count":1},{"pref":"三重県","count":1},{"pref":"山梨県","count":1},{"pref":"兵庫県","count":1},{"pref":"滋賀県","count":1},{"pref":"愛知県","count":1}];

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
        <span>対象期間: 2026年10月1日</span>
        <span>·</span>
        <span>公開: 2026-10-02</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={78}
        periodLabel={"2026年10月1日"}
      />

      <h2>1. 主要事案の分析（人身被害・緊急対応・都市部出没）</h2>
      <p>本日の集計データにおいて、人身被害の発生および捕獲・銃猟に関する事案は0件であった。しかしながら、都市部キーワードに該当する事案が3件確認されるなど、市街地や交通結節点、公共空間への接近が顕著に見られる。</p>
      <p>特に秋田県秋田市では、市街地中心部に位置する千秋公園でのクマ目撃が報告された（※1）。都市公園は日常的に市民の利用が多く、昼夜を問わず突発的な遭遇の危険性が高い。また、東京都あきる野市入野ではJR武蔵五日市駅付近において母子とみられる親子グマの目撃情報が寄せられており（※28）、通勤・通学路および観光拠点に隣接する区域での出没として警戒を要する。さらに秋田市手形中台の住宅近接エリアでも目撃が記録されており（※29）、山林から市街地緑地や河川沿いを経由した個体の侵入動線が示唆される。</p>
      <h2>2. 地域別出没動向</h2>
      <h3>東北地方</h3>
      <p>東北地方では計27件（岩手県6件、青森県6件、秋田県6件、宮城県5件、福島県4件）が記録され、全国で最も高い出没密度を示している。岩手県では久慈市の長内町第46地割（※8）や川貫第7地割（※9）、盛岡市手代森（※10、※11）、北上市和賀町岩崎新田（※7）など、農村集落から郊外住宅地にかけて散発的な出没がみられる。青森県では十和田市奥瀬栃久保において体長1mのクマが目撃されたほか、八戸市尻内町でも市民からの通報が相次いだ。秋田県では千秋公園（※1）のほか、大仙市円行寺や美郷町土崎、秋田市下北手宝川潤ケ崎など広域で確認されている。宮城県では仙台市青葉区芋沢横向山や富谷市日吉台1丁目、登米市東和町米谷越路、東松島市大塩中沢、七ケ宿町柏木山で記録された。福島県では猪苗代町翁沢畑田周辺に情報が集中しており、幹線道路である国道49号上を体長約80cmの個体が横断する様子が目撃されている（※2、※3、※4）。</p>
      <h3>関東地方</h3>
      <p>関東地方では栃木県（6件）および東京都（2件）などで目撃が相次いだ。栃木県佐野市では豊代町（※12）や旧田名網集落センターの一般住宅敷地内（※13）への侵入が確認されており、人間の生活空間に極めて近い場所での出没が目立つ。那須塩原市でも路上での目撃が報告されている（※14）。東京都内では西多摩郡日の出町大久野（※27）に加え、あきる野市入野の駅近傍（※28）で親子連れが確認されており、多摩西部の山間部から丘陵地・生活圏境界部への進出傾向が観察される。</p>
      <h3>中部地方</h3>
      <p>中部地方では富山県（4件）、長野県（3件）、静岡県（2件）、福井県（2件）、新潟県（1件）、愛知県（1件）、山梨県（1件）の報告があった。富山県では氷見市早借で体長約1mの成獣とみられる動物の道路横断（※5）、南砺市高窪で体長約1mの幼獣が国道304号から北方向へ移動する様子が確認された（※6）。長野県では安曇野市明科中川手、大町市美麻新行、信濃町野尻高沢で目撃され、山梨県甲府市古関町でも出没が報告されている。新潟県魚沼市根小屋ではクマのフンが確認され、福井県では大野市井ノ口や小浜市深谷で成獣が目撃された。静岡県富士宮市西山（※23）および笹原バス停付近でも情報があった。特筆すべき事案として愛知県豊田市において、民家敷地内のカキの木に爪痕や登坂に伴う「クマ棚」の形成が確認されており（※30）、人里の結実果樹に対する強い執着が物理的痕跡として裏付けられている。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では和歌山県が6件と多発しており、かつらぎ町花園梁瀬での痕跡確認（※19）のほか、田辺市鮎川（※20）、日高川町寒川（※21）、由良町江ノ駒（※22）などで目撃や痕跡が記録された。奈良県では十津川村高津および下北山村池峰の山間地域で目撃され、滋賀県長浜市余呉町柳ケ瀬や兵庫県丹波市青垣町遠阪、三重県紀北町十須の山林でも情報が得られている。中国地方では山口県（5件）と島根県（4件）で確認された。山口県周南市では大字鹿野下での痕跡（※25）のほか、路上においてクマ3頭が同時に目撃される事案が発生した（※26）。岩国市美和町でも百合谷や北中山大垰で痕跡が発見されている（※24）。島根県大田市三瓶町池田では、市道一丁田一号線付近において体長1mの成獣が確認されるなど（※15、※16）、道路沿いでの遭遇事例が継続している。</p>
      <h3>北海道地方</h3>
      <p>北海道内では計7件が記録された。喜茂別町栄（※17）や富良野市中御料（※18）で目撃されたほか、鹿部町と七飯町の境界付近、当麻町東1区、津別町相生地区など、道南から道東、道北に至る全道の多様な自然環境および農業地帯においてエゾヒグマの出没が確認されている。なお、四国地方および九州地方における出没事例は本日のデータには含まれていない。</p>
      <h2>3. 本日の都道府県別出没上位データ</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主要発生地域</th>
              <th className="px-3 py-2">特徴・目撃環境</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">富良野市、喜茂別町、当麻町、津別町 ほか</td><td className="px-3 py-2 text-xs">山間部境界、農地近接エリアでの目撃</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">盛岡市、久慈市、北上市</td><td className="px-3 py-2 text-xs">郊外集落、市道および地割地域</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">佐野市、那須塩原市</td><td className="px-3 py-2 text-xs">住宅敷地内、幹線道路沿い</td></tr>
            <tr><td className="px-3 py-2 text-xs">和歌山県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">田辺市、日高川町、由良町、かつらぎ町</td><td className="px-3 py-2 text-xs">山間集落、車両走行中の目撃、痕跡</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">十和田市、八戸市、新郷村</td><td className="px-3 py-2 text-xs">体長1m級の目撃、市街地隣接部通報</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">秋田市、大仙市、美郷町</td><td className="px-3 py-2 text-xs">千秋公園（都市公園）、手形中台住宅街</td></tr>
            <tr><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">周南市、岩国市</td><td className="px-3 py-2 text-xs">路上での複数頭（3頭）目撃、農山村痕跡</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">仙台市青葉区、富谷市、東松島市 ほか</td><td className="px-3 py-2 text-xs">住宅地近接部、丘陵地帯</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">猪苗代町</td><td className="px-3 py-2 text-xs">国道49号横断、集落近接</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">氷見市、南砺市</td><td className="px-3 py-2 text-xs">国道304号横断、幼獣・成獣目撃</td></tr>
          </tbody>
        </table>
      </div>
      <h2>4. リスク評価</h2>
      <p>10月に入り、冬眠前の過食期（ハイパーファジー）を迎えた個体の活動性が全国的に高まっている。季節要因として、愛知県豊田市で確認された民家敷地内のカキの木への登坂およびクマ棚形成の事例が示す通り、秋季の結実果樹が強力な誘引物として機能していることが推察される。堅果類や人里周辺の残果・農作物を探索する行動が、山林境界を越えた移動を促進していると考えられる。</p>
      <p>人口圏への接近度については、都市部指定エリア（秋田市千秋公園）への侵入、駅周辺（あきる野市武蔵五日市駅付近）での親子グマ徘徊、住宅敷地内（佐野市）への立ち入り、幹線道路（猪苗代町国道49号、南砺市国道304号）の横断など、日常的な人間活動の空間とクマの移動経路が高度に重複している実態が確認された。また山口県周南市では路上で3頭が目撃されており、母子連れや複数個体の生活圏進出による突発遭遇リスクの上昇が懸念される。自治体および地域住民は、誘引要因となる未収穫果樹の速やかな除去、ゴミ管理の徹底を行うとともに、早朝・薄暮時の見通しの悪い道路や公園周辺における警戒を強化する必要がある。</p>

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
          <dd>2026年10月1日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-02</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-02</dd>
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
