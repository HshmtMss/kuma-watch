// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月18日 / mode: daily-report / 生成日: 2026-07-19
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-18-daily-report";
const TITLE = "2026年7月18日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年7月18日、日本全国で128件のクマ出没が報告された。人身被害は確認されなかったが、秋田県で31件と突出して多く、神戸市や中野市など都市部での目撃も8件発生しており、人とクマの生活圏の接近が懸念される。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-19",
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
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
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
      "title": "宮城県富谷市、総合運動公園付近などでクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1UZmJRN1N2bC10blN2MnZSWFJNM0Z1d0xGS0JNWFpJalJZckxYb2g2LWJQMXJaelRpY3FPVDV1UGE1b0txTkljN25BNkpjSk1nQlVZeTVVRVZBbnYxRHRJQzZ4UVZiSF9oNEt5THVqdTdYSmpmZ3B6ZzlTUUg1UE0?oc=5",
      "site": "news"
    },
    {
      "title": "北海道根室市、JR別当賀駅近くの草地に2頭のクマ",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE01cjFHcS1TWGZPLUlwelVVcWtqcU53TGk5ay02S094OEJRdG5aS2tKVG9ZMTZOZEpyNGctWjcwOTVDMXNFMEQzUC12UHpYanZTdXpBMUVTZw?oc=5",
      "site": "news"
    },
    {
      "title": "福島県富岡町、中央1丁目の公園でクマ様動物目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1xMGl3VWNiM3lQOTZ6alB6NWJjNU1GVk5UQm5PeUVZUldpYkRDaGc4YjI5eUJ6S080OWIzTmdYMmFZaUFScnFMaFk5aGlpaVpVejhKSmN6NnFWYlV3VllBdVFHcWtfRXhyUHBrd3dYRkluUGhNMG9WQmdmWQ?oc=5",
      "site": "news"
    },
    {
      "title": "長野県中野市、保育園と駅の間で成獣1頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5tZ0x0SmM0enRhcHhSZHlXRFhrNjNBWkxQamJJSXRUelV5cndwRUx4WGNHdGdmV2VoYnQ3aUg1UWNpRUFnYW9pZnhhVHBNRUtWOU5RTWlkY0MxYUJhU04zenBhSm5VeFBuRzVheHZuOHZyZ3VzRzRtcGx4eFF0Vk0?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県神戸市、再びクマ出没、前回と同一個体か",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5pRDlwVDlZWW9HcWtBTXBuMzU2UzBINlNlTWxuLWhMX0gtRG9DcVVOT1lDdF91ZnVCNDZHLWtRYlRXSWVfNXBzN2dYNzRDWTlvLWpUY0FVeDJoNmZweHNVaXRmOHg?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県神戸市北区道場町におけるクマの確認",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE04aUZaMjlEZlRlNGRmYnViRVdTTld5UVJkYy1UZXpCT0VQVUloaFRYSUI1cnYyaWhBSGVsY1Y2aEdqMUU5aGhZWnY5Y0pDWUdneWxNMU5zaTdIeHZNMFRJUGpB?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県長岡市栃尾地域で子クマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTE56b2ZBTmJTVXpVM1YxYmtMUE9BQk9vc2JHYS1NMXloaHJJZEFpeGNNY0o0dGFXZ0RWVmpFcFZFN1VFQmJV?oc=5",
      "site": "news"
    },
    {
      "title": "滋賀県大津市、琵琶湖近くの別荘地で子グマ目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1iNTFOWjcyR1RKVFJ3VGp0SGRPRVF0MHdabkkzbEZVRmNEZnVPS0Z3M05XbUMyVEZkOWhqX2xUOGltWVp1aS11UmJSaWhyeGY5RGw3LUpLOTA2ZktCY2tCZ0pHMjBMLVhZUjUtU2hRWkw3SW0yeHI4MnIyaw?oc=5",
      "site": "news"
    },
    {
      "title": "島根県益田市、集会所付近でクマ2頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE8tY0dBWjFUbzhTWjRZU3BFOV9zV1lCbXNpVjljRXRSTFlONEFKb3ZzeTdnckRmNHZMUHFVMmNtQmR1ZXpEaWVWTDk2SXdwdHhaS0ZuNnhadEhXdVVBbnZuMWFXYXZBMnB3ZjAwSGhTeUU2TUtYUFhTVUFqeFVVLXc?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県花巻市、花巻農業高校付近で1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE55QTM2YUtmSTlRX29oVWgyNVpwa1h0RlIxZF9Ea3gzQzliOE42WWw0U1JaOFQzemNqS1ZYNDFFNlV6SkZkSE5Qa2VOWkRWN1JEaDMweDY0NlIxNWdob3pCeUtYS3FJSVNlVERFMXVsYmJOTDZDZGo0b3dkbWPSAYIBQVVfeXFMT2VLZkdkeXdHS3Bybkw1Y3g0MUVkXzhCam8wNk1ycU9tellBVWJsU3Q5bnpBVF9XRFhnbUFGOEdzTTJQYXo3TmJ2dV9tUUowR2Jkc09hRm5PSlNSNVRiaFVsamNrRzZfcTVPYkRnbVlpa2hnZTE1QVpZNDB5SDRYU0I0QQ?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市将軍野中敷地にクマ、生徒が目撃",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE1mam00bUdPYzhqWWJrVUNlRVVUSE03dlhpMVRSRVpEbTlnZHA1YUpQS1dLWXktWTdjaWk4ZDgwV2cyZ1h1ZW16bEpENVRud2R3UFlKTTJOTHk5UUhLaW43N3Nn?oc=5",
      "site": "news"
    },
    {
      "title": "福島県福島市、国道115号道路脇でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1icmZ5Y1JsX0VUREJfOFhLb1Q1Nnc1WWxCS2hNaE45NmRTRkZaenBrYndZSXZxTjBmWFN3LUVJTlRfeXU4SlZQdTAzajhpMDduV0doQzNMZE9qbWh0UHBBNnJzN1ZHczZkV1RVU2hjbWxGa0pyaDY2WXlNY9IBgAFBVV95cUxQOWQ2WXlWNjBna29KMnhBbVhOaUcxUkZFN1loSGdjaG1UUUdFakhqU2ZqZC1jZ1paM1N5eVhlYm1yb2VMa0ZfV3JVdFdfV2oyUmdsYlNNa21JZm5faHFsZmJ5SG5iMDRZcEJ2eUtkc3lxSFRnU0dxT2E5Y1lFSmVzVw?oc=5",
      "site": "news"
    },
    {
      "title": "山口県山口市で体長約1メートルのクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBCLTdVay1kNzNWT0RIbHhWRXAwRGdOV0pldE5tYm11X2ZVZEJDaTdNVE9IX3RuVFdVVzlBdUZ0bXhyTjZEWXdYckV6YUVvazVqc2w0a0laMUJwdWpPODV1S0wyd3l2REV0c2g1UUtBZHFWeXltUVYwNzVUcmUzekE?oc=5",
      "site": "news"
    },
    {
      "title": "山口県周南市内で体長約1mのクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE16ODJYUDhJOFNaRExMajBZYzdTSEJ5aVVCQ1pPa2Nhd0U4S3g4S2RFNmkxcmJHT2YxQ0JGUG5QNVI4dkFwNjh4cFVYMEJ4QQ?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県日光市、河川でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE40ZEZtQkphSnljU3lWRjNVNDVDZjJSVDhMNmQ5RVVLel9DRlp6VDNmM1d4bjkzT3M1X0p6VWJTWndETTZaSU9aendyOA?oc=5",
      "site": "news"
    },
    {
      "title": "京都府京丹後市峰山町内記でクマが出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNWklEaGFCU1pXNm9sRnM1Yk9QVDBVR2txbDBwbFRELXFKSndoNXdxWkxBNTJRdkRqdXRobzhsRDBCX3hHVVNoakZ1LWdBa1hxMlFzNWhPRmNMMUlhNXRtSzNVdzBoeTVieTVyT2NjTERNbWkyelZOVDdMNmpKZ2dCd2JBX29JWUxhMURLbFJaNGdZWlZ5X2twR1JaTkrSAaIBQVVfeXFMTmJ3Q1A1ZFFjb2FyVHJyMFdZUWkzYy14dHR6SUhBUzczNFBsRHc4WWZfT29NM2VSdF9SMHFZazJOZ2JpbGVTSWk5cjY4RTVkWGlSZGdQajYxb3RqMHA5MlJOaHgtdkhkWUZMYmZOU3dSTmdpZ1JXQTdLS3FjaDFBMTZzVF9KbjNPVmdGV1BwTkNtUmQtNUt5UVIyUEpOYkRXeXhB?oc=5",
      "site": "news"
    },
    {
      "title": "滋賀県大津市、琵琶湖近くの宿泊施設で子グマ目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOV3NuMDdpUC1mM3dneE1nc2dSYUlYTlhlcGlOd1RrQk4zcHd2MlRCZUVqaE9CbHNCQThSYzhObXo0YVg4ZTdsNnJVdEtrV3ctMkloQUNVejdrbVBaUmhEUmFDOFA3Qk5KZFlsbzViQkR1LXpTU3d4b2hwVHM5YWxJUGIwdHJPZWFXdVA4TG9n?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県鹿角市、花輪柴内大久保でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQQmR6WE9BWUdYenZUTjZwWlpJOHF4bklRV2t3UDBaOUs5SnpDb2U1b1FTQkF4ZHJPaFpKZTJXRkl4dFgzZVNfSTNnUGh1VlcwUV9zWGduODhpUkc5YnJSTi1xWnB5MEJyYmtVV1JieXpCSjk3Qy1aOC1LMnZXXzVJcFFXeC1rOEhXc2NpQ1lBaGlnYTBGYTdUc2YwQVk2QnFIUENhMDhidUZkRW5Oekx6ek5pVEIxempWcmZDTG9CU0tuVExzSFZuWTc3bi1mLTl3V2JFNTBuaTBTUlIxMzZOQldTMHpPZXZ2UHBRTVd6SnJ0d9IBogFBVV95cUxOQVdMVUtjXzRRclI3cnN6bTJTSWt1OEV3SzEySGtBTnpTNUktcndsdm9aTUh6b3B2M1BhSURKemtHbGhZMlpkWEJGUzNiT3dOd3NVSzB4REdnQnBDdnpnM2Joa1pvUTMwdDQyTkdZNEJJcVkyQ3ZBeE9ZUWJLTGhMSU5MQ3QtQVpXQjVhcldhSThlNktSUG1nTGQtN2FVRDJUSXc?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県丹波市青垣町遠坂でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcTZ0TDZhU1NjTDBoRmRqb2dJOHNicDVvQUZTTGhoY240LVNabzZzN0VheXh6OFFOUXQ5VXZTVTZJbkVPUDJ3WHZYenBVU3ZwY0xIOEVDTEJ1amdYejFOMU16YlU2S1VoWEh2djdua2hBQjVmNi1STEZId0JBUG1FNlpmME1YYThFa0FfX3FTbVhTTFRfVGFWQUFCY0XSAaIBQVVfeXFMTVdjTUNxRjF4XzlWXy1ydi1qZ0xzWGh6RzBxdUxBQXhPbXl0VGNMeFp3NHhSX0MwaFV3NG1HdGdRUUtnaUZhQ2lVUXkzUERhLWdsa1VQeFR2SEhRdmZqbzlrQWp0Z3c3Q0J5aFgwYkZVMjVmSjhLSlNjMXVDdThiM25wWUE1Y1l0eUtDdmpBYmliM3RvQ1VENWZOa05kZUFNem9R?oc=5",
      "site": "news"
    },
    {
      "title": "北海道別海町、西春別でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPRERYZlpGZzZLa3dYNEJhWHJUMkFzaEpWZGlxTzdmV1dJTjAzOVlUdy1UOUxGWlliUVplNFZvb3pqUGs2eXhhb1piaXFLa3hoTW9XTzBCTEQ3WngyUnN0ZENyRGF3ZTRENVhZNkVQeUVGbHFVR1VETjBCMTd5bzFwTVJTNXU3WTR3emVDcmMxQ3pIVGhUcUJ6MXQzRDlBeW5SV2tYc1RJemZZcndzcVRwLUFfNW5pdWNaU3d0bEFjRTgySHZVOV9yU3VjZEpEbFpiNHJnU3ZEWWhQRG1NSUNpMGVPUmNaRXJUNlU4WWR6aG5ud9IBogFBVV95cUxONmJNZl9sYVpzRTd1dEtocHZnNFJscmxTUDdDMUpzbW9zdkFXU1FKbk42U3VQYkp3SVlpVWlHT0NtN1RibkhFREF2VzlEWDk1UXoxeHdETzdHejZHLWpuTnpVeXpqOENaSldRRXlWSnNNejRHSlI4Y3l3ZHdubzhTeDNhYWVEeHRKRC05WHpjRTJhaHYzcTlnTWhoNks1U09Wa2c?oc=5",
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
        <span>対象期間: 2026年7月18日</span>
        <span>·</span>
        <span>公開: 2026-07-19</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":31},{"pref":"福島県","count":12},{"pref":"岩手県","count":12},{"pref":"兵庫県","count":11},{"pref":"北海道","count":11},{"pref":"山口県","count":10},{"pref":"滋賀県","count":9},{"pref":"新潟県","count":6},{"pref":"宮城県","count":6},{"pref":"長野県","count":5},{"pref":"富山県","count":4},{"pref":"青森県","count":4},{"pref":"島根県","count":3},{"pref":"和歌山県","count":3},{"pref":"山形県","count":2},{"pref":"岐阜県","count":2},{"pref":"栃木県","count":2},{"pref":"群馬県","count":2},{"pref":"三重県","count":1},{"pref":"京都府","count":1}]}
        total={137}
        periodLabel={"2026年7月18日"}
      />

      <p>2026年7月18日、KumaWatchが収集したデータによると、国内におけるクマの出没件数は128件に達した。これらの情報は、主に報道機関からの122件の情報を基に集計されたものであり、自治体などからの公式情報は6件含まれる。当日、人身被害や銃による捕獲に至った事案は報告されていない。しかし、都市部やその周辺での目撃が8件確認されており、人間とクマの活動域が重複している状況が浮き彫りとなった。</p>
      <h2>主要事案：都市部・生活圏への出没</h2>
      <p>人身被害はなかったものの、市民の生活圏内での目撃が複数報告されたことは、当日の最も注目すべき傾向である。長野県中野市では、保育園と駅の間という、子供や通勤・通学者が利用する生活動線上で成獣が目撃された（※4）。福島県富岡町では、町の中心部である中央1丁目の公園でクマ様の動物が目撃され（※3）、複数の報道がなされている。宮城県富谷市の総合運動公園付近（※1）や兵庫県神戸市北区（※6）など、大都市近郊での出没も確認された。特に神戸市の個体は、以前出没した個体と同一である可能性も示唆されている（※5）。また、滋賀県大津市では琵琶湖近くの別荘地や宿泊施設で子グマが目撃されており（※8, ※17）、観光客や滞在者との遭遇リスクが懸念される事態となっている。</p>
      <h2>地域別の出没傾向</h2>
      <h3>北海道地方</h3>
      <p>北海道では9件の出没が報告された。根室市のJR別当賀駅近くで2頭が目撃される（※2）など、交通インフラ付近での確認も含まれている。その他、別海町や夕張市など、広範囲で活動が確認された（※20）。</p>
      <h3>東北地方</h3>
      <p>東北地方は全国で最も出没が集中した地域であり、秋田県が31件と突出して多く、次いで岩手県11件、福島県10件、宮城県6件と続いている。秋田県秋田市の市街地では、生徒がクマを目撃する事案が発生し（※11）、教育施設周辺の安全確保が課題となっている。岩手県花巻市でも、農業高校付近で目撃情報があった（※10）。福島県では富岡町の公園での目撃に加え、福島市の国道115号線沿いでも確認されている（※12）。東北地方全体で、クマの活動が極めて活発な状態にあることが示された。</p>
      <h3>関東地方</h3>
      <p>関東地方では、栃木県那須町や日光市の河川（※15）、群馬県みどり市や下仁田町など、主に山間部での出没が報告された。件数は他の地域に比べて限定的であった。</p>
      <h3>中部地方</h3>
      <p>中部地方では、新潟県と長野県で各5件が報告された。長野県中野市の駅と保育園の間の目撃は、この地域における最も警戒レベルの高い事案である。新潟県長岡市では子グマが目撃されており（※7）、母グマが近くにいる可能性も考慮する必要がある。富山県、岐阜県でも出没が確認されている。</p>
      <h3>関西地方</h3>
      <p>関西地方では、兵庫県で10件、滋賀県で9件と目撃が多発した。特に兵庫県神戸市での出没は、都市部における深刻なリスクを示している。丹波市でも出没が報告された（※19）。滋賀県大津市の別荘地での子グマの目撃は、レジャー活動中の不意の遭遇につながる危険性がある。京都府京丹後市でも目撃情報があった（※16）。</p>
      <h3>中国地方</h3>
      <p>中国地方では、山口県で10件の出没が報告され、山口市や周南市の市内で体長約1メートルの個体が目撃されるなど（※13, ※14）、都市部への侵入が確認された。島根県益田市では、集会所の近くで2頭が目撃されており（※9）、地域住民の生活圏に接近している。</p>
      <h3>四国・九州地方</h3>
      <p>当日の集計データにおいて、四国および九州地方での出没報告は確認されなかった。</p>
      <h2>リスク評価</h2>
      <p>2026年7月18日の出没状況は、直接的な人身被害こそ発生しなかったものの、全国的に見て人とクマの遭遇リスクが非常に高い一日であったと評価できる。以下の3つの観点からリスクを分析する。</p>
      <ul>
        <li>季節的要因：7月中旬はクマの繁殖期にあたり、雄の行動圏が拡大する。また、前年に生まれた若グマが親離れし、経験不足から人里へ迷い込む可能性が高まる時期である。</li>
        <li>餌資源との関係：山中の餌資源の状況はデータからは不明だが、子グマを伴う個体（滋賀県大津市）や都市公園への出没（福島県富岡町など）は、自然環境内の食料不足、あるいは人為的発生源（生ゴミ、農作物など）への誘引の可能性を示唆する。</li>
        <li>人口圏への接近：本日の事案では、都市部での目撃が8件と報告され、公園、駅周辺、住宅地、宿泊施設など、市民の生活空間での目撃が際立った。これは、人とクマの生息域の境界が曖昧になっていることを示しており、偶発的な遭遇による事故のリスクが高まっている状態と評価できる。</li>
      </ul>
      <p>総じて、2026年7月18日は、直接的な被害こそ発生しなかったものの、全国的にクマの活動が活発であり、特に出没件数が集中した東北地方や、都市部での目撃が相次いだ関西・中国地方では、住民への注意喚起と、自治体によるパトロールや追い払い体制の強化が急務である。</p>

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
          <dd>2026年7月18日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-19</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-19</dd>
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
