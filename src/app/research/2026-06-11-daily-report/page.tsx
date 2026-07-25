// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月11日 / mode: daily-report / 生成日: 2026-06-12
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-11-daily-report";
const TITLE = "2026年6月11日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月11日、国内のクマ出没報告は182件に達した。人身被害は確認されなかったものの、栃木県宇都宮市の住宅密集地や京都府の観光地・天橋立での捕獲、札幌市中心部での目撃など、都市部や人口密集地での事案が8件発生し、人間社会との深刻な軋轢が浮き彫りとなった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-12",
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
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
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
      "title": "栃木県宇都宮市の住宅密集地でクマ1頭を捕獲",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE8zVktmSl9Bek5oT3ZQVW9ndFI2emhIT0NUN0hBME9wb3VnMFdRM1ZCYUtWanYyUUlmVHJHeFlvWlF4TUFyaEJWajFGR0FmYXprakVKZkJ4aEZ2WE0?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県大船渡市の中学校南の山林でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQRzZEcnFrc2Z2blJjWGxCRWs3a0J4ZEx5RHFuM2pYOVBYSmdlb1Z1QmlobTlyX3Z5cXJJUW4tME52cDdieWtYaEZNemVjanBoWDMzZ1FodXJtbFNTWnFWSG4wV185dmpDLUVkeEIxdkR2NExlVXFJRHA2Nk56VndPVk1EamlCbFE?oc=5",
      "site": "news"
    },
    {
      "title": "長野県松本市の中学校近くでクマ目撃、生徒が校内待機",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1YdkNrU2EyMlEzd2kyaEJRVlRuMjhULVpSQ2IzbHBhM2N0cnZBTHJvZmlOdlFBT0hNSVo5dVg0ZmtTZkFkSmxNT3V0ME5uX2FTZnl2TjA5azdFY1hVVUNWS0ZnREhaSlFfZi16ZXV3eFdXUkYxbjNpcWt4eWVrajQ?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市の住宅地の市道にクマが出没",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPNFp0Y0JYYjFEYU5tN28zSkZpNlJuLU5zbC10bHFHeTlwZ1V0Nkd5RkJDOFI0V1ptamlDZUowY0o1VmJDSTZpQ01NNXVaUWZoV0tSdkZEZndpMVpOeEVmWFY1X0dnSmhYdURZNlBiLXBTaGRFR1hIQkRtdDA0a094S3VEQ19NQjg?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県久慈港にクマ出没、箱わなで駆除",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5fVEh5Y3JUd3NRVGlIdnM3WWwtTEp0WW41T0pmTjdsTHYxdE1vNU5jVlB2Wi1PSVU0X0VyZmtQM0hwQ0lFQ1k1dlZlb0gydw?oc=5",
      "site": "news"
    },
    {
      "title": "長野県朝日村で親熊1頭を捕獲",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE45dDJLSDl2NzNGWGNqQ1oyUlBGR2lSM1BJclZydnN6ZGI0dWI1OWtWYTZiN253X0VlOWEtT29MbU5iZWVZN3ltRXlwalFhYXlJSm9pSF9adW1NaTR6YkhBOXFzdVhtWHgwTllyMXVOblk?oc=5",
      "site": "news"
    },
    {
      "title": "京都府宮津市の天橋立でクマ捕獲、海を泳ぐ",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTE9RYklRRTVDeDRyLVRJQXlSWFhQNFdXbUhhWkJ3RE9nMThvZUprNFNPNTR0YlZETE9JbGd0Wnp6Q0tHamZ4c1JyQ2R2bEtaS244T2xKVlBKQ3RrQ3RMTmxmTnR0UmFTdVhxaWdpVDc2LXQydw?oc=5",
      "site": "news"
    },
    {
      "title": "京都府宮津市の天橋立にクマ出没し捕獲",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBzU3V4bGotRkFZX2JtWlVpNkxQZUdQeW1XX2x3VHl3QmFNSWF0WlZYaXRwUHVXcmRZc1hIXy1xQktVMFJNdUVvbUJaTG5EQQ?oc=5",
      "site": "news"
    },
    {
      "title": "天橋立にクマ出没、麻酔銃で捕獲駆除",
      "url": "https://news.google.com/rss/articles/CBMitgNBVV95cUxOTk9OZ21iaFNRNzhRLUZVelYzTXBqTGhhaWNaOVJ4WVdTS2N4M0pVOHFKb2ZoRXFuMnI3cm5nNFhKOGJBREtqNFh0X09rTUhrX190N2NjWlRwUUg4TFYyX3pzZHBOc1pUUUtINzdVWlZ3RXpNMk4tYzR1c1Q5QnYtaWVMa1k2MldiQVBuUmhxbFNmMjBTRFUzdmU3UWhGY19tQXFSM29uYW5tVXlhMDk4QVQ5S2E1QWMta3ZnOWNfMWtuVWVqY0RvRFJ3NkNYZHkyYjM2VWhUczNuMG9raEN4MVhkamJtMmdjdVZaemZRM2I3NktNRkVWRENfc0Y3ZjI3dXo3MGF4LVRYbkNuOEoyWWtTSFYyNEhlYnJ4aGVrclF0SC1jd1hCSC1KZVkyOFVrcEtPc21rZnlHWEwxZnlKOEpBTVR2Y2VvRms3a2ZxYnNCQVROOXY4T3ZBcXdVN2JSckFSbDJxdU5jbjdCbDE3LVNVVVN2NWdtQ2Z4Q3Z0dWhoZTNiMU9GTC1HeFgzbjNGWHl1ZzJSeER2OVZLMWZnMmpNZzFWOG9wUG14bEE2X2FOMHZTSkE?oc=5",
      "site": "news"
    },
    {
      "title": "天橋立で海を泳ぎ砂浜走るクマを捕獲",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBoMXVOdHY4VFl3T25jWm9vX1o0bmhXQ1l0WVRLclFDQzZReElDa3h0SERucThSSjc4alJRbzlNWjVFeGN0ZVpvaW95aFl3bjVNeEZQRlhoYw?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県小千谷市の商業施設敷地内でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE80RlNJOXUxaTF4M3F3QjNaZE9MV2VvN2IzZjQ4X196SG5YcGRpNElyaV9faGgweGRvRERxckNSQndybkRlcWFIZHppSjVSNnVOMllQaEhJYUM4TzlWS3BF?oc=5",
      "site": "news"
    },
    {
      "title": "富山県射水市の太閤山ランドでクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9URXRHQVpUenhBMXdwRTVWbjg4YU5DSV9CcW40LW5ESTZSX3REUTIxMk1wOWc1NjFiR0t3MTFTNXF0bG4zd3c0Z3dmMFUtcko2a010dHJIVzA?oc=5",
      "site": "news"
    },
    {
      "title": "島根県浜田市で郵便局や公民館付近で目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1SVjdWdnhVUHBuejNJbVpfc19fdnZqNGQzb1BuQXNBb3g0UjZEU1Qya2FPR3lPVXlkNmVLMW8xdS1BRVQ5Tk9FVG5EWFJ1VXNCTjBjRmtKeGktNjZQMTI0Ykk4NkMyS01JQ0VqaWNzeWZoYlRKQkpmRktxdXNtaVU?oc=5",
      "site": "news"
    },
    {
      "title": "福島県福島市の県警本部近くで目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE9NWUJnM3BhOG9pa0tmOWp3QnNoMG1oUHNZRzFSWFBCZ1hqU2F4enNLWnBtc1JfdnYwSFBJbEVyQXkwOVFHRkVLWWZrYmhoWEk?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県神戸市北区の山林でクマを初確認",
      "url": "http://www3.nhk.or.jp/news/html/20260612/k10015148731000.html",
      "site": "NHK"
    },
    {
      "title": "岐阜県揖斐川町の小学校近くでブロック塀の上を歩くクマ",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBMdVZ6UVgydkRIS0tkWlJKT2hWLUFWN3M0SWs4czlKbHNmbW41RTJ4REkxZHJaMjliSXpyd1BCVVlSdmdMNFRRZ3RjRWJSQQ?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県秋田市楢山愛宕下の市道でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9NaWJnOV9DZEFvSHRDT01RMUFLbEUzbms3MmJjal9MeHNwQ0U1bzVwQlhlOUZrY0JCS0RQV0FQMVZmMHpUR1FlVmtHSWFHLUhNQnI0MVRZX2lWVjVvdXpzYjF3?oc=5",
      "site": "news"
    },
    {
      "title": "秋田県鹿角市の民家近く、田んぼにクマ",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9qdGZnTVJtd0g5ZTZXRFZRWGdlTG5KYmlHcEU0Z0xobmVZbWNNYjNhekFWbUptQ2MwekZqakFlVWRVckFVcUdPSVBnS3BVYXF4MXR0WEtmdmhFSGgzSWN0SS1OR0FYMU8yN0lDb2JUSGF0N1YzbE93RTFmSDJBLTQ?oc=5",
      "site": "news"
    },
    {
      "title": "北海道札幌市中央区でヒグマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1scjROQW9raTF6TUVQTGU2MUtWdUtJaGM5Qmx3VXVqSXVUSVBMTk1QM1hSSjZaOUxqck1UcGwwXzY4ZGNaeWRzN2FZSHNJZnh6X3JZSVJvbEEtZw?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県富谷市のイオンモール近くで道路を横断するクマ",
      "url": "https://news.google.com/rss/articles/CBMickFVX3lxTFB4SGotcjgxNkF6TGJsOHFSOGYyTVlueUhSU2pVVC1LSGNoUDBNVlFzVFlwU1RlcXg5ZkJ4LTZHNUV2Q3J2Zk1oU1pTTnNoZmptNG8yaVFoS2g1NEhwTjJUc2R4cFBZVHpNSUtxTmpfRFEwQQ?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県利府町のグランディ・21敷地内でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE84UGU3SzhIYnIxWG1jbmVCRlVGM3lCcHlpTnhKbVNENUw5UU1nRUVyTFU3RHhvVHh1UjI0SlhhbUl1eFZrc1lvVWRWRHlYU3lPSDVfV3pYUW5HaV9IbnpiVDB2VkFBTW9LQ3h5VnZHc1Y?oc=5",
      "site": "news"
    },
    {
      "title": "宮城県富谷市の映画館付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBpbzlFVUZ4NWR4QkV0YXVLdi15MXdkUmIzNFBQbnVKX0VoZVp3cURta05OWEtIT08xLW5vR19CVS13MkY0bC1NZzVtRkdWaFBJRXhvdlBuZlNicDUtV09HVE9lNTdCeFdaTGRtMjNmNWJaQ0VSYWtXYTR2VE9CamM?oc=5",
      "site": "news"
    },
    {
      "title": "山形県長井市の通学路で小学生がクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9NWnhIMWZ1QWRkTWlqU2w2RFhwcFNJMi1qUFREb09ZYVEwOU1uMGF0V3pkbWNtanFYRHJUZUtFeXRGUXUtMVVfRTlNYUtxWFZ4QWpucDMwR05YTHRaQkhCcWlmeUg3dXNFT0FoZndWdXRvXzg?oc=5",
      "site": "news"
    },
    {
      "title": "山口県山口市で国道9号を横断する体長80cmのクマ",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1jSU4wT1lQVWFNRDJGNzJIN3pmZzU5LVRjXzN6amczQ3ljVndkQkcwcTl2RHgtN2J4V21BVUFsdGZ5MEcyQUVUcWxpZ0dyY1pUa3FKUF84VTUweDJ1T2dZZTZZSVpxUEk?oc=5",
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
        <span>対象期間: 2026年6月11日</span>
        <span>·</span>
        <span>公開: 2026-06-12</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":39},{"pref":"福島県","count":31},{"pref":"北海道","count":24},{"pref":"兵庫県","count":21},{"pref":"新潟県","count":21},{"pref":"岩手県","count":21},{"pref":"富山県","count":14},{"pref":"長野県","count":13},{"pref":"石川県","count":10},{"pref":"島根県","count":8},{"pref":"宮城県","count":8},{"pref":"群馬県","count":7},{"pref":"岐阜県","count":7},{"pref":"山口県","count":6},{"pref":"青森県","count":6},{"pref":"京都府","count":6},{"pref":"栃木県","count":6},{"pref":"山梨県","count":4},{"pref":"三重県","count":2},{"pref":"山形県","count":2},{"pref":"和歌山県","count":2},{"pref":"岡山県","count":1},{"pref":"広島県","count":1},{"pref":"滋賀県","count":1},{"pref":"鳥取県","count":1}]}
        total={262}
        periodLabel={"2026年6月11日"}
      />

      <p>2026年6月11日、KumaWatchが収集した国内のクマ出没情報は、報道由来154件を含む総計182件に上った。都道府県別では福島県（23件）、新潟県（19件）、岩手県（18件）が上位を占め、特に東北地方から中部地方にかけて出没が集中する傾向が見られた。当日は人身被害に関する報告はなかったものの、「都市部」キーワードに合致する事案が6件、「捕獲・銃猟」に関連する事案が8件確認されており、クマの活動域が人間の生活圏へ拡大している状況が強く示唆される。</p>
      <h2>主要な事案：都市部への出没と捕獲・駆除の動向</h2>
      <p>当日は、人間社会への直接的な影響を示す事案が複数発生した。特に注目すべきは、都市部や観光地での出没と、それに伴う捕獲・駆除の事例である。</p>
      <h3>都市部および人口密集地への接近</h3>
      <p>都市部やその周辺での目撃が各地で相次いだ。栃木県宇都宮市では住宅密集地でクマ1頭が捕獲される事案が発生した（※1）。北海道札幌市では中央区（※19）、秋田県秋田市では住宅地の市道（※4、※17）、福島県福島市では福島県警本部の近く（※14）で目撃された。さらに、宮城県富谷市ではイオンモールや映画館の付近で（※20、※22）、利府町では大規模複合施設「グランディ・21」の敷地内でクマが確認される（※21）など、商業施設周辺での出没も報告されており、市民生活に近接した場所での遭遇リスクが高まっている。</p>
      <h3>捕獲・駆除事案</h3>
      <p>前述の宇都宮市に加え、岩手県久慈市の久慈港では箱わなによる駆除が行われた（※5）。長野県朝日村では親グマ1頭が捕獲されている（※6）。中でも特異な事例として、京都府宮津市の日本三景・天橋立での捕獲が挙げられる。この個体は海を泳ぎ、砂浜を走る姿が目撃された後、麻酔銃で捕獲された（※7、※8、※9、※10）。著名な観光地での大胆な行動は、クマの行動様式の変化や環境への適応を示唆する可能性がある。</p>
      <h2>地域別の動向分析</h2>
      <p>当日の出没は全国的に確認されたが、地域ごとに特徴が見られる。以下に地域別の動向を詳述する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">地域</th>
              <th className="px-3 py-2">主要都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">北海道・東北</td><td className="px-3 py-2 text-xs">福島県, 岩手県, 北海道, 秋田県</td><td className="px-3 py-2 text-xs">計88件以上</td><td className="px-3 py-2 text-xs">全国最多の出没件数。都市部・住宅地への接近が顕著。</td></tr>
            <tr><td className="px-3 py-2 text-xs">関東</td><td className="px-3 py-2 text-xs">栃木県, 群馬県</td><td className="px-3 py-2 text-xs">計10件以上</td><td className="px-3 py-2 text-xs">宇都宮市の住宅密集地での捕獲事案が発生。</td></tr>
            <tr><td className="px-3 py-2 text-xs">中部</td><td className="px-3 py-2 text-xs">新潟県, 富山県, 長野県, 岐阜県</td><td className="px-3 py-2 text-xs">計55件以上</td><td className="px-3 py-2 text-xs">商業施設やレクリエーション施設、学校付近での目撃が多発。</td></tr>
            <tr><td className="px-3 py-2 text-xs">近畿</td><td className="px-3 py-2 text-xs">兵庫県, 京都府, 三重県</td><td className="px-3 py-2 text-xs">計22件以上</td><td className="px-3 py-2 text-xs">神戸市での初確認、天橋立での捕獲など重要事案が集中。</td></tr>
            <tr><td className="px-3 py-2 text-xs">中国・四国</td><td className="px-3 py-2 text-xs">島根県, 山口県, 広島県</td><td className="px-3 py-2 text-xs">計6件以上</td><td className="px-3 py-2 text-xs">山間部の国道や集落周辺での目撃が中心。四国は0件。</td></tr>
            <tr><td className="px-3 py-2 text-xs">九州</td><td className="px-3 py-2 text-xs">全域</td><td className="px-3 py-2 text-xs">0件</td><td className="px-3 py-2 text-xs">出没報告は確認されなかった。</td></tr>
          </tbody>
        </table>
      </div>
      <h3>北海道・東北地方</h3>
      <p>福島県（23件）を筆頭に、東北地方は依然として国内で最も出没が頻発する地域である。福島市や秋田市といった県庁所在地での市街地近辺での目撃に加え、山形県長井市では小学生が通学路でクマを目撃する（※23）など、市民の安全を直接脅かす事案も発生した。岩手県では大船渡市の中学校付近（※2）、沿岸部の久慈港（※5）で、秋田県では鹿角市の民家近く（※18）で目撃されるなど、内陸の山林から沿岸部、人里まで広範囲に及んでいる。北海道（15件）では札幌市中央区でのヒグマ目撃（※19）があり、大都市の中心部も例外ではないことが示された。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では、栃木県宇都宮市の住宅密集地での捕獲（※1）が象徴的な事案であった。中部地方は新潟県（19件）、富山県（16件）、長野県（13件）と出没件数が多く、活動の活発さがうかがえる。新潟県小千谷市の商業施設（※11）、富山県射水市の太閤山ランド（※12）といった人が集まる場所での目撃が報告された。長野県松本市では中学校近くでの目撃により生徒が校内待機を余儀なくされ（※3）、岐阜県揖斐川町では小学校近くのブロック塀の上を歩く個体が確認される（※16）など、教育施設周辺での出没も目立った。</p>
      <h3>近畿・中国地方</h3>
      <p>近畿地方では、兵庫県神戸市北区の山林で初めてクマが確認された（※15）ことが特筆される。これは従来の生息域からの分布拡大を示唆する重要なデータである。また、京都府宮津市の天橋立での捕獲劇（※7）は、クマが人間の活動領域へ大胆に侵入する実態を浮き彫りにした。中国地方では、島根県浜田市で郵便局や公民館付近（※13）、山口県山口市で国道9号を横断する個体（※24）が目撃されるなど、インフラ周辺での出没が報告された。</p>
      <h2>リスク評価と今後の展望</h2>
      <p>2026年6月11日の出没状況を分析すると、いくつかのリスク要因が浮かび上がる。</p>
      <ul>
        <li>季節的要因：6月はクマの繁殖期にあたり、特に若いオスが母親から離れて行動圏を拡大させる「分散期」と重なる。新たな生息地を求めて長距離を移動するため、これまで出没が少なかった地域や、市街地のような予期せぬ場所にも出現しやすくなる。神戸市での初確認（※15）や天橋立の個体（※7）は、この分散行動の一例と考えられる。</li>
        <li>人口圏への接近と「アーバンベア」化の懸念：宇都宮市の住宅密集地（※1）、札幌市中央区（※19）、各種商業施設周辺での目撃は、クマが都市環境に接近・侵入していることを明確に示している。都市部の緑地帯が移動経路となっている可能性や、人間や人工物を恐れない個体、いわゆる「アーバンベア」が出現している可能性が懸念される。これらの個体は人身事故につながるリスクが極めて高い。</li>
        <li>社会インフラ周辺での活動：学校の通学路（※23）や中学校付近（※3）、国道（※24）、港（※5）、公民館（※13）など、地域住民の生活に不可欠な社会インフラ周辺での出没が多発している。これにより、住民の日常生活における潜在的なリスクが増大しており、自治体による迅速かつ的確な情報伝達と注意喚起、および専門家による個体管理の重要性が増している。</li>
      </ul>
      <p>総じて、当日のデータは、人身被害こそ発生しなかったものの、クマと人間社会の距離が物理的・心理的に縮まり、軋轢が深刻化している段階にあることを示している。繁殖期におけるクマの活発な行動は今後も続くと予想され、特に都市部やその周辺地域においては、最大限の警戒と対策が求められる状況である。</p>

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
          <dd>2026年6月11日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-12</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-12</dd>
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
