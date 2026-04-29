import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("cub-handling")!;

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
        <strong>結論</strong>: 山中で子グマを単独で見ることはあり得ません。<strong>必ず近くに母グマがいる</strong>。
        母グマは子を守るため最も攻撃的になる個体で、人身事故の代表的なパターン。
        子グマを見たら 0.5 秒で「立ち去る」判断を。撫でる・写真を撮るは絶対 NG。
      </p>

      <ArticleToc
        items={[
          { id: "alone", title: "「子グマだけ」は存在しない" },
          { id: "where-mother", title: "母グマはどこにいる?" },
          { id: "leave", title: "立ち去り方" },
          { id: "never-do", title: "絶対にやってはいけないこと" },
          { id: "report", title: "通報するべきか" },
          { id: "orphan", title: "明らかに親が居なさそうな場合" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="alone">「子グマだけ」は存在しない</h2>
      <p>
        山中で 1 才以下の子グマを見たとき、それが「単独行動」している可能性は限りなくゼロに近い。
        ツキノワグマもヒグマも、子グマは 1.5〜2 年間母親と行動を共にします。
        つまり子グマが見える場所には、確実に母グマもいる。
      </p>
      <p>
        子グマだけが視野に入っているのは、「母グマが死角にいる」「母グマが人間をすでに察知して構えている」のいずれかです。
        どちらにせよ、人間にとっては最高度の危険状態です。
      </p>

      <h2 id="where-mother">母グマはどこにいる?</h2>
      <p>
        母グマの位置として典型的なパターン:
      </p>
      <ul>
        <li>
          <strong>子グマの背後の藪</strong>:
          子グマが見える方向から数 m〜数十 m 後ろに母グマがいる
        </li>
        <li>
          <strong>子グマと人間の中間</strong>:
          人間と子グマの間に母グマがいて、警告姿勢で待機していることがある
        </li>
        <li>
          <strong>樹上</strong>:
          特に子グマが小さい場合、樹上にいることもある (滑り降りてくる速度は速い)
        </li>
        <li>
          <strong>沢の死角・斜面の陰</strong>:
          視覚的に見えない位置で待機している場合
        </li>
      </ul>
      <p>
        母グマがどこにいるか特定できないまま行動するため、「どこにいてもおかしくない」前提で動く必要があります。
      </p>

      <h2 id="leave">立ち去り方</h2>
      <ol>
        <li>
          <strong>動きを止め、子グマと反対方向を確認</strong>
          (母グマの位置を視認できれば最重要情報)
        </li>
        <li>
          <strong>子グマに正面を向けたまま、ゆっくり後退</strong>
          (背中を見せて走るのは絶対 NG)
        </li>
        <li>
          <strong>音を出さない</strong>:
          母グマの注意を引きたくない。ホイッスル・大声は逆効果のケースが多い
        </li>
        <li>
          <strong>子グマの視界から消える距離まで離れる</strong>
          (子グマが鳴き声を上げると母グマが即反応する)
        </li>
        <li>
          <strong>距離を取った後、迂回ルートで通過</strong>
          (同じルートに戻らない)
        </li>
      </ol>

      <h2 id="never-do">絶対にやってはいけないこと</h2>
      <ul>
        <li>
          <strong>写真を撮る・SNS で共有しようとする</strong>: 母グマは即攻撃に転じます
        </li>
        <li>
          <strong>近づく・触る</strong>: 子グマが鳴き声を上げただけで母グマが突進
        </li>
        <li>
          <strong>子グマと自分の間に何かを置く・捕まえる</strong>: 母グマの直接攻撃を誘発
        </li>
        <li>
          <strong>食べ物を与える</strong>: クマの人慣れを悪化させ、地域全体への危険を増加
        </li>
        <li>
          <strong>背中を見せて走る</strong>: 母グマの追跡本能を刺激
        </li>
      </ul>

      <h2 id="report">通報するべきか</h2>
      <p>
        住宅地・通学路・キャンプ場周辺など、人の活動圏で子グマを見かけた場合は速やかに通報してください。
      </p>
      <ul>
        <li>市町村の鳥獣対策窓口 (役所が開いている時間帯)</li>
        <li>警察 (110 番) — 緊急性が高い、住宅地等の場合</li>
        <li>自治体のクマ目撃通報フォーム (オンライン)</li>
        <li>KumaWatch の <Link href="/submit">投稿フォーム</Link> (二次的な共有)</li>
      </ul>
      <p>
        通報時は「子連れの母グマがいる可能性が高い」と必ず添えること。母グマがどこにいるかは特定できなくても、構えで対応を変えてもらえます。
      </p>

      <h2 id="orphan">明らかに親が居なさそうな場合</h2>
      <p>
        母グマが既に死亡 (交通事故・捕獲) している場合、子グマが孤立することがあります。
        ただし山中で「孤立かどうか」を素人が判断するのは非常に難しい。
        「弱っている子グマを保護したい」と近づくのは、結果として母グマの逆襲を招くか、捕獲したクマが法律違反になる場合があります。
      </p>
      <p>
        孤立が疑われる場合でも、自治体の鳥獣対策窓口・野生動物保護センターへ連絡し、専門家の判断を仰いでください。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "可愛い子グマの写真を撮るくらいなら大丈夫?",
            a: (
              <>
                絶対 NG です。子グマが鳴き声を上げる、母グマが視認した瞬間に攻撃に転じます。クマ襲撃事故のかなりの割合がこのパターンで発生しています。
              </>
            ),
            aText:
              "絶対 NG です。子グマが鳴き声を上げる、母グマが視認した瞬間に攻撃に転じます。クマ襲撃事故のかなりの割合がこのパターンで発生しています。",
          },
          {
            q: "子グマが鳴いていても無視すべき?",
            a: (
              <>
                はい。鳴き声に近づくのは最も危険です。母グマが反応してすぐ駆けつけます。「鳴き声が聞こえる方向と反対」へ離脱してください。
              </>
            ),
            aText:
              "はい。鳴き声に近づくのは最も危険です。母グマが反応してすぐ駆けつけます。鳴き声が聞こえる方向と反対へ離脱してください。",
          },
          {
            q: "子グマが車道に出てきたらどうする?",
            a: (
              <>
                車のなかに留まり、ハザードを点滅させてゆっくり離れてください。クラクションも母グマを刺激する可能性があるので最小限に。発見した直後に車外に出るのは最も危険です。
              </>
            ),
            aText:
              "車のなかに留まり、ハザードを点滅させてゆっくり離れてください。クラクションも母グマを刺激する可能性があるので最小限に。発見した直後に車外に出るのは最も危険です。",
          },
          {
            q: "子グマを抱いて保護したくなるが…",
            a: (
              <>
                絶対にやめてください。母グマの即時攻撃を招くだけでなく、孤立した個体でも野生動物の捕獲は鳥獣保護法に抵触します。「保護したい」場合でも、まず自治体の鳥獣対策窓口に通報してください。
              </>
            ),
            aText:
              "絶対にやめてください。母グマの即時攻撃を招くだけでなく、孤立した個体でも野生動物の捕獲は鳥獣保護法に抵触します。保護したい場合でも、まず自治体の鳥獣対策窓口に通報してください。",
          },
        ]}
      />
    </ArticleShell>
  );
}
