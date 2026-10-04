// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年10月3日 / mode: daily-report / 生成日: 2026-10-04
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-10-03-daily-report";
const TITLE = "2026年10月3日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年10月3日は全国で計57件のクマ出没が記録された。和歌山県の世界遺産・高野山に続く登山道において登山客がクマに襲われ軽傷を負う人身被害が確認されたほか、愛知県豊田市では住宅地でのクマ棚形成や敷地侵入が確認されるなど、観光地や生活圏での軋轢が顕著となっている。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-10-04",
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
  datePublished: "2026-10-04",
  dateModified: "2026-10-04",
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
      "title": "クマに襲われ男性けが",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9xSmpQallmMTZOV3Zadmc5R3RqbHAxU3o5Q2lDSDhwbkV2WTlMRUlSVXFzREdGc29yVkZiMzRLWUFWRE84WUplbGM0X0xsXzlSZlQ2Z25VODFiOUh0OUpBalhra3A?oc=5",
      "site": "news"
    },
    {
      "title": "九度山でクマに襲われ観光客が軽傷、世界遺産・高野山に続く登山道に通行止め看板設置。高野町観光協会の担当者「複数人での登山やクマ鈴の携帯を呼びかけたい」 - 読売",
      "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1fam5ncmU4dmVNZ0Y2bnFTTzY5dW5TMmxOcHVxdExRWEU3TEZFZmJUdVU0SDNRLTRSX0VRUFZuaHdkV0VEUHVhcEZ0clVoX2EzRktrQW54VUxUdlJwVS0xcHZxbjhfbHcyZWFuS19GeDF4RFdL?oc=5",
      "site": "読売新聞"
    },
    {
      "title": "住宅にツキノワグマ 近隣では「クマ棚」確認も 愛知・豊田市（中京テレビＮＥＷＳ） - Yahoo!ニュース",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBZZ1A3cEYtSk9vdF9nLTVpanIwTXZ1ckkyWG5tajRWbnBFdTdkWi1DbjkxSTZDQjBGRGhJUUhtMVVOeHdQQkV1TXlSZDRLbUR6cG5Hcko4czJvSTV5d2IwYkNvNmRCeWh2bVh3a3pGT2lwYkpqY0dhdkFVY0hQWEE?oc=5",
      "site": "Yahoo!ニュース"
    },
    {
      "title": "（群馬）安中市松井田町松井田でクマ出没　１０月３日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOGxTODBhNnZCU3ZZbElJalFCc3hvYUV6NE1iTHpJbmJoWXc1Wm94bkNsZDQxZmMxelpBakFnS2l2YTUtbW1kRDdJYS01WGpHYU9Lc0xOb2Q5dXR0SE0tZlBYSlYxN3JBaDItaEI0NnQyelJSTTBTZFZhNTBEdmhFTEtnb25aam1DczZUNG14QmlRcVJ0ekctUWxKSljSAaIBQVVfeXFMTVFWMV83aEtObEJmU0l2WlFwSWUyOHIwM01qWDhDdTJraVpXeGIxZW5oU1lETU56V3NHWXN5Rng5eS1TQXdDdmFOamJrbEdJZF9aUkplY2g3UTJMTlVyZTJpeXZmRkVHaEZneS1IOFRZd0JkaTNCbmtCUS1qYjJVdU5pejI4VU5OTmVsdmRQeDZaNUd6Qm5JU3pXUlNTQU5rNWNB?oc=5",
      "site": "ｄメニューニュース"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZzExRGtlS2V4bFFJcVZJd2xYR3VjbUtXcHJDam1WanU1S184RVJMeVJVNDNwdDdIVWk1SExrQVhRbVRnUk52MUtGTTdRN0E3RVlGcmhVamlBVXY0Vl9NQ0o4RUtodWdQX0ZHdE92SS13NXZpaDRzYk9JTU1URlh5cWlmNFlnT0xvSnpja3dMWG84WGxfZ3lZbUQ4VGjSAaIBQVVfeXFMTjBMVEdiWXRVeENiSTNVYU5zcEtCVEs5cjROY1VQMDZEMXd2TjM4T3dwQlZLWTZlSUFKUjYwdGhSRkpQZkhBNkxJdFVaaFZnWlpEWmZxaHlOT0NvcEtzU0NBdmtyeW50Y3BqTEpLa3ZLV1lQQmF0eEpzaXFBc0daMXdKajByTk16ZjFYZ2J6MlpVWVJaSGIxemNRSzJVaHdyZ1pn?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNOE5uN0VtTTVVRUIwOHhmREtiN0tZU1lncVlRWUFBZWI4RUl4RkJNVnpOczR0NHlrdWU2ek04UkhLaXA0aVBmcGY1OFU0MjJLQ1h3NklqSGFORzBfdVBUR01acFdvQVlkZEhFRFNKZkpkaVJ1M2NHcDVERzhuSkJURTJ0dllNd2hxeXZXZUhNMUV2S2lkM2ZvT09FQWTSAaIBQVVfeXFMTlVaUi1nU3JzMzFwS2FnbmdtcWd0NVdTckZSNlpJWU5pTk5RdE96ZWNDdDZqSW1GSFRuc3dTQzlrVl9FV21RcnpScDAwYzExazQ3UUwxMkpnYnV6SnBiQXJ4bktDbndjSnhBbkJ1VkpHdjM0aTd0NUJkcmJZdUtYMTc3NGZ4X3VUdUplQzEya25vOV95WWU1LS13ei10UmlVQ1NR?oc=5",
      "site": "news"
    },
    {
      "title": "クマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOSlhlaDZxaEl2UU55VmVQaWczRjUzbC1KZk1HRFBnbS0xNHF2N2ctRVJGbmVoMEl4Zm1jVEM1X3pCZFFLQnRVSEFCalBCazRDNWFxOFBQeUh5cmJ3bzhjVFFVMUMzRE1RQU5leVA4UlZ3OVprR3dFOEZ0QnNUaTNPRkExdVBYOTYtU2xIeXdJU0QwN2t3NHJjcGRHZ3jSAaIBQVVfeXFMTkEzVnBTZWhZX0pBOFE1OUtpWWIyazU3ZkVfV1o3MVI3bndlaTRibFluVXozSy1pbkJQZUctZ013dVV5SUlPd3FONlJhUGhGZ3JlOUNJbV9vZFJaeVpPd2h2bDNPOG5QT3JzMmE4RTNvOFFoN09Kd3dTZjJ4RkFlaG5VT3ptd01yekhFRGxGbnQwU1pMTlVTTWVzbVBtS3l2RmhB?oc=5",
      "site": "news"
    },
    {
      "title": "（山口）下松市山田でクマ出没痕跡　１０月３日 - ｄメニューニュース",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQcndDM1FXRUF1TVRoV21uQVFxZDh0TTUxajJOMTBoNXk4T0pKZVh2d0piQzdkVlhjY1M1all1eVJQUkFZWXZmc2xJcGY4M0ZYWGtFYjNiZXFNNXV3dm1DenBQVGZTMWF3ejVTSEpTdWg0VEVGZGNuWDRHSGNzY1dyV3UwVWkzWWNnQ1dGTWdtajJrbTJ5a0FneHdlSW3SAaIBQVVfeXFMTlh3V1NETUhpNEZtLW5LZERGR19UQWpoSFBVMl82OWVEaEJ4OHBMb2d5WjJoQ2dVNjdyZUg4a2dCSnV3N1lSeWJnd0FWMllmY1VDT29KSVE4akxpZFljTUYzcjVvZ1dhUVRvNkdzZ1RxRGtfcmVSQ1ZXenltWjR4TmNJd1FUR3F5dXhTN3NtMkt4bHJMSzB4VklYaEZ6N2M4bEdB?oc=5",
      "site": "ｄメニューニュース"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":9},{"pref":"和歌山県","count":6},{"pref":"山口県","count":5},{"pref":"富山県","count":3},{"pref":"愛知県","count":3},{"pref":"京都府","count":3},{"pref":"兵庫県","count":3},{"pref":"群馬県","count":2},{"pref":"滋賀県","count":2},{"pref":"青森県","count":2},{"pref":"山形県","count":2},{"pref":"島根県","count":2},{"pref":"福島県","count":2},{"pref":"長野県","count":2},{"pref":"宮城県","count":2},{"pref":"広島県","count":1},{"pref":"福井県","count":1},{"pref":"岩手県","count":1},{"pref":"秋田県","count":1},{"pref":"東京都","count":1},{"pref":"三重県","count":1},{"pref":"石川県","count":1},{"pref":"埼玉県","count":1},{"pref":"新潟県","count":1}];

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
        <span>対象期間: 2026年10月3日</span>
        <span>·</span>
        <span>公開: 2026-10-04</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={57}
        periodLabel={"2026年10月3日"}
      />

      <h2>主要事案：登山道における人身被害および住宅敷地への侵入</h2>
      <p>本日確認された最重要事案は、和歌山県伊都郡九度山町および高野町にまたがる世界遺産・高野山へ続く登山道で発生した人身被害である。登山中の男性観光客がクマと遭遇して右腕を噛まれ、自ら110番通報して自力下山したものの軽傷を負った（※1）（※2）。これを受け、観光協会や関係行政機関は当該登山道に通行止め看板を設置し、複数人での登山やクマ鈴の携行徹底を呼びかける警戒措置を講じている（※2）。本州の著名な観光・参詣ルート上での受傷事例であり、秋季の行楽需要と野生動物の活動時間帯の重複による危険性が浮き彫りとなった。</p>
      <p>また、愛知県豊田市では住宅の敷地内にツキノワグマが出没し、近隣の樹木において採食痕である「クマ棚」が確認された（※3）。さらに同市乙ケ林町地内では民家の防犯カメラに個体が記録されるなど、定着的な採食活動が人家近接部で進行していることが裏付けられている。人身被害キーワード一致件数は2件、都市部キーワード一致件数は1件であり、捕獲や銃猟に至った事案の報告はない。</p>
      <h2>当日データ集計と出没の概況</h2>
      <p>収集されたデータ総件数は57件であり、情報ソースは報道由来が44件、自治体等のオープンデータ・通報由来が13件となっている。都道府県別では北海道の9件を筆頭に、人身被害が発生した和歌山県が6件、山口県が5件、富山県・愛知県・京都府・兵庫県が各3件と、全国的に広域分散している。主要事案の分布状況は下表の通りである。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市区町村 / 地点</th>
              <th className="px-3 py-2">事案内容・特徴</th>
              <th className="px-3 py-2">出所</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">関西</td><td className="px-3 py-2 text-xs">和歌山県</td><td className="px-3 py-2 text-xs">九度山町・高野町 / 登山道</td><td className="px-3 py-2 text-xs">観光客が右腕を噛まれ軽傷・登山道通行止め</td><td className="px-3 py-2 text-xs">報道（※1, ※2）</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">愛知県</td><td className="px-3 py-2 text-xs">豊田市 / 住宅・乙ケ林町</td><td className="px-3 py-2 text-xs">住宅敷地侵入・クマ棚確認・防犯カメラ撮影</td><td className="px-3 py-2 text-xs">報道（※3）/自治体</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">安中市 / 松井田町松井田</td><td className="px-3 py-2 text-xs">碓氷川付近で成獣1頭の目撃</td><td className="px-3 py-2 text-xs">報道（※4）/自治体</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">立山町 / 横江地内</td><td className="px-3 py-2 text-xs">子熊1頭の目撃情報</td><td className="px-3 py-2 text-xs">報道（※5）/自治体</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">下松市 / 山田</td><td className="px-3 py-2 text-xs">山林・人家周辺での足跡痕跡確認</td><td className="px-3 py-2 text-xs">報道（※8）/自治体</td></tr>
          </tbody>
        </table>
      </div>
      <h2>地域別出没動向</h2>
      <h3>北海道</h3>
      <p>北海道では最多となる9件の出没・痕跡が記録された。歌志内市上歌（※6）、弟子屈町屈斜路（※7）、根室市初田牛、千歳市上長都、愛別町愛山など、道北から道東、道央にかけて広範囲でヒグマの出没が報告されている。農地周辺や林縁部のみならず、市街地周縁への接近が各地で確認されている。</p>
      <h3>東北地方</h3>
      <p>東北地方では計8件の報告が寄せられた。青森県八戸市南郷島守で13時40分頃の目撃情報が得られたほか、岩手県宮古市日立浜町、秋田県大館市柄沢山王台、宮城県栗原市（鶯沢南郷柳沢・志波姫新大谷地）、山形県山形市（柏倉など）、福島県大玉村（玉井袖窪や道路・土手周辺）での出没が相次いだ。山間部の集落内道路や河川土手での目撃が中心である。</p>
      <h3>関東地方</h3>
      <p>関東地方では計4件の事案が確認された。群馬県安中市松井田町松井田では碓氷川付近の下町南信号から南約300メートルの地点で成獣1頭が目撃された（※4）。埼玉県秩父郡小鹿野町両神小森、東京都西多摩郡日の出町大久野の山麓集落においてもツキノワグマの出没が報じられている。</p>
      <h3>中部地方</h3>
      <p>中部地方では愛知県（3件）、富山県（3件）のほか、新潟県十日町市津池、石川県七尾市鵜浦町、福井県若狭町末野（18時55分に幼獣1頭目撃）、長野県坂城町（県道および坂城田町）、三重県熊野市の林道で目撃された。富山県立山町横江では幼獣が確認されたほか（※5）、射水市生源寺など平野部に近い地域への出没可能性が指摘されている。</p>
      <h3>関西地方</h3>
      <p>関西地方では和歌山県が6件と多発した。九度山町・高野町の登山道における人身被害（※1）（※2）に加え、広川町山本や由良町畑でも目撃された。兵庫県では養父市（餅耕地、八鹿町坂本）および香美町香住区余部で目撃があり、京都府では南丹市美山町下平屋、京丹後市（丹後町大山、久美浜町安養寺）で確認された。滋賀県でも大津市北比良および伊香立下龍華町で情報が記録されている。</p>
      <h3>中国地方</h3>
      <p>中国地方では山口県で5件の事案が集中的に報告された。岩国市美川町根笠、美和町北中山、および県道上で成獣が相次いで目撃され、下松市山田では足跡痕跡が確認されている（※8）。島根県雲南市では踏切付近で2頭の目撃や木次町寺領での出没があり、広島県大竹市栗谷町後原でも出没が確認された。</p>
      <h3>四国・九州地方</h3>
      <p>本報告期間中、四国地方および九州地方におけるクマの出没・痕跡情報は記録されていない。</p>
      <h2>リスク評価</h2>
      <p>10月上旬における出没傾向の要因として、秋季の採食活動活発化に伴う行動圏の拡大が挙げられる。愛知県豊田市で確認されたクマ棚や住宅敷地への立ち入りのように、堅果類などの餌資源を求めて樹木を利用し、生活圏の境界線まで誘引されている実態が示されている。また、富山県立山町や福井県若狭町では幼獣単独の目撃があり、親離れ直後の分散個体や母子連れ個体の潜在的リスクに留意する必要がある。</p>
      <p>特筆すべきは和歌山県高野山周辺の登山道で起きた人身事故である。観光・登山ルートと野生動物の活動域が交錯する地点では、突発的な遭遇が重傷事故に直結しやすい。人口圏接近度としては、平野部（富山県射水市）や鉄道踏切付近（島根県雲南市）、主要県道（山口県岩国市、長野県坂城町）での目撃が増加しており、早朝・薄暮時の通行や観光地での複数人行動、音響器具の携行といった基本的な忌避対応の徹底が求められる。</p>

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
          <dd>2026年10月3日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-10-04</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-10-04</dd>
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
