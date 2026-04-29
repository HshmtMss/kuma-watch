import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("summer")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://kuma-watch.jp/articles/${meta.slug}` },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `https://kuma-watch.jp/articles/${meta.slug}`,
    type: "article",
    publishedTime: meta.publishedAt,
    modifiedTime: meta.updatedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        <strong>結論</strong>: 7〜8 月のクマは涼を求めて<strong>沢筋・中腹部</strong>に集中します。
        川遊び・キャンプ・避暑地での活動は、夏特有のクマ対策が必要。
        食料の匂いや夜間の備えを軽視すると、夏休みの楽しみが事故に変わりかねません。
      </p>

      <ArticleToc
        items={[
          { id: "where", title: "夏のクマはどこにいる?" },
          { id: "diet-summer", title: "夏の食性 (昆虫・蜂の巣・果実)" },
          { id: "river", title: "川遊び・水辺のリスク" },
          { id: "camping-summer", title: "夏キャンプの注意点" },
          { id: "highlands", title: "避暑地・高原のクマ" },
          { id: "evening", title: "夕涼みの時間帯が要注意" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="where">夏のクマはどこにいる?</h2>
      <p>
        夏のクマは暑さを避けて、涼しい沢筋・標高 1000〜1500m の中腹部・北向き斜面の森に集中します。
        標高 2000m 以上の高山帯まで上がる個体もおり、夏山登山者がハイマツ帯で目撃するケースが増えています。
        逆に低地の里山では出没が一時的に減るため、「夏は安全」と誤解されがちですが、登山・キャンプ・川遊びをする人にとっては遭遇チャンスがむしろ増える季節です。
      </p>

      <h2 id="diet-summer">夏の食性 (昆虫・蜂の巣・果実)</h2>
      <p>
        7〜8 月は植物の生育が進むものの、エネルギーになるドングリ等はまだ実っていません。
        この時期のクマは餌を多様化し、以下を積極的に食べます。
      </p>
      <ul>
        <li><strong>アリ・ハチの幼虫</strong>: 朽木をひっくり返して大量に摂取</li>
        <li><strong>蜂の巣</strong>: ニホンミツバチ・スズメバチを問わず襲撃</li>
        <li><strong>キイチゴ・サルナシ</strong>: 早めに熟す野生果実</li>
        <li><strong>シカの死骸</strong>: 機会があれば腐肉も</li>
      </ul>
      <p>
        詳細は <Link href="/articles/diet">クマの食性</Link> を参照してください。
      </p>

      <h2 id="river">川遊び・水辺のリスク</h2>
      <p>
        夏のクマは水を求めて沢筋や河川敷に降りてきます。川遊び・水遊びの場面で気をつけるべきこと:
      </p>
      <ul>
        <li>沢音で足音・鈴の音が消える → 互いに気づかず接近しがち</li>
        <li>水着・サンダルで装備が手薄になりがち</li>
        <li>子供が単独で河原を移動するケースが多い</li>
        <li>BBQ の食料・残飯が川辺に残る → 強い誘引源</li>
        <li>夕方は涼みに来るクマと水遊びの人が重なる時間帯</li>
      </ul>
      <p>
        渓流釣りについては <Link href="/articles/fishing">渓流釣りのクマ対策</Link> でさらに深掘りしています。
      </p>

      <h2 id="camping-summer">夏キャンプの注意点</h2>
      <p>
        夏休みのキャンプは家族連れが多く、食料・夜間の警戒が薄くなりがちです。
      </p>
      <ul>
        <li>食料・ゴミは車内 or 専用ボックスに保管 (テント内は NG)</li>
        <li>BBQ の油汚れ・焼き網は持ち帰る</li>
        <li>夜間の周囲確認 (ヘッドライト・センサーライト)</li>
        <li>就寝中はテントから離れた木に食料を吊るす (米国式) も選択肢</li>
        <li>子供にクマ鈴・ホイッスルを携帯させる</li>
      </ul>
      <p>
        キャンプ場全般の対策は <Link href="/articles/camping">キャンプ場のクマ対策</Link> 記事で詳しく扱っています。
      </p>

      <h2 id="highlands">避暑地・高原のクマ</h2>
      <p>
        軽井沢・上高地・乗鞍など人気の避暑地・高原リゾートでも、クマ出没は珍しくありません。
        観光客が「整備された遊歩道なら安全」と油断しがちですが:
      </p>
      <ul>
        <li>遊歩道沿いの灌木にクマが潜んでいるケースあり</li>
        <li>ホテル・ロッジの裏手の生ゴミに集まることも</li>
        <li>朝夕の散歩時間と クマの活動時間が重なる</li>
        <li>ペット連れの散歩はクマを刺激する可能性</li>
      </ul>

      <h2 id="evening">夕涼みの時間帯が要注意</h2>
      <p>
        夏のクマは日中の暑さを避けて活動を朝夕に集中させます。
        日没前後 2 時間は最も活発な時間帯で、避暑地・登山道・キャンプ場での遭遇報告が増えます。
        夕涼みの散歩・ナイトハイク・夕釣りは、この時間帯の警戒を特に高めてください。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "夏は冬・春に比べてクマ出没は少ない?",
            a: (
              <>
                里山・人里レベルでは目撃が減りますが、登山・キャンプ・渓流釣りなど山の活動圏では遭遇率はむしろ上がります。「夏は安全」と思い込まず、装備と意識を継続してください。
              </>
            ),
            aText:
              "里山・人里レベルでは目撃が減りますが、登山・キャンプ・渓流釣りなど山の活動圏では遭遇率はむしろ上がります。夏は安全と思い込まず、装備と意識を継続してください。",
          },
          {
            q: "高山 (北アルプス・南アルプス) でもクマに遭う?",
            a: (
              <>
                標高 2,500m 前後でも目撃事例があります。ハイマツ帯まで上がる個体もいるので、夏山縦走でも油断は禁物。テント場・水場での食料管理を徹底してください。
              </>
            ),
            aText:
              "標高 2,500m 前後でも目撃事例があります。ハイマツ帯まで上がる個体もいるので、夏山縦走でも油断は禁物。テント場・水場での食料管理を徹底してください。",
          },
          {
            q: "夏休みに子供と河原で BBQ をするのは大丈夫?",
            a: (
              <>
                クマ出没情報が無いエリアであれば通常通り楽しめますが、出発前に <Link href="/">出没マップ</Link> や 目的地の市町村ページで確認を。残飯・油は完全に持ち帰り、子供から目を離さないことが基本です。
              </>
            ),
            aText:
              "クマ出没情報が無いエリアであれば通常通り楽しめますが、出発前に出没マップ や 目的地の市町村ページで確認を。残飯・油は完全に持ち帰り、子供から目を離さないことが基本です。",
          },
          {
            q: "夏のクマは攻撃的?",
            a: (
              <>
                春よりは落ち着いていますが、子連れの母グマ・若い個体はいつでも攻撃的になり得ます。気温の高い日中は活動が落ちる傾向があるので、活動が活発な朝夕の時間帯に最も警戒が必要です。
              </>
            ),
            aText:
              "春よりは落ち着いていますが、子連れの母グマ・若い個体はいつでも攻撃的になり得ます。気温の高い日中は活動が落ちる傾向があるので、活動が活発な朝夕の時間帯に最も警戒が必要です。",
          },
        ]}
      />
    </ArticleShell>
  );
}
