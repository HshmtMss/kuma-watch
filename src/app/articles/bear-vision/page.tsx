import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-vision")!;

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
        「クマは目が悪い」とよく言われますが、これは半分正しく半分間違いです。
        確かに視力 (解像度) は人間の <strong>0.3〜0.5 程度</strong> しかありませんが、
        色覚は哺乳類としては良好で、夜間の感度は人間の数倍。
        さらに「動くもの」への感度は高く、20m 先の人の動きは確実に捉えています。
        本記事では獣医眼科学の視点で、クマの視覚機能と、遭遇時の行動への応用を解説します。
      </p>

      <ArticleToc
        items={[
          { id: "acuity", title: "視力 — 解像度は人間の半分以下" },
          { id: "color", title: "色覚 — 哺乳類としては良好" },
          { id: "night", title: "夜間視 — タペタムが光を増幅" },
          { id: "motion", title: "動体視力 — 動くものは見逃さない" },
          { id: "binocular", title: "両眼視野と距離感" },
          { id: "behavior", title: "視覚から導く遭遇時の対処" },
          { id: "vet", title: "獣医眼科学の補足" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="acuity">視力 — 解像度は人間の半分以下</h2>
      <p>
        クマの視力 (視角解像度・visual acuity) は、行動実験や眼球解剖から推定されている範囲で
        <strong>0.3〜0.5 程度</strong>と考えられています。これは人間の正常視力 1.0 の半分以下。
        近距離 (10〜20m) はある程度はっきり見えますが、50m 先の細部を識別するのは難しいレベルです。
      </p>
      <p>
        理由は次の通り。
      </p>
      <ul>
        <li>
          網膜の<strong>錐体細胞 (cone) 密度</strong>が低い (人間の中心窩ほど集中していない)
        </li>
        <li>
          中心窩 (fovea) に相当する高解像領域が比較的小さい
        </li>
        <li>
          眼球は大きいが、レンズの焦点距離と網膜サイズの比率が解像に最適化されていない
        </li>
      </ul>
      <p>
        つまり、クマは「世界を高解像度で見る」ようには設計されていません。
        代わりに「動きを検知する」「暗闇で見る」方向に特化しています。
      </p>

      <h2 id="color">色覚 — 哺乳類としては良好</h2>
      <p>
        多くの哺乳類は<strong>二色型色覚 (青と緑) </strong>ですが、
        クマは行動実験で<strong>赤系統も識別できる</strong>ことが示唆されており、
        三色型に近い色覚を持つ可能性があります。
      </p>
      <ul>
        <li>網膜には<strong>S (青)・M (緑) の 2 種類の錐体</strong>が確認されている</li>
        <li>L (赤) 錐体の有無は議論があるが、行動実験では赤の弁別が可能</li>
        <li>果実の熟度 (緑 → 赤) を見分ける必要性が、色覚の進化を促したと考えられる</li>
      </ul>
      <p>
        したがって、登山者が「鮮やかな赤や黄色の服を着ればクマに気付かれやすい」というのは
        ある程度の根拠があります (ただし鮮やかすぎる色はクマの興味を引く可能性も)。
      </p>

      <h2 id="night">夜間視 — タペタムが光を増幅</h2>
      <p>
        クマの目の最大の特徴は<strong>タペタム (tapetum lucidum)</strong> という反射層です。
        網膜の裏側にある反射板状の組織で、入射光を 2 回網膜に通過させることで光感度を高めます。
        夜間にクマの目がライトに照らされて<strong>光って見える</strong>のはこのタペタムの反射です。
      </p>
      <p>
        タペタムのおかげで、クマは<strong>人間の 5〜7 倍の感度</strong>で夜間視できます。
        満月の明るさ (0.1 lux) でも色の判別はできないものの、シルエットと動きは十分捉えられます。
      </p>
      <p>
        ただしタペタムがあると、その分「鮮明さ」は犠牲になります (光が網膜内で散乱するため)。
        クマの夜間視は<strong>「明るさ感度は高いが解像度は低い」</strong>というトレードオフです。
      </p>

      <h2 id="motion">動体視力 — 動くものは見逃さない</h2>
      <p>
        静止物の認識は弱いクマですが、<strong>動くものへの感度は極めて高い</strong>です。
        網膜の周辺視野 (peripheral vision) に動き検知に特化した神経回路があり、
        20m 以上離れた人の歩行・腕の動き・服の揺れを瞬時に捉えます。
      </p>
      <p>
        この特性は、遭遇時の対処に直接関係します。
      </p>
      <ul>
        <li>急に走ると<strong>追跡本能を刺激</strong>する</li>
        <li>大きく腕を振り回すと<strong>威嚇と認識</strong>される</li>
        <li>静止していると<strong>「目立たない物体」として認識される</strong>可能性</li>
      </ul>
      <p>
        「クマは目が悪いから動かなければ気付かれない」という民間伝承には、
        実は <strong>動体視力中心の視覚特性</strong> という生理学的根拠があります。
      </p>

      <h2 id="binocular">両眼視野と距離感</h2>
      <p>
        クマの眼は頭部の前方やや側面にあり、両眼視野 (両目で同時に見える範囲) は
        <strong>約 60〜80 度</strong>。人間 (約 120 度) より狭く、奥行きの判定は弱いです。
      </p>
      <p>
        片目の単眼視野は左右合わせて約 250〜280 度と広く、後方を除く周囲のほぼ全域をカバー。
        これは <strong>「ちらっと見るための広い視野」と「狙うための狭い両眼視」</strong>
        のバランスで、捕食行動と警戒行動の両方に有利な配置です。
      </p>

      <h2 id="behavior">視覚から導く遭遇時の対処</h2>
      <p>
        クマの視覚特性を踏まえると、次の対処原則が生理学的に裏付けられます。
      </p>
      <ol>
        <li>
          <strong>急な動作を避ける</strong>: 動体視力に反応されて追跡される
        </li>
        <li>
          <strong>視線を逸らさない (相手の動きを把握)</strong>: ただし<strong>「睨みつける」は威嚇</strong>と取られるので注意
        </li>
        <li>
          <strong>明るい色の服</strong>: 識別されやすく、回避行動を取られやすい
        </li>
        <li>
          <strong>夜間は明るいヘッドランプ</strong>: クマの目をくらませ、自分の方向認識を助ける
        </li>
        <li>
          <strong>静止することで姿を隠す</strong>: 解像度の低さを利用 (ただし接近されたら逆効果)
        </li>
      </ol>
      <p>
        詳しい遭遇時の対応は <Link href="/articles/encounter">クマに遭遇したらどうする</Link> を参照。
      </p>

      <h2 id="vet">獣医眼科学の補足</h2>
      <p>
        野生のクマに眼科疾患が見られる事例は多くはありませんが、次のような病気が報告されています。
      </p>
      <ul>
        <li>
          <strong>白内障</strong>: 老齢個体で水晶体の混濁。視力低下した個体は人里に下りやすくなる可能性
        </li>
        <li>
          <strong>角膜潰瘍</strong>: 喧嘩や枝の擦過による
        </li>
        <li>
          <strong>網膜剥離</strong>: 高エネルギーの外傷で稀に
        </li>
        <li>
          <strong>結膜炎</strong>: 細菌・ウイルス感染
        </li>
      </ul>
      <p>
        動物園・野生救護施設での治療事例から、クマも基本的な眼科治療 (点眼・手術) が可能であることが分かっています。
        野生個体については治療介入の倫理的な議論が続きますが、保全医学の発展は注目されている分野です。
      </p>

      <ArticleFaq
        items={[
          {
            q: "夜間にクマの目を懐中電灯で照らすと逃げる？",
            a: "光が強いと一時的に視覚を奪われ動きが止まることはあります。ただし、追い払う効果は限定的で、近距離では刺激として攻撃を誘発する可能性も。基本は遠距離からの照射に留める。",
            aText: "光が強いと一時的に視覚を奪われ動きが止まることはあります。ただし、追い払う効果は限定的で、近距離では刺激として攻撃を誘発する可能性も。基本は遠距離からの照射に留める。",
          },
          {
            q: "迷彩服 vs 蛍光色、どちらが安全？",
            a: "「クマに気付かれて回避してもらう」目的なら蛍光色が有利。迷彩は鳥獣監視・狩猟用で、クマ対策では逆効果になる可能性があります。",
            aText: "「クマに気付かれて回避してもらう」目的なら蛍光色が有利。迷彩は鳥獣監視・狩猟用で、クマ対策では逆効果になる可能性があります。",
          },
          {
            q: "サングラスをかけているクマと目を合わせない方がいい？",
            a: "クマの視覚行動学では、長時間の見つめ合いは威嚇と解釈されます。視認しつつも視線は柔らかく、相手の動きを目視で追う程度に。",
            aText: "クマの視覚行動学では、長時間の見つめ合いは威嚇と解釈されます。視認しつつも視線は柔らかく、相手の動きを目視で追う程度に。",
          },
          {
            q: "ドローンの映像をクマは認識する？",
            a: "高高度 (50m 以上) では認識されない場合が多いですが、近距離ではモーター音と動きで警戒。クマ調査ではドローン高度の選択が重要なテーマです。",
            aText: "高高度 (50m 以上) では認識されない場合が多いですが、近距離ではモーター音と動きで警戒。クマ調査ではドローン高度の選択が重要なテーマです。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-senses">クマの感覚 — 嗅覚・聴覚・視覚 概論</Link> /{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link> /{" "}
        <Link href="/articles/night-encounter">夜間遭遇の対処</Link>
      </p>
    </ArticleShell>
  );
}
