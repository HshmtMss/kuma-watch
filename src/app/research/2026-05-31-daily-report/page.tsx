// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年5月31日 / mode: daily-report / 生成日: 2026-06-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-31-daily-report";
const TITLE = "2026年5月31日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年5月31日、国内で13件のクマ出没が報告された。人身被害はなかったものの、岩手県釜石市では住宅に侵入する重大事案が発生。出没は北海道から中国地方まで広範囲に及び、特に新潟県で5件と集中した。春の活動期におけるクマの行動活発化と、人里への接近傾向が顕著な一日であった。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-01",
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
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
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
      "title": "クマが網戸破り住宅に侵入 岩手 釜石市",
      "url": "http://www3.nhk.or.jp/news/html/20260601/k10015137341000.html",
      "site": "NHK NEWS WEB"
    },
    {
      "title": "北海道旭川市でクマ出没の可能性",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZnAzVEZwM3hhbFRCM1pXQXVOVkh2akxWbUNkdmJGM1JwMHktcUxnMnN2OUltM1VyZGtyd2RrekZZT21fZEtoN3lBc2hMQU9wbFR4VktBaEhZb2piZldqY2c0bGMzMktobDFMMVFNWFM1bnRRaTJwNzRuR0Vab3NORnpKZ2hxeU4yOEpvdEhla0lkNWcwdlpqbndleEbSAaIBQVVfeXFMTk1OZXlpeDNoVzF2LS16NndmUUhkV0pVcDJwUk1YX0dvWVEyaUFuZHRmVTR2RE5ZU1ZzY1JKSFNYaGNndDVZSDU3a1ZWVUktbVRuU3JSNDRubVJFeFl5cVN0VjFTeV9PN0k4WHIwRlpyemNGV0ZQTENUTE1ub25FNjZiak13R2ZfTWhKYVY5anV2WmlxNnNKLTdoZEtabTdnV1Bn?oc=2",
      "site": "news.google.com"
    },
    {
      "title": "秋田県仙北市でクマ出没情報",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQVmVJeW5HcVlHbktQM1BPdDdZdUJyb1dIMmJiLTJDU3BWck0tN3kyOUR1TUtkTVRSQ3BUVm1mNzV0Y3ludE5vWXBxUHVZZ1VNVVgxeUgwUVUtUlYyUmh2TGdRRVlrSG5IVUF0UHpfVWhXWExDeC04Tmp0ZVFOX1hPa3FpQ193azgwaTNfMFFwNmZxcVhhNE1ucENObW1kUFBHWTdXbWhaMVdoUEgzMEln0gGiAUFVX3lxTE9WR1NlbDlISnI3NXFlZDkzRG44Skx0QmMxSlRDdFdiNEU4OHp2Z2ZvRTU2UExkWjZCUjhkOFpWaTBWTHRHQnhaLXVzc2wya2NkSXRjbFJUY2Z6TFRCcDZoa0lmcWlpYVlacUNxQjk2WFptSm5PUzZaNUZrRjNjRXBHOTEwb3JrREQwTFU1TjdSai1QWWxKeEd1RGo4OVZsNnZhZw?oc=5",
      "site": "news.google.com"
    },
    {
      "title": "栃木県内のクマ出没情報",
      "url": "https://www.shimotsuke.co.jp/articles/-/1356149",
      "site": "下野新聞 SOON"
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
        <span>対象期間: 2026年5月31日</span>
        <span>·</span>
        <span>公開: 2026-06-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":30},{"pref":"石川県","count":12},{"pref":"福島県","count":7},{"pref":"新潟県","count":6},{"pref":"北海道","count":6},{"pref":"鳥取県","count":2},{"pref":"群馬県","count":2},{"pref":"埼玉県","count":2},{"pref":"岩手県","count":2},{"pref":"東京都","count":1},{"pref":"山梨県","count":1},{"pref":"栃木県","count":1},{"pref":"滋賀県","count":1},{"pref":"島根県","count":1}]}
        total={74}
        periodLabel={"2026年5月31日"}
      />

      <p>本レポートは、2026年5月31日にKumaWatchが収集した国内のクマ出没情報13件について、その地理的分布、事案の性質、および潜在的リスクを分析するものである。当日は、人身被害の報告はなかったものの、クマの活動が全国的に活発化しており、特に岩手県では人家への侵入事案も発生した。本稿では、これらの事案を地域別に整理し、季節的要因と合わせて今後のリスクを評価する。</p>
      <h2>主要事案：岩手県釜石市における住宅侵入</h2>
      <p>当日の事案の中で最も重大なものは、岩手県釜石市の住宅地で発生した。クマが網戸を破って住宅内に侵入するという、人間の生活空間に対する直接的な脅威を示す事例である（※1）。この事案は「都市部キーワード」にも一致しており、クマが山林から市街地近辺まで進出している実態を浮き彫りにした。人身被害には至らなかったが、家屋への侵入はクマの人間や人工物への警戒心の低下を示唆している可能性があり、今後の対策を検討する上で極めて重要なケーススタディとなる。このような侵入行動は、食料への強い執着が背景にあると考えられ、地域住民の安全確保に向けた早急な注意喚起と対策が求められる。</p>
      <h2>地域別の出没傾向分析</h2>
      <h3>北海道・東北地方</h3>
      <p>北海道では旭川市で「クマ出没の可能性」が報告された（※2）。情報レベルは確定的ではないものの、国内最大のヒグマ生息地である北海道における警戒の必要性を示している。東北地方では、前述の岩手県釜石市の侵入事案に加え、秋田県仙北市でも出没が確認された（※3）。両県での報告は、東北地方の広範な山林地帯でクマの活動が活発であることを示唆している。特に仙北市は山間部に位置し、農作業や山菜採りなどでの遭遇リスクが高い地域である。</p>
      <h3>関東地方</h3>
      <p>関東地方では、群馬県、埼玉県、栃木県の3県でそれぞれ1件ずつ、計3件の出没情報が寄せられた。群馬県中之条町では野反湖付近で幼獣が目撃されており、これは母グマが近くに潜んでいる可能性を示唆するため、特に注意が必要な情報である。埼玉県皆野町では、トレイルカメラにツキノワグマ1頭が記録された。これは直接的な目撃ではないが、人間の非活動時間帯におけるクマの生息実態を客観的に捉えた貴重なデータである。栃木県の事例（※4）と合わせ、関東山地一帯におけるクマの安定した生息と活動が確認された。</p>
      <h3>中部地方</h3>
      <p>中部地方では新潟県のみから報告があったが、その件数は5件に上り、当日最も出没が集中した地域となった。長岡市（2件）、南魚沼市、村上市、新発田市と、県内の広範囲で確認されている。特筆すべきは、目撃情報だけでなく、糞や足跡といった痕跡（フィールドサイン）の発見が3件含まれている点である。これらの痕跡は、住民が直接クマと遭遇していなくても、行動圏が人里や農地にまで及んでいることを示す動かぬ証拠となる。また、新発田市の大峰山登山口付近では子グマ1頭が目撃されており、繁殖期における母子の活動を示唆している。一連の情報は、新潟県内においてクマの生息密度が高く、人間との生活圏が密接している現状を強く示している。</p>
      <h3>関西・中国地方</h3>
      <p>関西地方では滋賀県大津市坂本で、中国地方では島根県大田市温泉津町でそれぞれ1件の出没が報告された。これらの報告は、クマの分布域が本州の広範囲に及んでいることを再確認させるものである。特に島根県の事例は、午後9時ごろに休耕田で子グマらしき個体が目撃されたというもので、夜間の行動や農耕地への接近を示す情報として注目される。子グマらしき個体であることから、この地域でも繁殖活動が行われている可能性が考えられる。</p>
      <h2>当日の出没情報の傾向</h2>
      <p>2026年5月31日の出没情報13件を種類別にまとめた。目撃、痕跡、カメラ記録、侵入と多様な情報が含まれており、多角的な分析の重要性を示している。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">情報種別</th>
              <th className="px-3 py-2">特徴</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">釜石市</td><td className="px-3 py-2 text-xs">家屋侵入</td><td className="px-3 py-2 text-xs">網戸を破り住宅内に侵入。都市部での重大事案。</td></tr>
            <tr><td className="px-3 py-2 text-xs">秋田県</td><td className="px-3 py-2 text-xs">仙北市</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">山間部での出没。</td></tr>
            <tr><td className="px-3 py-2 text-xs">北海道</td><td className="px-3 py-2 text-xs">旭川市</td><td className="px-3 py-2 text-xs">出没の可能性</td><td className="px-3 py-2 text-xs">報道に基づく未確定情報。</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">中之条町</td><td className="px-3 py-2 text-xs">目撃（幼獣）</td><td className="px-3 py-2 text-xs">母グマの存在を示唆。</td></tr>
            <tr><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">皆野町</td><td className="px-3 py-2 text-xs">自動撮影</td><td className="px-3 py-2 text-xs">トレイルカメラによる客観的記録。</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">長岡市</td><td className="px-3 py-2 text-xs">痕跡（糞）</td><td className="px-3 py-2 text-xs">柿町でのフィールドサイン。</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">長岡市</td><td className="px-3 py-2 text-xs">目撃</td><td className="px-3 py-2 text-xs">市道付近での目撃。</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">南魚沼市</td><td className="px-3 py-2 text-xs">痕跡（足跡）</td><td className="px-3 py-2 text-xs">畑でのフィールドサイン。</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">村上市</td><td className="px-3 py-2 text-xs">痕跡（足跡）</td><td className="px-3 py-2 text-xs">畑でのフィールドサイン。</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">新発田市</td><td className="px-3 py-2 text-xs">目撃（幼獣）</td><td className="px-3 py-2 text-xs">登山口付近での子グマ目撃。</td></tr>
            <tr><td className="px-3 py-2 text-xs">栃木県</td><td className="px-3 py-2 text-xs">－</td><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">報道に基づく情報。</td></tr>
            <tr><td className="px-3 py-2 text-xs">滋賀県</td><td className="px-3 py-2 text-xs">大津市</td><td className="px-3 py-2 text-xs">不明</td><td className="px-3 py-2 text-xs">坂本一丁目での出没。</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">大田市</td><td className="px-3 py-2 text-xs">目撃（幼獣）</td><td className="px-3 py-2 text-xs">夜間、休耕田での子グマらしき個体の目撃。</td></tr>
          </tbody>
        </table>
      </div>
      <h2>総括およびリスク評価</h2>
      <p>5月31日の出没状況は、春のクマの生態的特徴を色濃く反映している。人身被害こそなかったものの、全国的にリスクが高まっている状況がうかがえる。</p>
      <ul>
        <li>季節要因：5月末は冬眠から覚めたクマが活動を本格化させ、採食に多くの時間を費やす時期である。また、5月から7月にかけての繁殖期にもあたり、特に雄は雌を求めて行動圏を拡大させる。群馬、新潟、島根で子グマ（幼獣）の目撃が相次いだことは、この時期の繁殖活動が活発であることを示しており、子を守るために攻撃的になりがちな母グマとの遭遇には最大限の注意が必要である。</li>
        <li>餌資源との関連：春先の山中では、ブナ科の堅果類のような高カロリーの餌が乏しい。そのため、クマはタケノコや山菜、昆虫などを求めて行動するが、それらが不十分な場合、人里の農作物や生ゴミなどに誘引されることがある。新潟県や島根県で畑や休耕田への接近が確認されたのは、こうした食料探索行動の一環と考えられる。</li>
        <li>人口圏への接近度：最も懸念されるのは、岩手県釜石市で発生した住宅侵入事案である。これは、クマと人間の物理的な境界線が極めて曖昧になっていることを示す象徴的な出来事と言える。その他の多くの事案も、山林と人里の境界領域（エコトーン）で発生しており、人間の生活圏とクマの行動圏の重複が常態化していることを示唆している。特に痕跡情報の多さは、目に見えない場所でもクマが日常的に活動している現実を物語っており、潜在的な遭遇リスクは高い状態にあると評価される。</li>
      </ul>
      <p>結論として、2026年5月31日の状況は、全国的にクマの活動が活発であり、特に人里への接近が顕著であることを示している。住宅侵入という重大事案は、今後のクマ対策において、個体管理だけでなく、ゴミ管理や藪の刈り払いといった環境管理の重要性を改めて問いかけるものである。夏に向けて子グマが成長し、母子の行動範囲がさらに広がることが予想されるため、引き続き厳重な警戒が必要である。</p>

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
          <dd>2026年5月31日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-01</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-01</dd>
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
