import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-speed")!;

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
        <strong>結論</strong>: クマの最高速度は<strong>ツキノワグマで時速約 40km、
        ヒグマで時速約 50km</strong>。
        短い距離での速さは人間の全力疾走を上回り、トレーニングを積んだ陸上選手でも逃げ切れません。
        坂・斜面・障害物でもクマの方が速い。だから「逃げる」は対策ではなく、
        「逃げない」が最初の選択肢になります。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            最高速度はツキノワグマ<strong>約40km/h</strong>、ヒグマ<strong>約50km/h</strong>。陸上選手でも逃げ切れない。
          </>,
          <>
            <strong>坂・斜面・水中・木登り</strong>でもクマの方が速い。逃げ場はない。
          </>,
          <>
            だから「逃げる」は対策にならない。<strong>「逃げない」が最初の選択肢</strong>になる。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "speed", title: "クマはどれくらい速いのか" },
          { id: "vs-human", title: "人間と比較すると" },
          { id: "why-fast", title: "なぜそんなに速いのか — 体格と筋力" },
          { id: "terrain", title: "坂・斜面・水・木では?" },
          { id: "what-to-do", title: "「逃げない」が正解な理由" },
          { id: "exception", title: "走る場面が許されるか" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="speed">クマはどれくらい速いのか</h2>
      <ul>
        <li>
          <strong>ツキノワグマ</strong>: 最高速度時速 40〜45km。
          短い距離なら全力で走れます。
        </li>
        <li>
          <strong>ヒグマ (北海道のエゾヒグマ・北米のグリズリー)</strong>:
          最高速度時速 50〜55km。短距離なら馬に近いスピード。
        </li>
      </ul>
      <p>
        いずれも短い距離での瞬間的な速さですが、人間が走って逃げ切れる相手ではありません。
      </p>

      <h2 id="vs-human">人間と比較すると</h2>
      <ul>
        <li>
          <strong>一般成人の最高速度</strong>:
          時速 20〜25km (短距離全力疾走)。
        </li>
        <li>
          <strong>市民ランナーの巡航速度</strong>:
          時速 12〜15km (5km レースペース)。
        </li>
        <li>
          <strong>陸上世界記録</strong>:
          ウサイン・ボルトの 100m 世界記録 (9.58 秒) は平均で時速約 37.6km、瞬間最高で約 44.7km。
          これは世界最速の人の記録で、一般の人はずっと遅い。
        </li>
      </ul>
      <p>
        つまり <strong>「人間は走ってクマから逃げ切れない」</strong> が結論です。
        詳細な対処は<Link href="/articles/encounter">遭遇したらどうする</Link>を参照。
      </p>

      <h2 id="why-fast">なぜそんなに速いのか — 体格と筋力</h2>
      <p>
        クマは見た目以上にスポーツ生物です。
      </p>
      <ul>
        <li>
          <strong>体重</strong>: ツキノワグマ 80〜120kg、ヒグマ 150〜400kg。
          筋肉量はオオカミやシカを上回ります。
        </li>
        <li>
          <strong>後肢の力</strong>: 筋肉が発達しており、斜面を駆け上がる加速も強い。
        </li>
        <li>
          <strong>重心が低い</strong>: 走行時の安定性が高く、急停止・急旋回が可能。
        </li>
      </ul>

      <h2 id="terrain">坂・斜面・水・木では?</h2>
      <p>
        「下りなら逃げ切れる」「水に入れば逃げ切れる」「木に登れば逃げ切れる」 —
        いずれも誤った俗信です。
      </p>
      <ul>
        <li>
          <strong>下り坂</strong>:
          人間は重心が前に流れて転倒リスクが上がる。クマは前後の脚長差をうまく使って下りに強い。
        </li>
        <li>
          <strong>上り坂</strong>:
          人間は脚力で大きく落ちる。クマは強い後肢でほぼ平地と同じ速度で上れる。
        </li>
        <li>
          <strong>水</strong>:
          クマは泳ぎが上手で、湖や川を数 km 渡る個体もいます。
        </li>
        <li>
          <strong>木登り</strong>:
          ツキノワグマは木登りが得意で、子グマも高い木にすばやく登ります。
          ヒグマも若い個体は登れる。木に登っても安全ではありません。
        </li>
      </ul>

      <h2 id="what-to-do">「逃げない」が正解な理由</h2>
      <p>
        走力データを踏まえると、選ぶべき行動は逆説的に絞られます。
      </p>
      <ol>
        <li>
          <strong>背中を見せて走らない</strong>:
          走り出した瞬間に「捕食動機」を刺激します。クマは動くものを追う習性が強い。
        </li>
        <li>
          <strong>正面を向いたまま、ゆっくり後退</strong>:
          静かにエリアから離れる。
        </li>
        <li>
          <strong>距離が近ければスプレーを構える</strong>:
          スプレーは秒で発射でき、走力差を埋められる唯一の対策です。
          詳細は<Link href="/articles/bear-spray">クマよけスプレーの使い方</Link>。
        </li>
        <li>
          <strong>突進されたらまずスプレー</strong>:
          接触が避けられないときは、うつ伏せになって両手で首の後ろを守る
          (<Link href="/articles/playing-dead">死んだふりは効くのか</Link>を参照)。
        </li>
      </ol>

      <h2 id="exception">走る場面が許されるか</h2>
      <p>
        「走ってもよい」のは、次の限定された状況だけです。
      </p>
      <ul>
        <li>
          <strong>クマが完全にこちらに気づいておらず、隠れて立ち去る余裕がある</strong>:
          静かに、走らず、すばやく後退。クマの視覚は人間と同程度なので、
          動かなければ気づかれにくい。
        </li>
        <li>
          <strong>すぐ近くに堅固な建物・車があり、走れば数秒で入れる場合のみ</strong>:
          ドアを閉められる範囲。屋外で長距離は無意味。
        </li>
      </ul>
      <p>
        基本姿勢は「走らない」です。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "クマは長距離も速いの? それとも短距離だけ?",
            a: (
              <>
                短い距離なら最高速度に近い速さで走れます。長い距離をどれくらいの速さで走り続けられるかは
                はっきりしたデータが少ないものの、短い距離の速さだけでも人間が走って逃げ切れる相手ではありません。
              </>
            ),
            aText:
              "短い距離なら最高速度に近い速さで走れます。長い距離のデータは少ないものの、短い距離の速さだけでも人間が走って逃げ切れる相手ではありません。",
          },
          {
            q: "車には逃げ切れる?",
            a: (
              <>
                時速 50km 以上で巡航する車なら理論上は引き離せますが、
                クマが 10m 以内にいる状態から発進・加速する間に追いつかれます。
                徒歩なら無条件で間に合いません。車に乗ったらドアロック・窓閉めを最初に。
              </>
            ),
            aText:
              "車が時速 50km 以上で巡航中なら引き離せますが、近距離からの加速中は追いつかれます。乗ったらドアロックと窓閉めを最初に行ってください。",
          },
          {
            q: "山で背を向けて走り出してしまったが、撃退できた事例もある?",
            a: (
              <>
                逃げ切れた事例がまったくないわけではありません。
                ただし走って逃げるとかえって追いかけられやすく、
                「逃げ切れた事例」を根拠に走り出すのは避けてください。
              </>
            ),
            aText:
              "稀な成功例はありますが、走って逃げるとかえって追いかけられやすく、走り出すべきではありません。",
          },
          {
            q: "走力を考えると、結局何が一番効くの?",
            a: (
              <>
                走力差は埋まらないので、対策の主軸は「遭遇しない (鈴・声・複数人)」と
                「至近距離になっても秒で抜けるスプレー」の 2 本柱です。
                走って逃げる選択肢は最初から除外してください。
              </>
            ),
            aText:
              "走力差は埋まらないため、対策は遭遇予防 (鈴・声・複数人) とスプレー携行の 2 本柱が中心です。走って逃げる選択肢は除外してください。",
          },
        ]}
      />
    </ArticleShell>
  );
}
