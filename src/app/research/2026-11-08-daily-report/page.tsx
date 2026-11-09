// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年11月8日 / mode: daily-report / 生成日: 2026-11-09
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-11-08-daily-report";
const TITLE = "2026年11月8日 国内クマ出没事案の動向と分析報告";
const DESCRIPTION = "2026年11月8日の集計では全国で計29件の事案が確認された。山口県周南市においてジョギング中の男性が襲われ負傷する人身被害が報じられたほか、北海道岩見沢市では養鶏場を襲っていた個体の駆除が報じられるなど、生活圏や農業関連施設周辺での深刻な事案が顕在化している。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-11-09",
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
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
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
      "title": "2026年11月8日 山口県周南市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE9GTEpDeExZSjQ1Y3NlbDVLNGhWOEY5bDRGT196WHRUX0xDeUZQbTNhc3MzdHJHY2xWVFV5RmhPSkViWGlEdkhNaWdmTXE4dnZmWmJOWVN5ZmRnRGZsSUNTbGEwcDc5UQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 山口県周南市 鹿野の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFA2UVhSaTZON1dFWmRpWlpIdlFWNUVfdmRoX0Frb2NOSndVTVlKSXI0c19MZldiT2ZaT0pvaWN1NG0zdWhlYzM3bkpHdw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 北海道岩見沢市 養鶏場付近の出没情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5Ncl9Dd0t2eTFIVUJjdm1tOS0zTlVrc0sxNHl2YkwwemJETGpVN01WWUk4OFlmTTFkc0QxUGRNejk3a1BwRmVfS1QtODFfRTYtRmY5bmNtRzRfQ2lacHdCOTVZSVZwZXdGakw3XzduQ1dqc2pWOWFqelJlb9IBgAFBVV95cUxPcGhocXVlUVlhbUpZcjhFbGF5UURtUUhENjRYaGQ3MG9OLXpDLVB5elFNNEFRenFBRG9maE5EQ3VDNVgzNUgteVJ2T3pQMjRweHhBQTk1SU50cXh5bG5nOG9aUUdHQUhJcENCRGFhc2VHRlVqQTMtblBndUdwRXh3VQ?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 北海道浜頓別町 クッチャロ湖畔の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPNW5oLVVQMmwxOW0ydldaaC1mc3FhclJqTTV1ZHpxX0hCaDJFNmw4ZDVRTzN1OF9Cbm15Z3gwTEhhbkFUV21XdHk4QXI4VGcxU0Y2bVY0M0dmOXlCZnY2OFNmV1p0T1VwbFgtTW9HcXh6b3hsaU5vZnNwQ0dHOFc5endUSlh4UzRGeWs0enNCR1NQNlJ1ZjB0QU8xQ3fSAaIBQVVfeXFMUHRUR3MwRHMza3RvV3BKOWl1VFdvNjVsZHpkUkFOeHNlc0hlRngxVnNZckNyMVRJQWhIRnVJa2tHdVAtdUZfOW9qTmU5UHpscTlEOV9WUlk2MnlBa2Zzdk5ZZThiOE1KNy1ER1h4a0ZLbFliVDdCS0NtOUJKYnhzRkJmSjF0YkF4c2NUT3EyUGsxRENTUGVWUWczd055cV9yZ1dR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 北海道天塩町 川口の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQY1hnSUlucmhGZ2VJenhubW9KWVplM2FPMzdhazMyLUNhdkpaVVYta0ZUb3I4eFRxUnlYbTUyYmJxQWk3Z3VpWm1tQmZUMTMwZVM5eTFxTG56MW54ZEtNeFNNZ0ZlWHZCdlozMHMyM0dNcG00TW5aWE10SG91Q0ZEcUtpaHlzSFBVczJEQ0JRZGVqTWFjNElwSlV3ZGHSAaIBQVVfeXFMT0I3cUQyTFVGUDh0YUY5LWszM1VVTXRpX2xGSUJjR1F2bHYtbWx2SlVIZTYzS19aT1dRNEJVbTY5azJuUTRSa1JZZzAxQlNuaVBwTHR4blFJVjB1U0E0eU0wY2s2d1oyTmNXT0hWQ1l6OVhMZkwxT2V6REkyRzJMY0NQT0F4UlNPZjN4bGxOWXEzUkw1ZGs2cEdwME96dGlGUGV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 北海道下川町 一の橋の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPYTlvdktTZHAyWFdXajZMbTg0azNMTW8yRjN2Y0o1dmJWbDJCcFhDR1RjTzlsT2tPRDgycUlGbEtzZzIwc1FNTW9FUGxqNkFUZm5xME53ajJJMFVJRTdUUm13MzdRNXRqNEJZQUpPeXVtYUs4dG5Ba1ZUc3BxanAyT0lRd0FIWFdmMVoyTl8yOTByeFVRblo3TEFXeVTSAaIBQVVfeXFMT0twVEtYZHc2ZlZKWFN5bFZ1QVI5NHFaazEtUmd3WUpYVUowYmFoTm4zZ0M5M0xXR1dOR2ZGM0RUc1hNbTNFNnlaUDZVd3Z2WVdRWmdSbVhDODFWNDBqT25FYzkzNmxUY0MyUC1YbjNnM2REZ3JMYnEwQmQzQVpFd2stb000RnRzOXBDNDJIaWJXeUR3bk1QejlCZEtkVGpnenV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 北海道遠軽町 野上の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWFBKRG5GS3BDdWpnV0piN0FHRjkwcFV1NHdmbUZ5TktqeTJrNF9OVWtzazREQThydjA1alBtSTlUVzFBNXVwVHBwSGFQUmpPenVkVE9HczRRNlNlWGp5VzViaEM0WFhGVWxVaEQzdDFHbi1TVHhTWVdIYV9rM2NiRjI2R0ZmQkFkNkd0WmkwNk1tem1xRDljVEo0U1DSAaIBQVVfeXFMUGEyQ01ycDFMc0xXeGRrbENFeTg4UERwd29lZjNiLW5mb0JtVWRVdDAtQkVfV1dwSElmMG1GaUdzWktuc0FiY3VJeVFOOVcwMnhCanhTcl9PWlZMc3plTUxLSHIyWm1UeGxBODhzZ3QtRmk0SkRrUExCUlQtRWJNVHZka0VxQ29NenVFT3oxWGd5MG9tLTdTSjU3UFJFR2NuRUxB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 青森県五戸町 豊間内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQU3FNSE1rV2NuanJSZ01sZWFtVHNKa1BnWFdIZGViX1FBbmlCekFLZ0tQblowd29mSnlaSjlIUWt6RWJsemg5MG9CYTVWMXhRMFFpcS12S0ZRcWZWYmZTUkJ3VWp6LURSZXZ1aWZQekU5M2dILWVTbTN0NEpoVzdMazVJdmxSWVZEYjhUcl9LUlpBOGp6NVNiZTNiRHbSAaIBQVVfeXFMUDZfV3NaQzNVYmNwQzVfdHRMTURNc1kyU3ZIdExDVkNGSlBDUkQ5VWN2LW01c2x5LWt4NDhBQnFGdTR0d1pOLU5PaFNBT2I4WVNYcmRxRWZ4RENSeWRqQnVxZVhUQnNiMU9hUHRCVFZESXhhaldQRm1kcTZJdTZTMlZOTFB1M0NhOFlKSWg2NGlnc2NqeUZWRXZnZ3llcGJWNHpB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 岩手県宮古市 近内の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdXJGLXFJQy1HS05KQ2traVplMi1tTjFTSGlIN2lqNndEZVk0WVFvQmRqRDgwRlNjZFFwZS1rdG9uNV8wRmlhM3JHOHRRMDY3dW9lU1hwam1BcFpDWmVON1E5cXRpRDQ0b1gzMXNjZzVGNTlKNmlRZ2w1ckpTMEhxX2tEQkNfSXo0aXpNRmkyRTZBUG8tWEZveHNXMkrSAaIBQVVfeXFMTnI0YW5UVDkzamR2andGT1BhRi1ZaXlDRkE2U2h2SkU0enhMMGdIYjM3Nnc5SmRERGdYSjlpU1M0S3VKUXVLQmlvbmNwdHg2TzlFYWVlc3NTWjhVS0tLMF9Bbkxlc2ZHQ0UwT00tM1NDUXpjdEx5OTNDRDhnTmk4enVGck1wY1VxOUNZMWRnU3RrcXpPQUMyZjNXdm9Mck5nN3FR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 栃木県日光市 民家の出没情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1DakR4Vi1fVHI1T1VyM1dHMXhlYjZUa20wbHJzTFFUZkFIN2lYRjZtMU5mT0dVdVRPSkJmRFQ2RTRPR2xvZ0pTaWQ5OXNnRm1weDhVVjJzQmNjclU?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 栃木県日光市 民家庭先の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5oWFVfSHo1YVVZT2xUU0h3ZjQ2ckNKdXBmMEluWm55MkN3eTZFSE9FTW1WNG1DZTEzTzJKVm1NaktaVmZNdjBiYTlzTjNGX244dzZDVWxqdm9oZHdtb1F5RnE0b0U4UzUyQnpnWE1laG5GclRwUzZPdmhRaF9Genc?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 東京都あきる野市 五日市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZmgtN1V2YndMUllSbmo2NUJBNVZfV2toTWwyWU10dzNVd2diUzdReEs0X0ZPazcwckEtSnU3R2pPN3plc0dFZE1GUkRzX3RtbmQ1M0JMc2stRmRGVG9fS0haQno2bHRFWnRrQ3IwanJCZ1Z1cklOLXBRTGNNMHUtakl5X0lydTRZdkMyS3JpUWRLajFtYWxQS3BmajDSAaIBQVVfeXFMT3FmczRQYzBQZE9aOURYOURCN1QtRXBEUFRQN2hLWE4wZXJ3Y281bjktNXNWWnRPWmVuNjhnLU5aQy0wa2g5anY3dTF6eXJ5SjQxY1hyMV9zNEtQcmFjc1ZzWEo0TU5DdVBka3pXREJwYUNNd254UGxuMkFwVFRrNWgtZ0VDeldZem8zT2RyVlFnRUh6cnJQU25UbUNBeXEtRFVn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 東京都日の出町 平井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdWVvMm4yX0tuUnJwUXBIWjdSWmZhMWx3NDhWUFhFZVlfWmFnQ1AtQ3JEVWNsMzJ6R0F2ZV9pUmNxanBnUXZmQ2VxNVRjQlNUdERqZ0w1ODJxN2FuZnZNQmdJT2swcWU5TmJ1UnZNZmJSMmVJam9qNTIycDJONWllQWRvV182TzBWdXN3UWpJNXJoYmFNTVQ4M202VXbSAaIBQVVfeXFMTjF2elJQc3ZZT3BzZUZ4ekU2QXFnZ2NhQlJIeVMxMWROQ0hnM2FfUzBhdFE4OHF1UnMwVloyRDUyeFBScUtjYll0MU5hV3FXTWRQT0VIaS1sSWNYSlY4UGZMTXJ4ankwWWFsY0I0em1vRFVibkxYZGs4NjlKRHhVWDRPMWktb0NZbk1LMnh5U0hhM2hnWlNJdmpySDJTaTRHZHpR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 神奈川県山北町 岸の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNc3NNQUhDT2NpVThZeEdBbmVuOVM2WWtqTEdpUkZ3S1hkM01mTnRhdVpkelg0WXhYNW5uaUUxVFpEc1VLOFFsQ205UzIwY1VKTTFib2hxX2tjVFBXX2pIaDVRNXRSd1F5X1dSS25GQ1BQT1lFX2RtbFB5bXdGR2Q1ZHVfMkptdEI4MDBDeFEzaWVPUFp6bkFDUGVabkrSAaIBQVVfeXFMT19md1BDUGVFZ05rUnhvWkNlcnp1UzU3ZXlVSTdrMW9RMjBlOG9YZWVwZ09vTkZXamgwd2VJN1h5NzBzM2hlWE9TeWs2NGFPd2dhSTB5WTVSTEkwRG1fczJOajhZOWRpVWVrVC1TOWJtZVd3LWpCalNFZlp4Y2V4dGtKeDFQNTgxMTlZTEdzemJOUGduUWl2bzM5TXQteS1icUN3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 埼玉県小鹿野町 般若の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUnpFMlNzUnNZX2NmalFnMXZOQ3d0eTVzVjNyOWpuV3dseVh1QnBpMjhoUkJfam5tbXRhNjFYbkdZUTdfeVVEaUIwT3BGalNlVTF4cFZ3Mlo2bzkzRzV6MzBPb2dkM1NHZGJrekZRSnJ1NDU5V1BtanFRRXpBblI3TjVQREZGSXBiNHlMXzYwaFRaMEVzZzRKYzJwdE3SAaIBQVVfeXFMT3Rpc285c1lTX1ZLV2J4SVNzeDc4MjB2RmJyMDNhSmw1b1VlN0xIREw0Z0xqQm1CdU5iS1pQX29VeDByMW41Ym5JWXdPOFdTNVF3RERDV2JtdElNTDhVam1UZmlVOXhNdjBjVWo2WFJSOGtMZGUyOG13ZFlqWTVLYUZMaGNwNkhXd2IxekxtRWZYVHFkNk5OZlVpbWlsUS1TaThB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 福井県小浜市 口田縄の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWlhFdGVDeDFFbVNlbHNSRHJOZUlWbE1VSDZKU3EyaGhGWk96dm5GOTlvUWNrUTlPNjljTkh2eUg1WUlDYVVVVkRsWEltaTRRUUJNZ19jaXE4T0xZOFJyM24xWU90eWkwdG94VFh3bmNSTTVTRm5ZTEFrcldfQmVWNzJnSXZOY3kwYXR1T01mM19fckNpOW5xREo2ZlrSAaIBQVVfeXFMTkpMN29LczBVd1pPSmE3a1BQdUZacDIwWmFlRzFpVGtxOS1fbHF1amdZOXF1U1pOWkcyN01qYmVDQWtTek1wNFBrLUxWVnNZYmZtZDZJRkhtbnExQVJ3SXhjS2paakRwZml4TmtkZWEyeENVVG5OOEJEWlJMbHNQb1dpaU5aazBxaDJRSXhJb2o2VXgzZ2JzVTU1OWcxamVweHF3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 福井県小浜市 中井上中井の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOc2J3V3VqRlNuaF9tQUo4M3FoeUhEeGd3bzA3bFl6Y2JPdzJwVDJRTDZLRldjQzVUYVBhdDhXS2pxU1VGTWc3dFpIUVNxYWhfeWRJbFRWU05Rem5SUUhEVDJYcmFzN1E2TmZCRjlwOU9OZnNZVVJBaWhaWTZnZE9HdjdVZV82aUJBT1Atb0gyYXVxQjh4SUU2NFNqZ1LSAaIBQVVfeXFMTTQxSkViYk1ueTE5TXoxd2J6WEtBSWhwQmlMbDJfNjA2a1hEUnMxeXU4UHdqTHN2ekVDdEY3NFM2dktYMlpaMm85Tl9UMXNwdG5jNGlKUTlqNnVZS0lPNUJPTWN1aEdBcm51NG1laVRUTHFXSGpxdTZXUGNHbVhibzhlTklPakViYV9KYnRZZkxhZ19NRVcyOVVuMXhyVUFQenh3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 福井県小浜市 上中井の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月8日 福井県高浜町 上瀬の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月8日 長野県千曲市 森の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNeDZKM1dkYnJNQ1lkSVpTVTh2TWFYd1pWWFVyM2dTS3otTk9wWjNQYXZHUGx6SXBHYjZlOGNaZmw3TktQS0hmTTZHZFZSRDJkVlBvYWVtV1VKbGJ1Qy1qazJIZi16cXJsNXdYYVNSQllIbjM0Y3JnM01xUkRlMnBIUW1aaHhnLXI5ekF1dTluM3NhTmIwaUl1TzdkOEnSAaIBQVVfeXFMTVZva3RabEdTbjlCM2FoRkFaVVo1UzdUTjdWMW1adzNEV3Mwa0NnaWJ6YXYzQzRkT1IzeWJZUjJLZTE3MmpxdHJFNV80NzRRamRvUEIxSTFJYWROcS1mOXBxbXcxOUZySHMwMnpScEg1ellKdEhKX2RyM0dKR3czLUp2NjB3ZnMtdXc1VjBKVE9hWWU5eTNIVFFmWmlYWW9GUnV3?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 長野県軽井沢町 長倉の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNZHJZenN5emdsNkRTcGdlTDJfWFZLTFFvMm1qSUtXNUZEc3d0QkxuUzJubDdsb3ZsSGMxZzJ6QzB3ZVg3QlVGRGFlTVo3NnVMbmdmVE5kTFU3LXBLXzU1U2FaTnhULUQwNGJiQmNicmRRS29uT3JyOFZjdFZ4MkNsaXRsQ1R4ZzV5a0w3MERsN0tyTTJiTUk3YnZGcHjSAaIBQVVfeXFMTnUtLWx1MU1wZlIzN0F2WXpKamt4U1JkRnZvTWNNMENfWlQ2YkhhcnowSVJJUnBVQzZWME9ENTFBWFBVcDgtZ05kVExWLXBrb2ZRMlVGdmFvV01WTGJwaS1FRFZHbGlXTVFZdTRyUVlTY201WUUyd1NfaGpRa2d0YVE4bU9ObElYOHZOTDRqVWkycmE1RWNPM1VXS3BzRmdwMm1R?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 滋賀県長浜市 余呉町今市の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPd1RVcDVNbTNVYWhITFE5STJTb1VYTWdxbk9sd0ctVWJPX2t6TXVNbXZucWd3MlhfbWhJaldPNnl2UUVvWXFfT2xoY2paUnlhaFloRjh5WVBnaTE3bGhQb1lBRDVrbjQ1NnZKLW5vU1Z6SVV4UC1oNEI0R0Y1VzhadDZpR0NtMExxcUJVU2tfQ0ZQeXd6bHVlSXI0bXPSAaIBQVVfeXFMTTAzQVhvWVByekQ1alBpOHUyR29YSmxKREZ1QXRhQ05EU0tVLVA3OEN0V253ZHhQaFY0M2o5T24wWEItNHdzVi1QaG9uZVp2QWdrOExpWGUzV0p2Uk90WW5tLTF2cnJjU1g3aHUycUlBanlkYkpBZURPQTFSNUU2UjVqMFJCUVkwclFPdTN5LVpvYURvNDl4ZEFRSTR3YUNMRlVB?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 京都府福知山市 三和町台頭の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOTnBUMnRyMUdEUWFOeXMwc1lOdzI0SGxWU1ctQmJOeHJoUEZ5SGhlVU1wOFViaTVudGFBbDNvOTdINlBjSVVKLW9LSUFPdXVxWExuZC02SVQwZzlGOFJvdHFCZkc0QUdDOTQ0MFVwSHJ1ano5RXpJdlNvSmp3Q2ZWTWZnNG5GamszSUVLbkRkczR0a0VwODdaVWtSRl_SAaIBQVVfeXFMTk1BRjlGSjE2YnRfOWVLWDZaRWpjT2ZaWktMam9kdUk4c2J4Q0xRSi1qWURCc2d2eUtudDl2Vnp6RFFaSFFuRzR1OXpaRnZySF90U3hlenJoQkVwUUdHTjVMUGpUYjUyZi1LRTBVTUxmSTZpMHVGajRsM19EblVNR2VrOHJZc3pJaFR3T2ZoMmtSekszTWNtZGhJRUZ3X3cxVkFR?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 和歌山県広川町 上津木の出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNSjA4UDUwNXBVOFRoN2ItZDAzZjJ2VWNXd2VQdmNRUHB3R3UxcENtaXp3UnZOaEhMRHBCOHZwcTRPRjI5VFlRYk11Rjhuc1p3Ull3VEVvSnVWSkNoSEhSTDdTQW5UUnJIMXVjeW04SWNFaWY2V3RQcDczdjFSTFZUcEMyYkQ4RUxxUTlWc3lVTzB1NUxuQVU5UWR6YUHSAaIBQVVfeXFMTnRpRFFvejJjMTdPWFVBUXpPUmNaTzdDYUNVb2J2ckMxbnFGaHhBRXhXS3VtOGI3aWhZWS1weXFwMndEM21JS0txOHhIRmI5V0M2SVdaa0VIT21BYUduM2ZNb0FrVldhdlQzT19uMFEyRjJuZEJNdHNBZUxVdkZUM0lNeWZNUGNLUnhOM2lISmFDMnc1UUR3ekRQeWVoZHUxdEFn?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 奈良県吉野町 小名の出没情報",
      "url": ""
    },
    {
      "title": "2026年11月8日 山口県周南市 鹿野上本町の出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOeEpCRTdHaHlBY3lUQTNSV0M1WXhvemFSbVpXZUxUcW9mUUFDSlpGb1pvYXpzYU5UYk9RVVV0cmpqN2R3QlR4ampITlpkU3NKX1pxYXdhRzNNU25mWnB6M3BhbGlTM09xcEpwbGl4dlNwejkxYXFNSU1yUU9RcG9qSEJlOXVBVi1WdGoxXzhfUDlYa2pUWEVOVGxId0E0WU5Yb29OTUdqXzdoZDJySU1J0gGiAUFVX3lxTE94ZGZRREJIUUVBallTS3dVb2hwSlkyYl9MbUdxV3RiRW90dzF3UEZaSFd4Mk5ZbU90QmZWb3RmTTVHZnF4SGlhS056cF91TnJpWXZjR1JKbjJkaG5oSzhOcVZNbmZIQzJBUEJxNnYwaEdkQWM1RmlHeS1TQTNpV0llTmRGTGJmUFI1RVpYY3E1eDlkd3daUFBCWFVWdTdiRmo3dw?oc=5",
      "site": "報道"
    },
    {
      "title": "2026年11月8日 山口県山口市 県道の出没情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE4xQ1FkOUJNS3lydWh1eUN4Ym1oYmZBQnBWbHNmNzJKX1J3c3JpMllxR25WdzZPb1pwazZNMmZVYjdhSmx0Tnp0eUlmRmt0dW5pVUlxYUx3d1JCaDNYdXZrY3FlVVdCTG5EYURRMk9yTW1UUmVpajRIZnJwaEdGSmc?oc=5",
      "site": "報道"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":7},{"pref":"福井県","count":4},{"pref":"山口県","count":4},{"pref":"栃木県","count":2},{"pref":"長野県","count":2},{"pref":"東京都","count":2},{"pref":"奈良県","count":1},{"pref":"神奈川県","count":1},{"pref":"京都府","count":1},{"pref":"滋賀県","count":1},{"pref":"埼玉県","count":1},{"pref":"和歌山県","count":1},{"pref":"青森県","count":1},{"pref":"岩手県","count":1}];

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
        <span>対象期間: 2026年11月8日</span>
        <span>·</span>
        <span>公開: 2026-11-09</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={29}
        periodLabel={"2026年11月8日"}
      />

      <h2>重大事案の動向</h2>
      <p>本報告期間中、人身被害として山口県周南市における事案が報じられた。周南市鹿野の小学校近くにおいて、ジョギングをしていた男性がクマに襲われてけがを負ったとされる（※1・2）。発生日時は不明ながらも報道日として確認されており、教育施設や住宅街に近接した環境での遭遇とみられ、極めて危険度の高い事例である。</p>
      <p>また、産業施設に対する被害対応として、北海道岩見沢市では養鶏場を襲っていたクマが駆除されたと報じられた（※3）。家禽等の飼養施設周辺におけるクマの侵入および直接的な被害発生に伴う対応事例であり、農林水産業関連施設への接近と執着に対する緊急的な措置が取られたことが示されている。</p>
      <h2>地域別の出没状況と分析</h2>
      <h3>北海道</h3>
      <p>北海道内では合計7件が計上された。岩見沢市での養鶏場における駆除事案（※3）のほか、道北や道東の広域で出没や痕跡の確認が相次いでいる。浜頓別町ではクッチャロ湖畔においてクマの出没痕跡が確認された（※4）。さらに、天塩町川口（※5）、下川町一の橋（※6）、遠軽町野上（※7）においてもクマの出没が記録されている。水辺周辺の環境から山間集落に至るまで、広範な活動が確認される傾向にある。</p>
      <h3>東北地方</h3>
      <p>東北地方では、青森県五戸町豊間内（※8）および岩手県宮古市近内（※9）においてクマの出没が記録された。いずれも地域内の特定地区における目撃情報であり、人里に近い生活圏境界部における行動が続いている状況が把握される。</p>
      <h3>関東地方</h3>
      <p>関東地方では栃木県で2件、東京都で2件、神奈川県で1件、埼玉県で1件などの事案がみられた。栃木県日光市では民家の庭先にクマが出没し、5分ほど滞在した状況が報じられている（※10・11）。同一の庭先事案が複数報じられたものと考えられ、生活空間への長時間の滞留を示している。東京都では、あきる野市五日市において出没の可能性が記録され（※12）、日の出町平井でも出没が確認された（※13）。また、神奈川県山北町岸では出没痕跡が確認され（※14）、埼玉県小鹿野町般若でも出没が報告された（※15）。都市近郊の緑地や丘陵地帯における活動が目立つ。</p>
      <h3>中部地方</h3>
      <p>中部地方では福井県で4件、長野県で2件が記録された。福井県小浜市では、口田縄での出没（※16）のほか、中井上中井および上中井で出没が確認されており、05時50分に成獣1頭が目撃された記録が存在する（※17・18）。また、福井県高浜町上瀬では18時20分に1頭の目撃が記録された（※19）。長野県では、千曲市森（※20）および軽井沢町長倉（※21）において出没が記録されている。早朝および夕方以降の時間帯における目撃が福井県で具体的に確認されている点が特徴的である。</p>
      <h3>関西地方</h3>
      <p>関西地方では滋賀県で1件、京都府で1件、奈良県で1件のほか、和歌山県でも事案がみられた。滋賀県長浜市余呉町今市（※22）、京都府福知山市三和町台頭（※23）、和歌山県広川町上津木（※24）において出没が報告されている。奈良県吉野町小名では、小名トンネル付近においてクマの目撃が記録された（※25）。山間部の交通インフラ周辺や集落近傍での確認が続いている。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県において4件が記録された。前述の周南市における男性の負傷事案（※1・2）のほか、同市鹿野上本町において出没が確認されている（※26）。さらに山口市では、県道においてクマ1頭の目撃が報じられた（※27）。道路沿いや学校周辺など、日常的な通行や人の活動が存在する空間での目撃および被害が顕著である。</p>
      <h3>四国・九州地方</h3>
      <p>四国地方および九州地方においては、対象期間内における出没・痕跡・被害等の記録は報告されていない。</p>
      <h2>主要な確認事案一覧</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村・地点</th>
              <th className="px-3 py-2">事象区分</th>
              <th className="px-3 py-2">詳細内容</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">岩見沢市 養鶏場付近</td><td className="px-3 py-2 text-xs">駆除</td><td className="px-3 py-2 text-xs">養鶏場を襲っていた個体を駆除（※3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">周南市 鹿野（小学校近く）</td><td className="px-3 py-2 text-xs">人身被害</td><td className="px-3 py-2 text-xs">ジョギング中の男性が襲われ負傷（※1・2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">日光市 民家庭先</td><td className="px-3 py-2 text-xs">目撃・滞在</td><td className="px-3 py-2 text-xs">民家の庭先で目撃、約5分滞在（※10・11）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">小浜市 上中井・中井上中井</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">早朝05:50に成獣1頭の目撃（※17・18）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">福井県</td><td className="px-3 py-2 text-xs">高浜町 上瀬</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">夕刻18:20に1頭の目撃（※19）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">山口市 県道</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">県道上にて1頭の目撃（※27）</td></tr>
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">奈良県</td><td className="px-3 py-2 text-xs">吉野町 小名トンネル付近</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">トンネル付近での目撃（※25）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>リスク評価</h2>
      <p>本報告期間の傾向として、人身被害や農業被害に伴う捕獲事案が報じられている点が特筆される。山口県周南市では学校近隣や生活道路を含むエリアで運動中の人物が襲われる事案が発生しており、日常的な人間活動域とクマの行動域が重複している状況が確認される（※1・2）。また、栃木県日光市のように民家の敷地内に進入し数分間にわたり留まる事例（※10・11）や、北海道岩見沢市のように養鶏場へ侵入する事例（※3）など、人工的な構造物や餌資源の存在する空間への接近・執着がみられる。</p>
      <p>目撃時刻が記載されている事案では、早朝の05時台（※18）や日没後の18時台（※19）など、薄明・薄暮を含む活動時間帯での出現が記録されている。県道やトンネル付近などの道路上における確認（※27・25）、湖畔や河川周辺での痕跡確認（※4）も含め、移動経路と人間の利用動線が交差するリスクが継続している。</p>

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
          <dd>2026年11月8日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-11-09</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-11-09</dd>
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
