import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("night-encounter")!;

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
        <strong>結論</strong>: クマの活動ピークは<strong>薄明薄暮 (夕方〜夜明け)</strong>。
        ヘッドライトは「広角で広く照らす + 遠射で確認」の二段構え、
        音は「人間の話し声を一定して出す」、後退は「来た道へ・走らない」が基本です。
        夜間は捕食型攻撃の確率が日中より高いため、対応の優先順位が変わります。
      </p>

      <ArticleToc
        items={[
          { id: "why-risky", title: "なぜ夜のクマは危険か" },
          { id: "headlamp", title: "ヘッドライトの当て方" },
          { id: "sound", title: "音の出し方 — 鈴より人の声" },
          { id: "if-met", title: "出会ってしまったら" },
          { id: "tent", title: "テント・小屋でのクマ" },
          { id: "predatory", title: "捕食型攻撃の判断" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-risky">なぜ夜のクマは危険か</h2>
      <ul>
        <li>
          <strong>活動ピーク</strong>:
          多くのクマは日没 1 時間前から夜明け 2 時間後までが行動の中心。
          日中の登山ピークとずれているため警戒が薄くなる。
        </li>
        <li>
          <strong>視覚劣位</strong>:
          人間の視界は夜間に大幅に劣化。クマの夜間視覚は犬と同等で、こちらより圧倒的に有利。
        </li>
        <li>
          <strong>捕食型の確率上昇</strong>:
          夜間のテント・小屋・避難所内での襲撃は、防衛ではなく捕食目的の傾向が強い
          (<Link href="/articles/playing-dead">死んだふりは効くのか</Link>)。
        </li>
      </ul>

      <h2 id="headlamp">ヘッドライトの当て方</h2>
      <p>夜間遭遇でライトの使い方が結果を分けます。</p>
      <ul>
        <li>
          <strong>広角ワイド光で全周を継続点灯</strong>:
          物影が動かないことを確認しながら歩く。クマの目はライトを反射するので発見しやすい。
        </li>
        <li>
          <strong>違和感を感じたら遠射 (スポット) に切替</strong>:
          50〜100m 先まで届くハイ光で確認。ヘッドライトとサブライト 2 灯運用が理想。
        </li>
        <li>
          <strong>クマの目に直接当てる</strong>:
          至近距離でクマと目が合ったら、視覚を一時的に麻痺させる目的でライトを当てる。
          点滅機能 (ストロボ) があれば使う。
        </li>
        <li>
          <strong>赤色モードは避ける</strong>:
          夜目の保護にはなるが、クマ警戒には可視性の高い白色光の方が有効。
        </li>
      </ul>
      <p>
        装備の選び方は<Link href="/articles/night-gear">夜間装備とヘッドライト</Link>。
      </p>

      <h2 id="sound">音の出し方 — 鈴より人の声</h2>
      <ul>
        <li>
          <strong>定期的に話し声を出す</strong>:
          鈴は山林で吸収されやすく、夜間は遠くに届きにくい。
          人の話し声は最も「人間がいる」サインとして強い。
        </li>
        <li>
          <strong>ホイッスル</strong>:
          緊急時の単発用と思われがちだが、5 分に 1 回吹くだけでも「人間がいる」サインを継続的に出せる。
        </li>
        <li>
          <strong>ラジオ</strong>:
          ザックに小型ラジオを入れ、人の話し声番組を流しっぱなしにする。
        </li>
        <li>
          <strong>クマ鈴</strong>:
          夜間は補助。単独で頼らず、声 + 笛 + ラジオの 3 段構え推奨。
          詳しい議論は<Link href="/articles/bear-bell">クマ鈴は本当に効果がある?</Link>。
        </li>
      </ul>

      <h2 id="if-met">出会ってしまったら</h2>
      <ol>
        <li>
          <strong>動かない・走らない</strong>:
          走ると追跡を誘発する (<Link href="/articles/bear-speed">走力 — 逃げ切れない理由</Link>)。
        </li>
        <li>
          <strong>ヘッドライトを目に当てる</strong>:
          点滅で警戒を強める。
        </li>
        <li>
          <strong>低い声で話しかける</strong>:
          「人間だ」というサインを送る。叫ばない。
        </li>
        <li>
          <strong>ゆっくり後退</strong>:
          来た道に向けて。クマと正面を向いたまま。
        </li>
        <li>
          <strong>突進されたらスプレー</strong>:
          ホルスターから抜き、5m 内で 1〜2 秒の連続噴射
          (<Link href="/articles/bear-spray">使い方</Link>)。
        </li>
      </ol>

      <h2 id="tent">テント・小屋でのクマ</h2>
      <p>
        夜間のテント襲撃は、ほぼ確実に捕食目的。対応が異なります。
      </p>
      <ul>
        <li>
          <strong>音と光で大きく抵抗</strong>:
          鍋を叩く・大声を出す・ライトを点滅させる。
          静かにしているとクマは「獲物」と判断し続ける。
        </li>
        <li>
          <strong>テント内では伏せず立ち上がる</strong>:
          身を大きく見せ、複数人なら集まる。
        </li>
        <li>
          <strong>スプレーを構えて備える</strong>:
          テント内でのスプレー発射は最終手段 (自分も浴びる)。
        </li>
        <li>
          <strong>食料の保管</strong>:
          テント内に食料を持ち込まない。
          詳しくは<Link href="/articles/bear-canister">フードコンテナ・フードハングの使い方</Link>。
        </li>
      </ul>

      <h2 id="predatory">捕食型攻撃の判断</h2>
      <p>
        夜間 + 接近継続 + テント内侵入は、捕食型攻撃の典型サイン。
        この場合「死んだふり」は逆効果で、全力抵抗が生存戦略です。
      </p>
      <ul>
        <li>遠くから一直線に追跡してくる</li>
        <li>動かなくても噛み続ける・引きずろうとする</li>
        <li>テントの外側を執拗に叩く・引っ掻く</li>
      </ul>
      <p>
        該当したら全力で抵抗。詳しくは<Link href="/articles/playing-dead">死んだふりは効くのか</Link>。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "夜のテント泊はやめるべき?",
            a: (
              <>
                クマ生息地でのテント泊は完全に避ける必要はありませんが、
                <strong>食料・歯磨き粉・化粧品など匂いの強いもの</strong>はテント外のフードコンテナへ。
                テント内には水と寝具のみが原則です。山小屋利用が選べるなら山小屋を優先。
              </>
            ),
            aText:
              "完全に避ける必要はありませんが、匂いの強いものはテント外のフードコンテナへ。テント内には水と寝具のみが原則。山小屋を選べるなら優先してください。",
          },
          {
            q: "ヘッドライトの明るさはどれくらい必要?",
            a: (
              <>
                メイン 300〜500 ルーメン、サブ 100 ルーメン以上を推奨。
                バッテリー切れに備えて予備電池も。長距離山行ならリチウム電池に。
              </>
            ),
            aText:
              "メイン 300〜500 ルーメン、サブ 100 ルーメン以上を推奨。予備電池も携行し、長距離ならリチウム電池が安心です。",
          },
          {
            q: "夕方の下山で時間が遅れたら?",
            a: (
              <>
                日没前に下山できないと判断したら、無理に進まず<strong>その場でビバーク</strong>を選ぶことも検討を。
                登山道の暗闇でクマと遭遇するより、視界の効く場所での待機の方が安全な場面があります。
                家族・関係者へ連絡し、ヘッドライト + 防寒 + ホイッスル + スプレーで朝まで凌ぐ計画を。
              </>
            ),
            aText:
              "日没前に下山できないなら無理に進まず、視界の効く場所でのビバークも選択肢。家族に連絡し、ライト・防寒・ホイッスル・スプレーで朝を待つ計画を立ててください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "クマの活動ピークは薄明薄暮 (夕方〜夜明け)。",
          "ヘッドライトは広角ワイド + 遠射スポットの二段構え。",
          "鈴より人の声・ラジオ・ホイッスルの方が夜間は強い。",
          "テント・小屋への夜間侵入は捕食型攻撃の前兆。動かないより抵抗が生存戦略。",
          "夕方の下山で時間が間に合わないなら、その場でビバークも選択肢。",
        ]}
        footer="夜のクマ対策の核は「予防」。早朝・夕方の山行を可能な限り避けるのが最大の安全策です。"
      />
    </ArticleShell>
  );
}
