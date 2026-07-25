// auto-generated: research-report v1
// このファイルは scripts/generate-research-report.ts によって自動生成されています。
// 期間: 2026年6月1日 / mode: daily-report / 生成日: 2026-06-02
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ResearchPlaceLinks from "@/components/ResearchPlaceLinks";
import ResearchPrefChart from "@/components/ResearchPrefChart";

const SITE_URL = "https://kuma-watch.jp";
const SLUG = "2026-06-01-daily-report";
const TITLE = "2026年6月1日 国内クマ出没事案の時空間分析と分析報告";
const DESCRIPTION = "2026年6月1日に国内で確認されたクマの出没は19件にのぼった。新潟県で最多の7件が報告され、関東・中部地方で活動が活発化している。人身被害はなかったものの、滋賀県で錯誤捕獲が1件発生し、複数の県で幼獣が目撃されるなど、注意が必要な状況である。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/research/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/research/${SLUG}`,
    type: "article",
    publishedTime: "2026-06-02",
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
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
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
      "title": "栃木県内におけるクマの出没について（1）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1356516",
      "site": "下野新聞SOON"
    },
    {
      "title": "栃木県内におけるクマの出没について（2）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1356703",
      "site": "下野新聞SOON"
    },
    {
      "title": "栃木県内におけるクマの出没について（3）",
      "url": "https://www.shimotsuke.co.jp/articles/-/1356947",
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
        <span>対象期間: 2026年6月1日</span>
        <span>·</span>
        <span>公開: 2026-06-02</span>
        <span>·</span>
        <Link href="/research" className="text-emerald-700 underline">
          研究・知見トップへ
        </Link>
      </div>

      <ResearchPrefChart
        data={[{"pref":"秋田県","count":26},{"pref":"北海道","count":20},{"pref":"新潟県","count":8},{"pref":"石川県","count":6},{"pref":"山梨県","count":4},{"pref":"山口県","count":3},{"pref":"福島県","count":3},{"pref":"岩手県","count":3},{"pref":"栃木県","count":3},{"pref":"島根県","count":3},{"pref":"群馬県","count":2},{"pref":"東京都","count":1},{"pref":"鳥取県","count":1},{"pref":"埼玉県","count":1},{"pref":"富山県","count":1},{"pref":"三重県","count":1},{"pref":"静岡県","count":1},{"pref":"滋賀県","count":1}]}
        total={88}
        periodLabel={"2026年6月1日"}
      />

      <p>2026年6月1日、KumaWatchが収集したデータによると、日本国内で合計19件のクマ出没が確認された。都道府県別では新潟県が7件と最も多く、次いで栃木県が3件、群馬県、三重県、島根県が各2件、埼玉県、富山県、滋賀県が各1件と続く。幸いにも人身被害の報告はなかったが、滋賀県で錯誤捕獲が1件発生した。本レポートでは、これらの事案を地理的・状況的に分析し、今後のリスクについて考察する。</p>
      <h2>主要事案の概要</h2>
      <p>当日は、人身被害や市街地中心部への出没といった深刻な事案は報告されなかった。しかし、特筆すべき事案として、滋賀県伊香立生津町で錯誤捕獲が1件発生している。これは、イノシシやシカなどを対象とした罠にクマが誤ってかかったものと推測される。意図しない捕獲は、クマの個体群管理や地域住民との共存において重要な課題を示す事例である。当該個体のその後の処遇に関する詳細は現時点では不明である。</p>
      <h2>地域別の出没動向</h2>
      <p>出没は関東、中部、関西、中国の4地方に集中し、北海道、東北、四国、九州からの報告は確認されなかった。特に日本海側の中部地方と、関東地方の山間部で目撃が相次いだ。</p>
      <h3>中部地方：新潟県で多発、幼獣の目撃も</h3>
      <p>中部地方では計8件が報告され、全国で最も多い地域となった。特に新潟県では7件と突出しており、十日町市、長岡市、魚沼市、村上市、胎内市と広範囲にわたる。長岡市では「子グマが道を横切り、やぶに入っていった」、胎内市では「子クマ1頭を目撃」との報告があり、母グマが周辺に潜んでいる可能性が非常に高い。村上市の事案では、クマが集落方向へ向かったと報告されており、住民への注意喚起が急がれる。富山県では立山町の尖山登山口付近でフンが発見されており、登山者や入山者への警戒が必要である。</p>
      <h3>関東地方：広範囲での目撃情報</h3>
      <p>関東地方では栃木県、群馬県、埼玉県で合計6件が確認された。栃木県の3件は、下野新聞社の報道に基づく情報であり、県内で継続的に出没が確認されている状況を反映している（※1, ※2, ※3）。群馬県では倉渕町と前橋市でそれぞれ道路を横断するクマが目撃された。特に前橋市三夜沢町の事案は交差点名が特定されており、人間の生活圏に近接したエリアでの活動がうかがえる。埼玉県秩父市でも住民による目撃情報が寄せられており、関東山地におけるクマの活動が活発であることを示している。</p>
      <h3>関西・中国地方：散発的な出没と幼獣の確認</h3>
      <p>関西地方では3件が報告された。滋賀県の錯誤捕獲に加え、三重県では桑名市でフンが、大台町の山林で目撃があり、痕跡と直接目撃の両方が確認された。中国地方では島根県で2件の報告があった。浜田市ではバス停付近、益田市ではダム付近の市道で目撃されている。益田市の事案は幼獣1頭であり、中部地方と同様に、子育て中の母グマの存在が示唆される。これらの目撃情報は、両地方におけるクマの生息域の維持・拡大を示している可能性がある。</p>
      <h2>出没情報の類型別サマリー</h2>
      <p>当日の代表的な出没情報を以下に整理する。道路横断やその付近での目撃が複数あり、交通事故のリスクも潜在している。また、幼獣の目撃が3件、痕跡（フン）の発見が2件含まれている。</p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-xs text-stone-700">
            <tr>
              <th className="px-3 py-2">都道府県</th>
              <th className="px-3 py-2">確認地点</th>
              <th className="px-3 py-2">状況の概要</th>
              <th className="px-3 py-2">特記事項</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            <tr><td className="px-3 py-2 text-xs">滋賀県</td><td className="px-3 py-2 text-xs">伊香立生津町</td><td className="px-3 py-2 text-xs">錯誤捕獲</td><td className="px-3 py-2 text-xs">捕獲・銃猟キーワード一致</td></tr>
            <tr><td className="px-3 py-2 text-xs">群馬県</td><td className="px-3 py-2 text-xs">前橋市三夜沢町</td><td className="px-3 py-2 text-xs">道路横断の目撃</td><td className="px-3 py-2 text-xs">交差点付近</td></tr>
            <tr><td className="px-3 py-2 text-xs">埼玉県</td><td className="px-3 py-2 text-xs">秩父市寺尾</td><td className="px-3 py-2 text-xs">地元住民による目撃</td><td className="px-3 py-2 text-xs">ー</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">長岡市平</td><td className="px-3 py-2 text-xs">子グマの道路横断目撃</td><td className="px-3 py-2 text-xs">幼獣</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">胎内市長橋</td><td className="px-3 py-2 text-xs">子グマ1頭の目撃</td><td className="px-3 py-2 text-xs">幼獣</td></tr>
            <tr><td className="px-3 py-2 text-xs">新潟県</td><td className="px-3 py-2 text-xs">村上市金屋</td><td className="px-3 py-2 text-xs">目撃（集落方向へ移動）</td><td className="px-3 py-2 text-xs">人口圏への接近</td></tr>
            <tr><td className="px-3 py-2 text-xs">富山県</td><td className="px-3 py-2 text-xs">立山町立山地区</td><td className="px-3 py-2 text-xs">フンの痕跡</td><td className="px-3 py-2 text-xs">登山道付近</td></tr>
            <tr><td className="px-3 py-2 text-xs">三重県</td><td className="px-3 py-2 text-xs">桑名市多度町美鹿</td><td className="px-3 py-2 text-xs">フンの痕跡</td><td className="px-3 py-2 text-xs">山際</td></tr>
            <tr><td className="px-3 py-2 text-xs">島根県</td><td className="px-3 py-2 text-xs">益田市久々茂町</td><td className="px-3 py-2 text-xs">幼獣1頭の目撃</td><td className="px-3 py-2 text-xs">幼獣、ダム付近</td></tr>
          </tbody>
        </table>
      </div>
      <h2>総括とリスク評価</h2>
      <p>2026年6月1日は、全国的にクマの活動が活発であった一日と評価できる。人身被害がなかったことは幸いであるが、リスク要因は複数存在する。</p>
      <ul>
        <li>季節要因：6月はクマの繁殖期にあたり、特に雄グマが雌を探して行動範囲を拡大させる時期である。これにより、普段は姿を見せない場所での出没が増加する傾向がある。また、春に出産した母グマが子育てを行う時期でもあり、子の安全を確保するため神経質になっている可能性が高い。</li>
        <li>人口圏への接近：群馬県前橋市や新潟県村上市の事例のように、人間の生活圏に近い場所での目撃が散見される。道路横断の目撃が複数報告されていることは、クマの移動ルートが人間の交通網と交錯している実態を示しており、車両との衝突事故のリスクも考慮する必要がある。</li>
        <li>幼獣の存在：新潟県と島根県で子グマや幼獣が合計3件目撃されている。これは極めて重要な警戒シグナルである。子グマの近くにはほぼ確実に母グマがおり、子を守ろうとする防衛行動から、人に対して攻撃的になる危険性が非常に高い。子グマを見かけても決して近づかず、静かにその場を離れるといった適切な行動の周知徹底が求められる。</li>
        <li>餌資源との関連：データからは山中の餌資源（ブナの豊凶など）の状況は読み取れないが、この時期、クマは活発に採食を行う。山中の食物が不足した場合、人里の農作物や果樹、生ゴミなどに誘引されて出没がさらに増加する可能性があるため、誘引物の管理が重要となる。</li>
      </ul>
      <p>総じて、現時点では被害は発生していないものの、出没件数の多さ、地理的な広がり、そして特に幼獣連れの個体の存在から、潜在的なリスクは高い状態にあると判断される。今後、夏場のレジャーシーズンを迎え、山間部への人の立ち入りが増えることから、一層の警戒と、地域ごとの迅速な情報提供が不可欠である。</p>

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
          <dd>2026年6月1日</dd>
          <dt className="text-stone-500">公開日</dt>
          <dd>2026-06-02</dd>
          <dt className="text-stone-500">最終更新</dt>
          <dd>2026-06-02</dd>
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
