// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年5月28日 / mode: daily-report / 生成日: 2026-05-29
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-05-28-daily-report";
const TITLE = "2026年5月28日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年5月28日、国内で確認されたクマの出没事案は20件に達した。特に新潟県と島根県でそれぞれ7件と集中し、島根県益田市では中学校の正門前で目撃されるなど、都市部への接近が確認された。人身被害の報告はなかったものの、クマの活動が活発化する時期を迎え、人口圏周辺での警戒が求められる状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-05-29",
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
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
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
      "title": "クマ出没に関する報道 (1)",
      "url": "https://www.shimotsuke.co.jp/articles/-/1353999",
      "site": "下野新聞SOON"
    },
    {
      "title": "クマ出没に関する報道 (2)",
      "url": "https://www.shimotsuke.co.jp/articles/-/1354044",
      "site": "下野新聞SOON"
    },
    {
      "title": "クマ出没に関する報道 (3)",
      "url": "https://www.shimotsuke.co.jp/articles/-/1354500",
      "site": "下野新聞SOON"
    },
    {
      "title": "クマ出没に関する報道 (4)",
      "url": "https://www.shimotsuke.co.jp/articles/-/1354649",
      "site": "下野新聞SOON"
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
        <span>対象期間: 2026年5月28日</span>
        <span>·</span>
        <span>公開: 2026-05-29</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":32},{"pref":"北海道","count":10},{"pref":"島根県","count":9},{"pref":"新潟県","count":8},{"pref":"福島県","count":7},{"pref":"石川県","count":4},{"pref":"群馬県","count":4},{"pref":"栃木県","count":4},{"pref":"鳥取県","count":2},{"pref":"岩手県","count":2},{"pref":"山口県","count":1},{"pref":"富山県","count":1},{"pref":"山梨県","count":1}]}
        total={85}
        periodLabel={"2026年5月28日"}
      />

      <h2>総括</h2>
      <p>2026年5月28日にKumaWatchが収集したクマの出没事案は、国内で合計20件確認された。都道府県別では新潟県と島根県がそれぞれ7件と突出し、次いで栃木県が4件、群馬県と富山県が各1件であった。これらの情報は、自治体や報道機関など複数のソースから得られたものである。特筆すべき点として、この日に人身被害や、対応としての捕獲・銃猟が行われたという情報は報告されなかった。一方で、市街地やその周辺での目撃を示す「都市部キーワード」に一致する事案が1件含まれており、クマの活動域が人間の生活圏に接近している状況がうかがえる。</p>
      <h2>主要事案：教育施設近傍への出没</h2>
      <p>当日報告された事案の中で最も警戒レベルが高いのは、島根県益田市で発生した事例である。午前11時35分ごろ、益田市白上町に位置する中西中学校の正門前で、体長約1メートルのクマ1頭が目撃された。学校の敷地、しかも生徒や教職員、訪問者など人の出入りが想定される正門前という場所での出没は、極めて高いリスクを示すものである。目撃された時間帯は日中であり、生徒の活動時間と重なる可能性もあった。幸いにも直接的な被害には至らなかったが、この事例は、クマが従来考えられていた山林部だけでなく、教育施設を含む市街地周辺にまで大胆に出没する可能性を明確に示している。地域社会の安全確保の観点から、迅速な情報共有と通学路の安全点検、そして地域住民全体への注意喚起が不可欠である。</p>
      <h2>地域別の出没傾向</h2>
      <h3>関東地方</h3>
      <p>関東地方では、栃木県で4件、群馬県で1件の出没が報告された。群馬県吾妻郡東吾妻町大戸では、忠治地蔵付近の国道をクマが横断する様子が目撃されている。これは山間部を縦断する幹線道路がクマの移動経路と交差していることを示しており、車両との衝突事故（ロードキル）のリスクを示唆する。栃木県の4件については、下野新聞社の報道に基づく情報であるが、具体的な場所や状況の詳細は現時点では不明である（※1, ※2, ※3, ※4）。しかし、同日に県内で複数の事案が報じられていることから、広域でクマの活動が活発化していると推察される。</p>
      <h3>中部地方</h3>
      <p>中部地方では、新潟県で7件、富山県で1件と、特に新潟県内で出没が多発した。新潟県の事案は三条市、上越市、村上市、胎内市、十日町市と県内広範囲にわたって確認されており、その多くが国道や主要地方道といった交通網の周辺で発生している。上越市、村上市、十日町市の事例はいずれも道路を横断するクマが目撃されており、春先に餌を求めて行動範囲を広げた個体が、人間の生活インフラと頻繁に接触している状況がうかがえる。三条市では会社の裏山、胎内市協和町では監視カメラにクマらしき姿が記録されるなど、目撃形態は多様である。特に監視カメラによる記録は、人が直接認知していない夜間や早朝にもクマが人里近くで活動している実態を明らかにしており、潜在的なリスクを評価する上で重要な情報源となる。</p>
      <h3>中国地方</h3>
      <p>中国地方では島根県で7件の出没が報告され、新潟県と並び当日最も多い件数となった。特筆すべきは、事案の多様性である。主要事案として前述した益田市の中学校前での目撃に加え、江津市有福温泉町の市道でも成獣1頭が目撃されている。温泉地という観光地での出没は、地域住民だけでなく観光客への安全確保という課題も提起する。さらに浜田市上府町の県道では、午後5時20分と同5時半というごく近接した時間帯に、それぞれ成獣1頭と、成獣1頭・幼獣2頭の親子が目撃された。この親子グマの目撃は、この地域がクマの繁殖地となっていることを示唆する。子連れの母グマは子を守るため非常に警戒心が強く、攻撃的になる可能性があるため、遭遇時のリスクは極めて高い。奥出雲町でも国道で成獣が目撃されており、島根県内の事例は、都市近郊、観光地、そして繁殖活動の証左と、複合的なリスク要因を含んでいる。</p>
      <h2>リスク評価</h2>
      <p>2026年5月28日の出没データは、人身被害こそなかったものの、全国的にクマの活動が活発化しており、特に人間の生活圏への接近が顕著になっていることを示している。以下に、季節的要因、餌資源、人口圏との関係性からリスクを分析する。</p>
      <h3>季節要因と行動特性</h3>
      <p>5月下旬は、冬眠から目覚めたクマが体力を回復するために活発に採餌を行う時期にあたる。特に、前年に生まれた若い個体が母親から離れて独立する「子別れ」のシーズンであり、経験の浅い若グマが餌場や縄張りを求めて広範囲を移動した結果、人里に迷い込むケースが増加する。今回目撃された個体の多くが体長1メートル程度であることも、こうした若グマの存在を示唆している。また、浜田市で確認された親子グマの事例は、繁殖期における母グマの行動活発化を裏付けるものであり、この時期特有のリスク要因と言える。</p>
      <h3>餌資源と誘引要因</h3>
      <p>提供されたデータ内には山中の餌資源に関する情報はないが、春先のクマは主に山菜や若葉、昆虫などを食料とする。もし、天候不順などによりこれらの自然の食料が不足した場合、クマはより効率的に栄養を摂取できる人里の農作物（時期的にまだ少ないが）、家庭菜園、果樹、あるいは生ゴミなどに強く誘引される。今回の出没地点が広範囲にわたっていることから、特定の餌資源への集中というよりは、探索行動の過程で偶発的に人里へ侵入した事例が多いと推察されるが、一度味を覚えると執着する危険性も考慮する必要がある。</p>
      <h3>人口圏への接近と今後の展望</h3>
      <p>今回の報告で最も重大なシグナルは、人口圏への接近が常態化しつつある点である。島根県益田市の中学校、新潟県胎内市の市街地、江津市の温泉地など、従来はクマの出没が稀であったか、あるいは想定されていなかった場所での目撃が相次いだ。また、新潟県や島根県で多発した国道・県道での目撃は、人間の主要な移動インフラとクマの生息域が密接に重なっている現実を浮き彫りにしている。今後、夏から秋にかけて農作物が実る時期を迎えると、クマの人里への誘引はさらに強まることが予測される。人身被害を未然に防ぐため、各自治体は出没情報の迅速かつ広範な伝達、パトロールの強化、そして住民一人ひとりに対する注意喚起（早朝・夜間の外出注意、ゴミの適正管理、藪の刈り払いなど）を徹底することが急務である。</p>

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
          <dd>2026年5月28日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-05-29</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-05-29</dd>
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
