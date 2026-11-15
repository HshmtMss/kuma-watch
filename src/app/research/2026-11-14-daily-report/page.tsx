// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年11月14日 / mode: daily-report / 生成日: 2026-11-15
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-11-14-daily-report";
const TITLE = "2026年11月14日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年11月14日に報告された国内のクマ関連事案は総件数25件であった。学校敷地内を含む生活空間近傍での痕跡確認や目撃が複数報告されており、京都府や福井県を中心に各地域で記録された出没状況について収集データに基づき報告する。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-11-15",
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
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
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
      "title": "2026年11月14日 山口県周南市 鹿野小学校の出没情報",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBSLTJOZ1JscnNiMHBmZ2dwTkU0NjdvX0F1cU9FemhWaVpQMmVYNDcxMC16T3A0aU5fTnBnWDRYQTFzNHppcVZhWUVZRm4tbHctUm9lMmdMT3Njb1NURThkRU83MzlTUllFNlQ4Z001SQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 山口県周南市 鹿野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE8xdXV2dHFvTXptazRJN3pndHhrM09DVEV5aEdBYW1tUkwwZ0xTU0YyLWZpYWxNM0RaQUFhN01TckdkbmN6eDcybElpTjR1LU84bUhsMW9aY3F1NVlUMHh2M2pmaVpFX3RoYVM2eXA2c2ZCUXBaY0E?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 山口県周南市 鹿野上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSERKeW00N1RhLU54bjF3N1I0TzFXeEV5WDlKak5RMFAxUjJyT1VhYjZidEtMd0tPTndoY2s5Q1Fscjd0QVJXNVc3cnBEWmpaOGJMelpESW5nNmhOSkQ1c2RxdWt4eG4zV1JQaHEyOHRTeE1iSVdBSy1VVDcxZzNGVDFmMmMxWTNTYWJSVjRkY3NqODVMOTRaQXpfWmTSAaIBQVVfeXFMTTFJT2MyUkRzblNkWC1tNElFbVVxZWhwS2NmTXRDVVhMQ1VFaFFiSS0wTUlvSldleFdfRzN0VzBQSVd4TzdCRFhjOUtVbzZXSGlqSGsxMndkeGh5a1BrWFplOVdYbGJqUFR1bWdQakF1TVRjd28taFNtcGloYmtFZVRxZEhybXNjRklsQnpoZ21DMmxOOEVoaGh3ejhDS2lqRmRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 青森県むつ市 第二田名部小の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE9oTTgtVHdsYktKTmUwWXpJUHdHQjdJNU1OZ180czIyUDBrWll5NndPcDBTN2JnejJ6aE5rWWNiMXFENGxTTndSdnVPbw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 神奈川県松田町 旧寄中学校の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月14日 北海道厚沢部町 中館の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOOEJ3ZzNfNHBxMGY4VnYzZFF0c0NTaS1YdlRwMjRzZk1rSEdsZ2lNS2piTGZzOUY4QVZ5aEd5MVZIanFWS1JWV0pRRk1nLW45akFFcVlwbV9GLTFwMXA4WEtYWGZEVXNHVzgtQ2pzeWF2NmY0V3FXQzhNNnhYRzE5QzZuNDVXMUVQa1E5UDdPNDM0Tm5tZk5rQlVTMWXSAaIBQVVfeXFMT3FMa0Z1ZklVOTVCMkJJV0N0aFRhQ3NkRE5sRXJNNFA1eW5ja1BUbHJqYWRybTR2VXJ4QzFMc1NNLXdzbEpYSVNUR2x6cmJnTTU5WDRyNmFTVnd2YlFDN1RrajJRVkN0TjJpMGpMMVk2cEhNZXAzeWp6a0FHYzh2VWtDaDUwX1VQTkZyUWdKWGpvR3Vrb20xTEN6dFhjV0N3cGVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 青森県青森市 滝沢の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQRWxNMkRnMUxwU0ZKVDh2ZHlfaVZVbzVjUkJSNUwyUnhESU95Q2d4WXJvVTM1eVJSQ3F6Qk9xNjNDWEczUGZ2ZkNnQ1pPWW9SOHVIdlpwNkprcmpjMVRQcHZNbmZZYUJ1c3lkSUpVQW5wUkZ6RS1hTGp4QW9wQnY2TWYxQ0tPU3o5XzZ1a0dmRXFCamctaVRJR1BReW5TSXdQSjN0dF9MTVRhc282SmhB0gGiAUFVX3lxTE9ReHlMdUNfbDAyU1JncXUyQlZEX3hHVndYSklQQlJIOGcwblFEdFdka1JZdVRuVmQ5aENWa1N3d0tQYnZTcklYd0NPUGJkejRVWHdxWE1KenMwUjBpNzZNWWxpZjE5eUNJVEpyMkFOY3VtY2U3X1gtY1AxMTJ4bWFKanNKQVhPNkdMaG10RzhrQVZraXdkVVlYYW9vVG1UWk96UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 福島県二本松市 下川崎早坂山の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTkNPbm14RUp2T1BXNGZpN3RwV0RPR1ZuRVhMMW40aFNIazl2OG84QXhJWjNNdVR2WDBVaUxWNjJGRDQtN2Y5QjNjQS16REV2N2ljLWl4TlJpUnpmSUROVFVhSDc2eUFxeG5RQVBFeWxpVDdXajZTVFZ5T1FxNlJYeWVIeTYyWDNrbHRyanVKOUFPX1dveGhraElpNTbSAaIBQVVfeXFMTzd3R0VxMlhReXdCaWFyOURZNE92bXE0ZDhDbWZIYURfT0s1bDNpYkZBZTVrOGJBdTNLaFJQQmgwX3VwZmROTkdBNlBINDNXSDBBTUNFR0xpWFFtUjRrWnNlVXNHZjNsWTE3YlBvX19wM3pjOFJ1WUxDY0N0ck9wc1FFRDZUTUtGeHpKandyVUdBY2p3UF90VEIxbFBhWlJJMUdB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 福島県二本松市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA3dXd2eHRmeGdua0tkekxjQ0xyWVM4OGhJS1B6WFpvSFpMeVlad25MY3hXSHRBOU5yOWNpZk9pclNjdVgzLS0yRDZjTUNhcE9kWndRQ3BpN2hfWjFxRHE4UDFnUkNHWV9aOWhYVjBiM05aSXBCQy14alNVZEM2dGM?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 神奈川県松田町 寄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTUhNQS1VdlNEaVNfdURNY3ZzS2sxQWVXeFh5UnY2NzZKMDc2bVZWd2ljLTNCaU83V19qbjlYR2Y5SDNpRjAtdm9GUmtUM3luaUJoSUpJSDVpR3hBaHVPYzdZV1FvVUMwZ2N0U0VKWFUtMG04WFRzZnAtOHM0bncyNlpFbkJ3OUVNUnRtYzR3RVZ3cEtjcUxVajZZd1jSAaIBQVVfeXFMTWV6V21MOXRwYjFrR2hGcGRUUmRsaW9KLVJ2OGdyRmNXbTJGX3VJRHp6cndTN3hVQzdpLXBrRjBmNmJHSnRfWUlaMkN5MUN5dFJEaGZpU3JFWXF6SkV5OUtwMC03bkFaLVgxWEJJXzRqWDFqT0NuVWZwdnRCTnFCYjdQSkE3VXR1OHY3NjBkZFBfWUdMeGNDTWNiSUtiYnJJdVZR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 神奈川県松田町 湯の沢地区の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月14日 群馬県桐生市 広沢町間ノ島の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQc2NFb0xUTVJPeHJSZERUck83bDMwdlkzUmJ1X2Npc05CYjIxY21zaUFWTTZKSGR6T3dXUzhCMlJ2dnQ5MzNnUk1xMWwtRG5mY2FERWdqZnloLVFlOUdGMEdvYkhyZERKeDNBYVM2dmlJcEFmeXZTeV9CUlhLUTFvTjFfd3JhaUoxTGJnMkJyUjFKTFlmaUh5OGdEaHPSAaIBQVVfeXFMTWNLdzA2OVRrbzBmMDBya0hDcHVselRCWEVSbERaUDhsWkxPZVFzNVBYTWdfeHNNcE4wSE5IQy1fU1VKZWpSbzdJS3ZSM1dBdkVqd3JoMktvMjRuS0pRQWdIeTZoSzdOTXBfZFY2UG9hekxoVVZGQl85LV9ZaU9KX2VJNWZVTTN4QkF6YWdUeGdEak16aWRyeENvX1pIOU5fTjFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 福井県高浜町 子生川上流の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月14日 福井県小浜市 和多田の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNLXFnMDFvSXI2NDg5ejNvU3UxTEtaaTgzN3Ffc1VUSEc4N0tHa2N6dDlzOTFXVzFvQXJPRUxWWVNfY0F1d0szUndoeUwzWlZzWERscTBfY3pIU0NzUDFKeFJxZU1uRHpHZnM5VHZkajJIZ1Y1d2tMQXFLUkdCbGRkdzdhNExsa2k0V09QR3p0TjRkZmJJUWUzU1FHLUrSAaIBQVVfeXFMT1dZOWtUa0JhZnVlOGNBcFZQdkFPUGpScEpqNFNhOXNoc2JJVkY0SU1TYnZwb3lfVEpQZnIxYXlGcGl1aHRhMTNIVGJjTW4xTF9ZbHBkVXhQRDdWQlYyRzEwaG55TzBlVElNdXQ0bkNwWlZTUzdESDVaNUIwQVVSNTNlRzFTQkwxc0l5bVVkQkE3RTVnZDdrY2pQOUFOMzVua0Jn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 福井県小浜市 中井上中井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNRDdxWnQxRExBLVJRMzZ6TExyU0d4ZGpBb18ydU5vVVRVZXVmSEkyT01FODZhb1RWbjFHTUNaQy1IOVo0Q3JZSUxfalg4VFpNOEFTaDh6SVFUeXNwQllpOW9pNFY2cld3NGlmRjBfNUVQQlZNaUZVRFZtSVd6QXAyUHdFNVA2SUNwa3VRNTVKR1JlRWZEaGI5TElyLWnSAaIBQVVfeXFMT2YycFZadlY1dlI3MWtkbTBfbTdnRVN6NEd4YVdoak1tZndZc0ZobndLaFVoNEJtYzlseUtaVVlpZ1NyM01YQlBvYzdKY00zVHlybGIwZUZ6dkV0SWU3QzRpdEtBeWNiWXlqSkRKdHNmY19qUDRyNkU4UVljdGZGT0g0MmdGbkozdkJUcVNEZU9iRGNhYWRGNGd4WUtjLWkybWxR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 福井県小浜市 中井（上中井）の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月14日 山梨県上野原市 川合橋周辺の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPVEtZcXVVNlFWS3ZEQ3RTSWhnMl9sVFdpajlhTFNoRXFJN2xKV2NRcXRYaHE3UUQxSXlsdTl2X05FUXVqSUU0ZW5VM0pZTFV6bEN3SzhsVkVFbWRHdWVVak14V3lEYTRRdTVQQlFMTzZZYVBROGdvTlJFanhFdzZpVmVRLUdVQTUwS0R1cWFIM0dCa3FTQzh2V0REdVNjaDNybEtnblREZlZ3ckxTQjRn0gGiAUFVX3lxTFBHcHd5emVIaUh4RGpFcU4xOXhpY25ieXpVVFlVazRnaUxpYjhjTm5pTF95TVA4M2JOWVNpclBPNG9BWmJlbXQ2RmtoWHU2Z1hfZ2w3ODE4NVZzMG90aEd3cVBCZGFZMWFDWXVRSUh1SFpyVG5tcm1qWS1XaE0tdEZma1BKbFNMaXprMlh4ZnlfUGRvRXREeWhmZDhqamhrdzBndw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 山梨県身延町 角打の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPVV9RblRKVzZzN29Yc3VJSEszVmY1S05uazk2S3NuNDFFeGp4UVhSZzFqdEVBMGM0YVFFWktheGxySnVvT2JEYTVpS0VrYVRuVGNEdHRsWjk5YmpDcHIxTGo4dkxlR1BZOUZMbjFObXVFTEk4dXotb1B6cDV2SnBnTUN6RzhEdGp4UTJHWUo1bWVrVk1GWnBabXFMRWfSAaIBQVVfeXFMTlJQQmhTdHpWN2pmeXJlZ3dkY3VQXzhzRHFhX1huNWFGQzV5LVJCQ28weDh0MkJIVm1HZVM3MWtveS1LMG9HS0xPeGJaVWNxZ2pKaEdMUDdBelZLUjNPOGJVTFlQWjd1Rzgyc0o4LW5MdGRSSHAzTy1VZjRucEQ0X3VieDdiaWRLZ3hzN1l5eFBSTVZsdkNXYXdOWk5lXzc0bXhn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 山梨県都留市 大野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQWpLWXZ6NG5ROFAyanh4TDVQd1ZaeWRNY0FjT0I4dmp5NVNzTWNYTmpIdHBuTVc1aDFUUTNvM19GeHd3QlNSd3pGYlFNUGcyWWxpQ1F0aHltV2VSZmF3R3dsSVlwUERHQlBEeWZRWGVVbTdZdDZtY1lKQkMzSlkzckNieUVIakx5T2NRRzJhaVVmbjJ5RlhBcVNNQkvSAaIBQVVfeXFMTl80a0hzOVpDdldYc2lrX1F6NnVBV29EOVQ1d1BxemN5WU1GdFFYbElVajhRel9FSm1KZkNVSzVYX3F6LV9mdmxUUGRiWU1KNlloMGVnVzYtejhzZlhlaDN4a1A1WHNMcE15MF9DYW05dlBTTzNNWG9Vb2FEUUlvWlJEeUEyZnV4LWk2TWRialRBT1ZKS0l6bnlwM0dFdlltWVBB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 長野県中野市 豊津の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOS10RkVpQWVQaV9UeHlERldMY2RUU3VFUmhDcTI2WXVieVlqNTZHUFppWEk2c3dSY1V3OThlR0l0YXRfRlhITEs1Z2kwN3ZvZWw1Z2JFQXExaW9zT1B6WWtGbEk3MXpQdldfSWw4UWVVRkZneUVmd2s5MTY5cjJzSVJpLTh5VFRvZE4zempMQS1QQVRJWW5NLWdXQnfSAaIBQVVfeXFMTlpQcFlqNXFkX2FPM2VpN2dMRVlmSnlyeEtiRThiNTd2bWRrQkxYOUpUZ2tEWWFaNFFqWXNQMk5MMWxEcndRd2NGRVlHZVFkcnoycUZpMG1YNVpJellTODJfZE50SVRGa1NSaGVUZW1JVWdoN2RaUlNSWkNEdUVzS2xqa2I3S0paTExfbUt3MW9FOU0xSTNQWmJNTnJpaHMtTXJn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 京都府宮津市 下世屋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQzZ2Z3lBQm53X1NmUGJhMGY1em9IOUY3c1h0cXhOdFFtUWVRcm5CYVdyb3BaamI3LVRWNDZZSkQxSXNTOHliWTNvNTJTVXRZX0wtZHlVdk5hTXhjZm1RakdjRUVma1ptUFVwY3BUSFF4NlVySmFGZ0pWSmhxMnl4SUVoUmc4dThWc01sYVVISWREbXpzN3B2RWE2OXLSAaIBQVVfeXFMTXQ2d2dxb21SMDQtTlNrbWFsdWlUVXJsYUE5cmVub1dJN0NyUHNSTTN2ME5rekljU3BMTTdmd2JvajJTdk56dV9fMDNoZ3ZpSk9kRjVGRDZzZE5uaVZWcnllWVlnci1iTGtQeVNMNEFWVGZvSTA5NFRoeGItUjlncTlnUk05cFFRSWdEX3hkOGVkenhSU2VBeGd1cW9sOElxZVF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 京都府舞鶴市 倉谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVTJjMWI3SkMtN2RlQ1dwM2o1ZG00YnBRTzNmdm9lVmhTbml1NUdWYi1ld0NTajlWZnVxM3JvblJOSGNiblpiZGN0a05qMTNuTUU0Y2NBN0x2ZGNXQTJXUkEwMWI3c2RzTktFRmJsRnhzZlZDZkhCbWIyU1JDMVJoTU1zX1lYOUluOVo1ZmVBTkFrQlBEVnZXQmhnQ0bSAaIBQVVfeXFMTS1uTVQ1eGpfZGYydmhTdm9hU3IxTGxrMDBsV3ZmVXZvZUlSSUVCMUV5eW5xaURyTDl2aWVMemptMXNXTGE3SWhETWxfTGFNUXJQdjRiRXQtdmJiblhKS0NlWG15V0FieF80MmR5WFVkRWNrc09yZGdwZWpEeFM3S2R0Xy1OdjVfaW9lcWlmX1BfX0xMM1BJRkFXZ1hXN1VTR0tB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 京都府京丹後市 大宮町上常吉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQeGhhQmdUNUVKOGU5T3J1dXB4WDNrYUQ5dDFyTUVQaXk5VVNfSXNqZ2MtcFVWTXFJeUpWWHE1dm1xZWhqZDJIUExiRjN4dDNGT1N2dU9PSmpRQU5DZVNTZllpbkFoc1hRZHpUVkgzeDBQallWc01aNDZpTEpWZnlYNmhuSExkQ0NFRjBoY0E0VEV2am40d3hrZ05wLUXSAaIBQVVfeXFMT0otc25xTlJDZC1VazdKZlVZSWVDcFRIY2taTEVyeEV2TzZINk40cjlYNGY4STF4WURRVWIzalRHYXZERThPaUhCbWJHLWwzZmVaYUVKSEstVXZYekdWM2JBYUcyX2hlamV6TzRkUnRMWVZxWEx6M3AwSTl4WUlCMWY5VlZvNkNJUEtfOGkybEtwOHQtdTM1QUxyQTdrVFNYLTN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 京都府木津川市 梅谷宮ノ谷の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPYjB3cExaZkZIMGFCREFWZlVJYVFycEFVRkVnQzdWR19sZEkxWURpMVJ5U3NmbVFSR1BrM2JaUlZ0SGV1bXdzWWFZYXNDTlRtcUtZWTdfdGlEZUUtTWRWLWVvSzZuTkpfbzB2d2g4SlZUcjhMMnlzWjlpdnN0c2hNbEQxcWlFOHA1TG1JYjJ1T25DeHB6LTlMaENyT2jSAaIBQVVfeXFMT3dOa0dTZWtMYkppdTlpWXRmZElFRjJNdFJNdEIyY2lnbG1sQW1hUFZHemlySGJLdnBaZU1jRUNsOVc4WFRMQ1JvNml2a0NTMGdLd3Z6V21oZDZ0WGJvekthQ21vcXpTc3ViVGZJaUVwdDQ1SlNKVFh0MU9GMTg2azE1UTltc181YU9CZ1k1TWpJWGh6SVE1c2llUWF3SFNqZzRn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月14日 滋賀県大津市 山百合の丘の出没情報",
      "url": ""
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"京都府","count":4},{"pref":"福井県","count":4},{"pref":"神奈川県","count":3},{"pref":"山梨県","count":3},{"pref":"山口県","count":3},{"pref":"福島県","count":2},{"pref":"青森県","count":2},{"pref":"滋賀県","count":1},{"pref":"長野県","count":1},{"pref":"北海道","count":1},{"pref":"群馬県","count":1}];

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
        <span>対象期間: 2026年11月14日</span>
        <span>·</span>
        <span>公開: 2026-11-15</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={25}
        periodLabel={"2026年11月14日"}
      />

      <h2>概要および主要事案の概況</h2>
      <p>本報告期間において記録されたクマ関連事案の総件数は25件である。都道府県別の内訳は、京都府4件、福井県4件、神奈川県3件、山梨県3件、山口県3件、福島県2件、青森県2件、滋賀県1件、長野県1件、北海道1件となっている。なお、群馬県においても1件の出没が記録されている。</p>
      <p>本日の主要な事案として、学校施設やその周辺における目撃および痕跡の確認が複数挙げられる。山口県周南市では小学校の校庭において足跡やふんが確認されたほか（※1・2・3）、青森県むつ市では小学校体育館付近におけるクマの目撃が報じられている（※4）。さらに神奈川県松田町においても旧中学校敷地付近で事案が記録された（※5）。本期間において人身被害や緊急銃猟が実施されたとする明示的な記録は含まれていないものの、人間活動が日常的に行われる施設への接近事例が確認されている。</p>
      <h2>地域別の出没動向</h2>
      <h3>北海道地方</h3>
      <p>北海道地方では1件の出没が記録された。厚沢部町中館においてクマの出没が確認されている（※6）。</p>
      <h3>東北地方</h3>
      <p>東北地方では青森県で2件、福島県で2件の計4件が記録された。</p>
      <p>青森県では、青森市滝沢においてクマの出没が記録された（※7）。また、むつ市の第二田名部小学校体育館付近においてクマが目撃されたと報じられている（※4）。このむつ市の事案については発生日は不明であり、報道がなされた日として記録されている（※4）。</p>
      <p>福島県では二本松市において事案が記録された。下川崎早坂山においてクマの出没が報告されたほか（※8）、同市内において1頭が目撃された事例が報告されている（※9）。</p>
      <h3>関東地方</h3>
      <p>関東地方では神奈川県で3件、群馬県で1件が記録されている。</p>
      <p>神奈川県ではすべて松田町において事案が記録されている。旧寄中学校プール付近において事案が確認されたほか（※5）、寄地区におけるクマ出没（※10）、ならびに湯の沢地区の寄入口交差点付近での出没が報告された（※11）。同町内の寄地区およびその周辺に情報が集中している。</p>
      <p>群馬県では、桐生市広沢町間ノ島においてクマの出没が記録されている（※12）。</p>
      <h3>中部地方</h3>
      <p>中部地方では福井県で4件、山梨県で3件、長野県で1件が記録されている。</p>
      <p>福井県では、高浜町子生川上流において12時50分に成獣2頭の目撃が記録された（※13）。小浜市では和多田においてクマの出没が報告されたほか（※14）、中井上中井でのクマ出没（※15）、および中井（上中井）において18時00分に成獣1頭が目撃された旨が記録されている（※16）。これら中井地区の記録は同一地域における動向を示している（※15・16）。</p>
      <p>山梨県では3件の出没が記録された。上野原市川合橋周辺地域でのクマ出没（※17）、身延町角打でのクマ出没（※18）、都留市大野でのクマ出没（※19）がそれぞれ確認されている。</p>
      <p>長野県では、中野市豊津においてクマの出没が1件記録されている（※20）。</p>
      <h3>関西地方</h3>
      <p>関西地方では京都府で4件、滋賀県で1件が記録されている。</p>
      <p>京都府では、宮津市下世屋（※21）、舞鶴市倉谷（※22）、京丹後市大宮町上常吉（※23）においてクマの出没が記録された。また、木津川市梅谷宮ノ谷においてはクマ出没の可能性が報告されている（※24）。</p>
      <p>滋賀県では、大津市山百合の丘において1件の事案が記録されている（※25）。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県で3件の記録がある。すべて周南市における報告であり、鹿野小学校の校庭においてクマの足跡とふんが確認された事案（※1）、鹿野の学校におけるクマの痕跡（※2）、周南市鹿野上におけるクマ出没痕跡（※3）が報じられている。これらは周南市鹿野地域の学校敷地および近隣における一連の痕跡確認事案である（※1・2・3）。</p>
      <h2>記録情報の整理</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市区町村</th>
              <th className="px-3 py-2">場所・地点</th>
              <th className="px-3 py-2">確認内容・頭数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">厚沢部町</td><td className="px-3 py-2 text-xs">中館</td><td className="px-3 py-2 text-xs">出没（※6）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">青森市</td><td className="px-3 py-2 text-xs">滝沢</td><td className="px-3 py-2 text-xs">出没（※7）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">むつ市</td><td className="px-3 py-2 text-xs">第二田名部小</td><td className="px-3 py-2 text-xs">体育館付近で目撃（発生日不明）（※4）</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">二本松市</td><td className="px-3 py-2 text-xs">下川崎早坂山ほか</td><td className="px-3 py-2 text-xs">出没、1頭目撃（※8・9）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">神奈川県</td><td className="px-3 py-2 text-xs">松田町</td><td className="px-3 py-2 text-xs">寄、旧寄中、湯の沢</td><td className="px-3 py-2 text-xs">プール付近、寄入口交差点付近等出没（※5・10・11）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">桐生市</td><td className="px-3 py-2 text-xs">広沢町間ノ島</td><td className="px-3 py-2 text-xs">出没（※12）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">高浜町</td><td className="px-3 py-2 text-xs">子生川上流</td><td className="px-3 py-2 text-xs">12:50 成獣2頭目撃（※13）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">小浜市</td><td className="px-3 py-2 text-xs">和多田、中井（上中井）</td><td className="px-3 py-2 text-xs">出没、18:00 成獣1頭目撃（※14・15・16）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">山梨県</td><td className="px-3 py-2 text-xs">上野原市</td><td className="px-3 py-2 text-xs">川合橋周辺</td><td className="px-3 py-2 text-xs">出没（※17）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">山梨県</td><td className="px-3 py-2 text-xs">身延町</td><td className="px-3 py-2 text-xs">角打</td><td className="px-3 py-2 text-xs">出没（※18）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">山梨県</td><td className="px-3 py-2 text-xs">都留市</td><td className="px-3 py-2 text-xs">大野</td><td className="px-3 py-2 text-xs">出没（※19）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">中野市</td><td className="px-3 py-2 text-xs">豊津</td><td className="px-3 py-2 text-xs">出没（※20）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">木津川市</td><td className="px-3 py-2 text-xs">梅谷宮ノ谷</td><td className="px-3 py-2 text-xs">出没の可能性（※24）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">宮津市</td><td className="px-3 py-2 text-xs">下世屋</td><td className="px-3 py-2 text-xs">出没（※21）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">舞鶴市</td><td className="px-3 py-2 text-xs">倉谷</td><td className="px-3 py-2 text-xs">出没（※22）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">京丹後市</td><td className="px-3 py-2 text-xs">大宮町上常吉</td><td className="px-3 py-2 text-xs">出没（※23）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">滋賀県</td><td className="px-3 py-2 text-xs">大津市</td><td className="px-3 py-2 text-xs">山百合の丘</td><td className="px-3 py-2 text-xs">事案記録あり（※25）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">周南市</td><td className="px-3 py-2 text-xs">鹿野（鹿野小、鹿野上）</td><td className="px-3 py-2 text-xs">校庭に足跡・ふん、痕跡確認（※1・2・3）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>季節要因の観点において、11月中旬という時期は個体が活動を継続している段階にある。本日記録された目撃情報では、福井県高浜町において昼間の12時50分に成獣2頭が確認された事例（※13）や、同県小浜市において夕刻の18時00分に成獣1頭が目撃された事例（※16）が含まれており、複数頭での行動や薄明時間帯における活動状況が示されている。</p>
      <p>餌資源と環境利用状況について、本日の記録では直接的な採食対象物に関する言及はみられないものの、河川上流部や山間地だけでなく、橋梁周辺や集落地域への移動が確認されている。山梨県上野原市の川合橋周辺地域での出没（※17）や、福井県高浜町の子生川上流における目撃（※13）のように、水系や地形に沿った移動が行われている傾向がうかがえる。</p>
      <p>人口圏接近度の観点においては、教育施設や生活基盤への近接が顕著な懸念事項として確認される。山口県周南市では小学校敷地内への侵入を示す足跡およびふんが発見されており（※1・2）、青森県むつ市でも小学校体育館付近での目撃が報じられている（※4）。さらに神奈川県松田町では旧中学校敷地付近（※5）や交差点付近（※11）での記録がみられ、滋賀県大津市山百合の丘（※25）などの住宅地近接地域でも事案が発生している。日常生活圏における出没や痕跡の発見が各地で生じていることから、施設敷地内や生活道路における警戒体制の維持が必要とされる。</p>

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
          <dd>2026年11月14日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-11-15</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-11-15</dd>
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
