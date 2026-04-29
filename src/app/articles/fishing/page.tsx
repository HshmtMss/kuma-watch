import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("fishing")!;

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
        <strong>結論</strong>: 渓流釣りはクマ遭遇率が高い活動です。<strong>沢音で鈴の音が消え</strong>、視界が悪く、クマも沢を利用するため。
        ホイッスル・複数人での行動・餌の匂い管理を徹底し、ベテラン釣り師でも油断は禁物です。
      </p>

      <ArticleToc
        items={[
          { id: "why-risky", title: "なぜ渓流釣りはクマと遭いやすいか" },
          { id: "season", title: "シーズンごとのリスク" },
          { id: "gear", title: "釣り人のクマ対策装備" },
          { id: "behavior", title: "立ち回り — 沢での行動" },
          { id: "fish-smell", title: "釣った魚と餌の匂い管理" },
          { id: "encounter", title: "沢でクマに遭遇したら" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-risky">なぜ渓流釣りはクマと遭いやすいか</h2>
      <p>
        渓流釣りはクマ遭遇率が比較的高い活動です。理由は明確で:
      </p>
      <ul>
        <li><strong>沢音が大きい</strong>: 鈴・ホイッスル・足音が遠くまで届きにくい</li>
        <li><strong>視界が悪い</strong>: 渓谷地形は曲がりが多く 5m 先が見えない</li>
        <li><strong>クマも沢を利用</strong>: 水を飲む・涼む・餌 (ヤマメ・サワガニ) を求める</li>
        <li><strong>釣り人は集中状態</strong>: フライ・ルアーに集中して周囲への注意が落ちる</li>
        <li><strong>ウェーダー・釣り装備で動きが鈍い</strong>: 即時の離脱が難しい</li>
        <li><strong>単独行が多い</strong>: 釣りスポットを秘密にしたい釣り師が多い</li>
      </ul>

      <h2 id="season">シーズンごとのリスク</h2>
      <p>
        渓流釣りシーズンとクマの活動期は重なります。
      </p>
      <ul>
        <li>
          <strong>3〜4 月 (解禁期)</strong>:
          冬眠明けのクマ・残雪期、子連れ母グマ。<Link href="/articles/spring">春のクマ対策</Link>
        </li>
        <li>
          <strong>5〜6 月</strong>:
          山菜採りシーズンと重なり、藪に入る人も増える
        </li>
        <li>
          <strong>7〜8 月 (盛期)</strong>:
          クマも涼を求めて沢筋に集中。<Link href="/articles/summer">夏のクマ対策</Link>
        </li>
        <li>
          <strong>9 月 (禁漁前)</strong>:
          ハイパーフェイジア初期、沢沿いで栗・ヤマブドウを食べるクマと遭遇
        </li>
      </ul>

      <h2 id="gear">釣り人のクマ対策装備</h2>
      <ul>
        <li><strong>ホイッスル</strong>: 沢音を貫通する高音。10 分おきに数秒鳴らす</li>
        <li><strong>クマよけスプレー</strong>: ベスト・ベルトに固定 (<Link href="/articles/bear-spray">使い方</Link>)</li>
        <li><strong>大型のクマ鈴</strong>: 真鍮製・直径 4cm 以上</li>
        <li><strong>携帯電話 + 防水ケース</strong>: 通報用</li>
        <li><strong>応急処置キット</strong>: ベストのポケットに小型版を (<Link href="/articles/first-aid">応急処置</Link>)</li>
        <li><strong>ヘッドライト</strong>: 夕方の納竿時に必須</li>
        <li><strong>魚を持ち帰るなら密閉できるクーラーボックス</strong>: 匂い漏れ防止</li>
      </ul>

      <h2 id="behavior">立ち回り — 沢での行動</h2>
      <ul>
        <li><strong>定期的に大声で歌う・話す・口笛を吹く</strong>: 集中していると忘れがち</li>
        <li><strong>カーブを曲がる前にホイッスル</strong>: 死角がある</li>
        <li><strong>沢を遡るときは時々後ろも振り返る</strong>: 真後ろからクマが来るケースもある</li>
        <li><strong>淵・滝壺の上下流での休憩は避ける</strong>: クマの通り道</li>
        <li><strong>新しい足跡・糞 (<Link href="/articles/bear-tracks">痕跡の読み方</Link>) を見たら撤退判断</strong></li>
        <li><strong>夕方早めに納竿</strong>: 暗くなる前に車道へ</li>
      </ul>

      <h2 id="fish-smell">釣った魚と餌の匂い管理</h2>
      <p>
        魚の血・内臓の匂いは、クマを引き寄せる強い信号です。
      </p>
      <ul>
        <li><strong>釣った魚は即時に密閉</strong>: ジップロック → クーラーボックスの二重</li>
        <li><strong>魚を捌く場所は釣り場から離す</strong>: 帰宅後または管理棟で処理</li>
        <li><strong>内臓を沢に流すのは禁止</strong>: 匂いの拡散源</li>
        <li><strong>餌 (ミミズ・イクラ・サンマ等) も密閉</strong>: ザックの中で漏れないように</li>
        <li><strong>釣行後の手・装備を洗う</strong>: 帰路の車内に魚の匂いが残らないように</li>
      </ul>

      <h2 id="encounter">沢でクマに遭遇したら</h2>
      <p>
        沢の中で遭遇した場合の対処:
      </p>
      <ul>
        <li>動かず、クマと正面を向いたまま観察</li>
        <li>沢を下ってゆっくり後退 (登るのは避ける、上流が逃げ道として使えなくなる)</li>
        <li>ウェーダーで動きが鈍いことを意識して、転倒しない速度で</li>
        <li>釣り竿は捨てない (少なくとも武器にはなる)</li>
        <li>釣った魚は手放してでもよい (魚はクマの目当て)</li>
        <li>近距離 (10m 以下) でスプレーを構える</li>
      </ul>
      <p>
        基本の遭遇対処は <Link href="/articles/encounter">クマに遭遇したらどうする</Link> を参照してください。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "沢音が大きいので鈴は意味ない?",
            a: (
              <>
                沢から離れたところでは効果がありますが、本流横では確かに音が消えます。沢沿いではホイッスル (高音で抜けが良い) を組み合わせるのが現実的です。
              </>
            ),
            aText:
              "沢から離れたところでは効果がありますが、本流横では確かに音が消えます。沢沿いではホイッスル (高音で抜けが良い) を組み合わせるのが現実的です。",
          },
          {
            q: "クマよけスプレーをウェーダーで携行する場所は?",
            a: (
              <>
                フィッシングベストの胸ポケットか、ウェーダーのベルトに固定するのが推奨です。沢に落とす可能性があるのでカラビナで脱落防止を。素早く取り出せる位置が最優先です。
              </>
            ),
            aText:
              "フィッシングベストの胸ポケットか、ウェーダーのベルトに固定するのが推奨です。沢に落とす可能性があるのでカラビナで脱落防止を。素早く取り出せる位置が最優先です。",
          },
          {
            q: "釣った魚を持ち帰るのは諦めるべき?",
            a: (
              <>
                諦める必要はありませんが、密閉と匂い管理を徹底してください。クーラーボックス + 内側の密閉袋で二重にすれば、車に積む段階で匂いが拡散しません。クマが車に近づくケースもあるので、車内放置にも要注意です。
              </>
            ),
            aText:
              "諦める必要はありませんが、密閉と匂い管理を徹底してください。クーラーボックス + 内側の密閉袋で二重にすれば、車に積む段階で匂いが拡散しません。",
          },
          {
            q: "渓流釣りは単独行を絶対避けるべき?",
            a: (
              <>
                単独行は遭遇時のリスクが大きく、可能なら複数人での行動が安全です。どうしても 1 人で行く場合は、行き先と帰宅予定時刻を必ず家族に伝え、定期的に GPS 位置共有アプリで状況を発信してください。
              </>
            ),
            aText:
              "単独行は遭遇時のリスクが大きく、可能なら複数人での行動が安全です。どうしても 1 人で行く場合は、行き先と帰宅予定時刻を必ず家族に伝え、GPS 位置共有アプリで状況を発信してください。",
          },
        ]}
      />
    </ArticleShell>
  );
}
