import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-032")!;

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
      {/* オープニングフック */}
      <p className="lead">
        登山口でよく見かける「クマ鈴」。
        多くの人が<strong>「鳴らしていれば安心」</strong>と思っています。
        でも——その効果を示す科学的な根拠は、実は<strong>驚くほど薄い</strong>のです。
        今回は、鈴を扱った数少ない古典 Jope 1985 を起点に、
        「音でクマに人の存在を知らせる」という対策の<strong>本当の有効性と限界</strong>を冷静に見ていきます。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Implications of grizzly bear habituation to hikers
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Jope, K. L. (1985).{" "}
          <em className="not-italic">Wildlife Society Bulletin</em> 13(1): 32–37.
          （米国グレイシャー国立公園のハイカーとグリズリーの遭遇観察）
        </div>
        <a
          href="https://scholar.google.com/scholar?q=Jope+Implications+of+grizzly+bear+habituation+to+hikers"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          Google Scholar で原典を探す →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            Jope は<strong>「鈴を鳴らすハイカーの方がクマに突進されにくい」</strong>傾向を観察した
          </li>
          <li>
            ただし古い観察研究で、<strong>「鈴そのものの効果」を厳密に検証した実験ではない</strong>
          </li>
          <li>
            大事なのは鈴より<strong>「早めに・確実に人の存在を伝える」</strong>こと。声・スプレーの方が頼れる
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intro", title: "「鈴があれば安心」という思い込み" },
          { id: "jope", title: "Jope が見たもの — 鳴らす人、鳴らさない人" },
          { id: "principle", title: "効くのは「鈴」ではなく「予告」" },
          { id: "limits-bell", title: "なぜ小さな鈴では足りないのか" },
          { id: "habituation", title: "慣れの問題 — 鈴が「背景音」になる" },
          { id: "japan", title: "日本のツキノワグマと鈴" },
          { id: "action", title: "結論 — 鈴をどう位置づけるか" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">「鈴があれば安心」という思い込み</h2>
      <p>
        クマ鈴は、日本でもっとも普及したクマ対策グッズの一つです。
        しかし「どれくらい効くのか」を真正面から測った研究は、世界的にもごくわずか。
        メーカーの宣伝や登山者の体験談は山ほどある一方で、
        <strong>査読を通った厳密なデータはほとんど存在しない</strong>——これが正直な現状です。
      </p>
      <p>
        そんな中で、繰り返し引用される古典が Jope 1985 です。
        米国グレイシャー国立公園で、ハイカーとグリズリーの遭遇を地道に観察した研究です。
      </p>

      <h2 id="jope">Jope が見たもの — 鳴らす人、鳴らさない人</h2>
      <p>
        Jope は、日帰り登山者が多い区域で、人とクマの遭遇がどう推移するかを記録しました。
        その中で、<strong>クマ鈴を装着していたハイカー</strong>と
        <strong>していなかったハイカー</strong>で、遭遇の「結末」に差があることに気づきます。
      </p>
      <div className="not-prose my-4 rounded-2xl border border-stone-200 bg-white p-5">
        <div className="text-xs font-semibold uppercase tracking-widest text-stone-500">
          観察された傾向（要約）
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            🔔 <strong>鈴あり</strong> → クマはその場を<strong>立ち去る</strong>か、距離を保って通過する傾向
          </li>
          <li>
            🚶 <strong>鈴なし</strong> → クマがその場に<strong>とどまる・近づく・突進する</strong>事例が相対的に多い
          </li>
        </ul>
      </div>
      <p>
        Jope の解釈はこうです。
        鈴は<strong>「人間が近づいているよ」という事前の予告</strong>として働く。
        クマは不意打ちを最も嫌う動物で、至近距離で突然人と鉢合わせると、
        驚いて防御的に攻撃することがある。鈴が先に存在を知らせれば、
        クマは<strong>気づかれる前に静かに離れる</strong>余裕を持てる——というわけです。
      </p>

      <h2 id="principle">効くのは「鈴」ではなく「予告」</h2>
      <p>
        ここが本質です。Jope の研究が支持しているのは、厳密には
        <strong>「鈴という道具」そのものではなく、「人の接近を事前に伝える」という原理</strong>です。
      </p>
      <p>
        クマの事故の多くは「至近距離での不意の遭遇」で起きます
        （世界のヒグマ襲撃を解析した
        <Link href="/articles/research-digest-014">Bombieri 2019（Vol.14）</Link>でも、
        不意の遭遇と母子グマが主要因でした）。
        だから、<strong>音であれ声であれ、先に存在を知らせれば事故は減る</strong>。
        鈴はその手段の一つにすぎません。
      </p>

      <h2 id="limits-bell">なぜ小さな鈴では足りないのか</h2>
      <p>
        問題は、<strong>典型的なクマ鈴の音が、実は遠くまで届かない</strong>ことです。
        Jope 以降に蓄積された知見や、クマ研究者（クマスプレー研究で知られる Tom Smith ら）の
        指摘をまとめると、次のような限界が見えてきます。
      </p>
      <ul>
        <li>
          <strong>沢の音・風・密な藪</strong>にかき消される。沢沿いや風の強い稜線では、数十 m 先のクマにも届かないことがある
        </li>
        <li>
          <strong>音量が小さい</strong>。小さな金属音は、クマにとって「人間」と結びつく強い信号になりにくい
        </li>
        <li>
          <strong>断続的で機械的</strong>。人の声のように「明確に人間」と分かる情報量が乏しい
        </li>
      </ul>
      <p>
        つまり鈴は「鳴らさないよりはマシ」だが、
        <strong>これ一つで安全が確保できる装備ではない</strong>、というのが現代の評価です。
      </p>

      <h2 id="habituation">慣れの問題 — 鈴が「背景音」になる</h2>
      <p>
        もう一つの落とし穴が<strong>「慣れ（馴化）」</strong>です。
        人の出入りが多い場所では、クマが鈴の音を何度も聞くうちに
        <strong>「害のない背景音」</strong>として無視するようになることがあります。
        とくに、鈴の音の先に<strong>食べ物（生ゴミ・残飯）</strong>がある経験を重ねたクマは、
        鈴を「人＝危険」ではなく、最悪の場合<strong>「人＝餌のサイン」</strong>と学習しかねません。
      </p>
      <p>
        人馴れ・餌付けがクマと人の双方にとっていかに危険かは、次号 Vol.33 で
        知床のヒグマ研究をもとに深掘りします。
      </p>

      <h2 id="japan">日本のツキノワグマと鈴</h2>
      <p>
        Jope の対象は北米のグリズリーで、日本のツキノワグマとは種も環境も違います。
        とはいえ「不意の遭遇を避ける」という原理は共通です。
        ツキノワグマは基本的に臆病で、人の存在に早く気づけば自ら離れることがほとんど。
        だからこそ<strong>「先に気づかせる」</strong>対策には意味があります。
      </p>
      <p>
        ただし日本でも、鈴を過信するのは禁物です。
        とくに<strong>沢沿い・早朝夕方・見通しの悪い藪・出没多発地</strong>では、
        鈴だけに頼らず、複数の手段を重ねるのが安全です。
      </p>

      <h2 id="action">結論 — 鈴をどう位置づけるか</h2>
      <p>
        Jope 1985 から導ける、現実的な使い方はこうです。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>鈴は「補助」と割り切る</strong> — 鳴らさないよりは良い。だが「鈴があるから大丈夫」とは考えない。
        </li>
        <li>
          <strong>声・手拍子を併用する</strong> — 見通しの悪い場所・沢沿いでは、ときどき声を出す・手を叩く。
          人の声は鈴より「人間」と伝わりやすく、遠くまで届く。
        </li>
        <li>
          <strong>複数人で・日中に・音を立てて歩く</strong> — 単独・早朝夕方・無音が最もリスクが高い組み合わせ。
        </li>
        <li>
          <strong>最後の砦はクマよけスプレー</strong> — 「気づかせる」対策をすり抜けて至近で遭遇したときの、
          実証された最終手段。
          <Link href="/articles/research-digest-001">Vol.1（Smith 2008）</Link>で詳述。
        </li>
      </ol>
      <p>
        鈴を含む遭遇回避の基本は{" "}
        <Link href="/measures">クマ対策の総合ガイド</Link>
        にもまとめています。
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Implications of grizzly bear habituation to hikers（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Jope, K. L. (1985).{" "}
              <em className="not-italic">Wildlife Society Bulletin</em> 13(1):
              32–37.
            </div>
            <a
              href="https://scholar.google.com/scholar?q=Jope+Implications+of+grizzly+bear+habituation+to+hikers"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              Google Scholar で原典を探す →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Efficacy of bear deterrent spray in Alaska（最終手段としてのスプレー）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Smith, T. S., Herrero, S., Layton, C. S., Larsen, R. T., &amp;
              Johnson, K. R. (2008).{" "}
              <em className="not-italic">Journal of Wildlife Management</em>{" "}
              72(3): 640–645.
            </div>
            <a
              href="https://doi.org/10.2193/2006-452"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.2193/2006-452 →
            </a>
          </li>
        </ol>
      </div>

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <div className="not-prose my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
          次号予告 — Vol.33
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「人に慣れた母グマの息子は早死にする」</strong> —
          知床のヒグマを追った日本発の研究（Shimozuru 2020）から、
          餌付け・人慣れがなぜ世代を超えてクマを殺すのかを読み解きます。
        </div>
      </div>
    </ArticleShell>
  );
}
