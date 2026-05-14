import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-fat-metabolism")!;

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
        秋のクマが「異常な食欲」を示すのは、生理学的にもれっきとした現象です。
        この時期、ヒグマは 1 日 <strong>2 万 kcal 以上</strong> を摂取し、体重を <strong>25〜35% 増やします</strong>。
        満腹中枢が一時的に機能停止し、ホルモン制御によって「食べ続けるモード」に入る — これが
        <strong>ハイパーフェイジア (hyperphagia)</strong>と呼ばれる状態です。
        本記事では獣医生理学の視点で、クマの脂肪蓄積メカニズムと、人里への出没リスクとの関係を解説します。
      </p>

      <ArticleToc
        items={[
          { id: "hyperphagia", title: "ハイパーフェイジアとは" },
          { id: "leptin", title: "レプチン抵抗性 — 満腹中枢が機能しない" },
          { id: "ghrelin", title: "グレリンと食欲ホルモン" },
          { id: "lipogenesis", title: "脂肪蓄積のメカニズム" },
          { id: "hibernation", title: "冬眠中の脂肪燃焼の謎" },
          { id: "climate", title: "気候変動と出没の関係" },
          { id: "human-health", title: "人間の医学にも影響を与える研究" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="hyperphagia">ハイパーフェイジアとは</h2>
      <p>
        ハイパーフェイジア (hyperphagia) は「過食症」と直訳されますが、クマの場合は<strong>進化的に組み込まれた正常な生理現象</strong>です。
        毎年 8〜11 月、冬眠前の 2〜3 か月にわたって極端な過食が起こります。
      </p>
      <ul>
        <li>1 日の摂取カロリー: 2,000〜<strong>20,000 kcal</strong> (種・体格による)</li>
        <li>1 日の摂取量: 体重の 5〜15%</li>
        <li>体重増加: 期間中で <strong>25〜35%</strong> (個体によっては 50% 以上)</li>
        <li>主な食物: 堅果類 (ブナ・ナラ・クリ) / 果実 (ヤマブドウ・コクワ・サルナシ) / 魚 (サケ) / 昆虫</li>
      </ul>
      <p>
        重要なのは、これが単なる「食欲が増した」のではなく、
        <strong>ホルモン制御で「満腹を感じなくなる」生理状態</strong>であるという点です。
      </p>

      <h2 id="leptin">レプチン抵抗性 — 満腹中枢が機能しない</h2>
      <p>
        <strong>レプチン (leptin)</strong> は脂肪細胞が分泌するホルモンで、
        視床下部の満腹中枢に「もう脂肪は十分」というシグナルを送ります。
        通常、体脂肪が増えるとレプチン濃度が上がり、食欲が抑制される — これがフィードバック制御です。
      </p>
      <p>
        ところがクマのハイパーフェイジア期では、<strong>レプチン濃度は上昇するのに食欲が抑えられない</strong>
        という<strong>「レプチン抵抗性」</strong>状態が観察されています。
      </p>
      <ul>
        <li>視床下部のレプチン受容体感受性が低下</li>
        <li>レプチンのシグナル伝達経路 (JAK2/STAT3) が一時的に抑制される</li>
        <li>結果として、いくら食べても「満腹」を感じない</li>
      </ul>
      <p>
        この状態は人間の肥満におけるレプチン抵抗性と類似していますが、
        クマでは<strong>季節性・可逆的</strong>に起こる点が特徴です。
      </p>

      <h2 id="ghrelin">グレリンと食欲ホルモン</h2>
      <p>
        <strong>グレリン (ghrelin)</strong> は胃から分泌され、空腹感を高めるホルモン (「お腹が空く」シグナル)。
        ハイパーフェイジア期にはグレリン濃度も高く、食物探索行動を強く促進します。
      </p>
      <ul>
        <li>レプチン抵抗性 + グレリン高値 → 食べ続けるモード</li>
        <li>食物が豊富な年は短期間で目標体重に達し、人里への出没が減る</li>
        <li>凶作年は食物探索範囲を広げざるを得ず、市街地まで降りてくる</li>
      </ul>
      <p>
        この「凶作年の出没増加」は、ホルモン制御による行動圏拡大として生理学的に説明できます。
      </p>

      <h2 id="lipogenesis">脂肪蓄積のメカニズム</h2>
      <p>
        過食したカロリーは<strong>白色脂肪細胞 (white adipose tissue)</strong> に中性脂肪として蓄えられます。
        クマの脂肪細胞は人間より大きく、より多くの脂質を蓄えられるよう進化的に最適化されています。
      </p>
      <ul>
        <li>主な蓄積部位: 皮下脂肪 (背中・腰・腹部)、内臓脂肪</li>
        <li>蓄積効率は人間の数倍 — 摂取カロリーの 70% 以上が脂肪として保存される</li>
        <li>同時にインスリン感受性は<strong>正常〜やや低下</strong> (人間の前糖尿病に類似)</li>
      </ul>
      <p>
        興味深いのは、クマはこれだけの脂肪を蓄えても<strong>動脈硬化を起こさない</strong>こと。
        コレステロール代謝・血管保護因子の研究は、人間の生活習慣病治療への応用が期待されています。
      </p>

      <h2 id="hibernation">冬眠中の脂肪燃焼の謎</h2>
      <p>
        冬眠期 (12〜3 月) には、クマは飲まず食わずで 3〜5 か月過ごします。
        この期間、体重は 25〜40% 減少しますが、減るのは<strong>ほぼ脂肪のみ</strong>。
        筋肉量・骨量は維持されるという、人間にはありえない代謝が起きています。
      </p>
      <ul>
        <li>
          <strong>インスリン抵抗性が逆転</strong>: ハイパーフェイジア期と逆に、冬眠中は脂肪の燃焼が促進
        </li>
        <li>
          <strong>蛋白質温存</strong>: 尿素を分解・再利用して窒素を保持する独自のシステム
        </li>
        <li>
          <strong>骨量維持</strong>: 不活動でも骨吸収を抑える生化学的因子が働く (人間なら寝たきり 1 か月で骨密度低下)
        </li>
        <li>
          <strong>体温低下</strong>: 30〜35℃ まで下げてエネルギー消費を最小化
        </li>
      </ul>
      <p>
        これらの代謝制御は、宇宙飛行士の筋骨格維持研究・寝たきり高齢者の医療応用などで注目されています。
      </p>

      <h2 id="climate">気候変動と出没の関係</h2>
      <p>
        ハイパーフェイジア期の食物供給は、気候変動に強く影響を受けます。
      </p>
      <ul>
        <li>ブナ・ナラの<strong>豊凶周期</strong>は気温・降水量で変動</li>
        <li>暖冬で堅果類が早期に発芽すると秋の収量が落ちる</li>
        <li>夏の高温・少雨で果実類が不作になる</li>
        <li>結果、ハイパーフェイジア期に食物を求めて<strong>人里・市街地に出没する個体が急増</strong></li>
      </ul>
      <p>
        2025〜2026 年の全国クマ出没急増の背景にも、こうした気候変動 × 食物供給の変動が関与していると考えられます。
        詳しくは <Link href="/articles/why-increasing">なぜクマ出没が増えているのか</Link> も参照。
      </p>

      <h2 id="human-health">人間の医学にも影響を与える研究</h2>
      <p>
        クマの脂肪代謝研究は、人間の医療に直接応用できる知見を多く生んでいます。
      </p>
      <ul>
        <li>
          <strong>肥満・糖尿病</strong>: クマのレプチン抵抗性の可逆性研究は、人間の肥満治療薬開発の手がかり
        </li>
        <li>
          <strong>動脈硬化</strong>: 高脂肪状態でも血管が健全な仕組みの解明
        </li>
        <li>
          <strong>骨粗鬆症</strong>: 不活動下での骨量維持因子の発見
        </li>
        <li>
          <strong>腎臓病</strong>: 尿素再利用システムは慢性腎不全患者の治療応用へ
        </li>
      </ul>
      <p>
        獣医学・野生動物学の枠を超え、ヒト医学への波及効果が大きい研究領域です。
      </p>

      <ArticleFaq
        items={[
          {
            q: "クマは「食べすぎて気持ち悪くなる」ことはないの？",
            a: "嘔吐反射はありますが、ハイパーフェイジア期は閾値が高くなるため大量摂取しても吐かない。ただし腐肉・毒キノコを大量に食べた個体での吐血・下痢は報告あり。",
            aText: "嘔吐反射はありますが、ハイパーフェイジア期は閾値が高くなるため大量摂取しても吐かない。ただし腐肉・毒キノコを大量に食べた個体での吐血・下痢は報告あり。",
          },
          {
            q: "冬眠中はトイレに行かないの？",
            a: "はい。腎臓で生成された尿素は腸に戻して再利用 (尿素サイクル)、便は腸内で固化させて貯留。春に出るまで排泄は最小限。",
            aText: "はい。腎臓で生成された尿素は腸に戻して再利用 (尿素サイクル)、便は腸内で固化させて貯留。春に出るまで排泄は最小限。",
          },
          {
            q: "暖冬で冬眠しない「穴持たず」が増えている？",
            a: "気温上昇・食物環境の変化で冬眠を完全には行わない個体が観察されています。徘徊と人身被害の冬季リスクが上がる懸念があります。",
            aText: "気温上昇・食物環境の変化で冬眠を完全には行わない個体が観察されています。徘徊と人身被害の冬季リスクが上がる懸念があります。",
          },
          {
            q: "ハイパーフェイジア期のクマに会わないコツは？",
            a: "堅果類の豊凶情報 (環境省・林野庁が発表) をチェックし、凶作年は山林・果樹園周辺を避ける。トップマップで地域の出没を確認するのも有効。",
            aText: "堅果類の豊凶情報 (環境省・林野庁が発表) をチェックし、凶作年は山林・果樹園周辺を避ける。トップマップで地域の出没を確認するのも有効。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/autumn">秋のクマ対策 — なぜ秋が最も危険なのか</Link> /{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠の科学</Link> /{" "}
        <Link href="/articles/why-increasing">なぜクマ出没が増えているのか</Link>
      </p>
    </ArticleShell>
  );
}
