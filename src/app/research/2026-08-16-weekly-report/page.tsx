// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月9日〜2026年8月16日 / mode: weekly-report / 生成日: 2026-08-17
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-16-weekly-report";
const TITLE = "2026年8月9日〜2026年8月16日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年8月9日から16日の週、国内のクマ出没は771件と高水準で推移した。特に釣りやランニング中の人身被害が群馬・岐阜で発生したほか、仙台市の園芸店で従業員が負傷するなど、都市部や生活圏での出没が深刻化している。全国的に極めて高い警戒レベルが求められる状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-17",
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
  datePublished: "2026-08-17",
  dateModified: "2026-08-17",
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
      "title": "群馬県みどり市 山林内で釣り人がクマに襲われケガ",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1fSEhQeHV1dlJSa3hrcEc4Mmk2Y0VjT21LRnREQ2haazIwbzFtVFpSckZqMHMyVjVqR0h3czNEMTVzTEg5ZVc3UHAtN3dkNzdKSERQdlZVS0c?oc=5",
      "site": "news"
    },
    {
      "title": "群馬県みどり市 釣り中の男性がクマに襲われけが",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBMWUtJZnVLR0dRNk9nWkpCMGtqMFNDeHVnVGRvV09hYXFheG1BU0ROc2oxSGx0T2IteUNpVFRNQXNjVjhaQlhYbnRScko3UmZ0QjFwRXd1Z1BIeUhtYVFvUkt6Y1Fjd3Y4RTlzN2JBNA?oc=5",
      "site": "news"
    },
    {
      "title": "岐阜県高山市 ランニング中の男性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNcF9QcVJIcmdWZHA1c01FQnp5NG5pQkpuc0xUdjB6WU1HY1I5c3hDaWptcHVGanJPZ3luY0xURmNPbnFGRUxmZ210MHFIS0RiN2IxbVlMTXhSZWd1VlJFcGRjVE9lT3JoU1I2YUoya3EzdFBLSmpyU1diZnpaR3BKTHVGTlpFWGJiNExxWUNB?oc=5",
      "site": "news"
    },
    {
      "title": "岐阜県池田町 林道をランニング中の70代男性が襲われけが",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxNSzc2dDBuY3l4a1haOEZ5LS1KVmlPYnpTRjNzTmVsVU5QUEU0MWFGbGRtaHMydmRJWDMzampBRnZDUlE1R2RRZGFCeWRFOHRTTkM2Z2p2a3IwTDVFNWduZHZvNE8wYWREaGFsMzd2LWZ3dVUtdUpQZXVVUjZLeFc2eDFJVjJfRVXSAYwBQVVfeXFMT1BSRnpjV2FIS1VzdGI2WHVRYjE3bURjc3dTMmFEN1dBNndrWU4yYms3cWJqRzVVXzhpOGlmclh2YmFZR1A1Sllxa3ZYUFRHZGJfNFpqSDZ2TWZlQmJqQVp1M3h3VEtQekFvcUpLU0Q4NDQ5N1J3M1ZXQ05DVXdfTVJZcE1nTzF3dng5d2U?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県仙台市 園芸用品店でクマに襲われ従業員負傷",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9IYzl0OVZsRFZyX3lkeUlnRFUwc3doUlJmOE5ZajlENFRXOVJvMVRkcVRFY2cxX3hqa1dmVHUzQ0t5ZFZRdjNHRUFvRzI3XzRUNmMzUkstUk4?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県仙台市 大型園芸店で従業員が熊に襲われけが",
      "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQS2MwN1laM1hjQl8xUjh1LUpBMmhwWERPS1VRNFFNVW5Nb3hsS2VMSnpQU1d6UTFXSG4teGJDb1JPb2Nmckk3RGpIbWZPb1RoRFRuODBjVEwweDRHNmlra3Q4UVVUVnN2SW5PcUtNejYwWFFuT3M2T05nZmZuZ1VOSmNiVkjSAYoBQVVfeXFMTWJLMmN3LUFZOV9lOHMzVnc5cWU3Z1VkMnNRS2tTLUZPNHJPMTU1LUw5aXZsSEVlR2hKTFdsQkU5UEVnTVFGQWFnMjFfb3VVbVFzbmJtOGVrSXBGdnptdnY1OEQ1bU9yYkU5ejRkVnBuaHZhV3JMUzFXWHRNVDNjY05vbFphUlhFS3Z3?oc=5",
      "site": "news"
    },
    {
      "title": "山形県酒田市 市街地でクマ目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5jMmNUMUFIUUZMZndWQnNaY256WkQ0eGk4VlNJWm51RUtDR3NodVJPSDhlUW14RTgyWjBjV0p6VHRSV2lrMVpldmZVSkRYVnNyWGRoUURNUjhOczgxTmlWWTlOd09kVXg0X1loYTJ1UdIBdEFVX3lxTE9MendHTDZJNnRWdlZ0ak1NUDl0YWJHOEVfSVNRX3BwRGJmZUxwaTZFR2I0Um5qRmdIVVdwak85d0ZMMk1lbXVpNE1RQ0JhQ0V3Q002VjFpb0gtQTF3Ukh2RTFteHVnTkppM09hNG5iaUtZT0VP?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県上越市 住宅密集地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE81UXVjeDBmb0JBbXA5azdoSmEzbml6bDJGb2xtTHFoaThlRFJkN1MxbUZxbl9wVGFVM0pSLVllSFFJQ3FsNW5BZDZCb0F5dXdMRVZiREhSNDRJVm5NYTZ3?oc=5",
      "site": "news"
    },
    {
      "title": "山口県萩市 住宅屋根に体長1.5mのクマ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1GdmZPUXRTQlNUWHoyYy1SbDVDR2JkNUVoNkw5dll5NDV4UmdZQm10RHA4SFJwcWtEY25raDhmc2d2b2QzVzJCYXNLTDhuSmp6RUEyZkxkUTQzX2dmLTJRQnhqWEplSmNJZmVFalNaekt4cE1aNWF6d2h6RF9EdlE?oc=5",
      "site": "news"
    },
    {
      "title": "北海道八雲町 牧場のヤギを襲撃、クマを発見",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE03U2tyV19Nb0ROZXotNjFIMFRBYnBHMElWSUdSUjBNcWZhQ3ptUUtrc0g3dmx2cTlhYk9VX05lOEs3UHhDNEkwMzRXSkVRNE9EZmxEUGxNd0N0UmJZTlBrZFZZUkpoN1E5dlFoRG1OTWY4YUNMMm81SEdYcFY3b3M?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県日光市 100kg超のクマを住人が自ら刃物で駆除",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1jamp6SVVrS004WUlsNlQ1b005UXNiWHBueC10Wjd1dFBmNFpYZWxqM2laSW1xWFB5eVdSdVdVVG5EMnZDa0M0ZFdHNnFwVkxxWXdFaVU5elRfRmc?oc=5",
      "site": "news"
    },
    {
      "title": "京都府宮津市 天橋立付近にクマ、麻酔銃で捕獲",
      "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQTEhxR2Ezd1VhQnlXX1R6YmRmOTlVV3Z4WFIxMkhicHczVUdRYWw4SldTSDBTY2ZrMXc0MlJBdkZhZHEwMzd6WlFNd0Fod25aNUlocGZvdlh2RkpRT1lEZjR5WmpRRW1ISmsxMlVvWFpqY1ZDN3UyeE5zVnVNekZhRWxjMlhPeFhEYjVaTTB4aTNFZmt1bzhtRjRvSWJHZEdUSW1kam5ra0tTTVNMV2JKN3VB?oc=5",
      "site": "news"
    },
    {
      "title": "広島県広島市 安佐南区沼田町でクマ捕獲処分",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9DYmxFZGh2R3UycjNfa01tdU5wNlZEanluMDNFc0xucGRPYVUwREl4LXBNR25lVnpFU0pGTmZCUDNSZlp6N09ZaHJyMzZORVZuSXJDWV9sTnlOQkk?oc=5",
      "site": "news"
    },
    {
      "title": "福島県福島市 住宅敷地内でクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5WYW13OWY3RklXWVphWmVtUXFGRHZaeHN1M3NQMjNKS3NXMnJIcENKNUpNdnRtdVhncVU0N25ic1lIUzhwTURXaDlxaTl3OHRvMzBqZjNva2cxU3BEZWFzTjRoWkVGd3UzbVBhd193UdIBdEFVX3lxTE1vNmJFNE1kUjFxdkJ4eTJlcjJYNmxPQWFUZVE2M2tEMV9oZWJ1aWs5b29mODhhZ3diTTRFVmpwaTl2WUJJcEFjTGFRcVpRRGVGNVJFbVJCZkNLR19BaTY5TUw4NXdkY0dEMmYtcy1kR05zWTVG?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県盛岡市 下田でクマ1頭目撃、道の駅方向へ立ち去る",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE45OFVGd3ZJdDVpck4xbkdxU3NwSkQyVHdwb2R0emRTUlYzZkZadUtsNDNiWkdyMkJTdjhpMmFfZnBNZ2NXM0liT2NuUUtkdw?oc=5",
      "site": "news"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":168},{"pref":"福島県","count":89},{"pref":"青森県","count":81},{"pref":"岩手県","count":52},{"pref":"宮城県","count":48},{"pref":"秋田県","count":44},{"pref":"栃木県","count":33},{"pref":"島根県","count":32},{"pref":"長野県","count":32},{"pref":"山形県","count":31},{"pref":"新潟県","count":30},{"pref":"群馬県","count":29},{"pref":"京都府","count":20},{"pref":"富山県","count":19},{"pref":"岐阜県","count":12},{"pref":"山口県","count":11},{"pref":"岡山県","count":5},{"pref":"山梨県","count":5},{"pref":"兵庫県","count":5},{"pref":"三重県","count":4},{"pref":"和歌山県","count":4},{"pref":"福井県","count":4},{"pref":"東京都","count":3},{"pref":"広島県","count":3},{"pref":"石川県","count":2},{"pref":"神奈川県","count":2},{"pref":"埼玉県","count":1},{"pref":"愛知県","count":1},{"pref":"滋賀県","count":1}];

export default function ResearchPage() {
  return (
    <PageShell title={TITLE}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <div className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-800">
          週次レポート
        </span>
        <span>対象期間: 2026年8月9日〜2026年8月16日</span>
        <span>·</span>
        <span>公開: 2026-08-17</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={771}
        periodLabel={"2026年8月9日〜2026年8月16日"}
      />

      <p>2026年8月9日から16日の8日間で、KumaWatchが収集したクマの出没関連情報は全国で771件に上った。お盆の時期と重なったことで、レジャー活動中の人間とクマの遭遇リスクが高まり、実際に複数の人身被害が発生した。都道府県別では北海道（168件）、福島県（89件）、青森県（81件）、岩手県（52件）、宮城県（48件）の順で多く、東北・北海道地方を中心に出没が活発化した。本レポートでは、期間中に発生した人身被害や都市部への出没事案を分析し、動向を総括する。</p>
      <h2>主要トピック</h2>
      <h3>1. レジャー活動中の人身被害が多発</h3>
      <p>本期間中、山林内やその周辺でのレジャー活動中に人がクマに襲われる事案が顕著であった。8月12日から14日にかけて、群馬県みどり市の山林内で釣り人が襲われ負傷する被害が複数報告された（※1, ※2）。また、岐阜県では8月10日に高山市で、16日には池田町の林道で、それぞれランニング中の男性が襲われ負傷している（※3, ※4）。これらの事案は、登山や釣り、ランニングといった夏期のレジャー活動が、クマとの深刻な遭遇に繋がる高いリスクを伴うことを示している。特に早朝や夕暮れ時の単独行動は危険性が増すため、最大限の注意が求められる。</p>
      <h3>2. 都市部・生活圏への出没の深刻化</h3>
      <p>クマの出没エリアが山林から人間の生活空間へと大きく拡大している。8月13日、宮城県仙台市青葉区の大型園芸店で従業員がクマに襲われ負傷する事案が発生した（※5, ※6）。市街地に隣接する商業施設での人身被害は、都市部におけるリスクが新たな段階に入ったことを示唆する。また、山形県酒田市では8月10日に市街地での目撃が相次ぎ（※7）、新潟県上越市では住宅密集地での出没が確認された（※8）。さらに、山口県萩市では8月12日に住宅の屋根にクマが登るという異例の事態も発生しており（※9）、従来の想定を超える行動が各地で観測されている。</p>
      <h3>3. 家畜への被害と捕獲・駆除事案</h3>
      <p>8月10日には北海道八雲町の牧場近くで、飼育されていたヤギが体長1.8mとみられるクマに襲撃される被害が報告された（※10）。家畜への被害は、地域住民の安全だけでなく、経済活動にも深刻な影響を与える。こうした事態を受け、各地で捕獲や駆除も行われた。8月15日には栃木県日光市で民家に侵入しようとしたクマを住人自らが刃物で駆除する事案があったほか（※11）、8月16日には京都府宮津市の観光地・天橋立付近に出没したクマが麻酔銃で捕獲された（※12）。広島市安佐南区でも8月12日に1頭が捕獲処分となっている（※13）。</p>
      <h2>地域別動向</h2>
      <p>出没情報は全国的に確認されたが、特に東北地方と北海道で集中する傾向が続いている。</p>
      <ul>
        <li>北海道（168件）: 全国最多の件数を記録。八雲町での家畜被害に加え、道内全域で広範囲にわたる出没が確認されており、予断を許さない状況が続く。</li>
        <li>東北地方（計445件）: 上位6県のうち5県（福島、青森、岩手、宮城、秋田）が東北地方であり、山形県も31件と多く、地域全体が極めて活発な出没エリアとなっている。福島市や盛岡市では住宅敷地内での目撃が複数報告されており（※14, ※15）、生活圏での遭遇リスクが非常に高い。</li>
        <li>その他の地域: 栃木県（33件）、島根県（32件）、長野県（32件）でも出没が多発した。特に山口県萩市や京都府宮津市での事案は、従来出没が少なかった地域でも警戒が必要であることを示している。</li>
      </ul>
      <h2>注目事案（時系列）</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">日付</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">概要</th>
              <th className="px-3 py-2">キーワード</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-08-10</td><td className="px-3 py-2 text-xs">岐阜県</td><td className="px-3 py-2 text-xs">高山市</td><td className="px-3 py-2 text-xs">ランニング中の男性が襲われ負傷</td><td className="px-3 py-2 text-xs">人身被害</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-10</td><td className="px-3 py-2 text-xs">山形県</td><td className="px-3 py-2 text-xs">酒田市</td><td className="px-3 py-2 text-xs">市街地でクマの目撃相次ぐ</td><td className="px-3 py-2 text-xs">都市部</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-12</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">みどり市</td><td className="px-3 py-2 text-xs">山林内で釣りの男性がクマに襲われ負傷</td><td className="px-3 py-2 text-xs">人身被害</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-12</td><td className="px-3 py-2 text-xs">山口県</td><td className="px-3 py-2 text-xs">萩市</td><td className="px-3 py-2 text-xs">住宅の屋根にクマがのぼる</td><td className="px-3 py-2 text-xs">都市部</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-12</td><td className="px-3 py-2 text-xs">広島県</td><td className="px-3 py-2 text-xs">広島市</td><td className="px-3 py-2 text-xs">安佐南区沼田町でクマを捕獲処分</td><td className="px-3 py-2 text-xs">捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-13</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">仙台市</td><td className="px-3 py-2 text-xs">大型園芸店で従業員が熊に襲われけが</td><td className="px-3 py-2 text-xs">人身被害, 都市部</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-15</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">日光市</td><td className="px-3 py-2 text-xs">民家で100kg超のクマを住人が自ら刃物で駆除</td><td className="px-3 py-2 text-xs">捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-16</td><td className="px-3 py-2 text-xs">岐阜県</td><td className="px-3 py-2 text-xs">池田町</td><td className="px-3 py-2 text-xs">林道をランニング中の70代男性が襲われけが</td><td className="px-3 py-2 text-xs">人身被害</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-08-16</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">宮津市</td><td className="px-3 py-2 text-xs">天橋立付近にクマ、麻酔銃で捕獲</td><td className="px-3 py-2 text-xs">都市部, 捕獲</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>総括すると、本期間のクマの出没は全国的に高レベルで推移しており、人間との物理的な接触に至る人身被害のリスクが極めて高い状態にある。仙台市の商業施設での被害や山口県の住宅屋根への出現など、クマの行動が大胆かつ予測困難になっている点が最大の懸念材料である。これは、従来の「山でのリスク」という認識を、市街地を含む「生活圏全体のリスク」へと更新する必要性を示している。</p>
      <p>次週以降も、秋の食料探索期に向けてクマの行動はさらに活発化することが予想される。以下の点に最大限の警戒が必要である。</p>
      <ul>
        <li>レジャー活動（登山、釣り、キャンプ、キノコ採り等）では、複数人での行動、鈴やラジオなど音の出るものの携行、クマ撃退スプレーの準備を徹底する。</li>
        <li>早朝・夕方の農作業や屋外での活動時は、周囲への警戒を怠らない。</li>
        <li>都市部や住宅地においても、生ゴミの管理を徹底し、クマの誘引物となるものを屋外に放置しない。</li>
        <li>地域の出没情報を常に確認し、危険とされる場所には近づかない。</li>
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
          <dd>2026年8月9日〜2026年8月16日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-17</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-17</dd>
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
