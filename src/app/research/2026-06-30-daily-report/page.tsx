// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月30日 / mode: daily-report / 生成日: 2026-07-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-30-daily-report";
const TITLE = "2026年6月30日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月30日、日本全国で249件のクマ出没が報告された。特に栃木県と京都府で人身被害が発生し、鳥取県の駅周辺や各地の学校・住宅地など都市部への接近も21件確認された。東北地方での出没が依然として多く、全国的に警戒が必要な状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-01",
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
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
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
      "title": "栃木県那須塩原市の畑で70代男性がクマに襲われ負傷",
      "url": "http://www3.nhk.or.jp/news/html/20260630/k10015164641000.html"
    },
    {
      "title": "那須塩原市で畑に向かう途中の男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5qNzNHZFp3THp6Uk85dUxfRHpwQUJpUXgtblQyd3RJcHZJRnF2YkJCc0dRMVR6cmJRSHlDVGpYLTUxck9HdjQ3SC1FVUdqdl9RWXlGaUpQWVN5c1dXZmZWVE8xSzBXNnc?oc=5"
    },
    {
      "title": "京都府京都市の山中でクマに襲われ男性けが",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5vQUpZX25OZUUtQ0lCRllYbzRGZnNkZWZfVnFxM0h0M21ZQXZxdzdQZTlzMnZDMWZsS0pVZHlkZ01nbk1pMFpJSUJCaVpwMWFoVHFEOWxwbTU4LVQtZ1FwZm95Mm9SMVl1NXF1X3lJR2ZRUUN0OTlkaFdSMlc4V0E?oc=5"
    },
    {
      "title": "京都市右京区の山中で猟友会男性が噛まれ負傷",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPYkNLZG5HQXF5YVRweUxuYm94d21kWHdwal9YdVN6NzhnYTJjcnEwYVRpYnhQTHZ2enpUSzdYYWxBWFc0WVRaR2V2QmVNZlhUb2gzSWlzelNfWHVaYTl5NmxKcTdMSlc5OWQwWFo2MF9FWUFCYmxFTlNWSVBvbUI3ZWtqSi0yVkRYNmhRSHdR?oc=5"
    },
    {
      "title": "鳥取県智頭町 JR智頭駅や商店街周辺で目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1FX3RfTVZ1dVA2MkxyTGlsZTNBSnRfV2ZGWWthYmlxV2E2NHZGMkFHa3R2REhxT0o1aTk5aGZFQWRpd2ZJMVZXaDhUNDdjd3lxaUhyWkJTYmZUeUdfeHF2bUllMXJpQldiMDZDX2p2OW1ld21GV1hqR2VqSEt1bnM?oc=5"
    },
    {
      "title": "鳥取県智頭町の市街地でクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5ZeGszTlYtTVBJYTZVQklIUy1yZnRiaG0xTUFsVFBVb29tZWNoWmQ0aFZYSUdNdEg0WENIaV9zLTcyWHA3aTFNbmVNUG1CSzNObzRYSnpYTU0?oc=5"
    },
    {
      "title": "新潟県長岡市 山本中学校周辺でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFA1TWFVRkY3MTNLdXJMaEI0WEE4Y3l2bWQtbGJLNmwyNWFaaW5hWEtkOTJJcWNLUFh2NXJsMy1aZllEUEtYWjRub0Z0OA?oc=5"
    },
    {
      "title": "栃木県足利市 西宮町・第一中学校でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5YcnlKNjdkOEVkSFFzY25yTVJQeGlXX2ZuNUZvcFJ3Vkd6cjUtZDJ2QVJnUGJ1bFlqbk5vTGtUWWJRdkE5MXBIYjJDeHVfU3B6OXBlMDFqN3FJRmIzWUtzZGF3?oc=5"
    },
    {
      "title": "長野県安曇野市 明北小学校付近で子熊を目撃",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9lLVJ4YzRwZDVXaHJRLTFDSkhYSXJ4UENNMDR2RjBvQjhmOEJVZ25mdU9lYlVPc0l5M2stQk9LZDVBd3JyY09sRlM4UkJGSkk2OVJMTVlLcHZNOThqQjMtR1FHZ1dsaXhpc3F4Z1BucnU?oc=5"
    },
    {
      "title": "青森県むつ市 大畑町住宅前の路上でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9fS2ZMN1BjbGJyTUY1SzdmSlhXR3NQWnpibFI5c3N4dlFzR2dtQXJRU0dkNzFhRFNLX2VlSlpGQWRoTGZERUpQTVdyeUhLSmkzdG8zUmZfLUE5WWNVM0pCQnI0dFhwTll2ZUVhOWxRRzdpWHZxWXNIYmxzTdIBgAFBVV95cUxPRXBsMTNCNkpNNTdoVl9kb2kyTWRUMUlwUDRLbHFpeV9sWHcteHlKQ1E3OE11ejRyblg2ZjRzTWxPZGs1N25pTGMzbGV1NG9tR2hyTzhMQ0Z6NDVFU0dWNElSLS1SM3I1RXhzMDVjdVAxX0hpR2dzX2xXb09mTWs2Wg?oc=5"
    },
    {
      "title": "秋田県秋田市 住宅地等での目撃が相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFAzLVFMUTlrTkZ1ZUFuT3JFZ2JXeUhDQlZMa1lqSEFuYjBKSVZxYzZJaDEzY0VZLUN4d0pid3lHSFRTeHVzdFc3cHhsMFJrd09aakxIbldQdE9qZ29GazBIdTlFVzJGdWFuUWpvamZBVnRZNllqTXJjNUVuTdIBgAFBVV95cUxNTHk5U1U3V1doQWdNM2dQZnpvMlNwZTV3b1lhOFlkcHpkNE5Wd0NXbTlad0M0QS1EWHo4bU52TVBjamFyVUphZXhveWNBRFFEbFo5XzBsSkR4eGNHUmtfcUtMWmpOQWVyb1lwSXZLX2ltTkRMa2dzdHhOOTNrVGstWA?oc=5"
    },
    {
      "title": "宮城県仙台市 青葉区折立６丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQWExHTW8wbDhSSXU3enhNTjFwMGZQWFlmUXczV1BoNTJpM1hranRCOEpVd2VLa0REX3lvcFNRUlVKM0dvN2ZZQUJ6WkEzQ1ZkcTVZNThZajdLaFcxMGFSN3NfdllzcnZMNUtUeWNaR0tTRHJMZ0hzWEdVQlNZOW5GaTN1ZlB3bVRWM1JJZGJQZURWWmd5Z2pRUWFLYjVjZzZFRzBWLWd2QlltbV9RU2hGMTNFR3l1RWtrWmxyanh3cENPLVVoZWpqMThhRG1xT1BQTHBJQjlfd1Z1dnlRdVZjYUJNUDFiQ2huSTl4dTlEX29CZ9IBogFBVV95cUxQODFkd25yZnQxaGY0dVMyNUJFTzFTX3Qxazk4NjBQNU1CYjd5YUdFbVBNWXpZcVB6MUZGRWg1bU9BYWY4ODFuenZMWTBkUFR4NXhjeVZ2SGlpTWNnbVNual8zQU9RRHhWMlVLalNWQWcxNGV0dm55NEZUd0R2a2RNRldSQ3RZN0o4d0lsdXBDS2RvQTFOUXUta2VQRmN3UHpUM0E?oc=5"
    },
    {
      "title": "宮城県仙台市 泉区紫山１丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQLTN4WEpYRHp4TE1nOExiOENfWHRBUU5Kb3UyNkF3M0VTbkpPQ1NyaDh0TUVLZGJCZ0tVd2lkdXpMWGlsNHRwdUlzX29aNnlrWV8zSDA1OFptbF9EZS1RV2N6LTVqUWQzLVpycjVwa1hSc3ZQUFZFdHNQRDZNZGliakxuczdDQlVkR0FOR0N4M1IzeHNuazhUMzdCZnbSAaIBQVVfeXFMUEVPdFp1cFVIWXVOeWxVb19OUWVRVnMtbzBtX295d2ZCTXJCQV9GUmhCQVBpTWNmdW9KOXpvd3dTUTNDLXRfSEt4M05pcmI2bHdKUmtHNUt1OGktTjRocGViSjNVYWRXMWh2UURtalk2dWl3MTF4UHBkQTV6ODF5VXdZSDhxRVA3QW9SdE9OUXdHamVDN25hTFhtX1NXS0hTVDFn?oc=5"
    },
    {
      "title": "福島県郡山市 国道49号でクマ",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE0yc0ZtbXBKQ3o5bkNsOWpjMjE0emh6T0p1MDNwa3pyLUxJVE0xNVlCVjMxOVZBNWpIYU1yZ043OHJuU010RWR4VWVxYw?oc=5"
    },
    {
      "title": "群馬県東吾妻町 大戸地内でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQbHBpUURWUnlEeDNlSzlkbzlvOXJJSmk4UjZTTE11eWx3bWJpekpkV0VLeGVEdDJYVE9UUGtybnQycHZBMm1hZE42ZW5saDNtYXdZWVptcnBTTlJjdzJOSHpEcFZRdWtwdzRXSTVLZTlHVFp4WTdqdFdLOW1qV0c2Ry13NzdDQ0NSMjJpU1htcGpvWDhxMUM3ZjFYUkp3dVdwbzk3a25FdEN3ZS1DbFY1c1lfMy0yRDRvTjFncEZTOWZIbnU1NVBweFM4RnN1WWpCbjNTTmVILTdaUVNRckNsZDBaUjVLMlZQb3BVVUFsdF9yQdIBogFBVV95cUxOOUxZaVNfb3hoT3o4MHlwS2pPeTdUQ094NkNYNDh2b09wclRrWWg4MlZKb1g0eGJlNWl6U2x4NGJqemtDMDN6UUtkM3N4ZDhTQzNDQ2JITHhaRmh3Y1BtSF9hc0xqYmZKaVl0YlB2dDVZenRWYzNwZTUtYVJrQkY4ejVEcHVFYncxR1hWQUtDdGJsRVpIOVN3VS1YQVcxWlNNZ0E?oc=5"
    },
    {
      "title": "新潟県糸魚川市 上刈４丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQZk9hN3NISFhLV0k4YTVVeHlsZlBGTXJJRmhhVk13bUlxUTdaMC1TSDJqNFVyVF9tQmtPOV9jVXRFRFNPeVVRNDlCVXIyamt1WFV0eWZNVjZZdnhxYlpjTWJyNzhmYUszeU5zbkpSeXZqTlJSYjA4dXlPdEc0dTZWQmRvdmpZUVV2RHVFUzdPeDNsV283TGtNVVdQYjQzY0Jpc3o5WmJvaFp3Zk5ob1F6bUh5Y3hWUWhaY2YtMUNrMERrb0FQZDR3WFB3SEhLNlBYSWcxQmlJWndjVXBicDZwWER5LVgxLUw0N0ZYWWtjYjNGQdIBogFBVV95cUxPR2RpQU5wWXJLbk1VcjJEcW1McWRncExsNnFnOUIwNDJrSlMta1Z5R213dXJQOW42M1FOQ1pGeFo3Nlg3bXVSVUFFZ18tRGhmX2dQc1hzcUtGUmt2WjM4OTNHbVpCa0V3dEpXdC1icTAyZUltTm1qeENXUDI3bnByVDhZZ2p5MGRpOTdkUDR4TzBfSlNaUVIzY0VqTzVxYXgyYlE?oc=5"
    },
    {
      "title": "兵庫県豊岡市 但東町中山でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTjN4dGZ4WUtDRXBVUjREQnh5UFBGbUhkWGl5R00xUEsxTEdqaTgweDRMRDNKSEF3NnZES29VcFgxdmV2c3ltNDk4blB6a1B1bjFRb01mZGR4dElQN2pTUlRDSFVUNkNfLS1aSktBRTk3d3FKS2FWZkFaZmdrU1ZTU3EzMHl5SzR3R0tIMXEtYkx0bkJXZDBLeUkwWXHSAaIBQVVfeXFMT2JoeWRtRl8zb2ZOd1lvWkt3LXN1enlkX3dOeUNoM2lCRTVHQzlFSVVvNWpCQS1obF9vaVdlMzJtc1Fvc0N1c3RwbmpTQlVlZHZ3akFpN1pKNTZYQVh1Sk9Lb1dQR3NTV0dNTzRQN0tqVFhqNTd6WkdWU2lYcFBDS19kUF9yT040UnlqbUxTMF94T3ZQQmlBOG1FTXh3T0R2UENR?oc=5"
    },
    {
      "title": "滋賀県長浜市 西浅井町集福寺でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbGxDOHdiZ0ZIMVNqRWhFZ2RyZmpneDIzT0hjejBCaWlBWDVJS2NFd0haMzRWNVFkME5MUVFWZEZHbk1JdXNQanJsR0oxcFN3dVNtZ1RzU0c0ZUNqbi1hejNKeG9JbDNTR1FFRXAwbUNBbzlKSHREdWJLZ3BvZG9iT1RpaGZVdG9wLUlidDZJSlBVT2lyTHFkZW1yVGXSAaIBQVVfeXFMT3hyYmc3LU9QaGUtWDFUaFVSYWNhMFB5QXhxUkFHUEYwVXo0cWZtWFJnWHBCUC1ILUtnTjR5OVNIeFVoV1R1eWpYU0RYb2JUMk1jNmowdWZNM2hVYTNUb1U4YUtrX2o2MHMtOWVEc3BQRFhGSkVwYmdTNXVpNUg1bUdQQmllcDlVRzNTS3k5TmM3RDE3SGx2SHUyQTJhMFNmS1lB?oc=5"
    },
    {
      "title": "山口県山口市 地福駅付近の国道でクマ2頭が横切る",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE90RUlua045d25aYjlIaDNpZndrTmtiWGFIQWM0VDBEVlFfaTNCX2E0bGNzUEwtdlhreDc1SzdKZXAwdXlDbm1VVUdrWjJEUUZrTnBpMnRGX2FXbHBvNnRzMzNXSXZNZE5taTQzSi1n?oc=5"
    },
    {
      "title": "北海道旭川市 東旭川町桜岡でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQTVJnWWxvMHV5anpRenlucHBrbGx4WjcwOG1lbFM3RWdJUzc2UTRZQ290bUIzM2lFREthZ3NRdFBPUXRoemxROVRCSWE1NTVieWktYVNiOHpQLWpjNGFRWnhiaVRBejg1UFFaVnNZdi1aLXNibnJUdmpzb2pUc00wV2tpVE51OFFJdTRTcDIzU1duVTA4cmhoeGxiY0vSAaIBQVVfeXFMTTh3R1pKSWw5a0FnSFZuRHAyY1B2U3VaTDRxUE03bGpRdkxHRWZBWkNiVGdaYlBvaXFUV19HV3ZVRW16MVpzZkM0YTNqUHk5WG5QZjJhRkhLNmFiMFp5NHpaZVh0cDk0RXhTUDUxSTNhbG5mRURWbmQ5TGsyYmhTeFlEYWVLSmxjOVBfYUgweWZjV0ZwNkpjX2hjejlQZEQ4ejJ3?oc=5"
    }
  ];

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
        <span>対象期間: 2026年6月30日</span>
        <span>·</span>
        <span>公開: 2026-07-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <p>2026年6月30日、KumaWatchが収集したデータによると、国内におけるクマの出没事案は1日で249件に達した。これらのうち、人との直接的な接触や襲撃を示唆する「人身被害」関連キーワードを含む事案が9件、市街地や住宅地など「都市部」への出没が21件確認された。本日の報告は、報道由来の情報が228件を占め、自治体等からの公式情報は限定的であった。捕獲や銃猟に関する報告は0件であり、多くの個体が依然として活動中であると推測される。以下に、当日の主要な事案と地域別の動向、そしてリスク評価を報告する。</p>
      <h2>主要事案: 人身被害と都市部への接近</h2>
      <h3>人身被害事案</h3>
      <p>当日は、少なくとも2つの地域で深刻な人身被害が発生した。栃木県那須塩原市では、畑で作業をしていた70代の男性がクマに襲われ負傷した。この事案は複数のメディアで報じられている（※1, ※2）。また、京都府京都市右京区の山中では、猟友会の男性がクマに襲われ負傷した（※3, ※4）。これらの事案は、農作業中や山林での活動といった、クマの生息域と人間の活動範囲が交差する場所で発生しており、リスクの高さを示している。</p>
      <h3>都市部・生活圏への出没</h3>
      <p>人間の生活圏へのクマの侵入も全国で深刻化している。鳥取県智頭町では、JR智頭駅やその周辺の商店街といった市街地の中心部で目撃が相次いだ（※5, ※6）。また、教育機関周辺での目撃も複数報告されており、新潟県長岡市の山本中学校周辺（※7）、栃木県足利市の第一中学校（※8）、長野県安曇野市の明北小学校付近（※9）で確認されている。さらに、青森県むつ市では住宅前の路上（※10）、秋田県秋田市では八橋地区などの住宅地（※11）で目撃されており、住民の日常生活に直接的な脅威が及んでいる。これらの事案は、クマが本来の生息域から人間の生活空間へと行動圏を拡大させている現状を浮き彫りにしている。</p>
      <h2>地域別の出没傾向</h2>
      <p>当日の出没は全国的に確認されたが、特に東北地方で集中的に発生した。以下に地域ごとの傾向を詳述する。</p>
      <h3>東北地方</h3>
      <p>秋田県（31件）、福島県（26件）、岩手県（20件）、青森県（18件）、宮城県（12件）と、全国の上位県の大半を東北地方が占めており、依然として最も出没が深刻な地域である。秋田市の住宅地や仙台市の青葉区・泉区といった都市部近郊での目撃（※12, ※13）が報告されており、山間部だけでなく市街地周辺においても警戒が必要である。福島県では国道沿いでの目撃も報告されており（※14）、広範囲での活動が確認された。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">報告件数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">31件</td></tr>
            <tr><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">26件</td></tr>
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">20件</td></tr>
            <tr><td className="px-3 py-2 text-xs">青森県</td><td className="px-3 py-2 text-xs">18件</td></tr>
            <tr><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">12件</td></tr>
          </tbody>
        </table>
      </div>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県（14件）と栃木県（12件）で出没が目立った。前述の通り、栃木県那須塩原市では人身被害が発生したほか、足利市の中学校でも目撃されるなど、生活圏での遭遇リスクが高まっている。群馬県でも東吾妻町や中之条町など、広域で出没が報告された（※15）。</p>
      <h3>中部地方</h3>
      <p>新潟県（12件）を中心に、長野県、静岡県、富山県、山梨県、福井県など広範囲で報告があった。新潟県では長岡市や糸魚川市の市街地近郊での出没が確認された（※16）。長野県安曇野市の小学校付近で子グマが目撃されており（※9）、周辺に母グマがいる可能性も考えられ、特に注意が必要である。富山県の自治体情報では、幼獣の目撃や足跡の発見が報告されており、地域での定着と繁殖が示唆される。</p>
      <h3>近畿地方</h3>
      <p>京都府京都市での猟友会員の負傷事案が最も重大な報告であった。このほか、兵庫県（豊岡市、新温泉町）、滋賀県（長浜市）、和歌山県（広川町）でも出没が確認されており（※17, ※18）、近畿圏においてもクマとの遭遇リスクは広域に存在している。</p>
      <h3>中国地方</h3>
      <p>鳥取県で19件の報告があり、特に智頭町の市街地での連続目撃は、地域社会に大きな不安を与えている。島根県や山口県でも国道沿いでの目撃が複数報告されており（※19）、車両との衝突事故など新たなリスクも懸念される。</p>
      <h3>北海道</h3>
      <p>北海道では16件の出没が報告された。芦別市、八雲町、旭川市、遠軽町など道内各地で確認されており、特定の地域に偏らない広域的な警戒が求められる状況である（※20）。</p>
      <h2>総括とリスク評価</h2>
      <p>2026年6月30日の出没状況を分析した結果、以下のリスク要因が指摘できる。</p>
      <ul>
        <li>季節要因: 6月下旬はクマの繁殖期にあたり、特に雄グマが行動範囲を広げるため、予期せぬ場所での遭遇が増加する。また、春に冬眠から目覚めた個体の採食活動が活発な時期であり、子連れの母グマも神経質になっている可能性が高く、非常に危険である。</li>
        <li>餌資源との関連: 山中の餌資源の状況はデータからは直接判断できないが、餌を求めて行動範囲を拡大した結果、農作物や住宅地の生ゴミといった人里の誘引物に依存する個体が増加している可能性が考えられる。これが、市街地や住宅地への出没を常態化させる一因となっていると推測される。</li>
        <li>人口圏への接近と人慣れ: 全国の学校、駅、市街地、住宅地といった人口密集地での目撃が多発していることは、クマの人間に対する警戒心が薄れている「人慣れ」の進行を示唆する。一度安全な採食場所と認識すると繰り返し出没する傾向があり、偶発的な遭遇から人身被害につながるリスクが極めて高い状態にある。</li>
      </ul>
      <p>結論として、全国的にクマの活動が活発化しており、特に山林と市街地の境界領域だけでなく、都市内部においても厳重な警戒が必要である。住民への迅速な情報提供と、出没が確認された地域での対策強化が急務である。</p>

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
          <dd>2026年6月30日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-01</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-01</dd>
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
