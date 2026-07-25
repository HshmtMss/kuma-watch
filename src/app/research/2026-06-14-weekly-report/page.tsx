// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月7日〜2026年6月14日 / mode: weekly-report / 生成日: 2026-06-15
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-14-weekly-report";
const TITLE = "2026年6月7日〜2026年6月14日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年6月第2週の国内におけるクマの出没報告は992件に達し、依然として高水準で推移した。新潟、兵庫、福島で特に目撃が多発し、全国的に都市部や住宅地への出没が常態化。交通事故や緊急駆除、観光地での捕獲など、市民生活に直接的な影響を及ぼす事案が複数発生した。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-15",
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
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
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
      "title": "住宅密集地でクマ1頭を捕獲",
      "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE8zVktmSl9Bek5oT3ZQVW9ndFI2emhIT0NUN0hBME9wb3VnMFdRM1ZCYUtWanYyUUlmVHJHeFlvWlF4TUFyaEJWajFGR0FmYXprakVKZkJ4aEZ2WE0?oc=5",
      "site": "Google News"
    },
    {
      "title": "太白区の住宅地でクマを目撃",
      "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9SS25zODRfTjVCOUFteGJwZkZnbUc2dGRybG1CWXZISFNPSWdGNFZNNlhfdUxscU9aUm9zNmlXUllCb1NEdmxlNkZQeXlJRTQwa3Q3RGZBcGxiMkhSU2J2bUVKUlg5aTRGbFEycXdRaWVKaEpNRkhHTTlrcmhwLXc?oc=5",
      "site": "Google News"
    },
    {
      "title": "兵庫 西宮の住宅街近くでクマ目撃情報相次ぐ",
      "url": "http://www3.nhk.or.jp/news/html/20260613/k10015149241000.html",
      "site": "NHK NEWS WEB"
    },
    {
      "title": "中心部の住宅地で目撃相次ぐ",
      "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5nZ0ZteV95ZmhoU0dpQjJvcXNJNWZFY0Y4dEFIZVExblBVdzNhRUthb21LemtEMXJ0ZzJjeWZ6QTRoTnNSNW9iWW55WDZ0aEVIU3g1bG9DUy1jYzZOcFhzNWk4R20xYlpBUXdrd3d1akM?oc=5",
      "site": "Google News"
    },
    {
      "title": "富山市住宅街でクマらしきもの",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE9VTGV2R193LWdhM3NNaTFnYnRjWi1sSHZ0dUtobzhWeEh6MEU3Yk1RR0tRMS1PdEM3VWdZc0xwaUtXTW90S0t6SnRmSWFnUQ?oc=5",
      "site": "Google News"
    },
    {
      "title": "遠野運動公園にクマ出没、緊急銃猟で駆除",
      "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9aLWJod0s3WWZYcTF2aWJTWHdYV1NLUzRZLWJQNjZVd2c1elhWcXgxRzdCWkhxNlo1M0tHVVdSQVRBX3dSX3JPcVF2NUhjUVlYT3M0cUtPamYzdw?oc=5",
      "site": "Google News"
    },
    {
      "title": "公園の遊歩道にクマ出没",
      "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1LOTlrSnJCYjNpUE45RzY3M3pGY1hyUW5NQ0N6cnhrXzhwMncyQmR0TkE4YWZqdElXV0tKYVZOQ0NCUjVrbFduQWY4VEZnaWVjYkFhWWQ2YkxnRThXZHExNkVDS0JSdjRUODRvRFl5RUJ0UzFmZFBGZGU0ONIBgAFBVV95cUxOaXJVcHFtbGpBTTNIcjVMcm4xby15SU12S2ZZeUxJUTAyVjR2RVBxYmdMVHVJMWh5N3lyWE5EYnhjbjNtd09lR0huVFhnUXVBVlBtM0lRT3dyVWxmeUFUMWxUX2ljSXRNc3I1b1Z5YlhRQzBqX21ZNEhFZjBJMWoyYQ?oc=5",
      "site": "Google News"
    },
    {
      "title": "JR日詰駅付近で小グマ目撃",
      "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQTm9BQmN1Zm5JMUpxTUMzQTRteHVDU2Zzdi1tbUdZYzJDREt0MjRuc01NQjVma3FVRVNMemJFeWo1aUJfMVdnUHBubVRsYnIzemJoTW1VaVh1STNsM01oeWZHY3MxYU5BN3lWZ0ZTUWVXT1Bpc3VkOU5PNmhFb3RzRWlDWnNHUFE?oc=5",
      "site": "Google News"
    },
    {
      "title": "衣川中学校付近でクマ1頭目撃",
      "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5HN0FFVEt1OHpLdFNqM0NYWFExMVZBYWo3dnRUQ3JOWTFDM0NvRU5JSlZ3bFRGODZsTXZuQmRBdHZCb0hpZE9SSWJVekhEZw?oc=5",
      "site": "Google News"
    },
    {
      "title": "クマと軽乗用車が衝突し運転手搬送",
      "url": "https://news.google.com/rss/articles/CBMiT0FVX3lxTFBlN1BKcmNuYW51eFlTWktQYUFIdjRoTFljSDdJeVdWc0wyTEFzSGYtSkRxOXpEN3VKdHl2eW9TRTlUYjFETDdfQURjUGl3Z28?oc=5",
      "site": "Google News"
    },
    {
      "title": "天橋立にクマ、6時間後捕獲",
      "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE43cWloSEp5bHM5NWtnZkMxTzRfUTJwVll5YmdhanJEV0VsdVJEdE9VdVE3M040SlREX1hsblM2VGJtMlZTUDFEN1MxUDU2LS1YNXFjR3BKR3k?oc=5",
      "site": "Google News"
    },
    {
      "title": "福島大近くの住宅街周辺で目撃",
      "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE5FQjZFbDd3ZTZmaWlQLUNIN3ZJMUhiVmRDTGZIWVUtX2tybzJrYk54NjNpQTlCYVdCM1ctQXJ1QkpmZ1oxdEVBTVZvOUo2Y3FSZmFQVTMxa3dGYWZNT0dISTdLVW5BT1ZM?oc=5",
      "site": "Google News"
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
        <span>対象期間: 2026年6月7日〜2026年6月14日</span>
        <span>·</span>
        <span>公開: 2026-06-15</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":247},{"pref":"福島県","count":148},{"pref":"北海道","count":136},{"pref":"新潟県","count":110},{"pref":"兵庫県","count":92},{"pref":"岩手県","count":88},{"pref":"石川県","count":63},{"pref":"群馬県","count":54},{"pref":"京都府","count":52},{"pref":"宮城県","count":51},{"pref":"長野県","count":50},{"pref":"富山県","count":49},{"pref":"栃木県","count":45},{"pref":"島根県","count":44},{"pref":"山口県","count":26},{"pref":"青森県","count":25},{"pref":"埼玉県","count":24},{"pref":"山形県","count":24},{"pref":"岐阜県","count":18},{"pref":"山梨県","count":14},{"pref":"大阪府","count":12},{"pref":"福井県","count":9},{"pref":"三重県","count":8},{"pref":"和歌山県","count":8},{"pref":"鳥取県","count":7},{"pref":"静岡県","count":5},{"pref":"東京都","count":2},{"pref":"岡山県","count":2},{"pref":"広島県","count":2},{"pref":"滋賀県","count":2}]}
        total={1417}
        periodLabel={"2026年6月8日〜2026年6月14日"}
      />

      <p>本レポートは、2026年6月7日から6月14日までの7日間にKumaWatchが収集した国内のクマ出没情報を分析・総括するものである。期間中の総件数は992件であり、報道由来の情報が760件を占めた。出没情報は全国に分布するが、特に新潟県（108件）、兵庫県（92件）、福島県（90件）で多発した。人身被害につながりうる事案が4件、都市部での出没が82件、捕獲・銃猟事案が25件確認されており、引き続き人とクマの遭遇リスクが高い状況が続いている。</p>
      <h2>主要トピック</h2>
      <h3>1. 都市部・住宅地への出没の常態化と深刻化</h3>
      <p>当期間において最も顕著な傾向は、都市部および住宅密集地へのクマの出没が全国的に常態化している点である。「都市部キーワード一致」事案は82件にのぼり、市民の生活空間がクマの行動圏と大きく重複している現状が浮き彫りとなった。特に、6月11日には栃木県宇都宮市の住宅密集地でクマ1頭が捕獲される事案が発生した（※1）。他にも、宮城県仙台市太白区（※2）、兵庫県西宮市の住宅街（※3）、長野県松本市の中心部住宅地（※4）、富山県富山市の住宅街（※5）など、各地の都市圏で目撃が相次いだ。これらの事案は、従来のような山麓部だけでなく、市街地の奥深くまでクマが侵入していることを示唆しており、住民の安全確保が喫緊の課題となっている。</p>
      <h3>2. 公園・駅・学校など公共施設周辺での目撃多発</h3>
      <p>住宅地に加え、不特定多数の市民が利用する公園、駅、学校といった公共施設周辺での出没も多発した。6月10日、岩手県遠野市の遠野運動公園に出没したクマが緊急銃猟で駆除される事案があった（※6）。また、6月14日には北海道苫小牧市の緑ヶ丘公園（※7）、同日には岩手県紫波町のJR日詰駅付近（※8）や奥州市の衣川中学校付近（※9）でも目撃されている。さらに新潟県では、小学校の体育館裏（十日町市）や公園のドッグラン付近（上越市）での目撃情報が寄せられた。これらの事例は、時間帯や場所を問わず、市民がクマと遭遇するリスクが遍在していることを示しており、自治体による迅速な情報提供と注意喚起の重要性を再認識させる。</p>
      <h3>3. 交通事故や捕獲・駆除事案の発生</h3>
      <p>クマとの遭遇は、人身への直接的な危害だけでなく、交通事故のリスクも高めている。6月12日、宮城県登米市の道路上で、クマと軽乗用車が衝突し、運転手が病院に搬送される事故が発生した（※10）。また、島根県浜田市のJR山陰線では、列車がクマと接触する事案も報告されている。一方、人やインフラへの被害を未然に防ぐための対応も各地で行われた。「捕獲・銃猟キーワード一致」は25件にのぼる。前述の岩手県遠野市での駆除に加え、観光名所である京都府宮津市の天橋立に現れたクマが6時間にわたる騒動の末に捕獲されるという象徴的な事案も発生した（※11）。これらの事案は、クマの行動範囲の拡大がもたらす多様なリスクと、それに対する行政の困難な対応を物語っている。</p>
      <h2>地域別動向</h2>
      <p>出没件数が特に多かった上位5都道府県の動向は以下の通りである。</p>
      <ul>
        <li>新潟県 (108件): 県内全域で出没が報告された。特に、十日町市の小学校体育館裏や公園、長岡市の市営住宅跡地など、生活圏内での目撃が散見され、市民のすぐそばにリスクが潜んでいる状況がうかがえる。</li>
        <li>兵庫県 (92件): 西宮市北部で目撃情報が集中した。住宅街「名塩さくら台」の近くや中国自動車道付近で連日目撃されており（※3）、特定の個体が地域に定着、あるいは頻繁に回遊している可能性が考えられる。</li>
        <li>福島県 (90件): 福島市の福島大学付近で目撃が相次いだほか（※12）、いわき市などでも報告があった。学生や教職員への注意喚起が強化されるなど、教育機関周辺での緊張が高まっている。</li>
        <li>岩手県 (86件): 遠野市での緊急銃猟のほか、奥州市の中学校付近、紫波町の駅付近など、公共施設周辺での目撃が特徴的であった。人との遭遇リスクが高い場所での出没が目立った。</li>
        <li>北海道 (70件): 幌延町で住宅の敷地内や壁に複数の足跡が残される事案や、白老町の住宅地へのヒグマ出没が報告された。生活空間への侵入がより深刻な形で現れており、住民の不安が高まっている。</li>
      </ul>
      <h2>注目事案（時系列）</h2>
      <p>当期間中、市民生活への影響が大きかった主要な事案を時系列で整理する。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">発生日</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">場所</th>
              <th className="px-3 py-2">事案概要</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-06-10</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">遠野市</td><td className="px-3 py-2 text-xs">遠野運動公園</td><td className="px-3 py-2 text-xs">公園内にクマが出没し、緊急銃猟により駆除された。（※6）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-11</td><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">宇都宮市</td><td className="px-3 py-2 text-xs">住宅密集地</td><td className="px-3 py-2 text-xs">市街地の住宅密集地でクマ1頭が捕獲された。（※1）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-12</td><td className="px-3 py-2 text-xs">宮城県</td><td className="px-3 py-2 text-xs">登米市</td><td className="px-3 py-2 text-xs">道路上</td><td className="px-3 py-2 text-xs">走行中の軽乗用車がクマと衝突し、運転手が負傷して搬送された。（※10）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-12</td><td className="px-3 py-2 text-xs">兵庫県</td><td className="px-3 py-2 text-xs">西宮市</td><td className="px-3 py-2 text-xs">名塩さくら台近く</td><td className="px-3 py-2 text-xs">住宅街に近接したエリアでクマの目撃情報が相次ぎ、住民に警戒が呼びかけられた。（※3）</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-06-13</td><td className="px-3 py-2 text-xs">京都府</td><td className="px-3 py-2 text-xs">宮津市</td><td className="px-3 py-2 text-xs">天橋立</td><td className="px-3 py-2 text-xs">日本三景の一つである天橋立にクマが出没。観光客らが避難し、約6時間後に捕獲された。（※11）</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>当期間の出没件数は依然として全国的に高い水準を維持しており、クマの活動が極めて活発な時期にあることを裏付けている。最も警戒すべき点は、山林から都市部への行動圏の拡大が一時的な現象ではなく、常態化・定着化しつつあることである。住宅地、公園、駅、学校など、従来は安全と考えられていた場所での目撃が相次いでおり、市民生活における潜在的リスクは著しく増大している。交通事故や農作物被害に加え、予期せぬ場所での人身事故発生の危険性が全国的に高まっていると評価できる。</p>
      <p>次週に向けて、以下の点に最大限の警戒が必要である。</p>
      <ul>
        <li>都市部・郊外を問わず、あらゆる場所でクマと遭遇する可能性を念頭に行動すること。特に、河川敷や雑木林に隣接する住宅地では厳重な注意が求められる。</li>
        <li>クマの活動が活発化する早朝および夕暮れ時の外出は特に慎重になるべきである。単独での行動は極力避け、鈴やラジオなどで人の存在を知らせる対策が有効である。</li>
        <li>生ゴミの管理徹底や、屋外に放置された果樹の収穫など、クマを誘引する要因を地域社会全体で排除する取り組みを継続・強化する必要がある。</li>
        <li>これから本格化するレジャーシーズンを迎え、登山やキャンプなど山間部での活動においては、クマの生息域に入るという認識を持ち、複数人での行動や食料の厳重な管理を徹底することが不可欠である。</li>
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
          <dd>2026年6月7日〜2026年6月14日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-15</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-15</dd>
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
