// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月15日 / mode: daily-report / 生成日: 2026-07-16
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-15-daily-report";
const TITLE = "2026年7月15日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月15日、国内のクマ出没は181件報告された。特に東北地方で多発し、岩手県では捕獲事案、宮城県仙台市では市街地出没が発生した。人身被害は確認されなかったが、全国的に人口圏への接近が目立ち、警戒が必要な状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-16",
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
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
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
      "title": "岩手県雫石町 住宅でわなにかかった1頭を捕獲",
      "url": "http://www3.nhk.or.jp/news/html/20260716/k10015178631000.html",
      "site": "news"
    },
    {
      "title": "宮城県仙台市 宮城野区原町５丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQa1lwc3N1bzZOWWd5RG9vSXViVjctY1Y5T2hFcXdpMUcwaWdJX0JJNWxkWV9FZGktRUltVzRLaUxvdi0waGs0bDJ6dDk1SGtIVnI4OUNqMGtJM2lIRnBUcmZINlFsVENUZ1pONUl3S0xYdElxWG9TeTZydWpUS0pVM3NXc2p3UlFfVGtXRlRLU1ZZSzk4dk1rdFNmN3rSAaIBQVVfeXFMUE0wSTEtbUFQRGNJR1paSHF6R1M0UG9KQkFvWGFKdXU0cU1iVWpYNHR1ODVGS2l0VjlHMURwMGM2VXNSY1VNZTkwOFk4R25KeTl5Qi1VZTFXanQyMnd3OVpBUjZkeUs1bFhJcU5GOXZ0eXpOVkU4VU0xQ1VNTlZVczhVX1g3dEVhLWN5WG5BVlB0bENWSlplUlllTGhfeDE2WU9B?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県仙台市 泉区明通３丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOaXZsRTgtV3FsamZUeTdKbXFmQUp2aWIxQkhzd0pGbUxKQ3MxYlZUMW5La083Q2Z4bm9jMmR5UmctOUcwdFFEbmJHNUUzbGFBMmVTVk9vVUV5R0hRUXRiSE5rSjV4S2tvdDJfbjRLM2hrTHBwdnhKYmdDV3VMNjhqQmRxQVRDZENXVV9SZDlQT216YmRyOVBycGZiaC3SAaIBQVVfeXFMTlp0QThjYmZBTW0wYnNDV0ZQQ3o3QlRsV21ORjJmVVUwSVJ2X2pqLU1ZZ2xmX1dnMHFmWGRpdHNBcmxwMFRjZHhmUnJIbWI2azRpSHNjS0RvNl9hQ0REai1tQmtnNXVqOVRrdFZYc2ZRcExIXzlSMllpajE1RzJ3aHdCOW41TUdxdktyY2doRmRfdWpyZE5za0o3MldSUHl4NE13?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市 寺内蛭根３丁目でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOTFFzekhsSEppMzRtX0tPam5IM1JGZzF1SlozN2VLSGktT0tjVUJGWWxpQ0plczBubDZwaUc4MFo3VG51bWFBbHNnTmpreXZtZmFhZlFySDBobXF0TUVmRTVvOGxWWVVkYmZXQUlmRHA4dlVzYnZDTzNraTFaTWt2cDU2aXMwRmZjeXZjb1dtdFRhQVRiczhSUnlqYmR4d3VobUQ4OHB5M3hudHhYTGZPZm1nekVhMF9lZ0k5OENjNTRTT29PZlJHYllZZ1hWc2hPWmJlaFIxVUxRTFlSWUkwMjVkR01IckF5SmstbTNVREQxd9IBogFBVV95cUxQODdRSGplcjJjdjZ5NjJPNVpQNEoySS1CS25RVXFHYWFScFMxZUlvZ1hVOGhLbl9kMFFOQld0dlp6RHZkZEtzOVpUVm9iaDRmNDZsaHAySzVhVDl2bXgxdW5VbTFselFMWHd3LUkzcEVOV0pWQmlBZnpSNFF4RjZCLU1mYk12UlR0TUp1a3NpUGVjNEphZlBQTXdDbWctbGZlbUE?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県大潟村 中心部でクマ目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9TVjdUYlRnN1pCMzF1RUJaNzZPZ2tCT0xJVnRla2VrdVc3cXZPYmY2czN4blhsUmdJYy1aYmNMd2VrcXhFcjRia2R6eUlLTHhFRjhkbHBad3BHZC1UTjl3ZHp3?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県北秋田市 小森の国道２８５号でトラックとクマが衝突",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE44aFhGeWVqZzQxQ3Bnc21BcXl2YWdFZ0Z1cXRoNGY3QVUxb0tmYVJCOW91ZHJVb05lazNtTWV1eENLejRzQ3hJbE9NWFJYQkI2aDl5R0h2dW94V2I1aVdpQURn?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県富谷市 中学校近くに熊出没",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBwM3B2Ykw4VWxvaGFWSjUxcVpMck85SUxrM0xmMDY3RzFmaE5CNC1HM0lIVXpHeWk4NFRNajhmMmdFV0N3T1ZoaXB6NFpqMjRGNVBORFBHVVRvMVlwNXNVa2tUYmd4cHVyTlIxX1FBektEZGZ5WHY4bThLOA?oc=5",
      "site": "news"
    },
    {
      "title": "山形県鶴岡市 中学校近くでクマの目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1ER0FOSnp2Y0xSVEUxLWlrVXN4Z2dIZEpHNS1JY2hpaGZqR2VIMEJhb2U4bXNmMExwUlBoSkRReFBOUFI4Y1R4OW9fdjluRHdpMXRLR194dUxlQk5YZ3Q1VG4tV205cG8tYWFfdHlYQ3RPUm5teFU2aGdfZVdTSUk?oc=5",
      "site": "news"
    },
    {
      "title": "福島県福島市 福島市のナシ畑でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBxLXBzSkN0ZVRraU45Ry1hdGEwVk5UNzk0a0ZLRDdOQW4wVVZOem9RZmc3LVlVUEQwVmNYeE1xb0VManRHdHk4cFQ3T2dIaUc2UE11X0NJVFBVd3puS0I4MHNmaWtlYzUxaUZCXzVGdW5XUVZrQV84Nk96R1FTUlk?oc=5",
      "site": "news"
    },
    {
      "title": "北海道苫小牧市 苫小牧市丸山でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPSThiUjd6YUdRbmlNb20yVm5aVm1XbjB0NWFlWFlzd2NVeXoxa0hPMU5rNm9zcmZCR1JFLWxmUldNM3l0VzNrbXJXYi0tTzVaOTBUUzJabm9ETmZDWHc0WWFJcU5NQU5tTGEyWEo0cUJ6dHp0QXFWX2hhWjl1Z1ZSYmFNRmxER1N3Z1k5OEFQdFJNZHlETUF6X1FrNmrSAaIBQVVfeXFMTjMzVHdvQW1faDF4UXF4RUVienJrRlBxdDR1MTd1Zk5zT0pXYTFVcjU1VTk1SEhaNXdyN1hpcVN5NDFpS0RCVm1tcTBYYldfNlV6MTJtenhtLVMwSjZWVmxENmlaeUxkWUF3aEtOTE15aTBHaVVWd2dMQnpIS1ZaNDByWElNZDYyaTY0RzNDcWM4VWd5MUt5TTlSU3NadTIxaC1n?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県那須町 湯本でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQQk96Z2hMRzFlS2UtQVgyNFFkQVhVSmRSWHdwbHR1ckVKUHVLMDVwb3R1aXJadEFHb0NjSDN1dFdub05vamZiOVNRVl82bTlNeDJiTVd5RTJ4alY5cjBLeWVtZlZCNUQ4S25ZSllnNDRna3Fvbi1Wa1R5T3U5NW9HVkhRRnRwYXBhY3YwTFV2Q21RdE51OTB6eUU5RzBZckxXWHBBLWVEVXl6Z3VMcmVQN2FnZ1QtVXBOUDJLcHhuWGJQdTd6cDlzeTduaVhBMHBLMlJsazBjUTBCTXo0QV9TNHJ0a1AzaTlxaURmNXpDMjNIZ9IBogFBVV95cUxPSEp0Rl9mWWRmZk1CNDBMYlZmTFAyZ19uOXZhaXpBaXpOU1RCYU42WmJjcEpxOC1GTjU5Y19IQ0NqM2JheXd5TGl4RVdHRlRTbW5ZdUxsRXFzdzc5TVJaMzJFdDlaZUd2S1J5QW9qU1JGR0JVUE96M2NHYTJxTm5jZDRWOUNWWG5yblhSQ1BCYVY2a0xCcUd6eWVXQlI3NGRkb0E?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県渋川市 伊香保町伊香保でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWlV5dk11S1ozSjJkaWlhOGZPOGZyRlc5dEtMb09VY2NiNFVpbHdfQW5nWjF2MkN3WnhvcnpFZXR3elFfanVscUt5cUNmaHZXdmVhdjE0RVFKb3YzaGRqOGFxdGdieHVHX29Bc2xKYmlhLWxsc3dXYWR1dHdaNU1YWmVKb2FBUmsyVmVSb3VqSVN0UXdERVRaT3pHRXTSAaIBQVVfeXFMT05LMjNMMFhDRGl4dVRBM2pZRmtDSklBdFZtRnhBVUhCRzY1NzRvMkVZa0NuR3VKTkJteWJ5UndGemx2MjNjVVFTcC1nZXVVNGYxVE1GRzBybzJITXpNMU1kb2hsQVozc3V4TzN4LWpnRmNRUENpeE41NFZlcEhtaERac2VCdU9JQXJWc3QwT3lOZ2M1MDhVWmtwSnBFZFVhbVpR?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県長野原町 北軽井沢栗平でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSUg1VmFOYXYyQTk1SVRyZ0pFdHB6MzBBODlObjYyTlExRy1RWkU4eTdSYl8tODRhMDJwUFB5OFFxQk1naEM3aDg5OTQ5TGptdWJnblBjM3BsOVZGX0tNZm9GcVpXT19COEZkMG03d3RfNHhQZHRieW8xRzh6ZDRrRWlYbWFwUzFfZU1YUHJFOHNNOGdwdWdJNEFKYV_SAaIBQVVfeXFMUENhYXNVSkdQNnJlR1NTNWtZVTNSN0JHV1BKdWxQeC1jOTFpZlJMU1lDLTJGSXRDZGVzZGUyS0M5STZHa1V6SG1XR2NxdVpGejQtSy1uODM4SlRhZ0ZMZzRTSE40QUUwZEhZVHFmQjdjRHp1SzdyVHdLY09PaS00RkNwOVdDY0Y2NjNXbThBeDRCOXlBRXdENlVEX196Z3ROcVJR?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県妙高市 宿泊施設付近でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBaTy1mVUwtMGNmdmZXSThGanh4dzNGXy1nd2pRRnNNVFlNTFBxQVV3aHNNT3VxQXVDTXZYOHB4X25MTHp5?oc=5",
      "site": "news"
    },
    {
      "title": "長野県松本市 蟻ケ崎でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxNRzE2WWdieUNhTmdtTUxWZ0RWQlR6NVc3cG14QWFKQ0tOZVEtVHZQT005VVNvZW4zWmFINzZsN1NSM2Y5OGFUX1ctV1FhRDZpUnFPeFA1WGlVWVIyUVZwNGJ2WTlNU09KOG9IaTJSQlJkSDFmaVpqcUl0MVJTdGtNWnA0MWEzc09CTXNvaGtBb1RuRWlkNjBjb3JfSXVQRmZLdHBFeTRIb2tZczd2bHBZZzdNWUV5NmdZa2x5ZFZsbW9EcUR4Wk1OSHJfY09fSGFiUE1BRkk3RU9lOGYzWGFYUEttWEJsYkxCbEFORVM2QWFVd9IBogFBVV95cUxPUjJka1R3MnVxcmpnZkE5U09SWEl4Mm1WZGtKT3F6ckFEdGo4TlVLS29KY3BnWC02N2VpY19sanNlZUxsSnhMTF9xWEVqckFBanQwVk83ZUpKRVNNOWNZZzhZQmRJNXdyUlJ2Zk9qd255bnRaS2t3QUhNZXZUUnVWaWV3QVNndlVTMlFoWFl1SHNWbk90dWdNMWF6U1l6bHpQRVE?oc=5",
      "site": "news"
    },
    {
      "title": "島根県浜田市 親子とみられるクマ3頭の目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOTEpUMHk1N3E4UTkzdUhLSFdJSFByelY2YmRqbEN2RnBYTGlCRFZlZTJ3dldIdEJQM1U0d0dVZmcwdkZsaHA0VmpFamduYWFIOXNCb1YzMzVIUkMxRUhuMGhsdkxOekhXdk9YMW1GN0loSnVaakIyYmp0cXgyWVVfY19JUWJjSGMy0gGIAUFVX3lxTE5MSlQweTU3cThROTN1SEtIV0lIUHJ6VjZiZGpsQ3ZGcFhMaUJEVmVlMnd2V0h0QlAzVTR3R1VmZzB2RmxocDRWakVqZ25hYUg5c0JvVjMzNUhSQzFFSG4waGx2TE56SFd2T1gxbUY3SWhKdVpqQjJianRxeDJZVV9jX0lRYmNIYzI?oc=5",
      "site": "news"
    },
    {
      "title": "山口県萩市 萩市椿の県道でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBOeEdCLTN1RXl0LWZ6cU1HemtXT3ZTS24wZ0FacUVmQk5jTUNINHd1d0hTM1FIZzNPWC1qdEQzNXhsSHNOVUVNUkdPNlNSSm1SUy0tdWd0MEhqWm11Rk1GNGM3dFI3dkszakE?oc=5",
      "site": "news"
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
        <span>対象期間: 2026年7月15日</span>
        <span>·</span>
        <span>公開: 2026-07-16</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <p>2026年7月15日、KumaWatchが収集した国内のクマ出没関連情報は181件に達した。人身被害に関するキーワードを含む報告は0件であった。地域別では、秋田県(32件)、岩手県(31件)をはじめとする東北地方に出没が集中する一方、全国的に人口集中地区への接近が顕著となった。本レポートでは、当日の出没状況を分析し、リスク評価を行う。</p>
      <h2>主要事案：捕獲および都市部への出没</h2>
      <p>当日は人身被害の報告はなかったものの、人間との物理的な接触に至る事案や、市街地への出没が複数確認された。岩手県雫石町では、住宅に設置されたわなにクマ1頭がかかり、捕獲される事案が発生した（※1）。これは、クマが家屋敷まで接近している実態を示す重要な事例である。</p>
      <p>また、「都市部キーワード」に一致する事案が6件報告されており、人口集中地区での活動が目立った。特に宮城県仙台市では、宮城野区原町（※2）や泉区明通（※3）といった市街地での出没が確認された。秋田県秋田市においても、寺内蛭根3丁目（※4）という住宅地での出没情報が寄せられている。さらに、秋田県大潟村では村の中心部で目撃が相次いでおり（※5）、地域住民の生活圏内でクマの活動が常態化しつつある可能性が懸念される。</p>
      <h2>地域別動向</h2>
      <h3>東北地方：出没が集中し、多様な事案が発生</h3>
      <p>当日の出没件数は東北地方が突出しており、秋田県(32件)、岩手県(31件)、福島県(12件)、青森県(9件)、宮城県(7件)と、地域全体で極めて活発な状況が続いている。岩手県雫石町での捕獲事案に加え、秋田県北秋田市の国道ではトラックとクマが衝突する事故も発生した（※6）。また、宮城県富谷市（※7）や山形県鶴岡市（※8）では中学校の近くで目撃されるなど、若年層の生活圏への接近も報告されており、極めて注意を要する状況である。福島県福島市ではナシ畑での目撃情報があり（※9）、農作物への食害リスクも示唆される。</p>
      <h3>北海道：広範囲での出没</h3>
      <p>北海道では15件の出没が報告された。標茶町や厚岸町といった道東から、初山別村（道北）、今金町（道南）まで、広範囲にわたって目撃されている。特に苫小牧市丸山での出没（※10）は、比較的規模の大きい都市の近郊での事案であり、今後の動向を注視する必要がある。</p>
      <h3>関東・中部地方：観光地や市街地近郊での目撃</h3>
      <p>関東地方では栃木県で7件、群馬県でも複数の出没が確認された。栃木県那須町（※11）、群馬県渋川市伊香保（※12）や長野原町北軽井沢（※13）など、観光地や別荘地周辺での目撃が特徴的である。中部地方では新潟県が11件と多く、妙高市の宿泊施設付近でも目撃情報があった（※14）。長野県松本市蟻ケ崎（※15）など、市街地に隣接するエリアでの出没も見られ、人口圏への接近がうかがえる。その他、富山、石川、福井、静岡、岐阜、愛知の各県でも散発的な出没が報告された。</p>
      <h3>近畿・中国地方：活動の活発化を示す兆候</h3>
      <p>島根県では12件と、西日本では比較的多くの出没が報告された。浜田市では親子とみられる3頭が目撃されており（※16）、繁殖活動が順調であることを示唆している。山口県萩市では、県道や道路沿いののり面を移動するクマの目撃が複数報告され（※17）、道路周辺を行動経路として利用している可能性が考えられる。京都府、兵庫県、滋賀県、和歌山県でも山間部を中心に目撃情報が寄せられた。</p>
      <h2>リスク評価と今後の展望</h2>
      <p>7月15日の出没状況を分析した結果、人身被害こそ発生しなかったものの、リスクは依然として高いレベルにあると評価される。以下に要因をまとめる。</p>
      <ul>
        <li>季節要因：7月中旬は繁殖期が一段落し、クマが本格的に採食活動を開始する時期にあたる。特に若い個体は親離れして行動圏を広げるため、予期せぬ場所での出没が増加する傾向がある。全国的に目撃情報が多発している背景には、こうした生態的な要因が存在すると考えられる。</li>
        <li>餌資源との関係：福島市のナシ畑への出没事案（※9）に見られるように、人里の農作物がクマの誘引物となっている可能性がある。山中の餌資源が不足した場合、より積極的に人里へ接近することが予測され、農業被害の拡大と遭遇リスクの上昇が懸念される。</li>
        <li>人口圏への接近度：当日の最も顕著な特徴は、全国的な人口圏への接近である。「都市部」での6件の出没、学校や宿泊施設周辺での目撃多発は、クマの生息域と人間の生活圏の境界が極めて近接、あるいは重複していることを示している。これは、偶発的な人身事故のリスクを著しく高める要因であり、最大の警戒点である。</li>
      </ul>
      <p>総括として、当日の出没状況は、特に東北地方を中心とした高密度な分布と、全国的な市街地への侵入傾向が特徴であった。今後、夏から秋にかけてクマの採食活動はさらに活発化するため、自治体による注意喚起の徹底と、住民一人ひとりの予防策が不可欠である。</p>

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
          <dd>2026年7月15日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-16</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-16</dd>
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
