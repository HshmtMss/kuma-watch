// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年8月10日 / mode: daily-report / 生成日: 2026-08-11
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-08-10-daily-report";
const TITLE = "2026年8月10日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年8月10日、国内で112件のクマ出没が報告された。岐阜県高山市ではランニング中の男性が襲われる人身被害が発生したほか、北海道八雲町では家畜が襲撃された。山形県や宮城県など都市部での目撃も相次ぎ、人間との遭遇リスクが高まっている状況が確認された。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-08-11",
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
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
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
      "title": "岐阜県高山市でランニング中の男性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNcF9QcVJIcmdWZHA1c01FQnp5NG5pQkpuc0xUdjB6WU1HY1I5c3hDaWptcHVGanJPZ3luY0xURmNPbnFGRUxmZ210MHFIS0RiN2IxbVlMTXhSZWd1VlJFcGRjVE9lT3JoU1I2YUoya3EzdFBLSmpyU1diZnpaR3BKTHVGTlpFWGJiNExxWUNB?oc=5"
    },
    {
      "title": "岐阜県高山市でランニング中の男性が襲われケガ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE56dWJVSHhhcWpQV2hkaFdVYjdNN3RZQTNJcm5CeGxmY0FDRndpcFJDMndhOHRFVW12dHZTTXZXT3NON3phR0hrNzNvOU9GdUFDWVlydW5SSGY1eVhnXzdDTFA5Ylh6VGpHdGFJWU82NXZ3VlhfZC1KTV9lRFpjbFU?oc=5"
    },
    {
      "title": "岐阜県高山市でランニング中の男性がクマに噛まれる",
      "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOV2t1WHdleWt2YlVIOXJRRDhzVUdsYWhUUVFUaTVsc2hyVGxJR3JDOGlBVnRyeEdGcUdia05RMmI0bUwzRkJ6ZG1TQ2daMlJfd3dOMUdJMEo0WWp0bENtWFlmQUF1YXpjb0YwUXdsZkNEcW9HdWtHUnlMbkRoU1IyREhiVVA2R3oyTXfSAY8BQVVfeXFMT2oyR3pkdzZrSVl2N0tyQ2FVTERYcW5vRVdZRDEwVUpyU3FOY1hBUmFhNVR0WkhsNTVwbHlaU2F5TFFrQm82SEF2S0tkd1RLbkRNV2Fody10SnFYd3lKb184LTdCY1pFc29aZTB5X1VEdGlJSHV2bXFZM1drNklnbDZVUzR5THNWV09PZ1pvbFE?oc=5"
    },
    {
      "title": "北海道八雲町の牧場でヤギ襲撃、クマを発見",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE03U2tyV19Nb0ROZXotNjFIMFRBYnBHMElWSUdSUjBNcWZhQ3ptUUtrc0g3dmx2cTlhYk9VX05lOEs3UHhDNEkwMzRXSkVRNE9EZmxEUGxNd0N0UmJZTlBrZFZZUkpoN1E5dlFoRG1OTWY4YUNMMm81SEdYcFY3b3M?oc=5"
    },
    {
      "title": "北海道八雲町で体長1.8mのクマがヤギを襲う",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9PSExNRTRxRHVhdF9QN081WHRSVVYzdFJJQkdDV2k2cjZsT2xkVlhoMWUydDdrVHRUc3lQTU1TR2dVc3BseGg1RWdHRTQ0R2lGQWFHYjYtNA?oc=5"
    },
    {
      "title": "北海道八雲町の牧場でヒグマがヤギを捕食",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE13ZXV2T045eEZoOTBMWHdZczViODMwZEY0YVhhZjRuMi0wOVVINVFERTB2WE1MRFIzUXpBUlRkX2NzMzF3SXRuWmlNZUxXa245WGhoMndjMHRwY1BiY1lyOTljU2pQRFFtams1YlhYcVF0NUt2X0oyNTFPVVI1UFk?oc=5"
    },
    {
      "title": "山形県酒田市の市街地でクマ目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5jMmNUMUFIUUZMZndWQnNaY256WkQ0eGk4VlNJWm51RUtDR3NodVJPSDhlUW14RTgyWjBjV0p6VHRSV2lrMVpldmZVSkRYVnNyWGRoUURNUjhOczgxTmlWWTlOd09kVXg0X1loYTJ1UdIBdEFVX3lxTE9MendHTDZJNnRWdlZ0ak1NUDl0YWJHOEVfSVNRX3BwRGJmZUxwaTZFR2I0Um5qRmdIVVdwak85d0ZMMk1lbXVpNE1RQ0JhQ0V3Q002VjFpb0gtQTF3Ukh2RTFteHVnTkppM09hNG5iaUtZT0VP?oc=5"
    },
    {
      "title": "山形県酒田市の中学校近くの水路にクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxObGd4UGtOZl8zTTVHcDdoYzB6SmJ1Tmt0V0g5RXVrcjZMM1BIamJzZGZBNVoxVkJSNENpZXFDekg3Tl9mSTlNTGlmNl8wTTAwTDJ1RzkwYndKQTZlMjlKVmpoM1RrekxFMEdQSnN3dWxZM2QzVWJXYkt4TGpFUzd5eWxUaWNPdThiWVFuZWZvUXJDM2dCbW1MMzRCYWJqMW1ON3NqU1puT2o2ZExSLXhRMGFwNHRnelFfNnI3SmNoUWJORW5U0gF0QVVfeXFMUGM4d1NNWVRrR0pXcEpmODQ4R3BTd0VxUW1uMTJuYTlaWjlxUk15Uko3anFvVUowZnM3Y1FLVmZOR0ljN2RMR1dCNFB0ZFZYNGxZbDQwRmotMzVhR1oxSXFGa0tiNGlPQTBrWVd0ajNZSWZMVGE?oc=5"
    },
    {
      "title": "山形県酒田市の市街地で目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBMUFFXUmVLb01aNF9zeTNIaFc0ODRSbTIyaDV2clhEWEdTY3dMV2t6LTdiUnA2cnlnTWNNWkh2X0p3NUFhUG1mY2oyZWRWZ0JRaHlpb2J4XzhobS1TbDlnNFZxTEtuQVR1Q1pDZGZuWXVXaWFqdllxVmxPYjJ2RnM?oc=5"
    },
    {
      "title": "宮城県大崎市の住宅・学校密集地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTFBIOS1nLXdRWHR6ZXFFQjFLbENmYWJCWkJralRxNjlQYTZvT1lWZWFWSGJ0RzJweGZ4ckZiTGJabnNpY2FnNTdTSlJPMlpEZG5BcEMwRXg0akIwOENBdXlKQ201QmFMN1Qwai16T0ZB?oc=5"
    },
    {
      "title": "宮城県大崎市古川の住宅街でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE93cVoxNTNEcldPcEpSZTBjTjl2NDE3V1loTVVLRUlhVjU0NS1xekdRQl9COHh1b1ZYVGpoTU95bUp2NWpXWlR5RTZVVXV0LUE?oc=5"
    },
    {
      "title": "宮城県大崎市の住宅地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5iUkM5OWNIVHp5ZThFelhXQ0V2eERtZlZDcWZOQXhiaEQxOFdQUUJoUHZ6RmNkU0syYzV5RVFkVnJtelVQMEVqUnVERkF2QUZsZG9YMFpYS3FmZ0dHeXBvLWZRbmJBd095RFVoNTUxYWNMYjZvMGtCSUpnTS1lbHc?oc=5"
    },
    {
      "title": "北海道愛別町の国道で体長1.5mのクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5OZS1rN3dwc3pmbWlTRXh0U2FLZTRKUVJ3Y2ZwdnIzdzZOVVRDcVctMEJIOFRHNVdtekJTLUE3QzNhM05DdmNMY2o3ZlBWZ3V3NzdOUXZLeUI0d0VzaGFqOExzRzRkQ2hqX0VsYm1R?oc=5"
    },
    {
      "title": "福島県福島市の住宅敷地内でクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE5WYW13OWY3RklXWVphWmVtUXFGRHZaeHN1M3NQMjNKS3NXMnJIcENKNUpNdnRtdVhncVU0N25ic1lIUzhwTURXaDlxaTl3OHRvMzBqZjNva2cxU3BEZWFzTjRoWkVGd3UzbVBhd193UdIBdEFVX3lxTE1vNmJFNE1kUjFxdkJ4eTJlcjJYNmxPQWFUZVE2M2tEMV9oZWJ1aWs5b29mODhhZ3diTTRFVmpwaTl2WUJJcEFjTGFRcVpRRGVGNVJFbVJCZkNLR19BaTY5TUw4NXdkY0dEMmYtcy1kR05zWTVG?oc=5"
    },
    {
      "title": "栃木県鹿沼市の林道でクマが目撃される",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE8tS0hVMXFBUlBTT1M3eXpiZmY0SUo3TDJOLVF2bzlpY2kxd2JOZUhnbF9vTzBJOC1MeWYyZDIyX3BhZVl6bVFRR196Q0ZuLS1waHRDNEEzQzJmMXM?oc=5"
    },
    {
      "title": "群馬県渋川市の伊香保温泉でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQSHVTNWNfeTNTR3hhc3JmU3h0SjdfTW5ZNUZpUWpTNmxKUXVrWW80VC1ZakVOSGQ3RVJ5bHFnV2doeVNOTy14YktaRkJlTjZxeTV0TGQzbW8wTWhGSzNtTVdyY3FkbVR3bHc0cU5jM0VHSEYzc2ZkekNnSFNfYkpLZUFPbXk3bDV3NXBDSC1uRktMeUVrNjZLTVlTdnPSAaIBQVVfeXFMTnVYLXctUEVwWmkyU3YyR1JFMVhEUE1KaWdwTHB2WG9McWVMaVQ2UTZGaXZpcnl1U3RwUVl4aXBQVlNKZUhxS1lQQ3o3Ui1MNnZWN1JaSUM1N1MtaFNmNDQ5ZWtSRXh2TVNlRkFGNHhjb25Xa0VpbVdZVGNTYnRFQW1WY0VrWkFCRkFkc3lmcXY5VkZxdGEybW5ZVURJZUJQQW9n?oc=5"
    },
    {
      "title": "富山県立山町の室堂付近で成獣1頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1HZEk1V09qdkFya3dWZF9BaEhRN1pldFlaTnNCU3JHWlVpMldEdE1UR3VMNGVoTHRrVWZpZ05kQmtqOENnNENOSzQ3WXVfR0taY2tlTVBYdTJpbG5EWnlVUm9GVVIyMWIwMERLVmNXNF82SFBDMjExRWFuV0pGTDQ?oc=5"
    },
    {
      "title": "島根県益田市美都町でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQMTVlRHB6Y2Rjc0tWVk5JTFE2ZVlUdWtqX2NobUgzY1dIclR5bENiM1lDamhoTHg2RDJ1bVhQeG5SSnBCN0NOY1Z2N24yVUpTYmZRWWk0Q1RxQnk2R3g3MTM4dXItUHltSi1LNVFueXYwOXU5SDUwcnJ0MXMwSHB0Uk9wNEh0RXJMU1RMQlFmWU5pNS02dWRZdWlEY0bSAaIBQVVfeXFMTTdUREx4OEhQM0VhTjZJdlZOZXpWeUNMMWQ1UFVFUGlMLVV5c2tQcWFlLWtJUlpUQjE4RG5EbGs4UE1CT0t5YURCZF8wczlPMm42NFNBSU5XX0lrajYyQnNPQkJQb0tBeG56NWY3dGNwNm15bThLZkIzam9XRjhEdWEydDVaTU54SEVOMkxsN29hdFo2ZHlLYl9DUU5SN3pQY1V3?oc=5"
    }
  ];

const CHART_DATA: { pref: string; count: number }[] = [{"pref":"北海道","count":19},{"pref":"福島県","count":11},{"pref":"栃木県","count":10},{"pref":"青森県","count":10},{"pref":"秋田県","count":9},{"pref":"岩手県","count":8},{"pref":"宮城県","count":8},{"pref":"山形県","count":7},{"pref":"長野県","count":6},{"pref":"富山県","count":5},{"pref":"島根県","count":4},{"pref":"群馬県","count":3},{"pref":"岐阜県","count":3},{"pref":"山梨県","count":2},{"pref":"新潟県","count":1},{"pref":"石川県","count":1},{"pref":"和歌山県","count":1},{"pref":"福井県","count":1},{"pref":"神奈川県","count":1},{"pref":"埼玉県","count":1},{"pref":"京都府","count":1}];

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
        <span>対象期間: 2026年8月10日</span>
        <span>·</span>
        <span>公開: 2026-08-11</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={CHART_DATA}
        total={112}
        periodLabel={"2026年8月10日"}
      />

      <p>2026年8月10日、KumaWatchが収集したデータによると、国内におけるクマの出没報告は112件に達した。都道府県別では北海道が19件と最も多く、次いで福島県11件、栃木県10件、青森県10件と、東日本を中心に活発な活動が観測された。この日は、人身被害や家畜被害、都市部への出没といった重大事案が複数発生しており、クマと人間社会との緊張関係が高まっている状況がうかがえる。本レポートでは、これらの事案を分析し、地域ごとの傾向と今後のリスクについて報告する。</p>
      <h2>当日の主要事案</h2>
      <h3>人身被害</h3>
      <p>岐阜県高山市で、ランニング中の男性がクマに襲われ負傷する人身被害が発生した。報道によれば、男性はクマに噛まれるなどのケガを負った（※1、※2、※3）。活動中の市民が直接的な被害を受けるという事実は、クマが人間の生活圏へ侵入しているだけでなく、攻撃に至るリスクが現実化していることを示している。このような事案は、地域社会に大きな不安を与えるものであり、迅速な情報提供と注意喚起が不可欠である。</p>
      <h3>家畜被害</h3>
      <p>北海道八雲町の牧場において、飼育されていたヤギがヒグマに襲われる被害が報告された。複数の報道によると、体長1.8メートルほどの個体がヤギを捕食したとみられている（※4、※5、※6）。家畜への襲撃は、クマが人里の食料資源に依存し始めている可能性を示唆する。一度味を覚えた個体は繰り返し被害を出す傾向があり、被害拡大を防ぐための対策が急務となる。</p>
      <h3>都市部への出没</h3>
      <p>都市部やその周辺での目撃情報も顕著であった。特に山形県酒田市では、市街地や中学校近くの水路などで目撃が相次ぎ、市民の生活圏にクマが侵入している状況が確認された（※7、※8、※9）。同様に、宮城県大崎市でも住宅・学校が密集する地域や住宅街の敷地内で体長1メートルほどのクマが目撃されており（※10、※11、※12）、偶発的な人身事故への懸念が高まっている。これらの都市部出没は、山林と市街地の境界が曖昧になっていること、また河川などを移動経路としてクマが市街地深くまで侵入している可能性を示している。</p>
      <h2>地域別の出没傾向</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">報告件数</th>
              <th className="px-3 py-2">主要都道府県</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">19件</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">件数最多。家畜被害が発生。</td></tr>
            <tr><td className="px-3 py-2 text-xs">東北</td><td className="px-3 py-2 text-xs">53件</td><td className="px-3 py-2 text-xs">福島、青森、秋田、岩手、宮城、山形</td><td className="px-3 py-2 text-xs">全域で高水準。都市部出没が顕著。</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">14件</td><td className="px-3 py-2 text-xs">栃木、群馬</td><td className="px-3 py-2 text-xs">山間部が中心だが、都市近郊にも出没。</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">19件</td><td className="px-3 py-2 text-xs">長野、富山、岐阜</td><td className="px-3 py-2 text-xs">人身被害が発生。山岳地帯での目撃も。</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">京都、和歌山</td><td className="px-3 py-2 text-xs">痕跡や出没の可能性の報告に留まる。</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国</td><td className="px-3 py-2 text-xs">2件</td><td className="px-3 py-2 text-xs">島根</td><td className="px-3 py-2 text-xs">散発的な報告。</td></tr>
            <tr><td className="px-3 py-2 text-xs">四国・九州</td><td className="px-3 py-2 text-xs">0件</td><td className="px-3 py-2 text-xs">－</td><td className="px-3 py-2 text-xs">報告なし。</td></tr>
          </tbody>
        </table>
      </div>
      <h3>北海道・東北地方</h3>
      <p>北海道では19件の報告があり、八雲町での家畜被害のほか、愛別町の国道上でも大型個体が目撃されるなど（※13）、全域で活発な活動がみられる。東北地方は合計53件と、全国で最も報告が集中した地域となった。福島市の住宅地（※14）、山形県酒田市や宮城県大崎市の市街地など、人口集中地区への接近が目立ち、住民の安全確保が喫緊の課題となっている。青森県、秋田県、岩手県でも広範囲で出没が確認されており、地域全体で警戒が必要である。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では、栃木県で10件の報告があり、那須町や鹿沼市の山林・林道が主な出没地点となっている（※15）。群馬県の温泉地周辺でも目撃されている（※16）。中部地方では、岐阜県高山市の人身被害が最も深刻な事案である。長野県や富山県の山岳地帯でも登山者などからの目撃が報告されており（※17）、レジャー活動における注意喚起も重要となっている。新潟県、山梨県、石川県、福井県からも出没情報が寄せられており、広範囲での警戒が求められる。</p>
      <h3>西日本</h3>
      <p>近畿地方では京都府舞鶴市と和歌山県広川町で、中国地方では島根県益田市で出没や痕跡が報告された（※18）。東日本と比較すると件数は少ないものの、生息域において活動が確認されている。四国、九州からの報告はなかった。</p>
      <h2>総括：リスク評価</h2>
      <ul>
        <li>季節要因：8月上旬は、夏の繁殖期を終え、秋の大量採食期（ハイパーファギア）に向けた準備期間にあたる。特に経験の浅い若い個体が母親から離れて分散する時期と重なり、行動範囲が拡大して人里に迷い込むケースが増加する可能性がある。</li>
        <li>餌資源：山中の餌資源（ブナ科の堅果類など）の豊凶が、クマの人里への出没頻度を大きく左右する。現時点での作柄は不明だが、都市部や住宅地での目撃が多発している背景には、山中の餌不足が一因となっている可能性も否定できない。特に果樹や農作物、生ゴミなどが誘引物となり、人里への執着を強める要因となる。</li>
        <li>人口圏への接近：岐阜、宮城、山形での人身被害や市街地出没は、クマの生息域と人間の生活圏の境界が極めて近接、あるいは重複している実態を浮き彫りにした。河川や緑地帯が都市部への侵入経路として利用されることもあり、これまで安全とされてきた場所でも遭遇リスクは存在すると認識する必要がある。特に早朝や夜間の単独行動はリスクが高い。</li>
        <li>総括：全国的にクマの活動レベルは高く、特に出没が集中する北海道・東北地方では厳重な警戒が求められる。人身被害や都市部への侵入が現実化しており、秋の行動活発化を前に、自治体や住民は情報共有の徹底、誘引物の除去、遭遇回避行動の周知など、予防策を強化する必要がある。</li>
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
          <dd>2026年8月10日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-08-11</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-08-11</dd>
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
