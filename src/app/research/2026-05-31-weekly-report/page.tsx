// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年5月24日〜2026年5月31日 / mode: weekly-report / 生成日: 2026-06-01
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-31-weekly-report";
const TITLE = "2026年5月24日〜2026年5月31日 国内クマ出没事案の週次総括レポート";
const DESCRIPTION = "2026年5月最終週のクマ出没は全国で159件確認された。特に新潟県と島根県で多発し、両県で全体の半数近くを占めた。岩手県では住宅への侵入事案が発生したほか、各地の学校敷地内や公園など、人の生活圏での目撃が相次ぎ、警戒が求められる状況である。";

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
      "title": "クマが網戸破り住宅に侵入 岩手 釜石（※タイトルは KumaWatch による推定）",
      "url": "http://www3.nhk.or.jp/news/html/20260601/k10015137341000.html",
      "site": "NHK"
    },
    {
      "title": "秋田県仙北市 西木町桧木内小波内でクマ出没（※タイトルは KumaWatch による推定）",
      "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQVmVJeW5HcVlHbktQM1BPdDdZdUJyb1dIMmJiLTJDU3BWck0tN3kyOUR1TUtkTVRSQ3BUVm1mNzV0Y3ludE5vWXBxUHVZZ1VNVVgxeUgwUVUtUlYyUmh2TGdRRVlrSG5IVUF0UHpfVWhXWExDeC04Tmp0ZVFOX1hPa3FpQ193azgwaTNfMFFwNmZxcVhhNE1ucENObW1kUFBHWTdXbWhaMVdoUEgzMEln0gGiAUFVX3lxTE9WR1NlbDlISnI3NXFlZDkzRG44Skx0QmMxSlRDdFdiNEU4OHp2Z2ZvRTU2UExkWjZCUjhkOFpWaTBWTHRHQnhaLXVzc2wya2NkSXRjbFJUY2Z6TFRCcDZoa0lmcWlpYVlacUNxQjk2WFptSm5PUzZaNUZrRjNjRXBHOTEwb3JrREQwTFU1TjdSai1QWWxKeEd1RGo4OVZsNnZhZw?oc=5",
      "site": "Google News"
    },
    {
      "title": "北海道旭川市 西神楽南でクマ出没の可能性（※タイトルは KumaWatch による推定）",
      "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZnAzVEZwM3hhbFRCM1pXQXVOVkh2akxWbUNkdmJGM1JwMHktcUxnMnN2OUltM1VyZGtyd2RrekZZT21fZEtoN3lBc2hMQU9wbFR4VktBaEhZb2piZldqY2c0bGMzMktobDFMMVFNWFM1bnRRaTJwNzRuR0Vab3NORnpKZ2hxeU4yOEpvdEhla0lkNWcwdlpqbndleEbSAaIBQVVfeXFMTk1OZXlpeDNoVzF2LS16NndmUUhkV0pVcDJwUk1YX0dvWVEyaUFuZHRmVTR2RE5ZU1ZzY1JKSFNYaGNndDVZSDU3a1ZWVUktbVRuU3JSNDRubVJFeFl5cVN0VjFTeV9PN0k4WHIwRlpyemNGV0ZQTENUTE1ub25FNjZiak13R2ZfTWhKYVY5anV2WmlxNnNKLTdoZEtabTdnV1Bn?oc=5",
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
        <span>対象期間: 2026年5月24日〜2026年5月31日</span>
        <span>·</span>
        <span>公開: 2026-06-01</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":220},{"pref":"北海道","count":58},{"pref":"福島県","count":48},{"pref":"新潟県","count":48},{"pref":"石川県","count":42},{"pref":"島根県","count":31},{"pref":"群馬県","count":23},{"pref":"富山県","count":14},{"pref":"山口県","count":13},{"pref":"栃木県","count":13},{"pref":"鳥取県","count":10},{"pref":"岩手県","count":10},{"pref":"山梨県","count":9},{"pref":"静岡県","count":7},{"pref":"滋賀県","count":7},{"pref":"埼玉県","count":5},{"pref":"東京都","count":4},{"pref":"岡山県","count":2},{"pref":"長野県","count":1}]}
        total={565}
        periodLabel={"2026年5月25日〜2026年5月31日"}
      />

      <p>2026年5月24日から5月31日までの期間、KumaWatchが収集したクマの出没情報は全国で159件にのぼった。都道府県別では新潟県が45件と最も多く、次いで島根県が34件、富山県と栃木県が各15件、群馬県が14件と続いた。これら上位5県で総件数の約78%（123件）を占めており、特定の地域への集中傾向が見られる。本期間において、人身被害が疑われるキーワードとの一致は0件であった。しかし、岩手県で住宅にクマが侵入する事案が発生したほか、島根県では小中学校の敷地内で目撃されるなど、市民の安全を直接脅かす可能性のある危険な事案が複数報告されており、極めて高い緊張状態が続いている。</p>
      <h2>主要トピック</h2>
      <h3>新潟県と島根県における出没の集中</h3>
      <p>本期間の出没は、新潟県（45件）と島根県（34件）に著しく集中した。両県だけで合計79件となり、全国の総件数の約半数を占める。新潟県では、5月27日に阿賀町で散歩中に小グマが目撃されたり、5月29日には村上市で農作業中に体長1.2mほどのクマが田んぼの畦道を歩いているのが目撃されたりと、住民の日常生活のすぐそばで出没が確認されている。島根県では、より人の生活空間に踏み込んだ事案が目立つ。5月27日には浜田市の小学校校庭に、28日には益田市の中学校正門前に、29日には雲南市の道の駅付近にそれぞれクマが出現しており、公共施設や商業施設周辺での出没が際立っている。これらの地域では、住民の活動時間帯や行動範囲とクマのそれが重複しつつあり、偶発的な遭遇のリスクが高まっている。</p>
      <h3>人の生活圏への接近・侵入事案の発生</h3>
      <p>本期間で最も深刻な事案の一つが、5月31日に岩手県釜石市で発生した住宅への侵入である。この事例では、クマが網戸を破って家屋内に侵入したと報告されており、住民の生命に直接的な危険が及ぶ可能性があった（※1）。同様に、岩手県盛岡市では5月24日に住宅敷地内の小屋でクマの痕跡が確認されたほか、26日には住宅地内でクマ1頭が目撃されるなど、県内各地で人家周辺への接近が相次いだ。また、群馬県中之条町では26日に公民館付近で幼獣が目撃されており、山林から離れた集落の中心部までクマが侵入している実態がうかがえる。都市部キーワードに一致した事案は9件あり、クマの行動範囲が従来の生息域から拡大し、人間社会との境界が曖昧になっている状況を示唆している。</p>
      <h3>学校・公園など公共空間での目撃多発</h3>
      <p>島根県浜田市で5月27日午後に発生した市立今福小学校校庭への成獣の出現は、極めて危険な事案であった。幸いにも児童や教職員に被害はなかったが、一歩間違えれば大惨事につながりかねない状況だった。翌28日には、同県の益田市で中西中学校の正門前に体長約1mのクマが出現しており、通学路の安全が脅かされる事態となっている。また、岩手県盛岡市では、5月26日に「らかん児童公園」の北側で親子グマ2頭が目撃された。子供たちが利用する公園の至近距離での目撃であり、保護者や地域住民に大きな不安を与えている。これらの事例は、もはやクマの出没が山間部だけの問題ではなく、子供たちの学びや遊びの場においても現実的な脅威となっていることを示している。</p>
      <h2>地域別動向</h2>
      <h3>新潟県（45件）</h3>
      <p>県内全域で出没が確認された。特に阿賀町、村上市、上越市、南魚沼市などで報告が多い。散歩中や農作業中、自動車での走行中など、住民の日常生活における目撃が多数を占める。5月24日には上越市の国道で、また同日に別の地区の市道脇空き地で目撃されるなど、道路沿いでの遭遇も報告されている。痕跡の発見も含まれており、住民が直接クマを目撃せずとも、その行動範囲内にいることが示されている。</p>
      <h3>島根県（34件）</h3>
      <p>浜田市、益田市、雲南市を中心に、県内の広範囲で出没が報告された。特筆すべきは、前述の通り、小学校校庭や中学校正門前、道の駅付近といった公共性の高い場所での目撃が相次いだ点である。国道54号線や県道など、主要な交通網周辺での目撃も複数あり、人間の活動エリアと深く交錯している。幼獣の目撃も複数報告されており、繁殖活動が活発であることを示唆している。</p>
      <h3>関東地方（栃木県15件、群馬県14件、埼玉県4件）</h3>
      <p>関東地方でも出没が続いている。栃木県では15件が報告された。群馬県では、中之条町の集落や赤城山の森林公園など、山間部や観光地周辺での目撃が中心となっている。車窓からの目撃や幼獣の報告も含まれている。埼玉県では、全件が秩父市および皆野町で報告されており、奥秩父の山系が主要な生息域となっていることが再確認された。無人カメラやトレイルカメラによる撮影も含まれており、人目につかない場所でも活発に活動していることがわかる。</p>
      <h3>その他の地域</h3>
      <p>岩手県では、盛岡市や釜石市など都市部やその周辺での危険な事案が目立った。富山県（15件）では、クマAIカメラによる検知が行われるなど、先進技術を用いた監視体制が機能している。静岡県（9件）、石川県（6件）、滋賀県（6件）でも安定して出没が確認されており、全国的にクマの活動が活発な状態にあることが示された。また、滋賀県と長野県佐久市では、シカやイノシシ用の罠にクマがかかる「錯誤捕獲」が報告されており、人とクマの活動域の重複を示唆する事例となっている。</p>
      <h2>注目事案の時系列</h2>
      <p>本期間に報告された事案のうち、特に人の生活空間への侵入や、錯誤捕獲に関連するものを時系列で整理する。人身被害には至らなかったものの、いずれも重大事故に繋がりかねない危険性の高い事案である。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">日付</th>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">市町村</th>
              <th className="px-3 py-2">場所・概要</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">2026-05-24</td><td className="px-3 py-2 text-xs">長野県</td><td className="px-3 py-2 text-xs">佐久市</td><td className="px-3 py-2 text-xs">内山地区町上区で錯誤捕獲</td><td className="px-3 py-2 text-xs">捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-05-26</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市</td><td className="px-3 py-2 text-xs">らかん児童公園北側で親子グマ2頭を目撃</td><td className="px-3 py-2 text-xs">都市部・公共空間</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-05-26</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">盛岡市</td><td className="px-3 py-2 text-xs">中野二丁目の住宅地内でクマ1頭を目撃</td><td className="px-3 py-2 text-xs">都市部</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-05-26</td><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">中之条町</td><td className="px-3 py-2 text-xs">公民館付近で幼獣を目撃</td><td className="px-3 py-2 text-xs">都市部・公共空間</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-05-27</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">浜田市</td><td className="px-3 py-2 text-xs">今福小学校の校庭に成獣1頭が出現</td><td className="px-3 py-2 text-xs">都市部・公共空間</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-05-28</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市</td><td className="px-3 py-2 text-xs">中西中学校正門前でクマ1頭を目撃</td><td className="px-3 py-2 text-xs">都市部・公共空間</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-05-29</td><td className="px-3 py-2 text-xs">滋賀県</td><td className="px-3 py-2 text-xs">大津市</td><td className="px-3 py-2 text-xs">伊香立下龍華町で錯誤捕獲</td><td className="px-3 py-2 text-xs">捕獲</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-05-29</td><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">雲南市</td><td className="px-3 py-2 text-xs">道の駅たたらば壱番地付近の市道で幼獣1頭</td><td className="px-3 py-2 text-xs">都市部・公共空間</td></tr>
            <tr><td className="px-3 py-2 text-xs">2026-05-31</td><td className="px-3 py-2 text-xs">岩手県</td><td className="px-3 py-2 text-xs">釜石市</td><td className="px-3 py-2 text-xs">クマが網戸を破り住宅内に侵入</td><td className="px-3 py-2 text-xs">都市部・家屋侵入</td></tr>
          </tbody>
        </table>
      </div>
      <h2>週次評価</h2>
      <p>5月最終週も、全国的にクマの出没は高水準で推移した。特に新潟県と島根県での集中が顕著であり、これらの地域では住民の日常生活に危険が差し迫っている。人身被害こそ報告されなかったものの、岩手県での住宅侵入や島根県での学校敷地内への出現は、クマと人間社会との間の「一線」が越えられたことを示す象徴的な事案である。幼獣や親子グマの目撃も複数あり、繁殖期に関連した行動の活発化が背景にあると推測される。全体として、クマの市街地への順応が進んでいる可能性が懸念され、リスクレベルは極めて高い状態で維持されている。</p>
      <p>次週に向けて、以下の点に特に警戒が必要である。</p>
      <ul>
        <li>親子グマ・幼獣への注意: 幼獣の単独での目撃が複数報告されているが、付近には必ず母グマがいると考えるべきである。子を守る母グマは極めて攻撃的になるため、幼獣を見かけても決して近づかず、速やかにその場を離れ、関係機関に通報することが重要である。</li>
        <li>早朝・薄暮時の行動: クマは人の活動が少ない早朝や夕暮れ時に活発になる傾向がある。この時間帯に山林に近い場所で散歩や農作業を行う際は、単独行動を避け、音の出るもの（ラジオ、クマ鈴など）を携行し、常に周囲を警戒する必要がある。</li>
        <li>誘引物の徹底管理: 人の食べ物の味を覚えたクマは、執着心を強め、人里に繰り返し出没するようになる。生ゴミ、ペットフード、収穫しない果樹などを屋外に放置しないよう、誘引物の管理をこれまで以上に徹底することが、地域全体をクマから守る上で不可欠である。</li>
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
          <dd>2026年5月24日〜2026年5月31日</dd>
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
