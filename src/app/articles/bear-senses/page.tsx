import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-senses")!;

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
        <strong>結論</strong>: クマの<strong>嗅覚は犬の数倍</strong>、聴覚は人間以上、視覚は人間と同程度。
        この感覚特性を理解すると、なぜ匂い管理が重要か・なぜ風下が危険か・なぜ静かに動くべきかが論理的に分かります。
      </p>

      <ArticleToc
        items={[
          { id: "smell", title: "嗅覚 — 犬の数倍" },
          { id: "hearing", title: "聴覚 — 人間以上" },
          { id: "sight", title: "視覚 — 人間とほぼ同等" },
          { id: "weather", title: "天気・風向きの影響" },
          { id: "implications", title: "感覚特性から導く対策" },
          { id: "myth", title: "誤解されがちな感覚" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="smell">嗅覚 — 犬の数倍</h2>
      <p>
        クマの嗅覚は哺乳類の中でもトップクラスで、犬の 7 倍程度の能力があるとされます。
        鼻腔内の嗅覚受容体細胞数が他の動物より多く、匂いの源を遠距離・低濃度でも検知できます。
      </p>
      <ul>
        <li><strong>5〜10km 先の匂いを検知</strong> (風向きによっては 30km という説も)</li>
        <li>密閉していない食料・生ゴミは数百 m から確実に察知される</li>
        <li>BBQ の煙・油の匂いは強烈な誘引信号</li>
        <li>香水・整髪料・ハンドクリームなどの人工香料も対象</li>
        <li>サンスクリーン・防虫スプレーの匂いにも反応する個体あり</li>
      </ul>
      <p>
        この嗅覚の鋭さこそが、<Link href="/articles/home-protection">家庭・果樹園のクマ対策</Link> や
        <Link href="/articles/camping">キャンプ場でのクマ対策</Link> で
        「匂い管理」を最重要対策と位置付ける理由です。
      </p>

      <h2 id="hearing">聴覚 — 人間以上</h2>
      <p>
        クマの聴覚は人間より広い周波数帯をカバーし、超音波領域も聞こえると考えられています。
      </p>
      <ul>
        <li>人間 (20Hz〜20kHz) より広い帯域</li>
        <li>クマ鈴の高周波音も明確に聞き取れる</li>
        <li>沢音・風音などの環境音には影響を受けやすい</li>
        <li>足音・声・楽器音 (ラジオ・歌) も人間以上の感度で察知</li>
      </ul>
      <p>
        ただし、聴覚が鋭くても <strong>沢音・風音</strong> でマスクされると効果が落ちる。
        ホイッスルが沢沿いで重要な理由がここにあります。詳細は <Link href="/articles/bear-bell">クマ鈴は本当に効果がある?</Link>。
      </p>

      <h2 id="sight">視覚 — 人間とほぼ同等</h2>
      <p>
        クマの視覚は人間と同程度かやや劣る程度で、近視傾向があります。
      </p>
      <ul>
        <li>動くものへの感度は高い (50m 以内の動きはよく見える)</li>
        <li>遠距離の細部識別はやや弱い</li>
        <li>色覚はあり、赤・緑・青のおおよその区別はつく</li>
        <li>夜間視力は人間より優れる (網膜のタペタム層あり)</li>
        <li>静止していると気づかれにくい</li>
      </ul>
      <p>
        「クマと目が合った」というのは比較的近距離 (50m 以内) で起こります。
        遠距離なら音と匂いで先に察知されているケースが多い。
      </p>

      <h2 id="weather">天気・風向きの影響</h2>
      <p>
        感覚特性は天候・風向きで大きく変わります。
      </p>
      <ul>
        <li>
          <strong>風下にいる場合</strong>:
          自分の匂いがクマに届きにくく、気づかれない (突発接近のリスク)
        </li>
        <li>
          <strong>風上にいる場合</strong>:
          自分の匂いが届くため、クマが事前に避けてくれる可能性
        </li>
        <li>
          <strong>雨の日</strong>:
          匂いが流され、視界・聴覚も落ちる → 互いに気づきにくい
        </li>
        <li>
          <strong>霧の日</strong>:
          視界が極端に悪く、互いに気づかず接近 → 突発遭遇のリスク高
        </li>
        <li>
          <strong>強風の日</strong>:
          音・匂いが吹き散らされ、互いに察知能力が低下
        </li>
      </ul>

      <h2 id="implications">感覚特性から導く対策</h2>
      <p>
        各感覚を踏まえた具体的な対策:
      </p>
      <ul>
        <li>
          <strong>匂い対策</strong>:
          食料・生ゴミ・整髪料・防虫剤の管理を徹底。クマよけスプレーも風向きを意識
        </li>
        <li>
          <strong>音対策</strong>:
          沢音・風音でマスクされない高音 (ホイッスル) を併用。沢沿いでは特に
        </li>
        <li>
          <strong>視覚対策</strong>:
          「動かない」の戦術はクマの視覚特性に合致。突発接近時は静止が有効
        </li>
        <li>
          <strong>天候対策</strong>:
          霧・雨の日は登山自体を回避するのも選択肢
        </li>
      </ul>

      <h2 id="myth">誤解されがちな感覚</h2>
      <ul>
        <li>
          <strong>「クマは色が見えない」</strong>:
          誤り。色覚はあります。赤いザックを背負っているからクマに気づかれる、というのは別の理由 (動きや匂い)
        </li>
        <li>
          <strong>「クマは嗅覚だけ優れて視覚は弱い」</strong>:
          視覚は人間と同等程度で、極端に弱いわけではない
        </li>
        <li>
          <strong>「クマは耳が悪いから鈴は意味ない」</strong>:
          聴覚は鋭い。鈴が効かないとされるのは「人慣れ・場所による」要素が大きい
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "クマは本当に 5km 先の匂いが分かる?",
            a: (
              <>
                風向き・湿度・地形が条件として揃えば可能と考えられています。完全な数値は研究で異なりますが、「人里の柿の落果や生ゴミは数百m〜数kmから誘引可能」と認識して対策する必要があります。
              </>
            ),
            aText:
              "風向き・湿度・地形が条件として揃えば可能と考えられています。完全な数値は研究で異なりますが、人里の柿の落果や生ゴミは数百m〜数kmから誘引可能と認識して対策する必要があります。",
          },
          {
            q: "風下を歩くのは危険?",
            a: (
              <>
                クマと自分の位置関係次第です。クマがあなたの風上にいると自分の匂いが先に届かないため、気づかれずに接近する可能性が高くなります。風向きを常に意識しながら歩くと、突発遭遇のリスクを下げられます。
              </>
            ),
            aText:
              "クマと自分の位置関係次第です。クマがあなたの風上にいると自分の匂いが先に届かないため、気づかれずに接近する可能性が高くなります。",
          },
          {
            q: "クマよけスプレーは風で逆流するの?",
            a: (
              <>
                風下に向かって噴射すれば自分にかかる可能性があります。逆風の場合は、距離を詰めてから噴射するか、横風・無風の角度に位置を変えてから使うのが基本です。詳細は <Link href="/articles/bear-spray">スプレーの使い方</Link>。
              </>
            ),
            aText:
              "風下に向かって噴射すれば自分にかかる可能性があります。逆風の場合は、距離を詰めてから噴射するか、横風・無風の角度に位置を変えてから使うのが基本です。",
          },
          {
            q: "霧の日は本当に避けるべき?",
            a: (
              <>
                可能なら避けた方が安全です。視界・聴覚・匂いの全てが鈍り、突発遭遇のリスクが大きく上がります。どうしても入山する場合は、ホイッスルを定期的に鳴らし、複数人で行動することが必要です。
              </>
            ),
            aText:
              "可能なら避けた方が安全です。視界・聴覚・匂いの全てが鈍り、突発遭遇のリスクが大きく上がります。どうしても入山する場合は、ホイッスルを定期的に鳴らし、複数人で行動することが必要です。",
          },
        ]}
      />
    </ArticleShell>
  );
}
