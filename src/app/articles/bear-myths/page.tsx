import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-myths")!;

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
        <strong>結論</strong>: 「唐辛子で撃退」「人の髪の毛で寄せつけない」「牛糞で結界を作る」など、
        日本各地に伝わるクマよけ俗信の多くは<strong>科学的根拠が薄い</strong>か、
        条件付きで効くものです。本当に効くのは「<strong>食料を残さない・複数人で動く・スプレー</strong>」など、
        別記事で詳述している基本対策です。
      </p>

      <ArticleToc
        items={[
          { id: "why-myths", title: "なぜ俗信が広まるのか" },
          { id: "chili", title: "唐辛子・カプサイシンスプレー" },
          { id: "hair", title: "人間の髪の毛・体臭" },
          { id: "cow-dung", title: "牛糞・線香・薫煙" },
          { id: "radio-rumor", title: "ラジオ・大音量音楽" },
          { id: "what-works", title: "本当に効く基本対策" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-myths">なぜ俗信が広まるのか</h2>
      <p>
        山村文化の中でクマよけは生活知として伝承されてきました。中には経験則として有効なものもありますが、
        SNS 時代になって出所不明の対策法が大量に広まり、誤った安心感が事故を生むケースが増えています。
      </p>
      <ul>
        <li>「やってみたら出会わなかった」= 効果があったとは限らない (元々遭遇率が低い)</li>
        <li>地域・季節・個体差で結果がブレる</li>
        <li>動物実験ベースの根拠がほとんど無い</li>
      </ul>

      <h2 id="chili">唐辛子・カプサイシンスプレー</h2>
      <p>
        「唐辛子の粉を撒いて結界を作る」「乾燥唐辛子をぶら下げる」は<strong>基本的に効きません</strong>。
        ただし、カプサイシンを高濃度で噴霧する<strong>クマよけスプレー (撃退スプレー) は別物で、効果は実証済み</strong>。
      </p>
      <ul>
        <li>
          <strong>撒く / 吊るす</strong>: 効果なし。匂いがクマの行動に影響したという証拠は乏しい。
        </li>
        <li>
          <strong>カプサイシン噴霧スプレー</strong>:
          至近距離で粘膜に届けば撃退効果あり (<Link href="/articles/bear-spray">クマよけスプレーの使い方</Link>)。
        </li>
      </ul>

      <h2 id="hair">人間の髪の毛・体臭</h2>
      <p>
        「人間の髪の毛を吊るしておけばクマが近づかない」も<strong>科学的根拠なし</strong>。
        北米の研究で否定されており、むしろ「人間がいる」という匂いが好奇心個体を引き寄せる可能性も。
      </p>
      <ul>
        <li>髪の毛は時間が経つと匂いが落ち、効果はゼロに</li>
        <li>「人慣れ個体」には逆に呼び水になることがある</li>
        <li>使い古した衣類も同様 (匂いの刺激に過ぎない)</li>
      </ul>

      <h2 id="cow-dung">牛糞・線香・薫煙</h2>
      <p>
        「牛糞を畑の縁に塗る」「線香で結界を作る」は<strong>条件付きでわずかに有効</strong>な可能性がある程度。
      </p>
      <ul>
        <li>
          <strong>牛糞</strong>:
          肉食獣 (オオカミ等) の糞ならともかく、草食の牛糞では警戒対象としては弱い。
        </li>
        <li>
          <strong>線香・薫煙</strong>:
          人がいる気配としては少しは有効。ただし焼香の煙程度ではクマの嗅覚を超えるほどの強さがない。
        </li>
        <li>
          <strong>強烈な化学薫煙</strong>:
          ナフタレン・木酢液は寄せ付けにくくする可能性が指摘されますが、効果は持続しない。
        </li>
      </ul>

      <h2 id="radio-rumor">ラジオ・大音量音楽</h2>
      <p>
        ラジオ・スピーカーの大音量は「人間の存在を伝える」効果はあります。ただし以下の注意点。
      </p>
      <ul>
        <li>
          <strong>慣れた個体には効きにくい</strong>:
          観光地や集落の近くに住む個体はラジオ音に慣れている。
        </li>
        <li>
          <strong>音楽より話し声</strong>:
          メロディよりも人の話し声 (NHK ラジオ第一など) の方が「人間がいる」サインとして強い。
        </li>
        <li>
          <strong>過度な音量は他人の迷惑</strong>:
          登山道・キャンプ場では他の利用者への配慮も必要。
        </li>
      </ul>

      <h2 id="what-works">本当に効く基本対策</h2>
      <p>俗信に頼るより、科学的根拠と現場知見が一致する以下を優先してください。</p>
      <ul>
        <li>
          <strong>食料・匂い物質の管理</strong>:
          フードコンテナ・フードハングで遭遇率を大幅に下げる
          (<Link href="/articles/bear-canister">フードコンテナ・フードハング</Link>)。
        </li>
        <li>
          <strong>複数人での行動</strong>:
          単独行動の事故率は集団の数倍。
        </li>
        <li>
          <strong>クマよけスプレー</strong>:
          撃退率 90% 以上の科学的に裏付けられた装備
          (<Link href="/articles/bear-spray">クマよけスプレーの使い方</Link>)。
        </li>
        <li>
          <strong>電気柵</strong>:
          人里・果樹園での物理障壁として最も効果的
          (<Link href="/articles/electric-fence">電気柵の張り方</Link>)。
        </li>
        <li>
          <strong>痕跡を読む技術</strong>:
          フィールドサインで存在を察知して回避
          (<Link href="/articles/bear-tracks">足跡・糞・食痕の見分け方</Link>)。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "おじいちゃんが「煙草の煙でクマは寄ってこない」と言っていた",
            a: (
              <>
                煙の匂いは「火 = 人間」サインの一部として機能する可能性はあります。ただし煙草 1 本程度の煙では
                クマの嗅覚 (犬の数倍) を超えるほどの強さはなく、効果は限定的。複数手段の中の補助として位置付けるのが現実的です。
              </>
            ),
            aText:
              "煙の匂いは火＝人間のサインとして機能する可能性はあるものの、煙草 1 本程度では限定的。複数手段の中の補助として位置付けてください。",
          },
          {
            q: "ぬいぐるみのクマを置いておくと寄ってこないと聞いた",
            a: (
              <>
                クマは視覚で同種を判別する能力があり、ぬいぐるみを縄張り侵入と誤認する可能性は理論上あります。
                しかし実証研究はなく、即効的な撃退効果は期待できません。庭・畑にぬいぐるみを置く時間とコストを、
                電気柵・匂い管理に回した方が効果的です。
              </>
            ),
            aText:
              "実証研究はなく即効的な撃退効果は期待できません。同じコストを電気柵や匂い管理に回した方が効果的です。",
          },
          {
            q: "結局、SNSで見かけるクマよけ術はどう判断すれば?",
            a: (
              <>
                判断基準は (1) 北米の専門機関 (NPS、IGBC等) や日本の研究 (森林総研等) が支持しているか、
                (2) なぜ効くのか機序が説明できるか、(3) 失敗時にデメリットがないか、の 3 つ。
                どれかが欠けるならその対策は補助以下に位置付けてください。
              </>
            ),
            aText:
              "判断基準は専門機関が支持するか・機序が説明できるか・失敗時にデメリットがないか、の 3 つ。どれかが欠ける対策は補助以下に位置付けてください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "唐辛子を撒く・髪の毛を吊るすなどの俗信は基本的に効果なし。",
          "ただしカプサイシン噴霧スプレーは別物で、撃退率が高く実証済み。",
          "牛糞・線香などは「気配」として弱い補助。決定打にはならない。",
          "ラジオは音楽より人の話し声番組の方が「人間サイン」として強い。",
          "本当に効くのは食料管理・複数人行動・スプレー・電気柵・痕跡を読む技術。",
        ]}
        footer="俗信より科学的根拠と現場知見の一致した基本対策を優先してください。"
      />
    </ArticleShell>
  );
}
