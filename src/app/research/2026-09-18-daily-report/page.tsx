// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年9月18日 / mode: daily-report / 生成日: 2026-09-19
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-09-18-daily-report";
const TITLE = "2026年9月18日 クマ出没動向分析レポート";
const DESCRIPTION = "2026年9月18日は全国で計76件のクマ目撃および痕跡情報が記録された。人身被害や捕獲の報告はなかったものの、都市部キーワードに該当する事案が7件確認され、山形県酒田市の市街地や住宅街における複数回の目撃など、生活圏への接近が顕著に見られた。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-19",
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
  datePublished: "2026-09-19",
  dateModified: "2026-09-19",
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
      "title": "住宅街でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE5CV0Fsc2NXcExNM3J5YTdvQURYMlZQbjdUdlZLYm85NlFEUEhCRjEweFF3NWlURWVnblpVYXNyVm1hNENNWTBxUEFjck9raVllLVhGbFJQRUFRUUhoXzJPa080ZmlId0RORmZqcEZDWVQ4Vjg?oc=5"
    },
    {
      "title": "市街地でクマの目撃が相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBVQTVQRDVVTFBFQml6bi1ZczJkRThOMXpRMHhGZDdFWmlGam1fd0FHV0kzRmxUTXMzRnlsQUVyU3N4cU51bjZTQi15dW9oMGpFMmRua3dJSTR5MC0zV2pZRWg5YU9EQjlUUVhWcUNENE51LS1FRFZLYkVoUFJMTWc?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZl9TSDdMalN5WE1IWDRIMmdQSWMwazFONDBlbUlTb1FwWVBqb2J5eHlxekVvZVRzYVNxa1pIbG5jeFRfRjVhbWZETVZGdndiX01hcS1aRkt5S0JoaWdZYWpSQms5ak9IVGRnRzN4YTVWZG1yN1hmQi1rdkdjd1pVaEs2S1RKS1R0MEhkTGdudk5MWFJsLURGZ0J4V1HSAaIBQVVfeXFMTnZzb3g5aWtBWDJRdmZ0bUsxTEc2NXIxX0VYdE1rZkgzNTNWWmMzU0VHSVRnY0JpdXppVEx0RkNGdUlhcmxaY2hpbk91dUFmb3I1SnEwbmtCMG83clcxQU53TjhLVTBtX2JMY1d3Zl9SekRWelhScXFLYWlzQ1JPcmZoNWNQUUlFMzQ5WnJqNXlxc3ZlSy1tSzgyWnFwWS1xaURB?oc=5"
    },
    {
      "title": "ヒグマ1頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE1MU0J5N3IwM2NpUmI5VFR2NTZDcmtEeUxKdlg2eGZfVWc0eXJCdWVMc0IwQVRUc3AzM1A0MWIxSTVYZkRwYlZVQ1dmLXkwZWxObzAxSGwyWFFscUhGYTFoczg1Z2xraUc1RlI0ZdIBckFVX3lxTE03Sl9zVFd6bTBFWUJiRXdpb01LUjFwZWpzZnFJNGxDbUFzYnhqaXZ6Y1F6eU1rREVFcWNUenRYZHUyak04UzdzSUlpSGV4TUNmZVNHVVU0anoteVhmUEFtMDE2N2NYN0VGWUtwSEJfS05Qdw?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPQ1draldsVlRycDZjZ0NlT1JrcWw1REloU1lBS3c3TW91RDlzRVBHNnlkQXFrX0lCNHN1azJxbGpYTG5kUldWRDF4ZEhBckpRUHVkQWdvQ2N0YUxIZWxueHY3RmZTTl9PalNwelYyakI1THdBQVN5NlZXQWU2dlplOC11VXJCMlgzZWYwc2VpaEJNRUxNblh1ek5SS3HSAaIBQVVfeXFMUFRybFJiSWR1MDU3bTFUcm1KYWUySTBvY2ktMDlaUHEwOW5FWmdYVDhIUk5Hd2hJY1l0NC1KclBRMTlvMC1fRlFDcVV6RWZ3WTl0X1FNZ0dDMEQ2NmJwZXAxWlQ0TXhWakI5NjhsLVZhMm01SEZoVDRkeEh5Zk5yZGpfLUJTdzE4VW5jY1BQS1hULUt1cUFOTFNKUnVSWklFQ2Nn?oc=5"
    },
    {
      "title": "クマを目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1IWEN5cVBGNWFFRlBCWkluay0tMjlXWXA5Q2NadkFHcEdrV2x1UFM0MUNqTXNlRHJxbTB4LW1aa3UyQVdWX1JVLTJRaEt1YUpQdUtvcFNGTDlnWjQ5UzZIcjRNOElOMTNJVjJiZU91b9IBdEFVX3lxTE4zdEVnTFRvazZWMV9PX1k4N25aZG1HRVF4NXRKcGY3ay05TGZBWEJpdjNnYmNUbWJsaXgtQTB2RC1vRkJNLVBmZHN1dTNFWjR6ZjM5ckZhUTFuX2otTWZZQXE0eXhCZkJoeEpLOWZFOFNQNUlK?oc=5"
    },
    {
      "title": "ヒグマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE5Ta1p5cnRUUWw4cTBpMWQ4N2FOdGhfY1BRZXhPVWstWkZKNXVIOVJhU1o2VFNVSDhuREZsN2Q0Y2hmT3RkVW5aMThaOTZSUU1QelFtMmcwOUJUQVFDckNjR1hWQjVheGFhb2RlOdIBckFVX3lxTE1lQkhyOUY3TnZtckhGRjE3S2JQTnlOTUx0YjFrQXpZVlk3SWdTZlFBVHNWMDVkbjU3X1R2dkozdk9pMDZoWWZYcHYwbEFFYVlFdFV5TVN6aVhhdi1XVzdQMmY4WTRQbS04eXlGanZXQmNJdw?oc=5"
    },
    {
      "title": "ヒグマ1頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE10Q3IwQy1hTXZ2OThqa1lqMWFBbExMT0hqa0NEdHc5ODNtUW9BZlJJYUdKYkZrRUU5M0haNDVIT2JiZW9TdkVFbmlfVDg5MHYwbklxN3ZXb1cxcG9iVGJPc2t1aHZyaFJuUFdkY9IBckFVX3lxTE04V1Bvekl1eHYwM2Y5RXNsWFJyX3JRZEljdDdWMUFFMzdnTHMxWnozWEFLZWF5MThhQzZySGJKVHUwYWJoRjl2a3FfY05OY05UMEJFQ3lGcTdKekFhQ0xPd05QQ3pRaUhJWm9WUXFCOGhBdw?oc=5"
    },
    {
      "title": "柳山で熊と思われる動物目撃",
      "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxQZTJkdl9lSzU0dHFTa2Q0c0VNdW5sd1hkREE4SWdBWThUZjdyT2YxWVU3bU1pQUFsUmF1LThtUnUyTXRYWUNoaU9kOUJOQnhkVkVkTzdGVDBTS25IelZOTE1tY2dmWUVuRGN5ZERGeWJDZ1Zwc3hpVk5kS2ZvX3pTbg?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQWNGRWpBaU5iWXotTklIVGFabzRldGF2LXJ5YVJFYVRCVGg3ZDQxd3BNZlFhRDNxNUl6Y3dnWkdDVnpIbzk2X1FNZlNZMi1YNG8xRDloSmE1WkxWTUM1LWR2d25mVnJad25kVUVTUjZaZXoxLTVZbmZXZm1FOS1QejI0a2dNYzdlbGtDd3drYlpEcDZtODNFbVpUb27SAaIBQVVfeXFMTmxaOXZLT21QQkl3dXB1TzYwME1taFVTeURKZzNLeGlVOTd3TlFsMjdIajNMTHFOUGlkSHdYT2gzSEcxbDExTFhJTk4wUjRCaGFsazYzY05uaEFMdGs1LVptcHFUQTN2dGtMSWVDQnEyak5mSkhVWURyR2RxZUVObHJ3d1JzMVZCdHJxRjNZS3g2ZmpqOGhiWUVtd0Q1bEQ3UFln?oc=5"
    },
    {
      "title": "クマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQMDFYeDduWnh6QTN6OW03YmdHR3QyTGxHeVlQR0VjODR2RlU0dlBlSTVscURXQUQ4dkE0VzZsdzhEUldPU3RSSmx0bG1yNDhXcV8zM1oyMUJ4MUlfWmJqY3hxckVEM3MyeFRsOG4yWWJzWFkwdEd4VDFnOWpJaEpHTTY2bmhjYjR5STNycGRqVVh3QkpmaTJiMlhxYXhnX29nSlp1dUloWXpwVWh4Vi1DUlprYVRzVDZrWlhURXVZMXhlZk5abUFGRHR6RmR3Sk9OSW1DZEpWNDgtSEhoWmgyQ05CNnVXNl9NV3ZCSmFTcjRxZ9IBogFBVV95cUxOWFEtY1hHM2NGbVBCaWx4UkRXRE9VRVh6NDBONDZaX2ViX3A0M1YyUHhhNG9aOWh6Ui04Y29RSWxQNjBXSFNsM3lWbjlfOVUxcGZPNGNkR3ZrbFYza3d3Nm9lZGVOQ29ZbU96ajNLblRwLVlmR3pLdDVhN3pRbmF1OFB3R1Vaak5iS1B5WlFqWTFTWkN5SlVSTmFZeHN2Z1BUM3c?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOT3B3ZmtMcERuTWk2NE9aRjd2YTNydGM0amhTX3Z2ak1mbHE5YlIxeTBrSzFaNkhIYnQyWG1OOEV4ellkVndTYzYyS3VFdkVRcHVlamtCYndkWVkxZTMteGNNbHZpX2pMbjBYY3BVMG1WbWIyS3ZYM0lJTmk1dHd4Y0l4NmJ2Q3I5UG9uNVNibllaelp3TUpWSEEyN0_SAaIBQVVfeXFMUEllRkVHVUVwN2xuOUdzdHFvZFVMTWxSb3pUSmJ4aVFZdkJhY2lHZTRJeXNMNTRMMXEyN1V6ZXV6V0pNN1g2bDIxdW1CeWpJcWZaTVdOUzVwaTdTbGFJTzY0Ylg2Nm8wVk1Tc0ZHRWZ5aXFZY3V0Qmk3RnBJamY2X1E5ZWRVZ0Vua2VQVU03WkZkSFh3SlA4UnBnbngxVjNKUDln?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQZ0xtMW1vSVdqUVlxNG02RmV2RUFIaUJuYzFkSUNPdG5oZ09McGw3OVhYaVN3UWJ4UFc0UlRKT0d6MVZrVjAtVW9ydTE1ZzFNTXcyTTN0S0puVnpFbXlYT2ZsaEJiVFFFb1czU3dPWUw5dkczYzdQMkRhMmJ6YzBRc0tMdk5obU5jZWV4cFlfNFpUUU1EeWxscUpZMnV1QVBFcHFTbTFTR2JKRXA3cVk40gGiAUFVX3lxTFBQNWhXQlRlQ0lCZXdxYmV3TWlfUFE5a2JYaUI2S2ZJWDR4TzV3TDU5Z3FTRjh2azdEZlEwVjJ3Y1VYaFQ2WjByMVpEWUFXNjBmSlVDT2hIMGo2MTh1eGowNHB3c1NJN3B3VnpuZ18wM2RWTWJsVEVEWlBVVFZCc0VrX0xCNGxoRkNzNGNMOXpsMlBVanMzSGZTR0ZXUTdqOEQtdw?oc=5"
    },
    {
      "title": "車力町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNNGVKOXNQMmh6OFYycWxFZ0pGOTMxR3diVG9WVHo3MkNLU25lbzNsSkFfZ0VoOHNiclc1VGZHaVFVaVhReTJhWEF5VlBzNDhMallRRUtSeHBERHktZ0Q0WHl4UzdmNTQ5WHJERzdxYWF0bXRYbmtzS0lxNU9ETDVZSzJlOUZEamE0VmIzczNEY0FMQ0h1SFdwblBmN0bSAaIBQVVfeXFMTXRTTlI1SVk3azN3b1hqeF9kZGtnY2xXRVQybjRpRS1pOGs0MDhCWXoxTzducXhST1piWlBaY1lPRnVBZVY5M1FwSnpYTWNQQmx5eG1RVXJxMGFoU0RVejhDdFF0dTV1eXMwZjVpeDNJSnhXSF9uQ3RiY0NtdEt1R2FWZ2hzcGJLQzAwb0poTmhGZmpTd3lwQWNaYXZDMUFTbXRR?oc=5"
    },
    {
      "title": "三滝堂ふれあい公園付近で熊目撃 宮城・登米",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBFWVpxaTRoMkNfYU90VWx3U0plb09BZkQyZzJMLThzcnJhNjN0YWN5Z0NILV92bU5jWmdDQ3ZYSFhpZVdfVElTTDltRFlEX0t2ckRBeVY0MjhHeDMwZHFEUA?oc=5",
      "site": "河北新報オンライン"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOWnZYRllMeTJHc1A2UTE3c21lS0gwTjRVTkFDOUNEWk5iNHYxZ1dTYmh2S21xYTFvOTRKYXVlaHU1MWlmYkZnQXI4S2JOaXhsZS13dU1EampDM3F6M2ZVMzlhT3FRdHhIektzSi1oZGhpSVU3U1BkVUM1MUlDMkx1T2tXWnFpd09MZk9HeVdJWVFVOVhHVXpQMFQwczRsSmtfVGJiNC1KYks0UTl0WFlMUGQ5ODlVMjBpbF9ncWF4ZzZqNHBoazlDM0VIVnJQMFg4VFBfc2dTakp3ZV9ydnVmR19kdW55WC1SQTBwUVpuamswZ9IBogFBVV95cUxQcTM5Wjg2QkxDT3JPUFptR0VLa1lfbVdZWGxiQkxhQ1gtc0QwYjk4X1VZbzVFdU5NRTVMQUhVUmprOUxFN1NrRVB5VlNzb1VXY3QyeUtvUTlzTDZlVDZSUjZrRTVoQnEwdlFSOWdCZGE0TG54bl9LMXVaWjNUUHBEMlRBNUhtTlYySGY4Yll5b1FmSVczR1dyUGVjampWNlpVa2c?oc=5"
    },
    {
      "title": "クマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSjlOVTJYbXcwb1d5VFJ1T0J6TTlZczRfNkJ4Zl9ZV2FLbVYxSURuM2lEVi0tRGt6X1oyNUt4Mzc5bGZlQmtBcjBKRHBnZlRkS1hZSVoxcnRTUVdpX1RDeFQ1X25IM0hPZjNyZ2xrek5mME1sbkhPVWZ2QlN0NnNTUHZ1MkV2VWxxTUFiVHB1RjdlaTdfN2pEXzh3VVHSAaIBQVVfeXFMT3lwbks0M3BuYmNsRFZkbWhwY3B0STJEZkxkNFZhdkgyNjQ4SzRpZlJ3VDgtUTNrOXcydTVYSEh3WWhWNTZ3ZHBWQ0xhT3FnaXZHaUg2LVJ6Q1ZwRWFkQnQ2Y1o2Z09MbGhMTS1SZ0ktcHByb194bFBKMF8xdVBJcjRueGtTMEwwd2tDV2xUREs0YmJ4RlhDbk4yWm5hSF9FVXd3?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxORWRaTnFTVGFOV3F4Q3NkYU9ILTZjTzdqTXNiNU1XU0dKVXluWDgtZmJONkxjUUxja3I3ZV9nVTQzd0M2VGpEWngxVUtwcmE5dll1bHBjMVROZFRlZVNvSXJUS3dwcXBORDBTcWpCb0I2cEJMUng0R3dVaHdqR3UtRHo3aFhQWXJwU0pSb3RrMTktRTJzV2daZy13OHJVUzdCbDJsdnB5dkZxMHNJRFlV0gGiAUFVX3lxTE5heldLMGkyVmJLeFZSUWwwc0U0UjB6d1V1N29LMkpHbG5oOERLQ19XM3AyeUtvWEhvdl9IYndJS1BtVFY4R3VjSzhfWTVBdkZweWlpeTNpY0I5ZTZFNGxMQlAwMTRIYVdpd1Rsem14NU02eFFZbzJkbVU2TDRtc1p5bmdodFlFQkFEMTJscGhhd0ZnaVB1b2hCbjFRYTBZWGp1UQ?oc=5"
    },
    {
      "title": "市内でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNcnJVYWs0OXZQMFc3S0hLQk9GU3Q3blA1eDFCZTM1Z0RYQlNmQWFRcHpyR3poZzBYU2EyYjNoMENaWm1JZEN3RW81a3Q5bHMyeEhOVWJYbkpoZzZnY3JIVFhRbDd0ZFVrUWlNY1JKeFNqUG5FMjVFWW8zQ2ZNOXFQTnlqQTNENUZpNjltaTFXU2pBaG9JaWxLb1YzMktmTzBER1JndGRuYW55TFZSQlJB0gGiAUFVX3lxTE8wREY4Ym5ZczkwdDVreG50OHRFQ1Z4b0owM2ZiLXl6WEFZSUU2UHNzYUNMZUs1eGNndXZhenc4TE9YMGJjOGdiank1alFkcE5xZnQxLVotVGg0bGs1eDNzZnlFOVdSRjRvTkswZExSaW5VMWRuazJ5c2xBQ3p4Y29OQzVadW02V05lWW5XMUJVVkhSYUtSZHlvc2QwRXRoUFhoUQ?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVGlmZEdQTmNkRGRMa09TcjcyU0JhNTBXN0d5RVJEejBMdGZXY2VKYUZfMlllUU9hdWxVS0REMDRkd0QtbGxXYlByQTFKS1FXOXh1WTI3YTQzcXhyQ0pDd0ZwaU9MTUVNcndNV2JxWC1rbldwYmF5bElqN2tST0toZjVOamU0ZEVoNG11ZnZYTVJ2VF83X04zQXRTZ2rSAaIBQVVfeXFMUEwzcHV6bHBPamZ3djVCYUdUbERsM0lDRlV0UjNzamF6NU1oeGcxR1JZV21FSE9RNjRLMzJTVTZrakh6UTk0TXQ5M0M4UHVrdjEta1dXQ3ZQZ3Z0cUk5eG9oNWI4Z0haTGNGMkNCd2VqUE8ySkRqRXdDcUZ4TjhLT2k5d3ZNUmREeUF6SkhDVm1BUkU3YU1sYnIyMjJ3QmswcVJR?oc=5"
    },
    {
      "title": "十和田湖中ノ平でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNakZKS1JtOTRjQ3JUWUQza1Nfb25oZW8xWVRZX1ZrOXBvQ245bHRnVUpwcmlKcTlxNjZ0dkQwVVJsblJUMF9Lb2lTbnZYZlJnczZCWHp5NV9WUHl4ZXA3RGhFUVprOGhUQjl1YV9PYXJfODJwT293N2tlRjZ0NGdEYjJvRzlobFlpUjJoQm9Ea0VkOGNoeS1qcHpLVjXSAaIBQVVfeXFMTXhvSGZhbnZpWnFHSjVocGZUUHltMkpkLUhENU1JZHhFN242SFBTbkEwdjZ6YTU0TUFGZFgyQjJFclFtRW9JQm1JNHpoLUthbzBsbll0OGlLVVhBdDAzdl9rTmdMeHpnYTRxVUFlN0I4ZFhMS3ZEbWVid0RrX2N4azJVVzkzbi1qenNxZktlTHVjQjBUa1NLS2k5a010ZThkV1pB?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQUk02UUZYeGIzRmhEZWk5eURqTDFKR0xyNzZKMXZ1VmI3bWpmV2Q5QzJybkJCRU9jUGo0SDhwbXdaQlhsNTd4VUFVOFhjc2VYRGU4R3hZNmRxejRZYndpSlFEeDRiWDJudHhSYUJub2ExOGJPbEw3VXpQVDFybi0zV1h1cVZ5VnFzTVU4MVA2a0ZuaEptdkludk5LbE3SAaIBQVVfeXFMTUNtdFBreWxkM1M3dFNTMnduN0VEWV9hTTVJMlZoYTNiMDJkWWRNUTBOUm9ieExmenROSGlYLWFRcFdrZzBsSmNSSzdUWkxHU21NRUQxZjM0LWNMYVdXUzhjMFdxNTlYYmxIXzZDZnV4R1lZRHd0bmN6X2t1TDc1UmlOVFZ2WFQwSktqM0xzTW9IM2dBRE4xVWtUd1V0RTU1VEJB?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRWxSSFVRay1POEpXa3E3S0UzZnBiR2tGR1VrR2dqd0JYYjBoTGhYYWV6YUZiSEltcU54V0VZc0JtMkdOS3F0OW9KTDF2M3Q1dm1mWk1VbGctcDBmcG1xcXAxMTVvYW43VDIydWVCLV90dWt5V2dKckUzM1pOV0ZkeXMzaDBEVGF3aVdCcXViR1diR0pRLXh6cWdITE_SAaIBQVVfeXFMTkt1MEFYSGxucWJFVFVKYnVpUEdfcXRxTEVHS3JfOGlDMWlicjZjUnFJQXVjejJLYXdxQ09tcmhVYUxDN2lMc3ViMG9lYUFvYUtTVG5yVzJYRjdNZTRoN0dDNlZRRjVOeHRNWE0xSUV0eVNYTzNmXzkzZnByQ0cxRUlqMy1UUnNiSFVCdGU3OThmbFdCcWFFYmxtQUEwck1TRDhn?oc=5"
    },
    {
      "title": "クマ出没痕跡",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQQW8zMURhYmR6amVCVUFsLVQteUtISTN6M2tpQ2NTaS1CT21yT0JydEJDTXRxelQ2RmpPU2w1WmM2Yk9VM1ZtMDFmUTBsQ3R2d0tSa3NYSUVsT21vcWh6dVQ2Y0NRYjVKMHNHTkdFMklWWnM0N2swZ21IQXF1dDNCV3AzbjN0cDVOMEJ1UnY0b2pEZld6TnBlWDlTbWxGTjFHeHc3cTRjYjN5cndSeGZz0gGiAUFVX3lxTE5QYlozOWpLcTF2d0M5UTNPTDdPeElrdGRySGNpdEJVcHpzU1hyRV9nemdCNmd2S0dhYnUyMVlFUHJZUVZBQVh4dzlOWFhSbngwcllubTBfX0VGVkVtZENFUm1uZi1lUVR5YjIzZUNTV0lPNzJuOWdqZHozMW9qOXFYVEVQMmNTYXRzTURMNUoyVUxJNTZfVHg1d2dFR1lnQXNXZw?oc=5"
    },
    {
      "title": "クマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPMjFwd2Y2dzF6eHRmRS1ER05qcE54Q3ExLVUtOVJHVDBiMmI0NVVGZU1vQmhlNFcwVmlKZWxGRmFOZnltbDBDSklmbzJlRWlfS19GME1QQWUtMkNLTHJmampaZEd4WUNVaDBIUEp3bXlEeC1VX2JjOHFqY19VOERnYTU3ZzFMUm9GWlI2U0k1RWdNdExiT1prT3NmbmpFbUM1Nm1hLXVGaF9GVVNQZjRZ0gGiAUFVX3lxTFBrUTNNd2stcnBuangzZ0xIbG9PRWhMdWcyWlplSEk0MGo0YTlxNUVyekphcXpnU2xRd3VBalhDTDJXdFRHMDlnamloRUJuRGdtMm5QY2pFc1JscEdBYi1fQlB1SWRXUXRuZVl6X1BHNjdnSF9vNjZNdHE2ZF9YLUhtTHNfaU54RFctcWdWTS1ObDBPRnhhT2hfLTA3LXYtRlFHUQ?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWXUydlk5Wnp1Ymt6MmU0Q0VwNWQxNEpDRmFPWkhFeDhOZjVYYUpXZEpOTGFobXkyYjNXRVV2cjV1ajY5MG9PTnVrUWVpZ1Atci1KWV9jR0Myc1R2V2VoV3Joc2JkSjQ4TFEzaExPRDc0VWpLV2NQdmRXT3FFYmduRkJPMTBwS2tKMXRndlo3ZW1ETlpwNG55Ni1qNVPSAaIBQVVfeXFMTl9qMDluVG9rZl9BT1lHcmRvbTE0QWdpekt5ekpMZUFxLW0xTGJSRVFpSnpodFRLdTBoaXZCZUdlck1VdGR4LUg4MUx0bWw0T3dQWWxxbUJORUQwNkdRUXIwMFJGdEFZU181c0hXTE5VdkFuMnhMVjYtS0lfMWRpaEh1RWRQT0NOOVRaMUJkVzNoNHdRVUZsMzdoZ0J2NTQ5WlNn?oc=5"
    },
    {
      "title": "クマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNeFQ4anJLTm5NdmtMSVR6SENqMnFreVZaQkV5R091SUtMMEtHMDhDODNTN0ppdFQtcC1pMjJrZUpPRzFwUGhINGYzXzJ6WFpjMldZOWZfX3BMOE9QSmF5TmhRVkNSUjVKODRkMWRCVmc3R3pBNlR2UWF0QTRFTW93c2laS3pDZjZseTdPYVA2cmROLUlBZnh4NGY1bmdITEtzS2Z3eXQyd0otUlBTbWRKS2JVV1V3S3AydGhoQ0ZVVzZXRmdrdjdFSGdFaHFIMlJqakJCVUtIWTZ6X2pxMU9nV2tYYmprTXFjYlNWc2NHcm9FZ9IBogFBVV95cUxOR2ZSWXhiR3A1eEN5MnEtT0xTQnhFQ0xobVprOEwyb0xSRFQtSk5ZOGFwbHZrSHFSWlZMbTJkcU4zREIwV2sxNEkwakExTzBCb1RQM28yU01ZQXIwX0tSUEN4WTFzMU1rTWNUSjFWWEhTdE01WG5qeFBoeHJxWjhYbHlBY1B5N2FiejdDeE5wTDF5UzFmZWhOSFJtemkzdDBQdWc?oc=5"
    },
    {
      "title": "クマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQdkFTcXhMMlA4ajBhbGpXSFhRdHNMMVFjUEJTZ2lMVTNlSlhIVFJOVXRlT3JHS2FHdWpWUlcxdDdIc2xfamFIT1ROYmFuMlUwUFJpYm5YSkgzbXhrSF9sdFUwbFpqYlBtWWUwLW1rcFhia001cGVadEFvSzltZEVoWDlQWTFiaWRtR3FQZGhYV1FaS2JFX1RrZXZOMnDSAaIBQVVfeXFMTnctUWd0TDF0WFBrcHpGZFc2UzRzanpVcGdQWUdqbW5RVFF6anI1SHRsclp5enh4ZEpfQ3dQU2pPTGd2cG8wMVM1WVdqVVdsZ3RxbkF4ak5jaHk2eTdZWjNaRFU0RHZYS01YMUlURG5SUlNhQnZBdGNGekhTYm5SQzJWZWZUSms5aWVWZjN1VkVmNW9wYkEtQm1CaTloNWFiSXZ3?oc=5"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNcEVtMUZIVWVYakwzbkc2OTJBZmxfbGk3UlpYYU52TDVZRW5lVlFGbTBDRkJpV0pjRC1oUm5yUmNtYVJrb3NZdjRqMEtFWTdGUHJpU1FYOFBmMFg3NHBlMVhWZWFnLURseUNfU1ZrUElsem4wT0VCTUFPb0RBam0wSk1rbmdYSDJCdXk0eGgyMGlEN1FRaUZZNnNacHZJRS1IRld1dUpEUl9vSGQzRHZJ0gGiAUFVX3lxTE9QbHdFRTBZUGRnV1FMSUpkVU45elFZSVRxbDVNUkJOMUtteVhjVFlweVl1akVtWHI5VEdKeVBYMFRsMnRWQUE5Vzh0al9pUTlNaEp0SFJpaXJ5V2hLd01rRkRwcjdnTTVDRmI3bmpqNVVxYnI4MTZPMFFlbl84YTBDUU5TME1ST3pJd1BVXzdSMy1yUlVnY3Q5QWs1VU1iUmVMQQ?oc=5"
    },
    {
      "title": "町内でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVjNzQWxZYjEwY3ZoVFR4TC05cXBZMkpTd005R3Bacl9oa18ya0xwVko0Zk82c05NbmdJdlo3bFo5RkItLWF0elV0Mk4yT04zSUN5QVY5RlYzUFJCYm1TSW1jeHRuOWVIdG1tbkQ4ZnZicTI1OFZtV2RRNUFOS3ZuN0kzRHB1SWM3N3dhamVJdTl6eDVMQlAzMUhGQXLSAaIBQVVfeXFMTUEaZmZFN1NIX1VoM0doZmtnQlpvdUJQX1RTblNWZnFFTjdDamNtdVlkS1lycFJmUW16YlVhYXZOMjdQZzdmZU5FRlhYUEdBallZSDFHSHBFdEtFclpEb1VyQjhzT1lvMF9ST21yTERlQnY1THVxblVvNE50UGhLQUFwQ210WGlPckw3S2U1TVhiY2FvR2J5VGVNdTl1RXBNSEtR?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":17},{"pref":"福島県","count":9},{"pref":"群馬県","count":7},{"pref":"青森県","count":7},{"pref":"宮城県","count":6},{"pref":"山形県","count":5},{"pref":"長野県","count":4},{"pref":"福井県","count":3},{"pref":"新潟県","count":2},{"pref":"栃木県","count":2},{"pref":"秋田県","count":2},{"pref":"富山県","count":1},{"pref":"岩手県","count":1},{"pref":"京都府","count":1},{"pref":"埼玉県","count":1},{"pref":"東京都","count":1},{"pref":"岐阜県","count":1},{"pref":"広島県","count":1},{"pref":"静岡県","count":1},{"pref":"兵庫県","count":1},{"pref":"滋賀県","count":1},{"pref":"和歌山県","count":1},{"pref":"神奈川県","count":1}];

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
        <span>対象期間: 2026年9月18日</span>
        <span>·</span>
        <span>公開: 2026-09-19</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={76}
        periodLabel={"2026年9月18日"}
      />

      <h2>概要と主要事案</h2>
      <p>本報告期間（2026年9月18日）におけるクマ関連情報の総件数は76件であった。収集元別の内訳は、報道由来（news）が53件、自治体等のオープンデータ（hokkaido 8件、gunma 4件、kumalog-aomori 4件、fukui 2件、fukushima 1件、niigata 1件、toyama 1件、iwate-morioka-mymap 1件、tochigi-2026-mymap 1件）が23件であった。人身被害キーワードおよび捕獲・銃猟キーワードに一致する事案は確認されなかったが、都市部キーワード一致事案が7件抽出された。</p>
      <p>特筆すべき事案として、山形県酒田市において市街地および住宅街（上安町、北新橋、新橋1丁目等）での出没が相次ぎ、親子のクマも目撃されている（※1、※2、※3）。また、群馬県中之条町では中学校のテニスコート付近をクマが走る様子が目撃されたほか、青森県三沢市の大町でも駅方面へ走る個体が記録されるなど、市街地や教育施設周辺への侵入事例が確認された。</p>
      <h2>地域別出没動向</h2>
      <h3>北海道</h3>
      <p>北海道では計17件と全国最多の出没・目撃が記録された。苫小牧市静川でのヒグマ目撃（※4）、根室市別当賀（※5）、喜茂別町（※6）、八雲町鉛川付近（※7）、弟子屈町国有林（※8）など、道内各地で目撃情報が報告されている。森林部のみならず人為的利用区域の近傍における事案も散見された。</p>
      <h3>東北地方</h3>
      <p>東北地方では、福島県9件、青森県7件、宮城県6件、山形県5件、秋田県2件、岩手県1件の報告があった。</p>
      <ul>
        <li>福島県：須賀川市（柳山、畑田平山など）でクマおよびクマと思われる動物の目撃が複数報告された（※9、※10）。また新地町杉目田中（※11）やいわき市でも出没・目撃があった。</li>
        <li>青森県：三沢市大町において駅方面へ向かう個体が目撃されたほか（※12）、階上町道仏耳ケ吠（※13）、つがる市車力町（※14）などで目撃が続いた。</li>
        <li>宮城県：登米市三滝堂ふれあい公園付近（※15）や登米町日根牛小池前（※16）のほか、利府町赤沼井戸尻（※17）、栗原市栗駒沼倉耕英東（※18）、塩釜市新浜町２丁目（※19）で出没が確認された。</li>
        <li>山形県：酒田市の上安町、北新橋、新橋1丁目および市街地で集中して目撃され、親子連れの個体も記録された（※1、※2、※3）。</li>
        <li>秋田県・岩手県：秋田県では秋田市下北手宝川姥ケ沢（※20）および小坂町十和田湖中ノ平（※21）で出没が報告された。岩手県盛岡市簗川第３地割では住宅前にて幼獣1頭が目撃された。</li>
      </ul>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県7件、栃木県2件のほか、埼玉県、東京都、神奈川県で各1件が記録された。</p>
      <ul>
        <li>群馬県：中之条町立中之条中学校テニスコート付近での目撃のほか、中之条町内（※22）、下仁田町西野牧（※23）、桐生市堤町1丁目（※24）で出没や痕跡が報告された。</li>
        <li>栃木県：鹿沼市茂呂（※25）などで出没の可能性が報じられた。</li>
        <li>埼玉県・東京都・神奈川県：埼玉県秩父市荒川日野（※26）、東京都日の出町平井（※27）、神奈川県相模原市緑区鳥屋（※28）で出没またはその可能性が確認された。</li>
      </ul>
      <h3>中部地方</h3>
      <p>長野県4件、福井県3件、新潟県2件、富山県1件、岐阜県1件、静岡県1件の事案が確認された。</p>
      <ul>
        <li>長野県：軽井沢町（※29）、木曽町新開（※30）、東御市和（※31）で出没が報告されたほか、佐久穂町では体長約1.3mの成獣が目撃された。</li>
        <li>福井県：美浜町日向（※32）や鯖江市金谷町（成獣1頭・幼獣1頭）で目撃された。</li>
        <li>新潟県・富山県：新潟県阿賀野市で民家直近での目撃（※33）、南魚沼市坂戸の薬師尾根コース４～５合目付近で糞が確認された。富山県富山市八尾町谷内でも糞が確認された。</li>
        <li>岐阜県・静岡県：岐阜県飛騨市古川町中野（※34）で出没が報告され、静岡県熱海市日金町（※35）で出没の可能性が報じられた。</li>
      </ul>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では、京都府京丹後市丹後町平（※36）で痕跡が発見されたほか、兵庫県豊岡市宮井（※37）、滋賀県長浜市内保町（※38）、和歌山県日高川町老星（※39）で出没やその可能性が記録された。中国地方では、広島県廿日市市津田（※40）でクマの出没痕跡が確認された。四国・九州地方における本日の報告データは存在しなかった。</p>
      <h2>出没状況の集計</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">主な出没地点・特徴</th>
              <th className="px-3 py-2">都市部該当</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">17件</td><td className="px-3 py-2 text-xs">苫小牧市、根室市、喜茂別町、八雲町、弟子屈町</td><td className="px-3 py-2 text-xs">なし</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">9件</td><td className="px-3 py-2 text-xs">須賀川市、新地町、いわき市</td><td className="px-3 py-2 text-xs">なし</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">中之条町（中学校付近）、下仁田町、桐生市</td><td className="px-3 py-2 text-xs">あり</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">7件</td><td className="px-3 py-2 text-xs">三沢市（駅方面へ移動）、階上町、つがる市</td><td className="px-3 py-2 text-xs">あり</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">6件</td><td className="px-3 py-2 text-xs">登米市（公園付近）、栗原市、塩釜市、利府町</td><td className="px-3 py-2 text-xs">あり</td></tr>
            <tr><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">5件</td><td className="px-3 py-2 text-xs">酒田市（市街地・住宅街で連続目撃、親子連れ）</td><td className="px-3 py-2 text-xs">あり</td></tr>
            <tr><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">4件</td><td className="px-3 py-2 text-xs">軽井沢町、佐久穂町（成獣1.3m）、木曽町、東御市</td><td className="px-3 py-2 text-xs">なし</td></tr>
            <tr><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">3件</td><td className="px-3 py-2 text-xs">美浜町、鯖江市（成獣・幼獣）</td><td className="px-3 py-2 text-xs">なし</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>本日のデータでは、山形県酒田市の住宅街・市街地における複数回の目撃や、青森県三沢市の市街地、群馬県中之条町の中学校敷地付近など、人口集中地区や生活圏の至近距離にクマが侵入する事案が7件認められた。成獣のみならず幼獣や親子連れの個体が目撃されている地域（酒田市、鯖江市、盛岡市、つがる市等）もあり、住宅地直近での遭遇リスクが潜在的に高まっている。</p>
      <p>9月中旬という季節的要因から、活動範囲の拡大や採食行動の活発化に伴う人里周辺への誘引が考えられる。本日は人身被害こそ報告されていないものの、民家直近や公園、交通網（駅方面、道路横断）に近接した事案が多く、住民の移動動線とクマの行動圏が重複している傾向が窺える。</p>

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
          <dd>2026年9月18日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-19</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-19</dd>
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
