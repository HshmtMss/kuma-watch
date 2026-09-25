// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年7月5日〜2026年7月12日 / mode: weekly-report / 生成日: 2026-07-13
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-07-12-weekly-report";
const TITLE = "2026年7月5日〜2026年7月12日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年7月第2週（7月5日〜12日）のクマ出没総件数は1329件に達した。岩手、秋田、北海道で出没が頻発し、島根、秋田、東京では人身被害が発生した。特に都市部での目撃は100件を数え、奈良県では住宅倉庫に侵入した個体が銃猟されるなど、人の生活圏への接近が深刻化している。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-07-13",
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
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
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
      "title": "島根県益田市の山中で男性がクマに襲われ負傷",
      "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPQW1GejVLdkktczFreVRzeDRLTE9keXgtVjVyRzdFUmNCd1VSN3RFQ0pDLWl0enBHNWNGTnlkakpkdkdvajhzY1M3Nm9TYmxEYXpiYkI5YnhtNUU5ODRsemd5bzd5SE1ycHdwOXBhOVhockNtZkV3TGhoQ3NiLXRuM1cweXBnYU9D0gGIAUFVX3lxTE9BbUZ6NUt2SS1zMWt5VHN4NEtMT2R5eC1WNXJHN0VSY0J3VVI3dEVDSkMtaXR6cEc1Y0ZOeWRqSmR2R29qOHNjUzc2b1NibERhemJiQjlieG01RTk4NGx6Z3lvN3lITXJwd3A5cGE5WGhyQ21mRXdMaGhDc2ItdG4zVzB5cGdhT0M?oc=5",
      "site": "報道"
    },
    {
      "title": "山菜採りの83歳男性が襲われ負傷 秋田 由利本荘",
      "url": "http://www3.nhk.or.jp/news/html/20260705/k10015169281000.html",
      "site": "NHK"
    },
    {
      "title": "東京 檜原村 登山中の男性がクマに遭遇し滑落けが",
      "url": "http://www3.nhk.or.jp/news/html/20260707/k10015171021000.html",
      "site": "NHK"
    },
    {
      "title": "奈良県東吉野村の住宅倉庫にいたクマを緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1zc0JQSkJkcHZ1YkF5a252NUdMbHZQUUQ4RDZhSG5mN2NORFVWc0RZbC01N21LREVBZWNxMVFVVVc4MzlIc2VPUEhqZk1IUE9WazFEcDM4bV9sUXR5Y0QzRzU0Z1g?oc=5",
      "site": "報道"
    },
    {
      "title": "岩手県遠野市の神社境内に居座り続けたクマを緊急銃猟",
      "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNN2Y1MVJFZFk1Q3BMQnZWRWlyeDl1bS15VXpaTzdFN0F3MERXYmFiRENSLXF0TnFES3ZoLUJZTjVrb2tucXUwSlVuaFQ1LThvb0pfNksxYTRaQWpsUDdlUHZvalNxTjhNUmJMZTJzQ3ZGNndCX1R0YTJiNnNQcTBNVUFJNVdCNnk4QjZZOVByTmF0Yy1PVEN6OU1paEVNeWpfQ29wRHF4Yzk3OVR5Mmo4RG12ZE56c0NXRDdvcGEtRFhPRjhsaklGU2otbXp4RjhFeEE?oc=5",
      "site": "報道"
    },
    {
      "title": "仙台市宮城野区の苦竹駅近くの河川敷にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOaTU4VUgwVVJNNUh3Mkl3WVZhWEFNMENqdWNJcVQxODJMdDFzN0NIM3lJbEdQVEMwQjN4Z0xHUnUtbklBeWdIZmIza1MteXRNaFRQZjd5c0xzVUJpYW9mdGJQWnBVMkt6YkxYUS1rV0tEVkNXQWY1dWpTQnlIYk9mOExXYkNHTFVoeHBrYjZ3?oc=5",
      "site": "報道"
    },
    {
      "title": "北海道新ひだか町の住宅街の道路をヒグマが横断",
      "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE1RNmh6cXRNSWFSWUZtU09LczJ0UlVnc2ZGVmFXNXpHdDRJOEFwMndTZVg2SmlLRl9QVF9wVGw0ZnVneWYxc01ERW1ZbHZvRGpmRk82aFc3dHlRckdvWnRleGRfdTI?oc=5",
      "site": "報道"
    },
    {
      "title": "新潟県妙高市の住宅密集地でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiREFVX3lxTFBtSGV3Q0JLdFFhc2ZNUUQ5dFVreWJ5N0FDN1pIYlBwenpRX2FhNjczMXlDTzNGRlppNkp6enFWWWhFZUxy?oc=5",
      "site": "報道"
    },
    {
      "title": "岩手県盛岡市上米内の小学校付近でクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE1iUE1IZU9iYnNJOEhQSFQ1ci1mVUhLTjlwTWFDbWh3ZlNmRjFPUlc1RHpRMTNyb1c3WUVBWXF1b3pwRWNqZm50eWpGV2ZFZw?oc=5",
      "site": "報道"
    },
    {
      "title": "栃木県足利市の第一中学校でクマ目撃",
      "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE5zT2xfbzRHU3JsNEZjR0ZwUEp3bENPOG9ySzlBZUdhd092RjdyZmRHVDc4UFh6dzQ4alpkVUxYTlY5R0pGQWt1ZzVxdnMxdjhpVktVOFRyS3ltRWF1WHZ0Mm5B?oc=5",
      "site": "報道"
    },
    {
      "title": "石川県能美市の住宅地近くでクマが出没",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFBqSTBXd051NmZwYklPcDVMbmF2X2ZiT1VoWkFGeVNvTm9OeDBsTTZlVjYtTEZhQm5ybFJtWURHTUpsQ1p0NEVPSVdia05HQjQtbDFIWjRwS1Z4Qm9JbEhreVNSX1VEWUNMMGYyZmhQb1dTSl9KcmhQMEhZMA?oc=5",
      "site": "報道"
    },
    {
      "title": "山形県米沢市の市街地などで目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE12dTJ1SC1CaGhRZWw1UExCMmd5cVhld04tdnVvMi15TjBBbk4tWTFSMHBhYzVtYnJnczhZeEswNEthN2ZZVXdHdmxsQkFvZ0VvNDR4eXJvVF9GZw?oc=5",
      "site": "報道"
    },
    {
      "title": "長野県池田町の小中学校や役場近くで目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5OaFNBN2R5UmNUMnBxZ3NBWktHb3V3YzMtdndjdHJ4Y1lRc2JsaFlaeDJTUFl4Y3BVbE5aZXZJd1pfMnlfR0FGeV96aWNCbk9mdHdMQy1pZ3hJdHN3bFRuaUsyNVQ3czRlSWhiRlN1Y3cyUnhjQnRGb1NPWm90X0k?oc=5",
      "site": "報道"
    },
    {
      "title": "福島県会津若松市の市街地でクマの目撃情報",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBCT3o0UFZYbW5mT05UM1ZjbjdhOEYteXZoak50S1lxWWNySUtERG5ld2I5NVBDaFo1bkhhdzN1UnR1U1FXYnhwS3NMZThhXzhtRUROUzVSa2pkOHAxd1VqNzVaMC1RVVJ1alp3YkJOODh3dkIyVmdqSUtySW8zRVU?oc=5",
      "site": "報道"
    },
    {
      "title": "鳥取県鳥取市の小学校近くの県道脇で子グマを目撃",
      "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPVGMzTGNHVVVMazZDTjJpbzJQXzUxMC1UZnFlS3NZdkY2eXhfVjF6Y3hXeWtKZzhBX3dwZTNBbWVVbVdWeGVXc2x4QWw4WFpWdEZqWHd1X2hEMFpyYTJ6RGk0VmFCdXBlTGR4LWJfcS04ankyTDZGRWhUc2FtX1hlTmtYMFg1ZS1jQklfRzZB?oc=5",
      "site": "報道"
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
          週次レポート
        </span>
        <span>対象期間: 2026年7月5日〜2026年7月12日</span>
        <span>·</span>
        <span>公開: 2026-07-13</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <p>本レポートは、2026年7月5日から7月12日までの期間にKumaWatchが収集した国内のクマ出没事案に関する週次分析である。この期間、全国で確認された総件数は1329件に上った。情報源の内訳は、報道機関によるものが1170件と大半を占め、自治体等からの公式情報は0件であった。出没件数が特に多かったのは岩手県（155件）、秋田県（155件）、北海道（151件）で、これら3道県で全体の35%以上を占めている。本期間中は「人身被害」に関連するキーワードを含む事案が9件、「都市部」での出没が100件、「捕獲・銃猟」が9件確認されており、クマと人間社会との距離が縮まっている現状が浮き彫りとなった。</p>
      <h2>主要トピック</h2>
      <h3>人身被害の発生と特徴</h3>
      <p>当期間中、少なくとも3つの地域で計9件の人身被害を示唆する情報が確認された。これらの事案は、いずれも山林やその周辺部での活動中に発生しているという共通点がある。</p>
      <ul>
        <li>島根県益田市では7月10日、山中で作業をしていた男性がクマに襲われ負傷した（※1）。</li>
        <li>秋田県由利本荘市では7月5日、山菜採り中の83歳男性が襲われ、けがを負った（※2）。</li>
        <li>東京都檜原村では7月7日、都民の森の登山道で男性がクマに遭遇し、驚いて滑落し負傷する事案が発生した（※3）。</li>
      </ul>
      <p>これらの事例は、山林がクマの生息域であるという基本的な認識を再確認させるとともに、登山、山菜採り、林業といった活動におけるリスク管理の重要性を示している。特に、単独での行動はリスクを高める要因となりうる。</p>
      <h3>都市部および生活圏への出没頻発</h3>
      <p>本期間の特筆すべき傾向として、都市部およびそれに準ずる人口集積地での出没が100件確認された点が挙げられる。これは市民生活に直接的な影響を及ぼすものであり、極めて深刻な状況である。</p>
      <p>宮城県仙台市では、JR苦竹駅近くの河川敷でクマが目撃され、市街地に隣接したエリアでの出没として注目された（※6）。北海道新ひだか町では、深夜の住宅街をヒグマが横断する様子が報告されている（※7）。また、新潟県妙高市では住宅密集地での目撃情報が寄せられた（※8）。さらに、学校周辺での目撃も全国で相次いだ。岩手県盛岡市では小学校や中学校の付近（※9）、栃木県足利市では中学校（※10）、長野県池田町では小中学校や役場近く（※13）で目撃されており、児童・生徒の安全確保が喫緊の課題となっている。</p>
      <h3>緊急銃猟事案と建物への侵入</h3>
      <p>人の生活空間の奥深くまでクマが侵入し、やむを得ず銃猟に至った事案も発生した。奈良県東吉野村では7月11日、住宅の倉庫にクマが入り込んでいるのが発見され、緊急銃猟により駆除された（※4）。この事案は複数の報道機関によって報じられ、クマが建物内部にまで侵入し得ることを示す象徴的な事例となった。また、岩手県遠野市では7月6日、神社境内に数日間居座り続けたクマが、安全確保のために緊急銃猟の対象となった（※5）。これらの事案は、クマが農地や山林だけでなく、建造物や人の管理する敷地内をも行動範囲とし始めている可能性を示唆しており、対策のあり方を再考する必要がある。</p>
      <h2>地域別動向</h2>
      <p>出没情報は全国的に見られたが、特に東北地方と北海道、北陸信越地方で集中する傾向が続いている。</p>
      <ul>
        <li>岩手県・秋田県（各155件）: 両県が全国で最も多い件数を記録した。岩手県では盛岡市などの都市近郊から遠野市のような山間部まで広範囲で出没が確認されている。秋田県では由利本荘市での人身被害が発生するなど、依然として予断を許さない状況が続く。</li>
        <li>北海道（151件）: 新ひだか町の住宅街や別海町の小学校グラウンド付近など、ヒグマの市街地への接近が目立つ。道東・道南を中心に警戒レベルが高い状態にある。</li>
        <li>新潟県（98件）: 南魚沼市や妙高市など、住宅や学校、宿泊施設といった生活圏での目撃情報が多数を占めており、住民への注意喚起が強化されている。</li>
        <li>福島県（91件）: 会津若松市の市街地や住宅の庭先など、人との距離が非常に近い場所での目撃が報告されている（※14）。</li>
      </ul>
      <h2>注目事案の整理（時系列）</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">日付</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">場所・状況</th>
              <th className="px-3 py-2">事案の種別</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-07-05</td><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">由利本荘市</td><td className="px-3 py-2 text-xs">山林で山菜採り中の男性が襲われ負傷</td><td className="px-3 py-2 text-xs">人身被害</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-05</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">仙台市</td><td className="px-3 py-2 text-xs">JR苦竹駅近くの河川敷に出没</td><td className="px-3 py-2 text-xs">都市部出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-06</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">遠野市</td><td className="px-3 py-2 text-xs">神社境内に居座り、緊急銃猟実施</td><td className="px-3 py-2 text-xs">緊急銃猟</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-07</td><td className="px-3 py-2 text-xs">東京都</td><td className="px-3 py-2 text-xs">檜原村</td><td className="px-3 py-2 text-xs">登山道で登山者が遭遇し滑落、負傷</td><td className="px-3 py-2 text-xs">人身被害</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-08</td><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">妙高市</td><td className="px-3 py-2 text-xs">住宅密集地で目撃</td><td className="px-3 py-2 text-xs">都市部出没</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-10</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市</td><td className="px-3 py-2 text-xs">山中で作業中の男性が襲われ負傷</td><td className="px-3 py-2 text-xs">人身被害</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-07-11</td><td className="px-3 py-2 text-xs">奈良県</td><td className="px-3 py-2 text-xs">東吉野村</td><td className="px-3 py-2 text-xs">住宅倉庫に侵入し、緊急銃猟により駆除</td><td className="px-3 py-2 text-xs">緊急銃猟</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <h3>リスク全体傾向</h3>
      <p>当期間の出没件数は依然として高水準で推移しており、クマの活動が活発な時期であることを裏付けている。人身被害は山林内での活動に起因するものが中心であったが、全国で都市部や住宅地への出没が100件に達したことは、市街地における不意の遭遇リスクが著しく高まっていることを示している。特に、これまで比較的出没が少なかった地域や、河川敷、都市公園といった緑地帯を介して、クマが市街地深くまで侵入するケースが増加傾向にある。これは、従来の「山と人里」という境界が曖昧になりつつあることの現れであり、新たな対策が求められる段階にあると評価できる。</p>
      <h3>次週の警戒ポイント</h3>
      <p>次週に向けて、以下の点に特に警戒が必要である。</p>
      <ol>
        <li>夏期のレジャー活動: 登山、キャンプ、渓流釣りなど、山林に入る際は、クマ鈴やラジオなど音の出るものを携帯し、自身の存在をクマに知らせることが重要である。食べ物やゴミの管理を徹底し、決して放置しないこと。</li>
        <li>都市部での警戒: 早朝や夕暮れ時は、クマの活動が活発になる時間帯である。河川敷や大きな公園、林に隣接した住宅地などでは、散歩やジョギングの際にも周囲への注意を怠らないこと。</li>
        <li>誘引物の除去: 生ゴミや収穫しない果樹、ペットフードなどはクマを住宅地に引き寄せる強い誘引物となる。地域全体でこれらの管理を徹底し、クマにとって魅力のない環境を作ることが、最も効果的な防御策である。</li>
        <li>正しい情報の入手: 自治体や警察が発信する最新の出没情報に注意を払い、危険とされる場所には近づかないこと。目撃した場合は、速やかに関係機関へ通報することが求められる。</li>
      </ol>

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
          <dd>2026年7月5日〜2026年7月12日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-07-13</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-07-13</dd>
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
