// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月31日 / mode: daily-report / 生成日: 2026-09-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-31-daily-report";
const TITLE = "2026年8月31日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月31日、国内で66件のクマ出没が報告された。特に北海道と東北地方で多発し、静岡県浜松市では林業作業中の男性が負傷する人身被害が1件発生した。仙台市や秋田市など都市部での目撃も相次ぎ、住民の生活圏におけるリスクの高まりが懸念される。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-09-01",
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
  datePublished: "2026-09-01",
  dateModified: "2026-09-01",
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
      "title": "静岡県浜松市の森林で作業中の男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFAyeTU0UnV4U2ZJTnRRTFk5QnB2ZEpReWZ6U3FvQ0I0RlgzLTBDRUJOb1BhX19rOURIbklrV3FRbFN4T0FYX3BCa01UVFgwWHhJMnNueUtyWDRPOUk3dkJYb2RjVm1lckxiemd6TVRHR3k3Z0JtaXBHVG93N0UwYnc?oc=5",
      "site": "news"
    },
    {
      "title": "宮城・仙台市青葉区八幡の住宅街でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBRdGVBXzJaeExBTS1wQXE5QV9KLW1GQjYyczN3WEVqZG01NnNmSmtoZUdZd1hZTjV0Uy1xSDVWVjlzVE05aDc4cVpNb0lfVnVzU0dsUWpadGFSRF9WbDhFVkx3RmRXMFhRLXBobnJXY2Fvakk5UEhVR29nNkNtTjQ?oc=5",
      "site": "news"
    },
    {
      "title": "岩手・北上総合運動公園で子グマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPTWdVd09xM0NsOUVGc0Ixb2pXaUxXbno4SmlTbHdia0FsazhhS081Mko2S1pSMWlXT0pYU0ROU05scVhPTGVHbG92blc2MU5GbkQybkFCVnEyZ3QzelhWMjYzYVR6WWVZUGFsV2RPclZGQlVFX3kwZmYtZG5QbzBDN3FHRDhpUlE?oc=5",
      "site": "news"
    },
    {
      "title": "岩手・盛岡市の公園付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9ZVDRjZ3Ffc0Q2SEgxeldUajVrbEZHREdXNnhscTBrOGJ5T2VZRWgwdGQ4RlBmd0dlaUZUSlR5LXlwMGVRS2czS3M0LTdXYk5JTWF5d2ZXSTZnZ0dQbVI2ZQ?oc=5",
      "site": "news"
    },
    {
      "title": "岩手・盛岡市の学校周辺でクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFBUZ3RuX2pGanlJclJUZFRhY3BlNDlaenQxRHdvWHJNX01MZTlqZ1ZsSGQtdXJLNERGbElLU0JYcWFlM3I1UEF2am5uVVpadnBILWJvSUpYN3Rmcjd2R3JFZQ?oc=5",
      "site": "news"
    },
    {
      "title": "秋田・秋田市寺内地区でクマの目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQMl9xdDc1YlRRUzg2UUtsaDh3OFB2Uk01ZnlDWlJKaS0zNkdFcW5feDgtZTF4U3pubmhXUW9WajItM09ObGRITDhvTG9tbVRkeVlsb3FRTzJWaGsySmZ5RTZ3cmdNODc2LWxIaU9pN3dibkU0THFOYVF6b0htMVRfWnVhd2pFYUU?oc=5",
      "site": "news"
    },
    {
      "title": "北海道留萌市留萌村マサリベツでクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOEpiMHI2QXNFbnRuYUNWV3JQY1d5Wl9UYUYxZWE3QThHT1M0UFdiUUJsVGswYzZzb1ZfSWRsMkttYU1udnRIaXVqbFNHaE5Zb1Uxc2pQM09Cd0FvaHZxSkczU25IWXVab04yZUIwaTV3eTFlSmdXZ2NLbVZlWENTVmJSZmYzNV8tUVNTc0tNMEpfdExNSlpQVlN1MkvSAaIBQVVfeXFMTzdzQmI4c244c0FoSEU1OGlnN25OLVdoWTl4T2xYZEpLSmtJdWNWNHprcWg3bTBjLTc2dWtaWjdFajRNdEJRbGVJc3I2bU0zbW1jRndkOEhTR2FyQkpEaDZvUUdNMDdzUVQzb0FWM0FfVlBhX0NkNFBjbVlMWmg0ZW9YNU5abnZydFZ0OVFCdUhhUUhHOWdwVnRtdy1yckZUYTNn?oc=5",
      "site": "news"
    },
    {
      "title": "北海道北見市川東でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQbEswcldEbTRUZ0U1cHVtRkFOZlpxQnBvYzMySUdSakc1SHJ3XzlYZHBTWDgxNktLRzlMb2lIdktHUUlBQVdTRTNBMmNGU1V0cTNTaEFHVldJQ1JxVDZjbFY1RGdXbUdoUGZ5MWNjWEgyMk9aTDY1aUNhTE84cmZGMlNYcjVIbG1NVmhmNzZ4UWU0d1lmRUN6Ny1oWVPSAaIBQVVfeXFMTTVlSnp0LU5XVlRjYzBMTXU2emNVaDdqZ3E5VW5jQW9td0VEUmFCUTZ6TFp3Zno3enUwTUlieW50emZlZkhnMjJBWHBxX09jMWtpV01WbnB5SVBQSkI4bXVhVEVQRWxZMlQyYTc5Y2s2QU5zNTNkOHNrVGJPNllLNGgwRHduMi1tNFpBT2xYVmc1b3gtb1BVZlVxMFRMSWNGbHFB?oc=5",
      "site": "news"
    },
    {
      "title": "北海道浜頓別町豊寒別でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNlZFSEd2T0dyMW9RblB2M0dhTUxFVDdyV2FkSXYwWk1pMlhGVmluOXI0cnQ3enZYSHlER2dxbDlQMGpvckZUNVhZZl9yYmVzaC1ycTU4U0dEU3oxUUdKNXVmV2xfalpyeU1QUGdDaTVJQWhDSGVoS2xJQWU0aEhUTTZuVG9QY18wSHRuUWRxdE1BekFOVzM4TU9oWE_SAaIBQVVfeXFMTlN6ekhrVTlHSzBRNFc1OXlKeDZpX3FqYVZCMzdac3NxdVM1OUZ0NktoZkhmN2RqNURYOXFkNzRkM21xZGsxTFlTeDF5OTFyMUpoeGVJY3lKN0lodktBT3pYYndfNDZINVQtbGFhWWNPbmhrRkxZZnJaYnJzZkxRa1M0UGYwOWxNcWhGaVp0VWNzcnZFdHF1YWtrNzgxS1B0VUpR?oc=5",
      "site": "news"
    },
    {
      "title": "岩手・北上市の学校近くの公園でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFAwODM4endxV1dwcm5fNFVIRk1VcE1vVm9IZWN3YlZlNjZDalZiUklmWFpsdzcyYVNieHVxSnRXUkNKODlKdDJ6OVEtVl9HSGZlNUJ1YnBaUU1ZMFZzRW9KeQ?oc=5",
      "site": "news"
    },
    {
      "title": "宮城・仙台市太白区坪沼砂田でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQZ0RxTWtuLTBobDhOUWU2NGFuUzlvRk9LZWd3MjVicG5hSHhTZnZRTXUwZzJfNDFHajU4b3YwUlF3VUtaYTZnUnNIY01Qa3BpSTRscGFqbnpORDdVcmszd3kzTXJhbzhTUkVCUUVmdFBaazFhNEhSWDU4UFI4VHoyWWZNcm1ZMFJXV0RtaGJ5RTg2QkgyVW81enRFQ1FwUUlRejJsdXpHX2NMMExWUXhHdzFpOS0wODhpYVQtQ3RqWWZFejBYZjN4VTZNSkhYMFoyOEI3UEJYTnNjdUk3cDdnUk1TVk5tMVF4TlhESjZ5TEVWZ9IBogFBVV95cUxQeFZQX3pBdU9Nd0VXSklOZTZCUnVGdG1OT2FhLU9ya1E4bDEwRE9BOFZseFZIT1lQbXlrSHJXVXhIek9TUVZuS2NMQ2R3NV9rVUlVM05Lem5IYWNrUHdpaFMtdmFqQWp5UFJ1cWRmSmVuZUVMTjVwVGxXZXBuZF82aVRwUjRES0IxclJfWVRMVGxNNjVjM3l1MWhpV1NobW1lM2c?oc=5",
      "site": "news"
    },
    {
      "title": "宮城・仙台市泉区小角窪上でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQZ3dyMjUzOFFzMm5rQzNJUGs2dEtOVGZfN1c2cFdrMGFPYko1NGMxdzUyUmQ1SFE1TnpwUlZJZUxQV1RTeFNaSHJnWGlHZ3FzTzV4VHNzM0lKTllZazEzeWVBY1B2aGE1V2Z3cmJXdHJPeG1USDlwWnIyQkxENFphRWFGNFFTOTAxd2pKT0Ezd2w2ZkktM1NjNU02NzLSAaIBQVVfeXFMTkNXVEM0UXk3OHJaZ0M3ajZRZWZpWGkzdGxtcGEzMDNWMEwwMTRHZEpYVGxBRUgxZjJUVVlXSExydlBCRVBTRnJyUE5UY0J6blZhdUNXSWJLbXVjbUFtSlUybkRKRnItb2RuOGRBclpjaW9LYzBSM1R1SGI0dWxiZnJqVDBYZlMxRmZNX3JOLWMyZVI1aUJzZlN2ZHpWTmQ0VER3?oc=5",
      "site": "news"
    },
    {
      "title": "秋田市寺内高野でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNUV9haXE1T2h0M2dSM3VjOHE5QUVPTHBBc09JRkxqRXZ1SlVGTUF1UnRuQkdVUElIejVVcFdUZUcwUC1Xam52NEZHcnBCTzJRblJHUUN1MGR0d3FicDViX3Eweko5UVdkVHB4dGtBVkZnTkV0MDA5OGRvMlBvb0RDXzlwQjVFdTlvOGVLY0hoeXlkSHF0c1EyNk9uTjbSAaIBQVVfeXFMTmptd3l5M19BWElBUlpBNGR5cUlmRnNCcE53LVU0T0daWDRsaUM3ZW02dkhPTGgzOF84RkE2WDZLaVczNkh4ZWRCeDZhbUR4T29sUG1fNjVSSzJhWmZoYXFJMEw4SDY0bmFWT3RvdlR1X2t3WXRRMzZFSXl6Y0w0dGFWZXdtZXpPdEdoT2FEaG1mRFVWOHJnYnMwZC1pMGM4TkZ3?oc=5",
      "site": "news"
    },
    {
      "title": "秋田市寺内児桜２丁目でクマ出没の痕跡",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOLVZOTlhyZkJzemJYZENkUjltZkxzd0RmaUp6SWZMbTRlVXM3UUIwMDhPRG4yZHYxeWlQTmRzQlNoSWhXMjBaQzZrdXhrbmh6MTF4SXU2cG9tUGlWdTZuZjYyWGU4bmRLQ0FQUFpwNVpSTFg5eTJKc1JTSFgzVVNqTVhKYjNyNjRkblhQQkJJYTIyU29ZdS1XdWVhaGLSAaIBQVVfeXFMTkxLQzZheEVRaTNkazhKdGxsYy1faTB0bW5BbHFaX1BKbHZMR0tEOVF6THBRejNOLUlzV2lIZmZMb2xjeTlseWFZdXF3dDhQQzVPZ21sdnp6Qjl5M0xTS3pMczRSbXRqZHhfTTJGV29xeXV3M3BqVkU1el9weEpyeUhId1Q2NEZCd1ZlY2ZvajVNSVpiUVQxRWZjWEtyY1BnbTBR?oc=5",
      "site": "news"
    },
    {
      "title": "青森県五所川原市十三でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPcVo1dklKZENBanJqVUxEVUgxVzRhUG4wZ05UcUtQbVp3Vkx6d1FaRUVIUlRodUk1eE9zdkFTZGVrWjhjR0lrRnRReU92WHZ4ZUpFYjhiT0Nzb1JtMkNFdHRRQ3FOdFNnc3NtNUZNaV9LN19taGVEZzE2cHVDTDVWeG5RNUNtVnNKYV9HRWdzY2E1SXhfUG1NamdIb3DSAaIBQVVfeXFMTS1VVDVxZGxQOFNYYzNzN1I3dHJfNWFxNHdDU0RIUGhnNWdSeE0zMXVmd2RsdWJYcmk4SllTcm5CRnZGYklWMmZKR3JoM3kzQXFEQ3lwUDc2aXEwVmlhYzRoNnFmNUZQN0s3QWgtNml1OS0yeE5jTV9wR1poRlBLVWZwTnU0V2FacGF0QWFPM25uNXhWYU9ZSXVWSWhLdWZIY2Zn?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県安中市松井田町でクマの痕跡",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxORmszbWZodnNvT3ZqMVljakk1YUZMYWo1Z09TRnk5dTZEaEVNd0s3T3JUUmlTXy1jSUdDdFBJRzhPV2tYbk9MbmhzdUpQd1lmMXc4akRHeFk5OXJ0dXRMWEpVR01LOGQzbDh6Mk9PdllrenBQdU42SzlzWF9GaVJ2NS1SUHc1OVk3dzcwOEozOS1JelA4aldwcE5WLUktZEh5RldaVnNOMERFWHlsWW5nY1VfU203X0dZeHJvZjdsaVBzc1JkRUtCblk1dmlJV1p3cnlRSEpCSHdyTXRVOUd6aFRtNlpvOFFjRlRacC02dGpWd9IBogFBVV95cUxPZXU3ZWk0emFkTUNReFNPRV9yX05mbjNmcXhUVE51bGZrZmtfaVVDcERPQlB5dGJES05pTGJtY0tycE5URE5sWDZwbUFzOFdYZzVCaFpkWThnVktkNy1uQno1T2RJRlpoWURncXRFZ2hWdWtrcWRsYktXNllPeDZUR280WExocGc5NVh0dFJRbmZ2NVNiZTFKdXNrWTlYTGlSd0E?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県那須の山林でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE5BTGZCekZMN2traDFjMUxsbnFkN3lmSDhsUndXbFBIdm13dHpTRko4aGlObDY5UHdteDBHd29hS3ZEaE50SGRGa1hpbw?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県那須町高久乙でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOVS1Pb0ZnVmRWcmFlellMcWRGaldLekZKbjU3RTZNSkxQTzlDQ1RvY2Q1dXo5eTVKMlZuSlphN05ZaU9NVnRzNDgzczFXRHczT0gyZ0UxdjRZcTd0a01wbVBSa3VHMmZBUUt5OFZIZC1VdnNqdDVZUnQ3YXR3aURDcUVWWGE2N0RMMVdoNndIMnV3SUh6UzhleDh0WFFLUTdsZHdTdF9mSjQ2WTVtSFhiZlNtSTQyb1cwLTBpOWpnZWM3aTc2RHRrWHFERFJsWjB4NmtnSnUyQVFjaTZHbjVkaFozMnJqYnJscGZCMnhIUUxFZ9IBogFBVV95cUxNLTRnUkY5aFE2Mlc1STJLbnR5MWZvRFpHZGR5NEgtR0xnMHRzbHZqdXJNeWJKSmg4RElnWmFKdktnUjIwazJKTnNYckdWYkJCSzRpczRJV0lOQk9WbVBWeDdkUlVfNjBBT0xVY3pybGRMQm1OZWNaSTNpZl9oaGpTd180eEdVRl95dEFxNjJ4Nkdkdk5Wd3pZWnA2d1lEY2h0SWc?oc=5",
      "site": "news"
    },
    {
      "title": "長野県軽井沢町長倉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbl9reFZHaDZZS2FxQUNPdjVzay1fcS1jam8wQXllZHFPNTRvemxmZ3IwenhCTHQydEZ4ajNmNmc1TWdQRVQzOEpyWTRneHJzeURmcXlIWHZMR05MZDFySjZkSjBqNUxkWm1YZGdUUHpNcVg3U1lCS3B0N3ZUS3N5MEk0bVRXWG85cVpic2pHdnFmaW5yNGRhMmJ4Tm3SAaIBQVVfeXFMT0szVEszTklFSFg4dDNEYzBJbmtxN3ZCcXhrQUlPajVKdWxIVDdCeHdERnZqZ2tTVGZjRWM5ZjcwX2NsQ0FmYnBmYk5OeHBLYkVzY0plaUgzbFJZT1dpMF80NGxxTmFRQjE0YWgtTmFVQ0VFQUMxT2xENUx1NlFZcnlsYmJuQUF3djdheDdzcHdyX3VzTU96NjJpSmZxRHJWbzln?oc=5",
      "site": "news"
    },
    {
      "title": "岐阜県高山市一之宮町苅安でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUk1NcHl0b0JWSk8wX1VEbTlOb21EQnlQTzdueWxxczVULXNIZ3Y3Q2d6M1VoWktrQVA1eFlkUWlrekdpYWJCakRtdU1OQVZHcm5XSlpfenZIYUcxUXFjZUswYVFsaUU2eFJnZGY5LWtid0tpb0RZa2lfSy03MjQ2bEkwVFlCQ2RQMHRLUnozQzAxamhuWWRQUkYtR3rSAaIBQVVfeXFMTWszMklzRGR3cEhLcWxXVUI4NjdyMnJZUWFTaVNuck0tZVhnNDI4YjhraFpaR0JGcTRoSURsN2U5MnBCZ0JMV3B1UTM0ZnczaDBSbUZ1SksyQzJRbWpSTXJoQXo3SXJaeXJycGJrU3E3UVJYSWMyTk9NWWs5M0hCbmk2S0hyN01Od3Myb05xMVg2Y2R1VWx5LVhVNUJZenBLVEZR?oc=5",
      "site": "news"
    },
    {
      "title": "福井県小浜市中井でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQdG5YZXpKSnQ4aE1kZjVwMUhGWk4tVXozTUZ0TGNFc2FDNlhzZmt2UE14aEYwc05hLUd3TDljYUl5bERqMTRDaC1nTHJoRFpqdkpDUzlSMGowRjdXdjBEYml3TEVEcnlOcWRfMFh0WE5VSzdSdXhBcS1mNm1zcDBaOTkzT1RWSzVXWHRDZS1oQ0tHQlZpcElRSFpsNXVmMjhHSmZDQkNFdF8wNnJpUGd2QW5UTmF2VGFwSWZBd1FHSjBkeURFLWVXWmV0VFZzdHdjajV4ZlhDcm0zMjNZVFNLUWJFRzYyQXhaMmh0Rkw5ZHJtZ9IBogFBVV95cUxPRWNkdU9GMV9ZaENjYlBILS1KNE80TGVVRTVxWW9DZkp1SXhuWUFyZmkwOGZadzV0YXE4RHFlR2YwYmNoWk92TzY3NWlicDBfdW5XOXpncjY1aUYta0ozeVEtOWdhb3BzTUpWXzFkUzZ2WFl4VFRyZ01NQlIxUlFkdFZsZVkyOVZ2TTRCbFV0ODE0Z0FrTkw3WHFOV0dMamF1V2c?oc=5",
      "site": "news"
    },
    {
      "title": "京都府京丹後市久美浜町金谷でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPdGRiZHRBWjc3S29VTXkzeVRqM2lMRGZqNF9WcEpOUWtid185REs0bzM1UWFESVRVTlpRSzNlQWdNeUswYjlxNGxpa05RSS0tdFJJQjdGWTM0NDdrS2RZeERuRy1yaFRhd0RYZnJhRWY0WWhuaXcyM3Bic3Z6cGctclhxeUxRV2tvS1Fsd3l5SWl0WDlpMFJGckNPR1jSAaIBQVVfeXFMT21qS1AwaUdMbWpQR2d2S1g5ZG9WMHNUdFNWY2xlMUlHTzhkb0NzcnFTRXV6TlBRNkJSYmthSTFMUjI5YnNkSmhUSXNya0hkblh5RngzYWRBaGF0ZDByTHRrem4wREJKU053aUhWYU9Bc1FSYS1pT1VWR2tHcnBhbllPeW55UGpRY1paNjB2dlhNbmx2SVVjLV9JMDZ0SHRrU0t3?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":17},{"pref":"岩手県","count":9},{"pref":"福島県","count":8},{"pref":"秋田県","count":7},{"pref":"宮城県","count":5},{"pref":"群馬県","count":3},{"pref":"栃木県","count":3},{"pref":"青森県","count":3},{"pref":"福井県","count":2},{"pref":"静岡県","count":2},{"pref":"岐阜県","count":2},{"pref":"山梨県","count":2},{"pref":"長野県","count":1},{"pref":"京都府","count":1},{"pref":"山形県","count":1}];

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
        <span>対象期間: 2026年8月31日</span>
        <span>·</span>
        <span>公開: 2026-09-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={66}
        periodLabel={"2026年8月31日"}
      />

      <p>2026年8月31日の1日間で、KumaWatchが収集したクマの出没関連情報は全国で66件に達した。都道府県別では北海道が17件と最も多く、次いで岩手県（9件）、福島県（8件）、秋田県（7件）、宮城県（5件）と、東北地方で集中的な発生が確認された。情報源は報道機関からのものが47件を占めた。当日は静岡県で人身被害が1件発生したほか、都市部での目撃が6件、捕獲・銃猟事案が2件確認されており、深刻な事態も含まれている。</p>
      <h2>主要事案の概観</h2>
      <h3>静岡県浜松市における人身被害</h3>
      <p>静岡県浜松市春野町の森林で、林業作業中だった男性がクマに襲われ負傷する人身被害が発生した（※1）。山林内での作業中における遭遇であり、野外活動における基本的な警戒の重要性を改めて示す事案である。</p>
      <h3>都市部・市街地への出没</h3>
      <p>当日は都市部やその周辺での出没が複数確認された。宮城県仙台市青葉区八幡の住宅街（※2）、岩手県北上市の北上総合運動公園（※3）、盛岡市の公園付近（※4）および学校周辺（※5）など、市民の憩いの場や教育施設の近隣での目撃が報告された。特に秋田県秋田市寺内地区では目撃が相次いでおり（※6）、特定の個体が同地域に滞留している可能性が示唆される。これらの事例は、クマの行動圏が市街地まで拡大している実態を浮き彫りにしている。</p>
      <h3>捕獲・銃猟対応</h3>
      <p>北海道の津別町最上地区と滝上町で、それぞれ1頭のクマが捕獲された。これらは地域への被害防止や住民の安全確保を目的とした自治体等による対応措置と考えられる。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道</h3>
      <p>17件と全国最多の出没が確認された。津別町と滝上町での捕獲事案に加え、留萌市（※7）、北見市（※8）、浜頓別町（※9）など道内広域で出没が報告されており、活動が活発であることが示される。</p>
      <h3>東北地方</h3>
      <p>岩手、福島、秋田、宮城、青森の5県で合計32件と、全国の約半数を占める出没集中地域となっている。岩手県では盛岡市や北上市の都市公園や学校周辺での目撃が特徴的であった（※3, ※4, ※5, ※10）。宮城県でも仙台市内の青葉区、太白区、泉区といった人口密集地に近いエリアでの出没が報告された（※2, ※11, ※12）。秋田県秋田市の寺内地区では、寺内高野や寺内児桜２丁目など、具体的な地名を含む複数の報告があり、地域住民への注意喚起が急務である（※6, ※13, ※14）。青森県五所川原市十三地区でも目撃情報が寄せられている（※15）。</p>
      <h3>関東地方</h3>
      <p>群馬県（3件）と栃木県（3件）で出没が確認された。群馬県安中市では、ゴミ集積所周辺が荒らされる痕跡が発見されており（※16）、人由来の食料への誘引が推測される。栃木県那須町でも山林やその周辺での目撃があり、観光地に近いエリアでの警戒が必要である（※17, ※18）。</p>
      <h3>中部地方</h3>
      <p>静岡県（2件）、福井県（2件）、長野県（1件）、岐阜県（2件）、山梨県（2件）から報告があった。静岡県浜松市での人身被害（※1）が最も深刻な事案である。このほか、長野県軽井沢町（※19）、岐阜県高山市（※20）、福井県小浜市（※21）など、山岳観光地や中山間地域での出没が目立つ。</p>
      <h3>近畿地方</h3>
      <p>京都府京丹後市で1件の出没が報告された（※22）。他地域と比較して件数は少ないものの、生息域での活動が確認された。</p>
      <h3>その他の地域</h3>
      <p>本データセットにおいては、中国、四国、九州地方からの報告は確認されなかった。</p>
      <h2>総括およびリスク評価</h2>
      <p>8月31日の出没状況を分析すると、いくつかの重要なリスク要因が浮かび上がる。</p>
      <ul>
        <li>季節的要因：8月下旬は、春に生まれた子グマが親離れし、単独で行動範囲を広げ始める時期と重なる。経験の浅い若い個体が、餌を求めて予期せず人里に迷い込む可能性が高まる。秋の大量採食期（ハイパーファギア）を前に、クマ全体の活動が活発化し始める移行期とも言える。</li>
        <li>餌資源との関係：山地における堅果類などの自然採食源の状況が、クマの行動を大きく左右する。群馬県安中市でゴミ集積所が荒らされた事例（※16）は、自然の餌が不足し、人由来の食物に誘引されている可能性を強く示唆している。生ゴミの管理徹底が、市街地への侵入を防ぐ上で極めて重要となる。</li>
        <li>人口圏への接近：最も懸念されるのは、都市部や住宅街への侵入が常態化しつつある点である。仙台市、秋田市、盛岡市などでの複数の目撃は、クマが都市環境に順応し、人間との物理的な距離が縮まっていることを示している。公園や学校周辺での出没は、子どもを含む多くの市民が直接的な危険に晒されるリスクを増大させる。今後、市街地での人身被害発生への警戒レベルを一段引き上げる必要がある。</li>
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
          <dd>2026年8月31日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-09-01</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-09-01</dd>
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
