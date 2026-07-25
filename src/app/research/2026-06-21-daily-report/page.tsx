// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月21日 / mode: daily-report / 生成日: 2026-06-22
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-21-daily-report";
const TITLE = "2026年6月21日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月21日、国内で230件のクマ出没が確認された。人身被害の報告はなかったものの、北海道や東北地方を中心に住宅地や学校近辺での目撃が10件発生し、市民生活との距離が接近している状況が明らかになった。本レポートは当日の出没状況を地域別に分析し、そのリスクを評価するものである。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-22",
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
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
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
      "title": "富山県小矢部市 石動小付近でのクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE4yeGZGbmxTTjJHVk1ZNERzOXNrQVZuOHNpM1hBeHVVbEwwRzRiTkVUMGZ3R2dWRmVpLWY2VENtN28yTXJHbnUzbUw2aw?oc=5",
      "site": "news"
    },
    {
      "title": "島根県益田市 中西中学校付近でのクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1KbExpeGI5dTVRM0tUb043OXFSbWJFRnhkZUFZRGFVNVlkNTQ2aGJ1dGU1bmhJT1Jaam1RcTBfM1JnYmFMUXZQT0tKbjRZNzV0OWVYcDVISjJBZms?oc=5",
      "site": "news"
    },
    {
      "title": "北海道日高町 小学校近くの道路上でのクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE8wUFdjd0RqWVliZ2o3SjZmaVhZNjA2LVEtWFRsZ2FaTGFxa2UtdjlJVzZ6T3paMnc4WFZ5bDlIV2YyLUZlZm40d0ZaSDhLVG9wOVZiYS1XMA?oc=5",
      "site": "news"
    },
    {
      "title": "新潟県上越市 旧中保倉小学校付近でのクマ目撃情報",
      "url": "",
      "site": "niigata"
    },
    {
      "title": "北海道新ひだか町 住宅敷地内でのクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9YOFZQSjlKZXpuS1lBNDNycGJMZGhJREs1YThSZmNQV2RtbGZtMWUxV1V1MWZsVG1YVWlSRmpZNGtYLXc5ejNCajhCQ1VUUVctWU1MZEJKdG4xVE5nTkZYX3I0M3EySVJaNVhDTUpuOGYxdUo4UTh0NkNWaw?oc=5",
      "site": "news"
    },
    {
      "title": "北海道新ひだか町 住宅街での小学生によるクマ目撃情報",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE00bjJzd09QTUlhQkItdW5jMGZfNGtvaVJoNkJkbWZobXZfMFNzYmN4Rm42NjhuVUR0bDJJaU8xR2lhUmJpckFKUUo4UkpsQQ?oc=5",
      "site": "news"
    },
    {
      "title": "岩手県盛岡市 住宅地内での幼獣目撃情報",
      "url": "",
      "site": "iwate-morioka-mymap"
    },
    {
      "title": "秋田県秋田市 新屋町下川原でのクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPeWJFcktiM2VidVRUMjlYRGtYMm5kcktEamJpa2FLR1FWcXFodWtkc2tvSjBXYlpJRTR1Zm5pckxWZ0hpNXFRcEJTX1Y4VUdvakN4NFl1YTNNTThfV3ZJXzR5aVRWWmZ2Vm80MUplVjY2NFpHbXRPZDlyclJYcmlSNUFkVl9YSlptcHczaHhiQjNPTmJqV3E3TVRHdDTSAaIBQVVfeXFMTU5lRGVBMEdoOHEtUmd4WVYxVEl0U1JuYmJVZWRBNWoxS2ZwUzFSMDhTekJrV21BNF9zY0xNMm5VbGE2MW5NWl9xZXc3Uk4tVUg5dUs3ZmlmV2NZQllSR2RRTVRUWmlhSmRudE5tOE44Q0dETzZzSnMtVGUtSXQ1SkJ2N0FEN3Z1SE9PTE85bk5yUDdVdUtINWxwNHBBZXFRVW9R?oc=5",
      "site": "news"
    },
    {
      "title": "栃木県那須町 高久丙でのクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOd0pKaERXaVVkRGNJY05zY2tGbHcwSnFyZll0VWIxZk5qRFhaODNjVkJvSWxZbHNpQnZHNXl0eVY0WkZuZkdubFBFVzJIcll4YUJRRTRPcUdILWtQUlk5UkNDNzZRdV9IdmFZMm1ZenNDdXNaYXZNLUUxdXptYkUtQ05zME9kaGNTUzVoOUU4aTcyM2ZGWXJyVGV6dTF2MF9HQzFWM2lCRGljaGRJd0o3TUZPUG5KN0FqcnpjcVk4Y0J4ZmtxLVN5eW1WSDd6UWtzWFRLOS1FUzZickxWYldCNnljcXZUQVhoREV6MlMtNy1wUdIBogFBVV95cUxQaHlwMlIzSFF5bklKLXlmbm1oQ21lMVZ6UWlLWTlrbHMxQVdEUjhSQmoyd1FNU2MxY3hSRTdvcVUxZWhSMWFtYnhET1A5dG9KYk03NUFOUmpCZzlDWDZGQVhDdi1uZzhNQkZiVXpVM0F3RWdHZmNFMmZKMExOdVlFSk53cU1MVFljdzF5a09vMDhSMEw5bHBQaUxlZTYtb1hHQWc?oc=5",
      "site": "news"
    },
    {
      "title": "富山県黒部市 宇奈月温泉でのクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQcXhtNjl5UXR1bW5TVy1nN3NXZmdicjBYSmc2cHZBemJoVm1yUDdOcTFBbEowY3ZuTkFrdjN1UHZvWW9NX2RsNFh5MlJMWEQtVndiMF93b1JEekV2eVhIb1R2S05NbkVQTXhwWmNObG8xeFFrM0E0WEZ0T3lSV3U2OVZCc05SRHd2YVlTUlh2anBWMHJYWmJ3bXVrT3PSAaIBQVVfeXFMTXNleGtvVFhJT1FSU284NHRnUTViVER5dzFveU5uLVhkUEl6YXdfZUVjYnR2dk9MdXFWbDQydDVUU1R5VVRFMGs1OXZHQWRQTjhKOFV1VW5ual9Oa2QwbFAxdWVReFFrOUM4NTFjUUtqSWpGaGhHaHZoWFo2ZUNnN0E1QnNBaURnVHdueDhDTUVmT2NQZnZuRUlMRFVmejhtYmZ3?oc=5",
      "site": "news"
    },
    {
      "title": "兵庫県西脇市 富吉南町でのクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNR2YwR0I4NGl4S2NZTGxtUFp5OXFrZF9ZWmpEQ080a0tCbWJCMHZkeWVtRVhMX3hwS1BNWGFSb1o0TUtmRzl4ME1DZTNsamItanZ2V2xfOWRMaTRwMl9jTGI0cWRmMGdxdU93cENRUnhMVV9hS2ZzLXhQOG5EU0ZDakRjaUZCTGUtb3BLVzVYLUdUMUtzY1ZqN1l1YnXSAaIBQVVfeXFMUDUtUVJ0cDVjTEpNeW5TZFhnTzRyREUwdUpTSlplcTNrYkpDM2ZQMXN2VTB1U1Y2VkJWUXJoaDVEVmpfT3BGb1hvc0NqNFBmZ3ZGcTcwWTI1czZCWXo2SzNick9zT1VQMHJoWW9WTmxrLWhycmhqTHRtM0JvSDZQeXJVNGdzVG9vamc4YXNURUJmcllNdlpOTFJlcmt3Rk1pRURn?oc=5",
      "site": "news"
    },
    {
      "title": "京都府京都市右京区 京北柏原町高瀬でのクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQb29HeVZJMk44cEVxVGxYUS1VWGhoUzhyODR1cV9pWEFZNGtVaWdvaXlLTGhhRWdnVlR4dWNLMUdldnA1V19BdGFhR19ab2lpOTZGRkpTVEtWdlFHN09JeHE5REJCOFdNVHlZbWpaUWUybnJvUVNyMmdZakQ0bmN2RmRMMWtaekRtRF9INzJ5UDI5NHFFdk9FcEZGck_SAaIBQVVfeXFMUHRqVnBjVzFSSzctQkVfbE04RHVwZFdDejVLSDM3SmdFUmt2WmRJdkN6dEJ4VGI4Y0tINFltU3NIMUNKSFdhTW0zaHN5NzNxMFUtYjB0SHF5bWFfNmUxbkJTTXVZUllUaUctWk9MWFVBdDd4UFhiN25WSV82endVdlQyRjBNbFc0NzRnOEpvTC0ycWlLek1ROXQtblRSWlktMnBR?oc=5",
      "site": "news"
    },
    {
      "title": "島根県江津市 桜江町大貫の山林での親子グマ目撃情報",
      "url": "",
      "site": "shimane"
    },
    {
      "title": "山口県 国道でのクマ横断情報",
      "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE1PNWxpbUZBM2w2S1BZV1JDVlhIVDJ1bmg2SWp3amZzOS10b0JPMU13T01nT0lqY05id21fSWdZR3VTNXZNSUt3cG1SS1p4UEhWS3AwbXo4MHJIZ0dGVTNGRkNJbUk0MDRObjgyc0d3?oc=5",
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
        <span>対象期間: 2026年6月21日</span>
        <span>·</span>
        <span>公開: 2026-06-22</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":38},{"pref":"岩手県","count":32},{"pref":"新潟県","count":27},{"pref":"北海道","count":27},{"pref":"兵庫県","count":23},{"pref":"長野県","count":19},{"pref":"群馬県","count":17},{"pref":"福島県","count":16},{"pref":"京都府","count":15},{"pref":"富山県","count":8},{"pref":"青森県","count":8},{"pref":"山形県","count":8},{"pref":"山口県","count":6},{"pref":"島根県","count":6},{"pref":"岐阜県","count":4},{"pref":"福井県","count":4},{"pref":"栃木県","count":4},{"pref":"岡山県","count":3},{"pref":"鳥取県","count":2}]}
        total={267}
        periodLabel={"2026年6月21日"}
      />

      <p>2026年6月21日、KumaWatchが収集した国内のクマ出没情報は総計230件に達した。都道府県別では岩手県（31件）、新潟県（24件）、兵庫県（23件）、長野県（21件）、秋田県（21件）、福島県（21件）などが上位を占め、広範囲にわたる出没が確認された。人身被害や銃猟による捕獲に関する報告はなかった。しかし、「都市部」キーワードに一致する事案が10件確認されており、人の生活圏への接近が顕著な一日であった。情報源の大部分は報道由来（211件）であり、自治体等からの公式情報は限定的であった。</p>
      <h2>主要事案：都市部および生活圏近隣への出没</h2>
      <p>当日は人身被害こそなかったものの、市民生活の身近な場所での出没が全国で相次いだ。特に学校や住宅地周辺での目撃は、重大な人身事故につながりかねない事案として注目される。富山県小矢部市では小学校付近で成獣が目撃され（※1）、島根県益田市でも中学校付近での目撃情報があった（※2）。北海道日高町や新潟県上越市でも、それぞれ小学校や旧小学校の近くでクマが確認されている（※3, ※4）。</p>
      <p>住宅地への出没も深刻である。北海道新ひだか町では、住宅敷地内や住宅街での目撃が複数報告され、中には小学生が1.2mの個体を目撃したケースも含まれていた（※5, ※6）。岩手県盛岡市では住宅地内で幼獣1頭が目撃されており（※7）、近くに母グマがいる可能性も懸念される状況であった。これらの事例は、クマが山林から人間活動エリアへと深く侵入している実態を示している。</p>
      <h2>地域別の動向</h2>
      <p>当日の出没は全国的に確認されたが、地域ごとに件数や傾向に違いが見られた。</p>
      <h3>北海道・東北地方</h3>
      <p>北海道では16件の出没が報告され、その多くが新ひだか町の住宅街周辺に集中していた（※5, ※6）。東北地方は全国で最も出没が多発した地域であり、岩手県（31件）、秋田県（21件）、福島県（21件）の3県で全国の約3割強を占めた。岩手県盛岡市の住宅地での幼獣目撃（※7）に加え、秋田県秋田市の市街地（新屋町、桜ガ丘）での出没（※8）など、都市部への接近が顕著であった。</p>
      <h3>関東・中部地方</h3>
      <p>関東地方では群馬県（16件）での出没が目立った。栃木県那須町でも複数の報告があった（※9）。中部地方では、新潟県（24件）と長野県（21件）で出没が多発した。都市近郊から山間部まで広範囲で確認されている。また、富山県黒部市の宇奈月温泉のような観光地での目撃も報告されており（※10）、観光客との遭遇リスクも示唆された。</p>
      <h3>関西・中国地方</h3>
      <p>関西地方では兵庫県（23件）と京都府（12件）で出没が多発した。西脇市や京都市右京区など、内陸部での報告が中心であった（※11, ※12）。中国地方では、島根県、山口県、岡山県で出没が確認された。島根県江津市では、体長1メートル超の成獣と50センチ以下の幼獣、計2頭の目撃が報告されており（※13）、親子である可能性が高い。山口県では国道を横断する体長1.5mの大型個体が複数報告され（※14）、車両との衝突事故のリスクも懸念される事案であった。</p>
      <p>なお、四国・九州地方からの出没報告は確認されなかった。</p>
      <h2>出没情報の傾向分析</h2>
      <p>当日報告された230件の情報を分析すると、いくつかの特徴が見られる。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">順位</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">件数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">1</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">31</td></tr>
            <tr><td className="px-3 py-2 text-xs">2</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">24</td></tr>
            <tr><td className="px-3 py-2 text-xs">3</td><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">23</td></tr>
            <tr><td className="px-3 py-2 text-xs">4</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">21</td></tr>
            <tr><td className="px-3 py-2 text-xs">5</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">21</td></tr>
            <tr><td className="px-3 py-2 text-xs">6</td><td className="px-3 py-2 text-xs">福島県</td><td className="px-3 py-2 text-xs">21</td></tr>
            <tr><td className="px-3 py-2 text-xs">7</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">16</td></tr>
            <tr><td className="px-3 py-2 text-xs">8</td><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">16</td></tr>
            <tr><td className="px-3 py-2 text-xs">9</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">12</td></tr>
            <tr><td className="px-3 py-2 text-xs">10</td><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">8</td></tr>
          </tbody>
        </table>
      </div>
      <p>出没件数は東日本の日本海側と内陸部に集中する傾向がある一方で、関西や中国地方でも多くの出没が記録されており、クマの生息域が広範囲に及んでいることがわかる。また、幼獣や親子グマの目撃が複数あったことは、次世代の個体が人間活動域の近辺で育っている可能性を示唆している。</p>
      <h2>リスク評価</h2>
      <p>2026年6月21日の出没状況を総合的に評価すると、以下のようなリスク要因が指摘できる。第一に、幼獣の存在である。岩手県盛岡市や島根県江津市で幼獣が目撃されており（※7, ※13）、これは子を守ろうとする母グマが近くにいる可能性、あるいは経験の乏しい親離れ直後の若グマが人間活動域に迷い込んでいる可能性を示唆する。いずれの場合も、予測不能な行動を取る可能性があり、遭遇時のリスクは高い。</p>
      <p>第二に、人口圏への著しい接近である。山中の餌資源に関するデータはないが、全国的に住宅地や市街地、学校付近への出没が確認されたことは、クマが恒常的に人里へ接近している実態を裏付けている。人為的な食物資源（生ゴミ、管理されていない果樹など）への誘引も考えられる。人身被害の報告がなかったことは幸いであるが、登下校中の児童・生徒や住民との偶発的遭遇の危険性は極めて高い状態にあると評価される。今後、より一層の警戒と、人とクマの棲み分けを促進する地域レベルでの対策が急務である。</p>

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
          <dd>2026年6月21日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-22</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-22</dd>
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
