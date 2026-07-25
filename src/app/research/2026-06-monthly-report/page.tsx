// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月 / mode: monthly-report / 生成日: 2026-07-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-monthly-report";
const TITLE = "2026年6月 国内クマ出没事案の月次総括レポート";
const DESCRIPTION = "2026年6月の国内におけるクマの出没件数は5209件に達し、福島県、新潟県、岩手県を中心に広範囲で活発な活動が確認された。人身被害が91件と多数報告され、登山や農作業中のみならず住宅地付近での遭遇も発生。都市部での目撃も385件と相次ぎ、市民生活への影響が拡大している。";

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
      "title": "登山中に男性がクマに襲われけが",
      "url": "http://www3.nhk.or.jp/news/html/20260629/k10015164021000.html",
      "site": "NHK NEWS WEB"
    },
    {
      "title": "登山中の50代男性がクマに襲われ負傷",
      "url": "http://www3.nhk.or.jp/news/html/20260620/k10015155481000.html",
      "site": "NHK NEWS WEB"
    },
    {
      "title": "畑で70代男性がクマに襲われ負傷",
      "url": "http://www3.nhk.or.jp/news/html/20260630/k10015164641000.html",
      "site": "NHK NEWS WEB"
    },
    {
      "title": "下水道工事の撤収中にクマに襲われ男性重傷",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE1tUTlpbjljZU9zaGNyeTEzSmt6aVZHVWpwMWhQcmlRZmZzNE9pdW9pZnAzcHhGQ0RKZTEwWGtLenRWTThFRHhXclFYbw?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "タケノコ採り中に腰を噛まれ負傷",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5JbmdZMVdhSUNtNWU2MzVKeXlNY1FkRXBxc0hvRWJRZDlfVk0xeUZQdjJfUmFqX244eWhncFJTZV90THpNS3FnaThtSmhaQVItYVpzQnprWlpRWWtJTDh3cko1b2t1anB0cEd4UDVYRkZ4dTlfYndmZzlNWTJOLUE?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "タケノコ採りの70代女性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQQ2dpa2xhdFBZbDdyMG1lS05fVGZjbjlVeDhCY2dNemFaQ05yX1ZIb3dZczA4NU9tV0x3QzR2aUpJUUE4SjNkbUk4bkVLQ0p5aHVJTVBGSEtiQXA5T2RxVUpoUHpMSnFwaEFkQkpBdWJEU25HbzRZVmVFV0NMb19CaU10M05oODQ?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "住宅敷地内で男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1YMEgwZE1BY3l1ZkR2N05CNEk4YWNsbUxFTlI0ZEctQTlFODJnbGZETlBXX09uYXNxTGJHeHR0c2hiVXVIZ3ZEMmJkRUFRUXRsT1diVVBfdHpSb05aU2hPRVdFTWxyZUZUOE4wQUd4UHBqVkc2NDJZempmdw?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "散歩中の80代男性がクマに襲われ負傷",
      "url": "http://www3.nhk.or.jp/news/html/20260617/k10015152251000.html",
      "site": "NHK NEWS WEB"
    },
    {
      "title": "JR智頭駅周辺、市街地で目撃",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5ZeGszTlYtTVBJYTZVQklIUy1yZnRiaG0xTUFsVFBVb29tZWNoWmQ0aFZYSUdNdEg0WENIaV9zLTcyWHA3aTFNbmVNUG1CSzNObzRYSnpYTU0?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "八橋運動公園でクマ出没",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVGRSUTFibGpIRmdNbE5DbFhaYzJUTl9NeFZCU3pKdUh0c21LU2JMcVBZSEh1WG5yM0o0eUZiTFVoZ1FlN0prUTA0X0JqdVJ5cGlweVBPMERJam4yLTI4R0padk1fX2VtOVh6SFZTMlg4UTdrOC1XUUN1aGgyXzJkeVFsWGZVTGp3LWxMZ0xDOV9XR1h0V2NYbjdqZGXSAaIBQVVfeXFMUGdTTEhCQmQyTHcyaFNnV2VRODM1VERrZEx2U01ZVVZIcm93WnZ0V3dzLTBFcF8ySkxYQjhBZ1dsM2lLblRhVlFKNG1raExONzRjcDNTcWFkX1ZXLTdBMkFuSVpxYlM4WU4yd0VZOE81anpINmJHTFhnal9YbG9mNWJESFZZcmFDanZwRnhGRGM1LTk2d2JINTJsZkhaamRHa0Jn?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "岡本駅の山側でクマ様動物目撃",
      "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE0zT21OelptM3pvVC1JUUlpVEE0N1lOckxXb1N6QmptS0U4Nm1nZGNYSEpBZ3E3WG9Jd0JhM1hOUWpvYnlKeVdmSVhQYm43X2lLTkJhRTNFZE5FSXMzVlE?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "西区の公園付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE9EbmRqQXBoZUNHU2V2cF9JaVM5Vmg5Qm1SMU92VlJzZDYzX21DWEdiV01wMmtnVzV6cGh4b1l1c0RkdDZFdU1TcE5hZw?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "漆採取中の男性が襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE12ZDJEdlV4NndnYjBqOVRvZjVzbDBkZnpOWmFEZ0hINnFDMDFSTS14ak5Yc1VPdlVOeVBDYVBOa2g4Q2E2UnJ1dXpWTUgxdzh4ODB0clZONTk?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "小学校付近でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBLb0ZiakRZblVIZWNxcnZ5TTFRMEhnV2MzOUxUQVYxeG1wbk1sd2dsMENqS0hNeWppR0ZkTUs0dWUyZG5qTXpaa0F6U2p6NjNBRFJfb3FESVBiSXpDUEdHS3U1RlU0Z2d5eEt1YzJtOE15Y1ZITldBY2Z0WEpiT0E?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "JR吾妻線　岩島駅〜矢倉駅間にてクマと列車と衝突 (本文より)",
      "url": "about:blank"
    },
    {
      "title": "軽乗用車がクマと衝突、男女負傷。クマは死亡",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOYXpNRUh4QnB1V3dIaFZUTldIVHA4alNBX1hETnBGLUVZOHRlNE5SRUxKR3pPa2VuRjNjTkg2X2h4MjRRZGpvTV9za0lVUG9ZLXBUNXZMb3NFSW9TOVlxUVlwbFVJa3hvWGJxMEwtbFI2d29UUVFZVHFnbmNJM2lOMjZWYkg4NzA?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "右京区京北町で猟友会男性負傷",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE41WXFvZHlkMXZIN0pHVEJSbFF5U1RCZVdQN0V6S1UxQ0ZFVEM3OElaWEFhcDV5NjZsZi10ODVQOGZ3anlaMU5UaHMxZVNtVlpyN0VMOHlTMkhoY191YndmdzJ2MEUweWFFVUFra0sxQWNTTjIyQTlQM1BkRy12am8?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "遠野運動公園にクマ出没、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9aLWJod0s3WWZYcTF2aWJTWHdYV1NLUzRZLWJQNjZVd2c1elhWcXgxRzdCWkhxNlo1M0tHVVdSQVRBX3dSX3JPcVF2NUhjUVlYT3M0cUtPamYzdw?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "八戸市でクマ1頭を緊急銃猟により駆除",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9vdVB0N00wZ2sxNlZlSDRfZXhWMVBEQjhyOWZ3Q3doSEZyendsZ3FXbU1jM0lPeTFSRTRHRnB4aHl1bjBiRGZrRkVNQk42a1FRb1h2WVRHaXY?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "住宅街で市道を横切る1頭を目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE55Y3lFaXJWXzBGUVVLUXAxaW0ydkEtRVFuMEJUdEl1ZUU2MXVKdXJNMFJ0T2VjdVBEWXBfRk5hdEM4RjhhOE5HVWtXenVJblNDdDZNTVNQU2ZRSGNLMm82djJWWU5vWHJjd3ItUWdjMG5vNU9yUVVTXzQ3Q1NGY00?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "犬の散歩中の女性が襲われる",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBJVHFzVmNXVllkSVliQnFrWU5hck5TX1pUSFNSRGFFVE1sZXZqUUplQlk1OHNTS3RuRTdjbVR1cV9pVzFtYWtwa2pCN0FSYWNKRWtjY3ZSS0JIcUhvdm1JTFByblR6b2hybmlwcWc4QzM0S0JydEpPWlJ3d1hRTzg?oc=5",
      "site": "Google News RSS"
    },
    {
      "title": "造林地で作業中の男性が襲われ",
      "url": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5pMG9KTWpJUExfMUk1RGpXR00yRFN3MUpNbnNsVl9oMy1la0VqOHA5czlzTTdUZ0dkWlAzdEZNbGdRNlVZM0NaUXNNMG9JNkRQNzd3UEZqU3hIdUlqVUZTb21kWkUtYjg?oc=5",
      "site": "Google News RSS"
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
          月次レポート
        </span>
        <span>対象期間: 2026年6月</span>
        <span>·</span>
        <span>公開: 2026-07-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":1102},{"pref":"福島県","count":858},{"pref":"北海道","count":768},{"pref":"新潟県","count":452},{"pref":"岩手県","count":442},{"pref":"長野県","count":314},{"pref":"群馬県","count":279},{"pref":"兵庫県","count":272},{"pref":"京都府","count":259},{"pref":"青森県","count":224},{"pref":"石川県","count":220},{"pref":"富山県","count":216},{"pref":"島根県","count":209},{"pref":"山形県","count":200},{"pref":"宮城県","count":189},{"pref":"栃木県","count":182},{"pref":"山口県","count":121},{"pref":"埼玉県","count":78},{"pref":"山梨県","count":72},{"pref":"鳥取県","count":65},{"pref":"福井県","count":62},{"pref":"岐阜県","count":49},{"pref":"広島県","count":44},{"pref":"和歌山県","count":43},{"pref":"滋賀県","count":36},{"pref":"静岡県","count":32},{"pref":"東京都","count":18},{"pref":"三重県","count":18},{"pref":"岡山県","count":16},{"pref":"大阪府","count":15},{"pref":"奈良県","count":8},{"pref":"神奈川県","count":4}]}
        total={6867}
        periodLabel={"2026年6月"}
      />

      <h2>月次サマリー</h2>
      <p>2026年6月の一ヶ月間にKumaWatchが収集した国内のクマ出没関連情報は、総計5209件に上った。情報源の内訳は、報道由来のものが4378件と大半を占め、次いで新潟県（207件）、群馬県（135件）、島根県（120件）など各自治体や関連機関からの情報が続く。なお、本期間中に公式情報として分類された事案は0件であった。</p>
      <p>都道府県別では、福島県の630件を筆頭に、東日本から本州日本海側にかけての地域で特に出没が多発する傾向が見られた。上位10都道府県の出没件数は以下の通りである。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">順位</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
              <th className="px-3 py-2">総件数に占める割合</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">630件</td><td className="px-3 py-2 text-xs">12.1%</td></tr>
            <tr><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">440件</td><td className="px-3 py-2 text-xs">8.4%</td></tr>
            <tr><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">438件</td><td className="px-3 py-2 text-xs">8.4%</td></tr>
            <tr><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">413件</td><td className="px-3 py-2 text-xs">7.9%</td></tr>
            <tr><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">319件</td><td className="px-3 py-2 text-xs">6.1%</td></tr>
            <tr><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">271件</td><td className="px-3 py-2 text-xs">5.2%</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">265件</td><td className="px-3 py-2 text-xs">5.1%</td></tr>
            <tr><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">257件</td><td className="px-3 py-2 text-xs">4.9%</td></tr>
            <tr><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">222件</td><td className="px-3 py-2 text-xs">4.3%</td></tr>
            <tr><td className="px-3 py-2 text-xs">10</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">221件</td><td className="px-3 py-2 text-xs">4.2%</td></tr>
          </tbody>
        </table>
      </div>
      <p>収集された情報のうち、キーワード分析からは「人身被害」に関連する事案が91件、「都市部」での出没が385件、「捕獲・銃猟」に関連する事案が82件抽出された。特に人身被害は全国的に発生しており、深刻な事態となっている。</p>
      <h2>主要トピック</h2>
      <h3>1. 全国各地で人身被害が多発</h3>
      <p>6月は全国で少なくとも91件の人身被害関連情報が確認され、極めて憂慮すべき状況である。被害の状況は多岐にわたり、登山中（群馬県、新潟県など）（※1, ※2）、農作業や工事現場での作業中（栃木県、富山県など）（※3, ※4）、山菜採り中（山形県、青森県など）（※5, ※6）、さらには住宅敷地内（奈良県）や散歩中（石川県）といった日常生活の場にまで及んでいる（※7, ※8）。特に、6月16日に奈良県下北山村で発生した事例では、男性が住宅敷地内で襲われ負傷しており、クマの生息域と人間の生活圏が非常に近接している実態を浮き彫りにした（※7）。これらの被害は、クマの行動が活発化する時期と重なっており、山林に入る際はもちろん、山際に近い地域で活動する際には最大限の注意が必要であることを示している。</p>
      <h3>2. 都市部およびその周辺での出没の深刻化</h3>
      <p>従来、クマの出没は山間部に集中していたが、今月は都市部や市街地での目撃情報が顕著であった。キーワード分析では385件が該当し、具体的な事例として、鳥取県智頭町ではJR智頭駅周辺の商店街でクマが目撃され、市街地を逃走する事案が発生した（※9）。また、秋田県秋田市の八橋運動公園では、グラウンド付近で目撃が相次ぎ、市民の憩いの場が一時閉鎖されるなどの影響が出た（※10）。このほか、兵庫県神戸市の阪急岡本駅山側（※11）や広島市西区の公園（※12）など、大都市の近郊でも出没が確認されている。これらの事案は、住民の安全確保のため、迅速な情報伝達と対策が不可欠であることを示唆している。</p>
      <h3>3. 東北地方における極めて高い出没頻度</h3>
      <p>地域別に見ると、東北地方の出没件数が突出している。福島県（630件）、岩手県（438件）、秋田県（222件）が全国の上位を占め、この3県だけで総件数の約26%に達する。岩手県では漆の採取中に男性が襲われる被害が発生し（※13）、福島県でも猪苗代町の小学校付近で目撃されるなど（※14）、被害と出没の両面で深刻な状況が続いている。背景には、地域の個体数密度の上昇や、山林の環境変化などが複合的に影響している可能性が考えられる。</p>
      <h3>4. 交通インフラへの影響</h3>
      <p>クマの出没は人的被害だけでなく、交通インフラにも影響を及ぼしている。6月4日には群馬県のJR吾妻線で、クマが列車と衝突する事故が発生した（※15）。この事故ではクマ1頭が死亡したが、もう1頭が現場から逃走しており、周辺地域の安全確保が課題となった。また、宮城県登米市では軽乗用車がクマと衝突し、乗っていた男女が負傷する人身事故も発生している（※16）。道路や鉄道といった線形のインフラは、クマの移動経路を分断、あるいは交差することがあり、今後も同様の事故が発生するリスクが懸念される。</p>
      <h3>5. 駆除・対応活動におけるリスク</h3>
      <p>クマへの対応は専門家にとっても危険を伴う活動である。6月30日には京都府京都市右京区で、対応にあたっていた猟友会の男性がクマに襲われ負傷する事案が発生した（※17）。住民の安全を守るための活動中に被害が発生したことは、クマ対応の難しさと危険性を示している。一方で、岩手県遠野市の運動公園や青森県八戸市では緊急銃猟による駆除が行われており（※18, ※19）、市街地に出没した個体への対応としてやむを得ない措置が取られるケースも見られた。</p>
      <h2>地域別動向</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道では413件の出没情報が寄せられた。特に苫小牧市の住宅街や千歳市の新千歳空港付近の公園など、都市近郊での目撃が特徴的である（※20）。東北地方は前述の通り、全国で最も出没が活発な地域であった。福島県（630件）、岩手県（438件）、秋田県（222件）を筆頭に、山形県や青森県でも人身被害が報告されている。特に秋田市八橋運動公園の事例は、都市公園という解放された空間に繰り返し出没した点で特異であり、市民生活への直接的な脅威となった（※10）。</p>
      <h3>関東地方</h3>
      <p>関東地方では群馬県（271件）の出没が最も多く、登山中の人身被害（※1）や列車との衝突事故（※15）など、深刻な事案が報告された。栃木県でも畑での作業中に男性が襲われ負傷している（※3）。また、首都圏においても、東京都の青梅市やあきる野市、神奈川県松田町などで目撃情報があり、都市部に近接した山間部での警戒が引き続き必要である。</p>
      <h3>中部地方</h3>
      <p>新潟県（440件）、長野県（319件）、富山県（221件）の3県で、総件数の約20%を占める。この地域は日本アルプスを抱え、登山やアウトドア活動が盛んであるが、それに伴うリスクも高まっている。新潟県南魚沼市や長野県大町市での登山中の被害（※2, ※21）、富山県南砺市の工事現場での被害（※4）など、山林での活動における遭遇事例が顕著であった。石川県小松市では散歩中の高齢者が襲われる被害も発生した（※8）。</p>
      <h3>関西地方</h3>
      <p>兵庫県（265件）、京都府（257件）で出没が多発した。神戸市の市街地に近い六甲山系や、京都市の西山地域など、大都市の背後に控える山地からの出没が目立つ。京都府と奈良県では人身被害も発生しており、特に奈良県下北山村の事例は住宅敷地内という点で衝撃を与えた（※7）。大阪府豊能町でもクマが確認され、関西圏全体でクマの生息域が拡大、あるいは人との距離が縮まっている可能性を示唆している。</p>
      <h3>中国・四国・九州地方</h3>
      <p>中国地方では島根県（120件）をはじめ、鳥取県、広島県、山口県など広範囲で出没が確認された。島根県邑南町の林業作業中の被害（※22）や、広島県での人身被害が報告されている。特に鳥取県智頭町の市街地への出没は、地域社会に大きな不安を与えた（※9）。四国、九州地方からの出没報告は、本期間のデータでは確認されなかった。</p>
      <h2>月次評価と展望</h2>
      <p>2026年6月のクマの出没動向は、件数、人身被害ともに極めて高いレベルで推移した。6月はクマの繁殖期にあたり、雄が広範囲に行動すること、また春に生まれた子グマを連れた母グマが外敵に敏感になる時期であることが、人と遭遇する機会を増やし、人身被害につながった一因と考えられる。特に、子連れの母グマは防衛本能から攻撃的になりやすいため、子グマを見かけた場合は決して近づかず、速やかにその場を離れることが鉄則である。</p>
      <p>都市部や住宅地への出没が全国的に見られる背景には、山間部の餌資源の状況に加え、一度人里の味（生ごみや果樹など）を覚えた個体が定着・学習したり、若い個体が新たな縄張りを求めて分散する過程で迷い込んだりするケースが考えられる。また、都市部と山林をつなぐ河川敷や緑地帯が、クマの移動経路（コリドー）として機能している可能性も指摘できる。</p>
      <p>データ累計から見ても、出没件数は高水準を維持しており、予断を許さない状況が続くと予測される。今後、夏から秋にかけては、ブナやミズナラなど堅果類の豊凶がクマの行動を大きく左右する。山の恵みが不作となった場合、食料を求めて人里への出没がさらに頻発・深刻化する恐れがある。各自治体による継続的な情報提供やパトロールの強化に加え、住民一人ひとりがクマの生態を理解し、ゴミの管理を徹底する、早朝・夜間の外出を控えるといった基本的な対策を講じることが、被害を未然に防ぐ上で極めて重要である。</p>

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
          <dd>2026年6月</dd>
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
